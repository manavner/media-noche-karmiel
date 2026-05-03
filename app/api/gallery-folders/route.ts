import { NextResponse } from 'next/server';

const API_KEY = process.env.GOOGLE_DRIVE_API_KEY;
const FOLDER_ID = process.env.GALLERY_FOLDER_ID;

export type GalleryFolder = {
  id: string;
  name: string;
  createdTime: string;
};

export async function GET() {
  if (!API_KEY || !FOLDER_ID) {
    return NextResponse.json({ folders: [] });
  }

  try {
    const query = encodeURIComponent(
      `'${FOLDER_ID}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`
    );
    const fields = encodeURIComponent('files(id,name,createdTime)');
    const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${API_KEY}&fields=${fields}&pageSize=100&orderBy=createdTime desc`;

    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return NextResponse.json({ folders: [] });

    const data = await res.json();
    const folders: GalleryFolder[] = (data.files ?? []).map(
      (f: { id: string; name: string; createdTime: string }) => ({
        id: f.id,
        name: f.name,
        createdTime: f.createdTime,
      })
    );

    return NextResponse.json({ folders });
  } catch {
    return NextResponse.json({ folders: [] });
  }
}

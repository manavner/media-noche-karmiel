import { NextResponse } from 'next/server';

const API_KEY = process.env.GOOGLE_DRIVE_API_KEY;
const ROOT_FOLDER_ID = process.env.GALLERY_FOLDER_ID;

export type GalleryItem = {
  id: string;
  name: string;
  type: 'image' | 'video';
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folderId = searchParams.get('folderId') ?? ROOT_FOLDER_ID;

  if (!API_KEY || !folderId) {
    return NextResponse.json({ items: [] });
  }

  try {
    const query = encodeURIComponent(
      `'${folderId}' in parents and (mimeType contains 'image/' or mimeType contains 'video/') and trashed = false`
    );
    const fields = encodeURIComponent('files(id,name,mimeType)');
    const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${API_KEY}&fields=${fields}&pageSize=200&orderBy=createdTime desc`;

    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return NextResponse.json({ items: [] });

    const data = await res.json();
    const files: { id: string; name: string; mimeType: string }[] = data.files ?? [];

    const items: GalleryItem[] = files.map((f) => ({
      id: f.id,
      name: f.name,
      type: f.mimeType.startsWith('video/') ? 'video' : 'image',
    }));

    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ items: [] });
  }
}

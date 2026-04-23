import { NextResponse } from 'next/server';

const FOLDER_ID = process.env.HERO_IMAGES_FOLDER_ID;
const API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

export async function GET() {
  if (!API_KEY || !FOLDER_ID) {
    return NextResponse.json({ images: [] }, { status: 200 });
  }

  try {
    const query = encodeURIComponent(`'${FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`);
    const fields = encodeURIComponent('files(id,name)');
    const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${API_KEY}&fields=${fields}&pageSize=50`;

    const res = await fetch(url, { next: { revalidate: 300 } });

    if (!res.ok) {
      return NextResponse.json({ images: [] }, { status: 200 });
    }

    const data = await res.json();
    const files: { id: string }[] = data.files ?? [];

    const images = files.map(
      (f) => `/api/drive-image/${f.id}`
    );

    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] }, { status: 200 });
  }
}

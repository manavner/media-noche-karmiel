import { NextResponse } from 'next/server';

const FOLDER_ID = process.env.HERO_IMAGES_FOLDER_ID;
const API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

type DriveFile = { id: string; mimeType: string };
type HeroItem = { url: string; type: 'image' | 'video' };

async function queryDrive(mimeFilter: string): Promise<DriveFile[]> {
  const query = encodeURIComponent(
    `'${FOLDER_ID}' in parents and mimeType contains '${mimeFilter}' and trashed = false`
  );
  const fields = encodeURIComponent('files(id,mimeType)');
  const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${API_KEY}&fields=${fields}&pageSize=50`;
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.files ?? [];
}

export async function GET() {
  if (!API_KEY || !FOLDER_ID) {
    return NextResponse.json({ items: [], images: [] }, { status: 200 });
  }

  try {
    const [imageFiles, videoFiles] = await Promise.all([
      queryDrive('image/'),
      queryDrive('video/'),
    ]);

    const items: HeroItem[] = [
      ...imageFiles.map((f) => ({ url: `/api/drive-image/${f.id}`, type: 'image' as const })),
      ...videoFiles.map((f) => ({ url: `/api/drive-image/${f.id}`, type: 'video' as const })),
    ];

    // Keep legacy `images` field for backwards compat
    const images = imageFiles.map((f) => `/api/drive-image/${f.id}`);

    return NextResponse.json({ items, images });
  } catch {
    return NextResponse.json({ items: [], images: [] }, { status: 200 });
  }
}

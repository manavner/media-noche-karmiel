import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!API_KEY || !id) {
    return new NextResponse('Not found', { status: 404 });
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return new NextResponse('Failed to fetch image', { status: res.status });
    }

    const contentType = res.headers.get('content-type') ?? 'image/jpeg';
    const buffer = await res.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch {
    return new NextResponse('Error', { status: 500 });
  }
}

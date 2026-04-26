import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!API_KEY || !id) {
    return new NextResponse('Not found', { status: 404 });
  }

  try {
    const range = req.headers.get('range');
    const upstream = `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${API_KEY}`;

    const fetchHeaders: Record<string, string> = {};
    if (range) fetchHeaders['Range'] = range;

    // Do NOT use next.revalidate here — incompatible with streaming body
    const res = await fetch(upstream, { headers: fetchHeaders });

    if (!res.ok && res.status !== 206) {
      return new NextResponse('Failed to fetch', { status: res.status });
    }

    const contentType = res.headers.get('content-type') ?? 'application/octet-stream';
    const responseHeaders: Record<string, string> = {
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=3600',
    };

    const contentLength = res.headers.get('content-length');
    if (contentLength) responseHeaders['Content-Length'] = contentLength;

    const contentRange = res.headers.get('content-range');
    if (contentRange) responseHeaders['Content-Range'] = contentRange;

    // Stream the body — never buffer the whole file into memory
    return new NextResponse(res.body, {
      status: res.status,
      headers: responseHeaders,
    });
  } catch {
    return new NextResponse('Error', { status: 500 });
  }
}

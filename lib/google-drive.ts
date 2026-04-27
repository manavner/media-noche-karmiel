const API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

export interface DriveFile {
  id: string;
  name: string;
  modifiedTime: string;
}

export async function getLatestVideoFromFolder(folderId: string): Promise<DriveFile | null> {
  if (!API_KEY) return null;

  const params = new URLSearchParams({
    q: `'${folderId}' in parents and mimeType contains 'video/' and trashed = false`,
    orderBy: 'modifiedTime desc',
    pageSize: '1',
    fields: 'files(id,name,modifiedTime)',
    key: API_KEY,
  });

  try {
    const res = await fetch(
      `https://www.googleapis.com/drive/v3/files?${params}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.files?.[0] ?? null;
  } catch {
    return null;
  }
}

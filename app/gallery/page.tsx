'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { GalleryFolder } from '@/app/api/gallery-folders/route';
import type { GalleryItem } from '@/app/api/gallery-items/route';

type FolderState = {
  open: boolean;
  loading: boolean;
  items: GalleryItem[];
};

export default function GalleryPage() {
  const [folders, setFolders] = useState<GalleryFolder[]>([]);
  const [loadingFolders, setLoadingFolders] = useState(true);
  const [folderState, setFolderState] = useState<Record<string, FolderState>>({});
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    fetch('/api/gallery-folders')
      .then((r) => r.json())
      .then(({ folders: f }: { folders: GalleryFolder[] }) => setFolders(f))
      .finally(() => setLoadingFolders(false));
  }, []);

  const toggleFolder = useCallback(
    async (folder: GalleryFolder) => {
      const current = folderState[folder.id];

      // Close if already open
      if (current?.open) {
        setFolderState((prev) => ({
          ...prev,
          [folder.id]: { ...prev[folder.id], open: false },
        }));
        return;
      }

      // Open — if already loaded, just expand
      if (current?.items.length) {
        setFolderState((prev) => ({
          ...prev,
          [folder.id]: { ...prev[folder.id], open: true },
        }));
        return;
      }

      // First open — fetch items
      setFolderState((prev) => ({
        ...prev,
        [folder.id]: { open: true, loading: true, items: [] },
      }));

      const res = await fetch(`/api/gallery-items?folderId=${folder.id}`);
      const { items } = await res.json();

      setFolderState((prev) => ({
        ...prev,
        [folder.id]: { open: true, loading: false, items },
      }));
    },
    [folderState]
  );

  return (
    <main className="min-h-screen bg-dark pt-24 pb-16 px-4" dir="rtl">
      <div className="max-w-5xl mx-auto">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" aria-label="חזרה לדף הראשי">
            <Image
              src="/logo.png"
              alt="מדיה נוצ'ה כרמיאל"
              width={100}
              height={100}
              className="rounded-full hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-2">
          ספריית תמונות וסרטונים
        </h1>
        <p className="text-white/50 text-center font-body mb-12">
          רגעים מהשיעורים והמסיבות שלנו — לחץ על ערב כדי לפתוח
        </p>

        {/* Loading folders */}
        {loadingFolders && (
          <div className="flex justify-center items-center h-48">
            <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* No folders */}
        {!loadingFolders && folders.length === 0 && (
          <p className="text-center text-white/40 font-body text-lg">
            אין תמונות עדיין — נעלה בקרוב 📸
          </p>
        )}

        {/* Folder accordion list */}
        {!loadingFolders && folders.length > 0 && (
          <div className="flex flex-col gap-3">
            {folders.map((folder) => {
              const state = folderState[folder.id];
              const isOpen = state?.open ?? false;

              return (
                <div
                  key={folder.id}
                  className="rounded-xl overflow-hidden border border-white/10"
                >
                  {/* Folder header button */}
                  <button
                    onClick={() => toggleFolder(folder)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-[#1a0a0a] hover:bg-primary/30 transition-colors text-right focus:outline-none focus:ring-2 focus:ring-gold"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{isOpen ? '📂' : '📁'}</span>
                      <span className="font-display text-lg text-white">{folder.name}</span>
                    </div>
                    <span
                      className={`text-gold text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Folder contents */}
                  {isOpen && (
                    <div className="bg-[#110505] px-4 py-4">
                      {state?.loading && (
                        <div className="flex justify-center items-center h-32">
                          <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}

                      {!state?.loading && state?.items.length === 0 && (
                        <p className="text-center text-white/40 font-body py-6">
                          הספרייה ריקה
                        </p>
                      )}

                      {!state?.loading && state?.items.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                          {state.items.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => setSelected(item)}
                              className="relative aspect-square overflow-hidden rounded-lg bg-primary-dark/60 group focus:outline-none focus:ring-2 focus:ring-gold"
                            >
                              {item.type === 'image' ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                  src={`/api/drive-image/${item.id}`}
                                  alt={item.name}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  loading="lazy"
                                />
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                  <span className="text-3xl">▶️</span>
                                  <span className="text-white/60 text-xs font-body px-2 truncate w-full text-center">
                                    {item.name}
                                  </span>
                                </div>
                              )}
                              {item.type === 'video' && (
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 left-4 text-white/70 hover:text-white text-3xl font-bold z-50"
            onClick={() => setSelected(null)}
            aria-label="סגור"
          >
            ✕
          </button>

          <div
            className="max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selected.type === 'image' ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={`/api/drive-image/${selected.id}`}
                alt={selected.name}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            ) : (
              <iframe
                src={`https://drive.google.com/file/d/${selected.id}/preview`}
                className="w-full aspect-video rounded-lg"
                allow="autoplay"
                title={selected.name}
              />
            )}
          </div>
        </div>
      )}
    </main>
  );
}

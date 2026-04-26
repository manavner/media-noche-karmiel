'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { GalleryItem } from '@/app/api/gallery-items/route';

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    fetch('/api/gallery-items')
      .then((r) => r.json())
      .then(({ items }: { items: GalleryItem[] }) => setItems(items))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-dark pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <Link href="/" aria-label="חזרה לדף הראשי">
            <Image src="/logo.png" alt="מדיה נוצ'ה כרמיאל" width={100} height={100} className="rounded-full hover:opacity-80 transition-opacity" />
          </Link>
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-white text-center mb-2">
          גלריית תמונות
        </h1>
        <p className="text-white/50 text-center font-body mb-12">
          רגעים מהשיעורים והמסיבות שלנו
        </p>

        {loading && (
          <div className="flex justify-center items-center h-48">
            <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {!loading && items.length === 0 && (
          <p className="text-center text-white/40 font-body text-lg">
            אין תמונות עדיין — נעלה בקרוב 📸
          </p>
        )}

        {!loading && items.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className="relative aspect-square overflow-hidden rounded-lg bg-dark-card group focus:outline-none focus:ring-2 focus:ring-gold"
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
                  <div className="w-full h-full flex flex-col items-center justify-center bg-primary-dark/60 gap-2">
                    <span className="text-4xl">▶️</span>
                    <span className="text-white/70 text-xs font-body px-2 truncate w-full text-center">
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

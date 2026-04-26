'use client';

import { useEffect, useState } from 'react';

type HeroItem = { url: string; type: 'image' | 'video' };

export function HeroBackground() {
  const [item, setItem] = useState<HeroItem | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch('/api/hero-images')
      .then((r) => r.json())
      .then(({ items }: { items?: HeroItem[]; images?: string[] }) => {
        // Support new `items` format and legacy `images` format
        if (items && items.length > 0) {
          setItem(items[Math.floor(Math.random() * items.length)]);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      {/* Fallback gradient — always visible underneath */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-card to-primary-dark" />

      {item?.type === 'image' && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={item.url}
          src={item.url}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: visible ? 1 : 0 }}
          onLoad={() => setVisible(true)}
          onError={() => setItem(null)}
        />
      )}

      {item?.type === 'video' && (
        <video
          key={item.url}
          src={item.url}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: visible ? 1 : 0 }}
          onCanPlay={() => setVisible(true)}
          onError={() => setItem(null)}
        />
      )}

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/40" />
    </>
  );
}

'use client';

import { useEffect, useState } from 'react';

export function HeroBackground() {
  const [bgUrl, setBgUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/hero-images')
      .then((r) => r.json())
      .then(({ images }: { images: string[] }) => {
        if (images.length > 0) {
          const pick = images[Math.floor(Math.random() * images.length)];
          setBgUrl(pick);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      {/* Fallback gradient — always visible, image fades in on top */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-card to-primary-dark" />

      {/* Google Drive image — fades in once loaded */}
      {bgUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
          style={{ backgroundImage: `url('${bgUrl}')` }}
        />
      )}

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/60" />
    </>
  );
}

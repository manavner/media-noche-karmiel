// TODO(PRD3): Replace GalleryPreviewPlaceholder with CMS-managed gallery
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';

const PLACEHOLDER_TILES = [
  { label: 'מסיבות',      emoji: '🎉', span: 'md:col-span-2' },
  { label: 'שיעורים',     emoji: '💃', span: '' },
  { label: 'הופעות',      emoji: '🎭', span: '' },
  { label: 'סדנאות',      emoji: '🎓', span: '' },
  { label: 'קהילה',       emoji: '🫂', span: 'md:col-span-2' },
];

export function GalleryPreviewPlaceholder() {
  return (
    <section className="section-dark py-16">
      <div className="container-rtl">
        <SectionHeader
          title="הגלריה שלנו"
          subtitle="רגעים מהמועדון — תמונות אמיתיות יתווספו בקרוב"
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {PLACEHOLDER_TILES.map((tile, i) => (
            <div
              key={i}
              className={`${tile.span} aspect-video bg-dark-card rounded-xl border border-dark-border flex flex-col items-center justify-center gap-2 hover:border-gold/50 transition-colors`}
            >
              <span className="text-4xl">{tile.emoji}</span>
              <span className="text-white/50 text-sm">{tile.label}</span>
              {/* TODO(PRD3): Replace with real GalleryItem images */}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/40 text-sm mb-4">
            TODO(PRD3): גלריה מלאה עם תמונות אמיתיות
          </p>
          <Link
            href="/contact"
            className="inline-block border border-gold text-gold hover:bg-gold hover:text-dark px-6 py-2 rounded-lg text-sm font-bold transition-all"
          >
            צור קשר לפרטים נוספים
          </Link>
        </div>
      </div>
    </section>
  );
}

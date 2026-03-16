// TODO(PRD3): Replace mockCurriculum with Supabase + Sanity curriculum
import type { Metadata } from 'next';
import Link from 'next/link';
import { mockCurriculum } from '@/lib/mock-data/curriculum';

export const metadata: Metadata = {
  title: 'סילבוס — תוכנית הלימודים',
  description: "סילבוס מלא של מדיה נוצ'ה כרמיאל — מבסיס ועד מאסטר, עם סרטוני הדרכה לכל צעד.",
};

const LEVEL_COLORS: Record<string, string> = {
  basis:           'bg-blue-100  border-blue-400  text-blue-800',
  beginner:        'bg-green-100 border-green-400 text-green-800',
  'beginner-tech': 'bg-teal-100  border-teal-400  text-teal-800',
  intermediate:    'bg-yellow-100 border-yellow-400 text-yellow-800',
  advanced:        'bg-orange-100 border-orange-400 text-orange-800',
  master:          'bg-red-100   border-red-400   text-red-800',
};

export default function CurriculumPage() {
  return (
    <main className="section-light min-h-screen">
      <div className="container-rtl py-16">
        <h1 className="font-display text-4xl font-bold text-primary mb-2">סילבוס הצעדים</h1>
        <p className="text-gray-600 font-body mb-6">
          תוכנית הלימודים המלאה — מבסיס לחלוטין ועד רמת מאסטר. כל צעד עם סרטון הדרכה.
        </p>

        {/* בנר קטלוג צעדים חיצוני */}
        <div className="bg-dark text-white rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg font-bold text-gold mb-1">
              רוצה לראות את כל הצעדים עם סרטונים?
            </p>
            <p className="text-white/70 text-sm font-body">
              בקר בקטלוג הצעדים שלנו — חיפוש, סינון לפי רמה, וסרטון לכל צעד
            </p>
          </div>
          <a
            href="https://salsa-steps-web-kgww.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-gold text-dark hover:bg-gold/80 px-6 py-3 rounded-lg font-bold text-sm transition-all hover:scale-105 whitespace-nowrap"
          >
            לקטלוג הצעדים ←
          </a>
        </div>

        <div className="space-y-6">
          {mockCurriculum.map(level => (
            <div
              key={level.id}
              className={`rounded-xl border-2 p-6 ${LEVEL_COLORS[level.id] ?? 'bg-gray-100 border-gray-400 text-gray-800'}`}
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="font-display text-2xl font-bold">{level.nameHe}</h2>
                <Link
                  href={`/curriculum/${level.id}`}
                  className="text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors font-body"
                >
                  כל הצעדים ←
                </Link>
              </div>
              {level.prerequisites.length > 0 && (
                <p className="text-sm font-body mb-3 opacity-80">
                  דרישות קדם: {level.prerequisites.join(' | ')}
                </p>
              )}
              {/* תצוגה מקדימה — 3 קטגוריות ראשונות */}
              <div className="flex flex-wrap gap-2">
                {level.categories.slice(0, 3).map(cat => (
                  <span key={cat.id} className="text-xs bg-white/60 px-3 py-1 rounded-full font-body">
                    {cat.nameHe} ({cat.steps.length} צעדים)
                  </span>
                ))}
                {level.categories.length > 3 && (
                  <span className="text-xs bg-white/60 px-3 py-1 rounded-full font-body">
                    +{level.categories.length - 3} עוד...
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

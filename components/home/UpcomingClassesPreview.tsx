// TODO(PRD2): Replace mockClassesData prop with Supabase-backed upcoming classes query
import Link from 'next/link';
import type { SalsaClass } from '@/types';
import { SectionHeader } from '@/components/ui/SectionHeader';

const DAY_LABELS = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
const LEVEL_LABELS: Record<string, string> = {
  beginner: 'מתחילים', intermediate: 'בינוני', advanced: 'מתקדם', all: 'כולם',
};

interface Props {
  classes: SalsaClass[];
}

export function UpcomingClassesPreview({ classes }: Props) {
  return (
    <section className="section-light py-16">
      <div className="container-rtl">
        <SectionHeader
          title="השיעורים הקרובים"
          subtitle="הצטרף אלינו השבוע — כל הרמות מתקבלות בברכה"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {classes.map(cls => (
            <div
              key={cls.id}
              className="bg-white rounded-xl shadow-sm border-r-4 border-primary p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-lg font-bold text-dark">{cls.title}</h3>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                  {LEVEL_LABELS[cls.level]}
                </span>
              </div>
              <div className="flex gap-4 text-sm text-gray-500 mb-4">
                <span>📅 יום {DAY_LABELS[cls.dayOfWeek]}</span>
                <span>⏰ {cls.timeStart}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-primary">₪{cls.price} / חודש</span>
                {cls.trialAvailable && (
                  <span className="text-xs text-gold font-medium">ניסיון חינם ✓</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/classes"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors"
          >
            לכל לוח השיעורים ←
          </Link>
        </div>
      </div>
    </section>
  );
}

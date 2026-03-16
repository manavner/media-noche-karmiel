import type { SalsaClass } from '@/lib/mock-data/classes';
import Link from 'next/link';

const LEVEL_LABELS: Record<string, string> = {
  beginner: 'מתחילים', intermediate: 'בינוני', advanced: 'מתקדם', all: 'כולם',
};
const DAY_LABELS = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
const LEVEL_COLORS: Record<string, string> = {
  beginner:     'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced:     'bg-red-100 text-red-800',
  all:          'bg-blue-100 text-blue-800',
};
const STYLE_LABELS: Record<string, string> = {
  on1: 'On1', on2: 'On2', cuban: 'Cuban', rueda: 'Rueda', bachata: 'Bachata', styling: 'Styling',
};

export function ClassCard({ cls }: { cls: SalsaClass }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border-r-4 border-primary p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-display text-lg font-bold text-dark">{cls.title}</h3>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${LEVEL_COLORS[cls.level]}`}>
          {LEVEL_LABELS[cls.level]}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cls.description}</p>

      <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
        <span>📅 יום {DAY_LABELS[cls.dayOfWeek]}</span>
        <span>⏰ {cls.timeStart}–{cls.timeEnd}</span>
        <span>👤 {cls.instructor}</span>
        <span>📍 {cls.location}</span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs bg-dark/5 text-dark px-2 py-1 rounded">
          {STYLE_LABELS[cls.style]}
        </span>
        <span className="text-xs text-gray-400">עד {cls.maxStudents} תלמידים</span>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <span className="font-bold text-primary text-lg">₪{cls.price} / חודש</span>
        <div className="flex gap-2 items-center">
          {cls.trialAvailable && (
            <span className="text-xs bg-gold/20 text-yellow-800 px-2 py-1 rounded">
              ניסיון חינם ✓
            </span>
          )}
          <Link
            href="/register"
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors"
          >
            הרשם
          </Link>
        </div>
      </div>
    </div>
  );
}

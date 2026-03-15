import type { Metadata } from 'next';
import { ClassScheduleGrid } from '@/components/classes/ClassScheduleGrid';
import { SectionHeader }     from '@/components/ui/SectionHeader';
import { mockClassesData }   from '@/lib/mock-data/classes';

export const metadata: Metadata = {
  title: 'שיעורי סלסה כרמיאל',
  description: "לוח שיעורים שבועי, רמות ומחירון מלא — מדיה נוצ'ה כרמיאל.",
};

export default function ClassesPage() {
  return (
    <div className="section-light min-h-screen">
      {/* Page header */}
      <div className="bg-dark py-16 text-center">
        <div className="container-rtl">
          <p className="text-gold text-sm uppercase tracking-widest mb-3">לוח שיעורים</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            השיעורים שלנו
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            שיעורים לכל הרמות — מתחילים ועד מתקדמים. הצטרף אלינו היום.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container-rtl py-14">
        <SectionHeader
          title="לוח שיעורים שבועי"
          subtitle="סנן לפי רמה ומצא את השיעור המתאים לך"
        />
        {/* TODO(PRD2): Replace mockClassesData with Supabase-backed classes query */}
        <ClassScheduleGrid classes={mockClassesData} />
      </div>

      {/* CTA banner */}
      <div className="bg-primary py-12 text-center text-white">
        <div className="container-rtl">
          <h2 className="font-display text-2xl font-bold mb-3">לא בטוח מאיזו רמה להתחיל?</h2>
          <p className="text-white/80 mb-6">בוא לשיעור ניסיון חינם ונמצא יחד את המסלול הנכון עבורך.</p>
          <a
            href="/register"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-light transition-colors"
          >
            קבע שיעור ניסיון ←
          </a>
        </div>
      </div>
    </div>
  );
}

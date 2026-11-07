import type { Metadata } from 'next';
import { InstructorCard } from '@/components/about/InstructorCard';
import { SectionHeader }  from '@/components/ui/SectionHeader';
import { mockInstructorsData } from '@/lib/mock-data/instructors';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'אודות',
  description: "הכירו את הצוות והסיפור של מדיה נוצ'ה כרמיאל.",
};

const VALUES = [
  { emoji: '🎵', title: 'מוזיקליות',   desc: 'ריקוד שמתחיל מהקשבה — כל צעד נולד מהמוזיקה.' },
  { emoji: '🤝', title: 'קהילה',       desc: 'אנחנו משפחה. כולם מתקבלים בחום, בלי ניסיון קודם.' },
  { emoji: '🌱', title: 'התפתחות',     desc: 'כל רקדן מתקדם בקצב שלו — אין תחרות, יש שמחה.' },
  { emoji: '✨', title: 'אלגנטיות',    desc: 'מדיה נוצ\'ה היא חוויה — קצב, תנועה ואווירה.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-dark py-20 text-center">
        <div className="container-rtl">
          <p className="text-gold text-sm uppercase tracking-widest mb-3">הסיפור שלנו</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            אודות מדיה נוצ'ה כרמיאל
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            מועדון ריקוד סלסה שנוסד מתוך אהבה לתנועה, לקצב ולקהילה.
            אנחנו כאן כדי שכרמיאל תרקוד.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="section-light py-16">
        <div className="container-rtl max-w-3xl mx-auto">
          <SectionHeader title="הסיפור שלנו" />
          {/* TODO(PRD3): Replace with Sanity CMS "about" page content */}
          <div className="prose prose-lg max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-4 text-center">
            <p>
              מדיה נוצ&apos;ה כרמיאל נולדה מתוך תשוקה - לסלסה, לריקוד הלטיני,
              ולאמונה שכל אדם יכול ללמוד לרקוד ולמצוא בזה שמחה.
            </p>
            <p>
              המועדון של מדיה נוצ&apos;ה הוקם בינואר 2025.
              תקופה זו היתה קשה עבור מדינת ישראל, כשהמלחמה בעזה עדיין לא הסתיימה וחטופינו עוד לא כולם שבו הביתה.
              דווקא בימים האלו, הצורך לרקוד, לשמוח ופשוט לחיות - היה צורך חזק מאוד שתרם להקמתה של מדיה נוצ&apos;ה כרמיאל.
            </p>
            <p>
              בתחילת דרכו של מועדון מדיה נוצ&apos;ה כרמיאל, הגיעו לעזור, לתמוך ולהדריך מדריכים ופעילים מקבוצות מדיות אחרות בצפון ובראשן מדיה נוצ&apos;ה טבריה.
              מאז - הפכה מדיה נוצ&apos;ה כרמיאל לבית חם לרוקדים מכרמיאל והסביבה.
              מדיה נוצ&apos;ה כרמיאל היא חלק מקהילת מדיה נוצ&apos;ה בישראל.
            </p>
            <p>
              כמו כל קבוצות מדיה נוצ&apos;ה בישראל, מדיה נוצ&apos;ה כרמיאל מקיימת ערבי סלסה קובנית בחינם ובהתנדבות: הדרכה, ואחריה מסיבה: ריקוד חופשי.
            </p>
            <p className="font-bold text-gray-800">
              הרעיון של מדיה נוצ&apos;ה פשוט: מי שיודע מלמד את מי שלא יודע!
            </p>
            <p className="font-bold text-gray-800">ואם נעשה - יהיה!</p>
            <p>לא צריך ניסיון קודם ולא צריך להגיע עם בן או בת זוג.</p>
            <p>
              מדיה נוצ&apos;ה כרמיאל - כל יום רביעי.
              <br />
              נפגשים בשעה 20:00 - לחימום + שיעור
              <br />
              ובשעה 21:00 - למסיבה.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark py-16">
        <div className="container-rtl">
          <SectionHeader title="הערכים שלנו" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="bg-dark-card rounded-xl p-6 border border-dark-border text-center">
                <div className="text-4xl mb-3">{v.emoji}</div>
                <h3 className="font-display font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="section-light py-16">
        <div className="container-rtl">
          <SectionHeader
            title="הצוות שלנו"
            subtitle="המדריכים שיקחו אותך בדרך"
          />
          {/* TODO(PRD3): Replace mockInstructorsData with Sanity CMS instructor documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockInstructorsData.map(instructor => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-primary py-12 text-center text-white">
        <div className="container-rtl">
          <h2 className="font-display text-2xl font-bold mb-3">
            מוכן להצטרף אלינו?
          </h2>
          <p className="text-white/80 mb-6">שיעור ניסיון ראשון — בחינם, ללא התחייבות.</p>
          <Link
            href="/register"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-light transition-colors"
          >
            קבע שיעור ניסיון ←
          </Link>
        </div>
      </div>
    </div>
  );
}

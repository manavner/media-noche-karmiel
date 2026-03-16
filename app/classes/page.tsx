// TODO(PRD2): Replace mockWednesdaySchedule with Supabase-backed schedule
import type { Metadata } from 'next';
import { mockWednesdaySchedule } from '@/lib/mock-data/schedule';
import { mockSiteSettings }      from '@/lib/mock-data/site-settings';

export const metadata: Metadata = {
  title: 'שיעורים — כל יום רביעי',
  description: 'שיעורי סלסה חינם כל יום רביעי 20:00–21:00. אחרי השיעור — מסיבת ריקודים עד 23:00.',
};

const LEVEL_LABELS: Record<string, string> = {
  basis:           'בסיס — לגמרי מתחילים',
  beginner:        'מתחילים',
  'beginner-tech': 'מתחילים — טכניקה',
  intermediate:    'בינוני',
  advanced:        'מתקדמים',
  master:          'מאסטר',
};

export default function ClassesPage() {
  const s = mockSiteSettings;
  const sched = mockWednesdaySchedule;

  return (
    <main className="section-light min-h-screen">
      <div className="container-rtl py-16">
        <h1 className="font-display text-4xl font-bold text-primary mb-4">לוח שיעורים</h1>

        {/* DonationBanner — חינם */}
        <div className="bg-community text-white rounded-xl p-6 mb-10 text-center">
          <div className="text-3xl mb-2">🆓</div>
          <h2 className="font-display text-2xl font-bold mb-1">כניסה חינם לחלוטין</h2>
          <p className="text-white/80 font-body">
            המועדון מנוהל על ידי מתנדבים. לא תשלם כלום — אבל תרומות תמיד מתקבלות בשמחה 💛
          </p>
        </div>

        {/* יום ושעה */}
        <div className="bg-dark text-white rounded-xl p-8 mb-10 text-center">
          <p className="text-gold text-sm uppercase tracking-widest font-body mb-2">פעילות קבועה</p>
          <div className="font-display text-5xl font-bold text-white mb-2">{s.activityDay}</div>
          <div className="font-body text-2xl text-gold">{s.activityHours}</div>
          <div className="mt-6 grid md:grid-cols-2 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-gold font-bold text-lg">🎓 {s.classHours}</div>
              <div className="text-white/80 text-sm mt-1">שיעורים ברמות השונות</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-gold font-bold text-lg">💃 {s.partyHours}</div>
              <div className="text-white/80 text-sm mt-1">מסיבת ריקודים</div>
            </div>
          </div>
        </div>

        {/* רמות */}
        <h2 className="font-display text-2xl font-bold mb-6">הרמות בשיעור ({s.classHours})</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {sched.sessions.map(session => (
            <div
              key={session.id}
              className="bg-white rounded-xl p-6 shadow-sm border-r-4 border-primary"
            >
              <h3 className="font-display text-lg font-bold text-primary mb-2">
                {LEVEL_LABELS[session.level]}
              </h3>
              <p className="text-gray-600 text-sm font-body mb-3">{session.description}</p>
              <div className="flex gap-4 text-sm text-gray-500 font-body">
                <span>⏰ {session.timeStart}–{session.timeEnd}</span>
                <span>👤 {session.instructor}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy quote */}
        <div className="bg-dark text-white rounded-xl p-8 text-center">
          <p className="philosophy-quote text-xl">&ldquo;{mockSiteSettings.philosophy2}&rdquo;</p>
        </div>
      </div>
    </main>
  );
}

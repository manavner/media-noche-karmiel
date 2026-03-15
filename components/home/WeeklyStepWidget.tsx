// TODO(PRD3): Replace mockWeeklyStepData with Sanity CMS weeklyStep query
import { mockWeeklyStepData } from '@/lib/mock-data/weekly-step';
import { SectionHeader } from '@/components/ui/SectionHeader';

const LEVEL_STARS = ['', '⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐'];

export function WeeklyStepWidget() {
  const step = mockWeeklyStepData;

  return (
    <section className="section-dark py-16">
      <div className="container-rtl">
        <SectionHeader
          title="צעד השבוע"
          subtitle="תרגל בבית — למד טכניקה חדשה כל שבוע"
          light
        />

        <div className="max-w-2xl mx-auto bg-dark-card rounded-2xl overflow-hidden border border-dark-border">
          {/* Video placeholder — TODO(PRD3): Replace YOUTUBE_ID_HERE with real ID */}
          <div className="relative aspect-video bg-dark flex items-center justify-center">
            {step.youtubeId === 'YOUTUBE_ID_HERE' ? (
              <div className="text-center text-white/40">
                <div className="text-5xl mb-3">▶</div>
                <p className="text-sm">וידאו יתווסף בקרוב</p>
                <p className="text-xs mt-1 text-white/20">TODO(PRD3): הכנס YouTube ID</p>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${step.youtubeId}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={step.title}
              />
            )}
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
              <span className="text-sm text-gold">{LEVEL_STARS[step.level]}</span>
            </div>
            <p className="text-white/70 text-sm mb-4">{step.description}</p>
            {step.instructorTip && (
              <div className="bg-primary/20 border border-primary/30 rounded-lg p-3">
                <p className="text-gold text-xs font-bold mb-1">💡 טיפ מהמדריך</p>
                <p className="text-white/80 text-sm">{step.instructorTip}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

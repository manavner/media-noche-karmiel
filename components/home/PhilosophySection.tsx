// הקומפוננט החשוב ביותר — מציג את 2 משפטי היסוד בדף הבית בבולטות
import { mockSiteSettings } from '@/lib/mock-data/site-settings';

export function PhilosophySection() {
  return (
    <section className="section-dark py-20">
      <div className="container-rtl text-center">
        <p className="text-gold text-sm uppercase tracking-widest mb-8 font-body">
          הפילוסופיה שלנו
        </p>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-fade-up">
            <div className="philosophy-quote mb-4">
              &ldquo;{mockSiteSettings.philosophy1}&rdquo;
            </div>
            <p className="text-white/60 text-sm font-body">
              כל אחד מאיתנו הוא חלק ממה שיוצר את הקהילה הזו
            </p>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="philosophy-quote mb-4">
              &ldquo;{mockSiteSettings.philosophy2}&rdquo;
            </div>
            <p className="text-white/60 text-sm font-body">
              הידע עובר הלאה — כך הקהילה גדלה וכולם מרוויחים
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

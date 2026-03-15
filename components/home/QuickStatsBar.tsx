// TODO(PRD3): Replace static stats with dynamic data from Sanity SiteSettings
const STATS = [
  { value: 'X+', label: 'שנות פעילות'   },  // PLACEHOLDER
  { value: 'X+', label: 'רוקדים פעילים' },  // PLACEHOLDER
  { value: 'X',  label: 'שיעורים בשבוע' },  // PLACEHOLDER
  { value: 'X+', label: 'אירועים בשנה'  },  // PLACEHOLDER
];

export function QuickStatsBar() {
  return (
    <section className="section-dark py-12">
      <div className="container-rtl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s, i) => (
          <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="font-display text-4xl font-bold text-gold">{s.value}</div>
            <div className="text-white/70 mt-2 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface Props {
  title:       string;
  subtitle?:   string;
  light?:      boolean; // true = כותרת בהירה (על רקע כהה)
  centered?:   boolean;
}

export function SectionHeader({ title, subtitle, light = false, centered = true }: Props) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className={`font-display text-3xl md:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 w-16 h-1 rounded-full bg-gold ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}

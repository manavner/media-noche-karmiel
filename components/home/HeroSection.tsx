import Link from 'next/link';
import { mockSiteSettings } from '@/lib/mock-data/site-settings';
import { HeroBackground } from './HeroBackground';
import { Rubik } from 'next/font/google';

// פונט עברי בולט לכותרת הראשית
const heroFont = Rubik({ subsets: ['hebrew', 'latin'], weight: ['800', '900'] });

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
      <HeroBackground />

      {/* Decorative circles — behind content, only visible on fallback gradient */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-gold/10 blur-3xl -z-10" />

      <div className="relative z-10 text-center text-white px-4 animate-fade-up">
        <p className="text-gold text-sm font-body uppercase tracking-widest mb-4">
          מועדון סלסה
        </p>
        <h1 className={`${heroFont.className} text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight`}>
          {mockSiteSettings.clubName}
        </h1>
        <p className="font-body text-xl md:text-2xl text-white/80 mb-6 max-w-2xl mx-auto">
          {mockSiteSettings.tagline}
        </p>
        {/* העיקרון המוביל שלנו */}
        <div className="font-body text-gold text-lg md:text-xl font-bold mb-10 space-y-1">
          <p>&ldquo;מי שיודע מלמד את מי שלא יודע&rdquo;</p>
          <p>&ldquo;אם נעשה יהיה&rdquo;</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mt-8">
          <Link
            href="/curriculum"
            className="bg-primary hover:bg-primary-dark px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
          >
            תוכנית הלימודים 💃
          </Link>
          <a
            href="https://salsaflow-dj.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-dark px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            כלים ל DJ 🎧
          </a>
          <a
            href="https://salsa-steps-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-card border-2 border-gold/50 text-white/80 hover:border-gold hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            קטלוג צעדי סלסה 🎵
          </a>
          <Link
            href="/gallery"
            className="bg-dark-card border-2 border-white/30 text-white/80 hover:border-white hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            תמונות וסרטונים 📸
          </Link>
          <Link
            href="/join"
            className="bg-community border-2 border-community text-white hover:brightness-110 px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            הצטרפות לקבוצה 🤝
          </Link>
        </div>
      </div>

      {/* Scroll indicator — anchored to the section bottom, below the buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}

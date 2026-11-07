import Link from 'next/link';
import { mockSiteSettings } from '@/lib/mock-data/site-settings';
import { HeroBackground } from './HeroBackground';
import { Rubik } from 'next/font/google';

// פונט עברי בולט לכותרת הראשית
const heroFont = Rubik({ subsets: ['hebrew', 'latin'], weight: ['800', '900'] });

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center overflow-hidden pt-20 pb-20">
      <HeroBackground />

      {/* Decorative circles — behind content, only visible on fallback gradient */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-gold/10 blur-3xl -z-10" />

      {/* Top group (label/title/tagline) high, principles centered, buttons low */}
      <div className="relative z-10 flex-1 w-full flex flex-col justify-between gap-10 text-center text-white px-4 animate-fade-up">
        <div>
        <p className="text-[#01C5C6] text-xl md:text-2xl font-body font-bold tracking-widest mb-4">
          מועדון סלסה
        </p>
        <h1 className={`${heroFont.className} text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight`}>
          {mockSiteSettings.clubName}
        </h1>
        <p className="font-body text-2xl md:text-3xl text-[#01C5C6] max-w-3xl mx-auto">
          {mockSiteSettings.tagline}
        </p>
        </div>
        {/* העיקרון המוביל שלנו */}
        <div className="font-body text-gold text-lg md:text-xl font-bold space-y-1">
          <p>&ldquo;מי שיודע מלמד את מי שלא יודע&rdquo;</p>
          <p>&ldquo;אם נעשה יהיה&rdquo;</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Link
            href="/curriculum"
            className="bg-[#E6007E] hover:bg-[#C2006A] px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
          >
            תוכנית הלימודים 💃
          </Link>
          <a
            href="https://salsaflow-dj.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            כלים ל DJ 🎧
          </a>
          <a
            href="https://salsa-steps-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            קטלוג צעדי סלסה 🎵
          </a>
          <Link
            href="/gallery"
            className="bg-[#E6007E] border-2 border-[#E6007E] text-white hover:bg-[#C2006A] hover:border-[#C2006A] px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            תמונות וסרטונים 📸
          </Link>
          <Link
            href="/join"
            className="bg-white border-2 border-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            הצטרפות לקבוצה 🤝
          </Link>
        </div>
      </div>

      {/* Scroll indicator — anchored to the section bottom, below the buttons */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}

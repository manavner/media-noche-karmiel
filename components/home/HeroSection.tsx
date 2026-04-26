import Link from 'next/link';
import { mockSiteSettings } from '@/lib/mock-data/site-settings';
import { HeroBackground } from './HeroBackground';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      {/* Decorative circles — behind content, only visible on fallback gradient */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-gold/10 blur-3xl -z-10" />

      <div className="relative z-10 text-center text-white px-4 animate-fade-up">
        <p className="text-gold text-sm font-body uppercase tracking-widest mb-4">
          מועדון סלסה — כרמיאל
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {mockSiteSettings.clubName}
        </h1>
        <p className="font-body text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
          {mockSiteSettings.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Link
            href="/classes"
            className="bg-primary hover:bg-primary-dark px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
          >
            פרטים על השיעורים 💃
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
            תמונות 📸
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

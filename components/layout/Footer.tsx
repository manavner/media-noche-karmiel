'use client';

import Link from 'next/link';
import { track } from '@vercel/analytics';
import { BarChart2 } from 'lucide-react';
import { mockSiteSettings } from '@/lib/mock-data/site-settings';

export function Footer() {
  return (
    <footer className="section-dark pt-12 pb-6">
      <div className="container-rtl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-gold mb-3">
              {mockSiteSettings.clubName}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {mockSiteSettings.tagline}
            </p>
            <p className="text-community text-sm mt-2 font-bold">
              🆓 כניסה חינם — תרומות בלבד
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-3">ניווט מהיר</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/"           className="hover:text-gold transition-colors">בית</Link></li>
              <li><Link href="/about"      className="hover:text-gold transition-colors">אודות</Link></li>
              <li><Link href="/classes"    className="hover:text-gold transition-colors">שיעורים</Link></li>
              <li><Link href="/curriculum" className="hover:text-gold transition-colors">סילבוס</Link></li>
              <li><Link href="/contact"    className="hover:text-gold transition-colors">צור קשר</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-3">פרטים</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>📍 {mockSiteSettings.location}</li>
              <li>📅 {mockSiteSettings.activityDay} | {mockSiteSettings.activityHours}</li>
              <li>
                <a
                  href={`https://wa.me/${mockSiteSettings.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${mockSiteSettings.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  📸 {mockSiteSettings.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <span>© {new Date().getFullYear()} {mockSiteSettings.clubName}. כל הזכויות שמורות.</span>
          <a
            href="https://vercel.com/analytics"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('analytics_badge_click')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 text-white/40 hover:text-white/70 hover:border-white/30 transition-colors text-xs"
          >
            <BarChart2 size={12} />
            <span>מופעל על ידי Vercel Analytics</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
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
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-3">ניווט מהיר</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/"        className="hover:text-gold transition-colors">בית</Link></li>
              <li><Link href="/about"   className="hover:text-gold transition-colors">אודות</Link></li>
              <li><Link href="/classes" className="hover:text-gold transition-colors">שיעורים</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">צור קשר</Link></li>
              <li><Link href="/register" className="hover:text-gold transition-colors">הרשמה</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-3">צור קשר</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>📍 {mockSiteSettings.address}</li>
              <li>📞 {mockSiteSettings.phone}</li>
              <li>✉️ {mockSiteSettings.email}</li>
              <li>
                <a
                  href={`https://instagram.com/${mockSiteSettings.instagram.replace('@','')}`}
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

        <div className="border-t border-dark-border pt-6 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} {mockSiteSettings.clubName}. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}

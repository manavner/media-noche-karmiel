import type { Metadata } from 'next';
import './globals.css';
import { Navbar }                 from '@/components/layout/Navbar';
import { Footer }                 from '@/components/layout/Footer';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { FacebookFloatingButton } from '@/components/layout/FacebookFloatingButton';
import { mockSiteSettings }     from '@/lib/mock-data/site-settings';
import { Analytics }              from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default:  `${mockSiteSettings.clubName} — מועדון סלסה`,
    template: `%s | ${mockSiteSettings.clubName}`,
  },
  description: 'מועדון הסלסה המוביל בכרמיאל. שיעורי סלסה לכל הרמות, אירועים ומסיבות.',
  keywords:    ['סלסה כרמיאל', 'ריקוד לטיני', 'מועדון ריקוד', 'salsa karmiel'],
  openGraph:   { type: 'website', locale: 'he_IL', siteName: mockSiteSettings.clubName },
  icons: { icon: '/logo.png', apple: '/apple-icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div className="social-float">
          <FacebookFloatingButton url={mockSiteSettings.facebook} />
          <WhatsAppFloatingButton phone={mockSiteSettings.whatsapp} />
          <span className="social-float-caption">הצטרפות לקבוצה</span>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

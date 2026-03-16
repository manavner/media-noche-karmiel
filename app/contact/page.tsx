import type { Metadata } from 'next';
import { ContactForm }          from '@/components/forms/ContactForm';
import { MapEmbedPlaceholder }  from '@/components/ui/MapEmbedPlaceholder';
import { mockSiteSettings }     from '@/lib/mock-data/site-settings';

export const metadata: Metadata = {
  title: 'צור קשר',
  description: "פנו אלינו לכל שאלה — מדיה נוצ'ה כרמיאל.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen section-light">

      {/* Page header */}
      <div className="bg-dark py-16 text-center">
        <div className="container-rtl">
          <p className="text-gold text-sm uppercase tracking-widest mb-3">דברו איתנו</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            צור קשר
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            יש שאלה? רוצה לשמוע עוד? אנחנו כאן בשבילך.
          </p>
        </div>
      </div>

      <div className="container-rtl py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="font-display text-2xl font-bold text-dark mb-6">פרטי התקשרות</h2>

            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold text-dark text-sm mb-1">מיקום</p>
                  <p className="text-gray-600 text-sm">{mockSiteSettings.location}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-bold text-dark text-sm mb-1">מתי?</p>
                  <p className="text-gray-600 text-sm">
                    {mockSiteSettings.activityDay} | {mockSiteSettings.activityHours}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-bold text-dark text-sm mb-1">WhatsApp</p>
                  <a
                    href={`https://wa.me/${mockSiteSettings.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    שלח הודעה ב-WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">📸</span>
                <div>
                  <p className="font-bold text-dark text-sm mb-1">Instagram</p>
                  <a
                    href={`https://instagram.com/${mockSiteSettings.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    {mockSiteSettings.instagram}
                  </a>
                </div>
              </li>
            </ul>

            {/* Map */}
            <MapEmbedPlaceholder address={mockSiteSettings.location} />
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-dark mb-6">שלח הודעה</h2>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

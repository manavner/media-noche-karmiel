import type { Metadata } from 'next';
import { JoinForm } from '@/components/forms/JoinForm';

export const metadata: Metadata = {
  title: 'הצטרפות לקבוצת חברים',
  description: "הצטרף לקהילת הסלסה של מדיה נוצ'ה כרמיאל — חינם, ביחד, מתוך אהבה.",
};

export default function JoinPage() {
  return (
    <div className="min-h-screen section-light">
      {/* Page header */}
      <div className="bg-dark py-16 text-center">
        <div className="container-rtl">
          <p className="text-gold text-sm uppercase tracking-widest mb-3">קהילה פתוחה לכולם</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            הצטרפות לקבוצת חברים
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            מלא את הפרטים ונוסיף אותך לקהילה — כניסה חינם, ריקוד ביחד
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="container-rtl py-14">
        <div className="max-w-lg mx-auto">
          {/* Trust signals */}
          <div className="grid grid-cols-3 gap-4 mb-10 text-center">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl mb-1">🆓</div>
              <p className="text-xs text-gray-600 font-medium">כניסה חינם תמיד</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl mb-1">🎂</div>
              <p className="text-xs text-gray-600 font-medium">נחגוג את יום ההולדת שלך</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl mb-1">🤝</div>
              <p className="text-xs text-gray-600 font-medium">קהילה חמה ומקבלת</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="font-display text-xl font-bold text-dark mb-6 text-center">
              פרטי הצטרפות
            </h2>
            <JoinForm />
          </div>
        </div>
      </div>
    </div>
  );
}

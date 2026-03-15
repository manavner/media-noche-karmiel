import type { Metadata } from 'next';
import { RegisterForm } from '@/components/forms/RegisterForm';

export const metadata: Metadata = {
  title: 'הרשמה לשיעורים',
  description: "הירשמו לשיעור ניסיון חינם — מדיה נוצ'ה כרמיאל.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen section-light">
      {/* Page header */}
      <div className="bg-dark py-16 text-center">
        <div className="container-rtl">
          <p className="text-gold text-sm uppercase tracking-widest mb-3">הצטרף למשפחה</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            הרשמה לשיעורים
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            מלא את הטופס ונחזור אליך לתיאום שיעור ניסיון חינם
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="container-rtl py-14">
        <div className="max-w-lg mx-auto">
          {/* Trust signals */}
          <div className="grid grid-cols-3 gap-4 mb-10 text-center">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl mb-1">🎓</div>
              <p className="text-xs text-gray-600 font-medium">שיעור ניסיון חינם</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl mb-1">📞</div>
              <p className="text-xs text-gray-600 font-medium">מענה תוך 24 שעות</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl mb-1">💃</div>
              <p className="text-xs text-gray-600 font-medium">לכל הרמות</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="font-display text-xl font-bold text-dark mb-6 text-center">
              פרטי הרשמה
            </h2>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

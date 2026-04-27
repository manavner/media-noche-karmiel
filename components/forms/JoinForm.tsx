'use client';
// TODO(PRD2): Replace local success state with POST to /api/join + write to Google Sheets via API
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name:        z.string().min(2, 'שם חובה (לפחות 2 תווים)'),
  birthday:    z.string().min(1, 'תאריך יום הולדת חובה'),
  email:       z.string().email('כתובת אימייל לא תקינה'),
  phone:       z.string().min(9, 'מספר טלפון לא תקין'),
  experience:  z.enum(['none', 'beginner', 'intermediate', 'advanced']),
  source:      z.string().min(1, 'יש לבחור כיצד שמעת עלינו'),
});

type FormData = z.infer<typeof schema>;

export function JoinForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // TODO(PRD2): Replace with fetch('/api/join', { method: 'POST', body: JSON.stringify(data) })
  const onSubmit = (data: FormData) => {
    console.log('PRD1 — join form data (not sent to server):', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🤝</div>
        <h2 className="font-display text-2xl font-bold text-primary mb-2">
          ברוך הבא למשפחה!
        </h2>
        <p className="text-gray-600 mb-2">קיבלנו את פרטיך ונוסיף אותך לקבוצת החברים.</p>
        <p className="text-xs text-gray-400">
          {/* TODO(PRD2): כאן יישלח מייל אישור אוטומטי */}
          נשמח לראותך ביום רביעי הקרוב 💃
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto" noValidate>

      {/* שם */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
          שם מלא *
        </label>
        <input
          id="name"
          {...register('name')}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          placeholder="ישראל ישראלי"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.name.message}</p>
        )}
      </div>

      {/* תאריך יום הולדת */}
      <div>
        <label htmlFor="birthday" className="block text-sm font-medium text-dark mb-1">
          תאריך יום הולדת *
        </label>
        <input
          id="birthday"
          type="date"
          {...register('birthday')}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          dir="ltr"
        />
        {errors.birthday && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.birthday.message}</p>
        )}
      </div>

      {/* אימייל */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
          אימייל *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          placeholder="your@email.com"
          dir="ltr"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.email.message}</p>
        )}
      </div>

      {/* טלפון */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
          טלפון *
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          placeholder="050-0000000"
          dir="ltr"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.phone.message}</p>
        )}
      </div>

      {/* ניסיון בריקוד */}
      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-dark mb-1">
          ניסיון בריקוד *
        </label>
        <select
          id="experience"
          {...register('experience')}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-white"
        >
          <option value="none">מתחיל — אין ניסיון</option>
          <option value="beginner">בסיסי — כמה שיעורים</option>
          <option value="intermediate">בינוני — שנה ומעלה</option>
          <option value="advanced">מתקדם — רוקד באופן קבוע</option>
        </select>
      </div>

      {/* איך שמעת עלינו */}
      <div>
        <label htmlFor="source" className="block text-sm font-medium text-dark mb-1">
          איך שמעת עלינו? *
        </label>
        <select
          id="source"
          {...register('source')}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-white"
        >
          <option value="">בחר...</option>
          <option value="friend">חבר / מכר</option>
          <option value="whatsapp">קבוצת WhatsApp</option>
          <option value="instagram">אינסטגרם</option>
          <option value="facebook">פייסבוק</option>
          <option value="google">חיפוש בגוגל</option>
          <option value="other">אחר</option>
        </select>
        {errors.source && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.source.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-community hover:brightness-110 text-white py-3 rounded-lg font-bold text-lg transition-all disabled:opacity-60"
      >
        {isSubmitting ? 'שולח...' : 'הצטרף לקבוצה 🤝'}
      </button>

      <p className="text-center text-xs text-gray-400">
        הפרטים שלך ישמרו בצורה מאובטחת ולא יועברו לצד שלישי
      </p>
    </form>
  );
}

'use client';
// TODO(PRD2): Replace local success state with POST to /api/register + Resend confirmation email
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  firstName:    z.string().min(2, 'שם פרטי חובה (לפחות 2 תווים)'),
  lastName:     z.string().min(2, 'שם משפחה חובה (לפחות 2 תווים)'),
  email:        z.string().email('כתובת אימייל לא תקינה'),
  phone:        z.string().min(9, 'מספר טלפון לא תקין'),
  experience:   z.enum(['none', 'beginner', 'intermediate', 'advanced']),
  desiredLevel: z.string().min(1, 'יש לבחור רמה מבוקשת'),
  notes:        z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // TODO(PRD2): Replace with fetch('/api/register', { method: 'POST', body: JSON.stringify(data) })
  const onSubmit = (data: FormData) => {
    console.log('PRD1 — form data (not sent to server):', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">💃</div>
        <h2 className="font-display text-2xl font-bold text-primary mb-2">
          תודה! קיבלנו את פרטיך
        </h2>
        <p className="text-gray-600 mb-6">ניצור איתך קשר בהקדם לתיאום שיעור הניסיון.</p>
        <p className="text-xs text-gray-400">
          {/* TODO(PRD2): כאן יישלח מייל אישור אוטומטי דרך Resend */}
          אישור יישלח לאימייל שלך בקרוב
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto" noValidate>

      {/* שם */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-dark mb-1">
            שם פרטי *
          </label>
          <input
            id="firstName"
            {...register('firstName')}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1" role="alert">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-dark mb-1">
            שם משפחה *
          </label>
          <input
            id="lastName"
            {...register('lastName')}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1" role="alert">{errors.lastName.message}</p>
          )}
        </div>
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

      {/* ניסיון */}
      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-dark mb-1">
          ניסיון קודם בריקוד *
        </label>
        <select
          id="experience"
          {...register('experience')}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-white"
        >
          <option value="none">אין ניסיון — מתחיל מאפס</option>
          <option value="beginner">מתחיל — כמה שיעורים בעבר</option>
          <option value="intermediate">בינוני — ניסיון של שנה+</option>
          <option value="advanced">מתקדם — רוקד באופן קבוע</option>
        </select>
      </div>

      {/* רמה מבוקשת */}
      <div>
        <label htmlFor="desiredLevel" className="block text-sm font-medium text-dark mb-1">
          רמה מבוקשת *
        </label>
        <select
          id="desiredLevel"
          {...register('desiredLevel')}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-white"
        >
          <option value="">בחר רמה...</option>
          <option value="beginner">מתחילים</option>
          <option value="intermediate">בינוני</option>
          <option value="advanced">מתקדם</option>
          <option value="all">לא יודע — אשמח לייעוץ</option>
        </select>
        {errors.desiredLevel && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.desiredLevel.message}</p>
        )}
      </div>

      {/* הערות */}
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-dark mb-1">
          הערות נוספות (אופציונלי)
        </label>
        <textarea
          id="notes"
          {...register('notes')}
          rows={3}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
          placeholder="שאלות, העדפות ימים, או כל מידע רלוונטי..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-bold text-lg transition-colors disabled:opacity-60"
      >
        {isSubmitting ? 'שולח...' : 'שלח פרטים 💃'}
      </button>

      <p className="text-center text-xs text-gray-400">
        הפרטים שלך ישמרו בצורה מאובטחת ולא יועברו לצד שלישי
      </p>
    </form>
  );
}

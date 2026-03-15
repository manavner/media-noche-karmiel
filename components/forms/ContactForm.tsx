'use client';
// TODO(PRD2): Replace local success state with POST to /api/contact + Resend notification email
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name:    z.string().min(2, 'שם חובה (לפחות 2 תווים)'),
  email:   z.string().email('כתובת אימייל לא תקינה'),
  phone:   z.string().min(9, 'מספר טלפון לא תקין').optional().or(z.literal('')),
  subject: z.string().min(2, 'נושא חובה'),
  message: z.string().min(10, 'ההודעה קצרה מדי (לפחות 10 תווים)'),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // TODO(PRD2): Replace with fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
  const onSubmit = (data: FormData) => {
    console.log('PRD1 — contact form data (not sent to server):', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✉️</div>
        <h2 className="font-display text-2xl font-bold text-primary mb-2">
          ההודעה נשלחה!
        </h2>
        <p className="text-gray-600">נחזור אליך בהקדם האפשרי.</p>
        {/* TODO(PRD2): כאן יישלח מייל התראה למנהל דרך Resend */}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

      {/* שם */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
          שם מלא *
        </label>
        <input
          id="name"
          {...register('name')}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.name.message}</p>
        )}
      </div>

      {/* אימייל + טלפון */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
            אימייל *
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            dir="ltr"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1" role="alert">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
            טלפון (אופציונלי)
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            dir="ltr"
          />
        </div>
      </div>

      {/* נושא */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-dark mb-1">
          נושא *
        </label>
        <select
          id="subject"
          {...register('subject')}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-white"
        >
          <option value="">בחר נושא...</option>
          <option value="שיעור ניסיון">שיעור ניסיון</option>
          <option value="מחירים ומסלולים">מחירים ומסלולים</option>
          <option value="אירועים ומסיבות">אירועים ומסיבות</option>
          <option value="שיתוף פעולה">שיתוף פעולה</option>
          <option value="אחר">אחר</option>
        </select>
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.subject.message}</p>
        )}
      </div>

      {/* הודעה */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
          הודעה *
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
          placeholder="כתוב את הודעתך כאן..."
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-bold text-lg transition-colors disabled:opacity-60"
      >
        {isSubmitting ? 'שולח...' : 'שלח הודעה ✉️'}
      </button>
    </form>
  );
}

'use client';
// TODO(PRD3): Replace mockTestimonialsData with Sanity-backed testimonials
import { useState } from 'react';
import { mockTestimonialsData } from '@/lib/mock-data/testimonials';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const STARS = Array.from({ length: 5 }, (_, i) => i);

export function TestimonialsCarousel() {
  const testimonials = mockTestimonialsData;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(i => (i + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-light py-16">
      <div className="container-rtl">
        <SectionHeader
          title="מה אומרים הרוקדים שלנו"
          subtitle="הקהילה שלנו מדברת"
        />

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 text-center relative">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {STARS.map(i => (
                <span key={i} className={i < t.rating ? 'text-gold' : 'text-gray-200'}>★</span>
              ))}
            </div>

            <blockquote className="font-display text-xl text-dark italic mb-6 leading-relaxed">
              "{t.text}"
            </blockquote>

            <p className="font-bold text-primary">{t.name}</p>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-light transition-colors"
                aria-label="עדות קודמת"
              >
                <ChevronRight size={18} />
              </button>

              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-gray-300'}`}
                    aria-label={`עבור לעדות ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-light transition-colors"
                aria-label="עדות הבאה"
              >
                <ChevronLeft size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

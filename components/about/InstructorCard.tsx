// TODO(PRD3): Replace mockInstructorsData with Sanity CMS instructor documents
import type { Instructor } from '@/lib/mock-data/instructors';
import Image from 'next/image';

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Photo */}
      <div className="relative h-64 bg-gradient-to-br from-dark to-dark-card flex items-center justify-center">
        {instructor.imageUrl && !instructor.imageUrl.includes('placeholder') ? (
          <Image
            src={instructor.imageUrl}
            alt={instructor.name}
            fill
            className="object-cover"
          />
        ) : (
          // PLACEHOLDER — TODO(PRD3): הכנס תמונת מדריך אמיתית
          <div className="text-center text-white/40">
            <div className="text-6xl mb-2">👤</div>
            <p className="text-xs">תמונה תתווסף בקרוב</p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-dark mb-2">{instructor.name}</h3>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-4">
          {instructor.specialties.map(s => (
            <span key={s} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              {s}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">{instructor.bio}</p>

        {instructor.instagram && (
          <a
            href={`https://instagram.com/${instructor.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors font-medium"
          >
            📸 {instructor.instagram}
          </a>
        )}
      </div>
    </div>
  );
}

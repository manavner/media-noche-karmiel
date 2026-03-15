'use client';
import type { DanceLevel } from '@/types';

const LEVELS: { value: DanceLevel | 'all'; label: string }[] = [
  { value: 'all',          label: 'כל הרמות'  },
  { value: 'beginner',     label: 'מתחילים'   },
  { value: 'intermediate', label: 'בינוני'    },
  { value: 'advanced',     label: 'מתקדם'     },
];

interface Props {
  active:   DanceLevel | 'all';
  onChange: (level: DanceLevel | 'all') => void;
}

export function ClassFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8" role="group" aria-label="סינון לפי רמה">
      {LEVELS.map(l => (
        <button
          key={l.value}
          onClick={() => onChange(l.value)}
          className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
            active === l.value
              ? 'bg-primary text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

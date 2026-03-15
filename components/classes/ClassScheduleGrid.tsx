'use client';
// TODO(PRD2): Replace mockClassesData with Supabase-backed classes query
import { useState } from 'react';
import type { SalsaClass, DanceLevel } from '@/types';
import { ClassCard } from '@/components/classes/ClassCard';
import { ClassFilter } from '@/components/classes/ClassFilter';

interface Props {
  classes: SalsaClass[];
}

export function ClassScheduleGrid({ classes }: Props) {
  const [activeLevel, setActiveLevel] = useState<DanceLevel | 'all'>('all');

  const filtered = activeLevel === 'all'
    ? classes
    : classes.filter(c => c.level === activeLevel || c.level === 'all');

  return (
    <div>
      <ClassFilter active={activeLevel} onChange={setActiveLevel} />

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-5xl mb-4">🕺</p>
          <p>אין שיעורים ברמה זו כרגע</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(cls => (
            <ClassCard key={cls.id} cls={cls} />
          ))}
        </div>
      )}
    </div>
  );
}

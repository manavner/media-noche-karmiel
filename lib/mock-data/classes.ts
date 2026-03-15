// TODO(PRD2): Replace mockClassesData with Supabase-backed classes query
import type { SalsaClass } from '@/types';

export const mockClassesData: SalsaClass[] = [
  {
    id: 'class-1',
    title: 'סלסה מתחילים',
    description: 'הקורס המושלם למי שמתחיל מאפס. נלמד צעד בסיסי, קצב וריקוד זוגי.',
    level: 'beginner',
    style: 'on1',
    dayOfWeek: 1,
    timeStart: '19:00',
    timeEnd: '20:00',
    instructor: 'שם המדריך',  // PLACEHOLDER
    location: 'כרמיאל',
    price: 0,
    trialAvailable: true,
    maxStudents: 20,
    isActive: true,
  },
  {
    id: 'class-2',
    title: 'סלסה בינוני',
    description: 'הרחבת מאגר הצעדים, עבודת זוג מתקדמת ומוזיקליות.',
    level: 'intermediate',
    style: 'on1',
    dayOfWeek: 3,
    timeStart: '20:00',
    timeEnd: '21:30',
    instructor: 'שם המדריך',  // PLACEHOLDER
    location: 'כרמיאל',
    price: 0,
    trialAvailable: false,
    maxStudents: 16,
    isActive: true,
  },
  {
    id: 'class-3',
    title: 'Rueda de Casino',
    description: 'ריקוד קבוצתי מהנה — סלסה בעיגול. פתוח לכולם!',
    level: 'all',
    style: 'rueda',
    dayOfWeek: 5,
    timeStart: '18:30',
    timeEnd: '20:00',
    instructor: 'שם המדריך',  // PLACEHOLDER
    location: 'כרמיאל',
    price: 0,
    trialAvailable: true,
    maxStudents: 30,
    isActive: true,
  },
];

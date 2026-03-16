// TODO(PRD2): Replace mockWednesdaySchedule with Supabase-backed schedule
import type { WednesdaySchedule } from '@/types';

export const mockWednesdaySchedule: WednesdaySchedule = {
  date: 'כל יום רביעי',
  sessions: [
    {
      id: 'session-basis',
      timeStart: '20:00',
      timeEnd:   '21:00',
      level:     'basis',
      description: 'צעדי בסיס — לגמרי מתחילים, ברוכים הבאים!',
      instructor: 'מתנדב/ת',  // PLACEHOLDER
    },
    {
      id: 'session-beginner',
      timeStart: '20:00',
      timeEnd:   '21:00',
      level:     'beginner',
      description: 'רמת מתחילים — כבר יודעים קצת ורוצים להתקדם',
      instructor: 'מתנדב/ת',  // PLACEHOLDER
    },
    {
      id: 'session-intermediate',
      timeStart: '20:00',
      timeEnd:   '21:00',
      level:     'intermediate',
      description: 'רמת בינוני — מתרגלים ומרחיבים',
      instructor: 'מתנדב/ת',  // PLACEHOLDER
    },
    {
      id: 'session-advanced',
      timeStart: '20:00',
      timeEnd:   '21:00',
      level:     'advanced',
      description: 'רמת מתקדמים — צעדים מורכבים ואלתור',
      instructor: 'מתנדב/ת',  // PLACEHOLDER
    },
  ],
  partyStart: '21:00',
  partyEnd:   '23:00',
};

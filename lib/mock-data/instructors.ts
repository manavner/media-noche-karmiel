// TODO(PRD3): Replace mockInstructorsData with Sanity CMS instructor documents
import type { Instructor } from '@/types';

export const mockInstructorsData: Instructor[] = [
  {
    id:          'instructor-1',
    name:        'שם המדריך הראשי',                       // PLACEHOLDER
    bio:         'ביוגרפיה של המדריך תתווסף כאן.',        // PLACEHOLDER
    specialties: ['Salsa On1', 'Rueda de Casino'],
    imageUrl:    '/images/instructor-placeholder.jpg',    // PLACEHOLDER
    instagram:   '@placeholder',                          // PLACEHOLDER
  },
];

// TODO(PRD3): Replace mockInstructorsData with Sanity CMS instructor documents
// NOTE: Instructor type defined locally — was removed from @/types in PRD1 v2
export interface Instructor {
  id:          string;
  name:        string;
  bio:         string;
  specialties: string[];
  imageUrl:    string;
  instagram?:  string;
}

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

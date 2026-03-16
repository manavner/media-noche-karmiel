// types/index.ts — Domain Model יציב בין כל שלבי הפיתוח

export type DanceLevel =
  | 'basis'           // בסיס
  | 'elements'        // אלמנטים
  | 'beginner-tech'   // מתחילים-טכניקה
  | 'beginner'        // מתחילים
  | 'intermediate'    // בינוני
  | 'advanced'        // מתקדמים
  | 'master';         // מאסטר

// ── לוח שיעורים ─────────────────────────────
export interface ClassSession {
  id:          string;
  timeStart:   string;   // '20:00'
  timeEnd:     string;   // '21:00'
  level:       DanceLevel;
  description: string;
  instructor:  string;   // PLACEHOLDER
  // אין price — המועדון חינם
}

export interface WednesdaySchedule {
  date:        string;   // 'כל יום רביעי'
  sessions:    ClassSession[];
  partyStart:  string;   // '21:00'
  partyEnd:    string;   // '23:00'
}

// ── צעד בסילבוס ─────────────────────────────
export interface SalsaStep {
  id:          string;
  nameHe:      string;
  nameEn:      string;
  youtubeUrl:  string;   // קישור מלא מהסילבוס
  level:       DanceLevel;
  category:    string;   // 'פסטיבל' | 'הומברס' | 'סיבובים' | etc.
}

// ── רמת לימוד ────────────────────────────────
export interface CurriculumLevel {
  id:           DanceLevel;
  nameHe:       string;
  prerequisites: string[];
  categories:   StepCategory[];
}

export interface StepCategory {
  id:       string;
  nameHe:   string;
  steps:    SalsaStep[];
}

// ── הגדרות אתר ───────────────────────────────
export interface SiteSettings {
  clubName:        string;
  tagline:         string;
  philosophy1:     string;   // "אם לא נעשה לא יהיה"
  philosophy2:     string;   // "מי שיודע מלמד מי שלא יודע"
  activityDay:     string;   // "יום רביעי"
  activityHours:   string;   // "20:00–23:00"
  classHours:      string;   // "20:00–21:00"
  partyHours:      string;   // "21:00–23:00"
  isFree:          boolean;  // true תמיד
  donationWelcome: boolean;  // true תמיד
  whatsapp:        string;
  instagram:       string;
  facebook:        string;
  location:        string;
}

// ── עדות רוקד ────────────────────────────────
export interface Testimonial {
  id:      string;
  name:    string;
  text:    string;
  rating:  1|2|3|4|5;
}

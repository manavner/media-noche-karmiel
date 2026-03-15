// types/index.ts
// Domain Model — יציב בין כל שלבי הפיתוח (Meta-PRD §7)

export type DanceLevel = 'beginner' | 'intermediate' | 'advanced' | 'all';
export type DanceStyle = 'on1' | 'on2' | 'cuban' | 'rueda' | 'bachata' | 'styling';
export type DayOfWeek  = 0|1|2|3|4|5|6; // 0=ראשון

export interface SalsaClass {
  id:             string;
  title:          string;
  description:    string;
  level:          DanceLevel;
  style:          DanceStyle;
  dayOfWeek:      DayOfWeek;
  timeStart:      string;   // '19:00'
  timeEnd:        string;   // '20:30'
  instructor:     string;
  location:       string;
  price:          number;
  trialAvailable: boolean;
  maxStudents:    number;
  isActive:       boolean;
}

export interface Registration {
  id?:           string;
  firstName:     string;
  lastName:      string;
  email:         string;
  phone:         string;
  experience:    'none'|'beginner'|'intermediate'|'advanced';
  desiredLevel:  DanceLevel;
  preferredDays: DayOfWeek[];
  classId?:      string;
  notes?:        string;
}

export interface SalsaStep {
  id:            string;
  nameHe:        string;
  nameEn:        string;
  level:         1|2|3|4;
  styles:        DanceStyle[];
  description:   string;
  youtubeId:     string;
  instructorTip?: string;
  tags:          string[];
}

export interface CurriculumLesson {
  lessonNumber: number;
  title:        string;
  topics:       string[];
  stepIds?:     string[];
}

export interface CurriculumTrack {
  id:             string;
  name:           string;
  nameEn:         string;
  level:          DanceLevel;
  description:    string;
  forWhom:        string;
  durationMonths: number;
  lessonsPerWeek: number;
  prerequisites:  string[];
  lessons:        CurriculumLesson[];
}

export interface SalsaEvent {
  id:          string;
  title:       string;
  description: string;
  date:        string;
  timeStart:   string;
  location:    string;
  price:       number;
  imageUrl?:   string;
}

export interface GalleryItem {
  id:       string;
  url:      string;
  caption?: string;
  category: 'parties'|'classes'|'performances'|'workshops';
}

export interface Testimonial {
  id:        string;
  name:      string;
  text:      string;
  rating:    1|2|3|4|5;
  imageUrl?: string;
}

export interface Instructor {
  id:          string;
  name:        string;
  bio:         string;
  specialties: string[];
  imageUrl:    string;
  instagram?:  string;
}

export interface SiteSettings {
  clubName:  string;
  tagline:   string;
  phone:     string;
  email:     string;
  address:   string;
  whatsapp:  string;
  instagram: string;
  facebook:  string;
}

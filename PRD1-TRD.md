# PRD1-TRD v2.0 — Media Noche Karmiel
## Foundations + Marketing MVP — Claude Code Ready
## עדכון: פילוסופיית המועדון + סילבוס מלא

---

## PART A — Meta-PRD: חוקים גלובליים

### A1. Chain of Authority
| רמה | מסמך | תפקיד |
|-----|-------|--------|
| 1 — עליון | Meta-PRD (CLAUDE.md) | חזון, כללים, naming, domain model |
| 2 — שלב | PRD1-TRD.md (זה) | In-Scope, Out-of-Scope, Deliverables |
| 3 — ביצוע | קוד בקובץ זה | commands, schema, components |
| 4 — סוכן | Claude Code | ממש רק PRD1 In-Scope |

> ⚠️ Claude Code: ממש אך ורק את מה שב-In-Scope של PRD1.

---

## PART B — PRD1: הגדרת המוצר

### B1. זהות המועדון — חשוב לקרוא לפני כל פיתוח

**מדיה נוצ'ה כרמיאל** הוא מועדון סלסה מבוסס-מתנדבים הפועל על עקרון קהילתי.

#### שני משפטי היסוד הפילוסופיים — חייבים להופיע באתר:
1. **"אם לא נעשה — לא יהיה"**
2. **"מי שיודע — מלמד. מי שלא יודע — לומד"**

#### עקרונות תפעוליים:
- 🆓 **חינם לחלוטין** — אין תשלום, רק תרומות רצוניות
- 📅 **פעילות: יום רביעי בלבד**, 20:00–23:00
- 🎓 **20:00–21:00** — שיעורים ברמות השונות
- 💃 **21:00–23:00** — מסיבת ריקודים
- 🤝 **כולם מתנדבים** — המדריכים מלמדים מתוך אהבה לריקוד

> ℹ️ האתר צריך לשדר: קהילה, נדיבות, שמחה, אהבה לריקוד — לא "עסק" או "מוסד".

---

### B2. In-Scope ✅ / Out-of-Scope ❌

**✅ In-Scope — מה נבנה ב-PRD1:**
- Next.js 14 App Router + TypeScript + Tailwind CSS
- Layout: Navbar + Footer + WhatsAppFloatingButton
- דפים: `/` `/about` `/classes` `/curriculum` `/contact`
- עמוד `/curriculum` עם הסילבוס המלא לפי רמות
- פילוסופיית המועדון בדף הבית ובדף אודות
- **ללא מחירים** — תרומות רצוניות בלבד
- לוח שיעורים: רק יום רביעי
- Design system: צבעים, פונטים, spacing
- SEO metadata בסיסי
- Mobile-first responsive, RTL מלא

**❌ Out-of-Scope:**
- Supabase / DB (PRD2)
- API routes (PRD2)
- Sanity CMS (PRD3)
- Gallery, Events דינמי (PRD3)
- Admin (PRD4)

---

### B3. User Flows

**Flow 1 — מבקר חדש:**
1. כניסה לדף הבית → Hero + שם + 2 משפטי היסוד
2. מבין שזה חינם + קהילה
3. רואה "יום רביעי 20:00" + CTA ברור
4. עובר לסילבוס → רואה את הרמה המתאימה לו
5. לוחץ WhatsApp לתיאום

**Flow 2 — רוקד שרוצה להצטרף:**
1. כניסה ל-/curriculum
2. בוחר רמה, רואה צעדים + YouTube links
3. מגיע ביום רביעי

---

### B4. Deliverables
- [ ] `npm run dev` עובד ללא שגיאות
- [ ] דפים: / /about /classes /curriculum /contact
- [ ] 2 משפטי היסוד מופיעים בולטים בדף הבית
- [ ] "חינם — תרומות בלבד" — ברור בכל מקום רלוונטי
- [ ] לוח שיעורים: רק יום רביעי 20:00–23:00
- [ ] סילבוס מלא לפי רמות עם links
- [ ] WhatsApp button בכל דף
- [ ] RTL עקבי, Mobile תקין

---

## PART C — TRD: מימוש טכני מלא

### C1. פקודות אתחול

```bash
npx create-next-app@latest media-noche-karmiel \
  --typescript --tailwind --eslint \
  --app --no-src-dir \
  --import-alias '@/*'

cd media-noche-karmiel

npm install \
  framer-motion \
  embla-carousel-react \
  lucide-react \
  clsx tailwind-merge \
  react-hook-form zod @hookform/resolvers \
  date-fns

npx shadcn@latest init
npx shadcn@latest add button card input label textarea select badge dialog sheet tabs accordion
```

---

### C2. מבנה תיקיות

```
media-noche-karmiel/
├── CLAUDE.md
├── PRD1-TRD.md
├── app/
│   ├── layout.tsx
│   ├── page.tsx                          # דף הבית
│   ├── globals.css
│   ├── about/page.tsx
│   ├── classes/page.tsx                  # לוח שיעורים — רק יום רביעי
│   ├── curriculum/
│   │   ├── page.tsx                      # סילבוס — כל הרמות
│   │   └── [level]/page.tsx             # רמה בודדת
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloatingButton.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── PhilosophySection.tsx         # 2 משפטי היסוד
│   │   ├── QuickStatsBar.tsx
│   │   ├── WeeklySchedulePreview.tsx     # יום רביעי בלבד
│   │   ├── WeeklyStepWidget.tsx          # TODO(PRD3)
│   │   └── TestimonialsCarousel.tsx      # TODO(PRD3)
│   ├── classes/
│   │   ├── WednesdayScheduleCard.tsx
│   │   └── DonationBanner.tsx            # תרומות רצוניות
│   ├── curriculum/
│   │   ├── LevelCard.tsx
│   │   ├── StepList.tsx
│   │   └── SyllabusGrid.tsx
│   ├── forms/
│   │   └── ContactForm.tsx               # TODO(PRD2)
│   └── ui/
│       ├── SectionHeader.tsx
│       └── PhilosophyQuote.tsx
├── lib/
│   ├── mock-data/
│   │   ├── schedule.ts                   # לו"ז יום רביעי
│   │   ├── curriculum.ts                 # סילבוס מלא TODO(PRD3)
│   │   ├── testimonials.ts              # TODO(PRD3)
│   │   └── site-settings.ts
│   └── utils.ts
├── types/
│   └── index.ts
└── public/
    ├── logo.svg
    └── images/
```

---

### C3. types/index.ts

```typescript
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
```

---

### C4. Mock Data

#### lib/mock-data/site-settings.ts
```typescript
// TODO(PRD3): Replace with Sanity SiteSettings document
import type { SiteSettings } from '@/types';

export const mockSiteSettings: SiteSettings = {
  clubName:        "מדיה נוצ'ה כרמיאל",
  tagline:         'ריקוד קהילתי — חינם, ביחד, מתוך אהבה',
  philosophy1:     'אם לא נעשה — לא יהיה',
  philosophy2:     'מי שיודע — מלמד. מי שלא יודע — לומד.',
  activityDay:     'יום רביעי',
  activityHours:   '20:00–23:00',
  classHours:      '20:00–21:00',
  partyHours:      '21:00–23:00',
  isFree:          true,
  donationWelcome: true,
  whatsapp:        'WHATSAPP_PLACEHOLDER',  // PLACEHOLDER
  instagram:       '@INSTAGRAM_HANDLE',    // PLACEHOLDER
  facebook:        'FACEBOOK_URL',         // PLACEHOLDER
  location:        'כרמיאל',              // PLACEHOLDER — כתובת מדויקת
};
```

#### lib/mock-data/schedule.ts
```typescript
// TODO(PRD2): Replace with Supabase-backed schedule
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
```

#### lib/mock-data/curriculum.ts
```typescript
// TODO(PRD3): Replace with Supabase + Sanity CMS curriculum
// מקור: סילבוס מדיה נוצ'ה כרמיאל (גרסא ב')
import type { CurriculumLevel } from '@/types';

export const mockCurriculum: CurriculumLevel[] = [

  // ── בסיס ──────────────────────────────────────────
  {
    id: 'basis',
    nameHe: 'בסיס',
    prerequisites: [],
    categories: [
      {
        id: 'basis-main',
        nameHe: 'צעדי בסיס וכלים ראשוניים',
        steps: [
          { id:'b1',  nameHe:'טנסיון (הובלה)',    nameEn:'Tension (leading)',  youtubeUrl:'https://www.youtube.com/watch?v=VcOPRLqcKtQ', level:'basis', category:'בסיס' },
          { id:'b2',  nameHe:'צעד בסיס 1 — טיאמפו אספניה', nameEn:'Tiempo España',   youtubeUrl:'https://www.youtube.com/watch?v=502pVnWUo5c', level:'basis', category:'בסיס' },
          { id:'b3',  nameHe:'צעד בסיס 2 — מאמבו', nameEn:'Mambo Step',       youtubeUrl:'https://www.youtube.com/watch?v=D1r332W3C9Q', level:'basis', category:'בסיס' },
          { id:'b4',  nameHe:'צעד בסיס 3 — קומביה', nameEn:'Cumbia Step',     youtubeUrl:'https://www.youtube.com/watch?v=ibtt4xmtxHk', level:'basis', category:'בסיס' },
          { id:'b5',  nameHe:'צעד בסיס 4 — רומבה', nameEn:'Rumba Step',       youtubeUrl:'https://www.youtube.com/watch?v=mpvJxlO2PFQ', level:'basis', category:'בסיס' },
          { id:'b6',  nameHe:'וואפאה',             nameEn:'Guapea',            youtubeUrl:'https://www.youtube.com/watch?v=fk_H8_pvr4w', level:'basis', category:'בסיס' },
          { id:'b7',  nameHe:'דאמה',               nameEn:'Dame',              youtubeUrl:'https://www.youtube.com/watch?v=czwBiVX_8qM', level:'basis', category:'בסיס' },
          { id:'b8',  nameHe:'דילה קה נו',         nameEn:'Dile que no',       youtubeUrl:'https://www.youtube.com/watch?v=fa4EHHHFcsQ', level:'basis', category:'בסיס' },
          { id:'b9',  nameHe:"אינצ'ופלה",          nameEn:'Enchufala',         youtubeUrl:'https://www.youtube.com/watch?v=qIdSys1iE5c', level:'basis', category:'בסיס' },
        ],
      },
    ],
  },

  // ── מתחילים ───────────────────────────────────────
  {
    id: 'beginner',
    nameHe: 'מתחילים',
    prerequisites: ["וואפאה, אינצ'ופלה בסיסית, דאמה, דילה קה נו"],
    categories: [
      {
        id: 'beg-1',
        nameHe: '1 — פסטיבל בלאגן',
        steps: [
          { id:'beg1-1', nameHe:"אינצ'ופלה דובלה",      nameEn:'Enchufala Doble',      youtubeUrl:'https://www.youtube.com/watch?v=JswM_OUf2zA',  level:'beginner', category:'אינצ\'ופלה' },
          { id:'beg1-2', nameHe:"אינצ'ופלה קומפליקאדו",  nameEn:'Enchufala Complicado', youtubeUrl:'https://www.youtube.com/watch?v=CVs-VcV6FUc',  level:'beginner', category:'אינצ\'ופלה' },
          { id:'beg1-3', nameHe:'דאמה קון אונה',        nameEn:'Dame con Una',         youtubeUrl:'https://www.youtube.com/watch?v=vfZUQvly2W8',  level:'beginner', category:'דאמה' },
          { id:'beg1-4', nameHe:'דאמה קון דוס',         nameEn:'Dame con Dos',         youtubeUrl:'https://www.youtube.com/watch?v=ztk_R3bChZQ',  level:'beginner', category:'דאמה' },
          { id:'beg1-5', nameHe:'דאמה קון טרס',         nameEn:'Dame con Tres',        youtubeUrl:'https://www.youtube.com/watch?v=kKEzg2-TD3E',  level:'beginner', category:'דאמה' },
          { id:'beg1-6', nameHe:"אינצ'ופלה אי דאמה",    nameEn:'Enchufala y Dame',     youtubeUrl:'https://www.youtube.com/watch?v=A6UP2vXuAP8',  level:'beginner', category:'קומבינציה' },
          { id:'beg1-7', nameHe:'פסטיבל בלאגן',         nameEn:'Festival Balagan',     youtubeUrl:'https://www.youtube.com/watch?v=MY_YF-V7usg',  level:'beginner', category:'פסטיבל' },
        ],
      },
      {
        id: 'beg-2',
        nameHe: '2 — הומברס א',
        steps: [
          { id:'beg2-1', nameHe:'הומברס אל סנטרו',  nameEn:'Hombres el Centro',  youtubeUrl:'https://www.youtube.com/watch?v=joxuPhdcw6Q', level:'beginner', category:'הומברס' },
          { id:'beg2-2', nameHe:'וואלטה (קפאים)',    nameEn:'Vuelta (Kapaim)',     youtubeUrl:'https://www.youtube.com/watch?v=HvcoL0ROzjM', level:'beginner', category:'הומברס' },
          { id:'beg2-3', nameHe:'חייפה',             nameEn:'Haifa',               youtubeUrl:'https://www.youtube.com/watch?v=IABE2jMLfDk', level:'beginner', category:'הומברס' },
          { id:'beg2-4', nameHe:'לה פלוטה',         nameEn:'La Pelota',           youtubeUrl:'https://www.youtube.com/watch?v=7MFz-fyMhPs', level:'beginner', category:'הומברס' },
          { id:'beg2-5', nameHe:'לה פלוטה קלאבה',   nameEn:'La Pelota Clave',     youtubeUrl:'https://www.youtube.com/watch?v=uFH0WquC25Y', level:'beginner', category:'הומברס' },
          { id:'beg2-6', nameHe:'לה פלוטה לוקה',    nameEn:'La Pelota Loca',      youtubeUrl:'https://www.youtube.com/watch?v=aNuHV16UZbo', level:'beginner', category:'הומברס' },
          { id:'beg2-7', nameHe:'און פליי',          nameEn:'Un Fly',              youtubeUrl:'http://www.youtube.com/watch?v=RACdB7KIpqU',  level:'beginner', category:'הומברס' },
          { id:'beg2-8', nameHe:'פאלמאס',            nameEn:'Palmas',              youtubeUrl:'http://www.youtube.com/watch?v=vVKqne5_7J0',  level:'beginner', category:'הומברס' },
          { id:'beg2-9', nameHe:'צ\'אפאריה',         nameEn:'Chaparia',            youtubeUrl:'http://www.youtube.com/watch?v=GJBzdH8sLA8',  level:'beginner', category:'הומברס' },
          { id:'beg2-10',nameHe:'פסטיבל בואנו מאלו', nameEn:'Festival Bueno Malo', youtubeUrl:'https://www.youtube.com/watch?v=yZ8bT8zAMJ0', level:'beginner', category:'פסטיבל' },
        ],
      },
      {
        id: 'beg-3',
        nameHe: '3 — טאפ',
        steps: [
          { id:'beg3-1', nameHe:'לנטו',          nameEn:'Lento',          youtubeUrl:'http://www.youtube.com/watch?v=yqVwoeJ54g0',  level:'beginner', category:'טאפ' },
          { id:'beg3-2', nameHe:'ואסילאלה',       nameEn:'Vacilala',       youtubeUrl:'http://www.youtube.com/watch?v=I0EJMHecG_0',  level:'beginner', category:'טאפ' },
          { id:'beg3-3', nameHe:'סייטה',          nameEn:'Siete',          youtubeUrl:'http://www.youtube.com/watch?v=XKtt8CB7J3M',  level:'beginner', category:'טאפ' },
          { id:'beg3-4', nameHe:'סייטה מודרנו',   nameEn:'Siete Moderno',  youtubeUrl:'http://www.youtube.com/watch?v=YFVtFvu7GTk',  level:'beginner', category:'טאפ' },
        ],
      },
      {
        id: 'beg-4',
        nameHe: '4 — פרימה',
        steps: [
          { id:'beg4-1', nameHe:'פרימה',                  nameEn:'Prima',               youtubeUrl:'http://www.youtube.com/watch?v=X44m1VUtV9g',  level:'beginner', category:'פרימה' },
          { id:'beg4-2', nameHe:'אדיוס',                  nameEn:'Adios',               youtubeUrl:'https://www.youtube.com/watch?v=palabYHmKns',  level:'beginner', category:'פרימה' },
          { id:'beg4-3', nameHe:'פרימה קון לה הרמנה',     nameEn:'Prima con la Hermana',youtubeUrl:'http://www.youtube.com/watch?v=iWJDuhiVs-E',   level:'beginner', category:'פרימה' },
          { id:'beg4-4', nameHe:'אבלין',                  nameEn:'Evelyn',              youtubeUrl:'https://www.youtube.com/watch?v=6m0EuDJu_As',  level:'beginner', category:'פרימה' },
        ],
      },
      {
        id: 'beg-5',
        nameHe: '5 — סומבררו',
        steps: [
          { id:'beg5-1', nameHe:'סומבררו',          nameEn:'Sombrero',       youtubeUrl:'http://www.youtube.com/watch?v=Y0U309VrG2w',  level:'beginner', category:'סומבררו' },
          { id:'beg5-2', nameHe:'לאסו',             nameEn:'Laso',           youtubeUrl:'https://www.youtube.com/watch?v=xYvHcA5u0WI', level:'beginner', category:'סומבררו' },
          { id:'beg5-3', nameHe:'סומבררו איי לאסו', nameEn:'Sombrero y Laso',youtubeUrl:'https://www.youtube.com/watch?v=EMMMdJqtmpM', level:'beginner', category:'סומבררו' },
          { id:'beg5-4', nameHe:'מונטניה',          nameEn:'Montaña',        youtubeUrl:'http://www.youtube.com/watch?v=eWHH4JYQe_o',  level:'beginner', category:'סומבררו' },
        ],
      },
      {
        id: 'beg-6',
        nameHe: '6 — קנטאקי',
        steps: [
          { id:'beg6-1', nameHe:'קנדאדו',   nameEn:'Candado', youtubeUrl:'http://www.youtube.com/watch?v=tH5m2JgVCYc',  level:'beginner', category:'back' },
          { id:'beg6-2', nameHe:'מיאמי',    nameEn:'Miami',   youtubeUrl:'http://www.youtube.com/watch?v=YwGzyrABKlE',  level:'beginner', category:'back' },
          { id:'beg6-3', nameHe:'קנטאקי',   nameEn:'Kentucky',youtubeUrl:'http://www.youtube.com/watch?v=1IrFrFKKkeI',  level:'beginner', category:'back' },
          { id:'beg6-4', nameHe:'האוואנה',  nameEn:'Havana',  youtubeUrl:'http://www.youtube.com/watch?v=QsezvdEgPkE',  level:'beginner', category:'back' },
        ],
      },
      {
        id: 'beg-7',
        nameHe: '7 — טיאמפו',
        steps: [
          { id:'beg7-1', nameHe:'טיאמפו אספניה', nameEn:'Tiempo España',    youtubeUrl:'https://www.youtube.com/watch?v=wl0jwLo5bLc', level:'beginner', category:'טיאמפו' },
          { id:'beg7-2', nameHe:'טארו',           nameEn:'Taro',             youtubeUrl:'http://www.youtube.com/watch?v=tCnZZHEfbQI',  level:'beginner', category:'טיאמפו' },
          { id:'beg7-3', nameHe:'פארא אל מדיו',   nameEn:'Para el Medio',   youtubeUrl:'https://www.youtube.com/watch?v=H5OPu50Ih_Y', level:'beginner', category:'טיאמפו' },
          { id:'beg7-4', nameHe:'פארא אבאחו',     nameEn:'Para Abajo',      youtubeUrl:'https://www.youtube.com/watch?v=DoRldDMHUZw', level:'beginner', category:'טיאמפו' },
        ],
      },
      {
        id: 'beg-8',
        nameHe: '8 — קוקה קולה',
        steps: [
          { id:'beg8-1', nameHe:'קוקה קולה',            nameEn:'Coca Cola',          youtubeUrl:'http://www.youtube.com/watch?v=LM43cc7OhBs',  level:'beginner', category:'קוקה קולה' },
          { id:'beg8-2', nameHe:"אינצ'ופלה קוקה קולה",  nameEn:'Enchufala Coca Cola',youtubeUrl:'https://www.youtube.com/watch?v=ZPVka4OtBeg', level:'beginner', category:'קוקה קולה' },
          { id:'beg8-3', nameHe:'סייטה קוקה קולה',      nameEn:'Siete Coca Cola',    youtubeUrl:'http://www.youtube.com/watch?v=73STWQdEE7M',  level:'beginner', category:'קוקה קולה' },
          { id:'beg8-4', nameHe:'אקסיביילה',             nameEn:'Exhibala',           youtubeUrl:'http://www.youtube.com/watch?v=QLWeMZ6SoR4',  level:'beginner', category:'קוקה קולה' },
        ],
      },
      {
        id: 'beg-9',
        nameHe: '9 — סיבובים ומעברים',
        steps: [
          { id:'beg9-1', nameHe:'דירקטו',              nameEn:'Directo',             youtubeUrl:'https://www.youtube.com/watch?v=TfnUsjrnb0g', level:'beginner', category:'סיבובים' },
          { id:'beg9-2', nameHe:"דאמה אוקאיטו",        nameEn:'Dame Ocaito',         youtubeUrl:'https://www.youtube.com/watch?v=PDMCcKw_x6M', level:'beginner', category:'סיבובים' },
          { id:'beg9-3', nameHe:'אונה אבאחו',          nameEn:'Una Abajo',           youtubeUrl:'https://www.youtube.com/watch?v=u3NCKWY1KVQ', level:'beginner', category:'סיבובים' },
          { id:'beg9-4', nameHe:'פסטיבל פיסינה קילו',  nameEn:'Festival Piscina Kilo',youtubeUrl:'https://www.youtube.com/watch?v=41i0_UQ9Z34',level:'beginner', category:'פסטיבל' },
        ],
      },
      {
        id: 'beg-10',
        nameHe: '10 — Back Variations',
        steps: [
          { id:'beg10-1', nameHe:'אל אונו',          nameEn:'El Uno',         youtubeUrl:'http://www.youtube.com/watch?v=d9iNf6pm-jk',  level:'beginner', category:'back' },
          { id:'beg10-2', nameHe:'אל דוס',           nameEn:'El Dos',         youtubeUrl:'https://www.youtube.com/watch?v=mS2JqDNt8sY', level:'beginner', category:'back' },
          { id:'beg10-3', nameHe:'Three Way Stop',    nameEn:'Three Way Stop', youtubeUrl:'https://www.youtube.com/watch?v=j6Di28x1RjI', level:'beginner', category:'back' },
        ],
      },
    ],
  },

  // ── בינוני ────────────────────────────────────────
  {
    id: 'intermediate',
    nameHe: 'בינוני',
    prerequisites: ['לנטו', 'סייטה', 'פרימה', 'סומבררו', 'קנטאקי'],
    categories: [
      {
        id: 'int-1',
        nameHe: '1 — יד אחת/שתי ידיים',
        steps: [
          { id:'int1-1', nameHe:'פלמנקו', nameEn:'Flamenco', youtubeUrl:'https://www.youtube.com/watch?v=geb756OHGFA', level:'intermediate', category:'ידיים' },
          { id:'int1-2', nameHe:'אבאניקו', nameEn:'Abanico',  youtubeUrl:'https://www.youtube.com/watch?v=6BAGfZS0dPE', level:'intermediate', category:'ידיים' },
          { id:'int1-3', nameHe:'דדו',     nameEn:'Dedo',      youtubeUrl:'http://www.youtube.com/watch?v=P3yusJNVslo',  level:'intermediate', category:'ידיים' },
        ],
      },
      {
        id: 'int-2',
        nameHe: '2 — הומברס ב',
        steps: [
          { id:'int2-1', nameHe:'דרצ\'ה',           nameEn:'Derecha',           youtubeUrl:'https://www.youtube.com/watch?v=AzbztZBlmoo', level:'intermediate', category:'הומברס' },
          { id:'int2-2', nameHe:"דאמה קון מאנוס",   nameEn:'Dame con Manos',    youtubeUrl:'https://www.youtube.com/watch?v=dN5-ItEzeVY',  level:'intermediate', category:'הומברס' },
          { id:'int2-3', nameHe:"דאמה קון מאנוס טרס",nameEn:'Dame con Manos Tres',youtubeUrl:'https://www.youtube.com/watch?v=ux4xuRjinas',level:'intermediate', category:'הומברס' },
          { id:'int2-4', nameHe:'קאדנה',             nameEn:'Cadena',            youtubeUrl:'https://www.youtube.com/watch?v=tzYOzT6mV9Y', level:'intermediate', category:'הומברס' },
          { id:'int2-5', nameHe:'סרו',               nameEn:'Cero',              youtubeUrl:'https://www.youtube.com/watch?v=rflTICyo7is',  level:'intermediate', category:'הומברס' },
          { id:'int2-6', nameHe:'אוצ\'ו',            nameEn:'Ocho',              youtubeUrl:'https://www.youtube.com/watch?v=Vk3XDh4k_Q8',  level:'intermediate', category:'הומברס' },
          { id:'int2-7', nameHe:'אוצ\'נטה',          nameEn:'Ochenta',           youtubeUrl:'https://www.youtube.com/watch?v=PuB34PS0-5w',  level:'intermediate', category:'הומברס' },
        ],
      },
      {
        id: 'int-3',
        nameHe: '3 — סייטה מתקדם',
        steps: [
          { id:'int3-1', nameHe:'אטרביידו',     nameEn:'Atrevido',      youtubeUrl:'https://www.youtube.com/watch?v=Jcq-3fCdEc4', level:'intermediate', category:'סייטה' },
          { id:'int3-2', nameHe:'סייטה לוקו',   nameEn:'Siete Loco',    youtubeUrl:'http://www.youtube.com/watch?v=2ac45ElWQfY',  level:'intermediate', category:'סייטה' },
          { id:'int3-3', nameHe:'סייטה מודרנו', nameEn:'Siete Moderno', youtubeUrl:'http://www.youtube.com/watch?v=YFVtFvu7GTk',  level:'intermediate', category:'סייטה' },
          { id:'int3-4', nameHe:'סייטה קוקה קולה',nameEn:'Siete Coca Cola',youtubeUrl:'http://www.youtube.com/watch?v=73STWQdEE7M',level:'intermediate', category:'סייטה' },
        ],
      },
      {
        id: 'int-4',
        nameHe: '4 — פסטיבל פרימה',
        steps: [
          { id:'int4-1', nameHe:'אסקיפי לה פרימה פורמה', nameEn:'Esquipi la Prima Forma', youtubeUrl:'http://www.youtube.com/watch?v=CV9ioQsNBJs', level:'intermediate', category:'פרימה' },
          { id:'int4-2', nameHe:'פרימה קון פאוליטו',      nameEn:'Prima con Paulito',       youtubeUrl:'http://www.youtube.com/watch?v=6uvgc3zm9pM', level:'intermediate', category:'פרימה' },
          { id:'int4-3', nameHe:'אדיוס אאריבה',           nameEn:'Adios Arriba',            youtubeUrl:'https://www.youtube.com/watch?v=zFe6w9wFmcI', level:'intermediate', category:'פרימה' },
          { id:'int4-4', nameHe:'פסטיבל פרימה',           nameEn:'Festival Prima',          youtubeUrl:'http://www.youtube.com/watch?v=fcLxYzdqjrc',  level:'intermediate', category:'פסטיבל' },
        ],
      },
      {
        id: 'int-5',
        nameHe: '5 — בסו',
        steps: [
          { id:'int5-1', nameHe:'בסו',      nameEn:'Beso',      youtubeUrl:'http://www.youtube.com/watch?v=8QXhay26TIU', level:'intermediate', category:'בסו' },
          { id:'int5-2', nameHe:'אברסאלה',  nameEn:'Abrazala',  youtubeUrl:'http://www.youtube.com/watch?v=8QKVjRIbxbY', level:'intermediate', category:'בסו' },
          { id:'int5-3', nameHe:'בלסרו',    nameEn:'Balsero',   youtubeUrl:'https://www.youtube.com/watch?v=wuToHoNijqQ',level:'intermediate', category:'בסו' },
        ],
      },
      {
        id: 'int-6',
        nameHe: '6 — סטנטות',
        steps: [
          { id:'int6-1', nameHe:"סטנטה (70)",          nameEn:'Setenta',           youtubeUrl:'http://www.youtube.com/watch?v=fxcXu6gmyu8',  level:'intermediate', category:'סטנטות' },
          { id:'int6-2', nameHe:"סטנטה איי סינקו (75)",nameEn:'Setenta y Cinco',   youtubeUrl:'http://www.youtube.com/watch?v=X2DyBUaCZ8g',  level:'intermediate', category:'סטנטות' },
          { id:'int6-3', nameHe:"סטנטה קומפליקאדו",    nameEn:'Setenta Complicado',youtubeUrl:'http://www.youtube.com/watch?v=iBhFE1XJu2Q',  level:'intermediate', category:'סטנטות' },
        ],
      },
    ],
  },

  // ── מתקדמים ───────────────────────────────────────
  {
    id: 'advanced',
    nameHe: 'מתקדמים',
    prerequisites: ['כל רמת בינוני'],
    categories: [
      {
        id: 'adv-1',
        nameHe: '1',
        steps: [
          { id:'adv1-1', nameHe:'סומבררו דובלה',     nameEn:'Sombrero Doble',       youtubeUrl:'https://www.youtube.com/watch?v=WSYNp3iu1ks',  level:'advanced', category:'סומבררו' },
          { id:'adv1-2', nameHe:"חואנה לה קובאנה",   nameEn:'Juana la Cubana',      youtubeUrl:'https://www.youtube.com/watch?v=rEUUI2-m8ow',   level:'advanced', category:'סומבררו' },
          { id:'adv1-3', nameHe:'קנטאקי קומפליקאדו', nameEn:'Kentucky Complicado',  youtubeUrl:'https://www.youtube.com/watch?v=mB7JViSgjh8',   level:'advanced', category:'back' },
        ],
      },
      {
        id: 'adv-2',
        nameHe: '2',
        steps: [
          { id:'adv2-1', nameHe:'ואסילאלה אנטראדה',  nameEn:'Vacilala Entrada',  youtubeUrl:'https://www.youtube.com/watch?v=kBB1YE2E7vM',  level:'advanced', category:'מיוחד' },
          { id:'adv2-2', nameHe:'קולון',              nameEn:'Colon',             youtubeUrl:'https://www.youtube.com/watch?v=l5gjv49kz4c',   level:'advanced', category:'מיוחד' },
          { id:'adv2-3', nameHe:'קולון קון אמיגה',    nameEn:'Colon con Amiga',   youtubeUrl:'https://www.youtube.com/watch?v=ta3wNp6CALo',   level:'advanced', category:'מיוחד' },
        ],
      },
      {
        id: 'adv-3',
        nameHe: '3',
        steps: [
          { id:'adv3-1', nameHe:'דדו גוואראפו',   nameEn:'Dedo Guarapo y Bota', youtubeUrl:'https://www.youtube.com/watch?v=xzDEE6aXL9o', level:'advanced', category:'דדו' },
          { id:'adv3-2', nameHe:'דדו סאבוראדו',   nameEn:'Dedo Saboreado',      youtubeUrl:'https://www.youtube.com/watch?v=0imJRB-Jp9A',  level:'advanced', category:'דדו' },
        ],
      },
      {
        id: 'adv-4',
        nameHe: '4',
        steps: [
          { id:'adv4-1', nameHe:'אמיסטד',              nameEn:'Amistad',              youtubeUrl:'https://www.youtube.com/watch?v=GWH1CBe2KXE', level:'advanced', category:'מיוחד' },
          { id:'adv4-2', nameHe:'אסקיפי קון אמיסטד',   nameEn:'Esquipi con Amistad',  youtubeUrl:'https://www.youtube.com/watch?v=17RY54Ry_Ps', level:'advanced', category:'מיוחד' },
          { id:'adv4-3', nameHe:'פואנטה',              nameEn:'Puente',               youtubeUrl:'https://www.youtube.com/watch?v=QLj6hTsQ4Og', level:'advanced', category:'מיוחד' },
        ],
      },
      {
        id: 'adv-5',
        nameHe: '5',
        steps: [
          { id:'adv5-1', nameHe:'אל דוסה',     nameEn:'El Doce',    youtubeUrl:'https://www.youtube.com/watch?v=3E8d2AN8I34', level:'advanced', category:'מיוחד' },
          { id:'adv5-2', nameHe:'אל מלאו',     nameEn:'El Melao',   youtubeUrl:'https://www.youtube.com/watch?v=N1_qpOY9r7M', level:'advanced', category:'מיוחד' },
          { id:'adv5-3', nameHe:'פונלה סאבור', nameEn:'Ponle Sabor',youtubeUrl:'https://www.youtube.com/watch?v=uFQehTqZfPg', level:'advanced', category:'מיוחד' },
        ],
      },
      {
        id: 'adv-6',
        nameHe: '6',
        steps: [
          { id:'adv6-1', nameHe:"סטנטה נואבו",    nameEn:'Setenta Nuevo',  youtubeUrl:'https://www.youtube.com/watch?v=ccpDxJsrOns', level:'advanced', category:'סטנטות' },
          { id:'adv6-2', nameHe:'נובנטה',          nameEn:'Noventa',        youtubeUrl:'https://www.youtube.com/watch?v=HcnWjZryHGI',  level:'advanced', category:'סטנטות' },
          { id:'adv6-3', nameHe:"סייטה סטנטה",    nameEn:'Siete Setenta',  youtubeUrl:'https://www.youtube.com/watch?v=GK03gkoTeGw',  level:'advanced', category:'סטנטות' },
        ],
      },
    ],
  },

  // ── מאסטר ─────────────────────────────────────────
  {
    id: 'master',
    nameHe: 'מאסטר',
    prerequisites: ['כל רמת מתקדמים'],
    categories: [
      {
        id: 'master-1',
        nameHe: '1 — בסו מתקדם וסומבררו',
        steps: [
          { id:'m1-1', nameHe:'בסו לוקו',                    nameEn:'Beso Loco',               youtubeUrl:'https://www.youtube.com/watch?v=PpFqYMh55BY',  level:'master', category:'בסו' },
          { id:'m1-2', nameHe:'בסו קומפליקאדו',              nameEn:'Beso Complicado',         youtubeUrl:'https://www.youtube.com/watch?v=is5lspyc7iw',  level:'master', category:'בסו' },
          { id:'m1-3', nameHe:'בסו פור דבאחו',               nameEn:'Beso por Debajo',         youtubeUrl:'https://www.youtube.com/watch?v=pO6wergxM0I',  level:'master', category:'בסו' },
          { id:'m1-4', nameHe:'בלסרו קומפליקאדו',            nameEn:'Balsero Complicado',      youtubeUrl:'https://www.youtube.com/watch?v=pXxl9aJkBnM',  level:'master', category:'בסו' },
          { id:'m1-5', nameHe:'אבאניקו קומפליקאדו',          nameEn:'Abanico Complicado',      youtubeUrl:'https://www.youtube.com/watch?v=ZHz_7js8Hko',  level:'master', category:'ידיים' },
          { id:'m1-6', nameHe:'טורנדו',                      nameEn:'Tornado',                 youtubeUrl:'https://www.youtube.com/watch?v=MAUjuo71jB0',  level:'master', category:'מאסטר' },
          { id:'m1-7', nameHe:'מיקאלה',                      nameEn:'Micaela',                 youtubeUrl:'https://www.youtube.com/watch?v=nKNDnzRzDr8',  level:'master', category:'מאסטר' },
          { id:'m1-8', nameHe:'תליה',                        nameEn:'Thalia',                  youtubeUrl:'https://www.youtube.com/watch?v=cThYwpFWbyQ',  level:'master', category:'מאסטר' },
          { id:'m1-9', nameHe:'לה חני',                      nameEn:'La Jenny',                youtubeUrl:'https://www.youtube.com/watch?v=56IOwturFRU',  level:'master', category:'מאסטר' },
        ],
      },
    ],
  },
];
```

---

### C5. tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:  { DEFAULT:'#8B0000', dark:'#4A0000', light:'#B22222' },
        gold:     { DEFAULT:'#C9A84C', light:'#E8C97A' },
        dark:     { DEFAULT:'#0D0D0D', card:'#1A1A1A', border:'#2A2A2A' },
        light:    { DEFAULT:'#FAF7F2', muted:'#F0EBE3' },
        community:{ DEFAULT:'#1A5C1A', light:'#E8F5E9' },
      },
      fontFamily: {
        display: ['Playfair Display','Georgia','serif'],
        body:    ['Lato','Helvetica Neue','sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity:'0', transform:'translateY(24px)' },
          '100%': { opacity:'1', transform:'translateY(0)' },
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
```

---

### C6. app/globals.css

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary:      #8B0000;
  --primary-dark: #4A0000;
  --gold:         #C9A84C;
  --dark:         #0D0D0D;
  --dark-card:    #1A1A1A;
  --light:        #FAF7F2;
  --community:    #1A5C1A;
  --radius:       0.75rem;
}

html { direction: rtl; }
body { font-family:'Lato',sans-serif; background:var(--light); color:#1A1A1A; }
h1,h2,h3,h4 { font-family:'Playfair Display',serif; }

.section-dark      { background:var(--dark); color:white; }
.section-light     { background:var(--light); }
.section-community { background:var(--community); color:white; }
.container-rtl     { max-width:1200px; margin:0 auto; padding:0 1.5rem; }

/* WhatsApp button */
.whatsapp-float {
  position:fixed; bottom:1.5rem; left:1.5rem; z-index:999;
  width:3.5rem; height:3.5rem; background:#25D366; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  box-shadow:0 4px 20px rgba(37,211,102,0.4);
  animation: pulse-slow 3s infinite;
  transition: transform 0.2s;
}
.whatsapp-float:hover { transform:scale(1.1); }

/* Philosophy quotes */
.philosophy-quote {
  font-family:'Playfair Display',serif;
  font-size:1.5rem;
  color:var(--gold);
  text-align:center;
  border-right: 4px solid var(--gold);
  padding-right: 1rem;
}
```

---

### C7. app/layout.tsx

```tsx
import type { Metadata } from 'next';
import './globals.css';
import { Navbar }                 from '@/components/layout/Navbar';
import { Footer }                 from '@/components/layout/Footer';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { mockSiteSettings }       from '@/lib/mock-data/site-settings';

export const metadata: Metadata = {
  title: {
    default:  `${mockSiteSettings.clubName} — מועדון סלסה קהילתי`,
    template: `%s | ${mockSiteSettings.clubName}`,
  },
  description: 'מועדון סלסה קהילתי בכרמיאל — חינם, כל יום רביעי 20:00. מי שיודע מלמד, מי שלא יודע לומד.',
  keywords:    ['סלסה כרמיאל','ריקוד חינם','מועדון קהילתי','salsa karmiel'],
  openGraph: { type:'website', locale:'he_IL', siteName:mockSiteSettings.clubName },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton phone={mockSiteSettings.whatsapp} />
      </body>
    </html>
  );
}
```

---

### C8. components/home/PhilosophySection.tsx

```tsx
// הקומפוננט החשוב ביותר — לשים בדף הבית בולט
import { mockSiteSettings } from '@/lib/mock-data/site-settings';

export function PhilosophySection() {
  return (
    <section className="section-dark py-20">
      <div className="container-rtl text-center">
        <p className="text-gold text-sm uppercase tracking-widest mb-8 font-body">
          הפילוסופיה שלנו
        </p>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-fade-up">
            <div className="philosophy-quote mb-4">
              "{mockSiteSettings.philosophy1}"
            </div>
            <p className="text-white/60 text-sm font-body">
              כל אחד מאיתנו הוא חלק ממה שיוצר את הקהילה הזו
            </p>
          </div>
          <div className="animate-fade-up" style={{ animationDelay:'0.2s' }}>
            <div className="philosophy-quote mb-4">
              "{mockSiteSettings.philosophy2}"
            </div>
            <p className="text-white/60 text-sm font-body">
              הידע עובר הלאה — כך הקהילה גדלה וכולם מרוויחים
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### C9. components/home/HeroSection.tsx

```tsx
import Link from 'next/link';
import { mockSiteSettings } from '@/lib/mock-data/site-settings';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-card to-primary-dark" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center text-white px-4 animate-fade-up">
        {/* תג חינם — בולט */}
        <div className="inline-flex items-center gap-2 bg-community/80 text-white text-sm px-4 py-2 rounded-full mb-6 font-body">
          🆓 <span>כניסה חינם — תרומות בלבד</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight">
          {mockSiteSettings.clubName}
        </h1>
        <p className="font-body text-xl md:text-2xl text-white/80 mb-4 max-w-2xl mx-auto">
          {mockSiteSettings.tagline}
        </p>

        {/* יום ושעה בולט */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur px-6 py-3 rounded-xl mb-10 font-body">
          <span className="text-gold text-2xl font-bold">📅 {mockSiteSettings.activityDay}</span>
          <span className="text-white/60">|</span>
          <span className="text-white font-medium">{mockSiteSettings.activityHours}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/classes"
            className="bg-primary hover:bg-primary-dark px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105">
            פרטים על השיעורים 💃
          </Link>
          <Link href="/curriculum"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-dark px-8 py-4 rounded-lg font-bold text-lg transition-all">
            סילבוס הצעדים
          </Link>
        </div>
      </div>
    </section>
  );
}
```

---

### C10. app/classes/page.tsx — לוח שיעורים

```tsx
import type { Metadata } from 'next';
import { mockWednesdaySchedule } from '@/lib/mock-data/schedule';
import { mockSiteSettings }      from '@/lib/mock-data/site-settings';

export const metadata: Metadata = {
  title: 'שיעורים',
  description: 'שיעורי סלסה חינם כל יום רביעי 20:00–23:00 בכרמיאל.',
};

const LEVEL_LABELS: Record<string, string> = {
  basis:           'בסיס — לגמרי מתחילים',
  beginner:        'מתחילים',
  'beginner-tech': 'מתחילים — טכניקה',
  intermediate:    'בינוני',
  advanced:        'מתקדמים',
  master:          'מאסטר',
};

export default function ClassesPage() {
  const s = mockSiteSettings;
  const sched = mockWednesdaySchedule;
  return (
    <main className="section-light min-h-screen">
      <div className="container-rtl py-16">
        <h1 className="font-display text-4xl font-bold text-primary mb-4">לוח שיעורים</h1>

        {/* DonationBanner — חינם */}
        <div className="bg-community text-white rounded-xl p-6 mb-10 text-center">
          <div className="text-3xl mb-2">🆓</div>
          <h2 className="font-display text-2xl font-bold mb-1">כניסה חינם לחלוטין</h2>
          <p className="text-white/80 font-body">
            המועדון מנוהל על ידי מתנדבים. לא תשלם כלום — אבל תרומות תמיד מתקבלות בשמחה 💛
          </p>
        </div>

        {/* יום ושעה */}
        <div className="bg-dark text-white rounded-xl p-8 mb-10 text-center">
          <p className="text-gold text-sm uppercase tracking-widest font-body mb-2">פעילות קבועה</p>
          <div className="font-display text-5xl font-bold text-white mb-2">{s.activityDay}</div>
          <div className="font-body text-2xl text-gold">{s.activityHours}</div>
          <div className="mt-6 grid md:grid-cols-2 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-gold font-bold text-lg">🎓 {s.classHours}</div>
              <div className="text-white/80 text-sm mt-1">שיעורים ברמות השונות</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-gold font-bold text-lg">💃 {s.partyHours}</div>
              <div className="text-white/80 text-sm mt-1">מסיבת ריקודים</div>
            </div>
          </div>
        </div>

        {/* רמות */}
        <h2 className="font-display text-2xl font-bold mb-6">הרמות בשיעור ({s.classHours})</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {sched.sessions.map(session => (
            <div key={session.id}
              className="bg-white rounded-xl p-6 shadow-sm border-r-4 border-primary">
              <h3 className="font-display text-lg font-bold text-primary mb-2">
                {LEVEL_LABELS[session.level]}
              </h3>
              <p className="text-gray-600 text-sm font-body mb-3">{session.description}</p>
              <div className="flex gap-4 text-sm text-gray-500 font-body">
                <span>⏰ {session.timeStart}–{session.timeEnd}</span>
                <span>👤 {session.instructor}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy quote */}
        <div className="bg-dark text-white rounded-xl p-8 text-center">
          <p className="philosophy-quote text-xl">"{mockSiteSettings.philosophy2}"</p>
        </div>
      </div>
    </main>
  );
}
```

---

### C11. app/curriculum/page.tsx — סילבוס

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { mockCurriculum } from '@/lib/mock-data/curriculum';

export const metadata: Metadata = {
  title: 'סילבוס — תוכנית הלימודים',
  description: 'תוכנית הלימודים המלאה של מדיה נוצ\'ה כרמיאל — מבסיס ועד מאסטר.',
};

const LEVEL_COLORS: Record<string, string> = {
  basis:           'bg-blue-100  border-blue-400  text-blue-800',
  beginner:        'bg-green-100 border-green-400 text-green-800',
  'beginner-tech': 'bg-teal-100  border-teal-400  text-teal-800',
  intermediate:    'bg-yellow-100 border-yellow-400 text-yellow-800',
  advanced:        'bg-orange-100 border-orange-400 text-orange-800',
  master:          'bg-red-100   border-red-400   text-red-800',
};

export default function CurriculumPage() {
  return (
    <main className="section-light min-h-screen">
      <div className="container-rtl py-16">
        <h1 className="font-display text-4xl font-bold text-primary mb-2">סילבוס הצעדים</h1>
        <p className="text-gray-600 font-body mb-10">
          תוכנית הלימודים המלאה — מבסיס לחלוטין ועד רמת מאסטר. כל צעד עם סרטון הדרכה.
        </p>

        <div className="space-y-6">
          {mockCurriculum.map(level => (
            <div key={level.id}
              className={`rounded-xl border-2 p-6 ${LEVEL_COLORS[level.id]}`}>
              <div className="flex justify-between items-start mb-3">
                <h2 className="font-display text-2xl font-bold">{level.nameHe}</h2>
                <Link href={`/curriculum/${level.id}`}
                  className="text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors font-body">
                  כל הצעדים ←
                </Link>
              </div>
              {level.prerequisites.length > 0 && (
                <p className="text-sm font-body mb-3 opacity-80">
                  דרישות קדם: {level.prerequisites.join(' | ')}
                </p>
              )}
              {/* תצוגה מקדימה — 3 קטגוריות ראשונות */}
              <div className="flex flex-wrap gap-2">
                {level.categories.slice(0, 3).map(cat => (
                  <span key={cat.id}
                    className="text-xs bg-white/60 px-3 py-1 rounded-full font-body">
                    {cat.nameHe} ({cat.steps.length} צעדים)
                  </span>
                ))}
                {level.categories.length > 3 && (
                  <span className="text-xs bg-white/60 px-3 py-1 rounded-full font-body">
                    +{level.categories.length - 3} עוד...
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
```

---

### C12. app/curriculum/[level]/page.tsx — רמה בודדת

```tsx
import { mockCurriculum } from '@/lib/mock-data/curriculum';
import { notFound }       from 'next/navigation';
import type { Metadata }  from 'next';

export async function generateMetadata({ params }: { params: { level: string } }): Promise<Metadata> {
  const level = mockCurriculum.find(l => l.id === params.level);
  return { title: `סילבוס — ${level?.nameHe ?? params.level}` };
}

export default function LevelPage({ params }: { params: { level: string } }) {
  const level = mockCurriculum.find(l => l.id === params.level);
  if (!level) notFound();

  return (
    <main className="section-light min-h-screen">
      <div className="container-rtl py-16">
        <h1 className="font-display text-4xl font-bold text-primary mb-2">{level.nameHe}</h1>
        {level.prerequisites.length > 0 && (
          <p className="text-gray-500 font-body mb-10 text-sm">
            דרישות קדם: {level.prerequisites.join(' | ')}
          </p>
        )}

        <div className="space-y-8">
          {level.categories.map(cat => (
            <div key={cat.id} className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-display text-xl font-bold mb-4 text-primary border-b pb-2">
                {cat.nameHe}
              </h2>
              <ul className="space-y-3">
                {cat.steps.map(step => (
                  <li key={step.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-light transition-colors">
                    <div>
                      <span className="font-body font-medium">{step.nameHe}</span>
                      <span className="text-gray-400 text-sm font-body mr-2">— {step.nameEn}</span>
                    </div>
                    <a href={step.youtubeUrl}
                       target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1 text-sm bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1 rounded-full transition-colors font-body">
                      ▶ YouTube
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
```

---

### C13. SEO Metadata לכל דף

```typescript
// app/about/page.tsx
export const metadata: Metadata = {
  title: 'אודות',
  description: 'מדיה נוצ\'ה כרמיאל — מועדון סלסה קהילתי מבוסס-מתנדבים. חינם, ביחד, מתוך אהבה לריקוד.',
};

// app/classes/page.tsx
export const metadata: Metadata = {
  title: 'שיעורים — כל יום רביעי',
  description: 'שיעורי סלסה חינם כל יום רביעי 20:00–21:00. אחרי השיעור — מסיבת ריקודים עד 23:00.',
};

// app/curriculum/page.tsx
export const metadata: Metadata = {
  title: 'סילבוס — תוכנית הלימודים',
  description: 'סילבוס מלא של מדיה נוצ\'ה כרמיאל — מבסיס ועד מאסטר, עם סרטוני הדרכה לכל צעד.',
};

// app/contact/page.tsx
export const metadata: Metadata = {
  title: 'צור קשר',
  description: 'בואו לרקוד איתנו — מדיה נוצ\'ה כרמיאל, כל יום רביעי.',
};
```

---

## PART D — הפרומפט ל-Claude Code

### D1. הפרומפט — העתק ושלח

```
אתה מפתח אתר עבור מועדון הסלסה הקהילתי 'מדיה נוצ'ה כרמיאל'.
קרא את CLAUDE.md ו-PRD1-TRD.md ופעל לפיהם בדיוק.

זהות המועדון (חשוב מאוד!):
- המועדון חינם לחלוטין — אין מחירים, יש תרומות רצוניות בלבד
- פעילות: יום רביעי בלבד, 20:00–23:00
- 20:00–21:00 שיעורים | 21:00–23:00 מסיבה
- שני משפטי יסוד שחייבים להופיע בבולטות:
  1. "אם לא נעשה — לא יהיה"
  2. "מי שיודע — מלמד. מי שלא יודע — לומד."
- כולם מתנדבים — אין "מדריך" בתשלום

חוקים:
1. ממש PRD1 In-Scope בלבד
2. אין @supabase, @sanity, resend
3. שמות קומפוננטים מ-CLAUDE.md בדיוק
4. TODO comments על כל placeholder
5. עברית + RTL בכל מקום
6. אין מחירים — רק "חינם" + "תרומות"

סדר ביצוע:
שלב 1: פקודות אתחול — C1
שלב 2: types/index.ts — C3
שלב 3: כל mock data — C4 (site-settings, schedule, curriculum)
שלב 4: Tailwind + CSS — C5, C6
שלב 5: Layout, Navbar, WhatsApp — C7-C8
שלב 6: PhilosophySection + HeroSection — C8, C9
שלב 7: דף שיעורים (/classes) — C10
שלב 8: סילבוס (/curriculum + /curriculum/[level]) — C11, C12
שלב 9: /about ו-/contact
שלב 10: SEO metadata — C13

עצור אחרי כל שלב ובקש אישור.
```

---

### D2. Verification Checklist

| # | בדיקה | קריטריון |
|---|-------|----------|
| 1 | `npm run dev` | עובד ב-localhost:3000 |
| 2 | 5 דפים | / /about /classes /curriculum /contact |
| 3 | פילוסופיה | 2 משפטי היסוד מופיעים בדף הבית |
| 4 | חינם | "כניסה חינם" / "תרומות" מופיע בדף הבית + /classes |
| 5 | לוח זמנים | יום רביעי בלבד, 20:00–23:00 |
| 6 | סילבוס | /curriculum מציג כל הרמות |
| 7 | צעדים + YouTube | לחיצה על צעד פותחת YouTube |
| 8 | RTL + עברית | עקבי בכל הדפים |
| 9 | Mobile | תקין ב-375px |
| 10 | WhatsApp | מופיע בכל דף |
| 11 | אין מחירים | לא מופיע ₪ בשום מקום |
| 12 | TODO comments | על כל mock data |

---

### D3. פרטים למילוי ב-site-settings.ts

| פרט | סטטוס |
|-----|--------|
| מספר WhatsApp | ממתין |
| Instagram handle | ממתין |
| כתובת מדויקת | ממתין |
| Facebook URL | ממתין |
| שמות המתנדבים/מדריכים | ממתין |

---

*PRD1-TRD v2.0 | Media Noche Karmiel | עדכון: פילוסופיה + חינם + יום רביעי + סילבוס מלא*

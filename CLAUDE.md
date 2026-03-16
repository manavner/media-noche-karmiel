# CLAUDE.md — Media Noche Karmiel v2.0
# נקרא אוטומטית על ידי Claude Code בכל session

## זהות המועדון — לקרוא לפני הכל
מדיה נוצ'ה כרמיאל הוא מועדון סלסה קהילתי מבוסס-מתנדבים.

### שני משפטי היסוד — חייבים להופיע באתר בבולטות:
1. **"אם לא נעשה — לא יהיה"**
2. **"מי שיודע — מלמד. מי שלא יודע — לומד."**

### עקרונות תפעוליים:
- 🆓 חינם לחלוטין — אין מחירים, יש תרומות רצוניות בלבד
- 📅 פעילות: יום רביעי בלבד 20:00–23:00
- 🎓 20:00–21:00 — שיעורים ברמות שונות
- 💃 21:00–23:00 — מסיבת ריקודים
- 🤝 כולם מתנדבים

> ⚠️ לא להוסיף מחירים (₪) בשום מקום — המועדון חינם!

---

## Chain of Authority
1. CLAUDE.md (זה) — סמכות עליונה
2. PRD1-TRD.md — הגדרת שלב + מימוש טכני
3. Claude Code — ממש רק PRD1 In-Scope

## Current Phase: PRD1 — Foundations + Marketing MVP
קרא את PRD1-TRD.md לפני כל פעולה.

---

## Mandatory Rules

### 1. Naming — שמות יציבים
| Component | File |
|-----------|------|
| HeroSection | components/home/HeroSection.tsx |
| PhilosophySection | components/home/PhilosophySection.tsx |
| QuickStatsBar | components/home/QuickStatsBar.tsx |
| WeeklySchedulePreview | components/home/WeeklySchedulePreview.tsx |
| WeeklyStepWidget | components/home/WeeklyStepWidget.tsx |
| TestimonialsCarousel | components/home/TestimonialsCarousel.tsx |
| WednesdayScheduleCard | components/classes/WednesdayScheduleCard.tsx |
| DonationBanner | components/classes/DonationBanner.tsx |
| LevelCard | components/curriculum/LevelCard.tsx |
| StepList | components/curriculum/StepList.tsx |
| SyllabusGrid | components/curriculum/SyllabusGrid.tsx |
| ContactForm | components/forms/ContactForm.tsx |
| WhatsAppFloatingButton | components/layout/WhatsAppFloatingButton.tsx |
| SectionHeader | components/ui/SectionHeader.tsx |
| PhilosophyQuote | components/ui/PhilosophyQuote.tsx |

### 2. TODO Comment Format
```typescript
// TODO(PRD2): Replace mockWednesdaySchedule with Supabase-backed schedule
// TODO(PRD2): Replace ContactForm local state with /api/contact POST
// TODO(PRD3): Replace WeeklyStepWidget mock with Sanity CMS weeklyStep query
// TODO(PRD3): Replace TestimonialsCarousel mock with Sanity-backed testimonials
// TODO(PRD3): Replace mockCurriculum with Supabase + Sanity curriculum
// TODO(PRD4): Add admin panel for managing schedule and curriculum
```

### 3. PRD1 Scope
- ❌ אין @supabase, @sanity, resend
- ❌ אין מחירים (₪) בשום מקום
- ✅ Mock data בלבד
- ✅ "חינם" + "תרומות רצוניות" בכל מקום רלוונטי
- ✅ יום רביעי בלבד בלוח השיעורים

### 4. Language & Direction
- עברית מלאה בכל הטקסטים
- `<html lang="he" dir="rtl">`
- RTL בכל הקומפוננטים

### 5. Design Tokens
```
Primary:      #8B0000
Primary Dark: #4A0000
Gold:         #C9A84C
Dark BG:      #0D0D0D
Community:    #1A5C1A  (ירוק — לאלמנטי "חינם" וקהילה)
Light BG:     #FAF7F2
Font Display: Playfair Display
Font Body:    Lato
```

## Domain Model
```typescript
SalsaStep | CurriculumLevel | StepCategory
WednesdaySchedule | ClassSession
Testimonial | SiteSettings
```

## Replacement Rule
כל placeholder מסומן ב-TODO comment ויוחלף במלואו בשלב המתאים.

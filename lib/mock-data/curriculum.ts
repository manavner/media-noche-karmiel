// TODO(PRD3): Replace mockCurriculum with Supabase + Sanity curriculum
// מקור: תוכנית הלימודים של מדיה נוצ'ה כרמיאל (סלסה.pdf, ספטמבר 2026)
// youtubeUrl ריק = צעד שאין לו סרטון במסמך
import type { CurriculumLevel } from '@/types';

export const mockCurriculum: CurriculumLevel[] = [
  // ── בסיס ──
  {
    id: 'basis',
    nameHe: 'בסיס',
    prerequisites: [],
    categories: [
      {
        id: 'basis-1',
        nameHe: 'צעדי בסיס',
        steps: [
          { id:'basis-1-1', nameHe:'צעד בסיס 1 — טיאמפו אספניה', nameEn:'Tiempo España', youtubeUrl:'https://www.youtube.com/watch?v=502pVnWUo5c', level:'basis', category:'צעדי בסיס' },
          { id:'basis-1-2', nameHe:'צעד בסיס 2 — מאמבו', nameEn:'Mambo Step', youtubeUrl:'https://www.youtube.com/watch?v=D1r332W3C9Q', level:'basis', category:'צעדי בסיס' },
          { id:'basis-1-3', nameHe:'צעד בסיס 3 — קומביה', nameEn:'Cumbia Step', youtubeUrl:'https://www.youtube.com/watch?v=ibtt4xmtxHk', level:'basis', category:'צעדי בסיס' },
          { id:'basis-1-4', nameHe:'צעד בסיס 4 — רומבה', nameEn:'Rumba Step', youtubeUrl:'https://www.youtube.com/watch?v=mpvJxlO2PFQ', level:'basis', category:'צעדי בסיס' },
          { id:'basis-1-5', nameHe:'וואפאה', nameEn:'Guapea', youtubeUrl:'https://www.youtube.com/watch?v=fk_H8_pvr4w', level:'basis', category:'צעדי בסיס' },
          { id:'basis-1-6', nameHe:'דאמה', nameEn:'Dame', youtubeUrl:'https://www.youtube.com/watch?v=czwBiVX_8qM', level:'basis', category:'צעדי בסיס' },
          { id:'basis-1-7', nameHe:'דילה קה נו (מסגרת סגורה/פתוחה)', nameEn:'Dile que no (Closed/open frame)', youtubeUrl:'https://www.youtube.com/watch?v=fa4EHHHFcsQ', level:'basis', category:'צעדי בסיס' },
          { id:'basis-1-8', nameHe:'אינצ\'ופלה', nameEn:'Enchufala', youtubeUrl:'https://www.youtube.com/watch?v=qIdSys1iE5c', level:'basis', category:'צעדי בסיס' },
        ],
      },
    ],
  },

  // ── מתחילים ──
  {
    id: 'beginner',
    nameHe: 'מתחילים',
    prerequisites: ['וואפאה, אינצ\'ופלה בסיסית, דאמה, דילה קה נו'],
    categories: [
      {
        id: 'beginner-1',
        nameHe: '1 — קונטרה / סדנה',
        steps: [
          { id:'beginner-1-1', nameHe:'טנסיון (הובלה)', nameEn:'Tension (leading)', youtubeUrl:'https://www.youtube.com/watch?v=VcOPRLqcKtQ&list=PLVhMZqStoOF5t99d9wsfTZ8YGr5Of0vBb&index=87', level:'beginner', category:'קונטרה / סדנה' },
        ],
      },
      {
        id: 'beginner-2',
        nameHe: '2 — פסטיבל בלאגן',
        steps: [
          { id:'beginner-2-1', nameHe:'אינצ\'ופלה דובלה', nameEn:'Enchufala Doble', youtubeUrl:'https://www.youtube.com/watch?v=JswM_OUf2zA', level:'beginner', category:'פסטיבל בלאגן' },
          { id:'beginner-2-2', nameHe:'אינצ\'ופלה קומפליקאדו', nameEn:'Enchufala complicado', youtubeUrl:'https://www.youtube.com/watch?v=CVs-VcV6FUc', level:'beginner', category:'פסטיבל בלאגן' },
          { id:'beginner-2-3', nameHe:'דאמה קון אונה', nameEn:'Dame con una', youtubeUrl:'https://www.youtube.com/watch?v=vfZUQvly2W8', level:'beginner', category:'פסטיבל בלאגן' },
          { id:'beginner-2-4', nameHe:'דאמה קון דוס', nameEn:'Dame con dos', youtubeUrl:'https://www.youtube.com/watch?v=ztk_R3bChZQ', level:'beginner', category:'פסטיבל בלאגן' },
          { id:'beginner-2-5', nameHe:'דאמה קון טרס', nameEn:'Dame con tre', youtubeUrl:'https://www.youtube.com/watch?v=kKEzg2-TD3E', level:'beginner', category:'פסטיבל בלאגן' },
          { id:'beginner-2-6', nameHe:'אינצ\'ופלה אי דאמה', nameEn:'Enchufala y dame', youtubeUrl:'https://www.youtube.com/watch?v=A6UP2vXuAP8', level:'beginner', category:'פסטיבל בלאגן' },
          { id:'beginner-2-7', nameHe:'פסטיבל בלאגן', nameEn:'Festival Balagan', youtubeUrl:'https://www.youtube.com/watch?v=MY_YF-V7usg', level:'beginner', category:'פסטיבל בלאגן' },
        ],
      },
      {
        id: 'beginner-3',
        nameHe: '3 — הומברס א',
        steps: [
          { id:'beginner-3-1', nameHe:'הומברס אל סנטרו', nameEn:'Hombres el centro', youtubeUrl:'https://www.youtube.com/watch?v=joxuPhdcw6Q', level:'beginner', category:'הומברס א' },
          { id:'beginner-3-2', nameHe:'וואלטה (כפיים)', nameEn:'Vuelta (kapaim)', youtubeUrl:'https://www.youtube.com/watch?v=HvcoL0ROzjM', level:'beginner', category:'הומברס א' },
          { id:'beginner-3-3', nameHe:'כרמיאל', nameEn:'Karmiel', youtubeUrl:'', level:'beginner', category:'הומברס א' },
          { id:'beginner-3-4', nameHe:'לה פלוטה', nameEn:'La Pelota', youtubeUrl:'https://www.youtube.com/watch?v=7MFz-fyMhPs', level:'beginner', category:'הומברס א' },
          { id:'beginner-3-5', nameHe:'לה פלוטה קלאבה', nameEn:'La Pelota Clave', youtubeUrl:'https://www.youtube.com/watch?v=uFH0WquC25Y', level:'beginner', category:'הומברס א' },
          { id:'beginner-3-6', nameHe:'לה פלוטה לוקה', nameEn:'La Pelota Loca', youtubeUrl:'https://www.youtube.com/watch?v=aNuHV16UZbo', level:'beginner', category:'הומברס א' },
        ],
      },
      {
        id: 'beginner-4',
        nameHe: '4 — טאפ',
        steps: [
          { id:'beginner-4-1', nameHe:'לנטו', nameEn:'Lento', youtubeUrl:'http://www.youtube.com/watch?v=yqVwoeJ54g0', level:'beginner', category:'טאפ' },
          { id:'beginner-4-2', nameHe:'ואסילאלה', nameEn:'Vacilala', youtubeUrl:'http://www.youtube.com/watch?v=I0EJMHecG_0', level:'beginner', category:'טאפ' },
          { id:'beginner-4-3', nameHe:'סייטה', nameEn:'Siete', youtubeUrl:'http://www.youtube.com/watch?v=XKtt8CB7J3M', level:'beginner', category:'טאפ' },
        ],
      },
      {
        id: 'beginner-5',
        nameHe: '5 — פרימה',
        steps: [
          { id:'beginner-5-1', nameHe:'פרימה', nameEn:'Prima', youtubeUrl:'http://www.youtube.com/watch?v=X44m1VUtV9g', level:'beginner', category:'פרימה' },
          { id:'beginner-5-2', nameHe:'אדיוס', nameEn:'Adios', youtubeUrl:'https://www.youtube.com/watch?v=palabYHmKns', level:'beginner', category:'פרימה' },
          { id:'beginner-5-3', nameHe:'פרימה קון לה הרמנה', nameEn:'Prima con la Hermana', youtubeUrl:'http://www.youtube.com/watch?v=iWJDuhiVs-E', level:'beginner', category:'פרימה' },
          { id:'beginner-5-4', nameHe:'אבלין', nameEn:'Evelyn', youtubeUrl:'https://www.youtube.com/watch?v=6m0EuDJu_As', level:'beginner', category:'פרימה' },
        ],
      },
      {
        id: 'beginner-6',
        nameHe: '6 — סומבררו',
        steps: [
          { id:'beginner-6-1', nameHe:'סומבררו', nameEn:'Sombrero', youtubeUrl:'http://www.youtube.com/watch?v=Y0U309VrG2w', level:'beginner', category:'סומבררו' },
          { id:'beginner-6-2', nameHe:'לאסו', nameEn:'Laso', youtubeUrl:'https://www.youtube.com/watch?v=xYvHcA5u0WI', level:'beginner', category:'סומבררו' },
          { id:'beginner-6-3', nameHe:'סומבררו איי לאסו', nameEn:'Sombrero y Laso', youtubeUrl:'https://www.youtube.com/watch?v=EMMMdJqtmpM', level:'beginner', category:'סומבררו' },
          { id:'beginner-6-4', nameHe:'Sombrero y Mambo', nameEn:'Sombrero y Mambo', youtubeUrl:'https://www.youtube.com/watch?v=EMMMdJqtmpM', level:'beginner', category:'סומבררו' },
        ],
      },
      {
        id: 'beginner-7',
        nameHe: '7 — קוקה קולה',
        steps: [
          { id:'beginner-7-1', nameHe:'קוקה קולה', nameEn:'Coca cola', youtubeUrl:'http://www.youtube.com/watch?v=LM43cc7OhBs', level:'beginner', category:'קוקה קולה' },
          { id:'beginner-7-2', nameHe:'אינצ\'ופלה קוקה קולה', nameEn:'Enchufala Coca Cola', youtubeUrl:'https://www.youtube.com/watch?v=ZPVka4OtBeg', level:'beginner', category:'קוקה קולה' },
          { id:'beginner-7-3', nameHe:'סייטה קוקה קולה', nameEn:'Siete Coca Cola', youtubeUrl:'http://www.youtube.com/watch?v=73STWQdEE7M', level:'beginner', category:'קוקה קולה' },
          { id:'beginner-7-4', nameHe:'אקסיביילה', nameEn:'Exhibala', youtubeUrl:'http://www.youtube.com/watch?v=QLWeMZ6SoR4', level:'beginner', category:'קוקה קולה' },
        ],
      },
      {
        id: 'beginner-8',
        nameHe: '8 — טיאמפו',
        steps: [
          { id:'beginner-8-1', nameHe:'טיאמפו אספניה', nameEn:'Tiempo espania', youtubeUrl:'https://www.youtube.com/watch?v=wl0jwLo5bLc', level:'beginner', category:'טיאמפו' },
          { id:'beginner-8-2', nameHe:'פארא אל מדיו', nameEn:'Para el medio', youtubeUrl:'https://www.youtube.com/watch?v=H5OPu50Ih_Y', level:'beginner', category:'טיאמפו' },
          { id:'beginner-8-3', nameHe:'פארא אבאחו', nameEn:'Para abajo', youtubeUrl:'https://www.youtube.com/watch?v=DoRldDMHUZw', level:'beginner', category:'טיאמפו' },
        ],
      },
      {
        id: 'beginner-9',
        nameHe: '9 — משחקי רואדה',
        steps: [
          { id:'beginner-9-1', nameHe:'און פליי', nameEn:'Un Fly', youtubeUrl:'https://youtu.be/RACdB7KIpqU?si=ihmR2HkrJQKl3DGH', level:'beginner', category:'משחקי רואדה' },
          { id:'beginner-9-2', nameHe:'Linea', nameEn:'Linea', youtubeUrl:'https://youtu.be/Ygf_5_rUNCM?si=ih3F_oSuWh7nodf0', level:'beginner', category:'משחקי רואדה' },
          { id:'beginner-9-3', nameHe:'Rollo', nameEn:'Rollo', youtubeUrl:'https://youtu.be/rtH2nu0bVm0?si=B8Z4xvSZuKJROEPE', level:'beginner', category:'משחקי רואדה' },
          { id:'beginner-9-4', nameHe:'Doble Play', nameEn:'Doble Play', youtubeUrl:'https://youtu.be/SmHNEqVaLhw?si=iwELPCQSWFvGaFHD', level:'beginner', category:'משחקי רואדה' },
          { id:'beginner-9-5', nameHe:'Triple Play', nameEn:'Triple Play', youtubeUrl:'https://youtu.be/eQQT1L5EMNY?si=3xGrdvmbCiD5trtr', level:'beginner', category:'משחקי רואדה' },
          { id:'beginner-9-6', nameHe:'פאלמאס', nameEn:'Palmas', youtubeUrl:'http://www.youtube.com/watch?v=vVKqne5_7J0', level:'beginner', category:'משחקי רואדה' },
          { id:'beginner-9-7', nameHe:'Palmas Dos', nameEn:'Palmas Dos', youtubeUrl:'http://www.youtube.com/watch?v=uVA3xMaZsgY', level:'beginner', category:'משחקי רואדה' },
          { id:'beginner-9-8', nameHe:'Palmas Abajo', nameEn:'Palmas Abajo', youtubeUrl:'', level:'beginner', category:'משחקי רואדה' },
          { id:'beginner-9-9', nameHe:'Palmas Arriba', nameEn:'Palmas Arriba', youtubeUrl:'', level:'beginner', category:'משחקי רואדה' },
          { id:'beginner-9-10', nameHe:'צ\'אפאריה', nameEn:'Chaparia', youtubeUrl:'http://www.youtube.com/watch?v=GJBzdH8sLA8', level:'beginner', category:'משחקי רואדה' },
          { id:'beginner-9-11', nameHe:'Forrest Gump', nameEn:'Forrest Gump', youtubeUrl:'', level:'beginner', category:'משחקי רואדה' },
          { id:'beginner-9-12', nameHe:'פסטיבל בואנו מאלו', nameEn:'Festival Bueno Malo', youtubeUrl:'https://www.youtube.com/watch?v=yZ8bT8zAMJ0', level:'beginner', category:'משחקי רואדה' },
        ],
      },
      {
        id: 'beginner-10',
        nameHe: '10 — קנטאקי',
        steps: [
          { id:'beginner-10-1', nameHe:'קנדאדו', nameEn:'Candado', youtubeUrl:'http://www.youtube.com/watch?v=tH5m2JgVCYc', level:'beginner', category:'קנטאקי' },
          { id:'beginner-10-2', nameHe:'מיאמי', nameEn:'Miami', youtubeUrl:'http://www.youtube.com/watch?v=YwGzyrABKlE', level:'beginner', category:'קנטאקי' },
          { id:'beginner-10-3', nameHe:'קנטאקי', nameEn:'Kentucky', youtubeUrl:'http://www.youtube.com/watch?v=1IrFrFKKkeI', level:'beginner', category:'קנטאקי' },
          { id:'beginner-10-4', nameHe:'אל אונו', nameEn:'El uno', youtubeUrl:'http://www.youtube.com/watch?v=d9iNf6pm-jk', level:'beginner', category:'קנטאקי' },
        ],
      },
    ],
  },

  // ── בינוני ──
  {
    id: 'intermediate',
    nameHe: 'בינוני',
    prerequisites: ['לנטו, סייטה, פרימה, סומבררו, קנטאקי'],
    categories: [
      {
        id: 'intermediate-1',
        nameHe: '1 — קונטרה / סדנה',
        steps: [
          { id:'intermediate-1-1', nameHe:'טנסיון (הובלה)', nameEn:'Tension (leading)', youtubeUrl:'https://www.youtube.com/watch?v=VcOPRLqcKtQ&list=PLVhMZqStoOF5t99d9wsfTZ8YGr5Of0vBb&index=87', level:'intermediate', category:'קונטרה / סדנה' },
        ],
      },
      {
        id: 'intermediate-2',
        nameHe: '2 — יד אחת \\ שתי ידיים',
        steps: [
          { id:'intermediate-2-1', nameHe:'פלמנקו', nameEn:'Flamenco', youtubeUrl:'https://www.youtube.com/watch?v=geb756OHGFA', level:'intermediate', category:'יד אחת \\ שתי ידיים' },
          { id:'intermediate-2-2', nameHe:'אבאניקו', nameEn:'Abanico', youtubeUrl:'https://www.youtube.com/watch?v=6BAGfZS0dPE', level:'intermediate', category:'יד אחת \\ שתי ידיים' },
          { id:'intermediate-2-3', nameHe:'מונטניה', nameEn:'Montaña', youtubeUrl:'http://www.youtube.com/watch?v=eWHH4JYQe_o', level:'intermediate', category:'יד אחת \\ שתי ידיים' },
          { id:'intermediate-2-4', nameHe:'דדו', nameEn:'Dedo', youtubeUrl:'http://www.youtube.com/watch?v=P3yusJNVslo', level:'intermediate', category:'יד אחת \\ שתי ידיים' },
        ],
      },
      {
        id: 'intermediate-3',
        nameHe: '3 — הומברס ב',
        steps: [
          { id:'intermediate-3-1', nameHe:'דרצ\'ה (בנים ימינה)', nameEn:'Derecha', youtubeUrl:'https://www.youtube.com/watch?v=AzbztZBlmoo', level:'intermediate', category:'הומברס ב' },
          { id:'intermediate-3-2', nameHe:'דאמה קון מאנוס', nameEn:'Dame con manos', youtubeUrl:'https://www.youtube.com/watch?v=dN5-ItEzeVY', level:'intermediate', category:'הומברס ב' },
          { id:'intermediate-3-3', nameHe:'דאמה קון מאנוס טרס', nameEn:'Dame con manos tres', youtubeUrl:'https://www.youtube.com/watch?v=ux4xuRjinas', level:'intermediate', category:'הומברס ב' },
          { id:'intermediate-3-4', nameHe:'קאדנה', nameEn:'Cadena', youtubeUrl:'https://www.youtube.com/watch?v=tzYOzT6mV9Y', level:'intermediate', category:'הומברס ב' },
        ],
      },
      {
        id: 'intermediate-4',
        nameHe: '4 — סייטה מתקדם',
        steps: [
          { id:'intermediate-4-1', nameHe:'אטרביידו', nameEn:'Atrevido', youtubeUrl:'https://www.youtube.com/watch?v=Jcq-3fCdEc4', level:'intermediate', category:'סייטה מתקדם' },
          { id:'intermediate-4-2', nameHe:'סייטה מודרנו', nameEn:'Siete moderno', youtubeUrl:'http://www.youtube.com/watch?v=YFVtFvu7GTk', level:'intermediate', category:'סייטה מתקדם' },
          { id:'intermediate-4-3', nameHe:'סייטה לוקו', nameEn:'Siete loco', youtubeUrl:'http://www.youtube.com/watch?v=2ac45ElWQfY', level:'intermediate', category:'סייטה מתקדם' },
        ],
      },
      {
        id: 'intermediate-5',
        nameHe: '5 — פסטיבל פרימה',
        steps: [
          { id:'intermediate-5-1', nameHe:'אסקיפי לה פרימה פורמה', nameEn:'Esquipi la prima forma', youtubeUrl:'http://www.youtube.com/watch?v=CV9ioQsNBJs', level:'intermediate', category:'פסטיבל פרימה' },
          { id:'intermediate-5-2', nameHe:'פרימה קון פאוליטו', nameEn:'Prima con Paulito', youtubeUrl:'http://www.youtube.com/watch?v=6uvgc3zm9pM', level:'intermediate', category:'פסטיבל פרימה' },
          { id:'intermediate-5-3', nameHe:'אדיוס אאריבה', nameEn:'Adios Arriba', youtubeUrl:'https://www.youtube.com/watch?v=zFe6w9wFmcI', level:'intermediate', category:'פסטיבל פרימה' },
          { id:'intermediate-5-4', nameHe:'פסטיבל פרימה', nameEn:'Festival Prima', youtubeUrl:'http://www.youtube.com/watch?v=fcLxYzdqjrc', level:'intermediate', category:'פסטיבל פרימה' },
        ],
      },
      {
        id: 'intermediate-6',
        nameHe: '6 — בסו',
        steps: [
          { id:'intermediate-6-1', nameHe:'בסו', nameEn:'Beso', youtubeUrl:'http://www.youtube.com/watch?v=8QXhay26TIU', level:'intermediate', category:'בסו' },
          { id:'intermediate-6-2', nameHe:'אברסאלה', nameEn:'Abrazala', youtubeUrl:'http://www.youtube.com/watch?v=8QKVjRIbxbY', level:'intermediate', category:'בסו' },
          { id:'intermediate-6-3', nameHe:'בלסרו', nameEn:'Balsero', youtubeUrl:'https://www.youtube.com/watch?v=wuToHoNijqQ', level:'intermediate', category:'בסו' },
        ],
      },
      {
        id: 'intermediate-7',
        nameHe: '7 — סטנטה',
        steps: [
          { id:'intermediate-7-1', nameHe:'סטנטה (70)', nameEn:'Setenta', youtubeUrl:'http://www.youtube.com/watch?v=fxcXu6gmyu8', level:'intermediate', category:'סטנטה' },
          { id:'intermediate-7-2', nameHe:'סטנטה איי סינקו (75)', nameEn:'Setenta y cinco', youtubeUrl:'http://www.youtube.com/watch?v=X2DyBUaCZ8g', level:'intermediate', category:'סטנטה' },
          { id:'intermediate-7-3', nameHe:'סטנטה קומפליקאדו', nameEn:'Setenta complicado', youtubeUrl:'http://www.youtube.com/watch?v=iBhFE1XJu2Q', level:'intermediate', category:'סטנטה' },
        ],
      },
      {
        id: 'intermediate-8',
        nameHe: '8 — טיאמפו',
        steps: [
          { id:'intermediate-8-1', nameHe:'טארו', nameEn:'Taro', youtubeUrl:'http://www.youtube.com/watch?v=tCnZZHEfbQI', level:'intermediate', category:'טיאמפו' },
          { id:'intermediate-8-2', nameHe:'Taro Abajo', nameEn:'Taro Abajo', youtubeUrl:'http://www.youtube.com/watch?v=GERU_GlATJA', level:'intermediate', category:'טיאמפו' },
          { id:'intermediate-8-3', nameHe:'Taro para Fuera', nameEn:'Taro para Fuera', youtubeUrl:'http://www.youtube.com/watch?v=tbp99uyrVTg', level:'intermediate', category:'טיאמפו' },
          { id:'intermediate-8-4', nameHe:'Taro de mentira', nameEn:'Taro de mentira', youtubeUrl:'http://www.youtube.com/watch?v=0HLxJfzcPV4', level:'intermediate', category:'טיאמפו' },
          { id:'intermediate-8-5', nameHe:'Taro con manos', nameEn:'Taro con manos', youtubeUrl:'https://www.youtube.com/watch?v=K2g-dJlC90I', level:'intermediate', category:'טיאמפו' },
          { id:'intermediate-8-6', nameHe:'סרו', nameEn:'Cero', youtubeUrl:'https://www.youtube.com/watch?v=rflTICyo7is', level:'intermediate', category:'טיאמפו' },
          { id:'intermediate-8-7', nameHe:'אוצ\'ו', nameEn:'Ocho', youtubeUrl:'https://www.youtube.com/watch?v=Vk3XDh4k_Q8', level:'intermediate', category:'טיאמפו' },
          { id:'intermediate-8-8', nameHe:'אוצ\'נטה', nameEn:'Ochenta', youtubeUrl:'https://www.youtube.com/watch?v=PuB34PS0-5w', level:'intermediate', category:'טיאמפו' },
        ],
      },
      {
        id: 'intermediate-9',
        nameHe: '9 — משחקי רואדה',
        steps: [
          { id:'intermediate-9-1', nameHe:'און פליי', nameEn:'Un Fly', youtubeUrl:'https://youtu.be/RACdB7KIpqU?si=ihmR2HkrJQKl3DGH', level:'intermediate', category:'משחקי רואדה' },
          { id:'intermediate-9-2', nameHe:'Popcorn', nameEn:'Popcorn', youtubeUrl:'', level:'intermediate', category:'משחקי רואדה' },
          { id:'intermediate-9-3', nameHe:'Jump', nameEn:'Jump', youtubeUrl:'', level:'intermediate', category:'משחקי רואדה' },
          { id:'intermediate-9-4', nameHe:'Kif', nameEn:'Kif', youtubeUrl:'', level:'intermediate', category:'משחקי רואדה' },
          { id:'intermediate-9-5', nameHe:'Kif Jump', nameEn:'Kif Jump', youtubeUrl:'', level:'intermediate', category:'משחקי רואדה' },
          { id:'intermediate-9-6', nameHe:'On Two', nameEn:'On Two', youtubeUrl:'', level:'intermediate', category:'משחקי רואדה' },
          { id:'intermediate-9-7', nameHe:'דאמה אוקאיטו', nameEn:'Dame Ocaito', youtubeUrl:'https://www.youtube.com/watch?v=PDMCcKw_x6M', level:'intermediate', category:'משחקי רואדה' },
          { id:'intermediate-9-8', nameHe:'דירקטו', nameEn:'Directo', youtubeUrl:'https://www.youtube.com/watch?v=TfnUsjrnb0g', level:'intermediate', category:'משחקי רואדה' },
          { id:'intermediate-9-9', nameHe:'אונה אבאחו', nameEn:'Una Abajo', youtubeUrl:'https://www.youtube.com/watch?v=u3NCKWY1KVQ', level:'intermediate', category:'משחקי רואדה' },
          { id:'intermediate-9-10', nameHe:'Dame dos', nameEn:'Dame dos', youtubeUrl:'https://youtu.be/JdoAOtupqw0?si=4bXpQVpmMmnUqsUd', level:'intermediate', category:'משחקי רואדה' },
          { id:'intermediate-9-11', nameHe:'Dos Con Dos', nameEn:'Dos Con Dos', youtubeUrl:'https://youtu.be/MFJymaGYKPs?si=TT1vwzdT6aHgS7T4', level:'intermediate', category:'משחקי רואדה' },
          { id:'intermediate-9-12', nameHe:'פסטיבל פיסינה קילו', nameEn:'Festival Piscina Kilo', youtubeUrl:'https://www.youtube.com/watch?v=41i0_UQ9Z34', level:'intermediate', category:'משחקי רואדה' },
        ],
      },
      {
        id: 'intermediate-10',
        nameHe: '10 — תרגילים מהגב',
        steps: [
          { id:'intermediate-10-1', nameHe:'אל דוס', nameEn:'El Dos', youtubeUrl:'https://www.youtube.com/watch?v=mS2JqDNt8sY', level:'intermediate', category:'תרגילים מהגב' },
          { id:'intermediate-10-2', nameHe:'אל דוסה', nameEn:'El Doce', youtubeUrl:'https://www.youtube.com/watch?v=3E8d2AN8I34', level:'intermediate', category:'תרגילים מהגב' },
          { id:'intermediate-10-3', nameHe:'Three Way Stop', nameEn:'Three way stop', youtubeUrl:'https://www.youtube.com/watch?v=j6Di28x1RjI', level:'intermediate', category:'תרגילים מהגב' },
          { id:'intermediate-10-4', nameHe:'Coca-Cola Finta', nameEn:'Coca-Cola Finta', youtubeUrl:'https://www.youtube.com/watch?v=3o8sPbmdWFA', level:'intermediate', category:'תרגילים מהגב' },
        ],
      },
    ],
  },

  // ── מתקדמים ──
  {
    id: 'advanced',
    nameHe: 'מתקדמים',
    prerequisites: ['סטנטה, דדו'],
    categories: [
      {
        id: 'advanced-1',
        nameHe: '1 — קונטרה / סדנה',
        steps: [
          { id:'advanced-1-1', nameHe:'טנסיון (הובלה)', nameEn:'Tension (leading)', youtubeUrl:'https://www.youtube.com/watch?v=VcOPRLqcKtQ&list=PLVhMZqStoOF5t99d9wsfTZ8YGr5Of0vBb&index=87', level:'advanced', category:'קונטרה / סדנה' },
        ],
      },
      {
        id: 'advanced-2',
        nameHe: '2 — דדו מתקדם',
        steps: [
          { id:'advanced-2-1', nameHe:'דדו גוואראפו', nameEn:'Dedo guarapo y bota', youtubeUrl:'https://www.youtube.com/watch?v=xzDEE6aXL9o', level:'advanced', category:'דדו מתקדם' },
          { id:'advanced-2-2', nameHe:'דדו סאבוראדו', nameEn:'Dedo saboreado', youtubeUrl:'https://www.youtube.com/watch?v=0imJRB-Jp9A', level:'advanced', category:'דדו מתקדם' },
        ],
      },
      {
        id: 'advanced-3',
        nameHe: '3 — סייטה מתקדם',
        steps: [
          { id:'advanced-3-1', nameHe:'Siete loco complicado', nameEn:'Siete loco complicado', youtubeUrl:'https://youtu.be/tiDrPw40uEs?si=mc2-CRh087uFzb1o', level:'advanced', category:'סייטה מתקדם' },
          { id:'advanced-3-2', nameHe:'סייטה סטנטה', nameEn:'Siete setenta', youtubeUrl:'https://www.youtube.com/watch?v=GK03gkoTeGw', level:'advanced', category:'סייטה מתקדם' },
        ],
      },
      {
        id: 'advanced-4',
        nameHe: '4 — אמיסטאד',
        steps: [
          { id:'advanced-4-1', nameHe:'אמיסטד', nameEn:'Amistad', youtubeUrl:'https://www.youtube.com/watch?v=GWH1CBe2KXE', level:'advanced', category:'אמיסטאד' },
          { id:'advanced-4-2', nameHe:'אסקיפי קון אמיסטד', nameEn:'Esquipi con amisted', youtubeUrl:'https://www.youtube.com/watch?v=17RY54Ry_Ps', level:'advanced', category:'אמיסטאד' },
        ],
      },
      {
        id: 'advanced-5',
        nameHe: '5 — קולון',
        steps: [
          { id:'advanced-5-1', nameHe:'קולון', nameEn:'Colon', youtubeUrl:'https://www.youtube.com/watch?v=l5gjv49kz4c', level:'advanced', category:'קולון' },
          { id:'advanced-5-2', nameHe:'קולון קון אמיגה', nameEn:'Colon con amiga', youtubeUrl:'https://www.youtube.com/watch?v=ta3wNp6CALo', level:'advanced', category:'קולון' },
        ],
      },
      {
        id: 'advanced-6',
        nameHe: '6 — סומבררו מתקדם',
        steps: [
          { id:'advanced-6-1', nameHe:'סומבררו דובלה', nameEn:'Sombrero doble', youtubeUrl:'https://www.youtube.com/watch?v=WSYNp3iu1ks', level:'advanced', category:'סומבררו מתקדם' },
          { id:'advanced-6-2', nameHe:'חואנה לה קובאנה', nameEn:'Juana la Cubana', youtubeUrl:'https://www.youtube.com/watch?v=rEUUI2-m8ow', level:'advanced', category:'סומבררו מתקדם' },
        ],
      },
      {
        id: 'advanced-7',
        nameHe: '7 — סטנטה מתקדם',
        steps: [
          { id:'advanced-7-1', nameHe:'סטנטה נואבו', nameEn:'Setenta nuevo', youtubeUrl:'https://www.youtube.com/watch?v=ccpDxJsrOns', level:'advanced', category:'סטנטה מתקדם' },
          { id:'advanced-7-2', nameHe:'נובנטה', nameEn:'Noventa', youtubeUrl:'https://www.youtube.com/watch?v=HcnWjZryHGI', level:'advanced', category:'סטנטה מתקדם' },
        ],
      },
      {
        id: 'advanced-8',
        nameHe: '8 — הבנות',
        steps: [
          { id:'advanced-8-1', nameHe:'תליה', nameEn:'Thalia', youtubeUrl:'https://www.youtube.com/watch?v=cThYwpFWbyQ', level:'advanced', category:'הבנות' },
          { id:'advanced-8-2', nameHe:'לה חני', nameEn:'La Jenny', youtubeUrl:'https://www.youtube.com/watch?v=56IOwturFRU', level:'advanced', category:'הבנות' },
        ],
      },
      {
        id: 'advanced-9',
        nameHe: '9 — פיטריה',
        steps: [
          { id:'advanced-9-1', nameHe:'פואנטה', nameEn:'Puente', youtubeUrl:'https://www.youtube.com/watch?v=QLj6hTsQ4Og', level:'advanced', category:'פיטריה' },
          { id:'advanced-9-2', nameHe:'Puente Pitria', nameEn:'Puente Pitria', youtubeUrl:'https://youtu.be/qJAV6NhI42M?si=msbxAT-KToxlE5JI', level:'advanced', category:'פיטריה' },
        ],
      },
      {
        id: 'advanced-10',
        nameHe: '10 — קנטאקי מתקדם',
        steps: [
          { id:'advanced-10-1', nameHe:'האוואנה', nameEn:'Havana', youtubeUrl:'http://www.youtube.com/watch?v=QsezvdEgPkE', level:'advanced', category:'קנטאקי מתקדם' },
          { id:'advanced-10-2', nameHe:'קנטאקי קומפליקאדו', nameEn:'Kentucky Complicado', youtubeUrl:'https://www.youtube.com/watch?v=mB7JViSgjh8&list=PLD9CA9B81A0346EB3&index=3', level:'advanced', category:'קנטאקי מתקדם' },
        ],
      },
    ],
  },

  // ── מאסטר ──
  {
    id: 'master',
    nameHe: 'מאסטר',
    prerequisites: [],
    categories: [
      {
        id: 'master-1',
        nameHe: 'צעדי מאסטר',
        steps: [
          { id:'master-1-1', nameHe:'מיקאלה', nameEn:'Micaela', youtubeUrl:'https://www.youtube.com/watch?v=nKNDnzRzDr8', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-2', nameHe:'Sombra', nameEn:'Sombra', youtubeUrl:'https://www.youtube.com/watch?v=tglU8IswgeM', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-3', nameHe:'La Cuadra', nameEn:'La Cuadra', youtubeUrl:'https://www.youtube.com/watch?v=i65YoIiy9CY', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-4', nameHe:'Espresso', nameEn:'Espresso', youtubeUrl:'https://www.youtube.com/watch?v=F0Cd7XQek2A&list=PLVhMZqStoOF5t99d9wsfTZ8YGr5Of0vBb&index=98', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-5', nameHe:'Trienta y tres', nameEn:'Trienta y tres', youtubeUrl:'https://www.youtube.com/watch?v=4EtKcVnmOVM', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-6', nameHe:'Agamenon', nameEn:'Agamenon', youtubeUrl:'https://www.youtube.com/watch?v=sk7g2jLrjGs&t=4s', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-7', nameHe:'El Suave', nameEn:'El Suave', youtubeUrl:'https://www.youtube.com/watch?v=XNIMai8rtdw', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-8', nameHe:'Dedo de Lazaro', nameEn:'Dedo de Lazaro', youtubeUrl:'https://www.youtube.com/watch?v=AXhtq6WLoNs', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-9', nameHe:'Dedo complicado', nameEn:'Dedo complicado', youtubeUrl:'https://www.youtube.com/watch?v=SRFnntXKunA', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-10', nameHe:'Paseala por el Parque', nameEn:'Paseala por el Parque', youtubeUrl:'https://www.youtube.com/watch?v=THycmrMHE24', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-11', nameHe:'Enchufala con Rueda a la Reves', nameEn:'Enchufala con Rueda a la Reves', youtubeUrl:'https://www.youtube.com/watch?v=pamRGLTIq7g', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-12', nameHe:'Mona Lisa', nameEn:'Mona Lisa', youtubeUrl:'https://www.youtube.com/watch?v=f243iSKiFFk', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-13', nameHe:'טורנדו', nameEn:'Tornado', youtubeUrl:'https://www.youtube.com/watch?v=MAUjuo71jB0', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-14', nameHe:'Babosa', nameEn:'Babosa', youtubeUrl:'https://www.youtube.com/watch?v=E-zgOoRwYIE', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-15', nameHe:'Sombrero de Regnier', nameEn:'Sombrero de Regnier', youtubeUrl:'https://www.youtube.com/watch?v=lfm2QGgO9VQ', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-16', nameHe:'Sombrero por Debajo Complicado', nameEn:'Sombrero por Debajo Complicado', youtubeUrl:'https://www.youtube.com/watch?v=zik0vGLEkmE', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-17', nameHe:'Sombrero de Manny', nameEn:'Sombrero de Manny', youtubeUrl:'https://www.youtube.com/watch?v=-Tp4eI0kWrY', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-18', nameHe:'Sombrero por Debajo', nameEn:'Sombrero por Debajo', youtubeUrl:'https://www.youtube.com/watch?v=KWRm1gTj1Xg', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-19', nameHe:'El Uno Complicado', nameEn:'El Uno Complicado', youtubeUrl:'https://www.youtube.com/watch?v=kAayCfzV10g', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-20', nameHe:'פונלה סאבור', nameEn:'Ponle sabor', youtubeUrl:'https://www.youtube.com/watch?v=uFQehTqZfPg', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-21', nameHe:'Bebe', nameEn:'Bebe', youtubeUrl:'https://www.youtube.com/watch?v=orEq6_3e59M&list=PLD9CA9B81A0346EB3&index=7', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-22', nameHe:'Rubenada', nameEn:'Rubenada', youtubeUrl:'https://www.youtube.com/watch?v=WYMG6S7lofY&list=PLD9CA9B81A0346EB3&index=14', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-23', nameHe:'Coco y Coquito', nameEn:'Coco y Coquito', youtubeUrl:'https://www.youtube.com/watch?v=fut0N6MX1iQ', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-24', nameHe:'Coquito', nameEn:'Coquito', youtubeUrl:'https://www.youtube.com/watch?v=I-Qhdh6j4HQ', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-25', nameHe:'Trompo', nameEn:'Trompo', youtubeUrl:'https://www.youtube.com/watch?v=YkUO-q8o_-I', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-26', nameHe:'Enchufala y Cadeneta', nameEn:'Enchufala y Cadeneta', youtubeUrl:'https://www.youtube.com/watch?v=Qx6QmWenEyo', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-27', nameHe:'Cabeza de pescado', nameEn:'Cabeza de pescado', youtubeUrl:'https://www.youtube.com/watch?v=eQJ7XesUNFQ', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-28', nameHe:'Setenta con setenta', nameEn:'Setenta con setenta', youtubeUrl:'https://www.youtube.com/watch?v=pM5iky6hYPo', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-29', nameHe:'Izquierda', nameEn:'Izquierda', youtubeUrl:'https://www.youtube.com/watch?v=xQuL7f4BS0Y', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-30', nameHe:'בסו לוקו', nameEn:'Beso Loco', youtubeUrl:'https://www.youtube.com/watch?v=PpFqYMh55BY&list=PL82A94473A5134D2F&index=19', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-31', nameHe:'בסו קומפליקאדו', nameEn:'Beso Complicado', youtubeUrl:'https://www.youtube.com/watch?v=is5lspyc7iw', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-32', nameHe:'בסו פור דבאחו', nameEn:'Beso por Debajo', youtubeUrl:'https://www.youtube.com/watch?v=pO6wergxM0I', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-33', nameHe:'בלסרו קומפליקאדו', nameEn:'Balsero complicado', youtubeUrl:'https://www.youtube.com/watch?v=pXxl9aJkBnM', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-34', nameHe:'אבאניקו קומפליקאדו', nameEn:'Abanico complicado', youtubeUrl:'https://www.youtube.com/watch?v=ZHz_7js8Hko&list=PL82A94473A5134D2F&index=9', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-35', nameHe:'אל מלאו', nameEn:'El Melao', youtubeUrl:'https://www.youtube.com/watch?v=N1_qpOY9r7M', level:'master', category:'צעדי מאסטר' },
          { id:'master-1-36', nameHe:'ואסילאלה אנטראדה', nameEn:'Vacilala entrada', youtubeUrl:'https://www.youtube.com/watch?v=kBB1YE2E7vM', level:'master', category:'צעדי מאסטר' },
        ],
      },
    ],
  },

];

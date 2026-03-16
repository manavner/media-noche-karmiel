// TODO(PRD3): Replace mockCurriculum with Supabase + Sanity curriculum
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
          { id:'b1',  nameHe:'טנסיון (הובלה)',              nameEn:'Tension (leading)',     youtubeUrl:'https://www.youtube.com/watch?v=VcOPRLqcKtQ', level:'basis', category:'בסיס' },
          { id:'b2',  nameHe:'צעד בסיס 1 — טיאמפו אספניה', nameEn:'Tiempo España',         youtubeUrl:'https://www.youtube.com/watch?v=502pVnWUo5c', level:'basis', category:'בסיס' },
          { id:'b3',  nameHe:'צעד בסיס 2 — מאמבו',          nameEn:'Mambo Step',            youtubeUrl:'https://www.youtube.com/watch?v=D1r332W3C9Q', level:'basis', category:'בסיס' },
          { id:'b4',  nameHe:'צעד בסיס 3 — קומביה',         nameEn:'Cumbia Step',           youtubeUrl:'https://www.youtube.com/watch?v=ibtt4xmtxHk', level:'basis', category:'בסיס' },
          { id:'b5',  nameHe:'צעד בסיס 4 — רומבה',          nameEn:'Rumba Step',            youtubeUrl:'https://www.youtube.com/watch?v=mpvJxlO2PFQ', level:'basis', category:'בסיס' },
          { id:'b6',  nameHe:'וואפאה',                       nameEn:'Guapea',                youtubeUrl:'https://www.youtube.com/watch?v=fk_H8_pvr4w', level:'basis', category:'בסיס' },
          { id:'b7',  nameHe:'דאמה',                         nameEn:'Dame',                  youtubeUrl:'https://www.youtube.com/watch?v=czwBiVX_8qM', level:'basis', category:'בסיס' },
          { id:'b8',  nameHe:'דילה קה נו',                   nameEn:'Dile que no',           youtubeUrl:'https://www.youtube.com/watch?v=fa4EHHHFcsQ', level:'basis', category:'בסיס' },
          { id:'b9',  nameHe:"אינצ'ופלה",                    nameEn:'Enchufala',             youtubeUrl:'https://www.youtube.com/watch?v=qIdSys1iE5c', level:'basis', category:'בסיס' },
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
          { id:'beg1-1', nameHe:"אינצ'ופלה דובלה",      nameEn:'Enchufala Doble',       youtubeUrl:'https://www.youtube.com/watch?v=JswM_OUf2zA', level:'beginner', category:"אינצ'ופלה" },
          { id:'beg1-2', nameHe:"אינצ'ופלה קומפליקאדו",  nameEn:'Enchufala Complicado',  youtubeUrl:'https://www.youtube.com/watch?v=CVs-VcV6FUc', level:'beginner', category:"אינצ'ופלה" },
          { id:'beg1-3', nameHe:'דאמה קון אונה',          nameEn:'Dame con Una',          youtubeUrl:'https://www.youtube.com/watch?v=vfZUQvly2W8', level:'beginner', category:'דאמה' },
          { id:'beg1-4', nameHe:'דאמה קון דוס',           nameEn:'Dame con Dos',          youtubeUrl:'https://www.youtube.com/watch?v=ztk_R3bChZQ', level:'beginner', category:'דאמה' },
          { id:'beg1-5', nameHe:'דאמה קון טרס',           nameEn:'Dame con Tres',         youtubeUrl:'https://www.youtube.com/watch?v=kKEzg2-TD3E', level:'beginner', category:'דאמה' },
          { id:'beg1-6', nameHe:"אינצ'ופלה אי דאמה",      nameEn:'Enchufala y Dame',      youtubeUrl:'https://www.youtube.com/watch?v=A6UP2vXuAP8', level:'beginner', category:'קומבינציה' },
          { id:'beg1-7', nameHe:'פסטיבל בלאגן',           nameEn:'Festival Balagan',      youtubeUrl:'https://www.youtube.com/watch?v=MY_YF-V7usg', level:'beginner', category:'פסטיבל' },
        ],
      },
      {
        id: 'beg-2',
        nameHe: '2 — הומברס א',
        steps: [
          { id:'beg2-1',  nameHe:'הומברס אל סנטרו',   nameEn:'Hombres el Centro',   youtubeUrl:'https://www.youtube.com/watch?v=joxuPhdcw6Q', level:'beginner', category:'הומברס' },
          { id:'beg2-2',  nameHe:'וואלטה (קפאים)',     nameEn:'Vuelta (Kapaim)',      youtubeUrl:'https://www.youtube.com/watch?v=HvcoL0ROzjM', level:'beginner', category:'הומברס' },
          { id:'beg2-3',  nameHe:'חייפה',              nameEn:'Haifa',                youtubeUrl:'https://www.youtube.com/watch?v=IABE2jMLfDk', level:'beginner', category:'הומברס' },
          { id:'beg2-4',  nameHe:'לה פלוטה',           nameEn:'La Pelota',            youtubeUrl:'https://www.youtube.com/watch?v=7MFz-fyMhPs', level:'beginner', category:'הומברס' },
          { id:'beg2-5',  nameHe:'לה פלוטה קלאבה',     nameEn:'La Pelota Clave',      youtubeUrl:'https://www.youtube.com/watch?v=uFH0WquC25Y', level:'beginner', category:'הומברס' },
          { id:'beg2-6',  nameHe:'לה פלוטה לוקה',      nameEn:'La Pelota Loca',       youtubeUrl:'https://www.youtube.com/watch?v=aNuHV16UZbo', level:'beginner', category:'הומברס' },
          { id:'beg2-7',  nameHe:'און פליי',            nameEn:'Un Fly',               youtubeUrl:'http://www.youtube.com/watch?v=RACdB7KIpqU',  level:'beginner', category:'הומברס' },
          { id:'beg2-8',  nameHe:'פאלמאס',              nameEn:'Palmas',               youtubeUrl:'http://www.youtube.com/watch?v=vVKqne5_7J0',  level:'beginner', category:'הומברס' },
          { id:'beg2-9',  nameHe:"צ'אפאריה",            nameEn:'Chaparia',             youtubeUrl:'http://www.youtube.com/watch?v=GJBzdH8sLA8',  level:'beginner', category:'הומברס' },
          { id:'beg2-10', nameHe:'פסטיבל בואנו מאלו',  nameEn:'Festival Bueno Malo',  youtubeUrl:'https://www.youtube.com/watch?v=yZ8bT8zAMJ0', level:'beginner', category:'פסטיבל' },
        ],
      },
      {
        id: 'beg-3',
        nameHe: '3 — טאפ',
        steps: [
          { id:'beg3-1', nameHe:'לנטו',         nameEn:'Lento',         youtubeUrl:'http://www.youtube.com/watch?v=yqVwoeJ54g0', level:'beginner', category:'טאפ' },
          { id:'beg3-2', nameHe:'ואסילאלה',      nameEn:'Vacilala',      youtubeUrl:'http://www.youtube.com/watch?v=I0EJMHecG_0', level:'beginner', category:'טאפ' },
          { id:'beg3-3', nameHe:'סייטה',         nameEn:'Siete',         youtubeUrl:'http://www.youtube.com/watch?v=XKtt8CB7J3M', level:'beginner', category:'טאפ' },
          { id:'beg3-4', nameHe:'סייטה מודרנו',  nameEn:'Siete Moderno', youtubeUrl:'http://www.youtube.com/watch?v=YFVtFvu7GTk', level:'beginner', category:'טאפ' },
        ],
      },
      {
        id: 'beg-4',
        nameHe: '4 — פרימה',
        steps: [
          { id:'beg4-1', nameHe:'פרימה',                 nameEn:'Prima',                youtubeUrl:'http://www.youtube.com/watch?v=X44m1VUtV9g',  level:'beginner', category:'פרימה' },
          { id:'beg4-2', nameHe:'אדיוס',                 nameEn:'Adios',                youtubeUrl:'https://www.youtube.com/watch?v=palabYHmKns',  level:'beginner', category:'פרימה' },
          { id:'beg4-3', nameHe:'פרימה קון לה הרמנה',    nameEn:'Prima con la Hermana', youtubeUrl:'http://www.youtube.com/watch?v=iWJDuhiVs-E',   level:'beginner', category:'פרימה' },
          { id:'beg4-4', nameHe:'אבלין',                 nameEn:'Evelyn',               youtubeUrl:'https://www.youtube.com/watch?v=6m0EuDJu_As',  level:'beginner', category:'פרימה' },
        ],
      },
      {
        id: 'beg-5',
        nameHe: '5 — סומבררו',
        steps: [
          { id:'beg5-1', nameHe:'סומבררו',          nameEn:'Sombrero',        youtubeUrl:'http://www.youtube.com/watch?v=Y0U309VrG2w',  level:'beginner', category:'סומבררו' },
          { id:'beg5-2', nameHe:'לאסו',             nameEn:'Laso',            youtubeUrl:'https://www.youtube.com/watch?v=xYvHcA5u0WI', level:'beginner', category:'סומבררו' },
          { id:'beg5-3', nameHe:'סומבררו איי לאסו', nameEn:'Sombrero y Laso', youtubeUrl:'https://www.youtube.com/watch?v=EMMMdJqtmpM', level:'beginner', category:'סומבררו' },
          { id:'beg5-4', nameHe:'מונטניה',          nameEn:'Montaña',         youtubeUrl:'http://www.youtube.com/watch?v=eWHH4JYQe_o',  level:'beginner', category:'סומבררו' },
        ],
      },
      {
        id: 'beg-6',
        nameHe: '6 — קנטאקי',
        steps: [
          { id:'beg6-1', nameHe:'קנדאדו',  nameEn:'Candado',  youtubeUrl:'http://www.youtube.com/watch?v=tH5m2JgVCYc', level:'beginner', category:'back' },
          { id:'beg6-2', nameHe:'מיאמי',   nameEn:'Miami',    youtubeUrl:'http://www.youtube.com/watch?v=YwGzyrABKlE', level:'beginner', category:'back' },
          { id:'beg6-3', nameHe:'קנטאקי',  nameEn:'Kentucky', youtubeUrl:'http://www.youtube.com/watch?v=1IrFrFKKkeI', level:'beginner', category:'back' },
          { id:'beg6-4', nameHe:'האוואנה', nameEn:'Havana',   youtubeUrl:'http://www.youtube.com/watch?v=QsezvdEgPkE', level:'beginner', category:'back' },
        ],
      },
      {
        id: 'beg-7',
        nameHe: '7 — טיאמפו',
        steps: [
          { id:'beg7-1', nameHe:'טיאמפו אספניה', nameEn:'Tiempo España',  youtubeUrl:'https://www.youtube.com/watch?v=wl0jwLo5bLc', level:'beginner', category:'טיאמפו' },
          { id:'beg7-2', nameHe:'טארו',           nameEn:'Taro',           youtubeUrl:'http://www.youtube.com/watch?v=tCnZZHEfbQI',  level:'beginner', category:'טיאמפו' },
          { id:'beg7-3', nameHe:'פארא אל מדיו',   nameEn:'Para el Medio',  youtubeUrl:'https://www.youtube.com/watch?v=H5OPu50Ih_Y', level:'beginner', category:'טיאמפו' },
          { id:'beg7-4', nameHe:'פארא אבאחו',     nameEn:'Para Abajo',     youtubeUrl:'https://www.youtube.com/watch?v=DoRldDMHUZw', level:'beginner', category:'טיאמפו' },
        ],
      },
      {
        id: 'beg-8',
        nameHe: '8 — קוקה קולה',
        steps: [
          { id:'beg8-1', nameHe:'קוקה קולה',             nameEn:'Coca Cola',           youtubeUrl:'http://www.youtube.com/watch?v=LM43cc7OhBs',  level:'beginner', category:'קוקה קולה' },
          { id:'beg8-2', nameHe:"אינצ'ופלה קוקה קולה",   nameEn:'Enchufala Coca Cola', youtubeUrl:'https://www.youtube.com/watch?v=ZPVka4OtBeg', level:'beginner', category:'קוקה קולה' },
          { id:'beg8-3', nameHe:'סייטה קוקה קולה',       nameEn:'Siete Coca Cola',     youtubeUrl:'http://www.youtube.com/watch?v=73STWQdEE7M',  level:'beginner', category:'קוקה קולה' },
          { id:'beg8-4', nameHe:'אקסיביילה',              nameEn:'Exhibala',            youtubeUrl:'http://www.youtube.com/watch?v=QLWeMZ6SoR4',  level:'beginner', category:'קוקה קולה' },
        ],
      },
      {
        id: 'beg-9',
        nameHe: '9 — סיבובים ומעברים',
        steps: [
          { id:'beg9-1', nameHe:'דירקטו',             nameEn:'Directo',              youtubeUrl:'https://www.youtube.com/watch?v=TfnUsjrnb0g', level:'beginner', category:'סיבובים' },
          { id:'beg9-2', nameHe:'דאמה אוקאיטו',       nameEn:'Dame Ocaito',          youtubeUrl:'https://www.youtube.com/watch?v=PDMCcKw_x6M', level:'beginner', category:'סיבובים' },
          { id:'beg9-3', nameHe:'אונה אבאחו',         nameEn:'Una Abajo',            youtubeUrl:'https://www.youtube.com/watch?v=u3NCKWY1KVQ', level:'beginner', category:'סיבובים' },
          { id:'beg9-4', nameHe:'פסטיבל פיסינה קילו', nameEn:'Festival Piscina Kilo',youtubeUrl:'https://www.youtube.com/watch?v=41i0_UQ9Z34', level:'beginner', category:'פסטיבל' },
        ],
      },
      {
        id: 'beg-10',
        nameHe: '10 — Back Variations',
        steps: [
          { id:'beg10-1', nameHe:'אל אונו',       nameEn:'El Uno',         youtubeUrl:'http://www.youtube.com/watch?v=d9iNf6pm-jk',  level:'beginner', category:'back' },
          { id:'beg10-2', nameHe:'אל דוס',        nameEn:'El Dos',         youtubeUrl:'https://www.youtube.com/watch?v=mS2JqDNt8sY', level:'beginner', category:'back' },
          { id:'beg10-3', nameHe:'Three Way Stop', nameEn:'Three Way Stop', youtubeUrl:'https://www.youtube.com/watch?v=j6Di28x1RjI', level:'beginner', category:'back' },
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
          { id:'int2-1', nameHe:"דרצ'ה",              nameEn:'Derecha',             youtubeUrl:'https://www.youtube.com/watch?v=AzbztZBlmoo', level:'intermediate', category:'הומברס' },
          { id:'int2-2', nameHe:'דאמה קון מאנוס',     nameEn:'Dame con Manos',      youtubeUrl:'https://www.youtube.com/watch?v=dN5-ItEzeVY', level:'intermediate', category:'הומברס' },
          { id:'int2-3', nameHe:'דאמה קון מאנוס טרס', nameEn:'Dame con Manos Tres',  youtubeUrl:'https://www.youtube.com/watch?v=ux4xuRjinas', level:'intermediate', category:'הומברס' },
          { id:'int2-4', nameHe:'קאדנה',               nameEn:'Cadena',              youtubeUrl:'https://www.youtube.com/watch?v=tzYOzT6mV9Y', level:'intermediate', category:'הומברס' },
          { id:'int2-5', nameHe:'סרו',                 nameEn:'Cero',                youtubeUrl:'https://www.youtube.com/watch?v=rflTICyo7is', level:'intermediate', category:'הומברס' },
          { id:'int2-6', nameHe:"אוצ'ו",               nameEn:'Ocho',                youtubeUrl:'https://www.youtube.com/watch?v=Vk3XDh4k_Q8', level:'intermediate', category:'הומברס' },
          { id:'int2-7', nameHe:"אוצ'נטה",             nameEn:'Ochenta',             youtubeUrl:'https://www.youtube.com/watch?v=PuB34PS0-5w', level:'intermediate', category:'הומברס' },
        ],
      },
      {
        id: 'int-3',
        nameHe: '3 — סייטה מתקדם',
        steps: [
          { id:'int3-1', nameHe:'אטרביידו',      nameEn:'Atrevido',       youtubeUrl:'https://www.youtube.com/watch?v=Jcq-3fCdEc4', level:'intermediate', category:'סייטה' },
          { id:'int3-2', nameHe:'סייטה לוקו',    nameEn:'Siete Loco',     youtubeUrl:'http://www.youtube.com/watch?v=2ac45ElWQfY',  level:'intermediate', category:'סייטה' },
          { id:'int3-3', nameHe:'סייטה מודרנו',  nameEn:'Siete Moderno',  youtubeUrl:'http://www.youtube.com/watch?v=YFVtFvu7GTk',  level:'intermediate', category:'סייטה' },
          { id:'int3-4', nameHe:'סייטה קוקה קולה',nameEn:'Siete Coca Cola',youtubeUrl:'http://www.youtube.com/watch?v=73STWQdEE7M', level:'intermediate', category:'סייטה' },
        ],
      },
      {
        id: 'int-4',
        nameHe: '4 — פסטיבל פרימה',
        steps: [
          { id:'int4-1', nameHe:'אסקיפי לה פרימה פורמה', nameEn:'Esquipi la Prima Forma', youtubeUrl:'http://www.youtube.com/watch?v=CV9ioQsNBJs',  level:'intermediate', category:'פרימה' },
          { id:'int4-2', nameHe:'פרימה קון פאוליטו',      nameEn:'Prima con Paulito',       youtubeUrl:'http://www.youtube.com/watch?v=6uvgc3zm9pM',  level:'intermediate', category:'פרימה' },
          { id:'int4-3', nameHe:'אדיוס אאריבה',           nameEn:'Adios Arriba',            youtubeUrl:'https://www.youtube.com/watch?v=zFe6w9wFmcI', level:'intermediate', category:'פרימה' },
          { id:'int4-4', nameHe:'פסטיבל פרימה',           nameEn:'Festival Prima',          youtubeUrl:'http://www.youtube.com/watch?v=fcLxYzdqjrc',  level:'intermediate', category:'פסטיבל' },
        ],
      },
      {
        id: 'int-5',
        nameHe: '5 — בסו',
        steps: [
          { id:'int5-1', nameHe:'בסו',     nameEn:'Beso',     youtubeUrl:'http://www.youtube.com/watch?v=8QXhay26TIU',  level:'intermediate', category:'בסו' },
          { id:'int5-2', nameHe:'אברסאלה', nameEn:'Abrazala', youtubeUrl:'http://www.youtube.com/watch?v=8QKVjRIbxbY',  level:'intermediate', category:'בסו' },
          { id:'int5-3', nameHe:'בלסרו',   nameEn:'Balsero',  youtubeUrl:'https://www.youtube.com/watch?v=wuToHoNijqQ', level:'intermediate', category:'בסו' },
        ],
      },
      {
        id: 'int-6',
        nameHe: '6 — סטנטות',
        steps: [
          { id:'int6-1', nameHe:'סטנטה (70)',           nameEn:'Setenta',            youtubeUrl:'http://www.youtube.com/watch?v=fxcXu6gmyu8', level:'intermediate', category:'סטנטות' },
          { id:'int6-2', nameHe:'סטנטה איי סינקו (75)', nameEn:'Setenta y Cinco',    youtubeUrl:'http://www.youtube.com/watch?v=X2DyBUaCZ8g', level:'intermediate', category:'סטנטות' },
          { id:'int6-3', nameHe:'סטנטה קומפליקאדו',     nameEn:'Setenta Complicado', youtubeUrl:'http://www.youtube.com/watch?v=iBhFE1XJu2Q', level:'intermediate', category:'סטנטות' },
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
          { id:'adv1-1', nameHe:'סומבררו דובלה',     nameEn:'Sombrero Doble',      youtubeUrl:'https://www.youtube.com/watch?v=WSYNp3iu1ks', level:'advanced', category:'סומבררו' },
          { id:'adv1-2', nameHe:"חואנה לה קובאנה",   nameEn:'Juana la Cubana',     youtubeUrl:'https://www.youtube.com/watch?v=rEUUI2-m8ow', level:'advanced', category:'סומבררו' },
          { id:'adv1-3', nameHe:'קנטאקי קומפליקאדו', nameEn:'Kentucky Complicado', youtubeUrl:'https://www.youtube.com/watch?v=mB7JViSgjh8', level:'advanced', category:'back' },
        ],
      },
      {
        id: 'adv-2',
        nameHe: '2',
        steps: [
          { id:'adv2-1', nameHe:'ואסילאלה אנטראדה', nameEn:'Vacilala Entrada', youtubeUrl:'https://www.youtube.com/watch?v=kBB1YE2E7vM', level:'advanced', category:'מיוחד' },
          { id:'adv2-2', nameHe:'קולון',             nameEn:'Colon',           youtubeUrl:'https://www.youtube.com/watch?v=l5gjv49kz4c', level:'advanced', category:'מיוחד' },
          { id:'adv2-3', nameHe:'קולון קון אמיגה',   nameEn:'Colon con Amiga', youtubeUrl:'https://www.youtube.com/watch?v=ta3wNp6CALo', level:'advanced', category:'מיוחד' },
        ],
      },
      {
        id: 'adv-3',
        nameHe: '3',
        steps: [
          { id:'adv3-1', nameHe:'דדו גוואראפו', nameEn:'Dedo Guarapo y Bota', youtubeUrl:'https://www.youtube.com/watch?v=xzDEE6aXL9o', level:'advanced', category:'דדו' },
          { id:'adv3-2', nameHe:'דדו סאבוראדו', nameEn:'Dedo Saboreado',      youtubeUrl:'https://www.youtube.com/watch?v=0imJRB-Jp9A', level:'advanced', category:'דדו' },
        ],
      },
      {
        id: 'adv-4',
        nameHe: '4',
        steps: [
          { id:'adv4-1', nameHe:'אמיסטד',            nameEn:'Amistad',             youtubeUrl:'https://www.youtube.com/watch?v=GWH1CBe2KXE', level:'advanced', category:'מיוחד' },
          { id:'adv4-2', nameHe:'אסקיפי קון אמיסטד', nameEn:'Esquipi con Amistad', youtubeUrl:'https://www.youtube.com/watch?v=17RY54Ry_Ps', level:'advanced', category:'מיוחד' },
          { id:'adv4-3', nameHe:'פואנטה',             nameEn:'Puente',              youtubeUrl:'https://www.youtube.com/watch?v=QLj6hTsQ4Og', level:'advanced', category:'מיוחד' },
        ],
      },
      {
        id: 'adv-5',
        nameHe: '5',
        steps: [
          { id:'adv5-1', nameHe:'אל דוסה',     nameEn:'El Doce',     youtubeUrl:'https://www.youtube.com/watch?v=3E8d2AN8I34', level:'advanced', category:'מיוחד' },
          { id:'adv5-2', nameHe:'אל מלאו',     nameEn:'El Melao',    youtubeUrl:'https://www.youtube.com/watch?v=N1_qpOY9r7M', level:'advanced', category:'מיוחד' },
          { id:'adv5-3', nameHe:'פונלה סאבור', nameEn:'Ponle Sabor', youtubeUrl:'https://www.youtube.com/watch?v=uFQehTqZfPg', level:'advanced', category:'מיוחד' },
        ],
      },
      {
        id: 'adv-6',
        nameHe: '6',
        steps: [
          { id:'adv6-1', nameHe:'סטנטה נואבו', nameEn:'Setenta Nuevo', youtubeUrl:'https://www.youtube.com/watch?v=ccpDxJsrOns', level:'advanced', category:'סטנטות' },
          { id:'adv6-2', nameHe:'נובנטה',       nameEn:'Noventa',       youtubeUrl:'https://www.youtube.com/watch?v=HcnWjZryHGI', level:'advanced', category:'סטנטות' },
          { id:'adv6-3', nameHe:'סייטה סטנטה',  nameEn:'Siete Setenta', youtubeUrl:'https://www.youtube.com/watch?v=GK03gkoTeGw', level:'advanced', category:'סטנטות' },
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
          { id:'m1-1', nameHe:'בסו לוקו',            nameEn:'Beso Loco',          youtubeUrl:'https://www.youtube.com/watch?v=PpFqYMh55BY', level:'master', category:'בסו' },
          { id:'m1-2', nameHe:'בסו קומפליקאדו',      nameEn:'Beso Complicado',    youtubeUrl:'https://www.youtube.com/watch?v=is5lspyc7iw', level:'master', category:'בסו' },
          { id:'m1-3', nameHe:'בסו פור דבאחו',       nameEn:'Beso por Debajo',    youtubeUrl:'https://www.youtube.com/watch?v=pO6wergxM0I', level:'master', category:'בסו' },
          { id:'m1-4', nameHe:'בלסרו קומפליקאדו',    nameEn:'Balsero Complicado', youtubeUrl:'https://www.youtube.com/watch?v=pXxl9aJkBnM', level:'master', category:'בסו' },
          { id:'m1-5', nameHe:'אבאניקו קומפליקאדו',  nameEn:'Abanico Complicado', youtubeUrl:'https://www.youtube.com/watch?v=ZHz_7js8Hko', level:'master', category:'ידיים' },
          { id:'m1-6', nameHe:'טורנדו',               nameEn:'Tornado',            youtubeUrl:'https://www.youtube.com/watch?v=MAUjuo71jB0', level:'master', category:'מאסטר' },
          { id:'m1-7', nameHe:'מיקאלה',               nameEn:'Micaela',            youtubeUrl:'https://www.youtube.com/watch?v=nKNDnzRzDr8', level:'master', category:'מאסטר' },
          { id:'m1-8', nameHe:'תליה',                 nameEn:'Thalia',             youtubeUrl:'https://www.youtube.com/watch?v=cThYwpFWbyQ', level:'master', category:'מאסטר' },
          { id:'m1-9', nameHe:"לה חני",               nameEn:'La Jenny',           youtubeUrl:'https://www.youtube.com/watch?v=56IOwturFRU', level:'master', category:'מאסטר' },
        ],
      },
    ],
  },
];

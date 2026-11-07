'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/',           label: 'בית'      },
  { href: '/about',      label: 'אודות'    },
  { href: '/classes',    label: 'שיעורים'  },
  { href: '/curriculum', label: 'סילבוס'   },
];

const CATALOG_URL = 'https://salsa-steps-web-kgww.vercel.app/';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#01C5C6] text-black shadow-lg border-b-[11px] border-[#FDE003]">
      <div className="container-rtl flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2" aria-label="מדיה נוצ'ה כרמיאל — דף הבית">
          <Image src="/logo.png" alt="לוגו מדיה נוצ'ה" width={56} height={56} className="object-contain" priority />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 text-base font-bold items-center">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-[#01C5C6] px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
            >
              קטלוג צעדים 💃
            </a>
          </li>
          <li>
            <a
              href="https://avnerman.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="אתר Avner Man"
            >
              <Image src="/avnerman.png" alt="Avner Man" width={32} height={32} className="rounded-full opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="תפריט"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#01C5C6] text-black font-bold px-4 pb-4">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 border-b border-black/15 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-black font-bold hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            קטלוג צעדים 💃
          </a>
        </div>
      )}
    </nav>
  );
}

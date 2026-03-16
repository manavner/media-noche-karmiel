'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/',           label: 'בית'      },
  { href: '/about',      label: 'אודות'    },
  { href: '/classes',    label: 'שיעורים'  },
  { href: '/curriculum', label: 'סילבוס'   },
  { href: '/contact',    label: 'צור קשר'  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-dark text-white shadow-lg">
      <div className="container-rtl flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl font-bold text-gold">
          מדיה נוצ&apos;ה כרמיאל
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 text-sm">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
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
        <div className="md:hidden bg-dark-card px-4 pb-4">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 border-b border-dark-border hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

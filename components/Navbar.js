'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Truck } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: t('services'), href: '#services' },
    { label: t('howItWorks'), href: '#how-it-works' },
    { label: t('areas'), href: '#areas' },
    { label: t('contact'), href: '#quote' },
  ];

  const switchLocale = (newLocale) => {
    if (newLocale === locale) return;
    // Replace /<locale>/... with /<newLocale>/...
    const newPath = pathname.replace(/^\/(en|pt)/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center group-hover:bg-brand-700 transition-colors">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-semibold text-slate-900 tracking-tight">
              Removals <span className="text-brand-600">Lisbon</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {label}
              </a>
            ))}

            {/* Language toggle */}
            <div className="flex items-center gap-1 text-sm font-medium border border-slate-200 rounded-full overflow-hidden">
              <button
                onClick={() => switchLocale('pt')}
                className={`px-3 py-1 transition-colors ${
                  locale === 'pt'
                    ? 'bg-brand-600 text-white'
                    : 'text-slate-600 hover:text-brand-600'
                }`}
                aria-label="Português"
              >
                PT
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1 transition-colors ${
                  locale === 'en'
                    ? 'bg-brand-600 text-white'
                    : 'text-slate-600 hover:text-brand-600'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <a href="#quote" className="btn-primary text-sm px-5 py-2.5">
              {t('quote')}
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-700 hover:text-brand-600"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 text-slate-700 hover:text-brand-600 transition-colors border-b border-slate-100"
              >
                {label}
              </a>
            ))}
            <div className="flex gap-2 mt-4 mb-2">
              <button
                onClick={() => switchLocale('pt')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  locale === 'pt'
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                Português
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  locale === 'en'
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                English
              </button>
            </div>
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              {t('quote')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

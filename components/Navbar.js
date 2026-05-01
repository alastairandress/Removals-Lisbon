'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Truck, ChevronDown } from 'lucide-react';
import { services } from '../lib/services';
import { neighborhoods } from '../lib/neighborhoods';

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const switchLocale = (newLocale) => {
    if (newLocale === locale) return;
    const newPath = pathname.replace(/^\/(en|pt)/, `/${newLocale}`);
    router.push(newPath);
  };

  // Group neighborhoods by region
  const central = neighborhoods.filter(n => n.region === 'central');
  const greater = neighborhoods.filter(n => n.region === 'greater');

  const navTexts = locale === 'pt'
    ? { services: 'Serviços', areas: 'Áreas', blog: 'Blog', about: 'Sobre Nós', faq: 'FAQ', contact: 'Contacto', quote: 'Orçamento Grátis', viewAll: 'Ver tudo', central: 'Lisboa Centro', greater: 'Grande Lisboa' }
    : { services: 'Services', areas: 'Areas', blog: 'Blog', about: 'About', faq: 'FAQ', contact: 'Contact', quote: 'Free Quote', viewAll: 'View all', central: 'Central Lisbon', greater: 'Greater Lisbon' };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
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

          <div className="hidden lg:flex items-center gap-7" ref={dropdownRef}>
            {/* Services dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors"
              >
                {navTexts.services}
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 overflow-hidden">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${locale}/services/${s.slug}`}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-600 transition-colors"
                    >
                      {s[locale].name}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <Link
                      href={`/${locale}/services`}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2.5 text-sm font-medium text-brand-600 hover:bg-brand-50 transition-colors"
                    >
                      → {navTexts.viewAll}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Areas dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'areas' ? null : 'areas')}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors"
              >
                {navTexts.areas}
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'areas' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'areas' && (
                <div className="absolute top-full left-0 mt-3 w-[28rem] bg-white rounded-xl shadow-xl border border-slate-200 p-4 grid grid-cols-2 gap-x-4 gap-y-1">
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 py-2">{navTexts.central}</div>
                    {central.map((n) => (
                      <Link
                        key={n.slug}
                        href={`/${locale}/neighborhoods/${n.slug}`}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-2 py-1.5 text-sm text-slate-700 hover:text-brand-600 transition-colors rounded"
                      >
                        {n[locale].name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 py-2">{navTexts.greater}</div>
                    {greater.map((n) => (
                      <Link
                        key={n.slug}
                        href={`/${locale}/neighborhoods/${n.slug}`}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-2 py-1.5 text-sm text-slate-700 hover:text-brand-600 transition-colors rounded"
                      >
                        {n[locale].name}
                      </Link>
                    ))}
                    <div className="pt-2 mt-2 border-t border-slate-100">
                      <Link
                        href={`/${locale}/neighborhoods`}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-2 py-1.5 text-sm font-medium text-brand-600 hover:bg-brand-50 rounded transition-colors"
                      >
                        → {navTexts.viewAll}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href={`/${locale}/blog`} className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors">
              {navTexts.blog}
            </Link>
            <Link href={`/${locale}/about`} className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors">
              {navTexts.about}
            </Link>
            <Link href={`/${locale}/contact`} className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors">
              {navTexts.contact}
            </Link>

            {/* Language toggle */}
            <div className="flex items-center gap-1 text-sm font-medium border border-slate-200 rounded-full overflow-hidden">
              <button
                onClick={() => switchLocale('pt')}
                className={`px-3 py-1 transition-colors ${locale === 'pt' ? 'bg-brand-600 text-white' : 'text-slate-600 hover:text-brand-600'}`}
                aria-label="Português"
              >PT</button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1 transition-colors ${locale === 'en' ? 'bg-brand-600 text-white' : 'text-slate-600 hover:text-brand-600'}`}
                aria-label="English"
              >EN</button>
            </div>

            <Link href={`/${locale}/contact`} className="btn-primary text-sm px-5 py-2.5">
              {navTexts.quote}
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-slate-700 hover:text-brand-600"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="container-x py-4 flex flex-col gap-1">
            <Link href={`/${locale}/services`} onClick={() => setOpen(false)} className="py-3 font-medium text-slate-800 hover:text-brand-600 border-b border-slate-100">
              {navTexts.services}
            </Link>
            <div className="pl-4 mb-2">
              {services.map((s) => (
                <Link key={s.slug} href={`/${locale}/services/${s.slug}`} onClick={() => setOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-brand-600">
                  {s[locale].name}
                </Link>
              ))}
            </div>

            <Link href={`/${locale}/neighborhoods`} onClick={() => setOpen(false)} className="py-3 font-medium text-slate-800 hover:text-brand-600 border-b border-slate-100">
              {navTexts.areas}
            </Link>
            <div className="pl-4 mb-2">
              {neighborhoods.map((n) => (
                <Link key={n.slug} href={`/${locale}/neighborhoods/${n.slug}`} onClick={() => setOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-brand-600">
                  {n[locale].name}
                </Link>
              ))}
            </div>

            <Link href={`/${locale}/blog`} onClick={() => setOpen(false)} className="py-3 font-medium text-slate-800 hover:text-brand-600 border-b border-slate-100">
              {navTexts.blog}
            </Link>
            <Link href={`/${locale}/about`} onClick={() => setOpen(false)} className="py-3 font-medium text-slate-800 hover:text-brand-600 border-b border-slate-100">
              {navTexts.about}
            </Link>
            <Link href={`/${locale}/faq`} onClick={() => setOpen(false)} className="py-3 font-medium text-slate-800 hover:text-brand-600 border-b border-slate-100">
              {navTexts.faq}
            </Link>
            <Link href={`/${locale}/contact`} onClick={() => setOpen(false)} className="py-3 font-medium text-slate-800 hover:text-brand-600 border-b border-slate-100">
              {navTexts.contact}
            </Link>

            <div className="flex gap-2 mt-4 mb-2">
              <button onClick={() => switchLocale('pt')} className={`flex-1 py-2 rounded-lg text-sm font-medium ${locale === 'pt' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700'}`}>Português</button>
              <button onClick={() => switchLocale('en')} className={`flex-1 py-2 rounded-lg text-sm font-medium ${locale === 'en' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700'}`}>English</button>
            </div>
            <Link href={`/${locale}/contact`} onClick={() => setOpen(false)} className="btn-primary mt-2 text-center">
              {navTexts.quote}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Truck, Mail, Phone, MapPin } from 'lucide-react';
import { services } from '../lib/services';
import { neighborhoods } from '../lib/neighborhoods';

export default function Footer() {
  const locale = useLocale();
  const year = new Date().getFullYear();

  const t = locale === 'pt'
    ? {
        tagline: 'Mudanças e remoções de confiança em Lisboa e em todo o Portugal.',
        services: 'Serviços',
        areas: 'Áreas',
        company: 'Empresa',
        about: 'Sobre Nós',
        blog: 'Blog',
        faq: 'Perguntas Frequentes',
        contact: 'Contacto',
        privacy: 'Política de Privacidade',
        terms: 'Termos e Condições',
        viewAllServices: 'Ver todos os serviços',
        viewAllAreas: 'Ver todas as áreas',
        rights: 'Todos os direitos reservados.',
      }
    : {
        tagline: 'Trusted moves and removals in Lisbon and across Portugal.',
        services: 'Services',
        areas: 'Areas',
        company: 'Company',
        about: 'About',
        blog: 'Blog',
        faq: 'FAQ',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        viewAllServices: 'View all services',
        viewAllAreas: 'View all areas',
        rights: 'All rights reserved.',
      };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-x py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-semibold text-white tracking-tight">
                Removals <span className="text-brand-400">Lisbon</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-sm">
              {t.tagline}
            </p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400" />
                <a href="tel:+351000000000" className="hover:text-white transition-colors">+351 000 000 000</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400" />
                <a href="mailto:hello@removalslisbon.com" className="hover:text-white transition-colors">hello@removalslisbon.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400" />
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t.services}</h3>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/${locale}/services/${s.slug}`} className="hover:text-white transition-colors">
                    {s[locale].name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/${locale}/services`} className="text-brand-400 hover:text-brand-300 transition-colors">
                  {t.viewAllServices} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t.areas}</h3>
            <ul className="space-y-2.5 text-sm">
              {neighborhoods.slice(0, 6).map((n) => (
                <li key={n.slug}>
                  <Link href={`/${locale}/neighborhoods/${n.slug}`} className="hover:text-white transition-colors">
                    {n[locale].name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/${locale}/neighborhoods`} className="text-brand-400 hover:text-brand-300 transition-colors">
                  {t.viewAllAreas} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t.company}</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href={`/${locale}/about`} className="hover:text-white transition-colors">{t.about}</Link></li>
              <li><Link href={`/${locale}/blog`} className="hover:text-white transition-colors">{t.blog}</Link></li>
              <li><Link href={`/${locale}/faq`} className="hover:text-white transition-colors">{t.faq}</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-white transition-colors">{t.contact}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-slate-500">
          <p>© {year} Removals Lisbon. {t.rights}</p>
          <div className="flex gap-6">
            <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">{t.privacy}</Link>
            <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

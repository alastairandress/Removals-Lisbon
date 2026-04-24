'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Truck, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tServices = useTranslations('services');
  const tAreas = useTranslations('areas');
  const locale = useLocale();

  const services = ['s1', 's2', 's3', 's4', 's5', 's6'];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-semibold text-white tracking-tight">
                Removals <span className="text-brand-400">Lisbon</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t('services')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-slate-400 hover:text-brand-400 transition-colors">
                    {tServices(`${s}Title`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t('areas')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-slate-400">{tAreas('lisbonCentre')}</li>
              <li className="text-slate-400">{tAreas('greaterLisbon')}</li>
              <li className="text-slate-400">{tAreas('portugal')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t('contactTitle')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">{t('phoneLabel')}</p>
                  <a href="tel:+351000000000" className="text-slate-300 hover:text-brand-400 transition-colors">
                    +351 XXX XXX XXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">{t('whatsappLabel')}</p>
                  <a href="https://wa.me/351000000000" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-brand-400 transition-colors">
                    +351 XXX XXX XXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">{t('emailLabel')}</p>
                  <a href="mailto:hello@removalslisbon.com" className="text-slate-300 hover:text-brand-400 transition-colors break-all">
                    hello@removalslisbon.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">{t('addressLabel')}</p>
                  <p className="text-slate-300">{t('address')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Removals Lisbon. {t('rights')}</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-400 transition-colors">{t('privacy')}</a>
            <a href="#" className="hover:text-brand-400 transition-colors">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

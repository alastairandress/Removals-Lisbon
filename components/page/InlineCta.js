'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

/**
 * Inline CTA block to drop at the bottom of inner pages,
 * always pointing to the homepage quote form.
 */
export default function InlineCta({ titleKey = 'cta.title', subtitleKey = 'cta.subtitle', buttonKey = 'cta.button' }) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="py-16 bg-brand-600 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(white 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="container-x relative text-center max-w-2xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
          {t(titleKey)}
        </h2>
        <p className="text-brand-100 mb-6">{t(subtitleKey)}</p>
        <Link
          href={`/${locale}#quote`}
          className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-brand-50 transition-colors shadow-md"
        >
          {t(buttonKey)}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Map each homepage card key to the matching service slug.
// Order here = order on the homepage.
const SERVICES = [
  { key: 's1', slug: 'house-moving',                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=75', alt: 'House moving in Lisbon' },
  { key: 's2', slug: 'long-distance-moves',         image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&q=75', alt: 'Long-distance moving truck' },
  { key: 's3', slug: 'furniture-mattress-disposal', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=75', alt: 'Furniture and mattress disposal' },
  { key: 's4', slug: 'junk-clearance',              image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=75', alt: 'Junk and house clearance' },
  { key: 's5', slug: 'office-relocation',           image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=75', alt: 'Office relocation Lisbon' },
  { key: 's6', slug: 'man-with-a-van',              image: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=1200&q=75', alt: 'Man with a van delivery' },
];

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">{t('label')}</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/${locale}/services/${service.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-300 hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                    {t(`${service.key}Title`)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {t(`${service.key}Text`)}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 group-hover:text-brand-700">
                    {t('learnMore')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

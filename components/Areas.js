'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Areas() {
  const t = useTranslations('areas');

  const areas = [
    { key: 'lisbonCentre' },
    { key: 'greaterLisbon' },
    { key: 'portugal' },
  ];

  return (
    <section id="areas" className="py-24 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">{t('label')}</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-600 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-3">
                {t(area.key)}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t(`${area.key}List`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

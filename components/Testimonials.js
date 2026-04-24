'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = ['t1', 't2', 't3'];

  return (
    <section className="py-24 bg-gradient-to-b from-brand-50 to-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">{t('label')}</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((key, i) => (
            <motion.figure
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <blockquote className="text-slate-700 leading-relaxed mb-6">
                "{t(`${key}Quote`)}"
              </blockquote>
              <figcaption>
                <p className="font-semibold text-slate-900">{t(`${key}Name`)}</p>
                <p className="text-sm text-slate-500">{t(`${key}Location`)}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

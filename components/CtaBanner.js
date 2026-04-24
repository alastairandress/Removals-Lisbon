'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  const t = useTranslations('cta');

  return (
    <section className="py-20 bg-brand-600 relative overflow-hidden">
      {/* Decorative dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(white 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-brand-100 text-lg mb-8">{t('subtitle')}</p>
          <a
            href="#quote"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-medium rounded-lg hover:bg-brand-50 transition-colors shadow-md"
          >
            {t('button')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

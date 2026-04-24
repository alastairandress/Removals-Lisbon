'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Truck, Home } from 'lucide-react';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    { icon: MessageSquare, key: 'step1', num: '1' },
    { icon: FileText,      key: 'step2', num: '2' },
    { icon: Truck,         key: 'step3', num: '3' },
    { icon: Home,          key: 'step4', num: '✓' },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">{t('label')}</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, key, num }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-brand-50 border border-brand-100"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-brand-600 text-white font-display font-semibold flex items-center justify-center shadow-md">
                {num}
              </div>
              <div className="w-12 h-12 rounded-lg bg-white border border-brand-200 flex items-center justify-center mb-5 mt-2">
                <Icon className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                {t(`${key}Title`)}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t(`${key}Text`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

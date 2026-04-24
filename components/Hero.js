'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import TruckAnimation from './TruckAnimation';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen pt-20 pb-24 flex items-center overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="container-x relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600" />
                </span>
                {t('eyebrow')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-6"
            >
              {t('title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <a href="#quote" className="btn-primary group">
                {t('ctaQuote')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn-secondary">
                {t('ctaServices')}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200"
            >
              {['stat1', 'stat2', 'stat3'].map((s) => (
                <div key={s}>
                  <p className="font-display text-xl md:text-2xl font-semibold text-brand-700 mb-1">
                    {t(`${s}Value`)}
                  </p>
                  <p className="text-xs md:text-sm text-slate-500 leading-tight">
                    {t(`${s}Label`)}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 overflow-hidden shadow-lg"
          >
            <TruckAnimation />

            {/* Floating info card */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xs bg-white rounded-xl shadow-xl p-4 border border-slate-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Fully insured & licensed</p>
                  <p className="text-xs text-slate-500 mt-0.5">Local team • Bilingual • Trusted</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
      </motion.div>
    </section>
  );
}

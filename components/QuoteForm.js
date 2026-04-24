'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function QuoteForm() {
  const t = useTranslations('form');
  const [form, setForm] = useState({
    serviceType: '',
    name: '',
    email: '',
    phone: '',
    fromAddress: '',
    toAddress: '',
    movingDate: '',
    details: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: wire up to a real endpoint (Formspree, Resend, Getform, or a Next.js API route)
    // For now, simulate a submission so the UX is testable
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  const reset = () => {
    setForm({
      serviceType: '',
      name: '',
      email: '',
      phone: '',
      fromAddress: '',
      toAddress: '',
      movingDate: '',
      details: '',
    });
    setSubmitted(false);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-colors';

  const serviceOptions = [
    'serviceOption1',
    'serviceOption2',
    'serviceOption3',
    'serviceOption4',
    'serviceOption5',
    'serviceOption6',
    'serviceOption7',
  ];

  return (
    <section id="quote" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="container-x">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">{t('label')}</span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
              {t('title')}
            </h2>
            <p className="mt-4 text-lg text-slate-600">{t('subtitle')}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-200"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-9 h-9 text-brand-600" />
                </div>
                <p className="text-lg text-slate-700 mb-6">{t('success')}</p>
                <button onClick={reset} className="btn-secondary">
                  {t('successClose')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('serviceType')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={form.serviceType}
                    onChange={update('serviceType')}
                    className={inputClass}
                  >
                    <option value="">{t('serviceTypeSelect')}</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {t(opt)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('name')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder={t('namePlaceholder')}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      placeholder={t('emailPlaceholder')}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('phone')}
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder={t('phonePlaceholder')}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('movingDate')}
                    </label>
                    <input
                      type="date"
                      value={form.movingDate}
                      onChange={update('movingDate')}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('fromAddress')}
                    </label>
                    <input
                      type="text"
                      value={form.fromAddress}
                      onChange={update('fromAddress')}
                      placeholder={t('fromAddressPlaceholder')}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('toAddress')}
                    </label>
                    <input
                      type="text"
                      value={form.toAddress}
                      onChange={update('toAddress')}
                      placeholder={t('toAddressPlaceholder')}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('details')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.details}
                    onChange={update('details')}
                    placeholder={t('detailsPlaceholder')}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {submitting ? (
                    t('submitting')
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t('submit')}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

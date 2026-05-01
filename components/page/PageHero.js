'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ChevronRight } from 'lucide-react';

/**
 * Hero used on inner pages (services, neighborhoods, routes, blog posts).
 * Compact compared to the homepage hero, with breadcrumb + image + title.
 *
 * Props:
 *  - eyebrow:   short label above the title (e.g. "Service Area", "Service")
 *  - title:     main h1
 *  - subtitle:  optional paragraph beneath
 *  - image:     hero background image
 *  - breadcrumbs: array of { label, href } — last item is current page (no link)
 */
export default function PageHero({ eyebrow, title, subtitle, image, breadcrumbs = [] }) {
  const locale = useLocale();

  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-brand-50 to-white">
      {/* Decorative dots */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="container-x relative">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href={`/${locale}`} className="hover:text-brand-600 transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((b, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  {b.href && idx < breadcrumbs.length - 1 ? (
                    <Link href={b.href} className="hover:text-brand-600 transition-colors">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-slate-700 font-medium">{b.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {eyebrow && <span className="section-label">{eyebrow}</span>}
            <h1 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">{subtitle}</p>
            )}
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg bg-slate-100"
            >
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

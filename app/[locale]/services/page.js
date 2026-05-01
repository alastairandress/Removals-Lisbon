import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageHero from '../../../components/page/PageHero';
import InlineCta from '../../../components/page/InlineCta';
import { services } from '../../../lib/services';
import { locales } from '../../../i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const title = locale === 'pt'
    ? 'Serviços de Mudanças em Lisboa | Removals Lisbon'
    : 'Removal Services in Lisbon | Removals Lisbon';
  const description = locale === 'pt'
    ? 'Todos os nossos serviços de mudanças e remoções em Lisboa: mudanças de casa, escritório, remoção de móveis, colchões, entulho, e mais.'
    : 'All our removal services in Lisbon: house moves, office relocation, furniture and mattress disposal, junk clearance, and more.';
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/services`,
      languages: { en: '/en/services', pt: '/pt/services' },
    },
  };
}

export default function ServicesIndex({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = locale === 'pt'
    ? {
        eyebrow: 'Os Nossos Serviços',
        title: 'Serviços de Mudanças e Remoções em Lisboa',
        subtitle: 'Tudo o que fazemos, num só lugar. De pequenas entregas a mudanças completas, escolha o serviço certo para si.',
        learnMore: 'Saber mais',
      }
    : {
        eyebrow: 'Our Services',
        title: 'Removal Services in Lisbon and Portugal',
        subtitle: 'Everything we do, in one place. From single-item deliveries to full house moves, find the right service for you.',
        learnMore: 'Learn more',
      };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        breadcrumbs={[{ label: t.eyebrow }]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const c = s[locale];
              return (
                <Link
                  key={s.slug}
                  href={`/${locale}/services/${s.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <Image
                      src={s.image}
                      alt={c.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl font-semibold text-slate-900 mb-2">
                      {c.name}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {c.lead}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
                      {t.learnMore}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <InlineCta />
      <Footer />
    </main>
  );
}

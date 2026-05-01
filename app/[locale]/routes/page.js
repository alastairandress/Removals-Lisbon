import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageHero from '../../../components/page/PageHero';
import InlineCta from '../../../components/page/InlineCta';
import { routes } from '../../../lib/routes';
import { locales } from '../../../i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const title = locale === 'pt'
    ? 'Mudanças de Longa Distância de Lisboa | Removals Lisbon'
    : 'Long-Distance Removals from Lisbon | Removals Lisbon';
  const description = locale === 'pt'
    ? 'Mudanças de Lisboa para o Porto, Algarve, Coimbra, Madrid e mais. Mudanças nacionais e internacionais com seguro completo.'
    : 'Removals from Lisbon to Porto, the Algarve, Coimbra, Madrid and more. Domestic and international moves with full insurance.';
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/routes`,
      languages: { en: '/en/routes', pt: '/pt/routes' },
    },
  };
}

export default function RoutesIndex({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = locale === 'pt'
    ? {
        eyebrow: 'Rotas de Longa Distância',
        title: 'Mudanças de Lisboa para Qualquer Parte',
        subtitle: 'Fazemos rotas regulares pelo país e para Espanha. Escolha o seu destino e veja como funciona uma mudança de longa distância connosco.',
        learnMore: 'Saber mais',
      }
    : {
        eyebrow: 'Long-Distance Routes',
        title: 'Removals from Lisbon to anywhere',
        subtitle: 'We run regular routes across the country and to Spain. Pick your destination and see how a long-distance move works with us.',
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
          <div className="grid md:grid-cols-2 gap-6">
            {routes.map((r) => {
              const c = r[locale];
              return (
                <Link
                  key={r.slug}
                  href={`/${locale}/routes/${r.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <Image
                      src={r.image}
                      alt={`${c.from} to ${c.to}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl font-semibold text-slate-900 mb-3">
                      {c.from} → {c.to}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {r.distance}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {r.duration}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
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

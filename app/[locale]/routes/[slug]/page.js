import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Truck } from 'lucide-react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import PageHero from '../../../../components/page/PageHero';
import InlineCta from '../../../../components/page/InlineCta';
import { routes, getRoute } from '../../../../lib/routes';
import { locales } from '../../../../i18n';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    routes.map((r) => ({ locale, slug: r.slug }))
  );
}

export async function generateMetadata({ params: { locale, slug } }) {
  const r = getRoute(slug);
  if (!r) return {};
  const c = r[locale];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: {
      canonical: `/${locale}/routes/${slug}`,
      languages: {
        en: `/en/routes/${slug}`,
        pt: `/pt/routes/${slug}`,
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      images: [r.image],
    },
  };
}

export default function RoutePage({ params: { locale, slug } }) {
  unstable_setRequestLocale(locale);

  const r = getRoute(slug);
  if (!r) notFound();
  const c = r[locale];

  const related = routes.filter((x) => x.slug !== r.slug);

  const breadcrumbLabel = locale === 'pt' ? 'Rotas' : 'Routes';

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        eyebrow={locale === 'pt' ? 'Mudança de Longa Distância' : 'Long-Distance Move'}
        title={c.title}
        subtitle={c.lead}
        image={r.image}
        breadcrumbs={[
          { label: breadcrumbLabel, href: `/${locale}/routes` },
          { label: `${c.from} → ${c.to}` },
        ]}
      />

      {/* Quick stats */}
      <section className="py-12 bg-white">
        <div className="container-x max-w-4xl">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-brand-50 border border-brand-100 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-brand-600 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-500">{locale === 'pt' ? 'Distância' : 'Distance'}</p>
                <p className="font-semibold text-slate-900">{r.distance}</p>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-brand-50 border border-brand-100 flex items-center gap-3">
              <Clock className="w-6 h-6 text-brand-600 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-500">{locale === 'pt' ? 'Duração' : 'Duration'}</p>
                <p className="font-semibold text-slate-900">{r.duration}</p>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-brand-50 border border-brand-100 flex items-center gap-3">
              <Truck className="w-6 h-6 text-brand-600 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-500">{locale === 'pt' ? 'Tipicamente' : 'Typical move'}</p>
                <p className="font-semibold text-slate-900">
                  {locale === 'pt' ? '1–2 dias' : '1–2 days'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x max-w-4xl">
          <div className="space-y-12">
            {c.details.map((d, i) => (
              <div key={i}>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                  {d.title}
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other routes */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-x">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
              {locale === 'pt' ? 'Outras rotas que cobrimos' : 'Other routes we cover'}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${locale}/routes/${rel.slug}`}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                    {rel[locale].from} → {rel[locale].to}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">{rel.distance} • {rel.duration}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-brand-600 font-medium">
                    {locale === 'pt' ? 'Saber mais' : 'Learn more'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <InlineCta />
      <Footer />
    </main>
  );
}

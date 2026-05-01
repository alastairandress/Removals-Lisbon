import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import PageHero from '../../../../components/page/PageHero';
import InlineCta from '../../../../components/page/InlineCta';
import { neighborhoods, getNeighborhood } from '../../../../lib/neighborhoods';
import { locales } from '../../../../i18n';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    neighborhoods.map((n) => ({ locale, slug: n.slug }))
  );
}

export async function generateMetadata({ params: { locale, slug } }) {
  const n = getNeighborhood(slug);
  if (!n) return {};
  const c = n[locale];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: {
      canonical: `/${locale}/neighborhoods/${slug}`,
      languages: {
        en: `/en/neighborhoods/${slug}`,
        pt: `/pt/neighborhoods/${slug}`,
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      images: [n.image],
    },
  };
}

export default function NeighborhoodPage({ params: { locale, slug } }) {
  unstable_setRequestLocale(locale);

  const n = getNeighborhood(slug);
  if (!n) notFound();
  const c = n[locale];

  // Related neighborhoods in the same region
  const related = neighborhoods
    .filter((x) => x.region === n.region && x.slug !== n.slug)
    .slice(0, 3);

  const breadcrumbLabel = locale === 'pt' ? 'Áreas de Serviço' : 'Service Areas';
  const breadcrumbHref = `/${locale}/neighborhoods`;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        eyebrow={locale === 'pt' ? 'Área de Serviço' : 'Service Area'}
        title={c.title}
        subtitle={c.intro}
        image={n.image}
        breadcrumbs={[
          { label: breadcrumbLabel, href: breadcrumbHref },
          { label: c.name },
        ]}
      />

      {/* Challenges */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
            {locale === 'pt'
              ? `Desafios típicos de uma mudança em ${c.name}`
              : `Typical challenges of moving in ${c.name}`}
          </h2>
          <ul className="space-y-3">
            {c.challenges.map((ch, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700 leading-relaxed">{ch}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-x max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
            {locale === 'pt' ? 'A nossa abordagem' : 'Our approach'}
          </h2>
          <p className="text-slate-700 leading-relaxed text-lg">{c.ourApproach}</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
            {locale === 'pt'
              ? `Serviços disponíveis em ${c.name}`
              : `Services available in ${c.name}`}
          </h2>
          <p className="text-slate-700 leading-relaxed text-lg">{c.services}</p>
        </div>
      </section>

      {/* Related neighborhoods */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-x">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
              {locale === 'pt' ? 'Outras áreas que cobrimos' : 'Other areas we cover'}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${locale}/neighborhoods/${r.slug}`}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all"
                >
                  <MapPin className="w-5 h-5 text-brand-600 mb-3" />
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                    {r[locale].name}
                  </h3>
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

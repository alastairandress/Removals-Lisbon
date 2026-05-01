import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import PageHero from '../../../../components/page/PageHero';
import InlineCta from '../../../../components/page/InlineCta';
import { services, getService } from '../../../../lib/services';
import { locales } from '../../../../i18n';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({ params: { locale, slug } }) {
  const s = getService(slug);
  if (!s) return {};
  const c = s[locale];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: {
      canonical: `/${locale}/services/${slug}`,
      languages: {
        en: `/en/services/${slug}`,
        pt: `/pt/services/${slug}`,
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      images: [s.image],
    },
  };
}

export default function ServicePage({ params: { locale, slug } }) {
  unstable_setRequestLocale(locale);

  const s = getService(slug);
  if (!s) notFound();
  const c = s[locale];

  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  const breadcrumbLabel = locale === 'pt' ? 'Serviços' : 'Services';

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        eyebrow={locale === 'pt' ? 'Serviço' : 'Service'}
        title={c.title}
        subtitle={c.lead}
        image={s.image}
        breadcrumbs={[
          { label: breadcrumbLabel, href: `/${locale}/services` },
          { label: c.name },
        ]}
      />

      {/* Sections */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x max-w-4xl">
          <div className="space-y-12">
            {c.sections.map((sec, i) => (
              <div key={i}>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                  {sec.title}
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg">{sec.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-x">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
              {locale === 'pt' ? 'Outros serviços' : 'Other services'}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${locale}/services/${r.slug}`}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all"
                >
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

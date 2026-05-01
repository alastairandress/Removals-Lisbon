import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import PageHero from '../../../../components/page/PageHero';
import InlineCta from '../../../../components/page/InlineCta';
import { posts, getPost } from '../../../../lib/blog';
import { locales } from '../../../../i18n';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    posts.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params: { locale, slug } }) {
  const p = getPost(slug);
  if (!p) return {};
  const c = p[locale];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        pt: `/pt/blog/${slug}`,
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      images: [p.image],
      type: 'article',
      publishedTime: p.publishedAt,
    },
  };
}

export default function BlogPost({ params: { locale, slug } }) {
  unstable_setRequestLocale(locale);

  const p = getPost(slug);
  if (!p) notFound();
  const c = p[locale];

  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  const formattedDate = new Date(p.publishedAt).toLocaleDateString(
    locale === 'pt' ? 'pt-PT' : 'en-GB',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  const breadcrumbLabel = 'Blog';

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        eyebrow={locale === 'pt' ? 'Artigo' : 'Article'}
        title={c.title}
        subtitle={c.excerpt}
        image={p.image}
        breadcrumbs={[
          { label: breadcrumbLabel, href: `/${locale}/blog` },
          { label: c.title },
        ]}
      />

      {/* Date */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="container-x max-w-3xl">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 md:py-20 bg-white">
        <div className="container-x max-w-3xl">
          <div className="space-y-10">
            {c.sections.map((sec, i) => (
              <section key={i}>
                <h2 className="font-display text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                  {sec.heading}
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg">{sec.body}</p>
              </section>
            ))}
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-x">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
              {locale === 'pt' ? 'Mais artigos' : 'More articles'}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${locale}/blog/${r.slug}`}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-display text-base font-semibold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                    {r[locale].title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-3">{r[locale].excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-brand-600 font-medium">
                    {locale === 'pt' ? 'Ler' : 'Read'}
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

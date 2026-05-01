import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageHero from '../../../components/page/PageHero';
import InlineCta from '../../../components/page/InlineCta';
import { getAllPosts } from '../../../lib/blog';
import { locales } from '../../../i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const title = locale === 'pt'
    ? 'Blog | Guia de Mudanças em Lisboa | Removals Lisbon'
    : 'Blog | Lisbon Moving Guides | Removals Lisbon';
  const description = locale === 'pt'
    ? 'Conselhos práticos sobre mudanças em Lisboa: custos, timing, eliminação de mobiliário, mudanças entre cidades, e muito mais.'
    : 'Practical advice for moving in Lisbon: costs, timing, furniture disposal, inter-city moves, and more.';
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: { en: '/en/blog', pt: '/pt/blog' },
    },
  };
}

export default function BlogIndex({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const posts = getAllPosts(locale).sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  const t = locale === 'pt'
    ? {
        eyebrow: 'Blog',
        title: 'Guias e conselhos sobre mudanças em Lisboa',
        subtitle: 'Custos, timing, dicas práticas. Tudo o que aprendemos a fazer mudanças em Lisboa todos os dias.',
        read: 'Ler artigo',
      }
    : {
        eyebrow: 'Blog',
        title: 'Lisbon moving guides and advice',
        subtitle: 'Costs, timing, practical tips. Everything we\'ve learned doing moves in Lisbon every day.',
        read: 'Read article',
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
            {posts.map((p) => {
              const date = new Date(p.publishedAt).toLocaleDateString(
                locale === 'pt' ? 'pt-PT' : 'en-GB',
                { year: 'numeric', month: 'long', day: 'numeric' }
              );
              return (
                <Link
                  key={p.slug}
                  href={`/${locale}/blog/${p.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {date}
                    </div>
                    <h2 className="font-display text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors line-clamp-2">
                      {p.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                      {p.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
                      {t.read}
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

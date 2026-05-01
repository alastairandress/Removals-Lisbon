import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageHero from '../../../components/page/PageHero';
import InlineCta from '../../../components/page/InlineCta';
import { neighborhoods } from '../../../lib/neighborhoods';
import { locales } from '../../../i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const title = locale === 'pt'
    ? 'Áreas de Serviço em Lisboa | Removals Lisbon'
    : 'Service Areas in Lisbon | Removals Lisbon';
  const description = locale === 'pt'
    ? 'Cobrimos toda a Lisboa e Grande Lisboa. Mudanças em Alfama, Bairro Alto, Chiado, Cascais, Sintra, Oeiras, e muito mais.'
    : 'We cover all of Lisbon and Greater Lisbon. Removals in Alfama, Bairro Alto, Chiado, Cascais, Sintra, Oeiras, and many more.';
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/neighborhoods`,
      languages: { en: '/en/neighborhoods', pt: '/pt/neighborhoods' },
    },
  };
}

export default function NeighborhoodsIndex({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = locale === 'pt'
    ? {
        eyebrow: 'Áreas de Serviço',
        title: 'Onde fazemos mudanças em Lisboa e arredores',
        subtitle: 'Conhecemos cada bairro — e cada rua estreita, ladeira íngreme e prédio sem elevador que vem com ele. Escolha a sua área.',
        central: 'Lisboa Centro',
        greater: 'Grande Lisboa',
        learnMore: 'Saber mais',
      }
    : {
        eyebrow: 'Service Areas',
        title: 'Where we do removals in Lisbon and around',
        subtitle: 'We know every neighbourhood — and every narrow street, steep hill, and walk-up that comes with it. Pick your area.',
        central: 'Central Lisbon',
        greater: 'Greater Lisbon',
        learnMore: 'Learn more',
      };

  const central = neighborhoods.filter((n) => n.region === 'central');
  const greater = neighborhoods.filter((n) => n.region === 'greater');

  const Card = ({ n }) => {
    const c = n[locale];
    return (
      <Link
        href={`/${locale}/neighborhoods/${n.slug}`}
        className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-300 hover:shadow-xl transition-all duration-300"
      >
        <div className="relative h-44 overflow-hidden bg-slate-100">
          <Image
            src={n.image}
            alt={c.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-brand-600" />
            <h3 className="font-display text-lg font-semibold text-slate-900">
              {c.name}
            </h3>
          </div>
          <span className="inline-flex items-center gap-1 text-sm text-brand-600 font-medium">
            {t.learnMore}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    );
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
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
            {t.central}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {central.map((n) => <Card key={n.slug} n={n} />)}
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
            {t.greater}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {greater.map((n) => <Card key={n.slug} n={n} />)}
          </div>
        </div>
      </section>

      <InlineCta />
      <Footer />
    </main>
  );
}

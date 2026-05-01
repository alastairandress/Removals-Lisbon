import { unstable_setRequestLocale } from 'next-intl/server';
import { Heart, Shield, Users, Leaf } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageHero from '../../../components/page/PageHero';
import InlineCta from '../../../components/page/InlineCta';
import { locales } from '../../../i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const title = locale === 'pt'
    ? 'Sobre Nós | Removals Lisbon'
    : 'About Us | Removals Lisbon';
  const description = locale === 'pt'
    ? 'Conheça a equipa por detrás da Removals Lisbon. Empresa de mudanças local em Lisboa, fundada por gente que conhece a cidade ao detalhe.'
    : 'Meet the team behind Removals Lisbon. A local moving company founded by people who know Lisbon street by street.';
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: '/en/about', pt: '/pt/about' },
    },
  };
}

export default function AboutPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = locale === 'pt'
    ? {
        eyebrow: 'Sobre Nós',
        title: 'Mudanças feitas por gente que conhece Lisboa',
        subtitle: 'Não somos uma multinacional. Somos uma equipa local — e é isso que faz toda a diferença quando o seu sofá tem de subir cinco lances de escadas em Alfama.',
        breadcrumb: 'Sobre Nós',
        storyTitle: 'A nossa história',
        storyBody: 'A Removals Lisbon começou da forma como muitos negócios de família começam — uma carrinha, dois irmãos, e clientes felizes que recomendaram a amigos. Anos mais tarde, somos uma equipa maior com vários veículos, mas o princípio é o mesmo: tratamos cada mudança como se fosse a casa dos nossos próprios pais. Cuidado, pontualidade, e zero surpresas no final.',
        valuesTitle: 'O que nos guia',
        values: [
          {
            icon: Heart,
            title: 'Cuidado',
            body: 'Os seus bens são tratados como nossos. Cobertores em todos os móveis, proteção em todos os pisos, e zero pressa quando se trata de algo frágil.',
          },
          {
            icon: Shield,
            title: 'Honestidade',
            body: 'O preço que damos é o preço que paga. Sem taxas escondidas, sem aumentos no dia, sem extras inventados.',
          },
          {
            icon: Users,
            title: 'Equipa local',
            body: 'A nossa equipa é toda baseada em Lisboa. Conhecemos os bairros, os síndicos, as juntas de freguesia, e sabemos onde estacionar em cada rua.',
          },
          {
            icon: Leaf,
            title: 'Responsabilidade',
            body: 'Sempre que possível, mobiliário em bom estado vai para doação. O resto é separado para reciclagem. O aterro é o último recurso, não o primeiro.',
          },
        ],
        teamTitle: 'A equipa',
        teamBody: 'Trabalhamos em equipas de duas a quatro pessoas, dependendo do tamanho da mudança. Todos os elementos são empregados diretos da empresa — não usamos subcontratação. Todos têm formação em manuseamento seguro, e todos são bilingues em português e inglês.',
      }
    : {
        eyebrow: 'About Us',
        title: 'Removals run by people who know Lisbon',
        subtitle: 'We\'re not a multinational. We\'re a local team — and that\'s what makes the difference when your sofa has to go up five flights in Alfama.',
        breadcrumb: 'About Us',
        storyTitle: 'Our story',
        storyBody: 'Removals Lisbon started the way many family businesses start — one van, two brothers, and happy customers who recommended us to friends. Years later, we\'re a bigger team with multiple vehicles, but the principle is the same: we treat every move as if it were our own parents\' house. Care, punctuality, and zero surprises at the end.',
        valuesTitle: 'What we believe',
        values: [
          {
            icon: Heart,
            title: 'Care',
            body: 'Your belongings are treated like ours. Blankets on every piece of furniture, floor protection in every property, and zero rush when fragile items are involved.',
          },
          {
            icon: Shield,
            title: 'Honesty',
            body: 'The price we quote is the price you pay. No hidden fees, no day-of surcharges, no invented extras.',
          },
          {
            icon: Users,
            title: 'Local team',
            body: 'Our entire crew is Lisbon-based. We know the neighbourhoods, the building managers, the parish councils, and where to park on every street.',
          },
          {
            icon: Leaf,
            title: 'Responsibility',
            body: 'Whenever possible, furniture in good condition goes to donation. The rest is sorted for recycling. Landfill is the last resort, not the first.',
          },
        ],
        teamTitle: 'The team',
        teamBody: 'We work in crews of two to four people, depending on the size of the move. Every team member is directly employed — we don\'t use subcontractors. Everyone is trained in safe handling, and everyone is bilingual in Portuguese and English.',
      };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        breadcrumbs={[{ label: t.breadcrumb }]}
      />

      {/* Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
            {t.storyTitle}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">{t.storyBody}</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-x">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-10 text-center">
            {t.valuesTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.values.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200">
                <v.icon className="w-7 h-7 text-brand-600 mb-3" />
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
            {t.teamTitle}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">{t.teamBody}</p>
        </div>
      </section>

      <InlineCta />
      <Footer />
    </main>
  );
}

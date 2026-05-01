import { unstable_setRequestLocale } from 'next-intl/server';
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
    ? 'Perguntas Frequentes | Removals Lisbon'
    : 'Frequently Asked Questions | Removals Lisbon';
  const description = locale === 'pt'
    ? 'Respostas às perguntas mais comuns sobre mudanças em Lisboa: preços, seguro, embalagem, calendário, cancelamentos e mais.'
    : 'Answers to the most common questions about removals in Lisbon: pricing, insurance, packing, scheduling, cancellations and more.';
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/faq`,
      languages: { en: '/en/faq', pt: '/pt/faq' },
    },
  };
}

const faqs = {
  en: [
    {
      q: 'How do I get a quote?',
      a: 'Send us a message through the form on our homepage with a description of your move — current address, destination, approximate volume (rooms or items), and your preferred date. We reply within a few hours, usually with a quote the same day. For larger moves we may ask for photos or a video walk-through to give you an accurate price.',
    },
    {
      q: 'Are your prices fixed or do they change on the day?',
      a: 'The price we quote is the price you pay. We don\'t add surcharges on moving day for stairs, distance, weight, or anything else, as long as the move matches what you described when getting the quote. If something major changes (extra rooms, new address, much larger volume) we\'ll discuss it with you before continuing.',
    },
    {
      q: 'Are my belongings insured during the move?',
      a: 'Yes. We carry full transport and goods-in-transit insurance for every move. If something is damaged because of how we handled it, we cover it. Our cover details and policy numbers can be shared on request before booking.',
    },
    {
      q: 'Do you provide packing materials?',
      a: 'Yes — boxes, tape, bubble wrap, packing paper and specialist materials for fragile items. You can either use our full packing service (we pack everything) or buy materials from us and pack yourself. Either way, we provide what you need.',
    },
    {
      q: 'How far in advance should I book?',
      a: 'For weekday moves outside peak season, one to two weeks is usually enough. For weekends, end-of-month dates, or anything in summer (June–August), book three to six weeks ahead. Last-minute and same-day jobs are sometimes possible — just ask.',
    },
    {
      q: 'What if I need to cancel or reschedule?',
      a: 'Cancellations more than 48 hours before the move are free. Less than 48 hours, we may charge a small admin fee depending on the situation. Rescheduling is free as long as the new date is reasonable. We\'re flexible — life happens.',
    },
    {
      q: 'Do you handle international moves?',
      a: 'Yes, within the EU and a few neighbouring destinations. The most common requests are Lisbon to Spain (Madrid, Barcelona) and France. For longer or non-EU moves we partner with international shipping specialists. Get in touch with the destination and we\'ll come back to you with a plan.',
    },
    {
      q: 'Will you disassemble and reassemble furniture?',
      a: 'Yes. Beds, wardrobes, IKEA furniture, modular sofas — we handle disassembly at your old place and reassembly at the new one. Make sure you tell us when you book so we bring the right tools and time.',
    },
    {
      q: 'Can you store my things between addresses?',
      a: 'Yes. If your new place isn\'t ready when you need to leave the old one, we can store your belongings safely in our warehouse for days, weeks, or months. Quoted separately based on volume and duration.',
    },
    {
      q: 'Do you remove things I no longer want?',
      a: 'Yes — see our junk clearance service. We can remove unwanted furniture, mattresses, appliances, and clutter at the same time as your move, or as a standalone service. We sort, donate, recycle, and dispose responsibly.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'Bank transfer (most common), MB Way, and cash. Card payments are possible by arrangement. For business moves we issue invoices with NIF and standard payment terms.',
    },
    {
      q: 'What languages do you speak?',
      a: 'Our crew is bilingual in Portuguese and English. Most of us also speak some Spanish. If you need another language, mention it when booking — we may be able to arrange a crew member with the language you need.',
    },
  ],
  pt: [
    {
      q: 'Como peço orçamento?',
      a: 'Envie-nos uma mensagem pelo formulário da página inicial com a descrição da sua mudança — morada atual, destino, volume aproximado (divisões ou itens), e a data preferida. Respondemos em poucas horas, geralmente com orçamento no mesmo dia. Para mudanças maiores podemos pedir fotos ou um vídeo para lhe dar um preço rigoroso.',
    },
    {
      q: 'Os preços são fixos ou mudam no dia?',
      a: 'O preço que damos é o preço que paga. Não acrescentamos sobretaxas no dia da mudança por escadas, distância, peso ou qualquer outra coisa, desde que a mudança corresponda ao que descreveu quando pediu o orçamento. Se algo mudar significativamente (divisões extra, nova morada, volume muito maior) falamos consigo antes de continuar.',
    },
    {
      q: 'Os meus bens estão segurados durante a mudança?',
      a: 'Sim. Temos seguro completo de transporte e responsabilidade civil para cada mudança. Se algo se danificar pela forma como o manuseámos, cobrimos. Detalhes de cobertura e números de apólice podem ser partilhados a pedido antes da reserva.',
    },
    {
      q: 'Fornecem materiais de embalagem?',
      a: 'Sim — caixas, fita, plástico bolha, papel de embalagem e materiais especializados para itens frágeis. Pode usar o nosso serviço completo de embalagem (embalamos tudo) ou comprar-nos materiais e embalar você. De qualquer forma, fornecemos o que precisa.',
    },
    {
      q: 'Com que antecedência devo marcar?',
      a: 'Para mudanças em dias úteis fora da época alta, uma a duas semanas costuma chegar. Para fins de semana, fim de mês ou no verão (junho-agosto), reserve com três a seis semanas de antecedência. Trabalhos de última hora e no próprio dia são por vezes possíveis — basta perguntar.',
    },
    {
      q: 'E se precisar cancelar ou remarcar?',
      a: 'Cancelamentos com mais de 48h de antecedência são gratuitos. Com menos de 48h, podemos cobrar uma pequena taxa administrativa dependendo da situação. Remarcações são gratuitas desde que a nova data seja razoável. Somos flexíveis — a vida acontece.',
    },
    {
      q: 'Fazem mudanças internacionais?',
      a: 'Sim, dentro da UE e em alguns destinos vizinhos. Os pedidos mais comuns são Lisboa para Espanha (Madrid, Barcelona) e França. Para mudanças mais longas ou fora da UE trabalhamos com parceiros internacionais. Contacte-nos com o destino e voltaremos consigo com um plano.',
    },
    {
      q: 'Desmontam e remontam mobiliário?',
      a: 'Sim. Camas, roupeiros, mobiliário IKEA, sofás modulares — tratamos da desmontagem na casa antiga e remontagem na nova. Informe-nos quando reservar para levarmos as ferramentas e o tempo certos.',
    },
    {
      q: 'Podem armazenar as minhas coisas entre moradas?',
      a: 'Sim. Se a sua casa nova não estiver pronta quando precisar de sair da antiga, podemos armazenar os seus bens em segurança no nosso armazém por dias, semanas ou meses. Cotado separadamente com base no volume e duração.',
    },
    {
      q: 'Removem coisas que já não quero?',
      a: 'Sim — veja o nosso serviço de remoção de entulho. Podemos remover mobiliário, colchões, eletrodomésticos e tralha ao mesmo tempo que a mudança, ou como serviço autónomo. Separamos, doamos, reciclamos e eliminamos de forma responsável.',
    },
    {
      q: 'Que métodos de pagamento aceitam?',
      a: 'Transferência bancária (mais comum), MB Way e dinheiro. Pagamentos com cartão são possíveis por combinação. Para mudanças empresariais emitimos fatura com NIF e condições de pagamento standard.',
    },
    {
      q: 'Que línguas falam?',
      a: 'A nossa equipa é bilingue em português e inglês. A maioria também fala algum espanhol. Se precisar de outra língua, mencione na reserva — podemos conseguir um colega com a língua que precisa.',
    },
  ],
};

export default function FaqPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = locale === 'pt'
    ? {
        eyebrow: 'FAQ',
        title: 'Perguntas frequentes',
        subtitle: 'As respostas às perguntas que mais nos fazem. Não encontra a sua? Envie-nos uma mensagem.',
        breadcrumb: 'FAQ',
      }
    : {
        eyebrow: 'FAQ',
        title: 'Frequently asked questions',
        subtitle: 'Answers to the questions we get asked most. Can\'t find yours? Drop us a message.',
        breadcrumb: 'FAQ',
      };

  const faqList = faqs[locale];

  // FAQPage JSON-LD for Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        breadcrumbs={[{ label: t.breadcrumb }]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x max-w-3xl">
          <div className="space-y-4">
            {faqList.map((f, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 transition-colors"
              >
                <summary className="font-display text-lg font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-brand-600 text-2xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <InlineCta />
      <Footer />
    </main>
  );
}

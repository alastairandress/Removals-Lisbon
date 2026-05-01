import { unstable_setRequestLocale } from 'next-intl/server';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageHero from '../../../components/page/PageHero';
import { locales } from '../../../i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const title = locale === 'pt' ? 'Termos e Condições | Removals Lisbon' : 'Terms & Conditions | Removals Lisbon';
  const description = locale === 'pt'
    ? 'Termos e condições gerais de prestação de serviços da Removals Lisbon.'
    : 'General terms and conditions for services provided by Removals Lisbon.';
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/terms`,
      languages: { en: '/en/terms', pt: '/pt/terms' },
    },
  };
}

export default function TermsPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = locale === 'pt'
    ? {
        eyebrow: 'Termos',
        title: 'Termos e Condições',
        subtitle: 'Termos e condições gerais de prestação dos nossos serviços.',
        lastUpdated: 'Última atualização: Janeiro de 2026',
        sections: [
          {
            heading: '1. Definições',
            body: 'Nestes termos: "Removals Lisbon", "nós" e "a empresa" referem-se à entidade que presta os serviços. "Cliente" refere-se à pessoa singular ou coletiva que contrata os nossos serviços. "Serviço" refere-se à mudança, transporte, recolha, embalagem ou outro serviço acordado. "Orçamento" refere-se à estimativa de preço fornecida antes da prestação do serviço.'
          },
          {
            heading: '2. Orçamentos e contratação',
            body: 'Os orçamentos são gratuitos e válidos por 30 dias salvo indicação em contrário. Os orçamentos são baseados nas informações fornecidas pelo cliente; alterações significativas (volume, acesso, datas) podem resultar em ajustes ao preço. A aceitação do orçamento — escrita, verbal ou por meio do início do serviço — constitui contrato entre as partes.'
          },
          {
            heading: '3. Preços e pagamento',
            body: 'Os preços indicados nos nossos orçamentos incluem IVA salvo indicação em contrário. O pagamento é devido na conclusão do serviço, salvo acordo prévio em contrário. Aceitamos transferência bancária, MB WAY e numerário. Para serviços de empresas, podem ser acordadas condições de pagamento a 30 dias mediante aprovação prévia.'
          },
          {
            heading: '4. Responsabilidades do cliente',
            body: 'O cliente compromete-se a: fornecer informações precisas sobre o volume e natureza dos itens; garantir acesso adequado aos locais de origem e destino; obter quaisquer licenças necessárias (estacionamento, acesso a edifícios); informar sobre itens frágeis, valiosos ou perigosos; estar presente no início e fim do serviço, ou nomear um representante.'
          },
          {
            heading: '5. Itens excluídos',
            body: 'Não transportamos: dinheiro, joias, documentos de identidade, valores mobiliários ou itens de valor declarado superior a 5.000€ sem acordo prévio escrito; substâncias perigosas, inflamáveis, explosivas ou ilegais; alimentos perecíveis; animais vivos. Plantas são transportadas por conta e risco do cliente.'
          },
          {
            heading: '6. Seguro e responsabilidade',
            body: 'Todos os nossos serviços incluem seguro de responsabilidade civil. O seguro cobre danos causados pela nossa equipa durante o serviço, até aos limites estabelecidos na nossa apólice. Para itens de valor superior a 5.000€, recomendamos seguro adicional, que pode ser contratado mediante pedido. A nossa responsabilidade não cobre: danos pré-existentes; danos a itens embalados pelo cliente sem nossa supervisão; perdas indiretas ou consequenciais.'
          },
          {
            heading: '7. Cancelamento e reagendamento',
            body: 'Cancelamentos com mais de 48 horas de antecedência: sem custo. Cancelamentos entre 24 e 48 horas: 25% do valor do serviço. Cancelamentos com menos de 24 horas: 50% do valor do serviço. Em caso de força maior (condições meteorológicas extremas, doença comprovada, emergência), aplicamos flexibilidade adicional. O reagendamento é gratuito até 48 horas antes do serviço.'
          },
          {
            heading: '8. Reclamações',
            body: 'Quaisquer danos ou problemas devem ser reportados imediatamente no final do serviço, com fotografias e descrição escrita. Reclamações devem ser apresentadas por escrito (email) no prazo de 7 dias após o serviço. Comprometemo-nos a responder a todas as reclamações no prazo de 14 dias úteis. Disponibilizamos o livro de reclamações eletrónico em www.livroreclamacoes.pt.'
          },
          {
            heading: '9. Resolução de litígios',
            body: 'Em caso de litígio, as partes comprometem-se a tentar resolução amigável antes de recorrer a outras vias. O cliente pode recorrer ao Centro de Arbitragem de Conflitos de Consumo de Lisboa. O foro competente para qualquer ação judicial é o da comarca de Lisboa.'
          },
          {
            heading: '10. Lei aplicável',
            body: 'Estes termos regem-se pela lei portuguesa. Qualquer cláusula considerada inválida não afetará a validade das restantes cláusulas. Estes termos podem ser atualizados periodicamente; a versão atual está sempre disponível no nosso website.'
          }
        ]
      }
    : {
        eyebrow: 'Terms',
        title: 'Terms & Conditions',
        subtitle: 'General terms and conditions for our services.',
        lastUpdated: 'Last updated: January 2026',
        sections: [
          {
            heading: '1. Definitions',
            body: 'In these terms: "Removals Lisbon", "we", and "the company" refer to the entity providing the services. "Customer" refers to the individual or company hiring our services. "Service" refers to the move, transport, collection, packing, or other agreed service. "Quote" refers to the price estimate provided before service delivery.'
          },
          {
            heading: '2. Quotes and contracting',
            body: 'Quotes are free and valid for 30 days unless stated otherwise. Quotes are based on information provided by the customer; significant changes (volume, access, dates) may result in price adjustments. Acceptance of the quote — whether written, verbal, or by means of starting the service — constitutes a contract between the parties.'
          },
          {
            heading: '3. Pricing and payment',
            body: 'Prices stated in our quotes include VAT unless stated otherwise. Payment is due on completion of the service, unless otherwise agreed in advance. We accept bank transfer, MB WAY, and cash. For business services, 30-day payment terms may be agreed subject to prior approval.'
          },
          {
            heading: '4. Customer responsibilities',
            body: 'The customer undertakes to: provide accurate information about the volume and nature of items; ensure adequate access at origin and destination; obtain any necessary permits (parking, building access); inform us of fragile, valuable, or hazardous items; be present at the start and end of the service, or appoint a representative.'
          },
          {
            heading: '5. Excluded items',
            body: 'We do not transport: cash, jewelry, identity documents, securities, or items with declared value over €5,000 without prior written agreement; dangerous, flammable, explosive, or illegal substances; perishable food; live animals. Plants are transported at the customer\'s risk.'
          },
          {
            heading: '6. Insurance and liability',
            body: 'All our services include public liability insurance. Insurance covers damage caused by our team during the service, up to the limits established in our policy. For items valued over €5,000, we recommend additional insurance, which can be arranged on request. Our liability does not cover: pre-existing damage; damage to items packed by the customer without our supervision; indirect or consequential losses.'
          },
          {
            heading: '7. Cancellation and rescheduling',
            body: 'Cancellations more than 48 hours in advance: no charge. Cancellations between 24 and 48 hours: 25% of the service value. Cancellations less than 24 hours: 50% of the service value. In cases of force majeure (extreme weather, documented illness, emergency), we apply additional flexibility. Rescheduling is free up to 48 hours before the service.'
          },
          {
            heading: '8. Complaints',
            body: 'Any damage or issues must be reported immediately at the end of the service, with photographs and written description. Complaints must be submitted in writing (email) within 7 days of the service. We commit to responding to all complaints within 14 working days. The Portuguese electronic complaint book is available at www.livroreclamacoes.pt.'
          },
          {
            heading: '9. Dispute resolution',
            body: 'In case of dispute, the parties commit to attempting amicable resolution before resorting to other channels. Customers may apply to the Lisbon Consumer Disputes Arbitration Centre. The competent jurisdiction for any legal action is that of the district of Lisbon.'
          },
          {
            heading: '10. Governing law',
            body: 'These terms are governed by Portuguese law. Any clause deemed invalid will not affect the validity of the remaining clauses. These terms may be updated periodically; the current version is always available on our website.'
          }
        ]
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
        <div className="container-x max-w-3xl">
          <p className="text-sm text-slate-500 mb-10">{t.lastUpdated}</p>
          <div className="space-y-10">
            {t.sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-display text-xl font-semibold text-slate-900 mb-3">{s.heading}</h2>
                <p className="text-slate-700 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

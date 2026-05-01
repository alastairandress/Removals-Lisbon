import { unstable_setRequestLocale } from 'next-intl/server';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageHero from '../../../components/page/PageHero';
import { locales } from '../../../i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const title = locale === 'pt' ? 'Política de Privacidade | Removals Lisbon' : 'Privacy Policy | Removals Lisbon';
  const description = locale === 'pt'
    ? 'Política de privacidade da Removals Lisbon. Como recolhemos, usamos e protegemos os seus dados pessoais.'
    : 'Privacy policy for Removals Lisbon. How we collect, use, and protect your personal data.';
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { en: '/en/privacy', pt: '/pt/privacy' },
    },
  };
}

export default function PrivacyPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = locale === 'pt'
    ? {
        eyebrow: 'Privacidade',
        title: 'Política de Privacidade',
        subtitle: 'Como recolhemos, usamos e protegemos os seus dados pessoais.',
        lastUpdated: 'Última atualização: Janeiro de 2026',
        sections: [
          {
            heading: '1. Introdução',
            body: 'A Removals Lisbon ("nós", "a empresa") respeita a sua privacidade e está empenhada em proteger os seus dados pessoais. Esta política explica como recolhemos, usamos, partilhamos e protegemos as suas informações quando utiliza o nosso website ou contrata os nossos serviços. Esta política está em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e a legislação portuguesa aplicável.'
          },
          {
            heading: '2. Que dados recolhemos',
            body: 'Recolhemos as seguintes categorias de dados pessoais: (a) Dados de contacto: nome, número de telefone, endereço de email, morada de origem e destino; (b) Dados do serviço: detalhes da sua mudança, inventário de itens, datas preferenciais; (c) Dados de comunicação: mensagens trocadas connosco por email, telefone ou formulário web; (d) Dados técnicos: endereço IP, tipo de browser, páginas visitadas no nosso website, recolhidos através de cookies analíticos.'
          },
          {
            heading: '3. Como usamos os seus dados',
            body: 'Usamos os seus dados pessoais para: fornecer orçamentos e prestar os serviços contratados; comunicar consigo sobre a sua mudança ou pedido; cumprir obrigações legais e contabilísticas; melhorar o nosso website e serviços; responder a pedidos de informação. Não usamos os seus dados para fins de marketing direto sem o seu consentimento expresso.'
          },
          {
            heading: '4. Base legal para o tratamento',
            body: 'O tratamento dos seus dados baseia-se em: (a) Execução de contrato — quando precisamos dos dados para fornecer o serviço que contratou; (b) Obrigações legais — para cumprir requisitos fiscais e contabilísticos; (c) Consentimento — para cookies analíticos e comunicações de marketing; (d) Interesses legítimos — para melhorar os nossos serviços e responder a pedidos.'
          },
          {
            heading: '5. Partilha de dados',
            body: 'Não vendemos os seus dados pessoais. Partilhamos dados apenas com: (a) Subcontratados envolvidos diretamente na sua mudança (por exemplo, transporte adicional para mudanças de longa distância); (b) Fornecedores de serviços técnicos (alojamento web, email, contabilidade) sujeitos a acordos de confidencialidade; (c) Autoridades públicas quando legalmente exigido. Todos os subcontratados estão dentro da União Europeia ou em países com nível adequado de proteção.'
          },
          {
            heading: '6. Conservação de dados',
            body: 'Conservamos os seus dados durante o tempo necessário para os fins para os quais foram recolhidos: dados de clientes durante 7 anos após a última prestação de serviço (para cumprimento das obrigações fiscais); dados de pedidos não convertidos em serviço durante 12 meses; dados analíticos do website durante 24 meses.'
          },
          {
            heading: '7. Os seus direitos',
            body: 'Tem o direito de: aceder aos seus dados pessoais; corrigir dados incorretos; solicitar o apagamento dos dados ("direito ao esquecimento"); restringir ou opor-se ao tratamento; portabilidade dos dados; retirar o consentimento a qualquer momento; apresentar queixa à Comissão Nacional de Proteção de Dados (CNPD). Para exercer estes direitos, contacte-nos através de hello@removalslisbon.com.'
          },
          {
            heading: '8. Cookies',
            body: 'O nosso website usa cookies essenciais para o funcionamento básico e cookies analíticos opcionais para entender como o website é utilizado. Pode gerir as suas preferências de cookies a qualquer momento através das definições do seu browser ou do nosso painel de cookies.'
          },
          {
            heading: '9. Segurança',
            body: 'Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acesso não autorizado, perda, destruição ou alteração. Estas medidas incluem encriptação em trânsito (HTTPS), acesso restrito aos dados pelos nossos colaboradores, e formação regular em proteção de dados.'
          },
          {
            heading: '10. Contacto',
            body: 'Para qualquer questão sobre esta política ou sobre o tratamento dos seus dados, contacte: hello@removalslisbon.com. Se não estiver satisfeito com a nossa resposta, pode apresentar queixa à Comissão Nacional de Proteção de Dados (CNPD) — www.cnpd.pt.'
          }
        ]
      }
    : {
        eyebrow: 'Privacy',
        title: 'Privacy Policy',
        subtitle: 'How we collect, use, and protect your personal data.',
        lastUpdated: 'Last updated: January 2026',
        sections: [
          {
            heading: '1. Introduction',
            body: 'Removals Lisbon ("we", "us", "the company") respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, share, and protect your information when you use our website or hire our services. This policy complies with the General Data Protection Regulation (GDPR) and applicable Portuguese law.'
          },
          {
            heading: '2. What data we collect',
            body: 'We collect the following categories of personal data: (a) Contact data: name, phone number, email address, origin and destination addresses; (b) Service data: details of your move, inventory of items, preferred dates; (c) Communication data: messages exchanged with us by email, phone, or web form; (d) Technical data: IP address, browser type, pages visited on our website, collected via analytics cookies.'
          },
          {
            heading: '3. How we use your data',
            body: 'We use your personal data to: provide quotes and deliver the services you have contracted; communicate with you about your move or enquiry; comply with legal and accounting obligations; improve our website and services; respond to information requests. We do not use your data for direct marketing without your express consent.'
          },
          {
            heading: '4. Legal basis for processing',
            body: 'Processing of your data is based on: (a) Contract performance — where we need your data to deliver the service you have contracted; (b) Legal obligations — to comply with tax and accounting requirements; (c) Consent — for analytics cookies and marketing communications; (d) Legitimate interests — to improve our services and respond to enquiries.'
          },
          {
            heading: '5. Data sharing',
            body: 'We do not sell your personal data. We share data only with: (a) Subcontractors directly involved in your move (e.g. additional transport for long-distance moves); (b) Technical service providers (web hosting, email, accounting) bound by confidentiality agreements; (c) Public authorities when legally required. All subcontractors are within the European Union or in countries with an adequate level of protection.'
          },
          {
            heading: '6. Data retention',
            body: 'We retain your data for as long as necessary for the purposes for which it was collected: customer data for 7 years after the last service (for tax compliance); enquiry data not converted to service for 12 months; website analytics data for 24 months.'
          },
          {
            heading: '7. Your rights',
            body: 'You have the right to: access your personal data; correct inaccurate data; request erasure ("right to be forgotten"); restrict or object to processing; data portability; withdraw consent at any time; lodge a complaint with the Portuguese Data Protection Authority (CNPD). To exercise these rights, contact us at hello@removalslisbon.com.'
          },
          {
            heading: '8. Cookies',
            body: 'Our website uses essential cookies for basic functioning and optional analytics cookies to understand how the website is used. You can manage your cookie preferences at any time through your browser settings or our cookie banner.'
          },
          {
            heading: '9. Security',
            body: 'We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, destruction, or alteration. These measures include encryption in transit (HTTPS), restricted data access for our staff, and regular data protection training.'
          },
          {
            heading: '10. Contact',
            body: 'For any question about this policy or about the processing of your data, contact: hello@removalslisbon.com. If you are not satisfied with our response, you may lodge a complaint with the Portuguese Data Protection Authority (CNPD) — www.cnpd.pt.'
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

import { unstable_setRequestLocale } from 'next-intl/server';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageHero from '../../../components/page/PageHero';
import QuoteForm from '../../../components/QuoteForm';
import { locales } from '../../../i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const title = locale === 'pt'
    ? 'Contacto | Removals Lisbon'
    : 'Contact | Removals Lisbon';
  const description = locale === 'pt'
    ? 'Entre em contacto connosco para mudanças em Lisboa. Telefone, email, ou peça orçamento online. Resposta no mesmo dia.'
    : 'Get in touch for removals in Lisbon. Call, email, or request a quote online. Same-day reply.';
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { en: '/en/contact', pt: '/pt/contact' },
    },
  };
}

export default function ContactPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = locale === 'pt'
    ? {
        eyebrow: 'Contacto',
        title: 'Falamos consigo',
        subtitle: 'Várias formas de nos contactar. A mais rápida é o formulário abaixo — respondemos no mesmo dia.',
        breadcrumb: 'Contacto',
        ways: 'Outras formas de nos contactar',
        callTitle: 'Chamada',
        callBody: 'Para uma resposta rápida durante o horário de expediente.',
        emailTitle: 'Email',
        emailBody: 'Ideal para enviar fotos ou descrições detalhadas.',
        whatsappTitle: 'WhatsApp',
        whatsappBody: 'Mensagens, fotos ou vídeos do que precisa de mudar.',
        hoursTitle: 'Horário',
        hoursBody: 'Segunda a sexta, 8h–19h. Sábados, 9h–14h.',
        addressTitle: 'Base',
        addressBody: 'Lisboa, Portugal — cobrimos toda a área metropolitana e além.',
      }
    : {
        eyebrow: 'Contact',
        title: 'Get in touch',
        subtitle: 'Several ways to reach us. The fastest is the form below — we reply the same day.',
        breadcrumb: 'Contact',
        ways: 'Other ways to reach us',
        callTitle: 'Call',
        callBody: 'For a quick answer during business hours.',
        emailTitle: 'Email',
        emailBody: 'Best for sending photos or detailed descriptions.',
        whatsappTitle: 'WhatsApp',
        whatsappBody: 'Send messages, photos, or videos of what you\'re moving.',
        hoursTitle: 'Hours',
        hoursBody: 'Monday to Friday, 8am–7pm. Saturdays, 9am–2pm.',
        addressTitle: 'Based in',
        addressBody: 'Lisbon, Portugal — we cover the metropolitan area and beyond.',
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

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-slate-900 mb-8">
                {t.ways}
              </h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{t.callTitle}</h3>
                    <p className="text-sm text-slate-600 mb-1">{t.callBody}</p>
                    <a href="tel:+351000000000" className="text-brand-600 hover:underline font-medium">
                      +351 000 000 000
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{t.emailTitle}</h3>
                    <p className="text-sm text-slate-600 mb-1">{t.emailBody}</p>
                    <a href="mailto:hello@removalslisbon.com" className="text-brand-600 hover:underline font-medium">
                      hello@removalslisbon.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{t.whatsappTitle}</h3>
                    <p className="text-sm text-slate-600 mb-1">{t.whatsappBody}</p>
                    <a href="https://wa.me/351000000000" className="text-brand-600 hover:underline font-medium">
                      +351 000 000 000
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{t.hoursTitle}</h3>
                    <p className="text-sm text-slate-600">{t.hoursBody}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{t.addressTitle}</h3>
                    <p className="text-sm text-slate-600">{t.addressBody}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote form */}
            <div id="quote">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Fraunces } from 'next/font/google';
import { locales } from '../../i18n';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    metadataBase: new URL('https://www.removalslisbon.com'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'pt': '/pt',
        'x-default': '/pt',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://www.removalslisbon.com/${locale}`,
      siteName: 'Removals Lisbon',
      locale: locale === 'pt' ? 'pt_PT' : 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();

  // Enable static rendering for this locale
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Removals Lisbon',
    image: 'https://www.removalslisbon.com/og-image.jpg',
    url: 'https://www.removalslisbon.com',
    telephone: '+351-XXX-XXX-XXX',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisbon',
      addressCountry: 'PT',
    },
    areaServed: [
      { '@type': 'City', name: 'Lisbon' },
      { '@type': 'City', name: 'Cascais' },
      { '@type': 'City', name: 'Sintra' },
      { '@type': 'Country', name: 'Portugal' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };

  return (
    <html lang={locale} className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

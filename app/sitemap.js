import { services } from '../lib/services';
import { neighborhoods } from '../lib/neighborhoods';
import { routes } from '../lib/routes';
import { posts } from '../lib/blog';
import { locales } from '../i18n';

const BASE = 'https://www.removalslisbon.com';

export default function sitemap() {
  const lastModified = new Date();
  const urls = [];

  // Helper to add a URL with hreflang alternates
  const add = (path, priority = 0.7, changeFrequency = 'monthly') => {
    locales.forEach((locale) => {
      urls.push({
        url: `${BASE}/${locale}${path}`,
        lastModified,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            en: `${BASE}/en${path}`,
            pt: `${BASE}/pt${path}`,
          },
        },
      });
    });
  };

  // Homepage
  add('', 1.0, 'weekly');

  // Index pages
  add('/services', 0.9, 'monthly');
  add('/neighborhoods', 0.9, 'monthly');
  add('/routes', 0.8, 'monthly');
  add('/blog', 0.8, 'weekly');

  // Utility pages
  add('/about', 0.6, 'monthly');
  add('/contact', 0.7, 'monthly');
  add('/faq', 0.7, 'monthly');
  add('/privacy', 0.3, 'yearly');
  add('/terms', 0.3, 'yearly');

  // Dynamic: services
  services.forEach((s) => add(`/services/${s.slug}`, 0.8, 'monthly'));

  // Dynamic: neighborhoods
  neighborhoods.forEach((n) => add(`/neighborhoods/${n.slug}`, 0.8, 'monthly'));

  // Dynamic: routes
  routes.forEach((r) => add(`/routes/${r.slug}`, 0.7, 'monthly'));

  // Dynamic: blog posts (each post object is bilingual; iterate by post)
  // Posts are in lib/blog and the helper getAllPosts may not flatten here; use the array directly
  posts.forEach((p) => add(`/blog/${p.slug}`, 0.6, 'monthly'));

  return urls;
}

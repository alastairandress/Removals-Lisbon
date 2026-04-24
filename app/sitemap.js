export default function sitemap() {
  const base = 'https://www.removalslisbon.com';
  const lastModified = new Date();
  return [
    {
      url: `${base}/pt`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${base}/en`,
          pt: `${base}/pt`,
        },
      },
    },
    {
      url: `${base}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${base}/en`,
          pt: `${base}/pt`,
        },
      },
    },
  ];
}

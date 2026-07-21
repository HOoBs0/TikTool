export default function sitemap() {
  const baseUrl = 'https://tiktok-tool-olive.vercel.app';

  const routes = [
    '',
    '/tiktok-app',
    '/contact',
    '/about',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const languages = ['en', 'ar'];
  const sitemapEntries = [];

  // توليد الروابط لكل اللغات
  routes.forEach((route) => {
    languages.forEach((lang) => {
      const path = route === '' ? `/${lang}` : `/${lang}${route}`;
      sitemapEntries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...sitemapEntries,
  ];
}

export default function sitemap() {
  const baseUrl = 'https://tiktok-tool-olive.vercel.app';

  // المسارات الأساسية بدون بادئة اللغة
  const routes = [
    '',
    '/tiktok-app',
    '/contact',
    '/about',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const languages = ['en', 'ar'];

  // توليد جميع المسارات لكل اللغات مع ربط اللغات البديلة (alternates)
  const sitemapEntries = routes.flatMap((route) => {
    return languages.map((lang) => {
      const isHomepage = route === '';
      const path = isHomepage ? `/${lang}` : `/${lang}${route}`;

      return {
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: isHomepage ? 'daily' : 'weekly',
        priority: isHomepage ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            ar: `${baseUrl}/ar${route}`,
            'x-default': `${baseUrl}/en${route}`,
          },
        },
      };
    });
  });

  return [
    // الصفحة الرئيسية العامة (Root URL)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
          'x-default': `${baseUrl}/en`,
        },
      },
    },
    ...sitemapEntries,
  ];
}

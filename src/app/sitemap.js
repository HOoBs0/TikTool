export default function sitemap() {
  const baseUrl = 'https://tiktool.tech';
  
  // المسارات الخاصة بموقعك
  const routes = ['', '/tiktok-app', '/contact' , '/about' , '/privacy-policy' , '/terms-of-service']; 

  // إنشاء مصفوفة من المسارات للغتين
  const sitemapEntries = routes.flatMap((route) => [
    {
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ]);

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...sitemapEntries,
  ];
}
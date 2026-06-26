import "./globals.css";
import "./style.css"

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from '@next/third-parties/google'

import Footer from "./components/footer";
import Navbar from "./components/navbar";

const translations = {
  en: {
    title: "TikTool - TikTok Video without watermark Downloader online",
    description: "You can download all TikTok videos without watermarks in high quality (HD) online and for free, so they can be used in design and editing by graphic designers. Quickly use my web applaction you want to download to your device.",
    ogLocale: "en_US"
  },
  ar: {
    title: "Tik Too - اداءة لتنزيل فيديوهات تيك توك بدون علامة مائية",
    description: "يمكنك تحميل جميع فيديوهات تيك توك بجودة عالية (HD) وبدون علامات مائية مجانًا عبر الإنترنت، مما يتيح استخدامها في التصميم والتحرير من قِبل مصممي الجرافيك. استخدم تطبيق الويب الخاص بي لتحميل الفيديوهات التي ترغب بها على جهازك.",
    ogLocale: "ar_AR"
  }
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = translations[locale] || translations['en'];

  return {
    robots: {
      index: true,
      follow: true,
    },
    title: t.title,
    description: t.description,
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },

    openGraph: {
      title: t.title,
      description: t.description,
      images: [{ url: "https://ik.imagekit.io/ctux3iaei/TikTool/logo.webp", width: 1200, height: 630 }],
      url: `https://tiktool.tech/${locale}`,
      siteName: 'TikTool',
      locale: t.ogLocale,
      type: 'website',
      publishedTime: "2026-06-26T10:00:00.000Z",
      modifiedTime: '2026-06-26T14:30:00.000Z',
    },

    twitter: {
      card: 'summary_large_image",',
      title: t.title,
      description: t.description,
      images: ["https://ik.imagekit.io/ctux3iaei/TikTool/logo.webp"],
    },

    alternates: {
      canonical: `https://tiktool.tech/${locale}`,
      languages: {
        'en-US': 'https://tiktool.tech/en',
        'ar-AR': 'https://tiktool.tech/ar',
      },
    },
  };
}


export default async function LocaleLayout({ children, params }) {
  //اللغات
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "TikTool",
    "url": `https://tiktool.tech/${locale}`,
    "description": "Download TikTok videos without watermarks online.",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "datePublished": "2026-06-26",
    "dateModified": "2026-06-26",
  };


  return (
    <html
      lang={locale}
      className={`h-full antialiased`}
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6R4PE04FD5"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-6R4PE04FD5');
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Analytics />
          <SpeedInsights />
          <Navbar currentLocale={locale} params={params} />

          <div dir={direction}>
            {children}
          </div>

          <Footer params={params} currentLocale={locale} />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6R4PE04FD5"></script>
        <GoogleAnalytics gaId="G-6R4PE04FD5" />
      </body>
    </html>
  );
}

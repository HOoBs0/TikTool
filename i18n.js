import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// اللغات المدعومة
const locales = ['en', 'ar'];

export default getRequestConfig(async ({requestLocale}) => {
  // انتظر اللغة المطلوبة
  let locale = await requestLocale;

  // التحقق من أن اللغة موجودة في قائمتنا
  if (!locale || !locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
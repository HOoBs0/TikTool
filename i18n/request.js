import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import path from 'node:path';
import fs from 'node:fs/promises';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  // تحديد المسار الكامل لملف الـ JSON
  const messagesPath = path.join(process.cwd(), 'messages', `${locale}.json`);
  
  // قراءة الملف كـ نص ثم تحويله لـ JSON
  // ... (الكود السابق)
const messages = JSON.parse(await fs.readFile(messagesPath, 'utf-8'));

// أضف السطر التالي هنا:ى
return {
  locale,
  messages
};
});
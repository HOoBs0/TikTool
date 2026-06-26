import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // اللغات المدعومة
  locales: ['en', 'ar'],

  defaultLocale: 'en',

  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(ar|en)/:path*']
};
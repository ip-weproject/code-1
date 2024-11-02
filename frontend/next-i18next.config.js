// next-i18next.config.js
import path from 'path';

const localesPath = path.resolve('./public/locales');

const i18n = {
  defaultLocale: 'es',
  locales: ['en', 'es'],
  localePath: localesPath,
};

export default i18n;

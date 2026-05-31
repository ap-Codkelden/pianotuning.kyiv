// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'en'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});

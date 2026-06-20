// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pas dit domein aan zodra het definitief is. Het wordt gebruikt voor
// canonical-links, de sitemap en Open Graph URLs.
// base is alleen nodig zolang de site op het subpad jaidendor.github.io/dorchainwebsolutions
// staat. Zodra het custom domein dorchainwebsolutions.nl actief is, verwijder je de base-regel.
export default defineConfig({
  site: 'https://dorchainwebsolutions.nl',
  base: '/dorchainwebsolutions',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});

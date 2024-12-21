// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://JeffreyHartman.github.io',
    base: '/wanderers-journal',
    integrations: [mdx(), sitemap(), tailwind()],
});
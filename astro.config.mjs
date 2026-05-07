import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

const isCI = Boolean(process.env.CI);
const isBuild = process.argv.includes('build');
const enableKeystatic = !isCI && !isBuild;
const integrations = [mdx()];

if (enableKeystatic) {
  const { default: keystatic } = await import('@keystatic/astro');
  integrations.push(react(), keystatic());
}

export default defineConfig({
  site: 'https://Murosaki12.github.io',
  base: enableKeystatic ? '/' : '/practicioner_blog',
  output: 'static',
  integrations
});

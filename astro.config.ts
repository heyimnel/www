import { defineConfig } from "astro/config";

// Integrations
import vercel from '@astrojs/vercel';

export default defineConfig({
	output: 'static',
	adapter: vercel(),
});

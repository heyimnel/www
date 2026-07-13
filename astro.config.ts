import { defineConfig } from "astro/config";

// Integrations
import vercel from '@astrojs/vercel';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	output: 'static',
	adapter: cloudflare(),
});
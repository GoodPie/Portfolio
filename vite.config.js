import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [
		sveltekit({
			/* plugin options */
			configFile: 'svelte.config.js'
		})
	]
});
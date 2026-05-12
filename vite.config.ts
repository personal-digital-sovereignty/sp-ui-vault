import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

import { federation } from '@module-federation/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		federation({
			name: 'sp_ui_vault',
			filename: 'remoteEntry.js',
			exposes: {
				'./VaultPage': './src/routes/vault/+page.svelte'
			},
			shared: ['svelte']
		})
	],
	server: {
		port: 5175,
		strictPort: true,
		cors: true
	},
	preview: {
		port: 5175,
		strictPort: true,
		cors: true
	},
	build: {
		target: 'esnext'
	},
	define: {
		__APP_VERSION__: JSON.stringify(pkg.version)
	}
});

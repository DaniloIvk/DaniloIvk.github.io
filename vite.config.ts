import { defineConfig } from 'vite';
import devServer from '@hono/vite-dev-server';
import build from '@hono/vite-build/node';

export default defineConfig({
	plugins: [
		devServer({ entry: 'src/index.tsx' }),
		build({ entry: 'src/index.tsx' }),
	],
});

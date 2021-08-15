import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		target: 'body',
		vite: {
			optimizeDeps: {
				exclude: ['@sanity/block-content-to-hyperscript/internals.js']
			}
		}
	}
};

export default config;

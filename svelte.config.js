import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),
		prerender: {
			default: true
		},
		trailingSlash: 'always',
		paths: {
			base: '/mystery-dungeon-tracker'
		}
	}
};

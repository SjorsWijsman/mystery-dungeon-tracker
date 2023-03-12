import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false,
			domain: ''
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/mystery-dungeon-tracker' : ''
		}
	}
};

import vercel from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel()
	}
};

export default config;

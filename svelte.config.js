import adapter from "@sveltejs/adapter-static";
// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs",
			fallback: null,
			precompress: false
        }),
		prerender: {
		  // This can be false if you're using a fallback (i.e. SPA mode)
		  default: true
		},
        paths: {
            // change below to your repo name
            base: dev ? "" : "/rqrs",
        }
    }
};

export default config;

import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		watch: false,
		globals: true
	},
	define: { 'import.meta.vitest': 'undefined' }
});

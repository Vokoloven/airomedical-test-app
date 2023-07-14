import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import includePaths from 'rollup-plugin-includepaths';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/airomedical-test-app/',
    plugins: [react(), includePaths({ paths: ['./src'] })],
});

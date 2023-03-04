import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            components: resolve(__dirname, './src/components'),
            pages: resolve(__dirname, './src/pages'),
            types: resolve(__dirname, './src/types'),
            store: resolve(__dirname, './src/store'),
            helpers: resolve(__dirname, './src/helpers'),
            routes: resolve(__dirname, './src/routes'),
        }
    }
});

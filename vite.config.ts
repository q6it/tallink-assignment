import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) =>
    defineConfig({
        plugins: [react(), tsconfigPaths()],
        server: {
            port: Number(loadEnv(mode, process.cwd()).VITE_PORT),
            open: true,
        },
        build: {
            commonjsOptions: {
                include: [/common/, /node_modules/],
            },
        },
        optimizeDeps: {
            include: ['common'],
        },
    });

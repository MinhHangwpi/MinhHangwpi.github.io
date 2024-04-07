import reactPlugin from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
const config = async () => {
    const { default: mdx } = await import('@mdx-js/rollup')

    return {
        base: "/",
        plugins: [reactPlugin(), mdx({ remarkPlugins: [] })],
        optimizeDeps: {
            include: ['react/jsx-runtime'],
        },
        server: {
            // this ensures that the browser opens upon server start
            open: true,
            // this sets a default port to 3000  
            port: 3000,
        },
        optimizeDeps: {
            include: ['react/jsx-dev-runtime', 'react/jsx-runtime'],
        },
        build: { minify: true },
    }
}

export default defineConfig(config)
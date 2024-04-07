// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import viteTsconfigPaths from 'vite-tsconfig-paths'
// import reactPlugin from '@vitejs/plugin-react';

// export default defineConfig({
//     // depending on your application, base can also be "/"
//     base: '',
//     plugins: [react(), viteTsconfigPaths()],
//     server: {
//         // this ensures that the browser opens upon server start
//         open: true,
//         // this sets a default port to 3000  
//         port: 3000,
//     },
//     optimizeDeps: {
//         include: ['react/jsx-dev-runtime', 'react/jsx-runtime'],
//     }
// })


import reactPlugin from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
const config = async () => {
    const { default: mdx } = await import('@mdx-js/rollup')

    return {
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
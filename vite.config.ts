import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                about: './src/pages/aboutPage/index.html',
                works: './src/pages/works/index.html',
                contact: './src/pages/contactPage/index.html',
            },
        },
    },
})
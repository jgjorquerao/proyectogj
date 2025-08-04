import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    // ¡AÑADE ESTO para decirle a Vite cómo gestionar Three.js!
    optimizeDeps: {
        include: ['three'],
    },
});
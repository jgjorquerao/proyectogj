import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                'resources/css/panel.css',
                'resources/js/panel.js',
                'resources/js/pusher_setup.js',
                'resources/js/user.js',
            ],
            refresh: true,
        }),
    ],
});

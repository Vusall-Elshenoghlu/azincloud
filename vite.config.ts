import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        react(),
        eslintPlugin({
            cache: false,
            include: ['./src/**/*.ts', './src/**/*.tsx'],
        }),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: [
                'images/apple.svg',
                'images/banana.svg',
                'images/bottle.svg',
                'images/grape.svg',
                'images/corn.svg',
                'images/ice-cream.svg',
                'images/ice-cream2.svg',
                'images/lollipop.svg',
                'images/mix.svg',
                'images/peach.svg',
                'images/pinapple.svg',
                'images/strawberry.svg',
                'images/water.svg',
                'images/watermelon.svg'
            ],
            manifest: {
                name: 'Memory Match Game',
                short_name: 'MemoryGame',
                description: 'A memory card game with offline support!',
                theme_color: '#ffffff',
                background_color: '#ffffff',
                display: 'standalone',
                start_url: '/',
                icons: [
                    {
                        src: 'icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,ico,json}'],
                runtimeCaching: [
                    {
                        urlPattern: /^https?.*/,
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'http-cache',
                            expiration: {
                                maxEntries: 200,
                                maxAgeSeconds: 60 * 60 * 24
                            }
                        }
                    }
                ]
            }
        })
    ],

    server: {
        port: 3000,
    },

    define: {
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
    }
});

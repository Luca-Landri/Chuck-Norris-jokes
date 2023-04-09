import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate' ,
      devOptions: {
        enabled: true
      },
      workbox: {
        cleanupOutdatedCaches: false
      },
      manifest: {
        name: 'Joke Norris',
        short_name: 'Joke Norris',
        description: 'Random jokes about Chuck Norris',
        theme_color: '#ffffff',
        display: "fullscreen",
        orientation: "portrait",
        scope: ".",
        start_url: "/",
        id: "/",
        icons: [
          {
            src: './images/favicon_io/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: './images/favicon_io/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: './images/favicon_io/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './images/favicon_io/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/Chuck-Norris-jokes/',
})
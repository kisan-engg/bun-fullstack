import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss(),],
  server: {
    port: 3000,
    proxy: {
      "/api/auth/*": {
        target: 'http://localhost:4000/',
        changeOrigin: true,
      },
      "/api/notes": {
        target: 'http://localhost:4000/',
        changeOrigin: true,
        secure: false
      }
    }
  },
  preview: {
    port: 3000,
    proxy: {
      "/api/auth/*": {
        target: 'http://localhost:4000/',
        changeOrigin: true,
      },
      "/api/notes": {
        target: 'http://localhost:4000/',
        changeOrigin: true,
        secure: false
      }
    }
  },
})

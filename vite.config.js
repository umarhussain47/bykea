import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        delivery: resolve(__dirname, 'delivery.html'),
        ride: resolve(__dirname, 'ride.html'),
        shopping: resolve(__dirname, 'shopping.html'),
        confirmation: resolve(__dirname, 'confirmation.html'),
      }
    }
  }
})

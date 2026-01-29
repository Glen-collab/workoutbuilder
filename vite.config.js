import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'builder.js',
        assetFileNames: 'builder.[ext]',
      }
    },
    cssCodeSplit: false,
  }
})

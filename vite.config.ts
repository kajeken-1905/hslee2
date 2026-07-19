import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://kajeken-1905.github.io/hslee2/
export default defineConfig({
  base: '/hslee2/',
  plugins: [react()],
})

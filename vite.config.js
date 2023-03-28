import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: 'https://luca-landri.github.io/Chuck-Norris-Jokes/',
})

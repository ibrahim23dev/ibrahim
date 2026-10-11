import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User-site repositories (USERNAME.github.io) deploy from the domain root.
export default defineConfig({ base: '/', plugins: [react()] })

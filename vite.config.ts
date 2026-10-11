import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project site: https://ibrahim23dev.github.io/ibrahim/
export default defineConfig({ base: '/ibrahim/', plugins: [react()] })

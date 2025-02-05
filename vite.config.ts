import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import path from 'path'
import postCssPxToViewport from 'postcss-px-to-viewport'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
})

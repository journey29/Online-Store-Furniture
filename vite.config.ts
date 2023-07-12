import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve:{
    alias:{
      components:'/src/components',
      types:'/src/types',
      hooks:'/src/hooks',
      store:'/src/store',
      styles:'/src/styles',
      pages: '/src/pages',
      assets:'/src/assets',
      utils:'/src/utils'
    }
  }
})

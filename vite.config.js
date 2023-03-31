import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input: ["./index.html", "./views/cart.html", "./views/detail.html"]
    }
  }
})

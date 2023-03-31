//const { defineConfig } = require('vite')
import { defineConfig } from 'vite'

/* module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: ["./index.html", "./views/cart.html", "./views/detail.html"]
    }
  }
}) */

export default defineConfig({
  build: {
    rollupOptions: {
      input: ["./index.html", "./views/cart.html", "./views/detail.html"]
    }
  }
})

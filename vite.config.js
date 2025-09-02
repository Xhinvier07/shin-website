import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"; // to use tailwindcss with vite
import path from "path"; // to path src alias

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(new URL(import.meta.url).pathname), "./src"),
    },
  },
})

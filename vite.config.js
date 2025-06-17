import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/beautiful-portfolio/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  server: { //This watch the build and automate update every 100ms
    watch: {
      usePolling: true,     // Force polling for file changes
      interval: 100,        // Check every 100ms
    },
  }
});

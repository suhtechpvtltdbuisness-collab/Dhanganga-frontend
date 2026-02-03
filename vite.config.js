import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],

  build: {
    chunkSizeWarningLimit: 1000, // removes warning
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },

  preview: {
    host: true,
    port: 5173,
    allowedHosts: [
      "localhost",
      "dhanganga-production-adfb.up.railway.app",
    ],
  },
});

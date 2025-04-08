import { defineConfig } from 'vite';

export default defineConfig({
  // Optional: Adjust based on your project structure
  root: './src',              // Root directory of your project
  build: {
    outDir: '../dist',        // Output directory for production build
  },
});
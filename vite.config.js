import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: ['**/node_modules/**', 'codeql-db/**', 'build/**'],
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: ['src/tests/**', 'src/setupTests.js'],
      reporter: ['text', 'json'],
    },
  },
});

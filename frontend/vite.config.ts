import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: '.',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  server: {
    proxy: {
      '/api/contact': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
      '/api/contacts': {  // Keep this for backward compatibility
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/contacts', '/api/contact')
      },
      '/api/careers': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 10000,
    allowedHosts: [
      'thorsignia.onrender.com',
      'thorsignia-pvs7.onrender.com',
      'thorsignia-frontend.onrender.com',
      '.onrender.com'  // Allow all Render subdomains
    ]
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
});
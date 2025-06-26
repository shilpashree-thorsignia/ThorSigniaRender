// Environment configuration

const isLocalhost = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

export const config = {
  apiUrl: isLocalhost
    ? 'http://localhost:5000'
    : 'https://thorsignia-api-gmud.onrender.com'
}; 
#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

// Ensure we're in the correct directory
process.chdir(__dirname);

console.log('Current working directory:', process.cwd());
console.log('Directory contents:', require('fs').readdirSync('.'));

// Check if src directory exists
if (require('fs').existsSync('./src')) {
  console.log('✅ src directory found');
} else {
  console.log('❌ src directory not found');
  process.exit(1);
}

// Check if package.json exists
if (require('fs').existsSync('./package.json')) {
  console.log('✅ package.json found');
} else {
  console.log('❌ package.json not found');
  process.exit(1);
}

try {
  console.log('🔨 Starting build process...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 
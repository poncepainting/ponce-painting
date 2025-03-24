#!/usr/bin/env node

// Check if running on Vercel
const isVercel = process.env.VERCEL === '1';

if (!isVercel) {
  // Only run link checking when not on Vercel
  const { spawnSync } = require('child_process');
  console.log('Running link checker...');
  
  const result = spawnSync('npm', ['run', 'check-links'], { 
    stdio: 'inherit',
    shell: true
  });
  
  if (result.status !== 0) {
    process.exit(result.status);
  }
} else {
  console.log('Skipping link checker on Vercel deployment');
} 
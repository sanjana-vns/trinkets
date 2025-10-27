// Script to create optimized favicon
const fs = require('fs');

// Create a simple 32x32 favicon data
const faviconData = `
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="#3b82f6" rx="4"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="20" 
        font-weight="bold" text-anchor="middle" dy="0.35em" fill="white">
    T
  </text>
</svg>
`;

// Write optimized favicon.svg
fs.writeFileSync('../public/favicon.svg', faviconData.trim());

console.log('Favicon created successfully!');
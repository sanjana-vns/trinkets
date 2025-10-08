// Icon Generator Script for PWA Icons
// This script creates placeholder SVG icons that can be converted to PNG
// Run this in a browser console or Node.js environment

const createSVGIcon = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" rx="${size * 0.1}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size * 0.15}" 
        font-weight="bold" text-anchor="middle" dy="0.35em" fill="white">
    T
  </text>
  <text x="50%" y="75%" font-family="Arial, sans-serif" font-size="${size * 0.08}" 
        text-anchor="middle" fill="white" opacity="0.9">
    TRINKETS
  </text>
</svg>
`;

// Icon sizes needed for PWA
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

console.log('SVG Icons for PWA:');
iconSizes.forEach(size => {
  console.log(`\n=== icon-${size}x${size}.svg ===`);
  console.log(createSVGIcon(size));
});

// For immediate use, you can save these SVG files and convert them to PNG using:
// 1. Online tools like: https://cloudconvert.com/svg-to-png
// 2. ImageMagick: convert icon.svg -resize 192x192 icon-192x192.png
// 3. Inkscape: inkscape --export-png=icon-192x192.png --export-width=192 --export-height=192 icon.svg

console.log('\n=== Instructions ===');
console.log('1. Copy each SVG code to a separate file (icon-{size}x{size}.svg)');
console.log('2. Convert SVG to PNG using online tools or command line tools');
console.log('3. Save PNG files as icon-{size}x{size}.png in the /public/icons/ directory');
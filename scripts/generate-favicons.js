/**
 * This script generates favicon assets for the Global Trade Hub website.
 * It creates:
 * - favicon.ico
 * - favicon-16x16.png, favicon-32x32.png, favicon-96x96.png
 * - apple-touch-icon.png
 * - android-chrome-192x192.png, android-chrome-512x512.png
 *
 * To run:
 * 1. npm install sharp
 * 2. node scripts/generate-favicons.js
 */

const fs = require("fs");
const path = require("path");
const { createCanvas } = require("canvas");

// Define paths
const PUBLIC_DIR = path.join(__dirname, "..", "public");
const FAVICON_DIR = path.join(PUBLIC_DIR, "favicon");

// Create favicon directory if it doesn't exist
if (!fs.existsSync(FAVICON_DIR)) {
  fs.mkdirSync(FAVICON_DIR, { recursive: true });
}

// Brand colors
const BRAND_PRIMARY = "#8c45ff"; // Purple brand color
const BRAND_BG = "#190d2e"; // Dark background

// Function to draw the LiaGlobeAmericasSolid icon
function drawGlobeIcon(ctx, size) {
  const scale = size / 512;

  // Draw background
  ctx.fillStyle = BRAND_BG;
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, size * 0.125); // Border radius of 1/8 of size
  ctx.fill();

  // Draw the globe icon
  ctx.fillStyle = BRAND_PRIMARY;
  ctx.beginPath();

  // Scale the path to match the canvas size
  ctx.scale(scale, scale);

  // Draw the LiaGlobeAmericasSolid path
  // This is a simplified version of the globe icon
  ctx.moveTo(256, 64);
  // Draw outer circle
  ctx.arc(256, 256, 192, 0, Math.PI * 2);
  ctx.closePath();

  // Draw the meridians and parallels (simplified)
  ctx.moveTo(116.8, 192);
  ctx.lineTo(395.2, 192);
  ctx.moveTo(116.8, 320);
  ctx.lineTo(395.2, 320);

  ctx.moveTo(256, 64);
  ctx.bezierCurveTo(200, 64, 150, 150, 150, 256);
  ctx.bezierCurveTo(150, 362, 200, 448, 256, 448);
  ctx.bezierCurveTo(312, 448, 362, 362, 362, 256);
  ctx.bezierCurveTo(362, 150, 312, 64, 256, 64);

  ctx.fill();
}

// Generate favicon assets in different sizes
const sizes = [16, 32, 48, 96, 180, 192, 512];
sizes.forEach((size) => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");

  // Draw icon
  drawGlobeIcon(ctx, size);

  // Save PNG
  let filename;
  if (size === 180) {
    filename = path.join(FAVICON_DIR, "apple-touch-icon.png");
  } else if (size === 192) {
    filename = path.join(FAVICON_DIR, "android-chrome-192x192.png");
  } else if (size === 512) {
    filename = path.join(FAVICON_DIR, "android-chrome-512x512.png");
  } else {
    filename = path.join(FAVICON_DIR, `favicon-${size}x${size}.png`);
  }

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(filename, buffer);
  console.log(`Generated ${filename}`);
});

// For favicon.ico we just copy one of the smaller PNGs (32x32 is common)
// In a real project, you'd want to use a package like 'ico-converter' to create a proper .ico file
fs.copyFileSync(
  path.join(FAVICON_DIR, "favicon-32x32.png"),
  path.join(PUBLIC_DIR, "favicon.ico")
);
console.log("Generated favicon.ico");

console.log("All favicon assets generated successfully!");

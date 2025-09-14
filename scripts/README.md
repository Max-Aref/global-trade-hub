# Favicon Generation for Global Trade Hub

This repository includes a script to generate all required favicon assets for
the Global Trade Hub website.

## Generated Favicon Assets

The script generates the following favicon assets:

- `favicon.ico` - for traditional browser tabs
- `favicon-16x16.png` - small size favicon
- `favicon-32x32.png` - medium size favicon
- `favicon-96x96.png` - larger favicon
- `apple-touch-icon.png` - for iOS devices
- `android-chrome-192x192.png` - for Android devices
- `android-chrome-512x512.png` - for Android devices
- `site.webmanifest` - for PWA support

## How to Use

1. Install the required dependencies:

```bash
npm install canvas
```

2. Run the favicon generation script:

```bash
node scripts/generate-favicons.js
```

3. The generated favicon assets will be saved in the `public/favicon` directory.

## Implementation

The favicon assets use the LiaGlobeAmericasSolid icon with the brand colors:

- Primary color: `#8c45ff` (purple)
- Background: `#190d2e` (dark purple/blue)

These match the branding used throughout the Global Trade Hub website.

## Integration

The favicons are already integrated into the website through:

1. The `layout.tsx` file which contains the metadata configuration
2. The `icon.tsx` file which generates the dynamic favicon
3. The `site.webmanifest` file which provides PWA support

## Notes

- For a production environment, consider using a more robust favicon generation
  package like `favicon-generator` or `realfavicongenerator.net`
- The current implementation provides a solid foundation for cross-browser and
  cross-device support

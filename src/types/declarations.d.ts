// CSS side-effect imports (e.g. import "./globals.css") are handled by
// Next.js's bundler. This declaration silences the TS2882 warning from the
// VS Code language server which doesn't understand bundler-mode CSS imports.
declare module "*.css" {}

// SVG imports via next/image or raw src attributes
declare module "*.svg" {
  const content: string;
  export default content;
}

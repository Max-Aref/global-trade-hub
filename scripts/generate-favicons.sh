#!/bin/bash

# Install required dependencies
echo "Installing required dependencies..."
npm install canvas

# Run the favicon generation script
echo "Generating favicon assets..."
node scripts/generate-favicons.js

echo "Favicon generation complete!"
echo "Check the public/favicon directory for the generated assets."
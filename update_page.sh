#!/bin/bash
# Add import for PlatformStatistics  
sed -i '14a import { PlatformStatistics } from "@/sections/PlatformStatistics";' src/app/page.tsx
# Add component after BuyerNetworkShowcase
sed -i '/      <BuyerNetworkShowcase \/>/a\      {/* Platform Statistics section with performance metrics */}\n      <PlatformStatistics />' src/app/page.tsx

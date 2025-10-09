/**
 * Loading component for lazy-loaded sections
 * Displays a skeleton loader with consistent height to prevent layout shift
 */
export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        {/* Animated spinner */}
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-[#8c45ff] rounded-full animate-spin"></div>
        </div>
        {/* Loading text */}
        <p className="text-white/70 text-sm">Loading...</p>
      </div>
    </div>
  );
}

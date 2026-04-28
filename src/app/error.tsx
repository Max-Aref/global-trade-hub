"use client";

import { useEffect } from "react";
import { Button } from "@/components";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    if (process.env.NODE_ENV === "development") {
      console.error("Error boundary caught:", error);
    }
  }, [error]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-black px-4'>
      <div className='text-center max-w-md'>
        <h2 className='text-3xl font-bold mb-4 text-white'>
          Something went wrong!
        </h2>
        <p className='text-white/70 mb-8'>
          We apologize for the inconvenience. Please try again.
        </p>
        <div className='flex gap-4 justify-center'>
          <Button onClick={reset}>Try again</Button>
          <Button onClick={() => (window.location.href = "/")}>Go Home</Button>
        </div>
      </div>
    </div>
  );
}

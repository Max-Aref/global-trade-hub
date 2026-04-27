"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

type OptimizedImageProps = Omit<ImageProps, "onLoad" | "className"> & {
  className?: string;
  loadingClassName?: string;
};

/**
 * OptimizedImage component with advanced lazy loading and blur-up effect
 *
 * @param {OptimizedImageProps} props - Component props including all Next.js Image props
 * @returns {JSX.Element} - Optimized image component
 */
export function OptimizedImage({
  className = "",
  loadingClassName = "opacity-0",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side rendering
  useEffect(() => {
    setIsMounted(true);

    // Preload image if it's likely to be in the viewport soon
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = new window.Image();
              img.src = typeof props.src === "string" ? props.src : "";
              observer.disconnect();
            }
          });
        },
        { rootMargin: "200px" } // Start loading when within 200px of viewport
      );

      const dummy = document.createElement("div");
      observer.observe(dummy);

      return () => {
        observer.disconnect();
      };
    }
  }, [props.src]);

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // Only render on the client to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div
        className={className}
        style={{
          aspectRatio:
            props.width && props.height
              ? `${props.width}/${props.height}`
              : "auto",
        }}
      />
    );
  }

  return (
    <Image
      {...props}
      alt={props.alt ?? ""}
      className={twMerge(
        isLoaded ? className : loadingClassName,
        "transition-opacity duration-500",
        className
      )}
      onLoad={handleImageLoad}
      loading='lazy'
      placeholder={props.placeholder || "blur"}
      blurDataURL={
        props.blurDataURL ||
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzMzMzIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg=="
      }
    />
  );
}

"use client";

import { useState } from "react";

interface FoodImgProps {
  src: string;
  alt: string;
  emoji: string;
  width?: number;
  height?: number;
}

/**
 * Mirrors the original behavior: render the photo, and if it fails to load
 * swap it for a styled emoji placeholder (same .food-fallback .food-img look).
 */
export default function FoodImg({
  src,
  alt,
  emoji,
  width = 420,
  height = 420,
}: FoodImgProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="food-fallback food-img" role="img" aria-label={alt || "Food image"}>
        {emoji}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="food-img"
      loading="lazy"
      width={width}
      height={height}
      onError={() => setFailed(true)}
    />
  );
}

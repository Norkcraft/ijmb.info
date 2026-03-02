'use client';

import Image from 'next/image';
import { useState } from 'react';

export function ImageWithFallback({ src, alt, width, height, priority, className, sizes }: { src: string; alt: string; width: number; height: number; priority?: boolean; className?: string; sizes?: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return <div className={`flex items-center justify-center rounded-xl border border-border bg-card text-sm text-muted ${className ?? ''}`}>Image unavailable</div>;
  }
  return <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes={sizes} className={className} onError={() => setError(true)} />;
}

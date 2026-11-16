import Image from "next/image";
import type { Photo as PhotoData } from "@/content";

/** Toont een foto nooit groter dan het bronbestand. */
export function Photo({
  photo,
  displayWidth,
  priority = false,
  className = "",
}: {
  photo: PhotoData;
  displayWidth?: number;
  priority?: boolean;
  className?: string;
}) {
  const cap = displayWidth ? Math.min(displayWidth, photo.w) : photo.w;
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.w}
      height={photo.h}
      priority={priority}
      unoptimized={photo.src.endsWith(".gif")}
      sizes={`${cap}px`}
      className={`h-auto max-w-full ${className}`}
      style={{ width: `min(100%, ${cap}px)`, height: "auto" }}
    />
  );
}

import { cn } from "@/lib/utils"

interface AvatarProps {
  src: string
  webpSrc: string
  alt: string
  size: number
  className?: string
  priority?: boolean
}

export function Avatar({ src, webpSrc, alt, size, className, priority }: AvatarProps) {
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn("rounded-lg object-cover ring-1 ring-foreground/10", className)}
      />
    </picture>
  )
}

import { useRef, type ReactNode } from "react"
import { TooltipAnchor } from "@/components/TooltipAnchor"

export function Keyword({ children, tooltip }: { children: ReactNode; tooltip: string }) {
  return (
    <TooltipAnchor className="keyword" tooltip={tooltip} tabIndex={0}>
      {children}
    </TooltipAnchor>
  )
}

export function SpotlightText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLParagraphElement>(null)

  function onMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - r.left}px`)
    el.style.setProperty("--my", `${e.clientY - r.top}px`)
    el.style.setProperty("--glow-o", "1")
  }

  function onLeave() {
    ref.current?.style.setProperty("--glow-o", "0")
  }

  return (
    <p
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`spotlight ${className ?? ""}`}
    >
      <span className="spotlight-base">{children}</span>
      <span aria-hidden className="spotlight-glow">
        {children}
      </span>
    </p>
  )
}

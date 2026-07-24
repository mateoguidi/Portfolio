import { useRef, type HTMLAttributes, type ReactNode } from "react"

export function TooltipAnchor({
  children,
  tooltip,
  className,
  ...props
}: {
  children?: ReactNode
  tooltip: string
  className: string
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">) {
  const anchorRef = useRef<HTMLSpanElement>(null)
  const tooltipRef = useRef<HTMLSpanElement>(null)

  function positionTooltip() {
    const anchor = anchorRef.current
    const bubble = tooltipRef.current
    if (!anchor || !bubble) return

    const anchorRect = anchor.getBoundingClientRect()
    const gutter = 12
    const left = Math.min(
      window.innerWidth - bubble.offsetWidth - gutter,
      Math.max(gutter, anchorRect.left + anchorRect.width / 2 - bubble.offsetWidth / 2)
    )

    bubble.style.left = `${left}px`
    bubble.style.top = `${anchorRect.top - 10}px`
  }

  return (
    <span
      {...props}
      ref={anchorRef}
      className={className}
      onMouseEnter={positionTooltip}
      onFocus={positionTooltip}
      onTouchStart={positionTooltip}
    >
      {children}
      <span ref={tooltipRef} className="tooltip-bubble" role="tooltip">
        {tooltip}
      </span>
    </span>
  )
}

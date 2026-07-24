import { useEffect, useRef } from "react"
import { useTheme } from "@/theme/ThemeContext"

interface Star {
  x: number
  y: number
  radius: number
  baseAlpha: number
  twinkleSpeed: number
  twinklePhase: number
  driftRadius: number
  driftSpeed: number
  driftPhase: number
}

const MAX_DPR = 1.5
const BG_COLOR = "#0e0e0d"

function createStars(width: number, height: number): Star[] {
  const count = Math.min(140, Math.max(80, Math.round((width * height) / 9000)))
  const stars: Star[] = []
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.1 + 0.3,
      baseAlpha: Math.random() * 0.5 + 0.25,
      twinkleSpeed: Math.random() * 0.6 + 0.2,
      twinklePhase: Math.random() * Math.PI * 2,
      driftRadius: Math.random() * 8 + 2,
      driftSpeed: Math.random() * 0.05 + 0.02,
      driftPhase: Math.random() * Math.PI * 2,
    })
  }
  return stars
}

export function GalaxyBackground() {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (theme !== "dark") return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let stars: Star[] = []
    let width = 0
    let height = 0
    let dpr = 1
    let raf = 0
    let visible = document.visibilityState === "visible"

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      stars = createStars(width, height)
    }

    function draw(t: number) {
      ctx!.fillStyle = BG_COLOR
      ctx!.fillRect(0, 0, width, height)

      for (const star of stars) {
        const dx = Math.cos(t * star.driftSpeed + star.driftPhase) * star.driftRadius
        const dy = Math.sin(t * star.driftSpeed + star.driftPhase) * star.driftRadius
        const twinkle = 0.5 + 0.5 * Math.sin(t * star.twinkleSpeed + star.twinklePhase)
        const alpha = star.baseAlpha * (0.6 + 0.4 * twinkle)

        ctx!.beginPath()
        ctx!.arc(star.x + dx, star.y + dy, star.radius, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(231, 231, 226, ${alpha})`
        ctx!.fill()
      }
    }

    function frame(now: number) {
      draw(now / 1000)
      raf = requestAnimationFrame(frame)
    }

    function onVisibilityChange() {
      visible = document.visibilityState === "visible"
      if (visible && !reduceMotion) {
        raf = requestAnimationFrame(frame)
      } else {
        cancelAnimationFrame(raf)
      }
    }

    resize()
    if (reduceMotion) {
      draw(0)
    } else {
      raf = requestAnimationFrame(frame)
    }

    window.addEventListener("resize", resize)
    document.addEventListener("visibilitychange", onVisibilityChange)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [theme])

  if (theme !== "dark") return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}

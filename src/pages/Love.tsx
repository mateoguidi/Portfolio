import { useEffect, useMemo, useRef, useState } from "react"
import { useTheme } from "@/theme/ThemeContext"
import { useLanguage } from "@/i18n/LanguageContext"
import { strings, t, loveDodgeLines } from "@/i18n/strings"
import { Confetti } from "@/components/Confetti"

const MOVE_MS = 600
const DODGE_RADIUS = 90

function randomOffset() {
  const maxX = window.innerWidth - 160
  const maxY = window.innerHeight - 80
  return {
    left: Math.max(16, Math.random() * maxX),
    top: Math.max(16, Math.random() * maxY),
  }
}

export default function Love() {
  const { locale } = useLanguage()
  const [accepted, setAccepted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [dodgeCount, setDodgeCount] = useState(0)
  const [noPos, setNoPos] = useState<{ left: number; top: number } | null>(null)
  const { theme, toggleTheme } = useTheme()
  const noBtnRef = useRef<HTMLButtonElement>(null)
  const movingRef = useRef(false)

  useEffect(() => {
    document.title = "Will you date me?"
    if (theme === "dark") toggleTheme()
  }, [])

  useEffect(() => {
    if (accepted) return
    function onMouseMove(e: MouseEvent) {
      const el = noBtnRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy)
      if (dist < DODGE_RADIUS) dodge()
    }
    window.addEventListener("mousemove", onMouseMove)
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [accepted])

  const hearts = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 6,
        size: 12 + Math.random() * 16,
      })),
    [],
  )

  function dodge() {
    if (movingRef.current) return
    movingRef.current = true
    setDodgeCount((n) => n + 1)

    if (!noPos) {
      const el = noBtnRef.current
      const rect = el?.getBoundingClientRect()
      setNoPos(rect ? { left: rect.left, top: rect.top } : randomOffset())
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoPos(randomOffset()))
      })
    } else {
      setNoPos(randomOffset())
    }

    window.setTimeout(() => {
      movingRef.current = false
    }, MOVE_MS)
  }

  const noLabel = t(loveDodgeLines[Math.min(dodgeCount, loveDodgeLines.length - 1)], locale)

  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden text-center">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-b from-pink-200 via-rose-100 to-pink-50 animate-[love-bg-in_900ms_ease-out]"
      />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {hearts.map((h) => (
          <span
            key={h.id}
            className="absolute bottom-0 text-pink-400/70 dark:text-pink-300/50"
            style={{
              left: `${h.left}%`,
              fontSize: h.size,
              animation: `love-float ${h.duration}s linear ${h.delay}s infinite`,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      {!accepted ? (
        <>
          <h1 className="text-4xl font-semibold tracking-tight">{t(strings.love.title, locale)}</h1>
          <p className="mt-3 text-muted-foreground">{t(strings.love.subtitle, locale)}</p>

          <div className="relative mt-10 flex h-40 w-full max-w-sm items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setAccepted(true)
                setShowConfetti(true)
              }}
              className="rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              {t(strings.love.yes, locale)}
            </button>
            <button
              ref={noBtnRef}
              type="button"
              onClick={dodge}
              style={
                noPos
                  ? { position: "fixed", left: noPos.left, top: noPos.top }
                  : undefined
              }
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow transition-[left,top] duration-[600ms] ease-in-out"
            >
              {dodgeCount > 0 ? noLabel : t(strings.love.no, locale)}
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-semibold tracking-tight">{t(strings.love.acceptedTitle, locale)}</h1>
          <p className="mt-3 text-muted-foreground">{t(strings.love.acceptedSubtitle, locale)}</p>
        </>
      )}

      {showConfetti && <Confetti onDone={() => setShowConfetti(false)} />}

      <style>{`
        @keyframes love-float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(20deg); opacity: 0; }
        }
        @keyframes love-bg-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

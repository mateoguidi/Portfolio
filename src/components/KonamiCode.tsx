import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

export function KonamiCode() {
  const progress = useRef(0)
  const [active, setActive] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const expected = SEQUENCE[progress.current]
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key

      if (key === expected) {
        progress.current += 1
        if (progress.current === SEQUENCE.length) {
          progress.current = 0
          setActive(true)
          navigate("/love")
        }
      } else {
        progress.current = key === SEQUENCE[0] ? 1 : 0
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [navigate])

  useEffect(() => {
    if (!active) return
    const timeout = window.setTimeout(() => setActive(false), 2500)
    return () => window.clearTimeout(timeout)
  }, [active])

  useEffect(() => {
    document.documentElement.classList.toggle("konami-active", active)
  }, [active])

  return null
}

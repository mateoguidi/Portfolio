import { AnimatePresence, motion } from "motion/react"
import { useLocation, useOutlet } from "react-router-dom"

const easing = [0.16, 1, 0.3, 1] as const

export function PageTransition() {
  const location = useLocation()
  const element = useOutlet()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: easing }}
      >
        {element}
      </motion.div>
    </AnimatePresence>
  )
}

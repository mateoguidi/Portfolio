import { useLocation } from "react-router-dom"
import { Nav, LangSwitcher } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { PageTransition } from "@/components/PageTransition"
import { SmoothCursor } from "@/components/SmoothCursor"
import { GalaxyBackground } from "@/components/GalaxyBackground"
import { KonamiCode } from "@/components/KonamiCode"

export function Layout() {
  const { pathname } = useLocation()
  const isLove = pathname === "/love"

  return (
    <div className="flex min-h-svh flex-col">
      <GalaxyBackground />
      <SmoothCursor />
      <KonamiCode />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded-lg focus:bg-foreground focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
      >
        Skip to content
      </a>
      {isLove ? (
        <header className="sticky top-0 z-10 flex justify-center bg-transparent px-4 py-3">
          <LangSwitcher />
        </header>
      ) : (
        <Nav />
      )}
      <main id="main-content" className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <PageTransition />
      </main>
      {!isLove && <Footer />}
    </div>
  )
}

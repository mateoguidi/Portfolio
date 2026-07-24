import { NavLink } from "react-router-dom"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { about } from "@/data/about"
import { useLanguage } from "@/i18n/LanguageContext"
import { strings, t } from "@/i18n/strings"
import { locales, localize, type Locale } from "@/i18n/locale"
import { useTheme } from "@/theme/ThemeContext"
import { Avatar } from "@/components/Avatar"

export function LangSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage()

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {locales.map((l: Locale) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            "rounded-lg px-2 py-1 text-xs font-semibold uppercase transition-colors duration-200 ease-out hover:bg-[var(--hover-surface)] hover:text-foreground",
            locale === l ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export function Nav() {
  const { locale } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const links: { to: string; label: string; end?: boolean }[] = [
    { to: "/", label: t(strings.nav.home, locale), end: true },
    { to: "/about", label: t(strings.nav.about, locale) },
    { to: "/skills", label: t(strings.nav.skills, locale) },
    { to: "/projects", label: t(strings.nav.projects, locale) },
  ]

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--line)] bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-center px-4 py-3 sm:justify-between">
        <NavLink to="/" className="flex items-center gap-2 font-medium tracking-tight">
          <Avatar
            src={about.photoUrl}
            webpSrc={about.photoWebp64}
            alt={localize(about.name, locale)}
            size={32}
            className="hidden size-8 sm:block"
            priority
          />
          <span className="hidden sm:inline">{localize(about.name, locale)}</span>
        </NavLink>
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors duration-200 ease-out hover:bg-[var(--hover-surface)] hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={(e) => toggleTheme({ x: e.clientX, y: e.clientY })}
            aria-label={t(theme === "dark" ? strings.theme.toggleToLight : strings.theme.toggleToDark, locale)}
            className="ml-1 hidden size-7 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-200 ease-out hover:bg-[var(--hover-surface)] hover:text-foreground sm:flex"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <LangSwitcher className="hidden sm:flex sm:border-l sm:border-[var(--line)] sm:pl-1.5" />
        </div>
      </nav>
    </header>
  )
}

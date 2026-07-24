import { Mail, FileDown, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { about } from "@/data/about"
import { useLanguage } from "@/i18n/LanguageContext"
import { strings, t } from "@/i18n/strings"
import { locales, localize, type Locale } from "@/i18n/locale"
import { useTheme } from "@/theme/ThemeContext"

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

export function Footer() {
  const { links } = about
  const { locale, setLocale } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto mt-auto flex w-full max-w-3xl flex-col items-center gap-3 border-t border-[var(--line)] px-4 py-6 text-sm text-[var(--text-tertiary)]">
      <div className="flex items-center gap-1 sm:hidden">
        <button
          type="button"
          onClick={(e) => toggleTheme({ x: e.clientX, y: e.clientY })}
          aria-label={t(theme === "dark" ? strings.theme.toggleToLight : strings.theme.toggleToDark, locale)}
          className="flex size-7 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors duration-200 ease-out hover:bg-[var(--hover-surface)] hover:text-foreground"
        >
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
        <div className="flex items-center gap-0.5 border-l border-[var(--line)] pl-1.5">
          {locales.map((l: Locale) => (
            <button
              key={l}
              type="button"
              onClick={() => setLocale(l)}
              aria-pressed={locale === l}
              className={cn(
                "rounded-lg px-2 py-1 text-xs font-semibold uppercase transition-colors duration-200 ease-out hover:bg-[var(--hover-surface)] hover:text-foreground",
                locale === l ? "text-foreground" : "text-[var(--text-tertiary)]"
              )}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        {links.cvUrl && (
          <a
            href={localize(links.cvUrl, locale)}
            aria-label={t(strings.footer.cv, locale)}
            className="transition-colors duration-200 ease-out hover:text-foreground"
            download
          >
            <FileDown className="size-4" />
          </a>
        )}
        {links.email && (
          <a
            href={links.email}
            aria-label={t(strings.footer.email, locale)}
            className="transition-colors duration-200 ease-out hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
        )}
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label={t(strings.footer.github, locale)}
            className="transition-colors duration-200 ease-out hover:text-foreground"
          >
            <GithubIcon />
          </a>
        )}
        {links.linkedin && (
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={t(strings.footer.linkedin, locale)}
            className="transition-colors duration-200 ease-out hover:text-foreground"
          >
            <LinkedinIcon />
          </a>
        )}
      </div>
      <p>
        © {year} {localize(about.name, locale)} • {t(strings.footer.rights, locale)}
      </p>
    </footer>
  )
}

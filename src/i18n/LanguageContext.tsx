import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { type Locale, defaultLocale, locales } from "@/i18n/locale"

const STORAGE_KEY = "lang"

function localeFromQuery(): Locale | null {
  const params = new URLSearchParams(window.location.search)
  return locales.find((l) => params.has(l)) ?? null
}

function detectLocale(): Locale {
  const query = localeFromQuery()
  if (query) return query

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && locales.includes(stored as Locale)) return stored as Locale

  const browser = window.navigator.language.slice(0, 2)
  return locales.includes(browser as Locale) ? (browser as Locale) : defaultLocale
}

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(detectLocale)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

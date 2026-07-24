import { Link, Navigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { TooltipAnchor } from "@/components/TooltipAnchor"
import { useLanguage } from "@/i18n/LanguageContext"
import { strings, t } from "@/i18n/strings"
import { usePageMeta } from "@/i18n/usePageMeta"
import { locales } from "@/i18n/locale"

const LOCALE_SUFFIX = new RegExp(`&(${locales.join("|")})$`)

export default function NotFound() {
  const { locale } = useLanguage()
  const location = useLocation()
  usePageMeta(strings.notFound.title, strings.notFound.description)

  const match = location.pathname.match(LOCALE_SUFFIX)
  if (match) {
    const path = location.pathname.slice(0, match.index)
    const search = location.search ? `${location.search}&${match[1]}` : `?${match[1]}`
    return <Navigate to={`${path}${search}${location.hash}`} replace />
  }

  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <p className="text-sm font-semibold text-muted-foreground">404</p>
      <h1 className="text-3xl font-semibold">{t(strings.notFound.title, locale)}</h1>
      <p className="text-muted-foreground">{t(strings.notFound.description, locale)}</p>
      <TooltipAnchor className="inline-block" tooltip={t(strings.notFound.homeTooltip, locale)}>
        <Button render={<Link to="/" />}>{t(strings.notFound.home, locale)}</Button>
      </TooltipAnchor>
    </div>
  )
}

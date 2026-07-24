import { useEffect } from "react"
import { useLanguage } from "@/i18n/LanguageContext"
import { t } from "@/i18n/strings"
import type { LocalizedText } from "@/i18n/locale"

export function usePageMeta(title: LocalizedText, description: LocalizedText) {
  const { locale } = useLanguage()

  useEffect(() => {
    document.title = t(title, locale)

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement("meta")
      meta.name = "description"
      document.head.appendChild(meta)
    }
    meta.content = t(description, locale)
  }, [title, description, locale])
}

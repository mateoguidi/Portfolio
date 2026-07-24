export type Locale = "en" | "fr"

export const locales: Locale[] = ["en", "fr"]
export const defaultLocale: Locale = "en"

export type LocalizedText = Record<Locale, string>
export type LocalizedList = Record<Locale, string[]>

export function localize(text: LocalizedText, locale: Locale): string {
  return text[locale]
}

export function localizeList(list: LocalizedList, locale: Locale): string[] {
  return list[locale]
}

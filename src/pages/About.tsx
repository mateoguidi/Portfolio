import { Badge } from "@/components/ui/badge"
import { SpotlightText } from "@/components/Keyword"
import { about } from "@/data/about"
import { useLanguage } from "@/i18n/LanguageContext"
import { strings, t } from "@/i18n/strings"
import { localize } from "@/i18n/locale"
import { usePageMeta } from "@/i18n/usePageMeta"

export default function About() {
  const { locale } = useLanguage()
  usePageMeta(strings.meta.about.title, strings.meta.about.description)

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium tracking-tight">{t(strings.about.heading, locale)}</h1>
        <SpotlightText className="max-w-full text-[17px] font-normal leading-7">
          {localize(about.bio, locale)}
        </SpotlightText>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium tracking-tight">{t(strings.about.experience, locale)}</h2>
        <div className="flex flex-col gap-3">
          {about.experience.map((entry) => (
            <article
              key={`${entry.organization}-${entry.period.en}`}
              className="project-preview flex flex-col gap-1 p-4 transition-shadow duration-200 ease-out hover:shadow-[0_0_0_1px_var(--accent-brand)]"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium tracking-tight">{localize(entry.role, locale)}</h3>
                <Badge className="border-transparent bg-[var(--accent-brand)] text-white">
                  {t(strings.experienceType[entry.type], locale)}
                </Badge>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                {entry.organization} • {localize(entry.period, locale)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

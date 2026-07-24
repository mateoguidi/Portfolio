import { Gamepad2, Server, Globe, Database, AppWindow, Wrench } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { skills, type SkillCategoryKey } from "@/data/skills"
import { useLanguage } from "@/i18n/LanguageContext"
import { strings, t } from "@/i18n/strings"
import { usePageMeta } from "@/i18n/usePageMeta"

const categoryIcons: Record<SkillCategoryKey, typeof Gamepad2> = {
  videogame: Gamepad2,
  backend: Server,
  website: Globe,
  database: Database,
  ide: AppWindow,
  devops: Wrench,
}

export default function Skills() {
  const { locale } = useLanguage()
  usePageMeta(strings.meta.skills.title, strings.meta.skills.description)

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-medium tracking-tight">{t(strings.skills.heading, locale)}</h1>
      {skills.map((group) => {
        const Icon = categoryIcons[group.category]
        return (
          <section key={group.category} className="flex flex-col gap-3">
            <h2 className="flex items-center gap-2 text-lg font-medium tracking-tight">
              <Icon className="size-4 text-[var(--text-secondary)]" />
              {t(strings.skillCategory[group.category], locale)}
            </h2>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block transition-transform duration-200 ease-out hover:-translate-y-0.5"
                >
                  <Badge className="border-transparent bg-[var(--accent-brand)] text-sm text-white transition-colors duration-200 ease-out">
                    {skill.name}
                  </Badge>
                </a>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

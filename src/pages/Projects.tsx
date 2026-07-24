import { ProjectCard } from "@/components/ProjectCard"
import { projects } from "@/data/projects"
import { useLanguage } from "@/i18n/LanguageContext"
import { strings, t } from "@/i18n/strings"
import { usePageMeta } from "@/i18n/usePageMeta"

export default function Projects() {
  const { locale } = useLanguage()
  usePageMeta(strings.meta.projects.title, strings.meta.projects.description)

  const sortedProjects = [...projects].sort((a, b) => b.year - a.year)

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium tracking-tight">{t(strings.projects.heading, locale)}</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}

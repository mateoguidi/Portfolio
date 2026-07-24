import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ProjectCard"
import { SpotlightText } from "@/components/Keyword"
import { TooltipAnchor } from "@/components/TooltipAnchor"
import { about } from "@/data/about"
import { projects } from "@/data/projects"
import { useLanguage } from "@/i18n/LanguageContext"
import { strings, t } from "@/i18n/strings"
import { localize } from "@/i18n/locale"
import { usePageMeta } from "@/i18n/usePageMeta"
import { Avatar } from "@/components/Avatar"

export default function Home() {
  const { locale } = useLanguage()
  const featured = projects.filter((p) => p.featured)
  usePageMeta(strings.meta.home.title, strings.meta.home.description)

  return (
    <div className="flex flex-col gap-3">
      <section className="flex flex-col items-center gap-3 py-10 text-center">
        <Avatar
          src={about.photoUrl}
          webpSrc={about.photoWebp160}
          alt={localize(about.name, locale)}
          size={80}
          className="size-20"
          priority
        />
        <h1 className="text-2xl font-medium tracking-tight">{localize(about.name, locale)}</h1>
        <SpotlightText className="max-w-lg text-[17px] font-normal leading-7">
          {localize(about.tagline, locale)}
        </SpotlightText>
        <div className="flex gap-3">
          <TooltipAnchor className="inline-block" tooltip={t(strings.home.viewProjectsTooltip, locale)}>
            <Button render={<Link to="/projects" />}>{t(strings.home.viewProjects, locale)}</Button>
          </TooltipAnchor>
          <TooltipAnchor className="inline-block" tooltip={t(strings.home.aboutMeTooltip, locale)}>
            <Button variant="outline" render={<Link to="/about" />}>
              {t(strings.home.aboutMe, locale)}
            </Button>
          </TooltipAnchor>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium tracking-tight">{t(strings.home.featured, locale)}</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ExternalLink, FolderGit2, ImageOff } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TooltipAnchor } from "@/components/TooltipAnchor"
import { getProjectBySlug } from "@/data/projects"
import { useLanguage } from "@/i18n/LanguageContext"
import { strings, t } from "@/i18n/strings"
import { localize, localizeList } from "@/i18n/locale"
import { usePageMeta } from "@/i18n/usePageMeta"
import NotFound from "@/pages/NotFound"

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { locale } = useLanguage()
  const project = slug ? getProjectBySlug(slug) : undefined

  usePageMeta(
    project ? { en: `${project.title} - Mateo GUIDI`, fr: `${project.title} - Mateo GUIDI` } : strings.notFound.title,
    project ? project.description : strings.notFound.description
  )

  if (!project) return <NotFound />

  const features = localizeList(project.features, locale)

  return (
    <div className="flex flex-col gap-6">
      <Link
        to="/projects"
        className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> {t(strings.projectDetail.back, locale)}
      </Link>

      <div className="flex items-center gap-4">
        <div className="project-preview size-16 shrink-0 overflow-hidden">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt=""
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          ) : (
            <div className="flex size-full items-center justify-center text-[var(--text-tertiary)]">
              <ImageOff className="size-6" />
            </div>
          )}
        </div>
        <div className="flex flex-1 items-center justify-between gap-2">
          <h1 className="text-2xl font-medium tracking-tight">{project.title}</h1>
          <div className="flex items-center gap-2">
            <Badge className="border-transparent bg-[var(--accent-brand)] text-white">
              {t(strings.projectType[project.type], locale)}
            </Badge>
            <span className="text-sm text-muted-foreground">{project.year}</span>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground">{localize(project.description, locale)}</p>

      {features.length > 0 && (
        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-medium tracking-tight">{t(strings.projectDetail.features, locale)}</h2>
          <ul className="list-inside list-disc text-muted-foreground">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium tracking-tight">{t(strings.projectDetail.stack, locale)}</h2>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {project.collaborators && project.collaborators.length > 0 && (
        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-medium tracking-tight">{t(strings.projectDetail.collaborators, locale)}</h2>
          <p className="text-sm">
            {project.collaborators.map((c, i) => (
              <span key={c.name}>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors duration-200 ease-out hover:decoration-foreground"
                  >
                    {c.name}
                  </a>
                ) : (
                  c.name
                )}
                {i < project.collaborators!.length - 1 && ", "}
              </span>
            ))}
          </p>
        </section>
      )}

      <div className="flex gap-3">
        {project.demoUrl && (
          <TooltipAnchor className="inline-block" tooltip={t(strings.projectDetail.demoTooltip, locale)}>
            <Button render={<a href={project.demoUrl} target="_blank" rel="noreferrer" />}>
              <ExternalLink /> {t(strings.projectDetail.demo, locale)}
            </Button>
          </TooltipAnchor>
        )}
        {project.githubUrl && (
          <TooltipAnchor className="inline-block" tooltip={t(strings.projectDetail.githubTooltip, locale)}>
            <Button variant="outline" render={<a href={project.githubUrl} target="_blank" rel="noreferrer" />}>
              <FolderGit2 /> {t(strings.projectDetail.github, locale)}
            </Button>
          </TooltipAnchor>
        )}
      </div>
    </div>
  )
}

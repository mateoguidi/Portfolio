import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { TooltipAnchor } from "@/components/TooltipAnchor"
import type { Project } from "@/data/projects"
import { useLanguage } from "@/i18n/LanguageContext"
import { strings, t } from "@/i18n/strings"
import { localize } from "@/i18n/locale"

const MotionLink = motion.create(Link)

export function ProjectCard({ project }: { project: Project }) {
  const { locale } = useLanguage()

  return (
    <TooltipAnchor className="block h-full" tooltip={t(strings.projects.viewMore, locale)}>
      <MotionLink
        to={`/projects/${project.slug}`}
        className="block h-full"
        whileHover={{ y: -4 }}
        whileTap={{ y: 0, scale: 0.99 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <article className="project-preview flex h-full flex-col overflow-hidden transition-shadow duration-200 ease-out hover:shadow-[0_0_0_1px_var(--accent-brand)]">
          {project.thumbnail && (
            <img
              src={project.thumbnail}
              alt=""
              loading="lazy"
              decoding="async"
              className="aspect-[40/21] w-full object-cover"
            />
          )}
          <div className="flex flex-1 flex-col gap-2 p-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium tracking-tight">{project.title}</h3>
              <Badge className="border-transparent bg-[var(--accent-brand)] text-white">
                {t(strings.projectType[project.type], locale)}
              </Badge>
            </div>
            <p className="line-clamp-2 text-[15px] leading-6 text-[var(--text-secondary)]">
              {localize(project.description, locale)}
            </p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {project.stack.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </article>
      </MotionLink>
    </TooltipAnchor>
  )
}

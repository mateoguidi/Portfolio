import Image from "next/image"
import Link from "next/link"
import {unstable_ViewTransition as ViewTransition} from "react"
import {projects, ProjectToSkills} from '@/app/data';
import {FiExternalLink, FiChevronLeft, FiChevronRight} from 'react-icons/fi';

export function generateStaticParams() {
  return projects.map((project) => ({
    name: project.name,
  }))
}

export default async function PostDetail({
                                           params,
                                         }: {
  params: { name: string }
}) {
  const projectIndex = projects.findIndex((p) => p.name === params.name)
  const project = projects[projectIndex]

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <>
      <div className="px-4 sm:px-6 md:px-0 py-6">
        <div className="grid gap-5 grid-cols-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="text-xl font-medium">
            {project.name}
          </div>
            <div className="text-base font-normal">
              {project.university ? "University Project" : "Personal Project"} ({project.year})
            </div>
          </div>

        <div className="grid gap-2 text-gray-800/70">
          <div className="relative">
            {prevProject && (
              <Link
                href={`/projects/${prevProject.name}`}
                className="absolute -left-6 top-1/2 -translate-y-1/2 p-3 bg-gray-800/90 hover:bg-gray-700 text-white rounded-full transition z-10"
              >
                <FiChevronLeft size={24}/>
              </Link>
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.name}`}
                className="absolute -right-6 top-1/2 -translate-y-1/2 p-3 bg-gray-800/90 hover:bg-gray-700 text-white rounded-full transition z-10"
              >
                <FiChevronRight size={24}/>
              </Link>
            )}

          <ViewTransition
            name={`post-${0}`}
            className="via-blur"
            exit="duration-100"
          >
            <div className="relative w-full h-44 sm:h-56 md:h-[400px]">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="rounded-xl mb-1 object-cover shadow-2xl transition-shadow duration-300"
              />
            </div>
          </ViewTransition>
          </div>
          <div className="text-lg text-gray-300 pt-2">
            {project.description}
            {project.collab && project.collab.length > 0 ? (
              <>
                <br/>
                I made this project in collaboration with {project.collab.map((person, idx) => (
                <span key={person.name}>
                    <a
                      href={person.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline"
                    >
                      {person.name}
                    </a>
                  {idx === project.collab.length - 2 ? ' et ' : idx < project.collab.length - 1 ? ', ' : ''}
                  </span>
              ))}.
              </>
            ) : null}
          </div>
            <ul className="flex flex-wrap gap-2 mt-1">
            {ProjectToSkills(project).map((tech) => (
              <li
                key={tech.name}
                className="transform transition-transform rounded"
              >
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-0.5 bg-gray-800 rounded text-teal-200 font-semibold text-[0.8rem] hover:scale-105 duration-50"
                >
                  <Image
                    src={tech.img}
                    alt={tech.name}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  <span>{tech.name}</span>
                </a>
              </li>
            ))}
          </ul>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center my-2 px-4 py-2 font-semibold rounded w-full md:w-max justify-center transition transform text-sm hover:scale-105 duration-75
          ${project.demo
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-green-600 text-white hover:bg-green-700"}
        `}
            >
              <FiExternalLink className="mr-2"/>
              {project.demo ? "Go to Demo" : "Go to Project"}
            </a>
          ) : null}
        </div>
        </div>
      </div>
    </>
  )
}

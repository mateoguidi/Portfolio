"use client"
import { unstable_ViewTransition as ViewTransition } from "react"
import { Header } from "@/app/ui/header"
import Link from "next/link"
import Image from "next/image"
import useKonami from 'use-konami';
import { projects, skills, Category, CategoryToIcon, CategoryToString } from "@/app/data"
import {Tooltip} from 'react-tooltip';

export default function Home() {
  useKonami({
    onUnlock: () => window.location.href = "https://lemh.fr",
  });
  return (
    <ViewTransition
      name="home"
      enter="page-enter"
      exit="page-exit duration-100"
    >
      <div className="px-4 sm:px-6 md:px-0 grid gap-12 py-12">
        <Header isCollapsed={false} />

        <ViewTransition name="posts" className="via-blur" exit="duration-100">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Link
              href="/skills"
              className="text-lg font-medium col-span-full hover:text-white"
            >
              Skills
            </Link>
            {Object.keys(Category)
              .filter(key => isNaN(Number(key)))
              .slice(0, 3)
              .map((key, i) => {
                const cat = Category[key as keyof typeof Category]
                const catSkills = skills.filter(skill => skill.category === cat)
                const firstRow = catSkills.slice(0, 2)
                const secondRow = catSkills.slice(2, 5)
                return (
                  <div key={cat} className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                    <h3 className="flex items-center space-x-2 text-sm font-semibold text-white mb-3">
                      {CategoryToIcon(cat)}
                      <span>{CategoryToString(cat)}</span>
                    </h3>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-3 justify-center">
                       {firstRow.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center bg-gray-900 rounded px-3 py-3 w-14 sm:w-20 md:w-24">
                          <Link
                            href={skill.url}
                            target="_blank"
                      rel="noopener noreferrer"
                          >
                            <Image
                              src={skill.img}
                              alt={skill.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_6px_white] rounded"
                              data-tooltip-id="skill-tooltip"
                              data-tooltip-content={skill.name}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 justify-center">
                      {secondRow.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center bg-gray-900 rounded px-2 py-2 w-12 sm:w-16 md:w-16">
                          <Link
                            href={skill.url}
                          >
                            <Image
                              src={skill.img}
                              alt={skill.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain drop-shadow-[0_0_6px_white] rounded"
                              data-tooltip-id="skill-tooltip"
                              data-tooltip-content={skill.name}
                            />
                          </Link>
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            <Tooltip
            id="skill-tooltip"
            style={{borderRadius: "0.5rem", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"}}
          />
          </div>
        </ViewTransition>

        <ViewTransition name="posts" className="via-blur" exit="duration-100">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Link
              href="/projects"
              className="text-lg font-medium col-span-full hover:text-white"
            >
              Projects
            </Link>
            {Array.from(projects.slice(0, 3)).map((project, index) => {
              const id = index + 1
              return (
                <ViewTransition
                  key={id}
                  name={`post-${id}`}
                  className="via-blur"
                >
                  <Link
                    href={`/projects/${project.name}`}
                    className="aspect-video rounded-lg block overflow-hidden"
                  ><div className="relative">
                    <Image
                      src={project.img}
                      alt={project.name}
                      className="w-full aspect-video rounded-xl mb-1 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-white bg-opacity-80 text-black text-xs py-1 px-2 rounded-full font-semibold shadow-md">
                      {project.name}
                    </div>
                    </div></Link>
                </ViewTransition>
              )
            })}
          </div>
        </ViewTransition>
      </div>
      <footer className={"justify-self-center text-sm mb-5"}>
          © {new Date().getFullYear()} Matéo GUIDI • All rights reserved
      </footer>
    </ViewTransition>
  )
}

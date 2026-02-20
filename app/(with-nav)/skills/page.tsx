"use client"
import {Tooltip} from 'react-tooltip';
import Link from "next/link"
import Image from "next/image"
import {unstable_ViewTransition as ViewTransition} from "react"
import useKonami from 'use-konami';
import {skills, Category, CategoryToString, CategoryToIcon} from '@/app/data'

export default function PostList() {
  useKonami({
    onUnlock: () => window.location.href = "https://lemh.fr",
  });
  return (
    <>
      <ViewTransition name="posts" className="via-blur" exit="duration-100">
        <div className="px-4 sm:px-6 md:px-0 py-6">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-lg font-medium col-span-full">Skills</div>

          {Object.keys(Category)
            .filter(key => isNaN(Number(key)))
            .map((key, i) => {
              const cat = Category[key as keyof typeof Category]
              const catSkills = skills.filter(skill => skill.category === cat).slice(0, 5)
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
                        <div key={skill.name} className="flex flex-col items-center bg-gray-900 rounded px-3 py-3 w-24">
                          <Link
                            href={skill.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={skill.img}
                              alt={skill.name}
                              className="w-12 h-12 object-contain drop-shadow-[0_0_6px_white] rounded"
                              data-tooltip-id="skill-tooltip"
                              data-tooltip-content={skill.name}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 justify-center">
                      {secondRow.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center bg-gray-900 rounded px-2 py-2 w-16">
                          <Link
                            href={skill.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={skill.img}
                              alt={skill.name}
                              className="w-10 h-10 object-contain drop-shadow-[0_0_6px_white] rounded"
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
          </div>
          <Tooltip
            id="skill-tooltip"
            style={{borderRadius: "0.5rem", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"}}
          />
        </div>
      </ViewTransition>
    </>
  )
}

"use client"
import Link from "next/link"
import Image from "next/image"
import useKonami from 'use-konami';
import { projects, CategoryToString, CategoryToIcon } from '@/app/data';

export default function PostList() {
  useKonami({
    onUnlock: () => window.location.href = "https://lemh.fr",
  });
  return (
    <>
      <div>
        <div className="px-4 sm:px-6 md:px-0 py-6">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-lg font-medium col-span-full">Projects</div>

          {Array.from(projects).map((project, index) => {
            const id = index + 1
            return (
              <Link
                key={project.name}
                href={`/projects/${project.name}`}
                className="group block rounded-lg overflow-hidden"
              >
                <div>
                  <div className="relative">
                    <Image
                      src={project.img}
                      alt={project.name}
                      className="w-full aspect-video object-cover rounded-xl mb-1 shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-white bg-opacity-90 text-black text-xs py-1 px-2 rounded-full font-semibold shadow-md">
                      {project.name}
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center space-x-2 text-sm font-semibold text-white rounded px-2 py-1 shadow-md bg-gray-900/40 w-max">
                  {CategoryToIcon(project.category)}
                  <span>{CategoryToString(project.category)}</span>
                </div>
              </Link>
            )
          })}
          </div>
        </div>
      </div>
    </>
  )
}

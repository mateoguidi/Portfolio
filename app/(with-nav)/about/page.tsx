"use client"
import {ViewTransition} from "react"
import useKonami from 'use-konami';
import {FiExternalLink} from 'react-icons/fi';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Mateo } from "@/app/data"

export default function PostList() {
  useKonami({
    onUnlock: () => window.location.href = "https://lemh.fr",
  });
  return (
    <>
        <ViewTransition name="posts" exit="duration-100">
          <div className="px-4 sm:px-6 md:px-0 py-6">
            <div className="space-y-4 text-gray-100 text-base md:text-lg leading-relaxed">
              <h2 className="text-base font-semibold text-gray-300 tracking-wide">About</h2>
              <p>
                Videogame developer and programmer based in Bordeaux, France.
              </p>
              <p>
                I have been a developer since I was 16 and now master several programming languages, allowing me to
                handle large-scale projects. I specialize in the world of video games, continuously keeping up with new
                technologies, and aspire to contribute to the next major video game releases.
              </p>
              <p>
                Whether it's collaborating with cross-functional teams or leading projects, my commitment to precision and quality helps deliver solutions that stand out, and I consistently seek ways to innovate and exceed expectations.
              </p><br/>
            </div>

            <section className="mb-8 flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="md:flex-1">
              <h2 className="text-base font-semibold text-gray-300 mb-3 tracking-wide">Experience</h2>
              <ol className="list-none m-0 p-0 space-y-3">
                {Mateo.availableForWorking ? (
                  <div className="flex items-center gap-2 text-green-400 font-semibold text-sm mt-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Available for new opportunities
                  </div>
                ) : null}
                {Mateo.experiences && Mateo.experiences.length > 0 ? (
                  <ol className="list-none m-0 p-0 space-y-3">
                    {[...Mateo.experiences].reverse().map((exp, idx) => (
                      <li key={idx}>
                        <span className="font-bold text-white">
                          {exp.role} <span className="italic text-sm">({exp.grade})</span>
                        </span>
                        <br/>
                        <span className="text-gray-400 text-sm">
                          {exp.period} / <a href={exp.compagnyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">{exp.compagny}</a>
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : null}
              </ol>
            </div>
            <div className="flex flex-col items-start md:items-end space-y-4 mt-1 md:w-1/3">
              <a
                href="https://cv.mateoguidi.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 font-semibold rounded w-full md:w-max transition transform text-sm hover:scale-105 duration-75 bg-blue-600 text-white hover:bg-blue-700 justify-center"
              >
                <FiExternalLink className="mr-2"/>
                CV
              </a>
              <a
                href="mailto:contact@mateoguidi.fr"
                className="inline-flex items-center px-4 py-2 font-semibold rounded w-full md:w-max transition transform text-sm hover:scale-105 duration-75 bg-gray-900 text-white justify-center"
              >
                <IoIosMail  className="mr-2"/>
                Mail
              </a>
              <a
                href="https://github.com/mateoguidi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 font-semibold rounded w-full md:w-max transition transform text-sm hover:scale-105 duration-75 bg-gray-900 text-white justify-center"
              >
                <FaGithub className="mr-2"/>
                Github
              </a>
              <a
                href="https://linkedin.com/in/mateoguidi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 font-semibold rounded w-full md:w-max transition transform text-sm hover:scale-105 duration-75 bg-gray-900 text-white justify-center"
              >
                <FaLinkedin className="mr-2"/>
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </ViewTransition>
    </>
  )
}

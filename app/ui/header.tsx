"use client"
import { clsx as cx } from "clsx"
import Image from "next/image"
import Link from "next/link"
import profile from "@/app/ui/assets/img/pp.jpg"
import { NavLink } from "@/app/ui/nav-link"

export interface HeaderProps {
  isCollapsed?: boolean
}

export function Header({ isCollapsed = false }: HeaderProps) {
  return (
    <div
      className={cx("grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-center px-4 md:px-0 transition-all", {
        "mt-24": !isCollapsed,
      })}
    >
      <div>
        <Link href="/" className="mx-auto md:mx-0">
          <Image
            className={cx("rounded-full object-cover transition-all", {
              "w-12 h-12": isCollapsed,
              "w-20 h-20 md:w-[130px] md:h-[130px] md:mr-4": !isCollapsed
            })}
            src={profile}
            alt="A profile picture of Mateo GUIDI"
            width={130}
            height={130}
          />
        </Link>
      </div>

      <div className="grid gap-2 items-center text-center md:text-left">
        <div>
          <Link
            href="/"
            className={cx(
              "sm:block w-fit mx-auto md:mx-0 font-medium [text-box:trim-both_cap_alphabetic] hover:text-white transition-all",
              {
                "text-xl md:text-2xl self-center mb-2": isCollapsed,
                "text-2xl md:text-3xl": !isCollapsed,
              },
            )}
          >
            Mateo GUIDI
          </Link>
        </div>

        {!isCollapsed ? (
          <div className="text-sm md:text-lg">
            Junior Unity Developer - C# / Java / Web
          </div>
        ) : null}

        <div>
          <div
            className={cx("w-full md:w-fit flex gap-2 items-center justify-center md:justify-start flex-wrap transition-all", {
              "md:col-start-2 md:justify-self-end": isCollapsed,
            })}
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/skills">Skills</NavLink>
            <NavLink href="/projects">Projects</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

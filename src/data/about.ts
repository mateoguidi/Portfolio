import type { LocalizedText } from "@/i18n/locale"

export interface ExperienceEntry {
  role: LocalizedText
  organization: string
  period: LocalizedText
  type: "apprenticeship" | "internship" | "job"
}

export interface AboutData {
  name: LocalizedText
  photoUrl: string
  photoWebp64: string
  photoWebp160: string
  tagline: LocalizedText
  bio: LocalizedText
  location: LocalizedText
  experience: ExperienceEntry[]
  links: {
    cvUrl?: LocalizedText
    email?: string
    github?: string
    linkedin?: string
  }
}

export const about: AboutData = {
  name: {
    en: "Mateo GUIDI",
    fr: "Matéo GUIDI",
  },
  photoUrl: "/img/pp.jpg",
  photoWebp64: "/img/pp-64.webp",
  photoWebp160: "/img/pp-160.webp",
  tagline: {
    en: "Junior Unity Developer - C# / Java / Web",
    fr: "Développeur Unity Junior - C# / Java / Web",
  },
  location: {
    en: "Bordeaux, France",
    fr: "Bordeaux, France",
  },
  bio: {
    en: "Videogame developer and programmer based in Bordeaux, France. Developing since age 16, with proficiency across multiple languages and a specialization in gaming. Comfortable handling complex projects, staying current with emerging tech, and delivering high-quality solutions through teamwork or project leadership.",
    fr: "Développeur de jeux vidéo et programmeur basé à Bordeaux, France. Développeur depuis l'âge de 16 ans, maîtrisant plusieurs langages avec une spécialisation dans le jeu vidéo. À l'aise avec les projets complexes, en veille constante sur les nouvelles technologies, et capable de livrer des solutions de qualité en équipe ou en pilotant un projet.",
  },
  experience: [
    {
      role: {
        en: "Software Developer",
        fr: "Développeur logiciel",
      },
      organization: "Cordouan Technologies",
      period: { en: "Sept 2025 – Aug 2026", fr: "Sept. 2025 – Août 2026" },
      type: "apprenticeship",
    },
    {
      role: {
        en: "Videogame and AI Developer",
        fr: "Développeur jeu vidéo et IA",
      },
      organization: "University of Tsukuba",
      period: { en: "April – June 2025", fr: "Avril – Juin 2025" },
      type: "internship",
    },
    {
      role: {
        en: "Electronic Device Repairman",
        fr: "Réparateur d'appareils électroniques",
      },
      organization: "ADPC",
      period: { en: "December 2019", fr: "Décembre 2019" },
      type: "internship",
    },
  ],
  links: {
    cvUrl: {
      en: "/docs/cv-en.pdf",
      fr: "/docs/cv-fr.pdf",
    },
    email: "mailto:contact@mateoguidi.fr",
    github: "https://github.com/MateoGuidi",
    linkedin: "https://www.linkedin.com/in/mateoguidi",
  },
}

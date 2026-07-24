import type { Locale, LocalizedText } from "@/i18n/locale"

export const strings = {
  all: {
    name: { en: "Mateo GUIDI", fr: "Matéo GUIDI" },
  },
  nav: {
    home: { en: "Home", fr: "Accueil" },
    about: { en: "About", fr: "À propos" },
    skills: { en: "Skills", fr: "Compétences" },
    projects: { en: "Projects", fr: "Projets" },
  },
  home: {
    viewProjects: { en: "View projects", fr: "Voir les projets" },
    viewProjectsTooltip: { en: "Browse all projects", fr: "Parcourir tous les projets" },
    aboutMe: { en: "About me", fr: "À propos de moi" },
    aboutMeTooltip: { en: "Learn more about me", fr: "En savoir plus sur moi" },
    featured: { en: "Featured projects", fr: "Projets phares" },
  },
  about: {
    heading: { en: "About", fr: "À propos" },
    experience: { en: "Experience", fr: "Expérience" },
  },
  skills: {
    heading: { en: "Skills", fr: "Compétences" },
  },
  projects: {
    heading: { en: "Projects", fr: "Projets" },
    viewMore: { en: "Click to view more", fr: "Cliquer pour en voir plus" },
  },
  projectDetail: {
    back: { en: "Back to projects", fr: "Retour aux projets" },
    features: { en: "Features", fr: "Fonctionnalités" },
    stack: { en: "Stack", fr: "Technologies" },
    collaborators: { en: "Collaborators", fr: "Collaborateurs" },
    demo: { en: "Live demo", fr: "Démo en ligne" },
    demoTooltip: { en: "Open the live demo", fr: "Ouvrir la démo en ligne" },
    github: { en: "GitHub", fr: "GitHub" },
    githubTooltip: { en: "View source on GitHub", fr: "Voir le code sur GitHub" },
  },
  footer: {
    cv: { en: "CV", fr: "CV" },
    email: { en: "Email", fr: "Email" },
    github: { en: "GitHub", fr: "GitHub" },
    linkedin: { en: "LinkedIn", fr: "LinkedIn" },
    rights: { en: "All rights reserved", fr: "Tous droits réservés" },
  },
  experienceType: {
    apprenticeship: { en: "Apprenticeship", fr: "Alternance" },
    internship: { en: "Internship", fr: "Stage" },
    job: { en: "Job", fr: "Emploi" },
  },
  projectType: {
    website: { en: "Website", fr: "Site Web" },
    videogame: { en: "Videogame", fr: "Jeu vidéo" },
    backend: { en: "Back-End", fr: "Back-End" },
    university: { en: "University", fr: "Universitaire" },
  },
  skillCategory: {
    videogame: { en: "Videogame Development", fr: "Développement de jeux vidéo" },
    backend: { en: "Back-End", fr: "Back-End" },
    website: { en: "Website", fr: "Site Web" },
    database: { en: "Database Systems", fr: "Bases de données" },
    ide: { en: "Integrated Development Environments", fr: "Environnements de développement" },
    devops: { en: "DevOps & Tools", fr: "DevOps & Outils" },
  },
  notFound: {
    title: { en: "Page not found", fr: "Page introuvable" },
    description: {
      en: "The page you're looking for doesn't exist or has moved.",
      fr: "La page que vous cherchez n'existe pas ou a été déplacée.",
    },
    home: { en: "Back to home", fr: "Retour à l'accueil" },
    homeTooltip: { en: "Go to the homepage", fr: "Aller à la page d'accueil" },
  },
  theme: {
    toggleToDark: { en: "Switch to dark mode", fr: "Passer en mode sombre" },
    toggleToLight: { en: "Switch to light mode", fr: "Passer en mode clair" },
  },
  love: {
    title: { en: "Will you date me? 💌", fr: "Veux-tu sortir avec moi ? 💌" },
    subtitle: { en: "There's only one right answer.", fr: "Il n'y a qu'une seule bonne réponse." },
    yes: { en: "Yes 💖", fr: "Oui 💖" },
    no: { en: "No", fr: "Non" },
    acceptedTitle: { en: "You said yes! 🎉", fr: "T'as dit oui ! 🎉" },
    acceptedSubtitle: {
      en: "Best decision you've made all day.",
      fr: "La meilleure décision de ta journée.",
    },
  },
  meta: {
    home: {
      title: { en: "Mateo GUIDI - Portfolio", fr: "Matéo GUIDI - Portfolio" },
      description: {
        en: "Junior Unity developer portfolio - C#, Java, and web projects by Mateo GUIDI.",
        fr: "Portfolio de Matéo GUIDI, développeur Unity junior - projets C#, Java et web.",
      },
    },
    about: {
      title: { en: "About - Mateo GUIDI", fr: "À propos - Matéo GUIDI" },
      description: {
        en: "Background, experience, and career path of Mateo GUIDI.",
        fr: "Parcours, expériences et carrière de Matéo GUIDI.",
      },
    },
    skills: {
      title: { en: "Skills - Mateo GUIDI", fr: "Compétences - Matéo GUIDI" },
      description: {
        en: "Technical skills across game development, back-end, web, and DevOps.",
        fr: "Compétences techniques en jeu vidéo, back-end, web et DevOps.",
      },
    },
    projects: {
      title: { en: "Projects - Mateo GUIDI", fr: "Projets - Matéo GUIDI" },
      description: {
        en: "A selection of games, websites, and tools built by Mateo GUIDI.",
        fr: "Une sélection de jeux, sites et outils réalisés par Matéo GUIDI.",
      },
    },
  },
} satisfies Record<string, Record<string, LocalizedText | Record<string, LocalizedText>>>

export function t(entry: LocalizedText, locale: Locale): string {
  return entry[locale]
}

export const loveDodgeLines: LocalizedText[] = [
  { en: "Nice try.", fr: "Belle tentative" },
  { en: "Not today.", fr: "Pas aujourd'hui" },
  { en: "Getting warmer... for me.", fr: "Tu chauffes... pour moi" },
  { en: "You'll have to be faster than that.", fr: "Il va falloir être plus rapide" },
  { en: "Nope.", fr: "Nan" },
  { en: "Still no.", fr: "Toujours non" },
  { en: "This button has commitment issues.", fr: "Ce bouton a peur de l'engagement" },
  { en: "Try the other one.", fr: "Essaie l'autre bouton" },
]

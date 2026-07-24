import type { LocalizedList, LocalizedText } from "@/i18n/locale"

export type ProjectType = "website" | "videogame" | "backend" | "university"

export interface Project {
  slug: string
  title: string
  type: ProjectType
  year: number
  description: LocalizedText
  features: LocalizedList
  stack: string[]
  collaborators?: { name: string; url?: string }[]
  demoUrl?: string
  githubUrl?: string
  thumbnail?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "sudoku",
    title: "Sudoku",
    type: "website",
    year: 2026,
    thumbnail: "/img/projects/sudoku.webp",
    description: {
      en: "A modern, interactive Sudoku game built with React, TypeScript, and Vite. Supports multiple grid configurations and offers customizable difficulty options with performance tracking.",
      fr: "Un jeu de Sudoku moderne et interactif conçu avec React, TypeScript et Vite. Prend en charge plusieurs configurations de grille et propose des niveaux de difficulté personnalisables avec suivi des performances.",
    },
    features: {
      en: [
        "Multiple grid sizes (2x2, 2x3, 3x3)",
        "Three difficulty levels",
        "Time tracking with personal best records",
        "Keyboard and touch input support",
        "Fully responsive design",
        "Performance summary on completion screen",
      ],
      fr: [
        "Plusieurs tailles de grille (2x2, 2x3, 3x3)",
        "Trois niveaux de difficulté",
        "Chronométrage avec records personnels",
        "Prise en charge du clavier et du tactile",
        "Design entièrement responsive",
        "Résumé des performances à la fin de la partie",
      ],
    },
    stack: ["React", "TypeScript", "Vite", "Git"],
    demoUrl: "https://sudoku.mateoguidi.fr",
    featured: true,
  },
  {
    slug: "serpentini",
    title: "Serpentini",
    type: "videogame",
    year: 2025,
    thumbnail: "/img/projects/serpentini.webp",
    description: {
      en: "A classic snake game designed for simplicity and accessibility. Supports multiple languages, works seamlessly across different operating systems, and is fully compatible with controllers for a smooth arcade experience.",
      fr: "Un jeu de serpent classique pensé pour la simplicité et l'accessibilité. Prend en charge plusieurs langues, fonctionne sur différents systèmes d'exploitation et est entièrement compatible avec les manettes pour une expérience arcade fluide.",
    },
    features: {
      en: [
        "Multi-language support",
        "Cross-platform compatibility",
        "Controller support for arcade-style gameplay",
        "Accessible design",
      ],
      fr: [
        "Support multilingue",
        "Compatibilité multiplateforme",
        "Support manette pour un gameplay arcade",
        "Design accessible",
      ],
    },
    stack: ["Unity", "C#", "Git"],
    demoUrl: "https://serpentini.mateoguidi.fr",
    featured: true,
  },
  {
    slug: "gdmc",
    title: "GDMC",
    type: "university",
    year: 2025,
    thumbnail: "/img/projects/gdmc.webp",
    description: {
      en: "An AI-driven challenge centered on Minecraft settlements, where participants design intelligent systems capable of generating creative and functional worlds from scratch. Explores procedural generation techniques and simulates intelligent decision-making across diverse building environments.",
      fr: "Un défi centré sur l'IA appliquée aux colonies Minecraft, où les participants conçoivent des systèmes intelligents capables de générer des mondes créatifs et fonctionnels à partir de rien. Explore les techniques de génération procédurale et simule une prise de décision intelligente dans divers environnements de construction.",
    },
    features: {
      en: [
        "AI-powered world generation for Minecraft",
        "Procedural settlement creation",
        "Intelligent decision-making systems for building environments",
      ],
      fr: [
        "Génération de monde par IA pour Minecraft",
        "Création procédurale de colonies",
        "Systèmes de prise de décision intelligents pour les environnements de construction",
      ],
    },
    stack: ["Python", "Git", "Docker"],
    collaborators: [{ name: "Xabi Goïty", url: "https://www.linkedin.com/in/xabi-goity" }],
    githubUrl: "https://github.com/Xabi08YT/GDMC2025-MX",
    featured: true,
  },
  {
    slug: "sentiero",
    title: "Sentiero",
    type: "videogame",
    year: 2026,
    description: {
      en: "An interactive visualization tool for pathfinding algorithms on a 2D grid, built with Python and Pygame. Place start/end points, draw walls, and watch BFS, DFS, or A* explore the grid in real time.",
      fr: "Un outil de visualisation interactif pour les algorithmes de recherche de chemin sur une grille 2D, réalisé en Python avec Pygame. Placez des points de départ/arrivée, dessinez des murs, et observez BFS, DFS ou A* explorer la grille en temps réel.",
    },
    features: {
      en: [
        "Dynamic grid interaction: place start/end points and draw walls freely",
        "Random wall generation with customizable density",
        "BFS, DFS, and A* (Manhattan heuristic) algorithms",
        "Step-by-step animated exploration with progressive path reveal",
        "Toast notifications and keyboard shortcuts",
        "Extensible architecture for adding new algorithms",
      ],
      fr: [
        "Interaction dynamique avec la grille : placement libre des points de départ/arrivée et des murs",
        "Génération aléatoire de murs avec densité personnalisable",
        "Algorithmes BFS, DFS et A* (heuristique de Manhattan)",
        "Exploration animée étape par étape avec révélation progressive du chemin",
        "Notifications toast et raccourcis clavier",
        "Architecture extensible pour ajouter de nouveaux algorithmes",
      ],
    },
    thumbnail: "/img/projects/sentiero.webp",
    stack: ["Python", "Pygame", "Git"],
    githubUrl: "https://github.com/mateoguidi/Sentiero",
  },
  {
    slug: "minecraftdle",
    title: "MinecraftDle",
    type: "website",
    year: 2024,
    thumbnail: "/img/projects/minecraftdle.webp",
    description: {
      en: "A daily puzzle game centered on Minecraft, where players tackle fresh challenges every day. Combines clue-based deduction with competitive leaderboard rankings that encourage player engagement.",
      fr: "Un jeu d'énigme quotidien centré sur Minecraft, où les joueurs relèvent un nouveau défi chaque jour. Combine déduction par indices et classement compétitif pour encourager l'engagement des joueurs.",
    },
    features: {
      en: [
        "Daily guessing game mechanics",
        "Variety of clues for puzzle solving",
        "Leaderboard system for competitive rankings",
      ],
      fr: [
        "Mécanique de devinette quotidienne",
        "Variété d'indices pour résoudre l'énigme",
        "Système de classement compétitif",
      ],
    },
    stack: ["React", "MongoDB", "Git"],
    demoUrl: "https://minecraftdle.net",
  },
  {
    slug: "simplermc",
    title: "SimplerMC",
    type: "videogame",
    year: 2024,
    thumbnail: "/img/projects/simplermc.webp",
    description: {
      en: "A Minecraft plugin that enriches gameplay by introducing quality-of-life improvements and new game features, designed to enrich everyday gameplay.",
      fr: "Un plugin Minecraft qui enrichit le gameplay en introduisant des améliorations de confort et de nouvelles fonctionnalités, conçu pour enrichir l'expérience de jeu au quotidien.",
    },
    features: {
      en: [
        "Utility commands: /ping, /coords, /msg, /broadcast, /list, /vote, /inspect",
        "Chat, join, and leave event handling",
        "Day/night cycle listener",
        "Player shooting and death event listeners",
        "Source branches organized by Minecraft version compatibility",
      ],
      fr: [
        "Commandes utilitaires : /ping, /coords, /msg, /broadcast, /list, /vote, /inspect",
        "Gestion des événements de chat, connexion et déconnexion",
        "Écouteur de cycle jour/nuit",
        "Écouteurs d'événements de tir et de mort des joueurs",
        "Branches de code organisées par version de Minecraft compatible",
      ],
    },
    stack: ["Java", "Git"],
    githubUrl: "https://github.com/MateoGuidi/SimplerMC",
  },
  {
    slug: "lemh",
    title: "LEMH",
    type: "website",
    year: 2024,
    thumbnail: "/img/projects/lemh.webp",
    description: {
      en: "A promotional landing site showcasing group projects and creative works, serving as a central hub for discovery and engagement with collaborative initiatives.",
      fr: "Un site vitrine présentant des projets de groupe et des créations, servant de plateforme centrale pour découvrir et s'engager dans des initiatives collaboratives.",
    },
    features: {
      en: [
        "Explore featured content from collaborative projects",
        "Learn about contributors",
        "Stay updated with latest group activities",
      ],
      fr: [
        "Explorer les contenus mis en avant des projets collaboratifs",
        "Découvrir les contributeurs",
        "Rester informé des dernières activités du groupe",
      ],
    },
    stack: ["React", "Git"],
    collaborators: [
      { name: "Loan Collomb", url: "https://www.linkedin.com/in/loan-collomb" },
      { name: "Evan Rimonteil", url: "https://www.linkedin.com/in/evan-rimonteil" },
      { name: "Hugo Retail", url: "https://www.linkedin.com/in/hugo-retail" },
    ],
    demoUrl: "https://lemh.fr",
  },
  {
    slug: "rumore",
    title: "Rumore",
    type: "backend",
    year: 2026,
    thumbnail: "/img/projects/rumore.webp",
    description: {
      en: "A C++ OpenGL application that procedurally generates and renders wireframe terrain meshes using Perlin Noise. Features an interactive OpenGL window where users can adjust parameters such as frequency, amplitude, and scale through real-time UI sliders, triggering immediate mesh regeneration and dynamic visual updates without restarting the application.",
      fr: "Une application C++ OpenGL qui génère et affiche de manière procédurale des maillages de terrain filaires à l'aide de bruit de Perlin. Propose une fenêtre OpenGL interactive où l'utilisateur ajuste des paramètres comme la fréquence, l'amplitude et l'échelle via des curseurs en temps réel, déclenchant une régénération immédiate du maillage sans redémarrer l'application.",
    },
    features: {
      en: [
        "Procedural terrain generation via Perlin Noise",
        "Real-time parameter adjustment (frequency, amplitude, scale)",
        "Interactive UI sliders",
        "Dynamic mesh regeneration without application restart",
        "Wireframe visualization",
      ],
      fr: [
        "Génération procédurale de terrain via bruit de Perlin",
        "Ajustement des paramètres en temps réel (fréquence, amplitude, échelle)",
        "Curseurs d'interface interactifs",
        "Régénération dynamique du maillage sans redémarrage",
        "Visualisation filaire",
      ],
    },
    stack: ["C++", "OpenGL", "VS Code", "Git"],
    githubUrl: "https://github.com/mateoguidi/Rumore",
  },
  {
    slug: "labygame",
    title: "LabyGame",
    type: "university",
    year: 2024,
    thumbnail: "/img/projects/labygame.webp",
    description: {
      en: "A maze adventure where players navigate complex labyrinths, making decisions to find the optimal path and escape while overcoming obstacles and challenges. Emphasizes exploration and strategic thinking, featuring progressively harder levels for experienced players.",
      fr: "Une aventure en labyrinthe où les joueurs naviguent dans des dédales complexes, prenant des décisions pour trouver le chemin optimal et s'échapper tout en surmontant des obstacles. Met l'accent sur l'exploration et la réflexion stratégique, avec des niveaux de difficulté croissante pour les joueurs expérimentés.",
    },
    features: {
      en: [
        "Complex labyrinth navigation",
        "Decision-making gameplay mechanics",
        "Obstacle and challenge encounters",
        "Escalating difficulty progression",
        "Exploration-focused design",
      ],
      fr: [
        "Navigation dans des labyrinthes complexes",
        "Mécaniques de prise de décision",
        "Rencontres d'obstacles et de défis",
        "Progression de difficulté croissante",
        "Design axé sur l'exploration",
      ],
    },
    stack: ["Java", "Git"],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase())
}

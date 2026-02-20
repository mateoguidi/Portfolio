import Project_MinecraftDle_Image from '@/app/ui/assets/img/projects/minecraftdle.png';
import Project_Rumore_Image from '@/app/ui/assets/img/projects/rumore.png'
import Project_GDMC_Image from '@/app/ui/assets/img/projects/gdmc.jpg'
import Project_LabyGame_Image from '@/app/ui/assets/img/projects/labygame.png'
import Project_LEMH_Image from '@/app/ui/assets/img/projects/lemh.png'
import Project_PixeLEMH_Image from '@/app/ui/assets/img/projects/pixelemh.png'
import Project_Serpentini_Image from '@/app/ui/assets/img/projects/serpentini.png'
import Project_SimplerMC_Image from '@/app/ui/assets/img/projects/simplermc.png'
import Project_Sudoku_Image from '@/app/ui/assets/img/projects/sudoku.png'

import Skill_Unity_Image from '@/app/ui/assets/img/skills/Unity.png';
import Skill_Csharp_Image from '@/app/ui/assets/img/skills/Csharp.png';
import Skill_VS_Image from '@/app/ui/assets/img/skills/Visual_Studio.png';
import Skill_Git_Image from '@/app/ui/assets/img/skills/Git.png';
import Skill_AndroidStudio_Image from '@/app/ui/assets/img/skills/Android-Studio.png';
import Skill_Angular_Image from '@/app/ui/assets/img/skills/Angular.png';
import Skill_Cplusplus_Image from '@/app/ui/assets/img/skills/Cplusplus.png';
import Skill_Docker_Image from '@/app/ui/assets/img/skills/Docker.png';
import Skill_Godot_Image from '@/app/ui/assets/img/skills/Godot.png';
import Skill_Golang_Image from '@/app/ui/assets/img/skills/Golang.png';
import Skill_Java_Image from '@/app/ui/assets/img/skills/Java.png';
import Skill_Jenkins_Image from '@/app/ui/assets/img/skills/Jenkins.png';
import Skill_Jetbrains_Image from '@/app/ui/assets/img/skills/Jetbrains.png';
import Skill_Kubernetes_Image from '@/app/ui/assets/img/skills/Kubernetes.png';
import Skill_Mongodb_Image from '@/app/ui/assets/img/skills/Mongodb.png';
import Skill_Mariadb_Image from '@/app/ui/assets/img/skills/Mariadb.png';
import Skill_Nodejs_Image from '@/app/ui/assets/img/skills/Nodejs.png';
import Skill_Oracle_Image from '@/app/ui/assets/img/skills/Oracle.png';
import Skill_PostreSQL_Image from '@/app/ui/assets/img/skills/Postgresql.png';
import Skill_Python_Image from '@/app/ui/assets/img/skills/Python.png';
import Skill_React_Image from '@/app/ui/assets/img/skills/React.png';
import Skill_Rust_Image from '@/app/ui/assets/img/skills/Rust.png';
import Skill_Sonarqube_Image from '@/app/ui/assets/img/skills/Sonarqube.png';
import Skill_Spring_Image from '@/app/ui/assets/img/skills/Spring.png';
import Skill_SQL_Image from '@/app/ui/assets/img/skills/SQL.png';
import Skill_Svelte_Image from '@/app/ui/assets/img/skills/Swelte.png';
import Skill_Symfony_Image from '@/app/ui/assets/img/skills/Symfony.png';
import Skill_Unreal_Image from '@/app/ui/assets/img/skills/Unreal-Engine.png';
import Skill_VSC_Image from '@/app/ui/assets/img/skills/VSCode.png';
import Skill_XCode_Image from '@/app/ui/assets/img/skills/XCode.png';

import {IoGameController} from "react-icons/io5";
import {CgWebsite} from "react-icons/cg";
import {FaGears} from "react-icons/fa6";
import {FiDatabase} from "react-icons/fi";
import {AiOutlineDeploymentUnit} from "react-icons/ai";
import {LuLayoutPanelLeft} from "react-icons/lu";

import {StaticImageData} from "next/image";

export type Project = {
    name: string;
    img: StaticImageData;
    description: string;
    technos: string[];
    demo?: boolean;
    url?: string;
    category: Category;
    university: boolean;
    year: number;
    collab?: Person[];
};

export type Skill = {
    name: string,
    url: string
    category: Category,
    img: StaticImageData
}

export enum Category {
    VIDEOGAME,
    BACKEND,
    WEB,
    DATABASE,
    IDE,
    DEVOPS,
}

export type Person = {
    name: string
    url: string
}

export function CategoryToString(ca: Category): string {
    switch (ca) {
        case Category.VIDEOGAME:
            return "Videogame"
        case Category.WEB:
            return "Website"
        case Category.BACKEND:
            return "Back-End"
        case Category.DATABASE:
            return "Database"
        case Category.DEVOPS:
            return "DevOps"
        case Category.IDE:
            return "IDE"
    }
    return ""
}

export function CategoryToIcon(ca: Category) {
    switch (ca) {
        case Category.VIDEOGAME:
            return <IoGameController/>
        case Category.WEB:
            return <CgWebsite/>
        case Category.BACKEND:
            return <FaGears/>
        case Category.DATABASE:
            return <FiDatabase/>
        case Category.DEVOPS:
            return <AiOutlineDeploymentUnit/>
        case Category.IDE:
            return <LuLayoutPanelLeft/>
    }
    return null
}

export function StringToSkill(sk: string) {
    return skills.find((skill) => skill.name === sk);
}

export function ProjectToSkills(project: Project): Skill[] {
    const skills: Skill[] = [];
    for (let i = 0; i < project.technos.length; i++) {
        // @ts-ignore
        skills.push(StringToSkill(project.technos[i]));
    }
    return skills;
}

export const projects: Project[] = [
    {
        name: 'Sudoku',
        img: Project_Sudoku_Image,
        description: 'A modern, interactive Sudoku game built with React, TypeScript, and Vite. Featuring multiple grid sizes (2x2, 2x3, 3x3), three difficulty levels, time tracking with saved personal bests, keyboard and touch support, a fully responsive design, a sleek modern UI, and a win screen displaying your performance.',
        technos: ['React', 'Git'],
        demo: true,
        url: 'https://sudoku.mateoguidi.fr',
        category: Category.WEB,
        university: false,
        year: 2026
    },
    {
        name: 'Serpentini',
        img: Project_Serpentini_Image,
        description: 'A classic snake game designed for simplicity and accessibility. It supports multiple languages, works seamlessly across different operating systems, and is fully compatible with controllers for a smooth arcade experience.',
        technos: ['Unity', 'C#', 'Git'],
        demo: true,
        url: 'https://serpentini.mateoguidi.fr',
        category: Category.VIDEOGAME,
        university: false,
        year: 2025
    },
    {
        name: 'GDMC',
        img: Project_GDMC_Image,
        description: 'An AI-driven challenge centered on Minecraft settlements, where participants design intelligent systems capable of generating creative and functional worlds from scratch. The project explores procedural generation and simulates intelligent decision-making for diverse building environments.',
        technos: ['Python', 'Git', 'Docker'],
        demo: false,
        url: 'https://github.com/Xabi08YT/GDMC2025-MX',
        category: Category.VIDEOGAME,
        university: true,
        year: 2025,
        collab: [{name: "Xabi Goïty", url: "https://www.linkedin.com/in/xabi-goity"}]
    },
    {
        name: 'PixeLEMH',
        img: Project_PixeLEMH_Image,
        description: 'An online community platform that recreates the viral r/place pixel war, inviting users to contribute, collaborate, and compete by placing colored pixels on a shared canvas. Dynamic activity and social interaction create evolving artworks and foster a sense of collective achievement.',
        technos: ['Spring', 'React', 'Git', 'Docker'],
        demo: false,
        url: 'https://github.com/nesww/pixel_api',
        category: Category.WEB,
        university: false,
        year: 2025,
        collab: [{name: "Loan Collomb", url: "https://www.linkedin.com/in/loan-collomb"}]
    },
    {
        name: 'MinecraftDle',
        img: Project_MinecraftDle_Image,
        description: 'A daily guessing game themed around the Minecraft universe, offering players fresh puzzles each day and rewarding their knowledge and deduction skills. Users engage with a variety of clues, and leaderboard rankings motivate friendly competition.',
        technos: ['React', 'MongoDB', 'Git'],
        demo: true,
        url: 'https://minecraftdle.net',
        category: Category.WEB,
        university: false,
        year: 2024
    },
    {
        name: 'SimplerMC',
        img: Project_SimplerMC_Image,
        description: 'A Minecraft plugin aimed at enhancing the game experience: It enhancing player experience through quality-of-life improvements and new game features, designed to enrich everyday gameplay.',
        technos: ['Java', 'Git'],
        demo: false,
        url: 'https://github.com/MateoGuidi/SimplerMC',
        category: Category.VIDEOGAME,
        university: false,
        year: 2024
    },
    {
        name: 'LEMH',
        img: Project_LEMH_Image,
        description: "A promotional landing site showcasing group projects and creative works, serving as a central hub for discovery and engagement with collaborative initiatives. Visitors can explore featured content, learn about contributors, and stay updated with the latest group activities.",
        technos: ['React', 'Git'],
        demo: true,
        url: 'https://lemh.fr',
        category: Category.WEB,
        university: false,
        year: 2024,
        collab: [{name: "Loan Collomb", url: "https://www.linkedin.com/in/loan-collomb"}, {
            name: "Evan Rimonteil",
            url: "https://www.linkedin.com/in/evan-rimonteil"
        }, {name: "Hugo Retail", url: "https://www.linkedin.com/in/hugo-retail"}]
    },
    {
        name: 'Rumore',
        img: Project_Rumore_Image,
        description: 'A C++ OpenGL project that procedurally generates and renders a wireframe terrain mesh using Perlin Noise. It opens an interactive OpenGL window where users can adjust parameters such as frequency, amplitude, and scale through real-time UI sliders, triggering immediate mesh regeneration and dynamic visual updates without restarting the application.',
        technos: ['C++', 'VS Code', 'Git'],
        demo: false,
        url: 'https://github.com/mateoguidi/Rumore',
        category: Category.BACKEND,
        university: false,
        year: 2026
    },
    {
        name: 'LabyGame',
        img: Project_LabyGame_Image,
        description: 'A maze adventure where players navigate complex labyrinths, making decisions to find the optimal path and escape while overcoming obstacles and challenges. The design encourages exploration and quick thinking, with escalating difficulty for seasoned players.',
        technos: ['Java', 'Git'],
        demo: false,
        url: '',
        category: Category.VIDEOGAME,
        university: true,
        year: 2024
    },
];

export const skills: Skill[] = [
    {name: 'Unity', url: 'https://unity.com', category: Category.VIDEOGAME, img: Skill_Unity_Image},
    {name: 'Unreal Engine', url: 'https://www.unrealengine.com', category: Category.VIDEOGAME, img: Skill_Unreal_Image},
    {
        name: 'C#',
        url: 'https://dotnet.microsoft.com/languages/csharp',
        category: Category.VIDEOGAME,
        img: Skill_Csharp_Image
    },
    {
        name: 'C++',
        url: 'https://fr.wikipedia.org/wiki/C%2B%2B',
        category: Category.VIDEOGAME,
        img: Skill_Cplusplus_Image
    },
    {name: 'Godot', url: 'https://godotengine.org', category: Category.VIDEOGAME, img: Skill_Godot_Image},
    {name: 'SQL', url: 'https://sql.sh', category: Category.DATABASE, img: Skill_SQL_Image},
    {
        name: 'Oracle',
        url: 'https://www.oracle.com/database/sqldeveloper',
        category: Category.DATABASE,
        img: Skill_Oracle_Image
    },
    {name: 'MongoDB', url: 'https://www.mongodb.com', category: Category.DATABASE, img: Skill_Mongodb_Image},
    {name: 'PostgreSQL', url: 'https://www.postgresql.org', category: Category.DATABASE, img: Skill_PostreSQL_Image},
    {name: 'MariaDB', url: 'https://mariadb.org', category: Category.DATABASE, img: Skill_Mariadb_Image},
    {name: 'Git', url: 'https://git-scm.com/', category: Category.DEVOPS, img: Skill_Git_Image},
    {name: 'Docker', url: 'https://www.docker.com', category: Category.DEVOPS, img: Skill_Docker_Image},
    {
        name: 'SonarQube',
        url: 'https://www.sonarsource.com/products/sonarqube',
        category: Category.DEVOPS,
        img: Skill_Sonarqube_Image
    },
    {name: 'Jenkins', url: 'https://www.jenkins.io', category: Category.DEVOPS, img: Skill_Jenkins_Image},
    {name: 'Kubernetes', url: 'https://kubernetes.io', category: Category.DEVOPS, img: Skill_Kubernetes_Image},
    {name: 'Python', url: 'https://www.python.org', category: Category.BACKEND, img: Skill_Python_Image},
    {name: 'NodeJS', url: 'https://nodejs.org', category: Category.BACKEND, img: Skill_Nodejs_Image},
    {name: 'Java', url: 'https://www.java.com', category: Category.BACKEND, img: Skill_Java_Image},
    {name: 'Go', url: 'https://go.dev', category: Category.BACKEND, img: Skill_Golang_Image},
    {name: 'Rust', url: 'https://rust-lang.org', category: Category.BACKEND, img: Skill_Rust_Image},
    {name: 'React', url: 'https://react.dev', category: Category.WEB, img: Skill_React_Image},
    {name: 'Symfony', url: 'https://symfony.com', category: Category.WEB, img: Skill_Symfony_Image},
    {name: 'Angular', url: 'https://angular.dev', category: Category.WEB, img: Skill_Angular_Image},
    {name: 'Spring', url: 'https://spring.io/projects/spring-boot', category: Category.WEB, img: Skill_Spring_Image},
    {name: 'Svelte', url: 'https://svelte.dev', category: Category.WEB, img: Skill_Svelte_Image},
    {name: 'Visual Studio', url: 'https://visualstudio.microsoft.com', category: Category.IDE, img: Skill_VS_Image},
    {name: 'VS Code', url: 'https://code.visualstudio.com', category: Category.IDE, img: Skill_VSC_Image},
    {name: "Jetbrains' IDE", url: 'https://www.jetbrains.com/ides', category: Category.IDE, img: Skill_Jetbrains_Image},
    {
        name: "Android Studio",
        url: 'https://developer.android.com/studio',
        category: Category.IDE,
        img: Skill_AndroidStudio_Image
    },
    {name: "XCode", url: 'https://developer.apple.com/xcode', category: Category.IDE, img: Skill_XCode_Image},
];

export type Experience = {
    role: string;
    period: string;
    compagny: string;
    compagnyUrl: string;
    grade: string;
}

export type MateoPerson = {
    availableForWorking: boolean;
    experiences: Experience[];
}

export const Mateo: MateoPerson = {
    availableForWorking: false, experiences: [
        {
            role: "Electronic device repairman",
            period: "December 2019",
            compagny: "ADPC",
            compagnyUrl: "https://www.adpcbassin.fr",
            grade: "Internship"
        },
        {
            role: "Videogame and AI Developper",
            period: "April 2025 - June 2025",
            compagny: "University of Tsukuba",
            compagnyUrl: "https://www.tsukuba.ac.jp/en",
            grade: "Internship"
        },
        {
            role: "Software Developper",
            period: "September 2025 - Today",
            compagny: "Cordouan Technologies",
            compagnyUrl: "https://www.cordouan-tech.com",
            grade: "Apprenticeship"
        }
    ]
}
export interface Skill {
  name: string
  url: string
}

export type SkillCategoryKey =
  | "videogame"
  | "backend"
  | "website"
  | "database"
  | "ide"
  | "devops"

export interface SkillCategory {
  category: SkillCategoryKey
  items: Skill[]
}

export const skills: SkillCategory[] = [
  {
    category: "videogame",
    items: [
      { name: "Unity", url: "https://unity.com" },
      { name: "Unreal Engine", url: "https://www.unrealengine.com" },
      { name: "C#", url: "https://learn.microsoft.com/dotnet/csharp" },
      { name: "C++", url: "https://isocpp.org" },
      { name: "Godot", url: "https://godotengine.org" },
    ],
  },
  {
    category: "backend",
    items: [
      { name: "Python", url: "https://www.python.org" },
      { name: "NodeJS", url: "https://nodejs.org" },
      { name: "Java", url: "https://www.java.com" },
      { name: "Go", url: "https://go.dev" },
      { name: "Rust", url: "https://www.rust-lang.org" },
    ],
  },
  {
    category: "website",
    items: [
      { name: "React", url: "https://react.dev" },
      { name: "Symfony", url: "https://symfony.com" },
      { name: "Angular", url: "https://angular.dev" },
      { name: "Spring", url: "https://spring.io" },
      { name: "Svelte", url: "https://svelte.dev" },
    ],
  },
  {
    category: "database",
    items: [
      { name: "SQL", url: "https://en.wikipedia.org/wiki/SQL" },
      { name: "Oracle", url: "https://www.oracle.com/database/" },
      { name: "MongoDB", url: "https://www.mongodb.com" },
      { name: "PostgreSQL", url: "https://www.postgresql.org" },
      { name: "MariaDB", url: "https://mariadb.org" },
    ],
  },
  {
    category: "ide",
    items: [
      { name: "Visual Studio", url: "https://visualstudio.microsoft.com" },
      { name: "VS Code", url: "https://code.visualstudio.com" },
      { name: "JetBrains IDEs", url: "https://www.jetbrains.com" },
      { name: "Android Studio", url: "https://developer.android.com/studio" },
      { name: "XCode", url: "https://developer.apple.com/xcode/" },
    ],
  },
  {
    category: "devops",
    items: [
      { name: "Git", url: "https://git-scm.com" },
      { name: "Docker", url: "https://www.docker.com" },
      { name: "SonarQube", url: "https://www.sonarsource.com/products/sonarqube/" },
      { name: "Jenkins", url: "https://www.jenkins.io" },
      { name: "Kubernetes", url: "https://kubernetes.io" },
    ],
  },
]

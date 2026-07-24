import { existsSync, mkdirSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { resolve, dirname } from "node:path"
import sharp from "sharp"

const __dirname = dirname(fileURLToPath(import.meta.url))
const imgDir = resolve(__dirname, "../public/img")
const thumbSrcDir = resolve(__dirname, "../assets/project-thumbnails")
const thumbOutDir = resolve(imgDir, "projects")

interface Variant {
  source: string
  sizes: number[]
}

const variants: Variant[] = [{ source: "pp.jpg", sizes: [64, 160] }]

const projectThumbnails: { slug: string; source: string }[] = [
  { slug: "sudoku", source: "sudoku.png" },
  { slug: "serpentini", source: "serpentini.png" },
  { slug: "gdmc", source: "gdmc.jpg" },
  { slug: "minecraftdle", source: "minecraftdle.png" },
  { slug: "simplermc", source: "simplermc.png" },
  { slug: "lemh", source: "lemh.png" },
  { slug: "rumore", source: "rumore.png" },
  { slug: "labygame", source: "labygame.png" },
  { slug: "sentiero", source: "sentiero.png" },
]

const THUMBNAIL_WIDTH = 800

async function run() {
  mkdirSync(thumbOutDir, { recursive: true })

  for (const { source, sizes } of variants) {
    const sourcePath = resolve(imgDir, source)
    if (!existsSync(sourcePath)) {
      console.warn(`skip: ${source} not found`)
      continue
    }
    const base = source.replace(/\.[^.]+$/, "")
    for (const size of sizes) {
      const outPath = resolve(imgDir, `${base}-${size}.webp`)
      await sharp(sourcePath).resize(size, size).webp({ quality: 80 }).toFile(outPath)
      console.log(`generated ${base}-${size}.webp`)
    }
  }

  for (const { slug, source } of projectThumbnails) {
    const sourcePath = resolve(thumbSrcDir, source)
    if (!existsSync(sourcePath)) {
      console.warn(`skip: ${source} not found`)
      continue
    }
    const outPath = resolve(thumbOutDir, `${slug}.webp`)
    await sharp(sourcePath)
      .resize(THUMBNAIL_WIDTH, null, { withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outPath)
    console.log(`generated projects/${slug}.webp`)
  }
}

run()

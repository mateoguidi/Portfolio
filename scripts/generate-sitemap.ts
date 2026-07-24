import { writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { resolve, dirname } from "node:path"
import { projects } from "../src/data/projects"

const __dirname = dirname(fileURLToPath(import.meta.url))

const SITE_URL = "https://mateoguidi.fr"

const staticRoutes = ["/", "/about", "/skills", "/projects"]
const projectRoutes = projects.map((p) => `/projects/${p.slug}`)

const urls = [...staticRoutes, ...projectRoutes]
const today = new Date().toISOString().slice(0, 10)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>
`

const outPath = resolve(__dirname, "../public/sitemap.xml")
writeFileSync(outPath, xml)
console.log(`sitemap.xml written with ${urls.length} URLs -> ${outPath}`)

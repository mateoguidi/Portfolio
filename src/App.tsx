import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LanguageProvider } from "@/i18n/LanguageContext"
import { ThemeProvider } from "@/theme/ThemeContext"
import { Layout } from "@/components/Layout"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Skills from "@/pages/Skills"
import Projects from "@/pages/Projects"
import ProjectDetail from "@/pages/ProjectDetail"
import NotFound from "@/pages/NotFound"
import Love from "@/pages/Love"

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="skills" element={<Skills />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:slug" element={<ProjectDetail />} />
              <Route path="love" element={<Love />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App

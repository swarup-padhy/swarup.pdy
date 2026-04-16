import { lazy, Suspense } from "react"
import { ThemeProvider } from "@/components/theme/ThemeProvider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { PageLoader } from "@/components/shared/PageLoader"
import { Toaster } from "@/components/ui/sonner"

// Lazy-loaded routes mapped from their named exports
const Home = lazy(() => import("@/pages/Home").then(m => ({ default: m.Home })))
const CaseStudyDetail = lazy(() => import("@/pages/CaseStudyDetail").then(m => ({ default: m.CaseStudyDetail })))
const NotFound = lazy(() => import("@/pages/NotFound").then(m => ({ default: m.NotFound })))

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
        <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20">
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <Toaster position="bottom-right" />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App


import { Helmet } from "react-helmet-async"
import { personal } from "@/store"

interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
}

export function SEO({ title, description, canonicalUrl }: SEOProps) {
  
  const siteTitle = `${personal.name} — ${personal.occupation}`
  // If a specific title is provided, format it as "Specific Title | Site Title"
  const defaultTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const defaultDescription = description || "Portfolio showcasing QA automation projects, frameworks, and testing strategies."

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{defaultTitle}</title>
      <meta name="title" content={defaultTitle} />
      <meta name="description" content={defaultDescription} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={defaultTitle} />
      <meta property="twitter:description" content={defaultDescription} />
    </Helmet>
  )
}

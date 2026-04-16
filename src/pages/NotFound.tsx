import { Link } from "react-router-dom"
import { RiArrowLeftLine, RiEmotionSadLine } from "@remixicon/react"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/layout/SEO"

export function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6 gap-8">
        <div className="space-y-4 max-w-md">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">404</p>
          <h1 className="text-h1">Page not found.</h1>
          <p className="text-body-large text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Button asChild size="lg" variant="outline" className="rounded-full px-8">
          <Link to="/">
            <RiArrowLeftLine className="mr-2 size-4" />
            Back to Portfolio
          </Link>
        </Button>

        <RiEmotionSadLine className="size-16 text-muted-foreground/20 absolute bottom-12" />
      </div>
    </>
  )
}

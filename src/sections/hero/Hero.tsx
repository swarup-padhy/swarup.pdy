import { motion } from "framer-motion"
import { RiArrowRightLine, RiExternalLinkLine } from "@remixicon/react"
import { personal, heroData } from "@/store"
import { useSection, useConfig } from "@/hooks"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { smoothScrollTo } from "@/lib/utils"
import { staggerContainer, fadeUp } from "@/lib/animations"

export function Hero() {
  const { data: hero, isVisible } = useSection(heroData)
  const { isAvailable } = useConfig()
  if (!isVisible) return null

  return (
    <section 
      id="overview" 
      className="relative flex min-h-[95vh] items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      {/* Premium Background Layers */}
      <div className="absolute inset-0 z-0 bg-background" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_30%,transparent_100%)]" />

      {/* Decorative Glow Blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-[100%] blur-[120px] -z-10 pointer-events-none opacity-50 dark:opacity-30" />

      <div className="container relative z-10 px-6 md:px-8 mx-auto max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center w-full"
        >
          {isAvailable && (
            <motion.div variants={fadeUp} className="mb-8">
              <div className="inline-flex items-center rounded-full border border-border/40 bg-background/50 px-4 py-1.5 text-sm font-medium backdrop-blur-md shadow-sm transition-colors hover:bg-muted/50 cursor-default">
                <span className="relative flex h-2 w-2 mr-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-muted-foreground">{personal.occupation} • Open for impact</span>
              </div>
            </motion.div>
          )}

          {/* Headline */}
          <motion.h1 
            variants={fadeUp}
            className="text-hero mb-8"
          >
            <span className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
              {hero.headline}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeUp}
            className="text-body-large text-muted-foreground font-medium max-w-2xl mb-12"
          >
            {hero.subtitle}
          </motion.p>

          {/* Call to Actions */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-16">
            
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <Button 
                size="lg" 
                className="relative rounded-full w-full sm:w-auto h-14 px-8 text-base font-semibold shadow-none"
                asChild
              >
                <a href={hero.ctas.primary.href} onClick={(e) => smoothScrollTo(e, hero.ctas.primary.href)}>
                  {hero.ctas.primary.label}
                  <RiArrowRightLine className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full w-full sm:w-auto h-14 px-8 text-base font-medium border-border/60 bg-background/40 hover:bg-muted backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <a href={hero.ctas.secondary.href} target="_blank" rel="noopener noreferrer">
                {hero.ctas.secondary.label}
                <RiExternalLinkLine className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-5 w-full pt-8 border-t border-border/30">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
              {hero.skillsLabel}
            </span>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
              {hero.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="px-4 py-1.5 text-sm font-medium bg-background/40 hover:bg-muted/80 backdrop-blur-md border-border/50 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-default rounded-md"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

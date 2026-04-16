import { motion } from "framer-motion"
import { 
  RiDownloadLine, 
  RiUser6Line, 
  RiBuilding4Line, 
  RiMapPinLine, 
  RiTimeLine,
  RiInformationLine 
} from "@remixicon/react"
import { Button } from "@/components/ui/button"
import { personal, aboutData } from "@/store"
import { useSection } from "@/hooks"
import { staggerContainer, fadeUp } from "@/lib/animations"

export function About() {
  const { data: about, isVisible } = useSection(aboutData)
  if (!isVisible) return null

  const highlightIcons: Record<string, React.ElementType> = {
    Domain: RiBuilding4Line,
    Role: RiUser6Line,
    Location: RiMapPinLine,
    Availability: RiTimeLine,
  }

  return (
    <section
      id="about"
      className="section-padding bg-background relative overflow-hidden border-t border-border/40"
    >
      <div className="absolute inset-x-0 bottom-0 top-0 z-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />

      <div className="container-layout relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full space-y-20"
        >
          {/* ── Section Label ── */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
              <RiInformationLine className="size-3" />
              {about.tagline}
            </div>
            <div className="h-px flex-1 max-w-[60px] bg-border/60" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-16 lg:gap-24 items-start">
            
            {/* Left: Bio Content */}
            <motion.div variants={fadeUp} className="space-y-10">
              <h2 className="text-hero leading-[1.1] tracking-tight max-w-xl">
                {about.headline}
              </h2>
              
              <div className="space-y-6 max-w-2xl">
                {about.paragraphs.map((para, i) => (
                  <p key={i} className="text-body-large text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-md shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all font-bold">
                  <a href={personal.resumeLink} download>
                    Download Resume <RiDownloadLine className="ml-2 size-5" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right: Glassmorphism Highlights Card */}
            <motion.div 
              variants={fadeUp}
              className="relative p-8 rounded-3xl bg-muted/10 border border-border/40 backdrop-blur-sm overflow-hidden group hover:border-primary/20 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-all duration-500" />
              
              <h4 className="text-lg font-heading font-bold mb-8 tracking-tight flex items-center gap-3">
                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <RiUser6Line className="size-4 text-primary" />
                </div>
                Quick Profile
              </h4>

              <div className="space-y-6">
                {about.highlights.map((item) => {
                  const Icon = highlightIcons[item.label] ?? RiInformationLine
                  return (
                    <div key={item.label} className="group/item flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 transition-colors group-hover/item:text-primary/70">
                        <Icon className="size-3" />
                        {item.label}
                      </div>
                      <div className="text-body font-semibold text-foreground border-b border-border/50 pb-2 transition-all group-hover/item:border-primary/30">
                        {item.value}
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

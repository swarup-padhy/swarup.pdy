import { motion } from "framer-motion"
import {
  RiRobot2Line,
  RiCloudLine,
  RiCodeLine,
  RiTerminalBoxLine,
  RiCheckDoubleLine,
  RiArrowRightLine,
} from "@remixicon/react"
import { Badge } from "@/components/ui/badge"
import { overviewData } from "@/store"
import { useSection } from "@/hooks"
import { staggerContainer, fadeUp } from "@/lib/animations"

export function Overview() {
  const { data: overview, isVisible } = useSection(overviewData)
  if (!isVisible) return null

  const icons = [
    RiRobot2Line,
    RiCloudLine,
    RiCodeLine,
    RiTerminalBoxLine,
  ]

  return (
    <section
      id="overview"
      className="section-padding bg-background relative overflow-hidden border-t border-border/40"
    >
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
              <RiCheckDoubleLine className="size-3" />
              {overview.tagline}
            </div>
            <div className="h-px flex-1 max-w-[60px] bg-border/60" />
          </motion.div>

          {/* ── Headline + Description ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-20 pb-16 border-b border-border/50">

            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-hero max-w-lg leading-[1.1] tracking-tight">
                {overview.headline}
              </h2>
              <p className="text-body-large text-muted-foreground max-w-xl leading-relaxed">
                {overview.description}
              </p>
            </motion.div>

            {/* ── Stats & Certifications ── */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3 self-start w-full">
              <div className="grid grid-cols-2 gap-3">
                {overview.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="relative group p-5 rounded-2xl bg-muted/30 border border-border/40 hover:border-primary/30 hover:bg-muted/60 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-t-2xl" />
                    <span className="block text-[2rem] font-heading font-black tracking-tight text-foreground leading-none">
                      {stat.value}
                    </span>
                    <span className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mt-2 leading-relaxed">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              
              {overview.certificate && (
                <a 
                  href={overview.certificate.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <RiCheckDoubleLine className="size-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{overview.certificate.title}</span>
                      <span className="text-xs text-muted-foreground">{overview.certificate.issuer}</span>
                    </div>
                  </div>
                  <RiArrowRightLine className="size-4 text-primary group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </motion.div>
          </div>

          {/* ── Skill Groups ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {overview.skillGroups.map((group, i) => {
              const Icon = icons[i] ?? RiCodeLine
              return (
                <motion.div
                  key={group.title}
                  variants={fadeUp}
                  className="group relative flex flex-col gap-5 p-6 rounded-2xl border border-border/40 bg-muted/10 hover:bg-muted/30 hover:border-primary/25 transition-all duration-400"
                >
                  <div className="size-10 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                    <Icon className="size-5 text-primary" />
                  </div>

                  <div>
                    <h4 className="text-sm font-heading font-bold tracking-tight text-foreground">
                      {group.title}
                    </h4>
                    <div className="h-px w-8 bg-primary/30 mt-2 group-hover:w-12 transition-all duration-300" />
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-[10px] font-semibold tracking-wide text-muted-foreground border-border/50 hover:border-primary/40 hover:text-primary transition-colors duration-200 px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[10px] font-semibold text-muted-foreground/0 group-hover:text-primary/60 transition-all duration-300 mt-auto">
                    <span>Core stack</span>
                    <RiArrowRightLine className="size-3" />
                  </div>
                </motion.div>
              )
            })}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

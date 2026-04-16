import { useState } from "react"
import { motion } from "framer-motion"
import { 
  RiMailLine, 
  RiLinkedinBoxLine, 
  RiGithubFill, 
  RiArrowRightLine,
  RiSendPlane2Line,
  RiFileCopyLine,
  RiCheckLine
} from "@remixicon/react"
import { toast } from "sonner"
import { personal, contactData } from "@/store"
import { useSection } from "@/hooks"
import { staggerContainer, fadeUp } from "@/lib/animations"

export function Contact() {
  const { data: contact, isVisible } = useSection(contactData)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  if (!isVisible) return null

  const iconMap: Record<string, React.ElementType> = {
    Email: RiMailLine,
    LinkedIn: RiLinkedinBoxLine,
    GitHub: RiGithubFill,
  }

  const handleCopy = async (e: React.MouseEvent, text: string, index: number) => {
    e.preventDefault()
    e.stopPropagation()

    const triggerSuccess = () => {
      setCopiedIndex(index)
      toast.success("Copied to clipboard", {
        description: text,
      })
      setTimeout(() => setCopiedIndex(null), 2000)
    }

    try {
      if (navigator?.clipboard && window?.isSecureContext) {
        await navigator.clipboard.writeText(text)
        triggerSuccess()
      } else {
        // Unsecured contexts fallback (e.g., viewing dev server on mobile IP)
        const textArea = document.createElement("textarea")
        textArea.value = text
        textArea.style.position = "absolute"
        textArea.style.opacity = "0"
        textArea.style.left = "-9999px"
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        const successful = document.execCommand('copy')
        textArea.remove()
        if (successful) {
          triggerSuccess()
        } else {
          toast.error("Browser blocked clipboard copy")
        }
      }
    } catch (err) {
      toast.error("Failed to copy link")
    }
  }

  return (
    <section
      id="contact"
      className="section-padding bg-background relative overflow-hidden border-t border-border/40"
    >
      <div className="absolute inset-x-0 bottom-0 top-0 z-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_100%,#000_60%,transparent_100%)]" />

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
              <RiSendPlane2Line className="size-3" />
              {contact.tagline}
            </div>
            <div className="h-px flex-1 max-w-[60px] bg-border/60" />
          </motion.div>

          {/* ── Two Column Content ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Contact Links */}
            <motion.div variants={fadeUp} className="space-y-4 order-2 lg:order-1">
              {contact.links.map((link, index) => {
                const Icon = iconMap[link.label] ?? RiArrowRightLine
                const isCopied = copiedIndex === index

                return (
                  <div
                    key={link.label}
                    className="group relative flex items-center gap-6 p-6 rounded-2xl border border-border/40 bg-muted/10 hover:bg-muted/30 hover:border-primary/25 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 h-full w-[2px] bg-primary/0 group-hover:bg-primary transition-all duration-300" />
                    
                    {/* The actual link overlay, absolutely positioned beneath interactive elements */}
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                      aria-label={`Open ${link.label}`}
                    />

                    <div className="size-12 flex-shrink-0 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500 z-10 pointer-events-none">
                      <Icon className="size-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>

                    <div className="flex-1 min-w-0 z-10 pointer-events-none">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70 mb-1">
                        {link.label}
                      </span>
                      <span className="block text-lg font-medium text-foreground group-hover:text-primary transition-colors truncate">
                        {link.value}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 z-10 relative">
                      <button
                        onClick={(e) => handleCopy(e, link.value, index)}
                        className="p-2 rounded-md bg-background/40 hover:bg-muted transition-colors text-muted-foreground backdrop-blur-sm"
                        aria-label={`Copy ${link.label} to clipboard`}
                      >
                        {isCopied ? (
                          <RiCheckLine className="size-5 text-green-500" />
                        ) : (
                          <RiFileCopyLine className="size-5 hover:text-primary transition-colors" />
                        )}
                      </button>
                      <RiArrowRightLine className="size-5 text-muted-foreground/30 pointer-events-none group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                )
              })}
            </motion.div>

            {/* Right Column */}
            <motion.div variants={fadeUp} className="space-y-8 order-1 lg:order-2 lg:text-right flex flex-col lg:items-end">
              <h2 className="text-hero leading-[1.1] tracking-tight">
                {contact.headline}
              </h2>
              <p className="text-body-large text-muted-foreground max-w-lg leading-relaxed">
                {contact.description}
              </p>
              
              <div className="pt-4 flex flex-col lg:items-end gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Currently Based in</span>
                <span className="text-xl font-heading font-bold text-foreground">{personal.location}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

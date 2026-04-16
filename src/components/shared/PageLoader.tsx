import { motion } from "framer-motion"

export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full bg-background">
      <div className="flex flex-col items-center gap-8">
        {/* Bold Morphing Geometry */}
        <div className="relative size-12">
          <motion.div
            className="absolute inset-0 bg-primary/90 shadow-xl shadow-primary/20 backdrop-blur-md"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["15%", "50%", "15%"],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
        
        {/* Sleek Typography */}
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[10px] font-heading font-bold tracking-[0.4em] uppercase text-primary"
        >
          Loading
        </motion.span>
      </div>
    </div>
  )
}

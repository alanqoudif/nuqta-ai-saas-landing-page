"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedGradient({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      className={`absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.15),transparent_70%)] ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          duration: 15,
          ease: "linear",
        }}
      />
    </motion.div>
  )
}

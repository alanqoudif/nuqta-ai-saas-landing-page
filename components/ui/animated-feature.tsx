"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedFeatureProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export function AnimatedFeature({ icon, title, description, delay = 0 }: AnimatedFeatureProps) {
  return (
    <motion.div
      className="relative flex flex-col overflow-hidden rounded-lg border bg-background p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <h3 className="mt-6 text-xl font-semibold">{title}</h3>
      <p className="mt-2 flex-1 text-gray-400">{description}</p>
    </motion.div>
  )
}

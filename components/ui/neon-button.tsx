"use client"

import type React from "react"

import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NeonButtonProps extends ButtonProps {
  glowColor?: "purple" | "blue" | "teal" | "pink"
  glowIntensity?: "low" | "medium" | "high"
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, glowColor = "purple", glowIntensity = "medium", ...props }, ref) => {
    const glowColorMap = {
      purple: "from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 shadow-purple-500",
      blue: "from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-blue-500",
      teal: "from-teal-600 to-teal-800 hover:from-teal-500 hover:to-teal-700 shadow-teal-500",
      pink: "from-pink-600 to-pink-800 hover:from-pink-500 hover:to-pink-700 shadow-pink-500",
    }

    const glowIntensityMap = {
      low: "shadow-[0_0_10px_rgba(var(--shadow-color),0.2)] hover:shadow-[0_0_15px_rgba(var(--shadow-color),0.3)]",
      medium: "shadow-[0_0_15px_rgba(var(--shadow-color),0.3)] hover:shadow-[0_0_20px_rgba(var(--shadow-color),0.5)]",
      high: "shadow-[0_0_20px_rgba(var(--shadow-color),0.4)] hover:shadow-[0_0_30px_rgba(var(--shadow-color),0.6)]",
    }

    const colorClass = glowColorMap[glowColor]
    const intensityClass = glowIntensityMap[glowIntensity]

    return (
      <Button
        ref={ref}
        className={cn("bg-gradient-to-r transition-all duration-300", colorClass, intensityClass, className)}
        style={{ "--shadow-color": "139, 92, 246" } as React.CSSProperties}
        {...props}
      />
    )
  },
)

NeonButton.displayName = "NeonButton"

export { NeonButton }

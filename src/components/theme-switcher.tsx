"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isRotating, setIsRotating] = React.useState(false)

  const toggleTheme = () => {
    setIsRotating(true)
    
    // Cycle through themes: light -> dark -> system -> light
    if (theme === "light") {
      setTheme("dark")
    
    } else {
      setTheme("light")
    }

    // Reset rotation after animation completes
    setTimeout(() => setIsRotating(false), 300)
  }

  const getIcon = () => {
    if (theme === "dark") {
      return <Moon className="" />
    } else if (theme === "light") {
      return <Sun className="" />
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative"
    >
      <div
        className={`transition-transform duration-300 ${
          isRotating ? "rotate-180" : ""
        }`}
      >
        {getIcon()}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
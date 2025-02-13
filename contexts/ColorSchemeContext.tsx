"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type ColorScheme = "warmInviting" | "cleanModern" | "elegantMinimalist"

interface ColorSchemeContextType {
  colorScheme: ColorScheme
  setColorScheme: (scheme: ColorScheme) => void
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined)

export const useColorScheme = () => {
  const context = useContext(ColorSchemeContext)
  if (context === undefined) {
    throw new Error("useColorScheme must be used within a ColorSchemeProvider")
  }
  return context
}

export const ColorSchemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("warmInviting")

  useEffect(() => {
    const storedScheme = localStorage.getItem("colorScheme") as ColorScheme
    if (storedScheme) {
      setColorScheme(storedScheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("colorScheme", colorScheme)
    applyColorScheme(colorScheme)
  }, [colorScheme])

  const applyColorScheme = (scheme: ColorScheme) => {
    const root = document.documentElement
    const colors = colorSchemes[scheme]
    root.style.setProperty("--main-bg", colors.mainBg)
    root.style.setProperty("--accent-1", colors.accent1)
    root.style.setProperty("--accent-2", colors.accent2)
    root.style.setProperty("--text", colors.text)
    root.style.setProperty("--cta", colors.cta)
  }

  return <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>{children}</ColorSchemeContext.Provider>
}

const colorSchemes = {
  warmInviting: {
    mainBg: "60 100% 99%", // #FFF8F0
    accent1: "20 100% 92%", // #FADCD9
    accent2: "30 100% 83%", // #F8D0B0
    text: "0 0% 20%", // #333333
    cta: "0 100% 69%", // #FF6F61
  },
  cleanModern: {
    mainBg: "0 0% 100%", // #FFFFFF
    accent1: "195 53% 79%", // #A8DADC
    accent2: "0 100% 69%", // #FF6F61
    text: "210 100% 23%", // #1D3557
    cta: "195 53% 79%", // #A8DADC
  },
  elegantMinimalist: {
    mainBg: "36 60% 97%", // #F9F5F0
    accent1: "43 56% 89%", // #F3E9D2
    accent2: "173 48% 39%", // #2A9D8F
    text: "0 0% 20%", // #333333
    cta: "173 48% 39%", // #2A9D8F
  },
}


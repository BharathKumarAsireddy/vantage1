"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  onNavigate?: (url: string) => void
}

export function NavBar({ items, className, onNavigate }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [visible, setVisible] = useState(false)

  // Navbar visibility
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scroll-spy: update active tab based on which section is in view
  useEffect(() => {
    const onScroll = () => {
      const midY = window.innerHeight * 0.5
      let current = items[0].name
      for (const item of items) {
        const id = item.url.replace("#", "")
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // Section is active when its top is above midpoint AND its bottom hasn't passed the top
          if (rect.top <= midY && rect.bottom > 0) current = item.name
        }
      }
      setActiveTab(current)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll() // run once on mount
    return () => window.removeEventListener("scroll", onScroll)
  }, [items])

  const handleClick = (item: NavItem) => {
    setActiveTab(item.name) // optimistic update; scroll-spy corrects it after scroll settles
    if (onNavigate) {
      onNavigate(item.url)
    } else {
      const id = item.url.replace("#", "")
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        "transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "sm:opacity-0 sm:-translate-y-full opacity-100 translate-y-0",
        className,
      )}
    >
      <div
        className="flex items-center gap-1 backdrop-blur-lg py-1 px-1 rounded-full shadow-2xl"
        style={{
          background: "rgba(9,9,11,0.75)",
          border: "1px solid rgba(201,168,76,0.18)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.06)",
        }}
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200",
                isActive
                  ? "text-black"
                  : "hover:text-white",
              )}
              style={!isActive ? { color: "#9ca3af" } : {}}
            >
              {/* Active background */}
              {isActive && (
                <motion.div
                  layoutId="tube-bg"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 100%)",
                  }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                />
              )}


              {/* Label — text on desktop, icon on mobile */}
              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon
                  size={18}
                  strokeWidth={2.5}
                  style={{ color: isActive ? "#000" : "inherit" }}
                />
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

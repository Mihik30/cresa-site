"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path ? "font-bold text-white" : "text-muted-foreground hover:text-white transition-colors"
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="flex items-center h-16 px-4 border-b border-border shrink-0 md:px-6">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4">
        <Code className="w-6 h-6 text-primary" />
        <span>CRESA</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
        <Link href="/" className={isActive("/")}>
          Home
        </Link>
        <Link href="/teams" className={isActive("/teams")}>
          Teams
        </Link>
        <Link href="/events" className={isActive("/events")}>
          Events
        </Link>
        <Link href="/achievements" className={isActive("/achievements")}>
          Achievements
        </Link>
        <Link href="/contact" className={isActive("/contact")}>
          Contact Us
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="ml-auto sm:hidden text-muted-foreground hover:text-white"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background sm:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg">
            <Link href="/" className={isActive("/")} onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/teams" className={isActive("/teams")} onClick={() => setMobileMenuOpen(false)}>
              Teams
            </Link>
            <Link href="/events" className={isActive("/events")} onClick={() => setMobileMenuOpen(false)}>
              Events
            </Link>
            <Link href="/achievements" className={isActive("/achievements")} onClick={() => setMobileMenuOpen(false)}>
              Achievements
            </Link>
            <Link href="/contact" className={isActive("/contact")} onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      <div className="hidden sm:flex items-center ml-auto">
        <span className="text-sm text-muted-foreground">
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </header>
  )
}


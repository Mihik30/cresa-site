"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
      ? "font-bold text-primary relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
      : "text-muted-foreground hover:text-white transition-colors"
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}
    >
      <div className="flex items-center h-16 px-4 border-b border-border/50 shrink-0 md:px-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4">
          <Code className="w-6 h-6 text-primary" />
          <span className="text-white">CRESA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-8 h-full">
          <Link href="/" className={`${isActive("/")} h-full flex items-center px-2`}>
            Home
          </Link>
          <Link href="/teams" className={`${isActive("/teams")} h-full flex items-center px-2`}>
            Teams
          </Link>
          <Link href="/events" className={`${isActive("/events")} h-full flex items-center px-2`}>
            Events
          </Link>
          <Link href="/achievements" className={`${isActive("/achievements")} h-full flex items-center px-2`}>
            Achievements
          </Link>
          <Link href="/contact" className={`${isActive("/contact")} h-full flex items-center px-2`}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto sm:hidden text-muted-foreground hover:text-white bg-secondary/30 p-2 rounded-full"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-black/95 backdrop-blur-md sm:hidden">
            <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg">
              <Link
                href="/"
                className={`${isActive("/")} px-4 py-2 rounded-full hover:bg-primary/10 transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/teams"
                className={`${isActive("/teams")} px-4 py-2 rounded-full hover:bg-primary/10 transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Teams
              </Link>
              <Link
                href="/events"
                className={`${isActive("/events")} px-4 py-2 rounded-full hover:bg-primary/10 transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/achievements"
                className={`${isActive("/achievements")} px-4 py-2 rounded-full hover:bg-primary/10 transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Achievements
              </Link>
              <Link
                href="/contact"
                className={`${isActive("/contact")} px-4 py-2 rounded-full hover:bg-primary/10 transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}

        <div className="hidden sm:flex items-center ml-auto">
          <div className="bg-primary/20 text-primary font-medium rounded-full px-4 py-1.5 text-sm border border-primary/30">
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </div>
        </div>
      </div>
    </header>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path ? "font-medium text-accent-primary" : ""
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-background-base/95 backdrop-blur-sm shadow-sm border-b border-header-footer/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand - Left aligned */}
          <Link href="/" className="font-serif text-2xl font-medium text-header-footer" onClick={closeMenu}>
            Lee Welch, LCSW
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className={`hover:text-accent-primary transition-colors ${isActive("/")}`}>
              Home
            </Link>
            <Link href="/about" className={`hover:text-accent-primary transition-colors ${isActive("/about")}`}>
              About
            </Link>
            <Link href="/services" className={`hover:text-accent-primary transition-colors ${isActive("/services")}`}>
              Services
            </Link>
            <Link href="/forms" className={`hover:text-accent-primary transition-colors ${isActive("/forms")}`}>
              Forms
            </Link>
            <Link href="/contact" className={`hover:text-accent-primary transition-colors ${isActive("/contact")}`}>
              Contact
            </Link>
          </nav>

          {/* Hamburger Menu Button - Right aligned, visible on mobile */}
          <button
            className="md:hidden p-2 text-header-footer hover:text-accent-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu - Slides down when open */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4 border-t border-header-footer/10">
            <Link
              href="/"
              className={`hover:text-accent-primary transition-colors ${isActive("/")} px-2 py-1`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:text-accent-primary transition-colors ${isActive("/about")} px-2 py-1`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`hover:text-accent-primary transition-colors ${isActive("/services")} px-2 py-1`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/forms"
              className={`hover:text-accent-primary transition-colors ${isActive("/forms")} px-2 py-1`}
              onClick={closeMenu}
            >
              Forms
            </Link>
            <Link
              href="/contact"
              className={`hover:text-accent-primary transition-colors ${isActive("/contact")} px-2 py-1`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

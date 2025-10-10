"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { RegistrationPopup } from "./registration-popup"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-200 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="h-[120px] w-[320px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img
                    src="/images/fable-logo.png"
                    alt="FABLE ENGLISH Logo"
                    className="h-[140px] w-[320px] object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("curriculum")}
                className="text-gray-600 hover:text-[#00a7e1] transition-colors duration-300 relative group"
              >
                Gói học
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a7e1] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("experts")}
                className="text-gray-600 hover:text-[#00a7e1] transition-colors duration-300 relative group"
              >
                Đội ngũ chuyên gia
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a7e1] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-[#00a7e1] transition-colors duration-300 relative group"
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a7e1] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-[#00a7e1] transition-colors duration-300 relative group"
              >
                Liên hệ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a7e1] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={() => setIsRegistrationOpen(true)}
                className="bg-[#00a7e1] hover:bg-[#00a7e1]/90 text-white font-medium px-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                ĐĂNG KÝ NGAY
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-900 hover:text-[#00a7e1] transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <button
                  onClick={() => scrollToSection("curriculum")}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-[#00a7e1] hover:bg-[#00a7e1]/10 rounded-md transition-all duration-300"
                >
                  Gói học
                </button>
                <button
                  onClick={() => scrollToSection("experts")}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-[#00a7e1] hover:bg-[#00a7e1]/10 rounded-md transition-all duration-300"
                >
                  Đội ngũ chuyên gia
                </button>
                <Link
                  href="/blog"
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-[#00a7e1] hover:bg-[#00a7e1]/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-[#00a7e1] hover:bg-[#00a7e1]/10 rounded-md transition-all duration-300"
                >
                  Liên hệ
                </button>
                <div className="px-3 py-2">
                  <Button
                    onClick={() => setIsRegistrationOpen(true)}
                    className="w-full bg-[#00a7e1] hover:bg-[#00a7e1]/90 text-white font-medium transition-all duration-300"
                  >
                    ĐĂNG KÝ NGAY
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <RegistrationPopup isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
    </>
  )
}

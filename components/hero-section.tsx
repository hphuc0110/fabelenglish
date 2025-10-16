"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RegistrationPopup } from "./registration-popup"

export function HeroSection() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <>
      <section
        className="
          relative w-full 
          h-[100dvh] lg:min-h-screen  /* ✅ chỉ mobile mới dùng 100dvh */
          overflow-hidden flex items-center justify-center
          bg-black
        "
      >


        {/* Ảnh desktop */}
        <img
          src="/images/hero.webp"
          alt="GoTalk Desktop"
          className="
            hidden lg:block 
            absolute inset-0 
            w-full h-full 
            object-cover object-center
          "
        />

        {/* Ảnh mobile */}
        <img
          src="/images/hero-mobile.webp"
          alt="GoTalk Mobile"
          className="
            block lg:hidden 
            absolute inset-0 
            w-full h-full 
            object-cover object-center 
            align-top
          "
        />

        {/* Nút đăng ký */}
        <div
          className="
            absolute z-10 
            bottom-[1vh] sm:bottom-[3vh]
            left-1/2 -translate-x-1/2
            px-4
          "
        >
          <Button
            onClick={() => setIsRegistrationOpen(true)}
            className="
              bg-[#17aee2] hover:bg-[#17aee2]/80 
              text-white font-semibold 
              text-sm sm:text-base md:text-lg 
              px-6 sm:px-8 py-3 sm:py-4 
              rounded-full shadow-xl
              transform hover:scale-105 transition-all duration-300
            "
          >
            ĐĂNG KÝ NGAY - MIỄN PHÍ TƯ VẤN
          </Button>
        </div>
      </section>

      <RegistrationPopup
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </>
  )
}

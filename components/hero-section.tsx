"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RegistrationPopup } from "./registration-popup"

export function HeroSection() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <>
      <section className="relative bg-white text-gray-900 overflow-hidden min-h-screen flex items-center">
        {/* Background geometric elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 rounded-full bg-[#00a7e1] opacity-10 animate-pulse"></div>
          <div
            className="absolute bottom-20 sm:bottom-40 left-4 sm:left-20 w-12 sm:w-24 h-12 sm:h-24 rounded-full bg-[#00a7e1] opacity-15 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 sm:right-1/3 w-8 sm:w-16 h-8 sm:h-16 rounded-full bg-[#00a7e1] opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 relative z-10 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-left-8 duration-1000 text-center lg:text-left">
                  <span className="text-[#00a7e1]">FABLE</span>
                  <span className="text-[#f17720]">TALK</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light animate-in fade-in slide-in-from-left-8 duration-1000 delay-300 text-center lg:text-left">
                English for Storytelling
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Luyện cách phản xạ kể chuyện tự nhiên",
                  "Biến trải nghiệm thành câu chuyện truyền cảm hứng",
                  "Cá nhân hoá kịch bản giảng dạy & từ vựng theo mục tiêu",
                  "Thực hành mô phỏng với các chủ đề có độ khó cao",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 p-3 sm:p-4 rounded-lg hover:bg-[#00a7e1]/5 transition-all duration-300 hover:shadow-md animate-in fade-in slide-in-from-left-8"
                    style={{ animationDelay: `${600 + index * 200}ms`, animationDuration: "800ms" }}
                  >
                    <div
                      className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#00a7e1] flex items-center justify-center flex-shrink-0 animate-in zoom-in duration-500"
                      style={{ animationDelay: `${800 + index * 200}ms` }}
                    >
                      <Check className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-900 font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 sm:pt-6 animate-in fade-in slide-in-from-left-8 duration-1000 delay-1000 text-center lg:text-left">
                <Button
                  onClick={() => setIsRegistrationOpen(true)}
                  size="lg"
                  className="bg-[#00a7e1] hover:bg-[#00a7e1]/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  ĐĂNG KÝ NGAY - MIỄN PHÍ TƯ VẤN
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-500 order-1 lg:order-2">
              <div className="relative z-10 group">
                <img
                  src="/images/herosection.png"
                  alt="FABLE ENGLISH Talk English Learning"
                  className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md mx-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegistrationPopup isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
    </>
  )
}

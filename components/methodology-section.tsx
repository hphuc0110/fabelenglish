"use client"

import { useState } from "react"
import { RefreshCw, User, Users, Shield, Apple } from "lucide-react"

export function MethodologySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const steps = [
    { icon: RefreshCw, label: "Flipped Classroom" },
    { icon: User, label: "Phản biện 1:1"},
    { icon: Users, label: "Cá nhân hóa"},
    { icon: Shield, label: "Andragory"},
    { icon: Apple, label: "Learning by Doing"},
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-[#dbe4f9] to-[#b9c7e8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00a7e1] mb-3">
            Phương Pháp Đào Tạo
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black/80">
            Tinh gọn - Thực chiến - Cá nhân hóa - Uy tín
          </p>
        </div>

        {/* Các bước */}
        <div className="
          flex flex-col items-center gap-10 
          lg:flex-row lg:justify-center lg:items-start lg:gap-16
        ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative w-[220px] min-h-[180px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div className="flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#00a7e1] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl mb-3 sm:mb-4">
                <step.icon className="w-9 h-9 sm:w-10 sm:h-10 text-white" />
              </div>

              {/* Label */}
              <span className="text-black font-semibold text-base leading-snug">
                {step.label}
              </span>

            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

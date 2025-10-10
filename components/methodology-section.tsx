"use client"

import { useState } from "react"
import { RefreshCw, User, Users, Shield } from "lucide-react"

export function MethodologySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const steps = [
    { icon: RefreshCw, label: "Học tập thích ứng", content: "" },
    { icon: User, label: "Luyện tập 1-1", content: "" },
    { icon: Users, label: "Framework ứng dụng", content: "" },
    { icon: Shield, label: "Cẩm nang bán hàng cá nhân hoá", content: "" },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-[#dbe4f9] to-[#b9c7e8]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
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
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative w-[220px] min-h-[180px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div className="flex justify-center items-center w-24 h-24 rounded-full bg-[#00a7e1] shadow-md transition-transform duration-300 hover:scale-110 mb-4">
                <step.icon className="w-10 h-10 text-white" />
              </div>

              {/* Label */}
              <span className="text-black font-semibold text-base leading-snug">
                {step.label}
              </span>

              {/* Nội dung luôn hiển thị trên mobile, tooltip hover trên desktop */}
              <div className="block lg:hidden mt-2 text-sm text-black/70">
                {step.content}
              </div>
              {hoveredIndex === index && (
                <div className="hidden lg:block absolute top-full mt-5 w-60 bg-white text-black text-sm p-4 rounded-xl shadow-lg z-10 animate-fadeInUp">
                  {step.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
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

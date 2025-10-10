"use client"

import { useState } from "react"

export function CurriculumSection() {
  const modules = [
    {
      number: 1,
      title: "FIRST IMPRESSION & INTRODUCTION",
      details: [
        "Tự tin giới thiệu bản thân và công ty bằng Tiếng Anh trong 60 giây.",
      ],
    },
    {
      number: 2,
      title: "PRODUCT PRESENTATION & FEATURES-BENEFITS ",
      details: [
        "Phân biệt và diễn đạt Features (Tính năng) với Benefits (Lợi ích) bằng Tiếng Anh.",
      ],
    },
    {
      number: 3,
      title: "THE COMPELLING PITCH & PERSUASIVE STRUCTURE",
      details: [
        "Sử dụng ngôn ngữ để làm nổi bật tác động, sự ảnh hưởng (Impact) của vấn đề đối với khách hàng.",
      ],
    },
    {
      number: 4,
      title: "OBJECTION HANDLING & NEGOTIATION FOUNDATIONS",
      details: [
        "Nhận biết các phong cách đàm phán (Negotiation Styles) để chuẩn bị chiến lược.",
      ],
    },
    {
      number: 5,
      title: "MAKING OFFERS & CLOSING THE FABLE ENGLISH ",
      subtitle: "",
      details: [
        "Thực hành 3-4 kỹ thuật “chốt sale” bằng lời nói (Verbal Closing) phù hợp với phong cách cá nhân.",
      ],
    },
  ]

  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#00a7e1] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Lộ trình 5+1
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            BẠN SẼ NHẬN ĐƯỢC HƠN CẢ MỘT{" "}
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-[#00a7e1]">
          KHÓA HỌC TIẾNG ANH THỰC CHIẾN
          </h3>
        </div>

        {/* Card list (1 cột) */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {modules.map((module) => (
            <div
              key={module.number}
              onClick={() =>
                setSelected(selected === module.number ? null : module.number)
              }
              className={`rounded-2xl p-6 shadow-md transition-all duration-300 cursor-pointer
                ${
                  selected === module.number
                    ? "bg-[#00a7e1] text-white scale-[1.02]"
                    : "bg-orange-500 text-black hover:bg-orange-400 hover:scale-[1.01]"
                }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-sm font-bold text-white">
                  {module.number}
                </div>
                <h3 className="font-semibold text-lg">{module.title}</h3>
              </div>

              {/* Chi tiết hiển thị khi chọn */}
              {selected === module.number && (
                <div
                  className="mt-4 border-t border-white/30 pt-4 animate-fadeIn"
                  style={{ animation: "fadeIn 0.3s ease-in-out" }}
                >
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    {module.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ghi chú */}
        <p className="text-center text-sm text-gray-600 mt-10 italic">
        </p>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

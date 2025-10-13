"use client"

import { useState } from "react"

export function CurriculumSection() {
  const modules = [
    {
      number: 1,
      title: "THE BUILDING BLOCKS OF A STORY",
      details: [
        "Phân tích được một bài TED Talk mẫu để nhận diện 4 khối kiến trúc cốt lõi.",
      ],
    },
    {
      number: 2,
      title: "PAINTING A PICTURE WITH WORDS ",
      details: [
        'Chuyển đổi một câu mở đầu đơn giản thành 3 loại "mồi câu" (Hook) có sức ảnh hưởng.',
      ],
    },
    {
      number: 3,
      title: "STORYTELLING FOR CONNECTION",
      details: [
        "Áp dụng kỹ thuật Show, Don't Tell (Tả, không Kể) để mô tả xung đột một cách sống động.",
      ],
    },
    {
      number: 4,
      title: "THE STORY THAT SPEAKS",
      details: [
        "Phân biệt rõ ràng giữa Tóm tắt (Summary) và Thông điệp cốt lõi (Takeaway).",
      ],
    },
    {
      number: 5,
      title: "YOUR STORY, YOUR STAGE ",
      subtitle: "",
      details: [
        "Trình bày câu chuyện hoàn chỉnh một cách tự tin và lôi cuốn, không phụ thuộc vào kịch bản.",
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
            BẠN SẼ NHẬN ĐƯỢC HƠN CẢ MỘT
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-[#00a7e1]">
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

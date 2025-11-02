"use client"

import { useState } from "react"

export function CurriculumSection() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0)
  const [selected, setSelected] = useState<number | null>(null)

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
  const steps = [
    { number: 1, 
      description: "1 tiếng mỗi ngày.", 
      color: "bg-[#00a7e1]" 
    },
    {
      number: 5,
      description: "5 ngày 1 tuần.",
      color: "bg-[#00a7e1]",
    },
  ]
  const toggleModule = (number: number) => {
    setSelected(selected === number ? null : number)
  }

  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
        <div className="inline-block bg-[#00a7e1] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-2xl sm:text-3xl font-bold shadow-lg ring-4 ring-yellow-500 ring-offset-4 ring-offset-[#00a7e1]">
            Lộ trình 5+1 buổi
          </div>

        {/* Steps Section */}
        <div className="max-w-6xl mx-auto">
          {/* Step Buttons (Mobile) */}
          <div className="md:hidden flex justify-between items-center gap-2 pb-4 w-full">
  {steps.map((step, index) => (
    <div
      key={step.number}
      className="flex flex-col items-center flex-1 w-full mt-8"
    >
      <button
        onClick={() => setActiveStepIndex(index)}
        className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
          activeStepIndex === index
            ? "bg-gradient-to-br from-yellow-400 to-yellow-500 scale-105 shadow-yellow-400/40"
            : "bg-[#00a7e1] hover:scale-105"
        }`}
      >
        <span className="text-sm sm:text-base font-bold text-white">
          {activeStepIndex > index ? "✓" : step.number}
        </span>
      </button>

    </div>
  ))}
</div>
          {/* Step Buttons (Desktop) */}
          <div className="hidden md:block relative mb-16">
            {/* Thanh nền */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-[#00a7e1] rounded-full" />
            {/* Thanh tiến trình */}
            <div
              className="absolute top-8 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-700 ease-out shadow-lg shadow-yellow-400/50"
              style={{
                width: `${(activeStepIndex / (steps.length - 1)) * 100}%`,
              }}
            />
            {/* Nút step */}
            <div className="relative flex justify-between items-start">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center w-1/4">
                  <button
                    onClick={() => setActiveStepIndex(index)}
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 ${
                      activeStepIndex === index
                        ? "bg-gradient-to-br from-yellow-400 to-yellow-500 scale-125 -translate-y-2 shadow-yellow-400/50"
                        : activeStepIndex > index
                        ? "bg-gradient-to-br from-green-400 to-green-500 shadow-green-400/30"
                        : "bg-[#00a7e1] hover:from-yellow-300 hover:to-yellow-400"
                    }`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {activeStepIndex > index ? "✓" : step.number}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Detail */}
          <div className="relative ">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute right-1/2 translate-x-1/2 transition-all duration-700 max-w-2xl w-full ${
                  activeStepIndex === index
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div
                  className={`relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br ${step.color} shadow-2xl overflow-hidden transition-shadow duration-500`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl">
                        <span className="text-2xl sm:text-3xl font-bold text-white">{step.number}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">{step.description}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

          <div className="relative min-h-[200px]">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute right-1/2 translate-x-1/2 transition-all duration-700 max-w-2xl w-full ${
                  activeStepIndex === index
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
              </div>
            ))}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-7">
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

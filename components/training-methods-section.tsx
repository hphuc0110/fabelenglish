"use client"

export function TrainingMethodsSection() {
  const methods = [
    {
      title: "Kỹ thuật kể chuyện ứng dụng",
      image: "/images/training/phan-bien.webp",
    },
    {
      title: "Nâng cao năng lực ngôn ngữ",
      image: "/images/training/nghe-thuat-ke-chuyen.webp",
    },
    {
      title: "Kết nối cảm xúc & truyền cảm hứng",
      image: "/images/training/education-2.webp",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#00a7e1] to-[#67852e] relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/5 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/5 animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tiêu đề */}
        <div className="text-center mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mx-auto max-w-2xl">
            <h2 className="text-4xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Triết lý đào tạo
            </h2>
            <h2 className="text-4xl lg:text-2xl font-bold italic text-white mb-4 drop-shadow-lg">
              sẵn sàng cho mọi biến lớn
            </h2>
          </div>
        </div>

        {/* 3 Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {methods.map((method, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-white/20 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/10">
                <div className="aspect-[4/5] relative">
                  <img
                    src={method.image || "/placeholder.svg"}
                    alt={method.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay mô tả (hiện khi hover) */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex justify-center items-center p-6 text-center">
                  </div>

                  {/* Tiêu đề luôn hiển thị dưới cùng */}
                  <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-lg">
                      {method.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🌟 Phần div dưới 3 card */}
        <div className="text-center mt-8 ">
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
          Khóa học giúp nâng cao năng lực ngôn ngữ và rèn kỹ thuật kể chuyện ứng dụng, nhằm tạo kết nối cảm xúc và truyền cảm hứng trong môi trường làm việc và học thuật quốc tế
          </p>
        </div>
      </div>
    </section>
  )
}

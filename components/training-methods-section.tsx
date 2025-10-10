"use client"

export function TrainingMethodsSection() {
  const methods = [
    {
      title: "Luyện tập 1:1",
      image: "/images/training/phan-bien.webp",
      description:
        "Tối đa hóa thời gian luyện tập sales/pitching bằng tiếng Anh. Hiệu quả về thời gian cho người bận rộn, học tập trung.",
    },
    {
      title: "Framework ứng dụng",
      image: "/images/training/nghe-thuat-ke-chuyen.webp",
      description:
        "CLEAR, FABE hay PITCH giúp học viên trình bày vấn đề một cách logic, mạch lạc, có tính liên kết (2 chiều) và đảm bảo khối lượng thông tin cần truyền tải tới người nghe trong khoảng thời gian cụ thể.",
    },
    {
      title: "Cẩm nang bán hàng cá nhân hóa",
      image: "/images/training/education-2.webp",
      description:
        "Nhận 01 bộ cẩm nang bán hàng xây dựng trên chính tình huống của học viên.",
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
        <div className="text-center mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mx-auto max-w-2xl">
            <h2 className="text-4xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              CÁ NHÂN HÓA TUYỆT ĐỐI
            </h2>
            <h2 className="text-4xl lg:text-3xl font-bold italic text-white mb-4 drop-shadow-lg">
              Nội dung được điều chỉnh dựa trên thông tin và thách thức thực tế của học viên
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <p className="text-white/90 text-sm leading-relaxed">{method.description}</p>
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
      </div>
    </section>
  )
}

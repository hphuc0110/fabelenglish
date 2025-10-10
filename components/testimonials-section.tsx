export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Lý Quốc Bình",
      title: "BUSINESS CONSULTANT - LÝ QUỐC BÌNH",
      quote: "Tôi mất người nhật nhất không dám phát biểu, giờ tôi sẽ tự tin dẫn dắt các cuộc họp quốc tế.",
      journey: 'TỪ "E NGẠI" ĐẾN "DẪN DẮT CUỘC CHƠI"',
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Nguyễn Hải Đăng",
      title: "CEO - NGUYỄN HẢI ĐĂNG",
      quote: "FABLE ENGLISH Talk đã giúp tôi biến những ý tưởng không thể thành hiện thực rực rỡ.",
      journey: 'TỪ "BẤT KHẢ THI" ĐẾN "THÀNH CÔNG NGOẠN MỤC"',
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Lê Minh Hạnh",
      title: "CFO - LÊ MINH HẠNH",
      quote: "Với sự ngỗ tôi có thể thuyết trình tự tin trước các nhà đầu tư quốc tế.",
      journey: "TỪ TIN TRÌNH BẤY TÂM NHÌN TRÊN TRƯỜNG QUỐC TẾ",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Trần Thu Trang",
      title: "HR DIRECTOR TRẦN THU TRANG",
      quote: "Từ việc chỉ truyền đạt thông tin, tôi đã học cách truyền cảm hứng cho cả đội ngũ.",
      journey: 'KHÔNG CHỈ NÓI, MÀ CÒN... "TRUYỀN CẢM HỨNG"',
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D4A574] text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
            🏆 Hall of Fame
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Từ <span className="text-[#D4A574]">Khát Vọng</span> Đến <span className="text-[#D4A574]">Thành Công</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 h-full">
                <div className="aspect-video relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <h3 className="text-[#D4A574] font-bold text-lg mb-1">{testimonial.journey}</h3>
                    <p className="text-white text-sm">{testimonial.title}</p>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D4A574] flex items-center justify-center">
                        <span className="text-black font-bold text-sm">{testimonial.name.charAt(0)}</span>
                      </div>
                      <span className="text-white font-semibold">{testimonial.name}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-[#D4A574] text-2xl font-bold">💬</div>
                  <blockquote className="text-gray-300 italic text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                <div className="absolute bottom-4 right-4">
                  <div className="w-8 h-8 rounded-full bg-[#D4A574] flex items-center justify-center">
                    <span className="text-black font-bold text-xs">▶</span>
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

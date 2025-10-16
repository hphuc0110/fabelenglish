"use client"

import Image from "next/image"

const hallOfFame = [
  {
    id: 1,
    name: "Lý Quốc Bình",
    achievement:
      "Từ một người nhút nhát không dám phát biểu, giờ tôi tự tin dẫn dắt các cuộc họp quốc tế.",
    image: "/images/ly-quoc-binh.webp",
  },
  {
    id: 2,
    name: "Nguyễn Hải Đăng",
    achievement:
      "GoTalk đã giúp tôi biến ý tưởng 'không thể' thành hiện thực rực rỡ.",
    image: "/images/nguyen-hai-dang.webp",
  },
  {
    id: 3,
    name: "Lê Minh Hạnh",
    achievement:
      "Với đội ngũ tôi có thể thuyết trình tự tin trước các nhà đầu tư quốc tế.",
    image: "/images/le-minh-hanh.webp",
  },
  {
    id: 4,
    name: "Trần Thu Trang",
    achievement:
      "Từ việc truyền đạt thông tin, tôi đã học cách truyền cảm hứng cho cả đội ngũ.",
    image: "/images/tran-thu-trang.webp",
  },
]

export function HallOfFameSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        {/* Tiêu đề */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 
                     bg-gradient-to-r from-green-400 via-blue-500 to-red-500 
                     bg-clip-text text-transparent drop-shadow-lg tracking-wide uppercase"
        >
          Hall of Fame
        </h2>

        <p className="text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto text-base sm:text-sm leading-relaxed">
          Tôn vinh những học viên và cá nhân xuất sắc đã đạt được thành tựu vượt bậc.
        </p>

        {/* Grid responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {hallOfFame.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 sm:p-6"
            >
              {/* Ảnh responsive */}
              <div className="w-full aspect-square mx-auto overflow-hidden mb-4 sm:mb-6 border-4 border-blue-400 shadow-md rounded-xl">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold">{person.name}</h3>
              <p className="text-gray-500 mt-2 text-sm sm:text-base leading-snug">
                {person.achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

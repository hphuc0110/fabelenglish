"use client"

import { ChevronLeft, ChevronRight, Ship as Swipe } from "lucide-react"
import { useRef } from "react"

const experts = [
  {
    id: 1,
    name: "James McGaughran",
    title: "Chuyên gia",
    specialization: "Business English & Leadership Training",
    experience: "15+ năm kinh nghiệm quốc tế",
    description:
      "Chuyên gia hàng đầu trong lĩnh vực đào tạo tiếng Anh doanh nghiệp với kinh nghiệm làm việc tại tập đoàn đa quốc gia.",
    image: "/images/teachers/james.webp",
  },
  {
    id: 2,
    name: "Sandra Schneiderman",
    title: "Chuyên gia",
    specialization: "International Communication & Cross-cultural Training",
    experience: "12+ năm kinh nghiệm",
    description: "Chuyên gia giao tiếp quốc tế với chuyên môn sâu về văn hóa doanh nghiệp và kỹ năng thuyết trình.",
    image: "/images/teachers/sandra.webp",
  },
  {
    id: 3,
    name: "Julien Psomas",
    title: "Chuyên gia",
    specialization: "Digital Marketing & Modern Business English",
    experience: "10+ năm kinh nghiệm",
    description:
      "Chuyên gia marketing số và tiếng Anh thương mại hiện đại, giúp doanh nghiệp thích ứng với thời đại 4.0.",
    image: "/images/teachers/julian.webp",
  },
]

let teachers = [
  {
    id: 1,
    name: "Nguyễn Thị Chung Anh",
    title: "Giáo viên",
    specialization: "IELTS & Academic English",
    experience: "8+ năm kinh nghiệm",
    description:
      "Giáo viên trẻ tài năng với niềm đam mê truyền cảm hứng học tiếng Anh, chuyên về IELTS và tiếng Anh học thuật.",
    image: "/images/teachers/chung-anh.webp",
  },
  {
    id: 2,
    name: "Nguyễn Thu Hằng",
    title: "Giáo viên",
    specialization: "IELTS & Multi-level Teaching",
    experience: "7+ năm kinh nghiệm",
    description:
      "Hơn 7 năm kinh nghiệm giảng dạy tiếng Anh đa cấp độ (IELTS, Cambridge). Đào tạo hơn 70 giáo viên tiếng Anh, hơn 500 người đi làm tại các ngành nghề.",
    image: "/images/teachers/thu-hang.webp",
  },
  {
    id: 3,
    name: "Cao Hoàng Hà Anh",
    title: "Giáo viên",
    specialization: "IELTS & Academic English",
    experience: "5+ năm kinh nghiệm",
    description:
      "Hơn 5 năm giảng dạy IELTS, hơn 2 năm giảng dạy tiếng Anh học thuật cho học sinh Trung học và tiếng Anh chuyên ngành cho người đi làm.",
    image: "/images/teachers/cao-ha-anh.webp",
  },
    {
    id: 4,
    name: "Nguyễn Quý Đạt",
    title: "Giáo viên",
    specialization: "TOEIC & Business English",
    experience: "6+ năm kinh nghiệm",
    description:
      "Hơn 6 năm nghiên cứu giảng dạy TOEIC, hơn 4 năm kinh nghiệm giảng dạy tiếng Anh giao tiếp cho người đi làm.",
    image: "/images/teachers/quy-dat.jpg",
  },
  // {
  //   id: 5,
  //   name: "Phan Ngọc Đăng Tâm",
  //   title: "Giáo viên",
  //   specialization: "Conversation & Pronunciation",
  //   experience: "6+ năm kinh nghiệm",
  //   description: "Chuyên gia về giao tiếp và phát âm, giúp học viên tự tin trong mọi tình huống giao tiếp tiếng Anh.",
  //   image: "/images/teachers/dang-tam.jpg",
  // },
  // {
  //   id: 6,
  //   name: "Vũ Trần Bảo Ngọc",
  //   title: "Giáo viên",
  //   specialization: "Conversation & Pronunciation",
  //   experience: "4+ năm kinh nghiệm",
  //   description: "Giáo viên trẻ năng động với khả năng truyền cảm hứng học tập cho mọi lứa tuổi, đặc biệt là trẻ em.",
  //   image: "/images/teachers/bao-ngoc.jpg",
  // },
  {
    id: 7,
    name: "Phạm Kim Cương",
    title: "Giáo viên",
    specialization: "Conversation & Pronunciation",
    experience: "8+ năm kinh nghiệm",
    description: "Giáo viên giàu kinh nghiệm trong lĩnh vực tiếng Anh thương mại và kỹ năng viết, từng làm việc tại các công ty quốc tế.",
    image: "/images/teachers/kim-cuong.jpg",
  },
  

  
  // {
  //   id: 5,
  //   name: "Phùng Yến Linh",
  //   title: "Giáo viên",
  //   specialization: "Conversation & Pronunciation",
  //   experience: "4+ năm kinh nghiệm",
  //   description: "Chuyên gia về giao tiếp và phát âm, giúp học viên tự tin trong mọi tình huống giao tiếp tiếng Anh.",
  //   image: "/images/teachers/yen-linh.webp",
  // },
  // {
  //   id: 6,
  //   name: "Vũ Thị Khánh Vi",
  //   title: "Giáo viên",
  //   specialization: "Business English & Writing",
  //   experience: "6+ năm kinh nghiệm",
  //   description:
  //     "Giáo viên giàu kinh nghiệm trong lĩnh vực tiếng Anh thương mại và kỹ năng viết, từng làm việc tại các công ty quốc tế.",
  //   image: "/images/teachers/vi.webp",
  // },
  // {
  //   id: 7,
  //   name: "Vũ Bình Dương",
  //   title: "Giáo viên",
  //   specialization: "General English & Kids English",
  //   experience: "3+ năm kinh nghiệm",
  //   description: "Giáo viên trẻ năng động với khả năng truyền cảm hứng học tập cho mọi lứa tuổi, đặc biệt là trẻ em.",
  //   image: "/images/teachers/binh-duong.webp",
  // },
]

// ✅ Sắp xếp để id 1,2,3 lên đầu
teachers = teachers.sort((a, b) => {
  const priority = [1, 2, 3]
  const aIndex = priority.includes(a.id) ? priority.indexOf(a.id) : Number.POSITIVE_INFINITY
  const bIndex = priority.includes(b.id) ? priority.indexOf(b.id) : Number.POSITIVE_INFINITY
  return aIndex - bIndex
})

export default function ExpertTeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const firstItem = scrollRef.current.firstChild as HTMLElement
      const itemWidth = firstItem ? firstItem.clientWidth + 24 : 0
      const { scrollLeft } = scrollRef.current
      const scrollTo = direction === "left" ? scrollLeft - itemWidth : scrollLeft + itemWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section id="instructors" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00a7e1] mb-4">Đội ngũ giảng viên </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f17720] mb-4">&</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00a7e1] mb-4">chuyên gia</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Đội ngũ giảng viên & chuyên gia HLE với nhiều năm kinh nghiệm giảng dạy, kết hợp phương pháp học tập thực
            dụng và cá nhân hóa 1-1, giúp học viên tháo gỡ những khó khăn của riêng mình và tiến bộ rõ rệt trong quá
            trình học.
          </p>
        </div>

        {/* Experts */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl p-6 md:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Đội ngũ <span className="text-[#00a7e1]">chuyên gia</span>
              </h3>
            </div>
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible">
                {experts.map((expert) => (
                  <div
                    key={expert.id}
                    className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 hover:scale-105 transition-transform duration-300 flex-shrink-0 w-80 md:w-auto"
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 mx-auto max-w-[300px]">
                      <img
                        src={expert.image || "/placeholder.svg"}
                        alt={expert.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-[#f17720] text-sm font-medium mb-1">{expert.title}</p>
                      <h4 className="font-bold text-xl text-black mb-2">{expert.name}</h4>
                      <p className="text-gray-700 text-sm mb-3">{expert.specialization}</p>
                      <p className="text-gray-500 text-xs mb-4">{expert.experience}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{expert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center mt-4 md:hidden">
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-sm text-gray-600">
                  <Swipe className="w-4 h-4" />
                  <span>Lướt ngang để xem thêm chuyên gia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teachers */}
        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-2xl relative">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Đội ngũ <span className="text-[#00a7e1]">giáo viên</span>
            </h3>
          </div>

          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Xem giáo viên trước"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Xem giáo viên tiếp theo"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div
            ref={scrollRef}
            className="flex flex-nowrap gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-gradient-to-br from-green-50 to-purple-100 rounded-xl p-6 hover:scale-105 transition-transform duration-300 flex-shrink-0 w-80 snap-center"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 mx-auto max-w-[300px]">
                  <img
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-[#00a7e1] text-sm font-medium mb-1">{teacher.title}</p>
                  <h4 className="font-bold text-xl text-black mb-2">{teacher.name}</h4>
                  <p className="text-gray-700 text-sm mb-2 font-medium">{teacher.specialization}</p>
                  <p className="text-gray-500 text-xs mb-3">{teacher.experience}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{teacher.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-purple-50 px-6 py-3 rounded-full text-sm text-gray-600 shadow-sm">
              <Swipe className="w-4 h-4 text-green-500" />
              <span className="font-medium">Lướt ngang để khám phá thêm giáo viên</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export { ExpertTeamSection }

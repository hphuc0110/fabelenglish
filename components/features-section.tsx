import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Video, Users, Award, Clock, Headphones } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Giao Tiếp Thực Tế",
    description: "Luyện tập với các tình huống giao tiếp thực tế trong cuộc sống và công việc",
  },
  {
    icon: Video,
    title: "Học Trực Tuyến",
    description: "Học mọi lúc mọi nơi với nền tảng học trực tuyến hiện đại và tiện lợi",
  },
  {
    icon: Users,
    title: "Giảng Viên Bản Ngữ",
    description: "Đội ngũ giảng viên bản ngữ và Việt Nam giàu kinh nghiệm",
  },
  {
    icon: Award,
    title: "Chứng Chỉ Uy Tín",
    description: "Nhận chứng chỉ được công nhận sau khi hoàn thành khóa học",
  },
  {
    icon: Clock,
    title: "Linh Hoạt Thời Gian",
    description: "Sắp xếp lịch học phù hợp với thời gian biểu của bạn",
  },
  {
    icon: Headphones,
    title: "Hỗ Trợ 24/7",
    description: "Đội ngũ hỗ trợ học tập luôn sẵn sàng giúp đỡ bạn",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">Tại Sao Chọn FABLE ENGLISH ?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Chúng tôi cam kết mang đến trải nghiệm học tiếng Anh tốt nhất với phương pháp hiện đại và hiệu quả
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-[#00a7e1]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#00a7e1] transition-colors duration-300">
                    <Icon className="h-8 w-8 text-[#00a7e1] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

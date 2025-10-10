import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, ArrowRight } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Tiếng Anh Giao Tiếp Cơ Bản",
    description: "Khóa học dành cho người mới bắt đầu, tập trung vào các tình huống giao tiếp hàng ngày",
    image: "/placeholder.svg?height=200&width=300",
    level: "Cơ bản",
    duration: "3 tháng",
    students: "2,500+",
    rating: 4.8,
    price: "1,500,000đ",
    features: ["Luyện phát âm", "Từ vựng thực tế", "Giao tiếp hàng ngày"],
  },
  {
    id: 2,
    title: "Tiếng Anh Thương Mại",
    description: "Phát triển kỹ năng tiếng Anh chuyên nghiệp cho môi trường công sở",
    image: "/placeholder.svg?height=200&width=300",
    level: "Trung cấp",
    duration: "4 tháng",
    students: "1,800+",
    rating: 4.9,
    price: "2,200,000đ",
    features: ["Email chuyên nghiệp", "Thuyết trình", "Đàm phán"],
  },
  {
    id: 3,
    title: "Luyện Thi IELTS",
    description: "Chuẩn bị toàn diện cho kỳ thi IELTS với phương pháp hiệu quả",
    image: "/placeholder.svg?height=200&width=300",
    level: "Nâng cao",
    duration: "6 tháng",
    students: "3,200+",
    rating: 4.9,
    price: "3,500,000đ",
    features: ["4 kỹ năng IELTS", "Mock test", "Chấm chữa chi tiết"],
  },
  {
    id: 4,
    title: "Luyện Thi TOEIC",
    description: "Đạt điểm cao TOEIC với chiến lược học tập khoa học",
    image: "/placeholder.svg?height=200&width=300",
    level: "Trung cấp",
    duration: "4 tháng",
    students: "2,100+",
    rating: 4.7,
    price: "2,800,000đ",
    features: ["Listening & Reading", "Bài test thực tế", "Kỹ thuật làm bài"],
  },
]

export function CoursesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Khóa Học Nổi Bật Tại FABLE ENGLISH 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Chọn khóa học phù hợp với trình độ và mục tiêu của bạn. Tất cả khóa học đều được thiết kế bởi các chuyên gia
            giáo dục hàng đầu.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-[#00a7e1] hover:bg-[#00a7e1]">{course.level}</Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-[#00a7e1] transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 line-clamp-2">{course.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 bg-[#00a7e1] rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-[#00a7e1]">{course.price}</span>
                  </div>
                  <Button className="w-full bg-[#00a7e1] hover:bg-[#00a7e1]/90 text-white group">
                    Đăng ký ngay
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-[#00a7e1] text-[#00a7e1] hover:bg-[#00a7e1] hover:text-white bg-transparent"
          >
            Xem tất cả khóa học
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

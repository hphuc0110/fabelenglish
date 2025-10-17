import Image from "next/image"
import Link from "next/link"
import { TrendingUp, Clock, Users } from "lucide-react"

const popularPosts = [
    {
      id: "star-method",
      title: "Khi người dạy biết kể – tri thức tự tìm đường lan tỏa",
      image: "/images/1.png",
      category: "Phỏng vấn",
      readTime: "5 phút đọc",
    },
    {
      id: "experience-storytelling",
      title: "Storytelling trong đào tạo – nghệ thuật khiến người học muốn lắng nghe",
      image: "/images/2.png",
      category: "Kỹ năng giao tiếp",
      readTime: "6 phút đọc",
    },
    {
      id: "tell-me-about-yourself",
      title: "Từ dữ liệu đến cảm xúc – bí quyết khiến bài giảng ‘sống’ hơn",
      image: "/images/3.png",
      category: "Phỏng vấn",
      readTime: "7 phút đọc",
    },
]

const categories = [
  { name: "Phỏng vấn", count: 3 },
  { name: "Kỹ năng giao tiếp", count: 2 },
  { name: "Phát triển sự nghiệp", count: 1 },
  { name: "Tiếng Anh thương mại", count: 4 },
  { name: "Presentation Skills", count: 2 },
]

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Popular Posts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-bold text-gray-900">Bài viết phổ biến</h3>
        </div>

        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group block">
              <div className="flex gap-3">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2 text-sm">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

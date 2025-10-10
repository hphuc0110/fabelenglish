import { BlogCard } from "./blog-card"

const blogPosts = [
  {
    id: "star-method",
    title: "Thời Đại Của Sự Thuyết Phục: Khi Ngôn Ngữ Trở Thành Lợi Thế Cạnh Tranh",
    image: "/images/1.jpg",
    category: "Phỏng vấn",
    readTime: "5 phút đọc",
  },
  {
    id: "experience-storytelling",
    title: "Tiếng Anh – Cầu Nối Đưa Doanh Nghiệp Việt Ra Thế Giới",
    image: "/images/2.jpg",
    category: "Kỹ năng giao tiếp",
    readTime: "6 phút đọc",
  },
  {
    id: "tell-me-about-yourself",
    title: "Vai Trò Chiến Lược Của Tiếng Anh Trong Kinh Doanh Toàn Cầu",
    image: "/images/3.jpg",
    category: "Phỏng vấn",
    readTime: "7 phút đọc",
  },
]

export function BlogGrid() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Bài viết mới nhất</h2>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Tất cả
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            Phỏng vấn
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            Kỹ năng giao tiếp
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

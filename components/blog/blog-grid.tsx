import { BlogCard } from "./blog-card"

const blogPosts = [
  {
    id: "star-method",
    title: "Khi người dạy biết kể – tri thức tự tìm đường lan tỏa",
    image: "/images/1.png",
    readTime: "5 phút đọc",
  },
  {
    id: "experience-storytelling",
    title: "Storytelling trong đào tạo – nghệ thuật khiến người học muốn lắng nghe",
    image: "/images/2.png",
    readTime: "6 phút đọc",
  },
  {
    id: "tell-me-about-yourself",
    title: "Từ dữ liệu đến cảm xúc – bí quyết khiến bài giảng ‘sống’ hơn",
    image: "/images/3.png",
    readTime: "7 phút đọc",
  },
  {
    id: "lanh-dao-thoi-ai",
    title: "Storytelling – kỹ năng mới của người lãnh đạo thời đại AI",
    image: "/images/3.png",
    readTime: "5 phút đọc",
  },
  {
    id: "mua-hang",
    title: "Storytelling – khiến người khác mua bằng niềm tin",
    image: "/images/5.png",
    readTime: "9 phút đọc",
  },
  {
    id: "noi-it-cham-sau",
    title: "Kể chuyện để dẫn dắt – nói ít, chạm sâu",
    image: "/images/6.png",
    readTime: "8 phút đọc",
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

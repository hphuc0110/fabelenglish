"use client"

import Link from "next/link"
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPostProps {
  post: {
    title: string
    content: string
    date: string
    category: string
    readTime: string
  }
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white">
      {/* Hero Section (chỉ tiêu đề + meta, không ảnh) */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {post.category}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("vi-VN")}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại Blog
            </Link>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Share2 className="w-4 h-4" />
              Chia sẻ
            </Button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  // đoạn văn
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/\n/g, "<br>")
                  .replace(/^/, "<p>")
                  .replace(/$/, "</p>")
                  // heading H2
                  .replace(
                    /## (.*?)<\/p>/g,
                    '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>'
                  )
                  // heading H3
                  .replace(
                    /### (.*?)<\/p>/g,
                    '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">$1</h3>'
                  )
                  // in đậm
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  // list
                  .replace(/- (.*?)<br>/g, "<li>$1</li>")
                  .replace(/<li>/g, '<ul class="list-disc pl-6 mb-4"><li>')
                  .replace(/<\/li>(?!<li>)/g, "</li></ul>"),
              }}
            />
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Muốn học thêm kỹ năng giao tiếp tiếng Anh?
              </h3>
              <p className="text-gray-700 mb-4">
                Tham gia các khóa học chuyên sâu tại FABLE ENGLISH Talk để nâng cao kỹ năng
                phỏng vấn và giao tiếp tiếng Anh chuyên nghiệp.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Đăng ký tư vấn miễn phí
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

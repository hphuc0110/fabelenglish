"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.")
    setFormData({ name: "", email: "", phone: "", program: "", message: "" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
 <section
  className="py-20 relative overflow-hidden"
  style={{
    background: "linear-gradient(to bottom right, #31326F, #A8FBD3)",
  }}
>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold mb-8 animate-in slide-in-from-left duration-700">
                Liên hệ với chúng tôi
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group animate-in slide-in-from-left duration-700 delay-200">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold">0325 194 889</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group animate-in slide-in-from-left duration-700 delay-300">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold">support@honglinheducation.vn</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group animate-in slide-in-from-left duration-700 delay-400">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 mt-1">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold leading-relaxed">
                    1G Trần Quang Diệu, Ô Chợ Dừa, Đống Đa, Hà Nội
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-in slide-in-from-right duration-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="w-full border-gray-300 focus:border-[#00a7e1] focus:ring-[#00a7e1] transition-all duration-300"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="w-full border-gray-300 focus:border-[#00a7e1] focus:ring-[#00a7e1] transition-all duration-300"
                  placeholder="Nhập email của bạn"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  SĐT <span className="text-red-500">*</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="w-full border-gray-300 focus:border-[#00a7e1] focus:ring-[#00a7e1] transition-all duration-300"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Nội dung cần tư vấn
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="w-full border-gray-300 focus:border-[#00a7e1] focus:ring-[#00a7e1] transition-all duration-300 resize-none"
                  placeholder="Nhập nội dung cần tư vấn..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Gửi đăng ký
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

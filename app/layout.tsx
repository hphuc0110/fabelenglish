import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "FABLE ENGLISH - Học Tiếng Anh Hiệu Quả",
  description:
    "Trung tâm tiếng Anh FABLE ENGLISH - Phương pháp học tiếng Anh giao tiếp thực tế, giúp bạn tự tin nói tiếng Anh trong mọi tình huống",
  generator: "FABLE ENGLISH Education Platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

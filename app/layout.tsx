import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { CursorGlow } from "@/components/cursor-glow"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CRESA - Student Development Club",
  description: "Official website of CRESA student development club",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <CursorGlow />
        <Header />
        {children}
      </body>
    </html>
  )
}



import './globals.css'
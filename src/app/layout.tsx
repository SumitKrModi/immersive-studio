import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Zenvy WebTech | Defining Next-Gen Web",
  description: "Boutique web services for category-disrupting brands. SEO, Development, and High-Converting Experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased selection:bg-indigo-500/30">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
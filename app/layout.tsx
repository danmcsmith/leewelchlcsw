import type React from "react"
import type { Metadata } from "next"
import { EB_Garamond as Garamond, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Define fonts
const garamond = Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
  weight: ["400", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lee Welch, LCSW | Depth-Oriented Psychotherapy",
  description:
    "Lee Welch is a licensed psychotherapist with nearly 30 years of experience in depth-oriented, Jungian-inspired psychological work. Specializing in individual and couples therapy, Lee offers a compassionate, insightful approach to personal growth and healing.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} ${openSans.variable} font-sans bg-background-base min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react"
import { ThemeProvider } from "../components/ThemeProvider"
import ThemePicker from "../components/ThemePicker"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hiragana Hero (ひらがなヒーロー)",
  description: "Become a Hiragana Hero! Learn and master hiragana characters with fun quizzes and games!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className} bg-red-50`}>
          <div className="min-h-screen flex flex-col">
            <header className="bg-primary text-white p-4">
              <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold hover:text-secondary">
                  Hiragana Hero <span className="text-xl">ひらがなヒーロー</span>
                </Link>
                <nav className="flex items-center space-x-4">
                  <ul className="flex space-x-4">
                    <li>
                      <Link href="/hiragana-quiz" className="hover:underline">
                        Character Challenge
                      </Link>
                    </li>
                    <li>
                      <Link href="/sentence-reading" className="hover:underline">
                        Sentence Decoder
                      </Link>
                    </li>
                  </ul>
                  <ThemePicker />
                </nav>
              </div>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
            <footer className="bg-primary text-white p-4 text-center">
              <p>&copy; 2025 Hiragana Hero (ひらがなヒーロー). All rights reserved.</p>
            </footer>
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}


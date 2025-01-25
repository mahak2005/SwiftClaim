import "@/styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SwiftClaim",
  description: "Streamlined Insurance Claims Processing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white">
          {children}
        </div>
      </body>
    </html>
  )
}
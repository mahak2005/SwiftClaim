import Link from "next/link"
import { UserNav } from "@/components/user-nav"
import { Chatbot } from "@/components/chatbot"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const navItems = [
  {
    title: "Home",
    href: "/dashboard",
  },
  {
    title: "Claims",
    href: "/dashboard/claims",
  },
  {
    title: "Documents",
    href: "/dashboard/documents",
  },
  {
    title: "Help Center",
    href: "/dashboard/help",
  },
  {
    title: "Fraud Detection",
    href: "/admin/fraud-detection",
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
  },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">SwiftClaim</h1>
          </div>
          <nav className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <UserNav />
        </div>
      </header>
      <main className="flex-1 container py-6">{children}</main>
      <Chatbot />
    </div>
  )
}


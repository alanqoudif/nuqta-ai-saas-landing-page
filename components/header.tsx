"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    href: "#",
    dropdown: true,
    items: [
      { name: "Private AI", href: "/solutions/private-ai" },
      { name: "AI Site Builder", href: "/solutions/ai-site-builder" },
      { name: "WhatsApp Channels", href: "/solutions/whatsapp-channels" },
      { name: "Multi-Agent System", href: "/solutions/multi-agent-system" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 w-full border-b border-purple-500/20">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-800 to-blue-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">Nuqta AI</span>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 relative rounded-full overflow-hidden group-hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-shadow duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nuqtalogo-ajIHoDhaicUxulxFRexCWPNPVLuIuf.webp"
                  alt="Nuqta AI Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400 group-hover:from-purple-400 group-hover:to-blue-300 transition-all duration-300">
                Nuqta AI
              </span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-purple-500 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="text-sm font-semibold leading-6 hover:text-purple-400 flex items-center gap-1 transition-colors duration-200 relative group">
                    {item.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400 group-hover:w-full transition-all duration-300"></div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-background/95 backdrop-blur-md border border-purple-500/20"
                >
                  {item.items?.map((subItem) => (
                    <DropdownMenuItem
                      key={subItem.name}
                      asChild
                      className="hover:bg-purple-500/10 focus:bg-purple-500/10"
                    >
                      <Link href={subItem.href} className="w-full">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 hover:text-purple-400 transition-colors duration-200 relative group",
                  pathname === item.href ? "text-purple-500" : "",
                )}
              >
                {item.name}
                <div
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-300",
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full",
                  )}
                ></div>
              </Link>
            ),
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            variant="default"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          >
            <Link href="/early-access">Early Access</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background/95 backdrop-blur-md px-6 py-6 sm:max-w-sm border-l border-purple-500/20"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 group" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Nuqta AI</span>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 relative rounded-full overflow-hidden group-hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-shadow duration-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nuqtalogo-ajIHoDhaicUxulxFRexCWPNPVLuIuf.webp"
                      alt="Nuqta AI Logo"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
                    Nuqta AI
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-purple-500 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) =>
                    item.dropdown ? (
                      <div key={item.name} className="space-y-2">
                        <div className="text-sm font-semibold leading-6 px-3 py-2 text-purple-500">{item.name}</div>
                        <div className="pl-4 space-y-2">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 hover:bg-purple-500/10 transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm font-semibold leading-6 hover:bg-purple-500/10 transition-colors duration-200",
                          pathname === item.href ? "bg-purple-500/10 text-purple-500" : "",
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ),
                  )}
                </div>
                <div className="py-6">
                  <Button
                    asChild
                    variant="default"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                  >
                    <Link href="/early-access" onClick={() => setMobileMenuOpen(false)}>
                      Early Access
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  )
}

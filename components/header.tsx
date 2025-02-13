"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CartItem } from "../app/api/cart/route"
import { useColorScheme } from "@/contexts/ColorSchemeContext"

export function Header() {
  const [cartItemsCount, setCartItemsCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { colorScheme } = useColorScheme()

  useEffect(() => {
    const fetchCartItemsCount = async () => {
      const response = await fetch("/api/cart")
      const cartItems: CartItem[] = await response.json()
      const count = cartItems.reduce((sum, item) => sum + item.quantity, 0)
      setCartItemsCount(count)
    }

    fetchCartItemsCount()
    const intervalId = setInterval(fetchCartItemsCount, 5000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <header
      className="fixed w-full z-50"
      style={{ backgroundColor: `hsla(var(--main-bg), 0.8)`, backdropFilter: "blur(10px)" }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center" style={{ color: `hsl(var(--text))` }}>
          <span style={{ color: `hsl(var(--cta))` }} className="mr-1">
            Class
          </span>
          <span
            style={{ backgroundColor: `hsl(var(--cta))`, color: `hsl(var(--main-bg))` }}
            className="px-2 py-1 rounded"
          >
            First
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {["Home", "Products", "Blog", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="transition-colors hover:text-opacity-80"
                  style={{ color: `hsl(var(--text))` }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center">
          <Link href="/cart">
            <Button
              variant="outline"
              size="icon"
              className="relative mr-2"
              style={{ borderColor: `hsl(var(--text))`, color: `hsl(var(--text))` }}
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemsCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  style={{ backgroundColor: `hsl(var(--cta))`, color: `hsl(var(--main-bg))` }}
                >
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/account">
            <Button
              variant="outline"
              className="mr-2"
              style={{ borderColor: `hsl(var(--text))`, color: `hsl(var(--text))` }}
            >
              Account
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: `hsl(var(--text))` }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden" style={{ backgroundColor: `hsl(var(--main-bg))` }}>
          <ul className="flex flex-col space-y-2 p-4">
            {["Home", "Products", "Blog", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block py-2 transition-colors hover:text-opacity-80"
                  style={{ color: `hsl(var(--text))` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}


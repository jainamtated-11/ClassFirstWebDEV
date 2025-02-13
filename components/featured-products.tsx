"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Premium Notebook", price: 24.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Fountain Pen Set", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Study Planner", price: 14.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Ergonomic Pencil Case", price: 34.99, image: "/placeholder.svg?height=200&width=200" },
]

export function FeaturedProducts() {
  const [loading, setLoading] = useState<number | null>(null)

  const addToCart = async (product: (typeof products)[0]) => {
    setLoading(product.id)
    try {
      await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...product, quantity: 1 }),
      })
      alert(`${product.name} added to cart!`)
    } catch (error) {
      console.error("Error adding to cart:", error)
      alert("Failed to add item to cart. Please try again.")
    } finally {
      setLoading(null)
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden transition-transform duration-300 hover:scale-105 bg-white"
            >
              <CardHeader className="p-0">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold mb-2">{product.name}</CardTitle>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                  onClick={() => addToCart(product)}
                  disabled={loading === product.id}
                >
                  {loading === product.id ? "Adding..." : "Add to Cart"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


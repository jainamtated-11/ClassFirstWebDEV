"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

const products = {
  notebooks: [
    {
      id: 1,
      name: "Classic Leather Notebook",
      price: 24.99,
      image: "/placeholder.svg?height=600&width=600",
      description: "A premium leather-bound notebook perfect for journaling or sketching.",
    },
    // Add more notebook products...
  ],
  "pens-pencils": [
    {
      id: 1,
      name: "Fountain Pen Set",
      price: 49.99,
      image: "/placeholder.svg?height=600&width=600",
      description: "A luxurious fountain pen set for the discerning writer.",
    },
    // Add more pen and pencil products...
  ],
  // Add products for other categories...
}

export default function ProductPage({ params }: { params: { category: string; productId: string } }) {
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const { toast } = useToast()

  const categoryProducts = products[params.category as keyof typeof products] || []
  const product = categoryProducts.find((p) => p.id === Number.parseInt(params.productId))

  if (!product) {
    notFound()
  }

  const addToCart = async () => {
    setIsAddingToCart(true)
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to add item to cart")
      }

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      })
    } catch (error) {
      console.error("Error adding to cart:", error)
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsAddingToCart(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-2xl text-gray-600">${product.price.toFixed(2)}</p>
              <p className="text-gray-600">{product.description}</p>
              <Button
                size="lg"
                className="bg-[#FF6F61] hover:bg-[#E55A4D] text-white"
                onClick={addToCart}
                disabled={isAddingToCart}
              >
                {isAddingToCart ? "Adding..." : "Add to Cart"}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


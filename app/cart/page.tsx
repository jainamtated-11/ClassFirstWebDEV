"use client"

import { useCart } from "@/contexts/CartContext"
import Header from "@/components/Header"
import Link from "next/link"

export default function CartPage() {
  const { cart, removeFromCart, getCartTotal } = useCart()

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">
                      Quantity: {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</p>
              <Link
                href="/checkout"
                className="mt-4 inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  )
}


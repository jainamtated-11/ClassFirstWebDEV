"use client"

import { useState, useEffect } from "react"
import { useCart } from "@/contexts/CartContext"
import { useAuth } from "@clerk/nextjs"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "@/components/CheckoutForm"
import Header from "@/components/Header"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("")
  const { getCartTotal, cart } = useCart()
  const { isSignedIn } = useAuth()

  useEffect(() => {
    if (!isSignedIn) {
      // Redirect to sign-in page if not authenticated
      window.location.href = "/sign-in"
      return
    }

    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: getCartTotal() }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [isSignedIn, getCartTotal])

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}
      </main>
    </div>
  )
}


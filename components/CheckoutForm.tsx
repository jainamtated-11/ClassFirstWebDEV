"use client"

import { useState, type React } from "react"
import { useCart } from "@/contexts/CartContext"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const { clearCart } = useCart()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmation`,
      },
    })

    if (stripeError) {
      setError(stripeError.message ?? "An unexpected error occurred.")
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      clearCart()
      // You can add additional logic here, such as creating an order in your database
    }

    setIsProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {error && <div className="text-red-500 mt-4">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  )
}


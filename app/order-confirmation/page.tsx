import Header from "@/components/Header"
import Link from "next/link"

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
        <p className="mb-4">Thank you for your purchase! Your order has been successfully placed.</p>
        <Link href="/orders" className="text-blue-500 hover:underline">
          View your order history
        </Link>
      </main>
    </div>
  )
}


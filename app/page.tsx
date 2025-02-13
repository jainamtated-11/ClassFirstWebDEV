import Header from "@/components/Header"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Welcome to our E-commerce Store</h1>
        <p className="mb-6">Discover our amazing products and shop with ease.</p>
        <Link href="/products" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Shop Now
        </Link>
      </main>
    </div>
  )
}


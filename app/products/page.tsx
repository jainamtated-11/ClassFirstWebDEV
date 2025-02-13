import Header from "@/components/Header"
import prisma from "@/lib/prisma"
import ProductCard from "@/components/ProductCard"

export default async function ProductsPage() {
  const products = await prisma.product.findMany()

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}


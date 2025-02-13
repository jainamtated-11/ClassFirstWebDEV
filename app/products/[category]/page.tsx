import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const categories = ["notebooks", "pens-pencils", "planners", "desk-accessories", "art-supplies", "greeting-cards"]

const products = {
  notebooks: [
    { id: 1, name: "Classic Leather Notebook", price: 24.99, image: "/placeholder.svg?height=300&width=400" },
    { id: 2, name: "Recycled Paper Journal", price: 14.99, image: "/placeholder.svg?height=300&width=400" },
    { id: 3, name: "Dotted Grid Notebook", price: 19.99, image: "/placeholder.svg?height=300&width=400" },
    // Add more notebook products...
  ],
  "pens-pencils": [
    { id: 1, name: "Fountain Pen Set", price: 49.99, image: "/placeholder.svg?height=300&width=400" },
    { id: 2, name: "Mechanical Pencil Pack", price: 12.99, image: "/placeholder.svg?height=300&width=400" },
    { id: 3, name: "Calligraphy Pen Set", price: 34.99, image: "/placeholder.svg?height=300&width=400" },
    // Add more pen and pencil products...
  ],
  // Add products for other categories...
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  if (!categories.includes(params.category)) {
    notFound()
  }

  const categoryProducts = products[params.category as keyof typeof products] || []
  const categoryName = params.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-r from-[#f9f5f0] to-[#fdf4f2] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">{categoryName}</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Explore our collection of premium {categoryName.toLowerCase()}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <Link href={`/products/${params.category}/${product.id}`} key={product.id} className="group">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


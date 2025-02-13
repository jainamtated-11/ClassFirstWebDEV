import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Stationery Trends for 2024",
    excerpt: "Discover the latest stationery trends that are taking the world by storm...",
    date: "2024-03-01",
  },
  {
    id: 2,
    title: "5 Study Hacks to Boost Your Productivity",
    excerpt: "Learn how to maximize your study time with these proven productivity techniques...",
    date: "2024-02-15",
  },
  {
    id: 3,
    title: "The Rise of Sustainable Stationery",
    excerpt: "Explore how the stationery industry is embracing eco-friendly practices...",
    date: "2024-01-30",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Stay up-to-date with the latest stationery trends, study tips, and sustainability efforts.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link href={`/blog/${post.id}`} className="text-purple-600 hover:text-purple-700 font-semibold">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


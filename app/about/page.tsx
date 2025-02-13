import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F5F0]">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-r from-[#F9F5F0] to-[#FDE8E4] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Crafting beautiful stationery experiences since 1990
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bookimage.jpg-e4GhqIuZswbCMgfKdMMvh1oyuvVJux.webp"
                  alt="Our stationery collection"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FADCD9] rounded-full opacity-50 -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F8D0B0] rounded-full opacity-50 -z-10"></div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">Passionate About Quality</h2>
                <p className="text-gray-600">
                  At ClassFirst, we believe that the right stationery can inspire creativity and enhance productivity.
                  Our journey began with a simple passion for beautiful paper products and has grown into a curated
                  collection of premium stationery items.
                </p>
                <p className="text-gray-600">
                  Every product in our collection is carefully selected for its quality, design, and functionality. We
                  work with renowned manufacturers and artisans who share our commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#FADCD9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
                <p className="text-gray-600">
                  We source only the finest materials and products to ensure lasting quality.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#F8D0B0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Design</h3>
                <p className="text-gray-600">Every item is chosen for its beautiful design and aesthetic appeal.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#E8D0C9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">♻️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
                <p className="text-gray-600">We prioritize eco-friendly materials and sustainable practices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Amrit Tated", role: "Founder" },
                { name: "Rakesh Kumar Tated", role: "CoFounder" },
                { name: "Deepak Tated ", role: "CoFounder" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


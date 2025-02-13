import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Elevate Your Learning with <span className="text-[#FF6F61]">Class</span>
            <span className="bg-[#FF6F61] text-white px-2 py-1 rounded">First</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover our premium collection of stationery that inspires creativity and enhances productivity in
            education.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-[#FF6F61] hover:bg-[#E55A4D] text-white border-none">
              Shop Now
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2 relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bookimage.jpg-e4GhqIuZswbCMgfKdMMvh1oyuvVJux.webp"
            alt="Elegant floral journal with stationery items"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
            priority
          />
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#FAE5D3] rounded-full opacity-50 animate-float"></div>
          <div
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#E8D0C9] rounded-full opacity-50 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </section>
  )
}


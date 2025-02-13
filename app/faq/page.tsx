import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What are your shipping & delivery policies?",
    answer:
      "We offer free shipping on orders over $50. Standard shipping takes 3-5 business days, while express shipping is available for 1-2 business days delivery.",
  },
  {
    question: "What is your return & refund policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be unused and in original packaging. Refunds are processed within 5-7 business days after we receive the returned item.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are securely processed and encrypted.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary depending on the destination.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's site.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Find answers to common questions about our products, shipping, and policies.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


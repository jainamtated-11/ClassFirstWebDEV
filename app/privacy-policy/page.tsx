import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">Privacy Policy</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-lg">
              <h2>1. Introduction</h2>
              <p>
                ClassFirst ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit our website or make a
                purchase.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, such as when you:</p>
              <ul>
                <li>Create an account</li>
                <li>Make a purchase</li>
                <li>Sign up for our newsletter</li>
                <li>Contact our customer service</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process your orders and payments</li>
                <li>Communicate with you about your orders and account</li>
                <li>Send you marketing communications (if you've opted in)</li>
                <li>Improve our website and services</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>

              <h2>5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You can also object to or
                restrict certain processing of your data. To exercise these rights, please contact us.
              </p>

              <h2>6. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page.
              </p>

              <h2>7. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@classfirst.com.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


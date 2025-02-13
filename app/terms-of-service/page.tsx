import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">Terms of Service</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-lg">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using ClassFirst's website and services, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2>2. Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms of Service.
                You are prohibited from using our services in any way that could damage, disable, overburden, or impair
                our servers or networks.
              </p>

              <h2>3. Account Registration</h2>
              <p>
                To access certain features of our services, you may be required to create an account. You are
                responsible for maintaining the confidentiality of your account information and for all activities that
                occur under your account.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and images, is the property of ClassFirst
                and is protected by copyright and other intellectual property laws.
              </p>

              <h2>5. Product Information and Pricing</h2>
              <p>
                We strive to provide accurate product information and pricing. However, we do not warrant that product
                descriptions or prices are accurate, complete, or current. We reserve the right to correct any errors or
                omissions, and to change or update information at any time without prior notice.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                ClassFirst shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of or inability to use our services.
              </p>

              <h2>7. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of [Your
                Jurisdiction], without regard to its conflict of law provisions.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify users of any
                significant changes by posting a notice on our website.
              </p>

              <h2>9. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us at legal@classfirst.com.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


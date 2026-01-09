import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Clone My Teacher</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition">Back to Home</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <article className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing or using Clone My Teacher (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you are a parent or guardian creating an account for a child, you agree to these terms on behalf of that child. If you do not agree, do not use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
              <p className="text-gray-600">
                Clone My Teacher provides AI-powered educational tutoring services for K-12 students. Our Service includes personalized learning assistance, homework help, progress tracking, and parent dashboards. The Service is designed to supplement, not replace, classroom instruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
              <p className="text-gray-600 mb-4">To use the Service, you must:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Be at least 18 years old or have parental consent</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
              <p className="text-gray-600 mt-4">
                For accounts created for children under 13, a parent or guardian must complete the registration and provide verifiable parental consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Subscription and Payment</h2>
              <p className="text-gray-600 mb-4">
                Clone My Teacher offers free and paid subscription plans. For paid plans:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Subscriptions are billed monthly or annually as selected</li>
                <li>You authorize us to charge your payment method on a recurring basis</li>
                <li>Prices may change with 30 days notice</li>
                <li>All fees are non-refundable except as described in our Refund Policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Cancellation</h2>
              <p className="text-gray-600">
                You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of your current billing period. You will retain access to paid features until the end of that period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Acceptable Use</h2>
              <p className="text-gray-600 mb-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the Service for any unlawful purpose</li>
                <li>Share your account credentials with others</li>
                <li>Attempt to access accounts or data of other users</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use automated systems to access the Service</li>
                <li>Collect or harvest user information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Educational Disclaimer</h2>
              <p className="text-gray-600">
                Clone My Teacher provides AI-generated educational assistance. While we strive for accuracy, our Service is supplementary in nature. We are not responsible for academic outcomes, and our content should not be the sole source of educational instruction. Always verify important information with qualified educators.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600">
                All content, features, and functionality of the Service are owned by Clone My Teacher and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600">
                To the maximum extent permitted by law, Clone My Teacher shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Continued use after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms, contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: <a href="mailto:legal@clonemyteacher.com" className="text-blue-600 hover:underline">legal@clonemyteacher.com</a>
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Clone My Teacher. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-gray-400">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/" className="hover:text-white transition">Home</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

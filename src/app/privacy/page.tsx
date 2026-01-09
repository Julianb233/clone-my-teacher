import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                Clone My Teacher (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of students and families who use our AI tutoring platform. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our service.
              </p>
              <p className="text-gray-600">
                We are fully committed to compliance with the Children&apos;s Online Privacy Protection Act (COPPA) and take the protection of children&apos;s data seriously.
              </p>
            </section>

            <section className="mb-8" id="coppa">
              <h2 className="text-2xl font-bold mb-4">COPPA Compliance</h2>
              <p className="text-gray-600 mb-4">
                Clone My Teacher is designed for K-12 students, including children under 13 years of age. We comply fully with COPPA and take the following measures:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We require verifiable parental consent before collecting personal information from children under 13</li>
                <li>Parents can review, delete, or refuse further collection of their child&apos;s information at any time</li>
                <li>We collect only the minimum information necessary for educational purposes</li>
                <li>We do not condition participation on disclosure of more information than necessary</li>
                <li>We do not share children&apos;s personal information with third parties except as necessary to provide our service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect the following types of information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, school information, grade level</li>
                <li><strong>Learning Data:</strong> Questions asked, topics studied, progress metrics, learning preferences</li>
                <li><strong>Usage Data:</strong> How you interact with our platform, session duration, features used</li>
                <li><strong>Parent/Guardian Information:</strong> Contact information for parental consent and reporting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Information</h2>
              <p className="text-gray-600 mb-4">We use collected information to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide personalized AI tutoring matched to your child&apos;s learning style</li>
                <li>Track and report learning progress to parents</li>
                <li>Align tutoring with your child&apos;s teacher&apos;s curriculum</li>
                <li>Improve our educational content and AI models</li>
                <li>Send important service updates and parent reports</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement robust security measures to protect student data:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>256-bit SSL encryption for all data transmission</li>
                <li>SOC 2 Type II certified infrastructure</li>
                <li>Regular security audits and penetration testing</li>
                <li>Role-based access controls for all staff</li>
                <li>Data stored in secure, U.S.-based data centers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do NOT sell student data. We only share information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Service providers necessary to operate our platform (under strict data protection agreements)</li>
                <li>Parents/guardians of the student account</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">Parents and users have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access and review your child&apos;s data</li>
                <li>Request deletion of personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                For privacy inquiries or to exercise your rights, contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: <a href="mailto:privacy@clonemyteacher.com" className="text-blue-600 hover:underline">privacy@clonemyteacher.com</a>
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
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/" className="hover:text-white transition">Home</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

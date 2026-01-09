import { GraduationCap, Heart, Shield, Users, Target, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clone My Teacher</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re on a mission to make high-quality, personalized tutoring accessible to every family, everywhere.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Every child learns differently. Some thrive with visual explanations, others need to hear concepts explained, and many learn best by doing. Yet traditional tutoring treats every student the same way.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Clone My Teacher was founded on a simple belief: <strong>AI can bridge the gap between how students learn and how they&apos;re taught.</strong> By creating AI tutors that adapt to each child&apos;s unique learning style - and align with their actual teacher&apos;s curriculum - we&apos;re making personalized education accessible to every family.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              No more one-size-fits-all tutoring. No more confusion between what they learn at home and what they learn at school. Just seamless, personalized learning that works.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Student-First</h3>
              <p className="text-gray-600">Every decision we make starts with one question: &quot;Will this help students learn better?&quot;</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety & Privacy</h3>
              <p className="text-gray-600">We&apos;re COPPA compliant and never sell student data. Your child&apos;s privacy is non-negotiable.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Family Partnership</h3>
              <p className="text-gray-600">We believe parents are essential partners in education. Our tools keep families connected and informed.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Teacher Alignment</h3>
              <p className="text-gray-600">Learning at home should reinforce, not contradict, what happens in the classroom.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Understanding, Not Answers</h3>
              <p className="text-gray-600">We teach concepts, not just solutions. Real learning means understanding the &quot;why.&quot;</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-gray-600">Quality tutoring shouldn&apos;t be a luxury. We offer free tiers and affordable plans for every budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re a team of educators, parents, and technologists who believe AI can transform education when built thoughtfully and responsibly. Our team includes former teachers, curriculum designers, and AI researchers united by a passion for helping kids succeed.
          </p>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 mb-4">
              <strong>Founded:</strong> 2024
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Headquarters:</strong> San Francisco, CA
            </p>
            <p className="text-gray-600">
              <strong>Students Helped:</strong> 5,000+ families and counting
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of families who&apos;ve discovered the power of personalized AI tutoring.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Clone My Teacher. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-gray-400">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/" className="hover:text-white transition">Home</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

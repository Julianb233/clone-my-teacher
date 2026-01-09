"use client";

import { motion } from "framer-motion";
import {
  Brain,
  BookOpen,
  Users,
  BarChart3,
  Target,
  Shield,
  Check,
  ChevronDown,
  ArrowRight,
  Star,
  Play,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">Clone My Teacher</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/login" className="text-gray-600 hover:text-gray-900 transition hidden sm:block">Log in</a>
            <a
              href="/signup"
              className="gradient-bg text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <GraduationCap className="w-4 h-4" />
            Trusted by 5,000+ families
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            AI tutoring that truly understands
            <span className="gradient-text block">how your child learns</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Clone My Teacher creates a personalized AI tutor based on your child&apos;s teacher&apos;s curriculum and methods. Seamless learning, real results.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/signup"
              className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 animate-pulse-glow"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#how-it-works"
              className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-300 transition flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch How It Works
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2">4.9/5 from 1,200+ reviews</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Product Mockup with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 relative perspective-container"
        >
          {/* Background Glow Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Main 3D Mockup */}
          <motion.div
            whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mockup-3d mockup-shadow rounded-2xl overflow-hidden"
          >
            <div className="glass-card p-1">
              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/70 rounded-xl p-6 backdrop-blur-xl">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1 text-xs text-gray-500 text-center">
                      clonemyteacher.com/dashboard
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="glass-card rounded-xl p-4 mb-4">
                        <label className="text-sm font-medium text-gray-500 block mb-2">Ask your AI tutor anything...</label>
                        <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 text-gray-700 dark:text-gray-200 border border-gray-200/50">How do I solve quadratic equations?</div>
                      </div>
                      <div className="glass-card rounded-xl p-4 border-l-4 border-blue-500">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center">
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-semibold text-sm">AI Tutor</span>
                          <span className="text-xs text-gray-500 ml-auto">Using Mrs. Johnson&apos;s teaching style</span>
                        </div>
                        <p className="text-gray-800 dark:text-gray-200">Great question! Let me explain it the way you learned in class...</p>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div className="bg-blue-100/50 dark:bg-blue-900/30 rounded-lg p-2 text-center text-xs">
                            <div className="font-bold text-blue-600">Step 1</div>
                            <div className="text-gray-600 dark:text-gray-400">Factoring</div>
                          </div>
                          <div className="bg-purple-100/50 dark:bg-purple-900/30 rounded-lg p-2 text-center text-xs">
                            <div className="font-bold text-purple-600">Step 2</div>
                            <div className="text-gray-600 dark:text-gray-400">Formula</div>
                          </div>
                          <div className="bg-green-100/50 dark:bg-green-900/30 rounded-lg p-2 text-center text-xs">
                            <div className="font-bold text-green-600">Step 3</div>
                            <div className="text-gray-600 dark:text-gray-400">Verify</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Glassmorphism Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-4 lg:-right-8 top-20 glass-card rounded-xl p-4 animate-float-3d hidden lg:block glow-primary"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Style Matched!</p>
                <p className="text-xs text-gray-500">Mrs. Johnson&apos;s methods</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -left-4 lg:-left-8 top-40 glass-card rounded-xl p-4 animate-float hidden lg:block"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Progress +15%</p>
                <p className="text-xs text-gray-500">This week</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute right-20 -bottom-4 glass-card rounded-xl p-3 animate-float hidden lg:block"
            style={{ animationDelay: '1s' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-teal-500 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-white" />
              </div>
              <span className="text-xs text-gray-600">5,000+ active students</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Logos() {
  const logos = ["EdTech Magazine", "Parent's Choice", "K-12 Dive", "EdSurge", "Common Sense Media"];
  return (
    <section className="py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 mb-8">Trusted by schools and families nationwide</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo) => (
            <div key={logo} className="text-xl font-bold text-gray-300">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Brain,
      title: "Personalized Learning",
      description: "AI adapts to each student's unique learning pace, style, and preferences. No two learning paths are the same.",
    },
    {
      icon: BookOpen,
      title: "Homework Help 24/7",
      description: "Get instant help with any homework question, any time. Step-by-step explanations, not just answers.",
    },
    {
      icon: Users,
      title: "Parent Dashboard",
      description: "Track your child's progress, set learning goals, receive weekly reports, and stay involved in their education.",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Visual analytics showing improvement over time, mastery levels, and areas needing attention.",
    },
    {
      icon: Target,
      title: "Teacher Alignment",
      description: "AI learns from your teacher's curriculum, materials, and teaching methods for consistent learning.",
    },
    {
      icon: Shield,
      title: "Safe & Private",
      description: "COPPA compliant, no data sharing, secure environment designed specifically for K-12 students.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-blue-600 font-semibold mb-4">FEATURES</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Everything your child needs to <span className="gradient-text">succeed</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            From homework help to progress tracking, Clone My Teacher has all the tools for academic success.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100"
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Connect to your class",
      description: "Enter your school and teacher info. Our AI learns the curriculum, teaching style, and materials your teacher uses.",
    },
    {
      step: "02",
      title: "Start learning your way",
      description: "Take a quick learning style quiz. The AI adapts to visual, auditory, reading, or hands-on learning preferences.",
    },
    {
      step: "03",
      title: "Watch progress soar",
      description: "Practice daily, get homework help, and track improvement. Parents get weekly progress reports.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-blue-600 font-semibold mb-4">HOW IT WORKS</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            From signup to <span className="gradient-text">success</span> in minutes
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((item, index) => (
            <motion.div key={item.step} variants={fadeInUp} className="relative">
              <div className="text-8xl font-bold text-gray-100 absolute -top-8 left-0">{item.step}</div>
              <div className="relative pt-12">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      description: "Perfect for trying out Clone My Teacher",
      features: [
        "10 questions per day",
        "2 subjects (Math & English)",
        "Basic progress tracking",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Student",
      price: "$9.99",
      period: "/month",
      description: "For dedicated learners",
      features: [
        "Unlimited questions",
        "All subjects (7+)",
        "Advanced progress analytics",
        "Priority AI responses",
        "Homework photo scan",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Family",
      price: "$19.99",
      period: "/month",
      description: "For the whole family",
      features: [
        "Up to 4 student profiles",
        "Parent dashboard",
        "Weekly email reports",
        "Teacher alignment feature",
        "Live chat support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-blue-600 font-semibold mb-4">PRICING</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Simple, family-friendly <span className="gradient-text">pricing</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600">
            Start free, upgrade when your child loves it.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? "gradient-bg text-white scale-105 shadow-2xl"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="bg-white text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-bold mt-4 ${plan.popular ? "text-white" : ""}`}>
                {plan.name}
              </h3>
              <div className="mt-4 mb-6">
                <span className={`text-5xl font-bold ${plan.popular ? "text-white" : ""}`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-white/80" : "text-gray-500"}>
                  {plan.period}
                </span>
              </div>
              <p className={plan.popular ? "text-white/90" : "text-gray-600"}>{plan.description}</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? "text-white" : "text-blue-600"}`} />
                    <span className={plan.popular ? "text-white/90" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 py-3 rounded-full font-semibold transition ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "gradient-bg text-white hover:opacity-90"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "My daughter went from C's to A's in math within 2 months. The AI explains things just like her teacher does!",
      author: "Sarah M.",
      role: "Parent of 7th grader",
      rating: 5,
    },
    {
      quote: "Finally, homework help that doesn't just give answers. My son actually understands the concepts now.",
      author: "Michael T.",
      role: "Parent of 5th grader",
      rating: 5,
    },
    {
      quote: "As a teacher, I love that families can extend my classroom at home. The alignment feature is brilliant.",
      author: "Mrs. Johnson",
      role: "4th Grade Teacher",
      rating: 5,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-blue-600 font-semibold mb-4">TESTIMONIALS</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
            Loved by <span className="gradient-text">families</span> everywhere
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "How does Clone My Teacher match my child's teacher?",
      answer: "When you sign up, you enter your school and teacher information. Our AI then accesses publicly available curriculum standards and teaching materials to align its tutoring style with what your child is learning in class.",
    },
    {
      question: "Is my child's data safe and private?",
      answer: "Absolutely. We are fully COPPA compliant and never sell or share student data. All conversations are encrypted, and parents have full control over data retention.",
    },
    {
      question: "What subjects and grade levels are supported?",
      answer: "We support Math, English, Science, History, Geography, Spanish, and French for grades K-12. More subjects are added regularly based on parent requests.",
    },
    {
      question: "Can I monitor my child's learning progress?",
      answer: "Yes! The Parent Dashboard gives you real-time insights into what your child is studying, their progress, areas of strength, and topics that need more attention.",
    },
    {
      question: "What if my child needs help with a subject not covered?",
      answer: "Our AI can help with most academic questions, even outside our core subjects. Let us know what you need, and we'll prioritize adding full support for that subject.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-blue-600 font-semibold mb-4">FAQ</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
            Frequently asked <span className="gradient-text">questions</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="gradient-bg rounded-3xl p-12 text-center text-white"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Ready to unlock your child&apos;s potential?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of families seeing real results with AI-powered tutoring that matches their teacher&apos;s style.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
            >
              Start Your Free Trial Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-6 text-white/70 text-sm">
            No credit card required. Cancel anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Clone My Teacher</span>
            </div>
            <p className="text-gray-400">
              AI-powered tutoring that adapts to your child&apos;s learning style.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">For Schools</a></li>
              <li><a href="#" className="hover:text-white transition">For Teachers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#" className="hover:text-white transition">COPPA Compliance</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Clone My Teacher. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

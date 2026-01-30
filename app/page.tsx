'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const featureCardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = featureCardsRef.current
      cards.forEach((card, idx) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: idx * 0.1
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Experience blazing-fast code analysis and AI-powered suggestions in your terminal'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your code stays local. All processing happens on your machine by default'
    },
    {
      icon: '🧠',
      title: 'Intelligent Context',
      description: 'AI understands your entire codebase and project structure'
    },
    {
      icon: '🚀',
      title: 'Smart Refactoring',
      description: 'Automatic code improvements and optimization suggestions'
    },
    {
      icon: '🔧',
      title: 'Developer Friendly',
      description: 'Seamlessly integrates with your existing workflow'
    },
    {
      icon: '📈',
      title: 'Scale With You',
      description: 'From small projects to enterprise codebases'
    }
  ]

  const testimonials = [
    {
      quote: "AutoDevOS completely changed how I develop. It's like having a senior engineer always available.",
      author: 'Alex Chen',
      role: 'Full Stack Developer'
    },
    {
      quote: 'The productivity boost is incredible. I spend less time debugging and more time building.',
      author: 'Sarah Williams',
      role: 'Software Engineer'
    },
    {
      quote: 'Finally, an AI tool that respects my privacy and actually understands code context.',
      author: 'Mike Johnson',
      role: 'DevOps Engineer'
    }
  ]

  return (
    <div className="w-full">
      <Navigation />
      
      {/* Hero Section */}
      <Hero
        title="Your AI Terminal Coding Agent"
        subtitle="AutoDevOS amplifies your development capabilities without replacing your creativity. Code smarter, not harder."
        buttons={[
          { label: 'Join Waitlist', href: '#', variant: 'primary' },
          { label: 'View Demo', href: '#', variant: 'secondary' }
        ]}
      />

      {/* Terminal Preview */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="bg-black/40 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-auto font-mono text-xs text-[hsl(180,20%,60%)]">zsh — AutoDevOS</span>
          </div>
          <div className="px-8 py-6 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="text-[hsl(160,84%,39%)]">$ <span className="text-white">autodevos refactor --file auth.js</span></div>
            <div className="mt-4 text-[hsl(45,100%,60%)]">✓ Analyzing code structure...</div>
            <div className="text-[hsl(45,100%,60%)]">✓ Identifying optimization opportunities...</div>
            <div className="mt-4 text-[hsl(180,100%,50%)]">🤖 AI Agent: I found 3 areas for refactoring:</div>
            <div className="mt-2 text-[hsl(180,20%,60%)] ml-4">
              1. Extract authentication logic to separate module<br/>
              2. Implement rate limiting with exponential backoff<br/>
              3. Add comprehensive error handling
            </div>
            <div className="mt-4 text-[hsl(160,84%,39%)]">$ <span className="text-white">autodevos generate --type tests</span></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-6 md:px-8" ref={featuresRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[hsl(180,100%,95%)] to-[hsl(180,100%,50%)] bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron' }}>
              Powerful Features
            </h2>
            <p className="text-lg text-[hsl(180,20%,60%)] max-w-2xl mx-auto">
              Everything you need to accelerate your development workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                ref={el => { if (el) featureCardsRef.current[idx] = el }}
                className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur hover:border-[hsl(160,84%,39%)]/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[hsl(180,20%,60%)] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[hsl(180,100%,95%)] to-[hsl(180,100%,50%)] bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron' }}>
              Loved by Developers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur hover:border-[hsl(160,84%,39%)]/30 transition-all"
              >
                <p className="text-[hsl(180,100%,95%)] italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-[hsl(180,100%,50%)] text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[hsl(180,100%,95%)] to-[hsl(180,100%,50%)] bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron' }}>
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg text-[hsl(180,20%,60%)] mb-10">
            Join thousands of developers already using AutoDevOS to code faster and smarter.
          </p>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-12 py-4 bg-gradient-to-r from-[hsl(160,84%,39%)] to-[hsl(180,100%,50%)] rounded-lg font-bold text-lg text-black hover:shadow-2xl hover:shadow-[hsl(160,84%,39%)]/50 transition-all hover:translate-y-[-4px]"
          >
            Join Waitlist Now
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

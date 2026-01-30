'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'

gsap.registerPlugin(ScrollTrigger)

export default function Blog() {
  const blogCardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      blogCardsRef.current.forEach((card, idx) => {
        if (!card) return
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

  const blogPosts = [
    {
      emoji: '📝',
      date: 'Jan 28, 2026',
      readTime: '5 min read',
      title: 'Introducing AutoDevOS 1.0: The Future is Here',
      description: 'After months of development, we\'re excited to announce the official release of AutoDevOS CLI 1.0. Learn about the features that make it revolutionary.'
    },
    {
      emoji: '🚀',
      date: 'Jan 25, 2026',
      readTime: '8 min read',
      title: '10 Ways AutoDevOS Improves Your Workflow',
      description: 'Discover how developers are using AutoDevOS to code faster, debug smarter, and ship better products.'
    },
    {
      emoji: '🔒',
      date: 'Jan 20, 2026',
      readTime: '6 min read',
      title: 'Privacy-First AI: How We Built AutoDevOS',
      description: 'A deep dive into our architecture and the security principles that ensure your code stays private.'
    },
    {
      emoji: '💡',
      date: 'Jan 15, 2026',
      readTime: '7 min read',
      title: 'Building AI Agents: Lessons Learned',
      description: 'Our journey building an AI agent that truly understands code and developers\' needs.'
    },
    {
      emoji: '⚡',
      date: 'Jan 10, 2026',
      readTime: '4 min read',
      title: 'Performance Optimization: Behind the Scenes',
      description: 'How we achieved lightning-fast response times and minimal resource usage.'
    },
    {
      emoji: '🎯',
      date: 'Jan 5, 2026',
      readTime: '5 min read',
      title: 'Terminal vs IDE: Why We Chose the Terminal',
      description: 'The philosophy behind building a terminal-native tool in an IDE-dominated world.'
    },
  ]

  return (
    <div className="w-full">
      <Navigation />
      
      <Hero
        title="Blog & Insights"
        subtitle="Latest updates, tutorials, and insights from the AutoDevOS team"
      />

      {/* Blog Grid */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={idx}
                ref={el => { if (el) blogCardsRef.current[idx] = el }}
                whileHover={{ y: -10 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur overflow-hidden hover:border-[hsl(160,84%,39%)]/30 transition-all cursor-pointer group"
              >
                <div className="h-48 bg-gradient-to-br from-[hsl(160,84%,39%)]/10 to-[hsl(180,100%,50%)]/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {post.emoji}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[hsl(180,20%,60%)] mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[hsl(180,100%,50%)] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-[hsl(180,20%,60%)] leading-relaxed text-sm">
                    {post.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[hsl(160,84%,39%)] font-bold text-sm group-hover:text-[hsl(180,100%,50%)] transition-colors">
                    Read Article →
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[hsl(180,100%,95%)] to-[hsl(180,100%,50%)] bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron' }}>
            Stay Updated
          </h2>
          <p className="text-lg text-[hsl(180,20%,60%)] mb-8">
            Subscribe to get the latest updates about AutoDevOS delivered to your inbox
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(180,20%,60%)] focus:border-[hsl(180,100%,50%)] transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-[hsl(160,84%,39%)] to-[hsl(180,100%,50%)] text-black rounded-lg font-bold hover:shadow-lg transition-all whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

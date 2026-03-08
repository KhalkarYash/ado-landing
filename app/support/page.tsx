"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

export default function Support() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const supportOptions = [
    {
      icon: "📚",
      title: "Documentation",
      description: "Comprehensive guides, API references, and tutorials",
      link: "/docs",
    },
    {
      icon: "💬",
      title: "Community Forum",
      description: "Join thousands of developers sharing tips and solutions",
      link: "#",
    },
    {
      icon: "🐛",
      title: "Report a Bug",
      description: "Help us improve by reporting issues on GitHub",
      link: "#",
    },
  ];

  const faqs = [
    {
      question: "How do I install AutoDevOS CLI?",
      answer:
        "Installation is simple. Run the following command: npm install -g autodevos-cli. For other methods including Homebrew, Docker, and manual installation, check our documentation.",
    },
    {
      question: "Is my code secure? Where is it processed?",
      answer:
        "By default, all code analysis happens locally on your machine. Your code never leaves your system unless you explicitly enable cloud enhancements. We use end-to-end encryption for any transmitted data.",
    },
    {
      question: "Which programming languages are supported?",
      answer:
        "AutoDevOS supports 50+ programming languages including JavaScript, Python, TypeScript, Go, Rust, Java, C++, and many more. Check documentation for the complete list.",
    },
    {
      question: "Can I use AutoDevOS offline?",
      answer:
        "Yes! AutoDevOS is designed to work offline by default. All code analysis happens locally on your machine without requiring internet connection.",
    },
    {
      question: "How much does AutoDevOS cost?",
      answer:
        "AutoDevOS offers a free tier for individual developers with essential features. Pro and Enterprise plans are available for teams and enterprises with advanced features.",
    },
  ];

  return (
    <div className="w-full">
      <Navigation />

      <Hero
        title="We're Here to Help"
        subtitle="Get the support you need to make the most of AutoDevOS CLI"
      />

      {/* Support Options */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {supportOptions.map((option, idx) => (
              <motion.a
                key={idx}
                href={option.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-2xl border border-white/10 bg-white/2 backdrop-blur hover:border-[hsl(160,84%,39%)]/30 hover:bg-white/4 transition-all text-center cursor-pointer group"
              >
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {option.title}
                </h3>
                <p className="text-[hsl(180,20%,60%)] mb-4 group-hover:text-[hsl(180,20%,60%)]">
                  {option.description}
                </p>
                <div className="inline-block px-6 py-2 bg-[hsl(160,84%,39%)] text-black rounded-lg font-bold text-sm group-hover:shadow-lg transition-all">
                  Learn More
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white/2">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-black mb-4 bg-linear-to-r from-[hsl(180,100%,95%)] to-[hsl(180,100%,50%)] bg-clip-text text-transparent"
              style={{ fontFamily: "Orbitron" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[hsl(180,20%,60%)]">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl overflow-hidden border border-white/10 bg-white/2 backdrop-blur"
                layout
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === idx ? null : idx)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                >
                  <h3 className="font-bold text-white text-lg">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedFAQ === idx ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-[hsl(180,100%,50%)] shrink-0 ml-4"
                  >
                    +
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedFAQ === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10"
                    >
                      <p className="px-6 py-4 text-[hsl(180,20%,60%)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-black mb-4 text-white"
              style={{ fontFamily: "Orbitron" }}
            >
              Still Need Help?
            </h2>
            <p className="text-[hsl(180,20%,60%)]">
              Send us a message and we'll get back to you shortly
            </p>
          </div>

          <form className="space-y-6 p-8 rounded-2xl border border-white/10 bg-white/2 backdrop-blur">
            <div>
              <label className="block text-white font-bold mb-3">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(180,20%,60%)] focus:border-[hsl(180,100%,50%)] focus:bg-white/10 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-3">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(180,20%,60%)] focus:border-[hsl(180,100%,50%)] focus:bg-white/10 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-3">Subject</label>
              <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[hsl(180,100%,50%)] focus:bg-white/10 transition-all">
                <option>Select a subject...</option>
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Feature Request</option>
                <option>Bug Report</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-bold mb-3">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[hsl(180,20%,60%)] focus:border-[hsl(180,100%,50%)] focus:bg-white/10 transition-all resize-none"
                rows={5}
                placeholder="Your message..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-linear-to-r from-[hsl(160,84%,39%)] to-[hsl(180,100%,50%)] text-black rounded-lg font-bold hover:shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function Terms() {
  return (
    <div className="w-full">
      <Navigation />
      
      <section className="min-h-screen pt-40 pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-[hsl(180,100%,95%)] to-[hsl(180,100%,50%)] bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron' }}>
            Terms of Service
          </h1>
          <p className="text-[hsl(180,20%,60%)] text-sm mb-12">Last Updated: January 30, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-black text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                By accessing and using AutoDevOS CLI, you accept and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-4">2. License Grant</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                We grant you a non-exclusive, non-transferable license to use AutoDevOS CLI for your personal or commercial development projects, subject to your compliance with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-4">3. User Responsibilities</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials, for all activities that occur under your account, and for ensuring your use complies with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-4">4. Prohibited Uses</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                You may not use AutoDevOS to develop malicious software, violate intellectual property rights, or engage in any unlawful activities. We reserve the right to suspend or terminate accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-4">5. Intellectual Property</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                All rights, title, and interest in AutoDevOS and its underlying technology remain with us. Your code and intellectual property remain yours.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                AutoDevOS is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-4">7. Termination</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                You may terminate your account at any time. We reserve the right to suspend or terminate accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-4">8. Changes to Terms</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                We may modify these terms at any time. Continued use of AutoDevOS after changes constitutes acceptance of the modified terms.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

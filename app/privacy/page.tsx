'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="w-full">
      <Navigation />
      
      <section className="min-h-screen pt-40 pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-[hsl(180,100%,95%)] to-[hsl(180,100%,50%)] bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron' }}>
            Privacy Policy
          </h1>
          <p className="text-[hsl(180,20%,60%)] text-sm mb-12">Last Updated: January 30, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-black text-white mb-4">1. Introduction</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                At AutoDevOS, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-4">2. Data Collection</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                We collect minimal data necessary to provide our services. By default, all code analysis happens locally on your machine. When you opt into cloud features, we may collect usage data and anonymized code patterns to improve our AI models.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-4">3. Data Usage</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                Your code never leaves your machine unless you explicitly enable cloud features. We use collected data solely to improve AutoDevOS and provide better service to our users.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-4">4. Data Security</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                We implement industry-standard security measures including end-to-end encryption, secure data transmission, and regular security audits to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-4">5. Your Rights</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                You have the right to access, modify, or delete your data at any time. Contact us at privacy@autodevos.com for any privacy-related requests.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-4">6. Changes to This Policy</h2>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes via email or through the application.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

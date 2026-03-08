"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";

export default function Security() {
  const securityFeatures = [
    {
      icon: "🔐",
      title: "End-to-End Encryption",
      description:
        "All data transmitted between your machine and our servers is encrypted using industry-standard TLS 1.3 protocols.",
    },
    {
      icon: "💻",
      title: "Local Processing First",
      description:
        "By default, all code analysis and AI processing happens locally on your machine. Your code never leaves unless you opt-in.",
    },
    {
      icon: "🛡️",
      title: "SOC 2 Compliant",
      description:
        "Our infrastructure and processes are SOC 2 Type II certified, ensuring the highest standards of security and confidentiality.",
    },
    {
      icon: "🔍",
      title: "Regular Security Audits",
      description:
        "We conduct quarterly security audits with leading cybersecurity firms to identify and address vulnerabilities.",
    },
    {
      icon: "🚨",
      title: "Vulnerability Disclosure",
      description:
        "We maintain a responsible disclosure program. Report security issues to security@autodevos.com for prompt investigation.",
    },
    {
      icon: "📜",
      title: "Compliance Ready",
      description:
        "AutoDevOS complies with GDPR, CCPA, and major data protection regulations, suitable for enterprise use.",
    },
  ];

  return (
    <div className="w-full">
      <Navigation />

      <Hero
        title="Security at AutoDevOS"
        subtitle="Your code security is our top priority. Learn how we protect your intellectual property and data"
      />

      {/* Security Cards */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {securityFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/2 backdrop-blur hover:border-[hsl(160,84%,39%)]/30 hover:bg-white/4 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white/2">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-black text-white mb-8 text-center"
            style={{ fontFamily: "Orbitron" }}
          >
            Our Security Commitments
          </h2>

          <div className="bg-white/2 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur">
            <p className="text-[hsl(180,20%,60%)] mb-8 leading-relaxed">
              We believe that transparent security practices build trust. Here's
              what we commit to:
            </p>

            <ul className="space-y-4 text-[hsl(180,20%,60%)]">
              <li className="flex items-start gap-3">
                <span className="text-[hsl(160,84%,39%)] font-bold shrink-0">
                  •
                </span>
                <span>
                  Never sell or share your code or data with third parties
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(160,84%,39%)] font-bold shrink-0">
                  •
                </span>
                <span>
                  Maintain strict access controls with role-based permissions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(160,84%,39%)] font-bold shrink-0">
                  •
                </span>
                <span>
                  Use zero-knowledge architecture where your encryption keys
                  remain with you
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(160,84%,39%)] font-bold shrink-0">
                  •
                </span>
                <span>Provide regular security updates and patches</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(160,84%,39%)] font-bold shrink-0">
                  •
                </span>
                <span>Offer self-hosted options for enterprise customers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(160,84%,39%)] font-bold shrink-0">
                  •
                </span>
                <span>
                  Maintain comprehensive audit logs for all system access
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Report Security */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl font-black text-white mb-6"
            style={{ fontFamily: "Orbitron" }}
          >
            Report a Security Issue
          </h2>

          <p className="text-lg text-[hsl(180,20%,60%)] mb-8 leading-relaxed">
            If you discover a security vulnerability, please email{" "}
            <span className="text-white font-bold">security@autodevos.com</span>
            . We take all reports seriously and will respond within 24 hours. We
            offer a bug bounty program for qualified security researchers.
          </p>

          <motion.a
            href="mailto:security@autodevos.com"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-linear-to-r from-[hsl(160,84%,39%)] to-[hsl(180,100%,50%)] text-black rounded-lg font-bold hover:shadow-lg transition-all"
          >
            Report Security Issue
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

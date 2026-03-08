"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PinContainer } from "@/components/ui/3d-pin";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: idx * 0.1,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: "🔒",
      title: "Privacy First",
      description:
        "Your code stays on your machine. We believe developers should have complete control over their intellectual property.",
    },
    {
      icon: "⚡",
      title: "Speed Matters",
      description:
        "Every millisecond counts. We optimize relentlessly to ensure AutoDevOS never slows you down.",
    },
    {
      icon: "🎯",
      title: "Developer Focused",
      description:
        "Built by developers, for developers. We understand your pain points and build solutions that matter.",
    },
  ];

  const teamMembers = [
    {
      name: "Yash Khalkar",
      role: "",
      emoji: "YK",
      image: "/images/yash.jpg",
      links: [
        { label: "GitHub", href: "https://github.com/khalkaryash", icon: "GH" },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/yashkhalkar",
          icon: "LI",
        },
      ],
    },
    {
      name: "Soham Gaikwad",
      role: "",
      emoji: "SG",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/sohamgaikwad",
          icon: "GH",
        },
      ],
    },
    // { name: "Mike Johnson", role: "Head of Product", emoji: "MJ", links: [] },
  ];

  const stats = [
    { number: "100%", label: "Local & Private" },
    { number: "Open", label: "Source" },
    { number: "0", label: "Data Sent to Cloud" },
  ];

  return (
    <div className="w-full">
      <Navigation />

      <Hero
        title="Building the Future of Development"
        subtitle="We're on a mission to empower developers with AI that amplifies their capabilities without replacing their creativity"
      />

      {/* Story Section */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl md:text-4xl font-black mb-6 text-[hsl(160,84%,39%)]"
                style={{ fontFamily: "Orbitron" }}
              >
                Our Story
              </h2>
              <p className="text-[hsl(180,20%,60%)] mb-4 leading-relaxed">
                AutoDevOS was born from frustration. As developers ourselves, we
                were tired of context switching between our terminal, IDE,
                browser tabs, and various AI tools. We spent more time managing
                our tools than actually coding.
              </p>
              <p className="text-[hsl(180,20%,60%)] mb-4 leading-relaxed">
                We believed there had to be a better way. A way to bring AI
                assistance directly into the terminal where developers feel most
                at home. A way that respects privacy, maintains control, and
                actually understands what you're trying to build.
              </p>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                After months of research and development, AutoDevOS CLI emerged
                as the solution we wished existed all along.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/2 backdrop-blur h-64 flex items-center justify-center text-6xl"
            >
              💻
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/2 backdrop-blur h-64 flex items-center justify-center text-6xl order-2 md:order-1"
            >
              🚀
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2
                className="text-3xl md:text-4xl font-black mb-6 text-[hsl(160,84%,39%)]"
                style={{ fontFamily: "Orbitron" }}
              >
                Our Mission
              </h2>
              <p className="text-[hsl(180,20%,60%)] mb-4 leading-relaxed">
                We're building the world's most intelligent terminal-native
                development environment. Our goal is to eliminate the friction
                between thought and code, making development more intuitive and
                enjoyable.
              </p>
              <p className="text-[hsl(180,20%,60%)] mb-4 leading-relaxed">
                We believe AI should augment human creativity, not replace it.
                AutoDevOS is designed to handle the repetitive and tedious
                tasks, freeing developers to focus on solving complex problems
                and building innovative solutions.
              </p>
              <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                Privacy and security are at the core of everything we do. Your
                code is your intellectual property, and we've built AutoDevOS to
                respect that from the ground up.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-black mb-4 bg-linear-to-r from-[hsl(180,100%,95%)] to-[hsl(180,100%,50%)] bg-clip-text text-transparent"
              style={{ fontFamily: "Orbitron" }}
            >
              Our Values
            </h2>
            <p className="text-lg text-[hsl(180,20%,60%)] max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el;
                }}
                className="p-8 rounded-2xl border border-white/10 bg-white/2 backdrop-blur hover:border-[hsl(160,84%,39%)]/30 hover:bg-white/4 transition-all text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-[hsl(180,20%,60%)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 ...">
              Our Team
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center z-40"
              >
                <PinContainer
                  title={member.name}
                  href={member.links?.[0]?.href}
                >
                  <div className="w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-[hsl(160,84%,39%)] to-[hsl(180,100%,50%)] flex items-center justify-center text-white font-bold text-4xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                </PinContainer>

                <h3 className="text-xl font-bold text-white mt-4">
                  {member.name}
                </h3>
                <p className="text-[hsl(180,100%,50%)]">{member.role}</p>
                {member.links && member.links.length > 0 && (
                  <div className="flex gap-3 mt-3 justify-center">
                    {member.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-xs rounded-full border border-white/20 text-[hsl(180,20%,60%)] hover:border-[hsl(160,84%,39%)] hover:text-[hsl(160,84%,39%)] transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 }}
              >
                <div
                  className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-[hsl(160,84%,39%)] to-[hsl(180,100%,50%)] bg-clip-text text-transparent"
                  style={{ fontFamily: "Orbitron" }}
                >
                  {stat.number}
                </div>
                <p className="text-lg text-[hsl(180,20%,60%)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

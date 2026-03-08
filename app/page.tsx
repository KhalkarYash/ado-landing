"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<HTMLDivElement[]>([]);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        screenshotRef.current,
        { opacity: 0, y: 60, scale: 0.96 },
        {
          scrollTrigger: {
            trigger: screenshotRef.current,
            start: "top 88%",
            end: "top 40%",
            scrub: 1.5,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
        },
      );

      featureCardsRef.current.forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 48 },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            duration: 0.65,
            delay: (idx % 3) * 0.1,
            ease: "power2.out",
          },
        );
      });

      stepsRef.current.forEach((step, idx) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
          {
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
        );
      });

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
      );
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: "🤖",
      title: "Agentic Loop",
      description:
        "Autonomous multi-step loop — plan, execute tools, observe results, and iterate without manual intervention up to 100 turns.",
    },
    {
      icon: "🔌",
      title: "Multi-Provider LLMs",
      description:
        "OpenAI, Anthropic Claude, Google Gemini, Ollama, OpenRouter, LM Studio, vLLM, and any OpenAI-compatible endpoint.",
    },
    {
      icon: "🛠️",
      title: "11 Built-in Tools",
      description:
        "Shell execution, file read/write/edit, grep, glob, web search, web fetch, memory, and TODO tracking — ready to use.",
    },
    {
      icon: "🔗",
      title: "MCP Integration",
      description:
        "Extend capabilities with any Model Context Protocol (MCP) server via stdio or HTTP/SSE transport.",
    },
    {
      icon: "🧠",
      title: "Smart Context Management",
      description:
        "Automatic conversation compression when approaching the model context window preserves task continuity.",
    },
    {
      icon: "🔒",
      title: "Safety Controls",
      description:
        "Approval policies, blocked destructive commands, path validation, and secret-variable filtering built in.",
    },
    {
      icon: "🪝",
      title: "Lifecycle Hooks",
      description:
        "Trigger shell scripts at before_agent, after_agent, before_tool, after_tool, and on_error events.",
    },
    {
      icon: "💾",
      title: "Session Persistence",
      description:
        "Save and resume conversations with full context using /save and /clear in-session commands.",
    },
    {
      icon: "🔄",
      title: "Loop Detection",
      description:
        "Detects repeated identical tool calls and injects a circuit-breaker to prevent runaway loops.",
    },
  ];

  const providers = [
    "OpenAI",
    "Anthropic Claude",
    "Google Gemini",
    "Ollama",
    "OpenRouter",
    "LM Studio",
    "vLLM",
    "Custom API",
  ];

  const steps = [
    {
      number: "01",
      title: "Install & Authenticate",
      description:
        "Install via pip or pipx, then run the interactive auth wizard to connect your preferred LLM provider and store your API key securely.",
      lines: ["pip install autodevos-cli", "ados auth setup"],
    },
    {
      number: "02",
      title: "Open Your Project",
      description:
        "Navigate to any codebase. The agent reads your project context, AGENTS.md instructions, and project-level config automatically.",
      lines: ["cd your-project", "ados"],
    },
    {
      number: "03",
      title: "Describe & Execute",
      description:
        "Describe a task in plain English. The agent reads your code, makes edits, runs commands, and verifies results autonomously.",
      lines: ['ados "add rate limiting to the API"'],
    },
  ];

  const tools = [
    { name: "shell", icon: "⚙️", desc: "Execute shell commands" },
    { name: "edit", icon: "✏️", desc: "Surgical file edits" },
    { name: "write_file", icon: "📝", desc: "Write or overwrite files" },
    { name: "read_file", icon: "📖", desc: "Read file contents" },
    { name: "list_dir", icon: "📁", desc: "List directories" },
    { name: "glob", icon: "🔍", desc: "Find files by pattern" },
    { name: "grep", icon: "🔎", desc: "Search file contents" },
    { name: "web_search", icon: "🌐", desc: "Search the web" },
    { name: "web_fetch", icon: "📡", desc: "Fetch URL content" },
    { name: "memory", icon: "🧠", desc: "Persistent key-value store" },
    { name: "todo", icon: "✅", desc: "In-session task tracking" },
    { name: "mcp_*", icon: "🔌", desc: "Custom MCP tools" },
  ];

  const testimonials = [
    {
      quote:
        "AutoDevOS completely changed how I develop. It's like having a senior engineer always available.",
      author: "Alex Chen",
      role: "Full Stack Developer",
    },
    {
      quote:
        "The agentic loop is incredible — I give it a task and come back to it done. No hand-holding needed.",
      author: "Sarah Williams",
      role: "Software Engineer",
    },
    {
      quote:
        "Finally an AI terminal tool that lets me use local Ollama models for privacy-sensitive work.",
      author: "Mike Johnson",
      role: "DevOps Engineer",
    },
  ];

  return (
    <div className="w-full">
      <Navigation />

      <Hero
        title="Your AI Terminal Coding Agent"
        subtitle="AutoDevOS runs an autonomous agentic loop — read, edit, execute, and iterate with your codebase using natural language. Supports every major LLM."
        buttons={[
          { label: "Get Started", href: "/docs", variant: "primary" },
          { label: "Read Docs", href: "/docs", variant: "secondary" },
        ]}
      />

      <section
        className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24"
        ref={screenshotRef}
      >
        <div className="relative rounded-2xl overflow-hidden border border-[hsl(174,100%,50%)]/20 shadow-2xl shadow-[hsl(174,100%,50%)]/8">
          {/* TODO: Replace src="/placeholder.png" with actual AutoDevOS terminal screenshot */}
          <Image
            src="/placeholder.png"
            alt="AutoDevOS CLI agentic loop running in terminal"
            width={1200}
            height={700}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      <section className="border-y border-white/8 py-14 px-6 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "8+", label: "LLM Providers" },
            { value: "11", label: "Built-in Tools" },
            { value: "128k", label: "Context Tokens" },
            { value: "100", label: "Max Turns/Session" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl font-black text-[hsl(174,100%,50%)]"
                style={{ fontFamily: "Orbitron" }}
              >
                {stat.value}
              </div>
              <div className="text-[hsl(215,20%,55%)] text-sm mt-2 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-8" ref={featuresRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[hsl(174,100%,50%)] font-mono text-xs font-semibold mb-4 tracking-[0.2em] uppercase">
              Capabilities
            </p>
            <h2
              className="text-4xl md:text-5xl font-black mb-5 bg-linear-to-r from-[hsl(180,100%,95%)] to-[hsl(174,100%,50%)] bg-clip-text text-transparent"
              style={{ fontFamily: "Orbitron" }}
            >
              Everything Your Workflow Needs
            </h2>
            <p className="text-lg text-[hsl(215,20%,55%)] max-w-2xl mx-auto">
              Built for engineers who want AI to do the heavy lifting —
              autonomously and securely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) featureCardsRef.current[idx] = el;
                }}
                className="p-7 rounded-2xl border border-white/[0.07] bg-white/2.5 hover:border-[hsl(152,76%,40%)]/40 hover:bg-white/4 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[hsl(215,20%,55%)] leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-white/8 overflow-hidden bg-white/[0.012]">
        <p className="text-center text-[hsl(215,20%,50%)] text-xs font-mono mb-8 tracking-[0.25em] uppercase">
          Supported LLM Providers
        </p>
        <div className="relative flex overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...providers, ...providers].map((p, i) => (
              <span
                key={i}
                className="text-[hsl(174,100%,50%)] font-bold text-lg font-mono opacity-50 hover:opacity-100 transition-opacity cursor-default"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[hsl(174,100%,50%)] font-mono text-xs font-semibold mb-4 tracking-[0.2em] uppercase">
              Workflow
            </p>
            <h2
              className="text-4xl md:text-5xl font-black mb-5 bg-linear-to-r from-[hsl(180,100%,95%)] to-[hsl(174,100%,50%)] bg-clip-text text-transparent"
              style={{ fontFamily: "Orbitron" }}
            >
              Up and Running in Minutes
            </h2>
          </div>

          <div className="space-y-20">
            {steps.map((step, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) stepsRef.current[idx] = el;
                }}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 md:gap-16 items-center`}
              >
                <div className="flex-1 space-y-5">
                  <div className="text-[hsl(174,100%,50%)] font-black text-7xl leading-none opacity-15 font-mono">
                    {step.number}
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-black text-white"
                    style={{ fontFamily: "Orbitron" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[hsl(215,20%,55%)] text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-[hsl(222,47%,3%)]">
                    <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                      <span className="ml-auto font-mono text-xs text-[hsl(215,20%,45%)]">
                        ~ zsh
                      </span>
                    </div>
                    <div className="px-6 py-5 font-mono text-sm">
                      {step.lines.map((line, li) => (
                        <div key={li} className="flex gap-2 mb-1 last:mb-0">
                          <span className="text-[hsl(174,100%,50%)] select-none">
                            $
                          </span>
                          <span className="text-[hsl(180,100%,92%)]">
                            {line}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-8 border-t border-white/8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[hsl(174,100%,50%)] font-mono text-xs font-semibold mb-4 tracking-[0.2em] uppercase">
              Built-in Toolkit
            </p>
            <h2
              className="text-4xl md:text-5xl font-black mb-5 bg-linear-to-r from-[hsl(180,100%,95%)] to-[hsl(174,100%,50%)] bg-clip-text text-transparent"
              style={{ fontFamily: "Orbitron" }}
            >
              Tools Ready Out of the Box
            </h2>
            <p className="text-[hsl(215,20%,55%)] text-lg max-w-xl mx-auto">
              The agent picks the right tool for every step automatically — no
              configuration needed
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="p-5 rounded-xl border border-white/[0.07] bg-white/2.5 hover:border-[hsl(174,100%,50%)]/30 hover:bg-white/4 transition-all text-center group"
              >
                <div className="text-2xl mb-2.5 group-hover:scale-125 transition-transform duration-200">
                  {tool.icon}
                </div>
                <div className="font-mono text-[hsl(174,100%,50%)] text-xs font-bold mb-1">
                  {tool.name}
                </div>
                <div className="text-[hsl(215,20%,50%)] text-xs leading-snug">
                  {tool.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-[hsl(174,100%,50%)] font-mono text-xs font-semibold mb-4 tracking-[0.2em] uppercase">
            In Action
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-white"
            style={{ fontFamily: "Orbitron" }}
          >
            Watch the Agent Work
          </h2>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-[hsl(152,76%,40%)]/25 shadow-2xl shadow-[hsl(152,76%,40%)]/10">
          {/* TODO: Replace src="/placeholder.png" with actual AutoDevOS agent workflow screenshot */}
          <Image
            src="/placeholder.png"
            alt="AutoDevOS agentic loop executing tools autonomously"
            width={1200}
            height={700}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section className="py-24 px-6 md:px-8 border-t border-white/8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[hsl(174,100%,50%)] font-mono text-xs font-semibold mb-4 tracking-[0.2em] uppercase">
              Community
            </p>
            <h2
              className="text-4xl md:text-5xl font-black mb-4 bg-linear-to-r from-[hsl(180,100%,95%)] to-[hsl(174,100%,50%)] bg-clip-text text-transparent"
              style={{ fontFamily: "Orbitron" }}
            >
              Loved by Developers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="p-8 rounded-2xl border border-white/[0.07] bg-white/2.5 hover:border-[hsl(152,76%,40%)]/30 transition-all"
              >
                <div className="text-[hsl(174,100%,50%)] text-4xl leading-none mb-4 opacity-40">
                  "
                </div>
                <p className="text-[hsl(180,40%,90%)] mb-6 leading-relaxed text-sm">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold text-white text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-[hsl(174,100%,50%)] text-xs mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-8" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center p-12 md:p-20 rounded-3xl border border-[hsl(174,100%,50%)]/20 bg-linear-to-br from-[hsl(222,47%,7%)] to-[hsl(225,40%,9%)] relative overflow-hidden">
          <div className="absolute inset-0 bg-linea-to-br from-[hsl(174,100%,50%)]/5 to-[hsl(270,80%,65%)]/5 pointer-events-none" />
          <h2
            className="text-4xl md:text-5xl font-black mb-6 bg-linear-to-r from-[hsl(180,100%,95%)] to-[hsl(174,100%,50%)] bg-clip-text text-transparent relative z-10"
            style={{ fontFamily: "Orbitron" }}
          >
            Ready to Ship Faster?
          </h2>
          <p className="text-lg text-[hsl(215,20%,55%)] mb-10 max-w-xl mx-auto relative z-10">
            Install AutoDevOS and let the agent handle the repetitive work so
            you can focus on what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/docs"
              className="inline-block px-10 py-4 bg-linear-to-r from-[hsl(152,76%,40%)] to-[hsl(174,100%,50%)] rounded-xl font-bold text-base text-black hover:shadow-2xl hover:shadow-[hsl(174,100%,50%)]/25 transition-all hover:-translate-y-1"
            >
              Get Started Free
            </Link>
            <Link
              href="/docs"
              className="inline-block px-10 py-4 border border-[hsl(174,100%,50%)]/40 rounded-xl font-bold text-base text-[hsl(174,100%,50%)] hover:bg-[hsl(174,100%,50%)]/10 transition-all hover:-translate-y-1"
            >
              Read the Docs
            </Link>
          </div>
          <div className="mt-10 font-mono text-xs text-[hsl(215,20%,50%)] relative z-10">
            pip install autodevos-cli
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  buttons?: {
    label: string;
    href: string;
    variant: "primary" | "secondary";
  }[];
}

export function Hero({ title, subtitle, buttons = [] }: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
      });

      // Floating animation for orbs
      gsap.to(orb1Ref.current, {
        y: -100,
        x: 100,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        y: 100,
        x: -100,
        duration: 23,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb3Ref.current, {
        y: -80,
        x: 80,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-8 overflow-hidden">
      <div
        ref={orb1Ref}
        className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-[hsl(174,100%,50%)] to-transparent rounded-full blur-3xl opacity-20"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-[hsl(152,76%,40%)] to-transparent rounded-full blur-3xl opacity-20"
      />
      <div
        ref={orb3Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-linear-to-br from-[hsl(265,85%,65%)] to-transparent rounded-full blur-3xl opacity-10"
      />

      <div className="max-w-5xl relative z-10 text-center">
        <motion.h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 bg-linear-to-r from-[hsl(200,40%,97%)] to-[hsl(174,100%,50%)] bg-clip-text text-transparent"
          style={{ fontFamily: "Orbitron" }}
        >
          {title}
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-[hsl(215,20%,60%)] max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {subtitle}
        </motion.p>

        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {buttons.map((button, idx) => (
              <motion.a
                key={idx}
                href={button.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.2 }}
                className={`px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all ${
                  button.variant === "primary"
                    ? "bg-linear-to-r from-[hsl(152,76%,40%)] to-[hsl(174,100%,50%)] text-black hover:shadow-2xl hover:shadow-[hsl(174,100%,50%)]/40 hover:translate-y-1"
                    : "border-2 border-[hsl(174,100%,50%)] text-[hsl(200,40%,97%)] hover:bg-[hsl(174,100%,50%)]/10 hover:translate-y-1"
                }`}
              >
                {button.label}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

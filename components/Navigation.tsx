"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) =>
    pathname === path ? "text-[hsl(174,100%,50%)]" : "text-[hsl(215,20%,55%)]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-black text-2xl bg-linear-to-r from-[hsl(174,100%,50%)] to-[hsl(152,76%,40%)] bg-clip-text text-transparent"
          style={{ fontFamily: "Orbitron" }}
        >
          AutoDevOS
        </Link>

        <ul className="hidden md:flex gap-10 items-center">
          <li>
            <Link
              href="/"
              className={`${isActive("/")} font-medium text-sm transition-colors hover:text-[hsl(174,100%,50%)]`}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/docs"
              className={`${isActive("/docs")} font-medium text-sm transition-colors hover:text-[hsl(174,100%,50%)]`}
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${isActive("/about")} font-medium text-sm transition-colors hover:text-[hsl(174,100%,50%)]`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className={`${isActive("/support")} font-medium text-sm transition-colors hover:text-[hsl(174,100%,50%)]`}
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`${isActive("/blog")} font-medium text-sm transition-colors hover:text-[hsl(174,100%,50%)]`}
            >
              Blog
            </Link>
          </li>
        </ul>

        <Link
          href="/docs"
          className="hidden md:inline-block px-7 py-3 bg-linear-to-r from-[hsl(152,76%,40%)] to-[hsl(174,100%,50%)] rounded-lg font-bold text-sm text-black hover:shadow-lg hover:shadow-[hsl(174,100%,50%)]/40 transition-all hover:translate-y-0.5"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

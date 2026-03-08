"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <h3
              className="text-xl font-black mb-4 bg-linear-to-r from-[hsl(174,100%,50%)] to-[hsl(152,76%,40%)] bg-clip-text text-transparent"
              style={{ fontFamily: "Orbitron" }}
            >
              AutoDevOS
            </h3>
            <p className="text-[hsl(215,20%,55%)] leading-relaxed text-sm">
              Empower your development with AI that amplifies your capabilities
              without replacing your creativity.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[hsl(215,20%,55%)] hover:text-[hsl(174,100%,50%)] transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[hsl(215,20%,55%)] hover:text-[hsl(174,100%,50%)] transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-[hsl(215,20%,55%)] hover:text-[hsl(174,100%,50%)] transition-colors text-sm"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-[hsl(215,20%,55%)] hover:text-[hsl(174,100%,50%)] transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[hsl(215,20%,55%)] hover:text-[hsl(174,100%,50%)] transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-[hsl(215,20%,55%)] hover:text-[hsl(174,100%,50%)] transition-colors text-sm"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-[hsl(215,20%,55%)] hover:text-[hsl(174,100%,50%)] transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[hsl(215,20%,55%)] hover:text-[hsl(174,100%,50%)] transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-[hsl(215,20%,55%)] hover:text-[hsl(174,100%,50%)] transition-colors text-sm"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-[hsl(180,20%,60%)] text-sm">
          <p>&copy; 2026 AutoDevOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'

export default function Docs() {
  return (
    <div className="w-full">
      <Navigation />
      
      <Hero
        title="Documentation"
        subtitle="Everything you need to get started with AutoDevOS CLI"
      />

      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="mb-8">
                  <h3 className="text-white font-bold mb-4 text-[hsl(160,84%,39%)]">Getting Started</h3>
                  <ul className="space-y-2">
                    <li><a href="#installation" className="text-[hsl(180,20%,60%)] hover:text-[hsl(180,100%,50%)] transition-colors">Installation</a></li>
                    <li><a href="#quickstart" className="text-[hsl(180,20%,60%)] hover:text-[hsl(180,100%,50%)] transition-colors">Quick Start</a></li>
                    <li><a href="#configuration" className="text-[hsl(180,20%,60%)] hover:text-[hsl(180,100%,50%)] transition-colors">Configuration</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-4 text-[hsl(160,84%,39%)]">Core Features</h3>
                  <ul className="space-y-2">
                    <li><a href="#commands" className="text-[hsl(180,20%,60%)] hover:text-[hsl(180,100%,50%)] transition-colors">Commands</a></li>
                    <li><a href="#ai-assistance" className="text-[hsl(180,20%,60%)] hover:text-[hsl(180,100%,50%)] transition-colors">AI Assistance</a></li>
                    <li><a href="#integrations" className="text-[hsl(180,20%,60%)] hover:text-[hsl(180,100%,50%)] transition-colors">Integrations</a></li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              <div className="prose prose-invert max-w-none">
                <section id="installation" className="mb-16">
                  <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron' }}>Installation</h2>
                  <p className="text-[hsl(180,20%,60%)] mb-4">Install AutoDevOS CLI using your preferred package manager:</p>
                  
                  <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto mb-6 border border-white/10">
                    <code className="font-mono text-sm text-[hsl(160,84%,39%)]">
{`# Using npm
npm install -g autodevos-cli

# Using Homebrew (macOS/Linux)
brew install autodevos

# Using Docker
docker pull autodevos/cli`}
                    </code>
                  </pre>

                  <h3 className="text-2xl font-bold text-white mb-4 mt-8">System Requirements</h3>
                  <p className="text-[hsl(180,20%,60%)]">AutoDevOS CLI requires Node.js 16+ or Python 3.8+ and works on macOS, Linux, and Windows.</p>
                </section>

                <section id="quickstart" className="mb-16">
                  <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron' }}>Quick Start</h2>
                  <p className="text-[hsl(180,20%,60%)] mb-4">Initialize AutoDevOS in your project directory:</p>
                  
                  <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto mb-6 border border-white/10">
                    <code className="font-mono text-sm">
                      <span className="text-[hsl(160,84%,39%)]">$</span> <span className="text-white">cd your-project</span><br/>
                      <span className="text-[hsl(160,84%,39%)]">$</span> <span className="text-white">autodevos init</span>
                    </code>
                  </pre>

                  <p className="text-[hsl(180,20%,60%)] mb-4">Start the AI assistant:</p>
                  
                  <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto mb-6 border border-white/10">
                    <code className="font-mono text-sm">
                      <span className="text-[hsl(160,84%,39%)]">$</span> <span className="text-white">autodevos</span>
                    </code>
                  </pre>
                </section>

                <section id="configuration" className="mb-16">
                  <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron' }}>Configuration</h2>
                  <p className="text-[hsl(180,20%,60%)] mb-4">Customize your AutoDevOS experience by editing ~/.autodevos/config.json:</p>
                  
                  <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto border border-white/10">
                    <code className="font-mono text-sm text-[hsl(180,100%,50%)]">
{`{
  "model": "claude-sonnet-4",
  "privacy": "local-only",
  "auto_commit": true,
  "language_preferences": ["python", "javascript"]
}`}
                    </code>
                  </pre>
                </section>

                <section id="commands" className="mb-16">
                  <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron' }}>Commands</h2>
                  <p className="text-[hsl(180,20%,60%)] mb-4">AutoDevOS supports natural language commands. Here are some examples:</p>
                  
                  <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto border border-white/10">
                    <code className="font-mono text-sm text-[hsl(180,100%,50%)]">
{`autodevos "add error handling to api.js"
autodevos "refactor the auth module"
autodevos "write tests for user controller"
autodevos "optimize database queries"`}
                    </code>
                  </pre>
                </section>
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

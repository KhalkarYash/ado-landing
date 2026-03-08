"use client";

import type { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const sidebarGroups = [
  {
    title: "Getting Started",
    links: [
      { href: "#installation", label: "Installation" },
      { href: "#quickstart", label: "Quick Start" },
      { href: "#first-run", label: "First Run" },
    ],
  },
  {
    title: "Configuration",
    links: [
      { href: "#global-config", label: "Global Config" },
      { href: "#project-config", label: "Project Config" },
      { href: "#providers", label: "Provider Setup" },
    ],
  },
  {
    title: "Commands",
    links: [
      { href: "#cli-commands", label: "CLI Commands" },
      { href: "#session-commands", label: "In-Session Commands" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "#builtin-tools", label: "Built-in Tools" },
      { href: "#mcp", label: "MCP Integration" },
    ],
  },
  {
    title: "Advanced",
    links: [
      { href: "#hooks", label: "Lifecycle Hooks" },
      { href: "#safety", label: "Safety Controls" },
      { href: "#sessions", label: "Session Persistence" },
    ],
  },
];

function Prose({ children }: { children: ReactNode }) {
  return (
    <p className="text-[hsl(215,20%,60%)] mb-4 leading-relaxed">{children}</p>
  );
}

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="font-mono text-[hsl(174,100%,50%)] text-xs bg-white/6 px-1.5 py-0.5 rounded">
      {children}
    </code>
  );
}

function CodeBlock({
  code,
  highlight = false,
}: {
  code: string;
  highlight?: boolean;
}) {
  return (
    <pre className="bg-[hsl(222,47%,3%)] border border-white/10 rounded-xl overflow-x-auto mb-6 p-5">
      <code
        className={`font-mono text-sm leading-relaxed ${
          highlight ? "text-[hsl(174,100%,50%)]" : "text-[hsl(180,100%,92%)]"
        }`}
      >
        {code}
      </code>
    </pre>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-16 scroll-mt-32">
      <h2
        className="text-3xl font-black text-white mb-6"
        style={{ fontFamily: "Orbitron" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-6 rounded-xl border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/3">
            {headers.map((h, i) => (
              <th key={i} className="text-left py-3 px-4 font-bold text-white">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-b border-white/5 hover:bg-white/2 transition-colors last:border-0"
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`py-3 px-4 ${
                    ci === 0
                      ? "font-mono text-[hsl(174,100%,50%)] text-xs"
                      : "text-[hsl(215,20%,60%)]"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[hsl(215,20%,60%)] text-sm">
          <span className="text-[hsl(174,100%,50%)] mt-0.5 shrink-0">→</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Docs() {
  return (
    <div className="w-full">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-36 pb-24">
        <div className="mb-16">
          <p className="text-[hsl(174,100%,50%)] font-mono text-xs font-semibold mb-3 tracking-[0.2em] uppercase">
            Documentation
          </p>
          <h1
            className="text-4xl md:text-6xl font-black mb-4 bg-linear-to-r from-[hsl(180,100%,95%)] to-[hsl(174,100%,50%)] bg-clip-text text-transparent"
            style={{ fontFamily: "Orbitron" }}
          >
            AutoDevOS CLI Docs
          </h1>
          <p className="text-xl text-[hsl(215,20%,60%)] max-w-2xl">
            Everything you need to install, configure, and get the most out of
            AutoDevOS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {sidebarGroups.map((group, gi) => (
                <div key={gi}>
                  <h3 className="text-[hsl(174,100%,50%)] font-bold mb-3 text-sm">
                    {group.title}
                  </h3>
                  <ul className="space-y-2">
                    {group.links.map((link, li) => (
                      <li key={li}>
                        <a
                          href={link.href}
                          className="text-[hsl(215,20%,55%)] hover:text-[hsl(174,100%,50%)] transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          <main className="lg:col-span-3">
            <Section id="installation" title="Installation">
              <Prose>
                Install AutoDevOS CLI from PyPI using pip or pipx. Python 3.8 or
                newer is required.
              </Prose>
              <CodeBlock
                code={`pip install autodevos-cli\n\npipx install autodevos-cli`}
              />
              <Prose>
                After installation, the <Code>ados</Code> command is available
                globally in your shell.
              </Prose>
              <SubSection title="System Requirements">
                <DataTable
                  headers={["Requirement", "Minimum", "Notes"]}
                  rows={[
                    ["Python", "3.8+", "Tested on 3.10, 3.11, 3.12"],
                    [
                      "OS",
                      "macOS / Linux / Windows",
                      "Windows via WSL recommended",
                    ],
                    ["Disk", "~50 MB", "Excluding local model weights"],
                    [
                      "Memory",
                      "512 MB+",
                      "More recommended for large context windows",
                    ],
                  ]}
                />
              </SubSection>
            </Section>

            <Section id="quickstart" title="Quick Start">
              <SubSection title="1. Run the Setup Wizard">
                <Prose>
                  On first use, run the interactive auth wizard to configure
                  your LLM provider and API key:
                </Prose>
                <CodeBlock code={`ados auth setup`} />
                <Prose>
                  The wizard walks through selecting a provider, entering your
                  API key, and setting a default model.
                </Prose>
              </SubSection>
              <SubSection title="2. Open a Project">
                <Prose>
                  Navigate to any codebase and start an interactive session:
                </Prose>
                <CodeBlock code={`cd my-project\nados`} />
                <Prose>
                  You can also pass a directory directly, or run a single prompt
                  without entering interactive mode:
                </Prose>
                <CodeBlock
                  code={`ados ~/projects/my-app\n\nados "refactor the authentication module"`}
                />
              </SubSection>
              <SubSection title="3. Describe Your Task">
                <Prose>
                  Type any natural language task at the prompt. The agent reads
                  your project, selects tools, and executes autonomously:
                </Prose>
                <CodeBlock
                  code={`> add input validation to the /register endpoint and write tests for it`}
                />
              </SubSection>
            </Section>

            <Section id="first-run" title="First Run">
              <Prose>
                When you start <Code>ados</Code> in a project directory, it
                automatically:
              </Prose>
              <BulletList
                items={[
                  "Reads any AGENTS.md files in the directory tree for project-level instructions",
                  "Loads .autodevos/config.toml if present in the project root",
                  "Merges project config with your global config at ~/.config/autodevos/config.toml",
                  "Discovers and registers all available tools (built-ins + configured MCP servers)",
                  "Presents an interactive prompt for your first task",
                ]}
              />
              <Prose>
                Use <Code>ados --init</Code> to scaffold a starter{" "}
                <Code>.autodevos/config.toml</Code> in the current project.
              </Prose>
              <SubSection title="AGENTS.md">
                <Prose>
                  Drop an <Code>AGENTS.md</Code> file at your repo root or in
                  any subdirectory. The agent reads all matching files in the
                  current path hierarchy and uses them as project-level
                  instructions — coding conventions, testing notes, architecture
                  decisions, and more.
                </Prose>
              </SubSection>
            </Section>

            <Section id="global-config" title="Global Config">
              <Prose>
                The global config lives at{" "}
                <Code>~/.config/autodevos/config.toml</Code>. Settings here
                apply to every session unless overridden by a project config.
              </Prose>
              <CodeBlock
                highlight
                code={`[model]\nprovider = "anthropic"\nname = "claude-sonnet-4-20250514"\ntemperature = 1.0\ncontext_window = 128000`}
              />
              <SubSection title="All Config Fields">
                <DataTable
                  headers={["Field", "Default", "Description"]}
                  rows={[
                    ["model.provider", "ollama", "LLM provider to use"],
                    ["model.name", "(provider default)", "Model name or ID"],
                    ["model.temperature", "1.0", "Sampling temperature (0–2)"],
                    [
                      "model.context_window",
                      "128000",
                      "Token context window size",
                    ],
                    [
                      "model.requests_per_minute",
                      "(provider default)",
                      "Client-side rate limit",
                    ],
                    ["approval", "on-request", "Tool call approval policy"],
                    [
                      "max_turns",
                      "100",
                      "Maximum agentic loop iterations per session",
                    ],
                    [
                      "allowed_tools",
                      "null (all tools)",
                      "Restrict available tools by name",
                    ],
                    ["hooks_enabled", "false", "Enable lifecycle hooks"],
                    ["mcp_servers", "{}", "MCP server definitions"],
                    [
                      "developer_instructions",
                      "null",
                      "Extra instructions injected into system prompt",
                    ],
                    [
                      "user_instructions",
                      "null",
                      "User-level LLM instructions",
                    ],
                  ]}
                />
              </SubSection>
            </Section>

            <Section id="project-config" title="Project Config">
              <Prose>
                Place a <Code>.autodevos/config.toml</Code> in any project root
                to set project-specific defaults. These merge with and override
                global config.
              </Prose>
              <CodeBlock
                highlight
                code={`developer_instructions = """\nThis is a FastAPI project. Follow PEP 8. Use pytest for all tests.\nNever commit directly to main.\n"""\n\nallowed_tools = ["read_file", "write_file", "edit", "shell", "grep"]\napproval = "auto"\nmax_turns = 50`}
              />
              <Prose>
                The <Code>developer_instructions</Code> field is injected
                directly into the system prompt for every session in that
                directory, giving the agent permanent context about your stack
                and conventions.
              </Prose>
            </Section>

            <Section id="providers" title="Provider Setup">
              <Prose>
                AutoDevOS supports 8 LLM providers. Use{" "}
                <Code>ados auth set-key &lt;provider&gt;</Code> to store an API
                key, or export the <Code>API_KEY</Code> environment variable
                before running.
              </Prose>
              <DataTable
                headers={["Provider", "Default Model", "API Key Required"]}
                rows={[
                  ["anthropic", "claude-sonnet-4-20250514", "Yes"],
                  ["openai", "gpt-4o", "Yes"],
                  ["gemini", "gemini-1.5-pro", "Yes (15 RPM on free tier)"],
                  ["openrouter", "anthropic/claude-sonnet-4-20250514", "Yes"],
                  ["ollama", "llama3.2", "No — local server"],
                  ["lmstudio", "local-model", "No — local server"],
                  ["vllm", "local-model", "No — local server"],
                  ["custom", "—", "Optional"],
                ]}
              />
              <SubSection title="Switching Providers">
                <CodeBlock
                  code={`ados config provider anthropic\nados config model claude-opus-4-5`}
                />
              </SubSection>
              <SubSection title="Local Providers (Ollama, LM Studio, vLLM)">
                <Prose>
                  Local providers need no API key. If your server runs on a
                  non-default port, set <Code>BASE_URL</Code>:
                </Prose>
                <CodeBlock
                  code={`ados config provider ollama\nBASE_URL=http://localhost:11434 ados`}
                />
              </SubSection>
              <SubSection title="Custom OpenAI-Compatible Endpoint">
                <CodeBlock
                  highlight
                  code={`[model]\nprovider = "custom"\nname = "my-model"\n\n[model]\nbase_url = "https://my-llm-proxy.example.com/v1"`}
                />
              </SubSection>
            </Section>

            <Section id="cli-commands" title="CLI Commands">
              <SubSection title="Main Commands">
                <DataTable
                  headers={["Command", "Description"]}
                  rows={[
                    [
                      "ados",
                      "Start interactive session in the current directory",
                    ],
                    [
                      "ados <dir>",
                      "Start interactive session in the given directory",
                    ],
                    [
                      'ados "prompt"',
                      "Single-shot mode — run one prompt and exit",
                    ],
                    [
                      "ados --init",
                      "Create a starter .autodevos/config.toml in cwd",
                    ],
                  ]}
                />
              </SubSection>
              <SubSection title="Config Subcommands">
                <CodeBlock
                  code={`ados config              # show active configuration\nados config provider     # list or set the LLM provider\nados config model        # set the model name\nados config url          # set a custom base URL\nados config providers    # list all available providers`}
                />
              </SubSection>
              <SubSection title="Auth Subcommands">
                <CodeBlock
                  code={`ados auth                         # show current auth status\nados auth setup                   # run the interactive setup wizard\nados auth set-key <provider>      # store an API key for a provider\nados auth remove-key <provider>   # remove a stored key\nados auth generate-token          # generate a shareable team setup token\nados auth setup-token <token>     # apply a team setup token`}
                />
              </SubSection>
            </Section>

            <Section id="session-commands" title="In-Session Commands">
              <Prose>
                These slash commands are available at the prompt while inside an
                interactive session:
              </Prose>
              <DataTable
                headers={["Command", "Description"]}
                rows={[
                  ["/help", "Show all available in-session commands"],
                  ["/config", "Display the currently active configuration"],
                  ["/tools", "List all available tools (built-in + MCP)"],
                  [
                    "/stats",
                    "Show session statistics — turns used, tokens, etc.",
                  ],
                  [
                    "/save",
                    "Persist the current session to disk for later resumption",
                  ],
                  ["/clear", "Clear the conversation history (does not save)"],
                  [
                    "/model <name>",
                    "Hot-swap the active model without ending the session",
                  ],
                  ["/exit or /quit", "End the current session"],
                ]}
              />
            </Section>

            <Section id="builtin-tools" title="Built-in Tools">
              <Prose>
                These tools are registered automatically in every session. The
                agent selects and chains them based on the task at hand:
              </Prose>
              <DataTable
                headers={["Tool", "Category", "Description"]}
                rows={[
                  [
                    "shell",
                    "Execution",
                    "Execute shell commands with a configurable timeout; hard-blocks destructive patterns",
                  ],
                  [
                    "edit",
                    "Write",
                    "Surgical text replacement — replaces old_string with new_string, optionally all occurrences",
                  ],
                  [
                    "write_file",
                    "Write",
                    "Write or fully overwrite a file at any path",
                  ],
                  [
                    "read_file",
                    "Read",
                    "Read file contents with optional byte offset and line limit",
                  ],
                  ["list_dir", "Read", "List the contents of a directory"],
                  [
                    "glob",
                    "Read",
                    "Find files matching a glob pattern across the project",
                  ],
                  [
                    "grep",
                    "Read",
                    "Search file contents with a regex — returns file, line number, and match",
                  ],
                  [
                    "web_search",
                    "Network",
                    "Search the web via DuckDuckGo — returns titles, URLs, and snippets",
                  ],
                  [
                    "web_fetch",
                    "Network",
                    "Fetch and return the readable text content of any URL",
                  ],
                  [
                    "memory",
                    "Storage",
                    "Persistent key-value store — actions: set, get, delete, list, clear",
                  ],
                  [
                    "todo",
                    "Tracking",
                    "Create and manage a task list scoped to the current session",
                  ],
                ]}
              />
              <SubSection title="Restricting Tools per Project">
                <Prose>
                  Limit the tools available in a project by setting{" "}
                  <Code>allowed_tools</Code> in{" "}
                  <Code>.autodevos/config.toml</Code>:
                </Prose>
                <CodeBlock
                  highlight
                  code={`allowed_tools = ["read_file", "edit", "grep", "shell"]`}
                />
              </SubSection>
            </Section>

            <Section id="mcp" title="MCP Integration">
              <Prose>
                Extend the agent with any Model Context Protocol (MCP) server.
                Tools from MCP servers are discovered and registered at session
                startup alongside built-ins, and respect the same approval
                policies.
              </Prose>
              <SubSection title="Stdio Transport">
                <Prose>
                  Launch an MCP server as a child process over stdin/stdout:
                </Prose>
                <CodeBlock
                  highlight
                  code={`[mcp_servers.filesystem]\ntype = "stdio"\ncommand = "npx"\nargs = ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]`}
                />
              </SubSection>
              <SubSection title="HTTP/SSE Transport">
                <Prose>
                  Connect to a running MCP server over HTTP Server-Sent Events:
                </Prose>
                <CodeBlock
                  highlight
                  code={`[mcp_servers.my-server]\ntype = "sse"\nurl = "http://localhost:3100/sse"`}
                />
              </SubSection>
              <Prose>
                Use <Code>/tools</Code> inside a session to verify MCP tools
                have been loaded successfully.
              </Prose>
            </Section>

            <Section id="hooks" title="Lifecycle Hooks">
              <Prose>
                Hooks let you run shell commands or scripts at specific points
                in the agent lifecycle. Set <Code>hooks_enabled = true</Code>{" "}
                and define hook entries in your config:
              </Prose>
              <CodeBlock
                highlight
                code={`hooks_enabled = true\n\n[[hooks]]\nevent = "after_tool"\ntool = "edit"\ncommand = "npm run lint -- --fix"\n\n[[hooks]]\nevent = "after_agent"\ncommand = "git add -A && git commit -m 'ados: changes'"`}
              />
              <DataTable
                headers={["Event", "Fires When"]}
                rows={[
                  [
                    "before_agent",
                    "Before the agent processes the first user message in a turn",
                  ],
                  [
                    "after_agent",
                    "After the agent produces its final response for a turn",
                  ],
                  ["before_tool", "Before any tool call is dispatched"],
                  ["after_tool", "After a tool call completes successfully"],
                  ["on_error", "When any tool call returns an error"],
                ]}
              />
              <Prose>
                Optionally filter a hook to fire only for a specific tool by
                adding a <Code>tool</Code> key to the hook entry.
              </Prose>
            </Section>

            <Section id="safety" title="Safety Controls">
              <SubSection title="Approval Policies">
                <Prose>
                  Control when the agent asks for your confirmation before
                  executing tool calls:
                </Prose>
                <DataTable
                  headers={["Policy", "Behaviour"]}
                  rows={[
                    [
                      "on-request",
                      "Ask before every tool call — safest, default setting",
                    ],
                    ["on-failure", "Ask only when a tool returns an error"],
                    [
                      "auto",
                      "Approve all tool calls automatically — useful in CI",
                    ],
                    [
                      "auto-edit",
                      "Auto-approve file edits only; ask for shell commands",
                    ],
                  ]}
                />
                <CodeBlock highlight code={`approval = "auto-edit"`} />
              </SubSection>
              <SubSection title="Blocked Shell Commands">
                <Prose>
                  The <Code>shell</Code> tool hard-blocks a set of destructive
                  patterns regardless of approval policy:
                </Prose>
                <BulletList
                  items={[
                    "rm -rf / and similar root-level deletions",
                    "Fork bombs: :(){ :|:&};:",
                    "Filesystem format commands: mkfs.*",
                    "Other hard-coded dangerous patterns",
                  ]}
                />
              </SubSection>
              <SubSection title="Secret Variable Filtering">
                <Prose>
                  Environment variables matching <Code>*KEY*</Code>,{" "}
                  <Code>*TOKEN*</Code>, and <Code>*SECRET*</Code> are stripped
                  from the shell environment visible to the agent. Override or
                  extend this list via the <Code>shell_environment</Code>
                  config section.
                </Prose>
              </SubSection>
              <SubSection title="Path Validation">
                <Prose>
                  File read and write tools validate paths to prevent directory
                  traversal outside the working directory.
                </Prose>
              </SubSection>
            </Section>

            <Section id="sessions" title="Session Persistence">
              <Prose>
                Save and resume sessions to pick up work across terminal
                restarts:
              </Prose>
              <CodeBlock
                code={`/save          # save the current session to disk\n/clear         # wipe conversation history without saving`}
              />
              <Prose>
                Saved sessions are stored in{" "}
                <Code>~/.local/share/autodevos/sessions/</Code>. When you start{" "}
                <Code>ados</Code> and a recent session exists, it will prompt
                you to resume.
              </Prose>
              <SubSection title="Context Compaction">
                <Prose>
                  When a conversation approaches the configured{" "}
                  <Code>context_window</Code>, AutoDevOS automatically
                  summarises older messages into a compact representation so the
                  session continues without losing task context. Increase the
                  window for models that support it:
                </Prose>
                <CodeBlock
                  highlight
                  code={`[model]\ncontext_window = 200000`}
                />
              </SubSection>
              <SubSection title="Persistent Memory Tool">
                <Prose>
                  The <Code>memory</Code> tool gives the agent a persistent
                  key-value store that survives across sessions, stored at{" "}
                  <Code>~/.local/share/autodevos/user_memory.json</Code>. Use it
                  to remember preferences, project notes, or any context the
                  agent should recall in future sessions.
                </Prose>
              </SubSection>
            </Section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

//       <section className="py-16 md:py-24 px-6 md:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* Sidebar */}
//             <aside className="lg:col-span-1">
//               <div className="sticky top-32">
//                 <div className="mb-8">
//                   <h3 className="text-white font-bold mb-4 text-[hsl(160,84%,39%)]">Getting Started</h3>
//                   <ul className="space-y-2">
//                     <li><a href="#installation" className="text-[hsl(180,20%,60%)] hover:text-[hsl(180,100%,50%)] transition-colors">Installation</a></li>
//                     <li><a href="#quickstart" className="text-[hsl(180,20%,60%)] hover:text-[hsl(180,100%,50%)] transition-colors">Quick Start</a></li>
//                     <li><a href="#configuration" className="text-[hsl(180,20%,60%)] hover:text-[hsl(180,100%,50%)] transition-colors">Configuration</a></li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-white font-bold mb-4 text-[hsl(160,84%,39%)]">Core Features</h3>
//                   <ul className="space-y-2">
//                     <li><a href="#commands" className="text-[hsl(180,20%,60%)] hover:text-[hsl(180,100%,50%)] transition-colors">Commands</a></li>
//                     <li><a href="#ai-assistance" className="text-[hsl(180,20%,60%)] hover:text-[hsl(180,100%,50%)] transition-colors">AI Assistance</a></li>
//                     <li><a href="#integrations" className="text-[hsl(180,20%,60%)] hover:text-[hsl(180,100%,50%)] transition-colors">Integrations</a></li>
//                   </ul>
//                 </div>
//               </div>
//             </aside>

//             {/* Main Content */}
//             <main className="lg:col-span-3">
//               <div className="prose prose-invert max-w-none">
//                 <section id="installation" className="mb-16">
//                   <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron' }}>Installation</h2>
//                   <p className="text-[hsl(180,20%,60%)] mb-4">Install AutoDevOS CLI using your preferred package manager:</p>

//                   <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto mb-6 border border-white/10">
//                     <code className="font-mono text-sm text-[hsl(160,84%,39%)]">
// {`# Using npm
// npm install -g autodevos-cli

// # Using Homebrew (macOS/Linux)
// brew install autodevos

// # Using Docker
// docker pull autodevos/cli`}
//                     </code>
//                   </pre>

//                   <h3 className="text-2xl font-bold text-white mb-4 mt-8">System Requirements</h3>
//                   <p className="text-[hsl(180,20%,60%)]">AutoDevOS CLI requires Node.js 16+ or Python 3.8+ and works on macOS, Linux, and Windows.</p>
//                 </section>

//                 <section id="quickstart" className="mb-16">
//                   <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron' }}>Quick Start</h2>
//                   <p className="text-[hsl(180,20%,60%)] mb-4">Initialize AutoDevOS in your project directory:</p>

//                   <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto mb-6 border border-white/10">
//                     <code className="font-mono text-sm">
//                       <span className="text-[hsl(160,84%,39%)]">$</span> <span className="text-white">cd your-project</span><br/>
//                       <span className="text-[hsl(160,84%,39%)]">$</span> <span className="text-white">autodevos init</span>
//                     </code>
//                   </pre>

//                   <p className="text-[hsl(180,20%,60%)] mb-4">Start the AI assistant:</p>

//                   <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto mb-6 border border-white/10">
//                     <code className="font-mono text-sm">
//                       <span className="text-[hsl(160,84%,39%)]">$</span> <span className="text-white">autodevos</span>
//                     </code>
//                   </pre>
//                 </section>

//                 <section id="configuration" className="mb-16">
//                   <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron' }}>Configuration</h2>
//                   <p className="text-[hsl(180,20%,60%)] mb-4">Customize your AutoDevOS experience by editing ~/.autodevos/config.json:</p>

//                   <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto border border-white/10">
//                     <code className="font-mono text-sm text-[hsl(180,100%,50%)]">
// {`{
//   "model": "claude-sonnet-4",
//   "privacy": "local-only",
//   "auto_commit": true,
//   "language_preferences": ["python", "javascript"]
// }`}
//                     </code>
//                   </pre>
//                 </section>

//                 <section id="commands" className="mb-16">
//                   <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron' }}>Commands</h2>
//                   <p className="text-[hsl(180,20%,60%)] mb-4">AutoDevOS supports natural language commands. Here are some examples:</p>

//                   <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto border border-white/10">
//                     <code className="font-mono text-sm text-[hsl(180,100%,50%)]">
// {`autodevos "add error handling to api.js"
// autodevos "refactor the auth module"
// autodevos "write tests for user controller"
// autodevos "optimize database queries"`}
//                     </code>
//                   </pre>
//                 </section>
//               </div>
//             </main>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

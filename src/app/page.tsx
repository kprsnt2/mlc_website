'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const features = [
  { icon: "🏠", title: "6 AI Providers", desc: "LM Studio, Ollama, OpenRouter, OpenAI, Groq, Custom" },
  { icon: "🛠️", title: "26 Tools", desc: "File ops, search, git, web fetch, todos, multi-edit" },
  { icon: "🤖", title: "5 Agents", desc: "Code reviewer, explorer, test generator, refactorer, doc writer" },
  { icon: "🎓", title: "22 Skills", desc: "Auto-injected best practices for JS, Python, React, and more" },
  { icon: "📋", title: "15+ Commands", desc: "Slash commands like Claude Code" },
  { icon: "🔒", title: "Private & Local", desc: "Runs locally, your data stays yours" },
];

const providers = [
  { name: "LM Studio", type: "Local", free: true },
  { name: "Ollama", type: "Local", free: true },
  { name: "OpenRouter", type: "Cloud", free: true },
  { name: "Groq", type: "Cloud", free: true },
  { name: "OpenAI", type: "Cloud", free: false },
  { name: "Custom", type: "Any", free: null },
];

const docs = [
  { href: "/docs/getting-started", title: "Getting Started", desc: "Install and set up in 5 minutes" },
  { href: "/docs/tools", title: "Tools Reference", desc: "26 built-in tools for file ops, git, and more" },
  { href: "/docs/skills", title: "Skills System", desc: "22 skills with auto-injection" },
  { href: "/docs/agents", title: "Agents Guide", desc: "5 specialized AI agents" },
  { href: "/docs/configuration", title: "Configuration", desc: "Provider settings and project config" },
];

function CodeBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center gap-3 bg-[#171717] border border-[#262626] px-6 py-3 rounded-lg">
      <code className="text-lg font-mono whitespace-nowrap">
        <span className="text-gray-500">$</span>{" "}
        <span className="text-[#10b981]">{command}</span>
      </code>
      <button
        type="button"
        onClick={handleCopy}
        className="ml-4 px-4 py-2 text-sm bg-[#262626] hover:bg-[#363636] text-gray-300 hover:text-white rounded-md transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
      >
        {copied ? (
          <>✓ Copied!</>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  );
}

function SmallCodeBlock({ command, label }: { command: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-[#0a0a0a] border border-[#262626] rounded-lg p-4">
      <p className="text-gray-500 text-sm mb-2">{label}</p>
      <div className="flex items-center justify-between gap-4">
        <code className="text-[#c3e88d] font-mono">{command}</code>
        <button
          type="button"
          onClick={handleCopy}
          className="px-3 py-1.5 text-xs bg-[#262626] hover:bg-[#363636] text-gray-400 hover:text-white rounded transition-all cursor-pointer"
        >
          {copied ? '✓' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/docs/getting-started');
  };

  const handleGitHub = () => {
    window.open('https://github.com/kprsnt2/MyLocalCLI', '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">MyLocalCLI</span>{" "}
              <span className="text-4xl md:text-5xl">⚡</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Your Own AI Coding Assistant
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              A Claude Code alternative that works with <span className="text-[#7c3aed]">local LLMs</span> and{" "}
              <span className="text-[#06b6d4]">free cloud APIs</span>. Private, local, yours.
            </p>

            <div className="flex justify-center mb-8">
              <CodeBlock command="npm install -g mylocalcli" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleGetStarted}
                className="px-8 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors text-lg cursor-pointer"
              >
                Get Started →
              </button>
              <button
                type="button"
                onClick={handleGitHub}
                className="px-8 py-3 bg-[#171717] hover:bg-[#262626] border border-[#404040] text-white font-semibold rounded-lg transition-colors text-lg flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-[#171717] border border-[#262626] rounded-xl p-6 hover:border-[#7c3aed]/50 transition-colors"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="bg-[#171717] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Quick Start</h2>
          <div className="max-w-xl mx-auto space-y-4">
            <SmallCodeBlock command="npm install -g mylocalcli" label="# Install globally" />
            <SmallCodeBlock command="mlc init" label="# Run setup wizard" />
            <SmallCodeBlock command="mlc" label="# Start chatting" />
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Supported Providers</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="px-6 py-4 text-left text-white">Provider</th>
                  <th className="px-6 py-4 text-left text-white">Type</th>
                  <th className="px-6 py-4 text-left text-white">Free?</th>
                </tr>
              </thead>
              <tbody>
                {providers.map((p, i) => (
                  <tr key={i} className="border-b border-[#262626] last:border-0">
                    <td className="px-6 py-4 text-gray-300">{p.name}</td>
                    <td className="px-6 py-4 text-gray-400">{p.type}</td>
                    <td className="px-6 py-4">
                      {p.free === true && <span className="text-[#10b981]">✅ Yes</span>}
                      {p.free === false && <span className="text-gray-500">❌ No</span>}
                      {p.free === null && <span className="text-gray-500">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="bg-gradient-to-b from-[#0a0a0a] to-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-4">🛡️ Privacy & Security</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            We believe your code should stay private. Choose the right provider for your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Local Providers */}
            <div className="bg-[#0a0a0a] border border-[#10b981]/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">✅</span>
                <h3 className="text-xl font-semibold text-[#10b981]">Local Providers (Full Privacy)</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981]">•</span>
                  <span><strong>LM Studio, Ollama</strong> - All data stays on YOUR machine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981]">•</span>
                  <span>No data leaves your computer - 100% private</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981]">•</span>
                  <span>Recommended for sensitive/proprietary code</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#262626]">
                <p className="text-sm text-gray-500 mb-2">Get started:</p>
                <div className="flex flex-wrap gap-2">
                  <a href="https://lmstudio.ai" target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-[#171717] hover:bg-[#262626] text-[#10b981] rounded transition-colors">
                    LM Studio →
                  </a>
                  <a href="https://ollama.ai" target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-[#171717] hover:bg-[#262626] text-[#10b981] rounded transition-colors">
                    Ollama →
                  </a>
                  <a href="https://docs.vllm.ai" target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-[#171717] hover:bg-[#262626] text-[#10b981] rounded transition-colors">
                    vLLM (GPU) →
                  </a>
                </div>
              </div>
            </div>

            {/* Cloud Providers */}
            <div className="bg-[#0a0a0a] border border-[#f59e0b]/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⚠️</span>
                <h3 className="text-xl font-semibold text-[#f59e0b]">Cloud Providers (Data Shared)</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b]">•</span>
                  <span><strong>OpenRouter, Groq, OpenAI</strong> - Data sent to their servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b]">•</span>
                  <span>Providers may log or store your prompts/code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b]">•</span>
                  <span>Good for non-sensitive projects or quick testing</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#262626]">
                <p className="text-sm text-gray-500 mb-2">Free API keys:</p>
                <div className="flex flex-wrap gap-2">
                  <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-[#171717] hover:bg-[#262626] text-[#f59e0b] rounded transition-colors">
                    OpenRouter →
                  </a>
                  <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-[#171717] hover:bg-[#262626] text-[#f59e0b] rounded transition-colors">
                    Groq →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            💡 <strong>Tip:</strong> For production use with sensitive code, we recommend local providers or self-hosting with vLLM.
          </p>
        </div>
      </section>

      {/* Documentation */}
      <section className="bg-[#171717] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {docs.map((doc, i) => (
              <button
                key={i}
                onClick={() => router.push(doc.href)}
                className="text-left bg-[#0a0a0a] border border-[#262626] rounded-xl p-6 hover:border-[#06b6d4]/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#06b6d4] transition-colors">
                  {doc.title} →
                </h3>
                <p className="text-gray-400 text-sm">{doc.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
        <p className="text-gray-400 mb-8">Install MyLocalCLI and start coding with AI today.</p>
        <CodeBlock command="npm install -g mylocalcli" />
      </section>
    </div>
  );
}

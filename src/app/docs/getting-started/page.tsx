import fs from 'fs';
import path from 'path';
import DocLayout from '../DocLayout';

export default function GettingStartedPage() {
    // Read the markdown file at build time
    const filePath = path.join(process.cwd(), '..', 'docs', 'getting-started.md');
    let content = '';

    try {
        content = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        content = `# Getting Started

Welcome to **MyLocalCLI** — your universal AI chat companion for the terminal. This guide will walk you through installation, provider setup, and your first chat session.

---

## Prerequisites

- **Node.js 18+** — Download from [nodejs.org](https://nodejs.org) if you don't have it installed.

Verify your Node.js version:

\`\`\`bash
node --version
\`\`\`

---

## Installation

Install MyLocalCLI globally via npm:

\`\`\`bash
npm install -g mylocalcli
\`\`\`

---

## Setup Wizard

Run the interactive setup wizard to configure your preferred AI provider:

\`\`\`bash
mlc init
\`\`\`

The wizard walks you through **provider selection**, API key entry, and model configuration. You can re-run it anytime to add or change providers.

---

## Provider Quick Setup

MyLocalCLI supports **7 providers** out of the box. Choose the one that fits your workflow:

### LM Studio (Local)

1. Download [LM Studio](https://lmstudio.ai) and install it.
2. Open LM Studio, browse the model catalog, and load a model.
3. Start the local inference server from within LM Studio.
4. MLC auto-detects the LM Studio server at \\\`http://localhost:1234\\\`.

### Ollama (Local)

1. Install Ollama from [ollama.com](https://ollama.com).
2. Pull a model:
   \`\`\`bash
   ollama pull llama3
   \`\`\`
3. Start the Ollama server:
   \`\`\`bash
   ollama serve
   \`\`\`
4. MLC auto-detects Ollama at \\\`http://localhost:11434\\\`.

### OpenRouter (Cloud — Free Tier Available)

1. Sign up at [openrouter.ai](https://openrouter.ai) and get a **free API key**.
2. Run \\\`mlc init\\\` and select **OpenRouter** as your provider.
3. Paste your API key when prompted.

### OpenAI (Cloud)

1. Get an API key from [platform.openai.com](https://platform.openai.com).
2. Run \\\`mlc init\\\` and select **OpenAI** as your provider.
3. Paste your API key when prompted.

### Groq (Cloud — Free Tier Available)

1. Sign up at [console.groq.com](https://console.groq.com) and get a **free API key**.
2. Run \\\`mlc init\\\` and select **Groq** as your provider.
3. Paste your API key when prompted.

### NVIDIA API (Cloud)

1. Get an API key from [build.nvidia.com](https://build.nvidia.com).
2. Run \\\`mlc init\\\` and select **NVIDIA API** as your provider.
3. Paste your API key when prompted.
4. Default model: \\\`z-ai/glm5\\\`.

### Custom Endpoint

1. Run \\\`mlc init\\\` and select **Custom** as your provider.
2. Enter your endpoint URL and any required API key.
3. Configure the model name as needed.

---

## First Chat

Launch the animated **TUI (Terminal User Interface)** mode:

\`\`\`bash
mlc
\`\`\`

Or start in **classic mode** for a simpler experience:

\`\`\`bash
mlc --classic
\`\`\`

---

## Quick Commands

Once inside a chat session, use these shortcuts:

| Command | Description |
|---------|-------------|
| \\\`/help\\\` | Show all available commands |
| \\\`/tools\\\` | List available tools |
| \\\`/skills\\\` | List available skills |
| \\\`/mode\\\` | Switch between AI modes |
| \\\`Tab\\\` | Switch between modes quickly |
| \\\`$\\\` | Open a shell command |
| \\\`$$\\\` | Open an incognito shell (no history) |

---

## Health Check

Run the built-in diagnostic to verify all your providers and local endpoints are working:

\`\`\`bash
mlc doctor
\`\`\`

This checks connectivity to configured providers, validates API keys, and confirms local servers (LM Studio, Ollama) are reachable.

---

## Key Features Overview

| Feature | Details |
|---------|---------|
| **Tools** | 42 built-in tools |
| **Skills** | 38 ready-to-use skills |
| **Providers** | 7 supported providers |
| **UI** | Animated terminal interface |
| **Cost Tracking** | Real-time token & cost monitoring |

---

Ready to dive deeper? Check out the [full documentation](https://github.com/kprsnt2/MyLocalCLI) for advanced configuration, custom skills, and more.
`;
    }

    return <DocLayout content={content} title="Getting Started" />;
}

import DocLayout from '../DocLayout';

export default function FeaturesPage() {
    const content = `# Advanced Features

MyLocalCLI includes powerful features inspired by professional CLI tools like OpenCode and AmpCode. As of **v4.0.2**, the CLI operates at Gemini-parity with the Claw-Code automation ecosystem.

---

## ⚡ Parallel Tool Execution

Instead of executing tools synchronously, the CLI now uses Promise-mapped loops to fire off tools concurrently. For example, if the AI needs to check 5 different files, it will trigger exactly 5 simultaneous file reads rather than waiting. This massively reduces waiting time!

---

## 👁️ Multimodal Vision Injection

MyLocalCLI natively understands images. Just drop a \`.png\`, \`.jpg\`, \`.jpeg\`, or \`.webp\` path into your prompt and the CLI will silently detect it, read it as \`base64\`, and inject it into the vision payload for your local LLM (like \`Llava\`) or cloud provider.

---

## 🔌 Standard-IO MCP Integration

The CLI connects standard Model Context Protocol (MCP) servers locally via Node.js \`child_process\`. It spins up external ecosystem modules passing securely over \`stdio\` JSON-RPC pipes, so you can leverage the entire open-source MCP community directly inside MyLocalCLI!

---

## 🧠 Background Crons & Workers

Background LLM workers execute autonomously without blocking your active prompt. Handled safely through local persisting ledgers (\`.mylocalcli/tasks.json\` and \`.mylocalcli/crons.json\`), these workers run on internal \`setInterval\` loops to poll project statuses, fix trailing errors, or monitor logs in the background!

---

## 📌 Context Pinning

Pin important files to always include them in the AI's context. This ensures the AI always has access to critical files without you needing to reference them each time.

### Commands

| Command | Description |
|---------|-------------|
| \`/pin <file>\` | Pin a file to always include |
| \`/unpin <file>\` | Remove a file from pinned |
| \`/pins\` | List all pinned files |

### Example Usage

\`\`\`bash
/pin src/config.js        # Always include config
/pin src/types.ts         # Always include types
/pins                     # See what's pinned
/unpin src/types.ts       # Remove from pinned
\`\`\`

**Tip**: Pin your main types file, config, or any file you frequently reference!

---

## 🌿 Session Branching

Create conversation branches to explore different approaches without losing your current progress. Perfect for trying alternatives or exploring "what if" scenarios.

### Commands

| Command | Description |
|---------|-------------|
| \`/branch <name>\` | Create a new branch from current conversation |
| \`/branches\` | List all branches |
| \`/checkout <name>\` | Switch to a different branch |
| \`/checkout main\` | Return to main conversation |

### Example Usage

\`\`\`bash
/branch refactor-attempt     # Save current state as branch
# ... try something different ...
/checkout refactor-attempt   # Go back to that branch
/checkout main               # Return to main
\`\`\`

---

## 📦 Project Templates

Initialize your project with predefined configurations that help the AI understand your project structure and follow best practices.

### Available Templates

| Template | Description |
|----------|-------------|
| \`react\` | React + TypeScript application |
| \`python-api\` | Python FastAPI/Flask backend |
| \`node\` | Node.js application |
| \`nextjs\` | Next.js full-stack app |
| \`express\` | Express.js REST API |

### Usage

\`\`\`bash
/templates        # List all templates
/init react       # Initialize React project
/init python-api  # Initialize Python API
\`\`\`

This creates a \`MYLOCALCLI.md\` file with project-specific guidelines.

---

## 🎯 Custom Skills

Create your own skills to teach the AI your specific workflows and preferences.

### Commands

| Command | Description |
|---------|-------------|
| \`/skill create <name>\` | Create a new custom skill |
| \`/skill search <query>\` | Search existing skills |
| \`/skills\` | List all available skills |

### Creating a Skill

\`\`\`bash
/skill create my-testing-standards
\`\`\`

This creates a template at \`.mylocalcli/skills/my-testing-standards/SKILL.md\` that you can edit.

### Skill File Format

\`\`\`markdown
---
name: "my-testing-standards"
description: "My project's testing requirements"
priority: 50
globs: ["**/*.test.js", "**/*.spec.ts"]
---

# Testing Standards

- Always use React Testing Library
- Test user behavior, not implementation
- Aim for 80% coverage
\`\`\`

---

## 🤖 Subagents

Invoke specialized agents using @mentions for complex tasks.

### Available Subagents

| Subagent | Usage | Purpose |
|----------|-------|---------|
| 🔮 \`@oracle\` | Complex searches | Multi-step analysis and pattern finding |
| 📚 \`@librarian\` | Code exploration | Understanding and documenting code |
| 👀 \`@reviewer\` | Code review | Finding bugs and suggesting improvements |

### Example Usage

\`\`\`bash
@oracle find all places where user authentication happens

@librarian explain how the payment system works

@reviewer check my recent changes for bugs
\`\`\`

### View All Subagents

\`\`\`bash
/subagents    # List available subagents
\`\`\`

---

## 💰 Cost Tracking & Token Usage

Monitor your session costs and token usage in real-time.

### Commands

| Command | Description |
|---------|-------------|
| \`/cost\` | Show session token usage and estimated cost |
| \`/session save\` | Persist session with token counts |
| \`/session list\` | Show saved sessions |

### Features

- Real-time cost estimation with model-specific pricing
- Animated session summary on exit shows messages, tool calls, tokens, cost, and duration

### Example Usage

\`\`\`bash
/cost                # See current session usage and cost
/session save        # Save session with token counts
/session list        # View all saved sessions
\`\`\`

---

## 🔒 Tool Permissions System

Control which tools the AI can use with a fine-grained permissions system. Restrict access for safety or apply preset profiles.

### Commands

| Command | Description |
|---------|-------------|
| \`/permissions\` | Show current permission state |
| \`/permissions deny <tool>\` | Block a specific tool |
| \`/permissions allow <tool>\` | Unblock a tool |
| \`/permissions profile <name>\` | Apply a preset profile |

### Built-in Profiles

| Profile | Description |
|---------|-------------|
| \`full\` | All tools enabled (default) |
| \`readonly\` | Only read operations allowed |
| \`safe\` | No destructive operations |
| \`noExec\` | No command execution |

### Example Usage

\`\`\`bash
/permissions                     # See what's allowed
/permissions deny bash           # Block shell execution
/permissions profile readonly    # Switch to read-only mode
/permissions allow edit_file     # Re-enable editing
\`\`\`

**Tip**: PLAN mode automatically blocks write tools — no manual config needed!

---

## 🧭 Prompt Router

Understand how the AI would handle your prompt before sending it.

### Commands

| Command | Description |
|---------|-------------|
| \`/route <prompt>\` | Show which tools/commands match your prompt |

### Features

- Scores prompts against all 42 tools and commands
- Helps understand what the AI would use for a given request

### Example Usage

\`\`\`bash
/route fix the bug in auth.ts    # See which tools would be used
/route run the test suite        # Check routing for test commands
\`\`\`

---

## 📡 Stream Events & Execution Registry

Inspect the internal event stream and command execution history for debugging and transparency.

### Commands

| Command | Description |
|---------|-------------|
| \`/events\` | Show the stream event log (message_start, tool_use, tool_result, etc.) |
| \`/registry\` | Show all command/tool execution counts and recent activity |
| \`/transcript\` | Show the session conversation transcript |

### Example Usage

\`\`\`bash
/events       # View stream events
/registry     # See tool usage stats
/transcript   # Review full conversation
\`\`\`

---

## 🎨 Animated UI

MyLocalCLI features rich terminal animations for a polished developer experience.

### Visual Effects

- **Gradient Logo**: Purple-to-lavender color sweep rendered line by line
- **Animated Startup**: Boot steps with spinner-to-checkmark transitions
- **Tool Execution**: Per-tool icon spinners (e.g., 🚀 for read_file, 🔧 for edit, 🧪 for test_run)
- **Mode Switch**: Flash effect animation with boxed display
- **Session Exit**: Wipe transition + gradient header + staggered stat lines
- **Thinking Animation**: Multi-phase cycle — Thinking → Reasoning → Processing → Generating

### Gradient Palettes

| Palette | Style |
|---------|-------|
| \`purple\` | Default purple-to-lavender sweep |
| \`cyber\` | Cyberpunk-inspired blue-pink |
| \`fire\` | Warm red-orange-yellow |
| \`neon\` | Bright neon green-cyan |
| \`matrix\` | Classic green terminal |

---

## 🩺 Doctor Command

Diagnose your provider connections and configuration with a single command.

### Usage

\`\`\`bash
mlc doctor    # Run connectivity checks
\`\`\`

### Features

- Checks connectivity to all 7 providers
- Probes common local OpenAI-compatible endpoints (ports 1234, 11434, 8080, 5000, 3000)
- Reports model counts for connected providers
- Shows current active provider and model configuration

---

## Quick Reference

| Feature | Command | Description |
|---------|---------|-------------|
| Pin file | \`/pin <file>\` | Always include in context |
| Create branch | \`/branch <name>\` | Save conversation state |
| Init project | \`/init <template>\` | Set up project config |
| Create skill | \`/skill create <name>\` | Make custom skill |
| Use subagent | \`@oracle <query>\` | Invoke specialized agent |
| Session cost | \`/cost\` | Show token usage and cost |
| Save session | \`/session save\` | Persist session with stats |
| List sessions | \`/session list\` | Show saved sessions |
| Permissions | \`/permissions\` | Show permission state |
| Deny tool | \`/permissions deny <tool>\` | Block a specific tool |
| Allow tool | \`/permissions allow <tool>\` | Unblock a tool |
| Permission profile | \`/permissions profile <name>\` | Apply preset (full, readonly, safe, noExec) |
| Route prompt | \`/route <prompt>\` | Preview tool matching for a prompt |
| Stream events | \`/events\` | Show stream event log |
| Registry | \`/registry\` | Show execution counts |
| Transcript | \`/transcript\` | Show conversation transcript |
| Doctor | \`mlc doctor\` | Check provider connectivity |
`;

    return <DocLayout content={content} title="Advanced Features" />;
}

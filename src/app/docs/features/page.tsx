import DocLayout from '../DocLayout';

export default function FeaturesPage() {
    const content = `# Advanced Features

MyLocalCLI includes powerful features inspired by professional CLI tools like OpenCode and AmpCode.

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

## Quick Reference

| Feature | Command | Description |
|---------|---------|-------------|
| Pin file | \`/pin <file>\` | Always include in context |
| Create branch | \`/branch <name>\` | Save conversation state |
| Init project | \`/init <template>\` | Set up project config |
| Create skill | \`/skill create <name>\` | Make custom skill |
| Use subagent | \`@oracle <query>\` | Invoke specialized agent |
`;

    return <DocLayout content={content} title="Advanced Features" />;
}

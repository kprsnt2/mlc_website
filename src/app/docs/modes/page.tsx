import DocLayout from '../DocLayout';

export default function ModesPage() {
    const content = `# Modes & Shell Commands

MyLocalCLI features powerful modes inspired by [OpenCode](https://github.com/anomalyco/opencode) and [AmpCode](https://ampcode.com/) - two of the best CLI tools available.

## Agent Modes (OpenCode-inspired)

Agent modes control what actions the AI can take in your project.

### BUILD Mode 🔨
- **Default mode** - Full access to all capabilities
- Can read, write, and modify files
- Can execute shell commands
- Can make git commits
- Use for: Active development and modifications

\`\`\`bash
/build   # Switch to BUILD mode
\`\`\`

### PLAN Mode 📋
- **Read-only mode** - Safe exploration
- Can only read files and search code
- Cannot modify files or run dangerous commands
- Ideal for understanding unfamiliar codebases
- Use for: Code review, exploration, planning

\`\`\`bash
/plan    # Switch to PLAN mode
\`\`\`

**Quick Toggle:** Type \`tab\` to switch between modes instantly!

---

## Performance Modes (AmpCode-inspired)

Performance modes control model selection and response characteristics.

### SMART Mode 🧠
- Uses best available model for maximum capability
- Full context window (128K tokens)
- Best for complex tasks and nuanced understanding

\`\`\`bash
/smart   # Switch to SMART mode
\`\`\`

### RUSH Mode ⚡
- Uses faster, more efficient model
- Reduced context for speed
- Best for quick questions and simple tasks

\`\`\`bash
/rush    # Switch to RUSH mode
\`\`\`

---

## Shell Mode (Quick Commands)

Execute shell commands directly without asking the AI! Inspired by AmpCode's shell mode.

### Standard Shell (\$)
Prefix any command with \`$\` to run it immediately. Output is added to the AI's context.

\`\`\`bash
$ npm test          # Run tests, AI sees results
$ git status        # Check git status
$ ls -la            # List files
\`\`\`

### Incognito Shell (\$\$)
Prefix with \`$$\` for incognito mode - command runs but output is NOT added to AI context.

\`\`\`bash
$$ npm install lodash    # Install package privately
$$ cat secret.env        # View sensitive file
$$ git log --oneline     # Check history without polluting context
\`\`\`

---

## Mode Commands Reference

| Command | Description |
|---------|-------------|
| \`/mode\` | Show current modes |
| \`/build\` | Switch to BUILD mode (full access) |
| \`/plan\` | Switch to PLAN mode (read-only) |
| \`/smart\` | Switch to SMART mode (max capability) |
| \`/rush\` | Switch to RUSH mode (fast) |
| \`/shortcuts\` | Show all keyboard shortcuts |

---

## Tips for New Users

1. **Start in BUILD mode** for normal development work
2. **Switch to PLAN mode** when exploring unfamiliar code (prevents accidental modifications)
3. **Use shell mode** (\`$\`) for quick commands instead of asking the AI
4. **Use incognito shell** (\`$$\`) for sensitive operations

The mode indicator appears in your prompt:
\`\`\`
✔ [BUILD] You: your message here
✔ [PLAN] You: analyzing the code...
\`\`\`
`;

    return <DocLayout content={content} title="Modes & Shell Commands" />;
}

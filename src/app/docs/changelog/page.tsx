import fs from 'fs';
import path from 'path';
import DocLayout from '../DocLayout';

export default function ChangelogPage() {
    const filePath = path.join(process.cwd(), '..', 'CHANGELOG.md');
    let content = '';

    try {
        content = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        content = `# Changelog

## [4.0.0] - 2026-04-05

### Added - Claude Code Features (from claw-code)
- **Session Store** - Persistent sessions with token tracking (src/core/session.js)
- **Cost Tracker** - Real-time cost estimation per model with pricing tables
- **Tool Permissions** - Fine-grained tool access control with profiles (full, readonly, safe, noExec)
- **Transcript Store** - Conversation transcript management with compaction
- **Prompt Router** - Smart routing of prompts to matching tools/commands
- **Execution Registry** - Centralized command/tool execution tracking
- **Stream Events Protocol** - Event-based message streaming (message_start, tool_use, tool_result, etc.)
- **Setup Report** - Workspace environment analysis with project detection
- **History Log** - Structured event logging for sessions
- **Bootstrap Graph** - Startup sequence visualization

### Added - New Tools (16 new, 42 total)
- patch_file, compare_files, batch_rename, project_stats
- test_run, lint_check, dependency_check
- http_request, json_query, regex_test
- hash_file, port_check, memory_store
- notebook, git_branch, git_stash

### Added - New Skills (16 new, 38 total)
- TypeScript, Tailwind CSS, PostgreSQL, AWS, GraphQL, Svelte
- Angular, Flutter, Terraform, Microservices, Auth/OAuth
- Debugging, Refactoring, Architecture, WebSocket, Code Review

### Added - NVIDIA API Provider
- Full support for NVIDIA NIM endpoints
- Default model: z-ai/glm5
- Streaming, model listing, connectivity checks

### Added - Animated UI
- Gradient text with 5 color palettes
- Animated startup sequence with boot steps
- Tool execution spinners with per-tool icons
- Animated mode switch with flash effect
- Session summary with wipe transition
- Enhanced thinking animation (multi-phase)
- Rainbow text, progress bars, sparkle transitions

### Added - New Commands
- /cost, /session, /permissions, /route, /setup, /bootstrap
- /events, /registry, /transcript, /system-init
- mlc doctor - Provider health check with local endpoint scanning
- mlc setup, mlc bootstrap, mlc sessions, mlc system-init

### Improved
- UI overhaul with gradient logo, better provider list, numbered models
- Upgraded spinners with richer animation frames
- System prompt updated to advertise all 42 tools to the AI

---

## [3.2.0] - 2024-12-26

### Added
- **Privacy Warning** for cloud providers (OpenRouter, Groq, OpenAI)
- vLLM self-hosting guide for full privacy
- Quick start links with privacy indicators

### Changed
- Enhanced "Privacy & Security" section with detailed warnings

---

## [3.1.0] - 2024-12-26

### Added
- **22 modular skills** - Each skill has its own SKILL.md file
- Vitest testing framework with 29 tests
- ESLint and Prettier for code quality
- GitHub Actions CI/CD workflows
- Comprehensive documentation

---

## [3.0.0] - 2024-12-20

### Added
- Complete rewrite with modular architecture
- Skills system with auto-injection
- Agents system for specialized tasks
- Plugin hooks support
- Web UI with dark theme
- Voice input support

---

See the [full changelog on GitHub](https://github.com/kprsnt2/MyLocalCLI/blob/main/CHANGELOG.md).
`;
    }

    return <DocLayout content={content} title="Changelog" />;
}

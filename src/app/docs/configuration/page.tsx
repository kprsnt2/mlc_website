import fs from 'fs';
import path from 'path';
import DocLayout from '../DocLayout';

export default function ConfigurationPage() {
    const filePath = path.join(process.cwd(), '..', 'docs', 'configuration.md');
    let content = '';

    try {
        content = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        content = `# Configuration Guide

MyLocalCLI supports 7 AI providers, extensive CLI commands, project-level configuration, tool permissions, cost tracking, and environment variable overrides. This page covers everything you need to configure MLC for your workflow.

---

## Provider Configuration

Run the interactive setup wizard to choose and configure your provider:

\`\`\`bash
mlc init
\`\`\`

You can also reconfigure at any time:

\`\`\`bash
mlc setup
\`\`\`

### Supported Providers

#### 1. LM Studio (Local)

- **Type:** Local — runs on your machine
- **API Key:** Not required
- **Default Endpoint:** \`http://localhost:1234/v1\`
- **Setup:** Install [LM Studio](https://lmstudio.ai), download a model, and start the local server. MLC connects automatically on the default port.

\`\`\`bash
# No key needed — just ensure LM Studio server is running on port 1234
mlc init
# Select "LM Studio" when prompted
\`\`\`

#### 2. Ollama (Local)

- **Type:** Local — runs on your machine
- **API Key:** Not required
- **Default Endpoint:** \`http://localhost:11434/v1\`
- **Setup:** Install [Ollama](https://ollama.com), pull a model (\`ollama pull llama3\`), and MLC connects automatically.

\`\`\`bash
# No key needed — just ensure Ollama is running on port 11434
mlc init
# Select "Ollama" when prompted
\`\`\`

#### 3. OpenRouter (Cloud)

- **Type:** Cloud — free models available
- **API Key:** Get your key from [openrouter.ai/keys](https://openrouter.ai/keys)
- **Setup:** Sign up and generate an API key. Free-tier models are available with no payment required.

\`\`\`bash
mlc init
# Select "OpenRouter" and paste your API key
\`\`\`

#### 4. OpenAI (Cloud)

- **Type:** Cloud — paid
- **API Key:** Get your key from [platform.openai.com](https://platform.openai.com)
- **Setup:** Create an account, add billing, and generate an API key.

\`\`\`bash
mlc init
# Select "OpenAI" and paste your API key
\`\`\`

#### 5. Groq (Cloud)

- **Type:** Cloud — free tier available
- **API Key:** Get your key from [console.groq.com](https://console.groq.com)
- **Setup:** Sign up for a free account and generate an API key. Generous free-tier limits.

\`\`\`bash
mlc init
# Select "Groq" and paste your API key
\`\`\`

#### 6. NVIDIA API (Cloud)

- **Type:** Cloud
- **API Key:** Get your key from [build.nvidia.com](https://build.nvidia.com)
- **Default Model:** \`z-ai/glm5\`
- **Setup:** Create an NVIDIA developer account and generate an API key.

\`\`\`bash
mlc init
# Select "NVIDIA API" and paste your API key
\`\`\`

#### 7. Custom (Any OpenAI-Compatible Endpoint)

- **Type:** Any OpenAI-compatible API
- **API Key:** Depends on the endpoint
- **Setup:** Provide your custom base URL and optional API key for any service that implements the OpenAI API format.

\`\`\`bash
mlc init
# Select "Custom" and enter your endpoint URL and optional key
\`\`\`

---

## CLI Commands

| Command | Description |
|---|---|
| \`mlc init\` | Interactive setup wizard — choose provider, configure API keys, and set preferences |
| \`mlc config\` | View or edit your current configuration |
| \`mlc doctor\` | Diagnose connectivity and configuration issues |
| \`mlc models\` | List available models for the active provider |
| \`mlc providers\` | List all supported providers and their status |
| \`mlc setup\` | Re-run provider setup to switch or reconfigure providers |
| \`mlc bootstrap\` | Bootstrap a new project with MLC configuration files |
| \`mlc sessions\` | List and manage past chat sessions |
| \`mlc system-init\` | Initialize system-level configuration (global defaults) |

---

## Project Configuration (MYLOCALCLI.md)

Create a \`MYLOCALCLI.md\` file in your project root to give MLC project-specific context and instructions. The file uses a **frontmatter + markdown** format:

\`\`\`markdown
---
name: My Project
description: A Node.js API server
tech_stack: Node.js, TypeScript, Express, PostgreSQL
test_command: npm test
build_command: npm run build
lint_command: npm run lint
---

# Project Instructions

- Use TypeScript for all new files
- Follow REST API conventions
- Write tests for all endpoints
- Use the repository's existing patterns for error handling
- Database migrations go in src/migrations/
\`\`\`

### Frontmatter Fields

| Field | Description |
|---|---|
| \`name\` | Project display name |
| \`description\` | Brief project description for AI context |
| \`tech_stack\` | Technologies used (helps AI tailor responses) |
| \`test_command\` | Command to run tests |
| \`build_command\` | Command to build the project |
| \`lint_command\` | Command to lint the project |

The markdown body below the frontmatter contains free-form instructions, conventions, and rules that MLC will follow when working in your project.

---

## Tool Permissions

Control which tools MLC is allowed to use in your project with the \`/permissions\` command.

\`\`\`
/permissions          # View current tool permission settings
\`\`\`

### Permission Profiles

| Profile | Description |
|---|---|
| \`full\` | All tools enabled — file read/write, shell execution, and more |
| \`readonly\` | Read-only access — no file writes or shell commands |
| \`safe\` | Safe operations only — allows reads and safe writes, blocks destructive commands |
| \`noExec\` | No shell execution — allows file operations but blocks all shell/command execution |

### Granular Permissions

You can also deny or allow individual tools:

\`\`\`
/permissions deny shell_exec      # Block shell execution
/permissions allow file_write     # Allow file writing
/permissions deny file_delete     # Block file deletion
\`\`\`

---

## Cost Tracking

MLC tracks token usage and estimated costs per session.

\`\`\`
/cost                # View token usage and cost summary for the current session
\`\`\`

- **Token tracking:** Input and output tokens are tracked per request
- **Session summaries:** At the end of each session, a cost summary is displayed
- **Per-provider rates:** Costs are calculated based on the active provider's pricing

---

## Environment Variables

Override configuration via environment variables. These take precedence over config file values.

| Variable | Description |
|---|---|
| \`OPENAI_API_KEY\` | API key for OpenAI provider |
| \`NVIDIA_API_KEY\` | API key for NVIDIA API provider |
| \`OPENROUTER_API_KEY\` | API key for OpenRouter provider |
| \`GROQ_API_KEY\` | API key for Groq provider |
| \`MLC_PROVIDER\` | Override the active provider |
| \`MLC_MODEL\` | Override the active model |
| \`MLC_BASE_URL\` | Override the provider endpoint URL |

\`\`\`bash
# Example: temporarily use a different provider
OPENAI_API_KEY=sk-... mlc

# Example: override model for a single session
MLC_MODEL=gpt-4 mlc
\`\`\`

---

## Switching Providers at Runtime

You can switch providers and models without restarting:

\`\`\`
/provider         # Switch provider interactively
/model            # Switch model interactively
/models           # List available models for the current provider
\`\`\`
`;
    }

    return <DocLayout content={content} title="Configuration" />;
}

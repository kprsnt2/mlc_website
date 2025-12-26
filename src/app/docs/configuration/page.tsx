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

## Provider Configuration

Run the setup wizard:

\`\`\`bash
mlc init
\`\`\`

## Project Configuration (MYLOCALCLI.md)

Create a \`MYLOCALCLI.md\` file in your project root:

\`\`\`markdown
---
name: My Project
description: A Node.js API server
---

# Project Instructions

- Use TypeScript for all new files
- Follow REST API conventions
- Write tests for all endpoints
\`\`\`

## Switching Providers

\`\`\`
/provider         # Switch provider
/model            # Switch model
/models           # List available models
\`\`\`
`;
    }

    return <DocLayout content={content} title="Configuration" />;
}

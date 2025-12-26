import fs from 'fs';
import path from 'path';
import DocLayout from '../DocLayout';

export default function AgentsPage() {
    const filePath = path.join(process.cwd(), '..', 'docs', 'agents.md');
    let content = '';

    try {
        content = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        content = `# Agents Guide

Agents are specialized AI personas designed for specific tasks.

## Available Agents (5)

### 1. code-reviewer
Reviews code for bugs, security issues, and style problems.

\`\`\`
/agent code-reviewer Review the authentication module
\`\`\`

### 2. code-explorer
Deep analysis of codebases to understand architecture.

### 3. test-generator
Creates unit tests for your code.

### 4. refactorer
Suggests and implements code improvements.

### 5. doc-writer
Generates documentation for code.

## Usage

\`\`\`
/agent <agent-name> <your request>
\`\`\`
`;
    }

    return <DocLayout content={content} title="Agents Guide" />;
}

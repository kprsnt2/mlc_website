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

## Installation

\`\`\`bash
npm install -g mylocalcli
\`\`\`

## Setup

Run the setup wizard:

\`\`\`bash
mlc init
\`\`\`

## Start Chatting

\`\`\`bash
mlc
\`\`\`

Check out the [full documentation](https://github.com/kprsnt2/MyLocalCLI) for more details.
`;
    }

    return <DocLayout content={content} title="Getting Started" />;
}

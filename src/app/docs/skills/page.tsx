import fs from 'fs';
import path from 'path';
import DocLayout from '../DocLayout';

export default function SkillsPage() {
    const filePath = path.join(process.cwd(), '..', 'docs', 'skills.md');
    let content = '';

    try {
        content = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        content = `# Skills System

Skills are knowledge packs that automatically inject best practices into your AI conversations.

## Built-in Skills (22)

### Languages
- **javascript** - ES6+, TypeScript, async patterns
- **python** - PEP 8, modern Python 3.10+
- **rust** - Ownership, error handling
- **go** - Idiomatic Go, concurrency

### Frameworks
- **react** - Hooks, state management
- **vue** - Composition API
- **nextjs** - App Router, data fetching
- **express** - Middleware, error handling

### DevOps
- **docker** - Multi-stage builds
- **kubernetes** - Deployments, security
- **cicd** - GitHub Actions

### Databases
- **sql** - Query optimization
- **mongodb** - Schema design
- **redis** - Caching patterns

## Custom Skills

Create your own skills in \`.mylocalcli/skills/<name>/SKILL.md\`
`;
    }

    return <DocLayout content={content} title="Skills System" />;
}

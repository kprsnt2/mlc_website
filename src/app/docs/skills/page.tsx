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

Skills are knowledge packs that automatically inject best practices and domain expertise into your AI conversations. They activate based on file patterns in your project, ensuring you always get contextually relevant guidance.

## Built-in Skills (38)

### Languages (5)
| Skill | Description | File Patterns | Priority |
|-------|-------------|---------------|----------|
| **javascript** | ES6+ best practices, async/await patterns, module systems, error handling | \`*.js\`, \`*.mjs\`, \`*.cjs\` | high |
| **python** | PEP 8, modern Python 3.10+, type hints, virtual environments, packaging | \`*.py\`, \`pyproject.toml\`, \`requirements.txt\` | high |
| **typescript** | Strict typing, generics, utility types, declaration files, project configuration | \`*.ts\`, \`*.tsx\`, \`tsconfig.json\` | high |
| **rust** | Ownership, borrowing, lifetimes, error handling with Result/Option, cargo ecosystem | \`*.rs\`, \`Cargo.toml\`, \`Cargo.lock\` | high |
| **go** | Idiomatic Go, concurrency with goroutines/channels, error handling, modules | \`*.go\`, \`go.mod\`, \`go.sum\` | high |

### Frameworks (12)
| Skill | Description | File Patterns | Priority |
|-------|-------------|---------------|----------|
| **react** | Hooks, state management, component patterns, JSX best practices, React 18+ features | \`*.jsx\`, \`*.tsx\`, \`react.config.*\` | high |
| **vue** | Composition API, reactivity system, single-file components, Pinia state management | \`*.vue\`, \`vue.config.*\`, \`vite.config.*\` | high |
| **nextjs** | App Router, server components, data fetching, middleware, ISR/SSR/SSG strategies | \`next.config.*\`, \`app/**/page.tsx\`, \`app/**/layout.tsx\` | high |
| **express** | Middleware chains, error handling, routing, security best practices, REST patterns | \`*.js\`, \`*.ts\`, \`express.*\` | medium |
| **angular** | Components, services, dependency injection, RxJS observables, Angular CLI | \`*.component.ts\`, \`*.module.ts\`, \`angular.json\` | high |
| **svelte** | Reactive declarations, stores, component lifecycle, SvelteKit integration | \`*.svelte\`, \`svelte.config.*\` | high |
| **flutter** | Widget composition, state management, Material/Cupertino design, platform channels | \`*.dart\`, \`pubspec.yaml\`, \`pubspec.lock\` | high |
| **tailwind** | Utility-first CSS, responsive design, custom configuration, plugin system | \`tailwind.config.*\`, \`*.css\`, \`postcss.config.*\` | medium |
| **graphql** | Schema design, resolvers, queries/mutations, subscriptions, client integration | \`*.graphql\`, \`*.gql\`, \`schema.graphql\` | medium |
| **websocket** | Real-time communication, Socket.IO, connection management, event handling | \`*.js\`, \`*.ts\`, \`ws.*\` | medium |
| **django** | Models, views, templates, ORM, admin, migrations, REST framework integration | \`*.py\`, \`manage.py\`, \`urls.py\`, \`settings.py\` | high |
| **fastapi** | Async endpoints, Pydantic models, dependency injection, OpenAPI documentation | \`*.py\`, \`main.py\`, \`requirements.txt\` | high |

### DevOps (5)
| Skill | Description | File Patterns | Priority |
|-------|-------------|---------------|----------|
| **docker** | Multi-stage builds, layer optimization, compose orchestration, security scanning | \`Dockerfile*\`, \`docker-compose.*\`, \`.dockerignore\` | high |
| **kubernetes** | Deployments, services, ingress, RBAC, Helm charts, resource management | \`*.yaml\`, \`*.yml\`, \`helmfile.*\`, \`Chart.yaml\` | high |
| **cicd** | GitHub Actions, pipeline design, artifact management, deployment strategies | \`.github/workflows/*.yml\`, \`Jenkinsfile\`, \`.gitlab-ci.yml\` | high |
| **terraform** | Infrastructure as code, providers, modules, state management, plan/apply workflow | \`*.tf\`, \`*.tfvars\`, \`terraform.lock.hcl\` | high |
| **aws** | AWS services, IAM policies, CloudFormation, SDK patterns, cost optimization | \`*.tf\`, \`*.yaml\`, \`serverless.yml\`, \`sam-template.yaml\` | medium |

### Databases (4)
| Skill | Description | File Patterns | Priority |
|-------|-------------|---------------|----------|
| **sql** | Query optimization, indexing strategies, joins, transactions, migrations | \`*.sql\`, \`migrations/**\` | high |
| **mongodb** | Schema design, aggregation pipelines, indexing, replication, Atlas configuration | \`*.js\`, \`*.ts\`, \`mongo.*\` | medium |
| **redis** | Caching patterns, data structures, pub/sub, Lua scripting, persistence strategies | \`*.js\`, \`*.ts\`, \`*.py\`, \`redis.conf\` | medium |
| **postgresql** | Advanced SQL, extensions, partitioning, JSONB, full-text search, performance tuning | \`*.sql\`, \`*.py\`, \`*.ts\`, \`migrations/**\` | high |

### Security (2)
| Skill | Description | File Patterns | Priority |
|-------|-------------|---------------|----------|
| **security** | OWASP top 10, input validation, XSS/CSRF prevention, dependency auditing, secrets management | \`*.*\` | high |
| **auth** | Authentication flows, OAuth 2.0/OIDC, JWT handling, session management, MFA implementation | \`*.ts\`, \`*.js\`, \`*.py\`, \`auth.*\` | high |

### Workflow (5)
| Skill | Description | File Patterns | Priority |
|-------|-------------|---------------|----------|
| **testing** | Unit/integration/e2e testing, mocking, coverage, TDD practices, test organization | \`*.test.*\`, \`*.spec.*\`, \`__tests__/**\`, \`jest.config.*\` | high |
| **debugging** | Systematic debugging, breakpoints, logging strategies, profiling, error tracing | \`*.*\` | medium |
| **refactoring** | Code smells detection, design patterns, SOLID principles, incremental improvement | \`*.*\` | medium |
| **code-review** | Review checklists, constructive feedback, common pitfalls, quality standards | \`*.*\` | medium |
| **git-workflow** | Branching strategies, conventional commits, rebasing, conflict resolution, hooks | \`.gitconfig\`, \`.gitignore\`, \`.husky/**\` | medium |

### Architecture (2)
| Skill | Description | File Patterns | Priority |
|-------|-------------|---------------|----------|
| **microservices** | Service decomposition, inter-service communication, event-driven patterns, resilience | \`docker-compose.*\`, \`*.yaml\`, \`*.proto\` | medium |
| **architecture** | System design, design patterns, SOLID/DRY/KISS, scalability, documentation | \`*.*\` | medium |

### Performance (3)
| Skill | Description | File Patterns | Priority |
|-------|-------------|---------------|----------|
| **performance** | Profiling, bottleneck analysis, caching, lazy loading, bundle optimization | \`*.*\` | medium |
| **api-design** | RESTful conventions, versioning, pagination, error responses, OpenAPI/Swagger | \`*.yaml\`, \`*.json\`, \`openapi.*\`, \`swagger.*\` | medium |
| **nodejs** | Event loop, streams, clustering, native modules, package management, CommonJS/ESM | \`*.js\`, \`*.mjs\`, \`package.json\`, \`.nvmrc\` | high |

---

## Custom Skills

Create your own project-specific or personal skills to extend the built-in set with domain knowledge tailored to your codebase.

### Creating Custom Skills

Use the \`/skill create\` command to interactively scaffold a new skill, or manually create a \`SKILL.md\` file:

\`\`\`
/skill create
\`\`\`

### Finding Skills

Search for community and built-in skills with:

\`\`\`
/skill search <query>
\`\`\`

### Storage Location

Custom skills are stored in your project directory:

\`\`\`
.mylocalcli/skills/<skill-name>/SKILL.md
\`\`\`

### SKILL.md Frontmatter Format

Every custom skill file uses YAML frontmatter to define metadata, followed by markdown content with the skill's knowledge and instructions:

\`\`\`yaml
---
name: my-custom-skill
description: A brief description of what this skill provides
globs:
  - "src/**/*.ts"
  - "*.config.js"
priority: high
tags:
  - typescript
  - configuration
  - custom
---

# My Custom Skill

Your skill content goes here. Include best practices, patterns,
code examples, and guidelines that should be injected when files
matching your glob patterns are detected.
\`\`\`

#### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **name** | string | Yes | Unique identifier for the skill |
| **description** | string | Yes | Brief summary shown in skill listings |
| **globs** | string[] | Yes | File patterns that trigger this skill |
| **priority** | string | No | Activation priority: \`high\`, \`medium\`, or \`low\` (default: \`medium\`) |
| **tags** | string[] | No | Searchable tags for discovery via \`/skill search\` |
`;
    }

    return <DocLayout content={content} title="Skills System" />;
}

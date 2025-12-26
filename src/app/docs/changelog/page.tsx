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

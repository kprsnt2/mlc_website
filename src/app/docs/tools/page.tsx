import fs from 'fs';
import path from 'path';
import DocLayout from '../DocLayout';

export default function ToolsPage() {
    const filePath = path.join(process.cwd(), '..', 'docs', 'tools.md');
    let content = '';

    try {
        content = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        content = `# Tools Reference

MyLocalCLI provides 26 built-in tools.

## File Operations
- \`read_file\` - Read file contents
- \`write_file\` - Create or overwrite files
- \`edit_file\` - Edit specific parts of files
- \`delete_file\` - Delete files

## Search & Navigation
- \`list_directory\` - List directory contents
- \`search_files\` - Find files by pattern
- \`grep\` - Search text in files

## Git Operations
- \`git_status\` - Get repository status
- \`git_diff\` - Show changes
- \`git_log\` - Show commit history
- \`git_commit\` - Create commits

Check the full documentation for details on all 26 tools.
`;
    }

    return <DocLayout content={content} title="Tools Reference" />;
}

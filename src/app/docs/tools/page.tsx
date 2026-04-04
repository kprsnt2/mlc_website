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

MyLocalCLI provides **42 built-in tools** organized across 8 categories. Each tool is designed to help you accomplish common development tasks directly from the CLI.

---

## File Operations (12 tools)

### \`read_file\`
Read the contents of a file at the specified path.

**Parameters:**
- \`path\` (string, required) — The file path to read.
- \`encoding\` (string, optional) — File encoding. Default: \`utf-8\`.

\`\`\`bash
mlc read_file --path ./src/index.ts
\`\`\`

---

### \`write_file\`
Create a new file or overwrite an existing file with the provided content.

**Parameters:**
- \`path\` (string, required) — The file path to write to.
- \`content\` (string, required) — The content to write.
- \`encoding\` (string, optional) — File encoding. Default: \`utf-8\`.

\`\`\`bash
mlc write_file --path ./hello.txt --content "Hello, world!"
\`\`\`

---

### \`edit_file\`
Edit a file by replacing a specific string occurrence with new content.

**Parameters:**
- \`path\` (string, required) — The file path to edit.
- \`old_str\` (string, required) — The exact text to find.
- \`new_str\` (string, required) — The replacement text.

\`\`\`bash
mlc edit_file --path ./config.json --old_str '"debug": false' --new_str '"debug": true'
\`\`\`

---

### \`multi_edit_file\`
Apply multiple edits to a single file in one operation. Edits are applied in order.

**Parameters:**
- \`path\` (string, required) — The file path to edit.
- \`edits\` (array, required) — Array of \`{ old_str, new_str }\` pairs.

\`\`\`bash
mlc multi_edit_file --path ./config.json --edits '[{"old_str":"v1","new_str":"v2"},{"old_str":"debug","new_str":"verbose"}]'
\`\`\`

---

### \`patch_file\`
Apply a unified diff patch to a file.

**Parameters:**
- \`path\` (string, required) — The file path to patch.
- \`patch\` (string, required) — The unified diff content to apply.

\`\`\`bash
mlc patch_file --path ./src/utils.ts --patch "@@ -5,3 +5,3 @@\\n-old line\\n+new line"
\`\`\`

---

### \`append_file\`
Append content to the end of an existing file.

**Parameters:**
- \`path\` (string, required) — The file path to append to.
- \`content\` (string, required) — The content to append.

\`\`\`bash
mlc append_file --path ./log.txt --content "New log entry"
\`\`\`

---

### \`insert_at_line\`
Insert content at a specific line number in a file.

**Parameters:**
- \`path\` (string, required) — The file path.
- \`line\` (number, required) — The line number to insert at (1-based).
- \`content\` (string, required) — The content to insert.

\`\`\`bash
mlc insert_at_line --path ./src/index.ts --line 1 --content "// Copyright 2026"
\`\`\`

---

### \`read_lines\`
Read a specific range of lines from a file.

**Parameters:**
- \`path\` (string, required) — The file path to read.
- \`start\` (number, required) — Start line number (1-based, inclusive).
- \`end\` (number, required) — End line number (1-based, inclusive).

\`\`\`bash
mlc read_lines --path ./src/index.ts --start 10 --end 25
\`\`\`

---

### \`delete_file\`
Delete a file at the specified path.

**Parameters:**
- \`path\` (string, required) — The file path to delete.

\`\`\`bash
mlc delete_file --path ./temp/old_cache.json
\`\`\`

---

### \`move_file\`
Move or rename a file from one path to another.

**Parameters:**
- \`source\` (string, required) — The current file path.
- \`destination\` (string, required) — The new file path.

\`\`\`bash
mlc move_file --source ./old_name.ts --destination ./src/new_name.ts
\`\`\`

---

### \`copy_file\`
Copy a file from one path to another.

**Parameters:**
- \`source\` (string, required) — The source file path.
- \`destination\` (string, required) — The destination file path.

\`\`\`bash
mlc copy_file --source ./template.json --destination ./config.json
\`\`\`

---

### \`file_info\`
Get detailed metadata about a file (size, type, permissions, modified date, etc.).

**Parameters:**
- \`path\` (string, required) — The file path to inspect.

\`\`\`bash
mlc file_info --path ./package.json
\`\`\`

---

## Directory (4 tools)

### \`list_directory\`
List the contents of a directory, including files and subdirectories.

**Parameters:**
- \`path\` (string, required) — The directory path to list.
- \`recursive\` (boolean, optional) — List recursively. Default: \`false\`.
- \`show_hidden\` (boolean, optional) — Include hidden files. Default: \`false\`.

\`\`\`bash
mlc list_directory --path ./src --recursive true
\`\`\`

---

### \`create_directory\`
Create a new directory, including any necessary parent directories.

**Parameters:**
- \`path\` (string, required) — The directory path to create.

\`\`\`bash
mlc create_directory --path ./src/components/ui
\`\`\`

---

### \`tree\`
Display a visual tree structure of a directory and its contents.

**Parameters:**
- \`path\` (string, required) — The root directory to display.
- \`depth\` (number, optional) — Maximum depth to traverse. Default: \`3\`.
- \`ignore\` (array, optional) — Patterns to ignore (e.g., \`node_modules\`).

\`\`\`bash
mlc tree --path ./src --depth 2 --ignore '["node_modules","dist"]'
\`\`\`

---

### \`batch_rename\`
Rename multiple files in a directory using a pattern.

**Parameters:**
- \`path\` (string, required) — The directory containing files to rename.
- \`pattern\` (string, required) — Regex pattern to match in filenames.
- \`replacement\` (string, required) — Replacement string.
- \`dry_run\` (boolean, optional) — Preview changes without applying. Default: \`false\`.

\`\`\`bash
mlc batch_rename --path ./images --pattern "IMG_(\\\\d+)" --replacement "photo_$1" --dry_run true
\`\`\`

---

## Search (5 tools)

### \`search_files\`
Find files by name or glob pattern across a directory tree.

**Parameters:**
- \`path\` (string, required) — The root directory to search.
- \`pattern\` (string, required) — Glob pattern to match (e.g., \`*.ts\`).
- \`max_results\` (number, optional) — Limit the number of results.

\`\`\`bash
mlc search_files --path ./src --pattern "*.test.ts"
\`\`\`

---

### \`grep\`
Search for a text pattern within file contents across a directory.

**Parameters:**
- \`path\` (string, required) — The directory to search in.
- \`pattern\` (string, required) — The text or regex pattern to search for.
- \`include\` (string, optional) — Glob pattern to filter files (e.g., \`*.ts\`).
- \`case_sensitive\` (boolean, optional) — Case-sensitive matching. Default: \`true\`.

\`\`\`bash
mlc grep --path ./src --pattern "TODO:" --include "*.ts"
\`\`\`

---

### \`find_replace\`
Find and replace text across multiple files in a directory.

**Parameters:**
- \`path\` (string, required) — The directory to search.
- \`find\` (string, required) — The text or regex to find.
- \`replace\` (string, required) — The replacement text.
- \`include\` (string, optional) — Glob pattern to filter files.
- \`dry_run\` (boolean, optional) — Preview changes without applying. Default: \`false\`.

\`\`\`bash
mlc find_replace --path ./src --find "oldFunction" --replace "newFunction" --include "*.ts" --dry_run true
\`\`\`

---

### \`codebase_search\`
Perform a semantic search across your codebase to find relevant code sections.

**Parameters:**
- \`query\` (string, required) — Natural language description of what you're looking for.
- \`path\` (string, optional) — Directory to scope the search.
- \`max_results\` (number, optional) — Maximum results to return. Default: \`10\`.

\`\`\`bash
mlc codebase_search --query "error handling middleware" --path ./src
\`\`\`

---

### \`compare_files\`
Compare two files and show their differences in a unified diff format.

**Parameters:**
- \`file_a\` (string, required) — Path to the first file.
- \`file_b\` (string, required) — Path to the second file.

\`\`\`bash
mlc compare_files --file_a ./config.prod.json --file_b ./config.dev.json
\`\`\`

---

## Commands (1 tool)

### \`run_command\`
Execute a shell command and return its output (stdout and stderr).

**Parameters:**
- \`command\` (string, required) — The shell command to execute.
- \`cwd\` (string, optional) — Working directory for the command.
- \`timeout\` (number, optional) — Timeout in seconds. Default: \`60\`.

\`\`\`bash
mlc run_command --command "npm run build" --cwd ./my-project --timeout 120
\`\`\`

---

## Git (6 tools)

### \`git_status\`
Show the working tree status of a Git repository.

**Parameters:**
- \`path\` (string, optional) — Path to the repository. Default: current directory.

\`\`\`bash
mlc git_status --path ./my-project
\`\`\`

---

### \`git_diff\`
Show changes between commits, working tree, and staging area.

**Parameters:**
- \`path\` (string, optional) — Path to the repository.
- \`staged\` (boolean, optional) — Show staged changes only. Default: \`false\`.
- \`commit\` (string, optional) — Compare against a specific commit.

\`\`\`bash
mlc git_diff --path ./my-project --staged true
\`\`\`

---

### \`git_log\`
Show the commit history of a repository.

**Parameters:**
- \`path\` (string, optional) — Path to the repository.
- \`max_count\` (number, optional) — Maximum commits to show. Default: \`10\`.
- \`oneline\` (boolean, optional) — Use one-line format. Default: \`false\`.

\`\`\`bash
mlc git_log --path ./my-project --max_count 5 --oneline true
\`\`\`

---

### \`git_commit\`
Stage files and create a new commit.

**Parameters:**
- \`path\` (string, optional) — Path to the repository.
- \`message\` (string, required) — The commit message.
- \`files\` (array, optional) — Specific files to stage. Default: all changed files.

\`\`\`bash
mlc git_commit --message "feat: add user authentication" --files '["src/auth.ts","src/middleware.ts"]'
\`\`\`

---

### \`git_branch\`
List, create, switch, or delete branches.

**Parameters:**
- \`path\` (string, optional) — Path to the repository.
- \`action\` (string, required) — One of: \`list\`, \`create\`, \`switch\`, \`delete\`.
- \`name\` (string, optional) — Branch name (required for create/switch/delete).

\`\`\`bash
mlc git_branch --action create --name "feature/new-ui"
\`\`\`

---

### \`git_stash\`
Stash or restore uncommitted changes.

**Parameters:**
- \`path\` (string, optional) — Path to the repository.
- \`action\` (string, required) — One of: \`push\`, \`pop\`, \`list\`, \`drop\`.
- \`message\` (string, optional) — Stash message (for push action).

\`\`\`bash
mlc git_stash --action push --message "WIP: refactoring auth"
\`\`\`

---

## Web & HTTP (2 tools)

### \`web_fetch\`
Fetch the content of a web page and return it as readable text or markdown.

**Parameters:**
- \`url\` (string, required) — The URL to fetch.
- \`format\` (string, optional) — Output format: \`text\` or \`markdown\`. Default: \`markdown\`.

\`\`\`bash
mlc web_fetch --url "https://example.com/api/docs" --format markdown
\`\`\`

---

### \`http_request\`
Make a custom HTTP request with full control over method, headers, and body.

**Parameters:**
- \`url\` (string, required) — The request URL.
- \`method\` (string, optional) — HTTP method. Default: \`GET\`.
- \`headers\` (object, optional) — Request headers.
- \`body\` (string, optional) — Request body.

\`\`\`bash
mlc http_request --url "https://api.example.com/users" --method POST --headers '{"Content-Type":"application/json"}' --body '{"name":"Alice"}'
\`\`\`

---

## Project (4 tools)

### \`test_run\`
Run your project's test suite and return results.

**Parameters:**
- \`path\` (string, optional) — Path to the project.
- \`filter\` (string, optional) — Filter tests by name pattern.
- \`coverage\` (boolean, optional) — Generate coverage report. Default: \`false\`.

\`\`\`bash
mlc test_run --path ./my-project --filter "auth" --coverage true
\`\`\`

---

### \`lint_check\`
Run linting on your project and report issues.

**Parameters:**
- \`path\` (string, optional) — Path to the project.
- \`fix\` (boolean, optional) — Automatically fix issues where possible. Default: \`false\`.

\`\`\`bash
mlc lint_check --path ./src --fix true
\`\`\`

---

### \`dependency_check\`
Analyze project dependencies for outdated packages, vulnerabilities, and issues.

**Parameters:**
- \`path\` (string, optional) — Path to the project.
- \`check_updates\` (boolean, optional) — Check for available updates. Default: \`true\`.

\`\`\`bash
mlc dependency_check --path ./my-project --check_updates true
\`\`\`

---

### \`project_stats\`
Generate statistics about your project (lines of code, file counts, languages, etc.).

**Parameters:**
- \`path\` (string, optional) — Path to the project.

\`\`\`bash
mlc project_stats --path ./my-project
\`\`\`

---

## Data & Utility (5 tools)

### \`json_query\`
Query and transform JSON data using JSONPath or jq-like expressions.

**Parameters:**
- \`input\` (string, required) — JSON string or file path.
- \`query\` (string, required) — The query expression.

\`\`\`bash
mlc json_query --input ./package.json --query ".dependencies"
\`\`\`

---

### \`regex_test\`
Test a regular expression against a string and show matches.

**Parameters:**
- \`pattern\` (string, required) — The regex pattern.
- \`text\` (string, required) — The text to test against.
- \`flags\` (string, optional) — Regex flags (e.g., \`gi\`).

\`\`\`bash
mlc regex_test --pattern "(\\\\d{4})-(\\\\d{2})-(\\\\d{2})" --text "Date: 2026-04-05" --flags g
\`\`\`

---

### \`hash_file\`
Compute the hash (checksum) of a file.

**Parameters:**
- \`path\` (string, required) — The file path.
- \`algorithm\` (string, optional) — Hash algorithm: \`md5\`, \`sha1\`, \`sha256\`. Default: \`sha256\`.

\`\`\`bash
mlc hash_file --path ./dist/bundle.js --algorithm sha256
\`\`\`

---

### \`port_check\`
Check if a specific network port is in use or available.

**Parameters:**
- \`port\` (number, required) — The port number to check.
- \`host\` (string, optional) — The hostname to check. Default: \`localhost\`.

\`\`\`bash
mlc port_check --port 3000
\`\`\`

---

### \`memory_store\`
Store and retrieve key-value data that persists during the current session.

**Parameters:**
- \`action\` (string, required) — One of: \`set\`, \`get\`, \`delete\`, \`list\`.
- \`key\` (string, optional) — The key name (required for set/get/delete).
- \`value\` (string, optional) — The value to store (required for set).

\`\`\`bash
mlc memory_store --action set --key "api_base" --value "https://api.example.com"
\`\`\`

---

## Workflow (3 tools)

### \`todo_write\`
Create and manage a structured todo list for tracking multi-step tasks.

**Parameters:**
- \`action\` (string, required) — One of: \`add\`, \`complete\`, \`remove\`, \`list\`.
- \`text\` (string, optional) — The todo item text (required for add).
- \`id\` (number, optional) — The todo item ID (required for complete/remove).

\`\`\`bash
mlc todo_write --action add --text "Refactor authentication module"
\`\`\`

---

### \`ask_user\`
Prompt the user for input or confirmation during an interactive session.

**Parameters:**
- \`question\` (string, required) — The question or prompt to display.
- \`options\` (array, optional) — Predefined choices for the user.

\`\`\`bash
mlc ask_user --question "Which database do you want to use?" --options '["PostgreSQL","MySQL","SQLite"]'
\`\`\`

---

### \`notebook\`
Create, manage, and execute cells in an interactive notebook for experimentation.

**Parameters:**
- \`action\` (string, required) — One of: \`create\`, \`add_cell\`, \`run_cell\`, \`list\`, \`export\`.
- \`name\` (string, optional) — Notebook name (required for create).
- \`cell_type\` (string, optional) — Cell type: \`code\` or \`markdown\`.
- \`content\` (string, optional) — Cell content.

\`\`\`bash
mlc notebook --action create --name "api-experiments"
\`\`\`

---

> **Tip:** Run \`mlc help <tool_name>\` for detailed usage information on any tool.
`;
    }

    return <DocLayout content={content} title="Tools Reference" />;
}

import DocLayout from '../DocLayout';

const content = `# Troubleshooting

Common issues and how to fix them.

---

## Prerequisites

### Node.js is Required

MyLocalCLI requires **Node.js 18 or higher**.

**Check your version:**
\`\`\`bash
node --version
\`\`\`

**Install Node.js:**
- Download from [nodejs.org](https://nodejs.org/) (LTS version recommended)
- Or use a version manager:
  - **Windows:** [nvm-windows](https://github.com/coreybutler/nvm-windows)
  - **macOS/Linux:** [nvm](https://github.com/nvm-sh/nvm)

---

## Windows Issues

### PowerShell Execution Policy Error

**Error:**
\`\`\`
mlc : File C:\\...\\mlc.ps1 cannot be loaded because running scripts is disabled on this system.
\`\`\`

**Fix:** Run PowerShell as Administrator and execute:
\`\`\`powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
\`\`\`

Then try \`mlc\` again.

---

### 'mlc' is not recognized

**Error:**
\`\`\`
'mlc' is not recognized as an internal or external command
\`\`\`

**Causes & Fixes:**

1. **npm not in PATH:**
   - Close and reopen your terminal
   - Or run: \`npm config get prefix\` and add that path to your system PATH

2. **npm bin not linked globally:**
   \`\`\`bash
   npm config set prefix "C:\\Users\\YourName\\AppData\\Roaming\\npm"
   \`\`\`

3. **Try using npx instead:**
   \`\`\`bash
   npx mylocalcli
   npx mylocalcli init
   \`\`\`

---

### Permission Denied on Install

**Error:**
\`\`\`
EACCES: permission denied
\`\`\`

**Fix:** Don't use \`sudo\` with npm. Instead, fix npm permissions:

\`\`\`bash
# Option 1: Change npm's default directory
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
# Add to ~/.bashrc or ~/.zshrc:
export PATH=~/.npm-global/bin:$PATH
\`\`\`

---

## Connection Issues

### "Connection refused" Error

**Error:**
\`\`\`
Error: connect ECONNREFUSED 127.0.0.1:1234
\`\`\`

**Causes & Fixes:**

1. **LM Studio server not running:**
   - Open LM Studio → Load a model → Start Local Server

2. **Ollama not running:**
   \`\`\`bash
   ollama serve
   \`\`\`

3. **Wrong port configured:**
   - LM Studio default: \`1234\`
   - Ollama default: \`11434\`
   - Run \`mlc init\` to reconfigure

---

### API Key Invalid (OpenRouter/Groq)

**Error:**
\`\`\`
Error: 401 Unauthorized
\`\`\`

**Fix:**
1. Check your API key is correct
2. Run \`mlc init\` and re-enter your API key
3. Verify the key works on the provider's website

---

## Model Issues

### "Model not found" Error

**For LM Studio:**
- Make sure a model is loaded in LM Studio before starting the server

**For Ollama:**
\`\`\`bash
# List available models
ollama list

# Pull a model if needed
ollama pull llama3.2
\`\`\`

---

### Slow Responses

**Possible causes:**

1. **Model too large for your hardware:**
   - Try a smaller model (7B instead of 70B)
   - Use quantized versions (Q4_K_M)

2. **Not using GPU:**
   - LM Studio: Check GPU layers setting
   - Ollama: Ensure CUDA/Metal is enabled

3. **Context too long:**
   - Run \`/clear\` to reset conversation
   - Use smaller files in context

---

## Configuration Issues

### Config File Corrupted

**Fix:** Delete and recreate:
\`\`\`bash
# Windows
del %USERPROFILE%\\.mylocalcli\\config.json

# macOS/Linux
rm ~/.mylocalcli/config.json

# Then reconfigure
mlc init
\`\`\`

---

### Skills Not Loading

**Check:**
1. Ensure \`src/skills/builtin/\` folder exists
2. Restart the CLI after adding custom skills
3. Run \`/skills\` to see loaded skills

---

## Getting More Help

- **GitHub Issues:** [Report a bug](https://github.com/kprsnt2/MyLocalCLI/issues)
- **Check README:** [Full documentation](https://github.com/kprsnt2/MyLocalCLI)

---

## Quick Fixes Summary

| Problem | Quick Fix |
|---------|-----------|
| Node.js not installed | Download from [nodejs.org](https://nodejs.org/) |
| PowerShell blocks scripts | \`Set-ExecutionPolicy RemoteSigned -Scope CurrentUser\` |
| 'mlc' not found | Use \`npx mylocalcli\` or fix npm PATH |
| Connection refused | Start LM Studio/Ollama server |
| API key invalid | Run \`mlc init\` and re-enter key |
| Config corrupted | Delete \`~/.mylocalcli/config.json\` |
`;

export default function TroubleshootingPage() {
    return <DocLayout content={content} title="Troubleshooting" />;
}

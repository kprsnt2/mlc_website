# MyLocalCLI Documentation Website

This is the documentation website for MyLocalCLI, built with Next.js 15.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push the `website` folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Set the root directory to `website`
5. Deploy

### Custom Domain Setup

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add `cli.kprsnt.in`
4. Add DNS records to your domain provider:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME**: `cli` → `cname.vercel-dns.com`

## Structure

```
website/
├── src/app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout with navigation
│   ├── globals.css       # Dark theme styles
│   └── docs/
│       ├── DocLayout.tsx # Docs sidebar layout
│       ├── getting-started/
│       ├── tools/
│       ├── skills/
│       ├── agents/
│       └── configuration/
└── package.json
```

## Content

The docs pages read markdown files from `../docs/` at build time.

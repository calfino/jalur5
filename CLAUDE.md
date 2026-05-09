# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test runner is configured.

## Architecture

**Jalur5** is a Next.js media publication site about Jakarta's public transportation. It uses the App Router with React 19 and Tailwind CSS v4.

All source lives under `app/`:
- `page.tsx` — home page, composes all section components in order
- `layout.tsx` — root layout with HTML metadata and Tailwind base classes
- `components/` — one file per page section (Navbar, Hero, About, Coverage, Socials, EndorseSection, Footer)
- `hooks/useInView.ts` — Intersection Observer hook used for scroll-triggered animations

Components that use browser APIs or React state carry `"use client"` at the top. Server components (no directive) are the default.

Path alias `@/*` resolves to the project root — use it for all cross-directory imports.

## Git Workflow

After completing any meaningful unit of work, commit and push to GitHub so progress is never lost:

```bash
git add <specific files>
git commit -m "short, imperative-mood summary (e.g. 'add Coverage section animation')"
git push
```

Commit messages should describe *what changed and why*, not just *what was done*. Prefer small, focused commits over large batches — one logical change per commit.

## Next.js Version Note

This project uses Next.js 16.2.6, which contains breaking changes from earlier versions. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/` — APIs, conventions, and file structure may differ from training data.

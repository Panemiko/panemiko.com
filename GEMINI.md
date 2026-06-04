# AI Workspace Instructions (panemiko.com)

## 🚨 Critical Directives
- **NO CONTENT CREATION**: The AI MUST NEVER write, generate, or create blog posts or content for the blog under any circumstances. Content creation is strictly manual. The AI may only assist with code, infrastructure, and styling.

## Tech Stack
- **Framework**: Next.js 15 (App Router) + React 19.
- **Language**: TypeScript.
- **Package Manager**: Bun. Always use `bun` for dependencies and scripts.

## Styling & UI
- **CSS**: Tailwind CSS v4 via PostCSS.
- **Components**: shadcn/ui.
  - Base configuration: `radix-nova` style.
  - Icons: `lucide-react`.
  - Prefer using existing shadcn components over building custom ones from scratch.

## Organization & Naming
- **File Naming**: Use `kebab-case` for all files and directories (e.g., `user-profile.tsx`, `post-card.tsx`).
- **Component Organization (Colocation)**: Prefer keeping components "side by side" with the logic or pages that use them.
  - Do NOT default to putting everything in a global `src/components` folder.
  - If a component is only used by a specific route or section, place it within that route's directory.
  - Only use `src/components/ui` for shared shadcn primitives or `src/components/shared` for truly global components used across multiple unrelated features.

## Content & Blog (MDX)
- **Content Location**: `src/content/*.mdx`.
- **Frontmatter**: Every post must include `title`, `cover`, `date`, `language` ("pt" or "en"). Optional: `description`, `tags`.

## Type Safety & Environment
- **Env Vars**: Validate all environment variables through the T3 Env setup in `src/env.js`. Never use `process.env` directly in application logic.

## Formatting & Linting
- **Linting**: ESLint v9 (Flat Config).
- **Formatting**: Prettier with `prettier-plugin-tailwindcss`. Ensure Tailwind classes are automatically sorted.

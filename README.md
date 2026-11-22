<div align="center">

<p align="center">
  <img src="docs/images/banner.png" alt="Dark Landing SKILL" width="100%">
</p>

<p align="center"><b>English</b> | <a href="README.ja.md">日本語</a></p>

<h1 align="center">Dark Landing SKILL</h1>

<h3 align="center">A Claude Code skill that builds dark landing pages ruled with thin lines.</h3>

<p align="center">Black background, full-width 1px rule grid, bento grid, logo row, testimonials, FAQ, CTA and footer. All copy, colors and logos are swappable. React + Tailwind v4 + shadcn/ui.</p>

<p align="center">
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-97ca00?style=flat-square"></a>
  <a href="https://tailwindcss.com"><img alt="Tailwind CSS v4" src="https://img.shields.io/badge/Tailwind-v4-06b6d4?logo=tailwindcss&logoColor=white&style=flat-square"></a>
  <a href="https://ui.shadcn.com"><img alt="shadcn/ui" src="https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui&logoColor=white&style=flat-square"></a>
</p>

<p align="center">
  <a href="#quick-start">Quick start</a> ·
  <a href="#what-it-builds">What it builds</a> ·
  <a href="#rules">Rules</a> ·
  <a href="#linting">Linting</a>
</p>

</div>

---

## Overview

`dark-landing` is a skill for Claude Code. Ask for a landing page ("Make a dark bento-grid landing page") and it builds one that follows a fixed design spec: sections separated by 1px full-width rules, emphasis through white and gray contrast instead of accent colors, and no placeholder logos or invented testimonials.

## Features

- Nine sections with ready-made component templates (`assets/components/`).
- Design spec with numeric values for color, type, spacing, rules and buttons.
- All on-screen text is read from `content.ts`, never hard-coded in components.
- Semantic color tokens only (`--background`, `--foreground`, `--muted-foreground`, `--border`), with light and dark values.
- `scripts/lint.py` detects hard-coded colors, shadows, heavy font weights, decorative gradients and placeholder images.

## Quick start

Place the skill where Claude Code loads skills:

```bash
git clone <this repo> dark-landing-skill
ln -s "$PWD/dark-landing-skill" ~/.claude/skills/dark-landing
```

Then ask in Claude Code, for example: "Make a dark bento-grid landing page."

> [!NOTE]
> This repository has no remote yet, so the clone URL above is left as `<this repo>`.

## What it builds

| # | Section | Template |
|---|---|---|
| 1 | Header | `header.tsx` |
| 2 | Hero | `hero.tsx` |
| 3 | Bento grid | `bento-grid.tsx` |
| 4 | Logo cloud | `logo-cloud.tsx` |
| 5 | Features | `feature-grid.tsx` |
| 6 | Testimonials (wall of love) | `wall-of-love.tsx` |
| 7 | FAQ | `faq.tsx` |
| 8 | CTA | `cta.tsx` |
| 9 | Footer | `footer.tsx` |

Structure and dimensions of each section are in `references/sections.md`.

## Layout

| Path | Contents |
|---|---|
| `SKILL.md` | Procedure and rules |
| `references/design-spec.md` | Numeric spec for color, type, spacing, rules, buttons |
| `references/sections.md` | Structure and dimensions of the nine sections |
| `references/setup.md` | Dependencies and `globals.css` setup |
| `references/checklist.md` | Completion checklist |
| `assets/tokens.css` | Color tokens (light / dark) |
| `assets/components/*.tsx` | Section templates |
| `assets/content.example.ts` | Sample copy definition to replace |
| `scripts/lint.py` | Rule checker |

## Rules

- Colors come from semantic tokens only. No `#000` or `gray-500`.
- Separators are 1px rules, not shadows or rounded surfaces. Cells touch each other.
- Emphasis uses white and gray contrast. No accent color unless you specify one.
- No placeholder logos or icons. Without a logo, only the service name is shown.
- No invented customer logos, testimonials or numbers. Dummy data is labeled as a sample, or you are asked for material.
- Inner scroll areas use `overscroll-contain`. Animations stop under `prefers-reduced-motion`.

## Linting

```bash
python3 -I scripts/lint.py ./src
```

Exits with 1 when a violation is found.

> [!NOTE]
> Not verified here: the generated pages were not rendered, and `scripts/lint.py` was not run against a real project, in this README rework.

## License

MIT

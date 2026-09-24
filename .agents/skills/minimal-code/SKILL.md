---
name: minimal-code
description: Guidance and rules for applying minimal code and Ponytail engineering principles in the codebase.
---

# Minimal Code (Ponytail Principles)

## Purpose
Apply lightweight, pragmatic, and maintainable engineering practices to keep the codebase lean and free of unnecessary bloat.

## Rules
- **YAGNI**: You Aren't Gonna Need It. Do not build features or capabilities until explicitly required.
- **Simplest working implementation**: Choose the most straightforward solution that meets requirements.
- **Reuse before adding**: Leverage existing project utilities, components, and patterns before creating new ones.
- **Native platform features first**: Prefer native HTML, CSS, and modern browser Web APIs over external JS libraries.
- **Existing dependencies first**: Utilize existing dependencies in `package.json` before introducing any new package.
- **No premature abstraction**: Avoid creating complex helpers, factories, or generalized wrappers for one-off use cases.
- **Delete dead code safely**: Remove unused components, files, and dead logic whenever safe to do so.

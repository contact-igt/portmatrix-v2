---
name: verification-workflow
description: Disciplined task completion workflow to prevent infinite redesign loops and ensure empirical verification.
---

# Verification Workflow

## Purpose
Enforce a disciplined execution lifecycle that guarantees empirical verification while preventing unending refactoring cycles.

## Workflow Sequence
`inspect` → `implement` → `verify` → `stop`

## Rules
- **No recursive self-redesign loop**: Avoid endless cycles of tweaking and re-evaluating aesthetics after requirements are met.
- **One implementation pass**: Complete planned changes in a single focused phase.
- **One final verification pass**: Perform exact programmatic and visual verification to confirm stability and accuracy.
- **Report non-blocking issues**: Document minor remaining non-blocking items in the summary rather than triggering another redesign pass.
- **Stop when verified**: Conclude the turn once implementation and verification steps pass.

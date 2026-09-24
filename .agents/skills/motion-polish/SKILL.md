---
name: motion-polish
description: Interaction and motion design principles inspired by Emil Kowalski for responsive, high-performance UI feedback.
---

# Motion Polish & Interaction Principles

## Purpose
Guide motion execution to provide purposeful, instantaneous, and accessible UI interactions.

## Rules
- **Motion aids hierarchy and state**: Animate only to clarify spatial relationships, state shifts, or layout transitions.
- **Enter ease-out**: Use ease-out curves for elements entering the viewport or appearing on user input.
- **Exit ease-in**: Use ease-in curves for elements leaving the viewport or closing.
- **Fast hover transitions**: Keep hover and active state transitions snappy, generally <= 150ms.
- **Visible focus states**: Maintain clear, accessible focus rings and keyboard interaction feedback.
- **Prefer transform and opacity**: Animate exclusively hardware-accelerated properties (`transform`, `opacity`) to avoid layout recalculations.
- **Reduced-motion support**: Respect `prefers-reduced-motion` user settings by disabling or simplifying movement.
- **Fail-safe visibility**: Ensure critical content remains fully accessible and readable even if animations fail to run.

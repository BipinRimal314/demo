# Specification: Light/Dark Mode Toggle & Light Theme Refinement

## Overview
Implement a fully functional Light/Dark mode toggle across the Ekline website and refine the light theme colors to improve readability and user experience ("easy on the eyes").

## Objectives
- Provide a seamless theme switching experience for users.
- Update the light theme color palette for better contrast and comfort.
- Ensure all components respond correctly to theme changes.
- Update the design documentation to reflect the new color system.

## Requirements

### 1. Theme Toggle Functionality
- Implement a persistent theme toggle (likely in the Navbar).
- Use `data-theme="light"` and `data-theme="dark"` on the `<html>` or `<body>` element.
- Persist user preference in `localStorage`.
- Support system preference (`prefers-color-scheme`) as a default.

### 2. Light Theme Refinement
The light theme needs to be updated to be "easier on the eyes".
- **Backgrounds:** Transition from bright/harsh whites to softer, neutral tones.
- **Text:** Ensure high contrast for readability while avoiding pure black on bright backgrounds where it might feel too sharp.
- **Accents:** Use consistent brand colors (Emerald) but adjusted for light mode visibility.
- **Consistency:** Ensure the light theme feels like a natural counterpart to the established premium dark theme.

### 3. Design System Updates
- Update `docs/design.md` with the new light theme color scale.
- Update `src/index.css` with the refined CSS variables.

## Technical Details
- Utilize existing CSS variables in `src/index.css`.
- Use React state or a Context Provider for managing theme state if necessary, or just a simple script to toggle the `data-theme` attribute.
- Ensure Framer Motion animations work well with both themes.

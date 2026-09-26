---
name: Alvincent Sangco Portfolio - Neo-Mirai
description: Tokyo-2042 retro-futurist Japanese cyber-humanist design system
colors:
  primary: "#C9421A"
  gold: "#C68A1E"
  gold-bright: "#E5A932"
  sun-deep: "#A73210"
  neutral-bg: "#F3EFE6"
  surface-card: "#ECE6DA"
  surface-deep: "#DDD5C5"
  neutral-fg: "#1C1A17"
  neutral-muted: "#44403C"
  ash: "#78716C"
  border: "#D5CEBF"
  night: "#12181B"
  night-soft: "#1B2327"
  rice: "#FAF7F0"
typography:
  display:
    fontFamily: "'Chakra Petch', system-ui, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Chakra Petch', system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Zen Old Mincho', serif"
    fontSize: "1.25rem - 1.75rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "'Zen Old Mincho', serif"
    fontSize: "1rem - 1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Azeret Mono', monospace"
    fontSize: "0.62rem - 0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "2px"
  md: "4px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.rice}"
    rounded: "{rounded.pill}"
    padding: "9px 15px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-fg}"
    rounded: "{rounded.sm}"
    padding: "9px 15px"
---

# Design System: Alvincent Sangco Portfolio (Neo-Mirai)

## Overview

**Creative North Star: "Tokyo 2042 Cyber-Humanist Ledger"**

A retro-futuristic Japanese cyber-humanist design system inspired by Neo-Mirai (`https://impeccable.style/neo-mirai/`). The visual world synthesizes tactile warmth with architectural engineering precision: textured washi rice paper grounds, sumi ink charcoal typography, vermilion sun stamps, warm amber gold accents, and contrasting midnight indigo ledger panels.

**Key Characteristics:**
- Warm tactile paper canvas (`#F3EFE6`) layered with a subtle 112px grid and atmospheric gold sun aura.
- Cybernetic display typography (`Chakra Petch`) paired with classical Japanese literary serif body (`Zen Old Mincho`) and cryptographic monospace metadata (`Azeret Mono`).
- Vertical Japanese poetry stamps (`writing-mode: vertical-rl;`) and cinnabar Hankō seals (`hanko-seal`).
- High-contrast night architectural ledger panels (`#12181B`) for timelines and production achievements.
- Neo-Mirai brand lockup: circular geometric emblem with gold/sun/night segments and crosshair lines.
- Ticket-pill action controls with circular directional arrow icons.

## Colors

Rooted in traditional Japanese pigments and speculative cybernetic materials.

### Primary & Accent
- **Japanese Sun Vermilion** (`#C9421A`): Core focal accent, active indicators, Hankō seals, and primary attention hooks.
- **Deep Sun / Cinnabar** (`#A73210`): Hover state for active ticket pills and key architectural accents.
- **Amber Gold** (`#C68A1E`): Primary CTA pill ground, benchmark highlights, and navigational nodes.
- **Gold Bright** (`#E5A932`): Luminous timeline nodes and agenda highlights on midnight surfaces.

### Neutral & Surfaces
- **Tactile Paper Ground** (`#F3EFE6`): Main viewport canvas with 112px grid.
- **Paper Soft** (`#ECE6DA`): Secondary panel and card surface.
- **Paper Deep** (`#DDD5C5`): Footer ground and tertiary grouping containers.
- **Sumi Charcoal Ink** (`#1C1A17`): Primary headings and high-contrast text.
- **Soft Ink** (`#44403C`): Narrative explanations and body copy.
- **Ash Taupe** (`#78716C`): Tertiary labels, timestamps, and architectural coordinates.
- **Boundary Line** (`#D5CEBF`): Delicate 1px architectural hairline dividers.
- **Midnight Indigo** (`#12181B`): High-contrast architectural agenda / chronicle ground.
- **Pure Rice** (`#FAF7F0`): Clean high-contrast text on gold and midnight surfaces.

## Typography

- **Display Font:** `Chakra Petch` (Cybernetic geometric sans with technical cut corners).
- **Body / Narrative Font:** `Zen Old Mincho` (Timeless literary Japanese serif).
- **Telemetry / Metadata Font:** `Azeret Mono` (Cryptographic terminal monospace).

### Hierarchy
- **Display** (300, `clamp(3rem, 7vw, 6rem)`, 0.95 line-height): Hero headline names and main declarative statements.
- **Headline** (400, `clamp(2rem, 4vw, 3.5rem)`, 1.1 line-height): Section titles (`ABOUT`, `TECHNICAL SPECIFICATION`, `PRODUCTION EXPERIENCE`, `FEATURED ARTIFACTS`).
- **Title** (500, `1.25rem - 1.75rem`, 1.3 line-height): Project titles and company role titles.
- **Body** (400, `1rem - 1.125rem`, 1.6 line-height): Narrative explanations, capped at a measure of 65–75ch.
- **Label / Telemetry** (600, `0.62rem - 0.75rem`, uppercase with tracking-wider): Architectural categorizations, status beacons, timestamps, and coordinate telemetry.

## Layout

An asymmetric architectural ledger combining a single-column reading spine with multi-column technical cards and high-contrast night panels. Grid lines align to a subtle 112px grid pattern. Spacing uses 16px/24px/32px multiples with generous breathing room between sections.

## Elevation & Depth

Surfaces rest flat and architectural, relying on 1px hairline border lines (`#D5CEBF`), subtle background shifts, and high-contrast midnight panels rather than heavy drop shadows. Interactive cards feature gentle upward translations (`translateY(-2px)`) and soft ambient shadows.

## Shapes

- Pill radiuses (`9999px`) for action CTAs, circular brand emblems, and status beacons.
- Crisp 2px to 4px radiuses for architectural cards, ticket stubs, and technical panels.

## Components

### Brand Lockup
- Circular 35px emblem split into gold, sun, and midnight sectors with crosshair dividers.
- Dual-row uppercase monospace title (`ALVINCENT / SANGCO · 2026`).

### Navigation
- Top floating bar with transparent-to-frosted transition on scroll.
- Monospace navigation links with circular sun dot indicator on hover and active state.

### Ticket Pill
- Pill-shaped gold button with uppercase monospace text and circular arrow icon badge (`→`).
- Tactile hover physics transitioning to cinnabar with 0.98 active compression.

### Hankō Seal
- Red cinnabar square stamp with Japanese characters (`桑弧`, `通信`, `開発`) with subtle rotation.

### Technical Specification Matrix
- Hairline-divided ledger with kanji category stamps, index markers (`SYS.01` to `SYS.06`), and tech icon pills.

### High-Contrast Chronicle Ledger
- Midnight indigo panel with glowing amber nodes and connecting vertical rail line.

## Do's and Don'ts

### Do:
- **Do** preserve the tactile paper background (`#F3EFE6`) with subtle 112px grid lines.
- **Do** maintain the triad of `Chakra Petch`, `Zen Old Mincho`, and `Azeret Mono`.
- **Do** keep vertical Japanese poetic text and Hankō seals aligned to architectural margins.
- **Do** use midnight indigo panels for high-contrast section rhythm.
- **Do** ensure all interactive controls have accessible `:focus-visible` rings in sun vermilion (`#C9421A`).

### Don't:
- **Don't** use gradient text or generic corporate box grids.
- **Don't** use cold clinical grays; all secondary text must carry warm slate-taupe tones.
- **Don't** use generic stock icons where custom SVG and simple-icons exist.
- **Don't** omit the circular arrow badge on ticket pills.

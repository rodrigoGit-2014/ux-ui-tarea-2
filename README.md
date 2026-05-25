# Sistema de Confianza Digital - Enfermedades Poco Frecuentes

Modern health-tech presentation showcasing a digital trust system for rare disease crowdfunding campaigns.

## Overview

A 7-slide presentation built with React, TypeScript, and Framer Motion, featuring a clean, minimal design inspired by Stripe, Linear, and Notion.

## Slides

1. **Portada (Cover)** - Hero introduction with gradient background
2. **Objetivo (Objective)** - Single clear objective statement
3. **Pilares (Pillars)** - 6 foundational elements in card grid
4. **Mapa Estratégico (Ecosystem)** - Radial hub visualization with SVG connections
5. **Tensiones Estratégicas (Tensions)** - 3 strategic conflicts in split-screen cards
6. **Hallazgos (Findings)** - 5 key discoveries
7. **Brief Final (Closing)** - Keynote-style inspirational closing

## Tech Stack

- **React 18.3** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS 3.4** - Utility-first styling
- **Framer Motion 11.5** - Smooth animations
- **Lucide React** - Modern icon library

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Navigation

- **Arrow Keys**: Navigate between slides (← →)
- **Space / PageDown**: Next slide
- **PageUp**: Previous slide
- **URL Hash**: Direct navigation (e.g., `#4` for slide 4)

## Design Philosophy

- **Minimal text** - One strong idea per slide
- **Visual storytelling** - Large typography, generous whitespace
- **Premium aesthetic** - Subtle animations, modern components
- **Emotional impact** - Builds trust through design
- **Health-tech style** - Soft blues and neutrals, clean sans-serif

## Color Palette

- **Primary Blue**: #3B82F6 (medical trust)
- **Neutral Grays**: #FAFAFA to #404040 (clean backgrounds)
- **Accents**: Cyan (#06B6D4) and Rose (#F43F5E) for tensions

## Project Structure

```
src/
├── components/
│   ├── slides/          # Individual slide components
│   ├── ui/              # Reusable UI components
│   ├── Presentation.tsx # Main orchestrator
│   ├── SlideContainer.tsx
│   └── Navigation.tsx
├── data/
│   └── slidesData.ts    # All presentation content
├── hooks/
│   ├── useSlideNavigation.ts
│   └── useKeyboardNavigation.ts
├── types/
│   └── index.ts         # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
```

## Target Duration

~4 minutes (~35 seconds per slide)

## Presentation Speech

See [SPEECH.md](./SPEECH.md) for a complete presentation script with:
- Detailed speech for each slide (~35 seconds each)
- Timing and pacing notes
- Emphasis and body language recommendations
- Total duration: ~4 minutes

## License

Private - Educational use only

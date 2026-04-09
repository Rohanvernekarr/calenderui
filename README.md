# Premium Interactive Calendar

A high-fidelity, library-ready React calendar component built with Next.js and Vanilla CSS. It features a skeuomorphic "wall calendar" design with organic shapes and smooth transitions.

## Key Features

- **Library Ready**: Configurable via props (`mode="single" | "range"`, `showNotes`, `onSelect`, etc.).
- **Smooth Animations**: Native CSS transitions for month switching and selection effects.
- **Premium Aesthetics**: Uses `Outfit` & `Inter` typography, glassmorphism, and cinematic vignette effects.
- **Integrated Journaling**: Built-in notes panel that syncs with date selections via local storage.
- **Fully Responsive**: Optimized layout for desktop, tablet, and mobile (touch-friendly navigation).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Logic**: React 19 + custom hooks (`useCalendar`, `useDateRange`)
- **Styling**: Vanilla CSS Modules (no external animation libraries)
- **Icons**: Lucide React
- **Fonts**: Google Fonts via `next/font`

## Getting Started

### 1. Prerequisites
- Node.js 18+
- npm (or yarn/pnpm)

### 2. Installation
```bash
npm install
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the calendar.

## Design Choices


- **Skeuomorphism**: The "Spiral Header" with 3D wire-hooks anchors the design in a physical "Wall Calendar" metaphor.
- **Micro-interactions**: Subtle hover scaling and backdrop blurs provide tactile feedback without clutter.
- **Native Performance**: All animations are handled by CSS to ensure smooth performance even on lower-end devices.

# Kritigya Katwal - Teaching Internship Portfolio

A modern, responsive portfolio website showcasing Kritigya Katwal's B.Tech.Ed.IT teaching internship at Adarsh Secondary School.

## Features

- ✨ **Enhanced Visual Design**: Modern gradients, glassmorphism effects, and smooth animations
- 🎨 **Beautiful Hero Section**: Gradient background with subtle patterns and improved typography
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎭 **Interactive Elements**: Hover effects, scale animations, and smooth transitions
- 📊 Tabbed interface with gradient active states
- 🏆 Showcase internship journey, learnings, and materials
- 📚 Comprehensive materials hub with Google Drive integration
- 🔗 7 clickable resource boxes with direct links to teaching materials
- ⚡ Fast performance with Next.js and optimized animations

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx                    # Home page
│   ├── components/
│   │   └── InternshipPortfolio.tsx # Main portfolio component
│   ├── globals.css                 # Global styles
│   └── layout.tsx                  # Root layout
├── components/
│   └── ui/                         # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── tabs.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts                    # Utility functions
└── package.json
```

## Getting Started

The development server is running at **http://localhost:3000**

### Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Customization

### Update Your Profile

Edit [`app/components/InternshipPortfolio.tsx`](app/components/InternshipPortfolio.tsx#L8-L14):

```typescript
const profile = {
  name: "Kritigya Katwal",
  institution: "Adarsh Secondary School",
  course: "B.Tech.Ed.IT, 7th Semester",
  duration: "40 Hours Teaching",
  role: "Teaching Intern",
};
```

### Modify Journey Items

Update the `journey` array in the same file with your achievements.

### Change Colors

Edit Tailwind color classes:
- Hero gradient: `from-indigo-600 to-purple-600`
- Badges, shadows, and hover effects throughout the component

## Technology Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Library:** shadcn/ui
- **Icons:** lucide-react

## Component Overview

### InternshipPortfolio Component

**Main Features:**
- **Enhanced Hero Section**: Gradient background with animated patterns, improved typography, and glassmorphism effects
- About section with detailed background and gradient info cards
- **Interactive Tab System**: Gradient active states with smooth transitions
- **Animated Overview Cards**: Scale effects, gradient backgrounds, and icon animations
- **Journey Section**: Enhanced cards with gradient icons and improved spacing
- **Materials Hub**: 7 beautifully designed resource cards with hover effects and direct Google Drive links

**Visual Enhancements:**
- Glassmorphism effects with backdrop blur
- Gradient backgrounds and borders
- Smooth hover animations and scale effects
- Custom fade-in animations
- Enhanced shadows and depth
- Modern rounded corners (3xl radius)
- Color-coded sections with consistent theming

**Technical Notes:**
- Client Component (uses `"use client"` directive for interactive features)
- State-managed tabs with React `useState`
- Custom CSS animations for enhanced UX
- Responsive design with improved mobile experience

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx
│   ├── components/InternshipPortfolio.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/ui/
│   ├── button.tsx
│   ├── card.tsx
│   ├── tabs.tsx
│   └── badge.tsx
└── lib/utils.ts
```

## Deployment

Deploy to Vercel (recommended):

```bash
npm install -g vercel
vercel
```

Or deploy to Netlify, GitHub Pages, or any Node.js hosting.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

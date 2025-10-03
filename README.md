# Trinkets Institute Website

A modern, responsive website for Trinkets Institute built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern blue and orange color scheme
- 📱 Fully responsive design
- ⚡ Next.js 14 App Router
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 🖼️ Dynamic hero section with rotating slides
- 📊 Interactive stats section
- 🎓 Course showcase
- 💼 Student placement highlights
- 📞 Contact integration

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trinkets-institute
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── Navigation.tsx  # Main navigation
│   ├── Hero.tsx        # Hero section
│   ├── CoursesSection.tsx
│   ├── StatsSection.tsx
│   ├── PlacementSection.tsx
│   └── Footer.tsx
└── ...
```

## Key Components

### Navigation
- Responsive mobile menu
- Sticky header with gradient logo
- Call-to-action button

### Hero Section
- 4 rotating slides with different content
- Automatic progression every 5 seconds
- Manual navigation controls
- Embedded course enquiry form

### Courses Section
- Grid layout showcasing engineering courses
- Icon-based design
- Course descriptions and links

### Stats Section
- Achievement highlights
- Blue/orange gradient background
- Responsive grid layout

### Placement Section
- Student success stories
- Company placement details
- Professional card design

## Color Scheme

The website uses a professional blue and orange color palette:

- **Primary Blue**: `#3b82f6` (Tailwind blue-500)
- **Secondary Orange**: `#f97316` (Tailwind orange-500)
- Various shades and gradients for visual depth

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Contact

For questions about this project, contact:
- Phone: +91 9820 924 788
- Email: info@titindia.com
- Address: 823, Ecstasy Business Park, City of Joy, JSD Road, Mulund (W), Mumbai - 400080

---

© 2025 Trinkets Institute of Technology. All rights reserved.
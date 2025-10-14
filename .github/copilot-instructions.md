# Trinkets Institute Website - AI Development Guide

## Project Overview
This is a Next.js 14 website for Trinkets Institute, an engineering training institute in Mumbai. The site features extensive course pages, SEO optimization, and performance enhancements.

## Architecture & Patterns

### File-Based Routing Structure
- **App Router**: Uses Next.js 14 App Router with `src/app/` directory
- **Course Pages**: Individual course routes at `/courses/[course-slug]/page.tsx` with comprehensive SEO metadata
- **Dynamic Imports**: Components use React.lazy() and Suspense for code splitting
- **Layout System**: Root layout includes Navigation, Footer, Map, and service worker registration

### Component Architecture
- **Modular Components**: Located in `src/components/` with feature-specific subdirectories (`about/`, `courses/`, `contact/`)
- **Shared UI**: Common components like `OptimizedImage`, `StructuredData`, `LazySection` for consistency
- **Memoization**: Components use `memo()` for performance (see `Navigation.tsx`)
- **Error Boundaries**: `ErrorBoundary.tsx` wraps critical sections

### SEO & Performance Strategy
- **Structured Data**: `StructuredData.tsx` generates JSON-LD for different content types (organization, course, FAQ)
- **Meta Templates**: Each page has comprehensive metadata with keywords, OpenGraph, Twitter cards
- **Image Optimization**: `next.config.js` configures WebP/AVIF formats, responsive sizes
- **Critical CSS**: Inline critical styles in layout for above-the-fold content
- **Service Worker**: `ServiceWorkerRegistration.tsx` for caching and offline support

## Development Conventions

### CSS & Styling
- **Tailwind CSS**: Primary styling system with custom config in `tailwind.config.js`
- **Color Scheme**: Blue (#3b82f6) and orange (#f97316) gradient theme throughout
- **Custom Animations**: Extensive keyframes in Tailwind config (morph, float, gradient-x/y)
- **Consistent Spacing**: Uses Tailwind's spacing scale consistently

### State Management
- **Local State**: Uses `useState` for component-specific state (e.g., Hero carousel, mobile menu)
- **No Global State**: Architecture favors prop drilling over complex state management
- **Performance Hooks**: Custom hooks in `src/hooks/` (e.g., `useMobileDetection.ts`)

### Content & Courses
- **Course Structure**: Each course has dedicated folder with `page.tsx` containing full SEO setup
- **Metadata Pattern**: Export `metadata` object with title templates, descriptions, keywords arrays
- **JSON-LD Schema**: Every course page includes comprehensive structured data
- **Related Content**: Cross-linking between related courses using `RelatedCourses.tsx`

## Development Workflows

### Build & Development
```bash
npm run dev    # Development server (runs on port 3000)
npm run build  # Production build with optimizations
npm run start  # Production server
npm run lint   # ESLint checking
```

### Adding New Courses
1. Create folder in `src/app/courses/[course-name]/`
2. Add `page.tsx` with full metadata export (use existing courses as template)
3. Include JSON-LD structured data with course-specific schema
4. Add course to related courses lists where relevant
5. Update navigation if needed

### Performance Optimization
- **Image Handling**: Use Next.js `Image` component with responsive sizing
- **Code Splitting**: Dynamic imports for non-critical components
- **Bundle Analysis**: Webpack config in `next.config.js` splits vendor/common chunks
- **Web Vitals**: `src/utils/performance.ts` includes measurement utilities

## Key Files & Their Purpose
- `src/app/layout.tsx`: Root layout with SEO, fonts, critical CSS
- `src/components/Navigation.tsx`: Sticky header with logo, menu, mobile responsive
- `src/components/Hero.tsx`: Animated carousel hero section with course CTAs
- `src/components/StructuredData.tsx`: JSON-LD schema generator for all content types
- `tailwind.config.js`: Custom theme, animations, and design system
- `next.config.js`: Image optimization, redirects, performance settings

## SEO & Content Guidelines
- **Keyword Strategy**: Focus on "Mumbai" + engineering terms for local SEO
- **Meta Descriptions**: Keep under 160 chars, include location and course benefits
- **Structured Data**: Always include organization, course, and FAQ schemas
- **Image Alt Text**: Descriptive, includes course/institute name for branding
- **Internal Linking**: Cross-link between related courses and services

## Integration Points
- **Contact Forms**: Lead to `/contact` page with structured form
- **Maps Integration**: `Map.tsx` component shows institute location
- **Social Proof**: Stats sections with placement rates and student counts
- **Mobile Optimization**: Responsive design with mobile-first approach

## Common Patterns to Follow
- Always export metadata for new pages
- Use `memo()` for components with props that rarely change  
- Include structured data JSON-LD for content pages
- Follow the blue/orange gradient color scheme
- Implement error boundaries for user-facing components
- Use Tailwind classes consistently rather than custom CSS
# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

The Legacy Realty is a real estate website built with React + TypeScript + Vite, showcasing luxury properties in Mohali, Chandigarh, and New Chandigarh. The site features an interactive property catalog with detailed project pages, city-specific listings, and lead generation forms.

## Common Development Commands

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Single Test Development
This project doesn't have a test suite configured. To add testing:
```bash
# Install testing dependencies
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom

# Add to package.json scripts:
# "test": "vitest",
# "test:ui": "vitest --ui"
```

## Architecture Overview

### Core Structure
- **Router-based SPA**: React Router DOM with city-specific and project-specific routes
- **Context Pattern**: Global project data management via `ProjectContext`
- **Component Architecture**: Modular components with UI components from shadcn/ui
- **Static Asset Management**: Images and PDFs served from `src/assets/`

### Key Architectural Patterns

#### Project Data Management
- `src/context/ProjectContext.tsx` - Central data store containing all property projects
- Projects are typed with comprehensive interfaces including gallery, amenities, specifications
- Each project has a unique slug for routing (`/project/:projectName`)

#### Routing Structure
```typescript
// Main routes in App.tsx
/ (HomePage) - Landing page with featured projects
/cities/:city - City-specific property listings
/projects/:type - Project type filtering (residential/commercial)
/project/:projectName - Individual project detail pages
/aboutus - Company information
/contact-us - Contact forms
```

#### Component Hierarchy
- **Layout**: Wraps all pages with Header + Footer + ScrollToTop
- **Pages**: HomePage, city pages, project detail pages
- **Shared Components**: Header (with dropdowns), ContactFooter, FeaturedProjects
- **UI Components**: shadcn/ui components in `src/components/ui/`

### State Management
- **ProjectContext**: Provides project data, filtering, and lookup functions
- **React Hook Form**: Used for lead capture and contact forms
- **EmailJS**: Handles form submissions for lead generation

### Styling System
- **Tailwind CSS**: Primary styling framework with custom theme extensions
- **CSS Custom Properties**: Theme colors defined in CSS variables
- **Framer Motion**: Animations and transitions
- **Custom Fonts**: Poiret One for headings, Inter for body text

## Configuration Files

### TypeScript Setup
- **tsconfig.json**: Project references setup with separate app/node configs
- **Path Aliases**: `@/` maps to `./src/` for clean imports

### Build Tool Configuration  
- **Vite**: Fast development and production builds
- **ESLint**: TypeScript + React rules with React Hooks and Refresh plugins
- **Tailwind**: Extended theme with custom animations and color schemes

### Component Library Integration
- **shadcn/ui**: New York variant with Zinc base color
- **Lucide React**: Icon library throughout the application
- **Radix UI**: Underlying primitive components for dropdowns, accordions

## Project-Specific Context

### Real Estate Domain Logic
- **Project Types**: Residential, Commercial, Plots
- **Cities**: Mohali, Chandigarh, New Chandigarh with specific connectivity details
- **Project Status**: Ready to Move, Under Construction, Booking Open, etc.
- **Lead Generation**: Multiple contact forms throughout site for different project inquiries

### Asset Management
- **Image Optimization**: WebP format for performance
- **PDF Brochures**: Project-specific brochures linked in project data
- **Logo Assets**: Developer and project-specific logos

### SEO and Performance
- **Route-based Code Splitting**: Individual project pages load independently  
- **Image Lazy Loading**: Large hero images and project galleries optimized
- **Meta Information**: Project-specific meta data through routing

## Development Notes

### Adding New Projects
1. Import assets to `src/assets/[project-folder]/`
2. Add project object to `projects` array in `ProjectContext.tsx`
3. Include gallery images, brochures, and comprehensive project details
4. Ensure slug matches the expected URL pattern

### Form Integration
- EmailJS configuration requires environment variables for service/template IDs
- Lead forms are scattered across project pages and require consistent validation
- Contact forms use React Hook Form with validation schemas

### Performance Considerations
- Large number of high-resolution images in project gallery arrays
- Consider image compression and lazy loading for production optimization
- Bundle size may be large due to comprehensive project data in context
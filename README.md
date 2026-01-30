# AutoDevOS - Next.js Landing Page & Website

A modern, responsive Next.js 16 TypeScript landing page and website for AutoDevOS CLI, featuring GSAP animations, Framer Motion, and Tailwind CSS.

## Features

✨ **Modern Design**
- Dark cyberpunk theme with terminal-inspired aesthetic
- Glassmorphism effects with backdrop blur
- Smooth animations with GSAP and Framer Motion
- Responsive design (mobile-first approach)

🚀 **Performance**
- Next.js 16 with server and client components
- Optimized animations with GSAP ScrollTrigger
- Fast load times with Tailwind CSS
- Proper code splitting and lazy loading

📱 **Responsive**
- Mobile-first design
- Breakpoints for tablet and desktop
- Touch-friendly navigation
- Responsive typography

🎨 **Design System**
- Custom color palette (terminal green, cyan, purple)
- Space Grotesk font for body
- Orbitron font for headings
- JetBrains Mono for code blocks
- Consistent spacing and typography

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── globals.css             # Global styles and theme
│   ├── page.tsx                # Landing/Home page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── support/
│   │   └── page.tsx            # Support & FAQ page
│   ├── blog/
│   │   └── page.tsx            # Blog listing page
│   ├── docs/
│   │   └── page.tsx            # Documentation page
│   ├── security/
│   │   └── page.tsx            # Security page
│   ├── privacy/
│   │   └── page.tsx            # Privacy policy page
│   └── terms/
│       └── page.tsx            # Terms of service page
├── components/
│   ├── Navigation.tsx          # Fixed navigation bar
│   ├── Footer.tsx              # Footer component
│   └── Hero.tsx                # Hero section with GSAP
├── package.json
├── tsconfig.json
└── next.config.mjs
```

## Pages

1. **Home (`/`)** - Landing page with hero, features, testimonials, and CTA
2. **About (`/about`)** - Company story, mission, values, team, and stats
3. **Support (`/support`)** - Support options and comprehensive FAQ
4. **Blog (`/blog`)** - Blog post listings with newsletter signup
5. **Docs (`/docs`)** - Documentation with sidebar navigation
6. **Security (`/security`)** - Security features and commitments
7. **Privacy (`/privacy`)** - Privacy policy
8. **Terms (`/terms`)** - Terms of service

## Tech Stack

### Core
- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui (button, forms, etc.)

### Animations
- **GSAP**: Advanced timeline animations and scroll triggers
- **Framer Motion**: React component animations
- **Custom CSS Animations**: Keyframe animations for floating orbs

### Fonts
- **Space Grotesk**: Primary font for body text
- **JetBrains Mono**: Monospace font for code
- **Orbitron**: Display font for headings

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd autodevos-next

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors
Edit CSS variables in `/app/globals.css` and `/app/layout.tsx`:
- `--terminal-green`: Primary green (160 84% 39%)
- `--terminal-cyan`: Accent cyan (180 100% 50%)
- `--terminal-purple`: Secondary purple (270 80% 65%)

### Fonts
Modify fonts in `/app/layout.tsx`:
```typescript
const spaceGrotesk = Space_Grotesk({ ... })
const jetbrainsMono = JetBrains_Mono({ ... })
const orbitron = Orbitron({ ... })
```

### Content
Update text content in each page's component. All pages are located in `/app/[route]/page.tsx`.

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

All components use Tailwind's responsive prefixes (sm:, md:, lg:) for adaptive layouts.

## Animation Details

### GSAP Animations
- Hero title and subtitle: Fade in with Y offset
- Floating orbs: Continuous floating animation with yoyo
- Feature cards: Scroll trigger animations on view
- Blog cards: Scroll trigger animations on view

### Framer Motion
- Button hover effects
- Card hover effects
- Testimonial cards
- Newsletter signup
- Support option cards

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS 12+, Android 5+

## Performance Optimization

- Image lazy loading
- CSS grid/flexbox for layouts
- GSAP optimization with context.revert()
- Proper cleanup of event listeners
- Code splitting with dynamic imports

## Accessibility

- Semantic HTML elements
- Proper heading hierarchy
- Color contrast ratios meet WCAG standards
- Keyboard navigation support
- ARIA labels where needed

## Future Enhancements

- [ ] Add blog post detail pages
- [ ] Implement blog search and filtering
- [ ] Add dark/light theme toggle
- [ ] Implement analytics
- [ ] Add contact form backend
- [ ] Add team member detail pages
- [ ] Implement search functionality
- [ ] Add newsletter backend integration

## License

This project is part of AutoDevOS. See LICENSE file for details.

## Support

For questions or issues, contact support@autodevos.com or visit our support page at `/support`.

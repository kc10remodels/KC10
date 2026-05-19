# KC10 Painting Co. — Website

Awards-style residential painting company website built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Quick Start

### 1. Install Node.js
Download from https://nodejs.org (LTS version recommended). This installs both `node` and `npm`.

### 2. Install dependencies
Open a terminal in this folder and run:
```bash
npm install
```

### 3. Run the dev server
```bash
npm run dev
```
Then open http://localhost:3000 in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

---

## Pages & Sections

| Section | Component | Description |
|---|---|---|
| Navigation | `Navbar.tsx` | Sticky, transparent-to-solid scroll |
| Hero | `Hero.tsx` | Full-viewport with animated headline, floating cards, stats bar |
| Services | `Services.tsx` | 6-service card grid with hover effects + comparison strip |
| Gallery | `Gallery.tsx` | Filterable masonry portfolio grid |
| Why Us | `WhyUs.tsx` | Stats, pillars, competitor comparison table |
| Process | `Process.tsx` | 5-step timeline on dark blue background |
| Testimonials | `Testimonials.tsx` | Auto-advancing featured review + clickable card grid |
| About | `About.tsx` | Story, values, team section |
| Contact | `Contact.tsx` | Lead form with success state |
| Footer | `Footer.tsx` | Links, social, trust badges |

---

## Brand

| Token | Value |
|---|---|
| Primary (Royal Blue) | `#1a3a8f` |
| Accent (Orange) | `#f56a00` |
| Dark Navy | `#0d1e47` |
| Font | Poppins (Google Fonts) |

---

## Customization

- **Company name/contact**: Edit `src/components/Footer.tsx`, `Contact.tsx`, `Navbar.tsx`
- **Colors**: Edit `tailwind.config.ts` and search-replace hex values
- **Content**: All copy is inline in each component file
- **Real photos**: Replace the SVG illustrations in `Hero.tsx` and gradient cards in `Gallery.tsx` with `<Image>` tags pointing to your actual project photos

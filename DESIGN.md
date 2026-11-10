---
name: SHAN'S TRADE 'N GAME CREDITS
description: Direct game top-up, credits exchange, and digital entertainment services
colors:
  bg-plum-deep: "#14041b"
  bg-purple-royal: "#290645"
  bg-widget-night: "#180927"
  bg-black: "#000000"
  surface-card-light: "#ffffff"
  surface-neutral-dark: "#171717"
  surface-slate-dark: "#334155"
  border-card-light: "#e5e7eb"
  border-neutral-dark: "rgba(255, 255, 255, 0.12)"
  purple-accent: "#6b21a8"
  purple-badge: "#9333ea"
  purple-light: "#c084fc"
  gold-amber: "#f59e0b"
  gold-yellow: "#fbbf24"
  messenger-blue: "#0084ff"
  messenger-cyan: "#22d3ee"
  status-online: "#10b981"
  text-primary-light: "#ffffff"
  text-secondary-light: "#a3a3a3"
  text-muted-light: "#737373"
  text-primary-dark: "#171717"
  text-secondary-dark: "#71717a"
typography:
  display:
    fontFamily: "Anton, sans-serif"
    fontWeight: 400
    letterSpacing: "0.05em"
  body:
    fontFamily: "Montserrat, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  pill: "9999px"
  card-desktop: "16px"
  card-mobile: "8px"
  modal-desktop: "24px"
  modal-mobile: "16px"
  button: "8px"
spacing:
  container-narrow: "1100px"
  container-wide: "1280px"
  nav-container: "4px"
  nav-item: "6px 16px"
  filter-mobile: "6px 16px"
  filter-desktop: "8px 24px"
  button-action: "8px 16px"
components:
  nav-pill-container:
    backgroundColor: "rgba(255, 255, 255, 0.1)"
    textColor: "{colors.text-primary-light}"
    rounded: "{rounded.pill}"
    padding: "{spacing.nav-container}"
  nav-pill-item-active:
    backgroundColor: "{colors.surface-card-light}"
    textColor: "{colors.text-primary-dark}"
    rounded: "{rounded.pill}"
    padding: "{spacing.nav-item}"
  filter-pill-active:
    backgroundColor: "{colors.purple-accent}"
    textColor: "{colors.text-primary-light}"
    rounded: "{rounded.pill}"
    padding: "{spacing.filter-mobile}"
  filter-pill-inactive:
    backgroundColor: "{colors.surface-slate-dark}"
    textColor: "{colors.text-secondary-light}"
    rounded: "{rounded.pill}"
    padding: "{spacing.filter-mobile}"
  card-game-static:
    backgroundColor: "{colors.surface-card-light}"
    textColor: "{colors.text-primary-dark}"
    rounded: "{rounded.card-desktop}"
  card-game-dynamic:
    backgroundColor: "{colors.surface-card-light}"
    textColor: "{colors.text-primary-dark}"
    rounded: "{rounded.card-desktop}"
  button-action:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary-light}"
    rounded: "{rounded.button}"
    padding: "{spacing.button-action}"
  modal-card:
    backgroundColor: "{colors.surface-neutral-dark}"
    textColor: "{colors.text-primary-light}"
    rounded: "{rounded.modal-desktop}"
---

# Design System: SHAN'S TRADE 'N GAME CREDITS

## Overview

**Creative North Star: "Midnight Arcade & VIP Lounge"**

SHAN'S TRADE 'N Game Credits operates on an atmospheric, dark-mode gaming aesthetic characterized by deep plum and royal violet foundations (`#14041b` and `#290645`), contrasting against stark white game-catalogue cards, pill-shaped glass navigation, and vibrant amber/gold typography accents.

The interface bridges immersive esports visual culture (condensed heavyweight display typography, infinite marquee tickers, wave transitions) with high-legibility transaction surfaces (clean catalogue grids, instant keyword search, and dedicated Messenger order modals).

**Key Characteristics:**
- **Atmospheric Nocturne Canvas:** Heavy reliance on dark purple, plum, and black base canvases rather than standard neutral grays.
- **Dual Surface Polarity:** High-contrast white game cards embedded within deeply saturated dark backdrops for maximum product focus.
- **Pill Geometric Strategy:** Universal adoption of fully rounded pill geometry (`rounded-full`) for navigation containers, search inputs, category filters, and action badges.
- **Signature Silhouette Cut:** Distinctive organic curve mask (`rounded-b-[50%_12%]`) applied to game card thumbnail images.

---

## Colors

The project's palette is grounded in saturated midnight violets, accented with neon purples, warm amber golds, and dedicated service blues.

### Primary
- **Deep Plum Base** (`#14041b`): Verified master background canvas for `body`, hero sections, SVG divider shapes, and footer adjacent blocks.
- **Royal Violet** (`#290645`): Verified secondary section fill and wave accent, defining promotional service blocks (e.g., GCash conversion).
- **Night Charcoal** (`#180927`): Dedicated surface tone for the floating chatbot window and support elements.

### Secondary
- **Electric Purple** (`#6b21a8` / `bg-purple-800`): State indicator for active category filter tabs, key button hovers, and focus rings.
- **Radiant Orchid** (`#9333ea` / `bg-purple-600`): Hover badge and accent color for "View Rates" badges and preloader accents.
- **Soft Lavender** (`#c084fc` / `text-purple-400`): Icon highlights, category subtext, and active search hints.

### Tertiary (Accents)
- **Amber Gold** (`#f59e0b` / `text-amber-400` & `#fbbf24` / `text-yellow-500`): High-energy typographic highlight applied exclusively to hero emphasize words ("GCASH", "FUND TRANSFER", "Fun!").
- **Messenger Gradient Blue** (`#0084ff` / `#3b82f6` to `#22d3ee`): Functional colorway dedicated to the floating support launcher and live Messenger CTA buttons.
- **Online Pulse Emerald** (`#10b981`): Status indicator denoting live customer assistance.

### Neutral
- **Card Surface White** (`#ffffff`): The primary light card surface for game item cards on the landing page and top-up catalogue.
- **Neutral 900 Dark Surface** (`#171717`): Container fill for the price-list modal and customer testimonials.
- **Slate 700 Surface** (`#334155` / `bg-slate-700`): Background tone for inactive category filter pills.
- **Text Primary Light** (`#ffffff` / `text-neutral-100`): Primary body text, headings, and labels across all dark canvases.
- **Text Secondary Light** (`#a3a3a3` / `text-neutral-400`): Subtitles, helper text, and inactive tab labels.
- **Text Primary Dark** (`#171717` / `text-neutral-900`): Game card titles and high-contrast text on white surfaces.

### Named Rules
**The Gold Accent Rule.** Amber/gold (`#f59e0b` / `#fbbf24`) is strictly reserved for high-value typographic emphasis within display headings; it is never used for general body text or container backgrounds.  
**The Dual Surface Rule.** Catalogue items are housed in white surface containers (`#ffffff`) for immediate thumbnail contrast, while infrastructure (navbars, modals, dialogs, footer) remains in deep dark tones.

---

## Typography

The typography couples an aggressive, condensed esports display face with a clean geometric sans-serif for high-density transactional data.

- **Display Font:** `"Anton", sans-serif` (Fallback: `sans-serif`)
- **Body & Interface Font:** `"Montserrat", sans-serif` (Fallback: `sans-serif`)

### Hierarchy
- **Display 1 / Hero:** `Anton`, regular (400), `text-[3rem]` (mobile) clamped to `text-[10rem]` (desktop `lg`), uppercase, tracking `0.05em` (`tracking-wider`). Applied to the hero headline `PLAYER READY`.
- **Display 2 / Section Titles:** `Anton`, regular (400), `text-2xl` to `text-5xl` (`md:text-5xl`), uppercase, tracking `0.05em`. Applied to `SUPPORTED GAMES`, `LOAD TO GCASH`, and `Top Up Fun!`.
- **Headline / Card Titles:** `Montserrat`, bold / medium (500–700), `text-base` to `text-xl`. Applied to modal game headers and category group labels.
- **Body:** `Montserrat`, regular (400), `text-sm` (mobile) to `text-base` (desktop), line-height `1.5` to `1.75`. Applied to service descriptions and testimonials.
- **Label / Pill Text:** `Montserrat`, medium / semibold (500–600), `text-xs` to `text-sm`. Applied to filter buttons, navigation links, and action buttons.
- **Micro / Subtitle:** `Montserrat`, normal (400), `text-[8px]` to `text-xs` (`text-[8px] md:text-xs`). Applied to game currencies, badges, and metadata tags.

---

## Layout

### Spatial Model & Containers
- **Content Max-Widths (Verified Implementation):**
  - **Standard Grid Container (`max-w-275`):** A native Tailwind v4 dynamic utility generating `calc(var(--spacing) * 275)`. With `--spacing: 0.25rem`, this computes exactly to `68.75rem` (`1100px`). Applied to top-up grid, search/filter rows, and landing page game section.
  - **Extended Content Container (`max-w-7xl`):** Standard Tailwind container width `80rem` (`1280px`). Applied to testimonials grid and game marquee headline wrapper.
  - **Modal Container:** Responsive constraint `max-w-lg md:max-w-4xl lg:max-w-5xl` (`32rem / 512px` on mobile, `56rem / 896px` on tablet, `64rem / 1024px` on desktop).
  - **Promotional Section Anomaly:** Promotional banners ("LOAD TO GCASH" and "FUND TRANSFER") use `w-screen h-150` with raw flex gaps (`gap-60`) rather than standard max-width containers.
- **Vertical Rhythm:**
  - Section spacing scales from `py-12` (mobile) to `py-16` / `py-32` (desktop).

### Breakpoints
- **Mobile (`< 640px`):** Single column layouts; 3-column micro game card grid (`grid-cols-3`); marquee logo dimensions scale to 90×70px; mobile header with hamburger menu.
- **Small / Tablet (`sm: 640px`):** Testimonial grid breaks into 2 columns; category filter pill padding expands.
- **Desktop (`md: 768px`):** Game search input transitions from full width to fixed `w-80`; category labels expand from abbreviations (e.g. "MOBA" expands to "MOBA & Strategy"); promotional sections switch from vertical stacks to horizontal flex layouts; game cards in `top-up.js` scale radius to `rounded-2xl`.
- **Large Desktop (`lg: 1024px`):** Fixed floating pill navigation (`#desktopNav`) takes over from mobile header; game card catalogue expands to 4 columns (`lg:grid-cols-4`); testimonials grid expands to 3 columns.
- **Extra Large (`xl: 1280px`):** Outer navigation gutter expands to `px-40`.

---

## Elevation & Depth

SHAN'S relies on **tonal layering and glassmorphism** rather than traditional drop shadows.

- **Glassmorphism Backdrop:**
  - Floating desktop nav (`#desktopNav`): `bg-white/10 backdrop-blur-md border border-white/20` (`12px blur`).
  - Search input: `bg-black/20 backdrop-blur-xs border border-gray-400` (`4px blur`).
  - Price Modal Overlay: `bg-black/80 backdrop-blur-md` (`12px blur`).
  - Price Modal Header: `bg-neutral-950/80 backdrop-blur-xs` (`4px blur`).
  - Messenger Live Agent Button (`input.css`): `backdrop-filter: blur(4px) !important;`.
- **Shadow Treatments:**
  - Dynamic Game Cards (`top-up.js`): Flat at rest; elevates on hover via `hover:-translate-y-1 hover:shadow-xl hover:border-purple-400/60`.
  - Static Game Cards (`index.html`): Flat at rest; translates on hover via `hover:-translate-y-1` (no shadow utility applied).
  - Active Filter Button: Subtle `shadow-md` lift.
  - Chatbot Launcher: `box-shadow: 0 6px 24px rgba(124, 58, 237, 0.45), 0 2px 8px rgba(0, 0, 0, 0.3)`.
  - Chatbot Widget: `box-shadow: 0 16px 48px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(124, 58, 237, 0.15)`.

---

## Shapes

- **Pill Geometry (`rounded-full` / `9999px`):**
  - Universal border-radius for interactive controls: the floating navigation bar, active/inactive category filter buttons, the game search bar, badges, and icon action circles.
- **Card Containers:**
  - Static game cards (`index.html`): `rounded-2xl` (`16px`) uniformly across all screen sizes.
  - Dynamic game cards (`top-up.js`): Responsive `rounded-lg md:rounded-2xl` (`8px` mobile, `16px` tablet/desktop).
  - Modal card (`#priceModalCard`): Responsive `rounded-2xl md:rounded-3xl` (`16px` mobile, `24px` tablet/desktop).
- **Signature Image Mask (`rounded-b-[50%_12%]`):**
  - Game card thumbnail containers feature an organic downward convex curve along their bottom boundary, creating a signature brand silhouette.
- **Section Dividers:**
  - SVG divider slants and double-curved wave paths (`.custom-shape-divider-top-*`) separate deep plum (`#14041b`) and royal violet (`#290645`) sections.

---

## Components

### 1. Navigation
- **Desktop Floating Pill (`#desktopNav`):** Fixed top pill container (`top-2 left-1/2 -translate-x-1/2 z-99`), translucent glass canvas (`bg-white/10 backdrop-blur-md border border-white/20 px-1 py-1 gap-2 rounded-full`).
  - Active link: Solid white pill (`bg-white border border-zinc-200 font-medium text-zinc-800 px-4 py-1.5 rounded-full text-sm`).
  - Inactive links: Ghost pills (`px-4 py-1.5 rounded-full text-sm text-zinc-500 hover:text-zinc-100`).
- **Mobile Header (`#mobileHeader`):** Fixed full-width header (`top-0 left-0 w-full px-6 py-5`) with logo and 3-bar hamburger icon.

### 2. Game Catalogue Cards
- **Static Cards (`index.html`):**
  - Container: Fixed width `w-64`, `bg-white rounded-2xl pb-4 overflow-hidden border border-gray-200 hover:-translate-y-1 transition duration-300`.
  - Image: `h-52 object-cover object-top`, curved boundary `rounded-b-[50%_12%]`.
  - Content: Center text stack with title only.
- **Dynamic Cards (`script/top-up.js`):**
  - Container: Fluid grid item `w-full min-w-0 bg-white rounded-lg md:rounded-2xl pb-2 md:pb-3 overflow-hidden border border-gray-200 hover:-translate-y-1 hover:shadow-xl hover:border-purple-400/60 transition-all duration-300`.
  - Image: `aspect-4/3` thumbnail with curved boundary `rounded-b-[50%_12%]`, zoom transition `group-hover:scale-105`, and hover badge ("View Rates" with `backdrop-blur-xs`).
  - Content: Responsive typography (`text-[9px] md:text-sm text-neutral-900 line-clamp-1`) and secondary currencies tag (`text-[8px] md:text-xs text-neutral-500`).

### 3. Category Filter Pills
- **Container:** Horizontal overflow scroll (`flex flex-row justify-start max-w-275 w-full mx-auto mt-4 gap-2 md:gap-4 overflow-x-auto pb-1`).
- **Active State:** Solid royal purple (`bg-purple-800 text-white font-medium shadow-md rounded-full px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-[15px]`).
- **Inactive State:** Dark slate surface (`bg-slate-700 text-neutral-200 hover:bg-slate-600 rounded-full px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-[15px]`).

### 4. Search Bar
- **Structure:** Pill container (`rounded-full border border-gray-400 focus-within:border-purple-400 px-3.5 py-1 bg-black/20 backdrop-blur-xs w-full md:w-80`).
- **Input:** Transparent field (`text-neutral-100 placeholder-gray-400 outline-none text-sm`).
- **Accessories:** Integrated clear button (`#clearSearchBtn`) and right-aligned magnifying glass icon.

### 5. Price List & Checkout Modal
- **Backdrop Scrim:** Fullscreen blurred scrim (`fixed inset-0 z-100 bg-black/80 backdrop-blur-md min-h-dvh`).
- **Card Container:** Responsive radii `rounded-2xl md:rounded-3xl`, max-width `max-w-lg md:max-w-4xl lg:max-w-5xl`, max-height constrained by dynamic viewport units (`calc(100dvh - 1.25rem)` mobile, `88dvh` desktop).
- **Header:** Sticky top bar (`bg-neutral-950/80 backdrop-blur-xs px-4 sm:px-6 py-3.5 sm:py-4 border-b border-neutral-800`), thumb image (`rounded-xl`), title, category badge, and circular close button (`w-9 h-9 rounded-full bg-neutral-800`).
- **Body:** Responsive dual-pane layout containing the 1080×1080 rate sheet image (with click-to-lightbox trigger) and prewritten Messenger order form with one-click clipboard copy.

### 6. Floating Chatbot Launcher
- **FAB Launcher:** 60×60px circular button at `bottom-24 right-24` with linear gradient (`#4b5563` to `#3b82f6` to `#22d3ee`), live pulse badge (`#10b981`), and icon rotation animation on toggle.
- **Chat Window:** Compact dark window (`390px` width, `bg-[#180927]`, border `rgba(255, 255, 255, 0.12)`, `rounded-20px`).

---

## Do's and Don'ts

### Do
- **Do** preserve `"Anton"` exclusively for display and section headers with tracked uppercase styling.
- **Do** use `"Montserrat"` for all UI controls, body copy, and metadata hierarchies.
- **Do** preserve the `rounded-full` pill geometry for filter buttons, search fields, and floating navbars.
- **Do** maintain the signature `rounded-b-[50%_12%]` curve on game card thumbnail containers.
- **Do** keep catalogue card thumbnails legible by pairing them with their high-contrast container surfaces.

### Don't
- **Don't** use amber or yellow for body text, borders, or general containers; reserve it strictly for display headline accents.
- **Don't** replace deep plum (`#14041b`) and royal violet (`#290645`) canvas backgrounds with generic grays or desaturated blacks.
- **Don't** remove the glassmorphism backdrop-filter effects from the floating navigation bar or modal overlays.
- **Don't** introduce rectangular, sharp-edged buttons for category filters or search inputs.

---

## Known Design Issues

*(Verified implementation inconsistencies present in the incumbent codebase)*

1. **Mobile Menu Theme Inversion:**  
   The desktop navigation is a dark glass pill (`bg-white/10 backdrop-blur-md`), but `#mobileMenu` renders as a stark solid white dropdown (`bg-white border-zinc-200 text-zinc-800`). Furthermore, `script.js` dynamically forces `#mobileHeader` to `bg-white` and hamburger bars to `bg-zinc-800`, causing an abrupt high-contrast flash on dark mobile screens.
2. **Game Card Implementation Divergence:**  
   - Static cards on `index.html` use fixed `w-64`, uniform `rounded-2xl` (no mobile scaling), and lack the `hover:shadow-xl` / purple border hover states.
   - Dynamic cards in `script/top-up.js` use responsive `rounded-lg md:rounded-2xl`, dynamic `hover:shadow-xl hover:border-purple-400/60`, and fluid aspect ratio `aspect-4/3`.
3. **Surface Polarity Mismatch:**  
   Game cards use stark white surfaces (`bg-white text-neutral-900`), while all neighboring infrastructure (modal, testimonials, search bar, chatbot) uses dark surfaces (`bg-neutral-900`, `bg-black/20`, `bg-[#180927]`).
4. **Third-Party Template Residue:**  
   - Testimonial copy in `index.html` references `"PrebuiltUI"` instead of Shan's Trade.
   - Testimonial quote icons use bright blue (`text-blue-500`), which clashes with the violet/amber brand palette.
   - Footer social and copyright links direct to `prebuiltui.com`.
5. **Markup Glitches & Fixed Heights:**  
   - Invalid `<di>` tags at lines 309 and 332 in `index.html`.
   - Heading tag mismatches (`<h2>` opened, closed by `</h1>` at lines 312 and 334 in `index.html`).
   - Fixed section heights (`h-150 w-screen`) on promotional blocks that risk content clipping on short or landscape viewports.

---

## Roadmap Recommendations

*(Prescriptive guidance for upcoming design improvement passes; not yet implemented)*

1. **Harmonize Mobile Navigation:** Re-style `#mobileMenu` and `#mobileHeader` to match the desktop floating glass aesthetic (`bg-[#14041b]/95` or `bg-white/10 backdrop-blur-md`), eliminating the stark white flash on mobile.
2. **Align Static and Dynamic Cards:** Refactor static cards in `index.html` to consume the responsive radii (`rounded-lg md:rounded-2xl`), hover shadow (`hover:shadow-xl`), and hover border styling verified in `top-up.js`.
3. **Purge Template Residuals:** Replace PrebuiltUI placeholder copy and links with authentic customer testimonials and Shan's Trade social links; coordinate testimonial quote icons to soft lavender (`text-purple-400`) or amber gold (`text-amber-400`).
4. **Clean HTML Syntax & Responsive Layouts:** Correct `<di>` and heading tag typos, and replace rigid `h-150 w-screen` declarations with fluid container padding (`py-16 md:py-24 max-w-275 mx-auto`).

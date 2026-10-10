# Aadhish Saini — Personal Portfolio

A cinematic, interactive, and typography-driven personal portfolio website built with React, TypeScript, Three.js / WebGL, and GSAP.

---

## 1. Project Overview

This repository contains the current codebase for the personal portfolio of **Aadhish Saini**.

### Purpose
The primary purpose of this website is to serve as a high-impact digital presence to showcase:
- Full-stack and frontend engineering projects
- Real-time 3D graphics, physics simulations, and creative coding experiments
- Technical skills, tooling competencies, and domain expertise
- Professional journey, hackathons, and career milestones
- Direct communication channels and social links

### Design & Experiential Vision
- **Atmospheric & Cinematic**: Deep dark-mode aesthetic with ambient purple/violet glowing light orbs, illuminated rim lighting, and seamless section transitions.
- **Interactive 3D Integration**: Real-time WebGL character model with interactive skeletal bone tracking, keyboard typing animations, blinking, face-hover eyebrow reactions, and scroll-choreographed positioning.
- **Typography-Driven & Editorial**: Bold display typography powered by the Geist typeface family, SplitText letter/word stagger reveals, and infinite looping role banners.
- **Non-Generic Architecture**: Deliberately designed away from conventional flat dashboard grids or standard card-based developer templates, opting for a continuous, scroll-orchestrated storytelling experience.

> [!NOTE]
> **Current Codebase State**: The repository currently operates on the open-source foundational template by Moncy Yohannan. Source files contain placeholder metadata, sample project slots, and template author strings that serve as the baseline architecture for Aadhish Saini's custom portfolio.

---

## 2. Current Design Direction

### Visual & Stylistic Language

| Design Attribute | Current Implementation |
| :--- | :--- |
| **Color Palette** | • Background: `#0b080c` (dark plum/black) with `#000000` body fallback<br>• Primary Text: `#eae5ec` (soft off-white)<br>• Accent Colors: `#c2a4ff` (light lavender), `#c481ff`, `#aa42ff`, `#7f40ff` (electric violet)<br>• Muted / Border: `#363636`, `#adacac`, `#ccc`, `rgba(255, 255, 255, 0.15)` |
| **Background Treatment** | • Fixed atmospheric glowing orbs (`.landing-circle1` top-left, `.landing-circle2` mid-right) with 50–60px blur and continuous 360° rotation (`loadingCircle` 5s infinite)<br>• Top fixed gradient overlay (`.nav-fade`) fading into `--backgroundColor`<br>• Real-time 3D character back rim light (`.character-rim`) with radial purple glow |
| **Typography** | • **Primary Font**: `Geist` (sans-serif) via Google Fonts (weights 100 to 900)<br>• **Display Titles**: Large uppercase display headers (70px–80px on desktop)<br>• **SplitText**: Line masking (`.split-line`) and flex wrappers (`.split-h2`) for letter-by-letter staggering |
| **Spacing & Grid** | • Viewport-height snap sections (`height: var(--vh)`, `100svh`)<br>• Constrained container widths: `--cWidth: calc(100% - 30px)` (mobile), `94%` (desktop >= 768px), max-width `1920px`<br>• Central content containers constrained by `.section-container` (1300px, 1200px, 900px, 500px) |
| **Navigation** | • Fixed top bar with logo link, center email contact, and anchor links (`ABOUT`, `WORK`, `CONTACT`)<br>• Dual-line rolling text animation on hover (`HoverLinks`)<br>• Programmatic smooth scrolling via GSAP `ScrollSmoother.scrollTo()` on desktop |
| **Project Presentation** | • Horizontal pinned scroll conveyor in the Work section<br>• Alternating vertical card layout (even cards reverse column flow)<br>• Index numbering (`01`–`06`), technology stack tags, and hover preview cards with optional video playback trigger |
| **Animation Style** | • Scroll-driven scrubbed GSAP timelines (`tl1`, `tl2`, `tl3`, `careerTimeline`, `work`)<br>• SplitText character opacity and translation stagger reveals (`initialFX.ts`, `splitText.ts`)<br>• Continuous infinite looping text transitions (`LoopText` for Developer / Designer)<br>• Three.js animation mixers (blinking, keyboard typing, intro clip) |
| **Hover Interactions** | • Face-hover eyebrow raise (`browup` animation clip with weight 4)<br>• Magnetic attraction physics on floating social icons (`SocialIcons.tsx`)<br>• Dynamic accordion expansion in "What I Do" (hovered card expands to 67% min-height while sibling contracts to 33%)<br>• Video preview stream on project image hover |
| **Scroll Interactions** | • GSAP ScrollSmoother (smoothness: 1.7, speed: 1.7)<br>• 3D character translation (`x: 0 -> -25% -> -12% -> -100%`), rotation, and camera focal depth adjustments<br>• Pinned horizontal project slider in Work<br>• Vertical growth progress timeline in Career |
| **Responsive System** | • Responsive breakpoints at 1950px, 1600px, 1400px, 1200px, 1024px, 900px, 768px, 600px, 550px, 500px<br>• Desktop (>1024px) renders fixed 3D character and interactive 3D Rapier tech canvas<br>• Mobile/Tablet renders 3D character embedded inside Landing flow and hides physics canvas for performance |

---

### Currently Implemented vs. Planned

#### Currently Implemented
- Full dark cinematic visual aesthetic with purple radial lighting orbs
- Google Fonts `Geist` typography system with SplitText animations
- Fixed top navigation with animated dual-line rolling links (`HoverLinks`)
- Interactive percentage loading screen with mini platformer line/ball game
- Interactive 3D WebGL character model with cursor head tracking, typing loop, blinking, and face-hover eyebrow reaction
- Scroll-choreographed 3D scene camera and character transitions across Hero, About, and What I Do
- Interactive accordion domain breakdown in What I Do (Develop / Design)
- Dynamic vertical growth timeline in Career with pulsing neon dot
- Horizontal pinned scroll showcase in Work
- Interactive 3D Rapier physics simulation with floating tech logo spheres in TechStack
- Trailing circular difference cursor with icon-stretch and disable modifiers
- Magnetic social icons with spring interpolation
- Full responsive stylesheet system

#### Planned / Not Yet Implemented
- Custom 3D personal avatar representing Aadhish Saini (replacing the template character asset)
- Advanced custom cursor with corner brackets (`✦ → VIEW`) for project hover interaction (**PLANNED — NOT CURRENTLY IMPLEMENTED**)
- Real portfolio project data (DhruvNetra, FasalKavach, Autonomous Agents Platform, etc.)
- Real career milestones and experience records
- Personal contact information and verified social links
- Modular structured data files (`src/data/projects.ts`, `src/data/skills.ts`, etc.)
- Replacement of trial GSAP plugins (`gsap-trial`) with production-licensed solutions or Lenis
- WebGL fallback UI for devices without hardware acceleration

---

## 3. Current Website Structure

The application renders a single-page architecture loaded within `LoadingProvider` and `MainContainer`.

```
1. Loading Screen (Preloader overlay: percent count, hover button, marquee, retro game)
2. Cursor (Custom difference-blend circular mouse follower)
3. Navbar (Fixed header: Logo, Email, Navigation links)
4. Social Icons & Resume (Fixed bottom-left magnetic social bar, bottom-right Resume link)
5. Landing / Hero Section (Hero introduction, alternating role text, 3D character scene)
6. About Section (About Me headline, statement paragraph with scroll SplitText)
7. What I Do Section (Interactive 2-column domain accordion: Develop / Design)
8. Career Section (My career & experience timeline with scrubbed vertical growth)
9. Work Section (Pinned horizontal scrolling gallery with 6 placeholder projects)
10. Tech Stack Section (Interactive desktop 3D Rapier physics canvas with tech spheres)
11. Contact Section (Direct contact info, social links, copyright footer)
```

### Detailed Section Breakdown

| Order | Section / Component | File Path | Purpose | Key UI Elements | Current Animations & Interactions | Styling & Notes |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Loading** | `src/components/Loading.tsx` | Preload assets and display visual loading progress | • Marquee banner<br>• Percentage counter (`0%` to `100%`)<br>• Interactive radial hover button<br>• Mini line/ball animation | • Mouse tracking radial glow (`--mouse-x`, `--mouse-y`)<br>• `react-fast-marquee` continuous scroll<br>• `initialFX()` trigger on completion (`percent >= 100`) | Fixed fullscreen overlay (`z-index: 999999999`), expands outwards to reveal main page on click |3
| **2** | **Navbar** | `src/components/Navbar.tsx` | Top-level persistent navigation | • Logo monogram link<br>• Centered contact email<br>• `ABOUT`, `WORK`, `CONTACT` anchor links | • GSAP `ScrollSmoother` initialization (`smooth: 1.7`)<br>• Smooth scroll navigation on link click<br>• `HoverLinks` dual-line vertical roll | Fixed top header (`z-index: 9999`), includes top ambient glow orbs and gradient fade |
| **3** | **Social Icons** | `src/components/SocialIcons.tsx` | Persistent social channels and resume download | • GitHub, LinkedIn, X, Instagram icon links<br>• Floating `RESUME` button with notes icon | • Magnetic cursor pull effect on icon hover (`requestAnimationFrame`)<br>• Dual-line rolling link transition on Resume | Fixed bottom overlay (`z-index: 99`), hidden on small mobile (<900px for icons, rotated on <=768px) |
| **4** | **Landing (Hero)** | `src/components/Landing.tsx`<br>`src/components/Character/Scene.tsx` | Primary hero introduction and 3D focal point | • "Hello! I'm MONCY YOHANNAN" headline<br>• "A Creative Designer / Developer" alternating role text<br>• 3D WebGL character model at desk | • `initialFX()` SplitText character stagger<br>• `LoopText` infinite role alternation<br>• 3D head rotation following mouse (`spine006`)<br>• Eyebrow raise on face hover | Viewport height section (`100svh`), fixed 3D canvas on desktop (>1024px) |
| **5** | **About** | `src/components/About.tsx` | Personal introduction and core statement | • "About Me" accent title<br>• Display bio paragraph | • GSAP ScrollTrigger timeline (`tl2`) moves 3D camera back and rotates character toward desk monitor<br>• SplitText word/line stagger on scroll enter | Centered/right-aligned on desktop, fluid typography sizing |
| **6** | **What I Do** | `src/components/WhatIDo.tsx` | Domain breakdown of development and design skills | • Large display title "WHAT I DO"<br>• "DEVELOP" card with tech tags<br>• "DESIGN" card with design/3D tags<br>• Animated SVG dashed borders and corner brackets | • Hover accordion (hovered panel expands to 67% min-height, sibling shrinks to 33%)<br>• Touch click accordion toggle for mobile<br>• GSAP timeline (`tl3`) moves character off-screen | Flex 2-column layout on desktop, stacked on mobile (<900px) |
| **7** | **Career** | `src/components/Career.tsx` | Professional experience and career timeline | • Gradient title "My career & experience"<br>• Scrubbed vertical gradient timeline bar<br>• Pulsing glowing dot<br>• 3 milestone cards ("20XX", "NOW") | • GSAP ScrollTrigger scrub expands timeline height from 10% to 100%<br>• Staggered milestone card fade-in (`stagger: 0.1`)<br>• Infinite glowing dot pulse animation | Centered layout with responsive column-to-row shifts |
| **8** | **Work** | `src/components/Work.tsx`<br>`src/components/WorkImage.tsx` | Showcase of featured projects | • "My Work" title<br>• 6 project cards (`01` to `06`)<br>• Project titles, categories, tool lists<br>• Project image thumbnail + external link icon | • GSAP `useGSAP` pinned horizontal scroll across the viewport (`x: -translateX`)<br>• Hover video playback stream trigger | Fixed 100vh pinned section during scroll progression |
| **9** | **Tech Stack** | `src/components/TechStack.tsx` | Interactive 3D physics demonstration of skills | • "My Techstack" display title<br>• 3D WebGL canvas with 30 textured physics spheres<br>• Rapier physics world with mouse collision ball | • Inward gravity impulse pulling spheres toward center<br>• Interactive pointer sphere repelling spheres on mouse movement<br>• Activated dynamically when scrolling past Work | Desktop only (>1024px), unmounted on mobile/tablet for performance |
| **10** | **Contact** | `src/components/Contact.tsx` | Footer contact avenues and copyright | • "Contact" title<br>• Direct Email and Phone links<br>• Outbound Social links with arrow icons<br>• Designed & Developed by copyright notice | • Standard link hover states with accent color<br>• Mobile responsive stack | Bottom section with padding and clean multi-column layout |

---

## 4. Component Architecture

```
src/
├── App.css                         # Section container width and rendering performance classes
├── App.tsx                         # Root component wrapping LoadingProvider and MainContainer
├── index.css                       # Global design tokens, Geist font import, and base resets
├── main.tsx                        # Vite React DOM root entry point
├── vite-env.d.ts                   # Vite TypeScript environment declarations
├── assets/
│   └── react.svg                   # Default React SVG asset
├── components/
│   ├── About.tsx                   # About Me statement section
│   ├── Career.tsx                  # Career & experience vertical timeline section
│   ├── Contact.tsx                 # Contact information and footer section
│   ├── Cursor.tsx                  # Custom difference-blend trailing mouse cursor
│   ├── HoverLinks.tsx              # Dual-line rolling text animation wrapper
│   ├── Landing.tsx                 # Hero presentation section
│   ├── Loading.tsx                 # Preloader screen, percentage manager, and mini-game
│   ├── MainContainer.tsx           # Layout orchestrator managing desktop/mobile 3D rendering
│   ├── Navbar.tsx                  # Fixed header navigation and ScrollSmoother setup
│   ├── SocialIcons.tsx             # Floating magnetic social media bar and Resume button
│   ├── TechStack.tsx               # R3F + Rapier 3D interactive physics tech sphere canvas
│   ├── WhatIDo.tsx                 # Interactive domain accordion (Develop / Design)
│   ├── Work.tsx                    # Pinned horizontal scrolling project gallery
│   ├── WorkImage.tsx               # Project preview card with hover video and link handling
│   ├── Character/                  # 3D WebGL Character Model Subsystem
│   │   ├── exports.ts              # Export helper (currently empty)
│   │   ├── index.tsx               # Lazy-loaded wrapper around Scene.tsx
│   │   ├── Scene.tsx               # Three.js WebGL canvas, lighting, camera, and render loop
│   │   └── utils/
│   │       ├── animationUtils.ts   # AnimationMixer setup (intro, typing, blink, browup)
│   │       ├── character.ts        # GLTF & Draco loader with AES-CBC file decryption
│   │       ├── decrypt.ts          # Web Crypto API AES-CBC file decryption utility
│   │       ├── lighting.ts         # Directional, point, and HDR environment lighting setup
│   │       ├── mouseUtils.ts       # Mouse and touch coordinate normalization and head lerp
│   │       └── resizeUtils.ts      # Window resize handling and ScrollTrigger refresh
│   ├── styles/                     # Component-Scoped CSS Stylesheets
│   │   ├── About.css               # About section typography and layout styling
│   │   ├── Career.css              # Career timeline, dot pulse, and milestone card styles
│   │   ├── Contact.css             # Contact grid and footer link styles
│   │   ├── Cursor.css              # Custom cursor circle, blend-mode, and size styles
│   │   ├── Landing.css             # Hero layout, rotating headlines, and ambient orb styles
│   │   ├── Loading.css             # Preloader overlay, marquee, button, and mini-game styles
│   │   ├── Navbar.css              # Fixed header, nav links, and gradient fade styles
│   │   ├── SocialIcons.css         # Magnetic social icons and resume button styles
│   │   ├── style.css               # Global hover link roll animation styles
│   │   ├── WhatIDo.css             # Accordion panels, SVG dashed lines, and tag styles
│   │   └── Work.css                # Horizontal work conveyor and project card styles
│   └── utils/                      # GSAP Animation and Text Helpers
│       ├── GsapScroll.ts           # Scroll-triggered timelines for character and career
│       ├── initialFX.ts            # Page entrance animations and looping text transitions
│       └── splitText.ts            # GSAP SplitText setup for paragraphs and titles
├── context/
│   └── LoadingProvider.tsx         # React Context managing global loading state and progress
└── data/
    └── boneData.ts                 # Bone name mappings for typing and eyebrow animations
```

---

## 5. Technology Stack

### Core Technologies
- **React 18.3.1**: UI component tree and lifecycle management.
- **TypeScript 5.5.3**: Static typing across components, 3D math, and animation utilities.
- **Vite 5.4.1**: Fast ESM build tool and local development server.
- **Vanilla CSS3**: Component-scoped stylesheets with CSS custom properties (`--vh`, `--cWidth`, `--accentColor`, `--backgroundColor`).
- **Three.js 0.168.0 & three-stdlib 2.33.0**: Core WebGL rendering, camera systems, skeletal animation mixers, HDR environment lighting, GLTFLoader, and DRACOLoader.
- **React Three Fiber 8.17.10**: Declarative React renderer for the TechStack 3D scene.
- **@react-three/rapier 1.5.0**: Real-time rigid-body 3D physics engine for interactive tech spheres.
- **@react-three/drei 9.120.4**: Three.js helper abstractions (HDR Environment loader).
- **@react-three/postprocessing 2.16.3**: Post-processing effects (N8AO ambient occlusion).
- **GSAP 3.12.7 & @gsap/react 2.1.1**: Core animation engine, timelines, and React integration hook (`useGSAP`).
- **GSAP Trial Plugins (`gsap-trial` 3.12.7)**: `ScrollSmoother` for smooth momentum scrolling and `SplitText` for typography stagger animations.
- **React Icons 5.3.0**: Vector icon sets (`react-icons/md`, `react-icons/fa6`, `react-icons/tb`).
- **React Fast Marquee 1.6.5**: Smooth infinite text marquee on the preloader screen.
- **Web Crypto API**: Native browser cryptography for client-side AES-CBC 3D asset decryption.

### Node & Runtime Requirements
- **Node.js**: `v18.0.0` or higher (recommended: Node `v20.x` LTS)
- **npm**: `v9.x` or higher

---

## 6. Package Dependencies

| Package | Version | Purpose | Where Used |
| :--- | :--- | :--- | :--- |
| `react` | `^18.3.1` | Core UI library | Throughout the entire application |
| `react-dom` | `^18.3.1` | DOM renderer for React | `src/main.tsx` |
| `typescript` | `^5.5.3` | TypeScript compiler and type checking | Build pipeline and all `.tsx`/`.ts` files |
| `vite` | `^5.4.1` | Build tooling and development server | `vite.config.ts`, `package.json` scripts |
| `three` | `^0.168.0` | WebGL 3D graphics rendering engine | `src/components/Character/*`, `src/components/TechStack.tsx` |
| `three-stdlib` | `^2.33.0` | Three.js loaders (GLTFLoader, DRACOLoader, RGBELoader) | `src/components/Character/utils/character.ts`, `lighting.ts` |
| `@react-three/fiber` | `^8.17.10` | React renderer for Three.js | `src/components/TechStack.tsx` |
| `@react-three/rapier` | `^1.5.0` | Rapier 3D physics engine for React Three Fiber | `src/components/TechStack.tsx` |
| `@react-three/drei` | `^9.120.4` | Helper components for React Three Fiber | `src/components/TechStack.tsx` (`Environment`) |
| `@react-three/postprocessing` | `^2.16.3` | Screen-space postprocessing for R3F | `src/components/TechStack.tsx` (`EffectComposer`, `N8AO`) |
| `@react-three/cannon` | `^6.6.0` | Alternative Cannon physics engine (installed) | `package.json` |
| `gsap` | `^3.12.7` | Core animation platform and ScrollTrigger | `src/components/utils/*`, `Work.tsx`, `Cursor.tsx` |
| `@gsap/react` | `^2.1.1` | React hook for scoped GSAP animations (`useGSAP`) | `src/components/Work.tsx` |
| `gsap-trial` | `^3.12.7` | Trial club plugins: `ScrollSmoother`, `SplitText` | `src/components/Navbar.tsx`, `splitText.ts`, `initialFX.ts` |
| `react-icons` | `^5.3.0` | Icon components (Material Design, FontAwesome 6, Tabler) | `src/components/Contact.tsx`, `SocialIcons.tsx`, `WorkImage.tsx` |
| `react-fast-marquee` | `^1.6.5` | Infinite scrolling marquee banner | `src/components/Loading.tsx` |
| `@vercel/analytics` | `^1.4.1` | Vercel analytics tracking | `package.json` |

---

## 7. Page / Section Details

### Preloader / Loading Screen (`Loading.tsx`)
- **Purpose**: Manage asset loading progression, mask initial render pop-in, and provide an engaging interactive entrance.
- **Current Implementation**: Renders an infinite marquee banner, a simulated/real percentage counter (`0%` to `100%`), an interactive mouse-tracking glowing button, and an animated retro platformer line/ball game.
- **Components**: `src/components/Loading.tsx`, `src/context/LoadingProvider.tsx`.
- **Animations**: CSS keyframe animations (`ball25`, `loaderGame`, `blink`), `react-fast-marquee` scroll, and transition to `initialFX()`.
- **Interactions**: Button tracks local cursor coordinates (`--mouse-x`, `--mouse-y`) to position a dynamic radial spotlight.
- **Responsive Behavior**: Scaled typography and button padding across breakpoints (1400px, 1200px, 500px).
- **Known Issues**: Uses simulated progressive intervals in `setProgress` that resolve when the 3D model finishes compiling.

---

### Hero Section (`Landing.tsx`)
- **Purpose**: Deliver an immediate, high-impact first impression introducing the developer with bold typography and an interactive 3D character.
- **Current Implementation**: Displays intro greeting, display name, alternating role title ("Designer" / "Developer"), and renders the WebGL 3D character scene.
- **Components**: `src/components/Landing.tsx`, `src/components/Character/Scene.tsx`.
- **Animations**: SplitText character stagger on page load, infinite `LoopText` GSAP timeline alternating between roles every 4 seconds, and background rotating glowing orbs.
- **Interactions**: Head bone (`spine006`) continuously tracks mouse position via lerp interpolation; face hover (`.character-hover`) triggers the `browup` eyebrow raise animation.
- **Responsive Behavior**: On desktop (>1024px), split 2-column layout with 3D canvas fixed in center; on mobile (<=1024px), stacked vertically with character embedded in document flow.
- **Known Issues**: Text contains template placeholder name ("MONCY YOHANNAN").

---

### About Section (`About.tsx`)
- **Purpose**: Communicate background, philosophy, and creative development approach.
- **Current Implementation**: Minimalist section featuring an accent title ("About Me") and a display paragraph.
- **Components**: `src/components/About.tsx`, `src/components/utils/splitText.ts`, `src/components/utils/GsapScroll.ts`.
- **Animations**: GSAP ScrollTrigger timeline (`tl2`) pulls camera back (z: 75), fades out About text, rotates character toward the desk monitor, and powers on monitor screen lights.
- **Interactions**: Scroll-scrubbed text reveal via SplitText (`splitText.ts`).
- **Responsive Behavior**: Responsive typography scaling (`1.9vw` on desktop down to fixed font sizes on mobile).
- **Known Issues**: Paragraph currently contains `Lorem ipsum` placeholder copy.

---

### What I Do Section (`WhatIDo.tsx`)
- **Purpose**: Highlight core competencies across software engineering, creative frontend development, and 3D design.
- **Current Implementation**: Dual interactive accordion cards ("DEVELOP" and "DESIGN") framed with animated SVG dashed borders and corner crosshairs.
- **Components**: `src/components/WhatIDo.tsx`.
- **Animations**: CSS hover transitions (`0.5s`) expanding hovered card to 67% height while shrinking sibling to 33%; SVG border dash animations (`whatBorders`); flicker entrance effect (`whatFlicker`).
- **Interactions**: Desktop mouse hover accordion; touch devices (`ScrollTrigger.isTouch`) toggle active card on click.
- **Responsive Behavior**: 2-column side-by-side on desktop (>900px), single-column stacked layout on mobile.
- **Known Issues**: Skill tags and descriptions are hardcoded in the JSX rather than driven by data.

---

### Career Section (`Career.tsx`)
- **Purpose**: Showcase professional milestones, past roles, and educational timeline.
- **Current Implementation**: A vertical timeline section with gradient heading, a scrubbed center progress line, a pulsing neon dot, and 3 milestone cards.
- **Components**: `src/components/Career.tsx`, `src/components/utils/GsapScroll.ts`.
- **Animations**: GSAP ScrollTrigger scrub expands timeline height from 10% to 100% as the user scrolls, fading in milestone cards with a 0.1s stagger.
- **Interactions**: Scroll-driven animation scrub.
- **Responsive Behavior**: Multi-column timeline on desktop; single-column left-aligned timeline on mobile (<900px).
- **Known Issues**: Milestones contain placeholder text ("Position In Company", "Company Name", "20XX").

---

### Work / Projects Section (`Work.tsx`)
- **Purpose**: Showcase selected engineering projects and experiments.
- **Current Implementation**: Pinned horizontal scrolling showcase rendering 6 project cards with alternating top/bottom visual alignments.
- **Components**: `src/components/Work.tsx`, `src/components/WorkImage.tsx`.
- **Animations**: GSAP `useGSAP` horizontal pin timeline scrolling `.work-flex` along the X-axis (`x: -translateX`).
- **Interactions**: Hovering over project cards reveals the external link button and triggers asynchronous video streaming if a video source is specified.
- **Responsive Behavior**: Scaled card dimensions (600px -> 450px -> 350px) and image heights across vertical/horizontal breakpoints.
- **Known Issues**: Renders 6 generic placeholder items (`[...Array(6)]`) with placeholder image (`/images/placeholder.webp`). Relative video fetch path (`src/assets/...`) fails in production builds.

---

### Tech Stack Section (`TechStack.tsx`)
- **Purpose**: Interactive 3D physics demonstration displaying core technologies and tools.
- **Current Implementation**: Real-time React Three Fiber canvas simulating 30 floating spheres with texture maps for React, Next.js, Node.js, Express, MongoDB, MySQL, TypeScript, and JavaScript.
- **Components**: `src/components/TechStack.tsx`.
- **Animations**: Rapier physics loop applying continuous inward gravitational impulses to keep spheres clustered, with N8AO ambient occlusion postprocessing.
- **Interactions**: Mouse movement moves a kinematic pointer sphere (`Pointer`) in 3D space that collides with and scatters the tech spheres.
- **Responsive Behavior**: Mounted exclusively on desktop viewports (>1024px) via `MainContainer.tsx`; completely omitted on mobile/tablet to preserve performance.
- **Known Issues**: Scroll activation listener uses polling intervals (`setInterval`) on navbar link clicks.

---

### Contact Section (`Contact.tsx`)
- **Purpose**: Provide direct contact channels, social profiles, and copyright information.
- **Current Implementation**: Multi-column footer layout with Email, Phone, Social links (GitHub, LinkedIn, Twitter/X, Instagram) with arrow icons, and copyright attribution.
- **Components**: `src/components/Contact.tsx`.
- **Animations**: Hover transitions with accent color highlights.
- **Interactions**: Outbound links with `data-cursor="disable"` attributes.
- **Responsive Behavior**: 3-column horizontal grid on desktop; single-column vertical stack on mobile (<900px).
- **Known Issues**: Contains placeholder contact info (`example@mail.com`, `+91 99999 99999`) and template copyright attribution ("Moncy Yohannan © 2024").

---

## 8. Current Hero Details

- **Layout Structure**:
  - Desktop (>1024px): 3D character sits fixed in the viewport center, intro text aligned left (`.landing-intro`), and role titles aligned right (`.landing-info`).
  - Mobile (<=1024px): Single-column vertical flow with intro at top, 3D model in middle, and role titles below.
- **Typography & Copy**:
  - Greeting: `Hello! I'm` (Geist 300, 22px)
  - Display Name: `MONCY YOHANNAN` (Geist 500, 28px–60px)
  - Subhead: `A Creative` (Geist 300, 22px)
  - Alternating Display: Infinite loop alternating `Designer` and `Developer` (`.landing-info-h2` and `.landing-h2-info`).
- **Visual & 3D Element**:
  - High-poly 3D character model sitting at a computer desk with keyboard and monitor.
  - Sourced from `/models/character.enc` (AES-CBC encrypted GLTF with Draco compression).
  - Ambient purple rim light behind character (`.character-rim`).
- **Cursor & Head Interaction**:
  - Mouse coordinates normalized to `[-1, 1]`.
  - Head bone (`spine006`) smooth-lerped toward cursor via `handleHeadRotation` (`Math.PI / 6` rotation limit).
  - Hovering face (`.character-hover`) triggers eyebrow raise (`browup` animation).
- **Scroll Behavior**:
  - GSAP `tl1` timeline rotates character (`y: 0 -> 0.7`), shifts canvas left (`x: -25%`), pulls camera back (`z: 22`), and fades hero text.

---

## 9. Statement & Bio Implementation

- **Current Implementation**:
  - The bio and statement functionality is currently encapsulated within `src/components/About.tsx`.
  - Consists of the "About Me" heading and a single descriptive paragraph.
  - On scroll, `splitText.ts` splits paragraph words and triggers a staggered translateY and opacity reveal.
- **Status of Standalone "Build With Intention" Pinned Section**:
  - A separate, standalone multi-stage pinned "Build With Intention" manifesto section is **NOT implemented** in this version of the codebase.

---

## 10. About Section Details

- **Main Heading**: `About Me` (Geist 400, uppercase, 7px letter spacing, accent color `#c2a4ff`).
- **Content**: Descriptive statement paragraph (`.para`) with Geist 600 typography and responsive clamp sizing.
- **3D Interaction**: ScrollTrigger timeline `tl2` animates the 3D character to lean over and inspect the desk monitor, simultaneously turning on the monitor screen glow.
- **Layout**: Right-aligned on desktop (`width: 50%`), centered on tablet/mobile.

---

## 11. Project / Work Section Details

- **Layout**: Pinned horizontal scroll conveyor (`.work-flex`).
- **Data Source**: Hardcoded 6-item dummy array (`[...Array(6)]`) inside `src/components/Work.tsx`.
- **Project Structure**:
  - Index number: `01` to `06`
  - Title: `Project Name`
  - Category: `Category`
  - Tool list: `Javascript, TypeScript, React, Threejs`
  - Thumbnail: `/images/placeholder.webp`
  - Action link: `<MdArrowOutward />` icon displayed when `link` prop is passed.
  - Video preview: `<video>` element rendered on hover when `video` prop is passed.
- **Named Projects Status**:
  - Specific projects (such as *DhruvNetra*, *FasalKavach*, or *Autonomous Agents Platform*) are **NOT yet populated in this codebase**. All 6 slots currently render template placeholder data.

---

## 12. Skills & Journey Section Details

- **Skills ("What I Do")**:
  - Left column: Display title `WHAT I DO` with italicized "HAT" and accent-colored "DO".
  - Right column: Interactive dual accordion panels:
    - **DEVELOP**: JavaScript, TypeScript, Three.js, React, CSS, Node.js, Next.js, Express.js, PHP, MySQL.
    - **DESIGN**: Blender, ZBrush, UI Design, Motion, Rigging, 3D Animation, Character Design, Modelling.
- **Journey ("Career")**:
  - Heading: `My career & experience` with purple-to-white gradient text.
  - Scrubbed vertical timeline that expands height (`maxHeight: 10% -> 100%`) on scroll.
  - Pulsing glowing dot (`.career-dot`) with multi-layer box shadows.
  - 3 milestone cards with role, company, year (`20XX`, `NOW`), and description.

---

## 13. Contact Section Details

- **Heading**: `Contact` (uppercase display title, 40px–60px).
- **Communication Channels**:
  - Email: `mailto:example@mail.com`
  - Phone: `tel:+9199999999` (`+91 99999 99999`)
- **Social Channels**:
  - GitHub (`https://github.com`)
  - LinkedIn (`https://www.linkedin.com`)
  - Twitter / X (`https://x.com`)
  - Instagram (`https://www.instagram.com`)
- **Attribution**: `Designed and Developed by Moncy Yohannan © 2024`.

---

## 14. Navigation Architecture

- **Logo Monogram**: Left-aligned link (`Logo`) resetting scroll to top.
- **Center Connect Link**: `example@mail.com` mailto link (visible on desktop >=900px).
- **Navigation Links**:
  - `ABOUT` (`data-href="#about"`)
  - `WORK` (`data-href="#work"`)
  - `CONTACT` (`data-href="#contact"`)
- **HoverLinks Component**: Renders duplicated text nodes inside a clipped container. On hover, the container translates `translateY(-100%)` for a seamless vertical rolling reveal.
- **Scroll Navigation**: Desktop clicks intercept default anchor behavior and execute `smoother.scrollTo(section, true, "top top")`.
- **ScrollSmoother Configuration**:
  - `wrapper`: `#smooth-wrapper`
  - `content`: `#smooth-content`
  - `smooth`: `1.7`
  - `speed`: `1.7`
  - `effects`: `true`

---

## 15. Animation Architecture

### Core GSAP & ScrollTrigger Registry
All animation plugins are registered across components:
- `gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText, useGSAP)`

### Important GSAP Timelines

#### 1. Page Entrance & Role Loop (`initialFX.ts`)
- **Trigger**: Called when preloader reaches 100% and finishes opening.
- **Landing Intro Stagger**: `SplitText` chars from `.landing-intro h1/h2` and `.landing-info h3` animate from `{ opacity: 0, y: 80, filter: "blur(5px)" }` with `stagger: 0.025`, `duration: 1.2`.
- **`LoopText`**: Infinite timeline (`repeat: -1`, `repeatDelay: 1`) alternating between "Developer" and "Designer" with character translation staggers.

#### 2. Hero → About Transition (`tl1` in `GsapScroll.ts`)
- **Trigger**: `.landing-section`, start: `top top`, end: `bottom top`, `scrub: true`.
- **Character Rotation**: `character.rotation.y: 0 -> 0.7`.
- **Camera Position**: `camera.position.z -> 22`.
- **Model Position**: `.character-model` `x: 0 -> -25%`.
- **Hero Fade Out**: `.landing-container` `opacity: 1 -> 0`, `y: 0 -> 40%`.

#### 3. About → What I Do Transition (`tl2` in `GsapScroll.ts`)
- **Trigger**: `.about-section`, start: `center 55%`, end: `bottom top`, `scrub: true`.
- **Camera Movement**: `camera.position` to `{ z: 75, y: 8.4 }` with `power3.inOut`.
- **Character Reposition**: `.character-model` `x: -12%`, `character.rotation.y: 0.92, x: 0.12`.
- **Neck Bone Pivot**: `neckBone.rotation.x -> 0.6` (character looks down at monitor).
- **Monitor & Light Activation**: `monitor.material.opacity -> 1`, `screenLight.material.opacity -> 1`.
- **Rim Light Fade**: `.character-rim` scales to 0 and fades out.

#### 4. What I Do Off-Screen Transition (`tl3` in `GsapScroll.ts`)
- **Trigger**: `.whatIDO`, start: `top top`, end: `bottom top`, `scrub: true`.
- **Model Exit**: `.character-model` `y: 0% -> -100%`.
- **Section Drift**: `.whatIDO` `y: 0 -> 15%`.

#### 5. Career Timeline Growth (`careerTimeline` in `GsapScroll.ts`)
- **Trigger**: `.career-section`, start: `top 30%`, end: `100% center`, `scrub: true`.
- **Line Expansion**: `.career-timeline` `maxHeight: 10% -> 100%`.
- **Card Stagger**: `.career-info-box` `opacity: 0 -> 1`, `stagger: 0.1`.

#### 6. Horizontal Work Conveyor (`Work.tsx`)
- **Trigger**: `.work-section`, start: `top top`, end: `+=${translateX}`, `scrub: true`, `pin: true`.
- **Conveyor Translate**: `.work-flex` `x: 0 -> -translateX`.

---

## 16. Custom Cursor

- **Default State**:
  - 50px circular element (`--size: 50px` on desktop >=600px, `0px` on mobile).
  - Background: `#e6c3ff`.
  - Box Shadow: `0px 0px 30px 0px rgb(175, 131, 255)`.
  - Blend Mode: `mix-blend-mode: difference`.
  - Pointer Events: `none`, `z-index: 99`.
- **Modifiers**:
  - `data-cursor="disable"`: Hides cursor circle by shrinking `--size: 0px`.
  - `data-cursor="icons"`: Stretches cursor into an elongated pill matching icon container height (`--cursorH`).
- **Motion Implementation**:
  - Captures raw `clientX` / `clientY` on `mousemove`.
  - `requestAnimationFrame(loop)` interpolates `cursorPos` with damping delay factor 6, updated via `gsap.to(cursor, { x, y, duration: 0.1 })`.
- **Corner-Bracket Status**:
  > [!IMPORTANT]
  > **PLANNED — NOT CURRENTLY IMPLEMENTED**: The specialized corner-bracket cursor with expanding `✦ → VIEW` label for project card hovers is planned for a future release and is not yet in the active codebase.

---

## 17. Three.js / 3D Graphics Subsystem

### System 1: Interactive Character Scene (`src/components/Character/*`)
- **Renderer**: `THREE.WebGLRenderer` with `alpha: true`, `antialias: true`, `ACESFilmicToneMapping`, pixelRatio clamped to device ratio.
- **Camera**: `THREE.PerspectiveCamera` (FOV: 14.5°, position: `[0, 13.1, 24.7]`, zoom: 1.1).
- **Lighting**:
  - Directional light (`0xc7a9ff`, intensity 1, shadow map 1024x1024).
  - Point light (`0xc2a4ff`, position `[3, 12, 4]`, intensity dynamically mapped to monitor screen emissive output).
  - HDR Environment map (`/models/char_enviorment.hdr` via `RGBELoader` with EquirectangularReflectionMapping).
- **Model & Encryption Pipeline**:
  - Source model `/models/character.enc` is fetched as an ArrayBuffer.
  - Decrypted in-memory using Web Crypto API (`AES-CBC` with SHA-256 derived key from password `"Character3D#@"`).
  - Decompressed and compiled via `GLTFLoader` and `DRACOLoader` (`/draco/`).
- **Skeletal Bones & Animation Clips**:
  - `spine006`: Head bone tracked in real time to mouse coordinates.
  - `spine005`: Neck bone articulated during scroll transitions.
  - Animation clips: `introAnimation`, keyboard typing clips (`key1`, `key2`, `key5`, `key6`, `typing` on typing bones), `Blink` (eye blink cycle), and `browup` (eyebrow lift on face hover).
- **Cleanup**: `scene.clear()`, `renderer.dispose()`, removing WebGL canvas from DOM on unmount.

### System 2: TechStack Physics Scene (`src/components/TechStack.tsx`)
- **Canvas**: `@react-three/fiber` `Canvas` with shadows, `depth: false`, `antialias: false`.
- **Physics World**: `@react-three/rapier` `Physics` (gravity `[0, 0, 0]`).
- **Mesh & Materials**: 30 `RigidBody` spheres with physical materials mapped to 8 tech logo textures.
- **Pointer Repulsion**: Kinematic rigid body (`Pointer`) tracking mouse pointer in viewport coordinates and deflecting spheres.
- **Post-Processing**: `EffectComposer` with `N8AO` ambient occlusion.

---

## 18. Assets Catalog

```
public/
├── draco/
│   ├── draco_decoder.js            # Google Draco 3D mesh decoder JavaScript wrapper
│   └── draco_decoder.wasm          # Google Draco WebAssembly decompression binary
├── images/
│   ├── express.webp                # Express.js logo texture for 3D physics sphere
│   ├── javascript.webp             # JavaScript logo texture for 3D physics sphere
│   ├── mongo.webp                  # MongoDB logo texture for 3D physics sphere
│   ├── mysql.webp                  # MySQL logo texture for 3D physics sphere
│   ├── next.webp / next1.webp      # Next.js alternate icon textures
│   ├── next2.webp / nextBL.webp    # Next.js primary physics sphere textures
│   ├── node.webp / node2.webp      # Node.js physics sphere textures
│   ├── placeholder.webp            # Generic placeholder image for project cards
│   ├── react.webp / react2.webp    # React physics sphere textures
│   └── typescript.webp             # TypeScript physics sphere texture
└── models/
    ├── char_enviorment.hdr         # 32-bit High Dynamic Range environment map for PBR lighting
    ├── character.enc               # AES-CBC encrypted 3D character model + skeletal rig
    ├── character.glb               # Unencrypted source GLB model asset
    └── encrypt.cjs                 # Node.js cryptographic utility script for model encryption
```

---

## 19. Data Architecture

### Current State
- Almost all content is currently **hardcoded directly in component JSX files**.
- The sole dedicated data file is `src/data/boneData.ts`, which exports:
  - `typingBoneNames`: Array of 54 skeletal bone identifiers for typing animation filtering.
  - `eyebrowBoneNames`: Array of 2 bone identifiers (`eyebrow_L`, `eyebrow_R`) for hover expression filtering.

### Planned Data Refactoring
To prepare the portfolio for Aadhish Saini's custom content, data should be extracted into modular TypeScript configuration files:
- `src/data/projects.ts` (Project metadata, live URLs, GitHub repos, tags, media assets)
- `src/data/skills.ts` (Categorized skill sets and tools for What I Do and TechStack)
- `src/data/experience.ts` (Career milestones, dates, roles, achievements)
- `src/data/socials.ts` (Verified social profile links and contact coordinates)

---

## 20. Responsive System

The layout adapts across five primary device tiers using standard CSS media queries:

```
┌─────────────────────────┬──────────────────────────────────────────────────────────────┐
│ Viewport Width          │ Layout & Component Adaptations                               │
├─────────────────────────┼──────────────────────────────────────────────────────────────┤
│ Desktop (≥1200px)       │ • Fixed 3D character scene with multi-section camera pan     │
│                         │ • Full 3D Rapier physics TechStack canvas active             │
│                         │ • Navbar displays full links with 80px gaps + center email   │
│                         │ • Large display headings (70px–80px)                         │
├─────────────────────────┼──────────────────────────────────────────────────────────────┤
│ Small Desktop (1025px)  │ • Pinned horizontal work conveyor adjusted to 450px/350px    │
│                         │ • About section takes 50% right width                        │
│                         │ • What I Do 2-column layout preserved                        │
├─────────────────────────┼──────────────────────────────────────────────────────────────┤
│ Tablet (768px–1024px)   │ • 3D character moves into Landing section document flow      │
│                         │ • 3D TechStack physics canvas unmounted                      │
│                         │ • Section container max-width constrained to 94%             │
│                         │ • Career timeline adjusts to single-column layout            │
├─────────────────────────┼──────────────────────────────────────────────────────────────┤
│ Mobile (≤767px)         │ • What I Do switches to stacked single-column accordion      │
│                         │ • Career timeline left-aligned with 5% offset                │
│                         │ • Contact section collapses to single vertical stack         │
│                         │ • Floating social icons hidden; resume button simplified     │
├─────────────────────────┼──────────────────────────────────────────────────────────────┤
│ Small Mobile (≤600px)   │ • Custom cursor disabled (`--size: 0px`)                     │
│                         │ • Touch event listeners handle 3D character head rotation    │
│                         │ • Navbar navigation links stack vertically or collapse       │
└─────────────────────────┴──────────────────────────────────────────────────────────────┘
```

---

## 21. Known Current Issues

| # | Issue | Cause | Affected Component | Severity | Potential Area to Fix |
| :-: | :--- | :--- | :--- | :---: | :--- |
| **1** | **Hardcoded Dev Path in Video Fetch** | `fetch('src/assets/${props.video}')` hardcodes Vite dev server path and breaks in production bundle | `src/components/WorkImage.tsx:17` | **High** | Move video assets to `/public/videos/` and fetch via absolute URL `/videos/...` |
| **2** | **Cursor Animation Frame Memory Leak** | `requestAnimationFrame(loop)` runs indefinitely without storing or cancelling RAF ID on unmount | `src/components/Cursor.tsx:16` | **Medium** | Store RAF ID in a ref and call `cancelAnimationFrame(id)` in `useEffect` cleanup |
| **3** | **Social Icons Animation Frame Memory Leak** | `requestAnimationFrame(updatePosition)` is spawned for each icon without cleanup cancellation | `src/components/SocialIcons.tsx:33` | **Medium** | Store animation frame IDs and cancel them on component unmount |
| **4** | **`gsap-trial` Dependency in Production** | `ScrollSmoother` and `SplitText` are imported from trial package (`gsap-trial`), which is restricted to non-production use | `src/components/Navbar.tsx`, `splitText.ts`, `initialFX.ts` | **High** | Upgrade to official GSAP Club license or migrate to open-source Lenis smooth scroll |
| **5** | **Template Identity & Placeholder Strings** | Author name, contact email, phone number, and project slots still display template baseline values | `Landing.tsx`, `About.tsx`, `Career.tsx`, `Work.tsx`, `Contact.tsx`, `index.html` | **High** | Replace placeholder content and metadata with Aadhish Saini's real data |
| **6** | **Missing WebGL Context Fallback** | No fallback UI or graceful degradation if user browser disables WebGL or lacks hardware support | `src/components/Character/Scene.tsx`, `TechStack.tsx` | **Medium** | Add WebGL capability check and render a 2D fallback visual when unsupported |
| **7** | **Empty Character Exports File** | `exports.ts` in the Character component directory is a 0-byte file | `src/components/Character/exports.ts` | **Low** | Populate with modular exports or delete the unused file |

---

## 22. Known Working Features

- [x] **Interactive Preloader**: Percentage counter, animated button with mouse-tracking glow, and infinite marquee.
- [x] **GSAP Page Transitions**: Seamless entrance animation (`initialFX`) with SplitText staggers on hero display text.
- [x] **3D WebGL Character Model**: AES-CBC decryption, Draco decompression, bone rig compilation, and shadow rendering.
- [x] **Interactive Head Tracking**: Head bone (`spine006`) smooth-lerped toward mouse cursor on desktop and touch coordinates on mobile.
- [x] **Face Hover Reaction**: Eyebrow raise animation clip triggered when hovering over face bounds (`.character-hover`).
- [x] **Blinking & Typing Loops**: Continuous idle typing on keyboard and timed blinking animation clips.
- [x] **Multi-Section 3D Scroll Choreography**: Coordinated GSAP ScrollTrigger timelines translating character model, adjusting camera focal depth, and toggling monitor screen illumination.
- [x] **Interactive Skills Accordion ("What I Do")**: Animated SVG dashed borders, corner crosshairs, and dynamic panel height expansion.
- [x] **Scroll-Scrubbed Career Timeline**: Vertical gradient line expanding with scroll progress alongside glowing dot and milestone staggers.
- [x] **Pinned Horizontal Work Showcase**: Smooth horizontal conveyor scrolling 6 project slots across the viewport.
- [x] **3D Rapier Physics Tech Stack**: 30 floating rigid-body tech logo spheres with interactive mouse pointer repulsion collider.
- [x] **Dual-Line Rolling Hover Links**: Smooth vertical roll transitions across all navigation and resume links (`HoverLinks`).
- [x] **Magnetic Social Icons**: Spring physics cursor attraction interpolation on floating social buttons.
- [x] **Custom Difference Cursor**: Dynamic trailing circle cursor with icon-stretch and disable modifiers.

---

## 23. Current vs. Planned Features

### Currently Implemented
1. Dark-mode cinematic visual theme with purple atmospheric lighting orbs.
2. WebGL 3D character scene with AES-CBC decryption, skeletal rigging, and Draco compression.
3. Interactive mouse/touch head tracking, eye blinking, keyboard typing loop, and eyebrow raise.
4. GSAP ScrollSmoother and ScrollTrigger scroll choreography across sections.
5. SplitText character and word staggered entrance animations.
6. Interactive skills accordion with animated SVG dashed borders.
7. Dynamic vertical career timeline with scrubbed height growth.
8. Pinned horizontal work showcase conveyor.
9. Interactive 3D Rapier physics simulation with floating tech logo spheres.
10. Dual-line vertical rolling hover links (`HoverLinks`).
11. Magnetic social icons with spring attraction.
12. Trailing circular difference cursor.
13. Responsive desktop, tablet, and mobile layouts.

### Planned / Future
1. **Custom 3D Personal Avatar**: Bespoke 3D model representing Aadhish Saini replacing the template character asset.
2. **`✦ → VIEW` Corner-Bracket Cursor**: Specialized expanding corner brackets on project card hover (**PLANNED — NOT CURRENTLY IMPLEMENTED**).
3. **Real Portfolio Projects**: Integration of real engineering projects (e.g., DhruvNetra, FasalKavach, Autonomous Agents Platform).
4. **Real Career Experience**: Accurate employment history, hackathon achievements, and education milestones.
5. **Personal Contact Information**: Verified email, phone, and active social media profiles.
6. **Modular Data Layer**: Separate TypeScript data files (`src/data/projects.ts`, `src/data/skills.ts`, `src/data/experience.ts`).
7. **Production Scroll Architecture**: Migration from `gsap-trial` to production-licensed GSAP Club plugins or open-source Lenis.
8. **WebGL Fallback UI**: Graceful degradation to 2D illustration on devices without hardware WebGL support.

---

## 24. Development Commands

Execute all commands from the project directory containing `package.json`:

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Starts the Vite local development server with network host exposure (default: `http://localhost:5173`).

### Build for Production
```bash
npm run build
```
Executes TypeScript type checking (`tsc -b`) followed by Vite production bundling (`vite build`) to generate the optimized `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Spins up a local web server to preview the built `dist/` output.

### Lint Codebase
```bash
npm run lint
```
Runs ESLint across the codebase using the flat config (`eslint.config.js`).

---

## 25. Development Guidelines

Future developers and AI agents working on this project must adhere to the following architecture rules:

1. **Avoid React State for High-Frequency Events**: Never bind `mousemove`, `scroll`, or physics updates directly to React component state. Use refs, mutable coordinate objects, and `requestAnimationFrame` / `useFrame` loops to prevent re-render thrashing.
2. **Proper Cleanup of GSAP Timelines & ScrollTriggers**: Always kill timelines and ScrollTrigger instances inside component unmount cleanup functions (`useEffect` return or `useGSAP` scope) to prevent memory leaks and orphaned scroll pins.
3. **Cancel Animation Frame Loops**: Store all `requestAnimationFrame` IDs in refs and explicitly call `cancelAnimationFrame(id)` when components unmount.
4. **Preserve Viewport Document Flow**: Avoid unbounded absolute positioning that can break scroll calculations. Major section wrappers must reside in normal document flow inside `#smooth-content`.
5. **Prevent Horizontal Overflow**: Maintain `overflow-x: hidden` boundaries on top-level layout containers to prevent horizontal jitter during pinned animations.
6. **Decouple Data from UI Components**: Extract all project records, skill lists, and timeline entries into dedicated files in `src/data/` before updating content.
7. **Production Asset Paths**: Reference static assets through the `/public/` directory using root-relative paths (`/images/...`, `/models/...`) rather than relative source paths (`src/assets/...`).
8. **Mobile Performance Protection**: Heavy 3D canvases (such as the Rapier physics simulation in `TechStack`) should remain conditional on `isDesktopView` to protect mobile GPU/battery performance.

---

## 26. Change Log

### Current Baseline
- **Date**: October 6, 2026
- **State**: Initial documented technical and design baseline of the portfolio website repository.

### Future Changes
*Future modifications, feature additions, project updates, and bug fixes should be recorded here chronologically.*

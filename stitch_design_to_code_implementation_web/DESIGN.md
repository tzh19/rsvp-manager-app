---
name: Etheric Management
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464554'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#5d5d67'
  on-secondary: '#ffffff'
  secondary-container: '#e3e1ed'
  on-secondary-container: '#64636d'
  tertiary: '#006c49'
  on-tertiary: '#ffffff'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e3e1ed'
  secondary-fixed-dim: '#c7c5d1'
  on-secondary-fixed: '#1a1b23'
  on-secondary-fixed-variant: '#46464f'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  stat-value:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-padding: 40px
  gutter: 20px
---

## Brand & Style

This design system embodies a **Modern Corporate** aesthetic that prioritizes clarity, efficiency, and a sense of calm reliability. It is built for SaaS environments and administrative dashboards where high-density information must be balanced with visual breathing room.

The brand personality is professional yet approachable, characterized by an "airy" layout and a vibrant, digitally-native primary accent. It leans into a clean, minimalist structural foundation while using soft shadows and subtle container boundaries to create a modern, layered feel. The target audience includes managers and coordinators who require a focused, distraction-free environment to execute repetitive tasks with precision.

## Colors

The palette is anchored by a high-energy Indigo primary, used strategically for calls to action and active states. The foundation of the UI is built on a "cool white" canvas, ensuring that information remains the focal point.

Semantic colors are strictly defined for status management:
- **Primary Indigo:** Essential interactions and branding.
- **Success Green:** High-confidence actions and "Attending" states.
- **Error Red:** Destructive actions, validation errors, and "Not Attending" states.
- **Neutral Slate:** Used for secondary text and borders to maintain a professional, low-friction appearance.

## Typography

The typography system utilizes **Hanken Grotesk** for its sharp, contemporary geometry and excellent legibility in data-heavy contexts. 

The hierarchy is structured to create clear entry points. Display and Stat-Value roles use heavy weights and tighter letter spacing to create impact for key metrics. Body text maintains a comfortable 1.5x line height to ensure readability in lists and descriptions. Labels are clear and distinctive, often paired with icons to facilitate quick scanning of dashboard headers.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum width of 1280px. It utilizes an 8px base unit system to ensure mathematical harmony across all components.

- **Desktop:** 12-column grid with 24px gutters. Elements are housed in spacious cards that utilize 24px to 32px of internal padding.
- **Tablet:** 8-column grid with 20px margins.
- **Mobile:** Single-column flow with 16px horizontal margins. 

Emphasis is placed on "White Space as a Separator"—using generous margins between logical sections (e.g., 40px between the header, stats row, and main content table) rather than heavy dividers.

## Elevation & Depth

This design system uses a **Tonal & Shadow Layering** approach. Surface depth is conveyed through three distinct levels:

1.  **Level 0 (Canvas):** The base background color (`#F8FAFC`).
2.  **Level 1 (Cards/Containers):** Pure white (`#FFFFFF`) surfaces that sit slightly above the canvas. They use a very soft, diffused shadow (Offset: 0, 4px; Blur: 6px; Opacity: 4% Black) and a subtle 1px border (`#F1F5F9`) to define edges.
3.  **Level 2 (Interactive/Floating):** Used for dropdowns and tooltips. These utilize a more pronounced shadow (Offset: 0, 10px; Blur: 15px; Opacity: 8% Black) to indicate they are temporary overlays.

Depth is also communicated through "Subtle Recessions"—input fields and search bars use a very light grey fill or outline to appear slightly "inset" compared to the primary card surface.

## Shapes

The shape language is consistently **Rounded**, reflecting a modern and friendly tool. 

- **Standard Radius:** 0.5rem (8px) for buttons, inputs, and internal widgets.
- **Large Radius:** 1rem (16px) for main container cards and the primary dashboard sections.
- **Full Radius:** Used for status badges (chips) and avatars to create a soft, organic feel that contrasts with the structured grid.

Avoid sharp corners entirely to maintain the approachable brand personality.

## Components

### Buttons
- **Primary:** Solid `#6366F1` background with white text. High-contrast and bold.
- **Secondary/Ghost:** Transparent background with `#6366F1` border and text.
- **Icon Buttons:** Circular or soft-square containers with consistent padding.

### Status Badges (Chips)
- **Attending:** Light green background (`#DCFCE7`) with dark green text (`#166534`).
- **Not Attending:** Light red background (`#FEE2E2`) with dark red text (`#991B1B`).
- Use `body-sm` bold typography and pill-shaped rounding.

### Input Fields
- White background with a 1px `#E2E8F0` border. 
- On focus, the border transitions to Primary Indigo with a soft 3px outer glow.
- Place labels above the field in `body-sm` bold.

### Cards
- Always use the Large Radius (16px).
- Incorporate a soft shadow.
- Headers within cards should have a subtle bottom border or a distinct background tint to separate the title from the content.

### Lists & Tables
- Rows should be separated by 1px `#F1F5F9` lines.
- Hover states should trigger a very subtle background change to `#F8FAFC`.
- Action buttons (Edit/Delete) should be secondary or ghost styles to prevent visual clutter in long lists.
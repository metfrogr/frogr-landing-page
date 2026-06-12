# Frogr Landing Page — Figma Make Prompt (React + Tailwind)

> **Important:** This is a **web landing page** → use **React + Tailwind CSS** (Next.js 14).  
> **Not React Native.** React Native is for iOS/Android apps and does not use standard Tailwind for web. Figma Make will output a website, not a mobile app.

> **Greenfield build:** Do **not** upload or reference the old HTML/CSS landing page. Generate everything fresh from this prompt + attached brand assets only.

---

## Files to attach in Figma Make

**You only attach the logo.** Figma Make must **generate or source all other visuals** (hero imagery, section photos, illustrations, category thumbnails, OG image concepts).

### ★ Required — attach only this

| File | Used for |
|---|---|
| ★ **Frogr logo** (SVG or PNG you provide) | Header, hero badge area, footer. Extract yellow `#FFD02D` and brand shapes from logo only. |

### Figma must generate everything else

Do **not** wait for the user to upload photos. **Create or source** visuals as follows:

| Visual | How Figma should create it |
|---|---|
| Hero background & collage | **Generate** premium editorial imagery — Indian urban gig-economy mood, warm cinematic lighting, shallow depth of field. Or CSS gradient mesh + abstract shapes if image gen unavailable. |
| Floating app UI cards in hero | **Generate in code** — mock job cards, map pin, "Accept Job" chip, rating badge (pure React/Tailwind UI mocks, not screenshots). |
| For Job Posters section photo | **Generate or Unsplash** — homeowner receiving help, premium stock aesthetic |
| For Workers section photo | **Generate or Unsplash** — confident gig worker, urban India, golden hour |
| Category carousel (×9) | **Generate or Unsplash** — one relevant photo per category |
| Dispute & Support illustration | **Generate** — clean vector-style or soft 3D illustration in brand colors |
| Brand manifesto visual | **Generate** — aspirational flexible-work scene |
| Footer white logo | **Derive from attached logo** — CSS filter invert or SVG white variant in code |
| Favicon | **Derive from logo** or simple "f" mark in code |
| Open Graph preview | **Compose in code** — logo + tagline on gradient |

### Do NOT attach

- Old HTML/CSS landing page
- Old hero banner SVGs (user wants a **completely different** hero — not based on old banners)
- Any legacy marketing screenshots

### Minimum attachment checklist

```
☐ frogr-logo.svg (or .png) — ONLY file user uploads
```

---

## Figma Make setup steps

1. Open **Figma Make** → choose **Claude Sonnet 4.6**
2. **Attach only your Frogr logo**
3. Add this line before the prompt:
   > *"Logo attached. Generate ALL other visuals yourself — premium quality. Hero must be a completely new premium design, NOT a simple split layout or old Frogr banner style. Build fresh React + Tailwind."*
4. Paste the full prompt below (`---PROMPT START---` to `---PROMPT END---`)
5. After first output, ask: *"Export useWaitlistForm.ts and validateIndianMobile.ts as separate files."*

---

---PROMPT START---

# TASK

Build a **brand-new Frogr marketing landing page** from scratch.

**Output:** React 18 + Tailwind CSS v3 — **no HTML files, no standalone CSS files, no migration from any old landing page.**

**Framework:** Next.js 14 App Router compatible (`'use client'` on interactive components) OR standalone Vite + React — your choice, but Tailwind utilities only.

**Libraries allowed:**
- `react` / `react-dom` 18+
- `tailwindcss` 3+
- `lucide-react` (icons)
- `clsx` (conditional classes)
- `@radix-ui/react-dialog` (optional, for Privacy/Terms modal only)

**Libraries NOT allowed:**
- Plain HTML + CSS deliverable
- jQuery, Bootstrap, MUI, Chakra, Ant Design
- React Native / Expo / NativeWind (this is a **website**, not a mobile app)
- Copying structure or class names from any legacy HTML landing page

**Attached assets:** User uploads **logo only**. You must **generate every other visual** (hero imagery, section photos, illustrations). Do **not** replicate any previous Frogr hero banner or old landing layout.

---

# PRODUCT CONTEXT

**Frogr** — India's **hyperlocal gig platform** (web/PWA).

| Role | Behavior |
|---|---|
| Job poster | Posts local tasks in 3 steps |
| Worker | Browses nearby jobs, taps **Accept Job** (no bidding) |
| Broker | Manages worker pools (waitlist signup only — no marketing section) |

**Payment:** Direct Cash/UPI between parties. No escrow.  
**Launch:** Neighbourhood by neighbourhood. Not nationwide yet.  
**CTA 1:** Join Waitlist (Loops.so)  
**CTA 2:** Join WhatsApp Community

---

# DESIGN SYSTEM — build fresh with Tailwind

Create a cohesive design from these tokens. **Invent layout and components** — do not replicate any old HTML structure.

```
Colors:
  frogr-yellow:     #FFD02D  (primary CTA, accents)
  frogr-yellow-hover:#FFC400
  frogr-green:      #22c55e  (success, active states)
  cream-50:         #FFF6D6
  cream-100:        #FCF5DD
  cream-200:        #FEF1C8
  ink:              #0b0b0b
  muted:            #6c6c6c
  error:            #E53E3E
  footer-bg:        #0b0b0b

Layout:
  container:        max-w-7xl (1280px) mx-auto px-4 sm:px-6 lg:px-8
  section-y:        py-16 md:py-20 lg:py-24
  gap:              gap-6 md:gap-8 lg:gap-12

Typography (Google Font: Outfit):
  font-sans:        Outfit, system-ui, sans-serif
  hero:             text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink
  h2:               text-3xl sm:text-4xl lg:text-5xl font-bold text-ink
  subtitle:         text-lg sm:text-xl text-neutral-600
  body:             text-base text-neutral-700 leading-relaxed

Shape:
  buttons:          rounded-full or rounded-2xl
  cards:            rounded-2xl shadow-lg shadow-black/5 border border-neutral-100
  badges:           rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider
```

**Visual direction:** Modern Indian gig-economy startup. Warm yellow + clean white + cream sections. Friendly photography. Rounded geometry. Generous whitespace. Mobile-first. Distinct from generic SaaS — feels local, human, energetic.

---

# COMPONENT ARCHITECTURE (generate all files)

```
components/landing/
├── LandingPage.tsx
├── Header.tsx
├── HeroWaitlist.tsx
├── WhatsAppCommunity.tsx
├── ValuePropBanner.tsx
├── ForJobPosters.tsx
├── ForWorkers.tsx
├── HowItWorks.tsx
├── PopularCategories.tsx
├── PlatformFeatures.tsx
├── LiveJobTracking.tsx
├── TrustAndSafety.tsx
├── DisputeSupport.tsx
├── BrandManifesto.tsx
├── FAQ.tsx
├── Footer.tsx
├── PrivacyTermsModal.tsx
├── hooks/
│   └── useWaitlistForm.ts
└── utils/
    └── validateIndianMobile.ts
```

`LandingPage.tsx` composes all sections in order. Default export.

---

# GUARDRAILS — never generate copy or features for

- Bidding / quotes / "place your bid"
- Workers "apply" (say **Accept Job**)
- Escrow, wallet gateway, insurance
- AI live translation
- Waitlist option "Contractor" (use **Broker**)
- Separate Worker/Employer app downloads
- "Zero commission" absolutes
- Instant platform payouts / instant refunds
- Nationwide availability

---

# SECTION 1 — Header

**ID anchors via scroll, not route links.**

| Nav label | Scroll target |
|---|---|
| How It Works | `#how-it-works` |
| Categories | `#categories` |
| For Workers | `#for-workers` |
| For Job Posters | `#for-employers` |
| FAQ | `#faq` |

Sticky `top-0 z-50`. **Transparent over hero** → solid `bg-white/80 backdrop-blur-md` on scroll (implement with scroll listener or Intersection Observer). Logo from **user-attached file only**. Nav links `text-white/90` on dark hero, `text-neutral-800` after scroll. Yellow pill CTA "Join Waitlist" → `#formContainer`. Mobile hamburger → slide-over menu.

---

# SECTION 2 — Hero + Waitlist ★ CRITICAL — PREMIUM REDESIGN

**Component:** `HeroWaitlist.tsx`  
**ID:** `formContainer` on waitlist card wrapper.

> **DESIGN MANDATE:** The hero must look **completely different** from typical startup landings and from any previous Frogr page. **Premium, editorial, cinematic** — not a basic left-text / right-form split on a cream background. Invent a fresh layout. User provides **logo only** — you generate all hero visuals.

### Hero copy (verbatim — do not change)

| Element | Text |
|---|---|
| Eyebrow | `No Boss. No Shift. No Limit.` |
| H1 | `India's hyperlocal gig platform` |
| Subheadline | `Post local jobs. Accept nearby work. Get it done — fast.` |
| Waitlist card title | `Enter your details` |

---

### Premium hero — layout direction (pick one cohesive concept and execute fully)

**Recommended concept: "Cinematic Immersion + Glass Waitlist"**

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]          Nav links                    [Join Waitlist]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ░░░ GENERATED full-bleed background: gradient mesh +         │
│   ░░░ subtle noise + soft yellow (#FFD02D) light leak          │
│   ░░░ Optional: blurred generated photo collage (gig work)   │
│                                                                 │
│   ┌──────────────────────────┐    ┌─────────────────────────┐  │
│   │  eyebrow (pill, glass)   │    │  ╔═══════════════════╗  │  │
│   │  H1 oversized, tight     │    │  ║ GLASS WAITLIST    ║  │  │
│   │  subheadline             │    │  ║ CARD (frosted)    ║  │  │
│   │  [trust micro-row]       │    │  ║ radios + phone    ║  │  │
│   │                          │    │  ║ #formContainer    ║  │  │
│   │  ┌────┐ ┌────┐ ┌────┐   │    │  ╚═══════════════════╝  │  │
│   │  │float│ │float│ │float│  │    │       soft glow border   │  │
│   │  │UI  │ │UI  │ │UI  │   │    └─────────────────────────┘  │
│   │  │card│ │card│ │card│   │                                  │
│   │  └────┘ └────┘ └────┘   │    Floating mock cards (code):   │
│   └──────────────────────────┘    "Delivery · ₹350" Accept Job│
│                                    map pin · 4.8★ · 2km away   │
└─────────────────────────────────────────────────────────────────┘
```

**Desktop:** `min-h-[90vh]` or `min-h-screen`. Asymmetric grid — copy ~55%, waitlist ~45% OR overlapping layers with waitlist card floating over visual (z-index, `-mt-24` overlap into next section optional).

**Mobile:** Full-width generated visual top (40vh), copy center, glass waitlist card below with `mx-4` and strong shadow. No cramped form.

---

### Premium styling requirements

**Typography**
- H1: `text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]` — editorial scale
- Eyebrow: small pill with `backdrop-blur`, `border border-white/20`, `bg-white/10` or `bg-[#FFD02D]/20`
- Use **Outfit** font. Consider one word in H1 with `text-[#FFD02D]` or subtle gradient `bg-clip-text text-transparent bg-gradient-to-r from-[#FFD02D] to-[#22c55e]`

**Background (generate — do not use flat cream)**
- Layer 1: `bg-neutral-950` or `bg-[#0a0a0a]` dark premium base **OR** deep warm `bg-[#1a1508]` with yellow undertone
- Layer 2: CSS gradient mesh — radial blobs `from-[#FFD02D]/30`, `from-[#22c55e]/15`, `blur-3xl`, `animate-pulse` very subtle
- Layer 3: `bg-[url('GENERATED_OR_UNSPLASH')]` cover, `opacity-40`, `mix-blend-overlay` — Indian city gig-life mood
- Layer 4: fine grain noise overlay (`opacity-[0.03]`) for texture

**Alternative light premium:** If dark feels wrong, use `bg-[#FAFAF8]` + oversized soft yellow orb + generated photo — still **not** plain cream split.

**Glass waitlist card**
```tsx
className="backdrop-blur-xl bg-white/80 dark:bg-white/10 border border-white/30 shadow-2xl shadow-[#FFD02D]/10 rounded-3xl p-6 md:p-8"
```
- Inner glow ring: `ring-1 ring-[#FFD02D]/20`
- Submit button: full-width yellow `bg-[#FFD02D] hover:bg-[#FFC400]` with subtle `shadow-lg shadow-[#FFD02D]/30` and `transition-all hover:scale-[1.02]`
- Radio pills: segmented control, refined, not default browser radios

**Floating UI mock cards (build in React — mini components)**
Generate 2–3 small floating cards with `animate-float` (gentle y-axis CSS keyframe):
1. Job card: "Home Help · Koramangala" · ₹500 · green "Accept Job" chip
2. Worker card: avatar, "4.8★", "On the way"
3. Map chip: pin icon + "1.2 km away"

Position: `absolute`, slight rotation `-rotate-3` / `rotate-2`, depth via blur on rear cards. Hide 1–2 on mobile.

**Trust micro-row** (below subheadline, optional):
`🔒 Verified profiles` · `⚡ Instant matching` · `📍 Hyperlocal`
Small, muted, `text-sm text-neutral-400` — lucide icons not emoji in final code.

**Motion (subtle, premium)**
- Hero content: `fade-in-up` stagger (eyebrow → H1 → sub → form)
- Floating cards: slow 6s float loop
- Background mesh: 20s slow drift
- Respect `prefers-reduced-motion`

---

### Hero — DO NOT do (anti-patterns)

- ❌ Simple 50/50 white/cream split with form in a plain white box
- ❌ Copy old Frogr hero banner layout or yellow bottom bar
- ❌ Stock generic corporate handshake photos
- ❌ Centered everything with no visual hierarchy
- ❌ Default unstyled HTML form on flat `#FFF6D6` background
- ❌ Placeholder gray boxes without generating real imagery direction

---

### Hero visuals — generation brief for Figma

When generating hero background image(s), use this brief:

> *"Premium editorial photography collage for Indian hyperlocal gig platform. Warm golden-hour urban India. Diverse gig workers and homeowners — delivery, home help, local errands. Cinematic shallow depth of field, muted tones with yellow accent lighting. Modern, aspirational, trustworthy. No text in image. Not cartoon. Not corporate stock cliché."*

If image generation unavailable: use **Unsplash** URLs with similar query, wrapped in gradient overlay for cohesion.

---


## Waitlist — `useWaitlistForm.ts` (implement exactly)

```typescript
const LOOPS_FORM_ID = 'cmgrgqh7e7xbx030in9jo5vx9';
const LOOPS_API_URL = `https://app.loops.so/api/newsletter-form/${LOOPS_FORM_ID}`;
const SOURCE = 'Landing page';
const COUNTDOWN_SECONDS = 5;

type UserType = 'Employer' | 'Tasker' | 'Broker';
type FormState = 'form' | 'success' | 'error';
```

### Radio options

| Label shown | `UserType` value | Loops `userGroup` |
|---|---|---|
| Job Provider | `Employer` | `Employer` |
| Job Taker | `Tasker` | `Tasker` |
| Broker | `Broker` | `Broker` |

Default: `Employer`

### Phone field rules

- `type="tel"`, `maxLength={10}`, `inputMode="numeric"`, `required`
- Strip non-digits on change
- Block non-numeric keys (allow Backspace, Delete, arrows, Tab)
- Paste: digits only, max 10

### `validateIndianMobile.ts`

Returns `{ valid: boolean; message: string }`:

1. Length must be 10
2. Must start with 6, 7, 8, or 9
3. Reject sequences: `0123456789`, `1234567890`, `9876543210`, `0987654321`
4. Reject `/^(\d)\1{9}$/` (all same digit)
5. Reject `/^(\d{2})\1{4}$/` (repeated pairs)
6. Reject if starts with `140` or `160`
7. Empty → `"Please enter your mobile number"`

### Submit flow

1. Guard `isLoading`
2. Validate phone → show inline error on input (red border + message) OR proceed
3. Map `userType` → `userGroup` string
4. Body (urlencoded):
   ```
   userGroup={Employer|Tasker|Broker}
   &mailingLists=
   &source=Landing page
   &email={phone}@phone.placeholder
   &phoneNumber={phone}
   ```
5. `POST` Loops API, `Content-Type: application/x-www-form-urlencoded`
6. **OK** → `formState='success'`, clear phone, reset `userType` to `Employer`, start 5s countdown, auto `resetForm()`
7. **Error JSON contains "already"** → inline `"This mobile number is already registered"`
8. **Other error** → `formState='error'` with message
9. **Network fail** → `"Network error, please check your connection"`
10. Button: idle `"Join Waitlist"` / loading `"Please wait..."` / disabled while loading

### UI states

| State | Shows |
|---|---|
| `form` | radios + phone + submit + inline validation |
| `success` | `"Thanks! We'll be in touch!"` + `← Back (N sec)` countdown |
| `error` | dynamic error + `← Back` manual reset |

**Single waitlist on entire page.** FAQ CTA scrolls to `#formContainer`.

---

# SECTION 3 — WhatsApp Community

- Title: `Join Our WhatsApp Community`
- Body: `Connect with like-minded individuals, stay updated with launch news and early access announcements, and be part of our growing community. Get instant notifications and engage in meaningful conversations.`
- Button: `Join Community`
- URL: `https://chat.whatsapp.com/INe1JdYjai5EJ8UkH7CLIW`

Centered card, WhatsApp green icon, white card on light section.

---

# SECTION 4 — Value Prop Banner

Full-width `bg-[#FFD02D]`, centered:
- H2: `Post a job in 3 easy steps`
- P: `No app download needed — start from your browser. Set title, location, and budget with AI price guidance.`

---

# SECTION 5 — For Job Posters (`#for-employers`)

- Badge: `For Job Posters`
- H2: `Trusted help for everyday tasks`
- Sub: `Connect with verified workers near you — post, confirm, track, and pay directly.`

**Features:**
1. **Post in 3 steps** — Add title and photo, pick date and location on the map, and set your budget with Frogr AI price suggestion.
2. **Worker accepts nearby** — A nearby worker accepts your job. Review their profile before confirming.
3. **Confirm your worker** — Confirm within minutes to activate the job and get work started.
4. **Track live progress** — Follow every update: on the way → reached → work started → completed.
5. **Pay directly** — Pay via Cash or UPI at completion. Rate your worker after payment. No hidden fees shown when you post.

Two-column: copy + image with floating worker card (Rajesh Kumar, 4.8★, 127 reviews, Available, "Confirm Worker").

---

# SECTION 6 — For Workers (`#for-workers`)

- Badge: `For Workers`
- H2: `Earn on your schedule`
- Sub: `Browse hyperlocal gigs and accept jobs that fit your skills and timing.`

**Features:**
1. **See jobs near you** — Location-based job feed with category and price filters.
2. **Accept instantly** — Tap Accept Job. No bidding. The job poster confirms you to get started.
3. **Complete with proof** — Update your status: on the way, reached, started, and done. Add optional completion photos.
4. **Get paid directly** — Receive Cash or UPI from the job poster. Confirm payment received in the app.
5. **Build your reputation** — Ratings and a verified profile (live selfie + optional Aadhaar/PAN) help you win more jobs.

Image + illustrative stats card: ₹1,250 Avg. Daily | 127 Jobs Today | 4.8★ Rating.

---

# SECTION 7 — How It Works (`#how-it-works`)

- H2: `How it works`
- Sub: `Two paths, one platform`
- Tabs: `For Job Posters` | `For Workers`

**Job Poster steps:** Sign up with phone → Post your job → Worker accepts → Confirm your worker → Track, pay, rate

**Worker steps:** Sign up & set up profile → Browse nearby jobs → Accept a job → Do the work → Confirm payment & rate

(Use full descriptions from product spec in section 5/6 of this prompt.)

Numbered stepper with dashed connectors. Fresh visual design.

---

# SECTION 8 — Popular Categories (`#categories`)

- H2: `Popular Categories`
- Sub: `These are the categories available for you to post or accept jobs.`

9 cards in **infinite vertical auto-scroll** (35s loop, pause hover/touch, `prefers-reduced-motion`):

Delivery, Errands, Shopping, Home Help, Moving Help, Office Tasks, Event Help, Pet Care, Personal & General Help — with descriptions from asset table above.

---

# SECTION 9 — Platform Features (`#platform-features`)

- H2: `Built for hyperlocal work`
- Sub: `Everything you need to post, accept, and complete local jobs — in one place.`

6-card grid: Hyperlocal matching, Frogr AI pricing, Real-time updates, Live job chat, Multilingual (EN/HI/KN/TA), Works in your browser.

---

# SECTION 10 — Live Job Tracking (`#live-tracking`)

- H2: `Track every step in real time`
- Sub: `From open job to completed work — both sides stay in sync.`

Timeline: Open → Reserved → Active → On the way → Reached → Work started → Completed

Callout: `Need faster uptake? Job posters can increase the price by ₹50, ₹100, or ₹200 if a job isn't accepted quickly.`

---

# SECTION 11 — Trust & Safety (`#trust`)

- H2: `Verified workers. Transparent jobs.`
- Sub: `Your safety matters. We combine verification, ratings, and moderation to build trust over time.`

4 cards: Identity verification, Ratings & reviews, Admin moderation, Expanding service areas.

---

# SECTION 12 — Dispute & Support (`#support`)

- H2: `Dispute & Support`
- Sub: `Help when something goes wrong`

5 bullets + WhatsApp `+91 82176 89905` (`https://wa.me/918217689905`) + `support@frogr.in`

---

# SECTION 13 — Brand Manifesto (`#manifesto`)

- Eyebrow: `No Boss. No Shift. No Limit.`
- H2: `Take control of your time. Earn what you deserve.`
- Sub: `Work on your terms — whether you're posting a job or accepting one nearby.`
- 3 bullets: job alerts, no hidden fees at post, flexible hours

---

# SECTION 14 — FAQ (`#faq`)

Yellow section. Accordion. Open All / Close All. First item open default.

9 Q&As — verbatim:

1. **What kind of jobs can be posted on Frogr?** — Short-term local tasks: delivery, errands, shopping, home help, moving, office, events, pet care, general help.

2. **How does posting a job work?** — Post a Job → 3 steps (title/photo, map location, budget + AI suggestion) → workers notified → workers accept.

3. **How do workers get jobs on Frogr?** — Browse, filter, Accept Job. No bidding. Poster confirms worker.

4. **How does payment work?** — Direct Cash/UPI at completion. Recorded in app. No hidden fees at post time.

5. **Is there a subscription or long-term contract?** — No. Flexible one-time jobs.

6. **How do you ensure trust and safety?** — Selfie + optional Aadhaar/PAN, ratings, admin review, disputes via Help & Support.

7. **Why might a job need admin approval?** — Quick review, usually minutes, then notified.

8. **Where is Frogr available?** — Neighbourhood by neighbourhood; join waitlist for your area.

9. **What is the Broker option on the waitlist?** — For people who manage worker pools and refer them to jobs.

Footer CTA: `Still have questions? Join our waitlist and connect with the Frogr team.` → scroll `#formContainer`

---

# SECTION 15 — Footer

Dark `#0b0b0b`. White logo. Badge: `Verified Profiles • Direct Payments • Hyperlocal Matching`

Description: `No Boss. No Shift. No Limit. Empowering people to work freely and get things done faster. From daily jobs to local tasks, Frogr connects trusted workers with real opportunities nearby.`

Links: Privacy + Terms (modal), Features `#for-workers`, Support `#support`, Verification `#trust`

Social: X `https://x.com/frogr_in?s=20` · Facebook `https://www.facebook.com/metfrogr/` · Instagram `https://www.instagram.com/frogr.in?igsh=Y3l0dnI1MTVjeThz` · LinkedIn `https://www.linkedin.com/company/frogr/posts/?feedView=all`

Copyright: `© 2026 Metfrogr Technologies Pvt. Ltd. Made with ❤️ in India`

---

# SEO metadata

```typescript
title: "Frogr — India's Hyperlocal Gig Platform"
description: "Post local jobs. Accept nearby work. No Boss. No Shift. No Limit. Join the waitlist."
```

---

# Deliverable checklist

- [ ] All `.tsx` components, fresh Tailwind styling
- [ ] `useWaitlistForm.ts` with exact Loops logic
- [ ] `validateIndianMobile.ts`
- [ ] No `.html` or legacy `.css` files
- [ ] Mobile-first, 320px minimum
- [ ] Accessible forms and accordion
- [ ] Exact marketing copy as specified
- [ ] Uses user-attached logo only; all other visuals generated per spec
- [ ] Hero is premium cinematic style — NOT old split/cream layout

---PROMPT END---

---

## React vs React Native — quick reference

| | **React + Tailwind** ✅ | **React Native** ❌ for this task |
|---|---|---|
| Platform | Web browser (frogr.in) | iOS / Android app |
| Styling | Tailwind CSS | StyleSheet / NativeWind |
| Figma Make output | Website components | Not suitable for marketing site |
| Your frogr-ui app | Next.js 14 web | N/A |

Use **React + Tailwind** for this landing page.

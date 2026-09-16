# A2Z Precise Billing — Website

Original, premium healthcare/RCM marketing site for **A2Z Precise Billing**,
built with Next.js (App Router), TypeScript, and Tailwind CSS.

This delivery now includes the **full site**: homepage, all core pages,
every service and specialty detail page, the blog, and legal pages —
built on the shared design system from Phase 1.

## Getting started

This environment does not have outbound network access, so dependencies
have **not** been installed here. On your own machine:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts:

```bash
npm run build      # production build
npm run start      # run the production build
npm run lint       # ESLint (next/core-web-vitals)
npm run typecheck  # TypeScript check with no emit
```

## Pages implemented

| Route | Notes |
|---|---|
| `/` | Homepage — all 16 sections |
| `/about` | Company overview, approach, who we serve, testimonials placeholder |
| `/services` | Services index |
| `/services/[slug]` | 11 individual service pages (dynamic route, statically generated) |
| `/specialties` | Specialties index |
| `/specialties/[slug]` | 15 individual specialty pages (dynamic route) |
| `/pricing` | Two-tier pricing ($500 flat / 3% of collections) + FAQs |
| `/how-it-works` | 4-step process + benefits |
| `/contact` | Contact details + lead form |
| `/request-assessment` | Dedicated conversion page + lead form |
| `/resources` | Resource hub linking to blog + FAQs |
| `/blog` | Blog index |
| `/blog/[slug]` | 3 original educational articles (dynamic route) |
| `/privacy-policy` | Draft placeholder — needs attorney review |
| `/terms` | Draft placeholder — needs attorney review |
| `/hipaa-security` | No compliance claims; directs inquiries to contact us |
| `/sitemap.xml`, `/robots.txt` | Auto-generated from `sitemap.ts` / `robots.ts` |

## Decorative backgrounds

Per your reference images, three **original** SVG background treatments
were created (recreated from scratch in the brand palette — not the
reference files themselves, to avoid any licensing risk) and wired into
`PageHeader` via a `background` prop:

- `HexagonBackground` — geometric hex/network motif → `/services` index + all 11 service detail pages
- `MedicalNetworkBackground` — abstract clinical data/pulse motif → `/about`, `/pricing`
- `DataFlowBackground` — flowing particle/data-stream motif → `/resources`, and the dark "Who We Serve" (industries) sections on the homepage and About page

All are pure decoration (`aria-hidden`, absolutely positioned behind
content) and live in `src/components/backgrounds/`.

## What's implemented

- **Design system**: Tailwind theme tokens matching the supplied brand
  palette (`tailwind.config.ts`), Inter + Manrope via `next/font/google`.
- **Original logo**: hand-built SVG mark (`src/components/layout/Logo.tsx`)
  inspired by the supplied concept (clock + checkmark + medical cross),
  not a copy of any file.
- **Layout components**: `Header` (sticky, accessible dropdown nav),
  `AnnouncementBar`, `MobileMenu`, `MobileStickyCta` (mobile "Call Us |
  Get Free Assessment" bar), `Footer`.
- **Section components**: `Hero`, `TrustStats`, `ServiceGrid`/`ServiceCard`,
  `WhyChooseUs`, `IndustryGrid`, `FeatureSection` (used for both the DME
  and Home Health feature blocks), `SpecialtyGrid`, `ProcessSteps`,
  `BenefitGrid`, `PricingCTA`, `FAQAccordion`, `LeadForm`, `FinalCTA`,
  `Testimonials` (intentionally empty — see below).
- **UI primitives**: `Button`, `SectionHeading`, `Breadcrumbs`, `Container`.
- **Data layer** (`src/data/`): `services.ts`, `specialties.ts`,
  `industries.ts`, `faqs.ts`, `process.ts`, `feature-lists.ts` — edit
  these files to change site content without touching components.
- **SEO**: per-page metadata, Open Graph + Twitter card tags, a generated
  OG image (`public/images/og-default.png`), canonical URLs,
  `sitemap.ts` and `robots.ts` (App Router conventions —
  these render at `/sitemap.xml` and `/robots.txt` automatically),
  JSON-LD schema components (`Organization`, `Service` list, `FAQPage`,
  `BreadcrumbList`).
- **Accessibility**: semantic landmarks, skip links, visible focus states,
  labeled form fields, keyboard-operable nav and accordion, `prefers-reduced-motion`
  support.
- **Lead generation**: `LeadForm` posts to `src/app/api/lead/route.ts`,
  a functional stub that validates input and returns success. **You must
  wire this route to a real destination (email service, CRM, spreadsheet,
  etc.) before launch** — it currently only logs non-sensitive fields to
  the server console.

## Placeholder content that must be replaced before launch

Search for `PLACEHOLDER` in `src/lib/site-config.ts` and legal pages:

- Business street address and hours (phone and email are now live: `(734) 619-8238`, `sophiajonesa2z2@gmail.com`)
- Social profile links (currently empty)
- Legal page "last updated" dates
- Analytics/tracking tool names on the Privacy Policy page, once decided

Do not publish placeholder address/hours as real information.

## Testimonials

Per your instructions, no testimonials have been invented. The
`Testimonials` component (`src/components/sections/Testimonials.tsx`)
reads from an intentionally empty array and shows a "coming soon" state.
It is **not** placed on the homepage (the approved homepage section list
doesn't include it), but is ready to use on `/about` or elsewhere once
real, verified testimonials are supplied.

## Pricing

The `PricingCTA` component reflects the pricing structure you provided:

- **Up to $15,000/month in collections** → flat **$500/month**
- **Over $15,000/month in collections** → **3% of total monthly collections**

This should be reconfirmed (billed vs. collected) before publishing, and
expanded on a dedicated `/pricing` page in the next phase.

## Next phases (optional future work)

The site is now feature-complete per the original sitemap. Remaining
optional enhancements:

- Real business address and hours
- Attorney-reviewed Privacy Policy / Terms
- Wiring `/api/lead` to a real email/CRM destination
- Real testimonials, once available
- Additional blog articles beyond the 3 included
- A live map/embed on `/contact` once a real address is confirmed

## Notes on this build environment

Because this sandbox has no outbound network access, `npm install` and a
full `next build` could not be executed here. All files were written and
manually cross-checked (import paths, icon usage, exports, unescaped JSX
entities, Tailwind class syntax) for correctness, but you should still run
`npm run build` and `npm run lint` locally as a final check before deploying.

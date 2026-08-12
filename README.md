# VAMA Advanced Hair & Skin Clinic — Website Redesign

A full multi-page redesign of vamasolution.com, rebuilt as a modern React app
(ready to slot into a MERN stack — this is the frontend; connect it to your
Node/Express + MongoDB API whenever the backend is ready).

## Tech stack
- React 19 + Vite — fast dev/build
- React Router — multi-page routing (every nav item is its own route/page,
  not a single landing page)
- Tailwind CSS v4 — utility styling, design tokens in src/index.css
- Framer Motion — scroll-reveal animations, hero motion, menu transitions
- lucide-react — icon set

## Getting started
    npm install
    npm run dev       # http://localhost:5173
    npm run build     # production build -> /dist
    npm run preview   # preview the production build

## Folder structure
    src/
      components/
        layout/     Navbar, Footer, FloatingDock (WhatsApp/Call/Social), PageHero
        ui/         Button, Accordion, Placeholder, Reveal, SectionHeading, Divider
        sections/   Reusable sections (Hero, ServicesGrid, WhyChooseUs,
                    ApproachSteps, Testimonials, LocationsStrip, AppointmentCTA, FAQ)
      pages/        One file per route
      data/         All site content as plain JS (treatments.js, locations.js, content.js)

## Routes
- /  — Home
- /about-us
- /treatments/skin-treatment , /treatments/hair-treatment , /treatments/weight-loss
- /treatments/:category/:slug — individual treatment page
- /gallery
- /our-team
- /blog and /blog/:slug
- /contact-us
- /locations/:slug — one page per city (noida, indirapuram, lajpat-nagar, lucknow, agra, kanpur)

## Photos
Every image slot currently renders a labelled placeholder
(src/components/ui/Placeholder.jsx). Drop real photos into src/assets/ and
replace <Placeholder label="..." /> with <img src={...} /> at each call
site — every slot is clearly named for a quick find-and-replace.

## Editing content
Everything text-based (treatments, locations, phone numbers, testimonials,
FAQs, blog posts, team bios) lives in src/data/*.js — edit there and it
updates across every page automatically.

## Connecting to your MERN backend later
Forms (AppointmentCTA.jsx, ContactUs.jsx) currently show a success state on
submit. Point their onSubmit handlers at your Express API (e.g. POST
/api/leads) when ready — they're already controlled forms, so it's a small change.

## Design notes
- Palette: deep emerald (--color-brand #1F5C4F), warm gold (--color-gold #C89B5C),
  ivory background, soft rose accent.
- Type: Fraunces (display/headings) + Inter (body/UI).
- Signature motif: the soft organic "renewal curve" divider between sections
  (Divider.jsx).
- Respects prefers-reduced-motion; visible focus states throughout.

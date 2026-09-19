# Founder Notebook

Welcome to your Founder Notebook. This is the single source of truth for your startup project. As founder and lead decision-maker, use this file to define your concept, guide OpenCode, and track every important decision.

---

## 1. Founder Decision — NightFuel

*Decision made: 2026-09-19 · Status: Committed*

- **Product Name:** NightFuel
- **Positioning:** We help Amazon FC night-shift associates — stuck with on-site vending machines and the servo on the way home — by giving them a pre-ranked "best pick" list, helping them feel less like garbage and stop wasting money on the worst options.
- **Founder Story:** I'm a night-shift Area Manager who lives this problem every shift — no prep, standing at the servo at 2am with only bad options. This is the tool I wish I had.

### Evaluation Against the Five Criteria

| Criterion | Verdict | Why |
| :--- | :--- | :--- |
| **User** | Strong | Night-shift workers are a real, specific, easy-to-name niche (~15% of the workforce). The founder is the user — no guessing. |
| **Problem** | Solid | Real pain, repeated every shift: limited options, feeling like garbage, wasted money. Caveat: low urgency ("quality of life", not hair-on-fire) — the landing page must test whether people care enough to act. |
| **Value** | Strong | "Eat This Not That" exists as a generic idea, but no one delivers it *in the moment, for what's literally in front of you at 2am*. That context is the differentiator. |
| **Feasibility** | Strong | MVP is a ranked database of common servo/vending items — no exotic tech. The landing page (this project) is fully deliverable. |
| **Clarity** | Strong | Explains in 10 seconds: "At 2am the servo is your only option. NightFuel shows you the best pick from what's actually there." Passes the 20-second rule. |

**Verdict:** Committed. Remaining risk: the problem is mild but daily-recurring — the waitlist CTA tests whether a real FC associate cares enough to "remember this for tonight."

### Scoped V1 (Locked) — 2026-09-19

- **Target User:** Amazon FC night-shift associates on a fixed 4-night roster (e.g., BWU6), whose only 2am food options are the on-site vending machines and the servo on the drive home.
- **Core Feature:** A pre-ranked "best pick" list for the common servo and vending-machine items, ranked by **least sugar** — one number, because the sugar crash is the enemy of staying awake. No input, no scanning, no photo AI. Open it, see the best picks.
- **Primary CTA:** **"Join the waitlist"** — an email signup, framed as a daytime action: "remember this for tonight." The page's single conversion.
- **20-Second Pitch:** "You work nights, so your 2am food is servo and vending-machine junk. NightFuel is a ranked best-pick list of the common stuff, sorted by least sugar — open it, grab the good one, don't crash before dawn."

---

## 2. Vision & Problem Discovery

*The foundation: Knowledge → Problem → Solution → Value → Product*

- **Domain / Industry:** Food / Convenience retail / Night-shift worker wellbeing
- **Target Audience (Who is this for?):** Amazon FC night-shift associates on a fixed 4-night roster (e.g., BWU6) — their only 2am options are the on-site vending machines and the servo on the drive home
- **The Core Problem (What pain point are you solving?):** At 2am the only options are junk, workers feel like garbage, and they crash mid-shift from sugar spikes
- **Proposed Solution:** A pre-ranked "best pick" list of the common servo/vending items, ranked by least sugar — no input needed, open it and see the pick
- **Value Proposition (Why choose this over existing alternatives?):** No scanning, no perfect-diet lecture — one honest ranking by sugar, so you don't crash before dawn 

---

## 3. Brand Identity & Design System

*Define the visual and emotional tone before generating code or copy.*

- **Company / Product Name:** NightFuel
- **Tagline:** "Nights don't stop. Neither do you."
- **Brand Personality / Tone of Voice:** Bold, Energetic, Real — honest, no-BS, made by someone who's actually stood at the servo at 2am
- **Color Palette:**
  - Primary: `#C4FF47` (volt lime — the single energy accent / "fuel jolt")
  - Secondary: `#9AA7B4` (muted slate — secondary text, captions, icons)
  - Accent: `#C4FF47` (Accent = Primary on purpose — one bold colour, no second accent)
  - Background: `#0A0F13` (anthracite, not pure black — softer on the eyes at 2am)
  - Surface / Card: `#141C23`
  - Text (Primary / Muted): `#F4F7FA` / `#9AA7B4`
- **Typography:**
  - Heading Font: Space Grotesk (700)
  - Body Font: Inter (400 / 500) 

---

## 4. Website Structure & Page Architecture

- **Primary Goal / Conversion Action:** Email / waitlist signup — the ONE conversion the whole page tests. Every CTA on the page points to the same signup (hero CTA scrolls to it).
- **Page Sections (narrative order — maps to standard arc: Navbar → Hero → Problem → Solution → Features/Benefits → Social Proof → Final CTA → Footer):**
  1. **Navbar** — *Goal:* persistent single CTA, zero noise.
     - NightFuel wordmark left; single "Join the waitlist" button right — same CTA as everywhere else, no extra nav links.
     - Sticky on scroll; button scrolls to the final CTA signup.
  2. **Hero** — *Goal:* stop the scroll, set the tone.
     - Headline: "Nights don't stop. Neither do you."
     - Subhead (one line): "NightFuel shows you the best pick from the vending machine, ranked by least sugar — because the crash is the enemy of the shift."
     - Primary CTA: "Get the better pick" → scrolls to final CTA signup.
  3. **Problem** — *Goal:* name the 2am reality so the reader feels seen.
     - Headline: "Your options at 2am are trash."
     - The servo and the vending machine are the only game at those hours — and meal prep died by your first night shift.
     - You know you feel like garbage and waste money on the worst option. Every shift.
  4. **Solution** — *Goal:* the lightbulb: "get this, not that".
     - Headline: "Get this, not that."
     - NightFuel comes pre-loaded with the common vending and servo stock, ranked by least sugar. You don't type or scan anything — just open it and see the best pick.
     - No input, no diet lecture. One number, one pick.
  5. **How It Works** — *Goal:* make it obviously simple, 3 steps.
     - Headline: "Three steps. Ten seconds."
     - Open NightFuel at the machine or on the drive home.
     - See the best picks — common stock, ranked by least sugar.
     - Grab it, pay, get back to work without the crash.
  6. **Social Proof / Founder Note** — *Goal:* trust, no fake testimonials.
     - Headline: "Built from a real 2am."
     - Founder story: night-shift Area Manager who stands at the servo every shift with only bad options and no time. This is the tool I wish I had — honest, no-BS, no smug diet advice.
  7. **Final CTA** — *Goal:* the single conversion action.
     - Headline: "Fuel your next shift."
     - Email input + button: "Join the waitlist" — with a one-line hook: "Remember this for tonight. We'll email you the moment it's ready." Microcopy: no spam, ever.
  8. **Footer** — *Goal:* clean close, reinforce the moment.
     - NightFuel wordmark + tagline "Nights don't stop. Neither do you."
     - One line: "Made at 2am, for the 2am." No duplicate CTA form — the signup already lives above.

- **Design notes:** dark `#0A0F13` background throughout; volt `#C4FF47` for headlines, CTA, and hover states; Space Grotesk 700 for headlines, Inter for body; muted `#9AA7B4` for supporting copy. **Motion budget:** 1 hero entrance + 1 scroll reveal + 1 micro — the micro is the button hover-lift (CTA buttons only), step cards do not animate. prefers-reduced-motion respected. 

---

## 5. Decision Log

*Follow the cycle: Think → Ask → Evaluate → Decide → Build*

| Date | Topic / Area | Options Considered | Final Decision & Rationale | Status |
| :--- | :--- | :--- | :--- | :--- |
| *YYYY-MM-DD* | *e.g., Primary CTA* | *Waitlist vs Direct Purchase* | *Waitlist — lower friction for initial validation* | *Done* |
| 2026-09-19 | Startup direction | NightFuel vs other problem candidates | NightFuel — founder lives the problem, all 5 criteria pass | Done |
| 2026-09-19 | Brand identity | Dark+volt vs light palette; display/body font pairs | Dark #0A0F13 base + single #C4FF47 volt accent — on-theme for 2am, high contrast, one energy colour matches "bold/no-BS" | Done |
| 2026-09-19 | Tagline | "Fuel the shift. Own the 2am." / "Your best call at 2am." / "Nights don't stop. Neither do you." | Locked: "Nights don't stop. Neither do you." — punchy, fuels the night, stands alone | Done |
| 2026-09-19 | Scope V1 | Rank by calories vs protein vs least sugar; scan/photo vs pre-loaded | Least sugar — one number, easy to rank, crash is the enemy; pre-loaded, zero input | Done |
| 2026-09-19 | Landing page — COMPLETE | Quality Audit fixes: navbar 320px fit (label shortens to "Join"), email aria-label + autocomplete, motion trimmed to 1 micro (button hover only), hero subhead sharpened ("ranks by sugar") | Site built, quality-audited (5 dimensions), 4 fixes applied and verified live; "servo" kept as authentic AU voice; no spec drift found | Complete |

---

## 6. Notes & Prompts for OpenCode

*Use this section to draft prompt briefs, review feedback, and keep track of pending tasks.*

- [ ] Define core problem statement and audience
- [ ] Select color palette and typography
- [ ] Draft website copy for hero section
- [ ] Build responsive hero and navigation components
- [ ] Implement feature showcase sections
- [ ] Add interactive elements and conversion forms
- [ ] Final visual polish and responsive testing

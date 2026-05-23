# ClaudeAndVSCode.com

> Helping developers pair **Claude** with **Visual Studio Code** to ship faster, write cleaner code, and learn as they go.

A modern, fully-responsive marketing site built with React + Vite that walks developers through setting up Claude inside VS Code, the workflows that actually move the needle, and why pairing the two transforms day-to-day development.

🌐 **Live site:** _coming soon — deploys to Netlify on every push to `main`_

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [React 18](https://react.dev/) |
| Build tool | [Vite 5](https://vitejs.dev/) |
| Routing | [React Router 6](https://reactrouter.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) (Feather + Font Awesome 6) |
| Styling | Hand-written CSS with CSS variables — no Tailwind, no CSS-in-JS |
| Hosting | [Netlify](https://www.netlify.com/) |

---

## What's on the site

- **Home** — Animated hero with a typing-effect headline, an auto-rotating gradient carousel, a 4-step Claude + VS Code setup guide, feature highlights, a model picker, and a closing CTA.
- **About** — Origin story and the principles the site is built on.
- **Contact** — Mailto form (defaults to `hello@claudeandvscode.com`), copy-email button, and social links.

Design notes:
- Warm light theme — peach, coral, gold over a cream base.
- Fixed `<video>` background, sepia-tinted on the fly via a Cloudinary transformation so it always matches the palette.
- Animations everywhere: fade-ins, slide-ins, typing effects, page transitions, and a glowing animated logo.
- Fully responsive at 960px / 720px / 460px breakpoints.
- Respects `prefers-reduced-motion`.

---

## Getting started

### Prerequisites

- **Node.js** 18+ (Node 20 LTS recommended — matches what Netlify uses)
- **npm** 8+

### Install

```bash
git clone git@github.com:jpowell79/claudeandvscode.git
cd claudeandvscode
npm install
```

### Run the dev server

```bash
npm run dev
```

Vite will start the site at **http://localhost:5173** (or the next free port if 5173 is taken). Edits to any file hot-reload instantly.

### Build for production

```bash
npm run build       # outputs to dist/
npm run preview     # serves the production build locally for a sanity check
```

---

## Project structure

```
.
├── public/                     # static assets copied as-is into the build
│   └── favicon.svg
├── src/
│   ├── components/             # reusable UI components
│   │   ├── Carousel.jsx        # auto-rotating gradient carousel
│   │   ├── Footer.jsx          # site footer with socials
│   │   ├── Logo.jsx            # animated SVG logo
│   │   ├── Navbar.jsx          # sticky nav + mobile drawer
│   │   ├── PageTransition.jsx  # framer-motion wrapper for route transitions
│   │   ├── TypedHeading.jsx    # cycling typing-effect headline
│   │   └── VideoBackground.jsx # fixed-position video bg with warm overlay
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Home.jsx
│   ├── styles/
│   │   └── global.css          # design tokens + all component styles
│   ├── App.jsx                 # routes + layout shell
│   └── main.jsx                # entry point
├── index.html                  # Vite HTML entry
├── netlify.toml                # build settings + SPA redirects for Netlify
├── package.json
├── vite.config.js
├── CLAUDE.md                   # WAT-framework agent instructions
├── GITHUB-INSTRUCTIONS.md      # step-by-step GitHub & Netlify setup guide
└── README.md                   # you are here
```

---

## Deployment

Netlify is wired up to watch the `main` branch. Every `git push origin main` triggers an automatic rebuild and deploy.

Build settings live in [`netlify.toml`](./netlify.toml):

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 20 |
| SPA fallback | `/* → /index.html` (so `/about` and `/contact` don't 404) |

For first-time setup or troubleshooting, see **[GITHUB-INSTRUCTIONS.md](./GITHUB-INSTRUCTIONS.md)** — it covers creating the repo, authenticating, pushing, and connecting Netlify end-to-end.

---

## Daily workflow

```bash
git status                                # see what changed
git add .                                 # stage changes
git commit -m "describe what you did"     # commit locally
git push                                  # push -> Netlify auto-deploys
```

Netlify usually has the new build live within 90 seconds.

---

## Contact

- 📧 **hello@claudeandvscode.com**
- 🌐 [claudeandvscode.com](https://claudeandvscode.com) _(once the domain is live)_

---

## License

Personal project — all rights reserved for now. A formal license may be added later.

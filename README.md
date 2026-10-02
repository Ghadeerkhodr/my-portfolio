<p align="center">
  <strong style="font-size: 2rem;">{G/A}</strong>
</p>

<h1 align="center">Ghadeer Alkhodr — DevOps Engineer Portfolio</h1>

<p align="center">
  A modern, responsive, single-page portfolio website showcasing my skills, projects, and experience as a DevOps Engineer.
</p>

<p align="center">
  <a href="https://ghadeerkhodr.github.io/my-portfolio/">🌐 Live Demo</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-tech-stack">🛠 Tech Stack</a> •
  <a href="#-getting-started">🚀 Getting Started</a>
</p>

---

## 📸 Preview

> A sleek, dark-themed portfolio with animated gradients, a terminal-style skills section, and glassmorphism project cards.

---

## ✨ Features

| Feature | Description |
|---|---|
| **🎨 Modern Dark Theme** | Carefully crafted dark UI with vibrant cyan/blue accents and subtle gradient mesh backgrounds |
| **⌨️ Typing Animation** | Dynamic typing effect in the hero section cycling through DevOps-related taglines |
| **🖥️ Terminal-Style Skills** | Skills displayed in a terminal emulator UI with command-line aesthetics |
| **🃏 Glassmorphism Cards** | Project cards with frosted-glass effect, gradient thumbnails, and hover animations |
| **📱 Fully Responsive** | Mobile-first design that adapts seamlessly across all screen sizes |
| **🎭 Scroll Animations** | Elements reveal on scroll with staggered delay effects using Intersection Observer |
| **🌌 Animated Background** | Floating gradient blobs creating a dynamic, living mesh background |
| **🧭 Sticky Navbar** | Navigation bar with blur backdrop that activates on scroll with smooth section highlighting |
| **📬 Contact Form** | Client-side validated contact form with real-time feedback |
| **♿ Accessible** | Semantic HTML, ARIA labels, keyboard navigation support, and screen reader friendly |

---

## 🛠 Tech Stack

This is a **zero-dependency**, pure frontend project — no frameworks, no build tools, no package managers required.

| Layer | Technology |
|---|---|
| **Structure** | HTML5 (Semantic) |
| **Styling** | Vanilla CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Fonts** | [Google Fonts](https://fonts.google.com/) — Inter, Outfit, JetBrains Mono |
| **Icons** | Inline SVGs (Feather-style) |
| **Canvas** | HTML5 Canvas API (Hero particle/node background) |

---

## 📁 Project Structure

```
my-portfolio/
├── index.html          # Main HTML — all sections (Hero, About, Skills, Projects, Contact, Footer)
├── css/
│   └── style.css       # Complete stylesheet — design tokens, components, animations, responsive
├── js/
│   └── main.js         # All interactivity — typing effect, canvas, scroll reveals, nav, form
├── assets/
│   └── avatar.webp     # Profile avatar image (with graceful fallback to initials)
├── .gitignore          # Standard ignores for OS, IDE, env, and build files
└── README.md           # You are here!
```

---

## 🚀 Getting Started

### Prerequisites

All you need is a **web browser**. No Node.js, no npm, no build step.

### Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ghadeerkhodr/my-portfolio.git
   cd my-portfolio
   ```

2. **Open in browser:**
   ```bash
   # Option 1: Simply open the file
   open index.html        # macOS
   xdg-open index.html    # Linux
   start index.html       # Windows

   # Option 2: Use a local dev server (recommended for best experience)
   npx serve .
   # or
   python3 -m http.server 8000
   ```

3. **Visit** `http://localhost:8000` (if using a dev server)

---

## 🌐 Deployment

### GitHub Pages (Recommended)

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select `main` branch and `/ (root)` folder
3. Click **Save**
4. Your site will be live at: `https://ghadeerkhodr.github.io/my-portfolio/`

### Other Platforms

Since this is a static site, it can be deployed anywhere:

| Platform | Command / Steps |
|---|---|
| **Netlify** | Drag & drop the folder, or connect the GitHub repo |
| **Vercel** | Import the GitHub repo — zero config needed |
| **Cloudflare Pages** | Connect repo → Build command: _(none)_ → Output: `/` |
| **AWS S3** | Upload files to an S3 bucket with static hosting enabled |

---

## 🎨 Customization Guide

### Change Personal Info

Edit [`index.html`](index.html) to update:
- **Name & Title** — Hero section (`<h1>`, greeting, tagline)
- **About Me** — `#about` section text and stats
- **Projects** — `#projects` section cards (title, description, tags, links)
- **Contact** — `#contact` section (email, LinkedIn, GitHub URLs)
- **Footer** — Copyright text

### Change Colors

The design system uses CSS custom properties defined at the top of [`css/style.css`](css/style.css). Key variables:

```css
:root {
  --bg-primary: #0a0a12;         /* Main background */
  --accent: #00e5ff;             /* Primary accent (cyan) */
  --accent-secondary: #7c4dff;  /* Secondary accent (purple) */
  --text-primary: #e0e0e8;      /* Main text color */
  /* ... and more */
}
```

### Change Typing Text

Edit the `phrases` array in [`js/main.js`](js/main.js) to update the typing animation text:

```javascript
const phrases = [
  "DevOps Engineer",
  "Cloud Architect",
  "Your custom phrase here"
];
```

### Add / Remove Projects

Each project is a `<div class="project-card">` block in [`index.html`](index.html). Copy an existing card and modify the content, or remove cards you don't need.

### Avatar

Replace `assets/avatar.webp` with your own image. The site includes a graceful fallback that displays your initials ("GA") if the image fails to load.

---

## 📄 Key Sections

| Section | Description |
|---|---|
| **Hero** | Full-viewport landing with avatar, name, animated typing tagline, CTA buttons, canvas background, and scroll indicator |
| **About** | Personal introduction with bio text and key stats (Projects, Technologies, Curiosity) |
| **Skills** | Terminal-themed display organized by category — Cloud, Containers, CI/CD, Programming, Monitoring |
| **Projects** | Grid of glassmorphism project cards with gradient thumbnails, descriptions, tech tags, and links |
| **Contact** | Split layout with social links (Email, LinkedIn, GitHub) and a validated contact form |
| **Footer** | Terminal-themed sign-off with copyright |

---

## 🧰 Technical Highlights

- **Zero Dependencies** — No npm packages, no CDN libraries, no build tools
- **CSS Custom Properties** — Fully themeable via CSS variables
- **Intersection Observer API** — Performant scroll-triggered animations
- **HTML5 Canvas** — Generative particle/node animation in the hero section
- **Responsive Design** — Mobile-first with breakpoints at 768px and 480px
- **Graceful Degradation** — Avatar fallback, reduced-motion support
- **SEO Optimized** — Meta tags, Open Graph properties, semantic HTML structure
- **Accessible** — ARIA labels, keyboard navigation, screen reader support

---

## 📝 License

This project is open source and available for personal use and inspiration.

---

<p align="center">
  Built with ♥ and lots of ☕ by <strong>Ghadeer Alkhodr</strong>
</p>

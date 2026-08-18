# Safal Adhikari — Portfolio Site

A static site (HTML/CSS/JS, no build step) styled as a technical support "ticket log" — dark ink on warm parchment, amber/moss status accents, IBM Plex type.

## Files
- `index.html` — all content/structure
- `style.css` — all styling
- `script.js` — nav toggle, scroll reveal, ambient network animation, contact form

## Editing your content
Everything is plain text in `index.html`. Search for the section you want to change:
- Hero name/tagline → `<section class="hero" id="top">`
- About → `id="about"`
- Skills → `id="skills"`
- Work history → `id="log"` (each job is a `<article class="ticket">`)
- Projects → `id="deployments"`
- Certifications/education → `id="credentials"`
- Contact → `id="contact"`

The contact form currently opens the visitor's email client with a pre-filled message (`mailto:`) — no backend required. If you want real form submissions later, sign up free at **formspree.io**, and swap the form's behavior to POST to your Formspree endpoint instead.

## Hosting for free on GitHub Pages

1. Go to **github.com**, create a free account if you don't have one.
2. Click **New repository**. Name it something like `portfolio` (this becomes part of your URL). Set it to **Public**. Click **Create repository**.
3. On the repo page, click **Add file → Upload files**, then drag in `index.html`, `style.css`, and `script.js`. Commit the changes.
4. Go to **Settings → Pages** (left sidebar).
5. Under **Build and deployment → Source**, select **Deploy from a branch**.
6. Under **Branch**, select `main` and folder `/ (root)`. Click **Save**.
7. Wait ~1 minute, then refresh — GitHub will show your live URL:
   `https://<your-username>.github.io/portfolio/`

That's it — free hosting, HTTPS included, no ads. Every time you upload/commit a change to these files, the live site updates automatically within a minute or two.

### Optional: custom domain
If you buy a domain later (e.g. `safaladhikari.com`), you can point it at this GitHub Pages site for free — see **Settings → Pages → Custom domain** in the same repo.

# Project Second Voice

Project Second Voice is a static website for a youth-led digital storytelling platform that amplifies immigrant stories through visual narratives and social media.

## Stack

- HTML
- CSS
- JavaScript
- GitHub Pages for deployment

## Site Structure

- `index.html` - homepage with project overview, impact highlights, and featured stories
- `about.html` - mission, background, and founder section
- `impact.html` - reach metrics and TikTok call to action
- `stories.html` - story archive, focus panel, and submission banner
- `contact.html` - collaboration and media contact information
- `script.js` - story data, archive rendering, navigation, and small interaction logic
- `styles.css` - global styling, layout, responsiveness, and motion

## Story System

Story content is stored in `script.js` as a structured array.

Each story entry includes:

- `order`
- `slug`
- `images`
- `featured`
- `isNewest`
- `title`
- `summary`
- `tiktokLink`
- `link`

The site renders:

- the newest featured story on the homepage
- additional featured stories on the homepage
- the full archive and focus panel on `stories.html`

## Local Preview

Run a simple static server from the project root:

```bash
python3 -m http.server 8000
```

Then open:

- `http://127.0.0.1:8000/index.html`

## Deployment Notes

- The production site is hosted on GitHub Pages.
- All asset references should remain relative so they work in static hosting.
- Before publishing changes, confirm story image paths, TikTok links, and the Google Form submission link still behave as expected.

## Maintenance Notes

- Keep file and folder names case-consistent for GitHub Pages.
- Preserve the existing design direction unless a deliberate design revision is planned.
- If placeholders or unused legacy assets remain in the repo, review them before major cleanup so nothing public breaks.
- Impact metrics currently display 113+ stories shared. TikTok reach metrics should only be updated after a manual post-level audit using visible public TikTok metrics; keep existing TikTok totals unchanged if TikTok is inaccessible or metrics are hidden.

# Business Website Starter (HTML + CSS + JavaScript)

This is a beginner-friendly, modern **responsive** business website.

## What’s included
- `index.html` (Home) with navbar + hero + services preview
- `about.html`
- `services.html`
- `portfolio.html`
- `contact.html` (contact form demo)
- Shared CSS: `styles/styles.css`
- Shared JS: `scripts/main.js` (mobile nav + form validation demo)

## Folder structure
```text
business-website/
  index.html
  about.html
  services.html
  portfolio.html
  contact.html
  styles/
    styles.css
  scripts/
    main.js
```

## How to run locally in VS Code
### Option A (simplest): open the HTML files
1. Open VS Code
2. In VS Code, open the folder: `business-website`
3. Double-click `index.html` to open it in your browser
4. Use the navbar links to open other pages

### Option B (recommended): use a local server
If you want “site-like” behavior, run a local server.

**If you have Node.js installed:**
1. Open a terminal in VS Code (View → Terminal)
2. Run:
   ```bash
   npx serve .
   ```
3. Open the URL shown in the terminal.

## Customize quickly
1. Replace `Your Business` in each HTML file
2. Update hero text in `index.html`
3. Edit service titles/descriptions in `index.html` (and/or `services.html`)
4. Add real project names in `portfolio.html`
5. Update contact details in `contact.html`

## Next step (backend later)
Currently the contact form is a **demo** (it validates inputs and shows a success message).
In the later stage you can connect it to a **Python FastAPI** backend.

## Beginner tips
- If something looks broken, check:
  - CSS link path: `styles/styles.css`
  - JS script path: `scripts/main.js`
- Use browser DevTools (F12) → Console/Network to debug.


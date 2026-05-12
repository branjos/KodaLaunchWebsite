# Koda Launch AI — Website

Static site hosted on GitHub Pages at [kodalaunch.com](https://kodalaunch.com).

## Deploying changes

### 1. Make your HTML edits

Edit any `.html` file as normal.

### 2. Rebuild Tailwind CSS

After any HTML change, regenerate the compiled stylesheet so new utility classes are included:

```
npx tailwindcss -i src/input.css -o tailwind.css --minify
```

### 3. Commit everything and push

Commit both your HTML changes **and** the rebuilt `tailwind.css`, then push to `main`. GitHub Pages deploys automatically.

```
git add .
git commit -m "your message"
git push
```

---

## Local development

Use watch mode so `tailwind.css` rebuilds automatically as you edit:

```
npx tailwindcss -i src/input.css -o tailwind.css --watch
```

Open any `.html` file directly in a browser — no local server needed.

---

## Project structure

```
├── *.html          # All pages
├── src/
│   └── input.css   # Tailwind source (do not link this directly)
├── tailwind.css    # Compiled output — always commit this after rebuilding
├── tailwind.config.js
├── sitemap.xml
├── robots.txt
└── theme.js        # Light/dark theme toggle
```

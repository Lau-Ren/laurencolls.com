# laurencolls.com

Personal website. Links to my resume and contact.

## Stack

- Plain HTML and CSS (no build step)
- GitHub Pages, custom domain `laurencolls.com` (see `CNAME`)

## Develop

```
npm install
npm start
```

## Format

```
npm run format
```

## Deploy

Pushes to `master` run `.github/workflows/deploy.yml`, which checks formatting and publishes to GitHub Pages.

In the repo settings, set Pages source to "GitHub Actions" and the custom domain to `laurencolls.com`.

## Editing content

- Text, links and meta tags: `index.html`
- Styles and colours: `styles/main.css` (variables at the top)
- Resume PDF: `images/`, then update the link in `index.html`

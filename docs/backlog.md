# Sprint Tracker (aka backlog)

Product backlog for CCDP website prototype.

## Backlog

- Adjust CSS styles so that "dashed" classes are no longer necessary, instead replaced with separate "spaced" classes, a la [Eric Meyer's article entitled "Competent Classing"](https://meyerweb.com/eric/thoughts/2004/07/18/competent-classing/)
- Extract components into individual `.css` files as they grow. (For example, `button.css` and `surface.css`)
- Instead of using specific REMs consider using the CSS `calc` function where appropriate
- Come up with better font alias names (see `@TODO` marker in `utilities/tokens.css`)

## Current

- Setup Netlify CMS connection
- Setup basic main pages (About, Get Involved, Elections, Events, and News))
- Create config that shows "Dev" or something similar in page title when in local development

## Next Sprint

- Add i18n via tools like:
  - [Zach Handley's `ez-i18n`](https://github.com/ZachHandley/ez-i18n/blob/main/packages/react/src/index.ts)
  - [Alexandre Fernandez's `astro-i18n`](https://github.com/alexandre-fernandez/astro-i18n)
- Add a carousel for homepage

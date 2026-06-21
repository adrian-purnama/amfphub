#  AMFPHUB Website   GSAP Hero V2

This version keeps the same website you liked, but upgrades only the hero section.

New hero:
- premium  AMFPHUB command-center layout
- workflow map with n8n, SapAi, Convert API, and Your App nodes
- animated SVG connection lines
- bigger, cleaner copy
- proof chips for students, developers, and businesses
- GSAP animations preserved
- huge AMFPHUB footer preserved

## Before publishing
Open `index.html` and replace:

```js
const WHATSAPP_NUMBER = "6280000000000";
```

with your real WhatsApp number in international format, for example `6281234567890`.

## Deploy
Upload this folder to any static host, Caddy/Nginx web root, Cloudflare Pages, Netlify, Vercel, or Dokploy static site.

## Hero text clipping fix
This version removes the minimal hero's dependency on GSAP text-splitting, so the AMFPHUB word stays visible even if the GSAP CDN is blocked or slow.

## Subtle hero flare
This version keeps the hero minimal, but adds a ReactBits-inspired dotted grid, a single animated dotted curve, and a soft orange glow behind the big AMFPHUB word.

## Hero spacing/cards fix
This version moves the minimal hero word higher, loosens the character spacing, and removes default tilt behavior from the What we sell cards so they sit flat until hover.

## Hero gridline version
This version makes the hero text uppercase, removes the extra corner dots, expands the dotted curve across the full screen width, and adds a subtle grid background.

## Centered lines quote version
This version centers the hero again, adds more full-width dotted line decoration, and places a tilted quote on the bottom-right of the AMFPHUB word.

## Centered long quote version
This version forces the hero word to stay centered on full-width screens, keeps the quote pinned to the bottom-right of the word, makes the quote longer, and adds more subtle full-width line decoration.

## Mobile drawer navbar
This version removes the Start Project button from the navbar, changes the language switcher to simple EN / ID text, and adds a mobile drawer menu.

## Navbar duplicate fix
This version adds the missing drawer CSS so the mobile drawer no longer appears as a second nav, and changes EN / ID into selectable text with the current language highlighted.

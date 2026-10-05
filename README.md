# robloxtools.win

A readable, dependency-free BloxLab creator-toolkit website.

## Main source files

- `index.html` contains the fully formatted landing-page markup.
- Each tool directory contains its fully formatted direct-route page.
- `assets/app.js` contains the menu, dialog, and safe demo interactions.
- `assets/styles.css` contains the original visual system, formatted with one declaration per line.

## Local preview

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173`.

The tool pages use a compact single-line field for one non-sensitive sample command. Submitted text is cleared locally and is never executed, stored, or transmitted.

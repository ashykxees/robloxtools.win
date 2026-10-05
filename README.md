# robloxtools.win

A readable, dependency-free BloxLab creator-toolkit website.

## Main source files

- `index.html` contains the shared document shell.
- `assets/app.js` contains the landing page, tool-page content, navigation, and demo behavior.
- `assets/styles.css` contains all responsive styling.
- Each tool directory contains a direct-route `index.html` document.

## Local preview

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173`.

The tool pages use a compact single-line field for one non-sensitive sample command. Submitted text is cleared locally and is never executed, stored, or transmitted.

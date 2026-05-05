# Anti-Adblock-Bypass

A Tampermonkey userscript that bypasses The 3Labs Team's anti-adblock detection and restores full site functionality.

## Features

- 🚫 Removes anti-adblock overlays and modals
- 🔓 Disables scroll locks and page restrictions
- 🔄 Continuous monitoring with MutationObserver for dynamic content

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) for your browser
2. Click [here](https://github.com/itsShiroharu/Anti-Adblock-Bypass/blob/main/antiadblockbypass.user.js) to install the script
3. Or manually copy the `.user.js` file and paste into Tampermonkey's dashboard

## Usage

**Default behavior:** Script runs on all sites (`https://*/*`)

⚠️ **Warning:** Using on all sites may break some websites (blank pages, layout issues). It's recommended to limit the scope.

### Recommended Setup

Edit the `@match` line to target specific sites:

```javascript
// Single site
@match        https://example.com/*

// Multiple sites - add multiple @match lines
@match        https://example.com/*
@match        https://itsshiroharu.github.io/*
```

## How It Works

1. **Removes anti-adblock elements** — Detects and removes overlay divs with high z-index values and adblock warning messages
2. **Restores page functionality** — Re-enables scrolling and visibility by resetting CSS restrictions
3. **Mocks detection functions** — Overrides adblock detection scripts
4. **Continuous monitoring** — Uses MutationObserver to handle dynamically injected content

## Configuration

| Setting | Default | Notes |
|---------|---------|-------|
| `@match` | `https://*/*` | Change to limit to specific domains |
| `@run-at` | `document-start` | Early execution for better detection |
| `@grant` | `none` | No special permissions needed |

## Troubleshooting

**Script isn't working?**
- Check the site's specific anti-adblock implementation — it may require custom selectors
- Open browser console (F12) and manually run `unlockPage()` to test
- Try adjusting the timeout intervals (100ms, 500ms, 1000ms, 2000ms)
- The 3Labs Team's anti-adblock system may updated to bypass this userscript. That means I have to make a change in my code, or you can just [fork](https://github.com/itsShiroharu/Anti-Adblock-Bypass/fork) this repository and do it on your own.

## Limitations

- It may only targets The 3Labs Team's anti-adblock system, It could target other anti-adblock system, but not guaranteed.
- It may not work on sites with custom/obfuscated detection scripts
- Requires Tampermonkey to run (or compatible userscript manager)

## License

[MIT](https://github.com/itsShiroharu/Anti-Adblock-Bypass/blob/main/LICENSE.md)

## Author

[Shengwei Xiong](https://github.com/itsshiroharu)

---

**⚠️ Use responsibly.** This script is for educational purposes.

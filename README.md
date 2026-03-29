# StackCT Tab Renamer

A Chrome extension that renames the browser tab to the current sheet name in [StackCT](https://go.stackct.com), instead of showing the generic project name.

**Example:** Tab shows `A-121 FINISH PLAN` instead of `My Project - StackCT`

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked**
5. Select the folder containing these files

The extension will activate automatically on `go.stackct.com`.

## How It Works

A content script runs on StackCT and reads the currently selected sheet name from the page. It updates the tab title immediately and watches for changes so the title stays in sync as you navigate between sheets.

## Updating

If the extension stops working after a StackCT update, the page element containing the sheet name may have changed. Open DevTools on StackCT, inspect the sheet name element, and update the `SELECTOR` value in `content.js`.

## License

MIT

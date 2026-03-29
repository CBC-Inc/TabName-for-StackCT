// Finds the selected sheet name in StackCT and sets it as the tab title.
// Uses a MutationObserver so it updates whenever you switch sheets.

const SELECTOR = "span.core-select-container-text-content-selected";

function getSheetName() {
  const el = document.querySelector(SELECTOR);
  if (!el) return null;
  return el.textContent.trim();
}

function updateTitle() {
  const sheet = getSheetName();
  if (sheet) {
    document.title = sheet;
  }
}

// Run once on load (in case content is already rendered)
updateTitle();

// Watch for DOM changes — Angular apps render content dynamically
const observer = new MutationObserver(() => {
  updateTitle();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true,
});

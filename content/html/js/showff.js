window.addEventListener('DOMContentLoaded', () => showFF());
// show current font family
function showFF() {
  // 1. Select the target element
  const target = document.getElementById("preview");
  // 2. Get all computed styles for that element
  const computedStyles = window.getComputedStyle(target);
  // 3. Extract the 'font-family' property value
  const fontFamily = computedStyles.getPropertyValue("font-family");
  // 4. Display the result in the 'viewFF' element
  document.getElementById("viewFF").textContent = "Font Family: " + fontFamily;
}

function detectFont(fontName) {
  const target = document.getElementById('status-display');
  const text = "abcdefjhijklmnopqrstuvwxyz0123456789"; // String to measure
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = "72px monospace"; // Use a standard base font

  // Measure the width of the text using a generic fallback
  const baselineWidth = context.measureText(text).width;

  // Measure the width using the font you are checking for
  context.font = `72px "${fontName}", monospace`;
  const testWidth = context.measureText(text).width;

  // If the widths are different, the custom font was successfully used
  // If they are the same, the browser just fell back to monospace
  if (testWidth !== baselineWidth) {
    target.textContent = `available.`;
  } else {
    target.textContent = `NOT AVAILABLE`;
  }
}
/* settings START */

window.addEventListener('DOMContentLoaded', () => showFF());
// show current font family
function showFF() {
  // 1. Select the target element
  const target = document.getElementById("previewbm");
  // 2. Get all computed styles for that element
  const computedStyles = window.getComputedStyle(target);
  // 3. Extract the 'font-family' property value
  const fontFamily = computedStyles.getPropertyValue("font-family");
  // 4. Display the result in the 'viewFF' element
  document.getElementById("viewFF").textContent = "Font Family: " + fontFamily;
}

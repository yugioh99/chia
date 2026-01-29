
// Initialize a variable to track how far back we've gone
// This needs to persist across page loads in the iframe (e.g., using sessionStorage)
let backCount = parseInt(sessionStorage.getItem('iframeBackCount')) || 0;

function safeIframeBack() {
  if (window.history.length > 1) {
    backCount++;
    sessionStorage.setItem('iframeBackCount', backCount);
    window.history.back();
  }
}

function safeIframeForward() {
  // Only go forward if we have previously gone back
  if (backCount > 0) {
    backCount--;
    sessionStorage.setItem('iframeBackCount', backCount);
    window.history.forward();
  } else {
    console.log("No forward history in iframe. Parent forward blocked.");
  }
}

// Reset tracker if the user navigates to a new page normally (forward)
window.addEventListener('pageshow', (event) => {
  if (event.persisted) return; // Ignore if coming from cache
  // If we land on a new page that isn't from a back/forward action, 
  // you might want to reset backCount here depending on your app's logic.
});








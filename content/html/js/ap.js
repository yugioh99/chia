

document.addEventListener('click', function(e) {
    // 1. CLICK-OUTSIDE LOGIC
    // Finds the currently open local footnote
    const openFootnote = document.querySelector('.tn.tdbs');
    if (openFootnote) {
        const isInside = openFootnote.contains(e.target);
        // Check if the click was not on the button that opens it
        const isTrigger = e.target.closest('[onclick*="tdb"]');

        if (!isInside && !isTrigger) {
            openFootnote.classList.remove('tdbs');
            // If the click closed a footnote, we stop further action
            return; 
        }
    }

    // 2. LINK REPLACEMENT LOGIC
    // Intercepts regular links to prevent them from adding to history
    const link = e.target.closest('a');
    
    // Condition: It's a link, has an href, isn't a footnote toggle, 
    // and doesn't open in a new tab.
    if (link && link.href && !link.getAttribute('onclick') && link.target !== '_blank') {
        e.preventDefault(); // Stop standard navigation
        location.replace(link.href); // Overwrite history entry
    }
}, true);

// 3. LOCAL FOOTNOTE CLOSE BUTTON
function closeLocalFootnote() {
    document.querySelectorAll('.tn.tdbs').forEach(fn => fn.classList.remove('tdbs'));
}

// indexed links escape to the main page
function escapeAndClean(url) {
    // 1. Move the parent back one step to remove the 'acon' history entry
    window.top.history.back();

    // 2. Use a tiny delay to ensure the history clears before navigating away
    setTimeout(() => {
        window.top.location.href = url;
    }, 100);
}





document.addEventListener('click', function(e) {
    // ONLY the Click-Outside logic for local footnotes remains here
    const openFootnote = document.querySelector('.tn.tdbs');
    if (openFootnote) {
        if (!openFootnote.contains(e.target) && !e.target.closest('[onclick*="tdb"]')) {
            openFootnote.classList.remove('tdbs');
        }
    }
}, true);

// Close footnotes in the appendix iframe
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



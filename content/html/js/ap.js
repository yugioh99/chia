

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

// indexed link open in top and clean appendix history
function escapeAndClean(url) {
    // 1. Tell the parent to handle its own UI closing logic via popstate
    window.top.history.back();

    // 2. Wait for the popstate cleanup to finish before redirecting
    // A 200ms delay is usually enough to let the browser process the history change.
    setTimeout(() => {
        window.top.location.href = url;
    }, 200);
}




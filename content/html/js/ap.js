

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

function escapeAndClean(url) {
    // 1. Safety Check: Stop if the URL is empty, null, or just spaces
    if (!url || url.trim() === "" || url === "undefined") {
        console.error("Navigation failed: No URL provided.");
        return false;
    }

    // 2. Set the cleanup flag for the Parent Page
    sessionStorage.setItem('pending_acon_cleanup', 'true');
    
    // 3. Navigate the parent window immediately
    window.top.location.href = url;
}







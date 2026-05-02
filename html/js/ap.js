

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


// indexed links open in top in same domain, no external links
function escapeAndClean(url) {
    if (!url || url.trim() === "" || url === "undefined") return;

    // Save the exact time the link was clicked
    localStorage.setItem('pending_acon_cleanup', Date.now());
    
    window.top.location.href = url;
}









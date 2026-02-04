

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
    // 1. Set a flag that tells the parent to clean itself up later
    sessionStorage.setItem('pending_acon_cleanup', 'true');
    
    // 2. Navigate away immediately
    window.top.location.href = url;
}





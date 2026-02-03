/* settings START */

/* change font family */
window.addEventListener('DOMContentLoaded', () => sFF());
function sFF(fontFamily){
  var elements = document.getElementsByClassName("pFF")
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.fontFamily=fontFamily;}
  // if provided color, set color to LS
  if (fontFamily) window.localStorage.setItem('fontFamily', fontFamily);
  // if no provided color, check LS for color, and if no color in LS, fail silently
  else if (!(fontFamily = window.localStorage.getItem('fontFamily'))) return;
  // update the page
  var elements = document.getElementsByClassName("pFF")
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.fontFamily=fontFamily;}
}

/* change font size */
window.addEventListener('DOMContentLoaded', () => sFS());
function sFS(fontSize){
  var elements = document.getElementsByClassName("pFS")
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.fontSize=fontSize;}
  // if provided color, set color to LS
  if (fontSize) window.localStorage.setItem('fontSize', fontSize);
  // if no provided color, check LS for color, and if no color in LS, fail silently
  else if (!(fontSize = window.localStorage.getItem('fontSize'))) return;
  // update the page
  var elements = document.getElementsByClassName("pFS")
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.fontSize=fontSize;}
}

/* change font color */
window.addEventListener('DOMContentLoaded', () => sFC());
function sFC(color){
  var elements = document.getElementsByClassName("pFC")
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.color=color;}
  // if provided color, set color to LS
  if (color) window.localStorage.setItem('Color', color);
  // if no provided color, check LS for color, and if no color in LS, fail silently
  else if (!(color = window.localStorage.getItem('Color'))) return;
  // update the page
  var elements = document.getElementsByClassName("pFC")
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.color=color;}
}

/* change page background color */
window.addEventListener('DOMContentLoaded', () => sBgC());
function sBgC(color){
  var elements = document.getElementsByClassName("pBgC")
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.background=color;}
  // if provided color, set color to LS
  if (color) window.localStorage.setItem('bgColor', color);
  // if no provided color, check LS for color, and if no color in LS, fail silently
  else if (!(color = window.localStorage.getItem('bgColor'))) return;
  // update the page
  var elements = document.getElementsByClassName("pBgC")
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.background=color;}
} 

/* change page border color */
window.addEventListener('DOMContentLoaded', () => sBdC());
function sBdC(color){
  var elements = document.getElementsByClassName("pBdC")
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.borderColor=color;}
  // if provided color, set color to LS
  if (color) window.localStorage.setItem('bdColor', color);
  // if no provided color, check LS for color, and if no color in LS, fail silently
  else if (!(color = window.localStorage.getItem('bdColor'))) return;
  // update the page
  var elements = document.getElementsByClassName("pBdC")
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.borderColor=color;}
}

/* change math border color */
window.addEventListener('DOMContentLoaded', () => smBdC());
function smBdC(color){
  var elements = document.getElementsByClassName("mBdC")
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.borderColor=color;}
  // if provided color, set color to LS
  if (color) window.localStorage.setItem('mbdColor', color);
  // if no provided color, check LS for color, and if no color in LS, fail silently
  else if (!(color = window.localStorage.getItem('mbdColor'))) return;
  // update the page
  var elements = document.getElementsByClassName("mBdC")
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.borderColor=color;}
}
/* settings END */

/* navigation START */

// toggle display block, inline-block & flex by id 
function tdb(id) {
    // 1. Try to find the element on the parent page
    let el = document.getElementById(id);

    // 2. If not found, look inside the ai iframe
    if (!el) {
        const iframe = document.getElementById('ai');
        if (iframe && iframe.contentDocument) {
            el = iframe.contentDocument.getElementById(id);
        }
    }

    // 3. Toggle the class if the element was found
    if (el) {
        el.classList.toggle('tdbs');
    }
}

function tdib(id) {
  const el = document.getElementById(id); 
  el.classList.toggle("tdibs");
}
function tdf(id) {
  const el = document.getElementById(id); 
  el.classList.toggle("tdfs");
}

// bookmark show and hide 
function bmddbtn() {
  document.getElementById("bmddid").classList.toggle("bmshow");
  document.getElementById("bmddid2").classList.toggle("bmshow");
}

// show only one settings sub menu or glossary appendix link
function o(idToShow) {
  const elementsToHide = document.getElementsByClassName('ssm');
  const elementToShow = document.getElementById(idToShow);
  for (const el of elementsToHide) {
  el.style.display = 'none';}
  elementToShow.style.display = 'block';
}

// bookmark filter 
function bmfilter() {
  // 1. Get query and split into keywords (AND logic)
  const query = document.getElementById('bmInput').value.toLowerCase();
  const keywords = query.split(' ').filter(word => word.length > 0);
  const items = document.querySelectorAll('#bmddid li');

  items.forEach(item => {
  const text = item.getAttribute('data-tags').toLowerCase();
  
  // 2. Logic: Ensure EVERY keyword is found in the item's tags (AND)
  // To change to OR, use keywords.some() instead of .every()
  const isMatch = keywords.every(word => text.includes(word));

  // 3. Update visibility
  item.style.display = isMatch ? "list-item" : "none";
  });
}

// appendix filter 
function apSearch() {
  // 1. Get query and split into keywords (AND logic)
  const query = document.getElementById('apsearchBar').value.toLowerCase();
  const keywords = query.split(' ').filter(word => word.length > 0);
  const items = document.querySelectorAll('#apitemList li');

  items.forEach(item => {
  const text = item.getAttribute('data-tags').toLowerCase();
  
  // 2. Logic: Ensure EVERY keyword is found in the item's tags (AND)
  // To change to OR, use keywords.some() instead of .every()
  const isMatch = keywords.every(word => text.includes(word));

  // 3. Update visibility
  item.style.display = isMatch ? "list-item" : "none";
  });
}
/* navigation END */

/* lazyload START 
put id in link onclick=vi('img id goes here')
use data-src & this function will change it to src */
function vi(id) {
  var el = document.getElementById(id); 
  el.setAttribute('src',el.getAttribute('data-src'));
}

/* change background image START */
function changeBackground(imageName) {
  document.body.style.backgroundImage = `url(${imageName})`;
  localStorage.setItem('backgroundImage', imageName);
}
// Load the saved background image on page load
window.onload = function() {
  var savedImage = localStorage.getItem('backgroundImage');
  if (savedImage) {
      changeBackground(savedImage);
  }
};

/* save and view bookmarks START */
// save bm 1
function saveBm() {
  localStorage.setItem("currentUrl", window.location.href); 
  updateLabels(); // Refresh text immediately
}
// go to bm1
function goToBm() {
  let savedBm = localStorage.getItem('currentUrl');
  if (savedBm) {
  window.location.href = savedBm;
  } else {
  // Handle case where no saved page exists (optional)
  alert('No saved page found!');}
}
// save bm 2
function saveBm2() {
  localStorage.setItem("currenttwoUrl", window.location.href); 
  updateLabels(); // Refresh text immediately
}
// go to bm2
function goToBm2() {
  let savedBmtwo = localStorage.getItem('currenttwoUrl');
  if (savedBmtwo) {
  window.location.href = savedBmtwo;
  } else {
  // Handle case where no saved page exists (optional)
  alert('No saved page found!');}
}
// save bm 3
function saveBm3() {
    localStorage.setItem("currentthreeUrl", window.location.href); 
    updateLabels(); // Refresh text immediately
}
// go to bm 3
function goToBm3() {
    let savedBmthree = localStorage.getItem('currentthreeUrl');
    if (savedBmthree) {
        window.location.href = savedBmthree;
    } else {
        alert('No saved page found!');
    }
}
// get file and anchor name
function getCleanLabel(url) {
    if (!url) return "Empty Slot";
    try {
        const u = new URL(url);
        // 1. Get filename and remove '.html'
        let filename = u.pathname.split('/').pop().replace('.html', '');
        
        // 2. If there is an anchor, add a space before it
        let anchor = u.hash ? ' ' + u.hash : '';
        
        return filename + anchor;
    } catch (e) {
        return "Invalid Link";
    }
}
// Function to update all 3 dropdown labels
function updateLabels() {
    const bmMap = {
        'label-bm1': 'currentUrl',
        'label-bm2': 'currenttwoUrl',
        'label-bm3': 'currentthreeUrl'
    };

    for (let [id, storageKey] of Object.entries(bmMap)) {
        const url = localStorage.getItem(storageKey);
        const element = document.getElementById(id);
        if (url && element) {
            element.textContent = getCleanLabel(url);
        }
    }
}
// Update labels when page loads
window.addEventListener('DOMContentLoaded', updateLabels);
/* save and view bookmarks END */

/* for go back button in appendix and settings */
// save page before going to ap or set
function sp() {
  localStorage.setItem('savedPage', window.location.href);
}
// function to go to saved page
function goBack() {
  let savedUrl = localStorage.getItem('savedPage');
  if (savedUrl) {
  window.location.href = savedUrl;
  } else {
  // Handle case where no saved page exists (optional)
  alert('No saved page found!');}
}


// Appendix and footnote sync
let appendixStartIndex = 0;

// 1. Open Appendix
function apOpen(url) {
    // Close any open parent footnotes first
    const openFootnotes = document.querySelectorAll('.tn.tdbs');
    openFootnotes.forEach(fn => tdb(fn.id));

    // Mark the history length BEFORE we add the appendix state
    appendixStartIndex = window.history.length;

    tdb('acon');
    
    // Use replace for the first load to keep history clean
    document.getElementById('ai').contentWindow.location.replace(url);
    
    // Push the state that the hardware back button will eventually "hit" to close the div
    window.history.pushState({ iframeOpen: true }, "");
}

// 2. Close Button (One-click "Leap" to Parent)
function closeAcon() {
    const acon = document.getElementById('acon');
    if (acon.classList.contains('tdbs')) {
        // Calculate the jump to skip all iframe sub-pages
        const currentLength = window.history.length;
        const delta = (currentLength - appendixStartIndex + 1) * -1;
        
        // This jumps past all iframe history directly to the parent state
        window.history.go(delta);
    }
}

// 3. Footnote Toggle (Back button support)
function tdbFootnote(id) {
    const el = document.getElementById(id);
    tdb(id);
    if (el.classList.contains('tdbs')) {
        window.history.pushState({ footnoteOpen: true }, "");
    }
}

// 4. Global Popstate (The hardware back button "Watcher")
window.addEventListener('popstate', function(event) {
    const acon = document.getElementById('acon');
    
    // This executes when the hardware back button exhausts the iframe history
    // OR when closeAcon() forces the jump.
    if (acon.classList.contains('tdbs')) {
        tdb('acon');
        document.getElementById('ai').src = 'about:blank';
    }

    // Always close parent footnotes on back
    const openFootnotes = document.querySelectorAll('.tn.tdbs');
    openFootnotes.forEach(fn => tdb(fn.id));
});


function restoreDefaults() {
  localStorage.clear(); 
  window.location.reload();
}

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
  const el = document.getElementById(id); 
  el.classList.toggle("tdbs");
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
// set bm 1
function saveBm() {
  localStorage.setItem("currentUrl", window.location.href); 
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

// set bm 2
function saveBm2() {
  localStorage.setItem("currenttwoUrl", window.location.href); 
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
// 8888888888888888888888888888


// appendix and footnotes
let appendixSteps = 0;

// 1. Open Appendix
function apOpen(url) {
    const acon = document.getElementById('acon');
    if (!acon.classList.contains('tdbs')) {
        tdb('acon');
        window.history.pushState({ type: 'appendix' }, "");
        appendixSteps = 1; // 1 for the panel state
    }
    document.getElementById('ai').src = url;
}

// 2. Track internal iframe navigation
document.getElementById('ai').onload = function() {
    const acon = document.getElementById('acon');
    // Only increment if we are navigating inside an ALREADY open appendix
    if (acon.classList.contains('tdbs') && appendixSteps > 0) {
        appendixSteps++;
    }
};

// 3. The Smart Popstate Listener (Handles Browser Back)
window.addEventListener('popstate', function(event) {
    const state = event.state;
    const acon = document.getElementById('acon');

    // Handle Footnotes
    if (!state || state.type !== 'footnote') {
        document.querySelectorAll('.fn').forEach(el => el.classList.remove('tdbs'));
    }

    // Handle Appendix: Only hide if we have backed out of the 'appendix' state
    if (!state || (state.type !== 'appendix' && state.type !== 'footnote')) {
        if (acon.classList.contains('tdbs')) {
            tdb('acon');
            document.getElementById('ai').contentWindow.location.replace('about:blank');
            appendixSteps = 0; // Reset counter
        }
    } else if (state.type === 'appendix') {
        // If the user used the physical back button to navigate iframe history,
        // we decrement our counter so the "Close" button remains accurate.
        if (appendixSteps > 1) appendixSteps--;
    }
});

// 4. THE ONE-CLICK CLOSE (For your "Close" Button)
function closeAcon() {
    if (appendixSteps > 0) {
        // Jump back the exact number of steps to skip all iframe history
        window.history.go(-appendixSteps);
        // Note: popstate will fire after this and handle the tdb('acon') hiding
    }
}


// Escape key exit
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const acon = document.getElementById('acon');
        const anyFn = document.querySelector('.fn.tdbs');
        if (acon.classList.contains('tdbs') || anyFn) {
            window.history.back();
        }
    }
});




// 888888888888888888888
function restoreDefaults() {
  localStorage.clear(); 
  window.location.reload();
}

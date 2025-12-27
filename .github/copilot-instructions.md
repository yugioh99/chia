# Copilot Instructions for Chia Trading System

## Project Overview
**Chia Trading System (CTS)** is an educational HTML/CSS/JavaScript web application about trading concepts and price-time analysis. It serves as a multi-page learning resource with persistent user preferences.

## Architecture

### Core Structure
- **Single-page entry points**: HTML files in `content/html/` (e.g., `home.html`, `settings.html`, `intro.html`)
- **Appendix pages**: `content/html/ap/` contains 29 specialized topic pages (alg.html, bid.html, eco.html, ptc.html, etc.)
- **Shared assets**: 
  - `content/html/css/style1.css` - unified styling for all pages
  - `content/html/js/script1.js` - core functionality (settings, navigation, preferences)
  - `content/html/js/glossary1.js` - glossary/terminology features
- **Resources**: `content/img/` (background images, favicons, topic-specific charts) and `content/video/`

### Key Design Patterns

**Preference Persistence via localStorage**:
- Classes `pFF` (font-family), `pFS` (font-size), `pFC` (font-color), `pBgC` (background-color), `pBdC` (border-color)
- Functions in `script1.js` (`sFF()`, `sFS()`, `sFC()`, `sBgC()`, `sBdC()`) auto-load from localStorage on page load and save when user changes settings
- Example: `window.addEventListener('DOMContentLoaded', () => sFF());` loads saved font on every page

**Navigation Patterns**:
- Dropdown menus: `.lddcontainer` (location/page nav) and `.bmddcontainer` (sections/bookmarks)
- JavaScript toggle functions: `tdb()`, `tdib()`, `tdf()` toggle display properties by element ID
- All pages use relative paths (e.g., `href="home.html"`) within `content/html/`

**Header Variants**:
- `.hcmain` - dark header (home, intro, user-manual)
- `.hcapx` - dark red header (appendix pages)
- `.hcsettings` - light blue header (settings)
- Settings page (`settings.html`) is unique—implements bookmark save/load (`saveBm()`, `goToBm()`) and search filtering (`bmfilter()`)

## Development Workflow

**No build system**: This is a static HTML project. Edit files directly in `content/html/`; no compilation needed.

**Settings page is special**: Always check `settings.html` when modifying preference/customization logic. It orchestrates all localStorage interactions via JavaScript event listeners.

**Asset linking**: 
- Pages in `content/html/` reference assets with `../`: `href="css/style1.css"`, `href="../img/favicons/favicon.ico"`
- Appendix pages in `ap/` use same relative paths

## Important Patterns & Conventions

**Class-Based Styling Over IDs**: Preference system relies on class selectors (pFF, pFS, etc.); avoid breaking these contracts.

**Stateful Menus**: Navigation dropdowns show/hide via CSS hover (`.lddsh:hover .lddcontent {display: block;}`). Ensure `display: none` default and proper z-indexing (z-index: 2).

**Responsive Design**: CSS uses `@media screen and (min-width: 1001px)` for breakpoints. Body width caps at 60vw on desktop; full-width on mobile.

**Glossary & Indexing**: `glossary1.js` is deferred on pages needing terminology features (home.html, etc.); not all pages load it. Check page `<head>` before assuming glossary is available.

## File Dependencies (Don't Break These)
- All HTML pages → `css/style1.css` (required for core styling)
- All HTML pages → `js/script1.js` (required for settings/nav/preferences)
- `home.html`, `intro.html`, others → `js/glossary1.js` (optional, only if `<script>` tag present)
- Appendix pages (`ap/*.html`) follow same pattern; they must import correct CSS/JS paths

## Testing Considerations
- Test preference persistence: Set font/color in settings, reload page, verify saved values
- Test navigation: Verify all dropdowns open/close, links work across page depth (main pages vs. appendix)
- Test responsive: Check layout at ≤1000px (mobile) and ≥1001px (desktop)
- No console errors: Run in browser DevTools when making JS changes

## When Adding New Features
1. If modifying settings/preferences: Update `script1.js` pattern (class name, localStorage key, load/save function)
2. If adding new page: Copy header/nav structure from existing page (home.html or appendix); ensure CSS/JS paths are relative
3. If adding appendix topic: Place in `ap/`, use `.hcapx` header class, follow naming convention (2-3 letter abbreviation)

// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Introduction to DOM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// DOM stands for Document Object Model
// It is a programming interface for HTML and XML documents
// It allows us to manipulate the HTML elements

// DOM Tree =========================================================================
// 1. document.documentElement
// 2. document.head
// 3. document.body
// 4. document.title

// How to get DOM element ============================================================

// 1. document.getElementById
// 2. document.getElementsByClassName
// 3. document.getElementsByTagName
// 4. document.querySelector
// 5. document.querySelectorAll

// How to create DOM element ===========================================================

// 1. document.createElement
// 2. document.createAttribute
// 3. document.createTextNode

// How to set DOM element properties =================================================

// 1. element.setAttribute
// 2. element.classList
// 3. element.style
// 4. element.textContent
// 5. element.innerHTML
// 6. element.prepend
// 7. element.append
// 8. element.before
// 9. element.after
// 10. element.remove

// HTML Collection =============================================================

// 1. document.forms
// 2. document.links
// 3. document.images
// 4. document.scripts

// Events in JavaScript =================================================================

// 1. Mouse Events
// 2. Keyboard Events
// 3. Form Events
// 4. Window Events
// 5. Document Events
// 6. Custom Events
// 7. Animation Events
// 8. Clipboard Events
// 9. Device Events
// 10. Drag and Drop Events
// 11. Focus Events
// 12. Input Events
// 13. Media Events
// 14. Network Events
// 15. Storage Events
// 16. Touch Events
// 17. UI Events
// 18. Wheel Events
// 19. video Events

// Mouse Events +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.onmousedown
// 2. element.onmouseup
// 3. element.onclick
// 4. element.ondblclick
// 5. element.onmouseover
// 6. element.onmouseout
// 7. element.onmousemove
// 8. element.onwheel
// 9. element.oncontextmenu
// 10. element.onscroll

// Keyboard Events +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// 1. element.onkeydown
// 2. element.onkeyup
// 3. element.onkeypress

// Form Events +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.onsubmit
// 2. element.onreset

// Window Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. window.onload
// 2. window.onunload
// 3. window.onresize
// 4. window.onfocus
// 5. window.onblur

// Document Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. document.oncopy
// 2. document.oncut
// 3. document.onpaste

// Animation Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.onanimationstart
// 2. element.onanimationend
// 3. element.onanimationiteration
// 4. element.ontransitionstart
// 5. element.ontransitionend

// Clipboard Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.oncopy
// 2. element.oncut
// 3. element.onpaste

// Device Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.ondeviceorientation
// 2. element.ondevicemotion

// Drag and Drop Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.ondrag
// 2. element.ondragstart
// 3. element.ondragend
// 4. element.ondragover
// 5. element.ondragenter
// 6. element.ondragleave
// 7. element.ondrop

// Focus Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.onfocus
// 2. element.onblur

// Input Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.oninput

// Media Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.onpause
// 2. element.onplay
// 3. element.ontimeupdate
// 4. element.onvolumechange

// Network Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.onabort
// 2. element.onerror
// 3. element.onload
// 4. element.onloadstart
// 5. element.onloadend
// 6. element.onprogress
// 7. element.onsuspend
// 8. element.onstalled
// 9. element.onoffline
// 10. element.ononline
// 11. element.ontoggle

// Storage Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.onstorage

// Touch Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.ontouchstart
// 2. element.ontouchmove
// 3. element.ontouchend
// 4. element.ontouchcancel

// UI Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.onselect
// 2. element.onchange

// Wheel Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.onwheel

// Video Events +-+-+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// 1. element.onpause
// 2. element.onplay
// 3. element.ontimeupdate
// 4. element.onvolumechange
// 5. element.ontoggle
// 6. element.ontimeupdate

// DOM Events =================================================================
// 1. element.addEventListener
// 2. element.removeEventListener
// 3. element.dispatchEvent
// Example
// element.addEventListener("click", () => {
//     console.log("clicked");
// })

// element.removeEventListener("click", () => {
//     console.log("clicked");
// })
// })

// element.dispatchEvent(new Event("click"))
// element.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }))

// How to get and set attributes ===============================================
// 1. element.getAttribute
// 2. element.setAttribute
// 3. element.removeAttribute


// How to get and set text content ===============================================
// 1. element.textContent
// 2. element.innerHTML

// Parent and Child Elements =================================================
// 1. element.parentElement
// 2. element.children
// 3. element.firstElementChild
// 4. element.lastElementChild
// 5. element.previousElementSibling
// 6. element.nextElementSibling
// 7. element.closest
// 8. element.querySelector
// 9. element.querySelectorAll

// How to get and set styles ===============================================
// 1. element.style
// 2. element.cssText
// 2. element.classList


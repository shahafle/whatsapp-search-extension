'use strict'
window.addEventListener('DOMContentLoaded', onAppMount)

let intervalId = null

function onAppMount() {
   intervalId = setInterval(addFocusListener, 1000)
}

function addFocusListener() {
   const elSearchBar = document.querySelector('#side .selectable-text')
   console.log("elSearchBar", elSearchBar)
   if (!elSearchBar) return
   clearInterval(intervalId)
   intervalId = null
   // elSearchBar.style.backgroundColor="#f1f1f1"
   elSearchBar.addEventListener("input", function (ev) {
      const text = ev.target.innerHTML
      console.log("text", text)
      if (!text) elSearchBar.focus()
   })
}
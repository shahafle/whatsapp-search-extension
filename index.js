'use strict'
window.addEventListener('DOMContentLoaded', onAppMount)

let intervalId = null

function onAppMount() {
   intervalId = setInterval(addFocusListener, 1000)
}

function addFocusListener() {
   const elSearchBar = document.querySelector('#side .selectable-text')
   if (!elSearchBar) return
   clearInterval(intervalId)
   intervalId = null
   elSearchBar.addEventListener("input", function (ev) {
      const text = ev.target.innerHTML
      if (!text) elSearchBar.focus()
   })
}
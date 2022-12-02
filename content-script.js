let intervalId = null

intervalId = setInterval(addFocusListener, 1000)

function addFocusListener() {
   const elSearchBar = document.querySelector('#side .selectable-text')
   if (!elSearchBar) return
   clearInterval(intervalId)
   intervalId = null
   elSearchBar.addEventListener("input", focus)
   window.onunload = () => { elSearchBar.removeEventListener('input', focus) }

   function focus(ev) {
      const text = ev.target.innerHTML
      if (!text) setTimeout(() => {
         elSearchBar.focus()
      }, 1)
   }
}
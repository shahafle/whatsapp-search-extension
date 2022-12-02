'use strict'
// window.addEventListener('DOMContentLoaded', onAppMount)
onAppMount()
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
      if (!text) setTimeout(() => {
         elSearchBar.focus()
      }, 1)
   })
}

let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

chrome.scripting.executeScript({
   target: { tabId: tab.id },
   function: fillInputs,
   args: [startingDay, endDay, clockInHour, clockOutHour]
});

//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

// chrome.scripting.executeScript({
//    target: { tabId: tab.id },
//    function: fillInputs,
//    args: [startingDay, endDay, clockInHour, clockOutHour]
// });
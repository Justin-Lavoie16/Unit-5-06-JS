/* Created by: Justin Lavoie *
 Created on: nov 2022 * 
*/

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-06-JS/sw.js", {
    scope: "/Unit-5-06-JS/",
  })
}

"use strict"

function calculate() {
  let counter = 0
  let answer = 0

  const first = parseInt(document.getElementById("pay").value)
  const second = parseInt(document.getElementById("pay2").value)

  while (counter < second) {
    answer = first + answer
    counter++
  }
  
  document.getElementById("answers").innerHTML =
    first + " x " + second + " = " + answer
}
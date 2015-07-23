var onResize = require('./index.js')
var objectAssign = require('object-assign')

var element = document.createElement('div')
document.body.appendChild(element)

objectAssign(element.style, {
  width: '400px',
  height: '400px',
  border: '1px solid #000',
  margin: '1em auto',
  padding: '1em',
  'text-align': 'center',
  'font-family': 'Helvetica, sans-serif'
})

onResize(element, function () {
  element.textContent = 'Resized to ' + element.offsetWidth + 'px / ' + element.offsetHeight + 'px'
})

setInterval(function () {
  if (Math.random() > .5) {
    element.style.width = Math.random() * 500 + 'px'
  } else {
    element.style.height = Math.random() * 500 + 'px'
  }
}, 100)

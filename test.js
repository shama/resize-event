var onResize = require('./index.js')
var test = require('tape')
var objectAssign = require('object-assign')

test('got resize event', function (t) {
  t.plan(1)
  var expected = parseInt(Math.random() * 1000, 10) + 'px'
  var div = document.createElement('div')
  document.body.appendChild(div)
  onResize(div, function () {
    t.equal(div.style.width, expected, 'triggered on width change')
    t.end()
  })
  div.style.width = expected
})

test('with center positioned element', function (t) {
  t.plan(1)
  var expected = parseInt(Math.random() * 1000, 10) + 'px'
  var div = document.createElement('div')
  objectAssign(div.style, {
    position: 'relative',
    width: '50em',
    height: '20em',
    top: '50%',
    left: '50%',
    padding: '3em',
    'margin-left': '-25em',
    'margin-top': '-10em',
    overflow: 'hidden',
    'transition-duration': '3s'
  })
  document.body.appendChild(div)
  onResize(div, function () {
    t.equal(div.style.width, expected, 'triggered on width change')
    t.end()
  })
  div.style.width = expected
})

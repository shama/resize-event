var onResize = require('./index.js')
var test = require('tape')

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

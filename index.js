require('mutationobserver-shim')
var win
if (typeof window !== 'undefined') {
  win = window
} else if (typeof global !== 'undefined') {
  win = global
} else if (typeof self !== 'undefined') {
  win = self
} else {
  win = {}
}
var onresize = ('ResizeObserver' in win) ? resizeObserverOnResize : mutationObserverOnResize
module.exports = onresize
onresize.default = onresize
function mutationObserverOnResize (target, callback) {
  function makeid (el) {
    return [target.style.width, target.style.height, target.clientWidth, target.clientHeight].join('')
  }
  var last = makeid(target)
  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var mutation = mutations[i]
      if (mutation.attributeName !== 'style') continue
      var now = makeid(target)
      if (now !== last) {
        last = now
        callback()
        break
      }
    }
  })
  observer.observe(target, {
    attributes: true,
    childList: false,
    characterData: false
  })
  return observer
}
function resizeObserverOnResize (target, callback) {
  var observer = new ResizeObserver(callback)
  observer.observe(target)
  return observer
}
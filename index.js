require('mutationobserver-shim')
module.exports = function (target, callback) {
  var lastWidth = target.offsetWidth
  var lastHeight = target.offsetHeight
  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var mutation = mutations[i]
      if (mutation.attributeName !== 'style') continue
      if (target.offsetWidth !== lastWidth || target.offsetHeight !== lastHeight) {
        lastWidth = target.offsetWidth
        lastHeight = target.offsetHeight
        callback()
        break
      }
    }
  })
  observer.observe(target, { attributes: true })
  return observer
}

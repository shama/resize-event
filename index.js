require('mutationobserver-shim')
module.exports = function (target, callback) {
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

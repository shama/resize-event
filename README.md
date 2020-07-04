# resize-event
Detect resize on an element without polling or iframes

[![build status](https://secure.travis-ci.org/shama/resize-event.svg)](https://travis-ci.org/shama/resize-event)
[![NPM version](https://badge.fury.io/js/resize-event.svg)](https://badge.fury.io/js/resize-event)

If the browser supports [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) this will use that otherwise it will fallback to a [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
to detect changes to the `style` attribute of an element and then compares the
width/height to check if it has changed.

A polyfill is provided for `MutationObserver` which will then use polling on really old browsers.

## usage

```js
import onResize from "resize-event"

// Create or select an element, must be in the DOM
const element = document.createElement('div')
document.body.appendChild(element)

// Bind the event
const observer = onResize(element, () => {
  console.log('element was resized', element.offsetWidth, element.offsetHeight)
})

// Trigger the event
element.style.width = '500px'

// Later disconnect the event
observer.disconnect()
```

## install

```shell
npm install resize-event --save
```

# license

(c) 2020 Kyle Robinson Young. MIT License

# resize-event
Detect resize on an element without polling or iframes

[![build status](https://secure.travis-ci.org/shama/resize-event.svg)](https://travis-ci.org/shama/resize-event)
[![NPM version](https://badge.fury.io/js/resize-event.svg)](https://badge.fury.io/js/resize-event)

This uses a [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
to detect changes to the `style` attribute of an element.

A polyfill is provided which will use polling on older browsers.

## usage

```js
var onResize = require('resize-event')

// Create or select an element, must be in the DOM
var element = document.createElement('div')
document.body.appendChild(element)

// Bind the event
onResize(element, function () {
  console.log('element was resized')
})

// Trigger the event
element.style.width = '500px'
```

## install

```shell
npm install resize-event --save
```

Then use a CommonJS compatible module bundler to `require('resize-event')`.

# license
(c) 2015 Kyle Robinson Young. MIT License

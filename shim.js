// shim.js
if (typeof global.setImmediate === 'undefined') {
    global.setImmediate = (fn, ...args) => setTimeout(() => fn(...args), 0);
  }
  
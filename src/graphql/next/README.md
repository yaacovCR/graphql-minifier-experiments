# Conclusion

When rendering the page it looks like anything using `globalThis` does in fact not work.

[./outcome.png]

When looking at the bundle itself in `.next/server/app/page.js` it looks like it successfully
replaces `process.env.NODE_ENV === 'production'` with `'production' === 'production'` but leaves
the `typeof` check in place. We can fix this by adding a replace plugin similar to vite, this
means that `globalThis` by default is not safe in turbopack/webpack.

The produced code:

```js
let n=!function(){try{return!0}catch(e){return!1}}()?"does not work":"works";
let i=globalThis.process&&"production"===globalThis.process.env.NODE_ENV?"works":"does not work";
let o=globalThis.process&&globalThis.process.env&&"production"===globalThis.process.env.NODE_ENV?"works":"does not work";
let a=void 0!==globalThis.process&&"production"===globalThis.process.env.NODE_ENV?"works":"does not work"
let l="undefined"!=typeof process?"works":"does not work"
let p="undefined"!=typeof process&&process.env?"works":"does not work";
```

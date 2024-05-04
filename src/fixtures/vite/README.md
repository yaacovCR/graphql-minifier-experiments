# Conclusion

The output can be seen in `dist/assets/*.js`, you can see that `vite` in fact does
not replace anything as it's tailored to replace `import.meta.ENV` by default.
This makes it so that all options will lead to safety, apart from plain
access like `process.env.NODE_ENV === 'production'`, we have to check
the presence of `process` first.

We can however make this work by adding a plugin to replace code, an example
would be the following

```js
module.exports = mergeConfig(config, {
  define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      'typeof process': JSON.stringify('object'),
  },
});
```

In the replacement approach we would have to remove all of the `globalThis` ones though to prevent
it becoming `globalThis."production"`.

With that trick the one actually being stripped from the bundle correctly becomes

```js
export const processExperiment = (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') ? 'works' : 'does not work';
```

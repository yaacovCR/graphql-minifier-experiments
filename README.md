# Outcome

By default in `node` the process variable will be defined so it's irrelevant
to check this. In browser-like environments like `cloudflare` and modern bundlers
like the ones you can find in `src/fixtures` it's important to go for safety and
give folks the option to strip this out of their bundle. In the `README`
of every one of these fixtures you can find the conclusion

- [ESBuild](./src/fixtures/esbuild/README.md)
- [Next](./src/fixtures/next/README.md)
- [Vite](./src/fixtures/vite/README.md)
- [Wrangler](./src/fixtures/wrangler/README.md)

To me the above conclusions and the given that it works in Node.JS hints to me that
using either `typeof process !== 'undefined' && process.env.NODE_ENV === 'production'`
is the safest. We can add additional safety for browsers by adding the `process.env`
check in the middle to prevent `id="process"` from throwing a spanner, however
the replace plugins could also take care of that. 

## Addition

There is one more thing to be said here and that's that most of the above experiments
will fail towards the `development` branch if they do not use a way to replace this. In
`ESBuild` and `wrangler` there is no way to replace a `typeof` check meaning that they
will _always_ use the development check unless they use something to pre-bundle like
`rollup` which can leverage expression replacement.

A safe-by-default fix for this could be to switch from guarding `production` to guarding
`development` which would make `production` the default and give everyone a much faster
experience when using `graphql.js`.

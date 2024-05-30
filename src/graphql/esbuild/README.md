# Conclusion

The output can be seen in `output.js` we can see that ESBuild by default replaces the
`process.env.NODE_ENV === 'production` checks with `false` even though we set the env to
`production` this.

There is no way to truely eliminate the branch as it does not check the function return like
terser does and it has no way to replace `typeof process`. This does however mean that leveraging
`typeof process !== 'undefined' && process.env.NODE_ENV === 'target'` is safe here because
we're guarding sufficiently.

import replace from '@rollup/plugin-replace';

export default {
  define: {
    'globalThis.process': JSON.stringify(true),
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
}
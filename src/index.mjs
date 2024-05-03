import { minifyWithESBuild } from './minifiers/esbuild.mjs'
import { minifyWithSwc } from './minifiers/swc.mjs'
import { minifyWithTerser } from './minifiers/terser.mjs'

const fixtures = [
  `if (globalThis.process.env.NODE_ENV === 'production') { console.log('production') }`,
  `if (globalThis.process && globalThis.process.env.NODE_ENV === 'production') { console.log('production') }`,
  `if (globalThis.process && globalThis.process.env && globalThis.process.env.NODE_ENV === 'production') { console.log('production') }`,
  `if (typeof globalThis.process !== 'undefined' && globalThis.process.env.NODE_ENV === 'production') { console.log('production') }`,
  `if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') { console.log('production') }`,
  `if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production') { console.log('production') }`,
]

function main() {
  for (const fixture of fixtures) {
    console.log(fixture)
    console.log('esbuild:\n\n')
    console.log(minifyWithESBuild(fixture))
    console.log('---\n\n')
    console.log('swc:\n\n')
    console.log(minifyWithSwc(fixture))
    console.log('---\n\n')
    console.log('terser:\n\n')
    console.log(minifyWithTerser(fixture))
    console.log('---\n\n')
  }
}

main();

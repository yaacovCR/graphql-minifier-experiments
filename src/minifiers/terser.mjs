import { minify_sync } from 'terser';

export function minifyWithTerser(code) {
  const result = minify_sync(code);
  return result.code;
}

import swc from '@swc/core';

export function minifyWithSwc(code) {
  const result = swc.transformSync(code, {
    minify: true
  });
  return result.code;
}


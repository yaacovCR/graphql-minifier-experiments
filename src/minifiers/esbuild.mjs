import esbuild from 'esbuild';

export function minifyWithESBuild(code) {
  const result = esbuild.transformSync(code);
  return result.code;
}
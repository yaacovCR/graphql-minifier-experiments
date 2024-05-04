// src/index.js
var src_default = {
  async fetch(request, env, ctx) {
    return new Response(`
		<div>
    <h1>Experiments</h1>
    <h2>tryExperiment</h2>
    <p>${tryExperiment}</p>
    <h2>plainGlobalThisWithProcessExperiment</h2>
    <p>${plainGlobalThisWithProcessExperiment}</p>
    <h2>plainGlobalThisWithProcessaAndEnvExperiment</h2>
    <p>${plainGlobalThisWithProcessaAndEnvExperiment}</p>
    <h2>plainGlobalThisWIthTypeofProcessExperiment</h2>
    <p>${plainGlobalThisWIthTypeofProcessExperiment}</p>
    <h2>processExperiment</h2>
    <p>${processExperiment}</p>
    <h2>processWithEnvCheckExperiemnt</h2>
    <p>${processWithEnvCheckExperiemnt}</p>
  </div>
		`);
  }
};
function isProduction() {
  try {
    return false;
  } catch (e) {
    return false;
  }
}
var tryExperiment = isProduction() ? "works" : "does not work";
var plainGlobalThisWithProcessExperiment = globalThis.process && globalThis.process.env.NODE_ENV === "production" ? "works" : "does not work";
var plainGlobalThisWithProcessaAndEnvExperiment = globalThis.process && globalThis.process.env && globalThis.process.env.NODE_ENV === "production" ? "works" : "does not work";
var plainGlobalThisWIthTypeofProcessExperiment = typeof globalThis.process !== "undefined" && globalThis.process.env.NODE_ENV === "production" ? "works" : "does not work";
var processExperiment = typeof process !== "undefined" && false ? "works" : "does not work";
var processWithEnvCheckExperiemnt = typeof process !== "undefined" && process.env && false ? "works" : "does not work";
export {
  src_default as default
};
//# sourceMappingURL=index.js.map

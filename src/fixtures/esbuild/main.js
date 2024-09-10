function isProduction() {
  try {
    return process.env.NODE_ENV === 'production'
  } catch (e) {
    return false
  }
}

export const tryExperiment = isProduction() ? 'works' : 'does not work'
// This one will not work in vite and crash when running in the browser
// export const plainGlobalThisExperiment = (globalThis.process.env.NODE_ENV === 'production') ? 'works' : 'does not work';
export const plainGlobalThisWithProcessExperiment = (globalThis.process && globalThis.process.env.NODE_ENV === 'production') ? 'works' : 'does not work';
export const plainGlobalThisWithProcessaAndEnvExperiment = (globalThis.process && globalThis.process.env && globalThis.process.env.NODE_ENV === 'production') ? 'works' : 'does not work';
export const plainGlobalThisWIthTypeofProcessExperiment = (typeof globalThis.process !== 'undefined' && globalThis.process.env.NODE_ENV === 'production') ? 'works' : 'does not work';
export const processExperiment = (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') ? 'works' : 'does not work';
export const processWithEnvCheckExperiemnt = (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production') ? 'works' : 'does not work';
export const flipDefault = globalThis.process == null || (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'test') ? 'works' : 'does not work';
export const flipDefaultWithoutFlippingGlobalThisProcess = !(globalThis.process != null && (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')) ? 'works' : 'does not work';

document.querySelector('#app').innerHTML = `
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
    <h2>flipDefault</h2>
    <p>${flipDefault}</p>
    <h2>flipDefaultWithoutFlippingGlobalThisProcess</h2>
    <p>${flipDefaultWithoutFlippingGlobalThisProcess}</p>
  </div>
`

/** Conclusion: for vite, process does not work by default, however import.meta.env works by default. */

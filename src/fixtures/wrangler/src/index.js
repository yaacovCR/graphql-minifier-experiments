/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
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
	},
};

function isProduction() {
  try {
    return process.env.NODE_ENV === 'production'
  } catch (e) {
    return false
  }
}

const tryExperiment = isProduction() ? 'works' : 'does not work'
// This one will not work in vite and crash
// const plainGlobalThisExperiment = (globalThis.process.env.NODE_ENV === 'production') ? 'works' : 'does not work';
const plainGlobalThisWithProcessExperiment = (globalThis.process && globalThis.process.env.NODE_ENV === 'production') ? 'works' : 'does not work';
const plainGlobalThisWithProcessaAndEnvExperiment = (globalThis.process && globalThis.process.env && globalThis.process.env.NODE_ENV === 'production') ? 'works' : 'does not work';
const plainGlobalThisWIthTypeofProcessExperiment = (typeof globalThis.process !== 'undefined' && globalThis.process.env.NODE_ENV === 'production') ? 'works' : 'does not work';
const processExperiment = (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') ? 'works' : 'does not work';
const processWithEnvCheckExperiemnt = (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production') ? 'works' : 'does not work';

(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();var p={},c={};function l(){try{return!0}catch{return!1}}const d=l()?"works":"does not work",u=globalThis.process?"works":"does not work",h=globalThis.process&&p?"works":"does not work",a=typeof globalThis.process<"u"?"works":"does not work",f=typeof process<"u"?"works":"does not work",m=typeof process<"u"&&c?"works":"does not work";document.querySelector("#app").innerHTML=`
  <div>
    <h1>Experiments</h1>
    <h2>tryExperiment</h2>
    <p>${d}</p>
    <h2>plainGlobalThisWithProcessExperiment</h2>
    <p>${u}</p>
    <h2>plainGlobalThisWithProcessaAndEnvExperiment</h2>
    <p>${h}</p>
    <h2>plainGlobalThisWIthTypeofProcessExperiment</h2>
    <p>${a}</p>
    <h2>processExperiment</h2>
    <p>${f}</p>
    <h2>processWithEnvCheckExperiemnt</h2>
    <p>${m}</p>
  </div>
`;

import{n as b,s as h}from"./scheduler.82c67a52.js";const e=[];function d(o,l=b){let i;const n=new Set;function r(t){if(h(o,t)&&(o=t,i)){const c=!e.length;for(const s of n)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(i=l(r,f)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var a;const p=((a=globalThis.__sveltekit_acttkh)==null?void 0:a.base)??"/portfolio";var u;const k=((u=globalThis.__sveltekit_acttkh)==null?void 0:u.assets)??p;export{k as a,p as b,d as w};

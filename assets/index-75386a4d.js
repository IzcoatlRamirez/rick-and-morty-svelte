var ue=Object.defineProperty;var le=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R=(e,t,n)=>(le(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(c){if(c.ep)return;c.ep=!0;const o=n(c);fetch(c.href,o)}})();function j(){}function Z(e){return e()}function z(){return Object.create(null)}function P(e){e.forEach(Z)}function ee(e){return typeof e=="function"}function te(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let B;function D(e,t){return e===t?!0:(B||(B=document.createElement("a")),B.href=t,e===B.href)}function fe(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function I(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function L(){return M(" ")}function G(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function de(e){return Array.from(e.childNodes)}function H(e,t){t=""+t,e.data!==t&&(e.data=t)}let V;function A(e){V=e}const O=[],J=[];let N=[];const Q=[],he=Promise.resolve();let K=!1;function pe(){K||(K=!0,he.then(ne))}function T(e){N.push(e)}const F=new Set;let E=0;function ne(){if(E!==0)return;const e=V;do{try{for(;E<O.length;){const t=O[E];E++,A(t),me(t.$$)}}catch(t){throw O.length=0,E=0,t}for(A(null),O.length=0,E=0;J.length;)J.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];F.has(n)||(F.add(n),n())}N.length=0}while(O.length);for(;Q.length;)Q.pop()();K=!1,F.clear(),A(e)}function me(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}function ge(e){const t=[],n=[];N.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),N=t}const q=new Set;let x;function _e(){x={r:0,c:[],p:x}}function $e(){x.r||P(x.c),x=x.p}function S(e,t){e&&e.i&&(q.delete(e),e.i(t))}function U(e,t,n,r){if(e&&e.o){if(q.has(e))return;q.add(e),x.c.push(()=>{q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function W(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ye(e){e&&e.c()}function re(e,t,n){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),T(()=>{const o=e.$$.on_mount.map(Z).filter(ee);e.$$.on_destroy?e.$$.on_destroy.push(...o):P(o),e.$$.on_mount=[]}),c.forEach(T)}function ce(e,t){const n=e.$$;n.fragment!==null&&(ge(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function be(e,t){e.$$.dirty[0]===-1&&(O.push(e),pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,r,c,o,a=null,m=[-1]){const g=V;A(e);const s=e.$$={fragment:null,ctx:[],props:o,update:j,not_equal:c,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:z(),dirty:m,skip_bound:!1,root:t.target||g.$$.root};a&&a(s.root);let v=!1;if(s.ctx=n?n(e,t.props||{},(f,_,...d)=>{const $=d.length?d[0]:_;return s.ctx&&c(s.ctx[f],s.ctx[f]=$)&&(!s.skip_bound&&s.bound[f]&&s.bound[f]($),v&&be(e,f)),_}):[],s.update(),v=!0,P(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const f=de(t.target);s.fragment&&s.fragment.l(f),f.forEach(C)}else s.fragment&&s.fragment.c();t.intro&&S(e.$$.fragment),re(e,t.target,t.anchor),ne()}A(g)}class se{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){ce(this,1),this.$destroy=j}$on(t,n){if(!ee(n))return j;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(t){this.$$set&&!fe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ve="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ve);function we(e){let t,n,r,c,o,a,m=e[0].name+"",g,s,v,f=e[0].species+"",_;return{c(){t=b("div"),n=b("img"),o=L(),a=b("h1"),g=M(m),s=L(),v=b("h3"),_=M(f),D(n.src,r=e[0].image)||y(n,"src",r),y(n,"alt",c=e[0].name),y(t,"class","character")},m(d,$){I(d,t,$),p(t,n),p(t,o),p(t,a),p(a,g),p(t,s),p(t,v),p(v,_)},p(d,[$]){$&1&&!D(n.src,r=d[0].image)&&y(n,"src",r),$&1&&c!==(c=d[0].name)&&y(n,"alt",c),$&1&&m!==(m=d[0].name+"")&&H(g,m),$&1&&f!==(f=d[0].species+"")&&H(_,f)},i:j,o:j,d(d){d&&C(t)}}}function xe(e,t,n){let{character:r}=t;return e.$$set=c=>{"character"in c&&n(0,r=c.character)},[r]}class Ee extends se{constructor(t){super(),oe(this,t,xe,we,te,{character:0})}}function X(e,t,n){const r=e.slice();return r[5]=t[n],r}function Y(e){let t,n;return t=new Ee({props:{character:e[5]}}),{c(){ye(t.$$.fragment)},m(r,c){re(t,r,c),n=!0},p(r,c){const o={};c&1&&(o.character=r[5]),t.$set(o)},i(r){n||(S(t.$$.fragment,r),n=!0)},o(r){U(t.$$.fragment,r),n=!1},d(r){ce(t,r)}}}function Oe(e){let t,n,r,c,o,a,m,g,s,v,f,_,d,$,w=W(e[0]),u=[];for(let i=0;i<w.length;i+=1)u[i]=Y(X(e,w,i));const ie=i=>U(u[i],1,1,()=>{u[i]=null});return{c(){t=b("h1"),t.textContent="Rick and morty",n=L(),r=b("div"),c=b("div"),o=b("button"),a=M("Previous"),g=L(),s=b("button"),s.textContent="Next",v=L(),f=b("div");for(let i=0;i<u.length;i+=1)u[i].c();y(t,"class","title"),y(o,"class","btn"),o.disabled=m=e[1]==1,y(s,"class","btn"),y(c,"class","btns"),y(f,"class","grid"),y(r,"class","container")},m(i,h){I(i,t,h),I(i,n,h),I(i,r,h),p(r,c),p(c,o),p(o,a),p(c,g),p(c,s),p(r,v),p(r,f);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(f,null);_=!0,d||($=[G(o,"click",e[3]),G(s,"click",e[2])],d=!0)},p(i,[h]){if((!_||h&2&&m!==(m=i[1]==1))&&(o.disabled=m),h&1){w=W(i[0]);let l;for(l=0;l<w.length;l+=1){const k=X(i,w,l);u[l]?(u[l].p(k,h),S(u[l],1)):(u[l]=Y(k),u[l].c(),S(u[l],1),u[l].m(f,null))}for(_e(),l=w.length;l<u.length;l+=1)ie(l);$e()}},i(i){if(!_){for(let h=0;h<w.length;h+=1)S(u[h]);_=!0}},o(i){u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)U(u[h]);_=!1},d(i){i&&(C(t),C(n),C(r)),ae(u,i),d=!1,P($)}}}function Ne(e,t,n){let r=[],c=1;async function o(){const s=await(await fetch("https://rickandmortyapi.com/api/character?page="+c)).json();n(0,r=s.results)}o();function a(){n(1,c++,c),o()}function m(){n(1,c--,c),o()}return[r,c,a,m]}class Pe extends se{constructor(t){super(),oe(this,t,Ne,Oe,te,{})}}new Pe({target:document.getElementById("app")});

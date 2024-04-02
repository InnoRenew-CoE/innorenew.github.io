var X=Object.defineProperty;var Y=(t,e,n)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var P=(t,e,n)=>(Y(t,typeof e!="symbol"?e+"":e,n),n);import{n as x,r as v,i as j,f as E,h as L,j as q,k as Z,l as tt,m as et,p as nt,q as z,v as it,w as rt,x as st}from"./scheduler.3azYSKjP.js";const M=typeof window<"u";let T=M?()=>window.performance.now():()=>Date.now(),D=M?t=>requestAnimationFrame(t):x;const g=new Set;function F(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&D(F)}function H(t){let e;return g.size===0&&D(F),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let k=!1;function at(){k=!0}function lt(){k=!1}function ct(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ft(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let l=0;l<e.length;l++){const u=e[l];u.claim_order!==void 0&&a.push(u)}e=a}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let a=0;a<e.length;a++){const l=e[a].claim_order,u=(r>0&&e[n[r]].claim_order<=l?r+1:ct(1,r,_=>e[n[_]].claim_order,l))-1;i[a]=n[u]+1;const o=u+1;n[o]=a,r=Math.max(o,r)}const c=[],s=[];let f=e.length-1;for(let a=n[r]+1;a!=0;a=i[a-1]){for(c.push(e[a-1]);f>=a;f--)s.push(e[f]);f--}for(;f>=0;f--)s.push(e[f]);c.reverse(),s.sort((a,l)=>a.claim_order-l.claim_order);for(let a=0,l=0;a<s.length;a++){for(;l<c.length&&s[a].claim_order>=c[l].claim_order;)l++;const u=l<c.length?c[l]:null;t.insertBefore(s[a],u)}}function ot(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ut(t){const e=W("style");return e.textContent="/* empty */",_t(U(t),e),e.sheet}function _t(t,e){return ot(t.head||t,e),e.sheet}function dt(t,e){if(k){for(ft(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){k&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function W(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function Bt(){return I(" ")}function Pt(){return I("")}function Rt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function mt(t){return Array.from(t.childNodes)}function ht(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function G(t,e,n,i,r=!1){ht(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const f=t[s];if(e(f)){const a=n(f);return a===void 0?t.splice(s,1):t[s]=a,r||(t.claim_info.last_index=s),f}}for(let s=t.claim_info.last_index-1;s>=0;s--){const f=t[s];if(e(f)){const a=n(f);return a===void 0?t.splice(s,1):t[s]=a,r?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,f}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function pt(t,e,n,i){return G(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const f=r.attributes[s];n[f.name]||c.push(f.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function It(t,e,n){return pt(t,e,n,W)}function $t(t,e){return G(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Ot(t){return $t(t," ")}function qt(t,e){e=""+e,t.data!==e&&(t.data=e)}function zt(t,e){t.value=e??""}function Lt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function yt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Mt(t,e){return new t(e)}const A=new Map;let C=0;function gt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function xt(t,e){const n={stylesheet:ut(e),rules:{}};return A.set(t,n),n}function J(t,e,n,i,r,c,s,f=0){const a=16.666/i;let l=`{
`;for(let $=0;$<=1;$+=a){const p=e+(n-e)*c($);l+=$*100+`%{${s(p,1-p)}}
`}const u=l+`100% {${s(n,1-n)}}
}`,o=`__svelte_${gt(u)}_${f}`,_=U(t),{stylesheet:d,rules:m}=A.get(_)||xt(_,t);m[o]||(m[o]=!0,d.insertRule(`@keyframes ${o} ${u}`,d.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${o} ${i}ms linear ${r}ms 1 both`,C+=1,o}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),C-=r,C||wt())}function wt(){D(()=>{C||(A.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),A.clear())})}let w;function K(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function S(t,e,n){t.dispatchEvent(yt(`${e?"intro":"outro"}${n}`))}const b=new Set;let y;function Tt(){y={r:0,c:[],p:y}}function Ft(){y.r||v(y.c),y=y.p}function vt(t,e){t&&t.i&&(b.delete(t),t.i(e))}function Ht(t,e,n,i){if(t&&t.o){if(b.has(t))return;b.add(t),y.c.push(()=>{b.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Q={duration:0};function Ut(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,s,f,a=0;function l(){s&&R(t,s)}function u(){const{delay:_=0,duration:d=300,easing:m=L,tick:h=x,css:$}=r||Q;$&&(s=J(t,0,1,d,_,m,$,a++)),h(0,1);const p=T()+_,N=p+d;f&&f.abort(),c=!0,E(()=>S(t,!0,"start")),f=H(B=>{if(c){if(B>=N)return h(1,0),S(t,!0,"end"),l(),c=!1;if(B>=p){const O=m((B-p)/d);h(O,1-O)}}return c})}let o=!1;return{start(){o||(o=!0,R(t),j(r)?(r=r(i),K().then(u)):u())},invalidate(){o=!1},end(){c&&(l(),c=!1)}}}function Vt(t,e,n){const i={direction:"out"};let r=e(t,n,i),c=!0,s;const f=y;f.r+=1;let a;function l(){const{delay:u=0,duration:o=300,easing:_=L,tick:d=x,css:m}=r||Q;m&&(s=J(t,1,0,o,u,_,m));const h=T()+u,$=h+o;E(()=>S(t,!1,"start")),"inert"in t&&(a=t.inert,t.inert=!0),H(p=>{if(c){if(p>=$)return d(0,1),S(t,!1,"end"),--f.r||v(f.c),!1;if(p>=h){const N=_((p-h)/o);d(1-N,N)}}return c})}return j(r)?K().then(()=>{r=r(i),l()}):l(),{end(u){u&&"inert"in t&&(t.inert=a),u&&r.tick&&r.tick(1,0),c&&(s&&R(t,s),c=!1)}}}function Wt(t){t&&t.c()}function Gt(t,e){t&&t.l(e)}function Nt(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),E(()=>{const c=t.$$.on_mount.map(it).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...c):v(c),t.$$.on_mount=[]}),r.forEach(E)}function bt(t,e){const n=t.$$;n.fragment!==null&&(et(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){t.$$.dirty[0]===-1&&(rt.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Jt(t,e,n,i,r,c,s=null,f=[-1]){const a=nt;z(t);const l=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:q(),dirty:f,skip_bound:!1,root:e.target||a.$$.root};s&&s(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(o,_,...d)=>{const m=d.length?d[0]:_;return l.ctx&&r(l.ctx[o],l.ctx[o]=m)&&(!l.skip_bound&&l.bound[o]&&l.bound[o](m),u&&Et(t,o)),_}):[],l.update(),u=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){at();const o=mt(e.target);l.fragment&&l.fragment.l(o),o.forEach(V)}else l.fragment&&l.fragment.c();e.intro&&vt(t.$$.fragment),Nt(t,e.target,e.anchor),lt(),Z()}z(a)}class Kt{constructor(){P(this,"$$");P(this,"$$set")}$destroy(){bt(this,1),this.$destroy=x}$on(e,n){if(!j(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const At="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(At);export{Vt as A,zt as B,kt as C,Kt as S,Ht as a,I as b,It as c,mt as d,W as e,$t as f,V as g,Ot as h,Jt as i,jt as j,dt as k,qt as l,Pt as m,Ft as n,Dt as o,Lt as p,Tt as q,Mt as r,Bt as s,vt as t,Wt as u,Gt as v,Nt as w,bt as x,Rt as y,Ut as z};

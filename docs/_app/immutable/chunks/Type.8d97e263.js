import{S as z,i as E,s as S,k as u,l as p,m,h as o,n as i,b as h,H as f,q as g,r as w,M as _,e as d,V as T,a as q,c as A,p as v,u as N}from"./index.9da4bb58.js";import{b as y}from"./paths.b5551af1.js";function k(r,t,n){const l=r.slice();return l[1]=t[n],l}function U(r){let t,n;return{c(){t=u("span"),n=g("Unknown"),this.h()},l(l){t=p(l,"SPAN",{class:!0});var e=m(t);n=w(e,"Unknown"),e.forEach(o),this.h()},h(){i(t,"class","unknown svelte-a9mlzu")},m(l,e){h(l,t,e),_(t,n)},p:f,d(l){l&&o(t)}}}function V(r){let t,n=r[0],l=[];for(let e=0;e<n.length;e+=1)l[e]=b(k(r,n,e));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=d()},l(e){for(let a=0;a<l.length;a+=1)l[a].l(e);t=d()},m(e,a){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,a);h(e,t,a)},p(e,a){if(a&1){n=e[0];let s;for(s=0;s<n.length;s+=1){const c=k(e,n,s);l[s]?l[s].p(c,a):(l[s]=b(c),l[s].c(),l[s].m(t.parentNode,t))}for(;s<l.length;s+=1)l[s].d(1);l.length=n.length}},d(e){T(l,e),e&&o(t)}}}function b(r){let t,n=r[1]+"",l,e,a;return{c(){t=u("a"),l=g(n),e=q(),this.h()},l(s){t=p(s,"A",{href:!0,class:!0});var c=m(t);l=w(c,n),e=A(c),c.forEach(o),this.h()},h(){i(t,"href",a=y+"/types/"+r[1]),i(t,"class","svelte-a9mlzu"),v(t,"--color",`var(--color-${r[1]})`)},m(s,c){h(s,t,c),_(t,l),_(t,e)},p(s,c){c&1&&n!==(n=s[1]+"")&&N(l,n),c&1&&a!==(a=y+"/types/"+s[1])&&i(t,"href",a),c&1&&v(t,"--color",`var(--color-${s[1]})`)},d(s){s&&o(t)}}}function $(r){let t;function n(a,s){return a[0]&&a[0].length>0?V:U}let l=n(r),e=l(r);return{c(){t=u("div"),e.c(),this.h()},l(a){t=p(a,"DIV",{class:!0});var s=m(t);e.l(s),s.forEach(o),this.h()},h(){i(t,"class","svelte-a9mlzu")},m(a,s){h(a,t,s),e.m(t,null)},p(a,[s]){l===(l=n(a))&&e?e.p(a,s):(e.d(1),e=l(a),e&&(e.c(),e.m(t,null)))},i:f,o:f,d(a){a&&o(t),e.d()}}}function C(r,t,n){let{types:l=[]}=t;return l=[l].flat(),r.$$set=e=>{"types"in e&&n(0,l=e.types)},[l]}class I extends z{constructor(t){super(),E(this,t,C,$,S,{types:0})}}export{I as T};
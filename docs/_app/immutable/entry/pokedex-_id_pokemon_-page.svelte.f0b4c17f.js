import{S as P,i as B,s as G,k as b,a as C,q as E,y as H,l as w,m as S,c as k,r as I,h as d,z as J,R as T,n as u,b as A,M as i,A as O,u as M,g as R,d as j,B as D,I as F,J as K}from"../chunks/index.9da4bb58.js";import{T as L}from"../chunks/Type.8d97e263.js";import{p as N}from"../chunks/store.a32f6c00.js";function Q(r){let s,n,l,c,t,f=r[0].name+"",g,$,m,q,h=r[0].id+"",y,v,o,p;return o=new L({props:{types:r[0].type}}),{c(){s=b("section"),n=b("img"),c=C(),t=b("h1"),g=E(f),$=C(),m=b("span"),q=E("#"),y=E(h),v=C(),H(o.$$.fragment),this.h()},l(e){s=w(e,"SECTION",{class:!0});var a=S(s);n=w(a,"IMG",{src:!0,alt:!0,class:!0}),c=k(a),t=w(a,"H1",{class:!0});var _=S(t);g=I(_,f),$=k(_),m=w(_,"SPAN",{});var z=S(m);q=I(z,"#"),y=I(z,h),z.forEach(d),_.forEach(d),a.forEach(d),v=k(e),J(o.$$.fragment,e),this.h()},h(){T(n.src,l="https://www.serebii.net/dungeonsky/headshot/"+r[0].id+".png")||u(n,"src",l),u(n,"alt",""),u(n,"class","svelte-1bqnz85"),u(t,"class","svelte-1bqnz85"),u(s,"class","svelte-1bqnz85")},m(e,a){A(e,s,a),i(s,n),i(s,c),i(s,t),i(t,g),i(t,$),i(t,m),i(m,q),i(m,y),A(e,v,a),O(o,e,a),p=!0},p(e,[a]){(!p||a&1&&!T(n.src,l="https://www.serebii.net/dungeonsky/headshot/"+e[0].id+".png"))&&u(n,"src",l),(!p||a&1)&&f!==(f=e[0].name+"")&&M(g,f),(!p||a&1)&&h!==(h=e[0].id+"")&&M(y,h);const _={};a&1&&(_.types=e[0].type),o.$set(_)},i(e){p||(R(o.$$.fragment,e),p=!0)},o(e){j(o.$$.fragment,e),p=!1},d(e){e&&d(s),e&&d(v),D(o,e)}}}function U(r,s,n){let l;F(r,N,t=>n(1,l=t));let{data:c}=s;return K(N,l=[...c.type].map(t=>`--color-${t}`),l),r.$$set=t=>{"data"in t&&n(0,c=t.data)},[c]}class Y extends P{constructor(s){super(),B(this,s,U,Q,G,{data:0})}}export{Y as default};

import{S as X,i as Y,s as Z,k,a as C,q as D,l as v,m as b,h as p,c as x,r as V,n as E,J as L,b as I,G as h,u as M,g as y,H as S,K as U,L as ee,e as te,v as ie,f as re,d as O,N as he,y as J,z as K,A as Q,B as W,M as se,O as me,o as de}from"../chunks/index.4cec945a.js";import{f as T,S as ge}from"../chunks/ArrowUp.svelte_svelte_type_style_lang.d5fc16c5.js";import{_ as ke}from"../chunks/preload-helper.41c905a7.js";function ve(c){let e,l,i;return{c(){e=k("p"),l=D("FREE"),this.h()},l(t){e=v(t,"P",{class:!0});var a=b(e);l=V(a,"FREE"),a.forEach(p),this.h()},h(){E(e,"class","text-sm")},m(t,a){I(t,e,a),h(e,l)},p:S,i(t){i||U(()=>{i=ee(e,T,{}),i.start()})},o:S,d(t){t&&p(e)}}}function be(c){let e,l,i,t,a,s=c[1]&&oe(c);return{c(){e=k("p"),l=D("OCCUPIED"),t=C(),s&&s.c(),a=te(),this.h()},l(r){e=v(r,"P",{class:!0});var n=b(e);l=V(n,"OCCUPIED"),n.forEach(p),t=x(r),s&&s.l(r),a=te(),this.h()},h(){E(e,"class","text-sm")},m(r,n){I(r,e,n),h(e,l),I(r,t,n),s&&s.m(r,n),I(r,a,n)},p(r,n){r[1]?s?(s.p(r,n),n&2&&y(s,1)):(s=oe(r),s.c(),y(s,1),s.m(a.parentNode,a)):s&&(s.d(1),s=null)},i(r){i||U(()=>{i=ee(e,T,{}),i.start()}),y(s)},o:S,d(r){r&&p(e),r&&p(t),s&&s.d(r),r&&p(a)}}}function oe(c){let e,l,i,t,a=c[1].start_time+"",s,r,n,f,_,o=c[1].parking_fee+"",u,d;return{c(){e=k("p"),l=D("Parked at: "),i=k("br"),t=C(),s=D(a),n=C(),f=k("p"),_=D("Fee: "),u=D(o),this.h()},l(m){e=v(m,"P",{class:!0});var g=b(e);l=V(g,"Parked at: "),i=v(g,"BR",{}),t=x(g),s=V(g,a),g.forEach(p),n=x(m),f=v(m,"P",{class:!0});var A=b(f);_=V(A,"Fee: "),u=V(A,o),A.forEach(p),this.h()},h(){E(e,"class","text-sm mt-4 text-center"),E(f,"class","text-sm")},m(m,g){I(m,e,g),h(e,l),h(e,i),h(e,t),h(e,s),I(m,n,g),I(m,f,g),h(f,_),h(f,u)},p(m,g){g&2&&a!==(a=m[1].start_time+"")&&M(s,a),g&2&&o!==(o=m[1].parking_fee+"")&&M(u,o)},i(m){r||U(()=>{r=ee(e,T,{}),r.start()}),d||U(()=>{d=ee(f,T,{}),d.start()})},o:S,d(m){m&&p(e),m&&p(n),m&&p(f)}}}function Ee(c){let e,l,i,t,a=c[0].name+"",s,r;function n(o,u){return o[0].occupied?be:ve}let f=n(c),_=f(c);return{c(){e=k("div"),l=k("div"),i=C(),t=k("p"),s=D(a),r=C(),_.c(),this.h()},l(o){e=v(o,"DIV",{class:!0});var u=b(e);l=v(u,"DIV",{class:!0}),b(l).forEach(p),i=x(u),t=v(u,"P",{class:!0});var d=b(t);s=V(d,a),d.forEach(p),r=x(u),_.l(u),u.forEach(p),this.h()},h(){E(l,"class","flipper absolute w-full h-full -z-10 svelte-164a57p"),L(l,"bg-primary",!c[0].occupied),L(l,"bg-error",c[0].occupied),L(l,"occupied",c[0].occupied),E(t,"class","text-lg font-bold"),E(e,"class","rounded-lg px-4 py-12 flex flex-col items-center justify-center w-full relative overflow-hidden")},m(o,u){I(o,e,u),h(e,l),h(e,i),h(e,t),h(t,s),h(e,r),_.m(e,null)},p(o,[u]){u&1&&L(l,"bg-primary",!o[0].occupied),u&1&&L(l,"bg-error",o[0].occupied),u&1&&L(l,"occupied",o[0].occupied),u&1&&a!==(a=o[0].name+"")&&M(s,a),f===(f=n(o))&&_?_.p(o,u):(_.d(1),_=f(o),_&&(_.c(),y(_,1),_.m(e,null)))},i(o){y(_)},o:S,d(o){o&&p(e),_.d()}}}function we(c,e,l){let{spot:i}=e,{ticket:t}=e;return c.$$set=a=>{"spot"in a&&l(0,i=a.spot),"ticket"in a&&l(1,t=a.ticket)},[i,t]}class ye extends X{constructor(e){super(),Y(this,e,we,Ee,Z,{spot:0,ticket:1})}}function fe(c,e,l){const i=c.slice();return i[3]=e[l],i}function ue(c){let e,l;return e=new ye({props:{spot:c[3].spot,ticket:c[3].ticket}}),{c(){J(e.$$.fragment)},l(i){K(e.$$.fragment,i)},m(i,t){Q(e,i,t),l=!0},p(i,t){const a={};t&1&&(a.spot=i[3].spot),t&1&&(a.ticket=i[3].ticket),e.$set(a)},i(i){l||(y(e.$$.fragment,i),l=!0)},o(i){O(e.$$.fragment,i),l=!1},d(i){W(e,i)}}}function Pe(c){let e,l,i=c[0],t=[];for(let s=0;s<i.length;s+=1)t[s]=ue(fe(c,i,s));const a=s=>O(t[s],1,1,()=>{t[s]=null});return{c(){e=k("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=v(s,"DIV",{class:!0});var r=b(e);for(let n=0;n<t.length;n+=1)t[n].l(r);r.forEach(p),this.h()},h(){E(e,"class","grid grid-cols-3 gap-16 w-full")},m(s,r){I(s,e,r);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null);l=!0},p(s,[r]){if(r&1){i=s[0];let n;for(n=0;n<i.length;n+=1){const f=fe(s,i,n);t[n]?(t[n].p(f,r),y(t[n],1)):(t[n]=ue(f),t[n].c(),y(t[n],1),t[n].m(e,null))}for(ie(),n=i.length;n<t.length;n+=1)a(n);re()}},i(s){if(!l){for(let r=0;r<i.length;r+=1)y(t[r]);l=!0}},o(s){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)O(t[r]);l=!1},d(s){s&&p(e),he(t,s)}}}function Ie(c,e,l){let{spots:i}=e,{tickets:t}=e,a;return c.$$set=s=>{"spots"in s&&l(1,i=s.spots),"tickets"in s&&l(2,t=s.tickets)},c.$$.update=()=>{c.$$.dirty&6&&l(0,a=i.map(s=>{let r=null;return s.occupied&&(r=t.find(n=>n.parking_spot_name==s.name)??null),{spot:s,ticket:r}}))},[a,i,t]}class De extends X{constructor(e){super(),Y(this,e,Ie,Pe,Z,{spots:1,tickets:2})}}function _e(c,e,l){const i=c.slice();return i[4]=e[l],i}function pe(c){let e,l,i=c[4].figure+"",t,a,s,r=c[4].caption+"",n,f,_,o;return{c(){e=k("div"),l=k("div"),t=D(i),a=C(),s=k("div"),n=D(r),f=C(),this.h()},l(u){e=v(u,"DIV",{class:!0});var d=b(e);l=v(d,"DIV",{class:!0});var m=b(l);t=V(m,i),m.forEach(p),a=x(d),s=v(d,"DIV",{class:!0});var g=b(s);n=V(g,r),g.forEach(p),f=x(d),d.forEach(p),this.h()},h(){E(l,"class","text-primary-content text-4xl font-bold"),E(s,"class","text-primary-content text-xl"),E(e,"class","bg-primary rounded-lg px-16 py-8 flex flex-col items-center gap-4")},m(u,d){I(u,e,d),h(e,l),h(l,t),h(e,a),h(e,s),h(s,n),h(e,f),o=!0},p(u,d){(!o||d&1)&&i!==(i=u[4].figure+"")&&M(t,i),(!o||d&1)&&r!==(r=u[4].caption+"")&&M(n,r)},i(u){o||(U(()=>{o&&(_||(_=se(e,T,{},!0)),_.run(1))}),o=!0)},o(u){_||(_=se(e,T,{},!1)),_.run(0),o=!1},d(u){u&&p(e),u&&_&&_.end()}}}function Ve(c){let e,l,i=c[0],t=[];for(let s=0;s<i.length;s+=1)t[s]=pe(_e(c,i,s));const a=s=>O(t[s],1,1,()=>{t[s]=null});return{c(){e=k("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=v(s,"DIV",{class:!0});var r=b(e);for(let n=0;n<t.length;n+=1)t[n].l(r);r.forEach(p),this.h()},h(){E(e,"class","grid grid-cols-2 w-full gap-8")},m(s,r){I(s,e,r);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null);l=!0},p(s,[r]){if(r&1){i=s[0];let n;for(n=0;n<i.length;n+=1){const f=_e(s,i,n);t[n]?(t[n].p(f,r),y(t[n],1)):(t[n]=pe(f),t[n].c(),y(t[n],1),t[n].m(e,null))}for(ie(),n=i.length;n<t.length;n+=1)a(n);re()}},i(s){if(!l){for(let r=0;r<i.length;r+=1)y(t[r]);l=!0}},o(s){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)O(t[r]);l=!1},d(s){s&&p(e),he(t,s)}}}function Ce(c,e,l){let i,t,{receipts:a}=e,s=0;return c.$$set=r=>{"receipts"in r&&l(1,a=r.receipts)},c.$$.update=()=>{c.$$.dirty&2&&l(3,i=a.length),c.$$.dirty&6&&(l(2,s=0),a.forEach(r=>l(2,s+=r.payed?r.amount:0))),c.$$.dirty&12&&l(0,t=[{figure:i,caption:"Vehicles parked"},{figure:s,caption:"Amount earned"}])},[t,a,s,i]}class xe extends X{constructor(e){super(),Y(this,e,Ce,Ve,Z,{receipts:1})}}function Oe(c,e){let l;return(async()=>{const i=(await ke(()=>import("../chunks/apexcharts.common.da8142ea.js").then(t=>t.a),[],import.meta.url)).default;l=new i(c,e),l.render()})(),{update(i){l.updateOptions(e),l.render()}}}function Se(c){let e,l,i;return{c(){e=k("div"),this.h()},l(t){e=v(t,"DIV",{class:!0}),b(e).forEach(p),this.h()},h(){E(e,"class","w-full")},m(t,a){I(t,e,a),l||(i=me(Oe.call(null,e,c[0])),l=!0)},p:S,i:S,o:S,d(t){t&&p(e),l=!1,i()}}}function je(c,e,l){let{receipts:i}=e,{bin_start:t=0}=e,{bin_gap:a=5}=e,{bin_count:s=10}=e;const r=[];let n=t;for(let o=0;o<s;o++)r.push(`${n}-${n+a}`),n+=a;const f=[];n=t;for(let o=0;o<s;o++){const u=i.filter(d=>d.time_parked>n&&d.time_parked<n+a).length;f.push(u),n+=a}let _={chart:{type:"bar"},series:[{name:"Parking times",data:f}],xaxis:{categories:r}};return c.$$set=o=>{"receipts"in o&&l(1,i=o.receipts),"bin_start"in o&&l(2,t=o.bin_start),"bin_gap"in o&&l(3,a=o.bin_gap),"bin_count"in o&&l(4,s=o.bin_count)},[_,i,t,a,s]}class Ne extends X{constructor(e){super(),Y(this,e,je,Se,Z,{receipts:1,bin_start:2,bin_gap:3,bin_count:4})}}function Re(c){var ae;let e,l,i,t=((ae=c[0])==null?void 0:ae.parking_fee)+"",a,s,r,n,f,_,o,u,d,m,g,A,j,H,le,ne,N,R,q;return f=new xe({props:{receipts:c[3]}}),g=new De({props:{spots:c[1],tickets:c[2]}}),N=new Ne({props:{receipts:c[3]}}),{c(){e=k("div"),l=k("h1"),i=D("Current parking fees: "),a=D(t),s=D(" rs. / minute"),r=C(),n=k("section"),J(f.$$.fragment),_=C(),o=k("section"),u=k("h1"),d=D("Parking spots"),m=C(),J(g.$$.fragment),A=C(),j=k("section"),H=k("h1"),le=D("Parking times"),ne=C(),J(N.$$.fragment),this.h()},l(w){e=v(w,"DIV",{class:!0});var P=b(e);l=v(P,"H1",{class:!0});var B=b(l);i=V(B,"Current parking fees: "),a=V(B,t),s=V(B," rs. / minute"),B.forEach(p),r=x(P),n=v(P,"SECTION",{class:!0});var z=b(n);K(f.$$.fragment,z),z.forEach(p),_=x(P),o=v(P,"SECTION",{class:!0});var F=b(o);u=v(F,"H1",{class:!0});var G=b(u);d=V(G,"Parking spots"),G.forEach(p),m=x(F),K(g.$$.fragment,F),F.forEach(p),A=x(P),j=v(P,"SECTION",{class:!0});var $=b(j);H=v($,"H1",{class:!0});var ce=b(H);le=V(ce,"Parking times"),ce.forEach(p),ne=x($),K(N.$$.fragment,$),$.forEach(p),P.forEach(p),this.h()},h(){E(l,"class","text-3xl"),E(n,"class","svelte-cbnooh"),E(u,"class","section-title svelte-cbnooh"),E(o,"class","svelte-cbnooh"),E(H,"class","section-title svelte-cbnooh"),E(j,"class","svelte-cbnooh"),E(e,"class","flex flex-col gap-8 items-center mx-auto my-16 w-1/2")},m(w,P){I(w,e,P),h(e,l),h(l,i),h(l,a),h(l,s),h(e,r),h(e,n),Q(f,n,null),h(e,_),h(e,o),h(o,u),h(u,d),h(o,m),Q(g,o,null),h(e,A),h(e,j),h(j,H),h(H,le),h(j,ne),Q(N,j,null),q=!0},p(w,P){var G;(!q||P&1)&&t!==(t=((G=w[0])==null?void 0:G.parking_fee)+"")&&M(a,t);const B={};P&8&&(B.receipts=w[3]),f.$set(B);const z={};P&2&&(z.spots=w[1]),P&4&&(z.tickets=w[2]),g.$set(z);const F={};P&8&&(F.receipts=w[3]),N.$set(F)},i(w){q||(y(f.$$.fragment,w),y(g.$$.fragment,w),y(N.$$.fragment,w),U(()=>{q&&(R||(R=se(e,T,{},!0)),R.run(1))}),q=!0)},o(w){O(f.$$.fragment,w),O(g.$$.fragment,w),O(N.$$.fragment,w),R||(R=se(e,T,{},!1)),R.run(0),q=!1},d(w){w&&p(e),W(f),W(g),W(N),w&&R&&R.end()}}}function Te(c){let e,l,i;return l=new ge({props:{size:48}}),{c(){e=k("div"),J(l.$$.fragment),this.h()},l(t){e=v(t,"DIV",{class:!0});var a=b(e);K(l.$$.fragment,a),a.forEach(p),this.h()},h(){E(e,"class","w-screen h-screen flex justify-center items-center")},m(t,a){I(t,e,a),Q(l,e,null),i=!0},p:S,i(t){i||(y(l.$$.fragment,t),i=!0)},o(t){O(l.$$.fragment,t),i=!1},d(t){t&&p(e),W(l)}}}function Ae(c){let e,l,i,t;const a=[Te,Re],s=[];function r(n,f){return n[4]?1:0}return e=r(c),l=s[e]=a[e](c),{c(){l.c(),i=te()},l(n){l.l(n),i=te()},m(n,f){s[e].m(n,f),I(n,i,f),t=!0},p(n,[f]){let _=e;e=r(n),e===_?s[e].p(n,f):(ie(),O(s[_],1,1,()=>{s[_]=null}),re(),l=s[e],l?l.p(n,f):(l=s[e]=a[e](n),l.c()),y(l,1),l.m(i.parentNode,i))},i(n){t||(y(l),t=!0)},o(n){O(l),t=!1},d(n){s[e].d(n),n&&p(i)}}}function Be(c,e,l){let i,t=0,a,s=[],r=[],n=[];de(()=>{f();let m=setInterval(_,1e3);return()=>clearInterval(m)});async function f(){const m=await fetch("/api/config");l(0,a=await m.json())}function _(){o(),u(),d()}async function o(){console.log("hi");const m=await fetch("/api/spots/list");l(1,s=await m.json()),l(5,t++,t)}async function u(){console.log("hiaa");const m=await fetch("/api/tickets/list");l(2,r=await m.json()),l(5,t++,t)}async function d(){console.log("hiee");const m=await fetch("/api/receipts/list");l(3,n=await m.json()),l(5,t++,t)}return c.$$.update=()=>{c.$$.dirty&32&&l(4,i=t>=3)},[a,s,r,n,i,t]}class ze extends X{constructor(e){super(),Y(this,e,Be,Ae,Z,{})}}export{ze as default};
import{S as Pe,i as Se,s as Fe,k as b,q as F,a as j,l as g,m as D,r as A,h as _,c as H,n as c,J as z,b as N,D as u,M as Ae,u as L,H as R,K as Ne,e as te,L as De,g as se,d as ce,f as $e,o as je,y as He,z as Ie,A as Me,B as Le,v as qe}from"../chunks/index.2fe21cc9.js";import{j as C}from"../chunks/singletons.f714bd0f.js";import{r as M}from"../chunks/constants.28d593a4.js";C.disable_scroll_handling;const ke=C.goto;C.invalidate;C.invalidateAll;C.preload_data;C.preload_code;C.before_navigate;C.after_navigate;function we(s,e,p){const t=s.slice();return t[2]=e[p],t}function be(s){let e,p,t,i,l,a,n,h,E,P=s[0].defaultWallpaperFilename+"",w;return{c(){e=b("h2"),p=F("default"),t=j(),i=b("a"),l=b("img"),h=j(),E=b("span"),w=F(P),this.h()},l(o){e=g(o,"H2",{});var d=D(e);p=A(d,"default"),d.forEach(_),t=H(o),i=g(o,"A",{href:!0,target:!0});var r=D(i);l=g(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(_),h=H(o),E=g(o,"SPAN",{class:!0});var v=D(E);w=A(v,P),v.forEach(_),this.h()},h(){c(l,"class","wallpaper svelte-1dfw3r5"),z(l.src,a=M+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[0].defaultWallpaperFilename)||c(l,"src",a),c(l,"alt","default"),c(i,"href",n=M+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[0].defaultWallpaperFilename),c(i,"target","_blank"),c(E,"class","filename svelte-1dfw3r5")},m(o,d){N(o,e,d),u(e,p),N(o,t,d),N(o,i,d),u(i,l),N(o,h,d),N(o,E,d),u(E,w)},p(o,d){d&3&&!z(l.src,a=M+"/themes/platform_wallpapers_packs/"+o[1]+"/"+o[0].defaultWallpaperFilename)&&c(l,"src",a),d&3&&n!==(n=M+"/themes/platform_wallpapers_packs/"+o[1]+"/"+o[0].defaultWallpaperFilename)&&c(i,"href",n),d&1&&P!==(P=o[0].defaultWallpaperFilename+"")&&L(w,P)},d(o){o&&_(e),o&&_(t),o&&_(i),o&&_(h),o&&_(E)}}}function ge(s){let e,p=s[2].matchPlatformShortname+"",t,i,l,a,n,h,E,P,w,o=s[2].filename+"",d;return{c(){e=b("h2"),t=F(p),i=j(),l=b("a"),a=b("img"),P=j(),w=b("span"),d=F(o),this.h()},l(r){e=g(r,"H2",{});var v=D(e);t=A(v,p),v.forEach(_),i=H(r),l=g(r,"A",{href:!0,target:!0});var q=D(l);a=g(q,"IMG",{class:!0,src:!0,alt:!0}),q.forEach(_),P=H(r),w=g(r,"SPAN",{class:!0});var G=D(w);d=A(G,o),G.forEach(_),this.h()},h(){c(a,"class","wallpaper svelte-1dfw3r5"),z(a.src,n=M+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[2].filename)||c(a,"src",n),c(a,"alt",h=s[2].matchPlatformShortname),c(l,"href",E=M+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[2].filename),c(l,"target","_blank"),c(w,"class","filename svelte-1dfw3r5")},m(r,v){N(r,e,v),u(e,t),N(r,i,v),N(r,l,v),u(l,a),N(r,P,v),N(r,w,v),u(w,d)},p(r,v){v&1&&p!==(p=r[2].matchPlatformShortname+"")&&L(t,p),v&3&&!z(a.src,n=M+"/themes/platform_wallpapers_packs/"+r[1]+"/"+r[2].filename)&&c(a,"src",n),v&1&&h!==(h=r[2].matchPlatformShortname)&&c(a,"alt",h),v&3&&E!==(E=M+"/themes/platform_wallpapers_packs/"+r[1]+"/"+r[2].filename)&&c(l,"href",E),v&1&&o!==(o=r[2].filename+"")&&L(d,o)},d(r){r&&_(e),r&&_(i),r&&_(l),r&&_(P),r&&_(w)}}}function Be(s){let e,p,t,i,l,a,n,h,E,P,w=s[0].name+"",o,d,r,v,q=s[0].hasDefaultWallpaper?"yes":"no",G,J=s[0].isNSFW?" • NSFW":"",X,re,K,U=s[0].description+"",Y,fe,$,ie,V=s[0].authors.join(", ")+"",Z,ne,oe,pe,O=s[0].sources.join(", ")+"",y,ue,x,I,ee,_e,he,S=s[0].hasDefaultWallpaper&&be(s),T=s[0].wallpaperList,W=[];for(let f=0;f<T.length;f+=1)W[f]=ge(we(s,T,f));return{c(){e=b("article"),p=b("p"),t=b("a"),i=F("« back to list"),l=j(),a=b("img"),E=j(),P=b("h1"),o=F(w),d=j(),r=b("p"),v=F("Has default wallpaper: "),G=F(q),X=F(J),re=j(),K=b("p"),Y=F(U),fe=j(),$=b("p"),ie=F("Authors: "),Z=F(V),ne=F("."),oe=b("br"),pe=F("Sources: "),y=F(O),ue=F("."),x=j(),I=b("div"),S&&S.c(),ee=j();for(let f=0;f<W.length;f+=1)W[f].c();this.h()},l(f){e=g(f,"ARTICLE",{class:!0});var m=D(e);p=g(m,"P",{});var k=D(p);t=g(k,"A",{});var Q=D(t);i=A(Q,"« back to list"),Q.forEach(_),k.forEach(_),l=H(m),a=g(m,"IMG",{class:!0,src:!0,alt:!0}),E=H(m),P=g(m,"H1",{});var de=D(P);o=A(de,w),de.forEach(_),d=H(m),r=g(m,"P",{});var le=D(r);v=A(le,"Has default wallpaper: "),G=A(le,q),X=A(le,J),le.forEach(_),re=H(m),K=g(m,"P",{});var ve=D(K);Y=A(ve,U),ve.forEach(_),fe=H(m),$=g(m,"P",{class:!0});var B=D($);ie=A(B,"Authors: "),Z=A(B,V),ne=A(B,"."),oe=g(B,"BR",{}),pe=A(B,"Sources: "),y=A(B,O),ue=A(B,"."),B.forEach(_),m.forEach(_),x=H(f),I=g(f,"DIV",{class:!0});var ae=D(I);S&&S.l(ae),ee=H(ae);for(let me=0;me<W.length;me+=1)W[me].l(ae);ae.forEach(_),this.h()},h(){c(a,"class","thumb svelte-1dfw3r5"),z(a.src,n=M+"/themes/platform_wallpapers_packs/"+s[1]+"/"+s[0].previewThumbnailFilename)||c(a,"src",n),c(a,"alt",h=s[0].platformWallpapersPackName),c($,"class","authors"),c(e,"class","svelte-1dfw3r5"),c(I,"class","wallpapers svelte-1dfw3r5")},m(f,m){N(f,e,m),u(e,p),u(p,t),u(t,i),u(e,l),u(e,a),u(e,E),u(e,P),u(P,o),u(e,d),u(e,r),u(r,v),u(r,G),u(r,X),u(e,re),u(e,K),u(K,Y),u(e,fe),u(e,$),u($,ie),u($,Z),u($,ne),u($,oe),u($,pe),u($,y),u($,ue),N(f,x,m),N(f,I,m),S&&S.m(I,null),u(I,ee);for(let k=0;k<W.length;k+=1)W[k]&&W[k].m(I,null);_e||(he=Ae(t,"click",Ce),_e=!0)},p(f,[m]){if(m&3&&!z(a.src,n=M+"/themes/platform_wallpapers_packs/"+f[1]+"/"+f[0].previewThumbnailFilename)&&c(a,"src",n),m&1&&h!==(h=f[0].platformWallpapersPackName)&&c(a,"alt",h),m&1&&w!==(w=f[0].name+"")&&L(o,w),m&1&&q!==(q=f[0].hasDefaultWallpaper?"yes":"no")&&L(G,q),m&1&&J!==(J=f[0].isNSFW?" • NSFW":"")&&L(X,J),m&1&&U!==(U=f[0].description+"")&&L(Y,U),m&1&&V!==(V=f[0].authors.join(", ")+"")&&L(Z,V),m&1&&O!==(O=f[0].sources.join(", ")+"")&&L(y,O),f[0].hasDefaultWallpaper?S?S.p(f,m):(S=be(f),S.c(),S.m(I,ee)):S&&(S.d(1),S=null),m&3){T=f[0].wallpaperList;let k;for(k=0;k<T.length;k+=1){const Q=we(f,T,k);W[k]?W[k].p(Q,m):(W[k]=ge(Q),W[k].c(),W[k].m(I,null))}for(;k<W.length;k+=1)W[k].d(1);W.length=T.length}},i:R,o:R,d(f){f&&_(e),f&&_(x),f&&_(I),S&&S.d(),Ne(W,f),_e=!1,he()}}}function Ce(){history.back()}function Ge(s,e,p){let{index:t}=e,{slug:i}=e;return s.$$set=l=>{"index"in l&&p(0,t=l.index),"slug"in l&&p(1,i=l.slug)},[t,i]}class Te extends Pe{constructor(e){super(),Se(this,e,Ge,Be,Fe,{index:0,slug:1})}}function We(s){return document.title=" "+s[0].name+" ",{c:R,l:R,m:R,d:R}}function Ee(s){let e,p;return e=new Te({props:{index:s[0],slug:s[1]}}),{c(){He(e.$$.fragment)},l(t){Ie(e.$$.fragment,t)},m(t,i){Me(e,t,i),p=!0},p(t,i){const l={};i&1&&(l.index=t[0]),i&2&&(l.slug=t[1]),e.$set(l)},i(t){p||(se(e.$$.fragment,t),p=!0)},o(t){ce(e.$$.fragment,t),p=!1},d(t){Le(e,t)}}}function Re(s){let e,p,t,i,l=s[0]&&We(s),a=s[0]&&Ee(s);return{c(){l&&l.c(),e=te(),p=j(),a&&a.c(),t=te()},l(n){const h=De("svelte-rxt4n2",document.head);l&&l.l(h),e=te(),h.forEach(_),p=H(n),a&&a.l(n),t=te()},m(n,h){l&&l.m(document.head,null),u(document.head,e),N(n,p,h),a&&a.m(n,h),N(n,t,h),i=!0},p(n,[h]){n[0]?l||(l=We(n),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),n[0]?a?(a.p(n,h),h&1&&se(a,1)):(a=Ee(n),a.c(),se(a,1),a.m(t.parentNode,t)):a&&(qe(),ce(a,1,1,()=>{a=null}),$e())},i(n){i||(se(a),i=!0)},o(n){ce(a),i=!1},d(n){l&&l.d(n),_(e),n&&_(p),a&&a.d(n),n&&_(t)}}}function ze(s,e,p){let t,i;return je(async()=>{let l=window.location.hash;if(l){p(1,i=l.substring(1));try{p(0,t=await fetch(`${M}/themes/platform_wallpapers_packs/${i}/index.json`).then(a=>a.json()))}catch(a){console.error(a),ke("/")}}else ke("/")}),[t,i]}class Ve extends Pe{constructor(e){super(),Se(this,e,ze,Re,Fe,{})}}export{Ve as default};

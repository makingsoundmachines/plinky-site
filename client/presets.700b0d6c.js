import{S as e,i as t,s as a,e as o,j as n,k as s,p as r,r as i,a as l,d as h,l as c,b as d,m as p,q as u,f,n as m,g,v as y,t as w,h as E,w as k}from"./client.1b77d862.js";import{B as v}from"./BigArea.ecd18b28.js";import{G as $}from"./Grid.1312ac03.js";function P(e){let t,a,r,i,u,y,w,E;return{c(){t=o("h4"),a=s("Default bank"),r=n(),i=o("p"),u=s("This is the default preset set with all 32 patches set to the initial sound."),y=n(),w=o("a"),E=s("Download"),this.h()},l(e){t=l(e,"H4",{});var o=d(t);a=p(o,"Default bank"),o.forEach(h),r=c(e),i=l(e,"P",{});var n=d(i);u=p(n,"This is the default preset set with all 32 patches set to the initial sound."),n.forEach(h),y=c(e),w=l(e,"A",{class:!0,target:!0,href:!0});var s=d(w);E=p(s,"Download"),s.forEach(h),this.h()},h(){f(w,"class","button"),f(w,"target","_blank"),f(w,"href","/presets/default/PRESETS.uf2")},m(e,o){g(e,t,o),m(t,a),g(e,r,o),g(e,i,o),m(i,u),g(e,y,o),g(e,w,o),m(w,E)},d(e){e&&h(t),e&&h(r),e&&h(i),e&&h(y),e&&h(w)}}}function b(e){let t,a,r,i,u,y,w,E,k,v,$;return{c(){t=o("h4"),a=s("LPZW.modules bank"),r=n(),i=o("p"),u=s("These are the presets by LPZW.modules for the Schneidersladen edition of Plinky. It contains the preset file and three samples. For more info, please go to "),y=o("a"),w=s("leipzigwest.org"),E=s("."),k=n(),v=o("a"),$=s("Download"),this.h()},l(e){t=l(e,"H4",{});var o=d(t);a=p(o,"LPZW.modules bank"),o.forEach(h),r=c(e),i=l(e,"P",{});var n=d(i);u=p(n,"These are the presets by LPZW.modules for the Schneidersladen edition of Plinky. It contains the preset file and three samples. For more info, please go to "),y=l(n,"A",{href:!0,target:!0});var s=d(y);w=p(s,"leipzigwest.org"),s.forEach(h),E=p(n,"."),n.forEach(h),k=c(e),v=l(e,"A",{class:!0,target:!0,href:!0});var f=d(v);$=p(f,"Download"),f.forEach(h),this.h()},h(){f(y,"href","http://leipzigwest.org/"),f(y,"target","_blank"),f(v,"class","button"),f(v,"target","_blank"),f(v,"href","/presets/LPZW/LPZW.zip")},m(e,o){g(e,t,o),m(t,a),g(e,r,o),g(e,i,o),m(i,u),m(i,y),m(y,w),m(i,E),g(e,k,o),g(e,v,o),m(v,$)},d(e){e&&h(t),e&&h(r),e&&h(i),e&&h(k),e&&h(v)}}}function T(e){let t,a,o,s;return t=new v({props:{$$slots:{default:[P]},$$scope:{ctx:e}}}),o=new v({props:{$$slots:{default:[b]},$$scope:{ctx:e}}}),{c(){r(t.$$.fragment),a=n(),r(o.$$.fragment)},l(e){u(t.$$.fragment,e),a=c(e),u(o.$$.fragment,e)},m(e,n){y(t,e,n),g(e,a,n),y(o,e,n),s=!0},p(e,a){const n={};1&a&&(n.$$scope={dirty:a,ctx:e}),t.$set(n);const s={};1&a&&(s.$$scope={dirty:a,ctx:e}),o.$set(s)},i(e){s||(w(t.$$.fragment,e),w(o.$$.fragment,e),s=!0)},o(e){E(t.$$.fragment,e),E(o.$$.fragment,e),s=!1},d(e){k(t,e),e&&h(a),k(o,e)}}}function S(e){let t,a,v,P,b,S,L,A,I,M,D,W,H,x,B,R,j,Z,U,_,z,O,G,N,F,J,q,V,C,K,Q,X,Y,ee,te,ae,oe,ne,se,re,ie,le,he,ce,de,pe,ue,fe,me,ge,ye,we,Ee,ke,ve,$e;return F=new $({props:{$$slots:{default:[T]},$$scope:{ctx:e}}}),{c(){t=o("meta"),a=o("meta"),v=o("meta"),P=o("meta"),b=o("meta"),S=o("meta"),L=o("meta"),A=o("meta"),I=o("meta"),M=n(),D=o("div"),W=o("h1"),H=s("Presets"),x=n(),B=o("p"),R=s("We're collecting presets and working on "),j=o("a"),Z=s("a browser-based patch editor"),U=s(". In the meantime, here is a simple list of preset banks."),_=n(),z=o("p"),O=o("strong"),G=s("NOTE: Replacing the preset bank will replace your patterns as well!"),N=n(),r(F.$$.fragment),J=n(),q=o("h2"),V=s("Manual preset install instructions"),C=n(),K=o("ol"),Q=o("li"),X=s("Hold the right encoder down while plugging the USB cable into your Plinky."),Y=n(),ee=o("li"),te=s('Plinky will show up as an attached drive and you should see the "tunnel of lights" effect on the LEDs.'),ae=n(),oe=o("li"),ne=s("Drag and drop PRESETS.uf2 to the drive. "),se=o("b"),re=s("Make sure that it's called PRESETS.uf2 and nothing else."),ie=n(),le=o("li"),he=s("If you're adding samples, drag and drop the SAMPLE1.uf2, SAMPLE2.uf2, etc. that you might have over to the drive as well."),ce=n(),de=o("li"),pe=s("While flashing, the LEDs will flicker. This is normal."),ue=n(),fe=o("li"),me=s("While you're changing banks, it's a good time to also "),ge=o("a"),ye=s("update your firmware"),we=s(" to the latest version! Just download the file and drag and drop while you've got Plinky hooked up."),Ee=n(),ke=o("li"),ve=s("To finish, just click the encoder again. Plinky will boot up and your presets should be present."),this.h()},l(e){const o=i('[data-svelte="svelte-309ekc"]',document.head);t=l(o,"META",{property:!0,content:!0}),a=l(o,"META",{property:!0,content:!0}),v=l(o,"META",{property:!0,content:!0}),P=l(o,"META",{name:!0,content:!0}),b=l(o,"META",{property:!0,content:!0}),S=l(o,"META",{name:!0,content:!0}),L=l(o,"META",{name:!0,value:!0}),A=l(o,"META",{name:!0,content:!0}),I=l(o,"META",{name:!0,content:!0}),o.forEach(h),M=c(e),D=l(e,"DIV",{class:!0});var n=d(D);W=l(n,"H1",{});var s=d(W);H=p(s,"Presets"),s.forEach(h),x=c(n),B=l(n,"P",{});var r=d(B);R=p(r,"We're collecting presets and working on "),j=l(r,"A",{href:!0});var f=d(j);Z=p(f,"a browser-based patch editor"),f.forEach(h),U=p(r,". In the meantime, here is a simple list of preset banks."),r.forEach(h),_=c(n),z=l(n,"P",{});var m=d(z);O=l(m,"STRONG",{});var g=d(O);G=p(g,"NOTE: Replacing the preset bank will replace your patterns as well!"),g.forEach(h),m.forEach(h),N=c(n),u(F.$$.fragment,n),J=c(n),q=l(n,"H2",{});var y=d(q);V=p(y,"Manual preset install instructions"),y.forEach(h),C=c(n),K=l(n,"OL",{});var w=d(K);Q=l(w,"LI",{});var E=d(Q);X=p(E,"Hold the right encoder down while plugging the USB cable into your Plinky."),E.forEach(h),Y=c(w),ee=l(w,"LI",{});var k=d(ee);te=p(k,'Plinky will show up as an attached drive and you should see the "tunnel of lights" effect on the LEDs.'),k.forEach(h),ae=c(w),oe=l(w,"LI",{});var $=d(oe);ne=p($,"Drag and drop PRESETS.uf2 to the drive. "),se=l($,"B",{});var T=d(se);re=p(T,"Make sure that it's called PRESETS.uf2 and nothing else."),T.forEach(h),$.forEach(h),ie=c(w),le=l(w,"LI",{});var $e=d(le);he=p($e,"If you're adding samples, drag and drop the SAMPLE1.uf2, SAMPLE2.uf2, etc. that you might have over to the drive as well."),$e.forEach(h),ce=c(w),de=l(w,"LI",{});var Pe=d(de);pe=p(Pe,"While flashing, the LEDs will flicker. This is normal."),Pe.forEach(h),ue=c(w),fe=l(w,"LI",{});var be=d(fe);me=p(be,"While you're changing banks, it's a good time to also "),ge=l(be,"A",{href:!0});var Te=d(ge);ye=p(Te,"update your firmware"),Te.forEach(h),we=p(be," to the latest version! Just download the file and drag and drop while you've got Plinky hooked up."),be.forEach(h),Ee=c(w),ke=l(w,"LI",{});var Se=d(ke);ve=p(Se,"To finish, just click the encoder again. Plinky will boot up and your presets should be present."),Se.forEach(h),w.forEach(h),n.forEach(h),this.h()},h(){document.title="Plinky - Presets",f(t,"property","og:url"),f(t,"content","https://www.plinkysynth.com/presets"),f(a,"property","og:type"),f(a,"content","website"),f(v,"property","og:title"),f(v,"content","Plinky - 8-voice polyphonic touch synthesiser"),f(P,"name","Description"),f(P,"content","Plinky specialises in fragile, melancholic sounds. It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth, with line-level stereo input and a headphone output, all powered from a micro-USB connector."),f(b,"property","og:description"),f(b,"content","Plinky specialises in fragile, melancholic sounds. It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth, with line-level stereo input and a headphone output, all powered from a micro-USB connector."),f(S,"name","twitter:card"),f(S,"content","summary_large_image"),f(L,"name","twitter:domain"),f(L,"value","plinkysynth.com"),f(A,"name","twitter:title"),f(A,"content","Plinky - 8-voice polyphonic touch synthesiser"),f(I,"name","twitter:description"),f(I,"content","Plinky specialises in fragile, melancholic sounds. It fits into 24HP eurorack cases, but can also be played as a standalone desktop mini-synth, with line-level stereo input and a headphone output, all powered from a micro-USB connector."),f(j,"href","https://plinkysynth.github.io/editor/"),f(ge,"href","/firmware"),f(D,"class","page")},m(e,o){m(document.head,t),m(document.head,a),m(document.head,v),m(document.head,P),m(document.head,b),m(document.head,S),m(document.head,L),m(document.head,A),m(document.head,I),g(e,M,o),g(e,D,o),m(D,W),m(W,H),m(D,x),m(D,B),m(B,R),m(B,j),m(j,Z),m(B,U),m(D,_),m(D,z),m(z,O),m(O,G),m(D,N),y(F,D,null),m(D,J),m(D,q),m(q,V),m(D,C),m(D,K),m(K,Q),m(Q,X),m(K,Y),m(K,ee),m(ee,te),m(K,ae),m(K,oe),m(oe,ne),m(oe,se),m(se,re),m(K,ie),m(K,le),m(le,he),m(K,ce),m(K,de),m(de,pe),m(K,ue),m(K,fe),m(fe,me),m(fe,ge),m(ge,ye),m(fe,we),m(K,Ee),m(K,ke),m(ke,ve),$e=!0},p(e,[t]){const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),F.$set(a)},i(e){$e||(w(F.$$.fragment,e),$e=!0)},o(e){E(F.$$.fragment,e),$e=!1},d(e){h(t),h(a),h(v),h(P),h(b),h(S),h(L),h(A),h(I),e&&h(M),e&&h(D),k(F)}}}export default class extends e{constructor(e){super(),t(this,e,null,S,a,{})}}
(this["webpackJsonpbmarie-net"]=this["webpackJsonpbmarie-net"]||[]).push([[0],{11:function(e,t){},37:function(e,t,n){},38:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n.n(c),r=n(29),u=n.n(r),a=(n(37),n(32)),o=n(7),s=(n(38),n(30)),f=n(4);var b=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),u=Object(o.a)(r,2),b=u[0],l=u[1],j=Object(c.useState)(""),p=Object(o.a)(j,2),d=p[0],m=p[1];return Object(c.useEffect)((function(){s.createClient({space:"90qprjmlum8i",accessToken:"yIwMebq5Mhdp3PQbS-h4_T7RWP5LsprSLjnobyn22Ws"}).getEntries().then((function(e){var t=e.items.map((function(e){return e.fields})),n=t.reduce((function(e,t){return e.indexOf(t.group)<0?[].concat(Object(a.a)(e),[t.group]):e}),[]);l(n),i(t),console.log(t),m(n[0])}))}),[]),Object(f.jsxs)("div",{className:"App",children:[b.map((function(e){return Object(f.jsx)("div",{onClick:function(){return m(e)},className:"link ".concat(e," ").concat(d===e?"active":""),children:e})})),n.filter((function(e){return e.group===d})).map((function(e){return Object(f.jsx)("img",{style:{width:"100%"},alt:"fuck",src:e.image.fields.file.url})}))]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),c(e),i(e),r(e),u(e)}))};u.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(b,{})}),document.getElementById("root")),l()}},[[89,1,2]]]);
//# sourceMappingURL=main.a879ac8c.chunk.js.map
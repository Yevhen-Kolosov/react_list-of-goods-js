(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=n(1),a=(n(13),n(14),n(4)),u=n.n(a),l=n(0),b="length",j="name",d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var h=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(!1),a=Object(r.a)(c,2),h=a[0],g=a[1],p=function(t,e){var n=e.sortField,s=e.reverseStatus,c=Object(i.a)(t);return n&&(c=c.sort((function(t,e){switch(n){case b:return t.length-e.length;case j:return t.localeCompare(e);default:return 0}}))),s&&c.reverse(),c}(d,{sortField:n,reverseStatus:h}),f=""!==n||h;return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":n!==j}),onClick:function(){return s(j)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":n!==b}),onClick:function(){return s(b)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!h}),onClick:function(){return g(!h)},children:"Reverse"}),f&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),g(!1)},children:"Reset"})]}),Object(l.jsx)("ul",{children:p.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t})}))})]})};c.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c8dba83c.chunk.js.map
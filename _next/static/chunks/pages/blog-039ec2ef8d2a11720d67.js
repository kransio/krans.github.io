(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{50676:function(r,e,n){"use strict";function t(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}n.d(e,{Z:function(){return t}})},17375:function(r,e,n){"use strict";function t(r,e){if(null==r)return{};var n,t,s=function(r,e){if(null==r)return{};var n,t,s={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(s[n]=r[n]);return s}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(s[n]=r[n])}return s}n.d(e,{Z:function(){return t}})},82961:function(r,e,n){"use strict";n.d(e,{Z:function(){return s}});var t=n(50676);function s(r,e){if(r){if("string"===typeof r)return(0,t.Z)(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,t.Z)(r,e):void 0}}},94184:function(r,e){var n;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var r=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)r.push(n);else if(Array.isArray(n)){if(n.length){var a=s.apply(null,n);a&&r.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var o in n)t.call(n,o)&&n[o]&&r.push(o);else r.push(n.toString())}}return r.join(" ")}r.exports?(s.default=s,r.exports=s):void 0===(n=function(){return s}.apply(e,[]))||(r.exports=n)}()},98032:function(r,e,n){"use strict";n.d(e,{pG:function(){return h},KE:function(){return d},VO:function(){return u}});var t=n(85893);var s=n(82961);function i(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(r)){var n=[],t=!0,s=!1,i=void 0;try{for(var a,o=r[Symbol.iterator]();!(t=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);t=!0);}catch(c){s=!0,i=c}finally{try{t||null==o.return||o.return()}finally{if(s)throw i}}return n}}(r,e)||(0,s.Z)(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n(17375),o=n(22152),c=n(34465),u=(n(67294),function(r){r.className;var e=r.releases,n=void 0===e?[]:e,s=(0,a.Z)(r,["className","releases"]),u=i((0,c.MR)(n,"date","desc"),1)[0];return(0,t.jsxs)("div",{className:"space-y-5",children:[u&&(0,t.jsxs)("a",{className:"underline text-xl text-gray-800",href:"#",children:["News: ",u.title]}),s.sections.map((function(r){return(0,t.jsx)(o.Menu,{title:r.name,children:r.guides.sort(f).map((function(r,e){return(0,t.jsxs)("div",{className:"flex text-gray-500",children:[(0,t.jsxs)("span",{className:"w-2.5",children:[e+1,"."]}),(0,t.jsx)("li",{children:(0,t.jsx)(o.NavLink,{href:l(r),reverse:!0,children:r.title})})]},r.slug)}))},r.name)}))]})}),l=function(r){return"/guides/".concat(r.slug)},f=function(r,e){return r.number>e.number?1:0},p=(n(54319),n(94184),n(41664)),d=function(r){r.className;var e=r.post;return(0,t.jsxs)("p",{className:"text-gray-400 prose-sm",children:[(0,t.jsx)("span",{className:"italic",children:(0,c.p6)(e.date)})," \xb7"," ",(0,t.jsxs)("span",{className:"italic",children:["by ",e.author]})," \xb7"," ",(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{className:"italic",children:"in "}),(0,t.jsx)("a",{className:"underline",href:"",children:e.category})]})]})},h=function(r){r.className;var e=r.post,n=((0,a.Z)(r,["className","post"]),"/blog/".concat(e.slug));return(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"prose prose-2xl uppercase",children:(0,t.jsx)(p.default,{href:n,children:(0,t.jsx)("span",{className:"no-underline cursor-pointer",children:e.title})})}),(0,t.jsx)(d,{post:e})]}),(0,t.jsx)("p",{className:"text-gray-600",children:e.summary}),(0,t.jsx)("span",{className:"text-primary-800 underline cursor-pointer",children:(0,t.jsx)(p.default,{href:n,children:"Continue reading \u2192"})})]})}},17821:function(r,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return u}});var t=n(85893),s=n(54319),i=n(34465),a=n(98032),o=n(94184),c=n.n(o),u=(n(67294),!0);e.default=function(r){var e=(0,i.MR)(r.posts,"date","desc");return(0,t.jsx)(s.Content.Layout,{title:"Krans | Blog",description:r.description,right:(0,t.jsx)(s.Sidebar,{releases:r.releases}),children:(0,t.jsx)("ul",{className:"space-y-8",children:e.map((function(r,n){return(0,t.jsx)("li",{className:c()("pb-8",{"border-b-2":n!==e.length-1}),children:(0,t.jsx)(a.pG,{post:r})},n)}))})})}},34465:function(r,e,n){"use strict";n.d(e,{p6:function(){return a},MR:function(){return l},MI:function(){return i}});var t=n(53406),s=n.n(t);function i(r){return s()(r.replace("-"," "))}function a(r){var e="string"===typeof r?new Date(r):r;return new Intl.DateTimeFormat(void 0,{dateStyle:"long"}).format(e)}var o=n(50676);var c=n(82961);function u(r){return function(r){if(Array.isArray(r))return(0,o.Z)(r)}(r)||function(r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||(0,c.Z)(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(r,e,n){var t="asc"===n?function(r,n){return r[e]<n[e]?-1:1}:function(r,n){return r[e]>n[e]?-1:1};return u(r.sort(t))}},32912:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(17821)}])},53406:function(r){"use strict";const e=r=>{if("string"!==typeof r)throw new TypeError("Expected a string");return r.toLowerCase().replace(/(?:^|\s|-)\S/g,(r=>r.toUpperCase()))};r.exports=e,r.exports.default=e}},function(r){r.O(0,[774,474,319,888,179],(function(){return e=32912,r(r.s=e);var e}));var e=r.O();_N_E=e}]);
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[207],{93:function(e,t,n){function r(e,t,n,r,c,a,o){try{var i=e[a](o),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var o=e.apply(t,n);function i(e){r(o,c,a,i,u,"next",e)}function u(e){r(o,c,a,i,u,"throw",e)}i(void 0)}))}}n.d(t,{bV:function(){return s},Me:function(){return p},BG:function(){return d},L_:function(){return v},bI:function(){return m},wr:function(){return h}});var a=n(757),o=n.n(a),i="0e67fb79d752f59394a3aa358d9abf8d",u="https://api.themoviedb.org/3/",s="https://image.tmdb.org/t/p/w500";function l(){return f.apply(this,arguments)}function f(){return f=c(o().mark((function e(){var t,n,r=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function h(){return l("".concat(u,"trending/movie/week?api_key=").concat(i))}function m(e){return l("".concat(u,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&include_adult=false"))}function d(e){return l("".concat(u,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"))}function p(e){return l("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"))}function v(e){return l("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"))}},494:function(e,t,n){var r=n(689),c=n(87),a=n(184);t.Z=function(e){var t=e.filmsArray,n=e.sublink,o=(0,r.TH)();return(0,a.jsx)("div",{children:t.length>0&&(0,a.jsx)("ul",{children:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{to:"".concat(n?n+e.id:e.id),state:{from:o},children:e.original_title})},e.id)}))})})}},207:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,c=n(439),a=n(791),o=n(87),i=n(93),u=n(494),s=["title","titleId"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function h(e,t){var n=e.title,c=e.titleId,o=f(e,s);return a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":c},o),n?a.createElement("title",{id:c},n):null,r||(r=a.createElement("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"})))}var m=a.forwardRef(h),d=(n.p,"SearchForm_SearchForm__jbIQn"),p="SearchForm_SearchFormButton__ROHLz",v="SearchForm_SearchFormInput__jntvc",b=n(184),g=function(e){var t=e.onSubmitForm;return(0,b.jsxs)("form",{className:d,onSubmit:t,children:[(0,b.jsx)("button",{type:"submit",className:p,children:(0,b.jsx)(m,{width:"20"})}),(0,b.jsx)("input",{className:v,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"searchfield"})]})},y=function(){var e=(0,a.useState)([]),t=(0,c.Z)(e,2),n=t[0],r=t[1],s=(0,o.lr)(),l=(0,c.Z)(s,2),f=l[0],h=l[1],m=f.get("query");(0,a.useEffect)((function(){m&&i.bI(m).then((function(e){r(e.results)}))}),[m]);return(0,b.jsxs)("div",{children:[(0,b.jsx)(g,{onSubmitForm:function(e){e.preventDefault();var t=e.target.elements.searchfield.value;h({query:t}),e.target.reset()}}),(0,b.jsx)("div",{children:(0,b.jsx)(u.Z,{filmsArray:n})})]})}}}]);
//# sourceMappingURL=207.fed2c64d.chunk.js.map
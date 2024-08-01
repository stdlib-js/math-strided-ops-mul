// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-meta-data-props@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary-dtype-signatures@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-dispatch@v0.2.2-esm/index.mjs";import d,{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.3.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-enum@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-mul@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-base-mul@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-base-mul@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary-signature-callbacks@v0.2.2-esm/index.mjs";var p={nargs:10,nin:2,nout:1},j=[[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2]],b=t(j[0],j[1],j[2],{enums:!0}),v=l({default:m,complex64:o,complex128:a},b),h=n(d,b,v,p.nargs,p.nin,p.nout);function c(s,e,t,n,d,r,m,a,o,l){return h(s,i(e),t,n,i(d),r,m,i(a),o,l)}var u=n(r,b,v,p.nargs+p.nin+p.nout,p.nin,p.nout);function f(s,e,t,n,d,r,m,a,o,l,p,j,b){return u(s,i(e),t,n,d,i(r),m,a,o,i(l),p,j,b)}s(c,"ndarray",f),e(p,b,c,!1),e(p,b,c.ndarray,!0);export{c as default,f as ndarray};
//# sourceMappingURL=index.mjs.map

// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-shapes@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-maybe-broadcast-array@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function i(i){var o,m,a,h,l,p,j;if(0===(m=arguments.length))a=[];else if(m>1)for(a=[],j=0;j<arguments.length;j++)a.push(arguments[j]);else if(r(i))a=[i];else{if(!s(i))throw new TypeError(n("1ndFJ",i));a=i}for(p=a.length,o=[],j=0;j<p;j++)try{o.push(d(a[j]))}catch(r){throw new TypeError(n("1ndFK",a[j]))}if(null===(l=e(o)))throw new Error(n("1ndFH"));for(h=[],j=0;j<p;j++)h.push(t(a[j],l));return h}export{i as default};
//# sourceMappingURL=index.mjs.map

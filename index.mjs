// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-prev-grapheme-cluster-break@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var e=r,i=t.isPrimitive,n=s;var o=function(r){var t,s,o,m;if(!i(r))throw new TypeError(n("0hW3R",r));if(""===r)return"";for(t=[],o=r.length-1;o>=0;){for(m=(s=e(r,o))+1;m<=o;m++)t.push(r.charAt(m));o=s}return t.join("")};export{o as default};
//# sourceMappingURL=index.mjs.map

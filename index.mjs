// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-prev-grapheme-cluster-break@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function e(e){var i,n,o,m;if(!t(e))throw new TypeError(s("1PL3F,Ex",e));if(""===e)return"";for(i=[],o=e.length-1;o>=0;){for(m=(n=r(e,o))+1;m<=o;m++)i.push(e.charAt(m));o=n}return i.join("")}export{e as default};
//# sourceMappingURL=index.mjs.map

// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{factory as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-reverse@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-reverse-code-points@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-reverse-grapheme-clusters@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";var n=["grapheme","code_point","code_unit"],p={grapheme:d,code_point:o,code_unit:i},j=t(n);function h(t){var i,o;if(!e(t))throw new TypeError(m("1PL3F",t));if(o={mode:"grapheme"},arguments.length>1&&!s(i=arguments[1]))throw new TypeError(m("1PL2V",i));if(i&&r(i,"mode")&&(o.mode=i.mode,!j(o.mode)))throw new TypeError(m("1PLE1","mode",n.join('", "'),o.mode));return p[o.mode](t)}export{h as default};
//# sourceMappingURL=index.mjs.map

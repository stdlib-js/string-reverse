// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-prev-grapheme-cluster-break@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var e=r,i=t.isPrimitive,n=s;var m=function(r){var t,s,m,a;if(!i(r))throw new TypeError(n("invalid argument. First argument must be a string. Value: `%s`.",r));if(""===r)return"";for(t=[],m=r.length-1;m>=0;){for(a=(s=e(r,m))+1;a<=m;a++)t.push(r.charAt(a));m=s}return t.join("")};export{m as default};
//# sourceMappingURL=index.mjs.map

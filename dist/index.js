"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=v(function(g,u){
var s=require('@stdlib/string-prev-grapheme-cluster-break/dist'),o=require('@stdlib/assert-is-string/dist').isPrimitive,m=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r){var e,t,i,a;if(!o(r))throw new TypeError(m('1PL3F',r));if(r==="")return"";for(e=[],i=r.length-1;i>=0;){for(t=s(r,i),a=t+1;a<=i;a++)e.push(r.charAt(a));i=t}return e.join("")}u.exports=h
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

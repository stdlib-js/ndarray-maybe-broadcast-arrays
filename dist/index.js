"use strict";var m=function(t,a){return function(){return a||t((a={exports:{}}).exports,a),a.exports}};var l=m(function(w,v){
var h=require('@stdlib/assert-is-ndarray-like/dist'),g=require('@stdlib/assert-is-array-like-object/dist'),d=require('@stdlib/ndarray-base-broadcast-shapes/dist'),p=require('@stdlib/ndarray-maybe-broadcast-array/dist'),c=require('@stdlib/ndarray-shape/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function f(t){var a,s,e,n,i,u,r;if(s=arguments.length,s===0)e=[];else if(s>1)for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);else if(h(t))e=[t];else if(g(t))e=t;else throw new TypeError(o('1ndFJ',t));for(u=e.length,a=[],r=0;r<u;r++)try{a.push(c(e[r]))}catch(b){throw new TypeError(o('1ndFK',e[r]))}if(i=d(a),i===null)throw new Error(o('1ndFH'));for(n=[],r=0;r<u;r++)n.push(p(e[r],i));return n}v.exports=f
});var y=l();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

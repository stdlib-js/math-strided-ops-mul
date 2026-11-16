"use strict";var e=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=e(function(pr,H){H.exports={nargs:10,nin:2,nout:1}});var j=e(function(lr,I){I.exports=[[14,15,11,12,17,4,6,1,5,7,2],[14,15,11,12,17,4,6,1,5,7,2],[14,15,11,12,17,4,6,1,5,7,2]]});var u=e(function(mr,h){
var J=require('@stdlib/strided-base-binary-dtype-signatures/dist'),y=j(),K=J(y[0],y[1],y[2],{enums:!0});h.exports=K
});var d=e(function(yr,R){
var L=require('@stdlib/number-float64-base-mul/dist'),M=require('@stdlib/complex-float64-base-mul/dist'),N=require('@stdlib/complex-float32-base-mul/dist'),Q=require('@stdlib/strided-base-binary-signature-callbacks/dist'),S=u(),T={default:L,complex64:N,complex128:M},U=Q(T,S);R.exports=U
});var k=e(function(dr,_){
var V=require('@stdlib/strided-dispatch/dist'),W=require('@stdlib/strided-base-binary/dist'),f=require('@stdlib/strided-base-dtype-resolve-enum/dist'),X=u(),x=s(),Y=d(),Z=V(W,X,Y,x.nargs,x.nin,x.nout);function $(a,r,i,v,q,o,c,p,l,m){return Z(a,f(r),i,v,f(q),o,c,f(p),l,m)}_.exports=$
});var O=e(function(fr,E){
var rr=require('@stdlib/strided-dispatch/dist'),er=require('@stdlib/strided-base-binary/dist').ndarray,b=require('@stdlib/strided-base-dtype-resolve-enum/dist'),ar=u(),t=s(),ir=d(),ur=rr(er,ar,ir,t.nargs+t.nin+t.nout,t.nin,t.nout);function tr(a,r,i,v,q,o,c,p,l,m,D,F,G){return ur(a,b(r),i,v,q,b(o),c,p,l,b(m),D,F,G)}E.exports=tr
});var B=e(function(xr,A){
var sr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=require('@stdlib/strided-base-meta-data-props/dist'),w=s(),z=u(),n=k(),nr=O();sr(n,"ndarray",nr);P(w,z,n,!1);P(w,z,n.ndarray,!0);A.exports=n
});var vr=require("path").join,qr=require('@stdlib/utils-try-require/dist'),or=B(),g,C=qr(vr(__dirname,"./native.js"));C instanceof Error?g=or:g=C;module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

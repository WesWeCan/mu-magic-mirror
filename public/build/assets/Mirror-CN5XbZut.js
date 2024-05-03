var $a=Object.defineProperty;var Na=(i,t,e)=>t in i?$a(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ke=(i,t,e)=>(Na(i,typeof t!="symbol"?t+"":t,e),e);import{e as fe,g as Fs,b as Dt,c as Zt,d as ne,K as Da,D as Ta,f as St,h as or,m as Mo,s as J,i as Ir,j as Rt,k as Lo,n as Fa,o as Ea,p as _a,q as Es,t as za,E as Ma,u as La,v as Oa,w as Ba,x as Wa,y as Ua,S as Va,z as Ga,F as Ha,A as ja,B as Xa,R as Ka,C as Ya,G as et,_ as qa,H as Oo,I as Qa,J as Za,L as Jt,M as Bo,N as Ja,O as eu,P as tu,Q as iu,T as ru,U as ou,V as su,W as Rr,X as ft,Y as ai,Z as ui,$ as Pr,a0 as nu,a1 as au,a2 as uu,a3 as lu,a4 as cu,a5 as hu,a6 as du,a7 as pu,a8 as fu,a9 as mu,aa as gu,ab as xu,ac as yu,ad as wu,ae as li,af as vu,ag as Ni,ah as Cu,ai as bu,aj as Su,ak as ku,al as Iu,am as Ru,an as Pu,ao as _s,ap as zs,aq as Ms,ar as Au,as as $u,at as Nu,au as Du,av as Tu,aw as Fu,ax as Eu,ay as Ls,az as _u,aA as zu,aB as Mu,aC as Lu,aD as ei,aE as Ou,aF as Bu,aG as Wu,aH as Uu,aI as ci,aJ as rt,aK as Vu,aL as Gu,aM as Hu,aN as Ar,aO as ju,aP as Xu,aQ as Ku,aR as Yu,aS as qu,aT as Os,aU as Qu,aV as Zu,aW as Ju,aX as el,aY as tl,aZ as il,a_ as rl,a$ as ol,b0 as sl,b1 as $r,b2 as nl,b3 as al,b4 as ul,b5 as ll,b6 as cl,b7 as hl,b8 as dl,b9 as pl,ba as fl,bb as ml,bc as gl,bd as xl,be as yl,bf as wl,bg as vl,bh as Cl,bi as bl,bj as Sl,bk as kl,bl as Il,bm as Rl,bn as Pl,bo as Al,bp as $l,bq as Nl,br as Dl,bs as Bs,bt as Tl,bu as Fl,bv as El,bw as _l,bx as zl,by as Ml,bz as Ll,bA as Ol,bB as Bl,bC as Wl,bD as Ul,bE as Vl,bF as Gl,bG as Hl,bH as jl,bI as Xl,bJ as Kl,bK as Yl,bL as ql,bM as Ql,bN as Zl,bO as Jl,bP as ec,bQ as tc,bR as ic,bS as rc,bT as oc,bU as sc,bV as nc,bW as ac,bX as uc,bY as lc,bZ as cc,b_ as hc,b$ as dc,c0 as pc,c1 as fc,c2 as mc,c3 as gc,c4 as xc,c5 as yc,c6 as wc,c7 as vc,c8 as Cc,c9 as bc,ca as Sc,cb as kc,cc as Ic,cd as Rc,ce as Pc,cf as Ac,cg as $c,ch as Nc,ci as Dc,cj as Tc,ck as Fc,cl as Ec,cm as _c,cn as zc,co as Mc,cp as Lc,cq as Oc,cr as Nr,cs as Bc,ct as Wc,cu as Uc,cv as Vc,cw as Gc,cx as Hc,cy as jc,cz as Xc,cA as Kc,cB as Yc,cC as qc,cD as Qc,cE as Zc,cF as Jc,cG as eh,cH as th,cI as ih,cJ as rh,cK as oh,cL as sh,cM as nh,cN as ah,cO as uh,cP as lh,cQ as ch,cR as hh,cS as dh,cT as ph,cU as fh,cV as mh,cW as gh,cX as xh,cY as yh,cZ as wh,c_ as Pt,c$ as ti,d0 as Tt,d1 as Dr,d2 as Kt,d3 as dt,d4 as be,d5 as ii,d6 as gr,d7 as vh,d8 as Pe,d9 as At,da as ce,db as kt,dc as Je,dd as Tr,de as Ae,df as Ws,dg as xe,dh as Te,di as ri,dj as It,dk as Ch,dl as bh,dm as Fe,dn as xr,dp as Sh,dq as qt,dr as Wo,ds as kh,dt as Ih,du as Rh}from"./Tables-D2og9A1K.js";import{y as sr}from"./app-CF6YtaFa.js";var Ph={};(function(){var i;function t(s){var l=0;return function(){return l<s.length?{done:!1,value:s[l++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,f){return s==Array.prototype||s==Object.prototype||(s[l]=f.value),s};function r(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof sr=="object"&&sr];for(var l=0;l<s.length;++l){var f=s[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var o=r(this);function n(s,l){if(l)e:{var f=o;s=s.split(".");for(var g=0;g<s.length-1;g++){var v=s[g];if(!(v in f))break e;f=f[v]}s=s[s.length-1],g=f[s],l=l(g),l!=g&&l!=null&&e(f,s,{configurable:!0,writable:!0,value:l})}}n("Symbol",function(s){function l(S){if(this instanceof l)throw new TypeError("Symbol is not a constructor");return new f(g+(S||"")+"_"+v++,S)}function f(S,C){this.h=S,e(this,"description",{configurable:!0,writable:!0,value:C})}if(s)return s;f.prototype.toString=function(){return this.h};var g="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",v=0;return l}),n("Symbol.iterator",function(s){if(s)return s;s=Symbol("Symbol.iterator");for(var l="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),f=0;f<l.length;f++){var g=o[l[f]];typeof g=="function"&&typeof g.prototype[s]!="function"&&e(g.prototype,s,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return s});function a(s){return s={next:s},s[Symbol.iterator]=function(){return this},s}function u(s){var l=typeof Symbol<"u"&&Symbol.iterator&&s[Symbol.iterator];return l?l.call(s):{next:t(s)}}function c(s){if(!(s instanceof Array)){s=u(s);for(var l,f=[];!(l=s.next()).done;)f.push(l.value);s=f}return s}var h=typeof Object.assign=="function"?Object.assign:function(s,l){for(var f=1;f<arguments.length;f++){var g=arguments[f];if(g)for(var v in g)Object.prototype.hasOwnProperty.call(g,v)&&(s[v]=g[v])}return s};n("Object.assign",function(s){return s||h});var p=typeof Object.create=="function"?Object.create:function(s){function l(){}return l.prototype=s,new l},d;if(typeof Object.setPrototypeOf=="function")d=Object.setPrototypeOf;else{var m;e:{var x={a:!0},y={};try{y.__proto__=x,m=y.a;break e}catch{}m=!1}d=m?function(s,l){if(s.__proto__=l,s.__proto__!==l)throw new TypeError(s+" is not extensible");return s}:null}var w=d;function b(s,l){if(s.prototype=p(l.prototype),s.prototype.constructor=s,w)w(s,l);else for(var f in l)if(f!="prototype")if(Object.defineProperties){var g=Object.getOwnPropertyDescriptor(l,f);g&&Object.defineProperty(s,f,g)}else s[f]=l[f];s.za=l.prototype}function I(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function R(s){if(s.m)throw new TypeError("Generator is already running");s.m=!0}I.prototype.u=function(s){this.i=s};function P(s,l){s.l={ma:l,na:!0},s.h=s.s||s.v}I.prototype.return=function(s){this.l={return:s},this.h=this.v};function A(s,l,f){return s.h=f,{value:l}}function N(s){this.h=new I,this.i=s}function D(s,l){R(s.h);var f=s.h.j;return f?T(s,"return"in f?f.return:function(g){return{value:g,done:!0}},l,s.h.return):(s.h.return(l),E(s))}function T(s,l,f,g){try{var v=l.call(s.h.j,f);if(!(v instanceof Object))throw new TypeError("Iterator result "+v+" is not an object");if(!v.done)return s.h.m=!1,v;var S=v.value}catch(C){return s.h.j=null,P(s.h,C),E(s)}return s.h.j=null,g.call(s.h,S),E(s)}function E(s){for(;s.h.h;)try{var l=s.i(s.h);if(l)return s.h.m=!1,{value:l.value,done:!1}}catch(f){s.h.i=void 0,P(s.h,f)}if(s.h.m=!1,s.h.l){if(l=s.h.l,s.h.l=null,l.na)throw l.ma;return{value:l.return,done:!0}}return{value:void 0,done:!0}}function F(s){this.next=function(l){return R(s.h),s.h.j?l=T(s,s.h.j.next,l,s.h.u):(s.h.u(l),l=E(s)),l},this.throw=function(l){return R(s.h),s.h.j?l=T(s,s.h.j.throw,l,s.h.u):(P(s.h,l),l=E(s)),l},this.return=function(l){return D(s,l)},this[Symbol.iterator]=function(){return this}}function W(s){function l(g){return s.next(g)}function f(g){return s.throw(g)}return new Promise(function(g,v){function S(C){C.done?g(C.value):Promise.resolve(C.value).then(l,f).then(S,v)}S(s.next())})}function B(s){return W(new F(new N(s)))}n("Promise",function(s){function l(C){this.i=0,this.j=void 0,this.h=[],this.u=!1;var k=this.l();try{C(k.resolve,k.reject)}catch($){k.reject($)}}function f(){this.h=null}function g(C){return C instanceof l?C:new l(function(k){k(C)})}if(s)return s;f.prototype.i=function(C){if(this.h==null){this.h=[];var k=this;this.j(function(){k.m()})}this.h.push(C)};var v=o.setTimeout;f.prototype.j=function(C){v(C,0)},f.prototype.m=function(){for(;this.h&&this.h.length;){var C=this.h;this.h=[];for(var k=0;k<C.length;++k){var $=C[k];C[k]=null;try{$()}catch(_){this.l(_)}}}this.h=null},f.prototype.l=function(C){this.j(function(){throw C})},l.prototype.l=function(){function C(_){return function(O){$||($=!0,_.call(k,O))}}var k=this,$=!1;return{resolve:C(this.I),reject:C(this.m)}},l.prototype.I=function(C){if(C===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(C instanceof l)this.L(C);else{e:switch(typeof C){case"object":var k=C!=null;break e;case"function":k=!0;break e;default:k=!1}k?this.F(C):this.s(C)}},l.prototype.F=function(C){var k=void 0;try{k=C.then}catch($){this.m($);return}typeof k=="function"?this.M(k,C):this.s(C)},l.prototype.m=function(C){this.v(2,C)},l.prototype.s=function(C){this.v(1,C)},l.prototype.v=function(C,k){if(this.i!=0)throw Error("Cannot settle("+C+", "+k+"): Promise already settled in state"+this.i);this.i=C,this.j=k,this.i===2&&this.K(),this.H()},l.prototype.K=function(){var C=this;v(function(){if(C.D()){var k=o.console;typeof k<"u"&&k.error(C.j)}},1)},l.prototype.D=function(){if(this.u)return!1;var C=o.CustomEvent,k=o.Event,$=o.dispatchEvent;return typeof $>"u"?!0:(typeof C=="function"?C=new C("unhandledrejection",{cancelable:!0}):typeof k=="function"?C=new k("unhandledrejection",{cancelable:!0}):(C=o.document.createEvent("CustomEvent"),C.initCustomEvent("unhandledrejection",!1,!0,C)),C.promise=this,C.reason=this.j,$(C))},l.prototype.H=function(){if(this.h!=null){for(var C=0;C<this.h.length;++C)S.i(this.h[C]);this.h=null}};var S=new f;return l.prototype.L=function(C){var k=this.l();C.T(k.resolve,k.reject)},l.prototype.M=function(C,k){var $=this.l();try{C.call(k,$.resolve,$.reject)}catch(_){$.reject(_)}},l.prototype.then=function(C,k){function $(j,V){return typeof j=="function"?function(q){try{_(j(q))}catch(te){O(te)}}:V}var _,O,Y=new l(function(j,V){_=j,O=V});return this.T($(C,_),$(k,O)),Y},l.prototype.catch=function(C){return this.then(void 0,C)},l.prototype.T=function(C,k){function $(){switch(_.i){case 1:C(_.j);break;case 2:k(_.j);break;default:throw Error("Unexpected state: "+_.i)}}var _=this;this.h==null?S.i($):this.h.push($),this.u=!0},l.resolve=g,l.reject=function(C){return new l(function(k,$){$(C)})},l.race=function(C){return new l(function(k,$){for(var _=u(C),O=_.next();!O.done;O=_.next())g(O.value).T(k,$)})},l.all=function(C){var k=u(C),$=k.next();return $.done?g([]):new l(function(_,O){function Y(q){return function(te){j[q]=te,V--,V==0&&_(j)}}var j=[],V=0;do j.push(void 0),V++,g($.value).T(Y(j.length-1),O),$=k.next();while(!$.done)})},l});function X(s,l){s instanceof String&&(s+="");var f=0,g=!1,v={next:function(){if(!g&&f<s.length){var S=f++;return{value:l(S,s[S]),done:!1}}return g=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}n("Array.prototype.keys",function(s){return s||function(){return X(this,function(l){return l})}}),n("Array.prototype.fill",function(s){return s||function(l,f,g){var v=this.length||0;for(0>f&&(f=Math.max(0,v+f)),(g==null||g>v)&&(g=v),g=Number(g),0>g&&(g=Math.max(0,v+g)),f=Number(f||0);f<g;f++)this[f]=l;return this}});function G(s){return s||Array.prototype.fill}n("Int8Array.prototype.fill",G),n("Uint8Array.prototype.fill",G),n("Uint8ClampedArray.prototype.fill",G),n("Int16Array.prototype.fill",G),n("Uint16Array.prototype.fill",G),n("Int32Array.prototype.fill",G),n("Uint32Array.prototype.fill",G),n("Float32Array.prototype.fill",G),n("Float64Array.prototype.fill",G),n("Object.is",function(s){return s||function(l,f){return l===f?l!==0||1/l===1/f:l!==l&&f!==f}}),n("Array.prototype.includes",function(s){return s||function(l,f){var g=this;g instanceof String&&(g=String(g));var v=g.length;for(f=f||0,0>f&&(f=Math.max(f+v,0));f<v;f++){var S=g[f];if(S===l||Object.is(S,l))return!0}return!1}}),n("String.prototype.includes",function(s){return s||function(l,f){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(l instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(l,f||0)!==-1}});var Q=this||self;function Z(s,l){s=s.split(".");var f=Q;s[0]in f||typeof f.execScript>"u"||f.execScript("var "+s[0]);for(var g;s.length&&(g=s.shift());)s.length||l===void 0?f[g]&&f[g]!==Object.prototype[g]?f=f[g]:f=f[g]={}:f[g]=l}function ie(s){var l;e:{if((l=Q.navigator)&&(l=l.userAgent))break e;l=""}return l.indexOf(s)!=-1}var we=Array.prototype.map?function(s,l){return Array.prototype.map.call(s,l,void 0)}:function(s,l){for(var f=s.length,g=Array(f),v=typeof s=="string"?s.split(""):s,S=0;S<f;S++)S in v&&(g[S]=l.call(void 0,v[S],S,s));return g},Se={},me=null;function Be(s){var l=s.length,f=3*l/4;f%3?f=Math.floor(f):"=.".indexOf(s[l-1])!=-1&&(f="=.".indexOf(s[l-2])!=-1?f-2:f-1);var g=new Uint8Array(f),v=0;return Me(s,function(S){g[v++]=S}),v!==f?g.subarray(0,v):g}function Me(s,l){function f($){for(;g<s.length;){var _=s.charAt(g++),O=me[_];if(O!=null)return O;if(!/^[\s\xa0]*$/.test(_))throw Error("Unknown base64 encoding at char: "+_)}return $}zt();for(var g=0;;){var v=f(-1),S=f(0),C=f(64),k=f(64);if(k===64&&v===-1)break;l(v<<2|S>>4),C!=64&&(l(S<<4&240|C>>2),k!=64&&l(C<<6&192|k))}}function zt(){if(!me){me={};for(var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),l=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=s.concat(l[f].split(""));Se[f]=g;for(var v=0;v<g.length;v++){var S=g[v];me[S]===void 0&&(me[S]=v)}}}}var Mt=typeof Uint8Array<"u",di=!(ie("Trident")||ie("MSIE"))&&typeof Q.btoa=="function";function Lr(s){if(!di){var l;l===void 0&&(l=0),zt(),l=Se[l];for(var f=Array(Math.floor(s.length/3)),g=l[64]||"",v=0,S=0;v<s.length-2;v+=3){var C=s[v],k=s[v+1],$=s[v+2],_=l[C>>2];C=l[(C&3)<<4|k>>4],k=l[(k&15)<<2|$>>6],$=l[$&63],f[S++]=_+C+k+$}switch(_=0,$=g,s.length-v){case 2:_=s[v+1],$=l[(_&15)<<2]||g;case 1:s=s[v],f[S]=l[s>>2]+l[(s&3)<<4|_>>4]+$+g}return f.join("")}for(l="";10240<s.length;)l+=String.fromCharCode.apply(null,s.subarray(0,10240)),s=s.subarray(10240);return l+=String.fromCharCode.apply(null,s),btoa(l)}var Or=RegExp("[-_.]","g");function _n(s){switch(s){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Br(s){if(!di)return Be(s);Or.test(s)&&(s=s.replace(Or,_n)),s=atob(s);for(var l=new Uint8Array(s.length),f=0;f<s.length;f++)l[f]=s.charCodeAt(f);return l}var Wr;function _i(){return Wr||(Wr=new Uint8Array(0))}var Lt={},zn=typeof Uint8Array.prototype.slice=="function",ge=0,Re=0;function Ur(s){var l=0>s;s=Math.abs(s);var f=s>>>0;s=Math.floor((s-f)/4294967296),l&&(f=u(Vr(f,s)),l=f.next().value,s=f.next().value,f=l),ge=f>>>0,Re=s>>>0}var Mn=typeof BigInt=="function";function Vr(s,l){return l=~l,s?s=~s+1:l+=1,[s,l]}function Gr(s,l){this.i=s>>>0,this.h=l>>>0}function Hr(s){if(!s)return jr||(jr=new Gr(0,0));if(!/^-?\d+$/.test(s))return null;if(16>s.length)Ur(Number(s));else if(Mn)s=BigInt(s),ge=Number(s&BigInt(4294967295))>>>0,Re=Number(s>>BigInt(32)&BigInt(4294967295));else{var l=+(s[0]==="-");Re=ge=0;for(var f=s.length,g=l,v=(f-l)%6+l;v<=f;g=v,v+=6)g=Number(s.slice(g,v)),Re*=1e6,ge=1e6*ge+g,4294967296<=ge&&(Re+=ge/4294967296|0,ge%=4294967296);l&&(l=u(Vr(ge,Re)),s=l.next().value,l=l.next().value,ge=s,Re=l)}return new Gr(ge,Re)}var jr;function Xr(s,l){return Error("Invalid wire type: "+s+" (at position "+l+")")}function zi(){return Error("Failed to read varint, encoding is invalid.")}function Kr(s,l){return Error("Tried to read past the end of the data "+l+" > "+s)}function st(){throw Error("Invalid UTF8")}function Yr(s,l){return l=String.fromCharCode.apply(null,l),s==null?l:s+l}var pi=void 0,Mi,Ln=typeof TextDecoder<"u",qr,On=typeof TextEncoder<"u",Qr;function Zr(s){if(s!==Lt)throw Error("illegal external caller")}function Ot(s,l){if(Zr(l),this.V=s,s!=null&&s.length===0)throw Error("ByteString should be constructed with non-empty values")}function Li(){return Qr||(Qr=new Ot(null,Lt))}function Jr(s){Zr(Lt);var l=s.V;return l=l==null||Mt&&l!=null&&l instanceof Uint8Array?l:typeof l=="string"?Br(l):null,l==null?l:s.V=l}function Bn(s){if(typeof s=="string")return{buffer:Br(s),C:!1};if(Array.isArray(s))return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Uint8Array)return{buffer:s,C:!1};if(s.constructor===ArrayBuffer)return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Ot)return{buffer:Jr(s)||_i(),C:!0};if(s instanceof Uint8Array)return{buffer:new Uint8Array(s.buffer,s.byteOffset,s.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function eo(s,l){this.i=null,this.m=!1,this.h=this.j=this.l=0,Oi(this,s,l)}function Oi(s,l,f){f=f===void 0?{}:f,s.S=f.S===void 0?!1:f.S,l&&(l=Bn(l),s.i=l.buffer,s.m=l.C,s.l=0,s.j=s.i.length,s.h=s.l)}eo.prototype.reset=function(){this.h=this.l};function nt(s,l){if(s.h=l,l>s.j)throw Kr(s.j,l)}function Bt(s){var l=s.i,f=s.h,g=l[f++],v=g&127;if(g&128&&(g=l[f++],v|=(g&127)<<7,g&128&&(g=l[f++],v|=(g&127)<<14,g&128&&(g=l[f++],v|=(g&127)<<21,g&128&&(g=l[f++],v|=g<<28,g&128&&l[f++]&128&&l[f++]&128&&l[f++]&128&&l[f++]&128&&l[f++]&128)))))throw zi();return nt(s,f),v}function to(s,l){if(0>l)throw Error("Tried to read a negative byte length: "+l);var f=s.h,g=f+l;if(g>s.j)throw Kr(l,s.j-f);return s.h=g,f}var io=[];function Bi(){this.h=[]}Bi.prototype.length=function(){return this.h.length},Bi.prototype.end=function(){var s=this.h;return this.h=[],s};function ro(s,l,f){for(;0<f||127<l;)s.h.push(l&127|128),l=(l>>>7|f<<25)>>>0,f>>>=7;s.h.push(l)}function at(s,l){for(;127<l;)s.h.push(l&127|128),l>>>=7;s.h.push(l)}function Wi(s,l){if(io.length){var f=io.pop();Oi(f,s,l),s=f}else s=new eo(s,l);this.h=s,this.j=this.h.h,this.i=this.l=-1,this.setOptions(l)}Wi.prototype.setOptions=function(s){s=s===void 0?{}:s,this.ca=s.ca===void 0?!1:s.ca},Wi.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function oo(s){var l=s.h;if(l.h==l.j)return!1;s.j=s.h.h;var f=Bt(s.h)>>>0;if(l=f>>>3,f&=7,!(0<=f&&5>=f))throw Xr(f,s.j);if(1>l)throw Error("Invalid field number: "+l+" (at position "+s.j+")");return s.l=l,s.i=f,!0}function fi(s){switch(s.i){case 0:if(s.i!=0)fi(s);else e:{s=s.h;for(var l=s.h,f=l+10,g=s.i;l<f;)if(!(g[l++]&128)){nt(s,l);break e}throw zi()}break;case 1:s=s.h,nt(s,s.h+8);break;case 2:s.i!=2?fi(s):(l=Bt(s.h)>>>0,s=s.h,nt(s,s.h+l));break;case 5:s=s.h,nt(s,s.h+4);break;case 3:l=s.l;do{if(!oo(s))throw Error("Unmatched start-group tag: stream EOF");if(s.i==4){if(s.l!=l)throw Error("Unmatched end-group tag");break}fi(s)}while(!0);break;default:throw Xr(s.i,s.j)}}var mi=[];function Wn(){this.j=[],this.i=0,this.h=new Bi}function yt(s,l){l.length!==0&&(s.j.push(l),s.i+=l.length)}function Un(s,l){if(l=l.R){yt(s,s.h.end());for(var f=0;f<l.length;f++)yt(s,Jr(l[f])||_i())}}var Ye=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function ut(s,l){return Ye?s[Ye]|=l:s.A!==void 0?s.A|=l:(Object.defineProperties(s,{A:{value:l,configurable:!0,writable:!0,enumerable:!1}}),l)}function so(s,l){Ye?s[Ye]&&(s[Ye]&=~l):s.A!==void 0&&(s.A&=~l)}function pe(s){var l;return Ye?l=s[Ye]:l=s.A,l??0}function We(s,l){Ye?s[Ye]=l:s.A!==void 0?s.A=l:Object.defineProperties(s,{A:{value:l,configurable:!0,writable:!0,enumerable:!1}})}function Ui(s){return ut(s,1),s}function Vn(s,l){We(l,(s|0)&-51)}function gi(s,l){We(l,(s|18)&-41)}var Vi={};function xi(s){return s!==null&&typeof s=="object"&&!Array.isArray(s)&&s.constructor===Object}var Wt,no=[];We(no,23),Wt=Object.freeze(no);function Gi(s){if(pe(s.o)&2)throw Error("Cannot mutate an immutable Message")}function Hi(s){var l=s.length;(l=l?s[l-1]:void 0)&&xi(l)?l.g=1:(l={},s.push((l.g=1,l)))}function ao(s){var l=s.i+s.G;return s.B||(s.B=s.o[l]={})}function Le(s,l){return l===-1?null:l>=s.i?s.B?s.B[l]:void 0:s.o[l+s.G]}function Ue(s,l,f,g){Gi(s),Ut(s,l,f,g)}function Ut(s,l,f,g){s.j&&(s.j=void 0),l>=s.i||g?ao(s)[l]=f:(s.o[l+s.G]=f,(s=s.B)&&l in s&&delete s[l])}function ji(s,l,f,g){var v=Le(s,l);Array.isArray(v)||(v=Wt);var S=pe(v);if(S&1||Ui(v),g)S&2||ut(v,2),f&1||Object.freeze(v);else{g=!(f&2);var C=S&2;f&1||!C?g&&S&16&&!C&&so(v,16):(v=Ui(Array.prototype.slice.call(v)),Ut(s,l,v))}return v}function Xi(s,l){var f=Le(s,l),g=f==null?f:typeof f=="number"||f==="NaN"||f==="Infinity"||f==="-Infinity"?Number(f):void 0;return g!=null&&g!==f&&Ut(s,l,g),g}function uo(s,l,f,g,v){s.h||(s.h={});var S=s.h[f],C=ji(s,f,3,v);if(!S){var k=C;S=[];var $=!!(pe(s.o)&16);C=!!(pe(k)&2);var _=k;!v&&C&&(k=Array.prototype.slice.call(k));for(var O=C,Y=0;Y<k.length;Y++){var j=k[Y],V=l,q=!1;if(q=q===void 0?!1:q,j=Array.isArray(j)?new V(j):q?new V:void 0,j!==void 0){V=j.o;var te=q=pe(V);C&&(te|=2),$&&(te|=16),te!=q&&We(V,te),V=te,O=O||!!(2&V),S.push(j)}}return s.h[f]=S,$=pe(k),l=$|33,l=O?l&-9:l|8,$!=l&&(O=k,Object.isFrozen(O)&&(O=Array.prototype.slice.call(O)),We(O,l),k=O),_!==k&&Ut(s,f,k),(v||g&&C)&&ut(S,2),g&&Object.freeze(S),S}return v||(v=Object.isFrozen(S),g&&!v?Object.freeze(S):!g&&v&&(S=Array.prototype.slice.call(S),s.h[f]=S)),S}function Ki(s,l,f){var g=!!(pe(s.o)&2);if(l=uo(s,l,f,g,g),s=ji(s,f,3,g),!(g||pe(s)&8)){for(g=0;g<l.length;g++){if(f=l[g],pe(f.o)&2){var v=mo(f,!1);v.j=f}else v=f;f!==v&&(l[g]=v,s[g]=v.o)}ut(s,8)}return l}function Ve(s,l,f){if(f!=null&&typeof f!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof f+": "+f);Ue(s,l,f)}function lo(s,l,f,g,v){Gi(s);var S=uo(s,f,l,!1,!1);return f=g??new f,s=ji(s,l,2,!1),v!=null?(S.splice(v,0,f),s.splice(v,0,f.o)):(S.push(f),s.push(f.o)),f.C()&&so(s,8),f}function yi(s,l){return s??l}function Ge(s,l,f){return f=f===void 0?0:f,yi(Xi(s,l),f)}var wi;function Gn(s){switch(typeof s){case"number":return isFinite(s)?s:String(s);case"object":if(s)if(Array.isArray(s)){if(pe(s)&128)return s=Array.prototype.slice.call(s),Hi(s),s}else{if(Mt&&s!=null&&s instanceof Uint8Array)return Lr(s);if(s instanceof Ot){var l=s.V;return l==null?"":typeof l=="string"?l:s.V=Lr(l)}}}return s}function co(s,l,f,g){if(s!=null){if(Array.isArray(s))s=Yi(s,l,f,g!==void 0);else if(xi(s)){var v={},S;for(S in s)v[S]=co(s[S],l,f,g);s=v}else s=l(s,g);return s}}function Yi(s,l,f,g){var v=pe(s);g=g?!!(v&16):void 0,s=Array.prototype.slice.call(s);for(var S=0;S<s.length;S++)s[S]=co(s[S],l,f,g);return f(v,s),s}function Hn(s){return s.ja===Vi?s.toJSON():Gn(s)}function jn(s,l){s&128&&Hi(l)}function ho(s,l,f){if(f=f===void 0?gi:f,s!=null){if(Mt&&s instanceof Uint8Array)return s.length?new Ot(new Uint8Array(s),Lt):Li();if(Array.isArray(s)){var g=pe(s);return g&2?s:l&&!(g&32)&&(g&16||g===0)?(We(s,g|2),s):(s=Yi(s,ho,g&4?gi:f,!0),l=pe(s),l&4&&l&2&&Object.freeze(s),s)}return s.ja===Vi?fo(s):s}}function po(s,l,f,g,v,S,C){if(s=s.h&&s.h[f]){if(g=pe(s),g&2?g=s:(S=we(s,fo),gi(g,S),Object.freeze(S),g=S),Gi(l),C=g==null?Wt:Ui([]),g!=null){for(S=!!g.length,s=0;s<g.length;s++){var k=g[s];S=S&&!(pe(k.o)&2),C[s]=k.o}S=(S?8:0)|1,s=pe(C),(s&S)!==S&&(Object.isFrozen(C)&&(C=Array.prototype.slice.call(C)),We(C,s|S)),l.h||(l.h={}),l.h[f]=g}else l.h&&(l.h[f]=void 0);Ut(l,f,C,v)}else Ue(l,f,ho(g,S,C),v)}function fo(s){return pe(s.o)&2||(s=mo(s,!0),ut(s.o,2)),s}function mo(s,l){var f=s.o,g=[];ut(g,16);var v=s.constructor.h;if(v&&g.push(v),v=s.B,v){g.length=f.length,g.fill(void 0,g.length,f.length);var S={};g[g.length-1]=S}pe(f)&128&&Hi(g),l=l||s.C()?gi:Vn,S=s.constructor,wi=g,g=new S(g),wi=void 0,s.R&&(g.R=s.R.slice()),S=!!(pe(f)&16);for(var C=v?f.length-1:f.length,k=0;k<C;k++)po(s,g,k-s.G,f[k],!1,S,l);if(v)for(var $ in v)po(s,g,+$,v[$],!0,S,l);return g}function Ne(s,l,f){s==null&&(s=wi),wi=void 0;var g=this.constructor.i||0,v=0<g,S=this.constructor.h,C=!1;if(s==null){s=S?[S]:[];var k=48,$=!0;v&&(g=0,k|=128),We(s,k)}else{if(!Array.isArray(s)||S&&S!==s[0])throw Error();var _=k=ut(s,0);if(($=(16&_)!==0)&&((C=(32&_)!==0)||(_|=32)),v){if(128&_)g=0;else if(0<s.length){var O=s[s.length-1];if(xi(O)&&"g"in O){g=0,_|=128,delete O.g;var Y=!0,j;for(j in O){Y=!1;break}Y&&s.pop()}}}else if(128&_)throw Error();k!==_&&We(s,_)}this.G=(S?0:-1)-g,this.h=void 0,this.o=s;e:{if(S=this.o.length,g=S-1,S&&(S=this.o[g],xi(S))){this.B=S,this.i=g-this.G;break e}l!==void 0&&-1<l?(this.i=Math.max(l,g+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!v&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(f){l=$&&!C&&!0,v=this.i;var V;for($=0;$<f.length;$++)C=f[$],C<v?(C+=this.G,(g=s[C])?go(g,l):s[C]=Wt):(V||(V=ao(this)),(g=V[C])?go(g,l):V[C]=Wt)}}Ne.prototype.toJSON=function(){return Yi(this.o,Hn,jn)},Ne.prototype.C=function(){return!!(pe(this.o)&2)};function go(s,l){if(Array.isArray(s)){var f=pe(s),g=1;!l||f&2||(g|=16),(f&g)!==g&&We(s,f|g)}}Ne.prototype.ja=Vi,Ne.prototype.toString=function(){return this.o.toString()};function xo(s,l,f){if(f){var g={},v;for(v in f){var S=f[v],C=S.ra;C||(g.J=S.xa||S.oa.W,S.ia?(g.aa=bo(S.ia),C=function(k){return function($,_,O){return k.J($,_,O,k.aa)}}(g)):S.ka?(g.Z=So(S.da.P,S.ka),C=function(k){return function($,_,O){return k.J($,_,O,k.Z)}}(g)):C=g.J,S.ra=C),C(l,s,S.da),g={J:g.J,aa:g.aa,Z:g.Z}}}Un(l,s)}var vi=Symbol();function yo(s,l,f){return s[vi]||(s[vi]=function(g,v){return l(g,v,f)})}function wo(s){var l=s[vi];if(!l){var f=Qi(s);l=function(g,v){return ko(g,v,f)},s[vi]=l}return l}function Xn(s){var l=s.ia;if(l)return wo(l);if(l=s.wa)return yo(s.da.P,l,s.ka)}function Kn(s){var l=Xn(s),f=s.da,g=s.oa.U;return l?function(v,S){return g(v,S,f,l)}:function(v,S){return g(v,S,f)}}function vo(s,l){var f=s[l];return typeof f=="function"&&f.length===0&&(f=f(),s[l]=f),Array.isArray(f)&&(Gt in f||Vt in f||0<f.length&&typeof f[0]=="function")?f:void 0}function Co(s,l,f,g,v,S){l.P=s[0];var C=1;if(s.length>C&&typeof s[C]!="number"){var k=s[C++];f(l,k)}for(;C<s.length;){f=s[C++];for(var $=C+1;$<s.length&&typeof s[$]!="number";)$++;switch(k=s[C++],$-=C,$){case 0:g(l,f,k);break;case 1:($=vo(s,C))?(C++,v(l,f,k,$)):g(l,f,k,s[C++]);break;case 2:$=C++,$=vo(s,$),v(l,f,k,$,s[C++]);break;case 3:S(l,f,k,s[C++],s[C++],s[C++]);break;case 4:S(l,f,k,s[C++],s[C++],s[C++],s[C++]);break;default:throw Error("unexpected number of binary field arguments: "+$)}}return l}var Ci=Symbol();function bo(s){var l=s[Ci];if(!l){var f=qi(s);l=function(g,v){return Io(g,v,f)},s[Ci]=l}return l}function So(s,l){var f=s[Ci];return f||(f=function(g,v){return xo(g,v,l)},s[Ci]=f),f}var Vt=Symbol();function Yn(s,l){s.push(l)}function qn(s,l,f){s.push(l,f.W)}function Qn(s,l,f,g){var v=bo(g),S=qi(g).P,C=f.W;s.push(l,function(k,$,_){return C(k,$,_,S,v)})}function Zn(s,l,f,g,v,S){var C=So(g,S),k=f.W;s.push(l,function($,_,O){return k($,_,O,g,C)})}function qi(s){var l=s[Vt];return l||(l=Co(s,s[Vt]=[],Yn,qn,Qn,Zn),Gt in s&&Vt in s&&(s.length=0),l)}var Gt=Symbol();function Jn(s,l){s[0]=l}function ea(s,l,f,g){var v=f.U;s[l]=g?function(S,C,k){return v(S,C,k,g)}:v}function ta(s,l,f,g,v){var S=f.U,C=wo(g),k=Qi(g).P;s[l]=function($,_,O){return S($,_,O,k,C,v)}}function ia(s,l,f,g,v,S,C){var k=f.U,$=yo(g,v,S);s[l]=function(_,O,Y){return k(_,O,Y,g,$,C)}}function Qi(s){var l=s[Gt];return l||(l=Co(s,s[Gt]={},Jn,ea,ta,ia),Gt in s&&Vt in s&&(s.length=0),l)}function ko(s,l,f){for(;oo(l)&&l.i!=4;){var g=l.l,v=f[g];if(!v){var S=f[0];S&&(S=S[g])&&(v=f[g]=Kn(S))}if(!v||!v(l,s,g)){v=l,g=s,S=v.j,fi(v);var C=v;if(!C.ca){if(v=C.h.h-S,C.h.h=S,C=C.h,v==0)v=Li();else{if(S=to(C,v),C.S&&C.m)v=C.i.subarray(S,S+v);else{C=C.i;var k=S;v=S+v,v=k===v?_i():zn?C.slice(k,v):new Uint8Array(C.subarray(k,v))}v=v.length==0?Li():new Ot(v,Lt)}(S=g.R)?S.push(v):g.R=[v]}}}return s}function Io(s,l,f){for(var g=f.length,v=g%2==1,S=v?1:0;S<g;S+=2)(0,f[S+1])(l,s,f[S]);xo(s,l,v?f[0]:void 0)}function Ht(s,l){return{U:s,W:l}}var Oe=Ht(function(s,l,f){if(s.i!==5)return!1;s=s.h;var g=s.i,v=s.h,S=g[v],C=g[v+1],k=g[v+2];return g=g[v+3],nt(s,s.h+4),C=(S<<0|C<<8|k<<16|g<<24)>>>0,s=2*(C>>31)+1,S=C>>>23&255,C&=8388607,Ue(l,f,S==255?C?NaN:1/0*s:S==0?s*Math.pow(2,-149)*C:s*Math.pow(2,S-150)*(C+Math.pow(2,23))),!0},function(s,l,f){if(l=Xi(l,f),l!=null){at(s.h,8*f+5),s=s.h;var g=+l;g===0?0<1/g?ge=Re=0:(Re=0,ge=2147483648):isNaN(g)?(Re=0,ge=2147483647):(g=(f=0>g?-2147483648:0)?-g:g,34028234663852886e22<g?(Re=0,ge=(f|2139095040)>>>0):11754943508222875e-54>g?(g=Math.round(g/Math.pow(2,-149)),Re=0,ge=(f|g)>>>0):(l=Math.floor(Math.log(g)/Math.LN2),g*=Math.pow(2,-l),g=Math.round(8388608*g),16777216<=g&&++l,Re=0,ge=(f|l+127<<23|g&8388607)>>>0)),f=ge,s.h.push(f>>>0&255),s.h.push(f>>>8&255),s.h.push(f>>>16&255),s.h.push(f>>>24&255)}}),ra=Ht(function(s,l,f){if(s.i!==0)return!1;var g=s.h,v=0,S=s=0,C=g.i,k=g.h;do{var $=C[k++];v|=($&127)<<S,S+=7}while(32>S&&$&128);for(32<S&&(s|=($&127)>>4),S=3;32>S&&$&128;S+=7)$=C[k++],s|=($&127)<<S;if(nt(g,k),128>$)g=v>>>0,$=s>>>0,(s=$&2147483648)&&(g=~g+1>>>0,$=~$>>>0,g==0&&($=$+1>>>0)),g=4294967296*$+(g>>>0);else throw zi();return Ue(l,f,s?-g:g),!0},function(s,l,f){l=Le(l,f),l!=null&&(typeof l=="string"&&Hr(l),l!=null&&(at(s.h,8*f),typeof l=="number"?(s=s.h,Ur(l),ro(s,ge,Re)):(f=Hr(l),ro(s.h,f.i,f.h))))}),oa=Ht(function(s,l,f){return s.i!==0?!1:(Ue(l,f,Bt(s.h)),!0)},function(s,l,f){if(l=Le(l,f),l!=null&&l!=null)if(at(s.h,8*f),s=s.h,f=l,0<=f)at(s,f);else{for(l=0;9>l;l++)s.h.push(f&127|128),f>>=7;s.h.push(1)}}),Ro=Ht(function(s,l,f){if(s.i!==2)return!1;var g=Bt(s.h)>>>0;s=s.h;var v=to(s,g);if(s=s.i,Ln){var S=s,C;(C=Mi)||(C=Mi=new TextDecoder("utf-8",{fatal:!0})),s=v+g,S=v===0&&s===S.length?S:S.subarray(v,s);try{var k=C.decode(S)}catch(Y){if(pi===void 0){try{C.decode(new Uint8Array([128]))}catch{}try{C.decode(new Uint8Array([97])),pi=!0}catch{pi=!1}}throw!pi&&(Mi=void 0),Y}}else{k=v,g=k+g,v=[];for(var $=null,_,O;k<g;)_=s[k++],128>_?v.push(_):224>_?k>=g?st():(O=s[k++],194>_||(O&192)!==128?(k--,st()):v.push((_&31)<<6|O&63)):240>_?k>=g-1?st():(O=s[k++],(O&192)!==128||_===224&&160>O||_===237&&160<=O||((S=s[k++])&192)!==128?(k--,st()):v.push((_&15)<<12|(O&63)<<6|S&63)):244>=_?k>=g-2?st():(O=s[k++],(O&192)!==128||(_<<28)+(O-144)>>30||((S=s[k++])&192)!==128||((C=s[k++])&192)!==128?(k--,st()):(_=(_&7)<<18|(O&63)<<12|(S&63)<<6|C&63,_-=65536,v.push((_>>10&1023)+55296,(_&1023)+56320))):st(),8192<=v.length&&($=Yr($,v),v.length=0);k=Yr($,v)}return Ue(l,f,k),!0},function(s,l,f){if(l=Le(l,f),l!=null){var g=!1;if(g=g===void 0?!1:g,On){if(g&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(l))throw Error("Found an unpaired surrogate");l=(qr||(qr=new TextEncoder)).encode(l)}else{for(var v=0,S=new Uint8Array(3*l.length),C=0;C<l.length;C++){var k=l.charCodeAt(C);if(128>k)S[v++]=k;else{if(2048>k)S[v++]=k>>6|192;else{if(55296<=k&&57343>=k){if(56319>=k&&C<l.length){var $=l.charCodeAt(++C);if(56320<=$&&57343>=$){k=1024*(k-55296)+$-56320+65536,S[v++]=k>>18|240,S[v++]=k>>12&63|128,S[v++]=k>>6&63|128,S[v++]=k&63|128;continue}else C--}if(g)throw Error("Found an unpaired surrogate");k=65533}S[v++]=k>>12|224,S[v++]=k>>6&63|128}S[v++]=k&63|128}}l=v===S.length?S:S.subarray(0,v)}at(s.h,8*f+2),at(s.h,l.length),yt(s,s.h.end()),yt(s,l)}}),Po=Ht(function(s,l,f,g,v){if(s.i!==2)return!1;l=lo(l,f,g),f=s.h.j,g=Bt(s.h)>>>0;var S=s.h.h+g,C=S-f;if(0>=C&&(s.h.j=S,v(l,s,void 0,void 0,void 0),C=S-s.h.h),C)throw Error("Message parsing ended unexpectedly. Expected to read "+(g+" bytes, instead read "+(g-C)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return s.h.h=S,s.h.j=f,!0},function(s,l,f,g,v){if(l=Ki(l,g,f),l!=null)for(g=0;g<l.length;g++){var S=s;at(S.h,8*f+2);var C=S.h.end();yt(S,C),C.push(S.i),S=C,v(l[g],s),C=s;var k=S.pop();for(k=C.i+C.h.length()-k;127<k;)S.push(k&127|128),k>>>=7,C.i++;S.push(k),C.i++}});function Zi(s){return function(l,f){e:{if(mi.length){var g=mi.pop();g.setOptions(f),Oi(g.h,l,f),l=g}else l=new Wi(l,f);try{var v=Qi(s),S=ko(new v.P,l,v);break e}finally{v=l.h,v.i=null,v.m=!1,v.l=0,v.j=0,v.h=0,v.S=!1,l.l=-1,l.i=-1,100>mi.length&&mi.push(l)}S=void 0}return S}}function Ji(s){return function(){var l=new Wn;Io(this,l,qi(s)),yt(l,l.h.end());for(var f=new Uint8Array(l.i),g=l.j,v=g.length,S=0,C=0;C<v;C++){var k=g[C];f.set(k,S),S+=k.length}return l.j=[f],f}}function wt(s){Ne.call(this,s)}b(wt,Ne);var Ao=[wt,1,oa,2,Oe,3,Ro,4,Ro];wt.prototype.l=Ji(Ao);function er(s){Ne.call(this,s,-1,sa)}b(er,Ne),er.prototype.addClassification=function(s,l){return lo(this,1,wt,s,l),this};var sa=[1],na=Zi([er,1,Po,Ao]);function jt(s){Ne.call(this,s)}b(jt,Ne);var $o=[jt,1,Oe,2,Oe,3,Oe,4,Oe,5,Oe];jt.prototype.l=Ji($o);function No(s){Ne.call(this,s,-1,aa)}b(No,Ne);var aa=[1],ua=Zi([No,1,Po,$o]);function bi(s){Ne.call(this,s)}b(bi,Ne);var Do=[bi,1,Oe,2,Oe,3,Oe,4,Oe,5,Oe,6,ra],la=Zi(Do);bi.prototype.l=Ji(Do);function To(s,l,f){if(f=s.createShader(f===0?s.VERTEX_SHADER:s.FRAGMENT_SHADER),s.shaderSource(f,l),s.compileShader(f),!s.getShaderParameter(f,s.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+s.getShaderInfoLog(f));return f}function ca(s){return Ki(s,wt,1).map(function(l){var f=Le(l,1);return{index:f??0,qa:Ge(l,2),label:Le(l,3)!=null?yi(Le(l,3),""):void 0,displayName:Le(l,4)!=null?yi(Le(l,4),""):void 0}})}function ha(s){return{x:Ge(s,1),y:Ge(s,2),z:Ge(s,3),visibility:Xi(s,4)!=null?Ge(s,4):void 0}}function tr(s){return Ki(ua(s),jt,1).map(ha)}function ir(s,l){this.i=s,this.h=l,this.m=0}function Fo(s,l,f){return da(s,l),typeof s.h.canvas.transferToImageBitmap=="function"?Promise.resolve(s.h.canvas.transferToImageBitmap()):f?Promise.resolve(s.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(s.h.canvas):(s.j===void 0&&(s.j=document.createElement("canvas")),new Promise(function(g){s.j.height=s.h.canvas.height,s.j.width=s.h.canvas.width,s.j.getContext("2d",{}).drawImage(s.h.canvas,0,0,s.h.canvas.width,s.h.canvas.height),g(s.j)}))}function da(s,l){var f=s.h;if(s.s===void 0){var g=To(f,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),v=To(f,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),S=f.createProgram();if(f.attachShader(S,g),f.attachShader(S,v),f.linkProgram(S),!f.getProgramParameter(S,f.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+f.getProgramInfoLog(S));g=s.s=S,f.useProgram(g),v=f.getUniformLocation(g,"sampler0"),s.l={O:f.getAttribLocation(g,"aVertex"),N:f.getAttribLocation(g,"aTex"),ya:v},s.v=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,s.v),f.enableVertexAttribArray(s.l.O),f.vertexAttribPointer(s.l.O,2,f.FLOAT,!1,0,0),f.bufferData(f.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),f.STATIC_DRAW),f.bindBuffer(f.ARRAY_BUFFER,null),s.u=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,s.u),f.enableVertexAttribArray(s.l.N),f.vertexAttribPointer(s.l.N,2,f.FLOAT,!1,0,0),f.bufferData(f.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),f.STATIC_DRAW),f.bindBuffer(f.ARRAY_BUFFER,null),f.uniform1i(v,0)}g=s.l,f.useProgram(s.s),f.canvas.width=l.width,f.canvas.height=l.height,f.viewport(0,0,l.width,l.height),f.activeTexture(f.TEXTURE0),s.i.bindTexture2d(l.glName),f.enableVertexAttribArray(g.O),f.bindBuffer(f.ARRAY_BUFFER,s.v),f.vertexAttribPointer(g.O,2,f.FLOAT,!1,0,0),f.enableVertexAttribArray(g.N),f.bindBuffer(f.ARRAY_BUFFER,s.u),f.vertexAttribPointer(g.N,2,f.FLOAT,!1,0,0),f.bindFramebuffer(f.DRAW_FRAMEBUFFER?f.DRAW_FRAMEBUFFER:f.FRAMEBUFFER,null),f.clearColor(0,0,0,0),f.clear(f.COLOR_BUFFER_BIT),f.colorMask(!0,!0,!0,!0),f.drawArrays(f.TRIANGLE_FAN,0,4),f.disableVertexAttribArray(g.O),f.disableVertexAttribArray(g.N),f.bindBuffer(f.ARRAY_BUFFER,null),s.i.bindTexture2d(0)}function pa(s){this.h=s}var fa=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function ma(s,l){return l+s}function Eo(s,l){window[s]=l}function ga(s){var l=document.createElement("script");return l.setAttribute("src",s),l.setAttribute("crossorigin","anonymous"),new Promise(function(f){l.addEventListener("load",function(){f()},!1),l.addEventListener("error",function(){f()},!1),document.body.appendChild(l)})}function xa(){return B(function(s){switch(s.h){case 1:return s.s=2,A(s,WebAssembly.instantiate(fa),4);case 4:s.h=3,s.s=0;break;case 2:return s.s=0,s.l=null,s.return(!1);case 3:return s.return(!0)}})}function rr(s){if(this.h=s,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=s&&s.locateFile||ma,typeof window=="object")var l=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")l=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=l,s.options){l=u(Object.keys(s.options));for(var f=l.next();!f.done;f=l.next()){f=f.value;var g=s.options[f].default;g!==void 0&&(this.l[f]=typeof g=="function"?g():g)}}}i=rr.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function ya(s){var l,f,g,v,S,C,k,$,_,O,Y;return B(function(j){switch(j.h){case 1:return s.ga?(l=s.h.files===void 0?[]:typeof s.h.files=="function"?s.h.files(s.l):s.h.files,A(j,xa(),2)):j.return();case 2:if(f=j.i,typeof window=="object")return Eo("createMediapipeSolutionsWasm",{locateFile:s.locateFile}),Eo("createMediapipeSolutionsPackedAssets",{locateFile:s.locateFile}),C=l.filter(function(V){return V.data!==void 0}),k=l.filter(function(V){return V.data===void 0}),$=Promise.all(C.map(function(V){var q=Si(s,V.url);if(V.path!==void 0){var te=V.path;q=q.then(function(he){return s.overrideFile(te,he),Promise.resolve(he)})}return q})),_=Promise.all(k.map(function(V){return V.simd===void 0||V.simd&&f||!V.simd&&!f?ga(s.locateFile(V.url,s.ha)):Promise.resolve()})).then(function(){var V,q,te;return B(function(he){if(he.h==1)return V=window.createMediapipeSolutionsWasm,q=window.createMediapipeSolutionsPackedAssets,te=s,A(he,V(q),2);te.i=he.i,he.h=0})}),O=function(){return B(function(V){return s.h.graph&&s.h.graph.url?V=A(V,Si(s,s.h.graph.url),0):(V.h=0,V=void 0),V})}(),A(j,Promise.all([_,$,O]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return g=l.filter(function(V){return V.simd===void 0||V.simd&&f||!V.simd&&!f}).map(function(V){return s.locateFile(V.url,s.ha)}),importScripts.apply(null,c(g)),v=s,A(j,createMediapipeSolutionsWasm(Module),6);case 6:v.i=j.i,s.m=new OffscreenCanvas(1,1),s.i.canvas=s.m,S=s.i.GL.createContext(s.m,{antialias:!1,alpha:!1,va:typeof WebGL2RenderingContext<"u"?2:1}),s.i.GL.makeContextCurrent(S),j.h=4;break;case 7:if(s.m=document.createElement("canvas"),Y=s.m.getContext("webgl2",{}),!Y&&(Y=s.m.getContext("webgl",{}),!Y))return alert("Failed to create WebGL canvas context when passing video frame."),j.return();s.K=Y,s.i.canvas=s.m,s.i.createContext(s.m,!0,!0,{});case 4:s.j=new s.i.SolutionWasm,s.ga=!1,j.h=0}})}function wa(s){var l,f,g,v,S,C,k,$;return B(function(_){if(_.h==1){if(s.h.graph&&s.h.graph.url&&s.fa===s.h.graph.url)return _.return();if(s.u=!0,!s.h.graph||!s.h.graph.url){_.h=2;return}return s.fa=s.h.graph.url,A(_,Si(s,s.h.graph.url),3)}for(_.h!=2&&(l=_.i,s.j.loadGraph(l)),f=u(Object.keys(s.D)),g=f.next();!g.done;g=f.next())v=g.value,s.j.overrideFile(v,s.D[v]);if(s.D={},s.h.listeners)for(S=u(s.h.listeners),C=S.next();!C.done;C=S.next())k=C.value,Sa(s,k);$=s.l,s.l={},s.setOptions($),_.h=0})}i.reset=function(){var s=this;return B(function(l){s.j&&(s.j.reset(),s.s={},s.v={}),l.h=0})},i.setOptions=function(s,l){var f=this;if(l=l||this.h.options){for(var g=[],v=[],S={},C=u(Object.keys(s)),k=C.next();!k.done;S={X:S.X,Y:S.Y},k=C.next())if(k=k.value,!(k in this.l&&this.l[k]===s[k])){this.l[k]=s[k];var $=l[k];$!==void 0&&($.onChange&&(S.X=$.onChange,S.Y=s[k],g.push(function(_){return function(){var O;return B(function(Y){if(Y.h==1)return A(Y,_.X(_.Y),2);O=Y.i,O===!0&&(f.u=!0),Y.h=0})}}(S))),$.graphOptionXref&&(k=Object.assign({},{calculatorName:"",calculatorIndex:0},$.graphOptionXref,{valueNumber:$.type===1?s[k]:0,valueBoolean:$.type===0?s[k]:!1,valueString:$.type===2?s[k]:""}),v.push(k)))}(g.length!==0||v.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(v),this.F=(this.F===void 0?[]:this.F).concat(g))}};function va(s){var l,f,g,v,S,C,k;return B(function($){switch($.h){case 1:if(!s.u)return $.return();if(!s.F){$.h=2;break}l=u(s.F),f=l.next();case 3:if(f.done){$.h=5;break}return g=f.value,A($,g(),4);case 4:f=l.next(),$.h=3;break;case 5:s.F=void 0;case 2:if(s.H){for(v=new s.i.GraphOptionChangeRequestList,S=u(s.H),C=S.next();!C.done;C=S.next())k=C.value,v.push_back(k);s.j.changeOptions(v),v.delete(),s.H=void 0}s.u=!1,$.h=0}})}i.initialize=function(){var s=this;return B(function(l){return l.h==1?A(l,ya(s),2):l.h!=3?A(l,wa(s),3):A(l,va(s),0)})};function Si(s,l){var f,g;return B(function(v){return l in s.L?v.return(s.L[l]):(f=s.locateFile(l,""),g=fetch(f).then(function(S){return S.arrayBuffer()}),s.L[l]=g,v.return(g))})}i.overrideFile=function(s,l){this.j?this.j.overrideFile(s,l):this.D[s]=l},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(s,l){var f=this,g,v,S,C,k,$,_,O,Y;return B(function(j){switch(j.h){case 1:return f.h.inputs?(g=1e3*(l??performance.now()),A(j,f.I,2)):j.return();case 2:return A(j,f.initialize(),3);case 3:for(v=new f.i.PacketDataList,S=u(Object.keys(s)),C=S.next();!C.done;C=S.next())if(k=C.value,$=f.h.inputs[k]){e:{var V=s[k];switch($.type){case"video":var q=f.s[$.stream];if(q||(q=new ir(f.i,f.K),f.s[$.stream]=q),q.m===0&&(q.m=q.i.createTexture()),typeof HTMLVideoElement<"u"&&V instanceof HTMLVideoElement)var te=V.videoWidth,he=V.videoHeight;else typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(te=V.naturalWidth,he=V.naturalHeight):(te=V.width,he=V.height);he={glName:q.m,width:te,height:he},te=q.h,te.canvas.width=he.width,te.canvas.height=he.height,te.activeTexture(te.TEXTURE0),q.i.bindTexture2d(q.m),te.texImage2D(te.TEXTURE_2D,0,te.RGBA,te.RGBA,te.UNSIGNED_BYTE,V),q.i.bindTexture2d(0),q=he;break e;case"detections":for(q=f.s[$.stream],q||(q=new pa(f.i),f.s[$.stream]=q),q.data||(q.data=new q.h.DetectionListData),q.data.reset(V.length),he=0;he<V.length;++he){te=V[he];var le=q.data,ve=le.setBoundingBox,ze=he,De=te.la,ae=new bi;if(Ve(ae,1,De.sa),Ve(ae,2,De.ta),Ve(ae,3,De.height),Ve(ae,4,De.width),Ve(ae,5,De.rotation),Ue(ae,6,De.pa),De=ae.l(),ve.call(le,ze,De),te.ea)for(le=0;le<te.ea.length;++le){ae=te.ea[le],ve=q.data,ze=ve.addNormalizedLandmark,De=he,ae=Object.assign({},ae,{visibility:ae.visibility?ae.visibility:0});var Ce=new jt;Ve(Ce,1,ae.x),Ve(Ce,2,ae.y),Ve(Ce,3,ae.z),ae.visibility&&Ve(Ce,4,ae.visibility),ae=Ce.l(),ze.call(ve,De,ae)}if(te.ba)for(le=0;le<te.ba.length;++le)ve=q.data,ze=ve.addClassification,De=he,ae=te.ba[le],Ce=new wt,Ve(Ce,2,ae.qa),ae.index&&Ue(Ce,1,ae.index),ae.label&&Ue(Ce,3,ae.label),ae.displayName&&Ue(Ce,4,ae.displayName),ae=Ce.l(),ze.call(ve,De,ae)}q=q.data;break e;default:q={}}}switch(_=q,O=$.stream,$.type){case"video":v.pushTexture2d(Object.assign({},_,{stream:O,timestamp:g}));break;case"detections":Y=_,Y.stream=O,Y.timestamp=g,v.pushDetectionList(Y);break;default:throw Error("Unknown input config type: '"+$.type+"'")}}return f.j.send(v),A(j,f.I,4);case 4:v.delete(),j.h=0}})};function Ca(s,l,f){var g,v,S,C,k,$,_,O,Y,j,V,q,te,he;return B(function(le){switch(le.h){case 1:if(!f)return le.return(l);for(g={},v=0,S=u(Object.keys(f)),C=S.next();!C.done;C=S.next())k=C.value,$=f[k],typeof $!="string"&&$.type==="texture"&&l[$.stream]!==void 0&&++v;1<v&&(s.M=!1),_=u(Object.keys(f)),C=_.next();case 2:if(C.done){le.h=4;break}if(O=C.value,Y=f[O],typeof Y=="string")return te=g,he=O,A(le,ba(s,O,l[Y]),14);if(j=l[Y.stream],Y.type==="detection_list"){if(j){for(var ve=j.getRectList(),ze=j.getLandmarksList(),De=j.getClassificationsList(),ae=[],Ce=0;Ce<ve.size();++Ce){var Ze=la(ve.get(Ce)),ka=Ge(Ze,1),Ia=Ge(Ze,2),Ra=Ge(Ze,3),Pa=Ge(Ze,4),Aa=Ge(Ze,5,0),ki=void 0;ki=ki===void 0?0:ki,Ze={la:{sa:ka,ta:Ia,height:Ra,width:Pa,rotation:Aa,pa:yi(Le(Ze,6),ki)},ea:tr(ze.get(Ce)),ba:ca(na(De.get(Ce)))},ae.push(Ze)}ve=ae}else ve=[];g[O]=ve,le.h=7;break}if(Y.type==="proto_list"){if(j){for(ve=Array(j.size()),ze=0;ze<j.size();ze++)ve[ze]=j.get(ze);j.delete()}else ve=[];g[O]=ve,le.h=7;break}if(j===void 0){le.h=3;break}if(Y.type==="float_list"){g[O]=j,le.h=7;break}if(Y.type==="proto"){g[O]=j,le.h=7;break}if(Y.type!=="texture")throw Error("Unknown output config type: '"+Y.type+"'");return V=s.v[O],V||(V=new ir(s.i,s.K),s.v[O]=V),A(le,Fo(V,j,s.M),13);case 13:q=le.i,g[O]=q;case 7:Y.transform&&g[O]&&(g[O]=Y.transform(g[O])),le.h=3;break;case 14:te[he]=le.i;case 3:C=_.next(),le.h=2;break;case 4:return le.return(g)}})}function ba(s,l,f){var g;return B(function(v){return typeof f=="number"||f instanceof Uint8Array||f instanceof s.i.Uint8BlobList?v.return(f):f instanceof s.i.Texture2dDataOut?(g=s.v[l],g||(g=new ir(s.i,s.K),s.v[l]=g),v.return(Fo(g,f,s.M))):v.return(void 0)})}function Sa(s,l){for(var f=l.name||"$",g=[].concat(c(l.wants)),v=new s.i.StringList,S=u(l.wants),C=S.next();!C.done;C=S.next())v.push_back(C.value);S=s.i.PacketListener.implement({onResults:function(k){for(var $={},_=0;_<l.wants.length;++_)$[g[_]]=k.get(_);var O=s.listeners[f];O&&(s.I=Ca(s,$,l.outs).then(function(Y){Y=O(Y);for(var j=0;j<l.wants.length;++j){var V=$[g[j]];typeof V=="object"&&V.hasOwnProperty&&V.hasOwnProperty("delete")&&V.delete()}Y&&(s.I=Y)}))}}),s.j.attachMultiListener(v,S),v.delete()}i.onResults=function(s,l){this.listeners[l||"$"]=s},Z("Solution",rr),Z("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"});function _o(s){switch(s===void 0&&(s=0),s){case 1:return"pose_landmark_full.tflite";case 2:return"pose_landmark_heavy.tflite";default:return"pose_landmark_lite.tflite"}}function zo(s){var l=this;s=s||{},this.h=new rr({locateFile:s.locateFile,files:function(f){return[{url:"pose_solution_packed_assets_loader.js"},{simd:!1,url:"pose_solution_wasm_bin.js"},{simd:!0,url:"pose_solution_simd_wasm_bin.js"},{data:!0,url:_o(f.modelComplexity)}]},graph:{url:"pose_web.binarypb"},listeners:[{wants:["pose_landmarks","world_landmarks","segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},poseLandmarks:{type:"proto",stream:"pose_landmarks",transform:tr},poseWorldLandmarks:{type:"proto",stream:"world_landmarks",transform:tr},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(f){var g,v,S;return B(function(C){return C.h==1?(g=_o(f),v="third_party/mediapipe/modules/pose_landmark/"+g,A(C,Si(l.h,g),2)):(S=C.i,l.h.overrideFile(v,S),C.return(!0))})}},smoothLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothLandmarks",fieldName:"bool_value"}},enableSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorEnableSegmentation",fieldName:"bool_value"}},smoothSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothSegmentation",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"poselandmarkgpu__posedetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"poselandmarkgpu__poselandmarkbyroigpu__tensorstoposelandmarksandsegmentation__ThresholdingCalculator",fieldName:"threshold"}}}})}i=zo.prototype,i.reset=function(){this.h.reset()},i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(s){this.h.onResults(s)},i.initialize=function(){var s=this;return B(function(l){return A(l,s.h.initialize(),0)})},i.send=function(s,l){var f=this;return B(function(g){return A(g,f.h.send(s,l),0)})},i.setOptions=function(s){this.h.setOptions(s)},Z("Pose",zo),Z("POSE_CONNECTIONS",[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]]),Z("POSE_LANDMARKS",{NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,LEFT_RIGHT:9,RIGHT_LEFT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32}),Z("POSE_LANDMARKS_LEFT",{LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,LEFT_EAR:7,LEFT_RIGHT:9,LEFT_SHOULDER:11,LEFT_ELBOW:13,LEFT_WRIST:15,LEFT_PINKY:17,LEFT_INDEX:19,LEFT_THUMB:21,LEFT_HIP:23,LEFT_KNEE:25,LEFT_ANKLE:27,LEFT_HEEL:29,LEFT_FOOT_INDEX:31}),Z("POSE_LANDMARKS_RIGHT",{RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,RIGHT_EAR:8,RIGHT_LEFT:10,RIGHT_SHOULDER:12,RIGHT_ELBOW:14,RIGHT_WRIST:16,RIGHT_PINKY:18,RIGHT_INDEX:20,RIGHT_THUMB:22,RIGHT_HIP:24,RIGHT_KNEE:26,RIGHT_ANKLE:28,RIGHT_HEEL:30,RIGHT_FOOT_INDEX:32}),Z("POSE_LANDMARKS_NEUTRAL",{NOSE:0}),Z("VERSION","0.5.1675469404")}).call(sr);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _e=fe();_e.registerFlag("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE",()=>15);_e.registerFlag("WEBGPU_CPU_FORWARD",()=>!0);_e.registerFlag("WEBGPU_MATMUL_PROGRAM_TYPE",()=>-1);_e.registerFlag("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE",()=>!0);_e.registerFlag("WEBGPU_USE_LOW_POWER_GPU",()=>!1);_e.registerFlag("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e3);_e.registerFlag("WEBGPU_USE_PROFILE_TOOL",()=>!1);_e.registerFlag("WEBGPU_IMPORT_EXTERNAL_TEXTURE",()=>!0);_e.registerFlag("WEBGPU_USE_NAIVE_CONV2D_DEBUG",()=>!1);_e.registerFlag("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL",()=>-1);_e.registerFlag("WEBGPU_CONV_SEPARATE_IM2COL_SHADER",()=>!1);_e.registerFlag("WEBGPU_PRINT_SHADER",()=>"");_e.registerFlag("WEBGPU_ENGINE_COMPILE_ONLY",()=>!1);/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ah{constructor(t){t&&(this.vendor=t.vendor,this.architecture=t.architecture,this.intelGPUGeneration=this.getIntelGPUGeneration())}getIntelGPUGeneration(){if(this.isIntel()){if(this.architecture.startsWith("gen"))return Number(this.architecture.match(/\d+/));if(this.architecture.startsWith("xe"))return 12}return 0}isIntel(){return this.vendor==="intel"}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $h{constructor(t){this.device=t,this.numUsedBuffers=0,this.numFreeBuffers=0,this.freeBuffers=new Map,this.usedBuffers=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireBuffer(t,e,r=!1,o=!0){let n;const a=Uo(t,e);return o?(this.freeBuffers.has(a)||this.freeBuffers.set(a,[]),this.freeBuffers.get(a).length>0?(n=this.freeBuffers.get(a).pop(),this.numFreeBuffers--):(n=this.device.createBuffer({size:t,usage:e,mappedAtCreation:r}),this.numBytesAllocated+=t)):(n=this.device.createBuffer({size:t,usage:e,mappedAtCreation:r}),this.numBytesAllocated+=t),this.usedBuffers.has(a)||this.usedBuffers.set(a,[]),this.usedBuffers.get(a).push(n),this.numUsedBuffers++,this.numBytesUsed+=t,n}releaseBuffer(t,e=!0){if(this.freeBuffers.size===0)return;const r=t.size,o=t.usage,n=Uo(r,o),a=this.usedBuffers.get(n),u=a.indexOf(t);if(u<0)throw new Error("Cannot find the buffer in buffer manager");a[u]=a[a.length-1],a.pop(),this.numUsedBuffers--,this.numBytesUsed-=r,e?(this.freeBuffers.get(n).push(t),this.numFreeBuffers++):(t.destroy(),this.numBytesAllocated-=r)}getNumUsedBuffers(){return this.numUsedBuffers}getNumFreeBuffers(){return this.numFreeBuffers}dispose(){this.freeBuffers.forEach((t,e)=>{t.forEach(r=>{r.destroy()})}),this.usedBuffers.forEach((t,e)=>{t.forEach(r=>{r.destroy()})}),this.freeBuffers=new Map,this.usedBuffers=new Map,this.numUsedBuffers=0,this.numFreeBuffers=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function Uo(i,t){return`${i}_${t}`}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Nh{constructor(t){this.device=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures=new Map,this.usedTextures=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireTexture(t,e,r,o){const n=Go(r),a=t*e*n,u=Vo(t,e,r,o);if(this.freeTextures.has(u)||this.freeTextures.set(u,[]),this.usedTextures.has(u)||this.usedTextures.set(u,[]),this.numBytesUsed+=a,this.numUsedTextures++,this.freeTextures.get(u).length>0){this.numFreeTextures--;const h=this.freeTextures.get(u).shift();return this.usedTextures.get(u).push(h),h}this.numBytesAllocated+=a;const c=this.device.createTexture({size:[t,e],format:r,usage:o});return this.usedTextures.get(u).push(c),c}releaseTexture(t){if(this.freeTextures.size===0)return;const e=t.width,r=t.height,o=t.format,n=t.usage,a=Vo(e,r,o,n);this.freeTextures.has(a)||this.freeTextures.set(a,[]),this.freeTextures.get(a).push(t),this.numFreeTextures++,this.numUsedTextures--;const u=this.usedTextures.get(a),c=u.indexOf(t);if(c<0)throw new Error("Cannot release a texture that was never provided by this texture manager");u.splice(c,1);const h=Go(o),p=e*r*h;this.numBytesUsed-=p}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){this.freeTextures.forEach((t,e)=>{t.forEach(r=>{r.destroy()})}),this.usedTextures.forEach((t,e)=>{t.forEach(r=>{r.destroy()})}),this.freeTextures=new Map,this.usedTextures=new Map,this.numUsedTextures=0,this.numFreeTextures=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function Vo(i,t,e,r){return`${i}_${t}_${e}_${r}`}function Go(i){if(i==="rgba8unorm")return 16;throw new Error(`${i} is not supported!`)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dh(i,t){if(Math.max(...i)>5)throw new Error("Cannot symbolically compute strides for rank > 6 tensor.");const e=i.length,r="xyzwuv",o=i.map(a=>`${t}.${r[a]}`),n=new Array(e-1);n[e-2]=o[e-1];for(let a=e-3;a>=0;--a)n[a]=`(${n[a+1]} * ${o[a+1]})`;return n}const ot=(i,t,e)=>e==="int32"?`atomicAdd(${i}, bitcast<i32>(${t}));`:`
          {
            var oldValue = 0;
            loop {
              let newValueF32 = bitcast<f32>(oldValue) + (${t});
              let newValue = bitcast<i32>(newValueF32);
              let res = atomicCompareExchangeWeak(${i}, oldValue, newValue);
              if res.exchanged {
                break;
              }
              oldValue = res.old_value;
            }
          }`;/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var $t;(function(i){i[i.FROM_PIXELS=0]="FROM_PIXELS",i[i.DRAW=1]="DRAW"})($t||($t={}));const Th=(i,t,e,r,o)=>{const n={dtype:r.dtype,shape:r.shape},a=Eh(e,n,t),u=i.createShaderModule({code:a,label:t.constructor.name});let c=fe().get("WEBGPU_PRINT_SHADER");if(c!==""){c=c.toLowerCase();const h=c.split(",");(c==="all"||h.some(p=>t.shaderKey.toLowerCase().includes(p)))&&(console.group(t.shaderKey),console.debug(a),console.groupEnd())}return o?i.createComputePipelineAsync({compute:{module:u,entryPoint:"_start"},label:t.constructor.name,layout:"auto"}):i.createComputePipeline({compute:{module:u,entryPoint:"_start"},label:t.constructor.name,layout:"auto"})},ee=(i,t="f32")=>{switch(i){case 1:return`${t}`;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${i}-component ${t} is not supported.`)}};function de(i){if(i<=1)return"i32";if(i===2)return"vec2<i32>";if(i===3)return"vec3<i32>";if(i===4)return"vec4<i32>";if(i===5)return"vec5";if(i===6)return"vec6";throw Error(`GPU for rank ${i} is not yet supported`)}function qe(i){if(i===0)return"x";if(i===1)return"y";if(i===2)return"z";if(i===3)return"w";if(i===4)return"u";if(i===5)return"v";throw Error(`Index ${i} is not yet supported`)}function M(...i){let t;switch(i.length){case 0:t=`
        fn main()
      `;break;case 1:t=`
        fn main(${i[0]} : i32)
      `;break;default:throw Error("Unreachable")}return t}function Ho(i,t){let e;return e=`
     ${Fh(t)}
      fn _start(@builtin(local_invocation_id) LocalId : vec3<u32>,
                @builtin(global_invocation_id) GlobalId : vec3<u32>,
                @builtin(local_invocation_index) LocalIndex: u32,
                @builtin(workgroup_id) WorkgroupId : vec3<u32>,
                @builtin(num_workgroups) NumWorkgroups : vec3<u32>) {
        localId = LocalId;
        localIndex = LocalIndex;
        globalId = GlobalId;
        numWorkgroups = NumWorkgroups;
        workgroupId = WorkgroupId;
        ${i?"main(getGlobalIndex());":"main();"};
      }
    `,e}function Fh(i){return`
  @compute @workgroup_size(${i.workgroupSize[0]}, ${i.workgroupSize[1]}, ${i.workgroupSize[2]})
`}function Eh(i,t,e){const r=[],o=e.workgroupSize[0]*e.workgroupSize[1]*e.workgroupSize[2];if(e.outputComponent=e.outputComponent?e.outputComponent:1,r.push(`

      var<private> localId: vec3<u32>;
      var<private> localIndex: u32;
      var<private> globalId: vec3<u32>;
      var<private> numWorkgroups: vec3<u32>;
      var<private> workgroupId: vec3<u32>;

      // Only used when the y/z dimension of workgroup size is 1.
      fn getGlobalIndex() -> i32 {
        ${Us(e)?"  return i32(globalId.x);":`  return i32((workgroupId.z * numWorkgroups.x * numWorkgroups.y +
                workgroupId.y * numWorkgroups.x + workgroupId.x) * ${o}u +
                localIndex);
        `}
      }
    `),e.pixelsOpType!=null){const y=e.pixelsOpType===$t.FROM_PIXELS?`@group(0) @binding(0) var<storage, read_write> result: array<${ct(t.dtype,e.outputComponent)}>;`:`@group(0) @binding(1) var<storage, read> inBuf : array<${ct(i[0].dtype,e.outputComponent)}>;`,w=t.shape.length===3?"vec2<i32>":"i32";r.push(`
        struct Uniform {
          outShapeStrides : ${w},
          size            : i32,
          numChannels     : i32,
          alpha           : f32,
        };

        ${y}
        @group(0) @binding(2) var<uniform> uniforms: Uniform;
      `);const b=Xo(e);return[jo,r.join(`
`),Ii(t.shape),e.getUserCode(),Ho(b,e)].join(`
`)}let n,a,u="struct Uniforms { NAN : f32, INFINITY : f32, ";e.variableNames.forEach((y,w)=>{const b=de(i[w].shape.length);u+=`${y.charAt(0).toLowerCase()+y.slice(1)}Shape : ${b}, `,n=i[w].shape.length-1,a=de(n),u+=`${y.charAt(0).toLowerCase()+y.slice(1)}ShapeStrides: ${a}, `});const c=de(t.shape.length);u+=`outShape : ${c}, `,n=t.shape.length-1,a=de(n),u+=`
         outShapeStrides: ${a}, `,e.size&&(u+="size : i32, "),e.uniforms&&(u+=e.uniforms),u+="};",u=Vh(u),r.push(u),e.atomic?r.push(`
      @group(0) @binding(0) var<storage, read_write> result: array<atomic<i32>>;
    `):r.push(`
      @group(0) @binding(0) var<storage, read_write> result: array<${ct(t.dtype,e.outputComponent)}>;
    `),e.variableNames.forEach((y,w)=>{r.push(`
      @group(0) @binding(${1+w}) var<storage, read> ${y}: array<${e.variableComponents?ct(i[w].dtype,e.variableComponents[w]):ct(i[w].dtype,e.outputComponent)}>;
        `)}),u!==""&&r.push(`
      @group(0) @binding(${1+e.variableNames.length}) var<uniform> uniforms: Uniforms;
      `);const h=Bh(t.shape,e.dispatchLayout),p=[jo,r.join(`
`)+zh,Ii(t.shape),h,Wh(t.shape.length)];e.atomic||p.push(Uh(t.shape,t.dtype,e.outputComponent)),e.variableNames.forEach((y,w)=>{p.push(`${Ii(i[w].shape,y)}`)});const d=i.map((y,w)=>Oh(y,t.shape,e.variableComponents?e.variableComponents[w]:e.outputComponent,e.dispatchLayout.x.length===t.shape.length)).join(`
`);p.push(d),p.push(e.getUserCode());const m=Xo(e);return p.push(Ho(m,e)),p.join(`
`)}function _h(i,t,e){let r=i.shaderKey;if(i.pixelsOpType!=null)return r;const o=[],n=[];t.forEach(p=>{o.push(p.shape),n.push(p.dtype)}),o.push(e.shape),n.push(e.dtype);const a=t.map(p=>Fs(p.shape,e.shape)),u=t.map(p=>Dt(p.shape,e.shape)).join("_"),c=a.map(p=>p.join("_")).join(";"),h=Us(i)?"flatDispatch":"";return r+="_"+(i.workgroupSize?i.workgroupSize.join(","):"")+o.map(p=>p.length).join(",")+n.join(",")+i.variableNames.join(",")+c+u+h,r}const jo=`
  struct vec5 {x: i32, y: i32, z: i32, w: i32, u: i32};
  struct vec6 {x: i32, y: i32, z: i32, w: i32, u: i32, v: i32};

  // Checks whether coordinates lie within the bounds of the shape.
  fn coordsInBounds2D(coord : vec2<i32>, shape : vec2<i32>) -> bool {
    return all(coord >= vec2<i32>(0)) && all(coord < shape);
  }
  fn coordsInBounds3D(coord : vec3<i32>, shape : vec3<i32>) -> bool {
    return all(coord >= vec3<i32>(0)) && all(coord < shape);
  }
  fn coordsInBounds4D(coord : vec4<i32>, shape : vec4<i32>) -> bool {
    return all(coord >= vec4<i32>(0)) && all(coord < shape);
  }

  fn getIndexFromCoords1D(coord : i32, shape : i32) -> i32 {
    return coord;
  }
  fn getIndexFromCoords2D(coords : vec2<i32>, shape : vec2<i32>) -> i32 {
    return dot(coords, vec2<i32>(shape.y, 1));
  }
  fn getIndexFromCoords3D(coords : vec3<i32>, shape : vec3<i32>) -> i32 {
    return dot(coords, vec3<i32>(shape.y * shape.z, shape.z, 1));
  }
  fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
    return dot(coords, vec4<i32>(
        shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
  }
  fn getIndexFromCoords5D(coords : vec5, shape : vec5) -> i32 {
    let shapeStrides: vec5 = vec5(shape.y * shape.z * shape.w * shape.u, shape.z * shape.w * shape.u, shape.w * shape.u, shape.u, 1);
    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u;
  }
  fn getIndexFromCoords6D(coords : vec6, shape : vec6) -> i32 {
    let shapeStrides: vec6 = vec6(shape.y * shape.z * shape.w * shape.u * shape.v, shape.z * shape.w * shape.u * shape.v, shape.w * shape.u * shape.v, shape.u * shape.v, shape.v, 1);
    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u + coords.v*shapeStrides.v;
  }

  // NaN defination in IEEE 754-1985 is :
  //   - sign = either 0 or 1.
  //   - biased exponent = all 1 bits.
  //   - fraction = anything except all 0 bits (since all 0 bits represents infinity).
  // https://en.wikipedia.org/wiki/IEEE_754-1985#Representation_of_non-numbers
  fn isnan(val: f32) -> bool {
    let floatToUint: u32 = bitcast<u32>(val);
    return (floatToUint & 0x7fffffffu) > 0x7f800000u;
  }
  fn isnanVec4(val : vec4<f32>) -> vec4<bool> {
    let floatToUint: vec4<u32> = bitcast<vec4<u32>>(val);
    return (floatToUint & vec4<u32>(0x7fffffffu)) > vec4<u32>(0x7f800000u);
  }
`,zh=`
  fn isinf(val: f32) -> bool {
    return abs(val) == uniforms.INFINITY;
  }
`;function Ii(i,t=""){const e=i.length,r=t!==""?`get${t.charAt(0).toUpperCase()+t.slice(1)}CoordsFromIndex`:"getCoordsFromIndex",o=t!==""?`${t.charAt(0).toLowerCase()+t.slice(1)}ShapeStrides`:"outShapeStrides";if(e<=1)return`fn ${r}(index : i32) -> i32 { return index; }`;const n=Zt(i),a=de(e),u=[];for(let h=0;h<e;h++)u.push(`d${h}`);if(n.length===1)return`    fn ${r}(index : i32) -> vec2<i32> {
      let d0 = index / uniforms.${o}; let d1 = index - d0 * uniforms.${o};
      return vec2<i32>(d0, d1);
    }`;let c;return c="var index2 = index;"+n.map((h,p)=>{const d=`let ${u[p]} = index2 / uniforms.${o}.${qe(p)}`,m=p===n.length-1?`let ${u[p+1]} = index2 - ${u[p]} * uniforms.${o}.${qe(p)}`:`index2 = index2 - ${u[p]} * uniforms.${o}.${qe(p)}`;return`${d}; ${m};`}).join(""),`
    fn ${r}(index : i32) -> ${a} {
      ${c}
      return ${a}(${u.join(",")});
    }
  `}function Mh(i,t){const e=i.name,r=i.shape.length,o=de(r),n="get"+e.charAt(0).toUpperCase()+e.slice(1),a=["d0","d1","d2","d3","d4","d5"].slice(0,r),u=a.map(p=>`${p} : i32`).join(", ");if(r<1)return`
      fn ${n}() -> ${ee(t)} {
        return ${ee(t)}(${e}[0]);
      }
    `;const c=`uniforms.${e.charAt(0).toLowerCase()+e.slice(1)}Shape`;let h=`${r}D`;return r===0&&(h="1D"),`
    fn ${n}(${u}) -> ${ee(t)} {
      return ${ee(t)}(${e}[getIndexFromCoords${h}(${o}(${a.join(",")}),
        ${c})${t===1?"":` / ${t}`}]);
    }
   `}function Lh(i,t,e,r){const o=i.name,n=o.charAt(0).toUpperCase()+o.slice(1),a="get"+n+"ByOutput",u=i.shape.length,c=t.length,h=de(c);if(Dt(i.shape,t)&&r)return`
    fn ${a}Index(globalIndex : i32) -> ${ee(e)} {
      return ${ee(e)}(${o}[globalIndex]);
    }

    fn ${a}Coords(coords : ${h}) -> ${ee(e)} {
      return ${ee(e)}(${o}[${c>1?"getOutputIndexFromCoords(coords)":"coords"}${e===1?"":` / ${e}`}]);
    }
    `;const p=Fs(i.shape,t),d=c-u;let m="";if(u===0)return`
    fn ${a}Index(globalIndex : i32) -> ${ee(e)}{
      return get${n}();
    }

    fn ${a}Coords(coords : ${h}) -> ${ee(e)}{
      return get${n}();
    }
  `;c<2&&p.length>=1?m="coords = 0;":m=p.map(b=>`coords.${qe(b+d)} = 0;`).join(`
`);let x="";if(c<2&&u>0)x="coords";else if(c>1){const b=de(u),I=i.shape.map((R,P)=>`coords.${qe(P+d)}`).join(", ");x=`${b}(${I})`}else x="coords";const y=`uniforms.${o.charAt(0).toLowerCase()+o.slice(1)}Shape`,w=`${u}D`;return`
  fn ${a}Index(globalIndex : i32) -> ${ee(e)} {
    var coords = getCoordsFromIndex(globalIndex);
    ${m}
    return ${ee(e)}(${o}[getIndexFromCoords${w}(${x}, ${y})${e===1?"":` / ${e}`}]);
  }

  fn ${a}Coords(coordsIn : ${h}) -> ${ee(e)} {
    var coords = coordsIn;
    ${m}
    return ${ee(e)}(${o}[getIndexFromCoords${w}(${x}, ${y})${e===1?"":` / ${e}`}]);
  }
`}function Oh(i,t,e,r){let o=Mh(i,e);return i.shape.length<=t.length&&(o+=Lh(i,t,e,r)),o}function Bh(i,t){const{x:e,y:r=[],z:o=[]}=t,n=i.length,a=e.length+r.length+o.length;if(a!==n)return"";if(e.length===n)return`fn getOutputCoords() -> ${de(n)}{
    let globalIndex = getGlobalIndex();
    return getCoordsFromIndex(globalIndex);
  }
  `;let u="";const c=[e,r,o];for(let m=0;m<c.length;m++){const x=c[m];if(x.length!==0)if(x.length===1)u+=`let d${x[0]} = i32(globalId[${m}]);`;else{const y=Dh(x,"uniforms.outShape");u+=`var index${m} = i32(globalId[${m}]);`;for(let w=0;w<y.length;w++)u+=`let d${x[w]} = index${m} / ${y[w]};`,w===y.length-1?u+=`let d${x[w+1]} = index${m} - d${x[w]} * ${y[w]};`:u+=`index${m} = index${m} - d${x[w]} * ${y[w]};`}}const h=[];for(let m=0;m<a;m++)h.push(`d${m}`);const p=de(a);let d=`fn getOutputCoords() -> ${p} {
  ${u}
`;return h.length===0?d+=`return ${p}(0); }`:d+=`return ${p}(${h.join(",")}); }`,d}function Wh(i){let t="";switch(i){case 0:case 1:t+=`
        fn getOutputIndexFromCoords(coords : i32) -> i32 {
          return coords;
        }
        `;break;case 2:t+=`
        fn getOutputIndexFromCoords(coords : vec2<i32>) -> i32 {
          return dot(coords, vec2<i32>(uniforms.outShapeStrides, 1));
        }
        `;break;case 3:t+=`
        fn getOutputIndexFromCoords(coords : vec3<i32>) -> i32 {
          return dot(coords, vec3<i32>(uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, 1));
        }
        `;break;case 4:t+=`
        fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
          return dot(coords, vec4<i32>(
            uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, uniforms.outShapeStrides.z, 1));
        }
        `;break;case 5:t+=`
        fn getOutputIndexFromCoords(coords : vec5) -> i32 {
          return coords.x * uniforms.outShapeStrides.x +
              coords.y * uniforms.outShapeStrides.y +
              coords.z * uniforms.outShapeStrides.z +
              coords.w * uniforms.outShapeStrides.w +
              coords.u;
        }
        `;break;case 6:t+=`
        fn getOutputIndexFromCoords(coords : vec6) -> i32 {
          return coords.x * uniforms.outShapeStrides.x +
              coords.y * uniforms.outShapeStrides.y +
              coords.z * uniforms.outShapeStrides.z +
              coords.w * uniforms.outShapeStrides.w +
              coords.u * uniforms.outShapeStrides.u +
              coords.v;
        }
        `;break;default:ne(!1,()=>`Unsupported ${i}D shape`);break}return t}function Us(i){return i.dispatch[1]===1&&i.dispatch[2]===1}function ct(i,t=1){if(i==="float32")return ee(t,"f32");if(i==="int32"||i==="bool")return ee(t,"i32");throw new Error(`type ${i} is not supported.`)}function Uh(i,t,e){const r=i.length,o=ct(t,e);let n=`fn setOutputAtIndex(flatIndex : i32, value : ${ee(e)}) {
      result[flatIndex] = ${o}(value);
    }

    fn setOutputAtIndexI32(flatIndex : i32, value : ${ee(e,"i32")}) {
      result[flatIndex] = ${o}(value);
    }
    `;if(r>=2){const a=["d0","d1","d2","d3","d4","d5"].slice(0,r),u=de(r);n+=`
      fn setOutputAtCoords(${a.map(c=>`${c} : i32`).join(", ")}, value : ${ee(e)}) {
        let flatIndex = getOutputIndexFromCoords(${u}(${a.join(", ")}));
        setOutputAtIndex(flatIndex${e===1?"":` / ${e}`}, value);
      }
      fn setOutputAtCoordsI32(${a.map(c=>`${c} : i32`).join(", ")}, value : ${ee(e,"i32")}) {
        let flatIndex = getOutputIndexFromCoords(${u}(${a.join(", ")}));
        setOutputAtIndexI32(flatIndex${e===1?"":` / ${e}`}, value);
      }
    `}return n}function Vh(i){const t=/(\w+)\s*:\s*vec(5|6)/g;i=i.replace(t,r=>"@align(16) "+r);const e=/vec(5|6)\s*,\s*(\w+)/g;return i=i.replace(e,(r,o,n)=>`vec${o}, @align(16) ${n}`),i}function Xo(i){return!(i.dispatchLayout.hasOwnProperty("y")&&i.dispatchLayout.y.length!==0||i.dispatchLayout.hasOwnProperty("z")&&i.dispatchLayout.z.length!==0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pt=i=>{let t=1;for(let e=0;e<i.length;e++)t*=i[e];return t};function L(i,t,e=[1,1,1],r=[1,1,1]){const[o,n,a]=[Math.ceil(pt(i.x.map(u=>t[u]))/(e[0]*r[0])),i.y?Math.ceil(pt(i.y.map(u=>t[u]))/(e[1]*r[1])):1,i.z?Math.ceil(pt(i.z.map(u=>t[u]))/(e[2]*r[2])):1];return[o,n,a]}function Gh(i,t,e,r=!1){const o=[8,8,1],n=[4,4,1];return r||(i<=8&&(n[1]=1),t<=16&&e<=16&&(o[0]=4)),{workgroupSize:o,elementsPerThread:n}}function Vs(i,t,e=!1){if(e)return[8,8,1];const r=pt(i.x.map(n=>t[n])),o=pt(i.y.map(n=>t[n]));return r<=4?[4,16,1]:o<=4?[16,4,1]:[16,16,1]}function Gs(i,t,e=!1){if(e)return[4,4,1];const r=pt(i.x.map(n=>t[n])),o=pt(i.y.map(n=>t[n]));return r<=4?[1,2,1]:o<=4?[2,1,1]:[2,2,1]}function U(i){return{x:i.map((t,e)=>e)}}function Ko(i){if(i==="float32"||i==="int32"||i==="bool"||i==="string")return 4;if(i==="complex64")return 8;throw new Error(`Unknown dtype ${i}`)}function Hs(){return!!(typeof globalThis<"u"&&globalThis.navigator&&globalThis.navigator.gpu)}function js(i,t){Array.isArray(i)||(i=[i]),i.forEach(e=>{e!=null&&ne(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGPU backend.`)})}var He;(function(i){i[i.MatMulReduceProgram=0]="MatMulReduceProgram",i[i.MatMulSplitKProgram=1]="MatMulSplitKProgram",i[i.MatMulSmallOutputSizeProgram=2]="MatMulSmallOutputSizeProgram",i[i.MatMulPackedProgram=3]="MatMulPackedProgram",i[i.MatMulMax=4]="MatMulMax"})(He||(He={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hh=fe().getNumber("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD"),jh=(i,t)=>{const e=i.limits.maxComputeWorkgroupsPerDimension,r=t.dispatchLayout,o=t.dispatch;if(o.every(a=>a<=e))return o;ne(o[0]>e&&r.y===void 0&&r.z===void 0,()=>"Dispatch size exceeds WebGPU limits in Y or Z dimension.");let n=Math.ceil(Math.sqrt(o[0]));return n>e?(n=Math.ceil(Math.cbrt(o[0])),ne(n<=e,()=>"Total dispatch size exceeds WebGPU maximum."),[n,n,n]):[n,n,1]};class Ft extends Da{nextDataId(){return Ft.nextDataId++}constructor(t,e){if(super(),this.commandQueueOwnedIds=new WeakSet,this.dispatchCountInPass=0,this.disposed=!1,this.downloadWaitMs=0,this.tensorDataPendingDisposal=[],this.queryResolveBuffer=null,this.querySet=null,this.querySetCount=2,this.stagingPendingDisposal=[],this.uniformPendingDisposal=[],this.uploadWaitMs=0,this.hasReadSyncWarned=!1,this.hasTimestampQueryWarned=!1,!Hs())throw new Error("WebGPU is not supported on this device");this.pipelineCache={},this.device=t,this.queue=t.queue,this.commandEncoder=null,this.computePassEncoder=null,this.adapterInfo=new Ah(e),this.supportTimestampQuery=this.device.features.has("timestamp-query"),this.thresholdToIncreaseWorkgroups=this.adapterInfo.intelGPUGeneration>=12?16:8,this.bufferManager=new $h(this.device),this.textureManager=new Nh(this.device),this.tensorMap=new Ta(this,St()),fe().getBool("WEBGPU_USE_PROFILE_TOOL")&&(this.dummyCanvas=document.createElement("canvas"),this.dummyCanvas.width=1,this.dummyCanvas.height=1,this.dummyContext=this.dummyCanvas.getContext("webgpu"),this.dummyContext.configure({device:t,format:"bgra8unorm"}),document.body.appendChild(this.dummyCanvas))}floatPrecision(){return 32}disposeData(t,e=!1){if(!this.tensorMap.has(t))return!0;const r=this.tensorMap.get(t);return e?r.refCount=0:r.refCount--,r.refCount>0?!1:(r.complexTensorInfos!=null&&(this.disposeData(r.complexTensorInfos.real.dataId),this.disposeData(r.complexTensorInfos.imag.dataId)),this.commandQueueOwnedIds.has(t)?(this.tensorDataPendingDisposal.push(t),!0):(this.releaseResource(t),this.tensorMap.delete(t),!0))}memory(){return{numBytesInGPU:this.bufferManager.numBytesUsed,numBytesAllocatedInGPU:this.bufferManager.numBytesAllocated,unreliable:!1}}releaseResource(t){const e=this.tensorMap.get(t);if(!(!e||!e.resource)){if(e.external){e.resource=null;return}e.resource instanceof GPUBuffer?this.bufferManager.releaseBuffer(e.resource):e.resource instanceof GPUTexture&&this.textureManager.releaseTexture(e.resource),e.resource=null}}refCount(t){return this.tensorMap.has(t)?this.tensorMap.get(t).refCount:0}incRef(t){const e=this.tensorMap.get(t);e.refCount++}decRef(t){if(this.tensorMap.has(t)){const e=this.tensorMap.get(t);e.refCount--}}write(t,e,r){if(r==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.tensorMap.set(o,{dtype:r,shape:e,values:t,refCount:1}),o}move(t,e,r,o,n){if(o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.tensorMap.set(t,{dtype:o,shape:r,values:e,refCount:n})}submitQueue(){this.queue.submit([this.commandEncoder.finish()]),this.commandEncoder=null,this.dispatchCountInPass=0,this.commandQueueOwnedIds=new WeakSet,this.tensorDataPendingDisposal.forEach(t=>{this.releaseResource(t),this.tensorMap.delete(t)}),this.uniformPendingDisposal.forEach(t=>this.bufferManager.releaseBuffer(t)),this.stagingPendingDisposal.forEach(t=>this.bufferManager.releaseBuffer(t,!1)),this.tensorDataPendingDisposal=[],this.uniformPendingDisposal=[],this.stagingPendingDisposal=[]}ensureCommandEncoderReady(){this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder())}endComputePassEncoder(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}async checkCompileCompletionAsync(){let t;try{t=await Promise.all(Object.values(this.pipelineCache))}catch(e){throw new Error(e.message)}Object.keys(this.pipelineCache).map((e,r)=>{this.pipelineCache[e]=t[r]})}async getBufferData(t){if(fe().getBool("WEBGPU_ENGINE_COMPILE_ONLY"))return console.warn("The data may be invalid since WEBGPU_ENGINE_COMPILE_ONLY is true, this can only be called when WEBGPU_ENGINE_COMPILE_ONLY is false"),null;const e=t.size,r=this.bufferManager.acquireBuffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(t,0,r,0,e),this.submitQueue(),await r.mapAsync(GPUMapMode.READ);const o=r.getMappedRange().slice(0);return r.unmap(),r!=null&&this.bufferManager.releaseBuffer(r),fe().getBool("WEBGPU_USE_PROFILE_TOOL")&&(ne(this.dummyContext!==void 0,()=>"Fail to get context for profiling tool"),this.dummyContext.getCurrentTexture()),o}convertAndCacheOnCPU(t,e){const r=this.tensorMap.get(t);return r.values=e,r.values}readSync(t){const e=this.tensorMap.get(t),{values:r,complexTensorInfos:o}=e;if(r!=null||e.dtype==="string")return r;if(e.dtype==="complex64"){const w=this.readSync(o.real.dataId),b=this.readSync(o.imag.dataId),I=or(Mo(w,b).buffer,"float32");return this.convertAndCacheOnCPU(t,I),I}this.hasReadSyncWarned||(this.hasReadSyncWarned=!0,console.warn("The performance of synchronously reading data from GPU to CPU is poor on the webgpu backend, please use asynchronous APIs instead."));const n=["opaque","premultiplied"],a=e.resource,u=a.size;ne(u%4===0,()=>"Because there is 4 bytes for one pixel, buffer size must be multiple of 4.");const c=u/4,h=new ArrayBuffer(u),p=256,d=256,m=n.map(w=>new OffscreenCanvas(p,d)),x=new OffscreenCanvas(p,d);this.endComputePassEncoder(),m.map((w,b)=>{const I=w.getContext("webgpu");return I.configure({device:this.device,format:"bgra8unorm",usage:GPUTextureUsage.COPY_DST,alphaMode:n[b]}),I.getCurrentTexture()}).map((w,b)=>{const I=p*4,R=(E,F,W)=>{this.ensureCommandEncoderReady(),this.commandEncoder.copyBufferToTexture({buffer:a,bytesPerRow:I,offset:W},{texture:w},{width:E,height:F}),this.submitQueue();const B=x.getContext("2d",{willReadFrequently:!0});B.clearRect(0,0,E,F),B.drawImage(m[b],0,0);const X=B.getImageData(0,0,E,F).data,G=n[b],Q=new Uint8ClampedArray(h,W,E*F*4);for(let Z=0;Z<Q.length;Z+=4)if(G==="premultiplied")Q[Z+3]=X[Z+3];else{const ie=X[Z];Q[Z]=X[Z+2],Q[Z+1]=X[Z+1],Q[Z+2]=ie}},P=Math.floor(c/(p*d));let A=p,N=d,D=0;for(let E=0;E<P;E++)R(A,N,D),D+=p*d*4;const T=c%(p*d);N=Math.floor(T/p),N>0&&(R(A,N,D),D+=N*(p*4)),A=T%p,A>0&&R(A,1,D)});const y=or(h,e.dtype);return this.convertAndCacheOnCPU(t,y),y}async read(t){if(!this.tensorMap.has(t))throw new Error(`Tensor ${t} was not registered!`);const e=this.tensorMap.get(t),{values:r}=e;if(r!=null)return r;let o;if(e.dtype==="complex64"){const n=await Promise.all([this.read(e.complexTensorInfos.real.dataId),this.read(e.complexTensorInfos.imag.dataId)]),a=n[0],u=n[1];o=Mo(a,u)}else{const n=await this.getBufferData(e.resource);o=or(n,e.dtype)}return this.convertAndCacheOnCPU(t,o),o}copyBuffer(t){const e=t.size,r=t.usage,o=this.bufferManager.acquireBuffer(e,r);return this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(t,0,o,0,e),this.submitQueue(),o}createTensorFromGPUData(t,e,r){let o=t.buffer;if(r==="complex64")throw new Error("Cannot write to a complex64 dtype. ");const n={id:this.nextDataId()};this.tensorMap.set(n,{dtype:r,shape:e,values:null,refCount:1,external:t.zeroCopy});const a=this.tensorMap.get(n),u=Ko(a.dtype)*J(a.shape);if(t.buffer.size<u)throw new Error(`GPUBuffer size(${t.buffer.size}) is smaller than tensor size(${u})!`);if((t.buffer.usage&(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))!==(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))throw new Error("GPUBuffer.usage should include GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC!");return t.zeroCopy!==!0&&(o=this.copyBuffer(o)),a.resource=o,St().makeTensorFromDataId(n,e,r,this)}readToGPU(t){const e=this.tensorMap.get(t),{values:r,dtype:o,shape:n,resource:a}=e;if(o==="complex64")throw new Error("Does not support reading buffer for complex64 dtype.");if(a==null)throw r!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=a,c=u.size,h=u.usage,p=this.bufferManager.acquireBuffer(c,h);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(a,0,p,0,c),this.submitQueue();const d=this.makeTensorInfo(n,o),m=St().makeTensorFromTensorInfo(d),x=this.tensorMap.get(d.dataId);return x.resource=p,{tensorRef:m,buffer:p}}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const r=e.map(o=>Ir(o));return Rt(t.shape,t.dtype,r)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Rt(t.shape,t.dtype,e)}async time(t){!this.supportTimestampQuery&&!this.hasTimestampQueryWarned&&(console.warn("This device doesn't support timestamp-query extension. Start Chrome browser with flag --enable-dawn-features=allow_unsafe_apis to try it again. Otherwise, zero will be shown for the kernel time when profiling mode is enabled."),this.hasTimestampQueryWarned=!0);const e=this.activeTimers,r=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=r,o=!0):this.activeTimers.push(r),this.activeTimers=r,t();const n=Lo(this.activeTimers.map(h=>h.query)).filter(h=>h!=null),a=Lo(this.activeTimers.map(h=>h.name)).filter(h=>h!=null);this.activeTimers=e,o&&(this.programTimersStack=null);const u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},c=await Promise.all(n);return u.kernelMs=Fa(c),u.getExtraProfileInfo=()=>c.map((h,p)=>({name:a[p],ms:h})).map(h=>`${h.name}: ${h.ms}`).join(", "),this.uploadWaitMs=0,this.downloadWaitMs=0,u}makeTensorInfo(t,e,r){return e==="string"&&r!=null&&r.length>0&&Ea(r[0])&&(r=r.map(n=>_a(n))),{dataId:this.write(r,t,e),shape:t,dtype:e}}tensorToBinding(t){if(!t)return null;const r=this.tensorMap.get(t.dataId).resource;return r instanceof GPUBuffer?{buffer:r}:r instanceof GPUTexture?r.createView():r}uploadToGPU(t){const e=this.tensorMap.get(t);if(e.resource!=null)return;const r=Ko(e.dtype)*J(e.shape);let o;const n=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;if(e.values){if(o=this.bufferManager.acquireBuffer(r,n,!0),o.mapState==="unmapped"){const a=this.bufferManager.acquireBuffer(r,GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC,!0,!1),u=a.getMappedRange();e.dtype==="int32"||e.dtype==="bool"?new Int32Array(u).set(e.values):new Float32Array(u).set(e.values),a.unmap(),this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(a,0,o,0,r),this.stagingPendingDisposal.push(a)}else{const a=o.getMappedRange();e.dtype==="int32"||e.dtype==="bool"?new Int32Array(a).set(e.values):new Float32Array(a).set(e.values),o.unmap()}e.values=null}else o=this.bufferManager.acquireBuffer(r,n);e.resource=o}makeUniforms(t){let e=0,r=0;const o=[];let n=1;t.forEach(c=>{c.data.length===0&&(c.data=[1]);let h;switch(c.data.length){case 1:h=4;break;case 2:h=8;break;case 3:h=16;break;case 4:h=16;break;case 5:h=16;break;case 6:h=16;break;default:ne(!1,()=>`Unsupported ${c.data.length}D shape`)}(r===5||r===6)&&(h=16),h>n&&(n=h),e=Math.ceil(e/h)*h,r=c.data.length,o.push(e),e+=c.data.length*4}),e=Math.ceil(e/n)*n;const a=new ArrayBuffer(e);t.forEach((c,h)=>{const p=o[h];c.type==="int32"?new Int32Array(a,p,c.data.length).set(c.data):c.type==="uint32"?new Uint32Array(a,p,c.data.length).set(c.data):new Float32Array(a,p,c.data.length).set(c.data)});const u=this.bufferManager.acquireBuffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);return this.queue.writeBuffer(u,0,a,0,e),this.uniformPendingDisposal.push(u),{offset:0,size:e,buffer:u}}runWebGPUProgram(t,e,r,o,n){if(n||(n=this.makeTensorInfo(t.outputShape,r)),J(n.shape)===0)return this.tensorMap.get(n.dataId).values=Es(n.dtype,0),n;this.uploadToGPU(n.dataId),t.dispatch=jh(this.device,t);const a=e.map((c,h)=>{if(c.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");return this.uploadToGPU(c.dataId),{dtype:this.tensorMap.get(c.dataId).dtype,shape:c.shape,name:t.variableNames[h]}});t.shaderKey=_h(t,a,n);const u=fe().getBool("WEBGPU_ENGINE_COMPILE_ONLY");return t.shaderKey in this.pipelineCache||(this.pipelineCache[t.shaderKey]=Th(this.device,t,a,n,u)),t.pipeline=this.pipelineCache[t.shaderKey],u||this.recordAndSubmit(t,n,e,o),n}recordAndSubmit(t,e,r,o){if(t.pipeline instanceof Promise)throw new Error("Please call checkCompileCompletionAsync to ensure parallel compilation is done!");let n=[],a=[];const u="int32";if(t.pixelsOpType==null){n.push({type:"float32",data:[NaN]},{type:"float32",data:[1/0]}),a=r.concat(e).map(x=>x.shape);const m="int32";a.map(x=>{n.push({type:m,data:x});const y=Zt(x);n.push({type:m,data:y})})}else{const m=Zt(e.shape);n.push({type:u,data:m})}if(t.size){const m=J(t.outputShape);n.push({type:u,data:[t.outputComponent?m/t.outputComponent:m]})}o&&(n=[...n,...o]);const c=[this.tensorToBinding(e),...r.map(m=>this.tensorToBinding(m)),this.makeUniforms(n)];r.forEach(m=>{this.commandQueueOwnedIds.add(m.dataId)}),this.commandQueueOwnedIds.add(e.dataId);const h=this.device.createBindGroup({layout:t.pipeline.getBindGroupLayout(0),entries:c.map((m,x)=>({binding:x,resource:m}))}),p=this.activeTimers!=null;this.ensureCommandEncoderReady();const d={};p&&this.supportTimestampQuery?(this.endComputePassEncoder(),this.querySet==null&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.querySetCount})),d.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1},this.computePassEncoder=this.commandEncoder.beginComputePass(d)):this.computePassEncoder||(this.computePassEncoder=this.commandEncoder.beginComputePass(d)),this.computePassEncoder.setPipeline(t.pipeline),this.computePassEncoder.setBindGroup(0,h),this.computePassEncoder.dispatchWorkgroups(t.dispatch[0],t.dispatch[1],t.dispatch[2]),this.dispatchCountInPass++,(p||fe().get("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE")<=this.dispatchCountInPass||t.pixelsOpType===$t.DRAW)&&(this.endComputePassEncoder(),p?this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime()}):this.submitQueue())}async getQueryTime(){if(!this.supportTimestampQuery)return 0;this.queryResolveBuffer==null&&(this.queryResolveBuffer=this.bufferManager.acquireBuffer(this.querySetCount*8,GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.QUERY_RESOLVE)),this.commandEncoder.resolveQuerySet(this.querySet,0,this.querySetCount,this.queryResolveBuffer,0);const t=this.bufferManager.acquireBuffer(this.querySetCount*8,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,this.querySetCount*8),this.submitQueue(),await t.mapAsync(GPUMapMode.READ);const e=new BigUint64Array(t.getMappedRange()),r=Number(e[1]-e[0])/1e6;return t.unmap(),this.bufferManager.releaseBuffer(t),r}shouldExecuteOnCPU(t,e=Hh){return fe().getBool("WEBGPU_CPU_FORWARD")&&t.every(r=>this.tensorMap.get(r.dataId).resource==null&&J(r.shape)<e)}numDataIds(){return this.tensorMap.numDataIds()-this.tensorDataPendingDisposal.length}dispose(){this.disposed||(this.querySet!=null&&this.querySet.destroy(),this.bufferManager.dispose(),this.textureManager.dispose(),this.disposed=!0)}}Ft.nextDataId=0;/**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Hs()&&za("webgpu",async()=>{const i={powerPreference:fe().get("WEBGPU_USE_LOW_POWER_GPU")?"low-power":"high-performance"},t=await navigator.gpu.requestAdapter(i),e={},r=[];t.features.has("timestamp-query")&&r.push("timestamp-query"),t.features.has("bgra8unorm-storage")&&r.push(["bgra8unorm-storage"]),e.requiredFeatures=r;const o=t.limits;e.requiredLimits={maxComputeWorkgroupStorageSize:o.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:o.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:o.maxStorageBufferBindingSize,maxBufferSize:o.maxBufferSize,maxComputeWorkgroupSizeX:o.maxComputeWorkgroupSizeX,maxComputeInvocationsPerWorkgroup:o.maxComputeInvocationsPerWorkgroup};const n=await t.requestDevice(e),a=await t.requestAdapterInfo();return new Ft(n,a)},3);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var K;(function(i){i[i.ADD=0]="ADD",i[i.ATAN2=1]="ATAN2",i[i.COMPLEX_MULTIPLY_IMAG=2]="COMPLEX_MULTIPLY_IMAG",i[i.COMPLEX_MULTIPLY_REAL=3]="COMPLEX_MULTIPLY_REAL",i[i.DIV=4]="DIV",i[i.ELU_DER=5]="ELU_DER",i[i.EQUAL=6]="EQUAL",i[i.FLOOR_DIV=7]="FLOOR_DIV",i[i.GREATER=8]="GREATER",i[i.GREATER_EQUAL=9]="GREATER_EQUAL",i[i.LESS=10]="LESS",i[i.LESS_EQUAL=11]="LESS_EQUAL",i[i.LOGICAL_AND=12]="LOGICAL_AND",i[i.LOGICAL_OR=13]="LOGICAL_OR",i[i.MAX=14]="MAX",i[i.MIN=15]="MIN",i[i.MOD=16]="MOD",i[i.MUL=17]="MUL",i[i.NOT_EQUAL=18]="NOT_EQUAL",i[i.POW=19]="POW",i[i.PRELU=20]="PRELU",i[i.SQUARED_DIFFERENCE=21]="SQUARED_DIFFERENCE",i[i.SUB=22]="SUB"})(K||(K={}));const Xh="let resultTemp = a + b;",Kh="let resultTemp = atan2(a, b);",Yh="let resultTemp = areal * breal - aimag * bimag;",qh="let resultTemp = areal * bimag + aimag * breal;",Qh="let resultTemp = a / b;",Zh="let resultTemp = select(a * (b + 1.0), a, b >= b - b);",Jh=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a == b);
`,ed=`
  let remainder =
      select(a % b, round(a % b), (round(a) == a) & (round(b) == b));
  let quotient = (a - remainder) / b;
  let resultTemp =
      round(select(quotient, quotient - 1, sign(remainder) == -sign(b)));
`,td=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a > b);
`,id=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a >= b);
`,rd=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a < b);
`,od=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a <= b);
`,sd="return f32(a >= 1.0 && b >= 1.0);",nd=`return (vec4<f32>(a >= vec4<f32>(1.0)) *
  vec4<f32>(b >= vec4<f32>(1.0)));`,ad="return f32(a >= 1.0 || b >= 1.0);",ud=`return min(vec4<f32>(a >= vec4<f32>(1.0)) +
  vec4<f32>(b >= vec4<f32>(1.0)), vec4<f32>(1.0));`,ld="let resultTemp = max(a, b);",cd="let resultTemp = min(a, b);",hd=`
  let isNaN = b == 0.;
  var resultTemp = a % b;
  resultTemp = select((resultTemp + b) % b, resultTemp,
      (a < 0. && b < 0.) || (a >= 0. && b > 0.));
`,dd=`
  let isNaN = !vec4<bool>(b);
  var resultTemp = vec4<f32>(a % b);
  if (!((a[0] < 0. && b[0] < 0.) || (a[0] >= 0. && b[0] > 0.))) {
    resultTemp[0] = (resultTemp[0] + b[0]) % b[0];
  }
  if (!((a[1] < 0. && b[1] < 0.) || (a[1] >= 0. && b[1] > 0.))) {
    resultTemp[1] = (resultTemp[1] + b[1]) % b[1];
  }
  if (!((a[2] < 0. && b[2] < 0.) || (a[2] >= 0. && b[2] > 0.))) {
    resultTemp[2] = (resultTemp[2] + b[2]) % b[2];
  }
  if (!((a[3] < 0. && b[3] < 0.) || (a[3] >= 0. && b[3] > 0.))) {
    resultTemp[3] = (resultTemp[3] + b[3]) % b[3];
  }
`,pd="let resultTemp = a * b;",fd=`
  var resultTemp = f32(a != b);
  let valueForNaN = 1.0;
`,md=`
  var resultTemp = vec4<f32>(a != b);
  let valueForNaN = 1.0;
`,gd=`
  let isNaN = a < 0.0 && floor(b) < b;
  if (b == 0.0) {
    return 1.0;
  }
  var resultTemp = select(sign(a) * pow(abs(a), b), pow(abs(a), b),
      round(abs(b) % 2.0) != 1.0);
`,xd=`
  let isModRound1Bool = vec4<i32>(round(abs(b) % vec4<f32>(2.0))) == vec4<i32>(1);
  let isModRound1 = vec4<f32>(isModRound1Bool);
  let multiplier = sign(a) * isModRound1 + (vec4<f32>(1.0) - isModRound1);
  var resultTemp = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  let isExpZero = b == vec4<f32>(0.0);
  if (isExpZero.r) {
    resultTemp.r = 1.0;
  }
  if (isExpZero.g) {
    resultTemp.g = 1.0;
  }
  if (isExpZero.b) {
    resultTemp.b = 1.0;
  }
  if (isExpZero.a) {
    resultTemp.a = 1.0;
  }
  let isNaN = (a < vec4<f32>(0.0)) & (floor(b) < b);
`,yd="if (a < 0.0) { return b * a; }  return a;",wd=`
  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));
  return (aLessThanZero * (b * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);
`,vd="let resultTemp = (a - b) * (a - b);",Cd="let resultTemp = a - b;";function Fr(i,t){let e;do{switch(i){case K.ATAN2:e=Kh;break;case K.MAX:e=ld;break;case K.MIN:e=cd;break;case K.MOD:e=t?dd:hd;break;case K.NOT_EQUAL:e=t?md:fd;break;case K.POW:e=t?xd:gd;break;default:continue}let r,o,n;return t?(r="isnanVec4",o="vec4<f32>",n="vec4<bool>"):(r="isnan",o="f32",n="bool"),`
      let aIsNaN = ${r}(a);
      let aPostLegalization = select(a, ${o}(42), aIsNaN);
      let bIsNaN = ${r}(b);
      let bPostLegalization = select(b, ${o}(42), bIsNaN);
      let isNaN = false;
      let valueForNaN = uniforms.NAN;
      {
        let a = aPostLegalization;
        let b = bPostLegalization;
        ${e}
        return select(
            resultTemp, ${o}(valueForNaN),
            ${n}(isNaN) | aIsNaN | bIsNaN);
      }
    `}while(!1);switch(i){case K.ADD:e=Xh;break;case K.COMPLEX_MULTIPLY_IMAG:e=qh;break;case K.COMPLEX_MULTIPLY_REAL:e=Yh;break;case K.DIV:e=Qh;break;case K.ELU_DER:e=Zh;break;case K.EQUAL:e=Jh;break;case K.FLOOR_DIV:e=ed;break;case K.GREATER:e=td;break;case K.GREATER_EQUAL:e=id;break;case K.LESS:e=rd;break;case K.LESS_EQUAL:e=od;break;case K.LOGICAL_AND:return t?nd:sd;case K.LOGICAL_OR:return t?ud:ad;case K.MUL:e=pd;break;case K.PRELU:return t?wd:yd;case K.SQUARED_DIFFERENCE:e=vd;break;case K.SUB:e=Cd;break}return`
    ${e}
    return resultTemp;
  `}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var z;(function(i){i[i.ABS=0]="ABS",i[i.ACOS=1]="ACOS",i[i.ACOSH=2]="ACOSH",i[i.ASIN=3]="ASIN",i[i.ASINH=4]="ASINH",i[i.ATAN=5]="ATAN",i[i.ATANH=6]="ATANH",i[i.CEIL=7]="CEIL",i[i.COS=8]="COS",i[i.COSH=9]="COSH",i[i.ELU=10]="ELU",i[i.ERF=11]="ERF",i[i.EXP=12]="EXP",i[i.EXPM1=13]="EXPM1",i[i.FLOOR=14]="FLOOR",i[i.IS_FINITE=15]="IS_FINITE",i[i.IS_INF=16]="IS_INF",i[i.IS_NAN=17]="IS_NAN",i[i.LINEAR=18]="LINEAR",i[i.LOG=19]="LOG",i[i.LOG1P=20]="LOG1P",i[i.LOGICAL_NOT=21]="LOGICAL_NOT",i[i.NEG=22]="NEG",i[i.RELU=23]="RELU",i[i.RELU6=24]="RELU6",i[i.LEAKYRELU=25]="LEAKYRELU",i[i.RECIPROCAL=26]="RECIPROCAL",i[i.ROUND=27]="ROUND",i[i.RSQRT=28]="RSQRT",i[i.SELU=29]="SELU",i[i.SIGMOID=30]="SIGMOID",i[i.SIGN=31]="SIGN",i[i.SIN=32]="SIN",i[i.SINH=33]="SINH",i[i.SOFTPLUS=34]="SOFTPLUS",i[i.SQRT=35]="SQRT",i[i.SQUARE=36]="SQUARE",i[i.STEP=37]="STEP",i[i.TAN=38]="TAN",i[i.TANH=39]="TANH",i[i.TO_INT=40]="TO_INT"})(z||(z={}));const bd="return abs(a);",Sd=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  return acos(a);
`,kd=`
  if (a < 1.) {
    return uniforms.NAN;
  }
  return acosh(a);
`,Id=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  return asin(a);
`,Rd="return asinh(a);",Pd=`
  if (isnan(a)) {
    return uniforms.NAN;
  }
  return atan(a);
`,Ad=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  if (a == 1.) {
    return uniforms.INFINITY;
  }
  if (a == -1.) {
    return -uniforms.INFINITY;
  }
  return atanh(a);
`,$d="return ceil(a);",Nd="return cos(a);",Dd=`
  let e2x = exp(-a);
  return (e2x + 1.0 / e2x) / 2.0;
`,Td="return exp(a) - 1.0;",Fd="if (a >= 0.0) { return a; }  return (exp(a) - 1.0);",Ed=`
  var resFloat = exp(a) - vec4<f32>(1.0);
  if (a.r >= 0.0) {
    resFloat.r = a.r;
  }
  if (a.g >= 0.0) {
    resFloat.g = a.g;
  }
  if (a.b >= 0.0) {
    resFloat.b = a.b;
  }
  if (a.a >= 0.0) {
    resFloat.a = a.a;
  }
  return resFloat;
`,_d=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  let p = ${Ma};
  let a1 = ${La};
  let a2 = ${Oa};
  let a3 = ${Ba};
  let a4 = ${Wa};
  let a5 = ${Ua};

  let sign = sign(a);
  let absA = abs(a);
  let t = 1.0 / (1.0 + p * absA);
  return sign * (1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * exp(-absA * absA));
`,zd="return exp(a);",Md="return floor(a);",Ld="return f32(!isnan(a) && !isinf(a));",Od="return f32(isinf(a));",Bd="return f32(isnan(a));",Wd="return a;",Ud=`if (a < 0.0) { return uniforms.NAN; }
  return log(a);`,Vd=`
  if (isnan(a)) { return a; }
  return log(1.0 + a);
`,Gd="return f32(!(a >= 1.0));",Hd="return -a;",jd="if (a < 0.0) { return uniforms.alpha * a; } return a;",Xd=`
  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));
  return (aLessThanZero * (uniforms.alpha * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);
`,Kd="return 1.0 / a;",Yd="return select(a, 0.0, a < 0.0);",qd="return clamp(a, 0.0, 6.0);",Qd="return clamp(a, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(6.0, 6.0, 6.0, 6.0));",Zd=`
  return select(a, vec4<f32>(0.0), a < vec4<f32>(0.0));
`,Jd="return round(a);",ep="return inverseSqrt(a);",tp=`
  if (a >= 0.0) {
    return ${Va} * a;
  } else {
    return ${Ga} * (exp(a) - 1.0);
  }
`,ip="return 1.0 / (1.0 + exp(-1.0 * a));",rp="return sign(a);",op="return sin(a);",sp=`
  let e2x = exp(a);
  return (e2x - 1.0 / e2x) / 2.0;
`,np=`
  let epsilon = 1.1920928955078125e-7;
  let threshold = log(epsilon) + 2.0;

  let too_large = a > -threshold;
  let too_small = a < threshold;
  let exp_a = exp(a);

  if (too_large) {
    return a;
  } else if (too_small) {
    return exp_a;
  } else {
    return log(exp_a + 1.0);
  }
`,ap="return sqrt(a);",up="return a * a;",lp=`
  if (isnan(a)) {
    return a;
  }

  return select(uniforms.stepAlpha, 1.0, a > 0.0);
`,cp="return tan(a);",hp=`
  let e2x = exp(-2.0 * abs(a));
  return sign(a) * (1.0 - e2x) / (1.0 + e2x);
`,dp="return f32(i32((a)));";function lt(i,t){switch(i){case z.ABS:return bd;case z.ACOS:return Sd;case z.ACOSH:return kd;case z.ASIN:return Id;case z.ASINH:return Rd;case z.ATAN:return Pd;case z.ATANH:return Ad;case z.COS:return Nd;case z.COSH:return Dd;case z.CEIL:return $d;case z.ELU:return t?Ed:Fd;case z.ERF:return _d;case z.EXP:return zd;case z.EXPM1:return Td;case z.FLOOR:return Md;case z.IS_FINITE:return Ld;case z.IS_INF:return Od;case z.IS_NAN:return Bd;case z.LINEAR:return Wd;case z.LOG:return Ud;case z.LOG1P:return Vd;case z.LOGICAL_NOT:return Gd;case z.NEG:return Hd;case z.LEAKYRELU:return t?Xd:jd;case z.RECIPROCAL:return Kd;case z.RELU:return t?Zd:Yd;case z.RELU6:return t?Qd:qd;case z.ROUND:return Jd;case z.RSQRT:return ep;case z.SELU:return tp;case z.SIGMOID:return ip;case z.SIGN:return rp;case z.SIN:return op;case z.SINH:return sp;case z.SOFTPLUS:return np;case z.SQRT:return ap;case z.SQUARE:return up;case z.STEP:return lp;case z.TAN:return cp;case z.TANH:return hp;case z.TO_INT:return dp;default:throw new Error(`BinaryType ${i} is not implemented!`)}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qe(i,t=!1,e=!1,r=3){if(i===null)return"";let o="";if(i==="linear")o=lt(z.LINEAR);else if(i==="relu")o=lt(z.RELU,e);else if(i==="elu")o=lt(z.ELU,e);else if(i==="relu6")o=lt(z.RELU6,e);else if(i==="prelu")o=Fr(K.PRELU,e);else if(i==="sigmoid")o=lt(z.SIGMOID,e);else if(i==="leakyrelu")o=lt(z.LEAKYRELU,e);else throw new Error(`Activation ${i} has not been implemented for the WebGPU backend.`);const a=ee(e?4:1);let u="";return t?u=`
      fn activation(a : ${a}, coords : vec${r}<i32>) -> ${a} {
        let b = getPreluActivationWeightsByOutputCoords(coords);
        ${o}
      }`:u=`
      fn activation(a : ${a}, coords : vec${r}<i32>) -> ${a} {
        ${o}
      }`,u}function mt(i,t){return`
      ${i?"value = value + getBiasByOutputCoords(coords);":""}
      ${t?"value = activation(value, coords);":""}
      `}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xs(i,t,e=!1,r=!1,o=!1,n=1){ne(i&&n===1||!i,()=>`transposeA ${i} is not compatible with component size ${n}`);const a=`
      ${i?"value = getA(batch, col, row);":"value = getA(batch, row, col);"}

    `,u=t?"value = getB(batch, col, row);":"value = getB(batch, row, col);";return`
  fn mm_readA(batch: i32, row: i32, col: i32) -> ${ee(n)} {
    var value = ${ee(n)}(0.0);
    ${e&&o?a:`
    ${i?"if(row < uniforms.dimAOuter && col < uniforms.dimInner)":"if(row < uniforms.aShape[1] && col < uniforms.aShape[2])"}
    {
      ${a}
    }
    `}
    return value;
  }

  fn mm_readB(batch: i32, row: i32, col: i32) -> ${ee(n)} {
    var value = ${ee(n)}(0.0);
    ${u}
    return value;
  }
  `}function Er(i,t,e,r,o=!1,n=!1,a=!1,u=1){return`
  ${Xs(e,r,o,n,a,u)}
  fn mm_write(batch: i32, row: i32, col: i32, valueIn: ${ee(u)}) {
    ${o&&n?"":"if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)"}
    {
      var value = valueIn;
      let coords = vec3<i32>(batch, row, col);
      ${mt(i,t)}
      setOutputAtCoords(coords[0], coords[1], coords[2], value);
    }
  }
  `}const pp=(i,t)=>i?`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          kStart + inputRow,
          globalRowStart + inputCol * ${t});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          globalRow + innerRow,
          kStart + inputCol * ${t});
        `,fp=(i,t,e,r)=>{if(i)return`
      for (var k = 0; k < ${r}; k++) {
        let BCached0 = mm_Bsub[k][tileCol];
        let ACached0 = mm_Asub[k][localRow];
        for (var i = 0; i < ${e}; i++) {
          acc[i] = fma(BCached0, vec4<f32>(ACached0[i]), acc[i]);
        }
      }`;{let o="",n="";for(let a=0;a<t;a++)o+=`let BCached${a} = mm_Bsub[k * ${t} + ${a}][tileCol];`,n+=`acc[i] = fma(BCached${a}, vec4<f32>(ACached[${a}]), acc[i]);`;return`
      for (var k = 0; k < ${r/t}; k++) {
        ${o}
        for (var i = 0; i < ${e}; i++) {
          let ACached = mm_Asub[tileRow + i][k];
          ${n}
        }
      }`}};function Di(i,t,e=!1,r=32,o=!1,n=32,a=!1){const u=t[1]*i[1],c=t[0]*i[0],h=e?u:r,p=e?r:u,d=h/t[0],m=r/t[1],x=i[1],y=i[0];return ne((e&&d===4&&i[1]===4||!e&&(d===3||d===4))&&h%t[0]===0&&r%t[1]===0&&i[0]===4,()=>`If transposeA ${e} is true, innerElementSize ${d} and workPerThread[1] ${i[1]} must be 4.
          Otherwise, innerElementSize ${d} must be 3 or 4.
      tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${r} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${i[0]} must be 4.`),`
  var<workgroup> mm_Asub : array<array<vec${d}<f32>, ${h/d}>, ${p}>;
  var<workgroup> mm_Bsub : array<array<vec4<f32>, ${c/i[0]}>, ${r}>;

  ${M()} {
    let localRow = i32(localId.y);
    let tileRow = localRow * ${x};
    let tileCol = i32(localId.x);

    let globalRow = i32(globalId.y) * ${x};
    let globalCol = i32(globalId.x) * ${y};
    let batch = ${o?"0":"i32(globalId.z)"};
    let batchA = ${o||!a?"batch":"batch % uniforms.aShape[0]"};
    let batchB = ${o||!a?"batch":"batch % uniforms.bShape[0]"};
    let globalRowStart = i32(workgroupId.y) * ${u};

    let numTiles = ${o?`${Math.ceil(n/r)}`:`(uniforms.dimInner - 1) / ${r} + 1`};
    var kStart = ${o?`i32(globalId.z) * ${n}`:"0"};

    var acc: array<vec4<f32>, ${x}>;

    // Loop over shared dimension.
    let tileRowB = localRow * ${m};
    for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        for (var innerRow = 0; innerRow < ${x}; innerRow++) {
            let inputRow = tileRow + innerRow;
            let inputCol = tileCol;
            ${pp(e,d)}
        }

        // Load one tile of B into local memory.
        for (var innerRow = 0; innerRow < ${m}; innerRow++) {
            let inputRow = tileRowB + innerRow;
            let inputCol = tileCol;
            mm_Bsub[inputRow][inputCol] = mm_readB(batchB, kStart + inputRow, globalCol);
        }
        kStart = kStart + ${r};
        workgroupBarrier();

        // Compute acc values for a single thread.
        ${fp(e,d,x,r)}
        workgroupBarrier();
    }

    for (var innerRow = 0; innerRow < ${x}; innerRow++) {
        mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
    }
  }`}const Yo=i=>i?`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          kStart + inputRow,
          globalRowStart + inputCol);
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          globalRowStart + inputRow,
          kStart + inputCol);
        `,mp=i=>i?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];";function Ti(i,t,e=!1,r=32,o=!1,n=32,a=!1,u=!1){const c=i[1]*t[1],h=i[0]*t[0],p=e?c:r,d=e?r:c;ne(d%t[1]===0&&p%t[0]===0&&r%t[1]===0,()=>`tileAHight ${d} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${r} must be divisible by workgroupSize[1]${t[1]}`);const m=d/t[1],x=p/t[0],y=r/t[1],w=i[1],b=i[0],I=a?`
      let localRow = i32(localId.y);
      let localCol = i32(localId.x);
      let globalRowStart = i32(workgroupId.y) * ${c};
      let globalColStart = i32(workgroupId.x) * ${h};

      // Loop over shared dimension.
      for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        for (var inputRow = localRow; inputRow < ${d}; inputRow = inputRow + ${t[1]}) {
          for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
            ${Yo(e)}
          }
        }
        // Load one tile of B into local memory.
        for (var inputRow = localRow; inputRow < ${r}; inputRow = inputRow + ${t[1]}) {
              for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
            mm_Bsub[inputRow][inputCol] = mm_readB(batchB,
              kStart + inputRow,
              globalColStart + inputCol);
          }
        }
        kStart = kStart + ${r};
        workgroupBarrier();

        // Compute acc values for a single thread.
        var BCached : array<f32, ${b}>;
        for (var k = 0; k < ${r}; k++) {
          for (var inner = 0; inner < ${b}; inner++) {
            BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
          }
          for (var innerRow = 0; innerRow < ${w}; innerRow++) {
            let ACached = ${e?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
            for (var innerCol = 0; innerCol < ${b}; innerCol++) {
              acc[innerRow][innerCol] =
                  fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);
            }
          }
        }
        workgroupBarrier();
      }
      for (var innerRow = 0; innerRow < ${w}; innerRow++) {
        let gRow = globalRowStart + localRow + innerRow * ${t[1]};
        for (var innerCol = 0; innerCol < ${b}; innerCol++) {
          let gCol = globalColStart + localCol + innerCol * ${t[0]};
          mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
        }
      }
      `:`
  let tileRow = i32(localId.y) * ${w};
  let tileCol = i32(localId.x) * ${b};

  let globalRow = i32(globalId.y) * ${w};
  let globalCol = i32(globalId.x) * ${b};
  let globalRowStart = i32(workgroupId.y) * ${c};

  let tileRowA = i32(localId.y) * ${m};
  let tileColA = i32(localId.x) * ${x};
  let tileRowB = i32(localId.y) * ${y};
  // Loop over shared dimension.
  for (var t = 0; t < numTiles; t++) {
    // Load one tile of A into local memory.
    for (var innerRow = 0; innerRow < ${m}; innerRow++) {
      for (var innerCol = 0; innerCol < ${x}; innerCol++) {
        let inputRow = tileRowA + innerRow;
        let inputCol = tileColA + innerCol;
        ${Yo(e)}
      }
    }

    // Load one tile of B into local memory.
    for (var innerRow = 0; innerRow < ${y}; innerRow++) {
      for (var innerCol = 0; innerCol < ${b}; innerCol++) {
        let inputRow = tileRowB + innerRow;
        let inputCol = tileCol + innerCol;
        mm_Bsub[inputRow][inputCol] = mm_readB(batchB,
          kStart + inputRow,
          globalCol + innerCol);
      }
    }
    kStart = kStart + ${r};
    workgroupBarrier();

    // Compute acc values for a single thread.
    var BCached : array<f32, ${b}>;
    for (var k = 0; k < ${r}; k++) {
      for (var inner = 0; inner < ${b}; inner++) {
        BCached[inner] = mm_Bsub[k][tileCol + inner];
      }

      for (var innerRow = 0; innerRow < ${w}; innerRow++) {
        ${mp(e)}
        for (var innerCol = 0; innerCol < ${b}; innerCol++) {
          acc[innerRow][innerCol] =
              fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);
        }
      }
    }

    workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < ${w}; innerRow++) {
    for (var innerCol = 0; innerCol < ${b}; innerCol++) {
      mm_write(batch, globalRow + innerRow, globalCol + innerCol,
          acc[innerRow][innerCol]);
    }
  }
  `;return`
    var<workgroup> mm_Asub : array<array<f32, ${p}>, ${d}>;
    var<workgroup> mm_Bsub : array<array<f32, ${h}>, ${r}>;

    ${M()} {
      let batch = ${o?"0":"i32(globalId.z)"};
      let batchA = ${o||!u?"batch":"batch % uniforms.aShape[0]"};
      let batchB = ${o||!u?"batch":"batch % uniforms.bShape[0]"};
      let numTiles = ${o?`${Math.ceil(n/r)}`:`(uniforms.dimInner - 1) / ${r} + 1`};
      var kStart = ${o?`i32(globalId.z) * ${n}`:"0"};

      var acc : array<array<f32, ${b}>, ${w}>;

      // Without this initialization strange values show up in acc.
      for (var innerRow = 0; innerRow < ${w}; innerRow++) {
        for (var innerCol = 0; innerCol < ${b}; innerCol++) {
          acc[innerRow][innerCol] = 0.0;
        }
      }
      ${I}
    }
  `}const gp=i=>i?`
      mm_readA(batchA, colA, globalRow),
      mm_readA(batchA, colA + 1, globalRow),
      mm_readA(batchA, colA + 2, globalRow),
      mm_readA(batchA, colA + 3, globalRow)
  `:`
      mm_readA(batchA, globalRow, colA),
      mm_readA(batchA, globalRow, colA + 1),
      mm_readA(batchA, globalRow, colA + 2),
      mm_readA(batchA, globalRow, colA + 3)
  `;function xp(i,t=!1){ne(i[1]===1&&i[2]===1,()=>`A linear work group size is required. But got ${i}.`);const e=i[0]*4;return`
    var<workgroup> mm_Asub : array<vec4<f32>, ${i[0]}>;

    ${M()} {
      let tileCol = i32(localId.x);
      let globalCol = i32(globalId.x);
      let globalRow = i32(globalId.y);

      let numTiles = (uniforms.dimInner - 1) / ${e} + 1;
      let batch = i32(globalId.z);
      let batchA = batch % uniforms.aShape[0];
      let batchB = batch % uniforms.bShape[0];
      // Without this initialization strange values show up in acc.
      var acc = 0.0;

      // Loop over shared dimension.
      for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        let colA = t * ${e} + tileCol * 4;
        mm_Asub[tileCol] = vec4<f32>(${gp(t)});
        workgroupBarrier();

        // Compute acc values for a single thread.
        for (var k = 0; k < ${e/4}; k++) {
          let rowB = t * ${e} + k * 4;
          let BCached = vec4<f32>(mm_readB(batchB, rowB, globalCol),
                              mm_readB(batchB, rowB + 1, globalCol),
                              mm_readB(batchB, rowB + 2, globalCol),
                              mm_readB(batchB, rowB + 3, globalCol));

          let ACached = mm_Asub[k];
          acc = acc + dot(ACached, BCached);
        }

        workgroupBarrier();
      }

      mm_write(batch, globalRow, globalCol, acc);
    }
  `}class yp{constructor(t,e,r=!1,o=!1,n=null,a=null,u=null,c=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=e,this.dispatchLayout={x:[2],y:[1],z:[0]};const h=r?t[1]:t[2];if(this.isVec4=(h%4===0&&!r||e[1]%4===0&&r)&&e[2]%4===0&&!o,this.outputComponent=this.isVec4?4:1,this.isVectorA=e[1]===1&&!r,!this.isVec4&&this.isVectorA)this.elementsPerThread=[1,1,1],this.workgroupSize=[32,1,1];else{const m=Gh(e[1],h,e[2],r);this.workgroupSize=m.workgroupSize,this.elementsPerThread=m.elementsPerThread}this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread);const p=n!=null,d=u!=null;p&&this.variableNames.push("bias"),d&&this.variableNames.push("preluActivationWeights"),this.sequentialAccessByThreads=c,this.transposeA=r,this.transposeB=o,this.addBias=p,this.activation=a,this.hasPreluActivationWeights=d,[this.fitAOuter,this.fitBOuter,this.fitInner]=this.getShapeFit(e[1],e[2],h),this.shaderKey=`matMulPacked_${this.elementsPerThread}_${r}_${o}_${this.activation}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.isVectorA}_${this.sequentialAccessByThreads}`}getShapeFit(t,e,r){const o=this.workgroupSize[1]*this.elementsPerThread[1],n=this.workgroupSize[0]*this.elementsPerThread[0];!this.isVec4&&this.isVectorA?this.tileInner=this.workgroupSize[0]*4:this.tileInner=n;const a=t%o===0,u=e%n===0,c=r%this.tileInner===0;return[a,u,c]}getUserCode(){return`
      ${Qe(this.activation,this.hasPreluActivationWeights,this.isVec4)}
      ${Er(this.addBias,this.activation,!1,this.transposeB,this.fitAOuter,this.fitBOuter,this.fitInner,this.isVec4?4:1)}
      ${this.isVec4?Di(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,!0):this.isVectorA?xp(this.workgroupSize,this.transposeA):Ti(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,this.sequentialAccessByThreads,!0)}
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wp(i){return`
    var<workgroup> sumValues : array<f32, ${i}>;
    ${M()} {
      let coords = getOutputCoords();
      let batch = coords[0];
      let batchA = batch % uniforms.aShape[0];
      let batchB = batch % uniforms.bShape[0];
      let row = coords[1];
      let col = coords[2];
      var sum = 0.0;
      let Length = uniforms.dimInner;
      for (var k = i32(localId.x); k < Length; k = k + ${i}) {
        let dataA = mm_readA(batchA, row, k);
        let dataB = mm_readB(batchB, k, col);
        sum = sum + dataA * dataB;
      }
      sumValues[localId.x] = sum;
      workgroupBarrier();

      for(var currentSize = ${i/2}u; currentSize > 1u;
          currentSize = currentSize / 2u) {
        if (localId.x < currentSize)
        {
          sumValues[localId.x] = sumValues[localId.x] + sumValues[localId.x + currentSize];
        }
        workgroupBarrier();
      }

      if (localId.x == 0u) {
        sum = sumValues[0] + sumValues[1];
        mm_write(batch, row, col, sum);
      }
    }
  `}class vp{constructor(t,e=!1,r=!1,o=null,n=null,a=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[256,1,1],this.outputShape=t,this.dispatchLayout={x:[],y:[1,2],z:[0]},this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize);const u=o!=null,c=a!=null;u&&this.variableNames.push("bias"),c&&this.variableNames.push("preluActivationWeights"),this.transposeA=e,this.transposeB=r,this.addBias=u,this.activation=n,this.hasPreluActivationWeights=c,this.shaderKey=`matMulReduce_${this.activation}_${e}_${r}`}getUserCode(){return`
      ${Qe(this.activation,this.hasPreluActivationWeights)}
      ${Er(this.addBias,this.activation,this.transposeA,this.transposeB)}
      ${wp(this.workgroupSize[0])}
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cp(i){const t=i[1],e=i[0],r=t>e?t:e;return`
  var<workgroup> mm_Asub : array<array<f32, ${r}>, ${t}>;
  var<workgroup> mm_Bsub : array<array<f32, ${e}>, ${r}>;

  // If the output size is small for matrix multiplication, avoid to use vec4
  // and handle some elements per thread to optimally utilize the ALU.
  // Read data from global memory to registers firstly, then store them into
  // shared memory, so it is instruction-Level parallelism for arithmetic
  // operations and others handle IO operations between barrier api, makes ALU
  // and load/store units work simultaneously, could improves the performance.
  ${M()} {
    let tileRow = i32(localId.y);
    let tileCol = i32(localId.x);
    let globalRow = i32(globalId.y);
    let globalCol = i32(globalId.x);
    let batch = i32(globalId.z);
    let batchA = batch % uniforms.aShape[0];
    let batchB = batch % uniforms.bShape[0];

    // uniforms.dimInner should be greater than 0.
    let numTiles = (uniforms.dimInner - 1) / ${r} + 1;
    var acc = 0.0;

    var globalColA = tileCol;
    var globalRowB = 0;
    var regA = mm_readA(batchA, globalRow, globalColA);
    var regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);
    var regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);
    globalColA = globalColA + ${r};
    globalRowB = globalRowB + ${r};

    for (var t = 0; t < numTiles; t = t + 1) {
      mm_Asub[tileRow][tileCol] = regA;
      mm_Bsub[2 * tileRow][tileCol] = regB0;
      mm_Bsub[2 * tileRow + 1][tileCol] = regB1;

      workgroupBarrier();

      regA = mm_readA(batchA, globalRow, globalColA);
      regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);
      regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);
      globalColA = globalColA + ${r};
      globalRowB = globalRowB + ${r};

      for (var k = 0; k < ${r}; k = k + 1) {
        acc = acc + mm_Asub[tileRow][k] * mm_Bsub[k][tileCol];
      }
      workgroupBarrier();
    }

    mm_write(batch, globalRow, globalCol, acc);
  }
  `}class bp{constructor(t,e,r,o=!1,n=!1,a=null,u=null,c=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[16,8,1],this.outputShape=r,this.dispatchLayout={x:[2],y:[1],z:[0]},this.dispatch=[Math.ceil(r[2]/this.workgroupSize[0]),Math.ceil(r[1]/this.workgroupSize[1]),r[0]];const h=a!=null;h&&this.variableNames.push("bias");const p=c!=null;p&&this.variableNames.push("preluActivationWeights"),this.transposeA=o,this.transposeB=n,this.addBias=h,this.activation=u,this.hasPreluActivationWeights=p,this.shaderKey=`matMulSmallOutputSize_${this.activation}_${o}_${n}`}getUserCode(){return`
      ${Qe(this.activation,this.hasPreluActivationWeights)}
      ${Er(this.addBias,this.activation,this.transposeA,this.transposeB)}
      ${Cp(this.workgroupSize)}
    `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Sp{constructor(t,e,r=!1,o=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[8,8,1],this.atomic=!0,this.splitedDimInner=128,ne(t[0]===1,()=>"MatMulSplitKProgram only supports batch = 1."),this.outputShape=t,this.dispatchLayout={x:[2],y:[1],z:[0,3]};const n=(r&&this.outputShape[1]%4===0||!r&&e%4===0)&&this.outputShape[2]%4===0;this.elementsPerThread=[4,4,this.splitedDimInner],this.outputComponent=n?4:1,n||(this.outputShape[1]<16&&(this.elementsPerThread[1]=1),this.outputShape[2]<16&&(this.elementsPerThread[0]=1)),this.dispatch=L(this.dispatchLayout,[this.outputShape[0],this.outputShape[1],this.outputShape[2],e],this.workgroupSize,this.elementsPerThread),this.transposeA=r,this.transposeB=o,this.shaderKey=`matMulSplitK_${r}_${o}_${this.elementsPerThread}_${this.outputComponent}`}getUserCode(){const t=this.outputComponent;return`
      ${Xs(!1,this.transposeB,!1,!1,!1,t)}
      fn mm_write(batch: i32, row : i32, col : i32, value : ${ee(t)}) {
        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {
          let coords = vec3<i32>(batch, row, col);
          let flatIndex = getOutputIndexFromCoords(coords);
          // The problem is that we should initialize output to zero before using.
          // Otherwise, the original value will be added to the result.
          for (var i = 0; i < ${t}; i = i + 1) {
            ${ot("&result[flatIndex + i]",`${t>1?"value[i]":"value"}`,"float32")}
          }
        }
      }
      ${t===4?Di(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner):Ti(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner)}
    `}}class kp{constructor(t,e=null,r=null,o=null){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=e!=null,this.hasPreluActivationWeights=o!=null,this.activation=r,this.addBias&&this.variableNames.push("bias"),this.hasPreluActivationWeights&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`biasActivation_${r}`}getUserCode(){return`
    ${Qe(this.activation,this.hasPreluActivationWeights)}
    ${M("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        var value = getXByOutputIndex(index);
        ${mt(this.addBias,this.activation)}
        setOutputAtIndex(index, value);
      }
    }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ip{constructor(t){this.variableNames=[],this.outputShape=[],this.uniforms="value : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="fill"}getUserCode(){return`
    ${M("index")} {
      if (index < uniforms.size) {
        setOutputAtIndex(index, uniforms.value);
      }
    }
  `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $e(i){const{backend:t,attrs:e}=i,{shape:r,value:o}=e;let{dtype:n}=e;if(n=n||ja(o),n==="string"){const a=Xa(n,J(r));return a.fill(o),t.makeTensorInfo(r,n,a)}else{const a=new Ip(r),u=[{type:"float32",data:[o]}];return t.runWebGPUProgram(a,[],n,u)}}const Rp={kernelName:Ha,backendName:"webgpu",kernelFunc:$e};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H(i){const{inputs:t,attrs:e}=i,{x:r}=t,{shape:o}=e,n=J(r.shape),a=Ya(o,n),u=J(a);return ne(n===u,()=>`The new shape (${a}) has ${u} elements and the old shape (${r.shape}) has ${n} elements. The new shape and old shape must have the same number of elements.`),i.backend.incRef(r.dataId),{dataId:r.dataId,shape:a,dtype:r.dtype}}const Pp={kernelName:Ka,backendName:"webgpu",kernelFunc:H};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fi({a:i,b:t,transposeA:e,transposeB:r,backend:o,bias:n=null,preluActivationWeights:a=null,leakyreluAlpha:u=0,activation:c=null}){const h=i.shape.length,p=t.shape.length,d=e?i.shape[h-2]:i.shape[h-1],m=r?t.shape[p-1]:t.shape[p-2],x=e?i.shape[h-1]:i.shape[h-2],y=r?t.shape[p-2]:t.shape[p-1],w=i.shape.slice(0,-2),b=t.shape.slice(0,-2),I=J(w),R=J(b),A=et(i.shape.slice(0,-2),t.shape.slice(0,-2)).concat([x,y]);ne(d===m,()=>`Error in matMul: inner shapes (${d}) and (${m}) of Tensors with shapes ${i.shape} and ${t.shape} and transposeA=${e} and transposeB=${r} must match.`);const N=e?[I,d,x]:[I,x,d],D=r?[R,y,m]:[R,m,y],T=H({inputs:{x:i},backend:o,attrs:{shape:N}}),E=H({inputs:{x:t},backend:o,attrs:{shape:D}}),F=[T,E],W=Math.max(I,R),B=[T,E],X=[{type:"int32",data:[x]},{type:"int32",data:[y]},{type:"int32",data:[d]}];let G,Q;const Z=[W,x,y];let ie=fe().get("WEBGPU_MATMUL_PROGRAM_TYPE");if(ie<0){const Se=fe().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),me=Se>0?Se:o.thresholdToIncreaseWorkgroups,Be=W*Math.ceil(x/32)*Math.ceil(y/32);Be<=me||x<=8&&Be<=me*2?W*x*y<=128?ie=He.MatMulReduceProgram:W===1&&m>=2e3?ie=He.MatMulSplitKProgram:ie=He.MatMulSmallOutputSizeProgram:ie=He.MatMulPackedProgram}switch(ie){case He.MatMulReduceProgram:G=new vp(Z,e,r,n,c,a);break;case He.MatMulSplitKProgram:{if(Q=$e({backend:o,attrs:{shape:Z,value:0,dtype:i.dtype}}),G=new Sp(Z,m,e,r),n||c){Q=o.runWebGPUProgram(G,B,i.dtype,X,Q);const me=new kp(Q.shape,n,c,a);let Be=null;const Me=[Q];n&&Me.push(n),a&&Me.push(a),c==="leakyrelu"&&(Be=[{type:"float32",data:[u]}],me.uniforms+=" alpha : f32,");const zt=o.runWebGPUProgram(me,Me,Q.dtype,Be);F.push(Q);const Mt=H({inputs:{x:zt},backend:o,attrs:{shape:A}});F.push(zt);for(const di of F)o.disposeData(di.dataId);return Mt}break}case He.MatMulSmallOutputSizeProgram:G=new bp(N,D,Z,e,r,n,c,a);break;case He.MatMulPackedProgram:const Se=o.adapterInfo.isIntel();G=new yp(N,Z,e,r,n,c,a,Se);break;default:throw new Error(`Unsupported MatMulProgramType ${ie}.`)}n&&B.push(n),a&&B.push(a),c==="leakyrelu"&&(X.push({type:"float32",data:[u]}),G.uniforms+=" alpha : f32,"),Q=o.runWebGPUProgram(G,B,i.dtype,X,Q);const we=H({inputs:{x:Q},backend:o,attrs:{shape:A}});F.push(Q);for(const Se of F)o.disposeData(Se.dataId);return we}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ap(i){const{inputs:t,backend:e,attrs:r}=i,{a:o,b:n,bias:a,preluActivationWeights:u}=t,{transposeA:c,transposeB:h,activation:p,leakyreluAlpha:d}=r;return Fi({a:o,b:n,transposeA:c,transposeB:h,backend:e,bias:a,preluActivationWeights:u,leakyreluAlpha:d,activation:p})}const $p={kernelName:qa,backendName:"webgpu",kernelFunc:Ap};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qo{constructor(t,e,r){this.variableNames=["AReal","AImag","BReal","BImag"],this.workgroupSize=[128,1,1],this.size=!0,this.outputShape=et(e,r),this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`binaryOpComplex_${t}`,this.op=t}getUserCode(){return`
      fn binaryOpComplex(
          areal : f32, aimag : f32, breal : f32, bimag : f32) -> f32 {
        ${Fr(this.op,!1)}
      }

      ${M("index")} {
        if(index < uniforms.size) {
          let areal = getARealByOutputIndex(index);
          let aimag = getAImagByOutputIndex(index);
          let breal = getBRealByOutputIndex(index);
          let bimag = getBImagByOutputIndex(index);
          setOutputAtIndex(index, binaryOpComplex(areal, aimag, breal, bimag));
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ri{constructor(t,e,r){if(this.size=!0,this.variableNames=["A","B"],this.outputShape=et(e,r),this.dispatchLayout=U(this.outputShape),this.op=t,this.useSharedMemoryWithA=e.length<=1&&r.length>1&&e[0]<128,this.useSharedMemoryWithB=r.length<=1&&e.length>1&&r[0]<128,this.useSharedMemoryWithA||this.useSharedMemoryWithB)this.outputComponent=1,this.variableComponents=[1,1],this.lastDimensionSize=this.useSharedMemoryWithB?r[0]:e[0],this.shaderKey=`binary_${t}_${this.lastDimensionSize}`,this.type="shared",this.workgroupSize=[256,1,1];else{const o=e.length>0&&e[e.length-1]%4===0,n=r.length>0&&r[r.length-1]%4===0;o&&n?(this.outputComponent=4,this.variableComponents=[4,4]):o&&(Oo(r)||r[r.length-1]===1)||n&&(Oo(e)||e[e.length-1]===1)?(this.outputComponent=4,this.variableComponents=o?[4,1]:[1,4]):(this.outputComponent=1,this.variableComponents=[1,1]),this.type="nonshared",this.shaderKey=`binary_${t}_${this.variableComponents}`,this.workgroupSize=[128,1,1]}this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.outputComponent,1,1])}getUserCode(){let t;const e=this.outputComponent===4?"vec4<f32>":"f32",r=`
    fn binaryOperation(a : ${e}, b : ${e}) -> ${e} {
      ${Fr(this.op,this.outputComponent===4)}
    };
    `;if(this.type==="shared"){const o=this.lastDimensionSize>1?`coords[${this.outputShape.length-1}]`:"0",n=this.useSharedMemoryWithB?`let a = getAByOutputIndex(index);
          let b = sharedBuf[${o}];`:`let a = sharedBuf[${o}];
          let b = getBByOutputIndex(index);`;t=`
        ${r}
        var<workgroup> sharedBuf : array<f32, ${this.lastDimensionSize}>;
        ${M("index")} {
          // Fill in the shared memory buffer.
          let localIndex = i32(localId.x);
          if(localIndex < ${this.lastDimensionSize}) {
            sharedBuf[localIndex] = f32(${this.useSharedMemoryWithB?"B":"A"}[localIndex]);
          }
          workgroupBarrier();

          if(index < uniforms.size) {
            let coords = getCoordsFromIndex(index);
            ${n}
            setOutputAtIndex(index, binaryOperation(a, b));
          }
        }
        `}else t=`
       ${r}
       ${M("index")} {
         if (index < uniforms.size) {
           let coords = getCoordsFromIndex(index * ${this.outputComponent});
           let a = ${e}(getAByOutputCoords(coords));
           let b = ${e}(getBByOutputCoords(coords));
           setOutputAtIndex(index, binaryOperation(a, b));
         }
       }
       `;return t}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ee(i){const{inputs:t}=i,{x:e}=t;return i.backend.incRef(e.dataId),{dataId:e.dataId,shape:e.shape,dtype:e.dtype}}const Np={kernelName:Qa,backendName:"webgpu",kernelFunc:Ee};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gt(i){const{inputs:t,backend:e}=i,{real:r,imag:o}=t,n=e.makeTensorInfo(r.shape,"complex64"),a=e.tensorMap.get(n.dataId),u=Ee({inputs:{x:r},backend:e}),c=Ee({inputs:{x:o},backend:e});return a.complexTensorInfos={real:u,imag:c},n}const Dp={kernelName:Za,backendName:"webgpu",kernelFunc:gt};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Et{constructor(t,e,r=""){this.variableNames=["A"],this.size=!0;const o=128;this.workgroupSize=[o,1,1],this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.op=e,r!==""&&(this.uniforms=r),this.shaderKey=`unary_${e}`}getUserCode(){return`
      fn unaryOperation(a : f32) -> f32 {
        ${lt(this.op,!1)}
      }
      ${M("index")} {
        if (index < uniforms.size) {
          let a = getAByOutputIndex(index);
          setOutputAtIndex(index, unaryOperation(a));
        }
      }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function se({opType:i,cpuKernelImpl:t,dtype:e}){return({inputs:r,backend:o})=>{const{x:n}=r,a=o,u=e||n.dtype;if(a.shouldExecuteOnCPU([n])&&t!=null){const h=a.tensorMap.get(n.dataId),p=t(h.values,u);return a.makeTensorInfo(n.shape,u,p)}const c=new Et(n.shape,i);return a.runWebGPUProgram(c,[n],u)}}function ye({opType:i,cpuKernelImpl:t,supportsComplex:e=!1,dtype:r}){return({inputs:o,backend:n})=>{const{a,b:u}=o,c=n;if(e&&a.dtype==="complex64"){const d=c.tensorMap.get(a.dataId),m=c.tensorMap.get(u.dataId);let x,y;if(i!==K.MUL)[x,y]=[[d.complexTensorInfos.real,m.complexTensorInfos.real],[d.complexTensorInfos.imag,m.complexTensorInfos.imag]].map(b=>{const[I,R]=b,P={dataId:I.dataId,dtype:I.dtype,shape:a.shape},A={dataId:R.dataId,dtype:R.dtype,shape:u.shape},N=new Ri(i,a.shape,u.shape);return c.runWebGPUProgram(N,[P,A],Jt(I.dtype,R.dtype))});else{const b=new qo(K.COMPLEX_MULTIPLY_REAL,a.shape,u.shape),I=new qo(K.COMPLEX_MULTIPLY_IMAG,a.shape,u.shape),R=[{dataId:d.complexTensorInfos.real.dataId,dtype:d.complexTensorInfos.real.dtype,shape:a.shape},{dataId:d.complexTensorInfos.imag.dataId,dtype:d.complexTensorInfos.imag.dtype,shape:a.shape},{dataId:m.complexTensorInfos.real.dataId,dtype:m.complexTensorInfos.real.dtype,shape:u.shape},{dataId:m.complexTensorInfos.imag.dataId,dtype:m.complexTensorInfos.imag.dtype,shape:u.shape}];x=c.runWebGPUProgram(b,R,"float32"),y=c.runWebGPUProgram(I,R,"float32")}const w=gt({inputs:{real:x,imag:y},backend:c});return c.disposeData(x.dataId),c.disposeData(y.dataId),w}const h=r||Jt(a.dtype,u.dtype);if((a.dtype==="string"||u.dtype==="string"||c.shouldExecuteOnCPU([a,u]))&&t!=null){const d=c.tensorMap.get(a.dataId).values,m=c.tensorMap.get(u.dataId).values,x=a.dtype==="string"?Bo(d):d,y=a.dtype==="string"?Bo(m):m,[w,b]=t(a.shape,u.shape,x,y,h);return c.makeTensorInfo(b,h,w)}const p=new Ri(i,a.shape,u.shape);return c.runWebGPUProgram(p,[a,u],h)}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const{addImpl:Tp,castImpl:Fp,ceilImpl:Ep,concatImpl:_p,equalImpl:zp,expImpl:Mp,expm1Impl:Lp,floorImpl:Op,floorDivImpl:Bp,gatherNdImpl:Wp,gatherV2Impl:Up,greaterEqualImpl:Vp,greaterImpl:Gp,lessEqualImpl:Hp,lessImpl:jp,logImpl:Xp,maxImpl:Kp,maximumImpl:Yp,minimumImpl:qp,multiplyImpl:Qp,negImpl:Zp,notEqualImpl:Jp,prodImpl:ef,rangeImpl:tf,rsqrtImpl:rf,scatterImpl:of,simpleAbsImpl:sf,sliceImpl:nf,stridedSliceImpl:af,stringNGramsImpl:uf,subImpl:lf,tileImpl:cf,topKImpl:hf,transposeImpl:df,uniqueImpl:m0}=Ja;/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pf=se({opType:z.ABS,cpuKernelImpl:sf}),ff={kernelName:eu,backendName:"webgpu",kernelFunc:pf};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mf=se({opType:z.ACOS}),gf={kernelName:tu,backendName:"webgpu",kernelFunc:mf};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xf=se({opType:z.ACOSH}),yf={kernelName:iu,backendName:"webgpu",kernelFunc:xf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wf=ye({opType:K.ADD,cpuKernelImpl:Tp,supportsComplex:!0}),vf={kernelName:ru,backendName:"webgpu",kernelFunc:wf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Cf{constructor(t){this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t[0],this.variableNames=t.map((e,r)=>`T${r}`),this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="addN"}getUserCode(){const t=[];this.variableNames.forEach(o=>{t.push(`let v${o} = get${o}ByOutputCoords(coords);`)});const e=this.variableNames.map(o=>`v${o}`).join(" + ");return`
      ${M("index")} {
        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if (flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            ${t.join(`
        `)}
            setOutputAtIndex(flatIndex, ${e});
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bf(i){const{inputs:t,backend:e}=i,r=t;if(r.length===1)return Ee({inputs:{x:r[0]},backend:e});const o=r.map(u=>u.dtype).reduce((u,c)=>Jt(u,c)),n=r.map(u=>u.shape),a=new Cf(n);return e.runWebGPUProgram(a,r,o)}const Sf={kernelName:ou,backendName:"webgpu",kernelFunc:bf};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kf{constructor(t,e){this.variableNames=["A"],this.workgroupSize=[16,16,1];const r=new Array(t.length);for(let o=0;o<r.length;o++)r[o]=t[e[o]];this.outputShape=r,this.dispatchLayout={x:[0],y:[1]},this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,[1,1,1]),this.shaderKey="transposeShared"}getUserCode(){ne(this.workgroupSize[0]===this.workgroupSize[1],()=>`Must be a square tile, current tile shape is ${this.workgroupSize[0]} x ${this.workgroupSize[1]}`);const t=this.workgroupSize[0];return`
      var<workgroup> tile : array<array<f32, ${this.workgroupSize[0]+1}>, ${this.workgroupSize[0]}>;
      ${M()} {
        var x = i32(workgroupId.x) * ${t} + i32(localId.x);
        var y = i32(workgroupId.y) * ${t} + i32(localId.y);
        let width = uniforms.outShape[0];
        let height = uniforms.outShape[1];
        if (x < width && y < height) {
          tile[localId.y][localId.x] = f32(A[y * width + x]);
        }
        workgroupBarrier();

        x = i32(workgroupId.y) * ${t} + i32(localId.x);
        y = i32(workgroupId.x) * ${t} + i32(localId.y);
        if (x < height && y < width) {
          setOutputAtIndex((y * height + x), tile[localId.x]
            [localId.y]);
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class If{constructor(t,e){this.variableNames=["A"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0;const r=new Array(t.length);for(let o=0;o<r.length;o++)r[o]=t[e[o]];this.outputShape=r,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.newDim=e,this.shaderKey=`transpose_${e}`}getUserCode(){const t=de(this.outputShape.length),e=Ks(this.newDim);return`
      ${M("index")} {
        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if(flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            setOutputAtIndex(flatIndex, A[getIndexFromCoords${this.outputShape.length}D(
              ${t}(${e}), uniforms.aShape)]);
          }
        }
      }
    `}}function Ks(i){const t=i.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const e=new Array(t);for(let r=0;r<i.length;r++)e[i[r]]=`coords.${qe(r)}`;return e.join()}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xe(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{perm:n}=r,a=e,u=o.shape.length,c=new Array(u);for(let p=0;p<c.length;p++)c[p]=o.shape[n[p]];if(e.shouldExecuteOnCPU([o])){const d=a.tensorMap.get(o.dataId).values,m=df(d,o.shape,o.dtype,n,c);return e.makeTensorInfo(c,o.dtype,m)}if(o.shape.length===2&&Dt(n,[1,0])){const p=new kf(o.shape,n);return a.runWebGPUProgram(p,[o],o.dtype)}const h=new If(o.shape,n);return a.runWebGPUProgram(h,[o],o.dtype)}const Rf={kernelName:su,backendName:"webgpu",kernelFunc:Xe};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Pf{constructor(t,e,r){this.variableNames=["x"],this.uniforms="reduceSize : i32,",this.size=!0,this.inputShape=[t.batchSize,t.inSize];const[o]=Rr(this.inputShape,[1]);this.outputShape=o.length===0?[1]:o,t.inSize>=32768&&r>=512?this.workgroupSize=[512,1,1]:t.inSize>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,[1,1,1]),this.reduceType=e,this.shaderKey=`reduce_${e}`}getUserCode(){let t="",e="0.0";const r=this.workgroupSize[0];this.reduceType==="min"||this.reduceType==="max"?(t=`
         if (isnan(candidate)) {
          bestValue = uniforms.NAN;
         } else if (!isnan(bestValue) && candidate ${this.reduceType==="min"?"<":">"} bestValue)
           {  bestValue = candidate; }`,e="f32(x[offset])"):this.reduceType==="sum"||this.reduceType==="mean"?t=" bestValue = bestValue + candidate; ":this.reduceType==="prod"?(t=" bestValue = bestValue * candidate; ",e="1.0"):this.reduceType==="all"?(t=" bestValue = f32(bestValue >= 1.0 && candidate >= 1.0); ",e="1.0"):this.reduceType==="any"&&(t=" bestValue = f32(bestValue >= 1.0 || candidate >= 1.0); ",e="0.0");const o=this.reduceType==="mean"?"setOutputAtIndex(outputIndex, bestValue / f32(uniforms.reduceSize));":"setOutputAtIndex(outputIndex, bestValue);";return`
       fn DIV_CEIL(a : u32, b : u32) -> u32 {
        return ((a - 1u) / b + 1u);
       }

       ${`
         var<workgroup> xBestValues : array<f32, ${r}>;
       `}
       fn getOffset(outputIndex : i32) -> i32 {
         let outputCoords = getCoordsFromIndex(outputIndex);
         let offset = ${this.outputShape.length===1?"outputCoords":"outputCoords[0]"} * uniforms.reduceSize;
          return offset;
       }
       ${M("index")} {
         let outputIndex = index / ${r};
         let offset = getOffset(outputIndex);
         var bestValue = ${e};
         let Length = uniforms.reduceSize;
         let WorkPerThread = DIV_CEIL(u32(Length), ${r}u);
         for (var k = i32(localId.x); k < Length && outputIndex < uniforms.size;
             k = k + ${r}) {
           let candidate = f32(x[offset + k]);
           ${t}
         }
         xBestValues[localId.x] = bestValue;
         workgroupBarrier();

         var reduceSize = min(u32(Length), ${r}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (localId.x < currentSize) {
            let candidate = xBestValues[localId.x + interval];
            ${t}
            xBestValues[localId.x] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (localId.x == 0u && outputIndex < uniforms.size) {
          ${o}
        }
       }
     `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Af={mean:"float32",all:"bool",any:"bool"};function xt(i,t,e,r,o){const n=i.shape.length,a=[],u=ft(t,i.shape);let c=u;const h=ai(c,n);let p=i;h!=null&&(p=Xe({inputs:{x:i},attrs:{perm:h},backend:o}),c=ui(c.length,n),a.push(p)),Pr(r,c,n);const[d,m]=Rr(p.shape,c);let x=d;e&&(x=nu(d,u));let y;if((r==="max"||r==="prod")&&o.shouldExecuteOnCPU([p])){const w=o.tensorMap.get(p.dataId).values;switch(r){case"max":const b=Kp(w,J(m),x,i.dtype);y=o.makeTensorInfo(x,i.dtype,b);break;case"prod":const{outVals:I,outShape:R,outDtype:P}=ef(p.shape,p.dtype,w,c);y=o.makeTensorInfo(R,P,I);break;default:throw new Error(`${r} CPU implementation is not yet supported.`)}}else{const w=J(m),I=J(p.shape)/w,R={windowSize:w,inSize:w,batchSize:I,outSize:1},P=Af[r]||au(i.dtype),A=[{type:"int32",data:[w]}],N=new Pf(R,r,o.device.limits.maxComputeWorkgroupSizeX),D=o.runWebGPUProgram(N,[p],P,A);a.push(D),y=H({inputs:{x:D},attrs:{shape:x},backend:o})}return a.forEach(w=>o.disposeData(w.dataId)),y}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $f(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{keepDims:n,axis:a}=r;return xt(o,a,n,"all",e)}const Nf={kernelName:uu,backendName:"webgpu",kernelFunc:$f};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Df(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{keepDims:n,axis:a}=r;return xt(o,a,n,"any",e)}const Tf={kernelName:lu,backendName:"webgpu",kernelFunc:Df};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ys{constructor(t,e,r){this.workgroupSize=[64,1,1],this.variableNames=["x"],this.uniforms="infinityValue : f32,",this.size=!0;const o=[e];this.op=r==="min"?"<":">";const[n,a]=Rr(t,o);this.outputShape=n.length===0?[1]:n,this.dispatchLayout=U(this.outputShape),J(a)<32?(this.type="plain",this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize)):(this.type="shared",this.dispatch=L(this.dispatchLayout,this.outputShape,[1,1,1])),this.inputShape=t,this.shaderKey=`argMinMax_${this.op}_${this.type}`}getUserCode(){const t=this.workgroupSize[0],e=()=>this.inputShape.length===1?"uniforms.xShape":`uniforms.xShape.${qe(this.inputShape.length-1)}`,r=()=>{let o="";if(this.outputShape.length===1)this.inputShape.length!==1&&(o+="outputCoords,");else for(let n=0;n<this.outputShape.length;n++)o+=`outputCoords.${qe(n)},`;return o};return this.type==="shared"?`
      fn DIV_CEIL(a : u32, b : u32) -> u32 {
        return ((a - 1u) / b + 1u);
      }

      ${`
      var<workgroup> xBestIndices : array<i32, ${t}>;
      var<workgroup> xBestValues : array<f32, ${t}>;
    `}

      ${M("index")} {
        let outputIndex = index / ${t};
        let reduceLength = ${e()};

        var bestIndex = i32(localId.x);
        var bestValue = uniforms.infinityValue;
        let outputCoords = getCoordsFromIndex(outputIndex);
        for (var k = i32(localId.x); k < reduceLength && outputIndex < uniforms.size;
            k = k + ${t}) {
          let candidate = getX(${r()} k);
          if (!isnan(candidate) && candidate ${this.op} bestValue) {
            bestValue = candidate;
            bestIndex = k;
          }
        }
        xBestValues[localId.x] = bestValue;
        xBestIndices[localId.x] = bestIndex;
        workgroupBarrier();

        var reduceSize = min(u32(reduceLength), ${t}u);
        for (var currentSize = reduceSize / 2u; reduceSize > 1u;
            currentSize = reduceSize / 2u) {
          let interval = DIV_CEIL(reduceSize, 2u);
          if (localId.x < currentSize) {
            let candidate = xBestValues[localId.x + interval];
            if (candidate ${this.op} bestValue) {
              bestValue = candidate;
              xBestValues[localId.x] = bestValue;
              xBestIndices[localId.x] = xBestIndices[localId.x + interval];
            }
          }
          reduceSize = interval;
          workgroupBarrier();
        }

        if (localId.x == 0u && outputIndex < uniforms.size) {
          setOutputAtIndexI32(outputIndex, xBestIndices[localId.x]);
        }
      }
    `:`
      ${M("index")} {
        if (index < uniforms.size) {
          let outputCoords = getCoordsFromIndex(index);
          var bestIndex = 0;
          var bestValue = getX(${r()} 0);
          let reduceLength = ${e()};
          for (var i = 1; i < reduceLength; i++) {
            let candidate = getX(${r()} i);
            if (candidate ${this.op} bestValue) {
              bestValue = candidate;
              bestIndex = i;
            }
          }
          setOutputAtIndexI32(index, bestIndex);
        }
      }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ff(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:n}=r;let a=ft(n,o.shape);const u=ai(a,o.shape.length);let c=o;const h=[];u!=null&&(c=Xe({inputs:{x:o},backend:e,attrs:{perm:u}}),h.push(c),a=ui(a.length,c.shape.length)),Pr("argMax",[a[0]],c.shape.length);const p=new Ys(c.shape,a[0],"max"),d=[{type:"float32",data:[Number.NEGATIVE_INFINITY]}],m=e.runWebGPUProgram(p,[c],"int32",d);return h.forEach(x=>e.disposeData(x.dataId)),m}const Ef={kernelName:cu,backendName:"webgpu",kernelFunc:Ff};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _f(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:n}=r;let a=ft(n,o.shape);const u=ai(a,o.shape.length);let c=o;const h=[];u!=null&&(c=Xe({inputs:{x:o},backend:e,attrs:{perm:u}}),h.push(c),a=ui(a.length,c.shape.length)),Pr("argMin",[a[0]],c.shape.length);const p=new Ys(c.shape,a[0],"min"),d=[{type:"float32",data:[Number.POSITIVE_INFINITY]}],m=e.runWebGPUProgram(p,[c],"int32",d);return h.forEach(x=>e.disposeData(x.dataId)),m}const zf={kernelName:hu,backendName:"webgpu",kernelFunc:_f};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mf=se({opType:z.ASIN}),Lf={kernelName:du,backendName:"webgpu",kernelFunc:Mf};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Of=se({opType:z.ASINH}),Bf={kernelName:pu,backendName:"webgpu",kernelFunc:Of};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wf=se({opType:z.ATAN}),Uf={kernelName:fu,backendName:"webgpu",kernelFunc:Wf};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vf=ye({opType:K.ATAN2}),Gf={kernelName:mu,backendName:"webgpu",kernelFunc:Vf};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hf=se({opType:z.ATANH}),jf={kernelName:gu,backendName:"webgpu",kernelFunc:Hf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xf{constructor(t){this.variableNames=["x"],this.uniforms="strides : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="poolWithFilterSizeEqualsOne"}getUserCode(){return`
      ${M("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let batch = coords[0];
          let d = coords[3];

          let xRCCorner = coords.yz * uniforms.strides;
          let xRCorner = xRCCorner.x;
          let xCCorner = xRCCorner.y;

          let value = getX(batch, xRCorner, xCCorner, d);
          setOutputAtIndex(index, value);
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class oi{constructor(t,e,r=!1,o=!1,n=!1){if(this.variableNames=["x"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, convDims : vec2<i32>, filterDims : vec2<i32>,",this.workgroupSize=[128,1,1],this.size=!0,e==="avg"&&r)throw new Error("Cannot compute positions for average pool.");this.outputShape=t.outShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=e,this.computePositions=r,this.flattenPositions=o,this.includeBatchIndex=n,this.shaderKey=`pool2D_${e}_${r}_${o}_${n}`}getUserCode(){let t;this.poolType==="avg"?t="resultValue = resultValue + value; count = count + 1.0;":this.computePositions?t=`let currMaxValue = mix(value, maxValue, maxValueFound);
      if (value >= currMaxValue) {
        maxValue = value;
        maxValueFound = 1.0;
        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"((batch * uniforms.xShape[1] + xR) * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"(xR * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"wR * uniforms.filterDims.y + wC"};
      }`:t="resultValue = max(value, resultValue);";let e="resultValue";return this.poolType==="avg"&&(e="resultValue / max(count, 1.0)"),`
      ${M("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
          let batch = coords[0];
          let d = coords[3];
          let xRCCorner = vec2<i32>(coords.yz) * uniforms.strides - uniforms.pads;
          let xRCorner = xRCCorner.x;
          let xCCorner = xRCCorner.y;

          ${this.computePositions?`var maxValue = 0.0;
            var maxValueFound = 0.0;
            var maxPosition = 0;`:`var resultValue = ${this.poolType==="avg"?"0.0":"-1.0 / pow(10.0, -20.0)"};`}

          var count = 0.0;
          for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + uniforms.dilations.x) {
            let xR = xRCorner + wR;

            if (xR < 0 || xR >= uniforms.convDims.x) {
              continue;
            }

            for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + uniforms.dilations.y) {
              let xC = xCCorner + wC;
              if (xC < 0 || xC >= uniforms.convDims.y) {
                continue;
              }

              let value = getX(batch, xR, xC, d);
              ${t}
            }
          }

          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${e});`}
        }
      }
    `}}class _r{constructor(t,e,r=!1,o=!1,n=!1){if(this.variableNames=["x"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, convDims : vec3<i32>, filterDims : vec3<i32>,",this.workgroupSize=[128,1,1],this.size=!0,e==="avg"&&r)throw new Error("Cannot compute positions for average pool.");this.outputShape=t.outShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=e,this.computePositions=r,this.flattenPositions=o,this.includeBatchIndex=n,this.shaderKey=`pool3D_${e}_${r}_${o}_${n}`}getUserCode(){let t;this.poolType==="avg"?t="resultValue += value; count += 1.0;":this.computePositions?t=`let currMaxValue = mix(value, maxValue, maxValueFound);
      if (value >= currMaxValue) {
        maxValue = value;
        maxValueFound = 1.0;
        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"(((batch * uniforms.xShape.y + xD) * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"((xD * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"wD * uniforms.filterDims.y * uniforms.filterDims.y + wR * uniforms.filterDims.z + wC"};
      }`:t="resultValue = max(value, resultValue);";let e="resultValue";return this.poolType==="avg"&&(e="resultValue / max(count, 1.0)"),`
      ${M("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let batch = coords.x;
          let ch = coords.u;

          let xCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;
          let xDCorner = xCorner.x;
          let xRCorner = xCorner.y;
          let xCCorner = xCorner.z;

          ${this.computePositions?`var maxValue = 0.0;
            var maxValueFound = 0.0;
            var maxPosition = 0;`:`var resultValue = ${this.poolType==="avg"?"0.0":"-1.0 / pow(10.0, -20.0)"};`}

          var count = 0.0;
          for (var wD = 0; wD < uniforms.filterDims.x; wD++) {
            let xD = xDCorner + wD;
            if (xD < 0 || xD >= uniforms.convDims.x) {
              continue;
            }

            for (var wR = 0; wR < uniforms.filterDims.y; wR++) {
              let xR = xRCorner + wR;
              if (xR < 0 || xR >= uniforms.convDims.y) {
                continue;
              }

              for (var wC = 0; wC < uniforms.filterDims.z; wC++) {
                let xC = xCCorner + wC;
                if (xC < 0 || xC >= uniforms.convDims.z) {
                  continue;
                }

                let value = getX(batch, xD, xR, xC, ch);
                ${t}
              }
            }
          }

          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${e});`}
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qs(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{reductionIndices:n,keepDims:a}=r;return xt(o,n,a,"max",e)}const Kf={kernelName:xu,backendName:"webgpu",kernelFunc:qs};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qs(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{keepDims:n,axis:a}=r;return xt(o,a,n,"mean",e)}const Yf={kernelName:yu,backendName:"webgpu",kernelFunc:Qs};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zs(i,t,e,r){if(t.filterWidth===1&&t.filterHeight===1&&Dt(t.inShape,t.outShape))return Ee({inputs:{x:i},backend:r});if(t.filterWidth===t.inWidth&&t.filterHeight===t.inHeight&&t.batchSize===1&&t.padInfo.type==="VALID"){const a=i.shape.length,u=H({inputs:{x:i},backend:r,attrs:{shape:[i.shape[a-3]*i.shape[a-2],i.shape[a-1]]}});let c;e==="avg"?c=Qs({inputs:{x:u},backend:r,attrs:{axis:0,keepDims:!1}}):(ne(e==="max",()=>`Invalid pool type ${e}`),c=qs({inputs:{x:u},backend:r,attrs:{reductionIndices:0,keepDims:!1}}));const h=H({inputs:{x:c},backend:r,attrs:{shape:t.outShape}});return r.disposeData(u.dataId),r.disposeData(c.dataId),h}let o;const n=[{type:"int32",data:[t.strideHeight,t.strideWidth]}];return t.filterHeight===1&&t.filterWidth===1?o=new Xf(t):(e==="avg"?o=new oi(t,"avg"):(ne(e==="max",()=>`Invalid pool type ${e}`),o=new oi(t,"max")),n.push({type:"int32",data:[t.padInfo.top,t.padInfo.left]},{type:"int32",data:[t.dilationHeight,t.dilationWidth]},{type:"int32",data:[t.inHeight,t.inWidth]},{type:"int32",data:[t.effectiveFilterHeight,t.effectiveFilterWidth]})),r.runWebGPUProgram(o,[i],i.dtype,n)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qf(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{filterSize:n,strides:a,pad:u,dimRoundingMode:c}=r,p=li(o.shape,n,a,1,u,c);return Zs(o,p,"avg",e)}const Qf={kernelName:wu,backendName:"webgpu",kernelFunc:qf};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zf(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{filterSize:n,strides:a,pad:u,dataFormat:c,dimRoundingMode:h}=r,p=[1,1,1],d=Ni(o.shape,n,a,p,u,h,c),m=new _r(d,"avg"),x=[{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.padInfo.front,d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.inDepth,d.inHeight,d.inWidth]},{type:"int32",data:[d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth]}];return e.runWebGPUProgram(m,[o],o.dtype,x)}const Jf={kernelName:vu,backendName:"webgpu",kernelFunc:Zf};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class em{constructor(t){this.variableNames=["dy"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32, avgMultiplier : f32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool2DBackprop"}getUserCode(){return`
      ${M("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d = coords[3];

        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;
        let dyRCorner = dyRCCorner.x;
        let dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR = wR + uniforms.dilations[0]) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims[1]; wC = wC + uniforms.dilations[1]) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }
            let idyC = i32(dyC);

            let dyValue = getDy(batch, idyR, idyC, d);

            dotProd = dotProd + dyValue * uniforms.avgMultiplier;
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class tm{constructor(t){this.variableNames=["dy"],this.uniforms=`strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,
       outDepth : i32, outHeight : i32, outWidth : i32, avgMultiplier : f32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool3DBackprop"}getUserCode(){return`
      ${M("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let ch = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyDCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {
          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);

          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {
            continue;
          }
          let idyD = i32(dyD);

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let dyValue = getDy(batch, idyD, idyR, idyC, ch);
              dotProd += dyValue * uniforms.avgMultiplier;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function im(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,input:n}=t,a=n,{filterSize:u,strides:c,pad:h,dimRoundingMode:p}=r,d=Ni(a.shape,u,c,1,h,p),m=new tm(d),x=1/(d.filterDepth*d.filterHeight*d.filterWidth),y=[{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.effectiveFilterDepth-1-d.padInfo.front,d.effectiveFilterHeight-1-d.padInfo.top,d.effectiveFilterWidth-1-d.padInfo.left]},{type:"int32",data:[d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth]},{type:"int32",data:[d.outDepth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"float32",data:[x]}];return e.runWebGPUProgram(m,[o],a.dtype,y)}const rm={kernelName:Cu,backendName:"webgpu",kernelFunc:im};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function om(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,input:n}=t,a=n;js([o,n],"avgPoolGrad");const{filterSize:u,strides:c,pad:h}=r,p=li(a.shape,u,c,1,h),d=new em(p),m=1/(p.filterHeight*p.filterWidth),x=[{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.effectiveFilterHeight-1-p.padInfo.top,p.effectiveFilterWidth-1-p.padInfo.left]},{type:"int32",data:[p.dilationHeight,p.dilationWidth]},{type:"int32",data:[p.effectiveFilterHeight,p.effectiveFilterWidth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]},{type:"float32",data:[m]}];return e.runWebGPUProgram(d,[o],a.dtype,x)}const sm={kernelName:bu,backendName:"webgpu",kernelFunc:om};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nm(i){const{inputs:t,backend:e,attrs:r}=i,{a:o,b:n}=t,{transposeA:a,transposeB:u}=r;return Fi({a:o,b:n,transposeA:a,transposeB:u,backend:e})}const am={kernelName:Su,backendName:"webgpu",kernelFunc:nm};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class um{constructor(t,e){this.variableNames=["source"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.rank=e.length,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.start=t,this.uniforms=`start : ${de(t.length)}, `,this.shaderKey="slice"}getUserCode(){const t=de(this.rank),e=lm(this.rank);let r;return this.start.length===1?r=this.outputShape.map((n,a)=>"sourceLoc = uniforms.start + coords;"):r=this.outputShape.map((n,a)=>`sourceLoc.${yr[a]} = uniforms.start.${qe(a)} + coords.${yr[a]};`),`
      ${M("index")} {
        if (index < uniforms.size) {
          var sourceLoc : ${t};
          let coords = getCoordsFromIndex(index);
          ${r.join(`
`)}
          setOutputAtIndex(index, getSource(${e}));
        }
      }
    `}}const yr=["x","y","z","w","u","v"];function lm(i){if(i===1)return"sourceLoc";if(i<=6)return yr.slice(0,i).map(t=>`sourceLoc.${t}`).join(",");throw Error(`Slicing for rank ${i} is not yet supported`)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _t(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{begin:n,size:a}=r,[u,c]=Iu(o,n,a);if(Ru(o,u,c),e.shouldExecuteOnCPU([o])||o.dtype==="string"){const d=e.tensorMap.get(o.dataId),m=nf(d.values,u,c,o.shape,o.dtype);return e.makeTensorInfo(c,o.dtype,m)}if(J(c)===0)return e.makeTensorInfo(c,o.dtype,[]);const h=new um(u,c),p=[{type:"int32",data:u}];return e.runWebGPUProgram(h,[o],o.dtype,p)}const cm={kernelName:ku,backendName:"webgpu",kernelFunc:_t};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hm=i=>{const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{blockShape:n,crops:a}=r;ne(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGPU backend not implemented yet");const u=n.reduce((R,P)=>R*P),c=_s(o.shape,n,u),h=zs(c.length,n.length),p=Ms(o.shape,n,u),d=Au(a,n.length),m=$u(p,a,n.length),x=[],y=H({inputs:{x:o},backend:e,attrs:{shape:c}}),w=Xe({inputs:{x:y},backend:e,attrs:{perm:h}}),b=H({inputs:{x:w},backend:e,attrs:{shape:p}}),I=_t({inputs:{x:b},backend:e,attrs:{begin:d,size:m}});return x.push(y),x.push(w),x.push(b),x.forEach(R=>e.disposeData(R.dataId)),I},dm={kernelName:Pu,backendName:"webgpu",kernelFunc:hm};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pm=`
  fn bincount_write(index: i32, value: f32) {
    ${ot("&result[index]","value","float32")}
  }
`,fm=`
  fn bincount_write(index: i32, value: f32) {
    atomicStore(&result[index], bitcast<i32>(value));
  }
`;class Js{constructor(t,e,r=!1){this.outputShape=[],this.variableNames=["x"],this.uniforms="binCountSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.hasWeights=!0,this.binaryOutput=!1,this.outputShape=t,this.rank=t.length,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.binaryOutput=r,r&&(this.atomic=!1),this.hasWeights=e,this.hasWeights&&this.variableNames.push("w"),this.shaderKey=`bincount_${this.hasWeights}_${this.binaryOutput}_${this.rank}`}getUserCode(){return`
    ${this.binaryOutput?fm:pm}
  ${M("index")} {
    ${this.rank===1?`if (index < uniforms.xShape) {
      let indexVal = i32(getX(index));
      if (indexVal < uniforms.binCountSize) {
        let value = ${this.binaryOutput?1:this.hasWeights?"getW(index)":"1."};
        bincount_write(indexVal, value);
      }
    }`:`let coord = getCoordsFromIndex(index);
    if (coordsInBounds2D(coord, uniforms.xShape)) {
      let indexVal = i32(getX(coord[0], coord[1]));
      if (indexVal < uniforms.binCountSize) {
        let value = ${this.binaryOutput?1:this.hasWeights?"getW(coord[0], coord[1])":"1."};
        bincount_write(coord.x * uniforms.binCountSize + indexVal, value);
      }
    }`}
  }
  `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mm(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,weights:n}=t,{size:a}=r,u=J(o.shape),h=J(n.shape)>0,p=[a],d=n.dtype,m=$e({backend:e,attrs:{shape:p,value:0,dtype:d}}),x=new Js([u],h),y=[{type:"int32",data:[a]}],w=h?[o,n]:[o];return e.runWebGPUProgram(x,w,d,y,m)}const gm={kernelName:Nu,backendName:"webgpu",kernelFunc:mm};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xm{constructor(t){this.outputShape=[],this.variableNames=["s0","s1"],this.uniforms="s0Size : i32, s1Size : i32, ",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t],this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="broadcastArgs"}getUserCode(){return`
  ${M("index")} {
    if (index < uniforms.size) {
      var s0 = 1.0;
      var s1 = 1.0;
      let indexS0 = index - uniforms.size + uniforms.s0Size;
      let indexS1 = index - uniforms.size + uniforms.s1Size;
      if (indexS0 >= 0) {
        s0 = getS0(indexS0);
      }
      if (indexS1 >= 0) {
        s1 = getS1(indexS1);
      }

      if (s0 == 1.0) {
        setOutputAtIndex(index, s1);
      } else if (s1 == 1.0) {
        setOutputAtIndex(index, s0);
      } else if (s0 != s1) {
        setOutputAtIndex(index, uniforms.NAN);
      } else {
        setOutputAtIndex(index, s0);
      }
    }
  }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ym(i){const{inputs:t,backend:e}=i,{s0:r,s1:o}=t;if(e.shouldExecuteOnCPU([r,o])){const p=e.tensorMap.get(r.dataId),d=e.tensorMap.get(o.dataId),m=p.values,x=d.values,y=et(Array.from(m),Array.from(x));return e.makeTensorInfo([y.length],"int32",Int32Array.from(y))}const n=J(r.shape),a=J(o.shape),u=Math.max(n,a),c=new xm(u),h=[{type:"int32",data:[n]},{type:"int32",data:[a]}];return e.runWebGPUProgram(c,[r,o],"int32",h)}const wm={kernelName:Du,backendName:"webgpu",kernelFunc:ym};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const en=ye({opType:K.NOT_EQUAL,dtype:"bool",cpuKernelImpl:Jp}),vm={kernelName:Tu,backendName:"webgpu",kernelFunc:en};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hi(i){const{inputs:t,backend:e}=i,{input:r}=t,o=e.tensorMap.get(r.dataId);return Ee({inputs:{x:o.complexTensorInfos.real},backend:e})}const Cm={kernelName:Fu,backendName:"webgpu",kernelFunc:hi};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bm(i,t){const e=new Et(i.shape,z.TO_INT),r=t.runWebGPUProgram(e,[i],"int32");return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wr(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{dtype:n}=r;if(n==="complex64"){if(o.dtype==="complex64")return Ee({inputs:{x:o},backend:e});const a=Ls(o.shape),u=wr({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),c=gt({inputs:{real:u,imag:a},backend:e});return a.dispose(),e.disposeData(u.dataId),c}if(o.dtype==="complex64"){const a=hi({inputs:{input:o},backend:e}),u=wr({inputs:{x:a},backend:e,attrs:{dtype:n}});return e.disposeData(a.dataId),u}if(!_u(o.dtype,n)){const a=Ee({inputs:{x:o},backend:e});return{dataId:a.dataId,shape:a.shape,dtype:n}}if(e.shouldExecuteOnCPU([o])){const a=e.tensorMap.get(o.dataId).values,[u,c,h]=Fp(a,o.shape,o.dtype,n);return e.makeTensorInfo(u,c,h)}if(n==="int32")return bm(o,e);if(n==="bool"){const a=e.makeTensorInfo([],"bool",Es("bool",1)),c=en({inputs:{a:o,b:a},backend:e});return e.disposeData(a.dataId),c}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${n}`)}const Sm={kernelName:Eu,backendName:"webgpu",kernelFunc:wr};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const km=se({opType:z.CEIL,cpuKernelImpl:Ep}),Im={kernelName:zu,backendName:"webgpu",kernelFunc:km};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Rm{constructor(t){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workPerThread=4,this.workgroupSize=[64,1,1],this.outputComponent=4,this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="clipVec4"}getUserCode(){return`
      ${M("index")} {
        if(index < uniforms.size) {
          let value = getAByOutputIndex(index);
          var clampedValue = clamp(
              value, vec4<f32>(uniforms.minVal), vec4<f32>(uniforms.maxVal));
          clampedValue = select(clampedValue, value, isnanVec4(value));
          setOutputAtIndex(index, clampedValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Pm{constructor(t){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="clip"}getUserCode(){return`
      ${M("index")} {
        if(index < uniforms.size) {
          let value = getAByOutputIndex(index);
          if (isnan(value)) {
            setOutputAtIndex(index, value);
            return;
          }
          setOutputAtIndex(index, clamp(value, uniforms.minVal, uniforms.maxVal));
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Am(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{clipValueMin:n,clipValueMax:a}=r;let u;const c=[{type:"float32",data:[n]},{type:"float32",data:[a]}];return J(o.shape)%4===0?u=new Rm(o.shape):u=new Pm(o.shape),e.runWebGPUProgram(u,[o],o.dtype,c)}const $m={kernelName:Mu,backendName:"webgpu",kernelFunc:Am};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Nm{constructor(t){this.outputShape=[],this.variableNames=["real","imag"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="complexAbs"}getUserCode(){return`
    ${M("index")} {
      if (index < uniforms.size) {
        let re = abs(getRealByOutputIndex(index));
        let im = abs(getImagByOutputIndex(index));
        let mx = max(re, im);

        // The length function in wgsl may be not underflow-safe on some GPUs.
        // So the safe solution is to ensure underflow-safety in all cases.
        setOutputAtIndex(index, select(mx * length(vec2<f32>(1, min(re, im)/mx)), 0.0, mx == 0.0));
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qo(i,t){return{dataId:t.dataId,dtype:t.dtype,shape:i.shape}}function Dm(i){const{inputs:t,backend:e}=i,{x:r}=t,o=e.tensorMap.get(r.dataId),n=new Nm(r.shape),a=[Qo(r,o.complexTensorInfos.real),Qo(r,o.complexTensorInfos.imag)];return e.runWebGPUProgram(n,a,a[0].dtype)}const Tm={kernelName:Lu,backendName:"webgpu",kernelFunc:Dm};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Fm{constructor(t){this.uniforms="",this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=ei(t,1),this.variableNames=t.map((e,r)=>`T${r}`),this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.offsetLength=t.length-1;for(let e=0;e<this.offsetLength;e++)this.uniforms+=`offset${e} : i32,`;this.shaderKey="concat"}getUserCode(){const t=[];if(this.offsetLength>0){t.push("if (yC < uniforms.offset0){ setOutputAtCoords(coords.x, coords.y, getT0(yR, yC)); }");for(let n=1;n<this.offsetLength;n++)t.push(`else if (yC < uniforms.offset${[n]}){ setOutputAtCoords(coords.x, coords.y, getT${n}(yR, yC - uniforms.offset${n-1})); }`);const r=this.offsetLength,o=this.offsetLength-1;t.push(`else { setOutputAtCoords(coords.x, coords.y, getT${r}(yR, yC - uniforms.offset${o})); }`)}else t.push("setOutputAtCoords(coords.x, coords.y, getT0(yR, yC));");return`
      ${M("index")} {
        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if(flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            let yR = coords.x;
            let yC = coords.y;

            ${t.join(`
        `)}
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ei(i){const{inputs:t,backend:e}=i,{input:r}=t,o=e.tensorMap.get(r.dataId);return Ee({inputs:{x:o.complexTensorInfos.imag},backend:e})}const Em={kernelName:Ou,backendName:"webgpu",kernelFunc:Ei};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yt(i,t,e){const r=i[0].dtype;if(r==="complex64"){const y=i.map(P=>hi({inputs:{input:P},backend:e})),w=i.map(P=>Ei({inputs:{input:P},backend:e})),b=Yt(y,t,e),I=Yt(w,t,e),R=gt({inputs:{real:b,imag:I},backend:e});return y.forEach(P=>e.disposeData(P.dataId)),w.forEach(P=>e.disposeData(P.dataId)),e.disposeData(b.dataId),e.disposeData(I.dataId),R}let o=e.shouldExecuteOnCPU(i);if(r==="string"&&(o=!0),o){const y=i.map(N=>{const T=[-1,J(N.shape.slice(t))];return H({inputs:{x:N},backend:e,attrs:{shape:T}})}),w=y.map(N=>({vals:e.readSync(N.dataId),shape:N.shape})),b=ei(y.map(N=>N.shape),1),I=y[0].shape[0]===1,R=_p(w,b,r,I),P=ei(i.map(N=>N.shape),t),A=e.makeTensorInfo(P,r,R);return y.forEach(N=>e.disposeData(N.dataId)),A}const n=e.device.limits.maxStorageBuffersPerShaderStage-1;if(i.length>n){const y=[];for(let b=0;b<i.length;b+=n){const I=i.slice(b,b+n);y.push(Yt(I,t,e))}const w=Yt(y,t,e);for(const b of y)e.disposeData(b.dataId);return w}const{tensors2D:a,outShape:u}=_m(i,t,e),c=a.map(y=>y.shape),h=new Fm(c),p=[],d=new Array(c.length-1);if(d.length>0){d[0]=c[0][1],p.push({type:"int32",data:[d[0]]});for(let y=1;y<d.length;y++)d[y]=d[y-1]+c[y][1],p.push({type:"int32",data:[d[y]]})}const m=e.runWebGPUProgram(h,a,a[0].dtype,p);a.forEach(y=>e.disposeData(y.dataId));const x=H({inputs:{x:m},backend:e,attrs:{shape:u}});return e.disposeData(m.dataId),x}function _m(i,t,e){const r=ei(i.map(n=>n.shape),t);return{tensors2D:i.map(n=>H({inputs:{x:n},backend:e,attrs:{shape:[J(n.shape.slice(0,t)),J(n.shape.slice(t))]}})),outShape:r}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tn(i){const{inputs:t,backend:e,attrs:r}=i,{axis:o}=r,n=ft(o,t[0].shape)[0],a=t.map(h=>h.shape);Wu(a,n);const u=ei(t.map(h=>h.shape),n);if(J(u)===0)return e.makeTensorInfo(u,t[0].dtype,[]);const c=t.filter(h=>J(h.shape)>0);return c.length===1?Ee({inputs:{x:c[0]},backend:e}):Yt(c,n,e)}const zm={kernelName:Bu,backendName:"webgpu",kernelFunc:tn};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mm(i,t,e,r,o=!1,n=null,a=!1,u=4,c=4,h=4){const p=F=>{switch(F){case 1:return"resData = f32(x[xIndex]);";case 3:return"resData = vec3<f32>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);";case 4:return"resData = vec4<f32>(x[xIndex / 4]);";default:throw new Error(`innerElementSize ${F} is not supported.`)}},d=F=>{switch(F){case 1:return"return f32(W[row * uniforms.wShape[3] + col]);";case 4:return"return vec4<f32>(W[(row * uniforms.wShape[3] + col) / 4]);";default:throw new Error(`innerElementSize ${F} is not supported.`)}},m=i?`
      let coord = vec4<i32>(batch, xRow, xCol, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, xRow, xCol);
      `,x=i?`
      let coords = vec4<i32>(
        batch,
        row / outWidth,
        row % outWidth,
        col);
      `:`
      let coords = vec4<i32>(
        batch,
        row,
        col / outWidth,
        col % outWidth);
      `,y=i?"uniforms.xShape[1]":"uniforms.xShape[2]",w=i?"uniforms.xShape[2]":"uniforms.xShape[3]",b=i?"row":"col",I=i?"col":"row",R=`
      let inChannels = uniforms.wShape[2];
      let outWidth = ${i?"uniforms.outShape[2]":"uniforms.outShape[3]"};
      let outRow = ${b} / outWidth;
      let outCol = ${b} % outWidth;

      let WRow = ${I} / (uniforms.filterDims[1] * inChannels);
      let WCol = ${I} / inChannels % uniforms.filterDims[1];
      let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * WRow - uniforms.pads[0];
      let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * WCol - uniforms.pads[1];
      let xCh = ${I} % inChannels;
      var resData = ${ee(u)}(0.0);
      // The bounds checking is always needed since we use it to pad zero for
      // the 'same' padding type.
      if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${w}) {
        ${m}
        let xIndex = getIndexFromCoords4D(coord, uniforms.xShape);
        ${p(u)}
      }
      return resData;`,P=i?t&&r?`
      ${R}`:`
      if (row < uniforms.dimAOuter && col < uniforms.dimInner) {
        ${R}
      }
      return ${ee(u)}(0.0);`:r&&e?`
      ${R}`:`
      if (row < uniforms.dimInner && col < uniforms.dimBOuter) {
        ${R}
      }
      return ${ee(u)}(0.0);`,A=`${d(c)}`,N=ee(h),D=ee(i?u:c),T=ee(i?c:u);return`
      ${Qe(n,a,h===4,4)}
      fn mm_readA(batch: i32, row : i32, col : i32) -> ${D} {
        ${i?P:A}
      }

      fn mm_readB(batch: i32, row : i32, col : i32) -> ${T} {
        ${i?A:P}
      }

      fn mm_write(batch: i32, row : i32, col : i32, valueIn : ${N}) {
        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)
        {
        var value = valueIn;
        let outWidth = ${i?"uniforms.outShape[2]":"uniforms.outShape[3]"};
        ${x}
        ${mt(o,n)}
        setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }`}class Lm{constructor(t,e,r,o,n=!1,a=null,u=!1,c=!1){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t.outShape,this.isChannelsLast=t.dataFormat==="channelsLast",this.isVec4=((t.inChannels%4===0||t.inChannels%3===0)&&this.isChannelsLast||t.outWidth%4===0&&!this.isChannelsLast)&&t.outChannels%4===0,this.dispatchLayout=this.isChannelsLast?{x:[3],y:[1,2],z:[0]}:{x:[2,3],y:[1],z:[0]},this.workgroupSize=Vs(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=Gs(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4?(this.outputComponent=4,this.isChannelsLast&&t.inChannels%4!==0?(this.innerElementSize=3,this.variableComponents=[1,4]):(this.innerElementSize=4,this.variableComponents=[4,4]),n&&(this.variableNames.push("bias"),this.variableComponents.push(4)),u&&(this.variableNames.push("preluActivationWeights"),this.variableComponents.push(4))):(this.innerElementSize=this.elementsPerThread[0],n&&this.variableNames.push("bias"),u&&this.variableNames.push("preluActivationWeights")),this.sequentialAccessByThreads=c,this.addBias=n,this.activation=a,this.hasPreluActivationWeights=u,this.tileAOuter=this.workgroupSize[1]*this.elementsPerThread[1],this.tileBOuter=this.workgroupSize[0]*this.elementsPerThread[0],this.tileInner=Math.max(this.workgroupSize[0]*this.innerElementSize,this.workgroupSize[1]),this.fitAOuter=e%this.tileAOuter===0,this.fitBOuter=r%this.tileBOuter===0,this.fitInner=o%this.tileInner===0,this.shaderKey=`conv2DMM_${this.elementsPerThread}_${this.activation}}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.innerElementSize}_${this.isChannelsLast}_${this.sequentialAccessByThreads}`}getUserCode(){const t=this.isVec4?Di(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner):Ti(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner,!1,null,this.sequentialAccessByThreads),e=this.isVec4?[this.innerElementSize,4,4]:[1,1,1];return`
    ${Mm(this.isChannelsLast,this.fitAOuter,this.fitBOuter,this.fitInner,this.addBias,this.activation,this.hasPreluActivationWeights,e[0],e[1],e[2])}
    ${t}
  `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Om{constructor(t,e=!1,r=null,o=!1){this.variableNames=["x","W"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>,",this.workgroupSize=[4,4,8],this.outputShape=t.outShape,this.isChannelsLast=t.dataFormat==="channelsLast",this.dispatchLayout=this.isChannelsLast?{x:[2],y:[1],z:[0,3]}:{x:[3],y:[2],z:[0,1]},this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=e,this.activation=r,this.hasPreluActivationWeights=o,e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`conv2dnaive_${this.activation}_${this.isChannelsLast}`}getUserCode(){return`
       ${Qe(this.activation,this.hasPreluActivationWeights,!1,4)}
       fn readInp(batch : i32, row : i32, col : i32, chan : i32) -> f32{
         let coords = vec4<i32>(batch, row, col, chan);
         if (coordsInBounds4D(coords, uniforms.xShape)) {
           return  getX(batch, row, col, chan);
         } else {
          return 0.0;
         }
       }
       fn readFilt(row : i32, col : i32, xChannel : i32, outChannel : i32) -> f32{
         let coords = vec4<i32>(row, col, xChannel, outChannel);
         if(coordsInBounds4D(coords, uniforms.wShape)) {
           return getW(row, col, xChannel, outChannel);
          } else {
            return 0.0;
          }
       }
       fn writeResult(batch : i32, row : i32, col : i32, chan : i32, valueIn : f32) {
         let coords = ${this.isChannelsLast?"vec4<i32>(batch, row, col, chan);":"vec4<i32>(batch, chan, row, col);"}
         if (coordsInBounds4D(coords, uniforms.outShape)) {
           var value = valueIn;
           ${mt(this.addBias,this.activation)}
           setOutputAtCoords(coords.x, coords.y, coords.z, coords.w, value);
         }
       }
       ${M("index")} {
         let coords = getOutputCoords();
         let batch = coords[0];
         let outChannel = ${this.isChannelsLast?"coords[3];":"coords[1];"}
         let outRow = ${this.isChannelsLast?"coords[1];":"coords[2];"}
         let outCol = ${this.isChannelsLast?"coords[2];":"coords[3];"}
         var acc : f32 = 0.0;
         for (var row = 0; row < uniforms.filterDims[0]; row = row + 1) {
           for (var col = 0; col < uniforms.filterDims[1]; col = col + 1) {
             let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * row - uniforms.pads[0];
             let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * col - uniforms.pads[1];
             for (var xChannel = 0; xChannel < ${this.isChannelsLast?"uniforms.xShape[3];":"uniforms.xShape[1];"} xChannel = xChannel + 1) {
               ${this.isChannelsLast?"let v = readInp(batch, xRow, xCol, xChannel);":"let v = readInp(batch, xChannel, xRow, xCol);"}
               let f = readFilt(row, col, xChannel, outChannel);
               acc = acc + v * f;
             }
           }
         }
         writeResult(batch, outRow, outCol, outChannel, acc);
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bm{constructor(t,e){this.variableNames=["x"],this.uniforms=`pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, outWidth : i32, itemsPerBlockRow : i32,
       inChannels : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=e,this.shaderKey=`im2col_${this.isChannelsLast}`}getUserCode(){const t=this.isChannelsLast?1:2,e=this.isChannelsLast?2:3,r=this.isChannelsLast?"coords[1]":"coords[2]",o=this.isChannelsLast?"coords[2]":"coords[1]",n=this.isChannelsLast?"getX(batch, xRow, xCol, ch)":"getX(batch, ch, xRow, xCol)";return`
    ${M("index")} {
      let coords = getCoordsFromIndex(index);
      if(index < uniforms.size) {
        let batch = coords[0];
        let row = ${r};
        let col = ${o};
        let offsetY = (row / uniforms.outWidth) * uniforms.strides[0] - uniforms.pads[0];
        let xRow = offsetY + uniforms.dilations[0] * (col / uniforms.itemsPerBlockRow);
        var value = 0.0;
        if(xRow < uniforms.xShape[${t}] && xRow >= 0) {
          let offsetX = (row % uniforms.outWidth) * uniforms.strides[1] -
              uniforms.pads[1];
          let xCol = offsetX + uniforms.dilations[1] * ((col %
              uniforms.itemsPerBlockRow) / uniforms.inChannels);
          let ch = col % uniforms.inChannels;
          if(xCol < uniforms.xShape[${e}] && xCol >= 0) {
            value = ${n};
          }
        }
        setOutputAtIndex(index, value);
      }
    }
   `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pi(i,t){const e=i.length;return e>=3?t?[...i.slice(0,-3),i[e-3]*i[e-2],i[e-1]]:[...i.slice(0,-3),i[e-3],i[e-2]*i[e-1]]:!t&&e===1&&i[0]>1?[i[0],1]:null}function Wm({x:i,filter:t,convInfo:e,backend:r,bias:o=null,preluActivationWeights:n=null,leakyreluAlpha:a=0,activation:u=null}){const c=e.dataFormat==="channelsLast",h=!c,p=!1,d=c&&e.filterHeight===e.inHeight&&e.filterWidth===e.inWidth&&e.padInfo.type==="VALID",m=[];let x,y;if(d){const I=e.inHeight*e.inWidth*e.inChannels;x=H({inputs:{x:i},backend:r,attrs:{shape:[1,e.batchSize,I]}}),y=H({inputs:{x:t},backend:r,attrs:{shape:[1,I,e.outChannels]}})}else x=H({inputs:{x:i},backend:r,attrs:{shape:c?[e.batchSize,e.inHeight*e.inWidth,e.inChannels]:[e.batchSize,e.inChannels,e.inHeight*e.inWidth]}}),y=H({inputs:{x:t},backend:r,attrs:{shape:[1,e.inChannels,e.outChannels]}});if(m.push(x),m.push(y),n!=null){const I=Pi(n.shape,c);I!=null&&(n=H({inputs:{x:n},backend:r,attrs:{shape:I}}),m.push(n))}if(o!=null){const I=Pi(o.shape,c);I!=null&&(o=H({inputs:{x:o},backend:r,attrs:{shape:I}}),m.push(o))}const w=Fi({a:c?x:y,b:c?y:x,transposeA:h,transposeB:p,backend:r,bias:o,activation:u,preluActivationWeights:n,leakyreluAlpha:a}),b=H({inputs:{x:w},backend:r,attrs:{shape:e.outShape}});m.push(w);for(const I of m)r.disposeData(I.dataId);return b}function Um({x:i,filter:t,convInfo:e,backend:r,bias:o=null,preluActivationWeights:n=null,leakyreluAlpha:a=0,activation:u=null}){const{filterWidth:c,filterHeight:h,inChannels:p,strideWidth:d,strideHeight:m,padInfo:x,outWidth:y,outHeight:w,dilationWidth:b,dilationHeight:I,dataFormat:R}=e,P=R==="channelsLast",A=c*h*p,N=w*y,D=P?[e.batchSize,N,A]:[e.batchSize,A,N],T=new Bm(D,P),E=[{type:"int32",data:[x.top,x.left]},{type:"int32",data:[m,d]},{type:"int32",data:[I,b]},{type:"int32",data:[y]},{type:"int32",data:[p*c]},{type:"int32",data:[p]}],F=r.runWebGPUProgram(T,[i],i.dtype,E),W=[];W.push(F);const B=H({inputs:{x:t},backend:r,attrs:{shape:[1,A,-1]}});if(W.push(B),n!=null){const ie=Pi(n.shape,P);ie!=null&&(n=H({inputs:{x:n},backend:r,attrs:{shape:ie}}),W.push(n))}if(o!=null){const ie=Pi(o.shape,P);ie!=null&&(o=H({inputs:{x:o},backend:r,attrs:{shape:ie}}),W.push(o))}const Q=Fi({a:P?F:B,b:P?B:F,transposeA:!P,transposeB:!1,backend:r,bias:o,activation:u,preluActivationWeights:n,leakyreluAlpha:a}),Z=H({inputs:{x:Q},backend:r,attrs:{shape:e.outShape}});W.push(Q);for(const ie of W)r.disposeData(ie.dataId);return Z}function rn({x:i,filter:t,convInfo:e,backend:r,bias:o=null,preluActivationWeights:n=null,leakyreluAlpha:a=0,activation:u=null}){const c=o!=null,h=n!=null,p=e.dataFormat==="channelsLast",d=p&&e.filterHeight===e.inHeight&&e.filterWidth===e.inWidth&&e.padInfo.type==="VALID",m=fe().getBool("WEBGPU_USE_NAIVE_CONV2D_DEBUG");if(!m&&(d||e.filterHeight===1&&e.filterWidth===1&&e.dilationHeight===1&&e.dilationWidth===1&&e.strideHeight===1&&e.strideWidth===1&&(e.padInfo.type==="SAME"||e.padInfo.type==="VALID")))return Wm({x:i,filter:t,convInfo:e,backend:r,bias:o,activation:u,preluActivationWeights:n,leakyreluAlpha:a});const x=fe().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),y=x>-1?x:r.thresholdToIncreaseWorkgroups,w=e.batchSize*Math.ceil(e.outHeight*e.outWidth/32)*Math.ceil(e.outChannels/32);if(fe().getBool("WEBGPU_CONV_SEPARATE_IM2COL_SHADER")||w<=y)return Um({x:i,filter:t,convInfo:e,backend:r,bias:o,preluActivationWeights:n,leakyreluAlpha:a,activation:u});let b;const I=[e.padInfo.top,e.padInfo.left],R=[{type:"int32",data:[e.filterHeight,e.filterWidth]},{type:"int32",data:[...I]},{type:"int32",data:[e.strideHeight,e.strideWidth]},{type:"int32",data:[e.dilationHeight,e.dilationWidth]}];if(m)b=new Om(e,c,u,h);else{const D=p?e.outHeight*e.outWidth:e.outChannels,T=p?e.outChannels:e.outHeight*e.outWidth,E=e.filterHeight*e.filterWidth*e.inChannels;R.push({type:"int32",data:[D]},{type:"int32",data:[T]},{type:"int32",data:[E]});const F=r.adapterInfo.isIntel();b=new Lm(e,D,T,E,c,u,h,F)}const P=[],A=[i,t];c&&(!p&&o.shape.length===1&&(o=H({inputs:{x:o},backend:r,attrs:{shape:[o.shape[0],1,1]}}),P.push(o)),A.push(o)),h&&(!p&&n.shape.length===1&&(n=H({inputs:{x:n},backend:r,attrs:{shape:[n.shape[0],1,1]}}),P.push(n)),A.push(n)),u==="leakyrelu"&&(R.push({type:"float32",data:[a]}),b.uniforms+=" alpha : f32,");const N=r.runWebGPUProgram(b,A,i.dtype,R);for(const D of P)r.disposeData(D.dataId);return N}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vm(i){const{inputs:t,attrs:e,backend:r}=i,{x:o,filter:n}=t,{strides:a,pad:u,dataFormat:c,dilations:h,dimRoundingMode:p}=e,d=ci(c),m=rt(o.shape,n.shape,a,h,u,p,!1,d);return rn({x:o,filter:n,convInfo:m,backend:r})}const Gm={kernelName:Uu,backendName:"webgpu",kernelFunc:Vm};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Hm{constructor(t){this.variableNames=["dy","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>,",this.workgroupSize=[64,1,1],this.size=!1,this.isVec4=!1,this.workPerThread=1,this.outputShape=t.inShape,this.isChannelsLast=t.dataFormat==="channelsLast",this.isVec4=this.isChannelsLast&&t.outChannels%4===0&&t.inChannels%4===0,this.isVec4?(this.workPerThread=2,this.outputComponent=4,this.workgroupSize=[4,4,4],this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,[4,this.workPerThread,1])):(this.size=!0,this.workPerThread=1,this.workgroupSize=[64,1,1],this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize)),this.shaderKey=`conv2DDerInput_${this.isChannelsLast}_${this.isVec4}_${this.workPerThread}`}getUserCode(){const t=this.isChannelsLast?1:2,e=this.isChannelsLast?2:3,r=this.isChannelsLast?3:1,o=`
    ${M()} {
      let batch = i32(globalId.z) / uniforms.outShape[1];
      let r = i32(globalId.z) % uniforms.outShape[1];
      let c = i32(globalId.y) * ${this.workPerThread};
      let d1 = i32(globalId.x) * 4;

      let dyCorner = vec2<i32>(r, c) - uniforms.pads;

      // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
      // ? = to be determined. : = across all values in that axis.
      var dotProd: array<vec4<f32>, ${this.workPerThread}>;
      for (var i = 0; i < ${this.workPerThread}; i++) {
        dotProd[i] = vec4<f32>(0.0);
      }
      for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {
        let dyR = f32(dyCorner.x + wR) / f32(uniforms.strides.x);
        let wRPerm = uniforms.filterDims.x - 1 - wR;
        if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) ||
            fract(dyR) > 0.0) {
          continue;
        }
        let idyR = i32(dyR);

        for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {
          let dyC = f32(dyCorner.y + wC) / f32(uniforms.strides.y);
          let dyC2 = f32(dyCorner.y + 1 + wC) / f32(uniforms.strides.y);
          let wCPerm = uniforms.filterDims.y - 1 - wC;
          var bDyCVal = true;
          var bDyCVal2 = true;
          if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||
              fract(dyC) > 0.0) {
            bDyCVal = false;
          }
          if (dyC2 < 0.0 || dyC2 >= f32(uniforms.outBackprop[2]) ||
              fract(dyC2) > 0.0) {
            bDyCVal2 = false;
          }

          let idyC = i32(dyC);
          let idyC2 = i32(dyC2);
          if (bDyCVal && bDyCVal2) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[0] = dotProd[0] + tmpval;
              xValue = getDy(batch, idyR, idyC2, d2);
              dotProd[1] = dotProd[1] + vec4<f32>(dot(xValue, wValue0),
                                                  dot(xValue, wValue1),
                                                  dot(xValue, wValue2),
                                                  dot(xValue, wValue3));
            }
          } else if (bDyCVal) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[0] = dotProd[0] + tmpval;
            }
          } else if (bDyCVal2) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC2, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[1] = dotProd[1] + tmpval;
            }
          }
        }
      }

      for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
        let coords = vec4<i32>(batch, r, c + i, d1);
        if (coordsInBounds4D(coords, uniforms.outShape)) {
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], dotProd[i]);
        }
      }
    }
    `;return this.isVec4?`
    ${o}
    `:`
    ${M("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d1 = coords[${r}];

        let dyCorner = vec2<i32>(coords[${t}], coords[${e}]) - uniforms.pads;
        let dyRCorner = dyCorner.x;
        let dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {
          let dyR = (f32(dyRCorner) + f32(wR)) / f32(uniforms.strides.x);
          let wRPerm = uniforms.filterDims.x - 1 - wR;
          if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) || fract(dyR) > 0.0 ||
              wRPerm < 0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {
            let dyC = (f32(dyCCorner) + f32(wC)) / f32(uniforms.strides.y);
            let wCPerm = uniforms.filterDims.y - 1 - wC;
            if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||
                fract(dyC) > 0.0 || wCPerm < 0) {
              continue;
            }
            let idyC = i32(dyC);

            for (var d2 = 0; d2 < uniforms.outBackprop[3]; d2 = d2 + 1) {
              let xValue = ${this.isChannelsLast?"getDy(batch, idyR, idyC, d2)":"getDy(batch, d2, idyR, idyC)"};
              let wValue = getW(wRPerm, wCPerm, d1, d2);
              dotProd = dotProd + xValue * wValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class jm{constructor(t){this.variableNames=["x","dy"],this.uniforms="pads : vec2<i32>, strides : vec2<i32>, batchSize : i32, outHeight : i32, outWidth : i32, inHeight : i32, inWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=t.dataFormat==="channelsLast",this.shaderKey=`conv2DDerFilter_${this.isChannelsLast}`}getUserCode(){return`
    ${M("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wR = coords[0];
        let wC = coords[1];
        let d1 = coords[2];
        let d2 = coords[3];

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b = b + 1) {
          for (var yR = 0; yR < uniforms.outHeight; yR = yR + 1) {
            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];
            if (xR < 0 || xR >= uniforms.inHeight) {
              continue;
            }

            for (var yC = 0; yC < uniforms.outWidth; yC = yC + 1) {
              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];

              if (xC < 0 || xC >= uniforms.inWidth) {
                continue;
              }

              if (${this.isChannelsLast}) {
                let dyValue = getDy(b, yR, yC, d2);
                let xValue = getX(b, xR, xC, d1);
                dotProd = dotProd + xValue * dyValue;
              } else {
                let dyValue = getDy(b, d2, yR, yC);
                let xValue = getX(b, d1, xR, xC);
                dotProd = dotProd + xValue * dyValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class Xm{constructor(t){this.variableNames=["x","dy"],this.uniforms=`pads : vec3<i32>, strides : vec3<i32>, batchSize : i32, outDepth : i32,
       outHeight : i32, outWidth : i32, inDepth : i32, inHeight : i32, inWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerFilter"}getUserCode(){return`
    ${M("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wF = coords.x;
        let wR = coords.y;
        let wC = coords.z;
        let d1 = coords.w;
        let d2 = coords.u;

        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b++) {
          for (var yF = 0; yF < uniforms.outDepth; yF++) {
            let xF = wF + yF * uniforms.strides[0] - uniforms.pads[0];
            if (xF < 0 || xF >= uniforms.inDepth) {
              continue;
            }

            for (var yR = 0; yR < uniforms.outHeight; yR++) {
              let xR = wR + yR * uniforms.strides[1] - uniforms.pads[1];
              if (xR < 0 || xR >= uniforms.inHeight) {
                continue;
              }

              for (var yC = 0; yC < uniforms.outWidth; yC++) {
                let xC = wC + yC * uniforms.strides[2] - uniforms.pads[2];
                if (xC < 0 || xC >= uniforms.inWidth) {
                  continue;
                }

                let dyValue = getDy(b, yF, yR, yC, d2);
                let xValue = getX(b, xF, xR, xC, d1);
                dotProd += xValue * dyValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class Km{constructor(t){this.variableNames=["dy","W"],this.uniforms=`filterDims : vec3<i32>, pads : vec3<i32>, strides : vec3<i32>,
      outDepth : i32, outHeight : i32, outWidth : i32, outChannels : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerInput"}getUserCode(){return`
    ${M("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let d1 = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyFCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        var dotProd = 0.0;
        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {
          let dyF = f32(dyFCorner + wF) / f32(uniforms.strides[0]);
          if (dyF < 0.0 || dyF >= f32(uniforms.outDepth) || fract(dyF) > 0.0) {
            continue;
          }
          let idyF = i32(dyF);

          let wFPerm = uniforms.filterDims[0] - 1 - wF;

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            let wRPerm = uniforms.filterDims[1] - 1 - wR;

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let wCPerm = uniforms.filterDims[2] - 1 - wC;

              for (var d2 = 0; d2 < uniforms.outChannels; d2++) {
                let xValue = getDy(batch, idyF, idyR, idyC, d2);
                let wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ym(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,dy:n}=t,{strides:a,pad:u,dataFormat:c,dimRoundingMode:h,filterShape:p}=r,d=ci(c),m=rt(o.shape,p,a,1,u,h,!1,d),x=new jm(m),y=[{type:"int32",data:[m.padInfo.top,m.padInfo.left]},{type:"int32",data:[m.strideHeight,m.strideWidth]},{type:"int32",data:[m.batchSize]},{type:"int32",data:[m.outHeight]},{type:"int32",data:[m.outWidth]},{type:"int32",data:[m.inHeight]},{type:"int32",data:[m.inWidth]}];return e.runWebGPUProgram(x,[o,n],o.dtype,y)}const qm={kernelName:Vu,backendName:"webgpu",kernelFunc:Ym};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qm(i=4){const t=n=>{switch(n){case 1:return"return W[getIndexFromCoords4D(coord, uniforms.wShape)];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = W[getIndexFromCoords4D(coord, uniforms.wShape)];
            let v1 = W[getIndexFromCoords4D(coord1, uniforms.wShape)];
            let v2 = W[getIndexFromCoords4D(coord2, uniforms.wShape)];
            let v3 = W[getIndexFromCoords4D(coord3, uniforms.wShape)];
            return vec4<f32>(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${n} is not supported.`)}},r=`if (row < uniforms.dimAOuter && col < uniforms.dimInner) {
        ${`
      let outRow = row / uniforms.outShape[2];
      let outCol = row % uniforms.outShape[2];

      let WRow = col / (uniforms.filterDims[1] * uniforms.outBackprop[3]);
      let WCol = col / uniforms.outBackprop[3] % uniforms.filterDims[1];
      let xR = f32(outRow - uniforms.pads[0] + WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(uniforms.outBackprop[1]) || fract(xR) > 0.0) {
        return ${ee(i)}(0.0);
      }
      if (xC < 0.0 || xC >= f32(uniforms.outBackprop[2]) || fract(xC) > 0.0) {
        return ${ee(i)}(0.0);
      }
      let coord = vec4<i32>(
          batch,
          i32(xR),
          i32(xC),
          col % uniforms.outBackprop[3]);
      return x[getIndexFromCoords4D(coord, uniforms.xShape)/${i}];`}
      }
      return ${ee(i)}(0.0);`;return`
  fn mm_readA(batch: i32, row : i32, col : i32) -> ${ee(i)} {
    ${r}
  }

  fn mm_readB(batch: i32, row : i32, col : i32) -> ${ee(i)} {
    let coordX = uniforms.filterDims.x - 1 -
        row / (uniforms.filterDims[1] * uniforms.outBackprop[3]);
    let coordY = uniforms.filterDims.y - 1 -
        (row / uniforms.outBackprop[3]) % uniforms.filterDims[1];
    if (row < uniforms.dimInner && col < uniforms.dimBOuter &&
        coordX >= 0 && coordY >= 0) {
      let rowInner = row % uniforms.outBackprop[3];
      let coord = vec4<i32>(coordX, coordY, col, rowInner);
      ${t(i)}
    }
    return ${ee(i)}(0.0);
  }

  fn mm_write(batch: i32, row : i32, col : i32, valueInput : ${ee(i)}) {
    if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {
      var value = valueInput;
      let outCoord = vec4<i32>(
          batch,
          row / uniforms.outShape[2],
          row % uniforms.outShape[2],
          col);
      result[getIndexFromCoords4D(outCoord, uniforms.outShape)/${i}] = value;
    }
  }`}class Zm{constructor(t){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t.inShape,ne(t.dataFormat==="channelsLast",()=>"TODO: NCHW is unimplemented"),this.isVec4=t.inChannels%4===0&&t.outChannels%4===0,this.dispatchLayout={x:[3],y:[1,2],z:[0]},this.workgroupSize=Vs(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=Gs(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4&&(this.outputComponent=4,this.variableComponents=[4,1]),this.shaderKey=`conv2DDerInputMM_${this.isVec4}_${this.elementsPerThread}`}getUserCode(){const t=this.isVec4?Di(this.elementsPerThread,this.workgroupSize):Ti(this.elementsPerThread,this.workgroupSize);return`
    ${Qm(this.isVec4?4:1)}
    ${t}
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jm(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,filter:n}=t,{inputShape:a,strides:u,pad:c,dataFormat:h,dimRoundingMode:p}=r,d=ci(h),m=rt(a,n.shape,u,1,c,p,!1,d),x=[{type:"int32",data:[m.filterHeight,m.filterWidth]},{type:"int32",data:[m.filterHeight-1-m.padInfo.top,m.filterWidth-1-m.padInfo.left]},{type:"int32",data:[m.strideHeight,m.strideWidth]},{type:"int32",data:[m.batchSize,m.outHeight,m.outWidth,m.outChannels]}];let y;if(fe().getBool("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE")||m.dataFormat!=="channelsLast")y=new Hm(m);else{y=new Zm(m);const w=m.inHeight*m.inWidth,b=m.inChannels,I=m.filterHeight*m.filterWidth*m.outChannels;x.push({type:"uint32",data:[w]},{type:"uint32",data:[b]},{type:"uint32",data:[I]})}return e.runWebGPUProgram(y,[o,n],"float32",x)}const eg={kernelName:Gu,backendName:"webgpu",kernelFunc:Jm};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class tg{constructor(t){this.variableNames=["x","W"],this.uniforms="filterDims: vec3<i32>, pads: vec3<i32>, strides: vec3<i32>, dilations: vec3<i32>,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3dnaive"}getUserCode(){return`
    ${M("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let batch = coords.x;
        let d2 = coords.u;

        let xFRCCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;
        let xFCorner = xFRCCorner.x;
        let xRCorner = xFRCCorner.y;
        let xCCorner = xFRCCorner.z;

        let inputDepthNearestVec4 = (uniforms.xShape.u / 4) * 4;
        let inputDepthVec4Remainder = uniforms.xShape.u % 4;

        var dotProd = 0.0;
        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {
          let xF = xFCorner + wF * uniforms.dilations[0];
          if (xF < 0 || xF >= uniforms.xShape.y) {
            continue;
          }

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let xR = xRCorner + wR * uniforms.dilations[1];
            if (xR < 0 || xR >= uniforms.xShape.z) {
              continue;
            }

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let xC = xCCorner + wC * uniforms.dilations[2];
              if (xC < 0 || xC >= uniforms.xShape.w) {
                continue;
              }

              for (var d1 = 0; d1 < inputDepthNearestVec4; d1 += 4) {
                let xValues = vec4<f32>(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                let wValues = vec4<f32>(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (inputDepthVec4Remainder == 1) {
                dotProd += getX(batch, xF, xR, xC, inputDepthNearestVec4) *
                  getW(wF, wR, wC, inputDepthNearestVec4, d2);
              } else if (inputDepthVec4Remainder == 2) {
                let xValues = vec2<f32>(
                  getX(batch, xF, xR, xC, inputDepthNearestVec4),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1)
                );
                let wValues = vec2<f32>(
                  getW(wF, wR, wC, inputDepthNearestVec4, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (inputDepthVec4Remainder == 3) {
                let xValues = vec3<f32>(
                  getX(batch, xF, xR, xC, inputDepthNearestVec4),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2)
                );
                let wValues = vec3<f32>(
                  getW(wF, wR, wC, inputDepthNearestVec4, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }`}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ig(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:n}=t,{strides:a,pad:u,dilations:c}=r,h=Ar(o.shape,n.shape,a,c,u),p=[h.padInfo.front,h.padInfo.top,h.padInfo.left],d=[{type:"int32",data:[h.filterDepth,h.filterHeight,h.filterWidth]},{type:"int32",data:[...p]},{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.dilationDepth,h.dilationHeight,h.dilationWidth]}],m=new tg(h),x=Jt(o.dtype,n.dtype);return e.runWebGPUProgram(m,[o,n],x,d)}const rg={kernelName:Hu,backendName:"webgpu",kernelFunc:ig};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function og(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,dy:n}=t,{strides:a,pad:u,filterShape:c}=r,h=Ar(o.shape,c,a,1,u),p=new Xm(h),d=[{type:"int32",data:[h.padInfo.front,h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.batchSize]},{type:"int32",data:[h.outDepth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"int32",data:[h.inDepth]},{type:"int32",data:[h.inHeight]},{type:"int32",data:[h.inWidth]}];return e.runWebGPUProgram(p,[o,n],n.dtype,d)}const sg={kernelName:ju,backendName:"webgpu",kernelFunc:og};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ng(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,filter:n}=t,{strides:a,pad:u,inputShape:c}=r,h=Ar(c,n.shape,a,1,u),p=new Km(h),d=[{type:"int32",data:[h.filterDepth,h.filterHeight,h.filterWidth]},{type:"int32",data:[h.filterDepth-1-h.padInfo.front,h.filterHeight-1-h.padInfo.top,h.filterWidth-1-h.padInfo.left]},{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.outDepth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"int32",data:[h.outChannels]}];return e.runWebGPUProgram(p,[o,n],o.dtype,d)}const ag={kernelName:Xu,backendName:"webgpu",kernelFunc:ng};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ug=se({opType:z.COS}),lg={kernelName:Ku,backendName:"webgpu",kernelFunc:ug};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cg=se({opType:z.COSH}),hg={kernelName:Yu,backendName:"webgpu",kernelFunc:cg};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class dg{constructor(t,e,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.uniforms="extrapolationValue : f32,",this.workgroupSize=[64,1,1],this.size=!0;const[n]=e;this.outputShape=[n,r[0],r[1],t],this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.methodId=o==="bilinear"?1:0,this.cropHeightBiggerThan1=this.outputShape[1]>1,this.cropWidthBiggerThan1=this.outputShape[2]>1,this.shaderKey=`cropAndResize_${this.methodId}_${this.cropHeightBiggerThan1}_${this.cropWidthBiggerThan1}`}getUserCode(){const[t,e]=["f32(uniforms.imageShape[1] - 1)","f32(uniforms.imageShape[2] - 1)"],[r,o,n]=this.cropHeightBiggerThan1?[`(${t} / f32(uniforms.outShape[1] - 1))`,"(y2-y1) * height_ratio",`y1*${t} + f32(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${t}`],[a,u,c]=this.cropWidthBiggerThan1?[`(${e} / f32(uniforms.outShape[2] - 1))`,"(x2-x1) * width_ratio",`x1*${e} + f32(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${e}`];return`
    ${M("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let height_ratio = f32(${r});
        let width_ratio = f32(${a});
        let b = coords[0];
        let y = coords[1];
        let x = coords[2];
        let d = coords[3];
        // get box vals
        let y1 = getBoxes(b, 0);
        let x1 = getBoxes(b, 1);
        let y2 = getBoxes(b, 2);
        let x2 = getBoxes(b, 3);
        // get image in batch index
        let bInd = i32(round(getBoxInd(b)));
        if(bInd < 0 || bInd >= uniforms.outShape[0]) {
          return;
        }
        let height_scale = ${o};
        let width_scale = ${u};
        let in_y = ${n};
        if( in_y < 0.0 || in_y > ${t} ) {
          setOutputAtIndex(index, uniforms.extrapolationValue);
          return;
        }
        let in_x = ${c};
        if( in_x < 0.0 || in_x > ${e} ) {
          setOutputAtIndex(index, uniforms.extrapolationValue);
          return;
        }
        let sourceFracIndexCR = vec2<f32>(in_x,in_y);
        if(${this.methodId} == 1) {
          // Compute the four integer indices.
          let sourceFloorCR = vec2<i32>(sourceFracIndexCR);
          let sourceCeilCR = vec2<i32>(ceil(sourceFracIndexCR));
          let topLeft = getImage(bInd, sourceFloorCR.y, sourceFloorCR.x, d);
          let bottomLeft = getImage(bInd, sourceCeilCR.y, sourceFloorCR.x, d);
          let topRight = getImage(bInd, sourceFloorCR.y, sourceCeilCR.x, d);
          let bottomRight = getImage(bInd, sourceCeilCR.y, sourceCeilCR.x, d);
          let fracCR = sourceFracIndexCR - vec2<f32>(sourceFloorCR);
          let top = topLeft + (topRight - topLeft) * fracCR.x;
          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          let newValue = top + (bottom - top) * fracCR.y;
          setOutputAtIndex(index, newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          let sourceNearestCR = vec2<i32>(floor(
            sourceFracIndexCR + vec2<f32>(0.5,0.5)));
          let newValue = getImage(
            bInd, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutputAtIndex(index, newValue);
        }
      }
    }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pg=i=>{const{inputs:t,backend:e,attrs:r}=i,{image:o,boxes:n,boxInd:a}=t,{cropSize:u,method:c,extrapolationValue:h}=r,p=new dg(o.shape[3],n.shape,u,c),d=[{type:"float32",data:[h]}];return e.runWebGPUProgram(p,[o,n,a],"float32",d)},fg={kernelName:qu,backendName:"webgpu",kernelFunc:pg};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var si;(function(i){i.Prod="*",i.Sum="+"})(si||(si={}));class Zo{constructor(t,e,r,o){this.variableNames=["x"],this.uniforms="index : f32,",this.size=!0,this.workgroupSize=[128,1,1],this.outputShape=e,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.exclusive=r,this.reverse=o,this.op=t,this.shaderKey=`cum_${this.op}_${this.exclusive}_${this.reverse}`}getUserCode(){const t=this.outputShape.length,e=this.op===si.Prod?"1.0":"0.0",r=this.exclusive?e:`getX(${Jo(t,"coords",this.op)})`,o=this.outputShape[this.outputShape.length-1];let n="",a="";return this.exclusive?(n=this.reverse?`end != ${o-1}`:"end != 0",a=this.reverse?"end + 1":"end - 1"):(n=this.reverse?`end + pow2 < ${o}`:"end >= pow2",a=this.reverse?"end + pow2":"end - pow2"),`
      ${M("index")} {
       if (index < uniforms.size) {
         var coords = getCoordsFromIndex(index);

         let end = ${es(t,"coords",this.op)};
         var val = ${r};
         let pow2 = i32(pow(2.0, uniforms.index));
         if (${n}) {
           let idx = ${a};
           ${es(t,"coords",this.op)} = idx;
           val ${this.op}= getX(${Jo(t,"coords",this.op)});
         }
         setOutputAtIndex(index, val);
       }
      }
    `}}function Jo(i,t,e){if(i===1)return`${t}`;if(i===2)return`${t}.x, ${t}.y`;if(i===3)return`${t}.x, ${t}.y, ${t}.z`;if(i===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${e} for rank ${i} is not yet supported`)}function es(i,t,e){if(i===1)return`${t}`;if(i===2)return`${t}.y`;if(i===3)return`${t}.z`;if(i===4)return`${t}.w`;throw Error(`Cumulative ${e} for rank ${i} is not yet supported`)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function on(i,t,e,r,o,n){const a=t.shape.length,u=ai([r],a);let c=t;u!=null&&(c=Xe({inputs:{x:t},backend:e,attrs:{perm:u}}));const h=ui(1,a)[0];if(h!==a-1)throw new Error(`WebGPU cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);const p=c.shape[h];let d=Ee({inputs:{x:c},backend:e});for(let m=0;m<=Math.ceil(Math.log2(p))-1;m++){const x=new Zo(i,c.shape,!1,n),y=d,w=[{type:"float32",data:[m]}];d=e.runWebGPUProgram(x,[d],d.dtype,w),e.disposeData(y.dataId)}if(o){const m=new Zo(i,c.shape,o,n),x=d,y=[{type:"float32",data:[0]}];d=e.runWebGPUProgram(m,[d],d.dtype,y),e.disposeData(x.dataId)}if(u!=null){const m=Os(u),x=Xe({inputs:{x:d},backend:e,attrs:{perm:m}});return e.disposeData(d.dataId),e.disposeData(c.dataId),x}return d}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mg(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:n,exclusive:a,reverse:u}=r;return on(si.Prod,o,e,n,a,u)}const gg={kernelName:Qu,backendName:"webgpu",kernelFunc:mg};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xg(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:n,exclusive:a,reverse:u}=r;return on(si.Sum,o,e,n,a,u)}const yg={kernelName:Zu,backendName:"webgpu",kernelFunc:xg};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wg(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,weights:n}=t,{size:a,binaryOutput:u}=r,c=o.shape.length===1,p=J(n.shape)>0,d=n.dtype,m=c?[o.shape[0]]:[o.shape[0],o.shape[1]],x=c?[a]:[o.shape[0],a],y=$e({backend:e,attrs:{shape:x,value:0,dtype:d}}),w=new Js(m,p,u),b=[{type:"int32",data:[a]}],I=p?[o,n]:[o];return e.runWebGPUProgram(w,I,d,b,y)}const vg={kernelName:Ju,backendName:"webgpu",kernelFunc:wg};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Cg{constructor(t,e){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.uniforms="blockSize : i32,",this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`depthToSpace_${e}`,this.dataFormat=e}getUserCode(){return`
      ${M("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let h = ${this.getHeightCoordString()};
          let w = ${this.getWidthCoordString()};
          let d = ${this.getDepthCoordString()};

          let in_h = h / uniforms.blockSize;
          let offset_h = h % uniforms.blockSize;
          let in_w = w / uniforms.blockSize;
          let offset_w = w % uniforms.blockSize;
          let offset_d = (offset_h * uniforms.blockSize + offset_w) *
            ${this.getOutputDepthSize()};
          let in_d = d + offset_d;

          let rlt = ${this.getInputSamplingString()};
          setOutputAtIndex(index, rlt);
        }
      }`}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?"uniforms.outShape[3]":"uniforms.outShape[1]"}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bg(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{blockSize:n,dataFormat:a}=r,u=o.shape[0],c=a==="NHWC"?o.shape[1]:o.shape[2],h=a==="NHWC"?o.shape[2]:o.shape[3],p=a==="NHWC"?o.shape[3]:o.shape[1],d=c*n,m=h*n,x=p/(n*n),y=a==="NHWC"?[u,d,m,x]:[u,x,d,m],w=[{type:"int32",data:[n]}],b=new Cg(y,a);return e.runWebGPUProgram(b,[o],o.dtype,w)}const Sg={kernelName:el,backendName:"webgpu",kernelFunc:bg};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kg{constructor(t,e,r,o=!1,n=null,a=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>,",this.workgroupSize=[16,16,1],this.outputShape=t,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),o&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.addBias=o,this.activation=n,this.hasPreluActivation=a,this.filterHeight=e,this.filterWidth=r,this.shaderKey=`depthwiseNCHW_${this.activation}_${this.filterHeight}_${this.filterWidth}`}getUserCode(){const t=this.filterWidth*this.filterHeight,e=this.workgroupSize[0]*this.workgroupSize[1]*this.workgroupSize[2],r=this.workgroupSize[1]+this.filterHeight-1,o=this.workgroupSize[0]+this.filterWidth-1;return`
      ${Qe(this.activation,this.hasPreluActivation,!1,4)}

      var<workgroup> mm_Asub : array<array<f32, ${o}>, ${r}>;
      var<workgroup> mm_Bsub : array<array<f32, ${this.filterWidth}>, ${this.filterHeight}>;
      fn readX(batch : i32, channel : i32, row : i32, col : i32) -> f32 {
        var value = 0.0;
        if (row >=0 && row < uniforms.inDims[0] && col >=0 && col < uniforms.inDims[1])
        {
          value = getX(batch, channel, row, col);
        }
        return value;
      }

      ${M()} {
        let coords = getOutputCoords();
        let batch = coords[0];
        let xRCCorner = vec2<i32>(coords.zw) - uniforms.pads;
        let channelMul = uniforms.wShape[3];
        let d1 = coords[1] / channelMul;
        let q = coords[1] % channelMul;

        let inputRowStart = xRCCorner.x;
        let inputColStart = xRCCorner.y;

        let localRow = i32(localId.y);
        let localCol = i32(localId.x);

        // Load one tile of X into local memory.
        for (var inputRow = localRow; inputRow < ${r}; inputRow = inputRow + ${this.workgroupSize[1]}) {
          for (var inputCol = localCol; inputCol < ${o}; inputCol = inputCol + ${this.workgroupSize[0]}) {
            let rowOffset = inputRow - localRow;
            let colOffset = inputCol - localCol;
            mm_Asub[inputRow][inputCol] = readX(batch, d1, inputRowStart + rowOffset, inputColStart + colOffset);
          }
        }

        // Load one tile of W into local memory.
        var wIndex = i32(localIndex);
        ${t<e?`if (wIndex < ${t})`:`for(; wIndex < ${t}; wIndex = wIndex + ${e})`}

        {
          let wRow = wIndex / ${this.filterWidth};
          let wCol = wIndex % ${this.filterWidth};
          mm_Bsub[wRow][wCol] = getW(wRow, wCol, d1, q);
        }

        workgroupBarrier();

        var value = 0.0;
        for (var wR = 0; wR < ${this.filterHeight}; wR = wR + 1) {
          for (var wC = 0; wC < ${this.filterWidth}; wC = wC + 1) {
            let xVal = mm_Asub[localRow + wR][localCol + wC];
            let wVal = mm_Bsub[wR][wC];
            value = fma(xVal, wVal, value);
          }
        }
        ${mt(this.addBias,this.activation)}
        if (coordsInBounds4D(coords, uniforms.outShape)) {
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class sn{constructor(t,e=!1,r=null,o=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>, virtualWidth : i32,",this.workgroupSize=[64,1,1],this.workPerThread=4,this.outputComponent=4,this.outputShape=t.outShape,this.virtualWidth=Math.ceil(this.outputShape[2]/this.workPerThread)*this.workPerThread;const n=[this.outputShape[0],this.outputShape[1],this.virtualWidth,this.outputShape[3]];this.dispatchLayout=U(n),this.dispatch=L(this.dispatchLayout,n,this.workgroupSize,[this.outputComponent*this.workPerThread,1,1]),ne(t.dataFormat==="channelsLast",()=>"TODO: NCHW is unimplemented"),e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.convInfo=t,this.addBias=e,this.activation=r,this.hasPreluActivation=o,this.shaderKey=`depthwiseVec4_${r}_${this.convInfo.filterHeight}_${this.convInfo.filterWidth}_${this.convInfo.strideHeight}_${this.convInfo.strideWidth}_${this.workPerThread}`}getUserCode(){const t=(this.workPerThread-1)*this.convInfo.strideWidth+this.convInfo.filterWidth,e=this.convInfo.strideHeight,r=this.convInfo.strideWidth;return`
      ${Qe(this.activation,this.hasPreluActivation,!0,4)}
      fn readX(batch : i32, row : i32, col : i32, channel : i32) -> vec4<f32> {
        var value = vec4<f32>(0.0);
        if (col >=0 && col < uniforms.inDims[1]) {
          value = getX(batch, row, col, channel);
        }
        return value;
      }

      ${M("index")} {
        let width0 = uniforms.outShape[3] / ${this.outputComponent};
        let d1 = (index % width0) * ${this.outputComponent};
        var index1 = index / width0;
        let width1 = uniforms.virtualWidth / ${this.workPerThread};
        let c = (index1 % width1) * ${this.workPerThread};
        index1 = index1 / width1;
        let r = index1 % uniforms.outShape[1];
        let batch = index1 / uniforms.outShape[1];

        let xRCCorner = vec2<i32>(r, c) * vec2<i32>(${e}, ${r}) - uniforms.pads;

        let xRCorner = xRCCorner.x;
        let xCCorner = xRCCorner.y;
        var xVals : array<vec4<f32>, ${t}>;
        var dotProd : array<vec4<f32>, ${this.workPerThread}>;
        for (var i = 0; i < ${this.workPerThread}; i++) {
          dotProd[i] = vec4<f32>(0.0);
        }

        // Use constant instead of uniform can give better performance.
        for (var wR = 0; wR < ${this.convInfo.filterHeight}; wR = wR + 1) {
          let xR = xRCorner + wR;
          if (xR >=0 && xR < uniforms.inDims[0]) {
            for (var i = 0; i < ${t}; i++) {
              xVals[i] = readX(batch, xR, xCCorner + i, d1);
            }
            for (var wC = 0; wC < ${this.convInfo.filterWidth}; wC = wC + 1) {
              let wValue = getW(wR, wC, d1, 0);
              for (var i = 0; i < ${this.workPerThread}; i++) {
                dotProd[i] = fma(xVals[i * ${r} + wC], wValue, dotProd[i]);
              }
            }
          }
        }

        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let coords = vec4<i32>(batch, r, c + i, d1);
          if (coordsInBounds4D(coords, uniforms.outShape)) {
            var value = dotProd[i];
            ${mt(this.addBias,this.activation)}
            setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class nn{constructor(t,e=!1,r=null,o=!1){this.variableNames=["x","W"],this.uniforms=`pads : vec2<i32>, inDims : vec2<i32>, filterHeight : i32,
      filterWidth : i32, strides : vec2<i32>, dilations : vec2<i32>,`,this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=t.dataFormat==="channelsLast",e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.convInfo=t,this.addBias=e,this.activation=r,this.hasPreluActivation=o,this.shaderKey=`depthwise_${this.activation}_${this.isChannelsLast}`}getUserCode(){const t=this.isChannelsLast?"getX(batch, xR, xC, d1);":"getX(batch, d1, xR, xC);";return`
      ${Qe(this.activation,this.hasPreluActivation,!1,4)}

      ${M("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let batch = coords[0];
          let xRCCorner = vec2<i32>(coords.${this.isChannelsLast?"yz":"zw"}) * uniforms.strides - uniforms.pads;
          let d2 = coords[${this.isChannelsLast?3:1}];
          let channelMul = uniforms.wShape[3];
          let d1 = d2 / channelMul;
          let q = d2 % channelMul;

          let inputRowStart = xRCCorner.x;
          let inputColStart = xRCCorner.y;
          let inputRowEnd = inputRowStart + uniforms.filterHeight *
              uniforms.dilations[0];
          let inputColEnd = inputColStart + uniforms.filterWidth *
              uniforms.dilations[1];

          // Convolve x(?, ?, d1)|x(d1, ?, ?) with w(:, :, d1, q) to get
          // y(yR, yC, d2)|y(d2, yR, yC). ? = to be determined. : = across all
          // values in that axis. x(?, ?, d1) and y(yR, yC, d2) is for NHWC.
          // x(d1, ?, ?) and y(d2, yR, yC) is for NCHW.
          var value = 0.0;

          // Extract if checking out of for loop for performance.
          if (inputRowStart >= 0 && inputColStart >= 0 &&
            inputRowEnd < uniforms.inDims[0] &&
                inputColEnd < uniforms.inDims[1]) {
              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {
                let xR = inputRowStart + wR * uniforms.dilations[0];

                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {
                  let xC = inputColStart + wC * uniforms.dilations[1];

                  let xVal = ${t};
                  let wVal = getW(wR, wC, d1, q);
                  value = value + xVal * wVal;
                }
              }
            } else {
              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {
                let xR = inputRowStart + wR * uniforms.dilations[0];

                if (xR < 0 || xR >= uniforms.inDims[0]) {
                  continue;
                }

                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {
                  let xC = inputColStart + wC * uniforms.dilations[1];

                  if (xC < 0 || xC >= uniforms.inDims[1]) {
                    continue;
                  }

                  let xVal = ${t};
                  let wVal = getW(wR, wC, d1, q);
                  value = value + xVal * wVal;
                }
              }
            }
            ${mt(this.addBias,this.activation)}
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ig(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:n}=t,{strides:a,pad:u,dataFormat:c,dilations:h,dimRoundingMode:p}=r,d=ci(c);let m=h;m==null&&(m=[1,1]);const x=rt(o.shape,n.shape,a,m,u,p,!0,d),y=[{type:"int32",data:[x.padInfo.top,x.padInfo.left]},{type:"int32",data:[x.inHeight,x.inWidth]}],w=x.dataFormat==="channelsLast";let b;return!w&&x.inHeight>16&&x.inWidth>16&&x.strideHeight===1&&x.strideWidth===1&&x.dilationWidth===1&&x.dilationHeight===1&&x.inChannels===x.outChannels?b=new kg(x.outShape,x.filterHeight,x.filterWidth):w&&x.outHeight>4&&x.outWidth>4&&x.strideWidth<=2&&x.inChannels===x.outChannels&&x.dilationHeight===1&&x.dilationWidth===1&&x.inChannels%4===0?(b=new sn(x),y.push({type:"int32",data:[b.virtualWidth]})):(b=new nn(x),y.push({type:"int32",data:[x.filterHeight]},{type:"int32",data:[x.filterWidth]},{type:"int32",data:[x.strideHeight,x.strideWidth]},{type:"int32",data:[x.dilationHeight,x.dilationWidth]})),e.runWebGPUProgram(b,[o,n],o.dtype,y)}const Rg={kernelName:tl,backendName:"webgpu",kernelFunc:Ig};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Pg{constructor(t){this.variableNames=["x","dy"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>, outHeight : i32,
      outWidth : i32, inHeight : i32, inWidth : i32, batchSize : i32, channelMul : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_filter"}getUserCode(){return`
      ${M("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wR = coords[0];
        let wC = coords[1];
        let d1 = coords[2];
        let dm = coords[3];
        let d2 = d1 * uniforms.channelMul + dm;

        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b++) {
          for (var yR = 0; yR < uniforms.outHeight; yR++) {
            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];

            if (xR < 0 || xR >= uniforms.inHeight) {
              continue;
            }

            for (var yC = 0; yC < uniforms.outWidth; yC++) {
              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];

              if (xC < 0 || xC >= uniforms.inWidth) {
                continue;
              }

              let dyValue = getDy(b, yR, yC, d2);
              let xValue = getX(b, xR, xC, d1);
              dotProd += xValue * dyValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class Ag{constructor(t){this.variableNames=["dy","W"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32, channelMul : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_input"}getUserCode(){return`
      ${M("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d1 = coords[3];
        let dyCorner = coords.yz - uniforms.pads;
        let dyRCorner = dyCorner.x;
        let dyCCorner = dyCorner.y;

        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }

          let idyR = i32(dyR);
          let wRPerm = uniforms.filterDims[0] - 1 - wR;

          for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }

            let idyC = i32(dyC);
            let wCPerm = uniforms.filterDims[1] - 1 - wC;

            for (var dm = 0; dm < uniforms.channelMul; dm++) {
              let d2 = d1 * uniforms.channelMul + dm;
              let xValue = getDy(batch, idyR, idyC, d2);
              let wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $g(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,dy:n}=t,{strides:a,dilations:u,pad:c,dimRoundingMode:h,filterShape:p}=r,d=rt(o.shape,p,a,u,c,h,!0),m=new Pg(d),x=[{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.filterHeight,d.filterWidth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"int32",data:[d.inHeight]},{type:"int32",data:[d.inWidth]},{type:"int32",data:[d.batchSize]},{type:"int32",data:[d.outChannels/d.inChannels]}];return e.runWebGPUProgram(m,[o,n],"float32",x)}const Ng={kernelName:il,backendName:"webgpu",kernelFunc:$g};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dg(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,filter:n}=t,{strides:a,dilations:u,pad:c,dimRoundingMode:h,inputShape:p}=r,d=rt(p,n.shape,a,u,c,h,!0),m=new Ag(d),x=[{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.filterHeight-1-d.padInfo.top,d.filterWidth-1-d.padInfo.left]},{type:"int32",data:[d.filterHeight,d.filterWidth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"int32",data:[d.outChannels/d.inChannels]}];return e.runWebGPUProgram(m,[o,n],o.dtype,x)}const Tg={kernelName:rl,backendName:"webgpu",kernelFunc:Dg};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Fg{constructor(t){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,t],this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="diag"}getUserCode(){return`
      ${M("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let value = select(0.0, getX(coords[0]), coords[0] == coords[1]);
          setOutputAtIndex(index, value);
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eg(i){const{inputs:t,backend:e}=i,{x:r}=t,o=[...r.shape,...r.shape],n=J(r.shape),a=H({inputs:{x:r},backend:e,attrs:{shape:[n]}}),u=new Fg(n),c=e.runWebGPUProgram(u,[a],a.dtype),h=H({inputs:{x:c},backend:e,attrs:{shape:o}});return e.disposeData(a.dataId),e.disposeData(c.dataId),h}const _g={kernelName:ol,backendName:"webgpu",kernelFunc:Eg};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zg{constructor(t){this.variableNames=["x","w"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="dilation2d"}getUserCode(){return`
       ${M("index")} {
         if (index < uniforms.size) {
           let neg_infinity = -3.4e38;
           let coords = getOutputCoords();
           let batch = coords.x;
           let d1 = coords.w;
           let outTopLeftCorner = coords.yz * uniforms.strides - uniforms.pads;
           let hBeg = outTopLeftCorner.x;
           let wBeg = outTopLeftCorner.y;

           var curVal = neg_infinity;
           for (var h = 0; h < uniforms.filterDims[0]; h = h + 1) {
             let hIn = hBeg + h * uniforms.dilations[0];

             if (hIn >= 0 && hIn < uniforms.xShape[1]) {
               for (var w = 0; w < uniforms.filterDims[1]; w = w + 1) {
                 let wIn = wBeg + w * uniforms.dilations[1];

                 if (wIn >= 0 && wIn < uniforms.xShape[2]) {
                   let val = getX(batch, hIn, wIn, d1) + getW(h, w, d1);
                   if (val > curVal) {
                     curVal = val;
                   }
                 }
               }
             }
           }

           setOutputAtIndex(index, curVal);
         }
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mg(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:n}=t,{strides:a,pad:u,dilations:c}=r,h=$r(o.shape,n.shape,a,u,"NHWC",c),p=[h.padInfo.top,h.padInfo.left],d=[{type:"int32",data:[h.filterHeight,h.filterWidth]},{type:"int32",data:[...p]},{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]}],m=new zg(h);return e.runWebGPUProgram(m,[o,n],o.dtype,d)}const Lg={kernelName:sl,backendName:"webgpu",kernelFunc:Mg};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Og{constructor(t,e){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t.inShape,this.dispatchLayout=U(t.outShape),this.dispatch=L(this.dispatchLayout,t.outShape,this.workgroupSize),e!=="float32"&&e!=="int32")throw new Error(`Dilation2DBackpropInput only supports float32 and int32
          types, does not support ${e} type.`);this.type=e,this.shaderKey="dilation2DBackpropInput"}getUserCode(){return`
       ${M("index")} {
         if (index < uniforms.dySize) {
           let coords = getDyCoordsFromIndex(index);
           let b = coords[0];
           let r = coords[1];
           let c = coords[2];
           let d = coords[3];

           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;
           var curVal = -3.4e38;  // neg_infinity
           var xRMax = 0;
           var xCMax = 0;

           // In the case of multiple argmax branches, we only back-propagate
           // along the last branch, i.e., the one with largest value of
           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling
           // backward routines.
           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
             let xR = dyCorner.x + wR * uniforms.dilations[0];

             if (xR >= 0 && xR < uniforms.xShape[1]) {
               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
                 let xC = dyCorner.y + wC * uniforms.dilations[1];

                 if (xC >= 0 && xC < uniforms.xShape[2]) {
                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);
                   if (val > curVal) {
                     curVal = val;
                     xRMax = xR;
                     xCMax = xC;
                   }
                 }
               }
             }
           }

           let flatIndexIn = d + uniforms.xShape[3] *
               (xCMax + uniforms.xShape[2] * (xRMax + uniforms.xShape[1] * b));
           let value = getDy(b, r, c, d);
           ${ot("&result[flatIndexIn]","value",this.type)}
         }
       }
     `}}class Bg{constructor(t,e,r){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t.filterShape,this.dispatchLayout=U(t.outShape),this.dispatch=L(this.dispatchLayout,t.outShape,this.workgroupSize),r!=="float32"&&r!=="int32")throw new Error(`Dilation2DBackpropFilter only supports float32 and int32
          types, does not support ${r} type.`);this.type=r,this.shaderKey="dilation2DBackpropFilter"}getUserCode(){return`
       ${M("index")} {
         if (index < uniforms.dySize) {
           let coords = getDyCoordsFromIndex(index);
           let b = coords[0];
           let r = coords[1];
           let c = coords[2];
           let d = coords[3];

           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;
           var curVal = -3.4e38;  // neg_infinity
           var wRMax = 0;
           var wCMax = 0;

           // In the case of multiple argmax branches, we only back-propagate
           // along the last branch, i.e., the one with largest value of
           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling
           // backward routines.
           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
             let xR = dyCorner.x + wR * uniforms.dilations[0];

             if (xR >= 0 && xR < uniforms.xShape[1]) {
               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
                 let xC = dyCorner.y + wC * uniforms.dilations[1];

                 if (xC >= 0 && xC < uniforms.xShape[2]) {
                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);
                   if (val > curVal) {
                     curVal = val;
                     wRMax = wR;
                     wCMax = wC;
                   }
                 }
               }
             }
           }

           let flatIndexIn = d + uniforms.wShape[2] * (wCMax + wRMax * uniforms.wShape[1]);
           let value = getDy(b, r, c, d);
           ${ot("&result[flatIndexIn]","value",this.type)}
         }
       }
     `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wg(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:n,dy:a}=t,{strides:u,pad:c,dilations:h}=r,p=$r(o.shape,n.shape,u,c,"NHWC",h),d=n.dtype,m=new Bg(p,n.shape,d),x=[{type:"int32",data:[p.filterHeight,p.filterWidth]},{type:"int32",data:[p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.dilationHeight,p.dilationWidth]},{type:"int32",data:[J(p.outShape)]}],y=$e({backend:e,attrs:{shape:n.shape,value:0,dtype:d}});return e.runWebGPUProgram(m,[o,n,a],d,x,y)}const Ug={kernelName:nl,backendName:"webgpu",kernelFunc:Wg};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vg(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:n,dy:a}=t,{strides:u,pad:c,dilations:h}=r,p=$r(o.shape,n.shape,u,c,"NHWC",h),d=o.dtype,m=new Og(p,d),x=[{type:"int32",data:[p.filterHeight,p.filterWidth]},{type:"int32",data:[p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.dilationHeight,p.dilationWidth]},{type:"int32",data:[J(p.outShape)]}],y=$e({backend:e,attrs:{shape:p.inShape,value:0,dtype:d}});return e.runWebGPUProgram(m,[o,n,a],d,x,y)}const Gg={kernelName:al,backendName:"webgpu",kernelFunc:Vg};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Hg{constructor(t,e,r){this.variableNames=["Image"],this.uniforms="alpha: f32,",this.workgroupSize=[64,1,1],this.pixelsOpType=$t.DRAW,this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.type=e,this.textureFormat=r,this.shaderKey=`draw_${e}_${r}`}getUserCode(){let t;const e=this.type==="float32"?"value":"value / 255.0";return t=`
      if (uniforms.numChannels == 1) {
        rgba[0] = ${e};
        rgba[1] = ${e};
        rgba[2] = ${e};
      } else {
        rgba[d] = ${e};
      }`,`
       @group(0) @binding(0) var outImage : texture_storage_2d<${this.textureFormat}, write>;
       ${M("index")} {
         if (index < uniforms.size) {
           var rgba = vec4<f32>(0.0, 0.0, 0.0, uniforms.alpha);
           for (var d = 0; d < uniforms.numChannels; d = d + 1) {
             let value = f32(inBuf[index * uniforms.numChannels + d]);
             ${t}
           }
           rgba.x = rgba.x * rgba.w;
           rgba.y = rgba.y * rgba.w;
           rgba.z = rgba.z * rgba.w;
           let coords = getCoordsFromIndex(index);
           textureStore(outImage, vec2<i32>(coords.yx), rgba);
         }
       }
      `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jg(i){const{inputs:t,backend:e,attrs:r}=i,{image:o}=t,{canvas:n,options:a}=r,[u,c]=o.shape.slice(0,2),{imageOptions:h}=a||{},p=(h==null?void 0:h.alpha)||1,d=e.device.features.has("bgra8unorm-storage")?"bgra8unorm":"rgba8unorm",m=[u,c],x=new Hg(m,o.dtype,d);n.width=c,n.height=u;const y="webgpu";let w=n.getContext(y),b;w||(b=new OffscreenCanvas(c,u),w=b.getContext(y));const I=o.shape.length===3?o.shape[2]:1;w.configure({device:e.device,format:d,usage:GPUTextureUsage.STORAGE_BINDING,alphaMode:"premultiplied"});const R="int32",P=e.makeTensorInfo(m,R),A=e.tensorMap.get(P.dataId);A.resource=w.getCurrentTexture(),A.external=!0;const N=[{type:"uint32",data:[I]},{type:"float32",data:[p]}];if(e.runWebGPUProgram(x,[o],R,N,P),b){const D=n.getContext("2d");if(!D)throw new Error("Please make sure this canvas has only been used for 2d or webgpu context!");D.drawImage(b,0,0)}return e.disposeData(P.dataId),o}const Xg={kernelName:ul,backendName:"webgpu",kernelFunc:jg};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const an=ye({opType:K.MUL,cpuKernelImpl:Qp,supportsComplex:!0}),Kg={kernelName:ll,backendName:"webgpu",kernelFunc:an};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function un(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:n,keepDims:a}=r;return xt(o,n,a,"sum",e)}const Yg={kernelName:cl,backendName:"webgpu",kernelFunc:un};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qg(i){const{inputs:t,backend:e,attrs:r}=i,{equation:o}=r,n=t,{allDims:a,summedDims:u,idDims:c}=dl(o,n.length);pl(a.length,c,n);const{path:h,steps:p}=fl(u,c),d=p.length;let m=null,x=a.length;const y=[];for(let w=0;w<d;++w){for(const b of p[w]){const{permutationIndices:I,expandDims:R}=ml(x,c[b]);let P;gl(I)?P=n[b]:(P=Xe({inputs:{x:n[b]},backend:e,attrs:{perm:I}}),y.push(P));const A=P.shape.slice();for(let N=0;N<R.length;++N)A.splice(R[N],0,1);Dt(P.shape,A)||(P=H({inputs:{x:P},backend:e,attrs:{shape:A}}),y.push(P)),m===null?m=P:(m=an({inputs:{a:P,b:m},backend:e}),y.push(m))}w<d-1&&(h[w]>=0&&(m=un({inputs:{x:m},backend:e,attrs:{axis:h[w]-(a.length-x),keepDims:!1}}),y.push(m)),x--)}for(const w of y)w!==m&&e.disposeData(w.dataId);return m}const Qg={kernelName:hl,backendName:"webgpu",kernelFunc:qg};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zg=se({opType:z.ELU}),Jg={kernelName:xl,backendName:"webgpu",kernelFunc:Zg};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ex=i=>{const{inputs:t,backend:e}=i,{dy:r,y:o}=t,n=new Ri(K.ELU_DER,r.shape,o.shape);return e.runWebGPUProgram(n,[r,o],r.dtype)},tx={kernelName:yl,backendName:"webgpu",kernelFunc:ex};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ix=ye({opType:K.EQUAL,dtype:"bool",cpuKernelImpl:zp}),rx={kernelName:wl,backendName:"webgpu",kernelFunc:ix};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ox=se({opType:z.ERF}),sx={kernelName:vl,backendName:"webgpu",kernelFunc:ox};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nx=se({opType:z.EXP,cpuKernelImpl:Mp,dtype:"float32"}),ax={kernelName:Cl,backendName:"webgpu",kernelFunc:nx};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vr(i){const{inputs:t,attrs:e,backend:r}=i,{dim:o}=e,{input:n}=t,a=n.shape.length,u=n.shape.slice();let c=o;return o<0&&(ne(-(a+1)<=o,()=>`Axis must be in the interval [${-(a+1)}, ${a}]`),c=a+o+1),u.splice(c,0,1),H({inputs:{x:n},backend:r,attrs:{shape:u}})}const ux={kernelName:bl,backendName:"webgpu",kernelFunc:vr};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lx=se({opType:z.EXPM1,cpuKernelImpl:Lp}),cx={kernelName:Sl,backendName:"webgpu",kernelFunc:lx};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ts{constructor(t,e){this.variableNames=["real","imag"],this.outputShape=[],this.uniforms="exponentMultiplier : f32, denominator: f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.component=t,this.shaderKey=`fft_${t}`}getUserCode(){return`
    fn unaryOpComplex(real: f32, expR: f32, imag: f32, expI: f32) -> f32 {
      ${this.component==="real"?"return real * expR - imag * expI;":"return real * expI + imag * expR;"}
    }

    fn mulMatDFT(batch: i32, index: i32) -> f32 {
      let indexRatio = f32(index) / f32(uniforms.realShape[1]);
      let exponentMultiplierTimesIndexRatio =
          uniforms.exponentMultiplier * indexRatio;

      var result = 0.0;

      for (var i = 0; i < uniforms.realShape[1]; i = i + 1) {
        // x = (-2|2 * PI / N) * index * i;
        let x = exponentMultiplierTimesIndexRatio * f32(i);
        let expR = cos(x);
        let expI = sin(x);
        let real = getReal(batch, i);
        let imag = getImag(batch, i);

        result = result +
            unaryOpComplex(real, expR, imag, expI) / uniforms.denominator;
      }

      return result;
    }

    ${M("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        setOutputAtIndex(index, mulMatDFT(coords[0], coords[1]));
      }
    }
  `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ln(i,t,e){const r=e.tensorMap.get(i.dataId),o=J(i.shape),n=i.shape[i.shape.length-1],a=o/n,u=[],c=H({inputs:{x:i},backend:e,attrs:{shape:[a,n]}});u.push(c);const h=c.shape,p=new ts("real",h),d=new ts("imag",h),m=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:h},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:h}],x=t?2*Math.PI:-2*Math.PI,y=t?h[1]:1,w=[{type:"float32",data:[x]},{type:"float32",data:[y]}],b=e.runWebGPUProgram(p,m,"float32",w);u.push(b);const I=e.runWebGPUProgram(d,m,"float32",w);u.push(I);const R=gt({inputs:{real:b,imag:I},backend:e});u.push(R);const P=H({inputs:{x:R},backend:e,attrs:{shape:i.shape}});return u.forEach(A=>e.disposeData(A.dataId)),P}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hx(i){const{inputs:t,backend:e}=i,{input:r}=t;return ln(r,!1,e)}const dx={kernelName:kl,backendName:"webgpu",kernelFunc:hx};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class px{constructor(t){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="flipLeftRight"}getUserCode(){return`
      ${M("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let coordX = uniforms.xShape[2] - coords[2] - 1;
          let outputValue = getX(coords[0], coords[1], coordX, coords[3]);
          setOutputAtIndex(index, outputValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fx={kernelName:Il,backendName:"webgpu",kernelFunc:({inputs:i,backend:t})=>{const{image:e}=i,r=t,o=new px(e.shape);return r.runWebGPUProgram(o,[e],e.dtype)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mx=se({opType:z.FLOOR,cpuKernelImpl:Op}),gx={kernelName:Rl,backendName:"webgpu",kernelFunc:mx};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xx=ye({opType:K.FLOOR_DIV,cpuKernelImpl:Bp,dtype:"int32"}),yx={kernelName:Pl,backendName:"webgpu",kernelFunc:xx};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wx{constructor(t,e,r=!1){this.pixelsOpType=$t.FROM_PIXELS,this.outputShape=[0],this.variableNames=[],this.workgroupSize=[256,1,1],this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,[e,1,1]),this.importVideo=r,this.shaderKey=`fromPixels_${this.importVideo}`}getUserCode(){const t=this.importVideo?"textureLoad(src, vec2<i32>(coords.yx));":"textureLoad(src, vec2<i32>(coords.yx), 0)";return`
      @binding(1) @group(0) var src: ${this.importVideo?"texture_external":"texture_2d<f32>"};
      ${M("index")} {
        let flatIndex = index * uniforms.numChannels;
        if (flatIndex < uniforms.size) {
          let coords = getCoordsFromIndex(flatIndex);
          let values = ${t};
          for (var i = 0; i < uniforms.numChannels; i = i + 1) {
            result[flatIndex + i] = i32(floor(255.0 * values[i]));
          }
        }
      }
  `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vx={kernelName:Al,backendName:"webgpu",kernelFunc:Cx};let vt,nr=fe().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function Cx(i){const{inputs:t,backend:e,attrs:r}=i;let{pixels:o}=t;const{numChannels:n}=r;if(o==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");const a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,u=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,c=typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&o instanceof OffscreenCanvas,h=typeof ImageBitmap<"u"&&o instanceof ImageBitmap,[p,d]=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],m=[d,p,n],x=fe().getBool("WEBGPU_IMPORT_EXTERNAL_TEXTURE")&&a,y=a||u;if(h||c||y){let R;if(x)R=e.device.importExternalTexture({source:o});else{if(y){const G=fe().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(vt==null||G!==nr)&&(nr=G,vt=document.createElement("canvas").getContext("2d",{willReadFrequently:nr})),vt.canvas.width=p,vt.canvas.height=d,vt.drawImage(o,0,0,p,d),o=vt.canvas}const W=GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,X=e.textureManager.acquireTexture(m[1],m[0],"rgba8unorm",W);e.queue.copyExternalImageToTexture({source:o},{texture:X},[m[1],m[0]]),R=X}const P=J(m),A=Zt(m),N=new wx(m,n,x),D=[{type:"uint32",data:[P]},{type:"uint32",data:[n]},{type:"uint32",data:[...A]}],T=e.makeTensorInfo([d,p],"int32"),E=e.tensorMap.get(T.dataId);E.resource=R;const F=e.runWebGPUProgram(N,[T],"int32",D);return e.disposeData(T.dataId),F}const w=o.data;let b=w;if(n!=null&&n!==4){b=new Uint8Array(o.width*o.height*n);const R=w.length;let P=0;for(let A=0;A<R;A++)A%4<n&&(b[P++]=w[A])}const I=e.makeTensorInfo(m,"int32",new Int32Array(b));return e.uploadToGPU(I.dataId),I}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bx{constructor(t,e,r,o,n){this.uniforms="varianceEpsilon : f32,",this.workgroupSize=[128,1,1],this.size=!0,this.variableNames=["x","mean","variance"],et(t,e),et(t,r),this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),o!=null&&(et(t,o),this.variableNames.push("offset")),n!=null&&(et(t,n),this.variableNames.push("scale")),this.offsetShape=o,this.scaleShape=n,this.shaderKey="batchNorm"}getUserCode(){let t="0.0";this.offsetShape!=null&&(t="getOffsetByOutputIndex(index)");let e="1.0";return this.scaleShape!=null&&(e="getScaleByOutputIndex(index)"),`
      ${M("index")} {
        if (index < uniforms.size)
        {
          let xValue = getXByOutputIndex(index);
          let meanValue = getMeanByOutputIndex(index);
          let varianValue = getVarianceByOutputIndex(index);
          let offsetValue = ${t};
          let scaleValue = ${e};
          let inv = scaleValue * inverseSqrt(varianValue + f32(uniforms.varianceEpsilon));
          setOutputAtIndex(index,dot(vec3<f32>(xValue, -meanValue, offsetValue), vec3<f32>(inv, inv, 1.0)));
        }
      }
  `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sx={kernelName:$l,backendName:"webgpu",kernelFunc:({inputs:i,attrs:t,backend:e})=>{const{x:r,scale:o,offset:n,mean:a,variance:u}=i,{varianceEpsilon:c}=t,h=e,p=[r,a,u];let d=null;n!=null&&(d=n.shape,p.push(n));let m=null;o!=null&&(m=o.shape,p.push(o));const x=new bx(r.shape,a.shape,u.shape,d,m),y=[{type:"float32",data:[c]}];return h.runWebGPUProgram(x,p,r.dtype,y)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kx(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:n,bias:a,preluActivationWeights:u}=t,{strides:c,pad:h,dataFormat:p,dilations:d,dimRoundingMode:m,activation:x,leakyreluAlpha:y}=r,w=ci(p),b=rt(o.shape,n.shape,c,d,h,m,!1,w);return rn({x:o,filter:n,convInfo:b,backend:e,bias:a,preluActivationWeights:u,leakyreluAlpha:y,activation:x})}const Ix={kernelName:Nl,backendName:"webgpu",kernelFunc:kx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rx(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:n,bias:a,preluActivationWeights:u}=t,{strides:c,pad:h,dilations:p,dimRoundingMode:d,activation:m,leakyreluAlpha:x}=r;let y=p;y==null&&(y=[1,1]),ne(Bs(c,y),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${y}'`);const w=rt(o.shape,n.shape,c,y,h,d,!0),b=[o,n],I=a!=null,R=u!=null;I&&b.push(a),R&&b.push(u);const P=[{type:"int32",data:[w.padInfo.top,w.padInfo.left]},{type:"int32",data:[w.inHeight,w.inWidth]}];let A;return w.outHeight>4&&w.outWidth>4&&w.strideWidth<=2&&w.inChannels===w.outChannels&&w.dilationHeight===1&&w.dilationWidth===1&&w.inChannels%4===0?(A=new sn(w,I,m,R),P.push({type:"int32",data:[A.virtualWidth]})):(A=new nn(w,I,m,R),P.push({type:"int32",data:[w.filterHeight]},{type:"int32",data:[w.filterWidth]},{type:"int32",data:[w.strideHeight,w.strideWidth]},{type:"int32",data:[w.dilationHeight,w.dilationWidth]})),m==="leakyrelu"&&(P.push({type:"float32",data:[x]}),A.uniforms+=" alpha : f32,"),e.runWebGPUProgram(A,b,"float32",P)}const Px={kernelName:Dl,backendName:"webgpu",kernelFunc:Rx};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ax{constructor(t,e){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`gathernd_${t}`,this.sliceDim=t,this.uniforms=`sliceDim : i32, strides : ${de(t)},`}getUserCode(){let t;return this.sliceDim>1?t="uniforms.strides[j]":t="uniforms.strides",`
      ${M("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          var flattenIndex = 0;
          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
            let indexTemp = i32(round(getIndices(coords[0], j)));
            let strideNum = ${t};
            flattenIndex = flattenIndex + indexTemp * strideNum;
          }

          setOutputAtIndex(index, getA(flattenIndex, coords[1]));
        }
      }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $x(i){const{inputs:t,backend:e}=i,{params:r,indices:o}=t,n=o.shape,a=n[n.length-1],u=J(r.shape),[c,h,p,d]=Fl(r,o),m=H({inputs:{x:o},backend:e,attrs:{shape:[h,a]}}),x=H({inputs:{x:r},backend:e,attrs:{shape:[J(r.shape)/p,p]}});if(e.shouldExecuteOnCPU([r,o])||r.dtype==="string"){const R=e.readSync(o.dataId),P=e.bufferSync(r),A=Wp(R,P,r.dtype,h,a,p,d,r.shape,u);return e.makeTensorInfo(c,r.dtype,A.values)}const y=new Ax(a,[h,p]),w=[{type:"int32",data:[a]},{type:"int32",data:d}],b=e.runWebGPUProgram(y,[x,m],x.dtype,w),I=H({inputs:{x:b},backend:e,attrs:{shape:c}});return e.disposeData(m.dataId),e.disposeData(x.dataId),e.disposeData(b.dataId),I}const Nx={kernelName:Tl,backendName:"webgpu",kernelFunc:$x};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Dx{constructor(t,e){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.slice(),this.aShape=t,this.outputShape=e,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="gather"}getUserCode(){const t=Tx(this.aShape);return`
      ${M("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          let indexZ = i32(getIndices(resRC.x, resRC.z));
          let inBounds = select(0.0, 1.0, indexZ >= 0 && indexZ < uniforms.aShape[2]);
          setOutputAtIndex(index, inBounds * getA(${t}));
        }
      }
    `}}function Tx(i){const t=["resRC.x","resRC.y","resRC.z","resRC.w"],e=[];for(let r=0;r<i.length;r++)r===2?e.push("indexZ"):e.push(`${t[r]}`);return e.join()}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cn(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,indices:n}=t,{axis:a,batchDims:u}=r,c=ft(a,o.shape)[0],h=_l(o,n,c,u),p=J(n.shape),d=[],m=H({inputs:{x:o},backend:e,attrs:{shape:[h.batchSize,h.outerSize,h.dimSize,h.sliceSize]}}),x=H({inputs:{x:n},backend:e,attrs:{shape:[h.batchSize,p/h.batchSize]}});d.push(m),d.push(x);const y=[h.batchSize,h.outerSize,p/h.batchSize,h.sliceSize];if(e.shouldExecuteOnCPU([o,n])){const P=e.tensorMap.get(x.dataId).values,A=Rt(x.shape,x.dtype,P),D=e.tensorMap.get(m.dataId).values,T=Rt(m.shape,m.dtype,D),E=Up(T,A,y);return d.forEach(F=>e.disposeData(F.dataId)),e.makeTensorInfo(h.outputShape,E.dtype,E.values)}const w=new Dx(m.shape,y),b=e.runWebGPUProgram(w,[m,x],m.dtype);d.push(b);const I=H({inputs:{x:b},backend:e,attrs:{shape:h.outputShape}});return d.forEach(R=>e.disposeData(R.dataId)),I}const Fx={kernelName:El,backendName:"webgpu",kernelFunc:cn};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ex=ye({opType:K.GREATER,cpuKernelImpl:Gp,dtype:"bool"}),_x={kernelName:zl,backendName:"webgpu",kernelFunc:Ex};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zx=ye({opType:K.GREATER_EQUAL,dtype:"bool",cpuKernelImpl:Vp}),Mx={kernelName:Ml,backendName:"webgpu",kernelFunc:zx};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lx(i){const{inputs:t,backend:e}=i,{input:r}=t;return ln(r,!0,e)}const Ox={kernelName:Ll,backendName:"webgpu",kernelFunc:Lx};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bx=se({opType:z.IS_FINITE,dtype:"bool"}),Wx={kernelName:Ol,backendName:"webgpu",kernelFunc:Bx};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ux=se({opType:z.IS_INF,dtype:"bool"}),Vx={kernelName:Bl,backendName:"webgpu",kernelFunc:Ux};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gx=se({opType:z.IS_NAN,dtype:"bool"}),Hx={kernelName:Wl,backendName:"webgpu",kernelFunc:Gx};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jx(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{alpha:n}=r,a=[{type:"float32",data:[n]}],u=new Et(o.shape,z.LEAKYRELU,"alpha : f32,");return e.runWebGPUProgram(u,[o],"float32",a)}const Xx={kernelName:Ul,backendName:"webgpu",kernelFunc:jx};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kx=ye({opType:K.LESS,dtype:"bool",cpuKernelImpl:jp}),Yx={kernelName:Vl,backendName:"webgpu",kernelFunc:Kx};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qx=ye({opType:K.LESS_EQUAL,dtype:"bool",cpuKernelImpl:Hp}),Qx={kernelName:Gl,backendName:"webgpu",kernelFunc:qx};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Zx{constructor(t){this.variableNames=[],this.outputShape=[],this.uniforms="start : f32, step : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t],this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="linSpace"}getUserCode(){return`
      ${M("index")} {
        if (index < uniforms.size) {
          setOutputAtIndex(index, uniforms.start + f32(index) * uniforms.step);
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jx(i){const{backend:t,attrs:e}=i,{start:r,stop:o,num:n}=e,a=(o-r)/(n-1),u=new Zx(n),c=[{type:"float32",data:[r]},{type:"float32",data:[a]}];return t.runWebGPUProgram(u,[],"float32",c)}const ey={kernelName:Hl,backendName:"webgpu",kernelFunc:Jx};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ty=se({opType:z.LOG,cpuKernelImpl:Xp}),iy={kernelName:jl,backendName:"webgpu",kernelFunc:ty};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ry=se({opType:z.LOG1P}),oy={kernelName:Xl,backendName:"webgpu",kernelFunc:ry};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sy=ye({opType:K.LOGICAL_AND,dtype:"bool"}),ny={kernelName:Kl,backendName:"webgpu",kernelFunc:sy};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ay=se({opType:z.LOGICAL_NOT}),uy={kernelName:Yl,backendName:"webgpu",kernelFunc:ay};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ly=ye({opType:K.LOGICAL_OR}),cy={kernelName:ql,backendName:"webgpu",kernelFunc:ly};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hn=`
  var powValue = 0.0;
  let basis = uniforms.bias + uniforms.alpha * sum;
  if (uniforms.beta == 0.5) {
    powValue = inverseSqrt(basis);
  } else if (uniforms.beta == 1.0) {
    powValue = 1.0 / basis;
  } else {
    powValue = exp(log(basis) * (-uniforms.beta));
  }
`;class hy{constructor(t){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn"}getUserCode(){return`
    ${M("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let b = coords[0];
        let r = coords[1];
        let c = coords[2];
        let d = coords[3];

        let x = getX(b, r, c, d);
        var sum = 0.0;
        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {
          let idx = d + i;
          if (idx >= 0 && idx < uniforms.xShape[3]) {
            let z = getX(b, r, c, idx);
            sum = sum + z * z;
          }
        }
        ${hn}

        setOutputAtIndex(index, x * powValue);
      }
    }
  `}}class dy{constructor(t,e){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[256,1,1],this.maxAllowRadius=16,ne(e<=this.maxAllowRadius,()=>`Radius must be less than or equal to ${this.maxAllowRadius}, current radius is ${e}`),this.outputShape=t,this.elementsPerWorkgroup=this.workgroupSize[0]-2*this.maxAllowRadius,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=L(this.dispatchLayout,this.outputShape,[this.elementsPerWorkgroup,this.workgroupSize[1],this.workgroupSize[2]]),this.shaderKey="lrn_shared"}getUserCode(){return`
    var <workgroup>lrnSub: array<f32, ${this.workgroupSize[0]}>;
    const elementsPerWorkgroup = ${this.elementsPerWorkgroup};
    const maxAllowRadius = ${this.maxAllowRadius};

    ${M()} {
      let localDepth = i32(localId.x);
      let workgroupDepth = i32(workgroupId.x) * elementsPerWorkgroup;
      let xDepth = workgroupDepth + localDepth - maxAllowRadius;
      let b = i32(globalId.z) / uniforms.xShape[1];
      let r = i32(globalId.z) - b * uniforms.xShape[1];
      let c = i32(globalId.y);
      let d = workgroupDepth + localDepth;

      var x = 0.0;
      if (xDepth >= 0 && xDepth < uniforms.xShape[3]) {
        x = getX(b, r, c, xDepth);
      }
      lrnSub[localDepth] = x;
      workgroupBarrier();

      if (localDepth < elementsPerWorkgroup && d < uniforms.outShape[3]) {
        var sum = 0.0;
        let index = localDepth + maxAllowRadius;
        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {
          let z = lrnSub[index + i];
          sum = sum + z * z;
        }
        ${hn}

        setOutputAtCoords(b, r, c, d, lrnSub[index] * powValue);
      }
    } `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function py(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{depthRadius:n,bias:a,alpha:u,beta:c}=r;let h;n>16?h=new hy(o.shape):h=new dy(o.shape,n);const p=[{type:"int32",data:[n]},{type:"float32",data:[a]},{type:"float32",data:[u]},{type:"float32",data:[c]}];return e.runWebGPUProgram(h,[o],o.dtype,p)}const fy={kernelName:Ql,backendName:"webgpu",kernelFunc:py};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class my{constructor(t){this.outputShape=[],this.variableNames=["inputImage","outputImage","dy"],this.uniforms="depthRadius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn_grad"}getUserCode(){return`
    ${M("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let b = coords[0];
        let r = coords[1];
        let c = coords[2];

        let MIN_DEPTH_BEGIN = 0;
        let MAX_DEPTH_END = uniforms.outShape[3];
        var result = 0.0;
        for (var d = MIN_DEPTH_BEGIN; d < MAX_DEPTH_END; d++) {
          let depthBegin = max(MIN_DEPTH_BEGIN, d - uniforms.depthRadius);
          let depthEnd = min(MAX_DEPTH_END, d + uniforms.depthRadius + 1);

          var norm = 0.0;
          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {
            if (k < depthBegin) {
              continue;
            } else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            } else {
              break;
            }
          }

          norm = uniforms.alpha * norm + uniforms.bias;

          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {
            if (k < depthBegin) {
              continue;
            } else if (k >= depthBegin && k < depthEnd) {
              var dyi = -2.0 * uniforms.alpha * uniforms.beta
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d) / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * uniforms.beta);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            } else {
              break;
            }
          }
        }

        setOutputAtIndex(index, result);
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gy(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,y:n,dy:a}=t,{depthRadius:u,bias:c,alpha:h,beta:p}=r,d=new my(o.shape),m=[{type:"int32",data:[u]},{type:"float32",data:[c]},{type:"float32",data:[h]},{type:"float32",data:[p]}];return e.runWebGPUProgram(d,[o,n,a],o.dtype,m)}const xy={kernelName:Zl,backendName:"webgpu",kernelFunc:gy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yy=ye({opType:K.MAX,cpuKernelImpl:Yp}),wy={kernelName:Jl,backendName:"webgpu",kernelFunc:yy};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vy(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{filterSize:n,strides:a,pad:u,dimRoundingMode:c}=r,p=li(o.shape,n,a,1,u,c);return Zs(o,p,"max",e)}const Cy={kernelName:ec,backendName:"webgpu",kernelFunc:vy};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function by(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{filterSize:n,strides:a,pad:u,dataFormat:c,dimRoundingMode:h}=r,p=[1,1,1],d=Ni(o.shape,n,a,p,u,h,c),m=new _r(d,"max"),x=[{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.padInfo.front,d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.inDepth,d.inHeight,d.inWidth]},{type:"int32",data:[d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth]}];return e.runWebGPUProgram(m,[o],o.dtype,x)}const Sy={kernelName:tc,backendName:"webgpu",kernelFunc:by};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ky{constructor(t){this.variableNames=["dy","maxPos"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool2DBackprop"}getUserCode(){return`
      ${M("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d = coords[3];

        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;
        let dyRCorner = dyRCCorner.x;
        let dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] - 1;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR += uniforms.dilations[0]) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims[1]; wC += uniforms.dilations[1]) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }
            let idyC = i32(dyC);

            let dyValue = getDy(batch, idyR, idyC, d);
            let maxPosValue = lastIndex - i32(getMaxPos(batch, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            let curPosValue = wR * uniforms.filterDims[1] + wC;
            let mask = select(0.0, 1.0, maxPosValue == curPosValue);
            dotProd += dyValue * mask;
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class Iy{constructor(t){this.variableNames=["dy","maxPos"],this.uniforms=`strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,
      outDepth : i32, outHeight : i32, outWidth : i32`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool3DBackprop"}getUserCode(){return`
      ${M("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let ch = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyDCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] * uniforms.filterDims[2] - 1;

        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {
          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);

          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {
            continue;
          }
          let idyD = i32(dyD);

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let dyValue = getDy(batch, idyD, idyR, idyC, ch);
              let maxPosValue = lastIndex - i32(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              let curPosValue = wD * uniforms.filterDims[1] * uniforms.filterDims[2] + wR * uniforms.filterDims[2] + wC;
              let mask = select(0.0, 1.0, maxPosValue == curPosValue);
              dotProd += dyValue * mask;
            }
          }
        }

        setOutputAtIndex(index, dotProd);
      }
    }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ry(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,input:n}=t,a=n,{filterSize:u,strides:c,pad:h,dimRoundingMode:p}=r,d=[1,1,1],m=Ni(a.shape,u,c,d,h,p),x=new _r(m,"max",!0);let y=[{type:"int32",data:[m.strideDepth,m.strideHeight,m.strideWidth]},{type:"int32",data:[m.padInfo.front,m.padInfo.top,m.padInfo.left]},{type:"int32",data:[m.inDepth,m.inHeight,m.inWidth]},{type:"int32",data:[m.effectiveFilterDepth,m.effectiveFilterHeight,m.effectiveFilterWidth]}];const w=e.runWebGPUProgram(x,[a],"int32",y),b=new Iy(m);y=[{type:"int32",data:[m.strideDepth,m.strideHeight,m.strideWidth]},{type:"int32",data:[m.effectiveFilterDepth-1-m.padInfo.front,m.effectiveFilterHeight-1-m.padInfo.top,m.effectiveFilterWidth-1-m.padInfo.left]},{type:"int32",data:[m.effectiveFilterDepth,m.effectiveFilterHeight,m.effectiveFilterWidth]},{type:"int32",data:[m.outDepth]},{type:"int32",data:[m.outHeight]},{type:"int32",data:[m.outWidth]}];const I=e.runWebGPUProgram(b,[o,w],a.dtype,y);return e.disposeData(w.dataId),I}const Py={kernelName:ic,backendName:"webgpu",kernelFunc:Ry};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ay(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,input:n,output:a}=t,u=n;js([n,a],"maxPoolGrad");const{filterSize:c,strides:h,pad:p,dimRoundingMode:d}=r,m=li(u.shape,c,h,1,p,d),x=new oi(m,"max",!0);let y=[{type:"int32",data:[m.strideHeight,m.strideWidth]},{type:"int32",data:[m.padInfo.top,m.padInfo.left]},{type:"int32",data:[m.dilationHeight,m.dilationWidth]},{type:"int32",data:[m.inHeight,m.inWidth]},{type:"int32",data:[m.effectiveFilterHeight,m.effectiveFilterWidth]}];const w=e.runWebGPUProgram(x,[u],"int32",y),b=new ky(m);y=[{type:"int32",data:[m.strideHeight,m.strideWidth]},{type:"int32",data:[m.effectiveFilterHeight-1-m.padInfo.top,m.effectiveFilterWidth-1-m.padInfo.left]},{type:"int32",data:[m.dilationHeight,m.dilationWidth]},{type:"int32",data:[m.effectiveFilterHeight,m.effectiveFilterWidth]},{type:"int32",data:[m.outHeight]},{type:"int32",data:[m.outWidth]}];const I=e.runWebGPUProgram(b,[o,w],u.dtype,y);return e.disposeData(w.dataId),I}const $y={kernelName:rc,backendName:"webgpu",kernelFunc:Ay};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ny(i){const{inputs:t,backend:e,attrs:r}=i,{filterSize:o,strides:n,pad:a,includeBatchInIndex:u}=r,{x:c}=t;ne(c.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${c.shape.length}.`);const h=[1,1];ne(Bs(n,h),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${h}'`);const p=li(c.shape,o,n,h,a),d=[{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.dilationHeight,p.dilationWidth]},{type:"int32",data:[p.inHeight,p.inWidth]},{type:"int32",data:[p.effectiveFilterHeight,p.effectiveFilterWidth]}];let m=new oi(p,"max",!1);const x=e.runWebGPUProgram(m,[c],c.dtype,d);m=new oi(p,"max",!0,!0,u);const y=e.runWebGPUProgram(m,[c],"int32",d);return[x,y]}const Dy={kernelName:oc,backendName:"webgpu",kernelFunc:Ny};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ty(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:n,keepDims:a}=r;return xt(o,n,a,"min",e)}const Fy={kernelName:sc,backendName:"webgpu",kernelFunc:Ty};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ey=ye({opType:K.MIN,cpuKernelImpl:qp}),_y={kernelName:nc,backendName:"webgpu",kernelFunc:Ey};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zy{constructor(t,e,r){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.map((o,n)=>o[0]+t[n]+o[1]),this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=t,e.map((o,n)=>{this.uniforms+=` pad${n} : vec2<i32>,`}),this.offset=r==="reflect"?0:1,this.shaderKey=`mirrorPad_${r}`}getUserCode(){const t=this.xShape.length,e=this.xShape.map((h,p)=>`uniforms.pad${p}[0]`).join(","),r=this.xShape.map((h,p)=>`uniforms.pad${p}[0] + uniforms.xShape${t>1?`[${p}]`:""}`).join(","),o=t===1?"start":"start[i]",n=t===1?"end":"end[i]",a=t===1?"outC":"outC[i]",u=de(t),c=t>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,t):"coords";return`
      ${M("index")} {
        if (index < uniforms.size) {
          let start = ${u}(${e});
          let end = ${u}(${r});
          var outC = getCoordsFromIndex(index);
          for (var i = 0; i < ${t}; i = i + 1) {
            if (${a} < ${o}) {
              ${a} = ${o} * 2 - ${a} - ${this.offset};
            } else if(${a} >= ${n}) {
              ${a} = (${n} - 1) * 2 - ${a} + ${this.offset};
            }
          }
          let coords = outC - start;
          setOutputAtIndex(index, getX(${c}));
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const My={kernelName:ac,backendName:"webgpu",kernelFunc:({inputs:i,attrs:t,backend:e})=>{const{x:r}=i,{paddings:o,mode:n}=t,a=e,u=o.map(p=>({type:"int32",data:[p[0],p[1]]})),c=new zy(r.shape,o,n);return a.runWebGPUProgram(c,[r],r.dtype,u)}};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ly=ye({opType:K.MOD}),Oy={kernelName:uc,backendName:"webgpu",kernelFunc:Ly};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class By{constructor(t,e){this.variableNames=["probs"],this.outputShape=[],this.uniforms="seed : f32, numOutcomes: i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,e],this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="multinomial"}getUserCode(){return`
    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    fn random (seed : f32, resultUV : vec2<f32>) -> f32 {
      let HASHSCALE1 = 443.8975;
      let p = resultUV * seed;
      var p3  = fract(vec3<f32>(p.xyx) * HASHSCALE1);
      p3 = p3 + dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${M("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let batch = coords[0];

        let resUV = vec2<f32>(f32(coords[1]) / f32(uniforms.outShape[1]),
            f32(coords[0]) / f32(uniforms.outShape[0]));
        let r = random(uniforms.seed, resUV);
        var cdf = 0.0;
        for (var i = 0; i < uniforms.numOutcomes - 1; i = i + 1) {
          cdf = cdf + getProbs(batch, i);

          if (r < cdf) {
            setOutputAtIndexI32(index, i);
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutputAtIndexI32(index, uniforms.numOutcomes - 1);
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Wy{constructor(t){this.variableNames=["logits"],this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=[this.outputShape[0],1,1],this.outputShape[1]>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.shaderKey="softmax"}getUserCode(){return`
    var<workgroup> buf : array<f32, ${this.workgroupSize[0]}>;
    var<workgroup> rowMaxShared : f32;
    var<workgroup> rowSumShared : f32;
    const blockSize = ${this.workgroupSize[0]};
    ${M("index")} {
      let row = index / blockSize;
      let tid = i32(localId.x);
      let cols = uniforms.outShape[1];

      var threadMax = -3.402823e+38f;
      for (var col = tid; col < cols; col += blockSize) {
        let value = getLogits(row, col);
        threadMax = max(threadMax, value);
      }
      if (tid < cols) {
        buf[tid] = threadMax;
      }
      workgroupBarrier();

      var reduceSize = min(cols, blockSize);
      for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
        reduceSize = currSize + (reduceSize & 1);
        if (tid < currSize) {
          buf[tid] = max(buf[tid], buf[tid + reduceSize]);
        }
        workgroupBarrier();
      }

      if (tid == 0) {
        rowMaxShared = buf[0];
      }
      workgroupBarrier();

      var threadSum = 0.0;
      for (var col = tid; col < cols; col += blockSize) {
        let subExp = exp(getLogits(row, col) - rowMaxShared);
        threadSum += subExp;
      }
      buf[tid] = threadSum;
      workgroupBarrier();

      for (var currSize = blockSize >> 1;  currSize > 0; currSize = currSize >> 1) {
        if (tid < currSize) {
          buf[tid] = buf[tid] + buf[tid + currSize];
        }
        workgroupBarrier();
      }

      if (tid == 0) {
        rowSumShared = buf[0];
      }
      workgroupBarrier();

      for (var col = tid; col < cols; col += blockSize) {
        let value = exp(getLogits(row, col) - rowMaxShared) / rowSumShared;
        setOutputAtCoords(row, col, value);
      }
  }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dn(i){const{inputs:t,backend:e,attrs:r}=i,{logits:o}=t,{dim:n}=r,a=H({inputs:{x:o},backend:e,attrs:{shape:[J(o.shape)/o.shape[n],o.shape[n]]}}),u=new Wy(a.shape),c=e.runWebGPUProgram(u,[a],o.dtype),h=H({inputs:{x:c},backend:e,attrs:{shape:o.shape}});return e.disposeData(a.dataId),e.disposeData(c.dataId),h}const Uy={kernelName:lc,backendName:"webgpu",kernelFunc:dn};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vy(i){const{inputs:t,backend:e,attrs:r}=i,{logits:o}=t,{numSamples:n,seed:a,normalized:u}=r,c=u?o:dn({inputs:{logits:o},backend:e,attrs:{dim:o.shape.length-1}}),h=c.shape[0],p=c.shape[1],d=new By(h,n),m=[{type:"float32",data:[a]},{type:"int32",data:[p]}],x=e.runWebGPUProgram(d,[c],"int32",m);return u||e.disposeData(c.dataId),x}const Gy={kernelName:cc,backendName:"webgpu",kernelFunc:Vy};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hy(i){const{inputs:t,backend:e}=i,{x:r}=t;if(e.shouldExecuteOnCPU([r])){const n=e.tensorMap.get(r.dataId),[a,u]=Zp(n.values,r.shape,r.dtype);return e.makeTensorInfo(u,r.dtype,a)}const o=new Et(r.shape,z.NEG);return e.runWebGPUProgram(o,[r],r.dtype)}const jy={kernelName:hc,backendName:"webgpu",kernelFunc:Hy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xy(i){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:r}=i,{boxes:o,scores:n}=t,{maxOutputSize:a,iouThreshold:u,scoreThreshold:c}=r,h=e.readSync(o.dataId),p=e.readSync(n.dataId),{selectedIndices:d}=pc(h,p,a,u,c);return e.makeTensorInfo([d.length],"int32",new Int32Array(d))}const Ky={kernelName:dc,backendName:"webgpu",kernelFunc:Xy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yy(i){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:r}=i,{boxes:o,scores:n}=t,{maxOutputSize:a,iouThreshold:u,scoreThreshold:c,softNmsSigma:h}=r,p=e.readSync(o.dataId),d=e.readSync(n.dataId),m=a,x=u,y=c,w=h,{selectedIndices:b,selectedScores:I}=mc(p,d,m,x,y,w);return[e.makeTensorInfo([b.length],"int32",new Int32Array(b)),e.makeTensorInfo([I.length],"float32",new Float32Array(I))]}const qy={kernelName:fc,backendName:"webgpu",kernelFunc:Yy};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qy{constructor(t,e){this.variableNames=["x"],this.uniforms="onValue : f32, offValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,e],this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="onehot"}getUserCode(){return`
      ${M("index")} {
        if(index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          setOutputAtIndex(index, mix(uniforms.offValue, uniforms.onValue,
                                      f32(i32(round(getX(coords.x))) == coords.y)));
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zy(i){const{inputs:t,backend:e,attrs:r}=i,{indices:o}=t,{dtype:n,depth:a,onValue:u,offValue:c}=r,h=J(o.shape),p=new Qy(h,a),d=H({inputs:{x:o},backend:e,attrs:{shape:[h]}}),m=[{type:"float32",data:[u]},{type:"float32",data:[c]}],x=e.runWebGPUProgram(p,[d],n,m);e.disposeData(d.dataId);const y=[...o.shape,a],w=H({inputs:{x},backend:e,attrs:{shape:y}});return e.disposeData(x.dataId),w}const Jy={kernelName:gc,backendName:"webgpu",kernelFunc:Zy};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ai(i){const{inputs:t,backend:e}=i,{x:r}=t;if(r.dtype==="complex64"){const o=hi({inputs:{input:r},backend:e}),n=Ai({inputs:{x:o},backend:e}),a=Ei({inputs:{input:r},backend:e}),u=Ai({inputs:{x:a},backend:e}),c=gt({inputs:{real:n,imag:u},backend:e});return e.disposeData(o.dataId),e.disposeData(n.dataId),e.disposeData(a.dataId),e.disposeData(u.dataId),c}else return $e({attrs:{shape:r.shape,dtype:r.dtype,value:r.dtype==="string"?"":0},backend:e})}const e2={kernelName:xc,backendName:"webgpu",kernelFunc:Ai};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pn(i){const{inputs:t,backend:e}=i,{x:r}=t;if(r.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(r.dtype==="complex64"){const o=hi({inputs:{input:r},backend:e}),n=pn({inputs:{x:o},backend:e}),a=Ei({inputs:{input:r},backend:e}),u=Ai({inputs:{x:a},backend:e}),c=gt({inputs:{real:n,imag:u},backend:e});return e.disposeData(o.dataId),e.disposeData(n.dataId),e.disposeData(a.dataId),e.disposeData(u.dataId),c}else return $e({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:e})}const t2={kernelName:yc,backendName:"webgpu",kernelFunc:pn};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i2(i){const{inputs:t,backend:e,attrs:r}=i,{axis:o}=r;if(t.length===1)return vr({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const n=t[0].shape,a=t[0].dtype;t.forEach(p=>{vc(n,p.shape,"All tensors passed to stack must have matching shapes"),ne(a===p.dtype,()=>"All tensors passed to stack must have matching dtypes")});const u=[],c=t.map(p=>{const d=vr({inputs:{input:p},backend:e,attrs:{dim:o}});return u.push(d),d}),h=tn({inputs:c,backend:e,attrs:{axis:o}});return u.forEach(p=>e.disposeData(p.dataId)),h}const r2={kernelName:wc,backendName:"webgpu",kernelFunc:i2};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fn(i,t=!1){const e=i.length,r=de(e),o=i.map((d,m)=>`uniforms.pad${m}[0]`).join(","),n=i.map((d,m)=>`uniforms.pad${m}[0] + uniforms.xShape${e>1?`[${m}]`:""}`).join(","),a=e>1?`${r}(${o})`:`${o}`,u=e>1?`${r}(${n})`:`${n}`,c=e>1?"any(paddedCoords < start)":"paddedCoords < start",h=e>1?"any(paddedCoords >= end)":"paddedCoords >= end",p=e>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,e):"coords";return`
        let start = ${a};
        let end = ${u};
        if (${c} || ${h}) {
          setOutputAtIndex(index, ${t?0:"uniforms.constantValue"});
        } else {
          let coords = paddedCoords - start;
          setOutputAtIndex(index, getX(${p}));
        }
  `}class o2{constructor(t,e){this.variableNames=["x"],this.uniforms="constantValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.map((r,o)=>r[0]+t[o]+r[1]),this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),e.map((r,o)=>{this.uniforms+=` pad${o} : vec2<i32>,`}),this.xShape=t,this.shaderKey="pad"}getUserCode(){return`
      ${M("index")} {
        if (index < uniforms.size) {
          let paddedCoords = getCoordsFromIndex(index);
          ${fn(this.xShape)}
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s2=i=>{const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{paddings:n,constantValue:a}=r;if(n.every(h=>Dt(h,[0,0])))return Ee({inputs:{x:o},backend:e});if(J(o.shape)===0){const h=n.map((p,d)=>p[0]+o.shape[d]+p[1]);return $e({backend:e,attrs:{shape:h,value:a,dtype:o.dtype}})}const u=[{type:"float32",data:[a]}];n.map(h=>u.push({type:"int32",data:[h[0],h[1]]}));const c=new o2(o.shape,n);return e.runWebGPUProgram(c,[o],o.dtype,u)},n2={kernelName:Cc,backendName:"webgpu",kernelFunc:s2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const a2=ye({opType:K.POW}),u2={kernelName:bc,backendName:"webgpu",kernelFunc:a2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l2(i){const{inputs:t,backend:e}=i,{x:r,alpha:o}=t,n=new Ri(K.PRELU,r.shape,o.shape);return e.runWebGPUProgram(n,[r,o],"float32")}const c2={kernelName:Sc,backendName:"webgpu",kernelFunc:l2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h2(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:n,keepDims:a}=r;return xt(o,n,a,"prod",e)}const d2={kernelName:kc,backendName:"webgpu",kernelFunc:h2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p2=i=>{const{backend:t,attrs:e}=i,{start:r,stop:o,step:n,dtype:a}=e,u=tf(r,o,n,a);return t.makeTensorInfo([u.length],a,u)},f2={kernelName:Ic,backendName:"webgpu",kernelFunc:p2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const m2=ye({opType:K.DIV}),g2={kernelName:Rc,backendName:"webgpu",kernelFunc:m2};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const x2=se({opType:z.RECIPROCAL}),y2={kernelName:Pc,backendName:"webgpu",kernelFunc:x2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const w2=se({opType:z.RELU}),v2={kernelName:Ac,backendName:"webgpu",kernelFunc:w2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const C2=se({opType:z.RELU6}),b2={kernelName:$c,backendName:"webgpu",kernelFunc:C2};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class S2{constructor(t,e,r){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, halfPixelCenters : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t[0],e,r,t[3]],this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="resizeBilinear"}getUserCode(){return`
      ${M("index")} {
        if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let d = coords[3];
          let rc = coords.yz;

          let effectiveInSize = vec2<f32>(
            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveOutSize = vec2<f32>(
            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveInputOverOutputRatioRC =
              effectiveInSize / effectiveOutSize;

          // Fractional source index
          let sourceFracIndexRC =
            (vec2<f32>(rc) + vec2<f32>(uniforms.halfPixelCenters)) *
            effectiveInputOverOutputRatioRC - vec2<f32>(uniforms.halfPixelCenters);

          // Compute the four integer indices.
          let sourceFloorRC = vec2<i32>(sourceFracIndexRC);
          let sourceCeilRC = vec2<i32>(
            min(vec2<f32>(uniforms.xShape.yz) - vec2<f32>(1.0), ceil(sourceFracIndexRC)));

          let topLeft = getX(b, sourceFloorRC.x, sourceFloorRC.y, d);
          let bottomLeft = getX(b, sourceCeilRC.x, sourceFloorRC.y, d);
          let topRight = getX(b, sourceFloorRC.x, sourceCeilRC.y, d);
          let bottomRight = getX(b, sourceCeilRC.x, sourceCeilRC.y, d);

          let fracRC = sourceFracIndexRC - vec2<f32>(sourceFloorRC);

          let top = topLeft + (topRight - topLeft) * fracRC.y;
          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
          let newValue = top + (bottom - top) * fracRC.x;

          setOutputAtIndex(index, newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k2(i){const{inputs:t,backend:e,attrs:r}=i,{images:o}=t,{alignCorners:n,size:a,halfPixelCenters:u}=r,[c,h]=a,p=n&&c>1?1:0,d=n&&h>1?1:0,x=[{type:"float32",data:[p,d]},{type:"float32",data:[u?.5:0]}],y=new S2(o.shape,c,h);return e.runWebGPUProgram(y,[o],"float32",x)}const I2={kernelName:Nc,backendName:"webgpu",kernelFunc:k2};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class R2{constructor(t,e){this.variableNames=["dy"],this.uniforms=`effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, heightScale : f32, widthScale : f32,
       invHeightScale : f32, invWidthScale : f32, winHeight : i32, winWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=e,this.shaderKey=`resizeBilinearBackprop_${e}`}getUserCode(){return`
      ${M("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let b = coords[0];
          let d = coords[3];
          let r = coords[1];
          let c = coords[2];

          var accumulator = 0.0;

          // Compute bounds for where in dy we will look
          let startRLerp = floor(f32(r) * uniforms.invHeightScale);
          let startDyR = i32(startRLerp - f32(uniforms.winHeight / 2));

          let startCLerp = floor(f32(c) * uniforms.invWidthScale);
          let startDyC = i32(startCLerp - f32(uniforms.winWidth / 2));

          // Loop over dy
          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {
            let dyR = startDyR + dyROffset;

            // Guard against the window exceeding the bounds of dy
            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {
              continue;
            }

            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {
              let dyC = startDyC + dyCOffset;

              // Guard against the window exceeding the bounds of dy
              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {
                continue;
              }

              let dxR = f32(dyR) * uniforms.heightScale;
              let topDxRIndex = i32(floor(dxR));
              let bottomDxRIndex = i32(min(ceil(dxR), f32(uniforms.outShape[1] - 1)));
              let dxRLerp = dxR - f32(topDxRIndex);
              let inverseDxRLerp = 1.0 - dxRLerp;

              let dxC = f32(dyC) * uniforms.widthScale;
              let leftDxCIndex = i32(floor(dxC));
              let rightDxCIndex = i32(min(ceil(dxC), f32(uniforms.outShape[2] - 1)));
              let dxCLerp = dxC - f32(leftDxCIndex);
              let inverseDxCLerp = 1.0 - dxCLerp;

              if (r == topDxRIndex && c == leftDxCIndex) {
                // topLeft
                accumulator +=
                  getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
              }

              if (r == topDxRIndex && c == rightDxCIndex) {
                // topRight
                accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
              }

              if (r == bottomDxRIndex && c == leftDxCIndex) {
                // bottomLeft
                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
              }

              if (r == bottomDxRIndex && c == rightDxCIndex) {
                // bottomRight
                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
              }
            }
          }
          // End loop over dy

          setOutputAtIndex(index, accumulator);
        }
      }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P2(i){const{inputs:t,backend:e,attrs:r}=i,{images:o,dy:n}=t,{alignCorners:a}=r,[,u,c]=o.shape,[,h,p]=n.shape,d=[a&&h>1?u-1:u,a&&p>1?c-1:c],m=[a&&h>1?h-1:h,a&&p>1?p-1:p],x=d[0]/m[0],y=d[1]/m[1],w=1/x,b=1/y,I=Math.ceil(w)*2+2,R=Math.ceil(b)*2+2,P=new R2(o.shape,a),A=[{type:"int32",data:d},{type:"int32",data:m},{type:"float32",data:[x]},{type:"float32",data:[y]},{type:"float32",data:[w]},{type:"float32",data:[b]},{type:"int32",data:[I]},{type:"int32",data:[R]}];return e.runWebGPUProgram(P,[n],n.dtype,A)}const A2={kernelName:Dc,backendName:"webgpu",kernelFunc:P2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $2{constructor(t,e,r,o){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, roundBase : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t[0],e,r,t[3]],this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.halfPixelCenters=o,this.shaderKey=`resizeNearest_${o}`}getUserCode(){let t;return this.halfPixelCenters?t="max((vec2<f32>(rc) + vec2<f32>(0.5)) * effectiveInputOverOutputRatioRC, vec2<f32>(0.0))":t="vec2<f32>(rc) * effectiveInputOverOutputRatioRC",`
      ${M("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let d = coords[3];
          let rc = coords.yz;

          let effectiveInSize = vec2<f32>(
            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveOutSize = vec2<f32>(
            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveInputOverOutputRatioRC =
              effectiveInSize / effectiveOutSize;

          // Fractional source index
          let sourceFracIndexRC = ${t};

          // Compute the coordinators of nearest neighbor point.
          let inputShapeRC = vec2<f32>(f32(uniforms.xShape.y), f32(uniforms.xShape.z));
          let sourceNearestRC = vec2<i32>(
            min(inputShapeRC - 1.0, floor(sourceFracIndexRC + uniforms.roundBase)));
          let newValue = getX(b, sourceNearestRC.x, sourceNearestRC.y, d);

          setOutputAtIndex(index, newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N2(i){const{inputs:t,backend:e,attrs:r}=i,{images:o}=t,{alignCorners:n,halfPixelCenters:a,size:u}=r,[c,h]=u,p=n&&c>1?1:0,d=n&&h>1?1:0,x=[{type:"float32",data:[p,d]},{type:"float32",data:[n?.5:0]}],y=new $2(o.shape,c,h,a);return e.runWebGPUProgram(y,[o],o.dtype,x)}const D2={kernelName:Tc,backendName:"webgpu",kernelFunc:N2};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class T2{constructor(t,e){this.variableNames=["dy"],this.uniforms=`effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, invHeightScale : f32, invWidthScale : f32,
       winHeight : i32, winWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=e,this.shaderKey=`resizeNearestNeigborBackprop_${e}`}getUserCode(){return`
      ${M("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let b = coords[0];
          let d = coords[3];
          let r = coords[1];
          let c = coords[2];

          var accumulator = 0.0;

          // Compute bounds for where in dy we will look
          let startRLerp = floor(f32(r) * uniforms.invHeightScale);
          let startDyR = i32(floor(startRLerp - f32(uniforms.winHeight / 2)));

          let startCLerp = floor(f32(c) * uniforms.invWidthScale);
          let startDyC = i32(floor(startCLerp - f32(uniforms.winWidth / 2)));

          // Loop over dy
          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {
            let dyR = startDyR + dyROffset;

            // Guard against the window exceeding the bounds of dy
            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {
              continue;
            }

            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {
              let dyC = startDyC + dyCOffset;

              // Guard against the window exceeding the bounds of dy
              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {
                continue;
              }

              let sourceFracRow = f32(uniforms.effectiveXSize[0]) *
                  (f32(dyR) / f32(uniforms.effectiveYSize[0]));

              let sourceFracCol = f32(uniforms.effectiveXSize[1]) *
                  (f32(dyC) / f32(uniforms.effectiveYSize[1]));

              let sourceNearestRow =
                  i32(min(f32(uniforms.outShape[1] - 1),
                  ${this.alignCorners?"floor(sourceFracRow + 0.5)":"floor(sourceFracRow)"}));

              let sourceNearestCol =
                  i32(min(f32(uniforms.outShape[2] - 1),
                  ${this.alignCorners?"floor(sourceFracCol + 0.5)":"floor(sourceFracCol)"}));

              if (r == sourceNearestRow && c == sourceNearestCol) {
                accumulator += getDy(b, dyR, dyC, d);
              }
            }
          }
          // End loop over dy

          setOutputAtIndex(index, accumulator);
        }
      }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F2(i){const{inputs:t,backend:e,attrs:r}=i,{images:o,dy:n}=t,{alignCorners:a}=r,[,u,c]=o.shape,[,h,p]=n.shape,d=[a&&h>1?u-1:u,a&&p>1?c-1:c],m=[a&&h>1?h-1:h,a&&p>1?p-1:p],x=d[0]/m[0],y=d[1]/m[1],w=1/x,b=1/y,I=Math.ceil(w)*2+2,R=Math.ceil(b)*2+2,P=new T2(o.shape,a),A=[{type:"int32",data:d},{type:"int32",data:m},{type:"float32",data:[w]},{type:"float32",data:[b]},{type:"int32",data:[I]},{type:"int32",data:[R]}];return e.runWebGPUProgram(P,[n],n.dtype,A)}const E2={kernelName:Fc,backendName:"webgpu",kernelFunc:F2};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _2{constructor(t){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=" axis : vec4<i32>,",this.shaderKey="reverse"}getUserCode(){return`
      
      // Using uniform variables as judging conditions, so the function has
      // coherent execution within all threads.
      fn getReverseCoords(coords : vec4<i32>) -> vec4<i32> {
        var reverseCoords = coords;
        if (uniforms.axis[0] == 1) {
          reverseCoords[0] = uniforms.xShape[0] - coords[0] - 1;
        }
        if (uniforms.axis[1] == 1) {
          reverseCoords[1] = uniforms.xShape[1] - coords[1] - 1;
        }
        if (uniforms.axis[2] == 1) {
          reverseCoords[2] = uniforms.xShape[2] - coords[2] - 1;
        }
        if (uniforms.axis[3] == 1) {
          reverseCoords[3] = uniforms.xShape[3] - coords[3] - 1;
        }

        return reverseCoords;
      }
    
      ${M("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let reverseCoords = getReverseCoords(coords);
          setOutputAtIndex(index, getX(reverseCoords[0],
              reverseCoords[1], reverseCoords[2], reverseCoords[3]));
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z2(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{dims:n}=r,a=o.shape.length;if(a===0)return Ee({inputs:{x:o},backend:e});const u=o.shape,c=[1,1,1,1];u.forEach((b,I)=>{const R=I+4-a;c[R]=b});const h=ft(n,o.shape),p=[0,0,0,0];h.forEach(b=>{const I=b+4-a;p[I]=1});const d=[{type:"int32",data:p}],m=H({inputs:{x:o},backend:e,attrs:{shape:c}}),x=new _2(c),y=e.runWebGPUProgram(x,[m],m.dtype,d);e.disposeData(m.dataId);const w=H({inputs:{x:y},backend:e,attrs:{shape:u}});return e.disposeData(y.dataId),w}const M2={kernelName:Ec,backendName:"webgpu",kernelFunc:z2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class L2{constructor(t,e){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=`centerX : f32, centerY : f32, sinRadians : f32,
          cosRadians : f32,`,this.shaderKey="rotate",this.outputShape=t,typeof e=="number"?(this.uniforms+=" fillValue : f32,",this.fillSnippet="var outputValue = uniforms.fillValue;",this.shaderKey+="_float"):(this.uniforms+=" fillValue : vec3<f32>,",this.fillSnippet="var outputValue = uniforms.fillValue[coords[3]];",this.shaderKey+="_vec3")}getUserCode(){return`
        ${M("index")} {
          if (index < uniforms.size) {
            let coords = getCoordsFromIndex(index);
            let coordXFloat = (f32(coords[2]) - uniforms.centerX) *
                uniforms.cosRadians - (f32(coords[1]) - uniforms.centerY) *
                uniforms.sinRadians;
            let coordYFloat = (f32(coords[2]) - uniforms.centerX) *
                uniforms.sinRadians + (f32(coords[1]) - uniforms.centerY) *
                uniforms.cosRadians;
            let coordX = i32(round(coordXFloat + uniforms.centerX));
            let coordY = i32(round(coordYFloat + uniforms.centerY));
            ${this.fillSnippet}
            if(coordX >= 0 && coordX < uniforms.xShape[2] && coordY >= 0 &&
                coordY < uniforms.xShape[1]) {
              outputValue = getX(coords[0], coordY, coordX, coords[3]);
            }
            setOutputAtIndex(index, outputValue);
          }
        }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O2={kernelName:_c,backendName:"webgpu",kernelFunc:({inputs:i,attrs:t,backend:e})=>{const{image:r}=i,{radians:o,fillValue:n,center:a}=t,u=e,c=new L2(r.shape,n),[h,p]=zc(a,r.shape[1],r.shape[2]),d=[{type:"float32",data:[h]},{type:"float32",data:[p]},{type:"float32",data:[Math.sin(o)]},{type:"float32",data:[Math.cos(o)]}];return typeof n=="number"?d.push({type:"float32",data:[Number.parseFloat(n.toFixed(2))]}):d.push({type:"float32",data:n}),u.runWebGPUProgram(c,[r],r.dtype,d)}};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B2=se({opType:z.ROUND}),W2={kernelName:Mc,backendName:"webgpu",kernelFunc:B2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U2=se({opType:z.RSQRT,cpuKernelImpl:rf}),V2={kernelName:Lc,backendName:"webgpu",kernelFunc:U2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qt{constructor(t,e,r,o,n,a,u,c=!0){this.variableNames=["updates","indices"],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=a,this.type=u,this.sumDupeIndices=c,this.dispatchLayout=U(t),this.dispatch=L(this.dispatchLayout,t,this.workgroupSize),this.sliceDimGreaterThanOne=e>1,this.shaderKey=`scatter_${r}_${o}_${this.sliceDimGreaterThanOne}_${u}_${c}_${n.length}`;const h=de(n.length);this.uniforms=`sliceDim : i32, strides: ${h}, updatesSize: i32,`,this.updatesRank=o,this.indicesRank=r}getUserCode(){let t="";this.indicesRank===1?t="coords[0]":this.indicesRank===2&&(t="coords[0], j");const e=`getIndices(${t})`,r=this.sliceDimGreaterThanOne?"uniforms.strides[j]":"uniforms.strides";let o="",n="";this.dispatchLayout.x.length===1?(o="flattenedIndex",n=`
      fn getUpdatesCoordsFromFlatIndex(index : i32) -> i32 {
        return index;
      }
      `):this.dispatchLayout.x.length===2&&(o="vec2<i32>(flattenedIndex, coords[1])",n=`
      fn getUpdatesCoordsFromFlatIndex(index : i32) -> vec2<i32> {
        // N.B. |updates| could be a scalar tensor, conceptually representing a
        // 2D tensor with all values equal to that. By design, its size must be
        // the same as |outShape[1]| in one dimension, and |indicesShape[0]|
        // gives the other.
        let sliceSize = uniforms.outShape[1];
        let d0 = index / sliceSize;
        let d1 = index - d0 * sliceSize;
        return vec2<i32>(d0, d1);
      }
      `);const u=`getUpdates(${Array.from({length:this.updatesRank},(h,p)=>`coords[${p}]`).join(", ")})`;return`
    ${n}
      ${M("index")} {
        if (index < uniforms.updatesSize) {
          let coords = getUpdatesCoordsFromFlatIndex(index);
          var flattenedIndex = 0;
          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
            let indexInside = i32(round(${e}));
            flattenedIndex = flattenedIndex + indexInside * ${r};
          }
          let updateValue =
              ${ct(this.type)}(${u});
          let flatIndex = getOutputIndexFromCoords(${o});

          ${this.sumDupeIndices?ot("&result[flatIndex]","updateValue",this.type):"atomicStore(&result[flatIndex], bitcast<i32>(updateValue));"}
        }
      }`}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G2(i){const{inputs:t,backend:e,attrs:r}=i,{indices:o,updates:n}=t,{shape:a}=r,{sliceRank:u,numUpdates:c,sliceSize:h,strides:p,outputSize:d}=Nr(n,o,a),m=[d/h,h];if(d===0)return e.makeTensorInfo(a,o.dtype);const x=H({inputs:{x:o},backend:e,attrs:{shape:[c,u]}}),y=H({inputs:{x:n},backend:e,attrs:{shape:[c,h]}}),w=y.dtype,b=$e({backend:e,attrs:{shape:m,value:0,dtype:w}}),I=J(y.shape),R=[{type:"int32",data:[u]},{type:"int32",data:p},{type:"int32",data:[I]}],P=new Qt(y.shape,u,x.shape.length,y.shape.length,p,m,w),A=e.runWebGPUProgram(P,[y,x],w,R,b),N=H({inputs:{x:A},backend:e,attrs:{shape:a}});return e.disposeData(x.dataId),e.disposeData(y.dataId),e.disposeData(A.dataId),N}const H2={kernelName:Oc,backendName:"webgpu",kernelFunc:G2};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class j2{constructor(t,e){this.outputShape=[],this.variableNames=["sortedSequence","values"],this.uniforms="numInputs : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.side=e,this.shaderKey=`search_sorted_${e}`}getUserCode(){return`
      fn findBound(batch: i32, value: f32) -> i32 {
        var left = i32(0);
        var right = uniforms.numInputs;
        while (left < right) {
          var mid = (left + right) / 2;
          if (getSortedSequence(batch, mid) ${this.side==="left"?"<":"<="} value) {
            left = mid + 1;
          } else {
            right = mid;
          }
        }
        return right;
      }

      ${M("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let value = getValuesByOutputIndex(index);
          setOutputAtIndexI32(index, findBound(coords[0], value));
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X2(i){const{inputs:t,backend:e,attrs:r}=i,{sortedSequence:o,values:n}=t,{side:a}=r,u=new j2([n.shape[0],n.shape[1]],a),c=[{type:"int32",data:[o.shape[1]]}];return e.runWebGPUProgram(u,[o,n],"int32",c)}const K2={kernelName:Bc,backendName:"webgpu",kernelFunc:X2};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Y2{constructor(t,e,r){this.variableNames=["c","a","b"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.cRank=t,this.rank=r,this.shaderKey="select"}getUserCode(){let t,e;if(this.rank>4)throw Error(`Where for rank ${this.rank} is not yet supported`);if(this.rank===1)e="resRC",t="resRC";else{const o=["resRC.x","resRC.y","resRC.z","resRC.w"],n=[],a=[];for(let u=0;u<this.outputShape.length;u++)a.push(`${o[u]}`),u<this.cRank&&n.push(`${o[u]}`);t=n.join(),e=a.join()}return`
      ${M("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          let cVal = getC(${t});
          if (cVal >= 1.0) {
            setOutputAtIndex(index, getA(${e}));
          } else {
            setOutputAtIndex(index, getB(${e}));
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q2(i){const{inputs:t,backend:e}=i,{condition:r,t:o,e:n}=t,a=new Y2(r.shape.length,o.shape,o.shape.length);return e.runWebGPUProgram(a,[r,o,n],Jt(o.dtype,n.dtype))}const Q2={kernelName:Wc,backendName:"webgpu",kernelFunc:q2};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z2=se({opType:z.SELU}),J2={kernelName:Uc,backendName:"webgpu",kernelFunc:Z2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ew=se({opType:z.SIGMOID}),tw={kernelName:Vc,backendName:"webgpu",kernelFunc:ew};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iw=se({opType:z.SIGN}),rw={kernelName:Gc,backendName:"webgpu",kernelFunc:iw};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ow=se({opType:z.SIN}),sw={kernelName:Hc,backendName:"webgpu",kernelFunc:ow};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nw=se({opType:z.SINH}),aw={kernelName:jc,backendName:"webgpu",kernelFunc:nw};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uw=se({opType:z.SOFTPLUS}),lw={kernelName:Xc,backendName:"webgpu",kernelFunc:uw};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cw{constructor(t,e,r,o,n,a){this.variableNames=["x"],this.outputShape=[],this.uniforms="",this.workgroupSize=[64,1,1],this.size=!0;const u=new Array(o.length);for(let c=0;c<u.length;c++)u[c]=o[n[c]];this.outputShape=u,this.newDim=n,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=t,this.paddedXShape=e,this.uniforms+=`reshapedPaddedXShape : ${de(o.length)}, paddedXShapeStrides : ${de(a)}, `,r.map((c,h)=>{this.uniforms+=` pad${h} : vec2<i32>,`}),this.shaderKey=`spaceToBatchND_${n}`}getUserCode(){const t=de(this.outputShape.length),e=Ks(this.newDim);return`
      ${Ii(this.paddedXShape,"PaddedX")}
      ${M("index")} {
        if(index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let switchedIndex = getIndexFromCoords${this.outputShape.length}D(${t}(${e}), uniforms.reshapedPaddedXShape);
          let paddedCoords = getPaddedXCoordsFromIndex(switchedIndex);
          ${fn(this.xShape,!0)}
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hw=i=>{const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{blockShape:n,paddings:a}=r;ne(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGPU backend not implemented yet");const u=n.reduce((R,P)=>R*P),c=[[0,0]];c.push(...a);for(let R=1+n.length;R<o.shape.length;++R)c.push([0,0]);const h=c.map((R,P)=>R[0]+o.shape[P]+R[1]),p=_s(h,n,u,!1),d=zs(p.length,n.length,!1),m=Ms(h,n,u,!1),x=Zt(h),y=new cw(o.shape,h,c,p,d,x.length),w=[{type:"int32",data:p},{type:"int32",data:x}];c.map(R=>w.push({type:"int32",data:[R[0],R[1]]}));const b=e.runWebGPUProgram(y,[o],o.dtype,w),I=H({inputs:{x:b},backend:e,attrs:{shape:m}});return e.disposeData(b.dataId),I},dw={kernelName:Kc,backendName:"webgpu",kernelFunc:hw};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class pw{constructor(t,e,r){this.variableNames=["input","indices","segmentIds"],this.outputShape=[],this.uniforms="segmentSize : i32, sparseSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t,this.type=r,this.dispatchLayout=U([e]),this.dispatch=L(this.dispatchLayout,[e],this.workgroupSize),this.shaderKey="sparseSegmentSum"}getUserCode(){return`
    ${M("index")} {
      if (index < uniforms.sparseSize) {
        let indexInSegmentIds = index / uniforms.segmentSize;
        let indexInSegment = index % uniforms.segmentSize;
        let indexInInput = indices[indexInSegmentIds];
        let segmentId = segmentIds[indexInSegmentIds];

        let value = input[indexInInput * uniforms.segmentSize + indexInSegment];
        let outIndex = segmentId * uniforms.segmentSize + indexInSegment;
        ${ot("&result[outIndex]","value",this.type)}
      }
    }
  `}}class fw{constructor(t,e){this.variableNames=["segmentIds"],this.outputShape=[],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=[t],this.dispatchLayout=U(e),this.dispatch=L(this.dispatchLayout,e,this.workgroupSize),this.shaderKey="sparseSegmentIdCountProgram"}getUserCode(){return`
    ${M("index")} {
      if (index < uniforms.segmentIdsShape) {
        let segmentId = segmentIds[index];
        ${ot("&result[segmentId]","1","int32")}
      }
    }
  `}}class mw{constructor(t,e){this.variableNames=["segmentSum","sameSegmentIdCount"],this.outputShape=[],this.uniforms="segmentSize : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.type=e,this.dispatchLayout=U(t),this.dispatch=L(this.dispatchLayout,t,this.workgroupSize),this.shaderKey="sparseSegmentMean"}getUserCode(){return`
    ${M("index")} {
      if (index < uniforms.size) {
        let segmentId = index / uniforms.segmentSize;
        let count = sameSegmentIdCount[segmentId];
        if (count != 0) {
          ${this.type==="float32"?"setOutputAtIndex(index, segmentSum[index] / f32(count));":"setOutputAtIndexI32(index, segmentSum[index] / count);"}
        }
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mn(i,t,e,r=!1,o){const a=J(i.shape)/i.shape[0],u=i.dtype,c=J(t.shape),h=o.readSync(e.dataId),d=c>0?h[c-1]+1:0;let m;const x=i.shape.slice();x[0]=d;const y=c*a,w=$e({backend:o,attrs:{shape:x,value:0,dtype:u}});m=new pw(x,y,u);let b=[{type:"int32",data:[a]},{type:"int32",data:[y]}];const I=o.runWebGPUProgram(m,[i,t,e],u,b,w);if(r)return I;const R=$e({backend:o,attrs:{shape:[d],value:0,dtype:"int32"}});m=new fw(d,e.shape);const P=o.runWebGPUProgram(m,[e],"int32",null,R),A=$e({backend:o,attrs:{shape:x,value:0,dtype:u}});m=new mw(x,u),b=[{type:"int32",data:[a]}];const N=o.runWebGPUProgram(m,[I,P],u,b,A);return o.disposeData(I.dataId),o.disposeData(P.dataId),N}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gw(i){const{inputs:t,backend:e}=i,{data:r,indices:o,segmentIds:n}=t;return mn(r,o,n,!1,e)}const xw={kernelName:Yc,backendName:"webgpu",kernelFunc:gw};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yw(i){const{inputs:t,backend:e}=i,{data:r,indices:o,segmentIds:n}=t;return mn(r,o,n,!0,e)}const ww={kernelName:qc,backendName:"webgpu",kernelFunc:yw};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vw{constructor(t,e){this.variableNames=["A"],this.workgroupSize=[64,1,1],this.size=!0;const r=new Array(t.length);for(let o=0;o<r.length;o++)r[o]=t[o]*e[o];this.outputShape=r,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.rank=this.outputShape.length,this.shaderKey="tile"}getUserCode(){const t=Cw(this.rank,"uniforms.");return`
      ${M("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          setOutputAtIndex(index, getA(${t}));
        }
      }
    `}}function Cw(i,t=""){if(i>=5)throw Error(`Tile for rank ${i} is not yet supported`);if(i===1)return`(resRC % ${t}aShape)`;const e=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[];for(let o=0;o<i;o++)r.push(`(${e[o]} % ${t}aShape[${o}])`);return r.join()}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zr(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{reps:n}=r;if(e.shouldExecuteOnCPU([o])||o.dtype==="string"||o.shape.length>=5){const c=e.readSync(o.dataId),h=o.dtype==="string"?c.map(m=>Ir(m)):c,p=Rt(o.shape,o.dtype,h),d=cf(p,n);return e.makeTensorInfo(d.shape,d.dtype,d.values)}const a=new vw(o.shape,n);return e.runWebGPUProgram(a,[o],o.dtype)}const bw={kernelName:Qc,backendName:"webgpu",kernelFunc:zr};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sw(i){const{inputs:t,backend:e,attrs:r}=i,{sparseIndices:o,sparseValues:n,defaultValue:a}=t,{outputShape:u}=r,{sliceRank:c,numUpdates:h,sliceSize:p,strides:d,outputSize:m}=Nr(n,o,u),x=!1;if(n.dtype==="string"){const E=e.bufferSync(o),F=e.bufferSync(n),W=Ir(e.readSync(a.dataId)[0]),B=of(E,F,u,m,p,h,c,d,W,x);return e.makeTensorInfo(u,B.dtype,B.values)}const y=[m/p,p],w=H({inputs:{x:o},backend:e,attrs:{shape:[h,c]}}),b=n.shape.length?H({inputs:{x:n},backend:e,attrs:{shape:[h,p]}}):Ee({inputs:{x:n},backend:e}),I=b.dtype,R=e.makeTensorInfo([],I,Jc(1,I)),P=H({inputs:{x:a},backend:e,attrs:{shape:Array(y.length).fill(1)}}),A=zr({inputs:{x:P},backend:e,attrs:{reps:y}}),N=J([h,p]),D=[{type:"int32",data:[c]},{type:"int32",data:d},{type:"int32",data:[N]}];switch(h){case 0:break;case 1:{const E=new Qt([h,p],c,w.shape.length,b.shape.length,d,y,I,x);e.runWebGPUProgram(E,[b,w],I,D,A)}break;default:{const E=new Qt([h,p],c,w.shape.length,R.shape.length,d,y,I,x);e.runWebGPUProgram(E,[R,w],I,D,A)}{const E=new Qt([h,p],c,w.shape.length,b.shape.length,d,y,I);e.runWebGPUProgram(E,[b,w],I,D,A)}}const T=H({inputs:{x:A},backend:e,attrs:{shape:u}});return e.disposeData(w.dataId),e.disposeData(b.dataId),e.disposeData(P.dataId),e.disposeData(R.dataId),e.disposeData(A.dataId),T}const kw={kernelName:Zc,backendName:"webgpu",kernelFunc:Sw};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iw(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{numOrSizeSplits:n,axis:a}=r,u=ft(a,o.shape)[0],c=th(o,n,u),h=o.shape.length,p=new Array(h).fill(0),d=o.shape.slice();return c.map(m=>{const x=[...d];x[u]=m;const y=_t({inputs:{x:o},backend:e,attrs:{begin:p,size:x}});return p[u]+=m,y})}const Rw={kernelName:eh,backendName:"webgpu",kernelFunc:Iw};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pw=se({opType:z.SQRT}),Aw={kernelName:ih,backendName:"webgpu",kernelFunc:Pw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $w={kernelName:rh,backendName:"webgpu",kernelFunc:({inputs:i,backend:t})=>{const{x:e}=i,r=t,o=new Et(e.shape,z.SQUARE);return r.runWebGPUProgram(o,[e],e.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nw=ye({opType:K.SQUARED_DIFFERENCE}),Dw={kernelName:oh,backendName:"webgpu",kernelFunc:Nw};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tw({inputs:i,attrs:t,backend:e}){const{x:r}=i,o=new Et(r.shape,z.STEP,"stepAlpha : f32,"),n=[{type:"float32",data:[t.alpha]}];return e.runWebGPUProgram(o,[r],r.dtype,n)}const Fw={kernelName:sh,backendName:"webgpu",kernelFunc:Tw};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ew{constructor(t){this.variableNames=["x"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]);const e=de(this.outputShape.length);this.uniforms=`begin : ${e},  strides : ${e}, `,this.shaderKey="stridedSlice"}getUserCode(){const t=this.outputShape.length;let e="";if(t===1)e="coords * uniforms.strides + uniforms.begin";else{let o=0;e=this.outputShape.map((n,a)=>(o++,this.outputShape.length===1?`coords * uniforms.strides[${a}] + uniforms.begin[${a}]`:`coords[${o-1}] * uniforms.strides[${a}] + uniforms.begin[${a}]`)).join(",")}return`
       ${M("index")} {
         if (index < uniforms.size) {
           let coords = getCoordsFromIndex(index);
           setOutputAtIndex(index, getX(${e}));
         }
       }
     `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _w(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{begin:n,end:a,strides:u,beginMask:c,endMask:h,ellipsisMask:p,newAxisMask:d,shrinkAxisMask:m}=r,{finalShapeSparse:x,finalShape:y,isIdentity:w,sliceDim0:b,isSimpleSlice:I,begin:R,end:P,strides:A}=ah(o.shape,n,a,u,c,h,p,d,m);let N;if(w)N=H({inputs:{x:o},backend:e,attrs:{shape:y}});else if(b||I){ne(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const D=uh(R,P,A),T=_t({inputs:{x:o},backend:e,attrs:{begin:R,size:D}});N=H({inputs:{x:T},backend:e,attrs:{shape:y}}),e.disposeData(T.dataId)}else if(e.shouldExecuteOnCPU([o])){const T=e.readSync(o.dataId),E=Rt(o.shape,o.dtype,T),F=af(x,E,A,R);N=e.makeTensorInfo(y,o.dtype,F.values)}else{const T=new Ew(x),E=[{type:"int32",data:R},{type:"int32",data:A}],F=e.runWebGPUProgram(T,[o],o.dtype,E);N=H({inputs:{x:F},backend:e,attrs:{shape:y}}),e.disposeData(F.dataId)}return N}const zw={kernelName:nh,backendName:"webgpu",kernelFunc:_w};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mw(i){const{inputs:t,backend:e,attrs:r}=i,{separator:o,nGramWidths:n,leftPad:a,rightPad:u,padWidth:c,preserveShortSequences:h}=r,{data:p,dataSplits:d}=t,m=e.readSync(p.dataId),x=e.readSync(d.dataId),[y,w]=uf(m,x,o,n,a,u,c,h);return[e.makeTensorInfo([y.length],"string",y),e.makeTensorInfo(d.shape,"int32",w)]}const Lw={kernelName:lh,backendName:"webgpu",kernelFunc:Mw};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ow=ye({opType:K.SUB,cpuKernelImpl:lf,supportsComplex:!0}),Bw={kernelName:ch,backendName:"webgpu",kernelFunc:Ow};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ww=se({opType:z.TAN}),Uw={kernelName:hh,backendName:"webgpu",kernelFunc:Ww};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vw=se({opType:z.TANH}),Gw={kernelName:dh,backendName:"webgpu",kernelFunc:Vw};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hw(i){const{inputs:t,backend:e,attrs:r}=i,{tensor:o,indices:n,updates:a}=t,{sliceRank:u,numUpdates:c,sliceSize:h,strides:p,outputSize:d}=Nr(a,n,o.shape),m=[d/h,h];if(d===0)return e.makeTensorInfo(o.shape,n.dtype);const x=[],y=H({inputs:{x:n},backend:e,attrs:{shape:[c,u]}});x.push(y);const w=H({inputs:{x:a},backend:e,attrs:{shape:[c,h]}});x.push(w);const b=H({inputs:{x:o},backend:e,attrs:{shape:m}});x.push(b);const I=zr({inputs:{x:b},backend:e,attrs:{reps:Array(m.length).fill(1)}}),R=new Qt([c,h],u,y.shape.length,w.shape.length,p,m,o.dtype,!1),P=J([c,h]),A=[{type:"int32",data:[u]},{type:"int32",data:p},{type:"int32",data:[P]}],N=e.runWebGPUProgram(R,[w,y],b.dtype,A,I);x.push(N);const D=H({inputs:{x:N},backend:e,attrs:{shape:o.shape}});return x.forEach(T=>e.disposeData(T.dataId)),D}const jw={kernelName:ph,backendName:"webgpu",kernelFunc:Hw};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xw{constructor(t){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=`inputSize : i32, firstPass : i32, negativeInf : f32,
        dir : i32, inc : i32,`,this.shaderKey="swap"}getUserCode(){return`
        ${M("index")} {
          if (index < uniforms.size) {
            let outC = getCoordsFromIndex(index);
            let batch = outC[0];
            let elemIdx = outC[1];
            // We compare elements pair-wise within a group of size 2 * inc.
            // The comparing rule for each group alternates between ascending
            // and descending. Within each group, we compare each pair at
            // positions i and i+inc. To decide whether an element at position i
            // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
            // inc, it is in the first half of the group, we denote it as x0,
            // otherwise we denote it as x1.
            // For example, as shown in the Bitonic top K paper referenced
            // above, Figure5(a) shows that element[1] is in the second half of
            // the group when group size is 2, but it is in the first half of
            // the group when group size is 4.
            let isFirstInPair = elemIdx % (2 * uniforms.inc) < uniforms.inc;
            var i = 0;
            if (isFirstInPair) {
              i = elemIdx;
            } else {
              i = elemIdx - uniforms.inc;
            }

            var i0 = 0;
            if (uniforms.firstPass == 1) {
              i0 = i;
            } else {
              i0 = i32(getIndices(batch, i));
            }

            var i1 = 0;
            if (uniforms.firstPass == 1) {
              i1 = i + uniforms.inc;
            } else {
              i1 = i32(getIndices(batch, i + uniforms.inc));
            }

            var x0 = f32(0.0);
            var x1 = f32(0.0);
            if (i0 < uniforms.inputSize) {
              x0 = getX(batch, i0);
            } else {
              x0 = uniforms.negativeInf;
            }
            if (i1 < uniforms.inputSize) {
              x1 = getX(batch, i1);
            } else {
              x1 = uniforms.negativeInf;
            }

            let reverse = elemIdx % (2 * uniforms.dir) >= uniforms.dir;
            let isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
            if (reverse == isGreater) {
              // Elements in opposite order of direction
              let iTemp = i0;
              i0 = i1;
              i1 = iTemp;
            }
            if (isFirstInPair) {
              setOutputAtIndex(index, f32(i0));
            } else {
              setOutputAtIndex(index, f32(i1));
            }
          }
        }
      `}}class Kw{constructor(t){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, k : i32,",this.shaderKey="merge"}getUserCode(){return`
        ${M("index")} {
          if (index < uniforms.size) {
            let outC = getCoordsFromIndex(index);
            let batch = outC[0];
            let elemIdx = outC[1];
            // The output size is half of the previous size.
            // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _
            // (k=4), we only need to output the indices at positions |, the
            // indices at positions _ can be thrown away, see Figure5(b) After
            // Phase 2 (Merge phase) in the Bitonic Top K paper referenced
            // above.
            // For example, the paper shows we only need to output the orange
            // bars. The output sequence should look like this | | | | | | | |.
            // Because the sequence is halved, to map the output index back to
            // the previous sequence to find the corresponding value, we need
            // to double the index. When we double the index, we basically
            // interpolate a position, so 2i looks like
            // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k
            // position of each 2k positions by - elemIdx % k. E.g. for output
            // at index 4,5,6,7, we want to get the corresponding element at
            // original index 8,9,10,11, for output at index 8,9,10,11,
            // we want to get the corresponding element at original index
            // 16,17,18,19, so on and so forth.

            var i = 0;
            if (elemIdx < uniforms.k) {
              i = elemIdx;
            } else {
              i = elemIdx * 2 - elemIdx % uniforms.k;
            }
            var i0 = 0;
            if (uniforms.firstPass == 1) {
              i0 = i;
            } else {
              i0 = i32(getIndices(batch, i));
            }
            var i1 = 0;
            if (uniforms.firstPass == 1) {
              i1 = i + uniforms.k;
            } else {
              i1 = i32(getIndices(batch, i + uniforms.k));
            }

            let x0 = getX(batch, i0);
            var x1 = f32(0.0);
            if (i1 < uniforms.inputSize) {
              x1 = getX(batch, i1);
            } else {
              x1 = x0;
            }

            if (x0 >= x1) {
              setOutputAtIndex(index, f32(i0));
            } else {
              setOutputAtIndex(index, f32(i1));
            }
          }
        }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ct(i,t){t!==null&&i.disposeData(t.dataId)}function is(i){let t=1;for(;t<i;)t*=2;return t}function Yw(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{k:n,sorted:a}=r,u=o.shape,c=u[u.length-1];if(e.shouldExecuteOnCPU([o])){const N=e.readSync(o.dataId),[D,T]=hf(N,u,o.dtype,n,a);return[e.makeTensorInfo(D.shape,D.dtype,D.values),e.makeTensorInfo(T.shape,T.dtype,T.values)]}if(n===0)return u[u.length-1]=0,[e.makeTensorInfo(u,o.dtype,[]),e.makeTensorInfo(u,"int32",[])];if(c===1)return[o,$e({attrs:{shape:u,dtype:"int32",value:0},backend:e})];const p=J(u)/c,d=H({inputs:{x:o},attrs:{shape:[p,c]},backend:e}),m=is(n),x=is(c);let y=null;const w=()=>y===null?[d,d]:[d,y],b=(N,D,T)=>{const E=w(),F=new Xw(T),B=[{type:"int32",data:[c]},{type:"int32",data:[y===null?1:0]},{type:"float32",data:[Number.NEGATIVE_INFINITY]},{type:"int32",data:[N]},{type:"int32",data:[D]}],X=y;y=e.runWebGPUProgram(F,E,"int32",B),Ct(e,X)};for(let N=1;N<m;N*=2){const D=N*2;for(let T=N;T>=1;T/=2)b(D,T,[p,x])}for(let N=x;N>m;N/=2){const D=w(),T=new Kw([p,N/2]),F=[{type:"int32",data:[c]},{type:"int32",data:[y===null?1:0]},{type:"int32",data:[m]}],W=y;y=e.runWebGPUProgram(T,D,"int32",F),Ct(e,W);const B=m/2,X=B*2;for(let G=B;G>=1;G/=2)b(X,G,y.shape)}let I=y;y=_t({inputs:{x:y},backend:e,attrs:{begin:0,size:[p,n]}}),Ct(e,I);let R=cn({inputs:{x:d,indices:y},backend:e,attrs:{axis:1,batchDims:1}});Ct(e,d);const P=u.slice(0,-1);P.push(n),I=y,y=H({inputs:{x:y},attrs:{shape:P},backend:e}),Ct(e,I);const A=R;return R=H({inputs:{x:R},attrs:{shape:P},backend:e}),Ct(e,A),[R,y]}const qw={kernelName:fh,backendName:"webgpu",kernelFunc:Yw};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qw{constructor(t){this.variableNames=["Image","Transforms"],this.uniforms="interpolationModeId : i32, fillModeId : i32, fillValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="transform"}getUserCode(){return`
          fn mapCoord(outCoord : f32, len : f32) -> f32{
            var inCoord = outCoord;
            if(uniforms.fillModeId == 2) {
              if (inCoord < 0.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz2 = 2.0 * len;
                  if (inCoord < sz2) {
                    inCoord = sz2 * f32(i32(f32(-inCoord / sz2))) +
                    inCoord;
                  }
                  if (inCoord < -len) {
                    inCoord = inCoord + sz2;
                  } else {
                    inCoord = -inCoord - 1.0;
                  }
                }
              } else if (inCoord > len - 1.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz2 = 2.0 * len;
                  inCoord = inCoord - sz2 * f32(i32(f32(inCoord / sz2)));
                  if (inCoord >= len) {
                    inCoord = sz2 - inCoord - 1.0;
                  }
                }
              }
              return clamp(inCoord, 0.0, len - 1.0);
            } else if (uniforms.fillModeId == 3) {
              if (inCoord < 0.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz = len - 1.0;
                  inCoord = inCoord + len * (f32(i32(f32(-inCoord / sz))) + 1.0);
                }
              } else if (inCoord > len - 1.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz = len - 1.0;
                  inCoord = inCoord - len * f32(i32(f32(inCoord / sz)));
                }
              }
              return clamp(inCoord, 0.0, len - 1.0);
            } else if (uniforms.fillModeId == 4) {
              return clamp(outCoord, 0.0, len - 1.0);
            }
            return outCoord;
          }
          fn readWithFillValue(batch : i32, coordY : i32, coordX : i32,
            channel : i32) -> f32 {
            var outputValue : f32;
            if (0 <= coordY && coordY < uniforms.imageShape[1] && 0 <= coordX && coordX < uniforms.imageShape[2]) {
                outputValue = getImage(batch, coordY, coordX, channel);
            } else {
              outputValue = uniforms.fillValue;
            }
            return outputValue;
          }

          ${M("index")} {
            if (index < uniforms.size) {
              let coords = getCoordsFromIndex(index);
              var outputValue : f32;
              let batch = coords[0];
              let x = coords[2];
              let y = coords[1];
              let channel = coords[3];
              let xf = f32(x);
              let yf = f32(y);
              let a1 = getTransforms(batch, 0);
              let a2 = getTransforms(batch, 1);
              let a3 = getTransforms(batch, 2);
              let b1 = getTransforms(batch, 3);
              let b2 = getTransforms(batch, 4);
              let b3 = getTransforms(batch, 5);
              let c1 = getTransforms(batch, 6);
              let c2 = getTransforms(batch, 7);
              let projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = uniforms.fillValue;
              } else {
                let inX = (a1 * xf + a2 * yf + a3) / projection;
                let inY = (b1 * xf + b2 * yf + b3) / projection;
                let mapX = mapCoord(inX, f32(uniforms.imageShape[2]));
                let mapY = mapCoord(inY, f32(uniforms.imageShape[1]));

                if (uniforms.interpolationModeId == 1) {
                  let coordY = i32(round(mapY));
                  let coordX = i32(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  let yFloor = floor(mapY);
                  let xFloor = floor(mapX);
                  let yCeil = yFloor + 1.0;
                  let xCeil = xFloor + 1.0;
                  let valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, i32(yFloor), i32(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, i32(yFloor), i32(xCeil), channel);
                  let valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, i32(yCeil), i32(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, i32(yCeil), i32(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutputAtIndex(index, outputValue);
            }
          }
        `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zw(i){const{inputs:t,backend:e,attrs:r}=i,{image:o,transforms:n}=t,{interpolation:a,fillMode:u,fillValue:c,outputShape:h}=r,[p,d,m,x]=o.shape,[y,w]=h??[d,m],b=[p,y,w,x],I=new Qw(b),R=a==="nearest"?1:2;let P;switch(u){case"constant":P=1;break;case"reflect":P=2;break;case"wrap":P=3;break;case"nearest":P=4;break;default:P=1;break}const A=[{type:"int32",data:[R]},{type:"int32",data:[P]},{type:"float32",data:[c]}];return e.runWebGPUProgram(I,[o,n],"float32",A)}const Jw={kernelName:mh,backendName:"webgpu",kernelFunc:Zw};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ev(i){const{inputs:t,backend:e,attrs:r}=i,{value:o}=t;let{axis:n}=r;n<0&&(n+=o.shape.length);const a=o,u=a.shape.length,c=o.shape[n],h=new Array(u-1);let p=0;for(let w=0;w<u;w++)w!==n&&(h[p++]=a.shape[w]);const d=[],m=new Array(u).fill(0),x=a.shape.slice();x[n]=1;const y=new Array(c);for(let w=0;w<y.length;w++){m[n]=w;const b=_t({inputs:{x:a},backend:e,attrs:{begin:m,size:x}}),I=H({inputs:{x:b},backend:e,attrs:{shape:h}});y[w]=I,d.push(b)}return d.forEach(w=>e.disposeData(w.dataId)),y}const tv={kernelName:gh,backendName:"webgpu",kernelFunc:ev};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class iv{constructor(t,e,r){if(this.outputShape=[],this.variableNames=["x","segmentIds"],this.uniforms="numSegments : i32, xSize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e,this.dispatchLayout=U(t),this.dispatch=L(this.dispatchLayout,t,this.workgroupSize),r!=="float32"&&r!=="int32")throw new Error(`UnsortedSegmentSum only supports float32 and int32
              types, does not support ${r} type.`);this.type=r,this.shaderKey="unsortedSegmentSum"}getUserCode(){return`
    ${M("index")} {
      if (index < uniforms.xSize) {
        let coords = getXCoordsFromIndex(index);
        let b = coords[0];
        let inCol = coords[1];

        let segmentId = i32(getSegmentIds(inCol));
        if (segmentId >= 0) {
          let flatIndex = b * uniforms.numSegments + segmentId % uniforms.numSegments;
          let value = getX(b, inCol);

          ${ot("&result[flatIndex]","value",this.type)}
        }
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rv(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,segmentIds:n}=t,{numSegments:a}=r,u=o.shape.length,c=[];let h=0;const p=ai([h],u);let d=o;p!=null&&(d=Xe({inputs:{x:o},backend:e,attrs:{perm:p}}),c.push(d),h=ui(1,u)[0]);const m=yh(d.shape,h,a),x=J([d.shape[h]]),y=H({inputs:{x:d},backend:e,attrs:{shape:[-1,x]}});c.push(y);const w=o.dtype,b=[y.shape[0],a],I=$e({backend:e,attrs:{shape:b,value:0,dtype:w}}),R=new iv(y.shape,b,w),P=[{type:"int32",data:[a]},{type:"int32",data:[J(y.shape)]}],A=e.runWebGPUProgram(R,[y,n],w,P,I),N=H({inputs:{x:A},backend:e,attrs:{shape:m}});c.push(A);let D=N;if(p!=null){c.push(N);const T=Os(p);D=Xe({inputs:{x:D},backend:e,attrs:{perm:T}})}return c.forEach(T=>e.disposeData(T.dataId)),D}const ov={kernelName:xh,backendName:"webgpu",kernelFunc:rv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sv=[$p,ff,gf,yf,vf,Sf,Nf,Tf,Ef,zf,Lf,Bf,Uf,Gf,jf,Qf,Jf,rm,sm,am,dm,gm,wm,Sm,Im,$m,Dp,Tm,zm,Gm,qm,eg,rg,sg,ag,lg,hg,fg,gg,yg,vg,Sg,Ng,Tg,Rg,_g,Lg,Ug,Gg,Xg,Qg,Jg,tx,rx,sx,ax,ux,cx,dx,Rp,fx,vx,gx,yx,Sx,Ix,Px,Nx,Fx,_x,Mx,Np,Ox,Em,Wx,Vx,Hx,Xx,Yx,Qx,ey,oy,iy,ny,uy,cy,fy,xy,Kf,wy,Cy,$y,Sy,Py,Dy,Yf,Fy,_y,My,Oy,Gy,Kg,jy,Ky,qy,vm,Jy,t2,r2,n2,u2,c2,d2,f2,Cm,g2,y2,v2,b2,Pp,I2,A2,D2,E2,M2,O2,W2,V2,H2,K2,Q2,J2,tw,rw,sw,aw,cm,Fw,zw,Lw,Uy,lw,dw,xw,ww,kw,Rw,Aw,$w,Dw,Bw,Yg,Uw,Gw,jw,bw,qw,Jw,Rf,tv,ov,e2];for(const i of sv)wh(i);/**
    * @license
    * Copyright 2023 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var gn=function(i,t){return(gn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])})(i,t)};function xn(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=i}gn(i,t),i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var ue=function(){return(ue=Object.assign||function(i){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=t[o]);return i}).apply(this,arguments)};function re(i,t,e,r){return new(e||(e=Promise))(function(o,n){function a(h){try{c(r.next(h))}catch(p){n(p)}}function u(h){try{c(r.throw(h))}catch(p){n(p)}}function c(h){var p;h.done?o(h.value):(p=h.value,p instanceof e?p:new e(function(d){d(p)})).then(a,u)}c((r=r.apply(i,[])).next())})}function oe(i,t){var e,r,o,n,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return n={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(n[Symbol.iterator]=function(){return this}),n;function u(c){return function(h){return function(p){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&p[0]?r.return:p[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,p[1])).done)return o;switch(r=0,o&&(p=[2&p[0],o.value]),p[0]){case 0:case 1:o=p;break;case 4:return a.label++,{value:p[1],done:!1};case 5:a.label++,r=p[1],p=[0];continue;case 7:p=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!((o=o.length>0&&o[o.length-1])||p[0]!==6&&p[0]!==2)){a=0;continue}if(p[0]===3&&(!o||p[1]>o[0]&&p[1]<o[3])){a.label=p[1];break}if(p[0]===6&&a.label<o[1]){a.label=o[1],o=p;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(p);break}o[2]&&a.ops.pop(),a.trys.pop();continue}p=t.call(i,a)}catch(d){p=[6,d],r=0}finally{e=o=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}([c,h])}}}function ht(i,t,e){if(e||arguments.length===2)for(var r,o=0,n=t.length;o<n;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return i.concat(r||Array.prototype.slice.call(t))}var Ke=["nose","left_eye","right_eye","left_ear","right_ear","left_shoulder","right_shoulder","left_elbow","right_elbow","left_wrist","right_wrist","left_hip","right_hip","left_knee","right_knee","left_ankle","right_ankle"],ni=["nose","left_eye_inner","left_eye","left_eye_outer","right_eye_inner","right_eye","right_eye_outer","left_ear","right_ear","mouth_left","mouth_right","left_shoulder","right_shoulder","left_elbow","right_elbow","left_wrist","right_wrist","left_pinky","right_pinky","left_index","right_index","left_thumb","right_thumb","left_hip","right_hip","left_knee","right_knee","left_ankle","right_ankle","left_heel","right_heel","left_foot_index","right_foot_index"];function $i(i){return i instanceof SVGAnimatedLength?i.baseVal.value:i}function yn(i){return re(this,void 0,void 0,function(){var t,e;return oe(this,function(r){switch(r.label){case 0:return t=document.createElement("canvas"),i instanceof Tt?[4,Dr(i,t)]:[3,2];case 1:return r.sent(),[3,3];case 2:t.width=$i(i.width),t.height=$i(i.height),e=t.getContext("2d"),i instanceof ImageData?e.putImageData(i,0,0):e.drawImage(i,0,0),r.label=3;case 3:return[2,t]}})})}function wn(i){return re(this,void 0,void 0,function(){var t,e,r,o,n,a;return oe(this,function(u){switch(u.label){case 0:return i instanceof Tt?(t=i.shape.slice(0,2),e=t[0],r=t[1],o=ImageData.bind,[4,Dr(i)]):[3,2];case 1:return[2,new(o.apply(ImageData,[void 0,u.sent(),r,e]))];case 2:return n=document.createElement("canvas"),a=n.getContext("2d"),n.width=$i(i.width),n.height=$i(i.height),a.drawImage(i,0,0),[2,a.getImageData(0,0,n.width,n.height)]}})})}function nv(i){return re(this,void 0,void 0,function(){var t,e;return oe(this,function(r){switch(r.label){case 0:return i instanceof SVGImageElement||i instanceof OffscreenCanvas?[4,yn(i)]:[3,2];case 1:return e=r.sent(),[3,3];case 2:e=i,r.label=3;case 3:return t=e,[2,Ws(t,4)]}})})}function vn(i){if(i<0||i>=256)throw new Error("Mask value must be in range [0, 255] but got ".concat(i));if(!Number.isInteger(i))throw new Error("Mask value must be an integer but got ".concat(i))}var Xt={runtime:"mediapipe",enableSmoothing:!0,enableSegmentation:!1,smoothSegmentation:!0,modelType:"full"},av=function(){function i(t){this.mask=t}return i.prototype.toCanvasImageSource=function(){return re(this,void 0,void 0,function(){return oe(this,function(t){return[2,this.mask]})})},i.prototype.toImageData=function(){return re(this,void 0,void 0,function(){return oe(this,function(t){return[2,wn(this.mask)]})})},i.prototype.toTensor=function(){return re(this,void 0,void 0,function(){return oe(this,function(t){return[2,nv(this.mask)]})})},i.prototype.getUnderlyingType=function(){return"canvasimagesource"},i}();function uv(i){return vn(i),"person"}var lv=function(){function i(t){var e,r=this;switch(this.width=0,this.height=0,this.selfieMode=!1,this.poseSolution=new Ph.Pose({locateFile:function(o,n){if(t.solutionPath){var a=t.solutionPath.replace(/\/+$/,"");return"".concat(a,"/").concat(o)}return"".concat(n,"/").concat(o)}}),t.modelType){case"lite":e=0;break;case"heavy":e=2;break;case"full":default:e=1}this.poseSolution.setOptions({modelComplexity:e,smoothLandmarks:t.enableSmoothing,enableSegmentation:t.enableSegmentation,smoothSegmentation:t.smoothSegmentation,selfieMode:this.selfieMode}),this.poseSolution.onResults(function(o){if(r.height=o.image.height,r.width=o.image.width,o.poseLandmarks==null)r.poses=[];else{var n=r.translateOutput(o.poseLandmarks,o.poseWorldLandmarks);o.segmentationMask&&(n.segmentation={maskValueToLabel:uv,mask:new av(o.segmentationMask)}),r.poses=[n]}})}return i.prototype.translateOutput=function(t,e){var r=this,o={keypoints:t.map(function(n,a){return{x:n.x*r.width,y:n.y*r.height,z:n.z,score:n.visibility,name:ni[a]}})};return e!=null&&(o.keypoints3D=e.map(function(n,a){return{x:n.x,y:n.y,z:n.z,score:n.visibility,name:ni[a]}})),o},i.prototype.estimatePoses=function(t,e,r){return re(this,void 0,void 0,function(){var o,n;return oe(this,function(a){switch(a.label){case 0:return e&&e.flipHorizontal&&e.flipHorizontal!==this.selfieMode&&(this.selfieMode=e.flipHorizontal,this.poseSolution.setOptions({selfieMode:this.selfieMode})),t instanceof Tt?(n=ImageData.bind,[4,Dr(t)]):[3,2];case 1:return o=new(n.apply(ImageData,[void 0,a.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:o=t,a.label=3;case 3:return t=o,[4,this.poseSolution.send({image:t},r)];case 4:return a.sent(),[2,this.poses]}})})},i.prototype.dispose=function(){this.poseSolution.close()},i.prototype.reset=function(){this.poseSolution.reset()},i.prototype.initialize=function(){return this.poseSolution.initialize()},i}();function cv(i){return re(this,void 0,void 0,function(){var t,e;return oe(this,function(r){switch(r.label){case 0:return t=function(o){if(o==null)return ue({},Xt);var n=ue({},o);return n.runtime="mediapipe",n.enableSegmentation==null&&(n.enableSegmentation=Xt.enableSegmentation),n.enableSmoothing==null&&(n.enableSmoothing=Xt.enableSmoothing),n.smoothSegmentation==null&&(n.smoothSegmentation=Xt.smoothSegmentation),n.modelType==null&&(n.modelType=Xt.modelType),n}(i),[4,(e=new lv(t)).initialize()];case 1:return r.sent(),[2,e]}})})}function Nt(i){return i instanceof Tt?{height:i.shape[0],width:i.shape[1]}:{height:i.height,width:i.width}}function Cn(i){return i-2*Math.PI*Math.floor((i+Math.PI)/(2*Math.PI))}function Mr(i){return i instanceof Tt?i:Ws(i)}function bn(i,t,e){return Cr(e,"inputResolution"),[1/e.width*i[0][0]*t.width,1/e.height*i[0][1]*t.width,i[0][3]*t.width,1/e.width*i[1][0]*t.height,1/e.height*i[1][1]*t.height,i[1][3]*t.height,0,0]}function Cr(i,t){ne(i.width!==0,function(){return"".concat(t," width cannot be 0.")}),ne(i.height!==0,function(){return"".concat(t," height cannot be 0.")})}function ar(i,t,e){var r=e.rotationVectorStartKeypointIndex,o=e.rotationVectorEndKeypointIndex,n=i.locationData,a=n.relativeKeypoints[r].x*t.width,u=n.relativeKeypoints[r].y*t.height,c=n.relativeKeypoints[o].x*t.width,h=n.relativeKeypoints[o].y*t.height,p=2*Math.sqrt((c-a)*(c-a)+(h-u)*(h-u)),d=function(m,x,y){var w,b=m.locationData,I=y.rotationVectorStartKeypointIndex,R=y.rotationVectorEndKeypointIndex;w=y.rotationVectorTargetAngle?y.rotationVectorTargetAngle:Math.PI*y.rotationVectorTargetAngleDegree/180;var P=b.relativeKeypoints[I].x*x.width,A=b.relativeKeypoints[I].y*x.height,N=b.relativeKeypoints[R].x*x.width,D=b.relativeKeypoints[R].y*x.height;return Cn(w-Math.atan2(-(D-A),N-P))}(i,t,e);return{xCenter:a/t.width,yCenter:u/t.height,width:p/t.width,height:p/t.height,rotation:d}}function Sn(i){if(i.length!==16)throw new Error("Array length must be 16 but got ".concat(i.length));return[[i[0],i[1],i[2],i[3]],[i[4],i[5],i[6],i[7]],[i[8],i[9],i[10],i[11]],[i[12],i[13],i[14],i[15]]]}function ur(i,t,e,r,o,n,a){return i[t][o]*(i[e][n]*i[r][a]-i[e][a]*i[r][n])}function Ie(i,t,e){var r=(t+1)%4,o=(t+2)%4,n=(t+3)%4,a=(e+1)%4,u=(e+2)%4,c=(e+3)%4;return ur(i,r,o,n,a,u,c)+ur(i,o,n,r,a,u,c)+ur(i,n,r,o,a,u,c)}function rs(i,t,e){e===void 0&&(e={ignoreRotation:!1});for(var r=[],o=0,n=i;o<n.length;o++){var a=n[o],u=a.x-.5,c=a.y-.5,h=e.ignoreRotation?0:t.rotation,p=Math.cos(h)*u-Math.sin(h)*c,d=Math.sin(h)*u+Math.cos(h)*c;p=p*t.width+t.xCenter,d=d*t.height+t.yCenter;var m=a.z*t.width,x=ue({},a);x.x=p,x.y=d,x.z=m,r.push(x)}return r}function kn(i,t){var e=function(r,o,n,a){var u=o-r,c=a-n,h=c/u;return{scale:h,offset:n-r*h}}(0,255,t[0],t[1]);return be(function(){return Ae(xe(i,e.scale),e.offset)})}function br(i,t,e){var r,o,n,a,u,c,h,p,d,m,x,y,w,b,I=t.outputTensorSize,R=t.keepAspectRatio,P=t.borderMode,A=t.outputTensorFloatRange,N=Nt(i),D=function(F,W){return W?{xCenter:W.xCenter*F.width,yCenter:W.yCenter*F.height,width:W.width*F.width,height:W.height*F.height,rotation:W.rotation}:{xCenter:.5*F.width,yCenter:.5*F.height,width:F.width,height:F.height,rotation:0}}(N,e),T=function(F,W,B){if(B===void 0&&(B=!1),!B)return{top:0,left:0,right:0,bottom:0};var X=W.height,G=W.width;Cr(W,"targetSize"),Cr(F,"roi");var Q,Z,ie=X/G,we=F.height/F.width,Se=0,me=0;return ie>we?(Q=F.width,Z=F.width*ie,me=(1-we/ie)/2):(Q=F.height/ie,Z=F.height,Se=(1-ie/we)/2),F.width=Q,F.height=Z,{top:me,left:Se,right:Se,bottom:me}}(D,I,R),E=(r=D,o=N.width,n=N.height,a=!1,u=r.width,c=r.height,h=a?-1:1,p=Math.cos(r.rotation),d=Math.sin(r.rotation),m=r.xCenter,x=r.yCenter,y=1/o,w=1/n,(b=new Array(16))[0]=u*p*h*y,b[1]=-c*d*y,b[2]=0,b[3]=(-.5*u*p*h+.5*c*d+m)*y,b[4]=u*d*h*w,b[5]=c*p*w,b[6]=0,b[7]=(-.5*c*p-.5*u*d*h+x)*w,b[8]=0,b[9]=0,b[10]=u*y,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,Sn(b));return{imageTensor:be(function(){var F=Mr(i),W=dt(bn(E,N,I),[1,8]),B=P==="zero"?"constant":"nearest",X=kt.transform(ii(At(F,"float32")),W,"bilinear",B,0,[I.height,I.width]);return A!=null?kn(X,A):X}),padding:T,transformationMatrix:E}}function os(i,t,e,r){return r===1?.5*(i+t):i+(t-i)*e/(r-1)}function hv(i){return be(function(){var t=function(o){return be(function(){return[Te(o,[0,0,0],[1,-1,1]),Te(o,[0,0,1],[1,-1,-1])]})}(i),e=t[0],r=t[1];return{boxes:ce(r),logits:ce(e)}})}function In(i){return i!=null&&i.currentTime!=null}function ss(i){for(var t={locationData:{relativeKeypoints:[]}},e=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER,n=Number.MIN_SAFE_INTEGER,a=0;a<i.length;++a){var u=i[a];e=Math.min(e,u.x),r=Math.max(r,u.x),o=Math.min(o,u.y),n=Math.max(n,u.y),t.locationData.relativeKeypoints.push({x:u.x,y:u.y})}return t.locationData.relativeBoundingBox={xMin:e,yMin:o,xMax:r,yMax:n,width:r-e,height:n-o},t}function dv(i,t,e,r){return re(this,void 0,void 0,function(){var o,n,a,u,c;return oe(this,function(h){switch(h.label){case 0:return i.sort(function(p,d){return Math.max.apply(Math,d.score)-Math.max.apply(Math,p.score)}),o=dt(i.map(function(p){return[p.locationData.relativeBoundingBox.yMin,p.locationData.relativeBoundingBox.xMin,p.locationData.relativeBoundingBox.yMax,p.locationData.relativeBoundingBox.xMax]})),n=Kt(i.map(function(p){return p.score[0]})),[4,kt.nonMaxSuppressionAsync(o,n,t,e)];case 1:return[4,(a=h.sent()).array()];case 2:return u=h.sent(),c=i.filter(function(p,d){return u.indexOf(d)>-1}),Pe([o,n,a]),[2,c]}})})}function Rn(i,t){return i.map(function(e){var r=ue(ue({},e),{x:e.x*t.width,y:e.y*t.height});return e.z!=null&&(r.z=e.z*t.width),r})}function pv(i,t,e){return re(this,void 0,void 0,function(){var r,o,n,a,u,c,h,p,d,m,x,y,w,b,I,R,P,A,N,D,T,E,F,W;return oe(this,function(B){switch(B.label){case 0:if(r=ce(t,[0]),o=r.shape,n=o[0],a=o[1],u=o[2],i.length!==u)throw new Error("Expected heatmap to have same number of channels as the number of landmarks. But got landmarks length: "+"".concat(i.length,", heatmap length: ").concat(u));return c=[],[4,r.buffer()];case 1:for(h=B.sent(),p=0;p<i.length;p++)if(d=i[p],m=ue({},d),c.push(m),x=Math.trunc(m.x*a),y=Math.trunc(m.y*n),!(x<0||x>=a||y<0||x>=n)){for(w=Math.trunc((e.kernelSize-1)/2),b=Math.max(0,x-w),I=Math.min(a,x+w+1),R=Math.max(0,y-w),P=Math.min(n,y+w+1),A=0,N=0,D=0,T=0,E=R;E<P;++E)for(F=b;F<I;++F)W=h.get(E,F,p),A+=W,T=Math.max(T,W),N+=F*W,D+=E*W;T>=e.minConfidenceToRefine&&A>0&&(m.x=N/a/A,m.y=D/n/A)}return r.dispose(),[2,c]}})})}function ns(i,t){var e=t.left,r=t.top,o=t.left+t.right,n=t.top+t.bottom;return i.map(function(a){return ue(ue({},a),{x:(a.x-e)/(1-o),y:(a.y-r)/(1-n),z:a.z/(1-o)})})}function fv(i,t,e){return ti()==="webgl"?function(r,o,n){var a=n.combineWithPreviousRatio.toFixed(2),u={variableNames:["prevMask","newMask"],outputShape:r.shape,userCode:`
  void main() {
      ivec2 coords = getOutputCoords();
      int height = coords[0];
      int width = coords[1];

      float prevMaskValue = getPrevMask(height, width);
      float newMaskValue = getNewMask(height, width);

      /*
      * Assume p := newMaskValue
      * H(p) := 1 + (p * log(p) + (1-p) * log(1-p)) / log(2)
      * uncertainty alpha(p) =
      *   Clamp(1 - (1 - H(p)) * (1 - H(p)), 0, 1) [squaring the
      * uncertainty]
      *
      * The following polynomial approximates uncertainty alpha as a
      * function of (p + 0.5):
      */
      const float c1 = 5.68842;
      const float c2 = -0.748699;
      const float c3 = -57.8051;
      const float c4 = 291.309;
      const float c5 = -624.717;
      float t = newMaskValue - 0.5;
      float x = t * t;

      float uncertainty =
        1.0 - min(1.0, x * (c1 + x * (c2 + x * (c3 + x * (c4 + x * c5)))));

      float outputValue = newMaskValue + (prevMaskValue - newMaskValue) *
                             (uncertainty * `.concat(a,`);

      setOutput(outputValue);
    }
`)},c=ri();return be(function(){var h=c.compileAndRun(u,[r,o]);return St().makeTensorFromDataId(h.dataId,h.shape,h.dtype)})}(i,t,e):be(function(){var r=It(t,.5),o=Ch(r),n=It(1,bh(1,xe(o,Ae(5.68842,xe(o,Ae(-.748699,xe(o,Ae(-57.8051,xe(o,Ae(291.309,xe(o,-624.717)))))))))));return Ae(t,xe(It(i,t),xe(n,e.combineWithPreviousRatio)))})}function mv(i,t,e){return re(this,void 0,void 0,function(){var r,o,n,a,u;return oe(this,function(c){switch(c.label){case 0:return r=i[0],o=i[1],n=function(h,p,d){return be(function(){var m,x,y,w;d.reverseOutputOrder?(x=ce(Te(h,[0,d.boxCoordOffset+0],[-1,1])),m=ce(Te(h,[0,d.boxCoordOffset+1],[-1,1])),w=ce(Te(h,[0,d.boxCoordOffset+2],[-1,1])),y=ce(Te(h,[0,d.boxCoordOffset+3],[-1,1]))):(m=ce(Te(h,[0,d.boxCoordOffset+0],[-1,1])),x=ce(Te(h,[0,d.boxCoordOffset+1],[-1,1])),y=ce(Te(h,[0,d.boxCoordOffset+2],[-1,1])),w=ce(Te(h,[0,d.boxCoordOffset+3],[-1,1]))),x=Ae(xe(Fe(x,d.xScale),p.w),p.x),m=Ae(xe(Fe(m,d.yScale),p.h),p.y),d.applyExponentialOnBoxSize?(y=xe(Wo(Fe(y,d.hScale)),p.h),w=xe(Wo(Fe(w,d.wScale)),p.w)):(y=xe(Fe(y,d.hScale),p.h),w=xe(Fe(w,d.wScale),p.h));var b=It(m,Fe(y,2)),I=It(x,Fe(w,2)),R=Ae(m,Fe(y,2)),P=Ae(x,Fe(w,2)),A=xr([Je(b,[d.numBoxes,1]),Je(I,[d.numBoxes,1]),Je(R,[d.numBoxes,1]),Je(P,[d.numBoxes,1])],1);if(d.numKeypoints)for(var N=0;N<d.numKeypoints;++N){var D=d.keypointCoordOffset+N*d.numValuesPerKeypoint,T=void 0,E=void 0;d.reverseOutputOrder?(T=ce(Te(h,[0,D],[-1,1])),E=ce(Te(h,[0,D+1],[-1,1]))):(E=ce(Te(h,[0,D],[-1,1])),T=ce(Te(h,[0,D+1],[-1,1])));var F=Ae(xe(Fe(T,d.xScale),p.w),p.x),W=Ae(xe(Fe(E,d.yScale),p.h),p.y);A=xr([A,Je(F,[d.numBoxes,1]),Je(W,[d.numBoxes,1])],1)}return A})}(o,t,e),a=be(function(){var h=r;return e.sigmoidScore?(e.scoreClippingThresh!=null&&(h=Sh(r,-e.scoreClippingThresh,e.scoreClippingThresh)),h=Tr(h)):h}),[4,gv(n,a,e)];case 1:return u=c.sent(),Pe([n,a]),[2,u]}})})}function gv(i,t,e){return re(this,void 0,void 0,function(){var r,o,n,a,u,c,h,p,d,m,x,y;return oe(this,function(w){switch(w.label){case 0:return r=[],[4,i.data()];case 1:return o=w.sent(),[4,t.data()];case 2:for(n=w.sent(),a=0;a<e.numBoxes;++a)if(!(e.minScoreThresh!=null&&n[a]<e.minScoreThresh||(u=a*e.numCoords,c=xv(o[u+0],o[u+1],o[u+2],o[u+3],n[a],e.flipVertically,a),(h=c.locationData.relativeBoundingBox).width<0||h.height<0))){if(e.numKeypoints>0)for((p=c.locationData).relativeKeypoints=[],d=e.numKeypoints*e.numValuesPerKeypoint,m=0;m<d;m+=e.numValuesPerKeypoint)x=u+e.keypointCoordOffset+m,y={x:o[x+0],y:e.flipVertically?1-o[x+1]:o[x+1]},p.relativeKeypoints.push(y);r.push(c)}return[2,r]}})})}function xv(i,t,e,r,o,n,a){return{score:[o],ind:a,locationData:{relativeBoundingBox:{xMin:t,yMin:n?1-e:i,xMax:r,yMax:n?1-i:e,width:r-t,height:e-i}}}}function yv(i,t){return i==="none"?t:function(e){return 1/(1+Math.exp(-e))}(t)}function as(i,t,e,r){return re(this,void 0,void 0,function(){var o,n,a,u,c,h,p,d;return oe(this,function(m){switch(m.label){case 0:return e=e||t.flipHorizontally||!1,r=r||t.flipVertically||!1,o=i.size,n=o/t.numLandmarks,[4,i.data()];case 1:for(a=m.sent(),u=[],c=0;c<t.numLandmarks;++c)h=c*n,(d={x:0,y:0}).x=e?t.inputImageWidth-a[h]:a[h],n>1&&(d.y=r?t.inputImageHeight-a[h+1]:a[h+1]),n>2&&(d.z=a[h+2]),n>3&&(d.score=yv(t.visibilityActivation,a[h+3])),u.push(d);for(p=0;p<u.length;++p)(d=u[p]).x=d.x/t.inputImageWidth,d.y=d.y/t.inputImageHeight,d.z=d.z/t.inputImageWidth/(t.normalizeZ||1);return[2,u]}})})}function us(i,t,e){var r=i.width,o=i.height,n=i.rotation;if(e.rotation==null&&e.rotationDegree==null||(n=function(h,p){return p.rotation!=null?h+=p.rotation:p.rotationDegree!=null&&(h+=Math.PI*p.rotationDegree/180),Cn(h)}(n,e)),n===0)i.xCenter=i.xCenter+r*e.shiftX,i.yCenter=i.yCenter+o*e.shiftY;else{var a=(t.width*r*e.shiftX*Math.cos(n)-t.height*o*e.shiftY*Math.sin(n))/t.width,u=(t.width*r*e.shiftX*Math.sin(n)+t.height*o*e.shiftY*Math.cos(n))/t.height;i.xCenter=i.xCenter+a,i.yCenter=i.yCenter+u}{var c=Math.max(r*t.width,o*t.height);r=c/t.width,o=c/t.height}return i.width=r*e.scaleX,i.height=o*e.scaleY,i}function wv(i,t){return i.map(function(e){var r=ue(ue({},e),{x:e.x/t.width,y:e.y/t.height});return e.z!=null&&(e.z=e.z/t.width),r})}var tt=function(){function i(t){this.alpha=t,this.initialized=!1}return i.prototype.apply=function(t,e){var r;return this.initialized?r=e==null?this.storedValue+this.alpha*(t-this.storedValue):this.storedValue+this.alpha*e*Math.asinh((t-this.storedValue)/e):(r=t,this.initialized=!0),this.rawValue=t,this.storedValue=r,r},i.prototype.applyWithAlpha=function(t,e,r){return this.alpha=e,this.apply(t,r)},i.prototype.hasLastRawValue=function(){return this.initialized},i.prototype.lastRawValue=function(){return this.rawValue},i.prototype.reset=function(){this.initialized=!1},i}(),lr=function(){function i(t){this.frequency=t.frequency,this.minCutOff=t.minCutOff,this.beta=t.beta,this.thresholdCutOff=t.thresholdCutOff,this.thresholdBeta=t.thresholdBeta,this.derivateCutOff=t.derivateCutOff,this.x=new tt(this.getAlpha(this.minCutOff)),this.dx=new tt(this.getAlpha(this.derivateCutOff)),this.lastTimestamp=0}return i.prototype.apply=function(t,e,r){if(t==null)return t;var o=Math.trunc(e);if(this.lastTimestamp>=o)return t;this.lastTimestamp!==0&&o!==0&&(this.frequency=1/(1e-6*(o-this.lastTimestamp))),this.lastTimestamp=o;var n=this.x.hasLastRawValue()?(t-this.x.lastRawValue())*r*this.frequency:0,a=this.dx.applyWithAlpha(n,this.getAlpha(this.derivateCutOff)),u=this.minCutOff+this.beta*Math.abs(a),c=this.thresholdCutOff!=null?this.thresholdCutOff+this.thresholdBeta*Math.abs(a):null;return this.x.applyWithAlpha(t,this.getAlpha(u),c)},i.prototype.getAlpha=function(t){return 1/(1+this.frequency/(2*Math.PI*t))},i}(),Sr=function(){function i(t){this.config=t}return i.prototype.apply=function(t,e,r){var o=this;if(t==null)return this.reset(),null;this.initializeFiltersIfEmpty(t);var n=1;if(!this.config.disableValueScaling){if(r<this.config.minAllowedObjectScale)return ht([],t,!0);n=1/r}return t.map(function(a,u){var c=ue(ue({},a),{x:o.xFilters[u].apply(a.x,e,n),y:o.yFilters[u].apply(a.y,e,n)});return a.z!=null&&(c.z=o.zFilters[u].apply(a.z,e,n)),c})},i.prototype.reset=function(){this.xFilters=null,this.yFilters=null,this.zFilters=null},i.prototype.initializeFiltersIfEmpty=function(t){var e=this;this.xFilters!=null&&this.xFilters.length===t.length||(this.xFilters=t.map(function(r){return new lr(e.config)}),this.yFilters=t.map(function(r){return new lr(e.config)}),this.zFilters=t.map(function(r){return new lr(e.config)}))},i}(),cr=function(){function i(t){this.config=t,this.window=[],this.lowPassFilter=new tt(1),this.lastValue=0,this.lastValueScale=1,this.lastTimestamp=-1}return i.prototype.apply=function(t,e,r){if(t==null)return t;var o,n=Math.trunc(e);if(this.lastTimestamp>=n)return t;if(this.lastTimestamp===-1)o=1;else{for(var a=t*r-this.lastValue*this.lastValueScale,u=n-this.lastTimestamp,c=a,h=u,p=(1+this.window.length)*(1e6/30),d=0,m=this.window;d<m.length;d++){var x=m[d];if(h+x.duration>p)break;c+=x.distance,h+=x.duration}var y=c/(1e-6*h);o=1-1/(1+this.config.velocityScale*Math.abs(y)),this.window.unshift({distance:a,duration:u}),this.window.length>this.config.windowSize&&this.window.pop()}return this.lastValue=t,this.lastValueScale=r,this.lastTimestamp=n,this.lowPassFilter.applyWithAlpha(t,o)},i}(),vv=function(){function i(t){this.config=t}return i.prototype.apply=function(t,e,r){var o=this;if(t==null)return this.reset(),null;var n=1;if(!this.config.disableValueScaling){if(r<this.config.minAllowedObjectScale)return ht([],t,!0);n=1/r}return this.initializeFiltersIfEmpty(t),t.map(function(a,u){var c=ue(ue({},a),{x:o.xFilters[u].apply(a.x,e,n),y:o.yFilters[u].apply(a.y,e,n)});return a.z!=null&&(c.z=o.zFilters[u].apply(a.z,e,n)),c})},i.prototype.reset=function(){this.xFilters=null,this.yFilters=null,this.zFilters=null},i.prototype.initializeFiltersIfEmpty=function(t){var e=this;this.xFilters!=null&&this.xFilters.length===t.length||(this.xFilters=t.map(function(r){return new cr(e.config)}),this.yFilters=t.map(function(r){return new cr(e.config)}),this.zFilters=t.map(function(r){return new cr(e.config)}))},i}(),hr=function(){function i(t){if(t.velocityFilter!=null)this.keypointsFilter=new vv(t.velocityFilter);else{if(t.oneEuroFilter==null)throw new Error("Either configure velocityFilter or oneEuroFilter, but got "+"".concat(t,"."));this.keypointsFilter=new Sr(t.oneEuroFilter)}}return i.prototype.apply=function(t,e,r,o,n){if(o===void 0&&(o=!1),t==null)return this.keypointsFilter.reset(),null;var a=n!=null?function(h,p){return(h.width*p.width+h.height*p.height)/2}(n,r):1,u=o?Rn(t,r):t,c=this.keypointsFilter.apply(u,e,a);return o?wv(c,r):c},i}(),ls=function(){function i(t){this.alpha=t.alpha}return i.prototype.apply=function(t){var e=this;if(t==null)return this.visibilityFilters=null,null;this.visibilityFilters!=null&&this.visibilityFilters.length===t.length||(this.visibilityFilters=t.map(function(u){return new tt(e.alpha)}));for(var r=[],o=0;o<t.length;++o){var n=t[o],a=ue({},n);a.score=this.visibilityFilters[o].apply(n.score),r.push(a)}return r},i}(),Cv={reduceBoxesInLowestlayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:5,minScale:.1484375,maxScale:.75,inputSizeHeight:224,inputSizeWidth:224,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,32,32,32],aspectRatios:[1],fixedAnchorSize:!0},bt={runtime:"tfjs",modelType:"full",enableSmoothing:!0,enableSegmentation:!1,smoothSegmentation:!0,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/detector/1",landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2"},bv={maxPoses:1,flipHorizontal:!1},Sv={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2254,numCoords:12,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:4,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:224,yScale:224,hScale:224,wScale:224,minScoreThresh:.5},kv=.3,cs={shiftX:0,shiftY:0,scaleX:1.25,scaleY:1.25,squareLong:!0},Iv={outputTensorSize:{width:224,height:224},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},Rv={outputTensorSize:{width:256,height:256},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},Pv={numLandmarks:39,inputImageWidth:256,inputImageHeight:256,visibilityActivation:"sigmoid",flipHorizontally:!1,flipVertically:!1},Av={numLandmarks:39,inputImageWidth:1,inputImageHeight:1,visibilityActivation:"sigmoid",flipHorizontally:!1,flipVertically:!1},$v={kernelSize:7,minConfidenceToRefine:.5},hs={alpha:.1},Nv={oneEuroFilter:{frequency:30,minCutOff:.05,beta:80,derivateCutOff:1,minAllowedObjectScale:1e-6}},Dv={oneEuroFilter:{frequency:30,minCutOff:.01,beta:10,derivateCutOff:1,minAllowedObjectScale:1e-6}},Tv={oneEuroFilter:{frequency:30,minCutOff:.1,beta:40,derivateCutOff:1,minAllowedObjectScale:1e-6,disableValueScaling:!0}},Fv={activation:"none"},Ev={combineWithPreviousRatio:.7},_v=function(){function i(t){this.mask=t}return i.prototype.toCanvasImageSource=function(){return re(this,void 0,void 0,function(){return oe(this,function(t){return[2,yn(this.mask)]})})},i.prototype.toImageData=function(){return re(this,void 0,void 0,function(){return oe(this,function(t){return[2,wn(this.mask)]})})},i.prototype.toTensor=function(){return re(this,void 0,void 0,function(){return oe(this,function(t){return[2,this.mask]})})},i.prototype.getUnderlyingType=function(){return"tensor"},i}();function zv(i){return vn(i),"person"}var Mv=function(){function i(t,e,r,o,n,a){this.detectorModel=t,this.landmarkModel=e,this.enableSmoothing=r,this.enableSegmentation=o,this.smoothSegmentation=n,this.modelType=a,this.regionOfInterest=null,this.prevFilteredSegmentationMask=null,this.anchors=function(d){d.reduceBoxesInLowestLayer==null&&(d.reduceBoxesInLowestLayer=!1),d.interpolatedScaleAspectRatio==null&&(d.interpolatedScaleAspectRatio=1),d.fixedAnchorSize==null&&(d.fixedAnchorSize=!1);for(var m=[],x=0;x<d.numLayers;){for(var y=[],w=[],b=[],I=[],R=x;R<d.strides.length&&d.strides[R]===d.strides[x];){var P=os(d.minScale,d.maxScale,R,d.strides.length);if(R===0&&d.reduceBoxesInLowestLayer)b.push(1),b.push(2),b.push(.5),I.push(.1),I.push(P),I.push(P);else{for(var A=0;A<d.aspectRatios.length;++A)b.push(d.aspectRatios[A]),I.push(P);if(d.interpolatedScaleAspectRatio>0){var N=R===d.strides.length-1?1:os(d.minScale,d.maxScale,R+1,d.strides.length);I.push(Math.sqrt(P*N)),b.push(d.interpolatedScaleAspectRatio)}}R++}for(var D=0;D<b.length;++D){var T=Math.sqrt(b[D]);y.push(I[D]/T),w.push(I[D]*T)}var E=0,F=0;if(d.featureMapHeight.length>0)E=d.featureMapHeight[x],F=d.featureMapWidth[x];else{var W=d.strides[x];E=Math.ceil(d.inputSizeHeight/W),F=Math.ceil(d.inputSizeWidth/W)}for(var B=0;B<E;++B)for(var X=0;X<F;++X)for(var G=0;G<y.length;++G){var Q={xCenter:(X+d.anchorOffsetX)/F,yCenter:(B+d.anchorOffsetY)/E,width:0,height:0};d.fixedAnchorSize?(Q.width=1,Q.height=1):(Q.width=w[G],Q.height=y[G]),m.push(Q)}x=R}return m}(Cv);var u=Kt(this.anchors.map(function(d){return d.width})),c=Kt(this.anchors.map(function(d){return d.height})),h=Kt(this.anchors.map(function(d){return d.xCenter})),p=Kt(this.anchors.map(function(d){return d.yCenter}));this.anchorTensor={x:h,y:p,w:u,h:c},this.prevFilteredSegmentationMask=this.enableSegmentation?dt([],[0,0]):null}return i.prototype.estimatePoses=function(t,e,r){return re(this,void 0,void 0,function(){var o,n,a,u,c,h,p,d,m,x,y,w,b,I,R,P,A,N,D,T,E,F,W;return oe(this,function(B){switch(B.label){case 0:return o=function(X){var G;if((G=X==null?bv:ue({},X)).maxPoses==null&&(G.maxPoses=1),G.maxPoses<=0)throw new Error("Invalid maxPoses ".concat(G.maxPoses,". Should be > 0."));if(G.maxPoses>1)throw new Error("Multi-pose detection is not implemented yet. Please set maxPoses to 1.");return G}(e),t==null?(this.reset(),[2,[]]):(this.maxPoses=o.maxPoses,this.timestamp=r!=null?1e3*r:In(t)?1e6*t.currentTime:null,n=Nt(t),a=be(function(){return At(Mr(t),"float32")}),(u=this.regionOfInterest)!=null?[3,2]:[4,this.detectPose(a)]);case 1:if((c=B.sent()).length===0)return this.reset(),a.dispose(),[2,[]];h=c[0],u=this.poseDetectionToRoi(h,n),B.label=2;case 2:return[4,this.poseLandmarksByRoi(u,a)];case 3:return p=B.sent(),a.dispose(),p==null?(this.reset(),[2,[]]):(d=p.landmarks,m=p.auxiliaryLandmarks,x=p.poseScore,y=p.worldLandmarks,w=p.segmentationMask,b=this.poseLandmarkFiltering(d,m,y,n),I=b.actualLandmarksFiltered,R=b.auxiliaryLandmarksFiltered,P=b.actualWorldLandmarksFiltered,A=this.poseLandmarksToRoi(R,n),this.regionOfInterest=A,N=this.smoothSegmentation&&w!=null?this.poseSegmentationFiltering(w):w,(D=I!=null?Rn(I,n):null)!=null&&D.forEach(function(X,G){X.name=ni[G]}),(T=P)!=null&&T.forEach(function(X,G){X.name=ni[G]}),E={score:x,keypoints:D,keypoints3D:T},N!==null&&(F=be(function(){var X=ii(N,2),G=gr(X,[[0,0],[0,0],[0,1]]);return vh(G,[[0,0],[0,0],[0,2]],"symmetric")}),this.smoothSegmentation||Pe(N),W={maskValueToLabel:zv,mask:new _v(F)},E.segmentation=W),[2,[E]])}})})},i.prototype.poseSegmentationFiltering=function(t){var e=this.prevFilteredSegmentationMask;return e.size===0?this.prevFilteredSegmentationMask=t:(this.prevFilteredSegmentationMask=fv(e,t,Ev),Pe(t)),Pe(e),this.prevFilteredSegmentationMask},i.prototype.dispose=function(){this.detectorModel.dispose(),this.landmarkModel.dispose(),Pe([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h,this.prevFilteredSegmentationMask])},i.prototype.reset=function(){this.regionOfInterest=null,this.enableSegmentation&&(Pe(this.prevFilteredSegmentationMask),this.prevFilteredSegmentationMask=dt([],[0,0])),this.visibilitySmoothingFilterActual=null,this.visibilitySmoothingFilterAuxiliary=null,this.landmarksSmoothingFilterActual=null,this.landmarksSmoothingFilterAuxiliary=null},i.prototype.detectPose=function(t){return re(this,void 0,void 0,function(){var e,r,o,n,a,u,c,h,p,d;return oe(this,function(m){switch(m.label){case 0:return e=br(t,Iv),r=e.imageTensor,o=e.padding,n=this.detectorModel.predict(r),a=hv(n),u=a.boxes,[4,mv([c=a.logits,u],this.anchorTensor,Sv)];case 1:return(h=m.sent()).length===0?(Pe([r,n,c,u]),[2,h]):[4,dv(h,this.maxPoses,kv)];case 2:return p=m.sent(),d=function(x,y){x===void 0&&(x=[]);for(var w=y.left,b=y.top,I=y.left+y.right,R=y.top+y.bottom,P=0;P<x.length;P++){var A=x[P],N=A.locationData.relativeBoundingBox,D=(N.xMin-w)/(1-I),T=(N.yMin-b)/(1-R),E=N.width/(1-I),F=N.height/(1-R);N.xMin=D,N.yMin=T,N.width=E,N.height=F,N.xMax=D+E,N.yMax=T+F;var W=A.locationData.relativeKeypoints;W&&W.forEach(function(B){var X=(B.x-w)/(1-I),G=(B.y-b)/(1-R);B.x=X,B.y=G})}return x}(p,o),Pe([r,n,c,u]),[2,d]}})})},i.prototype.poseDetectionToRoi=function(t,e){return us(ar(t,e,{rotationVectorEndKeypointIndex:1,rotationVectorStartKeypointIndex:0,rotationVectorTargetAngleDegree:90}),e,cs)},i.prototype.poseLandmarksByRoi=function(t,e){return re(this,void 0,void 0,function(){var r,o,n,a,u,c,h,p,d,m,x,y,w,b;return oe(this,function(I){switch(I.label){case 0:if(r=Nt(e),o=br(e,Rv,t),n=o.imageTensor,a=o.padding,u=o.transformationMatrix,this.modelType!=="lite"&&this.modelType!=="full"&&this.modelType!=="heavy")throw new Error("Model type must be one of lite, full or heavy,"+"but got ".concat(this.modelType));return c=["ld_3d","output_poseflag","activation_heatmap","world_3d"],this.enableSegmentation&&c.push("activation_segmentation"),h=this.landmarkModel.execute(n,c),[4,this.tensorsToPoseLandmarksAndSegmentation(h)];case 1:return(p=I.sent())==null?(Pe(h),Pe(n),[2,null]):(d=p.landmarks,m=p.auxiliaryLandmarks,x=p.poseScore,y=p.worldLandmarks,w=p.segmentationMask,[4,this.poseLandmarksAndSegmentationInverseProjection(r,t,a,u,d,m,y,w)]);case 2:return b=I.sent(),Pe(h),Pe(n),[2,ue({poseScore:x},b)]}})})},i.prototype.poseLandmarksAndSegmentationInverseProjection=function(t,e,r,o,n,a,u,c){return re(this,void 0,void 0,function(){var h,p,d,m,x,y;return oe(this,function(w){return h=ns(n,r),p=ns(a,r),d=rs(h,e),m=rs(p,e),x=function(b,I){for(var R=[],P=0,A=b;P<A.length;P++){var N=A[P],D=N.x,T=N.y,E=I.rotation,F=Math.cos(E)*D-Math.sin(E)*T,W=Math.sin(E)*D+Math.cos(E)*T,B=ue({},N);B.x=F,B.y=W,R.push(B)}return R}(u,e),y=null,this.enableSegmentation&&(y=be(function(){var b=c.shape,I=b[0],R=b[1],P=function(D){var T=Sn(new Array(16).fill(0));T[0][0]=Ie(D,0,0),T[1][0]=-Ie(D,0,1),T[2][0]=Ie(D,0,2),T[3][0]=-Ie(D,0,3),T[0][2]=Ie(D,2,0),T[1][2]=-Ie(D,2,1),T[2][2]=Ie(D,2,2),T[3][2]=-Ie(D,2,3),T[0][1]=-Ie(D,1,0),T[1][1]=Ie(D,1,1),T[2][1]=-Ie(D,1,2),T[3][1]=Ie(D,1,3),T[0][3]=-Ie(D,3,0),T[1][3]=Ie(D,3,1),T[2][3]=-Ie(D,3,2),T[3][3]=Ie(D,3,3);for(var E=D[0][0]*T[0][0]+D[1][0]*T[0][1]+D[2][0]*T[0][2]+D[3][0]*T[0][3],F=0;F<T.length;F++)for(var W=0;W<T.length;W++)T[F][W]/=E;return T}(o),A=dt(bn(P,{width:R,height:I},t),[1,8]),N=[1,I,R,1];return ce(kt.transform(Je(c,N),A,"bilinear","constant",0,[t.height,t.width]),[0,3])}),Pe(c)),[2,{landmarks:d,auxiliaryLandmarks:m,worldLandmarks:x,segmentationMask:y}]})})},i.prototype.tensorsToPoseLandmarksAndSegmentation=function(t){return re(this,void 0,void 0,function(){var e,r,o,n,a,u,c,h,p,d,m,x,y;return oe(this,function(w){switch(w.label){case 0:return e=t[0],r=t[1],o=t[2],n=t[3],a=this.enableSegmentation?t[4]:null,[4,r.data()];case 1:return(u=w.sent()[0])<.5?[2,null]:[4,as(e,Pv)];case 2:return[4,pv(w.sent(),o,$v)];case 3:return c=w.sent(),h=c.slice(0,33),p=c.slice(33,35),[4,as(n,Av)];case 4:return d=w.sent(),m=d.slice(0,33),x=function(b,I,R){for(var P=[],A=0;A<b.length;A++){var N=ue({},I[A]);N.score=b[A].score,P.push(N)}return P}(h,m),y=this.enableSegmentation?function(b,I,R){return be(function(){var P=ce(b,[0]),A=P.shape[2];if(A===1){var N=P;switch(I.activation){case"none":break;case"sigmoid":N=Tr(N);break;case"softmax":throw new Error("Softmax activation requires two channels.");default:throw new Error("Activation not supported (".concat(I.activation,")"))}var D=N;return ce(D,[2])}throw new Error("Unsupported number of tensor channels ".concat(A))})}(a,Fv):null,[2,{landmarks:h,auxiliaryLandmarks:p,poseScore:u,worldLandmarks:x,segmentationMask:y}]}})})},i.prototype.poseLandmarksToRoi=function(t,e){return us(ar(ss(t),e,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:90}),e,cs)},i.prototype.poseLandmarkFiltering=function(t,e,r,o){var n,a,u;if(this.timestamp!=null&&this.enableSmoothing){var c=ar(ss(e),o,{rotationVectorEndKeypointIndex:0,rotationVectorStartKeypointIndex:1,rotationVectorTargetAngleDegree:90});this.visibilitySmoothingFilterActual==null&&(this.visibilitySmoothingFilterActual=new ls(hs)),n=this.visibilitySmoothingFilterActual.apply(t),this.visibilitySmoothingFilterAuxiliary==null&&(this.visibilitySmoothingFilterAuxiliary=new ls(hs)),a=this.visibilitySmoothingFilterAuxiliary.apply(e),u=this.visibilitySmoothingFilterActual.apply(r),this.landmarksSmoothingFilterActual==null&&(this.landmarksSmoothingFilterActual=new hr(Nv)),n=this.landmarksSmoothingFilterActual.apply(n,this.timestamp,o,!0,c),this.landmarksSmoothingFilterAuxiliary==null&&(this.landmarksSmoothingFilterAuxiliary=new hr(Dv)),a=this.landmarksSmoothingFilterAuxiliary.apply(a,this.timestamp,o,!0,c),this.worldLandmarksSmoothingFilterActual==null&&(this.worldLandmarksSmoothingFilterActual=new hr(Tv)),u=this.worldLandmarksSmoothingFilterActual.apply(r,this.timestamp)}else n=t,a=e,u=r;return{actualLandmarksFiltered:n,auxiliaryLandmarksFiltered:a,actualWorldLandmarksFiltered:u}},i}();function Lv(i){return re(this,void 0,void 0,function(){var t,e,r,o,n,a;return oe(this,function(u){switch(u.label){case 0:return t=function(c){var h=ue({},c??bt);if(h.enableSmoothing==null&&(h.enableSmoothing=bt.enableSmoothing),h.enableSegmentation==null&&(h.enableSegmentation=bt.enableSegmentation),h.smoothSegmentation==null&&(h.smoothSegmentation=bt.smoothSegmentation),h.modelType==null&&(h.modelType=bt.modelType),h.detectorModelUrl==null&&(h.detectorModelUrl=bt.detectorModelUrl),h.landmarkModelUrl==null)switch(h.modelType){case"lite":h.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/lite/2";break;case"heavy":h.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/heavy/2";break;case"full":default:h.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2"}return h}(i),e=typeof t.detectorModelUrl=="string"&&t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,r=typeof t.landmarkModelUrl=="string"&&t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Promise.all([Pt(t.detectorModelUrl,{fromTFHub:e}),Pt(t.landmarkModelUrl,{fromTFHub:r})])];case 1:return o=u.sent(),n=o[0],a=o[1],[2,new Mv(n,a,t.enableSmoothing,t.enableSegmentation,t.smoothSegmentation,t.modelType)]}})})}var it,je,Pn=function(){function i(t){(function(e){if(e.maxTracks<1)throw new Error("Must specify 'maxTracks' to be at least 1, but "+"encountered ".concat(e.maxTracks));if(e.maxAge<=0)throw new Error("Must specify 'maxAge' to be positive, but "+"encountered ".concat(e.maxAge));if(e.keypointTrackerParams!==void 0){if(e.keypointTrackerParams.keypointConfidenceThreshold<0||e.keypointTrackerParams.keypointConfidenceThreshold>1)throw new Error("Must specify 'keypointConfidenceThreshold' to be in the range [0, 1], but encountered "+"".concat(e.keypointTrackerParams.keypointConfidenceThreshold));if(e.keypointTrackerParams.minNumberOfKeypoints<1)throw new Error("Must specify 'minNumberOfKeypoints' to be at least 1, but "+"encountered ".concat(e.keypointTrackerParams.minNumberOfKeypoints));for(var r=0,o=e.keypointTrackerParams.keypointFalloff;r<o.length;r++){var n=o[r];if(n<=0)throw new Error("Must specify each keypoint falloff parameterto be positive "+"but encountered ".concat(n))}}})(t),this.tracks=[],this.maxTracks=t.maxTracks,this.maxAge=1e3*t.maxAge,this.minSimilarity=t.minSimilarity,this.nextID=1}return i.prototype.apply=function(t,e){this.filterOldTracks(e);var r=this.computeSimilarity(t);return this.assignTracks(t,r,e),this.updateTracks(e),t},i.prototype.getTracks=function(){return this.tracks.slice()},i.prototype.getTrackIDs=function(){return new Set(this.tracks.map(function(t){return t.id}))},i.prototype.filterOldTracks=function(t){var e=this;this.tracks=this.tracks.filter(function(r){return t-r.lastTimestamp<=e.maxAge})},i.prototype.assignTracks=function(t,e,r){for(var o=Array.from(Array(e[0].length).keys()),n=[],a=0,u=Array.from(Array(t.length).keys());a<u.length;a++){var c=u[a];if(o.length!==0){for(var h=-1,p=-1,d=0,m=o;d<m.length;d++){var x=m[d],y=e[c][x];y>=this.minSimilarity&&y>p&&(h=x,p=y)}if(h>=0){var w=this.tracks[h];w=Object.assign(w,this.createTrack(t[c],r,w.id)),t[c].id=w.id;var b=o.indexOf(h);o.splice(b,1)}else n.push(c)}else n.push(c)}for(var I=0,R=n;I<R.length;I++){c=R[I];var P=this.createTrack(t[c],r);this.tracks.push(P),t[c].id=P.id}},i.prototype.updateTracks=function(t){this.tracks.sort(function(e,r){return r.lastTimestamp-e.lastTimestamp}),this.tracks=this.tracks.slice(0,this.maxTracks)},i.prototype.createTrack=function(t,e,r){var o={id:r||this.nextTrackID(),lastTimestamp:e,keypoints:ht([],t.keypoints,!0).map(function(n){return ue({},n)})};return t.box!==void 0&&(o.box=ue({},t.box)),o},i.prototype.nextTrackID=function(){var t=this.nextID;return this.nextID+=1,t},i.prototype.remove=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.tracks=this.tracks.filter(function(r){return!t.includes(r.id)})},i.prototype.reset=function(){this.tracks=[]},i}(),Ov=function(i){function t(e){return i.call(this,e)||this}return xn(t,i),t.prototype.computeSimilarity=function(e){var r=this;return e.length===0||this.tracks.length===0?[[]]:e.map(function(o){return r.tracks.map(function(n){return r.iou(o,n)})})},t.prototype.iou=function(e,r){var o=Math.max(e.box.xMin,r.box.xMin),n=Math.max(e.box.yMin,r.box.yMin),a=Math.min(e.box.xMax,r.box.xMax),u=Math.min(e.box.yMax,r.box.yMax);if(o>=a||n>=u)return 0;var c=(a-o)*(u-n);return c/(e.box.width*e.box.height+r.box.width*r.box.height-c)},t}(Pn),Bv=function(i){function t(e){var r=i.call(this,e)||this;return r.keypointThreshold=e.keypointTrackerParams.keypointConfidenceThreshold,r.keypointFalloff=e.keypointTrackerParams.keypointFalloff,r.minNumKeyoints=e.keypointTrackerParams.minNumberOfKeypoints,r}return xn(t,i),t.prototype.computeSimilarity=function(e){if(e.length===0||this.tracks.length===0)return[[]];for(var r=[],o=0,n=e;o<n.length;o++){for(var a=n[o],u=[],c=0,h=this.tracks;c<h.length;c++){var p=h[c];u.push(this.oks(a,p))}r.push(u)}return r},t.prototype.oks=function(e,r){for(var o=this.area(r.keypoints)+1e-6,n=0,a=0,u=0;u<e.keypoints.length;++u){var c=e.keypoints[u],h=r.keypoints[u];if(!(c.score<this.keypointThreshold||h.score<this.keypointThreshold)){a+=1;var p=Math.pow(c.x-h.x,2)+Math.pow(c.y-h.y,2),d=2*this.keypointFalloff[u];n+=Math.exp(-1*p/(2*o*Math.pow(d,2)))}}return a<this.minNumKeyoints?0:n/a},t.prototype.area=function(e){var r=this,o=e.filter(function(c){return c.score>r.keypointThreshold}),n=Math.min.apply(Math,ht([1],o.map(function(c){return c.x}),!1)),a=Math.max.apply(Math,ht([0],o.map(function(c){return c.x}),!1)),u=Math.min.apply(Math,ht([1],o.map(function(c){return c.y}),!1));return(a-n)*(Math.max.apply(Math,ht([0],o.map(function(c){return c.y}),!1))-u)},t}(Pn);function Wv(i){switch(i){case je.BlazePose:return ni.reduce(function(t,e,r){return t[e]=r,t},{});case je.PoseNet:case je.MoveNet:return Ke.reduce(function(t,e,r){return t[e]=r,t},{});default:throw new Error("Model ".concat(i," is not supported."))}}(function(i){i.Keypoint="keypoint",i.BoundingBox="boundingBox"})(it||(it={})),function(i){i.MoveNet="MoveNet",i.BlazePose="BlazePose",i.PoseNet="PoseNet"}(je||(je={}));var ds=["SinglePose.Lightning","SinglePose.Thunder","MultiPose.Lightning"],An={modelType:"SinglePose.Lightning",enableSmoothing:!0},ps={},fs={frequency:30,minCutOff:2.5,beta:300,derivateCutOff:2.5,thresholdCutOff:.5,thresholdBeta:5,disableValueScaling:!0},dr={maxTracks:18,maxAge:1e3,minSimilarity:.2,keypointTrackerParams:{keypointConfidenceThreshold:.3,keypointFalloff:[.026,.025,.025,.035,.035,.079,.079,.072,.072,.062,.062,.107,.107,.087,.087,.089,.089],minNumberOfKeypoints:4}},ms={maxTracks:18,maxAge:1e3,minSimilarity:.15,trackerParams:{}};function Uv(i,t,e,r){for(var o={},n=0,a=Ke;n<a.length;n++){var u=a[n];o[u]=[t[e[u]].y*r.height,t[e[u]].x*r.width]}if(function(R,P){return(R[P.left_hip].score>.2||R[P.right_hip].score>.2)&&(R[P.left_shoulder].score>.2||R[P.right_shoulder].score>.2)}(t,e)){var c=(o.left_hip[0]+o.right_hip[0])/2,h=(o.left_hip[1]+o.right_hip[1])/2,p=function(R,P,A,N,D){for(var T=["left_shoulder","right_shoulder","left_hip","right_hip"],E=0,F=0,W=0;W<T.length;W++)(Z=Math.abs(N-A[T[W]][0]))>E&&(E=Z),(ie=Math.abs(D-A[T[W]][1]))>F&&(F=ie);for(var B=0,X=0,G=0,Q=Object.keys(A);G<Q.length;G++){var Z,ie,we=Q[G];R[P[we]].score<.2||((Z=Math.abs(N-A[we][0]))>B&&(B=Z),(ie=Math.abs(D-A[we][1]))>X&&(X=ie))}return[E,F,B,X]}(t,e,o,c,h),d=p[0],m=p[1],x=p[2],y=p[3],w=Math.max(1.9*m,1.9*d,1.2*x,1.2*y),b=[c-(w=Math.min(w,Math.max(h,r.width-h,c,r.height-c))),h-w];if(w>Math.max(r.width,r.height)/2)return kr(i==null,r);var I=2*w;return{yMin:b[0]/r.height,xMin:b[1]/r.width,yMax:(b[0]+I)/r.height,xMax:(b[1]+I)/r.width,height:(b[0]+I)/r.height-b[0]/r.height,width:(b[1]+I)/r.width-b[1]/r.width}}return kr(i==null,r)}function kr(i,t){var e,r,o,n;return i?t.width>t.height?(e=1,r=t.height/t.width,o=0,n=(t.width/2-t.height/2)/t.width):(e=t.width/t.height,r=1,o=(t.height/2-t.width/2)/t.height,n=0):t.width>t.height?(e=t.width/t.height,r=1,o=(t.height/2-t.width/2)/t.height,n=0):(e=1,r=t.height/t.width,o=0,n=(t.width/2-t.height/2)/t.width),{yMin:o,xMin:n,yMax:o+e,xMax:n+r,height:e,width:r}}function Vv(i){var t,e=i==null?An:ue({},i);if(e.modelType==null)e.modelType="SinglePose.Lightning";else if(ds.indexOf(e.modelType)<0)throw new Error("Invalid architecture ".concat(e.modelType,". ")+"Should be one of ".concat(ds));if(e.enableSmoothing==null&&(e.enableSmoothing=!0),e.minPoseScore!=null&&(e.minPoseScore<0||e.minPoseScore>1))throw new Error("minPoseScore should be between 0.0 and 1.0");if(e.multiPoseMaxDimension!=null&&(e.multiPoseMaxDimension%32!=0||e.multiPoseMaxDimension<32))throw new Error("multiPoseMaxDimension must be a multiple of 32 and higher than 0");if(e.modelType==="MultiPose.Lightning"&&e.enableTracking==null&&(e.enableTracking=!0),e.modelType==="MultiPose.Lightning"&&e.enableTracking===!0)if(e.trackerType==null&&(e.trackerType=it.BoundingBox),e.trackerType===it.Keypoint)e.trackerConfig!=null?e.trackerConfig=function(r){var o=gs(dr,r);return o.keypointTrackerParams=ue({},dr.keypointTrackerParams),r.keypointTrackerParams!=null&&(r.keypointTrackerParams.keypointConfidenceThreshold!=null&&(o.keypointTrackerParams.keypointConfidenceThreshold=r.keypointTrackerParams.keypointConfidenceThreshold),r.keypointTrackerParams.keypointFalloff!=null&&(o.keypointTrackerParams.keypointFalloff=r.keypointTrackerParams.keypointFalloff),r.keypointTrackerParams.minNumberOfKeypoints!=null&&(o.keypointTrackerParams.minNumberOfKeypoints=r.keypointTrackerParams.minNumberOfKeypoints)),o}(e.trackerConfig):e.trackerConfig=dr;else{if(e.trackerType!==it.BoundingBox)throw new Error("Tracker type not supported by MoveNet");e.trackerConfig!=null?e.trackerConfig=(t=e.trackerConfig,gs(ms,t)):e.trackerConfig=ms}return e}function gs(i,t){var e={maxTracks:i.maxTracks,maxAge:i.maxAge,minSimilarity:i.minSimilarity};return t.maxTracks!=null&&(e.maxTracks=t.maxTracks),t.maxAge!=null&&(e.maxAge=t.maxAge),t.minSimilarity!=null&&(e.minSimilarity=t.minSimilarity),e}var Gv=function(){function i(t,e){this.moveNetModel=t,this.modelInputResolution={height:0,width:0},this.keypointIndexByName=Wv(je.MoveNet),e.modelType==="SinglePose.Lightning"?(this.modelInputResolution.width=192,this.modelInputResolution.height=192):e.modelType==="SinglePose.Thunder"&&(this.modelInputResolution.width=256,this.modelInputResolution.height=256),this.multiPoseModel=e.modelType==="MultiPose.Lightning",this.multiPoseModel||(this.keypointFilter=new Sr(fs),this.cropRegionFilterYMin=new tt(.9),this.cropRegionFilterXMin=new tt(.9),this.cropRegionFilterYMax=new tt(.9),this.cropRegionFilterXMax=new tt(.9)),this.enableSmoothing=e.enableSmoothing,e.minPoseScore?this.minPoseScore=e.minPoseScore:this.minPoseScore=.25,e.multiPoseMaxDimension?this.multiPoseMaxDimension=e.multiPoseMaxDimension:this.multiPoseMaxDimension=256,this.enableTracking=e.enableTracking,this.multiPoseModel&&this.enableTracking&&(e.trackerType===it.Keypoint?this.tracker=new Bv(e.trackerConfig):e.trackerType===it.BoundingBox&&(this.tracker=new Ov(e.trackerConfig)),this.enableSmoothing&&(this.keypointFilterMap=new Map))}return i.prototype.runSinglePersonPoseModel=function(t){return re(this,void 0,void 0,function(){var e,r,o,n,a;return oe(this,function(u){switch(u.label){case 0:if((e=this.moveNetModel.execute(t)).shape.length!==4||e.shape[0]!==1||e.shape[1]!==1||e.shape[2]!==17||e.shape[3]!==3)throw e.dispose(),new Error("Unexpected output shape from model: [".concat(e.shape,"]"));return ti()==="webgpu"?[3,1]:(r=e.dataSync(),[3,3]);case 1:return[4,e.data()];case 2:r=u.sent(),u.label=3;case 3:for(e.dispose(),o={keypoints:[],score:0},n=0,a=0;a<17;++a)o.keypoints[a]={y:r[3*a],x:r[3*a+1],score:r[3*a+2]},o.keypoints[a].score>.2&&(++n,o.score+=o.keypoints[a].score);return n>0&&(o.score/=n),[2,o]}})})},i.prototype.runMultiPersonPoseModel=function(t){return re(this,void 0,void 0,function(){var e,r,o,n,a,u,c,h;return oe(this,function(p){switch(p.label){case 0:if((e=this.moveNetModel.execute(t)).shape.length!==3||e.shape[0]!==1||e.shape[2]!==56)throw e.dispose(),new Error("Unexpected output shape from model: [".concat(e.shape,"]"));return ti()==="webgpu"?[3,1]:(r=e.dataSync(),[3,3]);case 1:return[4,e.data()];case 2:r=p.sent(),p.label=3;case 3:for(e.dispose(),o=[],n=r.length/56,a=0;a<n;++a)for(o[a]={keypoints:[]},u=56*a+51,o[a].box={yMin:r[u],xMin:r[u+1],yMax:r[u+2],xMax:r[u+3],width:r[u+3]-r[u+1],height:r[u+2]-r[u]},c=56*a+55,o[a].score=r[c],o[a].keypoints=[],h=0;h<17;++h)o[a].keypoints[h]={y:r[56*a+3*h],x:r[56*a+3*h+1],score:r[56*a+3*h+2]};return[2,o]}})})},i.prototype.estimatePoses=function(t,e,r){return e===void 0&&(e=ps),re(this,void 0,void 0,function(){var o,n,a,u,c,h;return oe(this,function(p){switch(p.label){case 0:return e=function(d){return d==null?ps:ue({},d)}(e),t==null?(this.reset(),[2,[]]):(r==null?In(t)&&(r=1e6*t.currentTime):r*=1e3,o=Mr(t),n=Nt(o),a=ii(o,0),t instanceof Tt||o.dispose(),u=[],this.multiPoseModel?[3,2]:[4,this.estimateSinglePose(a,n,r)]);case 1:return u=p.sent(),[3,4];case 2:return[4,this.estimateMultiplePoses(a,n,r)];case 3:u=p.sent(),p.label=4;case 4:for(c=0;c<u.length;++c)for(h=0;h<u[c].keypoints.length;++h)u[c].keypoints[h].name=Ke[h],u[c].keypoints[h].y*=n.height,u[c].keypoints[h].x*=n.width;return[2,u]}})})},i.prototype.estimateSinglePose=function(t,e,r){return re(this,void 0,void 0,function(){var o,n,a,u,c=this;return oe(this,function(h){switch(h.label){case 0:return this.cropRegion||(this.cropRegion=kr(this.cropRegion==null,e)),o=be(function(){var p=dt([[c.cropRegion.yMin,c.cropRegion.xMin,c.cropRegion.yMax,c.cropRegion.xMax]]),d=Ls([1],"int32"),m=[c.modelInputResolution.height,c.modelInputResolution.width];return At(kt.cropAndResize(t,p,d,m,"bilinear",0),"int32")}),t.dispose(),[4,this.runSinglePersonPoseModel(o)];case 1:if(n=h.sent(),o.dispose(),n.score<this.minPoseScore)return this.reset(),[2,[]];for(a=0;a<n.keypoints.length;++a)n.keypoints[a].y=this.cropRegion.yMin+n.keypoints[a].y*this.cropRegion.height,n.keypoints[a].x=this.cropRegion.xMin+n.keypoints[a].x*this.cropRegion.width;return r!=null&&this.enableSmoothing&&(n.keypoints=this.keypointFilter.apply(n.keypoints,r,1)),u=Uv(this.cropRegion,n.keypoints,this.keypointIndexByName,e),this.cropRegion=this.filterCropRegion(u),[2,[n]]}})})},i.prototype.estimateMultiplePoses=function(t,e,r){return re(this,void 0,void 0,function(){var o,n,a,u,c,h,p,d,m,x,y,w=this;return oe(this,function(b){switch(b.label){case 0:return e.width>e.height?(n=this.multiPoseMaxDimension,a=Math.round(this.multiPoseMaxDimension*e.height/e.width),o=kt.resizeBilinear(t,[a,n]),c=n,h=32*Math.ceil(a/32),u=gr(o,[[0,0],[0,h-a],[0,0],[0,0]])):(n=Math.round(this.multiPoseMaxDimension*e.width/e.height),a=this.multiPoseMaxDimension,o=kt.resizeBilinear(t,[a,n]),c=32*Math.ceil(n/32),h=a,u=gr(o,[[0,0],[0,0],[0,c-n],[0,0]])),o.dispose(),t.dispose(),p=At(u,"int32"),u.dispose(),[4,this.runMultiPersonPoseModel(p)];case 1:for(d=b.sent(),p.dispose(),d=d.filter(function(I){return I.score>=w.minPoseScore}),x=0;x<d.length;++x)for(m=0;m<d[x].keypoints.length;++m)d[x].keypoints[m].y*=h/a,d[x].keypoints[m].x*=c/n;if(this.enableTracking&&(this.tracker.apply(d,r),this.enableSmoothing)){for(x=0;x<d.length;++x)this.keypointFilterMap.has(d[x].id)||this.keypointFilterMap.set(d[x].id,new Sr(fs)),d[x].keypoints=this.keypointFilterMap.get(d[x].id).apply(d[x].keypoints,r,1);y=this.tracker.getTrackIDs(),this.keypointFilterMap.forEach(function(I,R){y.has(R)||w.keypointFilterMap.delete(R)})}return[2,d]}})})},i.prototype.filterCropRegion=function(t){if(t){var e=this.cropRegionFilterYMin.apply(t.yMin),r=this.cropRegionFilterXMin.apply(t.xMin),o=this.cropRegionFilterYMax.apply(t.yMax),n=this.cropRegionFilterXMax.apply(t.xMax);return{yMin:e,xMin:r,yMax:o,xMax:n,height:o-e,width:n-r}}return this.cropRegionFilterYMin.reset(),this.cropRegionFilterXMin.reset(),this.cropRegionFilterYMax.reset(),this.cropRegionFilterXMax.reset(),null},i.prototype.dispose=function(){this.moveNetModel.dispose()},i.prototype.reset=function(){this.cropRegion=null,this.resetFilters()},i.prototype.resetFilters=function(){this.keypointFilter.reset(),this.cropRegionFilterYMin.reset(),this.cropRegionFilterXMin.reset(),this.cropRegionFilterYMax.reset(),this.cropRegionFilterXMax.reset()},i}();function Hv(i){return i===void 0&&(i=An),re(this,void 0,void 0,function(){var t,e,r,o;return oe(this,function(n){switch(n.label){case 0:return t=Vv(i),r=!0,t.modelUrl?(r=typeof t.modelUrl=="string"&&t.modelUrl.indexOf("https://tfhub.dev")>-1,[4,Pt(t.modelUrl,{fromTFHub:r})]):[3,2];case 1:return e=n.sent(),[3,4];case 2:return o=void 0,t.modelType==="SinglePose.Lightning"?o="https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4":t.modelType==="SinglePose.Thunder"?o="https://tfhub.dev/google/tfjs-model/movenet/singlepose/thunder/4":t.modelType==="MultiPose.Lightning"&&(o="https://tfhub.dev/google/tfjs-model/movenet/multipose/lightning/1"),[4,Pt(o,{fromTFHub:r})];case 3:e=n.sent(),n.label=4;case 4:return ti()==="webgl"&&fe().set("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",0),[2,new Gv(e,t)]}})})}var xs={architecture:"MobileNetV1",outputStride:16,multiplier:.75,inputResolution:{height:257,width:257}},ys=["MobileNetV1","ResNet50"],ws={MobileNetV1:[8,16],ResNet50:[16]},jv=[8,16,32],vs={MobileNetV1:[.5,.75,1],ResNet50:[1]},Cs=[1,2,4],bs={maxPoses:1,flipHorizontal:!1},Xv={maxPoses:5,flipHorizontal:!1,scoreThreshold:.5,nmsRadius:20},Kv=[-123.15,-115.9,-103.06];function pr(i){return Math.floor(i/2)}var Yv=function(){function i(t,e){this.priorityQueue=new Array(t),this.numberOfElements=-1,this.getElementValue=e}return i.prototype.enqueue=function(t){this.priorityQueue[++this.numberOfElements]=t,this.swim(this.numberOfElements)},i.prototype.dequeue=function(){var t=this.priorityQueue[0];return this.exchange(0,this.numberOfElements--),this.sink(0),this.priorityQueue[this.numberOfElements+1]=null,t},i.prototype.empty=function(){return this.numberOfElements===-1},i.prototype.size=function(){return this.numberOfElements+1},i.prototype.all=function(){return this.priorityQueue.slice(0,this.numberOfElements+1)},i.prototype.max=function(){return this.priorityQueue[0]},i.prototype.swim=function(t){for(;t>0&&this.less(pr(t),t);)this.exchange(t,pr(t)),t=pr(t)},i.prototype.sink=function(t){for(;2*t<=this.numberOfElements;){var e=2*t;if(e<this.numberOfElements&&this.less(e,e+1)&&e++,!this.less(t,e))break;this.exchange(t,e),t=e}},i.prototype.getValueAt=function(t){return this.getElementValue(this.priorityQueue[t])},i.prototype.less=function(t,e){return this.getValueAt(t)<this.getValueAt(e)},i.prototype.exchange=function(t,e){var r=this.priorityQueue[t];this.priorityQueue[t]=this.priorityQueue[e],this.priorityQueue[e]=r},i}();function qv(i,t,e,r,o,n){for(var a=n.shape,u=a[0],c=a[1],h=!0,p=Math.max(e-o,0),d=Math.min(e+o+1,u),m=p;m<d;++m){for(var x=Math.max(r-o,0),y=Math.min(r+o+1,c),w=x;w<y;++w)if(n.get(m,w,i)>t){h=!1;break}if(!h)break}return h}function Qv(i){return re(this,void 0,void 0,function(){return oe(this,function(t){return[2,Promise.all(i.map(function(e){return e.buffer()}))]})})}function $n(i,t,e,r){return{y:r.get(i,t,e),x:r.get(i,t,e+17)}}function Nn(i,t,e){var r=$n(i.heatmapY,i.heatmapX,i.id,e),o=r.y,n=r.x;return{x:i.heatmapX*t+n,y:i.heatmapY*t+o}}function Dn(i,t,e,r){var o=e.x,n=e.y;return i.some(function(a){var u,c,h,p,d,m,x=a.keypoints;return u=n,c=o,h=x[r].y,p=x[r].x,(d=h-u)*d+(m=p-c)*m<=t})}var Ss=Ke.reduce(function(i,t,e){return i[t]=e,i},{}),Tn=[["nose","left_eye"],["left_eye","left_ear"],["nose","right_eye"],["right_eye","right_ear"],["nose","left_shoulder"],["left_shoulder","left_elbow"],["left_elbow","left_wrist"],["left_shoulder","left_hip"],["left_hip","left_knee"],["left_knee","left_ankle"],["nose","right_shoulder"],["right_shoulder","right_elbow"],["right_elbow","right_wrist"],["right_shoulder","right_hip"],["right_hip","right_knee"],["right_knee","right_ankle"]].map(function(i){var t=i[0],e=i[1];return[Ss[t],Ss[e]]}),fr=Tn.map(function(i){return i[1]}),ks=Tn.map(function(i){return i[0]});function Is(i,t,e){return i<t?t:i>e?e:i}function mr(i,t,e,r){return{y:Is(Math.round(i.y/t),0,e-1),x:Is(Math.round(i.x/t),0,r-1)}}function Rs(i,t){return{x:i.x+t.x,y:i.y+t.y}}function Ps(i,t,e,r,o,n,a,u){u===void 0&&(u=2);for(var c=r.shape,h=c[0],p=c[1],d={y:t.y,x:t.x},m=Rs(d,function(R,P,A){var N=A.shape[2]/2;return{y:A.get(P.y,P.x,R),x:A.get(P.y,P.x,N+R)}}(i,mr(d,n,h,p),a)),x=0;x<u;x++){var y=mr(m,n,h,p),w=$n(y.y,y.x,e,o);m=Rs({x:y.x*n,y:y.y*n},{x:w.x,y:w.y})}var b=mr(m,n,h,p),I=r.get(b.y,b.x,e);return{y:m.y,x:m.x,name:Ke[e],score:I}}function Zv(i,t,e,r,o,n){var a=t.shape[2],u=fr.length,c=new Array(a),h=i.part,p=i.score,d=Nn(h,r,e);c[h.id]={score:p,name:Ke[h.id],y:d.y,x:d.x};for(var m=u-1;m>=0;--m){var x=fr[m],y=ks[m];c[x]&&!c[y]&&(c[y]=Ps(m,c[x],y,t,e,r,n))}for(m=0;m<u;++m)x=ks[m],y=fr[m],c[x]&&!c[y]&&(c[y]=Ps(m,c[x],y,t,e,r,o));return c}function Jv(i,t,e){return e.reduce(function(r,o,n){var a=o.y,u=o.x,c=o.score;return Dn(i,t,{y:a,x:u},n)||(r+=c),r},0)/e.length}function e0(i,t,e,r,o,n,a,u){return a===void 0&&(a=.5),u===void 0&&(u=20),re(this,void 0,void 0,function(){var c,h,p,d,m,x,y,w,b,I,R,P;return oe(this,function(A){switch(A.label){case 0:return[4,Qv([i,t,e,r])];case 1:for(c=A.sent(),h=c[0],p=c[1],d=c[2],m=c[3],x=[],y=function(N,D,T){for(var E=T.shape,F=E[0],W=E[1],B=E[2],X=new Yv(F*W*B,function(we){return we.score}),G=0;G<F;++G)for(var Q=0;Q<W;++Q)for(var Z=0;Z<B;++Z){var ie=T.get(G,Q,Z);ie<N||qv(Z,ie,G,Q,D,T)&&X.enqueue({score:ie,part:{heatmapY:G,heatmapX:Q,id:Z}})}return X}(a,1,h),w=u*u;x.length<n&&!y.empty();)b=y.dequeue(),I=Nn(b.part,o,p),Dn(x,w,I,b.part.id)||(R=Zv(b,h,p,o,d,m),P=Jv(x,w,R),x.push({keypoints:R,score:P}));return[2,x]}})})}function Fn(){for(var i,t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];switch(t.length){case 0:i="fn main() ";break;case 1:i="fn main(".concat(t[0]," : i32)");break;default:throw Error("Unreachable")}return i}var t0=function(){function i(t){this.variableNames=["A","B"],this.size=!0,this.workgroupSize=[32,1,1],this.outputShape=[t[0],1],this.dispatchLayout=U(this.outputShape),this.dispatch=L(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="getpointsConfidenceOp"}return i.prototype.getUserCode=function(){return`
        `.concat(Fn("index"),` {
          if (index < uniforms.size) {
            let y = B[index * 2];
            let x = B[index * 2 + 1];
            let outIndex = y * uniforms.aShape.x * uniforms.aShape.z + x * uniforms.aShape.z + index;
            result[index] = A[outIndex];
          }
        }
        `)},i}();function i0(i,t){if(ri()instanceof Ft)return function(e,r){var o=ri(),n=new t0(r.shape),a=o.runWebGPUProgram(n,[e,r],"float32");return St().makeTensorFromTensorInfo(a)}(i,t);throw new Error("getPointsConfidenceWebGPU is not supported in this backend!")}var r0=function(){function i(t){if(this.variableNames=["A","B"],this.size=!0,this.supportedLastDimension=2,t.length!==2||t[1]!==this.supportedLastDimension)throw new Error("GetOffsetVectorsProgram only supports shape of [x, ".concat(this.supportedLastDimension,"], but current shape is ").concat(t));this.workgroupSize=[32,1,1],this.outputShape=t;var e=[t[0],1];this.dispatchLayout=U(e),this.dispatch=L(this.dispatchLayout,e,this.workgroupSize),this.shaderKey="GetOffsetVectors"}return i.prototype.getUserCode=function(){return`
    fn getOffsetPoint(y: i32, x: i32, index: i32) -> vec2<i32> {
      let outIndexY = y * uniforms.bShape.x * uniforms.bShape.y + x * uniforms.bShape.y + index;
      let outIndexX = outIndexY + uniforms.bShape.z;
      let outY = i32(B[outIndexY]);
      let outX = i32(B[outIndexX]);
      return vec2<i32>(outY, outX);
    }

    `.concat(Fn("index"),` {
      if (index < uniforms.size) {
        let indexY = index * `).concat(this.supportedLastDimension,`;
        let indexX = indexY + 1;
        let heatmapY = A[indexY];
        let heatmapX = A[indexX];
        let out = getOffsetPoint(i32(heatmapY), i32(heatmapX), index);
        result[indexY] = f32(out[0]);
        result[indexX] = f32(out[1]);
      }
    }
    `)},i}();function o0(i,t){if(ri()instanceof Ft)return function(e,r){var o=ri(),n=new r0(e.shape),a=o.runWebGPUProgram(n,[e,r],"float32");return St().makeTensorFromTensorInfo(a)}(i,t);throw new Error("getOffsetVectorsGPU is not supported in this backend!")}function En(i){var t=i.shape,e=t[0],r=t[1],o=t[2];return be(function(){var n,a,u=Je(i,[e*r,o]),c=kh(u,0),h=ii(Fe(c,qt(r,"int32")),1),p=ii((n=c,a=r,be(function(){var d=Fe(n,qt(a,"int32"));return It(n,xe(d,qt(a,"int32")))})),1);return xr([h,p],1)})}function s0(i,t,e){return be(function(){var r=function(o,n){for(var a=[],u=0;u<Ke.length;u++){var c=o.get(u,0).valueOf(),h=o.get(u,1).valueOf(),p=n0(c,h,u,n),d=p.x,m=p.y;a.push(m),a.push(d)}return dt(a,[Ke.length,2])}(i,e);return Ae(At(xe(i.toTensor(),qt(t,"int32")),"float32"),r)})}function n0(i,t,e,r){return{y:r.get(i,t,e),x:r.get(i,t,e+Ke.length)}}function a0(i,t,e){return re(this,void 0,void 0,function(){var r,o,n,a,u,c,h,p,d,m;return oe(this,function(x){switch(x.label){case 0:return r=0,o=En(i),[4,Promise.all([i.buffer(),t.buffer(),o.buffer()])];case 1:return n=x.sent(),a=n[0],u=n[1],c=n[2],[4,(h=s0(c,e,u)).buffer()];case 2:return p=x.sent(),d=Array.from(function(y,w){for(var b=w.shape[0],I=new Float32Array(b),R=0;R<b;R++){var P=w.get(R,0),A=w.get(R,1);I[R]=y.get(P,A,R)}return I}(a,c)),m=d.map(function(y,w){return r+=y,{y:p.get(w,0),x:p.get(w,1),score:y,name:Ke[w]}}),o.dispose(),h.dispose(),[2,{keypoints:m,score:r/m.length}]}})})}function u0(i,t,e){return re(this,void 0,void 0,function(){var r,o,n;return oe(this,function(a){return r=En(i),o=function(u,c,h){return be(function(){var p=o0(u,h);return Ae(At(xe(u,qt(c,"int32")),"float32"),p)})}(r,e,t),n=i0(i,r),[2,[o,n]]})})}function As(i,t){return(i-1)%t==0}var $s="https://storage.googleapis.com/tfjs-models/savedmodel/posenet/mobilenet/",Ns="https://storage.googleapis.com/tfjs-models/savedmodel/posenet/resnet50/";function Ds(i,t){return function(e,r){return(e-1)%r==0}(i,t)?i:Math.floor(i/t)*t+1}var Ts=function(){function i(t,e){this.posenetModel=t;var r=this.posenetModel.inputs[0].shape;ne(r[1]===-1&&r[2]===-1,function(){return"Input shape [".concat(r[1],", ").concat(r[2],"] ")+"must both be equal to or -1"});var o,n,a=(o=e.inputResolution,n=e.outputStride,{height:Ds(o.height,n),width:Ds(o.width,n)});(function(u){ne(jv.indexOf(u)>=0,function(){return"outputStride of ".concat(u," is invalid. ")+"It must be either 8 or 16."})})(e.outputStride),function(u,c){ne(As(u.height,c),function(){return"height of ".concat(u.height," is invalid for output stride ")+"".concat(c,".")}),ne(As(u.width,c),function(){return"width of ".concat(u.width," is invalid for output stride ")+"".concat(c,".")})}(a,e.outputStride),this.inputResolution=a,this.outputStride=e.outputStride,this.architecture=e.architecture}return i.prototype.estimatePoses=function(t,e){return e===void 0&&(e=bs),re(this,void 0,void 0,function(){return oe(this,function(r){return[2,this.estimatePosesGPU(t,e,!1)]})})},i.prototype.estimatePosesGPU=function(t,e,r){return e===void 0&&(e=bs),r===void 0&&(r=!1),re(this,void 0,void 0,function(){var o,n,a,u,c,h,p,d,m,x,y,w,b,I,R,P,A,N;return oe(this,function(D){switch(D.label){case 0:return o=function(T){var E=T;if(E.maxPoses==null&&(E.maxPoses=1),E.maxPoses<=0)throw new Error("Invalid maxPoses ".concat(E.maxPoses,". Should be > 0."));if(E.maxPoses>1){if((E=ue(ue({},Xv),E)).scoreThreshold<0||E.scoreThreshold>1)throw new Error("Invalid scoreThreshold ".concat(E.scoreThreshold,". ")+"Should be in range [0.0, 1.0]");if(E.nmsRadius<=0)throw new Error("Invalid nmsRadius ".concat(E.nmsRadius,"."))}return E}(e),t==null?[2,r?[[],[]]:[]]:(this.maxPoses=o.maxPoses,n=br(t,{outputTensorSize:this.inputResolution,keepAspectRatio:!0,borderMode:"replicate"}),a=n.imageTensor,u=n.padding,c=this.architecture==="ResNet50"?Ae(a,Kv):kn(a,[-1,1]),h=this.posenetModel.predict(c),this.architecture==="ResNet50"?(p=ce(h[2],[0]),d=ce(h[3],[0]),m=ce(h[0],[0]),x=ce(h[1],[0])):(p=ce(h[0],[0]),d=ce(h[1],[0]),m=ce(h[2],[0]),x=ce(h[3],[0])),y=Tr(d),this.maxPoses!==1?[3,5]:r?[4,u0(y,p,this.outputStride)]:[3,2]);case 1:return b=D.sent(),R=b[0],I=b[1],w=[R,I],[3,4];case 2:return[4,a0(y,p,this.outputStride)];case 3:R=D.sent(),w=[R],D.label=4;case 4:return[3,7];case 5:if(r)throw new Error("GPU renderer only supports single pose!");return[4,e0(y,p,m,x,this.outputStride,this.maxPoses,o.scoreThreshold,o.nmsRadius)];case 6:w=D.sent(),D.label=7;case 7:if(r){if(o.flipHorizontal===!0)throw new Error("flipHorizontal is not supported!");P=this.getCanvasInfo(Nt(t),this.inputResolution,u)}else N=Nt(t),A=function(T,E,F,W){var B=E.height,X=E.width,G=B/(F.height*(1-W.top-W.bottom)),Q=X/(F.width*(1-W.left-W.right)),Z=-W.top*F.height,ie=-W.left*F.width;if(Q===1&&G===1&&Z===0&&ie===0)return T;for(var we=0,Se=T;we<Se.length;we++)for(var me=0,Be=Se[we].keypoints;me<Be.length;me++){var Me=Be[me];Me.x=(Me.x+ie)*Q,Me.y=(Me.y+Z)*G}return T}(w,N,this.inputResolution,u),o.flipHorizontal&&(A=function(T,E){for(var F=0,W=T;F<W.length;F++)for(var B=0,X=W[F].keypoints;B<X.length;B++){var G=X[B];G.x=E.width-1-G.x}return T}(A,N));return a.dispose(),c.dispose(),Pe(h),p.dispose(),d.dispose(),m.dispose(),x.dispose(),y.dispose(),[2,r?[w,P]:A]}})})},i.prototype.getCanvasInfo=function(t,e,r){var o=t.height,n=t.width,a=o/(e.height*(1-r.top-r.bottom)),u=n/(e.width*(1-r.left-r.right)),c=-r.top*e.height;return[-r.left*e.width,c,u,a,t.width,t.height]},i.prototype.dispose=function(){this.posenetModel.dispose()},i.prototype.reset=function(){},i}();function l0(i){return i===void 0&&(i=xs),re(this,void 0,void 0,function(){var t,e,r,o,n;return oe(this,function(a){switch(a.label){case 0:return(t=function(p){var d=p||xs;if(d.architecture==null&&(d.architecture="MobileNetV1"),ys.indexOf(d.architecture)<0)throw new Error("Invalid architecture ".concat(d.architecture,". ")+"Should be one of ".concat(ys));if(d.inputResolution==null&&(d.inputResolution={height:257,width:257}),d.outputStride==null&&(d.outputStride=16),ws[d.architecture].indexOf(d.outputStride)<0)throw new Error("Invalid outputStride ".concat(d.outputStride,". ")+"Should be one of ".concat(ws[d.architecture]," ")+"for architecture ".concat(d.architecture,"."));if(d.multiplier==null&&(d.multiplier=1),vs[d.architecture].indexOf(d.multiplier)<0)throw new Error("Invalid multiplier ".concat(d.multiplier,". ")+"Should be one of ".concat(vs[d.architecture]," ")+"for architecture ".concat(d.architecture,"."));if(d.quantBytes==null&&(d.quantBytes=4),Cs.indexOf(d.quantBytes)<0)throw new Error("Invalid quantBytes ".concat(d.quantBytes,". ")+"Should be one of ".concat(Cs," ")+"for architecture ".concat(d.architecture,"."));if(d.architecture==="MobileNetV1"&&d.outputStride===32&&d.multiplier!==1)throw new Error("When using an output stride of 32, you must select 1 as the multiplier.");return d}(i)).architecture!=="ResNet50"?[3,2]:(u=t.outputStride,c=t.quantBytes,h="model-stride".concat(u,".json"),e=c===4?Ns+"float/"+h:Ns+"quant".concat(c,"/")+h,[4,Pt(t.modelUrl||e)]);case 1:return r=a.sent(),[2,new Ts(r,t)];case 2:return o=function(p,d,m){var x={1:"100",.75:"075",.5:"050"},y="model-stride".concat(p,".json");return m===4?$s+"float/".concat(x[d],"/")+y:$s+"quant".concat(m,"/").concat(x[d],"/")+y}(t.outputStride,t.multiplier,t.quantBytes),[4,Pt(t.modelUrl||o)];case 3:return n=a.sent(),[2,new Ts(n,t)]}var u,c,h})})}function c0(i,t){return re(this,void 0,void 0,function(){var e,r;return oe(this,function(o){switch(i){case je.PoseNet:return[2,l0(t)];case je.BlazePose:if(r=void 0,(e=t)!=null){if(e.runtime==="tfjs")return[2,Lv(t)];if(e.runtime==="mediapipe")return[2,cv(t)];r=e.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' "+"or 'mediapipe', but got ".concat(r));case je.MoveNet:return[2,Hv(t)];default:throw new Error("".concat(i," is not a supported model name."))}})})}var h0={modelType:{SINGLEPOSE_LIGHTNING:"SinglePose.Lightning",SINGLEPOSE_THUNDER:"SinglePose.Thunder",MULTIPOSE_LIGHTNING:"MultiPose.Lightning"}};class g0{constructor(){ke(this,"tensorFlowBackend");ke(this,"model",je.MoveNet);ke(this,"detector",null);ke(this,"detectorConfig",{modelType:h0.modelType.SINGLEPOSE_LIGHTNING,enableSmoothing:!1,modelUrl:void 0,minPoseScore:void 0,enableTracking:!0,trackerType:it.BoundingBox});ke(this,"estimationConfig",{maxPoses:1,flipHorizontal:!1});ke(this,"div_video",null);ke(this,"video",null);ke(this,"div_process",null);ke(this,"div_result",null);ke(this,"canvas_process",null);ke(this,"canvas_result",null);ke(this,"corpse",{head:null,left_arm:null,right_arm:null,torso:null,left_leg:null,right_leg:null});ke(this,"drawBoundingBoxes",(t,e)=>{if(!this.canvas_result){console.error("No canvas result");return}const r=this.canvas_result.getContext("2d");if(!r){console.error("No context result");return}r.clearRect(0,0,this.canvas_result.width,this.canvas_result.height),Object.values(Rh).forEach((n,a)=>{const c=n.map(h=>t[h]).filter(h=>h.score>.1);if(c.length>0){const h=this.getBoundingBox(c);h.x-=50,h.y-=50,h.width+=75,h.height+=75,e.strokeStyle="blue",e.strokeRect(h.x,h.y,h.width,h.height);const p=this.corpse[Object.keys(this.corpse)[a]],d=h.width,m=p.height*(d/p.width);r.drawImage(p,h.x,h.y,d,m)}})});ke(this,"getBoundingBox",t=>{const e=t.map(c=>c.x),r=t.map(c=>c.y),o=Math.min(...e),n=Math.max(...e),a=Math.min(...r),u=Math.max(...r);return{x:o,y:a,width:n-o,height:u-a}});ke(this,"drawLines",(t,e)=>{[[0,1],[1,3],[0,2],[2,4],[5,6],[5,7],[7,9],[6,8],[8,10],[5,11],[6,12],[11,12],[11,13],[13,15],[12,14],[14,16]].forEach(o=>{const[n,a]=o;t[n].score>.1&&t[a].score>.1&&(e.beginPath(),e.moveTo(t[n].x,t[n].y),e.lineTo(t[a].x,t[a].y),e.lineWidth=2,e.strokeStyle="red",e.stroke())})});console.log("MagicMirror"),this.tensorFlowBackend="webgpu"}async init(t,e,r){return console.log("MagicMirror init"),await Ih(this.tensorFlowBackend),console.log("TensorFlow backend",ti()),await this.loadModel(),console.log("Model loaded"),await this.getMediaStream(t),console.log("Got media stream"),await this.createCanvasses(e,r),console.log("Canvasses created"),new Promise(o=>{o(!0)})}async loadCorpse(t){return Object.keys(t).forEach(e=>{console.log("key",e),console.log("value",t[e]);const r=new Image;r.src=t[e].path,this.corpse[e]=r}),console.log("Corpse loaded",this.corpse),new Promise(e=>{e(!0)})}async getMediaStream(t){if(!t){console.error("No video div");return}this.div_video=t;const e=document.createElement("video");if(e.width=640,e.height=480,e.muted=!0,navigator.mediaDevices.getUserMedia({video:!0}).then(r=>{e.srcObject=r}),await new Promise(r=>{e.onloadedmetadata=()=>{console.log("Video metadata loaded"),r(!0)}}),e.play(),!e){console.error("No video");return}return t.appendChild(e),this.video=e,await new Promise(r=>{e.addEventListener("loadeddata",()=>{console.log("Video loaded"),r(!0)})}),new Promise(r=>{r(!0)})}async loadModel(){return this.detector=await c0(this.model,this.detectorConfig),new Promise(t=>{t(this.detector)})}async createCanvasses(t,e){if(!t){console.error("No div process");return}if(!e){console.error("No div result");return}this.div_process=t,this.div_result=e;const r=document.createElement("canvas");r.id="canvas_process",r.width=640,r.height=480,this.canvas_process=r;const o=document.createElement("canvas");return o.id="canvas_result",o.width=640,o.height=480,this.canvas_result=o,this.div_process.appendChild(r),this.div_result.appendChild(o),new Promise(n=>{n(!0)})}async readAndDrawPose(){if(!this.detector){console.error("No detector");return}if(!this.video){console.error("No video");return}const t=await this.detector.estimatePoses(this.video,this.estimationConfig);if(!this.canvas_process){console.error("No canvas process");return}this.canvas_process.width!=this.video.width&&(this.canvas_process.width=this.video.width),this.canvas_process.height!=this.video.height&&(this.canvas_process.height=this.video.height);const e=this.canvas_process.getContext("2d");if(!e){console.error("No context");return}e.drawImage(this.video,0,0,this.video.width,this.video.height),t.forEach(r=>{r.keypoints.forEach(o=>{const{x:n,y:a}=o;e.beginPath(),e.arc(n,a,5,0,2*Math.PI),e.fillStyle="red",e.fill()}),this.drawLines(r.keypoints,e),this.drawBoundingBoxes(r.keypoints,e)}),requestAnimationFrame(()=>this.readAndDrawPose())}}export{g0 as M};

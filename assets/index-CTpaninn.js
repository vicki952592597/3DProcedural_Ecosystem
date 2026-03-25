var qu=Object.defineProperty;var Yu=(s,t,e)=>t in s?qu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Rs=(s,t,e)=>Yu(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="170",Ji={ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ju=0,Ql=1,Ku=2,zh=1,Bh=2,Fn=3,_n=0,$e=1,Ie=2,Yn=0,Qi=1,_a=2,tc=3,ec=4,Zu=5,bi=100,$u=101,Ju=102,Qu=103,tf=104,ef=200,nf=201,sf=202,rf=203,va=204,xa=205,of=206,af=207,lf=208,cf=209,hf=210,uf=211,ff=212,df=213,pf=214,ya=0,Ma=1,Sa=2,ss=3,ba=4,Ta=5,wa=6,Ea=7,po=0,mf=1,gf=2,jn=0,_f=1,vf=2,xf=3,kh=4,yf=5,Mf=6,Sf=7,nc="attached",bf="detached",Vh=300,rs=301,os=302,Aa=303,Ca=304,mo=306,Mn=1e3,Sn=1001,oo=1002,Re=1003,Hh=1004,Bs=1005,We=1006,Jr=1007,Vn=1008,$n=1009,Gh=1010,Wh=1011,Ks=1012,gl=1013,Ei=1014,Xe=1015,Kn=1016,_l=1017,vl=1018,as=1020,Xh=35902,qh=1021,Yh=1022,Ve=1023,jh=1024,Kh=1025,ts=1026,ls=1027,xl=1028,yl=1029,Zh=1030,Ml=1031,Sl=1033,Qr=33776,to=33777,eo=33778,no=33779,Ra=35840,Pa=35841,Da=35842,La=35843,Ia=36196,Ua=37492,Na=37496,Fa=37808,Oa=37809,za=37810,Ba=37811,ka=37812,Va=37813,Ha=37814,Ga=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,ja=37820,Ka=37821,io=36492,Za=36494,$a=36495,$h=36283,Ja=36284,Qa=36285,tl=36286,Zs=2300,$s=2301,Eo=2302,ic=2400,sc=2401,rc=2402,Tf=2500,wf=0,Jh=1,el=2,Ef=3200,Af=3201,go=0,Cf=1,ci="",Ae="srgb",qe="srgb-linear",_o="linear",ce="srgb",Ii=7680,oc=519,Rf=512,Pf=513,Df=514,Qh=515,Lf=516,If=517,Uf=518,Nf=519,nl=35044,fi=35048,il="300 es",Hn=2e3,ao=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ac=1234567;const es=Math.PI/180,cs=180/Math.PI;function ln(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[s&255]+Be[s>>8&255]+Be[s>>16&255]+Be[s>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Ce(s,t,e){return Math.max(t,Math.min(e,s))}function bl(s,t){return(s%t+t)%t}function Ff(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Of(s,t,e){return s!==t?(e-s)/(t-s):0}function Hs(s,t,e){return(1-e)*s+e*t}function zf(s,t,e,n){return Hs(s,t,1-Math.exp(-e*n))}function Bf(s,t=1){return t-Math.abs(bl(s,t*2)-t)}function kf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Vf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Hf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Gf(s,t){return s+Math.random()*(t-s)}function Wf(s){return s*(.5-Math.random())}function Xf(s){s!==void 0&&(ac=s);let t=ac+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qf(s){return s*es}function Yf(s){return s*cs}function jf(s){return(s&s-1)===0&&s!==0}function Kf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $f(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const vo={DEG2RAD:es,RAD2DEG:cs,generateUUID:ln,clamp:Ce,euclideanModulo:bl,mapLinear:Ff,inverseLerp:Of,lerp:Hs,damp:zf,pingpong:Bf,smoothstep:kf,smootherstep:Vf,randInt:Hf,randFloat:Gf,randFloatSpread:Wf,seededRandom:Xf,degToRad:qf,radToDeg:Yf,isPowerOfTwo:jf,ceilPowerOfTwo:Kf,floorPowerOfTwo:Zf,setQuaternionFromProperEuler:$f,normalize:re,denormalize:gn};class ${constructor(t=0,e=0){$.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,r,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],x=i[4],v=i[7],C=i[2],w=i[5],A=i[8];return r[0]=o*_+a*S+l*C,r[3]=o*m+a*x+l*w,r[6]=o*p+a*v+l*A,r[1]=c*_+u*S+h*C,r[4]=c*m+u*x+h*w,r[7]=c*p+u*v+h*A,r[2]=f*_+d*S+g*C,r[5]=f*m+d*x+g*w,r[8]=f*p+d*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ao.makeScale(t,e)),this}rotate(t){return this.premultiply(Ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new Vt;function tu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jf(){const s=Js("canvas");return s.style.display="block",s}const lc={};function ks(s){s in lc||(lc[s]=!0,console.warn(s))}function Qf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function td(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ed(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:qe,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?_o:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const cc=[.64,.33,.3,.6,.15,.06],hc=[.2126,.7152,.0722],uc=[.3127,.329],fc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[qe]:{primaries:cc,whitePoint:uc,transfer:_o,toXYZ:fc,fromXYZ:dc,luminanceCoefficients:hc,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:cc,whitePoint:uc,transfer:ce,toXYZ:fc,fromXYZ:dc,luminanceCoefficients:hc,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});let Ui;class nd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=Js("canvas")),Ui.width=t.width,Ui.height=t.height;const n=Ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let id=0;class eu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=ln(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Co(i[o].image)):r.push(Co(i[o]))}else r=Co(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Co(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sd=0;class Ue extends Pi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Sn,i=Sn,r=We,o=Vn,a=Ve,l=$n,c=Ue.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=ln(),this.name="",this.source=new eu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mn:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mn:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Vh;Ue.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,i=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,C=(p+1)/2,w=(u+f)/4,A=(h+_)/4,L=(g+m)/4;return x>v&&x>C?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=A/n):v>C?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=L/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=A/r,i=L/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rd extends Pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new eu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Je extends rd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nu extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class od extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,p*S);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const v=a*S;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ro.copy(this).projectOnVector(t),this.sub(Ro)}reflect(t){return this.sub(Ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new R,pc=new bn;class Jn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),_r.subVectors(this.max,Ps),Ni.subVectors(t.a,Ps),Fi.subVectors(t.b,Ps),Oi.subVectors(t.c,Ps),ei.subVectors(Fi,Ni),ni.subVectors(Oi,Fi),mi.subVectors(Ni,Oi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-mi.z,mi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,mi.z,0,-mi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-mi.y,mi.x,0];return!Po(e,Ni,Fi,Oi,_r)||(e=[1,0,0,0,1,0,0,0,1],!Po(e,Ni,Fi,Oi,_r))?!1:(vr.crossVectors(ei,ni),e=[vr.x,vr.y,vr.z],Po(e,Ni,Fi,Oi,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new R,new R,new R,new R,new R,new R,new R,new R],dn=new R,gr=new Jn,Ni=new R,Fi=new R,Oi=new R,ei=new R,ni=new R,mi=new R,Ps=new R,_r=new R,vr=new R,gi=new R;function Po(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){gi.fromArray(s,r);const a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ad=new Jn,Ds=new R,Do=new R;class Tn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ad.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ds,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Do.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Do)),this.expandByPoint(Ds.copy(t.center).sub(Do))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new R,Lo=new R,xr=new R,ii=new R,Io=new R,yr=new R,Uo=new R;class lr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Lo.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Lo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xr),a=ii.dot(this.direction),l=-ii.dot(xr),c=ii.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Lo).addScaledVector(xr,f),d}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,r){Io.subVectors(e,t),yr.subVectors(n,t),Uo.crossVectors(Io,yr);let o=this.direction.dot(Uo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const l=a*this.direction.dot(yr.crossVectors(ii,yr));if(l<0)return null;const c=a*this.direction.dot(Io.cross(ii));if(c<0||l+c>o)return null;const u=-a*ii.dot(Uo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(t,e,n,i,r,o,a,l,c,u,h,f,d,g,_,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,u,h,f,d,g,_,m)}set(t,e,n,i,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ld,t,cd)}lookAt(t,e,n){const i=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),si.crossVectors(n,tn),si.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),si.crossVectors(n,tn)),si.normalize(),Mr.crossVectors(tn,si),i[0]=si.x,i[4]=Mr.x,i[8]=tn.x,i[1]=si.y,i[5]=Mr.y,i[9]=tn.y,i[2]=si.z,i[6]=Mr.z,i[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],x=n[7],v=n[11],C=n[15],w=i[0],A=i[4],L=i[8],b=i[12],y=i[1],P=i[5],z=i[9],O=i[13],V=i[2],Y=i[6],G=i[10],K=i[14],H=i[3],st=i[7],ct=i[11],_t=i[15];return r[0]=o*w+a*y+l*V+c*H,r[4]=o*A+a*P+l*Y+c*st,r[8]=o*L+a*z+l*G+c*ct,r[12]=o*b+a*O+l*K+c*_t,r[1]=u*w+h*y+f*V+d*H,r[5]=u*A+h*P+f*Y+d*st,r[9]=u*L+h*z+f*G+d*ct,r[13]=u*b+h*O+f*K+d*_t,r[2]=g*w+_*y+m*V+p*H,r[6]=g*A+_*P+m*Y+p*st,r[10]=g*L+_*z+m*G+p*ct,r[14]=g*b+_*O+m*K+p*_t,r[3]=S*w+x*y+v*V+C*H,r[7]=S*A+x*P+v*Y+C*st,r[11]=S*L+x*z+v*G+C*ct,r[15]=S*b+x*O+v*K+C*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+m*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,v=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,C=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,w=e*S+n*x+i*v+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=S*A,t[1]=(_*f*r-h*m*r-_*i*d+n*m*d+h*i*p-n*f*p)*A,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*A,t[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*A,t[4]=x*A,t[5]=(u*m*r-g*f*r+g*i*d-e*m*d-u*i*p+e*f*p)*A,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*A,t[7]=(o*f*r-u*l*r+u*i*c-e*f*c-o*i*d+e*l*d)*A,t[8]=v*A,t[9]=(g*h*r-u*_*r-g*n*d+e*_*d+u*n*p-e*h*p)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*A,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*d-e*a*d)*A,t[12]=C*A,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*m+e*h*m)*A,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*A,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,S=l*c,x=l*u,v=l*h,C=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*C,i[1]=(d+v)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+p))*w,i[6]=(m+S)*w,i[7]=0,i[8]=(g+x)*A,i[9]=(m-S)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=zi.set(i[0],i[1],i[2]).length();const o=zi.set(i[4],i[5],i[6]).length(),a=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],pn.copy(this);const c=1/r,u=1/o,h=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Hn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===Hn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ao)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Hn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-r),f=(e+t)*c,d=(n+i)*u;let g,_;if(a===Hn)g=(o+r)*h,_=-2*h;else if(a===ao)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new R,pn=new zt,ld=new R(0,0,0),cd=new R(1,1,1),si=new R,Mr=new R,tn=new R,mc=new zt,gc=new bn;class hn{constructor(t=0,e=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gc.setFromEuler(this),this.setFromQuaternion(gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class iu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hd=0;const _c=new R,Bi=new bn,Ln=new zt,Sr=new R,Ls=new R,ud=new R,fd=new bn,vc=new R(1,0,0),xc=new R(0,1,0),yc=new R(0,0,1),Mc={type:"added"},dd={type:"removed"},ki={type:"childadded",child:null},No={type:"childremoved",child:null};class le extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new R,e=new hn,n=new bn,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new Vt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(xc,t)}rotateZ(t){return this.rotateOnAxis(yc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(xc,t)}translateZ(t){return this.translateOnAxis(yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ls,Sr,this.up):Ln.lookAt(Sr,Ls,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mc),ki.child=t,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dd),No.child=t,this.dispatchEvent(No),No.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mc),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}le.DEFAULT_UP=new R(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new R,In=new R,Fo=new R,Un=new R,Vi=new R,Hi=new R,Sc=new R,Oo=new R,zo=new R,Bo=new R,ko=new te,Vo=new te,Ho=new te;class an{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){mn.subVectors(i,e),In.subVectors(n,e),Fo.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(In),l=mn.dot(Fo),c=In.dot(In),u=In.dot(Fo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ko.setScalar(0),Vo.setScalar(0),Ho.setScalar(0),ko.fromBufferAttribute(t,e),Vo.fromBufferAttribute(t,n),Ho.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ko,r.x),o.addScaledVector(Vo,r.y),o.addScaledVector(Ho,r.z),o}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),In.subVectors(t,e),mn.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),mn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Vi.subVectors(i,n),Hi.subVectors(r,n),Oo.subVectors(t,n);const l=Vi.dot(Oo),c=Hi.dot(Oo);if(l<=0&&c<=0)return e.copy(n);zo.subVectors(t,i);const u=Vi.dot(zo),h=Hi.dot(zo);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Vi,o);Bo.subVectors(t,r);const d=Vi.dot(Bo),g=Hi.dot(Bo);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Hi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Sc.subVectors(r,i),a=(h-u)/(h-u+(d-g)),e.copy(i).addScaledVector(Sc,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Vi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},br={h:0,s:0,l:0};function Go(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=bl(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Go(o,r,t+1/3),this.g=Go(o,r,t),this.b=Go(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=su[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return Kt.fromWorkingColorSpace(ke.copy(this),t),Math.round(Ce(ke.r*255,0,255))*65536+Math.round(Ce(ke.g*255,0,255))*256+Math.round(Ce(ke.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,i=ke.g,r=ke.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ae){Kt.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,i=ke.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(br);const n=Hs(ri.h,br.h,e),i=Hs(ri.s,br.s,e),r=Hs(ri.l,br.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new ut;ut.NAMES=su;let pd=0;class cn extends Pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=ln(),this.name="",this.blending=Qi,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=xa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gn extends cn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new R,Tr=new $;class _e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nl,this.updateRanges=[],this.gpuType=Xe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nl&&(t.usage=this.usage),t}}class ru extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ou extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let md=0;const sn=new zt,Wo=new le,Gi=new R,en=new Jn,Is=new Jn,Le=new R;class pe extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tu(t)?ou:ru)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Wo.lookAt(t),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(en.min,Is.min),en.expandByPoint(Le),Le.addVectors(en.max,Is.max),en.expandByPoint(Le)):(en.expandByPoint(Is.min),en.expandByPoint(Is.max))}en.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Le.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(t,c),Le.add(Gi)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new R,l[L]=new R;const c=new R,u=new R,h=new R,f=new $,d=new $,g=new $,_=new R,m=new R;function p(L,b,y){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),a[L].add(_),a[b].add(_),a[y].add(_),l[L].add(m),l[b].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let L=0,b=S.length;L<b;++L){const y=S[L],P=y.start,z=y.count;for(let O=P,V=P+z;O<V;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new R,v=new R,C=new R,w=new R;function A(L){C.fromBufferAttribute(i,L),w.copy(C);const b=a[L];x.copy(b),x.sub(C.multiplyScalar(C.dot(b))).normalize(),v.crossVectors(w,b);const P=v.dot(l[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,P)}for(let L=0,b=S.length;L<b;++L){const y=S[L],P=y.start,z=y.count;for(let O=P,V=P+z;O<V;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new _e(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new zt,_i=new lr,wr=new Tn,Tc=new R,Er=new R,Ar=new R,Cr=new R,Xo=new R,Rr=new R,wc=new R,Pr=new R;class ae extends le{constructor(t=new pe,e=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Xo.fromBufferAttribute(h,t),o?Rr.addScaledVector(Xo,u):Rr.addScaledVector(Xo.sub(e),u))}e.add(Rr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(wr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(wr,Tc)===null||_i.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(bc.copy(r).invert(),_i.copy(t.ray).applyMatrix4(bc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,C=x;v<C;v+=3){const w=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);i=Dr(this,p,t,n,c,u,h,w,A,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=Dr(this,o,t,n,c,u,h,S,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,C=x;v<C;v+=3){const w=v,A=v+1,L=v+2;i=Dr(this,p,t,n,c,u,h,w,A,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,v=m+2;i=Dr(this,o,t,n,c,u,h,S,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function gd(s,t,e,n,i,r,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===_n,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Pr);return c<e.near||c>e.far?null:{distance:c,point:Pr.clone(),object:s}}function Dr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Er),s.getVertexPosition(l,Ar),s.getVertexPosition(c,Cr);const u=gd(s,t,e,n,Er,Ar,Cr,wc);if(u){const h=new R;an.getBarycoord(wc,Er,Ar,Cr,h),i&&(u.uv=an.getInterpolatedAttribute(i,a,l,c,h,new $)),r&&(u.uv1=an.getInterpolatedAttribute(r,a,l,c,h,new $)),o&&(u.normal=an.getInterpolatedAttribute(o,a,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new R,materialIndex:0};an.getNormal(Er,Ar,Cr,f.normal),u.face=f,u.barycoord=h}return u}class cr extends pe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(h,2));function g(_,m,p,S,x,v,C,w,A,L,b){const y=v/A,P=C/L,z=v/2,O=C/2,V=w/2,Y=A+1,G=L+1;let K=0,H=0;const st=new R;for(let ct=0;ct<G;ct++){const _t=ct*P-O;for(let Ut=0;Ut<Y;Ut++){const Wt=Ut*y-z;st[_]=Wt*S,st[m]=_t*x,st[p]=V,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=w>0?1:-1,u.push(st.x,st.y,st.z),h.push(Ut/A),h.push(1-ct/L),K+=1}}for(let ct=0;ct<L;ct++)for(let _t=0;_t<A;_t++){const Ut=f+_t+Y*ct,Wt=f+_t+Y*(ct+1),j=f+(_t+1)+Y*(ct+1),rt=f+(_t+1)+Y*ct;l.push(Ut,Wt,rt),l.push(Wt,j,rt),H+=6}a.addGroup(d,H,b),d+=H,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=hs(s[e]);for(const i in n)t[i]=n[i]}return t}function _d(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function au(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const lo={clone:hs,merge:Ge};var vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ye extends cn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=_d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tl extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new R,Ec=new $,Ac=new $;class ve extends Tl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Ec,Ac),e.subVectors(Ac,Ec)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(es*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class yd extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ve(Wi,Xi,t,e);i.layers=this.layers,this.add(i);const r=new ve(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new ve(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new ve(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const l=new ve(Wi,Xi,t,e);l.layers=this.layers,this.add(l);const c=new ve(Wi,Xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lu extends Ue{constructor(t,e,n,i,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Md extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new lu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new cr(5,5,5),r=new ye({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Yn});r.uniforms.tEquirect.value=e;const o=new ae(i,r),a=e.minFilter;return e.minFilter===Vn&&(e.minFilter=We),new yd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const qo=new R,Sd=new R,bd=new Vt;class li{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=qo.subVectors(n,e).cross(Sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bd.getNormalMatrix(t),i=this.coplanarPoint(qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Tn,Lr=new R;class wl{constructor(t=new li,e=new li,n=new li,i=new li,r=new li,o=new li){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,m-d,v-p).normalize(),n[1].setComponents(l+r,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+u,m+g,v+S).normalize(),n[3].setComponents(l-o,f-u,m-g,v-S).normalize(),n[4].setComponents(l-a,f-h,m-_,v-x).normalize(),e===Hn)n[5].setComponents(l+a,f+h,m+_,v+x).normalize();else if(e===ao)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Lr.x=i.normal.x>0?t.max.x:t.min.x,Lr.y=i.normal.y>0?t.max.y:t.min.y,Lr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Td(s){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class wn extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const x=S+c*p,v=S+c*(p+1),C=S+1+c*(p+1),w=S+1+c*p;d.push(x,v,w),d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.width,t.height,t.widthSegments,t.heightSegments)}}var wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ed=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Im=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Km=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:wd,alphahash_pars_fragment:Ed,alphamap_fragment:Ad,alphamap_pars_fragment:Cd,alphatest_fragment:Rd,alphatest_pars_fragment:Pd,aomap_fragment:Dd,aomap_pars_fragment:Ld,batching_pars_vertex:Id,batching_vertex:Ud,begin_vertex:Nd,beginnormal_vertex:Fd,bsdfs:Od,iridescence_fragment:zd,bumpmap_pars_fragment:Bd,clipping_planes_fragment:kd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Gd,color_fragment:Wd,color_pars_fragment:Xd,color_pars_vertex:qd,color_vertex:Yd,common:jd,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:$d,displacementmap_vertex:Jd,emissivemap_fragment:Qd,emissivemap_pars_fragment:tp,colorspace_fragment:ep,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:op,envmap_physical_pars_fragment:_p,envmap_vertex:ap,fog_vertex:lp,fog_pars_vertex:cp,fog_fragment:hp,fog_pars_fragment:up,gradientmap_pars_fragment:fp,lightmap_pars_fragment:dp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:vp,lights_toon_pars_fragment:xp,lights_phong_fragment:yp,lights_phong_pars_fragment:Mp,lights_physical_fragment:Sp,lights_physical_pars_fragment:bp,lights_fragment_begin:Tp,lights_fragment_maps:wp,lights_fragment_end:Ep,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Pp,map_fragment:Dp,map_pars_fragment:Lp,map_particle_fragment:Ip,map_particle_pars_fragment:Up,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Op,morphcolor_vertex:zp,morphnormal_vertex:Bp,morphtarget_pars_vertex:kp,morphtarget_vertex:Vp,normal_fragment_begin:Hp,normal_fragment_maps:Gp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:qp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:jp,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:$p,opaque_fragment:Jp,packing:Qp,premultiplied_alpha_fragment:tm,project_vertex:em,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:am,shadowmap_vertex:lm,shadowmask_pars_fragment:cm,skinbase_vertex:hm,skinning_pars_vertex:um,skinning_vertex:fm,skinnormal_vertex:dm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:_m,transmission_fragment:vm,transmission_pars_fragment:xm,uv_pars_fragment:ym,uv_pars_vertex:Mm,uv_vertex:Sm,worldpos_vertex:bm,background_vert:Tm,background_frag:wm,backgroundCube_vert:Em,backgroundCube_frag:Am,cube_vert:Cm,cube_frag:Rm,depth_vert:Pm,depth_frag:Dm,distanceRGBA_vert:Lm,distanceRGBA_frag:Im,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Fm,linedashed_frag:Om,meshbasic_vert:zm,meshbasic_frag:Bm,meshlambert_vert:km,meshlambert_frag:Vm,meshmatcap_vert:Hm,meshmatcap_frag:Gm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:qm,meshphong_frag:Ym,meshphysical_vert:jm,meshphysical_frag:Km,meshtoon_vert:Zm,meshtoon_frag:$m,points_vert:Jm,points_frag:Qm,shadow_vert:t0,shadow_frag:e0,sprite_vert:n0,sprite_frag:i0},ht={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},yn={basic:{uniforms:Ge([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ge([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ut(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ge([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ge([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ge([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new ut(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ge([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ge([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ge([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ge([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ge([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ge([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ge([ht.common,ht.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ge([ht.lights,ht.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};yn.physical={uniforms:Ge([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Ir={r:0,b:0,g:0},xi=new hn,s0=new zt;function r0(s,t,e,n,i,r,o){const a=new ut(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const v=g(S);v===null?p(a,l):v&&v.isColor&&(p(v,1),x=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===mo)?(u===void 0&&(u=new ae(new cr(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:hs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),xi.copy(x.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(s0.makeRotationFromEuler(xi)),u.material.toneMapped=Kt.getTransfer(v.colorSpace)!==ce,(h!==v||f!==v.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ae(new wn(2,2),new ye({name:"BackgroundMaterial",uniforms:hs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(Ir,au(s)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m}}function o0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(y,P,z,O,V){let Y=!1;const G=h(O,z,P);r!==G&&(r=G,c(r.object)),Y=d(y,O,z,V),Y&&g(y,O,z,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(y,P,z,O),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,P,z){const O=z.wireframe===!0;let V=n[y.id];V===void 0&&(V={},n[y.id]=V);let Y=V[P.id];Y===void 0&&(Y={},V[P.id]=Y);let G=Y[O];return G===void 0&&(G=f(l()),Y[O]=G),G}function f(y){const P=[],z=[],O=[];for(let V=0;V<e;V++)P[V]=0,z[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:O,object:y,attributes:{},index:null}}function d(y,P,z,O){const V=r.attributes,Y=P.attributes;let G=0;const K=z.getAttributes();for(const H in K)if(K[H].location>=0){const ct=V[H];let _t=Y[H];if(_t===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),ct===void 0||ct.attribute!==_t||_t&&ct.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function g(y,P,z,O){const V={},Y=P.attributes;let G=0;const K=z.getAttributes();for(const H in K)if(K[H].location>=0){let ct=Y[H];ct===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor));const _t={};_t.attribute=ct,ct&&ct.data&&(_t.data=ct.data),V[H]=_t,G++}r.attributes=V,r.attributesNum=G,r.index=O}function _(){const y=r.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const z=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;z[y]=1,O[y]===0&&(s.enableVertexAttribArray(y),O[y]=1),V[y]!==P&&(s.vertexAttribDivisor(y,P),V[y]=P)}function S(){const y=r.newAttributes,P=r.enabledAttributes;for(let z=0,O=P.length;z<O;z++)P[z]!==y[z]&&(s.disableVertexAttribArray(z),P[z]=0)}function x(y,P,z,O,V,Y,G){G===!0?s.vertexAttribIPointer(y,P,z,V,Y):s.vertexAttribPointer(y,P,z,O,V,Y)}function v(y,P,z,O){_();const V=O.attributes,Y=z.getAttributes(),G=P.defaultAttributeValues;for(const K in Y){const H=Y[K];if(H.location>=0){let st=V[K];if(st===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){const ct=st.normalized,_t=st.itemSize,Ut=t.get(st);if(Ut===void 0)continue;const Wt=Ut.buffer,j=Ut.type,rt=Ut.bytesPerElement,bt=j===s.INT||j===s.UNSIGNED_INT||st.gpuType===gl;if(st.isInterleavedBufferAttribute){const at=st.data,Pt=at.stride,Ft=st.offset;if(at.isInstancedInterleavedBuffer){for(let It=0;It<H.locationSize;It++)p(H.location+It,at.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let It=0;It<H.locationSize;It++)m(H.location+It);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let It=0;It<H.locationSize;It++)x(H.location+It,_t/H.locationSize,j,ct,Pt*rt,(Ft+_t/H.locationSize*It)*rt,bt)}else{if(st.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)p(H.location+at,st.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let at=0;at<H.locationSize;at++)m(H.location+at);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let at=0;at<H.locationSize;at++)x(H.location+at,_t/H.locationSize,j,ct,_t*rt,_t/H.locationSize*at*rt,bt)}}else if(G!==void 0){const ct=G[K];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(H.location,ct);break;case 3:s.vertexAttrib3fv(H.location,ct);break;case 4:s.vertexAttrib4fv(H.location,ct);break;default:s.vertexAttrib1fv(H.location,ct)}}}}S()}function C(){L();for(const y in n){const P=n[y];for(const z in P){const O=P[z];for(const V in O)u(O[V].object),delete O[V];delete P[z]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const z in P){const O=P[z];for(const V in O)u(O[V].object),delete O[V];delete P[z]}delete n[y.id]}function A(y){for(const P in n){const z=n[P];if(z[y.id]===void 0)continue;const O=z[y.id];for(const V in O)u(O[V].object),delete O[V];delete z[y.id]}}function L(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function a0(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function l0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Ve&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==$n&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Xe&&!L)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function c0(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new li,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,x=S*4;let v=p.clippingState||null;l.value=v,v=u(g,f,x,d);for(let C=0;C!==x;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function h0(s){let t=new WeakMap;function e(o,a){return a===Aa?o.mapping=rs:a===Ca&&(o.mapping=os),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Aa||a===Ca)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Md(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class xo extends Tl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zi=4,Cc=[.125,.215,.35,.446,.526,.582],Ti=20,Yo=new xo,Rc=new ut;let jo=null,Ko=0,Zo=0,$o=!1;const Si=(1+Math.sqrt(5))/2,qi=1/Si,Pc=[new R(-Si,qi,0),new R(Si,qi,0),new R(-qi,0,Si),new R(qi,0,Si),new R(0,Si,-qi),new R(0,Si,qi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){jo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jo,Ko,Zo),this._renderer.xr.enabled=$o,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Kn,format:Ve,colorSpace:qe,depthBuffer:!1},i=Lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u0(r)),this._blurMaterial=f0(r,t,e)}return i}_compileMaterial(t){const e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,Yo)}_sceneToCubeUV(t,e,n,i){const a=new ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Rc),u.toneMapping=jn,u.autoClear=!1;const d=new Gn({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new ae(new cr,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Rc),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Ur(i,S*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===rs||t.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Yo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pc[(i-r-1)%Pc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ae(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ti-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let S=0;for(let A=0;A<Ti;++A){const L=A/_,b=Math.exp(-L*L/2);p.push(b),A===0?S+=b:A<m&&(S+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],C=3*v*(i>x-Zi?i-x+Zi:0),w=4*(this._cubeSize-v);Ur(e,C,w,3*v,2*v),l.setRenderTarget(e),l.render(h,Yo)}}function u0(s){const t=[],e=[],n=[];let i=s;const r=s-Zi+1+Cc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Zi?l=Cc[o-s+Zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,L=w>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];S.set(b,_*g*w),x.set(f,m*g*w);const y=[w,w,w,w,w,w];v.set(y,p*g*w)}const C=new pe;C.setAttribute("position",new _e(S,_)),C.setAttribute("uv",new _e(x,m)),C.setAttribute("faceIndex",new _e(v,p)),t.push(C),i>Zi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lc(s,t,e){const n=new Je(s,t,e);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function f0(s,t,e){const n=new Float32Array(Ti),i=new R(0,1,0);return new ye({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ic(){return new ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Uc(){return new ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Aa||l===Ca,u=l===rs||l===os;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Dc(s)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Dc(s)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function p0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function m0(s,t,e,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,v=S.length;x<v;x+=3){const C=S[x+0],w=S[x+1],A=S[x+2];f.push(C,w,w,A,A,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const C=x+0,w=x+1,A=x+2;f.push(C,w,w,A,A,C)}}else return;const m=new(tu(f)?ou:ru)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function g0(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function v0(s,t,e){const n=new WeakMap,i=new te;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const A=new Float32Array(C*w*4*h),L=new nu(A,C,w,h);L.type=Xe,L.needsUpdate=!0;const b=v*4;for(let P=0;P<h;P++){const z=p[P],O=S[P],V=x[P],Y=C*w*4*P;for(let G=0;G<z.count;G++){const K=G*b;g===!0&&(i.fromBufferAttribute(z,G),A[Y+K+0]=i.x,A[Y+K+1]=i.y,A[Y+K+2]=i.z,A[Y+K+3]=0),_===!0&&(i.fromBufferAttribute(O,G),A[Y+K+4]=i.x,A[Y+K+5]=i.y,A[Y+K+6]=i.z,A[Y+K+7]=0),m===!0&&(i.fromBufferAttribute(V,G),A[Y+K+8]=i.x,A[Y+K+9]=i.y,A[Y+K+10]=i.z,A[Y+K+11]=V.itemSize===4?i.w:1)}}f={count:h,texture:L,size:new $(C,w)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function x0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class hu extends Ue{constructor(t,e,n,i,r,o,a,l,c,u=ts){if(u!==ts&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ts&&(n=Ei),n===void 0&&u===ls&&(n=as),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Re,this.minFilter=l!==void 0?l:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const uu=new Ue,Nc=new hu(1,1),fu=new nu,du=new od,pu=new lu,Fc=[],Oc=[],zc=new Float32Array(16),Bc=new Float32Array(9),kc=new Float32Array(4);function vs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Fc[i];if(r===void 0&&(r=new Float32Array(i),Fc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function De(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function yo(s,t){let e=Oc[t];e===void 0&&(e=new Int32Array(t),Oc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function y0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function M0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2fv(this.addr,t),De(e,t)}}function S0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;s.uniform3fv(this.addr,t),De(e,t)}}function b0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4fv(this.addr,t),De(e,t)}}function T0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,n))return;kc.set(n),s.uniformMatrix2fv(this.addr,!1,kc),De(e,n)}}function w0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,n))return;Bc.set(n),s.uniformMatrix3fv(this.addr,!1,Bc),De(e,n)}}function E0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,n))return;zc.set(n),s.uniformMatrix4fv(this.addr,!1,zc),De(e,n)}}function A0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function C0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2iv(this.addr,t),De(e,t)}}function R0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3iv(this.addr,t),De(e,t)}}function P0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4iv(this.addr,t),De(e,t)}}function D0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function L0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2uiv(this.addr,t),De(e,t)}}function I0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3uiv(this.addr,t),De(e,t)}}function U0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4uiv(this.addr,t),De(e,t)}}function N0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Nc.compareFunction=Qh,r=Nc):r=uu,e.setTexture2D(t||r,i)}function F0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||du,i)}function O0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pu,i)}function z0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fu,i)}function B0(s){switch(s){case 5126:return y0;case 35664:return M0;case 35665:return S0;case 35666:return b0;case 35674:return T0;case 35675:return w0;case 35676:return E0;case 5124:case 35670:return A0;case 35667:case 35671:return C0;case 35668:case 35672:return R0;case 35669:case 35673:return P0;case 5125:return D0;case 36294:return L0;case 36295:return I0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return z0}}function k0(s,t){s.uniform1fv(this.addr,t)}function V0(s,t){const e=vs(t,this.size,2);s.uniform2fv(this.addr,e)}function H0(s,t){const e=vs(t,this.size,3);s.uniform3fv(this.addr,e)}function G0(s,t){const e=vs(t,this.size,4);s.uniform4fv(this.addr,e)}function W0(s,t){const e=vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function X0(s,t){const e=vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function q0(s,t){const e=vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Y0(s,t){s.uniform1iv(this.addr,t)}function j0(s,t){s.uniform2iv(this.addr,t)}function K0(s,t){s.uniform3iv(this.addr,t)}function Z0(s,t){s.uniform4iv(this.addr,t)}function $0(s,t){s.uniform1uiv(this.addr,t)}function J0(s,t){s.uniform2uiv(this.addr,t)}function Q0(s,t){s.uniform3uiv(this.addr,t)}function tg(s,t){s.uniform4uiv(this.addr,t)}function eg(s,t,e){const n=this.cache,i=t.length,r=yo(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||uu,r[o])}function ng(s,t,e){const n=this.cache,i=t.length,r=yo(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||du,r[o])}function ig(s,t,e){const n=this.cache,i=t.length,r=yo(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||pu,r[o])}function sg(s,t,e){const n=this.cache,i=t.length,r=yo(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||fu,r[o])}function rg(s){switch(s){case 5126:return k0;case 35664:return V0;case 35665:return H0;case 35666:return G0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return j0;case 35668:case 35672:return K0;case 35669:case 35673:return Z0;case 5125:return $0;case 36294:return J0;case 36295:return Q0;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}class og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=B0(e.type)}}class ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rg(e.type)}}class lg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function Vc(s,t){s.seq.push(t),s.map[t.id]=t}function cg(s,t,e){const n=s.name,i=n.length;for(Jo.lastIndex=0;;){const r=Jo.exec(n),o=Jo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Vc(e,c===void 0?new og(a,s,t):new ag(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new lg(a),Vc(e,h)),e=h}}}class so{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);cg(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Hc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const hg=37297;let ug=0;function fg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Gc=new Vt;function dg(s){Kt._getMatrix(Gc,Kt.workingColorSpace,s);const t=`mat3( ${Gc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(s)){case _o:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Wc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+fg(s.getShaderSource(t),o)}else return i}function pg(s,t){const e=dg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mg(s,t){let e;switch(t){case _f:e="Linear";break;case vf:e="Reinhard";break;case xf:e="Cineon";break;case kh:e="ACESFilmic";break;case Mf:e="AgX";break;case Sf:e="Neutral";break;case yf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nr=new R;function gg(){Kt.getLuminanceCoefficients(Nr);const s=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _g(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function vg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Vs(s){return s!==""}function Xc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(s){return s.replace(yg,Sg)}const Mg=new Map;function Sg(s,t){let e=Gt[t];if(e===void 0){const n=Mg.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(s){return s.replace(bg,Tg)}function Tg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Eg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rs:case os:t="ENVMAP_TYPE_CUBE";break;case mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ag(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function Cg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case po:t="ENVMAP_BLENDING_MULTIPLY";break;case mf:t="ENVMAP_BLENDING_MIX";break;case gf:t="ENVMAP_BLENDING_ADD";break}return t}function Rg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Pg(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=wg(e),c=Eg(e),u=Ag(e),h=Cg(e),f=Rg(e),d=_g(e),g=vg(r),_=i.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vs).join(`
`),p.length>0&&(p+=`
`)):(m=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),p=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==jn?mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,pg("linearToOutputTexel",e.outputColorSpace),gg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),o=sl(o),o=Xc(o,e),o=qc(o,e),a=sl(a),a=Xc(a,e),a=qc(a,e),o=Yc(o),a=Yc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+o,v=S+p+a,C=Hc(i,i.VERTEX_SHADER,x),w=Hc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,C),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(C).trim(),V=i.getShaderInfoLog(w).trim();let Y=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,w);else{const K=Wc(i,C,"vertex"),H=Wc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+K+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||V==="")&&(G=!1);G&&(P.diagnostics={runnable:Y,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(C),i.deleteShader(w),L=new so(i,_),b=xg(i,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,hg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ug++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let Dg=0;class Lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ig(t),e.set(t,n)),n}}class Ig{constructor(t){this.id=Dg++,this.code=t,this.usedTimes=0}}function Ug(s,t,e,n,i,r,o){const a=new iu,l=new Lg,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,z,O){const V=z.fog,Y=O.geometry,G=b.isMeshStandardMaterial?z.environment:null,K=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),H=K&&K.mapping===mo?K.image.height:null,st=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ct=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_t=ct!==void 0?ct.length:0;let Ut=0;Y.morphAttributes.position!==void 0&&(Ut=1),Y.morphAttributes.normal!==void 0&&(Ut=2),Y.morphAttributes.color!==void 0&&(Ut=3);let Wt,j,rt,bt;if(st){const se=yn[st];Wt=se.vertexShader,j=se.fragmentShader}else Wt=b.vertexShader,j=b.fragmentShader,l.update(b),rt=l.getVertexShaderID(b),bt=l.getFragmentShaderID(b);const at=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Ft=O.isInstancedMesh===!0,It=O.isBatchedMesh===!0,$t=!!b.map,J=!!b.matcap,it=!!K,D=!!b.aoMap,Ct=!!b.lightMap,tt=!!b.bumpMap,yt=!!b.normalMap,lt=!!b.displacementMap,Dt=!!b.emissiveMap,vt=!!b.metalnessMap,E=!!b.roughnessMap,M=b.anisotropy>0,F=b.clearcoat>0,X=b.dispersion>0,Q=b.iridescence>0,q=b.sheen>0,Tt=b.transmission>0,ft=M&&!!b.anisotropyMap,xt=F&&!!b.clearcoatMap,qt=F&&!!b.clearcoatNormalMap,nt=F&&!!b.clearcoatRoughnessMap,Mt=Q&&!!b.iridescenceMap,Lt=Q&&!!b.iridescenceThicknessMap,Nt=q&&!!b.sheenColorMap,St=q&&!!b.sheenRoughnessMap,Zt=!!b.specularMap,Ht=!!b.specularColorMap,ue=!!b.specularIntensityMap,I=Tt&&!!b.transmissionMap,dt=Tt&&!!b.thicknessMap,W=!!b.gradientMap,Z=!!b.alphaMap,gt=b.alphaTest>0,pt=!!b.alphaHash,Bt=!!b.extensions;let Me=jn;b.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Me=s.toneMapping);const ze={shaderID:st,shaderType:b.type,shaderName:b.name,vertexShader:Wt,fragmentShader:j,defines:b.defines,customVertexShaderID:rt,customFragmentShaderID:bt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:It,batchingColor:It&&O._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&O.instanceColor!==null,instancingMorph:Ft&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:qe,alphaToCoverage:!!b.alphaToCoverage,map:$t,matcap:J,envMap:it,envMapMode:it&&K.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Ct,bumpMap:tt,normalMap:yt,displacementMap:f&&lt,emissiveMap:Dt,normalMapObjectSpace:yt&&b.normalMapType===Cf,normalMapTangentSpace:yt&&b.normalMapType===go,metalnessMap:vt,roughnessMap:E,anisotropy:M,anisotropyMap:ft,clearcoat:F,clearcoatMap:xt,clearcoatNormalMap:qt,clearcoatRoughnessMap:nt,dispersion:X,iridescence:Q,iridescenceMap:Mt,iridescenceThicknessMap:Lt,sheen:q,sheenColorMap:Nt,sheenRoughnessMap:St,specularMap:Zt,specularColorMap:Ht,specularIntensityMap:ue,transmission:Tt,transmissionMap:I,thicknessMap:dt,gradientMap:W,opaque:b.transparent===!1&&b.blending===Qi&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:gt,alphaHash:pt,combine:b.combine,mapUv:$t&&_(b.map.channel),aoMapUv:D&&_(b.aoMap.channel),lightMapUv:Ct&&_(b.lightMap.channel),bumpMapUv:tt&&_(b.bumpMap.channel),normalMapUv:yt&&_(b.normalMap.channel),displacementMapUv:lt&&_(b.displacementMap.channel),emissiveMapUv:Dt&&_(b.emissiveMap.channel),metalnessMapUv:vt&&_(b.metalnessMap.channel),roughnessMapUv:E&&_(b.roughnessMap.channel),anisotropyMapUv:ft&&_(b.anisotropyMap.channel),clearcoatMapUv:xt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(b.sheenRoughnessMap.channel),specularMapUv:Zt&&_(b.specularMap.channel),specularColorMapUv:Ht&&_(b.specularColorMap.channel),specularIntensityMapUv:ue&&_(b.specularIntensityMap.channel),transmissionMapUv:I&&_(b.transmissionMap.channel),thicknessMapUv:dt&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(yt||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&($t||Z),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Pt,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ut,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,decodeVideoTexture:$t&&b.map.isVideoTexture===!0&&Kt.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:Dt&&b.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ie,flipSided:b.side===$e,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&b.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(S(y,b),x(y,b),y.push(s.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function S(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function x(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const y=g[b.type];let P;if(y){const z=yn[y];P=lo.clone(z.uniforms)}else P=b.uniforms;return P}function C(b,y){let P;for(let z=0,O=u.length;z<O;z++){const V=u[z];if(V.cacheKey===y){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Pg(s,y,b,r),u.push(P)),P}function w(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:L}}function Ng(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Fg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Kc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Zc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||Fg),n.length>1&&n.sort(f||Kc),i.length>1&&i.sort(f||Kc)}function u(){for(let h=t,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Og(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Zc,s.set(n,[o])):i>=r.length?(o=new Zc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function zg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new ut};break;case"SpotLight":e={position:new R,direction:new R,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Bg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let kg=0;function Vg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Hg(s){const t=new zg,e=Bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new zt,o=new zt;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,x=0,v=0,C=0,w=0,A=0;c.sort(Vg);for(let b=0,y=c.length;b<y;b++){const P=c[b],z=P.color,O=P.intensity,V=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=z.r*O,h+=z.g*O,f+=z.b*O;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],O);A++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=P.shadow.matrix,S++}n.directional[d]=G,d++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(z).multiplyScalar(O),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const K=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,K.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Y,v++}_++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(z).multiplyScalar(O),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const K=P.shadow,H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(O),G.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==S||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==C||L.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=S,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=C,L.numLightProbes=A,n.version=kg++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function $c(s){const t=new Hg(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Gg(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new $c(s),t.set(i,[a])):r>=o.length?(a=new $c(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Wg extends cn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xg extends cn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jg(s,t,e){let n=new wl;const i=new $,r=new $,o=new te,a=new Wg({depthPacking:Af}),l=new Xg,c={},u=e.maxTextureSize,h={[_n]:$e,[$e]:_n,[Ie]:Ie},f=new ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ae(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zh;let p=this.type;this.render=function(w,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Yn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==Fn&&this.type===Fn,V=p===Fn&&this.type!==Fn;for(let Y=0,G=w.length;Y<G;Y++){const K=w[Y],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const st=H.getFrameExtents();if(i.multiply(st),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/st.x),i.x=r.x*st.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/st.y),i.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||O===!0||V===!0){const _t=this.type!==Fn?{minFilter:Re,magFilter:Re}:{};H.map!==null&&H.map.dispose(),H.map=new Je(i.x,i.y,_t),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ct=H.getViewportCount();for(let _t=0;_t<ct;_t++){const Ut=H.getViewport(_t);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),z.viewport(o),H.updateMatrices(K,_t),n=H.getFrustum(),v(A,L,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Fn&&S(H,L),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,y,P)};function S(w,A){const L=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Je(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,L,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,L,d,_,null)}function x(w,A,L,b){let y=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=L.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=y.uuid,O=A.uuid;let V=c[z];V===void 0&&(V={},c[z]=V);let Y=V[O];Y===void 0&&(Y=y.clone(),V[O]=Y,A.addEventListener("dispose",C)),y=Y}if(y.visible=A.visible,y.wireframe=A.wireframe,b===Fn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=s.properties.get(y);z.light=L}return y}function v(w,A,L,b,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Fn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const O=t.update(w),V=w.material;if(Array.isArray(V)){const Y=O.groups;for(let G=0,K=Y.length;G<K;G++){const H=Y[G],st=V[H.materialIndex];if(st&&st.visible){const ct=x(w,st,b,y);w.onBeforeShadow(s,w,A,L,O,ct,H),s.renderBufferDirect(L,null,O,ct,w,H),w.onAfterShadow(s,w,A,L,O,ct,H)}}}else if(V.visible){const Y=x(w,V,b,y);w.onBeforeShadow(s,w,A,L,O,Y,null),s.renderBufferDirect(L,null,O,Y,w,null),w.onAfterShadow(s,w,A,L,O,Y,null)}}const z=w.children;for(let O=0,V=z.length;O<V;O++)v(z[O],A,L,b,y)}function C(w){w.target.removeEventListener("dispose",C);for(const L in c){const b=c[L],y=w.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const Kg={[ya]:Ma,[Sa]:wa,[ba]:Ea,[ss]:Ta,[Ma]:ya,[wa]:Sa,[Ea]:ba,[Ta]:ss};function Zg(s,t){function e(){let I=!1;const dt=new te;let W=null;const Z=new te(0,0,0,0);return{setMask:function(gt){W!==gt&&!I&&(s.colorMask(gt,gt,gt,gt),W=gt)},setLocked:function(gt){I=gt},setClear:function(gt,pt,Bt,Me,ze){ze===!0&&(gt*=Me,pt*=Me,Bt*=Me),dt.set(gt,pt,Bt,Me),Z.equals(dt)===!1&&(s.clearColor(gt,pt,Bt,Me),Z.copy(dt))},reset:function(){I=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,dt=!1,W=null,Z=null,gt=null;return{setReversed:function(pt){if(dt!==pt){const Bt=t.get("EXT_clip_control");dt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const Me=gt;gt=null,this.setClear(Me)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?at(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(pt){W!==pt&&!I&&(s.depthMask(pt),W=pt)},setFunc:function(pt){if(dt&&(pt=Kg[pt]),Z!==pt){switch(pt){case ya:s.depthFunc(s.NEVER);break;case Ma:s.depthFunc(s.ALWAYS);break;case Sa:s.depthFunc(s.LESS);break;case ss:s.depthFunc(s.LEQUAL);break;case ba:s.depthFunc(s.EQUAL);break;case Ta:s.depthFunc(s.GEQUAL);break;case wa:s.depthFunc(s.GREATER);break;case Ea:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=pt}},setLocked:function(pt){I=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),s.clearDepth(pt),gt=pt)},reset:function(){I=!1,W=null,Z=null,gt=null,dt=!1}}}function i(){let I=!1,dt=null,W=null,Z=null,gt=null,pt=null,Bt=null,Me=null,ze=null;return{setTest:function(se){I||(se?at(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(se){dt!==se&&!I&&(s.stencilMask(se),dt=se)},setFunc:function(se,un,Cn){(W!==se||Z!==un||gt!==Cn)&&(s.stencilFunc(se,un,Cn),W=se,Z=un,gt=Cn)},setOp:function(se,un,Cn){(pt!==se||Bt!==un||Me!==Cn)&&(s.stencilOp(se,un,Cn),pt=se,Bt=un,Me=Cn)},setLocked:function(se){I=se},setClear:function(se){ze!==se&&(s.clearStencil(se),ze=se)},reset:function(){I=!1,dt=null,W=null,Z=null,gt=null,pt=null,Bt=null,Me=null,ze=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,C=null,w=null,A=new ut(0,0,0),L=0,b=!1,y=null,P=null,z=null,O=null,V=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=K>=2);let st=null,ct={};const _t=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),Wt=new te().fromArray(_t),j=new te().fromArray(Ut);function rt(I,dt,W,Z){const gt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(I,pt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<W;Bt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(dt+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return pt}const bt={};bt[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(s.DEPTH_TEST),o.setFunc(ss),tt(!1),yt(Ql),at(s.CULL_FACE),D(Yn);function at(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function Pt(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function Ft(I,dt){return h[I]!==dt?(s.bindFramebuffer(I,dt),h[I]=dt,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=dt),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function It(I,dt){let W=d,Z=!1;if(I){W=f.get(dt),W===void 0&&(W=[],f.set(dt,W));const gt=I.textures;if(W.length!==gt.length||W[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,Bt=gt.length;pt<Bt;pt++)W[pt]=s.COLOR_ATTACHMENT0+pt;W.length=gt.length,Z=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,Z=!0);Z&&s.drawBuffers(W)}function $t(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const J={[bi]:s.FUNC_ADD,[$u]:s.FUNC_SUBTRACT,[Ju]:s.FUNC_REVERSE_SUBTRACT};J[Qu]=s.MIN,J[tf]=s.MAX;const it={[ef]:s.ZERO,[nf]:s.ONE,[sf]:s.SRC_COLOR,[va]:s.SRC_ALPHA,[hf]:s.SRC_ALPHA_SATURATE,[lf]:s.DST_COLOR,[of]:s.DST_ALPHA,[rf]:s.ONE_MINUS_SRC_COLOR,[xa]:s.ONE_MINUS_SRC_ALPHA,[cf]:s.ONE_MINUS_DST_COLOR,[af]:s.ONE_MINUS_DST_ALPHA,[uf]:s.CONSTANT_COLOR,[ff]:s.ONE_MINUS_CONSTANT_COLOR,[df]:s.CONSTANT_ALPHA,[pf]:s.ONE_MINUS_CONSTANT_ALPHA};function D(I,dt,W,Z,gt,pt,Bt,Me,ze,se){if(I===Yn){_===!0&&(Pt(s.BLEND),_=!1);return}if(_===!1&&(at(s.BLEND),_=!0),I!==Zu){if(I!==m||se!==b){if((p!==bi||v!==bi)&&(s.blendEquation(s.FUNC_ADD),p=bi,v=bi),se)switch(I){case Qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _a:s.blendFunc(s.ONE,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ec:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _a:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ec:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,x=null,C=null,w=null,A.set(0,0,0),L=0,m=I,b=se}return}gt=gt||dt,pt=pt||W,Bt=Bt||Z,(dt!==p||gt!==v)&&(s.blendEquationSeparate(J[dt],J[gt]),p=dt,v=gt),(W!==S||Z!==x||pt!==C||Bt!==w)&&(s.blendFuncSeparate(it[W],it[Z],it[pt],it[Bt]),S=W,x=Z,C=pt,w=Bt),(Me.equals(A)===!1||ze!==L)&&(s.blendColor(Me.r,Me.g,Me.b,ze),A.copy(Me),L=ze),m=I,b=!1}function Ct(I,dt){I.side===Ie?Pt(s.CULL_FACE):at(s.CULL_FACE);let W=I.side===$e;dt&&(W=!W),tt(W),I.blending===Qi&&I.transparent===!1?D(Yn):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function yt(I){I!==ju?(at(s.CULL_FACE),I!==P&&(I===Ql?s.cullFace(s.BACK):I===Ku?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),P=I}function lt(I){I!==z&&(G&&s.lineWidth(I),z=I)}function Dt(I,dt,W){I?(at(s.POLYGON_OFFSET_FILL),(O!==dt||V!==W)&&(s.polygonOffset(dt,W),O=dt,V=W)):Pt(s.POLYGON_OFFSET_FILL)}function vt(I){I?at(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function E(I){I===void 0&&(I=s.TEXTURE0+Y-1),st!==I&&(s.activeTexture(I),st=I)}function M(I,dt,W){W===void 0&&(st===null?W=s.TEXTURE0+Y-1:W=st);let Z=ct[W];Z===void 0&&(Z={type:void 0,texture:void 0},ct[W]=Z),(Z.type!==I||Z.texture!==dt)&&(st!==W&&(s.activeTexture(W),st=W),s.bindTexture(I,dt||bt[I]),Z.type=I,Z.texture=dt)}function F(){const I=ct[st];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(I){Wt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Wt.copy(I))}function St(I){j.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function Zt(I,dt){let W=c.get(dt);W===void 0&&(W=new WeakMap,c.set(dt,W));let Z=W.get(I);Z===void 0&&(Z=s.getUniformBlockIndex(dt,I.name),W.set(I,Z))}function Ht(I,dt){const Z=c.get(dt).get(I);l.get(dt)!==Z&&(s.uniformBlockBinding(dt,Z,I.__bindingPointIndex),l.set(dt,Z))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},st=null,ct={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,C=null,w=null,A=new ut(0,0,0),L=0,b=!1,y=null,P=null,z=null,O=null,V=null,Wt.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Pt,bindFramebuffer:Ft,drawBuffers:It,useProgram:$t,setBlending:D,setMaterial:Ct,setFlipSided:tt,setCullFace:yt,setLineWidth:lt,setPolygonOffset:Dt,setScissorTest:vt,activeTexture:E,bindTexture:M,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:Q,texImage2D:Mt,texImage3D:Lt,updateUBOMapping:Zt,uniformBlockBinding:Ht,texStorage2D:qt,texStorage3D:nt,texSubImage2D:q,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:xt,scissor:Nt,viewport:St,reset:ue}}function Jc(s,t,e,n){const i=$g(n);switch(e){case qh:return s*t;case jh:return s*t;case Kh:return s*t*2;case xl:return s*t/i.components*i.byteLength;case yl:return s*t/i.components*i.byteLength;case Zh:return s*t*2/i.components*i.byteLength;case Ml:return s*t*2/i.components*i.byteLength;case Yh:return s*t*3/i.components*i.byteLength;case Ve:return s*t*4/i.components*i.byteLength;case Sl:return s*t*4/i.components*i.byteLength;case Qr:case to:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case eo:case no:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pa:case La:return Math.max(s,16)*Math.max(t,8)/4;case Ra:case Da:return Math.max(s,8)*Math.max(t,8)/2;case Ia:case Ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case za:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ka:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case io:case Za:case $a:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $h:case Ja:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Qa:case tl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $g(s){switch(s){case $n:case Gh:return{byteLength:1,components:1};case Ks:case Wh:case Kn:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case Ei:case gl:case Xe:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Jg(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return d?new OffscreenCanvas(E,M):Js("canvas")}function _(E,M,F){let X=1;const Q=vt(E);if((Q.width>F||Q.height>F)&&(X=F/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(X*Q.width),Tt=Math.floor(X*Q.height);h===void 0&&(h=g(q,Tt));const ft=M?g(q,Tt):h;return ft.width=q,ft.height=Tt,ft.getContext("2d").drawImage(E,0,0,q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Tt+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(E,M,F,X,Q=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=M;if(M===s.RED&&(F===s.FLOAT&&(q=s.R32F),F===s.HALF_FLOAT&&(q=s.R16F),F===s.UNSIGNED_BYTE&&(q=s.R8)),M===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(q=s.R8UI),F===s.UNSIGNED_SHORT&&(q=s.R16UI),F===s.UNSIGNED_INT&&(q=s.R32UI),F===s.BYTE&&(q=s.R8I),F===s.SHORT&&(q=s.R16I),F===s.INT&&(q=s.R32I)),M===s.RG&&(F===s.FLOAT&&(q=s.RG32F),F===s.HALF_FLOAT&&(q=s.RG16F),F===s.UNSIGNED_BYTE&&(q=s.RG8)),M===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(q=s.RG8UI),F===s.UNSIGNED_SHORT&&(q=s.RG16UI),F===s.UNSIGNED_INT&&(q=s.RG32UI),F===s.BYTE&&(q=s.RG8I),F===s.SHORT&&(q=s.RG16I),F===s.INT&&(q=s.RG32I)),M===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(q=s.RGB8UI),F===s.UNSIGNED_SHORT&&(q=s.RGB16UI),F===s.UNSIGNED_INT&&(q=s.RGB32UI),F===s.BYTE&&(q=s.RGB8I),F===s.SHORT&&(q=s.RGB16I),F===s.INT&&(q=s.RGB32I)),M===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),F===s.UNSIGNED_INT&&(q=s.RGBA32UI),F===s.BYTE&&(q=s.RGBA8I),F===s.SHORT&&(q=s.RGBA16I),F===s.INT&&(q=s.RGBA32I)),M===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),M===s.RGBA){const Tt=Q?_o:Kt.getTransfer(X);F===s.FLOAT&&(q=s.RGBA32F),F===s.HALF_FLOAT&&(q=s.RGBA16F),F===s.UNSIGNED_BYTE&&(q=Tt===ce?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(E,M){let F;return E?M===null||M===Ei||M===as?F=s.DEPTH24_STENCIL8:M===Xe?F=s.DEPTH32F_STENCIL8:M===Ks&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ei||M===as?F=s.DEPTH_COMPONENT24:M===Xe?F=s.DEPTH_COMPONENT32F:M===Ks&&(F=s.DEPTH_COMPONENT16),F}function C(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Re&&E.minFilter!==We?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function w(E){const M=E.target;M.removeEventListener("dispose",w),L(M),M.isVideoTexture&&u.delete(M)}function A(E){const M=E.target;M.removeEventListener("dispose",A),y(M)}function L(E){const M=n.get(E);if(M.__webglInit===void 0)return;const F=E.source,X=f.get(F);if(X){const Q=X[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(E),Object.keys(X).length===0&&f.delete(F)}n.remove(E)}function b(E){const M=n.get(E);s.deleteTexture(M.__webglTexture);const F=E.source,X=f.get(F);delete X[M.__cacheKey],o.memory.textures--}function y(E){const M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let Q=0;Q<M.__webglFramebuffer[X].length;Q++)s.deleteFramebuffer(M.__webglFramebuffer[X][Q]);else s.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)s.deleteFramebuffer(M.__webglFramebuffer[X]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=E.textures;for(let X=0,Q=F.length;X<Q;X++){const q=n.get(F[X]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[X])}n.remove(E)}let P=0;function z(){P=0}function O(){const E=P;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),P+=1,E}function V(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function Y(E,M){const F=n.get(E);if(E.isVideoTexture&&lt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const X=E.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,E,M);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+M)}function G(E,M){const F=n.get(E);if(E.version>0&&F.__version!==E.version){j(F,E,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+M)}function K(E,M){const F=n.get(E);if(E.version>0&&F.__version!==E.version){j(F,E,M);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+M)}function H(E,M){const F=n.get(E);if(E.version>0&&F.__version!==E.version){rt(F,E,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+M)}const st={[Mn]:s.REPEAT,[Sn]:s.CLAMP_TO_EDGE,[oo]:s.MIRRORED_REPEAT},ct={[Re]:s.NEAREST,[Hh]:s.NEAREST_MIPMAP_NEAREST,[Bs]:s.NEAREST_MIPMAP_LINEAR,[We]:s.LINEAR,[Jr]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},_t={[Rf]:s.NEVER,[Nf]:s.ALWAYS,[Pf]:s.LESS,[Qh]:s.LEQUAL,[Df]:s.EQUAL,[Uf]:s.GEQUAL,[Lf]:s.GREATER,[If]:s.NOTEQUAL};function Ut(E,M){if(M.type===Xe&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===We||M.magFilter===Jr||M.magFilter===Bs||M.magFilter===Vn||M.minFilter===We||M.minFilter===Jr||M.minFilter===Bs||M.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,st[M.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,st[M.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,st[M.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ct[M.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ct[M.minFilter]),M.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,_t[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Re||M.minFilter!==Bs&&M.minFilter!==Vn||M.type===Xe&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Wt(E,M){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",w));const X=M.source;let Q=f.get(X);Q===void 0&&(Q={},f.set(X,Q));const q=V(M);if(q!==E.__cacheKey){Q[q]===void 0&&(Q[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[q].usedTimes++;const Tt=Q[E.__cacheKey];Tt!==void 0&&(Q[E.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(M)),E.__cacheKey=q,E.__webglTexture=Q[q].texture}return F}function j(E,M,F){let X=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=s.TEXTURE_3D);const Q=Wt(E,M),q=M.source;e.bindTexture(X,E.__webglTexture,s.TEXTURE0+F);const Tt=n.get(q);if(q.version!==Tt.__version||Q===!0){e.activeTexture(s.TEXTURE0+F);const ft=Kt.getPrimaries(Kt.workingColorSpace),xt=M.colorSpace===ci?null:Kt.getPrimaries(M.colorSpace),qt=M.colorSpace===ci||ft===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let nt=_(M.image,!1,i.maxTextureSize);nt=Dt(M,nt);const Mt=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type);let Nt=x(M.internalFormat,Mt,Lt,M.colorSpace,M.isVideoTexture);Ut(X,M);let St;const Zt=M.mipmaps,Ht=M.isVideoTexture!==!0,ue=Tt.__version===void 0||Q===!0,I=q.dataReady,dt=C(M,nt);if(M.isDepthTexture)Nt=v(M.format===ls,M.type),ue&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Nt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Nt,nt.width,nt.height,0,Mt,Lt,null));else if(M.isDataTexture)if(Zt.length>0){Ht&&ue&&e.texStorage2D(s.TEXTURE_2D,dt,Nt,Zt[0].width,Zt[0].height);for(let W=0,Z=Zt.length;W<Z;W++)St=Zt[W],Ht?I&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,St.width,St.height,Mt,Lt,St.data):e.texImage2D(s.TEXTURE_2D,W,Nt,St.width,St.height,0,Mt,Lt,St.data);M.generateMipmaps=!1}else Ht?(ue&&e.texStorage2D(s.TEXTURE_2D,dt,Nt,nt.width,nt.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,Mt,Lt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,nt.width,nt.height,0,Mt,Lt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Nt,Zt[0].width,Zt[0].height,nt.depth);for(let W=0,Z=Zt.length;W<Z;W++)if(St=Zt[W],M.format!==Ve)if(Mt!==null)if(Ht){if(I)if(M.layerUpdates.size>0){const gt=Jc(St.width,St.height,M.format,M.type);for(const pt of M.layerUpdates){const Bt=St.data.subarray(pt*gt/St.data.BYTES_PER_ELEMENT,(pt+1)*gt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,pt,St.width,St.height,1,Mt,Bt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,St.width,St.height,nt.depth,Mt,St.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Nt,St.width,St.height,nt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,St.width,St.height,nt.depth,Mt,Lt,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Nt,St.width,St.height,nt.depth,0,Mt,Lt,St.data)}else{Ht&&ue&&e.texStorage2D(s.TEXTURE_2D,dt,Nt,Zt[0].width,Zt[0].height);for(let W=0,Z=Zt.length;W<Z;W++)St=Zt[W],M.format!==Ve?Mt!==null?Ht?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Nt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?I&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,St.width,St.height,Mt,Lt,St.data):e.texImage2D(s.TEXTURE_2D,W,Nt,St.width,St.height,0,Mt,Lt,St.data)}else if(M.isDataArrayTexture)if(Ht){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Nt,nt.width,nt.height,nt.depth),I)if(M.layerUpdates.size>0){const W=Jc(nt.width,nt.height,M.format,M.type);for(const Z of M.layerUpdates){const gt=nt.data.subarray(Z*W/nt.data.BYTES_PER_ELEMENT,(Z+1)*W/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,Mt,Lt,gt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Mt,Lt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,nt.width,nt.height,nt.depth,0,Mt,Lt,nt.data);else if(M.isData3DTexture)Ht?(ue&&e.texStorage3D(s.TEXTURE_3D,dt,Nt,nt.width,nt.height,nt.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Mt,Lt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,nt.width,nt.height,nt.depth,0,Mt,Lt,nt.data);else if(M.isFramebufferTexture){if(ue)if(Ht)e.texStorage2D(s.TEXTURE_2D,dt,Nt,nt.width,nt.height);else{let W=nt.width,Z=nt.height;for(let gt=0;gt<dt;gt++)e.texImage2D(s.TEXTURE_2D,gt,Nt,W,Z,0,Mt,Lt,null),W>>=1,Z>>=1}}else if(Zt.length>0){if(Ht&&ue){const W=vt(Zt[0]);e.texStorage2D(s.TEXTURE_2D,dt,Nt,W.width,W.height)}for(let W=0,Z=Zt.length;W<Z;W++)St=Zt[W],Ht?I&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,Mt,Lt,St):e.texImage2D(s.TEXTURE_2D,W,Nt,Mt,Lt,St);M.generateMipmaps=!1}else if(Ht){if(ue){const W=vt(nt);e.texStorage2D(s.TEXTURE_2D,dt,Nt,W.width,W.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,Lt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Nt,Mt,Lt,nt);m(M)&&p(X),Tt.__version=q.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function rt(E,M,F){if(M.image.length!==6)return;const X=Wt(E,M),Q=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+F);const q=n.get(Q);if(Q.version!==q.__version||X===!0){e.activeTexture(s.TEXTURE0+F);const Tt=Kt.getPrimaries(Kt.workingColorSpace),ft=M.colorSpace===ci?null:Kt.getPrimaries(M.colorSpace),xt=M.colorSpace===ci||Tt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const qt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,Mt=[];for(let Z=0;Z<6;Z++)!qt&&!nt?Mt[Z]=_(M.image[Z],!0,i.maxCubemapSize):Mt[Z]=nt?M.image[Z].image:M.image[Z],Mt[Z]=Dt(M,Mt[Z]);const Lt=Mt[0],Nt=r.convert(M.format,M.colorSpace),St=r.convert(M.type),Zt=x(M.internalFormat,Nt,St,M.colorSpace),Ht=M.isVideoTexture!==!0,ue=q.__version===void 0||X===!0,I=Q.dataReady;let dt=C(M,Lt);Ut(s.TEXTURE_CUBE_MAP,M);let W;if(qt){Ht&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Zt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){W=Mt[Z].mipmaps;for(let gt=0;gt<W.length;gt++){const pt=W[gt];M.format!==Ve?Nt!==null?Ht?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,pt.width,pt.height,Nt,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,Zt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,pt.width,pt.height,Nt,St,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,Zt,pt.width,pt.height,0,Nt,St,pt.data)}}}else{if(W=M.mipmaps,Ht&&ue){W.length>0&&dt++;const Z=vt(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){Ht?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Mt[Z].width,Mt[Z].height,Nt,St,Mt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Zt,Mt[Z].width,Mt[Z].height,0,Nt,St,Mt[Z].data);for(let gt=0;gt<W.length;gt++){const Bt=W[gt].image[Z].image;Ht?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,Bt.width,Bt.height,Nt,St,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,Zt,Bt.width,Bt.height,0,Nt,St,Bt.data)}}else{Ht?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Nt,St,Mt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Zt,Nt,St,Mt[Z]);for(let gt=0;gt<W.length;gt++){const pt=W[gt];Ht?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,Nt,St,pt.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,Zt,Nt,St,pt.image[Z])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),q.__version=Q.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function bt(E,M,F,X,Q,q){const Tt=r.convert(F.format,F.colorSpace),ft=r.convert(F.type),xt=x(F.internalFormat,Tt,ft,F.colorSpace),qt=n.get(M),nt=n.get(F);if(nt.__renderTarget=M,!qt.__hasExternalTextures){const Mt=Math.max(1,M.width>>q),Lt=Math.max(1,M.height>>q);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,xt,Mt,Lt,M.depth,0,Tt,ft,null):e.texImage2D(Q,q,xt,Mt,Lt,0,Tt,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),yt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Q,nt.__webglTexture,0,tt(M)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Q,nt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(E,M,F){if(s.bindRenderbuffer(s.RENDERBUFFER,E),M.depthBuffer){const X=M.depthTexture,Q=X&&X.isDepthTexture?X.type:null,q=v(M.stencilBuffer,Q),Tt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=tt(M);yt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,q,M.width,M.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,q,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,q,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,E)}else{const X=M.textures;for(let Q=0;Q<X.length;Q++){const q=X[Q],Tt=r.convert(q.format,q.colorSpace),ft=r.convert(q.type),xt=x(q.internalFormat,Tt,ft,q.colorSpace),qt=tt(M);F&&yt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,xt,M.width,M.height):yt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,xt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,xt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(M.depthTexture);X.__renderTarget=M,(!X.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const Q=X.__webglTexture,q=tt(M);if(M.depthTexture.format===ts)yt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(M.depthTexture.format===ls)yt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ft(E){const M=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const X=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=X}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pt(M.__webglFramebuffer,E)}else if(F){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=s.createRenderbuffer(),at(M.__webglDepthbuffer[X],E,!1);else{const Q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),at(M.__webglDepthbuffer,E,!1);else{const X=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(E,M,F){const X=n.get(E);M!==void 0&&bt(X.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ft(E)}function $t(E){const M=E.texture,F=n.get(E),X=n.get(M);E.addEventListener("dispose",A);const Q=E.textures,q=E.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=M.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ft]=[];for(let xt=0;xt<M.mipmaps.length;xt++)F.__webglFramebuffer[ft][xt]=s.createFramebuffer()}else F.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)F.__webglFramebuffer[ft]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let ft=0,xt=Q.length;ft<xt;ft++){const qt=n.get(Q[ft]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&yt(E)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ft=0;ft<Q.length;ft++){const xt=Q[ft];F.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ft]);const qt=r.convert(xt.format,xt.colorSpace),nt=r.convert(xt.type),Mt=x(xt.internalFormat,qt,nt,xt.colorSpace,E.isXRRenderTarget===!0),Lt=tt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,Mt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,F.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),at(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)bt(F.__webglFramebuffer[ft][xt],E,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,xt);else bt(F.__webglFramebuffer[ft],E,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,xt=Q.length;ft<xt;ft++){const qt=Q[ft],nt=n.get(qt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),Ut(s.TEXTURE_2D,qt),bt(F.__webglFramebuffer,E,qt,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),m(qt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ft=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,X.__webglTexture),Ut(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)bt(F.__webglFramebuffer[xt],E,M,s.COLOR_ATTACHMENT0,ft,xt);else bt(F.__webglFramebuffer,E,M,s.COLOR_ATTACHMENT0,ft,0);m(M)&&p(ft),e.unbindTexture()}E.depthBuffer&&Ft(E)}function J(E){const M=E.textures;for(let F=0,X=M.length;F<X;F++){const Q=M[F];if(m(Q)){const q=S(E),Tt=n.get(Q).__webglTexture;e.bindTexture(q,Tt),p(q),e.unbindTexture()}}}const it=[],D=[];function Ct(E){if(E.samples>0){if(yt(E)===!1){const M=E.textures,F=E.width,X=E.height;let Q=s.COLOR_BUFFER_BIT;const q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(E),ft=M.length>1;if(ft)for(let xt=0;xt<M.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let xt=0;xt<M.length;xt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[xt]);const qt=n.get(M[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,F,X,0,0,F,X,Q,s.NEAREST),l===!0&&(it.length=0,D.length=0,it.push(s.COLOR_ATTACHMENT0+xt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(it.push(q),D.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let xt=0;xt<M.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[xt]);const qt=n.get(M[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const M=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function tt(E){return Math.min(i.maxSamples,E.samples)}function yt(E){const M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function lt(E){const M=o.render.frame;u.get(E)!==M&&(u.set(E,M),E.update())}function Dt(E,M){const F=E.colorSpace,X=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==qe&&F!==ci&&(Kt.getTransfer(F)===ce?(X!==Ve||Q!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function vt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=It,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=yt}function Qg(s,t){function e(n,i=ci){let r;const o=Kt.getTransfer(i);if(n===$n)return s.UNSIGNED_BYTE;if(n===_l)return s.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Xh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return s.BYTE;if(n===Wh)return s.SHORT;if(n===Ks)return s.UNSIGNED_SHORT;if(n===gl)return s.INT;if(n===Ei)return s.UNSIGNED_INT;if(n===Xe)return s.FLOAT;if(n===Kn)return s.HALF_FLOAT;if(n===qh)return s.ALPHA;if(n===Yh)return s.RGB;if(n===Ve)return s.RGBA;if(n===jh)return s.LUMINANCE;if(n===Kh)return s.LUMINANCE_ALPHA;if(n===ts)return s.DEPTH_COMPONENT;if(n===ls)return s.DEPTH_STENCIL;if(n===xl)return s.RED;if(n===yl)return s.RED_INTEGER;if(n===Zh)return s.RG;if(n===Ml)return s.RG_INTEGER;if(n===Sl)return s.RGBA_INTEGER;if(n===Qr||n===to||n===eo||n===no)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Pa||n===Da||n===La)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===Ua)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===Za||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===io)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$h||n===Ja||n===Qa||n===tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class t_ extends ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ke extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e_={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class s_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ue,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ye({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r_ extends Pi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new s_,m=e.getContextAttributes();let p=null,S=null;const x=[],v=[],C=new $;let w=null;const A=new ve;A.viewport=new te;const L=new ve;L.viewport=new te;const b=[A,L],y=new t_;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let rt=x[j];return rt===void 0&&(rt=new Qo,x[j]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(j){let rt=x[j];return rt===void 0&&(rt=new Qo,x[j]=rt),rt.getGripSpace()},this.getHand=function(j){let rt=x[j];return rt===void 0&&(rt=new Qo,x[j]=rt),rt.getHandSpace()};function O(j){const rt=v.indexOf(j.inputSource);if(rt===-1)return;const bt=x[rt];bt!==void 0&&(bt.update(j.inputSource,j.frame,c||o),bt.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Y);for(let j=0;j<x.length;j++){const rt=v[j];rt!==null&&(v[j]=null,x[j].disconnect(rt))}P=null,z=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,i=null,S=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Je(d.framebufferWidth,d.framebufferHeight,{format:Ve,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,bt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?ls:ts,bt=m.stencil?as:Ei);const Pt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(Pt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Je(f.textureWidth,f.textureHeight,{format:Ve,type:$n,depthTexture:new hu(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(j){for(let rt=0;rt<j.removed.length;rt++){const bt=j.removed[rt],at=v.indexOf(bt);at>=0&&(v[at]=null,x[at].disconnect(bt))}for(let rt=0;rt<j.added.length;rt++){const bt=j.added[rt];let at=v.indexOf(bt);if(at===-1){for(let Ft=0;Ft<x.length;Ft++)if(Ft>=v.length){v.push(bt),at=Ft;break}else if(v[Ft]===null){v[Ft]=bt,at=Ft;break}if(at===-1)break}const Pt=x[at];Pt&&Pt.connect(bt)}}const G=new R,K=new R;function H(j,rt,bt){G.setFromMatrixPosition(rt.matrixWorld),K.setFromMatrixPosition(bt.matrixWorld);const at=G.distanceTo(K),Pt=rt.projectionMatrix.elements,Ft=bt.projectionMatrix.elements,It=Pt[14]/(Pt[10]-1),$t=Pt[14]/(Pt[10]+1),J=(Pt[9]+1)/Pt[5],it=(Pt[9]-1)/Pt[5],D=(Pt[8]-1)/Pt[0],Ct=(Ft[8]+1)/Ft[0],tt=It*D,yt=It*Ct,lt=at/(-D+Ct),Dt=lt*-D;if(rt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Dt),j.translateZ(lt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pt[10]===-1)j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const vt=It+lt,E=$t+lt,M=tt-Dt,F=yt+(at-Dt),X=J*$t/E*vt,Q=it*$t/E*vt;j.projectionMatrix.makePerspective(M,F,X,Q,vt,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function st(j,rt){rt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(rt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let rt=j.near,bt=j.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),y.near=L.near=A.near=rt,y.far=L.far=A.far=bt,(P!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,z=y.far),A.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,y.layers.mask=A.layers.mask|L.layers.mask;const at=j.parent,Pt=y.cameras;st(y,at);for(let Ft=0;Ft<Pt.length;Ft++)st(Pt[Ft],at);Pt.length===2?H(y,A,L):y.projectionMatrix.copy(A.projectionMatrix),ct(j,y,at)};function ct(j,rt,bt){bt===null?j.matrix.copy(rt.matrixWorld):(j.matrix.copy(bt.matrixWorld),j.matrix.invert(),j.matrix.multiply(rt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=cs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let _t=null;function Ut(j,rt){if(u=rt.getViewerPose(c||o),g=rt,u!==null){const bt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let at=!1;bt.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let Ft=0;Ft<bt.length;Ft++){const It=bt[Ft];let $t=null;if(d!==null)$t=d.getViewport(It);else{const it=h.getViewSubImage(f,It);$t=it.viewport,Ft===0&&(t.setRenderTargetTextures(S,it.colorTexture,f.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(S))}let J=b[Ft];J===void 0&&(J=new ve,J.layers.enable(Ft),J.viewport=new te,b[Ft]=J),J.matrix.fromArray(It.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(It.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set($t.x,$t.y,$t.width,$t.height),Ft===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(J)}const Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Ft=h.getDepthInformation(bt[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,i.renderState)}}for(let bt=0;bt<x.length;bt++){const at=v[bt],Pt=x[bt];at!==null&&Pt!==void 0&&Pt.update(at,rt,c||o)}_t&&_t(j,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const Wt=new cu;Wt.setAnimationLoop(Ut),this.setAnimationLoop=function(j){_t=j},this.dispose=function(){}}}const yi=new hn,o_=new zt;function a_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,au(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,yi.copy(v),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(yi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function l_(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function c(S,x){let v=i[S.id];v===void 0&&(g(S),v=u(S),i[S.id]=v,S.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(S,C);const w=t.render.frame;r[S.id]!==w&&(f(S),r[S.id]=w)}function u(S){const x=h();S.__bindingPointIndex=x;const v=s.createBuffer(),C=S.__size,w=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],v=S.uniforms,C=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,A=v.length;w<A;w++){const L=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,y=L.length;b<y;b++){const P=L[b];if(d(P,w,b,C)===!0){const z=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let Y=0;Y<O.length;Y++){const G=O[Y],K=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,z+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,x,v,C){const w=S.value,A=x+"_"+v;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const L=C[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(S){const x=S.uniforms;let v=0;const C=16;for(let A=0,L=x.length;A<L;A++){const b=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,P=b.length;y<P;y++){const z=b[y],O=Array.isArray(z.value)?z.value:[z.value];for(let V=0,Y=O.length;V<Y;V++){const G=O[V],K=_(G),H=v%C,st=H%K.boundary,ct=H+st;v+=st,ct!==0&&C-ct<K.storage&&(v+=C-ct),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=K.storage}}}const w=v%C;return w>0&&(v+=C-w),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class c_{constructor(t={}){const{canvas:e=Jf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=jn,this.toneMappingExposure=1;const v=this;let C=!1,w=0,A=0,L=null,b=-1,y=null;const P=new te,z=new te;let O=null;const V=new ut(0);let Y=0,G=e.width,K=e.height,H=1,st=null,ct=null;const _t=new te(0,0,G,K),Ut=new te(0,0,G,K);let Wt=!1;const j=new wl;let rt=!1,bt=!1;const at=new zt,Pt=new zt,Ft=new R,It=new te,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function it(){return L===null?H:1}let D=n;function Ct(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ml}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),D===null){const U="webgl2";if(D=Ct(U,T),D===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let tt,yt,lt,Dt,vt,E,M,F,X,Q,q,Tt,ft,xt,qt,nt,Mt,Lt,Nt,St,Zt,Ht,ue,I;function dt(){tt=new p0(D),tt.init(),Ht=new Qg(D,tt),yt=new l0(D,tt,t,Ht),lt=new Zg(D,tt),yt.reverseDepthBuffer&&f&&lt.buffers.depth.setReversed(!0),Dt=new _0(D),vt=new Ng,E=new Jg(D,tt,lt,vt,yt,Ht,Dt),M=new h0(v),F=new d0(v),X=new Td(D),ue=new o0(D,X),Q=new m0(D,X,Dt,ue),q=new x0(D,Q,X,Dt),Nt=new v0(D,yt,E),nt=new c0(vt),Tt=new Ug(v,M,F,tt,yt,ue,nt),ft=new a_(v,vt),xt=new Og,qt=new Gg(tt),Lt=new r0(v,M,F,lt,q,d,l),Mt=new jg(v,q,yt),I=new l_(D,Dt,yt,lt),St=new a0(D,tt,Dt),Zt=new g0(D,tt,Dt),Dt.programs=Tt.programs,v.capabilities=yt,v.extensions=tt,v.properties=vt,v.renderLists=xt,v.shadowMap=Mt,v.state=lt,v.info=Dt}dt();const W=new r_(v,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(G,K,!1))},this.getSize=function(T){return T.set(G,K)},this.setSize=function(T,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,K=U,e.width=Math.floor(T*H),e.height=Math.floor(U*H),B===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(G*H,K*H).floor()},this.setDrawingBufferSize=function(T,U,B){G=T,K=U,H=B,e.width=Math.floor(T*B),e.height=Math.floor(U*B),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(_t)},this.setViewport=function(T,U,B,k){T.isVector4?_t.set(T.x,T.y,T.z,T.w):_t.set(T,U,B,k),lt.viewport(P.copy(_t).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Ut)},this.setScissor=function(T,U,B,k){T.isVector4?Ut.set(T.x,T.y,T.z,T.w):Ut.set(T,U,B,k),lt.scissor(z.copy(Ut).multiplyScalar(H).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(T){lt.setScissorTest(Wt=T)},this.setOpaqueSort=function(T){st=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(T=!0,U=!0,B=!0){let k=0;if(T){let N=!1;if(L!==null){const ot=L.texture.format;N=ot===Sl||ot===Ml||ot===yl}if(N){const ot=L.texture.type,mt=ot===$n||ot===Ei||ot===Ks||ot===as||ot===_l||ot===vl,wt=Lt.getClearColor(),Et=Lt.getClearAlpha(),Ot=wt.r,kt=wt.g,At=wt.b;mt?(g[0]=Ot,g[1]=kt,g[2]=At,g[3]=Et,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ot,_[1]=kt,_[2]=At,_[3]=Et,D.clearBufferiv(D.COLOR,0,_))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT),B&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),qt.dispose(),vt.dispose(),M.dispose(),F.dispose(),q.dispose(),ue.dispose(),I.dispose(),Tt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Xl),W.removeEventListener("sessionend",ql),pi.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=Dt.autoReset,U=Mt.enabled,B=Mt.autoUpdate,k=Mt.needsUpdate,N=Mt.type;dt(),Dt.autoReset=T,Mt.enabled=U,Mt.autoUpdate=B,Mt.needsUpdate=k,Mt.type=N}function pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Bt(T){const U=T.target;U.removeEventListener("dispose",Bt),Me(U)}function Me(T){ze(T),vt.remove(T)}function ze(T){const U=vt.get(T).programs;U!==void 0&&(U.forEach(function(B){Tt.releaseProgram(B)}),T.isShaderMaterial&&Tt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,B,k,N,ot){U===null&&(U=$t);const mt=N.isMesh&&N.matrixWorld.determinant()<0,wt=Gu(T,U,B,k,N);lt.setMaterial(k,mt);let Et=B.index,Ot=1;if(k.wireframe===!0){if(Et=Q.getWireframeAttribute(B),Et===void 0)return;Ot=2}const kt=B.drawRange,At=B.attributes.position;let Jt=kt.start*Ot,fe=(kt.start+kt.count)*Ot;ot!==null&&(Jt=Math.max(Jt,ot.start*Ot),fe=Math.min(fe,(ot.start+ot.count)*Ot)),Et!==null?(Jt=Math.max(Jt,0),fe=Math.min(fe,Et.count)):At!=null&&(Jt=Math.max(Jt,0),fe=Math.min(fe,At.count));const me=fe-Jt;if(me<0||me===1/0)return;ue.setup(N,k,wt,B,Et);let Ye,ee=St;if(Et!==null&&(Ye=X.get(Et),ee=Zt,ee.setIndex(Ye)),N.isMesh)k.wireframe===!0?(lt.setLineWidth(k.wireframeLinewidth*it()),ee.setMode(D.LINES)):ee.setMode(D.TRIANGLES);else if(N.isLine){let Rt=k.linewidth;Rt===void 0&&(Rt=1),lt.setLineWidth(Rt*it()),N.isLineSegments?ee.setMode(D.LINES):N.isLineLoop?ee.setMode(D.LINE_LOOP):ee.setMode(D.LINE_STRIP)}else N.isPoints?ee.setMode(D.POINTS):N.isSprite&&ee.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,Rn=N._multiDrawCounts,ne=N._multiDrawCount,fn=Et?X.get(Et).bytesPerElement:1,Li=vt.get(k).currentProgram.getUniforms();for(let Qe=0;Qe<ne;Qe++)Li.setValue(D,"_gl_DrawID",Qe),ee.render(Rt[Qe]/fn,Rn[Qe])}else if(N.isInstancedMesh)ee.renderInstances(Jt,me,N.count);else if(B.isInstancedBufferGeometry){const Rt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Rn=Math.min(B.instanceCount,Rt);ee.renderInstances(Jt,me,Rn)}else ee.render(Jt,me)};function se(T,U,B){T.transparent===!0&&T.side===Ie&&T.forceSinglePass===!1?(T.side=$e,T.needsUpdate=!0,mr(T,U,B),T.side=_n,T.needsUpdate=!0,mr(T,U,B),T.side=Ie):mr(T,U,B)}this.compile=function(T,U,B=null){B===null&&(B=T),p=qt.get(B),p.init(U),x.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==B&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ot=N.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){const wt=ot[mt];se(wt,B,N),k.add(wt)}else se(ot,B,N),k.add(ot)}),x.pop(),p=null,k},this.compileAsync=function(T,U,B=null){const k=this.compile(T,U,B);return new Promise(N=>{function ot(){if(k.forEach(function(mt){vt.get(mt).currentProgram.isReady()&&k.delete(mt)}),k.size===0){N(T);return}setTimeout(ot,10)}tt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let un=null;function Cn(T){un&&un(T)}function Xl(){pi.stop()}function ql(){pi.start()}const pi=new cu;pi.setAnimationLoop(Cn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(T){un=T,W.setAnimationLoop(T),T===null?pi.stop():pi.start()},W.addEventListener("sessionstart",Xl),W.addEventListener("sessionend",ql),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,L),p=qt.get(T,x.length),p.init(U),x.push(p),Pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Pt),bt=this.localClippingEnabled,rt=nt.init(this.clippingPlanes,bt),m=xt.get(T,S.length),m.init(),S.push(m),W.enabled===!0&&W.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&wo(ot,U,-1/0,v.sortObjects)}wo(T,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,ct),J=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,J&&Lt.addToRenderList(m,T),this.info.render.frame++,rt===!0&&nt.beginShadows();const B=p.state.shadowsArray;Mt.render(B,T,U),rt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ot=U.cameras;if(N.length>0)for(let mt=0,wt=ot.length;mt<wt;mt++){const Et=ot[mt];jl(k,N,T,Et)}J&&Lt.render(T);for(let mt=0,wt=ot.length;mt<wt;mt++){const Et=ot[mt];Yl(m,T,Et,Et.viewport)}}else N.length>0&&jl(k,N,T,U),J&&Lt.render(T),Yl(m,T,U);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(v,T,U),ue.resetDefaultState(),b=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],rt===!0&&nt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function wo(T,U,B,k){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){k&&It.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Pt);const mt=q.update(T),wt=T.material;wt.visible&&m.push(T,mt,wt,B,It.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const mt=q.update(T),wt=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),It.copy(T.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),It.copy(mt.boundingSphere.center)),It.applyMatrix4(T.matrixWorld).applyMatrix4(Pt)),Array.isArray(wt)){const Et=mt.groups;for(let Ot=0,kt=Et.length;Ot<kt;Ot++){const At=Et[Ot],Jt=wt[At.materialIndex];Jt&&Jt.visible&&m.push(T,mt,Jt,B,It.z,At)}}else wt.visible&&m.push(T,mt,wt,B,It.z,null)}}const ot=T.children;for(let mt=0,wt=ot.length;mt<wt;mt++)wo(ot[mt],U,B,k)}function Yl(T,U,B,k){const N=T.opaque,ot=T.transmissive,mt=T.transparent;p.setupLightsView(B),rt===!0&&nt.setGlobalState(v.clippingPlanes,B),k&&lt.viewport(P.copy(k)),N.length>0&&pr(N,U,B),ot.length>0&&pr(ot,U,B),mt.length>0&&pr(mt,U,B),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function jl(T,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Je(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Kn:$n,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const ot=p.state.transmissionRenderTarget[k.id],mt=k.viewport||P;ot.setSize(mt.z,mt.w);const wt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(V),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),J&&Lt.render(B);const Et=v.toneMapping;v.toneMapping=jn;const Ot=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),rt===!0&&nt.setGlobalState(v.clippingPlanes,k),pr(T,B,k),E.updateMultisampleRenderTarget(ot),E.updateRenderTargetMipmap(ot),tt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let At=0,Jt=U.length;At<Jt;At++){const fe=U[At],me=fe.object,Ye=fe.geometry,ee=fe.material,Rt=fe.group;if(ee.side===Ie&&me.layers.test(k.layers)){const Rn=ee.side;ee.side=$e,ee.needsUpdate=!0,Kl(me,B,k,Ye,ee,Rt),ee.side=Rn,ee.needsUpdate=!0,kt=!0}}kt===!0&&(E.updateMultisampleRenderTarget(ot),E.updateRenderTargetMipmap(ot))}v.setRenderTarget(wt),v.setClearColor(V,Y),Ot!==void 0&&(k.viewport=Ot),v.toneMapping=Et}function pr(T,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ot=T.length;N<ot;N++){const mt=T[N],wt=mt.object,Et=mt.geometry,Ot=k===null?mt.material:k,kt=mt.group;wt.layers.test(B.layers)&&Kl(wt,U,B,Et,Ot,kt)}}function Kl(T,U,B,k,N,ot){T.onBeforeRender(v,U,B,k,N,ot),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(v,U,B,k,T,ot),N.transparent===!0&&N.side===Ie&&N.forceSinglePass===!1?(N.side=$e,N.needsUpdate=!0,v.renderBufferDirect(B,U,k,N,T,ot),N.side=_n,N.needsUpdate=!0,v.renderBufferDirect(B,U,k,N,T,ot),N.side=Ie):v.renderBufferDirect(B,U,k,N,T,ot),T.onAfterRender(v,U,B,k,N,ot)}function mr(T,U,B){U.isScene!==!0&&(U=$t);const k=vt.get(T),N=p.state.lights,ot=p.state.shadowsArray,mt=N.state.version,wt=Tt.getParameters(T,N.state,ot,U,B),Et=Tt.getProgramCacheKey(wt);let Ot=k.programs;k.environment=T.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(T.isMeshStandardMaterial?F:M).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ot===void 0&&(T.addEventListener("dispose",Bt),Ot=new Map,k.programs=Ot);let kt=Ot.get(Et);if(kt!==void 0){if(k.currentProgram===kt&&k.lightsStateVersion===mt)return $l(T,wt),kt}else wt.uniforms=Tt.getUniforms(T),T.onBeforeCompile(wt,v),kt=Tt.acquireProgram(wt,Et),Ot.set(Et,kt),k.uniforms=wt.uniforms;const At=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(At.clippingPlanes=nt.uniform),$l(T,wt),k.needsLights=Xu(T),k.lightsStateVersion=mt,k.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=kt,k.uniformsList=null,kt}function Zl(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=so.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function $l(T,U){const B=vt.get(T);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Gu(T,U,B,k,N){U.isScene!==!0&&(U=$t),E.resetTextureUnits();const ot=U.fog,mt=k.isMeshStandardMaterial?U.environment:null,wt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:qe,Et=(k.isMeshStandardMaterial?F:M).get(k.envMap||mt),Ot=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,kt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!B.morphAttributes.position,Jt=!!B.morphAttributes.normal,fe=!!B.morphAttributes.color;let me=jn;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(me=v.toneMapping);const Ye=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=Ye!==void 0?Ye.length:0,Rt=vt.get(k),Rn=p.state.lights;if(rt===!0&&(bt===!0||T!==y)){const nn=T===y&&k.id===b;nt.setState(k,T,nn)}let ne=!1;k.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Rn.state.version||Rt.outputColorSpace!==wt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==Et||k.fog===!0&&Rt.fog!==ot||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==nt.numPlanes||Rt.numIntersection!==nt.numIntersection)||Rt.vertexAlphas!==Ot||Rt.vertexTangents!==kt||Rt.morphTargets!==At||Rt.morphNormals!==Jt||Rt.morphColors!==fe||Rt.toneMapping!==me||Rt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Rt.__version=k.version);let fn=Rt.currentProgram;ne===!0&&(fn=mr(k,U,N));let Li=!1,Qe=!1,As=!1;const ge=fn.getUniforms(),xn=Rt.uniforms;if(lt.useProgram(fn.program)&&(Li=!0,Qe=!0,As=!0),k.id!==b&&(b=k.id,Qe=!0),Li||y!==T){lt.buffers.depth.getReversed()?(at.copy(T.projectionMatrix),td(at),ed(at),ge.setValue(D,"projectionMatrix",at)):ge.setValue(D,"projectionMatrix",T.projectionMatrix),ge.setValue(D,"viewMatrix",T.matrixWorldInverse);const Qn=ge.map.cameraPosition;Qn!==void 0&&Qn.setValue(D,Ft.setFromMatrixPosition(T.matrixWorld)),yt.logarithmicDepthBuffer&&ge.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ge.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Qe=!0,As=!0)}if(N.isSkinnedMesh){ge.setOptional(D,N,"bindMatrix"),ge.setOptional(D,N,"bindMatrixInverse");const nn=N.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),ge.setValue(D,"boneTexture",nn.boneTexture,E))}N.isBatchedMesh&&(ge.setOptional(D,N,"batchingTexture"),ge.setValue(D,"batchingTexture",N._matricesTexture,E),ge.setOptional(D,N,"batchingIdTexture"),ge.setValue(D,"batchingIdTexture",N._indirectTexture,E),ge.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&ge.setValue(D,"batchingColorTexture",N._colorsTexture,E));const Cs=B.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&Nt.update(N,B,fn),(Qe||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,ge.setValue(D,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(xn.envMap.value=Et,xn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(xn.envMapIntensity.value=U.environmentIntensity),Qe&&(ge.setValue(D,"toneMappingExposure",v.toneMappingExposure),Rt.needsLights&&Wu(xn,As),ot&&k.fog===!0&&ft.refreshFogUniforms(xn,ot),ft.refreshMaterialUniforms(xn,k,H,K,p.state.transmissionRenderTarget[T.id]),so.upload(D,Zl(Rt),xn,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(so.upload(D,Zl(Rt),xn,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ge.setValue(D,"center",N.center),ge.setValue(D,"modelViewMatrix",N.modelViewMatrix),ge.setValue(D,"normalMatrix",N.normalMatrix),ge.setValue(D,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const nn=k.uniformsGroups;for(let Qn=0,ti=nn.length;Qn<ti;Qn++){const Jl=nn[Qn];I.update(Jl,fn),I.bind(Jl,fn)}}return fn}function Wu(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Xu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,U,B){vt.get(T.texture).__webglTexture=U,vt.get(T.depthTexture).__webglTexture=B;const k=vt.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const B=vt.get(T);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,B=0){L=T,w=U,A=B;let k=!0,N=null,ot=!1,mt=!1;if(T){const Et=vt.get(T);if(Et.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(Et.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Et.__hasExternalTextures)E.rebindTextures(T,vt.get(T.texture).__webglTexture,vt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const At=T.depthTexture;if(Et.__boundDepthTexture!==At){if(At!==null&&vt.has(At)&&(T.width!==At.image.width||T.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}const Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(mt=!0);const kt=vt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[U])?N=kt[U][B]:N=kt[U],ot=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?N=vt.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?N=kt[B]:N=kt,P.copy(T.viewport),z.copy(T.scissor),O=T.scissorTest}else P.copy(_t).multiplyScalar(H).floor(),z.copy(Ut).multiplyScalar(H).floor(),O=Wt;if(lt.bindFramebuffer(D.FRAMEBUFFER,N)&&k&&lt.drawBuffers(T,N),lt.viewport(P),lt.scissor(z),lt.setScissorTest(O),ot){const Et=vt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,B)}else if(mt){const Et=vt.get(T.texture),Ot=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,B||0,Ot)}b=-1},this.readRenderTargetPixels=function(T,U,B,k,N,ot,mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){lt.bindFramebuffer(D.FRAMEBUFFER,wt);try{const Et=T.texture,Ot=Et.format,kt=Et.type;if(!yt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-k&&B>=0&&B<=T.height-N&&D.readPixels(U,B,k,N,Ht.convert(Ot),Ht.convert(kt),ot)}finally{const Et=L!==null?vt.get(L).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(T,U,B,k,N,ot,mt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){const Et=T.texture,Ot=Et.format,kt=Et.type;if(!yt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-k&&B>=0&&B<=T.height-N){lt.bindFramebuffer(D.FRAMEBUFFER,wt);const At=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.bufferData(D.PIXEL_PACK_BUFFER,ot.byteLength,D.STREAM_READ),D.readPixels(U,B,k,N,Ht.convert(Ot),Ht.convert(kt),0);const Jt=L!==null?vt.get(L).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,Jt);const fe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Qf(D,fe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ot),D.deleteBuffer(At),D.deleteSync(fe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,B=0){T.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-B),N=Math.floor(T.image.width*k),ot=Math.floor(T.image.height*k),mt=U!==null?U.x:0,wt=U!==null?U.y:0;E.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,mt,wt,N,ot),lt.unbindTexture()},this.copyTextureToTexture=function(T,U,B=null,k=null,N=0){T.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let ot,mt,wt,Et,Ot,kt,At,Jt,fe;const me=T.isCompressedTexture?T.mipmaps[N]:T.image;B!==null?(ot=B.max.x-B.min.x,mt=B.max.y-B.min.y,wt=B.isBox3?B.max.z-B.min.z:1,Et=B.min.x,Ot=B.min.y,kt=B.isBox3?B.min.z:0):(ot=me.width,mt=me.height,wt=me.depth||1,Et=0,Ot=0,kt=0),k!==null?(At=k.x,Jt=k.y,fe=k.z):(At=0,Jt=0,fe=0);const Ye=Ht.convert(U.format),ee=Ht.convert(U.type);let Rt;U.isData3DTexture?(E.setTexture3D(U,0),Rt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Rt=D.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Rt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Rn=D.getParameter(D.UNPACK_ROW_LENGTH),ne=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fn=D.getParameter(D.UNPACK_SKIP_PIXELS),Li=D.getParameter(D.UNPACK_SKIP_ROWS),Qe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,kt);const As=T.isDataArrayTexture||T.isData3DTexture,ge=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const xn=vt.get(T),Cs=vt.get(U),nn=vt.get(xn.__renderTarget),Qn=vt.get(Cs.__renderTarget);lt.bindFramebuffer(D.READ_FRAMEBUFFER,nn.__webglFramebuffer),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ti=0;ti<wt;ti++)As&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(T).__webglTexture,N,kt+ti),T.isDepthTexture?(ge&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(U).__webglTexture,N,fe+ti),D.blitFramebuffer(Et,Ot,ot,mt,At,Jt,ot,mt,D.DEPTH_BUFFER_BIT,D.NEAREST)):ge?D.copyTexSubImage3D(Rt,N,At,Jt,fe+ti,Et,Ot,ot,mt):D.copyTexSubImage2D(Rt,N,At,Jt,fe+ti,Et,Ot,ot,mt);lt.bindFramebuffer(D.READ_FRAMEBUFFER,null),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ge?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Rt,N,At,Jt,fe,ot,mt,wt,Ye,ee,me.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,N,At,Jt,fe,ot,mt,wt,Ye,me.data):D.texSubImage3D(Rt,N,At,Jt,fe,ot,mt,wt,Ye,ee,me):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,At,Jt,ot,mt,Ye,ee,me.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,At,Jt,me.width,me.height,Ye,me.data):D.texSubImage2D(D.TEXTURE_2D,N,At,Jt,ot,mt,Ye,ee,me);D.pixelStorei(D.UNPACK_ROW_LENGTH,Rn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ne),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Li),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qe),N===0&&U.generateMipmaps&&D.generateMipmap(Rt),lt.unbindTexture()},this.copyTextureToTexture3D=function(T,U,B=null,k=null,N=0){return T.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,T=arguments[2],U=arguments[3],N=arguments[4]||0),ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,B,k,N)},this.initRenderTarget=function(T){vt.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),lt.unbindTexture()},this.resetState=function(){w=0,A=0,L=null,lt.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class Al{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ut(t),this.near=e,this.far=n}clone(){return new Al(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cl extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class h_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nl,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new R;class Rl{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new _e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Rl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Qc=new R,th=new te,eh=new te,u_=new R,nh=new zt,Fr=new R,ta=new Tn,ih=new zt,ea=new lr;class f_ extends ae{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nc,this.bindMatrix=new zt,this.bindMatrixInverse=new zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fr),this.boundingBox.expandByPoint(Fr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fr),this.boundingSphere.expandByPoint(Fr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(i),t.ray.intersectsSphere(ta)!==!1&&(ih.copy(i).invert(),ea.copy(t.ray).applyMatrix4(ih),!(this.boundingBox!==null&&ea.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ea)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new te,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===nc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;th.fromBufferAttribute(i.attributes.skinIndex,t),eh.fromBufferAttribute(i.attributes.skinWeight,t),Qc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=eh.getComponent(r);if(o!==0){const a=th.getComponent(r);nh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(u_.copy(Qc).applyMatrix4(nh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class mu extends le{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qs extends Ue{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Re,u=Re,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sh=new zt,d_=new zt;class Pl{constructor(t=[],e=[]){this.uuid=ln(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new zt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:d_;sh.multiplyMatrices(a,e[r]),sh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Pl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Qs(e,t,t,Ve,Xe);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new mu),this.bones.push(o),this.boneInverses.push(new zt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Ai extends _e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new zt,rh=new zt,Or=[],oh=new Jn,p_=new zt,Us=new ae,Ns=new Tn;class Mo extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,p_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),oh.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(oh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Ns.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),t.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Yi),rh.multiplyMatrices(n,Yi),Us.matrixWorld=rh,Us.raycast(t,Or);for(let o=0,a=Or.length;o<a;o++){const l=Or[o];l.instanceId=r,l.object=this,e.push(l)}Or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qs(new Float32Array(i*this.count),i,this.count,xl,Xe));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class hi extends cn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const co=new R,ho=new R,ah=new zt,Fs=new lr,zr=new Tn,na=new R,lh=new R;class Dl extends le{constructor(t=new pe,e=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)co.fromBufferAttribute(e,i-1),ho.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=co.distanceTo(ho);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(i),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;ah.copy(i).invert(),Fs.copy(t.ray).applyMatrix4(ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),x=Br(this,t,Fs,l,p,S);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Br(this,t,Fs,l,_,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Br(this,t,Fs,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Br(this,t,Fs,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Br(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(co.fromBufferAttribute(o,i),ho.fromBufferAttribute(o,r),e.distanceSqToSegment(co,ho,na,lh)>n)return;na.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(na);if(!(l<t.near||l>t.far))return{distance:l,point:lh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const ch=new R,hh=new R;class wi extends Dl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)ch.fromBufferAttribute(e,i),hh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ch.distanceTo(hh);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class m_ extends Dl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ll extends cn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uh=new zt,rl=new lr,kr=new Tn,Vr=new R;class gu extends le{constructor(t=new pe,e=new Ll){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;uh.copy(i).invert(),rl.copy(t.ray).applyMatrix4(uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Vr.fromBufferAttribute(h,m),fh(Vr,m,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Vr.fromBufferAttribute(h,g),fh(Vr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fh(s,t,e,n,i,r,o){const a=rl.distanceSqToPoint(s);if(a<e){const l=new R;rl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new $:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],r=[],o=[],a=new R,l=new zt;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ce(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ce(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Il extends En{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new $){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class g_ extends Il{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ul(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Hr=new R,ia=new Ul,sa=new Ul,ra=new Ul;class __ extends En{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Hr.subVectors(i[0],i[1]).add(i[0]),c=Hr);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Hr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Hr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ia.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),sa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),ra.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),sa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ra.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ia.calc(l),sa.calc(l),ra.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function dh(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function v_(s,t){const e=1-s;return e*e*t}function x_(s,t){return 2*(1-s)*s*t}function y_(s,t){return s*s*t}function Gs(s,t,e,n){return v_(s,t)+x_(s,e)+y_(s,n)}function M_(s,t){const e=1-s;return e*e*e*t}function S_(s,t){const e=1-s;return 3*e*e*s*t}function b_(s,t){return 3*(1-s)*s*s*t}function T_(s,t){return s*s*s*t}function Ws(s,t,e,n,i){return M_(s,t)+S_(s,e)+b_(s,n)+T_(s,i)}class _u extends En{constructor(t=new $,e=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(t,i.x,r.x,o.x,a.x),Ws(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class w_ extends En{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(t,i.x,r.x,o.x,a.x),Ws(t,i.y,r.y,o.y,a.y),Ws(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vu extends En{constructor(t=new $,e=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E_ extends En{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xu extends En{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,i.x,r.x,o.x),Gs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class A_ extends En{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,i.x,r.x,o.x),Gs(t,i.y,r.y,o.y),Gs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yu extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(dh(a,l.x,c.x,u.x,h.x),dh(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new $().fromArray(i))}return this}}var ol=Object.freeze({__proto__:null,ArcCurve:g_,CatmullRomCurve3:__,CubicBezierCurve:_u,CubicBezierCurve3:w_,EllipseCurve:Il,LineCurve:vu,LineCurve3:E_,QuadraticBezierCurve:xu,QuadraticBezierCurve3:A_,SplineCurve:yu});class C_ extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ol[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ol[i.type]().fromJSON(i))}return this}}class ph extends C_{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vu(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new xu(this.currentPoint.clone(),new $(t,e),new $(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new _u(this.currentPoint.clone(),new $(t,e),new $(n,i),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new yu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Il(t,e,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Nl extends pe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(d,2));function S(){const v=new R,C=new R;let w=0;const A=(e-t)/n;for(let L=0;L<=r;L++){const b=[],y=L/r,P=y*(e-t)+t;for(let z=0;z<=i;z++){const O=z/i,V=O*l+a,Y=Math.sin(V),G=Math.cos(V);C.x=P*Y,C.y=-y*n+m,C.z=P*G,h.push(C.x,C.y,C.z),v.set(Y,A,G).normalize(),f.push(v.x,v.y,v.z),d.push(O,1-y),b.push(g++)}_.push(b)}for(let L=0;L<i;L++)for(let b=0;b<r;b++){const y=_[b][L],P=_[b+1][L],z=_[b+1][L+1],O=_[b][L+1];(t>0||b!==0)&&(u.push(y,P,O),w+=3),(e>0||b!==r-1)&&(u.push(P,z,O),w+=3)}c.addGroup(p,w,0),p+=w}function x(v){const C=g,w=new $,A=new R;let L=0;const b=v===!0?t:e,y=v===!0?1:-1;for(let z=1;z<=i;z++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const P=g;for(let z=0;z<=i;z++){const V=z/i*l+a,Y=Math.cos(V),G=Math.sin(V);A.x=b*G,A.y=m*y,A.z=b*Y,h.push(A.x,A.y,A.z),f.push(0,y,0),w.x=Y*.5+.5,w.y=G*.5*y+.5,d.push(w.x,w.y),g++}for(let z=0;z<i;z++){const O=C+z,V=P+z;v===!0?u.push(V,V+1,O):u.push(V+1,V,O),L+=3}c.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Gr=new R,Wr=new R,oa=new R,Xr=new an;class R_ extends pe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(es*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Xr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Xr.getNormal(oa),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let S=0;S<3;S++){const x=(S+1)%3,v=h[S],C=h[x],w=Xr[u[S]],A=Xr[u[x]],L=`${v}_${C}`,b=`${C}_${v}`;b in f&&f[b]?(oa.dot(f[b].normal)<=r&&(d.push(w.x,w.y,w.z),d.push(A.x,A.y,A.z)),f[b]=null):L in f||(f[L]={index0:c[S],index1:c[x],normal:oa.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];Gr.fromBufferAttribute(a,_),Wr.fromBufferAttribute(a,m),d.push(Gr.x,Gr.y,Gr.z),d.push(Wr.x,Wr.y,Wr.z)}this.setAttribute("position",new de(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Fl extends ph{constructor(t){super(t),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ph().fromJSON(i))}return this}}const P_={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Mu(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=N_(s,t,r,e)),s.length>80*e){a=c=s[0],l=u=s[1];for(let g=e;g<i;g+=e)h=s[g],f=s[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return tr(r,o,e,a,l,d,0),o}};function Mu(s,t,e,n,i){let r,o;if(i===q_(s,t,e,n)>0)for(r=t;r<e;r+=n)o=mh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=mh(r,s[r],s[r+1],o);return o&&So(o,o.next)&&(nr(o),o=o.next),o}function Ci(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(So(e,e.next)||xe(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&k_(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?L_(s,n,i,r):D_(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),nr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=I_(Ci(s),t,e),tr(s,t,e,n,i,r,2)):o===2&&U_(s,t,e,n,i,r):tr(Ci(s),t,e,n,i,r,1);break}}}function D_(s){const t=s.prev,e=s,n=s.next;if(xe(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&$i(i,a,r,l,o,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function L_(s,t,e,n){const i=s.prev,r=s,o=s.next;if(xe(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=al(d,g,t,e,n),S=al(_,m,t,e,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=p&&v&&v.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&$i(a,u,l,h,c,f,x.x,x.y)&&xe(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&$i(a,u,l,h,c,f,v.x,v.y)&&xe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&$i(a,u,l,h,c,f,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&$i(a,u,l,h,c,f,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function I_(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!So(i,r)&&Su(i,n,n.next,r)&&er(i,r)&&er(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),nr(n),nr(n.next),n=s=r),n=n.next}while(n!==s);return Ci(n)}function U_(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&G_(o,a)){let l=bu(o,a);o=Ci(o,o.next),l=Ci(l,l.next),tr(o,t,e,n,i,r,0),tr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function N_(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Mu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(H_(c));for(i.sort(F_),r=0;r<i.length;r++)e=O_(i[r],e);return e}function F_(s,t){return s.x-t.x}function O_(s,t){const e=z_(s,t);if(!e)return t;const n=bu(e,s);return Ci(n,n.next),Ci(e,e.next)}function z_(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&$i(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),er(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&B_(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function B_(s,t){return xe(s.prev,s,t.prev)<0&&xe(t.next,s,s.next)<0}function k_(s,t,e,n){let i=s;do i.z===0&&(i.z=al(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,V_(i)}function V_(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function al(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function H_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function $i(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function G_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!W_(s,t)&&(er(s,t)&&er(t,s)&&X_(s,t)&&(xe(s.prev,s,t.prev)||xe(s,t.prev,t))||So(s,t)&&xe(s.prev,s,s.next)>0&&xe(t.prev,t,t.next)>0)}function xe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function So(s,t){return s.x===t.x&&s.y===t.y}function Su(s,t,e,n){const i=Yr(xe(s,t,e)),r=Yr(xe(s,t,n)),o=Yr(xe(e,n,s)),a=Yr(xe(e,n,t));return!!(i!==r&&o!==a||i===0&&qr(s,e,t)||r===0&&qr(s,n,t)||o===0&&qr(e,s,n)||a===0&&qr(e,t,n))}function qr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Yr(s){return s>0?1:s<0?-1:0}function W_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Su(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function er(s,t){return xe(s.prev,s,s.next)<0?xe(s,t,s.next)>=0&&xe(s,s.prev,t)>=0:xe(s,t,s.prev)<0||xe(s,s.next,t)<0}function X_(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function bu(s,t){const e=new ll(s.i,s.x,s.y),n=new ll(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function mh(s,t,e,n){const i=new ll(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function nr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ll(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function q_(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Xs{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Xs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];gh(t),_h(n,t);let o=t.length;e.forEach(gh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,_h(n,e[l]);const a=P_.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function gh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function _h(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class bo extends pe{constructor(t=new Fl([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new de(i,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Y_;let x,v=!1,C,w,A,L;p&&(x=p.getSpacedPoints(u),v=!0,f=!1,C=p.computeFrenetFrames(u,!1),w=new R,A=new R,L=new R),f||(m=0,d=0,g=0,_=0);const b=a.extractPoints(c);let y=b.shape;const P=b.holes;if(!Xs.isClockWise(y)){y=y.reverse();for(let J=0,it=P.length;J<it;J++){const D=P[J];Xs.isClockWise(D)&&(P[J]=D.reverse())}}const O=Xs.triangulateShape(y,P),V=y;for(let J=0,it=P.length;J<it;J++){const D=P[J];y=y.concat(D)}function Y(J,it,D){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(it,D)}const G=y.length,K=O.length;function H(J,it,D){let Ct,tt,yt;const lt=J.x-it.x,Dt=J.y-it.y,vt=D.x-J.x,E=D.y-J.y,M=lt*lt+Dt*Dt,F=lt*E-Dt*vt;if(Math.abs(F)>Number.EPSILON){const X=Math.sqrt(M),Q=Math.sqrt(vt*vt+E*E),q=it.x-Dt/X,Tt=it.y+lt/X,ft=D.x-E/Q,xt=D.y+vt/Q,qt=((ft-q)*E-(xt-Tt)*vt)/(lt*E-Dt*vt);Ct=q+lt*qt-J.x,tt=Tt+Dt*qt-J.y;const nt=Ct*Ct+tt*tt;if(nt<=2)return new $(Ct,tt);yt=Math.sqrt(nt/2)}else{let X=!1;lt>Number.EPSILON?vt>Number.EPSILON&&(X=!0):lt<-Number.EPSILON?vt<-Number.EPSILON&&(X=!0):Math.sign(Dt)===Math.sign(E)&&(X=!0),X?(Ct=-Dt,tt=lt,yt=Math.sqrt(M)):(Ct=lt,tt=Dt,yt=Math.sqrt(M/2))}return new $(Ct/yt,tt/yt)}const st=[];for(let J=0,it=V.length,D=it-1,Ct=J+1;J<it;J++,D++,Ct++)D===it&&(D=0),Ct===it&&(Ct=0),st[J]=H(V[J],V[D],V[Ct]);const ct=[];let _t,Ut=st.concat();for(let J=0,it=P.length;J<it;J++){const D=P[J];_t=[];for(let Ct=0,tt=D.length,yt=tt-1,lt=Ct+1;Ct<tt;Ct++,yt++,lt++)yt===tt&&(yt=0),lt===tt&&(lt=0),_t[Ct]=H(D[Ct],D[yt],D[lt]);ct.push(_t),Ut=Ut.concat(_t)}for(let J=0;J<m;J++){const it=J/m,D=d*Math.cos(it*Math.PI/2),Ct=g*Math.sin(it*Math.PI/2)+_;for(let tt=0,yt=V.length;tt<yt;tt++){const lt=Y(V[tt],st[tt],Ct);at(lt.x,lt.y,-D)}for(let tt=0,yt=P.length;tt<yt;tt++){const lt=P[tt];_t=ct[tt];for(let Dt=0,vt=lt.length;Dt<vt;Dt++){const E=Y(lt[Dt],_t[Dt],Ct);at(E.x,E.y,-D)}}}const Wt=g+_;for(let J=0;J<G;J++){const it=f?Y(y[J],Ut[J],Wt):y[J];v?(A.copy(C.normals[0]).multiplyScalar(it.x),w.copy(C.binormals[0]).multiplyScalar(it.y),L.copy(x[0]).add(A).add(w),at(L.x,L.y,L.z)):at(it.x,it.y,0)}for(let J=1;J<=u;J++)for(let it=0;it<G;it++){const D=f?Y(y[it],Ut[it],Wt):y[it];v?(A.copy(C.normals[J]).multiplyScalar(D.x),w.copy(C.binormals[J]).multiplyScalar(D.y),L.copy(x[J]).add(A).add(w),at(L.x,L.y,L.z)):at(D.x,D.y,h/u*J)}for(let J=m-1;J>=0;J--){const it=J/m,D=d*Math.cos(it*Math.PI/2),Ct=g*Math.sin(it*Math.PI/2)+_;for(let tt=0,yt=V.length;tt<yt;tt++){const lt=Y(V[tt],st[tt],Ct);at(lt.x,lt.y,h+D)}for(let tt=0,yt=P.length;tt<yt;tt++){const lt=P[tt];_t=ct[tt];for(let Dt=0,vt=lt.length;Dt<vt;Dt++){const E=Y(lt[Dt],_t[Dt],Ct);v?at(E.x,E.y+x[u-1].y,x[u-1].x+D):at(E.x,E.y,h+D)}}}j(),rt();function j(){const J=i.length/3;if(f){let it=0,D=G*it;for(let Ct=0;Ct<K;Ct++){const tt=O[Ct];Pt(tt[2]+D,tt[1]+D,tt[0]+D)}it=u+m*2,D=G*it;for(let Ct=0;Ct<K;Ct++){const tt=O[Ct];Pt(tt[0]+D,tt[1]+D,tt[2]+D)}}else{for(let it=0;it<K;it++){const D=O[it];Pt(D[2],D[1],D[0])}for(let it=0;it<K;it++){const D=O[it];Pt(D[0]+G*u,D[1]+G*u,D[2]+G*u)}}n.addGroup(J,i.length/3-J,0)}function rt(){const J=i.length/3;let it=0;bt(V,it),it+=V.length;for(let D=0,Ct=P.length;D<Ct;D++){const tt=P[D];bt(tt,it),it+=tt.length}n.addGroup(J,i.length/3-J,1)}function bt(J,it){let D=J.length;for(;--D>=0;){const Ct=D;let tt=D-1;tt<0&&(tt=J.length-1);for(let yt=0,lt=u+m*2;yt<lt;yt++){const Dt=G*yt,vt=G*(yt+1),E=it+Ct+Dt,M=it+tt+Dt,F=it+tt+vt,X=it+Ct+vt;Ft(E,M,F,X)}}}function at(J,it,D){l.push(J),l.push(it),l.push(D)}function Pt(J,it,D){It(J),It(it),It(D);const Ct=i.length/3,tt=S.generateTopUV(n,i,Ct-3,Ct-2,Ct-1);$t(tt[0]),$t(tt[1]),$t(tt[2])}function Ft(J,it,D,Ct){It(J),It(it),It(Ct),It(it),It(D),It(Ct);const tt=i.length/3,yt=S.generateSideWallUV(n,i,tt-6,tt-3,tt-2,tt-1);$t(yt[0]),$t(yt[1]),$t(yt[3]),$t(yt[1]),$t(yt[2]),$t(yt[3])}function It(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function $t(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return j_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ol[i.type]().fromJSON(i)),new bo(n,t.options)}}const Y_={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new $(r,o),new $(a,l),new $(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new $(o,1-l),new $(c,1-h),new $(f,1-g),new $(_,1-p)]:[new $(a,1-l),new $(u,1-h),new $(d,1-g),new $(m,1-p)]}};function j_(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ir extends pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new R,f=new R,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],x=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const w=C/e;h.x=-t*Math.cos(i+w*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(i+w*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-x),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const x=u[p][S+1],v=u[p][S],C=u[p+1][S],w=u[p+1][S+1];(p!==0||o>0)&&d.push(x,v,w),(p!==n-1||l<Math.PI)&&d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class To extends cn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vn extends To{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class K_ extends cn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ol extends cn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function jr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Z_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function $_(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function vh(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function Tu(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class hr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class J_ extends hr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case sc:r=t,a=2*e-n;break;case rc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sc:o=t,l=2*n-e;break;case rc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let C=0;C!==a;++C)r[C]=p*o[u+C]+S*o[c+C]+x*o[l+C]+v*o[h+C];return r}}class Q_ extends hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class tv extends hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class An{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jr(e,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jr(t.times,Array),values:jr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Q_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new J_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case $s:e=this.InterpolantFactoryMethodLinear;break;case Eo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Z_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Eo,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=$s;class xs extends An{constructor(t,e,n){super(t,e,n)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Zs;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class wu extends An{}wu.prototype.ValueTypeName="color";class us extends An{}us.prototype.ValueTypeName="number";class ev extends hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let u=c+a;c!==u;c+=4)bn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class fs extends An{InterpolantFactoryMethodLinear(t){return new ev(this.times,this.values,this.getValueSize(),t)}}fs.prototype.ValueTypeName="quaternion";fs.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends An{constructor(t,e,n){super(t,e,n)}}ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Zs;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends An{}ds.prototype.ValueTypeName="vector";class nv{constructor(t="",e=-1,n=[],i=Tf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(sv(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(An.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=$_(l);l=vh(l,1,u),c=vh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new us(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Tu(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new us(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+e[h].name+"]";n(ds,d+".position",f,"pos",i),n(fs,d+".quaternion",f,"rot",i),n(ds,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function iv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return wu;case"quaternion":return fs;case"bool":case"boolean":return xs;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function sv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=iv(s.type);if(s.times===void 0){const e=[],n=[];Tu(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const ui={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class rv{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const ov=new rv;class Ms{constructor(t){this.manager=t!==void 0?t:ov,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class av extends Error{constructor(t,e){super(t),this.response=e}}class Eu extends Ms{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ui.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Nn[t]!==void 0){Nn[t].push({onLoad:e,onProgress:n,onError:i});return}Nn[t]=[],Nn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Nn[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,A=u.length;w<A;w++){const L=u[w];L.onProgress&&L.onProgress(C)}p.enqueue(v),S()}},x=>{p.error(x)})}}});return new Response(m)}else throw new av(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ui.add(t,c);const u=Nn[t];delete Nn[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Nn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Nn[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class lv extends Ms{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ui.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Js("img");function l(){u(),ui.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Au extends Ms{constructor(t){super(t)}load(t,e,n,i){const r=new Ue,o=new lv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class ur extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class cv extends ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const aa=new zt,xh=new R,yh=new R;class zl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(xh),yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yh),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class hv extends zl{constructor(){super(new ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=cs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ss extends ur{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Mh=new zt,Os=new R,la=new R;class uv extends zl{constructor(){super(new ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Os.setFromMatrixPosition(t.matrixWorld),n.position.copy(Os),la.copy(n.position),la.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(la),n.updateMatrixWorld(),i.makeTranslation(-Os.x,-Os.y,-Os.z),Mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh)}}class fr extends ur{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fv extends zl{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qs extends ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new fv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Di extends ur{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ys{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class dv extends Ms{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ui.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ui.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),ui.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ui.add(t,l),r.manager.itemStart(t)}}class bs{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Sh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Sh(){return performance.now()}const Bl="\\[\\]\\.:\\/",pv=new RegExp("["+Bl+"]","g"),kl="[^"+Bl+"]",mv="[^"+Bl.replace("\\.","")+"]",gv=/((?:WC+[\/:])*)/.source.replace("WC",kl),_v=/(WCOD+)?/.source.replace("WCOD",mv),vv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),xv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),yv=new RegExp("^"+gv+_v+vv+xv+"$"),Mv=["material","materials","bones","map"];class Sv{constructor(t,e,n){const i=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class oe{constructor(t,e,n){this.path=e,this.parsedPath=n||oe.parseTrackName(e),this.node=oe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new oe.Composite(t,e,n):new oe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pv,"")}static parseTrackName(t){const e=yv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Mv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=oe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}oe.Composite=Sv;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bv extends Pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);const Th={type:"change"},Vl={type:"start"},Cu={type:"end"},Kr=new lr,wh=new li,Tv=Math.cos(70*vo.DEG2RAD),we=new R,je=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ca=1e-6;class wv extends bv{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new bn,this._lastTargetPosition=new R,this._quat=new bn().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bh,this._sphericalDelta=new bh,this._scale=1,this._panOffset=new R,this._rotateStart=new $,this._rotateEnd=new $,this._rotateDelta=new $,this._panStart=new $,this._panEnd=new $,this._panDelta=new $,this._dollyStart=new $,this._dollyEnd=new $,this._dollyDelta=new $,this._dollyDirection=new R,this._mouse=new $,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Av.bind(this),this._onPointerDown=Ev.bind(this),this._onPointerUp=Cv.bind(this),this._onContextMenu=Nv.bind(this),this._onMouseWheel=Dv.bind(this),this._onKeyDown=Lv.bind(this),this._onTouchStart=Iv.bind(this),this._onTouchMove=Uv.bind(this),this._onMouseDown=Rv.bind(this),this._onMouseMove=Pv.bind(this),this._interceptControlDown=Fv.bind(this),this._interceptControlUp=Ov.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Th),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=je:n>Math.PI&&(n-=je),i<-Math.PI?i+=je:i>Math.PI&&(i-=je),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=we.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Kr.origin.copy(this.object.position),Kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kr.direction))<Tv?this.object.lookAt(this.target):(wh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kr.intersectPlane(wh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ca||this._lastTargetPosition.distanceToSquared(this.target)>ca?(this.dispatchEvent(Th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?je/60*this.autoRotateSpeed*t:je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;we.copy(i).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(je*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-je*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(je*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-je*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ev(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Av(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Cv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cu),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Rv(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=he.DOLLY;break;case Ji.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=he.ROTATE}break;case Ji.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Vl)}function Pv(s){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Dv(s){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(s.preventDefault(),this.dispatchEvent(Vl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Cu))}function Lv(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Iv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=he.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=he.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Vl)}function Uv(s){switch(this._trackPointer(s),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=he.NONE}}function Nv(s){this.enabled!==!1&&s.preventDefault()}function Fv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ov(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ru={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class dr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zv=new xo(-1,1,1,-1,0,1);class Bv extends pe{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}}const kv=new Bv;class Hl{constructor(t){this._mesh=new ae(kv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Vv extends dr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=lo.clone(t.uniforms),this.material=new ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Hl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Eh extends dr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Hv extends dr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Gv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new $);this._width=n.width,this._height=n.height,e=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vv(Ru),this.copyPass.material.blending=Yn,this.clock=new bs}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Eh!==void 0&&(o instanceof Eh?n=!0:o instanceof Hv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wv extends dr{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ut}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Xv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ut(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ps extends dr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new $(t.x,t.y):new $(256,256),this.clearColor=new ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Je(r,o,{type:Kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Je(r,o,{type:Kn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Je(r,o,{type:Kn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=Xv;this.highPassUniforms=lo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ye({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Ru;this.copyUniforms=lo.clone(u.uniforms),this.blendMaterial=new ye({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:_a,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ut,this.oldClearAlpha=1,this.basic=new Gn,this.fsQuad=new Hl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ps.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ps.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ps.BlurDirectionX=new $(1,0);ps.BlurDirectionY=new $(0,1);class Pu{constructor(t=42){this._initialSeed=t,this._state=t}reset(){return this._state=this._initialSeed,this}seed(t){return this._initialSeed=t,this._state=t,this}get currentSeed(){return this._initialSeed}next(){this._state|=0,this._state=this._state+1831565813|0;let t=Math.imul(this._state^this._state>>>15,1|this._state);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}intRange(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[this.intRange(0,t.length-1)]}gaussian(t=0,e=1){const n=this.next(),i=this.next();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*i)*e+t}vec3(t=0,e=1){return[this.range(t,e),this.range(t,e),this.range(t,e)]}onSphere(t=1){const e=this.range(0,Math.PI*2),n=Math.acos(this.range(-1,1));return[t*Math.sin(n)*Math.cos(e),t*Math.sin(n)*Math.sin(e),t*Math.cos(n)]}}const zn=class zn{static getInstance(){return zn._instance||(zn._instance=new zn),zn._instance}constructor(){if(zn._instance)throw new Error("[UniformsManager] Use getInstance() - Singleton violation");this._globals=new Map,this._subscribers=new Map,this.register("uTime",{value:0}),this.register("uDeltaTime",{value:.016}),this.register("uResolution",{value:new $(1920,1080)}),this.register("uMouse",{value:new $(0,0)}),this.register("uFrame",{value:0}),this._clock=new bs}register(t,e){return this._globals.set(t,e),this._subscribers.has(t)||this._subscribers.set(t,new Set),this}get(t){return this._globals.get(t)}subscribe(t,e){for(const n of e){if(!this._globals.has(n)){console.warn(`[UniformsManager] Unknown uniform: ${n}`);continue}t.uniforms[n]=this._globals.get(n),this._subscribers.get(n).add(t)}return this}unsubscribe(t){for(const[,e]of this._subscribers)e.delete(t)}set(t,e){const n=this._globals.get(t);return n&&(n.value=e),this}tick(){const t=this._clock.getDelta(),e=this._clock.getElapsedTime();this.set("uTime",e),this.set("uDeltaTime",t),this.set("uFrame",this.get("uFrame").value+1)}getGlobalUniformsClone(){const t={};for(const[e,n]of this._globals)t[e]=n;return t}dispose(){this._globals.clear(),this._subscribers.clear(),zn._instance=null}};Rs(zn,"_instance",null);let sr=zn;const Bn=class Bn{static getInstance(){return Bn._instance||(Bn._instance=new Bn),Bn._instance}constructor(){if(Bn._instance)throw new Error("[GarbageCollector] Use getInstance() - Singleton violation");this._geometries=new Set,this._materials=new Set,this._textures=new Set,this._objects=new Set,this._tags=new Map}trackGeometry(t,e){return this._geometries.add(t),e&&this._addTag(e,t),t}trackMaterial(t,e){return this._materials.add(t),e&&this._addTag(e,t),t}trackTexture(t,e){return this._textures.add(t),e&&this._addTag(e,t),t}trackObject(t,e){return this._objects.add(t),e&&this._addTag(e,t),t}disposeObject(t){t.traverse(e=>{if(e.geometry&&(e.geometry.dispose(),this._geometries.delete(e.geometry)),e.material){const n=Array.isArray(e.material)?e.material:[e.material];for(const i of n){for(const r of Object.keys(i)){const o=i[r];o&&o.isTexture&&(o.dispose(),this._textures.delete(o))}i.dispose(),this._materials.delete(i)}}}),t.parent&&t.parent.remove(t),this._objects.delete(t)}disposeByTag(t){const e=this._tags.get(t);if(e){for(const n of e)n.isBufferGeometry?(n.dispose(),this._geometries.delete(n)):n.isMaterial?(n.dispose(),this._materials.delete(n)):n.isTexture?(n.dispose(),this._textures.delete(n)):n.isObject3D&&this.disposeObject(n);this._tags.delete(t)}}disposeAll(){for(const t of this._geometries)t.dispose();for(const t of this._materials)t.dispose();for(const t of this._textures)t.dispose();for(const t of this._objects)t.parent&&t.parent.remove(t);this._geometries.clear(),this._materials.clear(),this._textures.clear(),this._objects.clear(),this._tags.clear()}get stats(){return{geometries:this._geometries.size,materials:this._materials.size,textures:this._textures.size,objects:this._objects.size}}_addTag(t,e){this._tags.has(t)||this._tags.set(t,new Set),this._tags.get(t).add(e)}dispose(){this.disposeAll(),Bn._instance=null}};Rs(Bn,"_instance",null);let uo=Bn;class Ts{constructor(t={}){if(new.target===Ts)throw new Error("[ProceduralEntity] Cannot instantiate abstract class directly");this.uuid=vo.generateUUID(),this.type=this.constructor.name,this._params={seed:42,...t},this.rng=new Pu(this._params.seed),this.uniforms=sr.getInstance(),this.gc=uo.getInstance(),this._geometry=null,this._material=null,this._mesh=null,this._built=!1,this._localUniforms=new Map}_buildGeometry(){throw new Error(`[${this.type}] _buildGeometry() must be implemented`)}_buildMaterial(){throw new Error(`[${this.type}] _buildMaterial() must be implemented`)}_buildMesh(){return new ae(this._geometry,this._material)}build(){return this._built&&this.dispose(),this.rng.reset(),this._geometry=this._buildGeometry(),this.gc.trackGeometry(this._geometry,this.uuid),this._material=this._buildMaterial(),this.gc.trackMaterial(this._material,this.uuid),this._mesh=this._buildMesh(),this._mesh.userData.proceduralEntity=this,this._mesh.userData.entityType=this.type,this.gc.trackObject(this._mesh,this.uuid),this._built=!0,this}getObject3D(){return this._built||this.build(),this._mesh}addTo(t){return t.add(this.getObject3D()),this}setPosition(t,e,n){return this.getObject3D().position.set(t,e,n),this}setRotation(t,e,n){return this.getObject3D().rotation.set(t,e,n),this}setScale(t){const e=this.getObject3D();return typeof t=="number"?e.scale.setScalar(t):e.scale.set(t[0],t[1],t[2]),this}updateParams(t){return Object.assign(this._params,t),t.seed!==void 0&&this.rng.seed(t.seed),this.rebuild()}rebuild(){var r,o,a,l;const t=(r=this._mesh)==null?void 0:r.parent,e=(o=this._mesh)==null?void 0:o.position.clone(),n=(a=this._mesh)==null?void 0:a.rotation.clone(),i=(l=this._mesh)==null?void 0:l.scale.clone();return this.dispose(),this.build(),t&&t.add(this._mesh),e&&this._mesh.position.copy(e),n&&this._mesh.rotation.copy(n),i&&this._mesh.scale.copy(i),this}dispose(){this._mesh&&this.gc.disposeObject(this._mesh),this._geometry=null,this._material=null,this._mesh=null,this._built=!1}clone(t={}){const e=this.constructor;return new e({...this._params,...t}).build()}serialize(){return{type:this.type,params:{...this._params},position:this._mesh?this._mesh.position.toArray():[0,0,0],rotation:this._mesh?[this._mesh.rotation.x,this._mesh.rotation.y,this._mesh.rotation.z]:[0,0,0],scale:this._mesh?this._mesh.scale.toArray():[1,1,1]}}}class Wn extends ye{constructor(t={}){const e=sr.getInstance(),i={...e.getGlobalUniformsClone(),...ht.lights,...t.uniforms||{}};super({vertexShader:t.vertexShader||Wn.defaultVertexShader(),fragmentShader:t.fragmentShader||Wn.defaultFragmentShader(),uniforms:i,transparent:t.transparent??!1,side:t.side??Ie,depthWrite:t.depthWrite??!0,lights:t.lights??!0,glslVersion:il}),this._entityType=t.entityType||"generic",e.subscribe(this,["uTime","uDeltaTime","uResolution"])}static defaultVertexShader(){return`
      precision highp float;

      uniform float uTime;

      out vec3 vNormal;
      out vec3 vWorldPosition;
      out vec2 vUv;
      out vec3 vViewDir;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);

        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        vViewDir = normalize(cameraPosition - worldPos.xyz);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `}static defaultFragmentShader(){return`
      precision highp float;

      uniform float uTime;

      in vec3 vNormal;
      in vec3 vWorldPosition;
      in vec2 vUv;
      in vec3 vViewDir;

      out vec4 fragColor;

      void main() {
        vec3 normal = normalize(vNormal);
        float diffuse = max(dot(normal, normalize(vec3(1.0, 1.0, 0.5))), 0.0);
        vec3 color = vec3(0.8, 0.3, 0.5) * (0.3 + 0.7 * diffuse);
        fragColor = vec4(color, 1.0);
      }
    `}static sssFunction(){return`
      vec3 subsurfaceScattering(
        vec3 lightDir, vec3 viewDir, vec3 normal,
        vec3 sssColor, float sssIntensity, float sssPower,
        float thickness
      ) {
        // 前向散射 (wrap lighting)
        float NdotL = dot(normal, lightDir);
        float wrapDiffuse = max(0.0, (NdotL + 0.5) / 1.5);

        // 透射光 (back-lighting / translucency)
        vec3 scatterDir = lightDir + normal * 0.3;
        float VdotS = pow(clamp(dot(viewDir, -scatterDir), 0.0, 1.0), sssPower);
        vec3 translucency = sssColor * VdotS * sssIntensity * thickness;

        // 边缘散射增强
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
        vec3 rimSSS = sssColor * fresnel * 0.3 * thickness;

        return translucency + rimSSS + sssColor * wrapDiffuse * 0.1;
      }
    `}static thinFilmIridescenceFunction(){return`
      vec3 thinFilmIridescence(float cosTheta, float filmThickness, float ior) {
        // 光程差计算
        float delta = 2.0 * ior * filmThickness * cosTheta;

        // 波长依赖的干涉条纹 (RGB 三通道不同波长)
        // R ≈ 650nm, G ≈ 550nm, B ≈ 450nm
        vec3 wavelengths = vec3(650.0, 550.0, 450.0);

        vec3 phase = 2.0 * 3.14159265 * delta / wavelengths;

        // 干涉强度 (Fresnel + 多光束干涉)
        float r = (ior - 1.0) / (ior + 1.0);
        float R = r * r;

        vec3 interference = vec3(
          R + R + 2.0 * R * cos(phase.r),
          R + R + 2.0 * R * cos(phase.g),
          R + R + 2.0 * R * cos(phase.b)
        );

        // 归一化到可视范围
        interference = clamp(interference / (4.0 * R), 0.0, 1.0);

        // 色彩映射：将干涉图样转化为光谱色
        vec3 spectralColor;
        spectralColor.r = 0.5 + 0.5 * cos(phase.r);
        spectralColor.g = 0.5 + 0.5 * cos(phase.g + 1.0);
        spectralColor.b = 0.5 + 0.5 * cos(phase.b + 2.0);

        return mix(spectralColor, interference, 0.6);
      }
    `}static anisotropicSpecularFunction(){return`
      float anisotropicSpecular(
        vec3 lightDir, vec3 viewDir, vec3 normal, vec3 tangent,
        float roughnessX, float roughnessY
      ) {
        vec3 halfDir = normalize(lightDir + viewDir);
        vec3 bitangent = cross(normal, tangent);

        float NdotH = max(dot(normal, halfDir), 0.0);
        float TdotH = dot(tangent, halfDir);
        float BdotH = dot(bitangent, halfDir);

        // Ward 各向异性分布
        float exponent = -(
          (TdotH * TdotH) / (roughnessX * roughnessX) +
          (BdotH * BdotH) / (roughnessY * roughnessY)
        ) / max(NdotH * NdotH, 0.001);

        float D = exp(exponent) / (
          3.14159265 * roughnessX * roughnessY *
          max(NdotH * NdotH * NdotH * NdotH, 0.001)
        );

        return clamp(D * max(dot(normal, lightDir), 0.0), 0.0, 10.0);
      }
    `}static fresnelFunction(){return`
      float fresnelSchlick(float cosTheta, float F0) {
        return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
      }
      vec3 fresnelSchlickV(float cosTheta, vec3 F0) {
        return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
      }
    `}}const Ee=class Ee{static register(t,e,n={}){return Ee._registry.set(t,e),Object.keys(n).length>0&&Ee._presets.set(t,n),Ee}static create(t,e={}){const n=Ee._registry.get(t);if(!n)throw new Error(`[ProceduralFactory] Unknown entity: '${t}'. Did you forget to register it?`);const r={...Ee._presets.get(t)||{},...e};return new n(r)}static build(t,e={}){return Ee.create(t,e).build()}static createBatch(t,e,n,i=42){let r=i;const o={next(){r|=0,r=r+1831565813|0;let l=Math.imul(r^r>>>15,1|r);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296},range(l,c){return l+this.next()*(c-l)}},a=[];for(let l=0;l<e;l++){const c=n(l,o);a.push(Ee.create(t,{seed:i+l,...c}))}return a}static registerPreset(t,e,n){const i=`${t}::${e}`;return Ee._presets.set(i,n),Ee}static createFromPreset(t,e,n={}){const i=`${t}::${e}`,r=Ee._presets.get(i)||{};return Ee.create(t,{...r,...n})}static listRegistered(){return[...Ee._registry.keys()]}static has(t){return Ee._registry.has(t)}static clear(){Ee._registry.clear(),Ee._presets.clear()}};Rs(Ee,"_registry",new Map),Rs(Ee,"_presets",new Map);let ms=Ee;const Zr={rose:{size:.75,dx:.4,dy:.8,petals:7,rings:14,startRx:2.42,zOff:.5,maxScale:2.2,maxR:.1,bowl:.35,taper:.75,curl:1.5,curlV:.15,twist:.4,twistV:0,c1:"#ffffff",c2:"#ff0000"},lotus:{size:1.2,dx:.55,dy:1,petals:6,rings:18,startRx:1.8,zOff:.3,maxScale:2.5,maxR:.15,bowl:1.2,taper:.75,curl:.8,curlV:.1,twist:.1,twistV:0,c1:"#fff0f5",c2:"#ff69b4"},chrysanthemum:{size:1.6,dx:.15,dy:.5,petals:12,rings:20,startRx:2.8,zOff:.15,maxScale:1.8,maxR:.05,bowl:.15,taper:.25,curl:2,curlV:.3,twist:.2,twistV:.1,c1:"#fffff0",c2:"#ffd700"},cherry:{size:.55,dx:.35,dy:.55,petals:5,rings:10,startRx:2,zOff:.4,maxScale:2,maxR:.08,bowl:.2,taper:.6,curl:.6,curlV:.1,twist:.1,twistV:0,c1:"#fff5f5",c2:"#ffb7c5"},tulip:{size:1,dx:.5,dy:.9,petals:6,rings:8,startRx:1.6,zOff:.2,maxScale:2.8,maxR:.02,bowl:.8,taper:1,curl:.4,curlV:.05,twist:0,twistV:0,c1:"#ff3333",c2:"#ff6600"},lily:{size:1.4,dx:.6,dy:1.2,petals:6,rings:12,startRx:2.2,zOff:.35,maxScale:2.4,maxR:.12,bowl:.6,taper:.55,curl:1.8,curlV:.2,twist:.3,twistV:.1,c1:"#ffffff",c2:"#ffcc00"}};function cl(s){const t=s.replace("#","");return[parseInt(t.substring(0,2),16)/255,parseInt(t.substring(2,4),16)/255,parseInt(t.substring(4,6),16)/255]}function Ah(s,t,e){const n=cl(s),i=cl(t);return[n[0]+(i[0]-n[0])*e,n[1]+(i[1]-n[1])*e,n[2]+(i[2]-n[2])*e]}function qv(s,t,e){return e<.5?Ah(s,t,e*2):Ah(t,s,(e-.5)*2)}function Yv(s){const t=cl(s);return new R(t[0],t[1],t[2])}function jv(s,t,e){const n=new Fl;return n.moveTo(0,0),n.quadraticCurveTo(t,e,0,s),n.quadraticCurveTo(-t,e,0,0),new bo(n,{curveSegments:24,steps:1,depth:.005,bevelEnabled:!0,bevelThickness:.005,bevelSize:.01,bevelSegments:10})}class Du extends Ts{constructor(t={}){const e=Zr[t.preset||"rose"]||Zr.rose;super({preset:"rose",rings:e.rings,petals:e.petals,color1:e.c1,color2:e.c2,size:e.size,dx:e.dx,dy:e.dy,maxRadius:e.maxR,maxScale:e.maxScale,startRx:e.startRx,zOffsetCoef:e.zOff,bowlDepth:e.bowl,taperPow:e.taper,baseCurl:e.curl,curlVar:e.curlV,baseTwist:e.twist,twistVar:e.twistV,metalness:0,roughness:.43,transmission:.17,sheen:.47,sheenColor:"#ff8899",sheenRoughness:.48,clearcoat:.1,veinStr:.6,veinWidth:3e3,veinColor:"#2d5a1e",midribStr:.7,lateralStr:.5,edgeLight:.2,hueShift:0,layerGap:.005,scaleDecay:.4,innerShrink:.9,...t}),this._shaderUniforms=null,this._curlAttr=null,this._twistAttr=null,this._randCurl=null,this._randTwist=null}_buildGeometry(){const t=this._params;return jv(t.size,t.dx,t.dy)}_buildMaterial(){const t=this._params;this._shaderUniforms={uBowlDepth:{value:t.bowlDepth},uVeinStr:{value:t.veinStr},uVeinWidth:{value:t.veinWidth},uVeinColor:{value:Yv(t.veinColor)},uMidribStr:{value:t.midribStr},uLateralStr:{value:t.lateralStr},uSecStr:{value:.2},uMicroStr:{value:.06},uTaperPow:{value:t.taperPow},uEdgeLight:{value:t.edgeLight},uHueShift:{value:t.hueShift},uPetalSize:{value:t.size},uPetalDx:{value:t.dx}};const e=new vn({metalness:t.metalness,roughness:t.roughness,transmission:t.transmission,thickness:.5,sheen:t.sheen,sheenColor:new ut(t.sheenColor),sheenRoughness:t.sheenRoughness,clearcoat:t.clearcoat,side:Ie}),n=this._shaderUniforms;return e.onBeforeCompile=i=>{Object.assign(i.uniforms,n),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute float aCurl;
        attribute float aTwist;
        uniform float uBowlDepth;
        uniform float uTaperPow;
        uniform float uPetalSize;
        uniform float uPetalDx;
        varying vec2 vPetalUv;
        varying float vNY;`),i.vertexShader=i.vertexShader.replace("#include <defaultnormal_vertex>",`{
          float yN=position.y; float caN=aCurl*yN*yN; float ccN=cos(caN),ssN=sin(caN);
          objectNormal.yz=vec2(objectNormal.y*ccN-objectNormal.z*ssN,objectNormal.y*ssN+objectNormal.z*ccN);
          float taN=aTwist*yN; float tcN=cos(taN),tsN=sin(taN);
          objectNormal.xz=vec2(objectNormal.x*tcN-objectNormal.z*tsN,objectNormal.x*tsN+objectNormal.z*tcN);
        }
        #include <defaultnormal_vertex>`),i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          float petalH=max(position.y,0.0);
          float nY=clamp(petalH/max(uPetalSize,0.1),0.0,1.0);
          float nX=clamp(position.x/max(uPetalDx,0.05)*0.5+0.5,0.0,1.0);
          vNY=nY; vPetalUv=vec2(nX,nY);
          float sinNY=sin(nY*3.14159265);
          float taper=pow(max(sinNY,0.001),uTaperPow);
          transformed.x*=mix(1.0,taper,0.5);
          float bowlX=transformed.x;
          transformed.z+=bowlX*bowlX*uBowlDepth*max(sinNY,0.0);
          transformed.z+=sin(transformed.x*15.0)*0.015*nY;
          float y=transformed.y;
          float curlAng=aCurl*y*y; float cc=cos(curlAng),ss=sin(curlAng);
          float ny2=y*cc-transformed.z*ss; float nz2=y*ss+transformed.z*cc;
          transformed.y=ny2; transformed.z=nz2;
          float twistAng=aTwist*y; float tc=cos(twistAng),ts=sin(twistAng);
          float ox=transformed.x;
          transformed.x=ox*tc-transformed.z*ts; transformed.z=ox*ts+transformed.z*tc;
        }`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uVeinStr; uniform float uVeinWidth; uniform vec3 uVeinColor;
        uniform float uMidribStr; uniform float uLateralStr; uniform float uSecStr; uniform float uMicroStr;
        uniform float uEdgeLight; uniform float uHueShift;
        varying vec2 vPetalUv; varying float vNY;
        vec3 hueRotate(vec3 c,float h){float a=h*6.2831853;float co=cos(a),si=sin(a);vec3 k=vec3(0.57735);return clamp(c*co+cross(k,c)*si+k*dot(k,c)*(1.0-co),0.0,1.0);}
        float veinLine(float d,float w){return exp(-d*d*w);}
        float petalVein(float vx,float vy,float w){
          float cx=vx-0.5;float absCx=abs(cx);
          float midrib=veinLine(absCx,w*3.0)*uMidribStr;
          float lat=0.0;
          for(float i=1.0;i<=10.0;i+=1.0){float vyS=i/11.0;float prog=max(vy-vyS,0.0);float slope=0.6+i*0.04;float dL=abs(absCx-prog*slope);float fade=exp(-prog*3.0)*smoothstep(vyS-0.02,vyS+0.02,vy);lat+=veinLine(dL,w*0.8)*fade*uLateralStr;}
          float sec=0.0;
          for(float i=0.5;i<=10.5;i+=1.0){float vyS=i/11.0;float prog=max(vy-vyS,0.0);float slope=0.8+i*0.03;float dL=abs(absCx-prog*slope);float fade=exp(-prog*4.5)*smoothstep(vyS-0.01,vyS+0.01,vy);sec+=veinLine(dL,w*0.5)*fade*uSecStr;}
          float micro=veinLine(mod(cx*40.0,1.0)-0.5,w*0.02)*uMicroStr;
          float yFade=smoothstep(0.0,0.08,vy)*smoothstep(1.0,0.65,vy);
          float xFade=smoothstep(0.0,0.08,0.5-absCx);
          return (midrib+lat+sec+micro)*yFade*xFade;
        }`),i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        {
          float vy=clamp(vPetalUv.y,0.0,1.0);float vx=clamp(vPetalUv.x,0.0,1.0);
          float vein=petalVein(vx,vy,uVeinWidth)*uVeinStr;
          diffuseColor.rgb=mix(diffuseColor.rgb,uVeinColor,clamp(vein*0.8,0.0,0.7));
          float edgeDist=min(vx,1.0-vx);float edgeFade=smoothstep(0.0,0.15,edgeDist);
          diffuseColor.rgb*=mix(1.0+uEdgeLight*0.4,1.0,edgeFade);
          diffuseColor.rgb=mix(diffuseColor.rgb*0.92,diffuseColor.rgb*1.05+0.02,vy);
          if(uHueShift>0.001){diffuseColor.rgb=hueRotate(diffuseColor.rgb,uHueShift);}
        }`)},e}_buildMesh(){const t=this._params,e=2e3,n=t.rings*t.petals,i=new Mo(this._geometry,this._material,e);i.castShadow=!0,i.receiveShadow=!0,i.count=n;const r=new Float32Array(e),o=new Float32Array(e);this._randCurl=new Float32Array(e),this._randTwist=new Float32Array(e);for(let a=0;a<e;a++)this._randCurl[a]=(this.rng.next()-.5)*2,this._randTwist[a]=(this.rng.next()-.5)*2;return this._curlAttr=new Ai(r,1).setUsage(fi),this._twistAttr=new Ai(o,1).setUsage(fi),i.geometry.setAttribute("aCurl",this._curlAttr),i.geometry.setAttribute("aTwist",this._twistAttr),this._updateLayout(i),this._updateColors(i),i}_updateLayout(t){const e=this._params,n=e.rings,i=e.petals,r=new le,o=Date.now()*5e-5%1,a=2*Math.PI/i,l=2*e.startRx/n,c=this._curlAttr.array,u=this._twistAttr.array;for(let h=0;h<n;h++){const f=(h+o*n)%n,d=Math.sin(Math.PI*f/n),g=h*e.zOffsetCoef*Math.PI/n,_=d*e.maxRadius,m=h*e.layerGap,p=1-e.scaleDecay*(1-d),S=d<.15?vo.lerp(1-e.innerShrink,1,d/.15):1,x=d*e.maxScale*p*S;for(let v=0;v<i;v++){const C=h*i+v,w=a*v+g;r.position.set(_*Math.cos(w),_*Math.sin(w),m),r.rotation.set(e.startRx-f*l,0,w-Math.PI/2,"ZXY"),r.scale.setScalar(x),r.updateMatrix(),t.setMatrixAt(C,r.matrix),c[C]=e.baseCurl*(1-d*.6)+this._randCurl[C]*e.curlVar,u[C]=e.baseTwist*d*.8+this._randTwist[C]*e.twistVar}}t.instanceMatrix.needsUpdate=!0,this._curlAttr.needsUpdate=!0,this._twistAttr.needsUpdate=!0}_updateColors(t){const e=this._params,n=e.rings,i=e.petals,r=new ut;for(let o=0;o<n;o++)for(let a=0;a<i;a++){const l=o*i+a,c=qv(e.color1,e.color2,a/i);r.setRGB(c[0],c[1],c[2]),t.setColorAt(l,r)}t.instanceColor&&(t.instanceColor.needsUpdate=!0)}update(){return this._mesh&&(this._mesh.count=this._params.rings*this._params.petals,this._updateLayout(this._mesh)),this}setPreset(t){const e=Zr[t];return e?(this._params.preset=t,Object.assign(this._params,{size:e.size,dx:e.dx,dy:e.dy,petals:e.petals,rings:e.rings,startRx:e.startRx,zOffsetCoef:e.zOff,maxScale:e.maxScale,maxRadius:e.maxR,bowlDepth:e.bowl,taperPow:e.taper,baseCurl:e.curl,curlVar:e.curlV,baseTwist:e.twist,twistVar:e.twistV,color1:e.c1,color2:e.c2}),this.rebuild()):this}static get PRESETS(){return Zr}}ms.register("TroisFlower",Du,{preset:"rose"});const fo=[{n:5,len:.22,wid:.16,open:.22,curl:.7},{n:7,len:.32,wid:.22,open:.42,curl:.55},{n:9,len:.42,wid:.3,open:.62,curl:.4},{n:11,len:.52,wid:.38,open:.82,curl:.28},{n:13,len:.6,wid:.44,open:1.02,curl:.18},{n:14,len:.66,wid:.48,open:1.2,curl:.1},{n:15,len:.7,wid:.52,open:1.38,curl:.05}],Ch=fo.length,Rh=fo.reduce((s,t)=>s+t.n,0);class Kv{constructor(t={}){this.options={petalScale:1,petalLength:1,petalWidth:1,openAngleScale:1,bloomWaveAmp:.14,cycleDuration:5,breatheAmp:.004,radialPulse:.025,energyWaveSpeed:.4,energyWaveStrength:.22,fresnelStrength:.38,coreGlow:.55,specularStr:.14,sssStrength:.25,cameraDistance:2.2,autoRotateSpeed:.015,mouseParallaxH:.45,mouseParallaxV:.2,smoothFactor:.04,stemY:-.28,stemLength:.55,...t},this._group=new Ke,this._clock=new bs,this._mouse={x:0,y:0},this._smooth={x:0,y:0},this._mesh=null,this._stemMesh=null,this._bgMesh=null,this._material=null,this._bgMaterial=null,this._dummy=new le,this._initMatrices=[],this._heights=[],this._layerRatios=[],this.camera=new ve(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,1,this.options.cameraDistance)}build(){const t=this._createPetalGeo();return this._material=this._createMaterial(),this._mesh=new Mo(t,this._material,Rh),this._mesh.frustumCulled=!1,this._precomputeInstances(),this._applyInstances(),this._group.add(this._mesh),this._createStem(),this._createBackground(),this}addTo(t){return t.add(this._group),this._bgMesh&&t.add(this._bgMesh),this}setMouse(t,e){this._mouse.x=t/window.innerWidth*2-1,this._mouse.y=-(e/window.innerHeight)*2+1}update(){const t=this._clock.getDelta(),e=this.options,n=this._clock.getElapsedTime();this._smooth.x+=(this._mouse.x-this._smooth.x)*e.smoothFactor,this._smooth.y+=(this._mouse.y-this._smooth.y)*e.smoothFactor;const i=n*e.autoRotateSpeed+this._smooth.x*e.mouseParallaxH,r=.18+this._smooth.y*e.mouseParallaxV;if(this.camera.position.set(Math.sin(i)*e.cameraDistance*Math.cos(r),Math.sin(r)*e.cameraDistance+.08,Math.cos(i)*e.cameraDistance*Math.cos(r)),this.camera.lookAt(this._smooth.x*-.05,this._smooth.y*.03,0),this._material){const o=this._material.uniforms;o.uTime.value+=t,o.uBreathAmp.value=e.breatheAmp,o.uEnergySpeed.value=e.energyWaveSpeed,o.uEnergyStr.value=e.energyWaveStrength,o.uFresnelStr.value=e.fresnelStrength,o.uCoreGlow.value=e.coreGlow}this._bgMaterial&&(this._bgMaterial.uniforms.uTime.value+=t),this._animateInstances(this._material.uniforms.uTime.value)}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}dispose(){this._mesh&&(this._mesh.geometry.dispose(),this._material.dispose(),this._group.remove(this._mesh)),this._stemMesh&&(this._stemMesh.geometry.dispose(),this._stemMesh.material.dispose(),this._group.remove(this._stemMesh)),this._bgMesh&&(this._bgMesh.geometry.dispose(),this._bgMaterial.dispose(),this._bgMesh.parent&&this._bgMesh.parent.remove(this._bgMesh)),this._group.parent&&this._group.parent.remove(this._group)}_createPetalGeo(){const n=[],i=[],r=[];for(let a=0;a<=10;a++){const l=a/10,c=(l-.5)*2;for(let u=0;u<=18;u++){const h=u/18,f=Math.pow(Math.sin(h*Math.PI*.48),.42)*Math.pow(1-Math.pow(h,1.7),.52),d=.45*(1-.25*h),g=.28*f,_=g*Math.sin(c*d),m=g*(1-Math.cos(c*d)),p=.04*(1-.4*h)*(1-c*c),S=.03*h*h;n.push(_,m+p+S,h),i.push(h,l)}}for(let a=0;a<10;a++)for(let l=0;l<18;l++){const c=a*19+l;r.push(c,c+18+1,c+1,c+1,c+18+1,c+18+2)}const o=new pe;return o.setAttribute("position",new de(n,3)),o.setAttribute("uv",new de(i,2)),o.setIndex(r),o.computeVertexNormals(),o}_precomputeInstances(){const t=this._dummy;let e=0;fo.forEach((n,i)=>{const r=i/(Ch-1);for(let o=0;o<n.n;o++){const a=o/n.n*Math.PI*2+(i%2?Math.PI/n.n:0),l=Math.sin(e*137.508+i*42),c=Math.cos(e*73+i*31),u=.02+.14*r,h=n.open+.04*c,f=u*Math.sin(h)*Math.cos(a+.05*l),d=u*Math.sin(h)*Math.sin(a+.05*l),g=u*Math.cos(h);t.position.set(f,g,d);const _=new R(f,g,d).normalize();t.lookAt(t.position.clone().add(_));const m=n.len*(1+.06*l),p=n.wid*(1+.05*c);t.scale.set(p,p*.85,m),t.rotation.x+=.05*l,t.rotation.z+=.04*c,t.updateMatrix(),this._initMatrices.push(t.matrix.clone()),this._heights.push(1-r),this._layerRatios.push(r),e++}})}_applyInstances(){for(let t=0;t<Rh;t++)this._mesh.setMatrixAt(t,this._initMatrices[t]);this._mesh.geometry.setAttribute("aHeight",new Ai(new Float32Array(this._heights),1)),this._mesh.geometry.setAttribute("aLayer",new Ai(new Float32Array(this._layerRatios),1)),this._mesh.instanceMatrix.needsUpdate=!0}_animateInstances(t){const e=this.options,n=this._dummy,i=t%e.cycleDuration/e.cycleDuration;let r=0;fo.forEach((o,a)=>{const l=a/(Ch-1),c=i-l*.35,u=.14*Math.sin(c*Math.PI*2),h=.025*Math.sin(c*Math.PI*2);for(let f=0;f<o.n;f++){const d=Math.sin(r*137.508+a*42),g=Math.cos(r*73+a*31),_=f/o.n*Math.PI*2+(a%2?Math.PI/o.n:0)+.05*d,m=.02+.14*l+h,p=o.open+.04*g+u,S=m*Math.sin(p)*Math.cos(_),x=m*Math.sin(p)*Math.sin(_),v=m*Math.cos(p);n.position.set(S,v,x);const C=new R(S,v,x).normalize();n.lookAt(n.position.clone().add(C));const w=o.len*(1+.06*d),A=o.wid*(1+.05*g);n.scale.set(A,A*.85,w),n.rotation.x+=.05*d,n.rotation.z+=.04*g,n.updateMatrix(),this._mesh.setMatrixAt(r,n.matrix),r++}}),this._mesh.instanceMatrix.needsUpdate=!0}_createMaterial(){return new ye({uniforms:{uTime:{value:0},uBreathAmp:{value:.004},uEnergySpeed:{value:.4},uEnergyStr:{value:.22},uFresnelStr:{value:.38},uCoreGlow:{value:.55}},vertexShader:Zv,fragmentShader:$v,side:Ie,transparent:!0,depthWrite:!1,depthTest:!0})}_createStem(){const t=this.options,e=new Nl(.014,.026,t.stemLength,8,6),n=new ye({vertexShader:`
        varying vec3 vN;
        void main() {
          vN = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        varying vec3 vN;
        void main() {
          vec3 col = vec3(0.32, 0.28, 0.42);
          float l = max(dot(vN, normalize(vec3(0.2, 0.8, 0.4))), 0.0);
          col *= 0.35 + l * 0.55;
          gl_FragColor = vec4(col, 1.0);
        }`});this._stemMesh=new ae(e,n),this._stemMesh.position.set(0,t.stemY,0),this._group.add(this._stemMesh)}_createBackground(){this._bgMaterial=new ye({depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.9999, 1.0);
        }`,fragmentShader:Jv}),this._bgMesh=new ae(new wn(2,2),this._bgMaterial),this._bgMesh.renderOrder=-1,this._bgMesh.frustumCulled=!1}}const Zv=`
  attribute float aHeight;
  attribute float aLayer;
  uniform float uTime;
  varying vec3 vWN, vWP;
  varying vec2 vUv;
  varying float vH, vL, vFr;
  void main() {
    vUv = uv; vH = aHeight; vL = aLayer;
    vec3 pos = position;
    pos += normal * (0.004 * sin(uTime * 0.8 + aHeight * 3.0 + aLayer * 1.5));
    pos.x += 0.003 * sin(uTime * 0.3 + pos.z * 2.0) * uv.x;
    vec4 wp = modelMatrix * instanceMatrix * vec4(pos, 1.0);
    vWP = wp.xyz;
    vWN = normalize((modelMatrix * instanceMatrix * vec4(normal, 0.0)).xyz);
    vec3 vd = normalize(cameraPosition - wp.xyz);
    vFr = pow(1.0 - max(dot(vWN, vd), 0.0), 2.5);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,$v=`
  uniform float uTime;
  varying vec3 vWN, vWP;
  varying vec2 vUv;
  varying float vH, vL, vFr;
  void main() {
    float u = vUv.x, v = vUv.y, lr = vL;
    vec3 N = normalize(vWN);
    vec3 V = normalize(cameraPosition - vWP);

    // 配色梯度（原版 1:1）：花心粉白 → 外层冷蓝紫
    vec3 c0 = vec3(0.94, 0.86, 0.97);
    vec3 c1 = vec3(0.74, 0.64, 0.90);
    vec3 c2 = vec3(0.50, 0.45, 0.78);
    vec3 c3 = vec3(0.34, 0.31, 0.64);
    vec3 c4 = vec3(0.23, 0.21, 0.50);

    vec3 base;
    if (lr < 0.18) base = mix(c0, c1, lr / 0.18);
    else if (lr < 0.42) base = mix(c1, c2, (lr - 0.18) / 0.24);
    else if (lr < 0.68) base = mix(c2, c3, (lr - 0.42) / 0.26);
    else base = mix(c3, c4, (lr - 0.68) / 0.32);

    base *= 0.92 + 0.08 * sin(u * 3.14);

    // 能量波浪从上到下（原版用 vH）
    float wp2 = vH - uTime * 0.4;
    float wave = pow(sin(wp2 * 6.2832) * 0.5 + 0.5, 2.5);
    vec3 eC = mix(vec3(0.65, 0.50, 0.92), c0, lr * 0.4);
    base += eC * wave * 0.22;

    // 光照（wrap lighting，原版 1:1）
    vec3 L1 = normalize(vec3(0.15, 0.85, 0.35));
    vec3 L2 = normalize(vec3(-0.3, 0.3, -0.5));
    float w = 0.42;
    float d1 = (max(dot(N, L1), 0.0) + w) / (1.0 + w);
    float d2 = (max(dot(N, L2), 0.0) + w) / (1.0 + w);
    vec3 col = base * (0.26 + 0.10 * (1.0 - lr) + d1 * 0.50 + d2 * 0.12);

    // 高光（原版 1:1）
    vec3 H = normalize(L1 + V);
    col += vec3(0.58, 0.52, 0.85) * pow(max(dot(N, H), 0.0), 36.0) * 0.14;

    // SSS（原版 1:1）
    vec3 sD = normalize(L1 + V * 0.3);
    col += vec3(0.58, 0.45, 0.80) * pow(max(dot(-N, sD), 0.0), 2.5) * 0.25 * (1.0 - lr * 0.3);

    // 菲涅尔（原版 1:1）
    col += vec3(0.45, 0.40, 0.85) * vFr * 0.38;

    // 花心辉光（原版 1:1）
    col += c0 * pow(1.0 - lr, 2.5) * (1.0 - u * 0.5) * (0.55 + 0.03 * sin(uTime * 1.2));

    // 波浪叠加
    col += eC * wave * 0.06 * (1.0 + vFr);

    // Alpha（原版 1:1）
    float fU = smoothstep(0.0, 0.05, u) * smoothstep(1.0, 0.88, u);
    float fV = 1.0 - pow(abs(v - 0.5) * 2.0, 2.2) * 0.4;
    float a = fU * fV;
    a *= mix(0.85, 0.50, lr);
    a = max(a, vFr * 0.12);
    a = clamp(a, 0.0, 0.94);

    gl_FragColor = vec4(col, a);
  }
`,Jv=`
  uniform float uTime;
  varying vec2 vUv;

  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  void main() {
    vec2 uv = vUv;
    // 渐变背景（原版 1:1）
    vec3 top = vec3(0.012, 0.012, 0.050);
    vec3 mid = vec3(0.042, 0.038, 0.175);
    vec3 bot = vec3(0.165, 0.132, 0.400);
    float t = uv.y;
    vec3 col;
    if (t > 0.6) col = mix(mid, top, smoothstep(0.6, 1.0, t));
    else if (t > 0.25) col = mix(bot, mid, smoothstep(0.25, 0.6, t));
    else col = mix(bot * 1.08, bot, smoothstep(0.0, 0.25, t));

    // 花朵区域微弱辉光
    float cd = length(vec2(uv.x - 0.5, (uv.y - 0.48) * 1.3));
    col += vec3(0.04, 0.03, 0.10) * exp(-cd * cd * 4.0);

    // 星空层1（原版 1:1）
    vec2 sg = uv * vec2(60.0, 35.0);
    vec2 sc = floor(sg);
    float sr = hash(sc);
    if (sr > 0.92) {
      vec2 sp = fract(sg) - 0.5;
      vec2 so = (vec2(hash(sc + 1.0), hash(sc + 2.0)) - 0.5) * 0.4;
      float sd = length(sp - so);
      float star = smoothstep(0.035, 0.0, sd);
      float tw = sin(uTime * (1.0 + sr * 2.5) + sr * 6.28) * 0.5 + 0.5;
      float brightness = (tw * 0.5 + 0.5) * 0.7;
      brightness *= smoothstep(0.2, 0.7, uv.y);
      col += vec3(0.6, 0.6, 0.85) * star * brightness;
    }

    // 星空层2（稀疏亮星，原版 1:1）
    vec2 sg2 = uv * vec2(25.0, 15.0);
    vec2 sc2 = floor(sg2);
    float sr2 = hash(sc2 + 100.0);
    if (sr2 > 0.96) {
      vec2 sp2 = fract(sg2) - 0.5;
      vec2 so2 = (vec2(hash(sc2 + 3.0), hash(sc2 + 4.0)) - 0.5) * 0.3;
      float sd2 = length(sp2 - so2);
      float star2 = smoothstep(0.02, 0.0, sd2);
      float tw2 = sin(uTime * 0.8 + sr2 * 6.28) * 0.5 + 0.5;
      star2 *= smoothstep(0.3, 0.8, uv.y);
      col += vec3(0.75, 0.72, 0.95) * star2 * (tw2 * 0.3 + 0.7) * 0.9;
    }

    gl_FragColor = vec4(col, 1.0);
  }
`;function Ph(s,t){if(t===wf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===el||t===Jh){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===el)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class Qv extends Ms{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new sx(e)}),this.register(function(e){return new rx(e)}),this.register(function(e){return new px(e)}),this.register(function(e){return new mx(e)}),this.register(function(e){return new gx(e)}),this.register(function(e){return new ax(e)}),this.register(function(e){return new lx(e)}),this.register(function(e){return new cx(e)}),this.register(function(e){return new hx(e)}),this.register(function(e){return new ix(e)}),this.register(function(e){return new ux(e)}),this.register(function(e){return new ox(e)}),this.register(function(e){return new dx(e)}),this.register(function(e){return new fx(e)}),this.register(function(e){return new ex(e)}),this.register(function(e){return new _x(e)}),this.register(function(e){return new vx(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ys.extractUrlBase(t);o=Ys.resolveURL(c,this.path)}else o=Ys.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Eu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(u){e(u),r.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Lu){try{o[Xt.KHR_BINARY_GLTF]=new xx(t)}catch(h){i&&i(h);return}r=JSON.parse(o[Xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Lx(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Xt.KHR_MATERIALS_UNLIT:o[h]=new nx;break;case Xt.KHR_DRACO_MESH_COMPRESSION:o[h]=new yx(r,this.dracoLoader);break;case Xt.KHR_TEXTURE_TRANSFORM:o[h]=new Mx;break;case Xt.KHR_MESH_QUANTIZATION:o[h]=new Sx;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function tx(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ex{constructor(t){this.parser=t,this.name=Xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const u=new ut(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],qe);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new fr(u),c.distance=h;break;case"spot":c=new Ss(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,On(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class nx{constructor(){this.name=Xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Gn}extendParams(t,e,n){const i=[];t.color=new ut(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],qe),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ae))}return Promise.all(i)}}class ix{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class sx{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new $(a,a)}return Promise.all(r)}}class rx{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ox{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ax{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new ut(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],qe)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ae)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class lx{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class cx{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new ut().setRGB(a[0],a[1],a[2],qe),Promise.all(r)}}class hx{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ux{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new ut().setRGB(a[0],a[1],a[2],qe),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ae)),Promise.all(r)}}class fx{constructor(t){this.parser=t,this.name=Xt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class dx{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class px{constructor(t){this.parser=t,this.name=Xt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class mx{constructor(t){this.parser=t,this.name=Xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class gx{constructor(t){this.parser=t,this.name=Xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class _x{constructor(t){this.name=Xt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class vx{constructor(t){this.name=Xt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==rn.TRIANGLES&&c.mode!==rn.TRIANGLE_STRIP&&c.mode!==rn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new zt,m=new R,p=new bn,S=new R(1,1,1),x=new Mo(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&S.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(m,p,S));for(const v in l)if(v==="_COLOR_0"){const C=l[v];x.instanceColor=new Ai(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);le.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Lu="glTF",zs=12,Dh={JSON:1313821514,BIN:5130562};class xx{constructor(t){this.name=Xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Lu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-zs,r=new DataView(t,zs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Dh.JSON){const c=new Uint8Array(t,zs+o,a);this.content=n.decode(c)}else if(l===Dh.BIN){const c=zs+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yx{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=hl[u]||u.toLowerCase();a[h]=o[u]}for(const u in t.attributes){const h=hl[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[t.attributes[u]],d=is[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,qe,f)})})}}class Mx{constructor(){this.name=Xt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Sx{constructor(){this.name=Xt.KHR_MESH_QUANTIZATION}}class Iu extends hr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-e,h=(n-e)/u,f=h*h,d=f*h,g=t*c,_=g-c,m=-2*d+3*f,p=d-f,S=1-m,x=p-f+h;for(let v=0;v!==a;v++){const C=o[_+v+a],w=o[_+v+l]*u,A=o[g+v+a],L=o[g+v]*u;r[v]=S*C+x*w+m*A+p*L}return r}}const bx=new bn;class Tx extends Iu{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return bx.fromArray(r).normalize().toArray(r),r}}const rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lh={9728:Re,9729:We,9984:Hh,9985:Jr,9986:Bs,9987:Vn},Ih={33071:Sn,33648:oo,10497:Mn},ha={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wx={CUBICSPLINE:void 0,LINEAR:$s,STEP:Zs},ua={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ex(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new To({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_n})),s.DefaultMaterial}function Mi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function On(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Ax(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,u=t.length;c<u;c++){const h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=t.length;c<u;c++){const h=t[c];if(n){const f=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Cx(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rx(s){let t;const e=s.extensions&&s.extensions[Xt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+fa(e.attributes):t=s.indices+":"+fa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+fa(s.targets[n]);return t}function fa(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function ul(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Px(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Dx=new zt;class Lx{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new tx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Au(this.options.manager):this.textureLoader=new dv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Eu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Mi(r,a,i),On(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Xt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ys.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=ha[i.type],a=is[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new _e(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ha[i.type],c=is[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=e.cache.get(S);x||(_=new c(a,p*d,i.count*d/u),x=new h_(_,d/u),e.cache.add(S,x)),m=new Rl(x,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new _e(_,l,g);if(i.sparse!==void 0){const p=ha.SCALAR,S=is[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,C=new S(o[1],x,i.sparse.count*p),w=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new _e(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,L=C.length;A<L;A++){const b=C[A];if(m.setX(b,w[A*l]),l>=2&&m.setY(b,w[A*l+1]),l>=3&&m.setZ(b,w[A*l+2]),l>=4&&m.setW(b,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Lh[f.magFilter]||We,u.minFilter=Lh[f.minFilter]||Vn,u.wrapS=Ih[f.wrapS]||Mn,u.wrapT=Ih[f.wrapT]||Mn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Re&&u.minFilter!==We,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Ue(_);m.needsUpdate=!0,f(m)}),e.load(Ys.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),On(h,o),h.userData.mimeType=o.mimeType||Px(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Xt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ll,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new hi,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return To}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[Xt.KHR_MATERIALS_UNLIT]){const h=i[Xt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,e))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ut(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],qe),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",h.baseColorTexture,Ae)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ie);const u=r.alphaMode||ua.OPAQUE;if(u===ua.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ua.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Gn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new $(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Gn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Gn){const h=r.emissiveFactor;a.emissive=new ut().setRGB(h[0],h[1],h[2],qe)}return r.emissiveTexture!==void 0&&o!==Gn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ae)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),On(h,r),e.associations.set(h,{materials:t}),r.extensions&&Mi(i,h,r),h})}createUniqueName(t){const e=oe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Uh(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],u=Rx(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Xt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Uh(new pe,c,e),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Ex(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const S=c[d];if(m.mode===rn.TRIANGLES||m.mode===rn.TRIANGLE_STRIP||m.mode===rn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new f_(_,S):new ae(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===rn.TRIANGLE_STRIP?p.geometry=Ph(p.geometry,Jh):m.mode===rn.TRIANGLE_FAN&&(p.geometry=Ph(p.geometry,el));else if(m.mode===rn.LINES)p=new wi(_,S);else if(m.mode===rn.LINE_STRIP)p=new Dl(_,S);else if(m.mode===rn.LINE_LOOP)p=new m_(_,S);else if(m.mode===rn.POINTS)p=new gu(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Cx(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),On(p,r),m.extensions&&Mi(i,p,m),e.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)e.associations.set(h[d],{meshes:t,primitives:d});if(h.length===1)return r.extensions&&Mi(i,h[0],r),h[0];const f=new Ke;r.extensions&&Mi(i,f,r),e.associations.set(f,{meshes:t});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new ve(vo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new xo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),On(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new zt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Pl(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let S=0,x=f.length;S<x;S++){const v=f[S],C=d[S],w=g[S],A=_[S],L=m[S];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const b=n._createAnimationTracks(v,C,w,A,L);if(b)for(let y=0;y<b.length;y++)p.push(b[y])}return new nv(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Dx)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new mu:c.length>1?u=new Ke:c.length===1?u=c[0]:u=new le,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),On(u,r),r.extensions&&Mi(n,u,r),r.matrix!==void 0){const h=new zt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Ke;n.name&&(r.name=i.createUniqueName(n.name)),On(r,n),n.extensions&&Mi(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof cn||f instanceof Ue)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];ai[r.path]===ai.weights?t.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ai[r.path]){case ai.weights:c=us;break;case ai.rotation:c=fs;break;case ai.position:case ai.scale:c=ds;break;default:switch(n.itemSize){case 1:c=us;break;case 2:case 3:default:c=ds;break}break}const u=i.interpolation!==void 0?wx[i.interpolation]:$s,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ai[r.path],e.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=ul(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof fs?Tx:Iu;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ix(s,t,e){const n=t.attributes,i=new Jn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){const u=ul(is[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new R,l=new R;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=e.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=ul(is[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Tn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Uh(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=hl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Kt.workingColorSpace!==qe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Kt.workingColorSpace}" not supported.`),On(s,t),Ix(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Ax(s,t.targets,e):s})}const Ux={},Nh={genjin:{type:"stem",growStart:0,growEnd:.4},left1:{type:"leaf",growStart:.08,growEnd:.45},left2:{type:"leaf",growStart:.12,growEnd:.48},left3:{type:"leaf",growStart:.15,growEnd:.5},huarui:{type:"pistil",growStart:.35,growEnd:.6},huaban1:{type:"petal",growStart:.38,growEnd:.85,order:0},huaban4:{type:"petal",growStart:.41,growEnd:.87,order:1},huaban2:{type:"petal",growStart:.44,growEnd:.89,order:2},huaban5:{type:"petal",growStart:.47,growEnd:.91,order:3},huaban3:{type:"petal",growStart:.5,growEnd:.93,order:4},huaban6:{type:"petal",growStart:.53,growEnd:.95,order:5}};function da(s){return 1-Math.pow(1-s,3)}function pa(s){return 1+2.7*Math.pow(s-1,3)+1.7*Math.pow(s-1,2)}class Nx{constructor(t={}){this.options={autoPlay:!0,growthDuration:8,loopMode:"loop",petalOpenAngle:.3,petalScale:1,petalCurl:.4,stemHeight:1,stemBend:.05,leafScale:1,leafDroop:.2,windStrength:1,windSpeed:.5,sssStrength:.3,cameraDistance:3.5,autoRotateSpeed:.01,mouseParallaxH:.3,mouseParallaxV:.15,smoothFactor:.04,activeTab:1,...t},this._group=new Ke,this._group.position.set(0,-.15,0),this._clock=new bs,this._time=0,this._mouse={x:0,y:0},this._target={x:0,y:0},this._bgMesh=null,this._bgMat=null,this._lightGroup=new Ke,this._loaded=!1,this._parts=new Map,this.camera=new ve(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,.2,.8)}build(){return this._createBackground(),this._createLights(),this._loadModel(),this}addTo(t){return t.add(this._group),t.add(this._lightGroup),this._bgMesh&&t.add(this._bgMesh),this}setMouse(t,e){this._mouse.x=(t/window.innerWidth-.5)*2,this._mouse.y=(e/window.innerHeight-.5)*2}update(){const t=this._clock.getDelta(),e=this.options;this._time+=t;const n=this._time;if(this._target.x+=(this._mouse.x*e.mouseParallaxH-this._target.x)*e.smoothFactor,this._target.y+=(-this._mouse.y*e.mouseParallaxV-this._target.y)*e.smoothFactor,this.camera.position.x=Math.sin(e.autoRotateSpeed*n+this._target.x)*e.cameraDistance*.23,this.camera.position.z=Math.cos(e.autoRotateSpeed*n+this._target.x)*e.cameraDistance*.23,this.camera.position.y=.15+this._target.y,this.camera.lookAt(0,.08,0),this._bgMat&&(this._bgMat.uniforms.uTime.value+=t),!this._loaded)return;let i;if(e.autoPlay){const r=e.growthDuration;if(e.loopMode==="loop")i=n%r/r;else if(e.loopMode==="pingpong"){const o=n%(r*2)/r;i=o<=1?o:2-o}else i=Math.min(n/r,1)}else i=Math.max(0,Math.min(1,e.growthProgress||0));this._animateParts(i,n)}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}dispose(){this._group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),this._group.parent&&this._group.parent.remove(this._group),this._lightGroup.parent&&this._lightGroup.parent.remove(this._lightGroup),this._bgMesh&&(this._bgMesh.geometry.dispose(),this._bgMat.dispose(),this._bgMesh.parent&&this._bgMesh.parent.remove(this._bgMesh))}_loadModel(){const t=new Qv,e=new Au,n=typeof Ux<"u"&&"/3DProcedural_Ecosystem/"||"/",i=e.load(n+"model/color.png");i.flipY=!0,i.colorSpace=Ae;const r=e.load(n+"model/roughness.png");r.flipY=!0,t.load(n+"model/tulip-split.glb",o=>{const a=o.scene.clone(!0);a.traverse(l=>{if(!l.isMesh)return;const c=Nh[l.name],u=new To({map:i,roughnessMap:r,roughness:.55,metalness:0,side:Ie,transparent:!0,opacity:0,envMapIntensity:.3});l.material=u,l.castShadow=!0,l.receiveShadow=!0;let h=null,f=0,d=0,g=1;if(c&&(c.type==="petal"||c.type==="leaf")){l.geometry=l.geometry.clone();const _=l.geometry.getAttribute("position");h=new Float32Array(_.array);let m=1/0,p=-1/0;for(let S=0;S<_.count;S++){const x=h[S*3+2];x<m&&(m=x),x>p&&(p=x)}f=m,d=p,g=p-m||1}this._parts.set(l.name,{mesh:l,initPos:l.position.clone(),initQuat:l.quaternion.clone(),initScale:l.scale.clone(),mat:u,origPositions:h,zMin:f,zMax:d,zRange:g})}),this._group.add(a),this._loaded=!0})}_createLights(){const t=new Di(15261936,.6),e=new qs(16774638,1.8);e.position.set(3,5,2),e.castShadow=!0;const n=new qs(13682943,.7);n.position.set(-2,4,-3);const i=new qs(15788287,.3);i.position.set(0,-1,2);const r=new fr(16766176,.8,2,2);r.position.set(0,.25,.15);const o=new cv(12110079,2767386,.35);this._lightGroup.add(t,e,n,i,r,o)}_createBackground(){this._bgMat=new ye({depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }
      `,fragmentShader:Fx}),this._bgMesh=new ae(new wn(2,2),this._bgMat),this._bgMesh.renderOrder=-1,this._bgMesh.frustumCulled=!1}_animateParts(t,e){const n=this.options,i=Math.sin(e*n.windSpeed*.4)*n.windStrength,r=Math.cos(e*n.windSpeed*.3+1.5)*n.windStrength;this._parts.forEach((a,l)=>{const{mesh:c,initPos:u,initQuat:h,initScale:f,mat:d,origPositions:g,zMin:_,zRange:m}=a,p=Nh[l];if(!p)return;const S=Math.max(0,Math.min(1,(t-p.growStart)/(p.growEnd-p.growStart))),x=p.order||0;if(c.position.copy(u),c.quaternion.copy(h),c.scale.copy(f),g){const v=c.geometry.getAttribute("position");v.array.set(g),v.needsUpdate=!0}this._animateGrowth(c,d,p,S,x,e,i,r,g,_,m),c.visible=S>.001});const o=Math.min(3*t,1);this._group.rotation.y=0,this._group.rotation.z=.003*i*o,this._group.rotation.x=.002*r*o}_animateGrowth(t,e,n,i,r,o,a,l,c,u,h){const f=this.options;if(n.type==="stem"){const d=da(i);t.scale.set(t.scale.x*(.3+.7*d),t.scale.y*Math.max(.001,d),t.scale.z*(.3+.7*d)),e.opacity=Math.min(i*5,1),d>.3&&(t.rotateZ(.003*a*d),t.rotateX(.002*l*d))}else if(n.type==="leaf"){const d=pa(i);t.scale.multiplyScalar(Math.max(.001,d)),e.opacity=Math.min(i*4,1),t.rotateY((1-d)*.6),t.rotateX((1-d)*.18),d>.3&&t.rotateZ(.008*Math.sin(o*f.windSpeed*.6+t.id*2)*f.windStrength*d)}else if(n.type==="pistil")e.opacity=da(Math.min(i*2.5,1));else if(n.type==="petal"){e.opacity=da(Math.min(i*2.5,1));const d=Math.max(.001,pa(Math.min(i/.5,1)));t.scale.multiplyScalar(d);const g=pa(Math.min(Math.max((i-.25)/.75,0),1)),_=1-g;if(_>.005&&(t.rotateX(-(.5*_)),t.rotateY(.08*_*(r%2===0?1:-1))),c&&h){const m=t.geometry.getAttribute("position"),p=m.array;let S=Math.min(i/.65,1);const v=1-(S<.5?4*S*S*S:1-Math.pow(-2*S+2,3)/2);for(let C=0;C<m.count;C++){const w=c[C*3+2],A=(w-u)/h;p[C*3+2]=w+A*A*v*3.5}m.needsUpdate=!0}if(g>.7){const m=(g-.7)/.3;t.rotateX(.005*Math.sin(o*(1+r*.18)+r*1.5)*m*f.windStrength),t.rotateZ(.004*Math.sin(o*(.7+r*.13)+r*2.1)*m*f.windStrength)}}}}const Fx=`
  uniform float uTime;
  varying vec2 vUv;
  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  void main() {
    vec2 uv = vUv;
    vec3 top = vec3(0.02, 0.015, 0.06);
    vec3 mid = vec3(0.06, 0.04, 0.14);
    vec3 bot = vec3(0.12, 0.08, 0.22);
    float t = uv.y;
    vec3 col;
    if (t > 0.5) col = mix(mid, top, smoothstep(0.5, 1.0, t));
    else col = mix(bot, mid, smoothstep(0.0, 0.5, t));
    col = mix(vec3(0.02, 0.03, 0.01), col, smoothstep(0.0, 0.15, t));
    vec2 sg = uv * vec2(50.0, 30.0);
    vec2 sc = floor(sg);
    float sr = hash(sc);
    if (sr > 0.93) {
      vec2 sp = fract(sg) - 0.5;
      vec2 so = (vec2(hash(sc + 1.0), hash(sc + 2.0)) - 0.5) * 0.4;
      float sd = length(sp - so);
      float star = smoothstep(0.03, 0.0, sd);
      float tw = sin(uTime * (1.0 + sr * 2.5) + sr * 6.28) * 0.5 + 0.5;
      col += vec3(0.5, 0.5, 0.7) * star * (tw * 0.5 + 0.5) * 0.6 * smoothstep(0.25, 0.7, uv.y);
    }
    gl_FragColor = vec4(col, 1.0);
  }
`;class Ox{static wingFlapFunction(t={}){const{timeUniform:e="uTime",frequencyUniform:n="uFlapFrequency",amplitudeUniform:i="uFlapAmplitude"}=t;return`
      /**
       * 计算翅膀扇动的顶点偏移
       * @param pos - 顶点原始位置
       * @param wingSpan - 翅膀展幅（沿 X 轴的距离比）
       * @param phase - 相位偏移 (用于区分不同实例)
       * @param time - 当前时间
       * @param frequency - 扇动频率
       * @param amplitude - 扇动振幅
       * @return 位移后的位置
       */
      vec3 wingFlap(vec3 pos, float wingSpan, float phase, float time, float frequency, float amplitude) {
        // 翅膀根到翅尖的比率 [0, 1]
        float wingRatio = abs(pos.x) / max(wingSpan, 0.001);
        float wingSign = sign(pos.x);

        // 非线性扇动方程：三角波 + 正弦叠加
        // 下扇快、上扇慢（仿生学真实模拟）
        float rawFlap = sin(time * frequency + phase);
        float asymmetry = 0.3 * sin(time * frequency * 2.0 + phase); // 二次谐波
        float flapAngle = (rawFlap + asymmetry) * amplitude;

        // 翅尖偏移更大 (二次衰减)
        float flapMask = wingRatio * wingRatio;

        // 扇动垂直位移
        pos.y += flapMask * sin(flapAngle) * wingSpan;

        // 翅膀弯曲 (翅尖略向内收)
        pos.z += flapMask * flapMask * cos(flapAngle) * wingSpan * 0.15;

        // 翅膀扭转 (前缘先动)
        float twistPhase = pos.z * 0.5;
        float twist = flapMask * sin(flapAngle + twistPhase) * 0.1;
        pos.y += twist;

        return pos;
      }
    `}static fishSwimFunction(){return`
      vec3 fishSwim(vec3 pos, float bodyLength, float phase, float time, float frequency, float amplitude) {
        // 沿体轴的波动
        float bodyRatio = (pos.z + bodyLength * 0.5) / bodyLength;

        // 行波方程: sin(kx - ωt)
        // 尾部振幅更大
        float envelopeAmp = bodyRatio * bodyRatio * amplitude;

        // 横向摆动
        float wave = sin(bodyRatio * 6.2831 * 1.5 - time * frequency + phase);
        pos.x += wave * envelopeAmp;

        // 轻微的垂直起伏
        pos.y += sin(time * frequency * 0.5 + phase) * amplitude * 0.1;

        return pos;
      }
    `}static instanceDecodeFunction(){return`
      float instanceSeed(int instanceID) {
        return fract(float(instanceID) * 0.6180339887498949); // 黄金比例分数
      }

      vec3 instanceOffset(int instanceID, float spread) {
        float seed = instanceSeed(instanceID);
        float angle = seed * 6.2831853;
        float radius = sqrt(fract(seed * 7.37)) * spread;
        return vec3(cos(angle) * radius, fract(seed * 13.17) * spread * 0.3, sin(angle) * radius);
      }
    `}}class zx{constructor(t={}){this.count=t.count||50,this.rng=new Pu(t.seed??42),this.separationDist=t.separationDist??1.5,this.alignmentDist=t.alignmentDist??3,this.cohesionDist=t.cohesionDist??4,this.separationWeight=t.separationWeight??1.5,this.alignmentWeight=t.alignmentWeight??1,this.cohesionWeight=t.cohesionWeight??1,this.maxSpeed=t.maxSpeed??2,this.maxForce=t.maxForce??.03,this.bounds=t.bounds??[20,10,20],this.boundaryForce=t.boundaryForce??.5,this.positions=new Float32Array(this.count*3),this.velocities=new Float32Array(this.count*3),this.accelerations=new Float32Array(this.count*3),this._positionTexture=null,this._velocityTexture=null,this._initialize()}_initialize(){this.rng.reset();for(let t=0;t<this.count;t++){const e=t*3;this.positions[e]=this.rng.range(-this.bounds[0]*.5,this.bounds[0]*.5),this.positions[e+1]=this.rng.range(1,this.bounds[1]),this.positions[e+2]=this.rng.range(-this.bounds[2]*.5,this.bounds[2]*.5);const n=this.rng.range(.5,this.maxSpeed),i=this.rng.range(0,Math.PI*2),r=this.rng.range(-.3,.3);this.velocities[e]=Math.cos(i)*Math.cos(r)*n,this.velocities[e+1]=Math.sin(r)*n*.3,this.velocities[e+2]=Math.sin(i)*Math.cos(r)*n}}update(t){const e=Math.min(t,.05);this.accelerations.fill(0);for(let n=0;n<this.count;n++)this._computeForces(n);for(let n=0;n<this.count;n++){const i=n*3;this.velocities[i]+=this.accelerations[i]*e,this.velocities[i+1]+=this.accelerations[i+1]*e,this.velocities[i+2]+=this.accelerations[i+2]*e;const r=Math.sqrt(this.velocities[i]**2+this.velocities[i+1]**2+this.velocities[i+2]**2);if(r>this.maxSpeed){const o=this.maxSpeed/r;this.velocities[i]*=o,this.velocities[i+1]*=o,this.velocities[i+2]*=o}this.positions[i]+=this.velocities[i]*e,this.positions[i+1]+=this.velocities[i+1]*e,this.positions[i+2]+=this.velocities[i+2]*e,this._applyBoundary(n)}this._positionTexture&&this._updateTextures()}_computeForces(t){const e=t*3,n=this.positions[e],i=this.positions[e+1],r=this.positions[e+2];let o=0,a=0,l=0,c=0,u=0,h=0,f=0,d=0,g=0,_=0,m=0,p=0;for(let x=0;x<this.count;x++){if(x===t)continue;const v=x*3,C=this.positions[v]-n,w=this.positions[v+1]-i,A=this.positions[v+2]-r,L=Math.sqrt(C*C+w*w+A*A);if(!(L<.001)){if(L<this.separationDist){const b=1/L;o-=C*b,a-=w*b,l-=A*b,c++}L<this.alignmentDist&&(u+=this.velocities[v],h+=this.velocities[v+1],f+=this.velocities[v+2],d++),L<this.cohesionDist&&(g+=this.positions[v],_+=this.positions[v+1],m+=this.positions[v+2],p++)}}const S=(x,v,C,w)=>{const A=Math.sqrt(x*x+v*v+C*C);if(A>0){const L=Math.min(this.maxForce*w/A,this.maxForce*w);this.accelerations[e]+=x*L,this.accelerations[e+1]+=v*L,this.accelerations[e+2]+=C*L}};c>0&&S(o,a,l,this.separationWeight),d>0&&S(u/d-this.velocities[e],h/d-this.velocities[e+1],f/d-this.velocities[e+2],this.alignmentWeight),p>0&&S(g/p-n,_/p-i,m/p-r,this.cohesionWeight)}_applyBoundary(t){const e=t*3,n=2,[i,r,o]=this.bounds;for(let a=0;a<3;a++){const l=this.bounds[a]*.5,c=this.positions[e+a];a===1?(c<.5&&(this.velocities[e+a]+=this.boundaryForce),c>r&&(this.velocities[e+a]-=this.boundaryForce)):(c<-l+n&&(this.velocities[e+a]+=this.boundaryForce),c>l-n&&(this.velocities[e+a]-=this.boundaryForce))}}applyToInstancedMesh(t){const e=new le,n=new R(0,1,0),i=new R;for(let r=0;r<this.count;r++){const o=r*3;e.position.set(this.positions[o],this.positions[o+1],this.positions[o+2]),i.set(this.velocities[o],this.velocities[o+1],this.velocities[o+2]).normalize(),e.quaternion.setFromUnitVectors(n,i);const a=Math.atan2(this.accelerations[o],9.8)*.3;e.rotateZ(a),e.updateMatrix(),t.setMatrixAt(r,e.matrix)}t.instanceMatrix.needsUpdate=!0}createGPUTextures(){const t=Math.ceil(Math.sqrt(this.count)),e=t*t,n=new Float32Array(e*4),i=new Float32Array(e*4);for(let r=0;r<this.count;r++){const o=r*3,a=r*4;n[a]=this.positions[o],n[a+1]=this.positions[o+1],n[a+2]=this.positions[o+2],n[a+3]=1,i[a]=this.velocities[o],i[a+1]=this.velocities[o+1],i[a+2]=this.velocities[o+2],i[a+3]=0}return this._positionTexture=new Qs(n,t,t,Ve,Xe),this._positionTexture.needsUpdate=!0,this._velocityTexture=new Qs(i,t,t,Ve,Xe),this._velocityTexture.needsUpdate=!0,{positionTexture:this._positionTexture,velocityTexture:this._velocityTexture,textureSize:t}}_updateTextures(){if(!this._positionTexture)return;const t=this._positionTexture.image.data,e=this._velocityTexture.image.data;for(let n=0;n<this.count;n++){const i=n*3,r=n*4;t[r]=this.positions[i],t[r+1]=this.positions[i+1],t[r+2]=this.positions[i+2],e[r]=this.velocities[i],e[r+1]=this.velocities[i+1],e[r+2]=this.velocities[i+2]}this._positionTexture.needsUpdate=!0,this._velocityTexture.needsUpdate=!0}static gpuSampleFunction(){return`
      uniform sampler2D tBoidsPosition;
      uniform sampler2D tBoidsVelocity;
      uniform float uBoidsTexSize;

      vec4 getBoidPosition(int id) {
        float u = (mod(float(id), uBoidsTexSize) + 0.5) / uBoidsTexSize;
        float v = (floor(float(id) / uBoidsTexSize) + 0.5) / uBoidsTexSize;
        return texture(tBoidsPosition, vec2(u, v));
      }

      vec4 getBoidVelocity(int id) {
        float u = (mod(float(id), uBoidsTexSize) + 0.5) / uBoidsTexSize;
        float v = (floor(float(id) / uBoidsTexSize) + 0.5) / uBoidsTexSize;
        return texture(tBoidsVelocity, vec2(u, v));
      }
    `}dispose(){this._positionTexture&&this._positionTexture.dispose(),this._velocityTexture&&this._velocityTexture.dispose()}}class fl extends Ts{constructor(t={}){super({wingSpan:1.5,wingAspect:1.2,wingSegments:16,flapFrequency:8,flapAmplitude:.8,baseColor:[.1,.05,.2],filmThickness:400,ior:1.5,iridescenceIntensity:.8,flockCount:0,...t}),this._boids=null}_buildGeometry(){const t=this._params,e=t.wingSegments,n=t.wingSpan,i=t.wingAspect,r=[],o=[],a=[],l=[],c=[];for(let _=0;_<2;_++){const m=_===0?1:-1,p=r.length/3;for(let S=0;S<=e;S++){const x=S/e;for(let v=0;v<=e;v++){const C=v/e,w=n*.5*this._wingProfile(x),A=n*i,L=m*(x*w+.05),b=(C-.5)*A*this._wingChord(x),y=this._wingCamber(C,x)*.1;r.push(L,y,b),o.push(0,1,0),a.push(C,x),c.push(x)}}for(let S=0;S<e;S++)for(let x=0;x<e;x++){const v=p+S*(e+1)+x,C=v+1,w=v+(e+1),A=w+1;_===0?l.push(v,C,A,v,A,w):l.push(v,A,C,v,w,A)}}const u=r.length/3,h=8,f=n*i*.6,d=.03;for(let _=0;_<=h;_++){const m=_/h,p=(m-.5)*f,S=d*(1-Math.abs(m-.4)*1.5);for(let x=0;x<=h;x++){const v=x/h*Math.PI*2;r.push(Math.cos(v)*Math.max(S,.005),Math.sin(v)*Math.max(S,.005),p),o.push(Math.cos(v),Math.sin(v),0),a.push(x/h,m),c.push(0)}}for(let _=0;_<h;_++)for(let m=0;m<h;m++){const p=u+_*(h+1)+m,S=p+1,x=p+(h+1),v=x+1;l.push(p,S,v,p,v,x)}const g=new pe;return g.setAttribute("position",new de(r,3)),g.setAttribute("normal",new de(o,3)),g.setAttribute("uv",new de(a,2)),g.setAttribute("aWingMask",new de(c,1)),g.setIndex(l),g.computeVertexNormals(),g.computeBoundingSphere(),g}_buildMaterial(){const t=this._params,e=`
      precision highp float;

      uniform float uTime;
      uniform float uFlapFrequency;
      uniform float uFlapAmplitude;
      uniform float uRandomSeed;
      uniform float uWingSpan;

      attribute float aWingMask;

      out vec3 vNormal;
      out vec3 vWorldPosition;
      out vec2 vUv;
      out vec3 vViewDir;
      out float vWingMask;
      out vec3 vTangent;

      ${Ox.wingFlapFunction()}

      void main() {
        vUv = uv;
        vWingMask = aWingMask;

        vec3 pos = position;

        // GPU 翅膀扇动 (通过 Vertex Kinematics)
        if (aWingMask > 0.01) {
          float phase = uRandomSeed * 6.283;
          pos = wingFlap(pos, uWingSpan * 0.5, phase, uTime, uFlapFrequency, uFlapAmplitude);
        }

        // 计算切线（用于各向异性高光）
        vTangent = normalize(vec3(0.0, 0.0, 1.0)); // 沿翅膀前后缘方向

        vNormal = normalize(normalMatrix * normal);

        vec4 worldPos = modelMatrix * vec4(pos, 1.0);
        vWorldPosition = worldPos.xyz;
        vViewDir = normalize(cameraPosition - worldPos.xyz);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,n=`
      precision highp float;

      uniform float uTime;
      uniform vec3 uBaseColor;
      uniform float uFilmThickness;
      uniform float uIOR;
      uniform float uIridescenceIntensity;
      uniform float uRandomSeed;

      in vec3 vNormal;
      in vec3 vWorldPosition;
      in vec2 vUv;
      in vec3 vViewDir;
      in float vWingMask;
      in vec3 vTangent;

      out vec4 fragColor;

      ${Wn.thinFilmIridescenceFunction()}
      ${Wn.anisotropicSpecularFunction()}
      ${Wn.fresnelFunction()}

      // 翅膀图案 (程序化)
      float wingPattern(vec2 uv, float seed) {
        // 蝴蝶翅膀的纹脉结构
        float vein = smoothstep(0.48, 0.5, abs(fract(uv.y * 8.0 + seed) - 0.5));
        float cell = smoothstep(0.45, 0.5, abs(fract(uv.x * 6.0 + uv.y * 3.0 + seed * 2.0) - 0.5));

        // 眼斑
        float eyeSpot = 1.0 - smoothstep(0.0, 0.15,
          length(uv - vec2(0.6, 0.5 + seed * 0.1)));
        eyeSpot += 1.0 - smoothstep(0.0, 0.08,
          length(uv - vec2(0.6, 0.5 + seed * 0.1))) * 0.5;

        return max(vein * cell, eyeSpot);
      }

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewDir);
        vec3 lightDir = normalize(vec3(0.5, 1.0, 0.3));

        float NdotV = max(dot(normal, viewDir), 0.0);

        // 薄膜干涉色
        float filmVar = uFilmThickness + sin(vUv.x * 10.0 + vUv.y * 5.0) * 50.0;
        vec3 iridescence = thinFilmIridescence(NdotV, filmVar, uIOR);

        // 翅膀图案
        float pattern = wingPattern(vUv, uRandomSeed);

        // 基础色 + 干涉色混合
        vec3 baseColor = uBaseColor;
        vec3 surfaceColor = mix(baseColor, iridescence, uIridescenceIntensity * (0.5 + 0.5 * pattern));

        // 各向异性高光
        vec3 tangent = normalize(vTangent);
        float anisoSpec = anisotropicSpecular(lightDir, viewDir, normal, tangent, 0.3, 0.05);
        vec3 specular = vec3(1.0, 0.95, 0.9) * anisoSpec * 0.5;

        // 漫反射
        float NdotL = max(dot(normal, lightDir), 0.0);
        float diffuse = NdotL * 0.7 + 0.3;

        // Fresnel 边缘光
        float fresnel = fresnelSchlick(NdotV, 0.04);
        vec3 rimLight = iridescence * fresnel * 0.4;

        // 半透明 (背光效果)
        float backLight = max(dot(-normal, lightDir), 0.0);
        vec3 translucency = surfaceColor * backLight * 0.3;

        // 合成
        vec3 finalColor = surfaceColor * diffuse + specular + rimLight + translucency;

        // 翅膀边缘衰减
        float edgeMask = vWingMask > 0.01 ? smoothstep(1.0, 0.8, vWingMask) : 1.0;
        float alpha = vWingMask > 0.01 ? edgeMask * 0.95 : 1.0;

        // 身体使用深色
        if (vWingMask < 0.01) {
          finalColor = vec3(0.02, 0.01, 0.03) * (diffuse * 0.5 + 0.5);
          alpha = 1.0;
        }

        finalColor = pow(finalColor, vec3(1.0 / 2.2));
        fragColor = vec4(finalColor, alpha);
      }
    `;return new Wn({vertexShader:e,fragmentShader:n,transparent:!0,side:Ie,uniforms:{uBaseColor:{value:new R(...t.baseColor)},uFilmThickness:{value:t.filmThickness},uIOR:{value:t.ior},uIridescenceIntensity:{value:t.iridescenceIntensity},uFlapFrequency:{value:t.flapFrequency},uFlapAmplitude:{value:t.flapAmplitude},uWingSpan:{value:t.wingSpan},uRandomSeed:{value:t.seed*.001}}})}_buildMesh(){const t=this._params;if(t.flockCount>0){const e=new Mo(this._geometry,this._material,t.flockCount);return e.frustumCulled=!1,this._boids=new zx({count:t.flockCount,seed:t.seed,maxSpeed:3,bounds:[30,15,30]}),this._boids.applyToInstancedMesh(e),e}return new ae(this._geometry,this._material)}_wingProfile(t){return Math.sin(t*Math.PI)*(1-t*.3)}_wingChord(t){return 1-t*t*.5}_wingCamber(t,e){return Math.sin(t*Math.PI)*(1-e)*.5}updateFlock(t){return this._boids&&this._mesh&&(this._boids.update(t),this._boids.applyToInstancedMesh(this._mesh)),this}getBoids(){return this._boids}dispose(){super.dispose(),this._boids&&(this._boids.dispose(),this._boids=null)}}ms.register("BionicButterfly",fl,{wingSpan:1.5,baseColor:[.1,.05,.2],filmThickness:400});class Bx{static glsl(){return`
      // 4D Simplex Noise (Stefan Gustavson, Ian McEwan)
      vec4 mod289_4(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
      float mod289_f(float x) { return x - floor(x * (1.0/289.0)) * 289.0; }
      vec4 permute4(vec4 x) { return mod289_4(((x*34.0)+10.0)*x); }
      float permute_f(float x) { return mod289_f(((x*34.0)+10.0)*x); }
      vec4 taylorInvSqrt4(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float taylorInvSqrt_f(float r) { return 1.79284291400159 - 0.85373472095314 * r; }

      vec4 grad4(float j, vec4 ip) {
        const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
        vec4 p, s;
        p.xyz = floor( fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
        p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
        s = vec4(lessThan(p, vec4(0.0)));
        p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;
        return p;
      }

      #define F4 0.309016994374947451

      float snoise4D(vec4 v) {
        const vec4 C = vec4(
          0.138196601125011,  // (5 - sqrt(5))/20  G4
          0.276393202250021,  // 2 * G4
          0.414589803375032,  // 3 * G4
          -0.447213595499958  // -1 + 4 * G4
        );

        vec4 i  = floor(v + dot(v, vec4(F4)));
        vec4 x0 = v - i + dot(i, C.xxxx);

        vec4 i0;
        vec3 isX = step(x0.yzw, x0.xxx);
        vec3 isYZ = step(x0.zww, x0.yyz);
        i0.x = isX.x + isX.y + isX.z;
        i0.yzw = 1.0 - isX;
        i0.y += isYZ.x + isYZ.y;
        i0.zw += 1.0 - isYZ.xy;
        i0.z += isYZ.z;
        i0.w += 1.0 - isYZ.z;

        vec4 i3 = clamp(i0, 0.0, 1.0);
        vec4 i2 = clamp(i0 - 1.0, 0.0, 1.0);
        vec4 i1 = clamp(i0 - 2.0, 0.0, 1.0);

        vec4 x1 = x0 - i1 + C.xxxx;
        vec4 x2 = x0 - i2 + C.yyyy;
        vec4 x3 = x0 - i3 + C.zzzz;
        vec4 x4 = x0 + C.wwww;

        i = mod289_4(i);
        float j0 = permute_f(permute_f(permute_f(permute_f(i.w) + i.z) + i.y) + i.x);
        vec4 j1 = permute4(permute4(permute4(permute4(
          i.w + vec4(i1.w, i2.w, i3.w, 1.0))
        + i.z + vec4(i1.z, i2.z, i3.z, 1.0))
        + i.y + vec4(i1.y, i2.y, i3.y, 1.0))
        + i.x + vec4(i1.x, i2.x, i3.x, 1.0));

        vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0);

        vec4 p0 = grad4(j0,   ip);
        vec4 p1 = grad4(j1.x, ip);
        vec4 p2 = grad4(j1.y, ip);
        vec4 p3 = grad4(j1.z, ip);
        vec4 p4 = grad4(j1.w, ip);

        vec4 norm = taylorInvSqrt4(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        p4 *= taylorInvSqrt_f(dot(p4,p4));

        vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
        vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);
        m0 = m0 * m0;
        m1 = m1 * m1;

        return 49.0 * (
          dot(m0*m0, vec3(dot(p0,x0), dot(p1,x1), dot(p2,x2)))
        + dot(m1*m1, vec2(dot(p3,x3), dot(p4,x4)))
        );
      }
    `}static fbm4DGlsl(){return`
      float fbm4D(vec4 p, int octaves, float lacunarity, float gain) {
        float value = 0.0;
        float amplitude = 0.5;
        vec4 freq = p;
        for (int i = 0; i < 8; i++) {
          if (i >= octaves) break;
          value += amplitude * snoise4D(freq);
          freq *= lacunarity;
          amplitude *= gain;
        }
        return value;
      }
    `}}class Uu extends Ts{constructor(t={}){super({power:8,iterations:12,bailout:2,scale:2,colorA:[.1,.2,.6],colorB:[.9,.3,.1],glowIntensity:.5,animate:!0,...t})}_buildGeometry(){return new wn(2,2)}_buildMaterial(){const t=this._params,e=`
      precision highp float;
      out vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,n=`
      precision highp float;

      uniform float uTime;
      uniform vec2 uResolution;
      uniform float uPower;
      uniform int uIterations;
      uniform float uBailout;
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform float uGlowIntensity;
      uniform float uAnimate;
      uniform float uScale;

      in vec2 vUv;
      out vec4 fragColor;

      ${Bx.glsl()}

      // Mandelbulb SDF
      vec2 mandelbulbDE(vec3 pos) {
        vec3 z = pos;
        float dr = 1.0;
        float r = 0.0;
        float trap = 1e10;
        float power = uPower + uAnimate * sin(uTime * 0.3) * 2.0;

        for (int i = 0; i < 20; i++) {
          if (i >= uIterations) break;
          r = length(z);
          if (r > uBailout) break;

          // 球坐标转换
          float theta = acos(z.z / r);
          float phi = atan(z.y, z.x);
          dr = pow(r, power - 1.0) * power * dr + 1.0;

          // 分形折叠
          float zr = pow(r, power);
          theta = theta * power;
          phi = phi * power;

          z = zr * vec3(
            sin(theta) * cos(phi),
            sin(phi) * sin(theta),
            cos(theta)
          );
          z += pos;

          // 轨道陷阱 (用于着色)
          trap = min(trap, length(z));
        }

        return vec2(0.5 * log(r) * r / dr, trap);
      }

      // 场景 SDF
      float map(vec3 p) {
        return mandelbulbDE(p / uScale).x * uScale;
      }

      // 法线计算
      vec3 calcNormal(vec3 p) {
        vec2 e = vec2(0.0005, 0.0);
        return normalize(vec3(
          map(p + e.xyy) - map(p - e.xyy),
          map(p + e.yxy) - map(p - e.yxy),
          map(p + e.yyx) - map(p - e.yyx)
        ));
      }

      // AO
      float calcAO(vec3 p, vec3 n) {
        float occ = 0.0, sca = 1.0;
        for (int i = 0; i < 5; i++) {
          float h = 0.01 + 0.05 * float(i);
          occ += (h - map(p + h * n)) * sca;
          sca *= 0.85;
        }
        return clamp(1.0 - 2.0 * occ, 0.0, 1.0);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;

        // 相机设置 (轨道相机)
        float camDist = 3.5;
        float camAngle = uTime * 0.15;
        vec3 ro = vec3(
          camDist * cos(camAngle),
          camDist * 0.4 * sin(uTime * 0.1),
          camDist * sin(camAngle)
        );
        vec3 ta = vec3(0.0);
        vec3 ww = normalize(ta - ro);
        vec3 uu = normalize(cross(ww, vec3(0.0, 1.0, 0.0)));
        vec3 vv = cross(uu, ww);
        vec3 rd = normalize(uv.x * uu + uv.y * vv + 1.8 * ww);

        // Raymarching
        float t = 0.0;
        float glow = 0.0;
        vec3 col = vec3(0.0);
        bool hit = false;
        float trap = 0.0;

        for (int i = 0; i < 128; i++) {
          vec3 p = ro + rd * t;
          vec2 res = mandelbulbDE(p / uScale);
          float d = res.x * uScale;
          trap = res.y;

          // 辉光累积
          glow += 0.1 / (1.0 + d * d * 400.0);

          if (d < 0.001) { hit = true; break; }
          if (t > 10.0) break;
          t += d * 0.8; // 步进因子
        }

        if (hit) {
          vec3 p = ro + rd * t;
          vec3 n = calcNormal(p);
          vec3 lightDir = normalize(vec3(0.8, 0.6, -0.5));

          // 漫反射
          float diff = max(dot(n, lightDir), 0.0);
          float spec = pow(max(dot(reflect(-lightDir, n), -rd), 0.0), 32.0);
          float ao = calcAO(p, n);

          // 基于轨道陷阱的着色
          vec3 surfCol = mix(uColorA, uColorB, clamp(trap * 0.5, 0.0, 1.0));

          // 添加4D噪声细节
          float noiseDetail = snoise4D(vec4(p * 3.0, uTime * 0.1)) * 0.1;
          surfCol += noiseDetail;

          col = surfCol * (0.2 + 0.8 * diff) * ao;
          col += vec3(1.0, 0.95, 0.9) * spec * 0.5;

          // 距离衰减雾
          float fog = exp(-t * 0.15);
          col = mix(vec3(0.01, 0.01, 0.02), col, fog);
        }

        // 辉光叠加
        col += uGlowIntensity * glow * mix(uColorA, uColorB, 0.5) * 0.15;

        // 背景梯度
        if (!hit) {
          col = mix(vec3(0.01, 0.01, 0.03), vec3(0.02, 0.0, 0.05), uv.y + 0.5);
          col += uGlowIntensity * glow * mix(uColorA, uColorB, 0.5) * 0.15;
        }

        // Gamma + 色调映射
        col = col / (col + vec3(1.0)); // Reinhard
        col = pow(col, vec3(1.0 / 2.2));

        fragColor = vec4(col, 1.0);
      }
    `;return new Wn({vertexShader:e,fragmentShader:n,transparent:!1,side:_n,depthWrite:!1,depthTest:!1,uniforms:{uPower:{value:t.power},uIterations:{value:t.iterations},uBailout:{value:t.bailout},uScale:{value:t.scale},uColorA:{value:new R(...t.colorA)},uColorB:{value:new R(...t.colorB)},uGlowIntensity:{value:t.glowIntensity},uAnimate:{value:t.animate?1:0}}})}_buildMesh(){const t=new ae(this._geometry,this._material);return t.frustumCulled=!1,t}setPower(t){return this._material&&(this._material.uniforms.uPower.value=t),this}}ms.register("MandelbulbFractal",Uu,{power:8,colorA:[.1,.2,.6],colorB:[.9,.3,.1]});class kx{static glsl(){return`
      // 3D Simplex Noise (内联版)
      vec3 mod289_fbm(vec3 x){ return x - floor(x*(1.0/289.0))*289.0; }
      vec4 mod289_fbm4(vec4 x){ return x - floor(x*(1.0/289.0))*289.0; }
      vec4 perm_fbm(vec4 x){ return mod289_fbm4(((x*34.0)+10.0)*x); }
      vec4 tis_fbm(vec4 r){ return 1.79284291400159 - 0.85373472095314*r; }

      float snoise_fbm(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g, l.zxy);
        vec3 i2 = max(g, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - 0.5;
        i = mod289_fbm(i);
        vec4 p = perm_fbm(perm_fbm(perm_fbm(
          i.z+vec4(0.0,i1.z,i2.z,1.0))+
          i.y+vec4(0.0,i1.y,i2.y,1.0))+
          i.x+vec4(0.0,i1.x,i2.x,1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_*vec3(2.0,1.0,0.0)-vec3(1.0,1.0,0.0);
        vec4 j = p - 49.0*floor(p*ns.z*ns.z);
        vec4 x_ = floor(j*ns.z);
        vec4 y_ = floor(j - 7.0*x_);
        vec4 x2_ = x_*ns.x + ns.yyyy;
        vec4 y2_ = y_*ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x2_) - abs(y2_);
        vec4 b0 = vec4(x2_.xy, y2_.xy);
        vec4 b1 = vec4(x2_.zw, y2_.zw);
        vec4 s0 = floor(b0)*2.0+1.0;
        vec4 s1 = floor(b1)*2.0+1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = tis_fbm(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
        p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
        vec4 m = max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
        m = m*m;
        return 105.0*dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
      }

      // 标准 FBM
      float fbm_standard(vec3 p, int octaves, float lacunarity, float gain) {
        float value = 0.0, amplitude = 0.5, frequency = 1.0;
        for (int i = 0; i < 8; i++) {
          if (i >= octaves) break;
          value += amplitude * snoise_fbm(p * frequency);
          frequency *= lacunarity;
          amplitude *= gain;
        }
        return value;
      }

      // Ridged FBM (山脊型)
      float fbm_ridged(vec3 p, int octaves, float lacunarity, float gain) {
        float value = 0.0, amplitude = 0.5, frequency = 1.0;
        float prev = 1.0;
        for (int i = 0; i < 8; i++) {
          if (i >= octaves) break;
          float n = abs(snoise_fbm(p * frequency));
          n = 1.0 - n;
          n = n * n;
          value += n * amplitude * prev;
          prev = n;
          frequency *= lacunarity;
          amplitude *= gain;
        }
        return value;
      }

      // Turbulence FBM (湍流型)
      float fbm_turbulence(vec3 p, int octaves, float lacunarity, float gain) {
        float value = 0.0, amplitude = 0.5, frequency = 1.0;
        for (int i = 0; i < 8; i++) {
          if (i >= octaves) break;
          value += amplitude * abs(snoise_fbm(p * frequency));
          frequency *= lacunarity;
          amplitude *= gain;
        }
        return value;
      }

      // Domain Warping FBM
      float fbm_warped(vec3 p, int octaves) {
        vec3 q = vec3(
          fbm_standard(p, octaves, 2.0, 0.5),
          fbm_standard(p + vec3(5.2, 1.3, 2.8), octaves, 2.0, 0.5),
          fbm_standard(p + vec3(1.7, 9.2, 3.4), octaves, 2.0, 0.5)
        );
        return fbm_standard(p + 4.0 * q, octaves, 2.0, 0.5);
      }
    `}}class Nu extends Ts{constructor(t={}){super({colorTop:[.1,.8,.3],colorBottom:[.3,.1,.6],colorAccent:[.1,.3,.9],height:5,curtainWidth:15,speed:.3,intensity:1.5,turbulence:1,raySteps:48,...t})}_buildGeometry(){return new wn(2,2)}_buildMaterial(){const t=this._params,e=`
      precision highp float;
      out vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,n=`
      precision highp float;

      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec3 uColorTop;
      uniform vec3 uColorBottom;
      uniform vec3 uColorAccent;
      uniform float uHeight;
      uniform float uCurtainWidth;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uTurbulence;
      uniform int uRaySteps;

      in vec2 vUv;
      out vec4 fragColor;

      ${kx.glsl()}

      // 极光密度场
      float auroraDensity(vec3 p) {
        float time = uTime * uSpeed;

        // 帷幕形状：沿 X 轴的正弦波褶皱
        float curtain = sin(p.x * 0.3 + time * 0.5) * 0.5 +
                        sin(p.x * 0.7 + time * 0.3) * 0.3;

        // Z 方向的密度衰减（薄帷幕）
        float zFade = exp(-abs(p.z - curtain) * 3.0);

        // Y 方向的高度分布
        float heightNorm = (p.y - 2.0) / uHeight;
        float heightFade = smoothstep(0.0, 0.2, heightNorm) *
                           smoothstep(1.0, 0.7, heightNorm);

        // FBM 湍流扰动
        float noise = fbm_standard(
          vec3(p.x * 0.5 + time * 0.2, p.y * 0.8, p.z * 0.5 + time * 0.15),
          5, 2.0, 0.5
        );

        // 高频流动细节
        float detail = fbm_ridged(
          vec3(p.x * 1.5 + time * 0.4, p.y * 2.0 - time * 0.1, p.z * 1.0),
          4, 2.5, 0.45
        );

        float density = zFade * heightFade;
        density *= (0.5 + 0.5 * noise * uTurbulence);
        density *= (0.7 + 0.3 * detail);

        // X 方向的帷幕宽度限制
        float xFade = smoothstep(uCurtainWidth, uCurtainWidth * 0.5, abs(p.x));
        density *= xFade;

        return max(density * 0.5, 0.0);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;

        // 相机 (仰视)
        vec3 ro = vec3(0.0, 0.0, -5.0);
        vec3 rd = normalize(vec3(uv.x * 1.2, uv.y * 0.8 + 0.6, 1.0));

        // 极光区域的 AABB
        vec3 boxMin = vec3(-uCurtainWidth, 2.0, -3.0);
        vec3 boxMax = vec3(uCurtainWidth, 2.0 + uHeight, 3.0);

        // AABB 相交
        vec3 invRd = 1.0 / rd;
        vec3 t0 = (boxMin - ro) * invRd;
        vec3 t1 = (boxMax - ro) * invRd;
        vec3 tMinV = min(t0, t1);
        vec3 tMaxV = max(t0, t1);
        float tEnter = max(max(tMinV.x, tMinV.y), tMinV.z);
        float tExit = min(min(tMaxV.x, tMaxV.y), tMaxV.z);

        vec3 col = vec3(0.0);
        float alpha = 0.0;

        if (tExit > tEnter && tExit > 0.0) {
          float tStart = max(tEnter, 0.0);
          float tEnd = tExit;
          float stepSize = (tEnd - tStart) / float(uRaySteps);

          float transmittance = 1.0;
          vec3 accumColor = vec3(0.0);

          for (int i = 0; i < 64; i++) {
            if (i >= uRaySteps) break;
            if (transmittance < 0.01) break;

            float t = tStart + (float(i) + 0.5) * stepSize;
            vec3 p = ro + rd * t;

            float density = auroraDensity(p);

            if (density > 0.001) {
              // 极光颜色：高度依赖
              float heightRatio = (p.y - 2.0) / uHeight;
              vec3 auroraColor = mix(uColorBottom, uColorTop, heightRatio);

              // 添加强调色的随机变化
              float accentMask = fbm_standard(
                vec3(p.x * 0.3, p.y * 0.5, uTime * 0.2), 3, 2.0, 0.5
              );
              auroraColor = mix(auroraColor, uColorAccent, clamp(accentMask * 0.3, 0.0, 0.3));

              // 发光强度
              float glow = density * uIntensity;

              // Beer-Lambert 积分
              float extinction = density * 2.0 * stepSize;
              float localT = exp(-extinction);

              accumColor += transmittance * auroraColor * glow * stepSize;
              transmittance *= localT;
            }
          }

          col = accumColor;
          alpha = 1.0 - transmittance;
        }

        // 星空背景
        vec2 starUv = gl_FragCoord.xy / uResolution;
        float stars = 0.0;
        for (float i = 0.0; i < 3.0; i++) {
          vec2 sUv = starUv * (200.0 + i * 100.0);
          vec2 cell = floor(sUv);
          vec2 fUv = fract(sUv) - 0.5;
          float r = fract(sin(dot(cell, vec2(127.1 + i, 311.7))) * 43758.5453);
          float brightness = smoothstep(0.98, 1.0, r);
          float twinkle = 0.5 + 0.5 * sin(uTime * (2.0 + r * 3.0) + r * 6.28);
          float dist = length(fUv);
          stars += brightness * smoothstep(0.05, 0.0, dist) * twinkle;
        }
        vec3 bg = vec3(0.005, 0.005, 0.015) + vec3(0.8, 0.85, 1.0) * stars * 0.5;

        col = bg * (1.0 - alpha) + col;

        // Gamma
        col = pow(col, vec3(1.0 / 2.2));
        fragColor = vec4(col, 1.0);
      }
    `;return new Wn({vertexShader:e,fragmentShader:n,transparent:!1,side:_n,depthWrite:!1,depthTest:!1,uniforms:{uColorTop:{value:new R(...t.colorTop)},uColorBottom:{value:new R(...t.colorBottom)},uColorAccent:{value:new R(...t.colorAccent)},uHeight:{value:t.height},uCurtainWidth:{value:t.curtainWidth},uSpeed:{value:t.speed},uIntensity:{value:t.intensity},uTurbulence:{value:t.turbulence},uRaySteps:{value:t.raySteps}}})}_buildMesh(){const t=new ae(this._geometry,this._material);return t.frustumCulled=!1,t}}ms.register("AuroraBorealis",Nu,{colorTop:[.1,.8,.3],colorBottom:[.3,.1,.6],intensity:1.5});class ws{constructor(t={}){const e=this.getDefaults?this.getDefaults():{};this._params={...e,...t},this._uniforms=null,this._material=null,this._mesh=null,this._scene=null,this._renderer=null,this._camera=new Tl,this._camera.position.z=1,this._startTime=Date.now(),this._innerScene=new Cl,this._bufferTarget=null,this._bufferFeedback=null}getDefaults(){return{}}_buildUniforms(){const t={iTime:{value:0},iResolution:{value:new $(window.innerWidth,window.innerHeight)},iDpr:{value:window.devicePixelRatio||1},iMouse:{value:new $(window.innerWidth/2,window.innerHeight/2)}};for(const e in this._params){const n=this._params[e];if(!(e==="seed"||e==="texturePath"))if(e.toLowerCase().includes("color")){const i=new ut(n);t[e]={value:new R(i.r,i.g,i.b)}}else typeof n=="number"&&(t[e]={value:n})}return t}build(){return this._uniforms=this._buildUniforms(),typeof this.onInit=="function"&&this.onInit(),this._material=new ye({uniforms:this._uniforms,vertexShader:"void main(){ gl_Position = vec4(position, 1.0); }",fragmentShader:this.constructor.fragmentShader||"void main(){ gl_FragColor=vec4(0.); }",depthWrite:!1,depthTest:!1}),this._mesh=new ae(new wn(2,2),this._material),this._mesh.frustumCulled=!1,this._innerScene.add(this._mesh),this}addTo(t){return this._scene=t,t.add(this._mesh),this}setRenderer(t){return this._renderer=t,this}update(){return this._uniforms?(this._uniforms.iTime.value=(Date.now()-this._startTime)*.001,typeof this.onUpdate=="function"&&this.onUpdate(),this):this}setMouse(t,e){this._uniforms&&this._uniforms.iMouse.value.set(t,e)}resize(t,e){this._uniforms&&this._uniforms.iResolution.value.set(t,e),typeof this.onResize=="function"&&this.onResize(t,e)}setPosition(){return this}setScale(){return this}dispose(){var t;typeof this.onDestroy=="function"&&this.onDestroy(),this._mesh&&(this._scene?this._scene.remove(this._mesh):this._mesh.parent&&this._mesh.parent.remove(this._mesh)),this._material&&this._material.dispose(),(t=this._mesh)!=null&&t.geometry&&this._mesh.geometry.dispose(),this._bufferTarget&&this._bufferTarget.dispose(),this._bufferFeedback&&this._bufferFeedback.dispose(),this._mesh=null,this._material=null,this._uniforms=null}_initDoubleBuffer(t,e){const n={minFilter:We,magFilter:We};this._bufferTarget=new Je(t,e,n),this._bufferFeedback=new Je(t,e,n)}_swapBuffers(){const t=this._bufferTarget;this._bufferTarget=this._bufferFeedback,this._bufferFeedback=t}}class Es{constructor(t={}){const e=this.getDefaults?this.getDefaults():{};this._params={...e,...t},this.options=this._params,this.t=0,this.width=window.innerWidth,this.height=window.innerHeight,this.mouseX=.5,this.mouseY=.5,this._scene=null,this._ownScene=new Cl,this.camera=null,this._renderer=null,this._children=[],this._clock=new bs}getDefaults(){return{}}build(){return typeof this.onInit=="function"&&this.onInit(),this}addTo(t){return this._scene=t,this._ownScene.children.slice().forEach(e=>{this._ownScene.remove(e),t.add(e),this._children.push(e)}),this.options.backgroundColor!==void 0&&(t.background=new ut(this.options.backgroundColor)),this._ownScene.fog&&(t.fog=this._ownScene.fog,this._hadFog=!0),this}setRenderer(t){return this._renderer=t,this}update(){const t=this._clock.getDelta();return this.t+=t*1e3,typeof this.onUpdate=="function"&&this.onUpdate(t),this}setMouse(t,e){this.mouseX=t/window.innerWidth,this.mouseY=e/window.innerHeight,typeof this.onMouseMove=="function"&&this.onMouseMove(this.mouseX,this.mouseY)}resize(t,e){this.width=t,this.height=e,this.camera&&(this.camera.aspect=t/e,this.camera.updateProjectionMatrix()),typeof this.onResize=="function"&&this.onResize(t,e)}setPosition(){return this}setScale(){return this}dispose(){typeof this.onDestroy=="function"&&this.onDestroy(),this._children.forEach(t=>{this._scene&&this._scene.remove(t),Fu(t)}),this._children=[],this._hadFog&&this._scene&&(this._scene.fog=null,this._hadFog=!1)}}function Fu(s){for(;s.children&&s.children.length>0;)Fu(s.children[0]),s.remove(s.children[0]);s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material.forEach(t=>t.dispose()):s.material.dispose())}function jt(s=0,t=1){return s+Math.random()*(t-s)}function on(s=0,t=1){return Math.floor(s+Math.random()*(t-s+1))}function Vx(s){return s[Math.floor(Math.random()*s.length)]}class Hx extends ws{getDefaults(){return{baseColor:6745,color2:15918901,backgroundColor:1251907,amplitudeFactor:1,ringFactor:1,rotationFactor:1,xOffset:0,yOffset:0,size:1,speed:1}}onInit(){const t=window.innerWidth,e=window.innerHeight,n=window.devicePixelRatio||1;this._initDoubleBuffer(Math.floor(t*n),Math.floor(e*n)),this._uniforms.iBuffer={value:this._bufferFeedback.texture},this._mouseEaseX=t/2,this._mouseEaseY=e/2,this._mouseRawX=t/2,this._mouseRawY=e/2,this._screenMat=new ye({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ gl_FragColor=texture2D(tDiffuse,vUv); }",depthWrite:!1,depthTest:!1}),this._screenMesh=new ae(new wn(2,2),this._screenMat),this._screenMesh.frustumCulled=!1}addTo(t){return this._scene=t,t.add(this._screenMesh),this}setMouse(t,e){this._mouseRawX=t,this._mouseRawY=e}onUpdate(){if(!this._renderer||!this._bufferTarget||!this._mesh)return;Math.abs(this._mouseEaseX-this._mouseRawX)+Math.abs(this._mouseEaseY-this._mouseRawY)>.1&&(this._mouseEaseX+=(this._mouseRawX-this._mouseEaseX)*.05,this._mouseEaseY+=(this._mouseRawY-this._mouseEaseY)*.05),this._uniforms.iMouse.value.set(this._mouseEaseX,this._mouseEaseY);const t=this._renderer;this._uniforms.iBuffer.value=this._bufferFeedback.texture,t.setRenderTarget(this._bufferTarget),t.render(this._innerScene,this._camera),t.setRenderTarget(null),this._screenMat.uniforms.tDiffuse.value=this._bufferTarget.texture,this._swapBuffers()}onResize(t,e){const n=window.devicePixelRatio||1,i=Math.floor(t*n),r=Math.floor(e*n);this._bufferTarget&&(this._bufferTarget.setSize(i,r),this._bufferFeedback.setSize(i,r))}dispose(){this._screenMesh&&(this._scene&&this._scene.remove(this._screenMesh),this._screenMesh.geometry.dispose(),this._screenMat.dispose()),super.dispose()}static get fragmentShader(){return Gx}}const Gx=`
uniform vec2 iResolution;
uniform float iDpr;
uniform vec2 iMouse;
uniform float iTime;
uniform float xOffset;
uniform float yOffset;
uniform vec3 baseColor;
uniform vec3 color2;
uniform vec3 backgroundColor;
uniform float size;
uniform float speed;
uniform float ringFactor;
uniform float rotationFactor;
uniform float amplitudeFactor;
uniform sampler2D iBuffer;
const float PI = 3.14159265359;

vec4 j2hue(float c) {
  return .5+.5*cos(6.28*c+vec4(0,-2.1,2.1,0));
}

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

vec2 sincos( float x ){return vec2(sin(x), cos(x));}
vec2 rotate2d(vec2 uv, float phi){vec2 t = sincos(phi); return vec2(uv.x*t.y-uv.y*t.x, uv.x*t.x+uv.y*t.y);}
vec3 rotate3d(vec3 p, vec3 v, float phi){ v = normalize(v); vec2 t = sincos(-phi); float s = t.x, c = t.y, x =-v.x, y =-v.y, z =-v.z; mat4 M = mat4(x*x*(1.-c)+c,x*y*(1.-c)-z*s,x*z*(1.-c)+y*s,0.,y*x*(1.-c)+z*s,y*y*(1.-c)+c,y*z*(1.-c)-x*s,0.,z*x*(1.-c)-y*s,z*y*(1.-c)+x*s,z*z*(1.-c)+c,0.,0.,0.,0.,1.);return (vec4(p,1.)*M).xyz;}

// Classic Perlin 3D Noise by Stefan Gustavson
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
float p3d(vec3 P){
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

void main() {
  vec2 res2 = iResolution.xy * iDpr;
  vec2 pixel = vec2(gl_FragCoord.xy - 0.5 * res2) / res2.y;
  pixel.x -= xOffset * res2.x / res2.y;
  pixel.y -= yOffset;

  vec2 uv = gl_FragCoord.xy / res2;

  vec2 mouse2 = (iMouse * iDpr / res2 - 0.5) * vec2(1.,-1.);
  vec2 uvBig = (uv - 0.5) * 0.996 + 0.5;

  vec4 oldImage = texture2D(iBuffer, uv);
  vec3 mixedColor = oldImage.rgb - backgroundColor;

  float cropDist = 0.01;
  float cropXOffset = 0.2;
  float cropYOffset = 0.2;

  vec2 offset = uv + vec2((mixedColor.g - cropXOffset) * cropDist, (mixedColor.r - cropYOffset) * cropDist);

  float spinDist = 0.001;
  float spinSpeed = 0.2 + 0.15 * cos(iTime * 0.5);
  float timeFrac = mod(iTime, 6.5);
  vec2 offset2 = uvBig + vec2(cos(timeFrac * spinSpeed) * spinDist, sin(timeFrac * spinSpeed) * spinDist);

  mixedColor = texture2D(iBuffer, offset).rgb * 0.4
    + texture2D(iBuffer, offset2).rgb * 0.6
    - backgroundColor;

  float fadeAmt = 0.0015;
  mixedColor = (mixedColor - fadeAmt) * .995;

  vec4 spectrum = abs( abs( .95*atan(uv.x, uv.y) -vec4(0,2,4,0) ) -3. )-1.;
  float angle = atan(pixel.x, pixel.y);
  float dist = length(pixel - mouse2*0.15) * 8. + sin(iTime) * .01;

  float flowerPeaks = .05 * amplitudeFactor * size;
  float flowerPetals = 7.;
  float edge = abs((dist + sin(angle * flowerPetals + iTime * 0.5) * sin(iTime * 1.5) * flowerPeaks) * 0.65 / size);

  float colorChangeSpeed = 0.75 + 0.05 * sin(iTime) * 1.5;
  float rainbowInput = timeFrac * colorChangeSpeed;

  float brightness = 0.7;
  vec4 rainbow = sqrt(j2hue(cos(rainbowInput))) + vec4(baseColor,0) - 1.0 + brightness;
  float factor = smoothstep(1., .9, edge) * pow(edge, 2.);
  vec3 color = rainbow.rgb * smoothstep(1., .9, edge) * pow(edge, 20.);
  vec4 ring = vec4(
    backgroundColor + clamp( mixedColor + color, 0., 1.)
    , 1.0);

  gl_FragColor = ring;
}
`;class Wx extends ws{getDefaults(){return{highlightColor:16761600,midtoneColor:16719616,lowlightColor:2949375,baseColor:16772075,blurFactor:.6,speed:1,zoom:1}}static get fragmentShader(){return jx}}class Xx extends ws{getDefaults(){return{color1:35980,color2:15918901,backgroundColor:14155663,amplitudeFactor:1,ringFactor:1,rotationFactor:1,size:1.5,speed:1}}static get fragmentShader(){return Kx}}class qx extends ws{getDefaults(){return{backgroundColor:16777215,skyColor:6863063,cloudColor:11387358,cloudShadowColor:1586512,sunColor:16750873,sunGlareColor:16737843,sunlightColor:16750899,speed:1}}static get fragmentShader(){return Zx}}class Yx extends ws{getDefaults(){return{color1:396069,color2:16777215,backgroundColor:16185078,amplitudeFactor:1,ringFactor:4,rotationFactor:.1,speed:1}}static get fragmentShader(){return $x}}const jx=`
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform float blurFactor;
uniform vec3 baseColor;
uniform vec3 lowlightColor;
uniform vec3 midtoneColor;
uniform vec3 highlightColor;
uniform float zoom;

float random(in vec2 _st){return fract(sin(dot(_st.xy,vec2(0.129898,0.78233)))*437.585453123);}
float noise(in vec2 _st){
  vec2 i=floor(_st);vec2 f=fract(_st);
  float a=random(i);float b=random(i+vec2(1.,0.));float c=random(i+vec2(0.,1.));float d=random(i+vec2(1.,1.));
  vec2 u=f*f*(3.-2.*f);
  return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;
}
#define NUM_OCTAVES 6
float fbm(in vec2 _st){
  float v=0.,a=blurFactor;vec2 shift=vec2(100.);
  mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.5));
  for(int i=0;i<NUM_OCTAVES;++i){v+=a*noise(_st);_st=rot*_st*2.+shift;a*=(1.-blurFactor);}
  return v;
}
void main(){
  vec2 st=gl_FragCoord.xy/iResolution.xy*3.;st.x*=0.7*iResolution.x/iResolution.y;st*=zoom;
  vec2 q=vec2(fbm(st),fbm(st+vec2(1.)));
  vec2 r=vec2(fbm(st+q+vec2(1.7,9.2)+0.15*iTime),fbm(st+q+vec2(8.3,2.8)+0.126*iTime));
  float f=fbm(st+r);
  vec3 color=mix(baseColor,lowlightColor,clamp(f*f*4.,0.,1.));
  color=mix(color,midtoneColor,clamp(length(q),0.,1.));
  color=mix(color,highlightColor,clamp(length(r.x),0.,1.));
  gl_FragColor=vec4(mix(baseColor,color,f*f*f+.6*f*f+.5*f),1.);
}`,Kx=`
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform vec3 color1;
uniform vec3 color2;
uniform vec3 backgroundColor;
uniform float size;
uniform float amplitudeFactor;
uniform float ringFactor;
uniform float rotationFactor;

float length2(vec2 p){return dot(p,p);}
float noise(vec2 p){return fract(sin(fract(sin(p.x)*(43.13311))+p.y)*31.0011);}
float worley(vec2 p){
  float d=1e30;
  for(int xo=-1;xo<=1;++xo)for(int yo=-1;yo<=1;++yo){vec2 tp=floor(p)+vec2(xo,yo);d=min(d,length2(p-tp-vec2(noise(tp))));}
  vec2 uv=gl_FragCoord.xy/iResolution.xy;
  float timeOffset=0.15*sin(iTime*2.+10.*(uv.x-uv.y));
  return 3.*exp(-4.*abs(2.*d-1.+timeOffset));
}
float fworley(vec2 p){
  return sqrt(sqrt(sqrt(1.1*worley(p*5.+.3+iTime*.0525)*sqrt(worley(p*50./size+0.3+iTime*-0.15))*sqrt(sqrt(worley(p*-10.+9.3))))));
}
void main(){
  vec2 uv=gl_FragCoord.xy/iResolution.xy;
  float t=fworley(uv*iResolution.xy/1500.);
  t*=exp(-length2(abs(0.7*uv-1.)));
  float tExp=pow(t,0.5-t);
  vec3 c1=color1*(1.-t);vec3 c2=color2*tExp;
  gl_FragColor=vec4(pow(t,1.-t)*(c1+c2),1.);
}`,Zx=`
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform float speed;
uniform vec3 skyColor;
uniform vec3 cloudColor;
uniform vec3 cloudShadowColor;
uniform vec3 sunColor;
uniform vec3 sunlightColor;
uniform vec3 sunGlareColor;
uniform vec3 backgroundColor;

float hash(float p){p=fract(p*0.011);p*=(p+7.5);p*=(p+p);return fract(p);}
float noise(vec3 x){
  vec3 p=floor(x);vec3 f=fract(x);f=f*f*(3.-2.*f);
  float n=p.x+p.y*57.+113.*p.z;
  return mix(mix(mix(hash(n),hash(n+1.),f.x),mix(hash(n+57.),hash(n+58.),f.x),f.y),
             mix(mix(hash(n+113.),hash(n+114.),f.x),mix(hash(n+170.),hash(n+171.),f.x),f.y),f.z);
}
const float constantTime=1000.;
float map5(in vec3 p){vec3 s=vec3(.5,.01,1.)*.5*speed;vec3 q=p-s*(iTime+constantTime);float f=.5*noise(q);q=q*2.02;f+=.25*noise(q);q=q*2.03;f+=.125*noise(q);q=q*2.01;f+=.0625*noise(q);q=q*2.02;f+=.03125*noise(q);return clamp(1.5-p.y-2.+1.75*f,0.,1.);}
float map4(in vec3 p){vec3 s=vec3(.5,.01,1.)*.5*speed;vec3 q=p-s*(iTime+constantTime);float f=.5*noise(q);q=q*2.02;f+=.25*noise(q);q=q*2.03;f+=.125*noise(q);q=q*2.01;f+=.0625*noise(q);return clamp(1.5-p.y-2.+1.75*f,0.,1.);}
float map3(in vec3 p){vec3 s=vec3(.5,.01,1.)*.5*speed;vec3 q=p-s*(iTime+constantTime);float f=.5*noise(q);q=q*2.02;f+=.25*noise(q);q=q*2.03;f+=.125*noise(q);return clamp(1.5-p.y-2.+1.75*f,0.,1.);}
float map2(in vec3 p){vec3 s=vec3(.5,.01,1.)*.5*speed;vec3 q=p-s*(iTime+constantTime);float f=.5*noise(q);q=q*2.02;f+=.25*noise(q);return clamp(1.5-p.y-2.+1.75*f,0.,1.);}
vec3 sundir=normalize(vec3(-1.,0.,-1.));
vec4 integrate(in vec4 sum,in float dif,in float den,in vec3 bgcol,in float t){
  vec3 lin=cloudColor*1.4+sunlightColor*dif;
  vec4 col=vec4(mix(vec3(1.,.95,.8),cloudShadowColor,den),den);
  col.xyz*=lin;col.xyz=mix(col.xyz,bgcol,1.-exp(-.003*t*t));
  col.a*=0.4;col.rgb*=col.a;return sum+col*(1.-sum.a);
}
#define MARCH(STEPS,MAPLOD) for(int i=0;i<STEPS;i++){vec3 pos=ro+t*rd;if(pos.y<-3.||pos.y>2.||sum.a>.99)break;float den=MAPLOD(pos);if(den>.01){float dif=clamp((den-MAPLOD(pos+.3*sundir))/.6,0.,1.);sum=integrate(sum,dif,den,bgcol,t);}t+=max(.075,.02*t);}
vec4 raymarch(in vec3 ro,in vec3 rd,in vec3 bgcol){vec4 sum=vec4(0.);float t=0.;MARCH(20,map5);MARCH(25,map4);MARCH(30,map3);MARCH(40,map2);return clamp(sum,0.,1.);}
mat3 setCamera(in vec3 ro,in vec3 ta,float cr){vec3 cw=normalize(ta-ro);vec3 cp=vec3(sin(cr),cos(cr),0.);vec3 cu=normalize(cross(cw,cp));vec3 cv=normalize(cross(cu,cw));return mat3(cu,cv,cw);}
void main(){
  vec2 p=(-iResolution.xy+2.*gl_FragCoord.xy)/iResolution.y;
  vec2 m=iMouse.xy/iResolution.xy;m.y=(1.-m.y)*.33+.28;m.x*=.25;m.x+=sin(iTime*.1+3.1415)*.25+.25;
  vec3 ro=4.*normalize(vec3(sin(3.*m.x),.4*m.y,cos(3.*m.x)));vec3 ta=vec3(0.,-1.,0.);
  mat3 ca=setCamera(ro,ta,0.);vec3 rd=ca*normalize(vec3(p.xy,1.5));
  float sun=clamp(dot(sundir,rd),0.,1.);vec3 col=skyColor-rd.y*.2*vec3(1.,.5,1.)+.075;
  col+=.2*sunColor*pow(sun,8.);vec4 res=raymarch(ro,rd,col);col=col*(1.-res.w)+res.xyz;
  col+=.2*sunGlareColor*pow(sun,3.);gl_FragColor=vec4(col,1.);
}`,$x=`
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform vec3 color1;
uniform vec3 color2;
uniform vec3 backgroundColor;
uniform float amplitudeFactor;
uniform float ringFactor;
uniform float rotationFactor;

void main(){
  vec2 view=(gl_FragCoord.xy-iResolution/2.)/(iResolution.y/2.);
  float time=-iTime+length(view)*8.-7.;
  float accumMix=0.;
  for(int j=0;j<20;j++){for(int i=0;i<20;i++){
    float amplitude=(cos(time/10.)+sin(time/5.))*amplitudeFactor;
    float angle=sin(float(j)*time*0.05*ringFactor)*2.+6.2832*float(i)/20.;
    vec2 center=vec2(cos(7.*float(j)/20.*6.2832)+sin(time/4.)*rotationFactor,sin(3.*float(j)/20.*6.2832)+cos(time/8.)*rotationFactor);
    vec2 light=center+amplitude*vec2(cos(angle),sin(angle));
    accumMix+=0.002/length(view-light)*0.5;
  }}
  float a1=pow(clamp(accumMix*1.2,0.,1.15),1.5);
  float a2=pow(clamp(a1*1.2,0.,1.15),3.);
  vec3 low=mix(backgroundColor,color2,clamp(a1,-0.1,1.15));
  gl_FragColor=vec4(mix(low,color1,clamp(a2,-0.1,1.15)),1.);
}`;class Jx{constructor(t,e,n){this.variables=[],this.currentTextureIndex=0;let i=Xe;const r={passThruTexture:{value:null}},o=c(h(),r),a=new Hl(o);this.setDataType=function(f){return i=f,this},this.addVariable=function(f,d,g){const _=this.createShaderMaterial(d),m={name:f,initialValueTexture:g,material:_,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Re,magFilter:Re};return this.variables.push(m),m},this.setVariableDependencies=function(f,d){f.dependencies=d},this.init=function(){if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let f=0;f<this.variables.length;f++){const d=this.variables[f];d.renderTargets[0]=this.createRenderTarget(t,e,d.wrapS,d.wrapT,d.minFilter,d.magFilter),d.renderTargets[1]=this.createRenderTarget(t,e,d.wrapS,d.wrapT,d.minFilter,d.magFilter),this.renderTexture(d.initialValueTexture,d.renderTargets[0]),this.renderTexture(d.initialValueTexture,d.renderTargets[1]);const g=d.material,_=g.uniforms;if(d.dependencies!==null)for(let m=0;m<d.dependencies.length;m++){const p=d.dependencies[m];if(p.name!==d.name){let S=!1;for(let x=0;x<this.variables.length;x++)if(p.name===this.variables[x].name){S=!0;break}if(!S)return"Variable dependency not found. Variable="+d.name+", dependency="+p.name}_[p.name]={value:null},g.fragmentShader=`
uniform sampler2D `+p.name+`;
`+g.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const f=this.currentTextureIndex,d=this.currentTextureIndex===0?1:0;for(let g=0,_=this.variables.length;g<_;g++){const m=this.variables[g];if(m.dependencies!==null){const p=m.material.uniforms;for(let S=0,x=m.dependencies.length;S<x;S++){const v=m.dependencies[S];p[v.name].value=v.renderTargets[f].texture}}this.doRenderTarget(m.material,m.renderTargets[d])}this.currentTextureIndex=d},this.getCurrentRenderTarget=function(f){return f.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(f){return f.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){a.dispose();const f=this.variables;for(let d=0;d<f.length;d++){const g=f[d];g.initialValueTexture&&g.initialValueTexture.dispose();const _=g.renderTargets;for(let m=0;m<_.length;m++)_[m].dispose()}};function l(f){f.defines.resolution="vec2( "+t.toFixed(1)+", "+e.toFixed(1)+" )"}this.addResolutionDefine=l;function c(f,d){d=d||{};const g=new ye({name:"GPUComputationShader",uniforms:d,vertexShader:u(),fragmentShader:f});return l(g),g}this.createShaderMaterial=c,this.createRenderTarget=function(f,d,g,_,m,p){return f=f||t,d=d||e,g=g||Sn,_=_||Sn,m=m||Re,p=p||Re,new Je(f,d,{wrapS:g,wrapT:_,minFilter:m,magFilter:p,format:Ve,type:i,depthBuffer:!1})},this.createTexture=function(){const f=new Float32Array(t*e*4),d=new Qs(f,t,e,Ve,Xe);return d.needsUpdate=!0,d},this.renderTexture=function(f,d){r.passThruTexture.value=f,this.doRenderTarget(o,d),r.passThruTexture.value=null},this.doRenderTarget=function(f,d){const g=n.getRenderTarget(),_=n.xr.enabled,m=n.shadowMap.autoUpdate;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,a.material=f,n.setRenderTarget(d),a.render(n),a.material=o,n.xr.enabled=_,n.shadowMap.autoUpdate=m,n.setRenderTarget(g)};function u(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function h(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const js=800,ma=js/2;class Qx extends Es{getDefaults(){return{backgroundColor:465199,color1:16711680,color2:53759,colorMode:"varianceGradient",birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5}}onInit(){const t=this._ownScene,e=this.options;this.WIDTH=Math.pow(2,e.quantity),this.BIRDS=this.WIDTH*this.WIDTH,this.camera=new ve(75,this.width/this.height,1,3e3),this.camera.position.z=350,t.add(this.camera),t.fog=new Al(16777215,100,1e3),this.mouseX=1e4,this.mouseY=1e4,this.last=performance.now();try{this._initGPGPU(),this._initGpgpuBirds(),this._useGPGPU=!0}catch(n){console.warn("[VantaBirds] GPGPU init failed, falling back to CPU:",n),this._useGPGPU=!1,this._initCPUBirds()}}_initGPGPU(){const t=this._renderer;if(!t)throw new Error("No renderer");this.gpuCompute=new Jx(this.WIDTH,this.WIDTH,t);const e=this.gpuCompute.createTexture(),n=this.gpuCompute.createTexture();ey(e),ny(n),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",sy,n),this.positionVariable=this.gpuCompute.addVariable("texturePosition",iy,e),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:1},this.velocityUniforms.cohesionDistance={value:1},this.velocityUniforms.speedLimit={value:1},this.velocityUniforms.freedomFactor={value:1},this.velocityUniforms.predator={value:new R},this.velocityVariable.material.defines.BOUNDS=js.toFixed(2),this.velocityVariable.wrapS=Mn,this.velocityVariable.wrapT=Mn,this.positionVariable.wrapS=Mn,this.positionVariable.wrapT=Mn;const i=this.gpuCompute.init();if(i!==null)throw new Error(i);this._updateVelocityUniforms()}_updateVelocityUniforms(){if(!this.velocityUniforms)return;const t=this.options;this.velocityUniforms.separationDistance.value=t.separation,this.velocityUniforms.alignmentDistance.value=t.alignment,this.velocityUniforms.speedLimit.value=t.speedLimit,this.velocityUniforms.cohesionDistance.value=t.cohesion}_initGpgpuBirds(){const t=this.options,e=ty(t,this);this.birdUniforms={color:{value:new ut(16720384)},texturePosition:{value:null},textureVelocity:{value:null},time:{value:1},delta:{value:0},birdSize:{value:t.birdSize}};const n=new ye({uniforms:this.birdUniforms,vertexShader:ry,fragmentShader:oy,side:Ie}),i=new ae(e,n);i.rotation.y=Math.PI/2,i.matrixAutoUpdate=!1,i.updateMatrix(),this._ownScene.add(i)}_initCPUBirds(){const t=this.options,e=this.BIRDS;this.boids=[],this.cpuBirds=[];for(let n=0;n<e;n++){const i=new ly(t);i.position.set(jt(-200,200),jt(-200,200),jt(-200,200)),i.velocity.set(jt(-1,1),jt(-1,1),jt(-1,1)),i.setWorldSize(500,500,300),this.boids.push(i);const r=ay(t),o=n/e,a=this._getNewCol(o),l=r.attributes.position.array,c=new Float32Array(l.length);for(let h=0;h<c.length;h+=3)c[h]=a.r,c[h+1]=a.g,c[h+2]=a.b;r.setAttribute("color",new _e(c,3));const u=new ae(r,new Gn({color:16777215,side:Ie,vertexColors:!0}));u.phase=Math.floor(Math.random()*62.83),u.position.copy(i.position),this._ownScene.add(u),this.cpuBirds.push(u)}}_getNewCol(t){const e=this.options,n=new ut(e.color1!=null?e.color1:4456448),i=new ut(e.color2!=null?e.color2:6684672);let o=(e.colorMode||"").indexOf("Gradient")!==-1?Math.random():t;return(e.colorMode||"").indexOf("variance")===0?new ut(Math.min(1,Math.max(0,n.r+Math.random()*i.r)),Math.min(1,Math.max(0,n.g+Math.random()*i.g)),Math.min(1,Math.max(0,n.b+Math.random()*i.b))):(e.colorMode||"").indexOf("mix")===0?new ut(e.color1+o*e.color2):n.clone().lerp(i,o)}onUpdate(){const t=performance.now();let e=(t-this.last)/1e3;e>1&&(e=1),this.last=t,this._useGPGPU?this._updateGPGPU(e,t):this._updateCPU()}_updateGPGPU(t,e){this.positionUniforms.time.value=e,this.positionUniforms.delta.value=t,this.velocityUniforms.time.value=e,this.velocityUniforms.delta.value=t,this.birdUniforms.time.value=e,this.birdUniforms.delta.value=t,this.velocityUniforms.predator.value.set(this.mouseX,-this.mouseY,0),this.mouseX=1e4,this.mouseY=1e4,this.gpuCompute.compute(),this.birdUniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.birdUniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture}_updateCPU(){const t=this.options;for(let e=0;e<this.cpuBirds.length;e++){const n=this.boids[e];n.run(this.boids);const i=this.cpuBirds[e];i.rotation.y=Math.atan2(-n.velocity.z,n.velocity.x),i.rotation.z=Math.asin(n.velocity.y/(n.velocity.length()||1)),i.phase=(i.phase+(Math.max(0,i.rotation.z)+.1))%62.83,i.geometry.attributes.position.array[16]=i.geometry.attributes.position.array[13]=Math.sin(i.phase)*5*t.birdSize,i.geometry.attributes.position.needsUpdate=!0,i.position.copy(n.position)}}onMouseMove(t,e){if(this.mouseX=t-.5,this.mouseY=e-.5,!this._useGPGPU&&this.boids){const n=new R(this.mouseX*this.width,-this.mouseY*this.height,0);for(const i of this.boids)n.z=i.position.z,i.repulse(n)}}}function ty(s,t){const e=t.WIDTH,n=t.BIRDS,i=new pe,r=3,o=n*r,a=o*3,l=new _e(new Float32Array(a*3),3),c=new _e(new Float32Array(a*3),3),u=new _e(new Float32Array(a*2),2),h=new _e(new Float32Array(a),1);i.setAttribute("position",l),i.setAttribute("birdColor",c),i.setAttribute("reference",u),i.setAttribute("birdVertex",h);let f=0;const d=function(){for(let p=0;p<arguments.length;p++)l.array[f++]=arguments[p]},g=s.wingSpan||20,_=s.birdSize||1;for(let p=0;p<n;p++)d(0,-0,-20*_,0,4*_,-20*_,0,0,30*_),d(0,0,-15*_,-g*_,0,0,0,0,15*_),d(0,0,15*_,g*_,0,0,0,0,-15*_);const m={};for(f=0;f<o*3;f++){const p=~~(~~(f/3)/r),S=p%e/e,x=~~(p/e)/e,v=~~(f/9)/n,C=v.toString(),w=(s.colorMode||"").indexOf("Gradient")!==-1;let A;!w&&m[C]?A=m[C]:A=t._getNewCol(v),!w&&!m[C]&&(m[C]=A),c.array[f*3]=A.r,c.array[f*3+1]=A.g,c.array[f*3+2]=A.b,u.array[f*2]=S,u.array[f*2+1]=x,h.array[f]=f%9}return i.scale(.2,.2,.2)}function ey(s){const t=s.image.data;for(let e=0;e<t.length;e+=4)t[e]=Math.random()*js-ma,t[e+1]=Math.random()*js-ma,t[e+2]=Math.random()*js-ma,t[e+3]=1}function ny(s){const t=s.image.data;for(let e=0;e<t.length;e+=4)t[e]=(Math.random()-.5)*10,t[e+1]=(Math.random()-.5)*10,t[e+2]=(Math.random()-.5)*10,t[e+3]=1}const iy=`uniform float time;
uniform float delta;
void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 tmpPos = texture2D( texturePosition, uv );
  vec3 position = tmpPos.xyz;
  vec3 velocity = texture2D( textureVelocity, uv ).xyz;
  float phase = tmpPos.w;
  phase = mod( ( phase + delta +
    length( velocity.xz ) * delta * 3. +
    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );
  gl_FragColor = vec4( position + velocity * delta * 15. , phase );
}`,sy=`uniform float time;
uniform float testing;
uniform float delta;
uniform float separationDistance;
uniform float alignmentDistance;
uniform float cohesionDistance;
uniform float speedLimit;
uniform float freedomFactor;
uniform vec3 predator;
const float width = resolution.x;
const float height = resolution.y;
const float PI = 3.141592653589793;
const float PI_2 = PI * 2.0;
float zoneRadius = 40.0;
float zoneRadiusSquared = 1600.0;
float separationThresh = 0.45;
float alignmentThresh = 0.65;
const float UPPER_BOUNDS = BOUNDS;
const float LOWER_BOUNDS = -UPPER_BOUNDS;
float rand(vec2 co){ return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453); }
void main() {
  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
  separationThresh = separationDistance / zoneRadius;
  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;
  zoneRadiusSquared = zoneRadius * zoneRadius;
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 birdPosition, birdVelocity;
  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;
  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;
  float dist;
  vec3 dir;
  float distSquared;
  float separationSquared = separationDistance * separationDistance;
  float cohesionSquared = cohesionDistance * cohesionDistance;
  float f;
  float percent;
  vec3 velocity = selfVelocity;
  float limit = speedLimit;
  dir = predator * UPPER_BOUNDS - selfPosition;
  dir.z = 0.;
  dist = length( dir );
  distSquared = dist * dist;
  float preyRadius = 150.0;
  float preyRadiusSq = preyRadius * preyRadius;
  if (dist < preyRadius) {
    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;
    velocity += normalize( dir ) * f;
    limit += 5.0;
  }
  vec3 central = vec3( 0., 0., 0. );
  dir = selfPosition - central;
  dist = length( dir );
  dir.y *= 2.5;
  velocity -= normalize( dir ) * delta * 5.;
  for (float y=0.0;y<height;y++) {
    for (float x=0.0;x<width;x++) {
      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;
      birdPosition = texture2D( texturePosition, ref ).xyz;
      dir = birdPosition - selfPosition;
      dist = length(dir);
      if (dist < 0.0001) continue;
      distSquared = dist * dist;
      if (distSquared > zoneRadiusSquared ) continue;
      percent = distSquared / zoneRadiusSquared;
      if ( percent < separationThresh ) {
        f = (separationThresh / percent - 1.0) * delta;
        velocity -= normalize(dir) * f;
      } else if ( percent < alignmentThresh ) {
        float threshDelta = alignmentThresh - separationThresh;
        float adjustedPercent = ( percent - separationThresh ) / threshDelta;
        birdVelocity = texture2D( textureVelocity, ref ).xyz;
        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;
        velocity += normalize(birdVelocity) * f;
      } else {
        float threshDelta = 1.0 - alignmentThresh;
        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;
        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;
        velocity += normalize(dir) * f;
      }
    }
  }
  if ( length( velocity ) > limit ) {
    velocity = normalize( velocity ) * limit;
  }
  gl_FragColor = vec4( velocity, 1.0 );
}`,ry=`attribute vec2 reference;
attribute float birdVertex;
attribute vec3 birdColor;
uniform sampler2D texturePosition;
uniform sampler2D textureVelocity;
varying vec4 vColor;
varying float z;
uniform float time;
uniform float birdSize;
void main() {
  vec4 tmpPos = texture2D( texturePosition, reference );
  vec3 pos = tmpPos.xyz;
  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);
  vec3 newPosition = position;
  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {
    newPosition.y = sin( tmpPos.w ) * 5. * birdSize;
  }
  newPosition = mat3( modelMatrix ) * newPosition;
  velocity.z *= -1.;
  float xz = length( velocity.xz );
  float xyz = 1.;
  float x = sqrt( 1. - velocity.y * velocity.y );
  float cosry = velocity.x / xz;
  float sinry = velocity.z / xz;
  float cosrz = x / xyz;
  float sinrz = velocity.y / xyz;
  mat3 maty = mat3(
    cosry, 0, -sinry,
    0    , 1, 0     ,
    sinry, 0, cosry
  );
  mat3 matz = mat3(
    cosrz , sinrz, 0,
    -sinrz, cosrz, 0,
    0     , 0    , 1
  );
  newPosition = maty * matz * newPosition;
  newPosition += pos;
  z = newPosition.z;
  vColor = vec4( birdColor, 1.0 );
  gl_Position = projectionMatrix * viewMatrix * vec4( newPosition, 1.0 );
}`,oy=`varying vec4 vColor;
varying float z;
uniform vec3 color;
void main() {
  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;
  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;
  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;
  gl_FragColor = vec4( rr, gg, bb, 1. );
}`;function ay(s={}){const t=1.5*(s.birdSize||1),e=[new R(5*t,0,0),new R(-5*t,-1*t,1*t),new R(-5*t,0,0),new R(-5*t,-2*t,-1*t),new R(0,2*t,-6*t),new R(0,2*t,6*t),new R(2*t,0,0),new R(-3*t,0,0)],n=new pe().setFromPoints(e);return n.setIndex([0,2,1,4,7,6,5,6,7]),n}class ly{constructor(t){this._o=t,this.position=new R,this.velocity=new R,this._acc=new R,this._w=500,this._h=500,this._d=200,this._nr=100,this._ms=2.5,this._mf=.1}setWorldSize(t,e,n){this._w=t,this._h=e,this._d=n}run(t){const e=new R,n=[[-this._w,this.position.y,this.position.z],[this._w,this.position.y,this.position.z],[this.position.x,-this._h,this.position.z],[this.position.x,this._h,this.position.z],[this.position.x,this.position.y,-this._d],[this.position.x,this.position.y,this._d]];for(const r of n)e.set(r[0],r[1],r[2]),this._acc.add(this._avoid(e).multiplyScalar(5));Math.random()>.5&&(this._acc.add(this._alignment(t)),this._acc.add(this._cohesion(t)),this._acc.add(this._separation(t))),this.velocity.add(this._acc);const i=this.velocity.length();i>this._ms&&this.velocity.divideScalar(i/this._ms),this.position.add(this.velocity),this._acc.set(0,0,0)}_avoid(t){const e=new R;return e.copy(this.position).sub(t),e.multiplyScalar(1/this.position.distanceToSquared(t)),e}repulse(t){const e=this.position.distanceTo(t);if(e<150){const n=new R;n.subVectors(this.position,t).multiplyScalar(.5/e),this._acc.add(n)}}_alignment(t){const e=new R;let n=0;const i=this._nr*this._o.alignment/20;for(let r=0;r<t.length;r++){if(Math.random()>.6)continue;const o=t[r].position.distanceTo(this.position);o>0&&o<=i&&(e.add(t[r].velocity),n++)}if(n>0){e.divideScalar(n);const r=e.length();r>this._mf&&e.divideScalar(r/this._mf)}return e}_cohesion(t){const e=new R,n=new R;let i=0;const r=this._nr*this._o.cohesion/20;for(let a=0;a<t.length;a++){if(Math.random()>.6)continue;const l=t[a].position.distanceTo(this.position);l>0&&l<=r&&(e.add(t[a].position),i++)}i>0&&e.divideScalar(i),n.subVectors(e,this.position);const o=n.length();return o>this._mf&&n.divideScalar(o/this._mf),n}_separation(t){const e=new R,n=new R,i=this._nr*this._o.separation/20;for(let r=0;r<t.length;r++){if(Math.random()>.6)continue;const o=t[r].position.distanceTo(this.position);o>0&&o<=i&&(n.subVectors(this.position,t[r].position).normalize().divideScalar(o),e.add(n))}return e}}class cy extends Es{getDefaults(){return{color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}onInit(){const t=this._ownScene,e=this.options;this.cont=new Ke,t.add(this.cont),this.points=[];const n=e.points,i=e.spacing,r=n*n*2;this.linePositions=new Float32Array(r*r*3),this.lineColors=new Float32Array(r*r*3);const o=new pe;o.setAttribute("position",new _e(this.linePositions,3).setUsage(fi)),o.setAttribute("color",new _e(this.lineColors,3).setUsage(fi)),o.computeBoundingSphere(),o.setDrawRange(0,0);const a=new hi({vertexColors:!0,transparent:!0});this.linesMesh=new wi(o,a),this.cont.add(this.linesMesh);for(let u=0;u<=n;u++)for(let h=0;h<=n;h++){const f=on(-3,3),d=(u-n/2)*i+on(-5,5);let g=(h-n/2)*i+on(-5,5);u%2&&(g+=i*.5),this._genPoint(d,f-on(5,15),g),this._genPoint(d+on(-5,5),f+on(5,15),g+on(-5,5))}this.camera=new ve(25,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.camera.tx=50,this.camera.ty=100,t.add(this.camera);const l=new Di(16777215,.75);t.add(l);const c=new Ss(16777215,1);c.position.set(0,200,0),c.distance=400,c.target=this.cont,t.add(c)}_genPoint(t,e,n){let i;if(this.options.showDots){const r=new ir(.25,8,8),o=new Ol({color:this.options.color});i=new ae(r,o)}else i=new le;this.cont.add(i),i.ox=t,i.oy=e,i.oz=n,i.position.set(t,e,n),i.r=jt(-2,2),this.points.push(i)}onUpdate(){const t=this.camera;t.tx!==void 0&&(Math.abs(t.tx-t.position.x)>.01&&(t.position.x+=(t.tx-t.position.x)*.02),Math.abs(t.ty-t.position.y)>.01&&(t.position.y+=(t.ty-t.position.y)*.02)),t.lookAt(0,0,0);let e=0,n=0,i=0;const r=new ut(this.options.backgroundColor),a=new ut(this.options.color).clone().sub(r);for(let l=0;l<this.points.length;l++){const c=this.points[l];if(c.r!==0){let u=Math.atan2(c.position.z,c.position.x);const h=Math.sqrt(c.position.z**2+c.position.x**2);u+=25e-5*c.r,c.position.x=h*Math.cos(u),c.position.z=h*Math.sin(u)}for(let u=l+1;u<this.points.length;u++){const h=this.points[u],f=c.position.x-h.position.x,d=c.position.y-h.position.y,g=c.position.z-h.position.z,_=Math.sqrt(f*f+d*d+g*g);if(_<this.options.maxDistance){const m=Math.min(1,(1-_/this.options.maxDistance)*2),p=new ut(0).lerp(a,m);this.linePositions[e++]=c.position.x,this.linePositions[e++]=c.position.y,this.linePositions[e++]=c.position.z,this.linePositions[e++]=h.position.x,this.linePositions[e++]=h.position.y,this.linePositions[e++]=h.position.z,this.lineColors[n++]=p.r,this.lineColors[n++]=p.g,this.lineColors[n++]=p.b,this.lineColors[n++]=p.r,this.lineColors[n++]=p.g,this.lineColors[n++]=p.b,i++}}}this.linesMesh.geometry.setDrawRange(0,i*2),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0}onMouseMove(t,e){const n=this.camera;n.ox||(n.ox=n.position.x,n.oy=n.position.y,n.oz=n.position.z);const i=Math.atan2(n.oz,n.ox),r=Math.sqrt(n.oz**2+n.ox**2),o=i+(t-.5)*2;n.tx=r*Math.cos(o),n.ty=n.oy+(e-.5)*50}}class hy extends Es{getDefaults(){return{color:21896,shininess:30,waveHeight:15,waveSpeed:1,zoom:1}}onInit(){const t=this._ownScene,e=this.options,n=100,i=80,r=18,o=[];this.gg=[],this.oy={};for(let h=0;h<=n;h++){this.gg[h]=[];for(let f=0;f<=i;f++){const d=o.length;o.push(new R((h-n*.5)*r,jt(0,4)-10,(i*.5-f)*r)),this.gg[h][f]=d}}const a=new pe().setFromPoints(o),l=[];for(let h=1;h<=n;h++)for(let f=1;f<=i;f++){const d=this.gg[h][f],g=this.gg[h][f-1],_=this.gg[h-1][f],m=this.gg[h-1][f-1];on(0,1)?l.push(m,g,_,g,_,d):l.push(m,g,d,m,_,d)}a.setIndex(l);const c=new K_({color:e.color,shininess:e.shininess,flatShading:!0,side:Ie});this.plane=new ae(a,c),t.add(this.plane),t.add(new Di(16777215,.9));const u=new fr(16777215,.9);u.position.set(-100,250,-100),t.add(u),this.camera=new ve(35,this.width/this.height,50,1e4),this.cameraPosition=new R(240,200,390),this.cameraTarget=new R(140,-30,190),this.camera.position.copy(this.cameraPosition),this.camera.tx=this.cameraPosition.x,this.camera.ty=this.cameraPosition.y,this.camera.tz=this.cameraPosition.z,t.add(this.camera)}onUpdate(){const t=this.options,e=this.camera;this.plane.material.color.set(t.color),this.plane.material.shininess=t.shininess,e.ox=this.cameraPosition.x/t.zoom,e.oy=this.cameraPosition.y/t.zoom,e.oz=this.cameraPosition.z/t.zoom,Math.abs(e.tx-e.position.x)>.01&&(e.position.x+=(e.tx-e.position.x)*.02),Math.abs(e.ty-e.position.y)>.01&&(e.position.y+=(e.ty-e.position.y)*.02),Math.abs(e.tz-e.position.z)>.01&&(e.position.z+=(e.tz-e.position.z)*.02),e.lookAt(this.cameraTarget);const n=this.plane.geometry.attributes.position.array,i=t.waveSpeed;for(let r=0;r<n.length;r+=3){const o=n[r],a=n[r+2];if(!this.oy[r]){this.oy[r]=n[r+1];continue}const l=Math.sqrt(i)*Math.cos(-o-a*.7),c=Math.sin(i*this.t*2e-5-i*o*.025+i*a*.015+l);n[r+1]=this.oy[r]+Math.pow(c+1,2)/4*t.waveHeight}this.plane.geometry.attributes.position.setUsage(fi),this.plane.geometry.computeVertexNormals(),this.plane.geometry.attributes.position.needsUpdate=!0}onMouseMove(t,e){const n=this.camera,i=this.options;n.ox||(n.ox=n.position.x,n.oy=n.position.y,n.oz=n.position.z),n.tx=n.ox+(t-.5)*100/i.zoom,n.ty=n.oy+(e-.5)*-100/i.zoom,n.tz=n.oz+(t-.5)*-50/i.zoom}}class uy extends Es{getDefaults(){return{color:16746528,color2:16746528,backgroundColor:2236962,size:3,spacing:35,showLines:!0}}onInit(){const t=this._ownScene,e=this.options;this.camera=new ve(50,this.width/this.height,.1,5e3),this.camera.position.set(0,250,50),this.camera.tx=0,this.camera.ty=50,this.camera.tz=350,t.add(this.camera);const n=[],i=e.spacing;for(let o=-30;o<=30;o++)for(let a=-30;a<=30;a++)n.push(new R(o*i+i/2,jt(0,5)-150,a*i+i/2));this.starsGeo=new pe().setFromPoints(n);const r=new Ll({color:e.color,size:e.size});if(this.starField=new gu(this.starsGeo,r),t.add(this.starField),e.showLines){const o=[];for(let l=0;l<200;l++){const c=jt(40,60),u=c+jt(12,20),h=jt(-1,1),f=Math.sqrt(1-h*h),d=jt(0,Math.PI*2),g=Math.sin(d)*f,_=Math.cos(d)*f;o.push(new R(_*c,g*c,h*c),new R(_*u,g*u,h*u))}const a=new pe().setFromPoints(o);this.linesMesh=new wi(a,new hi({color:e.color2})),t.add(this.linesMesh)}}onUpdate(){const t=this.starsGeo.attributes.position.array;for(let n=0;n<t.length;n+=3)t[n+1]+=.1*Math.sin(t[n+2]*.02+t[n]*.015+this.t*2e-5);this.starsGeo.attributes.position.setUsage(fi),this.starsGeo.attributes.position.needsUpdate=!0;const e=this.camera;e.position.x+=(e.tx-e.position.x)*.003,e.position.y+=(e.ty-e.position.y)*.003,e.position.z+=(e.tz-e.position.z)*.003,e.lookAt(0,0,0),this.linesMesh&&(this.linesMesh.rotation.z+=.002,this.linesMesh.rotation.x+=8e-4,this.linesMesh.rotation.y+=5e-4)}onMouseMove(t,e){this.camera.tx=(t-.5)*100,this.camera.ty=50+e*50}}const fy=[16720469,16716185,16737996,8978176,7851025,16776960,16742195,1179647,1149149,16768290,2250188,7975100,5468283];class dy extends Es{getDefaults(){return{backgroundColor:2106408,color:8978176}}onInit(){const t=this._ownScene;this.rings=[],this.cont=new Ke,this.cont.position.set(30,0,0),this.cont.rotation.x=.067,this.cont.rotation.z=.167,t.add(this.cont);for(let i=0;i<60;i++){let r,o;on(0,3)?(r=jt(2,4)+jt(1,30)*jt(1,2)*jt(1,2)*jt(1,2),o=jt(0,3.5)+jt(0,3.5)-on(0,Math.floor(r/4))-r/50):(r=jt(1,3)*jt(2,4),o=jt(1,2)*jt(1,2)*jt(1.1,1.5));const a=Math.pow(2,on(0,4))*.05;o<a&&(o=a),r<1&&(r=1),this._genRing(Vx(fy),r,o,jt(0,1e3),jt(1,6),jt(0,50/(r+1)+5)+5/o/(r+.5),Math.max(-jt(.5,2),jt(1,50-r/2)-r/2)*.25)}this.camera=new ve(25,this.width/this.height,10,1e4),this.camera.position.set(0,150,200),this.camera.tx=0,this.camera.ty=150,t.add(this.camera),t.add(new Di(16777215,.5));const e=new fr(16777215,.5);e.position.set(0,150,200),t.add(e);const n=new Ss(16777215,1);n.position.set(-15,50,100),n.penumbra=1,n.angle=.5,n.decay=1,n.distance=300,n.target=this.cont,t.add(n)}_genRing(t,e,n,i,r,o,a){const l=new Fl;l.absarc(0,0,e+n,0,r,!1),l.lineTo(e*Math.cos(r),e*Math.sin(r)),l.absarc(0,0,e,r,0,!0);const c=new bo(l,{depth:.4,bevelEnabled:!1,steps:1,curveSegments:Math.max(4,~~(64*r/6.14))}),u=new Ol({color:t});(on(0,1)===0||e>60)&&(u.transparent=!0,u.opacity=Math.max(50/e+jt(-.3,.3),.1));const h=new ae(c,u);h.rotation.x=Math.PI/2,h.rotation.z=i,h.position.y=o,h.speed=a*.001,this.rings.push(h),this.cont.add(h)}onUpdate(){const t=this.camera;t.tx!==void 0&&(Math.abs(t.tx-t.position.x)>.01&&(t.position.x+=(t.tx-t.position.x)*.02),Math.abs(t.ty-t.position.y)>.01&&(t.position.y+=(t.ty-t.position.y)*.02)),t.lookAt(0,25,7);for(const n of this.rings)n.rotation.z+=n.speed;const e=this.t*.001;this.cont.rotation.x+=Math.sin(e)*1e-4,this.cont.rotation.z+=Math.cos(e)*7e-5}onMouseMove(t,e){const n=this.camera;n.ox||(n.ox=n.position.x,n.oy=n.position.y),n.tx=n.ox+(t-.5)*50,n.ty=n.oy-e*50}}class py extends Es{getDefaults(){return{color:16727937,color2:16777215,size:1,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}onInit(){const t=this._ownScene,e=this.options;this.cont=new Ke,this.cont.position.set(-50,-20,0),t.add(this.cont),this.points=[];const n=e.points,i=e.spacing,r=n*n*2;this.linePositions=new Float32Array(r*r*3),this.lineColors=new Float32Array(r*r*3);const o=new pe;o.setAttribute("position",new _e(this.linePositions,3).setUsage(fi)),o.setAttribute("color",new _e(this.lineColors,3).setUsage(fi)),o.computeBoundingSphere(),o.setDrawRange(0,0),this.linesMesh=new wi(o,new hi({vertexColors:!0,transparent:!0})),this.cont.add(this.linesMesh);for(let m=0;m<=n;m++)for(let p=0;p<=n;p++){const S=(m-n/2)*i,x=(p-n/2)*i;this._genDot(S,0,x)}this.cont2=new Ke,this.cont2.position.set(0,15,0),t.add(this.cont2);const a=new hi({color:e.color}),l=new ir(18*e.size,18,14),c=new R_(l);this.sphere=new wi(c,a),this.cont2.add(this.sphere);const u=new hi({color:e.color2}),h=[];for(let m=0;m<80;m++){const p=jt(18,24),S=p+jt(1,6),x=jt(-1,1),v=Math.sqrt(1-x*x),C=jt(0,Math.PI*2);h.push(new R(Math.cos(C)*v*p,Math.sin(C)*v*p,x*p)),h.push(new R(Math.cos(C)*v*S,Math.sin(C)*v*S,x*S))}this.linesMesh2=new wi(new pe().setFromPoints(h),u),this.cont2.add(this.linesMesh2);const f=new hi({color:e.color2}),d=[new R(0,30,0),new R(0,-30,0)],g=[17.9,12,8,5,3,2,1.5,1.1,.8,.6,.45,.3,.2,.1,.05,.03,.02,.01];for(let m=0;m<4;m++){const p=.15*Math.cos(m/4*Math.PI*2),S=.15*Math.sin(m/4*Math.PI*2);for(let x=0;x<g.length;x++){const v=6*(x+1);d.push(new R(p*v,g[x],S*v),new R(p*v,-g[x],S*v))}}this.linesMesh3=new wi(new pe().setFromPoints(d),f),this.cont2.add(this.linesMesh3),this.cont2.rotation.x=-.25,this.camera=new ve(20,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.camera.tx=50,this.camera.ty=100,t.add(this.camera),t.add(new Di(16777215,.75));const _=new Ss(16777215,1);_.position.set(0,200,0),_.distance=400,_.target=this.cont,t.add(_)}_genDot(t,e,n){let i;this.options.showDots?i=new ae(new ir(.25,8,8),new Ol({color:this.options.color})):i=new le,this.cont.add(i),i.ox=t,i.oy=e,i.oz=n,i.position.set(t,e,n),this.points.push(i)}onUpdate(){const t=this.camera;t.tx!==void 0&&(Math.abs(t.tx-t.position.x)>.01&&(t.position.x+=(t.tx-t.position.x)*.02),Math.abs(t.ty-t.position.y)>.01&&(t.position.y+=(t.ty-t.position.y)*.02)),t.lookAt(-40,0,0),this.linesMesh2&&(this.linesMesh2.rotation.z+=.002,this.linesMesh2.rotation.x+=8e-4,this.linesMesh2.rotation.y+=5e-4),this.sphere&&(this.sphere.rotation.y+=.002,this.linesMesh3.rotation.y-=.004);let e=0,n=0,i=0;const r=new ut(this.options.backgroundColor),a=new ut(this.options.color).clone().sub(r);for(let l=0;l<this.points.length;l++){const c=this.points[l];c.position.y=2*Math.sin(c.position.x/10+this.t*1e-5+c.position.z/10*.5);for(let u=l+1;u<this.points.length;u++){const h=this.points[u],f=c.position.x-h.position.x,d=c.position.y-h.position.y,g=c.position.z-h.position.z,_=Math.sqrt(f*f+d*d+g*g);if(_<this.options.maxDistance){const m=Math.min(1,(1-_/this.options.maxDistance)*2),p=new ut(0).lerp(a,m);this.linePositions[e++]=c.position.x,this.linePositions[e++]=c.position.y,this.linePositions[e++]=c.position.z,this.linePositions[e++]=h.position.x,this.linePositions[e++]=h.position.y,this.linePositions[e++]=h.position.z,this.lineColors[n++]=p.r,this.lineColors[n++]=p.g,this.lineColors[n++]=p.b,this.lineColors[n++]=p.r,this.lineColors[n++]=p.g,this.lineColors[n++]=p.b,i++}}}this.linesMesh.geometry.setDrawRange(0,i*2),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0}onMouseMove(t,e){const n=this.camera;n.ox||(n.ox=n.position.x,n.oy=n.position.y,n.oz=n.position.z);const i=Math.atan2(n.oz,n.ox),r=Math.sqrt(n.oz**2+n.ox**2),o=i+(t-.5)*1.5;n.tx=r*Math.cos(o),n.ty=n.oy+(e-.5)*80}}class my extends ws{getDefaults(){return{backgroundColor:0,skyColor:6072010,cloudColor:3362176,lightColor:16777215,speed:1}}static get fragmentShader(){return vy}}class gy{constructor(t={}){const e={color:9016910,backgroundColor:8738,speed:1};this._params={...e,...t},this._canvas=null,this._ctx=null,this._particles=[],this._flowGrid=[],this._tick=0,this._raf=0}getDefaults(){return this._params}build(){return this._canvas=document.createElement("canvas"),this._canvas.style.cssText="position:fixed;inset:0;z-index:-1;pointer-events:none;",this._canvas.width=window.innerWidth,this._canvas.height=window.innerHeight,this._ctx=this._canvas.getContext("2d"),this._initFlow(),this._initParticles(),this}addTo(){return document.getElementById("canvas-container").appendChild(this._canvas),this._draw(),this}_initFlow(){const t=this._canvas.width,e=this._canvas.height,n=100,i=10,r=.003,o=.1,a=Math.ceil((t+n*2)/i),l=Math.ceil((e+n*2)/i);this._flowCols=a,this._flowRows=l,this._cellSize=i,this._offset=n,this._flowGrid=[];for(let c=0;c<l;c++){const u=[];for(let h=0;h<a;h++){const f=h*r,d=c*r;let g=0,_=0,m=0,p=0,S=-1,x=2;for(let A=0;A<50;A++){const L=A/50*Math.PI*2,b=f+Math.cos(L)*o,y=d+Math.sin(L)*o,P=Math.sin(b*127.1+y*311.7)*43758.5453%1,z=Math.abs(P);z>S&&(S=z,g=b,_=y),z<x&&(x=z,m=b,p=y)}const v=m-g,C=p-_,w=Math.sqrt(v*v+C*C)||1;u.push({x:v/w*(S-x),y:C/w*(S-x)})}this._flowGrid.push(u)}}_initParticles(){const t=this._canvas.width+this._offset*2,e=this._canvas.height+this._offset*2;this._particles=[];for(let n=0;n<4500;n++){const i=Math.random()*t,r=Math.random()*e;this._particles.push({x:i,y:r,px:i,py:r,vx:0,vy:0})}}_draw(){const t=this._ctx,e=this._params,n=new dl(e.color);t.translate(-this._offset,-this._offset),t.strokeStyle=`rgba(${n.r},${n.g},${n.b},0.05)`,t.lineWidth=1;const i=()=>{var a;this._raf=requestAnimationFrame(i);const r=this._canvas.width+this._offset*2,o=this._canvas.height+this._offset*2;for(const l of this._particles){const c=Math.min(this._flowCols-1,Math.max(0,Math.floor(l.x/this._cellSize))),u=Math.min(this._flowRows-1,Math.max(0,Math.floor(l.y/this._cellSize))),h=((a=this._flowGrid[u])==null?void 0:a[c])||{x:0,y:0};l.px=l.x,l.py=l.y,l.x=((l.x+l.vx)%r+r)%r,l.y=((l.y+l.vy)%o+o)%o,l.vx=(l.vx+h.x*3)*.95,l.vy=(l.vy+h.y*3)*.95;const f=Math.sqrt(l.vx*l.vx+l.vy*l.vy);f>2.2&&(l.vx*=2.2/f,l.vy*=2.2/f)}t.beginPath();for(const l of this._particles){const c=l.x-l.px,u=l.y-l.py;Math.sqrt(c*c+u*u)<10&&(t.moveTo(l.px,l.py),t.lineTo(l.x,l.y))}t.stroke(),this._tick+=.002};i()}setMouse(){}setPosition(){return this}setScale(){return this}resize(t,e){this._canvas&&(this._canvas.width=t,this._canvas.height=e)}update(){return this}dispose(){cancelAnimationFrame(this._raf),this._canvas&&this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)}}class _y{constructor(t={}){const e={color:9979487,backgroundColor:2237478,spacing:0,chaos:1};this._params={...e,...t},this._canvas=null,this._ctx=null,this._raf=0,this._ox=Math.random()*1e4,this._oy=Math.random()*1e4,this._oz=Math.random()*1e4}getDefaults(){return this._params}build(){return this._canvas=document.createElement("canvas"),this._canvas.style.cssText="position:fixed;inset:0;z-index:-1;pointer-events:none;",this._canvas.width=window.innerWidth,this._canvas.height=window.innerHeight,this._ctx=this._canvas.getContext("2d"),this}addTo(){return document.getElementById("canvas-container").appendChild(this._canvas),this._draw(),this}_noise(t,e,n){const i=t*12.9898+e*78.233+(n||0)*43.1234;return Math.sin(i)*43758.5453%1*.5+.5}_draw(){const t=()=>{this._raf=requestAnimationFrame(t);const e=this._ctx,n=this._canvas.width,i=this._canvas.height,r=this._params,o=new dl(r.backgroundColor);e.fillStyle=`rgb(${o.r},${o.g},${o.b})`,e.fillRect(0,0,n,i);const a=new dl(r.color);e.strokeStyle=`rgb(${a.r},${a.g},${a.b})`,e.lineWidth=1,e.translate(n/2,i/2);const l=55,c=50,u=4,h=.2,f=.12,d=20;this._oy-=.02,this._oz+=5e-5;for(let g=0;g<l;g++){e.beginPath();for(let _=0;_<360;_++){const m=_*Math.PI/180,p=f*g+h,S=this._noise(this._ox+Math.cos(m)*p,this._oy+Math.sin(m)*p,this._oz),x=r.chaos*d*S+(u*g+c)+g*(r.spacing||0),v=x*Math.cos(m),C=x*Math.sin(m);_===0?e.moveTo(v,C):e.lineTo(v,C)}e.closePath(),e.stroke()}e.setTransform(1,0,0,1,0,0)};t()}setMouse(){}setPosition(){return this}setScale(){return this}resize(t,e){this._canvas&&(this._canvas.width=t,this._canvas.height=e)}update(){return this}dispose(){cancelAnimationFrame(this._raf),this._canvas&&this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)}}class dl{constructor(t){typeof t=="number"?(this.r=t>>16&255,this.g=t>>8&255,this.b=t&255):this.r=this.g=this.b=128}}const vy=`
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform float speed;
uniform vec3 skyColor;
uniform vec3 cloudColor;
uniform vec3 lightColor;

// 程序化噪声代替 texture lookup
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
float noise2d(vec2 p){
  vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),
             mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);
}
float texNoise(vec4 p){
  return noise2d(fract((0.5*p.zw+ceil(0.5*p.x))/200.0)*200.0);
}

void main(){
  vec2 coord=gl_FragCoord.xy;
  vec4 p,d=vec4(0.8,0,coord/iResolution.y-0.65);
  vec3 out1=skyColor-d.w;
  float s,f,t=200.0+sin(dot(coord,coord));
  for(float i=1.;i<=100.;i+=1.){
    t-=2.; if(t<0.)break;
    p=0.05*t*d;
    p.xz+=iTime*0.5*speed;
    p.x+=sin(iTime*0.25*speed)*0.25;
    s=2.;
    float n1=texNoise(s*p)/s;s*=2.;
    float n2=texNoise(s*p)/s;s*=2.;
    float n3=texNoise(s*p)/s;s*=2.;
    float n4=texNoise(s*p)/s;
    f=p.w+1.-n1-n2-n3-n4;
    if(f<0.){
      vec3 shading=mix(lightColor,cloudColor,-f);
      out1=mix(out1,shading,-f*0.4);
    }
  }
  gl_FragColor=vec4(out1,1.);
}`,Ze={butterfly:{title:"BionicButterfly",desc:"薄膜干涉 Thin-film Iridescence 结构色 + 各向异性高光 + GPU Vertex Kinematics",tags:[["Iridescence","green"],["Anisotropic","purple"],["Kinematics","pink"]],cam:[0,2,4],look:[0,1.5,0],defs:{seed:123,wingSpan:2,flapFrequency:6,flapAmplitude:.7,baseColor:[.05,.02,.15],filmThickness:380,ior:1.5,iridescenceIntensity:.9},sl:[{s:"Wing"},{k:"wingSpan",l:"翅展",mn:.5,mx:4,st:.05},{s:"Animation"},{k:"flapFrequency",l:"频率",mn:1,mx:20,st:.1},{k:"flapAmplitude",l:"振幅",mn:.1,mx:1.5,st:.01},{s:"Optics"},{k:"filmThickness",l:"薄膜nm",mn:200,mx:600,st:1},{k:"ior",l:"折射率",mn:1,mx:2.5,st:.01},{k:"iridescenceIntensity",l:"干涉色",mn:0,mx:1,st:.01},{k:"seed",l:"种子",mn:1,mx:9999,st:1}],pal:[{n:"紫夜蝶",c:[.05,.02,.15]},{n:"蓝闪蝶",c:[.02,.05,.2]},{n:"翠凤蝶",c:[.02,.1,.05]},{n:"金斑蝶",c:[.15,.08,.02]}]},flock:{title:"Boids Swarm",desc:"Reynolds Boids 集群 (分离/对齐/聚合) + InstancedMesh + GPU 相位差振翅",tags:[["Boids","green"],["Instanced","purple"],["Phase Shift","pink"]],cam:[0,8,20],look:[0,5,0],defs:{seed:77,wingSpan:.6,flapFrequency:10,flapAmplitude:.6,baseColor:[.08,.03,.2],filmThickness:350,iridescenceIntensity:.85,flockCount:80},sl:[{s:"Flock"},{k:"flockCount",l:"数量",mn:10,mx:200,st:1},{s:"Individual"},{k:"wingSpan",l:"翅展",mn:.2,mx:1.5,st:.05},{k:"flapFrequency",l:"频率",mn:3,mx:20,st:.1},{k:"flapAmplitude",l:"振幅",mn:.1,mx:1.2,st:.01},{s:"Optics"},{k:"filmThickness",l:"薄膜nm",mn:200,mx:600,st:1},{k:"iridescenceIntensity",l:"干涉色",mn:0,mx:1,st:.01},{k:"seed",l:"种子",mn:1,mx:9999,st:1}],pal:[{n:"紫群",c:[.08,.03,.2]},{n:"蓝群",c:[.03,.05,.18]},{n:"金群",c:[.12,.08,.02]}]},mandelbulb:{title:"Mandelbulb",desc:"3D 分形 · Raymarching SDF + 4D Simplex Noise + 轨道陷阱着色",tags:[["Raymarching","green"],["SDF","purple"],["4D Noise","pink"]],cam:null,look:null,defs:{power:8,iterations:12,bailout:2,scale:2,glowIntensity:.5,animate:!0,colorA:[.1,.2,.6],colorB:[.9,.3,.1]},sl:[{s:"Fractal"},{k:"power",l:"幂次",mn:2,mx:16,st:.1},{k:"iterations",l:"迭代",mn:4,mx:20,st:1},{k:"bailout",l:"逃逸",mn:1,mx:4,st:.1},{k:"scale",l:"缩放",mn:.5,mx:4,st:.05},{s:"Visual"},{k:"glowIntensity",l:"辉光",mn:0,mx:2,st:.01}],pal:[{n:"深海",cA:[.1,.2,.6],cB:[.9,.3,.1]},{n:"岩浆",cA:[.5,.05,0],cB:[1,.8,.1]},{n:"极光",cA:[0,.3,.2],cB:[.2,.8,.6]},{n:"紫晶",cA:[.2,.05,.3],cB:[.8,.3,.9]}]},"trois-flower":{title:"TroisFlower",desc:"LD 原版 TroisJS 花效果 · ExtrudeGeometry + InstancedMesh + onBeforeCompile Shader 卷曲/脉络/碗形变形",tags:[["InstancedMesh","green"],["Physical Material","purple"],["Shader Vein","pink"]],cam:[0,-4,5],look:[0,0,0],defs:{seed:42,preset:"rose",rings:14,petals:7,size:.75,dx:.4,dy:.8,maxRadius:.1,maxScale:2.2,startRx:2.42,zOffsetCoef:.5,bowlDepth:.35,taperPow:.75,baseCurl:1.5,curlVar:.15,baseTwist:.4,twistVar:0,metalness:0,roughness:.43,transmission:.17,sheen:.47,clearcoat:.1,veinStr:.6,edgeLight:.2,hueShift:0},sl:[{s:"🌹 Preset 花型"},{k:"rings",l:"花环层数",mn:5,mx:60,st:1},{k:"petals",l:"每层花瓣",mn:3,mx:16,st:1},{s:"🍃 Petal 花瓣"},{k:"size",l:"花瓣长度",mn:.3,mx:2.5,st:.05},{k:"dx",l:"横向弧度",mn:.05,mx:2,st:.05},{k:"dy",l:"纵向弧度",mn:0,mx:2,st:.05},{k:"bowlDepth",l:"碗形深度",mn:0,mx:2,st:.05},{k:"taperPow",l:"尖端锥度",mn:.3,mx:2,st:.05},{s:"🌺 Flower 形态"},{k:"maxRadius",l:"散开半径",mn:0,mx:5,st:.1},{k:"maxScale",l:"最大缩放",mn:.5,mx:5,st:.1},{k:"startRx",l:"展开角度",mn:.1,mx:3.14,st:.01},{k:"zOffsetCoef",l:"螺旋扭转",mn:0,mx:10,st:.05},{s:"🌀 Curl 卷曲"},{k:"baseCurl",l:"基础卷曲",mn:0,mx:4,st:.1},{k:"curlVar",l:"卷曲随机",mn:0,mx:2,st:.05},{k:"baseTwist",l:"基础扭转",mn:0,mx:3,st:.1},{k:"twistVar",l:"扭转随机",mn:0,mx:2,st:.05},{s:"✨ Material 材质"},{k:"metalness",l:"金属度",mn:0,mx:1,st:.01},{k:"roughness",l:"粗糙度",mn:0,mx:1,st:.01},{k:"transmission",l:"透光度",mn:0,mx:1,st:.01},{k:"sheen",l:"丝绒光泽",mn:0,mx:1,st:.01},{k:"clearcoat",l:"清漆",mn:0,mx:1,st:.01},{s:"🖌 Shader 脉络"},{k:"veinStr",l:"脉络强度",mn:0,mx:2,st:.05},{k:"edgeLight",l:"边缘透光",mn:0,mx:1,st:.05},{k:"hueShift",l:"色相偏移",mn:0,mx:1,st:.005},{k:"seed",l:"种子",mn:1,mx:9999,st:1}],pal:[{n:"🌹 玫瑰",c:[1,0,0]},{n:"🪷 荷花",c:[1,.41,.71]},{n:"🌼 菊花",c:[1,.84,0]},{n:"🌸 樱花",c:[1,.72,.77]},{n:"🌷 郁金香",c:[1,.2,0]},{n:"💮 百合",c:[1,.8,0]}]},dahlia:{title:"Dahlia 大丽花",desc:"程序化多层花瓣 InstancedMesh · 7 层 74 瓣 + wrap lighting + SSS + 星空背景",tags:[["InstancedMesh","green"],["SSS","purple"],["Bézier Petal","pink"]],cam:null,look:null,defs:{petalScale:1,petalLength:1,petalWidth:1,openAngleScale:1,bloomWaveAmp:.14,cycleDuration:5,breatheAmp:.004,energyWaveSpeed:.4,energyWaveStrength:.22,fresnelStrength:.38,coreGlow:.55,specularStr:.14,sssStrength:.25,autoRotateSpeed:.015},sl:[{s:"🌸 花瓣形态"},{k:"petalScale",l:"整体缩放",mn:.5,mx:2,st:.05},{k:"openAngleScale",l:"展开角度",mn:.5,mx:2,st:.05},{s:"💓 动画"},{k:"bloomWaveAmp",l:"波浪幅度",mn:0,mx:.4,st:.01},{k:"cycleDuration",l:"周期(秒)",mn:2,mx:12,st:.5},{k:"breatheAmp",l:"呼吸幅度",mn:0,mx:.02,st:.001},{s:"✨ 光效"},{k:"energyWaveSpeed",l:"能量波速",mn:.1,mx:1.5,st:.05},{k:"energyWaveStrength",l:"能量波强度",mn:0,mx:.5,st:.01},{k:"fresnelStrength",l:"菲涅尔",mn:0,mx:1,st:.02},{k:"coreGlow",l:"花心辉光",mn:0,mx:1.5,st:.05},{k:"specularStr",l:"高光",mn:0,mx:.5,st:.01},{k:"sssStrength",l:"SSS 强度",mn:0,mx:1,st:.02},{s:"📷 交互"},{k:"autoRotateSpeed",l:"自转速度",mn:0,mx:.1,st:.005}],pal:[]},tulip:{title:"Tulip 郁金香",desc:"GLB 模型生长动画 · 贴图材质 + 阶段式生长 + easeOutBack + 风力摇摆",tags:[["GLB Model","green"],["Growth Anim","purple"],["Wind Sim","pink"]],cam:null,look:null,defs:{growthDuration:8,petalOpenAngle:.3,petalScale:1,windStrength:1,windSpeed:.5,cameraDistance:3.5,autoRotateSpeed:.01},sl:[{s:"🌱 生长"},{k:"growthDuration",l:"生长周期(秒)",mn:3,mx:25,st:.5},{s:"🌷 花瓣"},{k:"petalOpenAngle",l:"展开角度",mn:0,mx:1.5,st:.05},{k:"petalScale",l:"缩放",mn:.3,mx:2,st:.05},{s:"�️ 风力"},{k:"windStrength",l:"风力强度",mn:0,mx:4,st:.1},{k:"windSpeed",l:"风速",mn:0,mx:3,st:.05},{s:"📷 相机"},{k:"cameraDistance",l:"相机距离",mn:.8,mx:6,st:.1},{k:"autoRotateSpeed",l:"自转速度",mn:0,mx:.05,st:.002}],pal:[]},aurora:{title:"Aurora Borealis",desc:"程序化极光 · Volume Raymarching + FBM 分数布朗运动 + Beer-Lambert + 星空",tags:[["Volume","green"],["FBM","purple"],["Beer-Lambert","pink"]],cam:null,look:null,defs:{colorTop:[.1,.8,.3],colorBottom:[.3,.1,.6],colorAccent:[.1,.3,.9],height:5,curtainWidth:15,speed:.3,intensity:1.5,turbulence:1,raySteps:48},sl:[{s:"Aurora"},{k:"height",l:"高度 Height",mn:2,mx:12,st:.1},{k:"curtainWidth",l:"宽度 Width",mn:5,mx:30,st:.5},{k:"speed",l:"速度 Speed",mn:.05,mx:1,st:.01},{k:"intensity",l:"强度 Intensity",mn:.3,mx:3,st:.05},{k:"turbulence",l:"湍流 Turbulence",mn:0,mx:2,st:.05},{s:"Quality 品质"},{k:"raySteps",l:"采样 Samples",mn:16,mx:96,st:1}],pal:[{n:"经典绿",t:[.1,.8,.3],b:[.3,.1,.6],a:[.1,.3,.9]},{n:"烈焰",t:[.9,.2,.1],b:[.5,.05,.1],a:[1,.6,.1]},{n:"冰蓝",t:[.2,.6,.9],b:[.1,.1,.4],a:[.5,.8,1]},{n:"粉紫",t:[.9,.3,.6],b:[.3,.1,.5],a:[.7,.4,.9]}]},"vanta-halo":{title:"Halo 光环",desc:"双缓冲反馈 Shader · Perlin 3D Noise + 花瓣状波形 + 彩虹色相旋转",tags:[["Double Buffer","green"],["Perlin 3D","purple"],["Feedback","pink"]],cam:null,look:null,isVanta:!0,defs:{baseColor:6745,color2:15918901,backgroundColor:1251907,amplitudeFactor:1,ringFactor:1,rotationFactor:1,xOffset:0,yOffset:0,size:1,speed:1},sl:[{s:"🔆 Halo 光环"},{k:"size",l:"尺寸 Size",mn:.1,mx:3,st:.05},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05},{k:"amplitudeFactor",l:"振幅 Amplitude",mn:.1,mx:3,st:.05},{k:"ringFactor",l:"环纹 Ring",mn:.1,mx:3,st:.05},{k:"rotationFactor",l:"旋转 Rotation",mn:.1,mx:3,st:.05},{s:"📐 Position 位置"},{k:"xOffset",l:"X 偏移",mn:-1,mx:1,st:.01},{k:"yOffset",l:"Y 偏移",mn:-1,mx:1,st:.01}],pal:[{n:"深蓝金",c:[0,.1,.35]},{n:"暗紫",c:[.2,0,.3]},{n:"暗红",c:[.3,0,.05]}]},"vanta-fog":{title:"Fog 迷雾",desc:"FBM 分形布朗运动雾气 · 6 层 Octave 噪声叠加 + 多色层混合",tags:[["FBM","green"],["Noise","purple"],["Multi-layer","pink"]],cam:null,look:null,isVanta:!0,defs:{highlightColor:16761600,midtoneColor:16719616,lowlightColor:2949375,baseColor:16772075,blurFactor:.6,speed:1,zoom:1},sl:[{s:"🌫️ Fog 雾气"},{k:"blurFactor",l:"模糊度 Blur",mn:.1,mx:.9,st:.01},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05},{k:"zoom",l:"缩放 Zoom",mn:.3,mx:3,st:.05}],pal:[{n:"🔥 火焰",c:[1,.76,0]},{n:"🧊 冰蓝",c:[.1,.4,.8]},{n:"🍇 紫雾",c:[.5,.1,.7]}]},"vanta-cells":{title:"Cells 细胞",desc:"Worley Noise 沃罗诺伊细胞 · 有机纹理生成 + 时间偏移动画",tags:[["Worley","green"],["Voronoi","purple"],["Organic","pink"]],cam:null,look:null,isVanta:!0,defs:{color1:35980,color2:15918901,backgroundColor:14155663,amplitudeFactor:1,size:1.5,speed:1},sl:[{s:"🧬 Cells 细胞"},{k:"size",l:"尺寸 Size",mn:.3,mx:5,st:.05},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05},{k:"amplitudeFactor",l:"振幅 Amplitude",mn:.1,mx:3,st:.05}],pal:[{n:"🌿 绿黄",c:[0,.55,0]},{n:"🔮 紫蓝",c:[.3,0,.7]},{n:"🌅 暖橙",c:[.9,.4,0]}]},"vanta-clouds":{title:"Clouds 体积云",desc:"体积云 Raymarching · 多级 LOD 噪声密度场 + 太阳光散射",tags:[["Volume","green"],["Raymarching","purple"],["LOD","pink"]],cam:null,look:null,isVanta:!0,defs:{backgroundColor:16777215,skyColor:6863063,cloudColor:11387358,cloudShadowColor:1586512,sunColor:16750873,sunGlareColor:16737843,sunlightColor:16750899,speed:1},sl:[{s:"☁️ Clouds 云"},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05}],pal:[{n:"☀️ 晴天",c:[.41,.72,.84]},{n:"🌅 黄昏",c:[.8,.4,.1]},{n:"🌑 暗夜",c:[.1,.12,.2]}]},"vanta-ripple":{title:"Ripple 涟漪",desc:"光点涟漪 · 400 点光源矩阵 + 正弦波叠加 + 辉光累积",tags:[["Light Array","green"],["Sine Wave","purple"],["Glow","pink"]],cam:null,look:null,isVanta:!0,defs:{color1:396069,color2:16777215,backgroundColor:16185078,amplitudeFactor:1,ringFactor:4,rotationFactor:.1,speed:1},sl:[{s:"💫 Ripple 涟漪"},{k:"amplitudeFactor",l:"振幅 Amplitude",mn:.1,mx:3,st:.05},{k:"ringFactor",l:"环密度 Rings",mn:.5,mx:10,st:.1},{k:"rotationFactor",l:"旋转 Rotation",mn:0,mx:1,st:.01},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05}],pal:[{n:"🌿 绿光",c:[.02,.42,.09]},{n:"🔵 蓝光",c:[0,.2,.8]},{n:"🟣 紫光",c:[.5,0,.6]}]},"vanta-birds":{title:"Birds 飞鸟",desc:"CPU Boids 集群飞鸟 · Reynolds 规则 + 振翅动画 + 渐变着色",tags:[["Boids","green"],["Flocking","purple"],["CPU Sim","pink"]],cam:null,look:null,is3DVanta:!0,defs:{backgroundColor:465199,color1:16711680,color2:53759,birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5},sl:[{s:"🐦 Birds 飞鸟"},{k:"quantity",l:"密度 Quantity",mn:2,mx:5,st:1},{k:"birdSize",l:"体型 Size",mn:.5,mx:3,st:.1},{k:"speedLimit",l:"速度 Speed",mn:1,mx:15,st:.5},{s:"🧠 Boids 行为"},{k:"separation",l:"分离 Separation",mn:5,mx:50,st:1},{k:"alignment",l:"对齐 Alignment",mn:5,mx:50,st:1},{k:"cohesion",l:"聚合 Cohesion",mn:5,mx:50,st:1}],pal:[{n:"🔴 红蓝",c:[1,0,0]},{n:"🟢 绿黄",c:[0,1,0]},{n:"🟣 紫青",c:[.5,0,1]}]},"vanta-net":{title:"Net 网络",desc:"3D 粒子连线网络 · 距离阈值动态连接 + 旋转漂移 + 亮度混合",tags:[["Particles","green"],["Lines","purple"],["Dynamic","pink"]],cam:null,look:null,is3DVanta:!0,defs:{color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0},sl:[{s:"🕸️ Net 网络"},{k:"points",l:"密度 Points",mn:3,mx:20,st:1},{k:"maxDistance",l:"连接距离",mn:5,mx:50,st:1},{k:"spacing",l:"间距 Spacing",mn:5,mx:30,st:1}],pal:[{n:"🩷 粉紫",c:[1,.25,.5]},{n:"🩵 蓝绿",c:[0,.8,.8]},{n:"🧡 橙黄",c:[1,.6,0]}]},"vanta-waves":{title:"Waves 波浪",desc:"动态波浪网格 · Trochoid 波形叠加 + FlatShading + Phong 材质",tags:[["Trochoid","green"],["FlatShading","purple"],["Animated","pink"]],cam:null,look:null,is3DVanta:!0,defs:{color:21896,shininess:30,waveHeight:15,waveSpeed:1,zoom:1},sl:[{s:"🌊 Waves 波浪"},{k:"waveHeight",l:"浪高 Height",mn:1,mx:40,st:1},{k:"waveSpeed",l:"速度 Speed",mn:.1,mx:3,st:.1},{k:"zoom",l:"缩放 Zoom",mn:.3,mx:3,st:.1},{k:"shininess",l:"光泽 Shininess",mn:1,mx:100,st:1}],pal:[{n:"🔵 深蓝",c:[0,.33,.53]},{n:"🌊 青碧",c:[0,.6,.5]},{n:"🌑 暗夜",c:[.05,.1,.2]}]},"vanta-dots":{title:"Dots 星点",desc:"星点矩阵 + 旋转线球 · PointsMaterial + 正弦波振荡",tags:[["Points","green"],["Sine","purple"],["LineSphere","pink"]],cam:null,look:null,is3DVanta:!0,defs:{color:16746528,color2:16746528,backgroundColor:2236962,size:3,spacing:35,showLines:!0},sl:[{s:"✨ Dots 星点"},{k:"size",l:"粒径 Size",mn:.5,mx:10,st:.5},{k:"spacing",l:"间距 Spacing",mn:10,mx:80,st:1}],pal:[{n:"🟠 暖橙",c:[1,.53,.13]},{n:"🔵 冰蓝",c:[.2,.6,1]},{n:"🟢 翠绿",c:[.2,.8,.3]}]},"vanta-rings":{title:"Rings 光环",desc:"彩色环形阵列 · ExtrudeGeometry 弧形 + 多色分层 + 旋转",tags:[["Extrude","green"],["Multi-color","purple"],["Rotation","pink"]],cam:null,look:null,is3DVanta:!0,defs:{backgroundColor:2106408,color:8978176},sl:[],pal:[{n:"🟢 荧绿",c:[.53,1,0]},{n:"🔵 蓝光",c:[.07,.53,.87]},{n:"🟡 暖金",c:[1,.87,.13]}]},"vanta-globe":{title:"Globe 地球",desc:"线框地球 + 极轴 + 网格波动连线 · 球面磁力线",tags:[["Wireframe","green"],["Poles","purple"],["Grid","pink"]],cam:null,look:null,is3DVanta:!0,defs:{color:16727937,color2:16777215,size:1,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0},sl:[{s:"🌍 Globe 地球"},{k:"size",l:"球径 Size",mn:.3,mx:3,st:.1},{k:"points",l:"网格密度",mn:3,mx:20,st:1},{k:"maxDistance",l:"连接距离",mn:5,mx:50,st:1}],pal:[{n:"🩷 粉紫",c:[1,.25,.5]},{n:"🩵 蓝白",c:[.3,.6,1]},{n:"🟢 绿光",c:[.2,.8,.3]}]},"vanta-clouds2":{title:"Clouds2 程序云",desc:"程序化噪声体积云 · 噪声密度采样 + 光照渐变",tags:[["Procedural","green"],["Noise","purple"],["Volume","pink"]],cam:null,look:null,isVanta:!0,defs:{backgroundColor:0,skyColor:6072010,cloudColor:3362176,lightColor:16777215,speed:1},sl:[{s:"☁️ Clouds2 云"},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05}],pal:[{n:"🩵 晴空",c:[.36,.67,.79]},{n:"🌅 暮色",c:[.5,.2,.1]},{n:"🌑 深夜",c:[.05,.08,.15]}]},"vanta-topology":{title:"Topology 拓扑",desc:"流场粒子系统 · Perlin 噪声流向 + 4500 粒子描迹",tags:[["Flow Field","green"],["Particles","purple"],["Canvas 2D","pink"]],cam:null,look:null,isCanvas:!0,defs:{color:9016910,backgroundColor:8738,speed:1},sl:[],pal:[{n:"🟢 苔绿",c:[.54,.58,.31]},{n:"🔵 靛蓝",c:[.1,.2,.6]},{n:"🟡 琥珀",c:[.8,.6,.1]}]},"vanta-trunk":{title:"Trunk 年轮",desc:"噪声同心环 · 极坐标噪声径向偏移 + 动态呼吸",tags:[["Polar","green"],["Noise Ring","purple"],["Canvas 2D","pink"]],cam:null,look:null,isCanvas:!0,defs:{color:9979487,backgroundColor:2237478,spacing:0,chaos:1},sl:[{s:"🪵 Trunk 年轮"},{k:"chaos",l:"混乱度 Chaos",mn:.1,mx:3,st:.1},{k:"spacing",l:"间距 Spacing",mn:0,mx:5,st:.1}],pal:[{n:"🩷 紫粉",c:[.6,.27,.37]},{n:"🩵 蓝灰",c:[.3,.4,.5]},{n:"🟢 森绿",c:[.2,.5,.2]}]}},xy=document.getElementById("canvas-container"),Se=new c_({antialias:!0});Se.setSize(window.innerWidth,window.innerHeight);Se.setPixelRatio(Math.min(window.devicePixelRatio,2));Se.outputColorSpace=Ae;xy.appendChild(Se.domElement);const Yt=new Cl;Yt.background=new ut(198418);const Ne=new ve(60,window.innerWidth/window.innerHeight,.1,1e4);Ne.position.set(0,2,5);const be=new wv(Ne,Se.domElement);be.enableDamping=!0;be.dampingFactor=.06;const rr=new Di(3359846,.5),gs=new qs(16772829,1.2);gs.position.set(5,8,3);const _s=new fr(16746598,.5,20);_s.position.set(-3,4,-2);Yt.add(rr,gs,_s);const Fh=new Di(8421504,4),Xn=new Ss(6328575,80);Xn.position.set(0,-1,7.8);Xn.angle=Math.PI/6;Xn.penumbra=.5;Xn.castShadow=!0;Xn.shadow.mapSize.set(1024,1024);const qn=new Ss(16748640,80);qn.position.set(0,1,-3);qn.angle=Math.PI/6;qn.penumbra=.5;qn.castShadow=!0;qn.shadow.mapSize.set(1024,1024);const or=new Gv(Se);or.addPass(new Wv(Yt,Ne));const yy=new ps(new $(window.innerWidth,window.innerHeight),.85,.4,.85);or.addPass(yy);let pl=!1;const My=jn,Sy=1;function by(s){s==="trois-flower"?(Yt.remove(rr,gs,_s),Yt.add(Fh,Xn,Xn.target,qn,qn.target),Se.shadowMap.enabled=!0,Se.shadowMap.type=Bh,Se.toneMapping=kh,Se.toneMappingExposure=2.1,Yt.background=new ut(657930),pl=!0):(Yt.remove(Fh,Xn,Xn.target,qn,qn.target),Yt.add(rr,gs,_s),Se.shadowMap.enabled=!1,Se.toneMapping=My,Se.toneMappingExposure=Sy,Yt.background=new ut(198418),pl=!1)}const Gl=sr.getInstance();Gl.set("uResolution",new $(window.innerWidth,window.innerHeight));uo.getInstance();let et=null,Oh=[],ie="trois-flower",Qt={},ro=0,Fe=Ne,di=!1,Oe="showcase";const kn={};let ar=null;function Ty(){et&&(et.dispose(),et=null),Oh.forEach(t=>t.dispose()),Oh=[];const s=[];Yt.traverse(t=>{(t.isMesh||t.isLineSegments||t.isPoints||t.isLine)&&s.push(t)}),s.forEach(t=>Yt.remove(t)),Fe=Ne,di=!1,be.enabled=!0,ar=null}function Ri(s,t){Ty(),ie=s,Qt={...t};const e=Ze[s];if(!e)return;by(s),document.querySelectorAll(".entity-btn").forEach(i=>i.classList.remove("active"));const n=document.querySelector(`[data-mode="${s}"]`);switch(n&&n.classList.add("active"),e.cam&&(Ne.position.set(...e.cam),be.target.set(...e.look)),s){case"butterfly":et=new fl(t).build(),et.addTo(Yt).setPosition(0,1.5,0);break;case"flock":et=new fl(t).build(),et.addTo(Yt);break;case"mandelbulb":et=new Uu(t).build(),et.addTo(Yt);break;case"trois-flower":et=new Du(t).build(),et.addTo(Yt);break;case"dahlia":et=new Kv(t).build(),et.addTo(Yt),et.camera&&(Fe=et.camera,di=!0,be.enabled=Oe==="free"),Yt.remove(rr,gs,_s),Yt.background=null;break;case"tulip":et=new Nx(t).build(),et.addTo(Yt),et.camera&&(Fe=et.camera,di=!0,be.enabled=Oe==="free"),Yt.remove(rr,gs,_s),Yt.background=null;break;case"aurora":et=new Nu(t).build(),et.addTo(Yt);break;case"vanta-halo":et=new Hx(t).build(),et.setRenderer(Se),et.addTo(Yt);break;case"vanta-fog":et=new Wx(t).build(),et.addTo(Yt);break;case"vanta-cells":et=new Xx(t).build(),et.addTo(Yt);break;case"vanta-clouds":et=new qx(t).build(),et.addTo(Yt);break;case"vanta-ripple":et=new Yx(t).build(),et.addTo(Yt);break;case"vanta-clouds2":et=new my(t).build(),et.addTo(Yt);break;case"vanta-birds":et=new Qx(t).build(),et.setRenderer(Se),et.addTo(Yt),ji(et);break;case"vanta-net":et=new cy(t).build(),et.setRenderer(Se),et.addTo(Yt),ji(et);break;case"vanta-waves":et=new hy(t).build(),et.setRenderer(Se),et.addTo(Yt),ji(et);break;case"vanta-dots":et=new uy(t).build(),et.setRenderer(Se),et.addTo(Yt),ji(et);break;case"vanta-rings":et=new dy(t).build(),et.setRenderer(Se),et.addTo(Yt),ji(et);break;case"vanta-globe":et=new py(t).build(),et.setRenderer(Se),et.addTo(Yt),ji(et);break;case"vanta-topology":et=new gy(t).build(),et.addTo();break;case"vanta-trunk":et=new _y(t).build(),et.addTo();break}Oe="showcase",be.update(),Ay(s),Cy()}function ji(s){if(s&&s.camera){if(Fe=s.camera,di=!0,be.enabled=Oe==="free",s.camera.aspect=window.innerWidth/window.innerHeight,s.camera.updateProjectionMatrix(),ar={pos:s.camera.position.clone(),target:s.camera.tx!==void 0?new R(s.camera.tx,s.camera.ty,s.camera.tz||s.camera.position.z):new R(0,0,0)},kn[ie]){const t=kn[ie];s.camera.position.copy(t.pos),s.camera.tx!==void 0&&(s.camera.tx=t.pos.x,s.camera.ty=t.pos.y,s.camera.tz=t.pos.z)}Oe==="free"&&Ou(s.camera)}}function Ou(s){Ne.position.copy(s.position),Ne.fov=s.fov||60,Ne.near=s.near||.1,Ne.far=s.far||1e4,Ne.updateProjectionMatrix();const t=new R(0,0,-1).applyQuaternion(s.quaternion);be.target.copy(s.position).add(t.multiplyScalar(100)),be.update(),Fe=Ne,be.enabled=!0}function zu(s){if(s===Oe)return;Oe=s;const t=Ze[ie];if(s==="free")di&&et&&et.camera&&Ou(et.camera),be.enabled=!0;else if(di&&et&&et.camera)if(Fe=et.camera,be.enabled=!1,kn[ie]){const e=kn[ie];et.camera.position.copy(e.pos),et.camera.tx!==void 0&&(et.camera.tx=e.pos.x,et.camera.ty=e.pos.y,e.pos.z!==void 0&&(et.camera.tz=e.pos.z))}else ar&&et.camera.position.copy(ar.pos);else t&&t.cam&&(kn[ie]?(Ne.position.copy(kn[ie].pos),be.target.copy(kn[ie].target)):(Ne.position.set(...t.cam),be.target.set(...t.look)),be.enabled=!0,be.update());wy()}function Bu(){const s=Fe.position.clone(),t=be.enabled?be.target.clone():new R(0,0,0);kn[ie]={pos:s,target:t},di&&et&&et.camera&&(ar={pos:s.clone(),target:t.clone()});const e=document.getElementById("pin-toast");e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2200)}function wy(){document.querySelectorAll(".view-mode-btn").forEach(t=>{t.classList.toggle("active",t.dataset.vm===Oe)});const s=document.getElementById("btn-pin-cam");s&&s.classList.toggle("visible",Oe==="free")}function Wl(s){var a,l,c,u;const t=Ze[s];if(!t)return;const e=document.getElementById("params-content"),n=!t.isVanta&&!t.isCanvas,i=t.is3DVanta===!0,r=n||i;let o=`<div class="panel-title">⚙️ ${t.title}</div><div class="panel-subtitle">修改即时重建</div>`;r&&(kn[s],o+='<div class="view-mode-bar">',o+=`<button class="view-mode-btn${Oe==="showcase"?" active":""}" data-vm="showcase"><span class="vm-icon">🎬</span>展示视角</button>`,o+=`<button class="view-mode-btn${Oe==="free"?" active":""}" data-vm="free"><span class="vm-icon">🎮</span>自由视角</button>`,o+="</div>",o+=`<button class="pin-cam-btn${Oe==="free"?" visible":""}" id="btn-pin-cam">📌 固定当前视角为展示视角</button>`),(a=t.pal)!=null&&a.length&&(o+='<div class="param-section"><div class="param-section-label">Color Presets</div><div class="color-row">',t.pal.forEach((h,f)=>{const d=h.c||h.t||h.cA||[.5,.5,.5];o+=`<div class="color-swatch${f===ro?" active":""}" data-ci="${f}" style="background:rgb(${Math.round(d[0]*255)},${Math.round(d[1]*255)},${Math.round(d[2]*255)})" title="${h.n}"></div>`}),o+="</div></div>");for(const h of t.sl){if(h.s){o+=`<div class="param-section"><div class="param-section-label">${h.s}</div>`;continue}const f=Qt[h.k]??t.defs[h.k],d=h.st>=1?f:Number(f).toFixed(2);o+=`<div class="param-row"><span class="param-label">${h.l}</span><span class="param-value" id="pv-${h.k}">${d}</span></div>`,o+=`<input type="range" class="param-slider" data-key="${h.k}" min="${h.mn}" max="${h.mx}" step="${h.st}" value="${f}">`}o+='<button class="action-btn" id="btn-rand">🎲 随机种子</button>',o+='<button class="action-btn secondary" id="btn-rebuild">🔄 重新生成</button>',e.innerHTML=o,e.querySelectorAll(".param-slider").forEach(h=>{h.addEventListener("input",f=>{const d=f.target.dataset.key,g=parseFloat(f.target.value);Qt[d]=g,document.getElementById(`pv-${d}`).textContent=parseFloat(f.target.step)>=1?g:g.toFixed(2)}),h.addEventListener("change",()=>Ri(ie,Qt))}),e.querySelectorAll(".color-swatch").forEach(h=>{h.addEventListener("click",f=>{ro=parseInt(f.target.dataset.ci),Ey(s,ro),e.querySelectorAll(".color-swatch").forEach(d=>d.classList.remove("active")),f.target.classList.add("active")})}),(l=document.getElementById("btn-rand"))==null||l.addEventListener("click",ku),(c=document.getElementById("btn-rebuild"))==null||c.addEventListener("click",()=>Ri(ie,Qt)),e.querySelectorAll(".view-mode-btn").forEach(h=>{h.addEventListener("click",()=>zu(h.dataset.vm))}),(u=document.getElementById("btn-pin-cam"))==null||u.addEventListener("click",Bu)}function Ey(s,t){var n,i;const e=(i=(n=Ze[s])==null?void 0:n.pal)==null?void 0:i[t];e&&(e.c&&(s==="butterfly"||s==="flock")?Qt.baseColor=e.c:e.c&&(Qt.color=e.c,e.ic&&(Qt.innerColor=e.ic)),e.cA&&(Qt.colorA=e.cA),e.cB&&(Qt.colorB=e.cB),e.t&&(Qt.colorTop=e.t),e.b&&(Qt.colorBottom=e.b),e.a&&(Qt.colorAccent=e.a),Ri(ie,Qt))}function Ay(s){const t=Ze[s];if(!t)return;document.getElementById("overlay-title").textContent=t.title,document.getElementById("overlay-desc").textContent=t.desc,document.getElementById("overlay-tags").innerHTML=t.tags.map(([n,i])=>`<span class="overlay-tag tag-${i}">${n}</span>`).join("");const e=document.getElementById("entity-overlay");e.classList.remove("visible"),requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add("visible")))}function Cy(){document.getElementById("stat-seed").textContent=`Seed: ${Qt.seed||Qt.baseSeed||42}`;let s=0,t=0;Yt.traverse(e=>{if(e.isMesh&&e.geometry){t++;const n=e.geometry.getAttribute("position");n&&(s+=n.count)}}),document.getElementById("stat-geo").textContent=`Geo: ${t}`,document.getElementById("stat-verts").textContent=`Verts: ${s.toLocaleString()}`}function ku(){const s=Math.floor(Math.random()*9999)+1;"seed"in Qt&&(Qt.seed=s),"baseSeed"in Qt&&(Qt.baseSeed=s),Wl(ie),Ri(ie,Qt)}window.appSwitch=function(s){ro=0,Oe="showcase",Qt={...Ze[s].defs},Wl(s),Ri(s,Qt)};document.addEventListener("keydown",s=>{if((s.key==="r"||s.key==="R")&&ku(),s.key==="v"||s.key==="V"){const t=Ze[ie];(!(t!=null&&t.isVanta)&&!(t!=null&&t.isCanvas)||(t==null?void 0:t.is3DVanta))&&zu(Oe==="showcase"?"free":"showcase")}(s.key==="p"||s.key==="P")&&Oe==="free"&&Bu()});const Ry=new bs;let ga=0,$r=0;function Vu(){requestAnimationFrame(Vu);const s=Ry.getDelta();Gl.tick(),et&&et.update&&et.update(),ie==="flock"&&et&&et.updateFlock(s),be.enabled&&be.update(),pl?(or.passes[0].camera=Fe,or.render()):Se.render(Yt,Fe),ga++,$r+=s,$r>=.5&&(document.getElementById("stat-fps").textContent=Math.round(ga/$r)+" FPS",ga=0,$r=0)}window.addEventListener("resize",()=>{const s=window.innerWidth,t=window.innerHeight;Ne.aspect=s/t,Ne.updateProjectionMatrix(),di&&Fe!==Ne&&(Fe.aspect=s/t,Fe.updateProjectionMatrix()),Se.setSize(s,t),or.setSize(s,t),Gl.set("uResolution",new $(s,t)),et&&et.resize&&et.resize(s,t)});window.addEventListener("mousemove",s=>{if(!et||!et.setMouse)return;const t=Ze[ie];Oe==="free"&&t&&t.is3DVanta||et.setMouse(s.clientX,s.clientY)});function Hu(s){if(!et||!et.setMouse||!s.touches.length)return;const t=Ze[ie];Oe==="free"&&t&&t.is3DVanta||et.setMouse(s.touches[0].clientX,s.touches[0].clientY)}window.addEventListener("touchstart",Hu,{passive:!0});window.addEventListener("touchmove",Hu,{passive:!0});document.getElementById("sidebar").addEventListener("click",s=>{const t=s.target.closest(".entity-btn");if(!t)return;const e=t.dataset.mode;e&&Ze[e]&&window.appSwitch(e)});window.appSwitch("trois-flower");Vu();(function(){const t=document.getElementById("tcPanel"),e=document.getElementById("tcToggleBtn"),n=document.getElementById("tcMinBtn"),i=document.getElementById("tcHeader"),r=document.getElementById("tcBody"),o=document.getElementById("tcCopyBtn"),a=document.getElementById("tcResetBtn"),l=document.getElementById("tcSaveBtn"),c=document.getElementById("tcExportBtn");if(!t||!e)return;e.addEventListener("click",()=>{t.classList.add("tc-visible"),e.style.display="none"}),n.addEventListener("click",()=>{t.classList.remove("tc-visible"),e.style.display="flex"});let u=!1,h=0,f=0;i.addEventListener("mousedown",C=>{if(C.target.closest(".tc-header-btn"))return;u=!0;const w=t.getBoundingClientRect();h=C.clientX-w.left,f=C.clientY-w.top,C.preventDefault()}),document.addEventListener("mousemove",C=>{if(!u)return;const w=Math.max(0,Math.min(window.innerWidth-t.offsetWidth,C.clientX-h)),A=Math.max(0,Math.min(window.innerHeight-50,C.clientY-f));t.style.left=w+"px",t.style.top=A+"px",t.style.right="auto",e.style.left=w+"px",e.style.top=A+"px",e.style.right="auto"}),document.addEventListener("mouseup",()=>{u=!1}),document.addEventListener("keydown",C=>{C.key==="`"&&(t.classList.contains("tc-visible")?(t.classList.remove("tc-visible"),e.style.display="flex"):(t.classList.add("tc-visible"),e.style.display="none"))});let d=null;function g(C){let w=document.querySelector(".tc-toast");w||(w=document.createElement("div"),w.className="tc-toast",document.body.appendChild(w)),w.textContent=C,w.classList.add("tc-show"),setTimeout(()=>w.classList.remove("tc-show"),1800)}function _(C,w){return w>=1?String(Math.round(C)):Math.abs(C)<.001?C.toExponential(1):C.toFixed(Math.abs(C)<1?3:2)}function m(C){d=C,r.innerHTML="";const w=Ze[C];if(!w||!w.sl||w.sl.length===0){r.innerHTML='<div style="padding:16px;color:#555;font-size:11px;text-align:center">该效果暂无可调参数</div>';return}JSON.parse(JSON.stringify(w.defs));const A=document.createElement("div");A.className="tc-entity-group";const L=document.createElement("div");L.className="tc-entity-header tc-open",L.innerHTML=`<span class="tc-entity-arrow">▶</span><span class="tc-entity-name">${w.title}</span>`,L.addEventListener("click",()=>L.classList.toggle("tc-open")),A.appendChild(L);const b=document.createElement("div");b.className="tc-entity-content";let y=null;for(const P of w.sl){if(P.s){y=document.createElement("div"),y.className="tc-group",y.innerHTML=`<div class="tc-group-title">${P.s}</div>`,b.appendChild(y);continue}const z=P.k,O=P.l||z,V=P.mn,Y=P.mx,G=P.st,K=Qt[z]??w.defs[z],H=/color|background|tint|hue/i.test(z)&&typeof K=="number"&&K>4095,st=document.createElement("div");if(st.className="tc-row",H){const ct="#"+(K&16777215).toString(16).padStart(6,"0");st.innerHTML=`
          <span class="tc-label" title="${z}">${O}</span>
          <input type="color" class="tc-color" value="${ct}">
          <span class="tc-value">${ct}</span>
        `;const _t=st.querySelector(".tc-color"),Ut=st.querySelector(".tc-value");_t.addEventListener("input",()=>{const Wt=parseInt(_t.value.slice(1),16);Ut.textContent=_t.value,S(z,Wt,!1)})}else{st.innerHTML=`
          <span class="tc-label" title="${z}">${O}</span>
          <input type="range" class="tc-slider" min="${V}" max="${Y}" step="${G}" value="${K}">
          <span class="tc-value">${_(K,G)}</span>
        `;const ct=st.querySelector(".tc-slider"),_t=st.querySelector(".tc-value"),Ut=G;ct.addEventListener("input",()=>{const Wt=parseFloat(ct.value);_t.textContent=_(Wt,Ut),S(z,Wt,!1)}),ct.addEventListener("change",()=>{const Wt=parseFloat(ct.value);S(z,Wt,!0)})}(y||b).appendChild(st)}if(!w.isCanvas){const P=document.createElement("div");P.className="tc-group",P.innerHTML='<div class="tc-group-title">📷 相机</div>';const z=p("FOV",10,150,1,Fe.fov,V=>{Fe.fov=V,Fe.updateProjectionMatrix()});P.appendChild(z);const O=p("Z 距离",-500,500,1,Fe.position.z,V=>{Fe.position.z=V});P.appendChild(O),b.appendChild(P)}A.appendChild(b),r.appendChild(A)}function p(C,w,A,L,b,y){const P=document.createElement("div");P.className="tc-row",P.innerHTML=`
      <span class="tc-label">${C}</span>
      <input type="range" class="tc-slider" min="${w}" max="${A}" step="${L}" value="${b}">
      <span class="tc-value">${_(b,L)}</span>
    `;const z=P.querySelector(".tc-slider"),O=P.querySelector(".tc-value");return z.addEventListener("input",()=>{const V=parseFloat(z.value);O.textContent=_(V,L),y(V)}),P}function S(C,w,A){const L=et,b=Ze[ie];if(!(!L||!b)){if(Qt[C]=w,b.isVanta&&L._uniforms){const y=L._uniforms;if(y[C])if(/color|background|tint|hue/i.test(C)&&typeof w=="number"){const P=new ut(w);y[C].value.set(P.r,P.g,P.b)}else y[C].value=w;L._params&&(L._params[C]=w);return}if(b.is3DVanta&&L.options){L.options[C]=w;return}if(b.isCanvas&&L._params){L._params[C]=w;return}L._params&&(L._params[C]=w),L.options&&(L.options[C]=w),L._mesh&&x(L._mesh,C,w),L._group&&L._group.traverse(y=>{y.isMesh&&y.material&&y.material.uniforms&&x(y,C,w)}),A&&(Ri(ie,Qt),setTimeout(()=>m(ie),50))}}function x(C,w,A){if(!C.material)return;const L=Array.isArray(C.material)?C.material:[C.material];for(const b of L){if(!b.uniforms)continue;if(b.uniforms[w])if(/color/i.test(w)&&typeof A=="number"){const P=new ut(A);b.uniforms[w].value&&b.uniforms[w].value.isVector3?b.uniforms[w].value.set(P.r,P.g,P.b):b.uniforms[w].value=P}else typeof A=="number"&&(b.uniforms[w].value=A);const y="u"+w.charAt(0).toUpperCase()+w.slice(1);b.uniforms[y]&&typeof A=="number"&&(b.uniforms[y].value=A)}}o.addEventListener("click",()=>{const C={mode:ie,params:{...Qt}};navigator.clipboard.writeText(JSON.stringify(C,null,2)).then(()=>{g("✅ 参数已复制到剪贴板")})}),c.addEventListener("click",()=>{const C={mode:ie,params:{...Qt}};navigator.clipboard.writeText(JSON.stringify(C,null,2)).then(()=>{g("📋 JSON 已复制")})}),a.addEventListener("click",()=>{!d||!Ze[d]||(Qt={...Ze[d].defs},Ri(ie,Qt),Wl(ie),setTimeout(()=>m(ie),50),g("↩ 已重置为默认值"))}),l.addEventListener("click",()=>{const C={mode:ie,params:{...Qt}};localStorage.setItem("tc-3d-saved-"+ie,JSON.stringify(C)),g("💾 已保存到本地")});const v=window.appSwitch;window.appSwitch=function(C){v(C);const w=localStorage.getItem("tc-3d-saved-"+C);if(w)try{const{params:A}=JSON.parse(w)}catch{}setTimeout(()=>m(C),80)},setTimeout(()=>m(ie),200)})();

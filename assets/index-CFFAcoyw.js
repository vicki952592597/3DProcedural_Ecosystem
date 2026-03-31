var Zu=Object.defineProperty;var $u=(s,t,e)=>t in s?Zu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Fs=(s,t,e)=>$u(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="170",is={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ju=0,sc=1,Qu=2,Gh=1,Wh=2,zn=3,yn=0,Je=1,Pe=2,Zn=0,ss=1,po=2,rc=3,oc=4,td=5,wi=100,ed=101,nd=102,id=103,sd=104,rd=200,od=201,ad=202,ld=203,Ma=204,Sa=205,cd=206,hd=207,ud=208,dd=209,fd=210,pd=211,md=212,gd=213,_d=214,ba=0,wa=1,Ta=2,us=3,Ea=4,Aa=5,Ra=6,Ca=7,So=0,vd=1,xd=2,En=0,yd=1,Md=2,Sd=3,Xh=4,bd=5,wd=6,Td=7,ac="attached",Ed="detached",qh=300,ds=301,fs=302,Pa=303,Da=304,bo=306,wn=1e3,hn=1001,mo=1002,De=1003,Yh=1004,qs=1005,Me=1006,ro=1007,Tn=1008,Qn=1009,jh=1010,Kh=1011,nr=1012,yl=1013,Ci=1014,Le=1015,sn=1016,Ml=1017,Sl=1018,ps=1020,Zh=35902,$h=1021,Jh=1022,ze=1023,Qh=1024,tu=1025,rs=1026,ms=1027,bl=1028,wl=1029,eu=1030,Tl=1031,El=1033,oo=33776,ao=33777,lo=33778,co=33779,La=35840,Ia=35841,Ua=35842,Na=35843,Fa=36196,Oa=37492,Ba=37496,za=37808,ka=37809,Va=37810,Ha=37811,Ga=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,ja=37817,Ka=37818,Za=37819,$a=37820,Ja=37821,ho=36492,Qa=36494,tl=36495,nu=36283,el=36284,nl=36285,il=36286,ir=2300,sr=2301,Po=2302,lc=2400,cc=2401,hc=2402,Ad=2500,Rd=0,iu=1,sl=2,Cd=3200,Pd=3201,wo=0,Dd=1,ui="",Ee="srgb",Xe="srgb-linear",To="linear",ce="srgb",Bi=7680,uc=519,Ld=512,Id=513,Ud=514,su=515,Nd=516,Fd=517,Od=518,Bd=519,rl=35044,pi=35048,ol="300 es",Xn=2e3,go=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dc=1234567;const os=Math.PI/180,gs=180/Math.PI;function un(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ae(s,t,e){return Math.max(t,Math.min(e,s))}function Al(s,t){return(s%t+t)%t}function zd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function kd(s,t,e){return s!==t?(e-s)/(t-s):0}function Ks(s,t,e){return(1-e)*s+e*t}function Vd(s,t,e,n){return Ks(s,t,1-Math.exp(-e*n))}function Hd(s,t=1){return t-Math.abs(Al(s,t*2)-t)}function Gd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Wd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Xd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function qd(s,t){return s+Math.random()*(t-s)}function Yd(s){return s*(.5-Math.random())}function jd(s){s!==void 0&&(dc=s);let t=dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kd(s){return s*os}function Zd(s){return s*gs}function $d(s){return(s&s-1)===0&&s!==0}function Jd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tf(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const _s={DEG2RAD:os,RAD2DEG:gs,generateUUID:un,clamp:Ae,euclideanModulo:Al,mapLinear:zd,inverseLerp:kd,lerp:Ks,damp:Vd,pingpong:Hd,smoothstep:Gd,smootherstep:Wd,randInt:Xd,randFloat:qd,randFloatSpread:Yd,seededRandom:jd,degToRad:Kd,radToDeg:Zd,isPowerOfTwo:$d,ceilPowerOfTwo:Jd,floorPowerOfTwo:Qd,setQuaternionFromProperEuler:tf,normalize:ae,denormalize:xn};class Z{constructor(t=0,e=0){Z.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,r,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],x=i[4],v=i[7],C=i[2],T=i[5],E=i[8];return r[0]=o*_+a*b+l*C,r[3]=o*m+a*x+l*T,r[6]=o*p+a*v+l*E,r[1]=c*_+u*b+h*C,r[4]=c*m+u*x+h*T,r[7]=c*p+u*v+h*E,r[2]=d*_+f*b+g*C,r[5]=d*m+f*x+g*T,r[8]=d*p+f*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Do.makeScale(t,e)),this}rotate(t){return this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new Ht;function ru(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ef(){const s=rr("canvas");return s.style.display="block",s}const fc={};function Ys(s){s in fc||(fc[s]=!0,console.warn(s))}function nf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sf(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rf(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:Xe,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?To:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function as(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const pc=[.64,.33,.3,.6,.15,.06],mc=[.2126,.7152,.0722],gc=[.3127,.329],_c=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[Xe]:{primaries:pc,whitePoint:gc,transfer:To,toXYZ:_c,fromXYZ:vc,luminanceCoefficients:mc,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:pc,whitePoint:gc,transfer:ce,toXYZ:_c,fromXYZ:vc,luminanceCoefficients:mc,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});let zi;class of{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=rr("canvas")),zi.width=t.width,zi.height=t.height;const n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let af=0;class ou{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=un(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Lo(i[o].image)):r.push(Lo(i[o]))}else r=Lo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Lo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?of.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lf=0;class Ie extends Ii{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=hn,i=hn,r=Me,o=Tn,a=ze,l=Qn,c=Ie.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=un(),this.name="",this.source=new ou(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wn:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wn:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=qh;Ie.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(f+1)/2,C=(p+1)/2,T=(u+d)/4,E=(h+_)/4,A=(g+m)/4;return x>v&&x>C?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=E/n):v>C?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=A/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=E/r,i=A/r),this.set(n,i,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cf extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Me,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ou(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ke extends cf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class au extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hf extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,p*b);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const v=a*b;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-a*f,t[e+2]=c*g+u*f+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Io.copy(this).projectOnVector(t),this.sub(Io)}reflect(t){return this.sub(Io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Io=new P,xc=new An;class ti{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(t.matrixWorld),this.union(Sr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),br.subVectors(this.max,Os),ki.subVectors(t.a,Os),Vi.subVectors(t.b,Os),Hi.subVectors(t.c,Os),ii.subVectors(Vi,ki),si.subVectors(Hi,Vi),gi.subVectors(ki,Hi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-gi.z,gi.y,ii.z,0,-ii.x,si.z,0,-si.x,gi.z,0,-gi.x,-ii.y,ii.x,0,-si.y,si.x,0,-gi.y,gi.x,0];return!Uo(e,ki,Vi,Hi,br)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,ki,Vi,Hi,br))?!1:(wr.crossVectors(ii,si),e=[wr.x,wr.y,wr.z],Uo(e,ki,Vi,Hi,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new P,new P,new P,new P,new P,new P,new P,new P],gn=new P,Sr=new ti,ki=new P,Vi=new P,Hi=new P,ii=new P,si=new P,gi=new P,Os=new P,br=new P,wr=new P,_i=new P;function Uo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){_i.fromArray(s,r);const a=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uf=new ti,Bs=new P,No=new P;class Rn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):uf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(No)),this.expandByPoint(Bs.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new P,Fo=new P,Tr=new P,ri=new P,Oo=new P,Er=new P,Bo=new P;class fr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fo.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Fo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Tr),a=ri.dot(this.direction),l=-ri.dot(Tr),c=ri.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Fo).addScaledVector(Tr,d),f}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,i,r){Oo.subVectors(e,t),Er.subVectors(n,t),Bo.crossVectors(Oo,Er);let o=this.direction.dot(Bo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);const l=a*this.direction.dot(Er.crossVectors(ri,Er));if(l<0)return null;const c=a*this.direction.dot(Oo.cross(ri));if(c<0||l+c>o)return null;const u=-a*ri.dot(Bo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(t,e,n,i,r,o,a,l,c,u,h,d,f,g,_,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,u,h,d,f,g,_,m)}set(t,e,n,i,r,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(df,t,ff)}lookAt(t,e,n){const i=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),oi.crossVectors(n,en),oi.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),oi.crossVectors(n,en)),oi.normalize(),Ar.crossVectors(en,oi),i[0]=oi.x,i[4]=Ar.x,i[8]=en.x,i[1]=oi.y,i[5]=Ar.y,i[9]=en.y,i[2]=oi.z,i[6]=Ar.z,i[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],x=n[7],v=n[11],C=n[15],T=i[0],E=i[4],A=i[8],M=i[12],y=i[1],D=i[5],O=i[9],F=i[13],B=i[2],G=i[6],z=i[10],K=i[14],W=i[3],nt=i[7],st=i[11],pt=i[15];return r[0]=o*T+a*y+l*B+c*W,r[4]=o*E+a*D+l*G+c*nt,r[8]=o*A+a*O+l*z+c*st,r[12]=o*M+a*F+l*K+c*pt,r[1]=u*T+h*y+d*B+f*W,r[5]=u*E+h*D+d*G+f*nt,r[9]=u*A+h*O+d*z+f*st,r[13]=u*M+h*F+d*K+f*pt,r[2]=g*T+_*y+m*B+p*W,r[6]=g*E+_*D+m*G+p*nt,r[10]=g*A+_*O+m*z+p*st,r[14]=g*M+_*F+m*K+p*pt,r[3]=b*T+x*y+v*B+C*W,r[7]=b*E+x*D+v*G+C*nt,r[11]=b*A+x*O+v*z+C*st,r[15]=b*M+x*F+v*K+C*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+m*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,x=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,C=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,T=e*b+n*x+i*v+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=b*E,t[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*E,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*E,t[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*E,t[4]=x*E,t[5]=(u*m*r-g*d*r+g*i*f-e*m*f-u*i*p+e*d*p)*E,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*E,t[7]=(o*d*r-u*l*r+u*i*c-e*d*c-o*i*f+e*l*f)*E,t[8]=v*E,t[9]=(g*h*r-u*_*r-g*n*f+e*_*f+u*n*p-e*h*p)*E,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*E,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*f-e*a*f)*E,t[12]=C*E,t[13]=(u*_*i-g*h*i+g*n*d-e*_*d-u*n*m+e*h*m)*E,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*E,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,b=l*c,x=l*u,v=l*h,C=n.x,T=n.y,E=n.z;return i[0]=(1-(_+p))*C,i[1]=(f+v)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(d+p))*T,i[6]=(m+b)*T,i[7]=0,i[8]=(g+x)*E,i[9]=(m-b)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Gi.set(i[0],i[1],i[2]).length();const o=Gi.set(i[4],i[5],i[6]).length(),a=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],_n.copy(this);const c=1/r,u=1/o,h=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,e.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Xn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===Xn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===go)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Xn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-r),d=(e+t)*c,f=(n+i)*u;let g,_;if(a===Xn)g=(o+r)*h,_=-2*h;else if(a===go)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gi=new P,_n=new zt,df=new P(0,0,0),ff=new P(1,1,1),oi=new P,Ar=new P,en=new P,yc=new zt,Mc=new An;class Qe{constructor(t=0,e=0,n=0,i=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class lu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pf=0;const Sc=new P,Wi=new An,Nn=new zt,Rr=new P,zs=new P,mf=new P,gf=new An,bc=new P(1,0,0),wc=new P(0,1,0),Tc=new P(0,0,1),Ec={type:"added"},_f={type:"removed"},Xi={type:"childadded",child:null},zo={type:"childremoved",child:null};class ie extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ie.DEFAULT_UP.clone();const t=new P,e=new Qe,n=new An,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new Ht}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(wc,t)}rotateZ(t){return this.rotateOnAxis(Tc,t)}translateOnAxis(t,e){return Sc.copy(t).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(wc,t)}translateZ(t){return this.translateOnAxis(Tc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rr.copy(t):Rr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(zs,Rr,this.up):Nn.lookAt(Rr,zs,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_f),zo.child=t,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ie.DEFAULT_UP=new P(0,1,0);ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new P,Fn=new P,ko=new P,On=new P,qi=new P,Yi=new P,Ac=new P,Vo=new P,Ho=new P,Go=new P,Wo=new ee,Xo=new ee,qo=new ee;class cn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){vn.subVectors(i,e),Fn.subVectors(n,e),ko.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Fn),l=vn.dot(ko),c=Fn.dot(Fn),u=Fn.dot(ko),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,n),qo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Wo,r.x),o.addScaledVector(Xo,r.y),o.addScaledVector(qo,r.z),o}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Fn.subVectors(t,e),vn.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),vn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;qi.subVectors(i,n),Yi.subVectors(r,n),Vo.subVectors(t,n);const l=qi.dot(Vo),c=Yi.dot(Vo);if(l<=0&&c<=0)return e.copy(n);Ho.subVectors(t,i);const u=qi.dot(Ho),h=Yi.dot(Ho);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(qi,o);Go.subVectors(t,r);const f=qi.dot(Go),g=Yi.dot(Go);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Yi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ac.subVectors(r,i),a=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(Ac,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Yo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=Al(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Yo(o,r,t+1/3),this.g=Yo(o,r,t),this.b=Yo(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Kt.fromWorkingColorSpace(We.copy(this),t),Math.round(Ae(We.r*255,0,255))*65536+Math.round(Ae(We.g*255,0,255))*256+Math.round(Ae(We.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(We.copy(this),e);const n=We.r,i=We.g,r=We.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Ee){Kt.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,i=We.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Cr);const n=Ks(ai.h,Cr.h,e),i=Ks(ai.s,Cr.s,e),r=Ks(ai.l,Cr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new ut;ut.NAMES=cu;let vf=0;class dn extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=un(),this.name="",this.blending=ss,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Sa,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qn extends dn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Gn=xf();function xf(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function yf(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ae(s,-65504,65504),Gn.floatView[0]=s;const t=Gn.uint32View[0],e=t>>23&511;return Gn.baseTable[e]+((t&8388607)>>Gn.shiftTable[e])}function Mf(s){const t=s>>10;return Gn.uint32View[0]=Gn.mantissaTable[Gn.offsetTable[t]+(s&1023)]+Gn.exponentTable[t],Gn.floatView[0]}const Pr={toHalfFloat:yf,fromHalfFloat:Mf},Te=new P,Dr=new Z;class pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=Le,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rl&&(t.usage=this.usage),t}}class hu extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uu extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sf=0;const on=new zt,jo=new ie,ji=new P,nn=new ti,ks=new ti,Fe=new P;class ue extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?uu:hu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return jo.lookAt(t),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(nn.min,ks.min),nn.expandByPoint(Fe),Fe.addVectors(nn.max,ks.max),nn.expandByPoint(Fe)):(nn.expandByPoint(ks.min),nn.expandByPoint(ks.max))}nn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Fe.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(t,c),Fe.add(ji)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new P,l[A]=new P;const c=new P,u=new P,h=new P,d=new Z,f=new Z,g=new Z,_=new P,m=new P;function p(A,M,y){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[A].add(_),a[M].add(_),a[y].add(_),l[A].add(m),l[M].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,M=b.length;A<M;++A){const y=b[A],D=y.start,O=y.count;for(let F=D,B=D+O;F<B;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new P,v=new P,C=new P,T=new P;function E(A){C.fromBufferAttribute(i,A),T.copy(C);const M=a[A];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(T,M);const D=v.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,D)}for(let A=0,M=b.length;A<M;++A){const y=b[A],D=y.start,O=y.count;for(let F=D,B=D+O;F<B;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new pe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ue,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rc=new zt,vi=new fr,Lr=new Rn,Cc=new P,Ir=new P,Ur=new P,Nr=new P,Ko=new P,Fr=new P,Pc=new P,Or=new P;class ne extends ie{constructor(t=new ue,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ko.fromBufferAttribute(h,t),o?Fr.addScaledVector(Ko,u):Fr.addScaledVector(Ko.sub(e),u))}e.add(Fr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(Lr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Lr,Cc)===null||vi.origin.distanceToSquared(Cc)>(t.far-t.near)**2))&&(Rc.copy(r).invert(),vi.copy(t.ray).applyMatrix4(Rc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,C=x;v<C;v+=3){const T=a.getX(v),E=a.getX(v+1),A=a.getX(v+2);i=Br(this,p,t,n,c,u,h,T,E,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=Br(this,o,t,n,c,u,h,b,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,C=x;v<C;v+=3){const T=v,E=v+1,A=v+2;i=Br(this,p,t,n,c,u,h,T,E,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,x=m+1,v=m+2;i=Br(this,o,t,n,c,u,h,b,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function bf(s,t,e,n,i,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===yn,a),l===null)return null;Or.copy(a),Or.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Or);return c<e.near||c>e.far?null:{distance:c,point:Or.clone(),object:s}}function Br(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ir),s.getVertexPosition(l,Ur),s.getVertexPosition(c,Nr);const u=bf(s,t,e,n,Ir,Ur,Nr,Pc);if(u){const h=new P;cn.getBarycoord(Pc,Ir,Ur,Nr,h),i&&(u.uv=cn.getInterpolatedAttribute(i,a,l,c,h,new Z)),r&&(u.uv1=cn.getInterpolatedAttribute(r,a,l,c,h,new Z)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};cn.getNormal(Ir,Ur,Nr,d.normal),u.face=d,u.barycoord=h}return u}class pr extends ue{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(h,2));function g(_,m,p,b,x,v,C,T,E,A,M){const y=v/E,D=C/A,O=v/2,F=C/2,B=T/2,G=E+1,z=A+1;let K=0,W=0;const nt=new P;for(let st=0;st<z;st++){const pt=st*D-F;for(let Ct=0;Ct<G;Ct++){const Ut=Ct*y-O;nt[_]=Ut*b,nt[m]=pt*x,nt[p]=B,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=T>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Ct/E),h.push(1-st/A),K+=1}}for(let st=0;st<A;st++)for(let pt=0;pt<E;pt++){const Ct=d+pt+G*st,Ut=d+pt+G*(st+1),q=d+(pt+1)+G*(st+1),ot=d+(pt+1)+G*st;l.push(Ct,Ut,ot),l.push(Ut,q,ot),W+=6}a.addGroup(f,W,M),f+=W,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(s){const t={};for(let e=0;e<s.length;e++){const n=vs(s[e]);for(const i in n)t[i]=n[i]}return t}function wf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function du(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const _o={clone:vs,merge:Ye};var Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ge extends dn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rl extends ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new P,Dc=new Z,Lc=new Z;class ye extends Rl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Dc,Lc),e.subVectors(Lc,Dc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(os*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,Zi=1;class Af extends ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ye(Ki,Zi,t,e);i.layers=this.layers,this.add(i);const r=new ye(Ki,Zi,t,e);r.layers=this.layers,this.add(r);const o=new ye(Ki,Zi,t,e);o.layers=this.layers,this.add(o);const a=new ye(Ki,Zi,t,e);a.layers=this.layers,this.add(a);const l=new ye(Ki,Zi,t,e);l.layers=this.layers,this.add(l);const c=new ye(Ki,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fu extends Ie{constructor(t,e,n,i,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rf extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Me}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pr(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Zn});r.uniforms.tEquirect.value=e;const o=new ne(i,r),a=e.minFilter;return e.minFilter===Tn&&(e.minFilter=Me),new Af(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Zo=new P,Cf=new P,Pf=new Ht;class hi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Zo.subVectors(n,e).cross(Cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pf.getNormalMatrix(t),i=this.coplanarPoint(Zo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Rn,zr=new P;class Cl{constructor(t=new hi,e=new hi,n=new hi,i=new hi,r=new hi,o=new hi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],b=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+u,m+g,v+b).normalize(),n[3].setComponents(l-o,d-u,m-g,v-b).normalize(),n[4].setComponents(l-a,d-h,m-_,v-x).normalize(),e===Xn)n[5].setComponents(l+a,d+h,m+_,v+x).normalize();else if(e===go)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zr.x=i.normal.x>0?t.max.x:t.min.x,zr.y=i.normal.y>0?t.max.y:t.min.y,zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Df(s){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class fn extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*d-o;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-b,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const x=b+c*p,v=b+c*(p+1),C=b+1+c*(p+1),T=b+1+c*p;f.push(x,v,T),f.push(v,C,T)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,If=`#ifdef USE_ALPHAHASH
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
#endif`,Uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bf=`#ifdef USE_AOMAP
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
#endif`,zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kf=`#ifdef USE_BATCHING
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
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xf=`#ifdef USE_IRIDESCENCE
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
#endif`,qf=`#ifdef USE_BUMPMAP
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ep=`#define PI 3.141592653589793
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
} // validated`,np=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ip=`vec3 transformedNormal = objectNormal;
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
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
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
}`,yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
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
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
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
#endif`,Pp=`struct PhysicalMaterial {
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
}`,Dp=`
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vp=`#if defined( USE_POINTS_UV )
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
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
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
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gm=`float getShadowMask() {
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
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
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
}`,Bm=`#if DEPTH_PACKING == 3200
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
}`,zm=`#define DISTANCE
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
}`,km=`#define DISTANCE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,Km=`#define MATCAP
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
}`,Zm=`#define MATCAP
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
}`,$m=`#define NORMAL
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
}`,Jm=`#define NORMAL
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
}`,Qm=`#define PHONG
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
}`,t0=`#define PHONG
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
}`,e0=`#define STANDARD
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
}`,n0=`#define STANDARD
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
}`,i0=`#define TOON
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
}`,s0=`#define TOON
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
}`,r0=`uniform float size;
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
}`,o0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,l0=`uniform vec3 color;
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
}`,c0=`uniform float rotation;
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
}`,h0=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Lf,alphahash_pars_fragment:If,alphamap_fragment:Uf,alphamap_pars_fragment:Nf,alphatest_fragment:Ff,alphatest_pars_fragment:Of,aomap_fragment:Bf,aomap_pars_fragment:zf,batching_pars_vertex:kf,batching_vertex:Vf,begin_vertex:Hf,beginnormal_vertex:Gf,bsdfs:Wf,iridescence_fragment:Xf,bumpmap_pars_fragment:qf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:Zf,color_fragment:$f,color_pars_fragment:Jf,color_pars_vertex:Qf,color_vertex:tp,common:ep,cube_uv_reflection_fragment:np,defaultnormal_vertex:ip,displacementmap_pars_vertex:sp,displacementmap_vertex:rp,emissivemap_fragment:op,emissivemap_pars_fragment:ap,colorspace_fragment:lp,colorspace_pars_fragment:cp,envmap_fragment:hp,envmap_common_pars_fragment:up,envmap_pars_fragment:dp,envmap_pars_vertex:fp,envmap_physical_pars_fragment:wp,envmap_vertex:pp,fog_vertex:mp,fog_pars_vertex:gp,fog_fragment:_p,fog_pars_fragment:vp,gradientmap_pars_fragment:xp,lightmap_pars_fragment:yp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:Sp,lights_pars_begin:bp,lights_toon_fragment:Tp,lights_toon_pars_fragment:Ep,lights_phong_fragment:Ap,lights_phong_pars_fragment:Rp,lights_physical_fragment:Cp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Dp,lights_fragment_maps:Lp,lights_fragment_end:Ip,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Fp,logdepthbuf_vertex:Op,map_fragment:Bp,map_pars_fragment:zp,map_particle_fragment:kp,map_particle_pars_fragment:Vp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Wp,morphcolor_vertex:Xp,morphnormal_vertex:qp,morphtarget_pars_vertex:Yp,morphtarget_vertex:jp,normal_fragment_begin:Kp,normal_fragment_maps:Zp,normal_pars_fragment:$p,normal_pars_vertex:Jp,normal_vertex:Qp,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:nm,clearcoat_pars_fragment:im,iridescence_pars_fragment:sm,opaque_fragment:rm,packing:om,premultiplied_alpha_fragment:am,project_vertex:lm,dithering_fragment:cm,dithering_pars_fragment:hm,roughnessmap_fragment:um,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:pm,shadowmap_vertex:mm,shadowmask_pars_fragment:gm,skinbase_vertex:_m,skinning_pars_vertex:vm,skinning_vertex:xm,skinnormal_vertex:ym,specularmap_fragment:Mm,specularmap_pars_fragment:Sm,tonemapping_fragment:bm,tonemapping_pars_fragment:wm,transmission_fragment:Tm,transmission_pars_fragment:Em,uv_pars_fragment:Am,uv_pars_vertex:Rm,uv_vertex:Cm,worldpos_vertex:Pm,background_vert:Dm,background_frag:Lm,backgroundCube_vert:Im,backgroundCube_frag:Um,cube_vert:Nm,cube_frag:Fm,depth_vert:Om,depth_frag:Bm,distanceRGBA_vert:zm,distanceRGBA_frag:km,equirect_vert:Vm,equirect_frag:Hm,linedashed_vert:Gm,linedashed_frag:Wm,meshbasic_vert:Xm,meshbasic_frag:qm,meshlambert_vert:Ym,meshlambert_frag:jm,meshmatcap_vert:Km,meshmatcap_frag:Zm,meshnormal_vert:$m,meshnormal_frag:Jm,meshphong_vert:Qm,meshphong_frag:t0,meshphysical_vert:e0,meshphysical_frag:n0,meshtoon_vert:i0,meshtoon_frag:s0,points_vert:r0,points_frag:o0,shadow_vert:a0,shadow_frag:l0,sprite_vert:c0,sprite_frag:h0},ht={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},bn={basic:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ut(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ye([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ye([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new ut(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ye([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ye([ht.points,ht.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ye([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ye([ht.common,ht.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ye([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ye([ht.sprite,ht.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ye([ht.common,ht.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ye([ht.lights,ht.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};bn.physical={uniforms:Ye([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const kr={r:0,b:0,g:0},yi=new Qe,u0=new zt;function d0(s,t,e,n,i,r,o){const a=new ut(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function _(b){let x=!1;const v=g(b);v===null?p(a,l):v&&v.isColor&&(p(v,1),x=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===bo)?(u===void 0&&(u=new ne(new pr(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:vs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),yi.copy(x.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(u0.makeRotationFromEuler(yi)),u.material.toneMapped=Kt.getTransfer(v.colorSpace)!==ce,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ne(new fn(2,2),new ge({name:"BackgroundMaterial",uniforms:vs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(kr,du(s)),n.buffers.color.setClear(kr.r,kr.g,kr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m}}function f0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(y,D,O,F,B){let G=!1;const z=h(F,O,D);r!==z&&(r=z,c(r.object)),G=f(y,F,O,B),G&&g(y,F,O,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(y,D,O,F),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,D,O){const F=O.wireframe===!0;let B=n[y.id];B===void 0&&(B={},n[y.id]=B);let G=B[D.id];G===void 0&&(G={},B[D.id]=G);let z=G[F];return z===void 0&&(z=d(l()),G[F]=z),z}function d(y){const D=[],O=[],F=[];for(let B=0;B<e;B++)D[B]=0,O[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,D,O,F){const B=r.attributes,G=D.attributes;let z=0;const K=O.getAttributes();for(const W in K)if(K[W].location>=0){const st=B[W];let pt=G[W];if(pt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor)),st===void 0||st.attribute!==pt||pt&&st.data!==pt.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function g(y,D,O,F){const B={},G=D.attributes;let z=0;const K=O.getAttributes();for(const W in K)if(K[W].location>=0){let st=G[W];st===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(st=y.instanceColor));const pt={};pt.attribute=st,st&&st.data&&(pt.data=st.data),B[W]=pt,z++}r.attributes=B,r.attributesNum=z,r.index=F}function _(){const y=r.newAttributes;for(let D=0,O=y.length;D<O;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){const O=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;O[y]=1,F[y]===0&&(s.enableVertexAttribArray(y),F[y]=1),B[y]!==D&&(s.vertexAttribDivisor(y,D),B[y]=D)}function b(){const y=r.newAttributes,D=r.enabledAttributes;for(let O=0,F=D.length;O<F;O++)D[O]!==y[O]&&(s.disableVertexAttribArray(O),D[O]=0)}function x(y,D,O,F,B,G,z){z===!0?s.vertexAttribIPointer(y,D,O,B,G):s.vertexAttribPointer(y,D,O,F,B,G)}function v(y,D,O,F){_();const B=F.attributes,G=O.getAttributes(),z=D.defaultAttributeValues;for(const K in G){const W=G[K];if(W.location>=0){let nt=B[K];if(nt===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const st=nt.normalized,pt=nt.itemSize,Ct=t.get(nt);if(Ct===void 0)continue;const Ut=Ct.buffer,q=Ct.type,ot=Ct.bytesPerElement,bt=q===s.INT||q===s.UNSIGNED_INT||nt.gpuType===yl;if(nt.isInterleavedBufferAttribute){const lt=nt.data,Dt=lt.stride,Ot=nt.offset;if(lt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<W.locationSize;Nt++)p(W.location+Nt,lt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Nt=0;Nt<W.locationSize;Nt++)m(W.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let Nt=0;Nt<W.locationSize;Nt++)x(W.location+Nt,pt/W.locationSize,q,st,Dt*ot,(Ot+pt/W.locationSize*Nt)*ot,bt)}else{if(nt.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)p(W.location+lt,nt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let lt=0;lt<W.locationSize;lt++)m(W.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let lt=0;lt<W.locationSize;lt++)x(W.location+lt,pt/W.locationSize,q,st,pt*ot,pt/W.locationSize*lt*ot,bt)}}else if(z!==void 0){const st=z[K];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(W.location,st);break;case 3:s.vertexAttrib3fv(W.location,st);break;case 4:s.vertexAttrib4fv(W.location,st);break;default:s.vertexAttrib1fv(W.location,st)}}}}b()}function C(){A();for(const y in n){const D=n[y];for(const O in D){const F=D[O];for(const B in F)u(F[B].object),delete F[B];delete D[O]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const O in D){const F=D[O];for(const B in F)u(F[B].object),delete F[B];delete D[O]}delete n[y.id]}function E(y){for(const D in n){const O=n[D];if(O[y.id]===void 0)continue;const F=O[y.id];for(const B in F)u(F[B].object),delete F[B];delete O[y.id]}}function A(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function p0(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function m0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==ze&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Qn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Le&&!A)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:C,maxSamples:T}}function g0(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new hi,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,x=b*4;let v=p.clippingState||null;l.value=v,v=u(g,d,x,f);for(let C=0;C!==x;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function _0(s){let t=new WeakMap;function e(o,a){return a===Pa?o.mapping=ds:a===Da&&(o.mapping=fs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pa||a===Da)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rf(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class xs extends Rl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const es=4,Ic=[.125,.215,.35,.446,.526,.582],Ti=20,$o=new xs,Uc=new ut;let Jo=null,Qo=0,ta=0,ea=!1;const bi=(1+Math.sqrt(5))/2,$i=1/bi,Nc=[new P(-bi,$i,0),new P(bi,$i,0),new P(-$i,0,bi),new P($i,0,bi),new P(0,bi,-$i),new P(0,bi,$i),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class al{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jo,Qo,ta),this._renderer.xr.enabled=ea,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Me,minFilter:Me,generateMipmaps:!1,type:sn,format:ze,colorSpace:Xe,depthBuffer:!1},i=Fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v0(r)),this._blurMaterial=x0(r,t,e)}return i}_compileMaterial(t){const e=new ne(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,i){const a=new ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Uc),u.toneMapping=En,u.autoClear=!1;const f=new qn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new ne(new pr,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Uc),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Vr(i,b*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ds||t.mapping===fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nc[(i-r-1)%Nc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ne(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let b=0;for(let E=0;E<Ti;++E){const A=E/_,M=Math.exp(-A*A/2);p.push(M),E===0?b+=M:E<m&&(b+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],C=3*v*(i>x-es?i-x+es:0),T=4*(this._cubeSize-v);Vr(e,C,T,3*v,2*v),l.setRenderTarget(e),l.render(h,$o)}}function v0(s){const t=[],e=[],n=[];let i=s;const r=s-es+1+Ic.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-es?l=Ic[o-s+es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,A=T>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];b.set(M,_*g*T),x.set(d,m*g*T);const y=[T,T,T,T,T,T];v.set(y,p*g*T)}const C=new ue;C.setAttribute("position",new pe(b,_)),C.setAttribute("uv",new pe(x,m)),C.setAttribute("faceIndex",new pe(v,p)),t.push(C),i>es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fc(s,t,e){const n=new ke(s,t,e);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function x0(s,t,e){const n=new Float32Array(Ti),i=new P(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Oc(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Bc(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Pl(){return`

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
	`}function y0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pa||l===Da,u=l===ds||l===fs;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new al(s)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new al(s)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function M0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function S0(s,t,e,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let x=0,v=b.length;x<v;x+=3){const C=b[x+0],T=b[x+1],E=b[x+2];d.push(C,T,T,E,E,C)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const C=x+0,T=x+1,E=x+2;d.push(C,T,T,E,E,C)}}else return;const m=new(ru(d)?uu:hu)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function b0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function w0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function T0(s,t,e){const n=new WeakMap,i=new ee;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const E=new Float32Array(C*T*4*h),A=new au(E,C,T,h);A.type=Le,A.needsUpdate=!0;const M=v*4;for(let D=0;D<h;D++){const O=p[D],F=b[D],B=x[D],G=C*T*4*D;for(let z=0;z<O.count;z++){const K=z*M;g===!0&&(i.fromBufferAttribute(O,z),E[G+K+0]=i.x,E[G+K+1]=i.y,E[G+K+2]=i.z,E[G+K+3]=0),_===!0&&(i.fromBufferAttribute(F,z),E[G+K+4]=i.x,E[G+K+5]=i.y,E[G+K+6]=i.z,E[G+K+7]=0),m===!0&&(i.fromBufferAttribute(B,z),E[G+K+8]=i.x,E[G+K+9]=i.y,E[G+K+10]=i.z,E[G+K+11]=B.itemSize===4?i.w:1)}}d={count:h,texture:A,size:new Z(C,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function E0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class mu extends Ie{constructor(t,e,n,i,r,o,a,l,c,u=rs){if(u!==rs&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===rs&&(n=Ci),n===void 0&&u===ms&&(n=ps),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gu=new Ie,zc=new mu(1,1),_u=new au,vu=new hf,xu=new fu,kc=[],Vc=[],Hc=new Float32Array(16),Gc=new Float32Array(9),Wc=new Float32Array(4);function As(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=kc[i];if(r===void 0&&(r=new Float32Array(i),kc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Eo(s,t){let e=Vc[t];e===void 0&&(e=new Int32Array(t),Vc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function A0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function R0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function C0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function P0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function D0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Wc.set(n),s.uniformMatrix2fv(this.addr,!1,Wc),Ne(e,n)}}function L0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Gc.set(n),s.uniformMatrix3fv(this.addr,!1,Gc),Ne(e,n)}}function I0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Hc.set(n),s.uniformMatrix4fv(this.addr,!1,Hc),Ne(e,n)}}function U0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function N0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function F0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function O0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function B0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function z0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function k0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function V0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function H0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(zc.compareFunction=su,r=zc):r=gu,e.setTexture2D(t||r,i)}function G0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vu,i)}function W0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||xu,i)}function X0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||_u,i)}function q0(s){switch(s){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return D0;case 35675:return L0;case 35676:return I0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}function Y0(s,t){s.uniform1fv(this.addr,t)}function j0(s,t){const e=As(t,this.size,2);s.uniform2fv(this.addr,e)}function K0(s,t){const e=As(t,this.size,3);s.uniform3fv(this.addr,e)}function Z0(s,t){const e=As(t,this.size,4);s.uniform4fv(this.addr,e)}function $0(s,t){const e=As(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function J0(s,t){const e=As(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Q0(s,t){const e=As(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function tg(s,t){s.uniform1iv(this.addr,t)}function eg(s,t){s.uniform2iv(this.addr,t)}function ng(s,t){s.uniform3iv(this.addr,t)}function ig(s,t){s.uniform4iv(this.addr,t)}function sg(s,t){s.uniform1uiv(this.addr,t)}function rg(s,t){s.uniform2uiv(this.addr,t)}function og(s,t){s.uniform3uiv(this.addr,t)}function ag(s,t){s.uniform4uiv(this.addr,t)}function lg(s,t,e){const n=this.cache,i=t.length,r=Eo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||gu,r[o])}function cg(s,t,e){const n=this.cache,i=t.length,r=Eo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||vu,r[o])}function hg(s,t,e){const n=this.cache,i=t.length,r=Eo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||xu,r[o])}function ug(s,t,e){const n=this.cache,i=t.length,r=Eo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||_u,r[o])}function dg(s){switch(s){case 5126:return Y0;case 35664:return j0;case 35665:return K0;case 35666:return Z0;case 35674:return $0;case 35675:return J0;case 35676:return Q0;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return og;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=q0(e.type)}}class pg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}}class mg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function Xc(s,t){s.seq.push(t),s.map[t.id]=t}function gg(s,t,e){const n=s.name,i=n.length;for(na.lastIndex=0;;){const r=na.exec(n),o=na.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Xc(e,c===void 0?new fg(a,s,t):new pg(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new mg(a),Xc(e,h)),e=h}}}class uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);gg(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function qc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const _g=37297;let vg=0;function xg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Yc=new Ht;function yg(s){Kt._getMatrix(Yc,Kt.workingColorSpace,s);const t=`mat3( ${Yc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(s)){case To:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function jc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+xg(s.getShaderSource(t),o)}else return i}function Mg(s,t){const e=yg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sg(s,t){let e;switch(t){case yd:e="Linear";break;case Md:e="Reinhard";break;case Sd:e="Cineon";break;case Xh:e="ACESFilmic";break;case wd:e="AgX";break;case Td:e="Neutral";break;case bd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Hr=new P;function bg(){Kt.getLuminanceCoefficients(Hr);const s=Hr.x.toFixed(4),t=Hr.y.toFixed(4),e=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Tg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function js(s){return s!==""}function Kc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(s){return s.replace(Ag,Cg)}const Rg=new Map;function Cg(s,t){let e=Wt[t];if(e===void 0){const n=Rg.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ll(e)}const Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(s){return s.replace(Pg,Dg)}function Dg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Lg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ig(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ds:case fs:t="ENVMAP_TYPE_CUBE";break;case bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ug(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ng(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case So:t="ENVMAP_BLENDING_MULTIPLY";break;case vd:t="ENVMAP_BLENDING_MIX";break;case xd:t="ENVMAP_BLENDING_ADD";break}return t}function Fg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Og(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Lg(e),c=Ig(e),u=Ug(e),h=Ng(e),d=Fg(e),f=wg(e),g=Tg(r),_=i.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Wt.tonemapping_pars_fragment:"",e.toneMapping!==En?Sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Mg("linearToOutputTexel",e.outputColorSpace),bg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),o=ll(o),o=Kc(o,e),o=Zc(o,e),a=ll(a),a=Kc(a,e),a=Zc(a,e),o=$c(o),a=$c(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=b+m+o,v=b+p+a,C=qc(i,i.VERTEX_SHADER,x),T=qc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,C),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(C).trim(),B=i.getShaderInfoLog(T).trim();let G=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,T);else{const K=jc(i,C,"vertex"),W=jc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+K+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||B==="")&&(z=!1);z&&(D.diagnostics={runnable:G,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(C),i.deleteShader(T),A=new uo(i,_),M=Eg(i,_)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,_g)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let Bg=0;class zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kg(t),e.set(t,n)),n}}class kg{constructor(t){this.id=Bg++,this.code=t,this.usedTimes=0}}function Vg(s,t,e,n,i,r,o){const a=new lu,l=new zg,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,D,O,F){const B=O.fog,G=F.geometry,z=M.isMeshStandardMaterial?O.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),W=K&&K.mapping===bo?K.image.height:null,nt=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=st!==void 0?st.length:0;let Ct=0;G.morphAttributes.position!==void 0&&(Ct=1),G.morphAttributes.normal!==void 0&&(Ct=2),G.morphAttributes.color!==void 0&&(Ct=3);let Ut,q,ot,bt;if(nt){const oe=bn[nt];Ut=oe.vertexShader,q=oe.fragmentShader}else Ut=M.vertexShader,q=M.fragmentShader,l.update(M),ot=l.getVertexShaderID(M),bt=l.getFragmentShaderID(M);const lt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,Nt=F.isBatchedMesh===!0,$t=!!M.map,J=!!M.matcap,rt=!!K,L=!!M.aoMap,Rt=!!M.lightMap,et=!!M.bumpMap,yt=!!M.normalMap,ct=!!M.displacementMap,Lt=!!M.emissiveMap,vt=!!M.metalnessMap,R=!!M.roughnessMap,S=M.anisotropy>0,k=M.clearcoat>0,Y=M.dispersion>0,Q=M.iridescence>0,j=M.sheen>0,wt=M.transmission>0,dt=S&&!!M.anisotropyMap,xt=k&&!!M.clearcoatMap,Yt=k&&!!M.clearcoatNormalMap,it=k&&!!M.clearcoatRoughnessMap,Mt=Q&&!!M.iridescenceMap,It=Q&&!!M.iridescenceThicknessMap,Ft=j&&!!M.sheenColorMap,St=j&&!!M.sheenRoughnessMap,Zt=!!M.specularMap,Gt=!!M.specularColorMap,de=!!M.specularIntensityMap,I=wt&&!!M.transmissionMap,ft=wt&&!!M.thicknessMap,X=!!M.gradientMap,$=!!M.alphaMap,_t=M.alphaTest>0,mt=!!M.alphaHash,kt=!!M.extensions;let be=En;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(be=s.toneMapping);const He={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:Ut,fragmentShader:q,defines:M.defines,customVertexShaderID:ot,customFragmentShaderID:bt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Xe,alphaToCoverage:!!M.alphaToCoverage,map:$t,matcap:J,envMap:rt,envMapMode:rt&&K.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:Rt,bumpMap:et,normalMap:yt,displacementMap:d&&ct,emissiveMap:Lt,normalMapObjectSpace:yt&&M.normalMapType===Dd,normalMapTangentSpace:yt&&M.normalMapType===wo,metalnessMap:vt,roughnessMap:R,anisotropy:S,anisotropyMap:dt,clearcoat:k,clearcoatMap:xt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:it,dispersion:Y,iridescence:Q,iridescenceMap:Mt,iridescenceThicknessMap:It,sheen:j,sheenColorMap:Ft,sheenRoughnessMap:St,specularMap:Zt,specularColorMap:Gt,specularIntensityMap:de,transmission:wt,transmissionMap:I,thicknessMap:ft,gradientMap:X,opaque:M.transparent===!1&&M.blending===ss&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:_t,alphaHash:mt,combine:M.combine,mapUv:$t&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:Rt&&_(M.lightMap.channel),bumpMapUv:et&&_(M.bumpMap.channel),normalMapUv:yt&&_(M.normalMap.channel),displacementMapUv:ct&&_(M.displacementMap.channel),emissiveMapUv:Lt&&_(M.emissiveMap.channel),metalnessMapUv:vt&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:dt&&_(M.anisotropyMap.channel),clearcoatMapUv:xt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(M.sheenRoughnessMap.channel),specularMapUv:Zt&&_(M.specularMap.channel),specularColorMapUv:Gt&&_(M.specularColorMap.channel),specularIntensityMapUv:de&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ft&&_(M.thicknessMap.channel),alphaMapUv:$&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(yt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&($t||$),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Dt,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Ct,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:$t&&M.map.isVideoTexture===!0&&Kt.getTransfer(M.map.colorSpace)===ce,decodeVideoTextureEmissive:Lt&&M.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(M.emissiveMap.colorSpace)===ce,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pe,flipSided:M.side===Je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:kt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&M.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)y.push(D),y.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(b(y,M),x(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const y=g[M.type];let D;if(y){const O=bn[y];D=_o.clone(O.uniforms)}else D=M.uniforms;return D}function C(M,y){let D;for(let O=0,F=u.length;O<F;O++){const B=u[O];if(B.cacheKey===y){D=B,++D.usedTimes;break}}return D===void 0&&(D=new Og(s,y,M,r),u.push(D)),D}function T(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:A}}function Hg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Gg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Qc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function th(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||Gg),n.length>1&&n.sort(d||Qc),i.length>1&&i.sort(d||Qc)}function u(){for(let h=t,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Wg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new th,s.set(n,[o])):i>=r.length?(o=new th,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Xg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ut};break;case"SpotLight":e={position:new P,direction:new P,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function qg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Yg=0;function jg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Kg(s){const t=new Xg,e=qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new zt,o=new zt;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,x=0,v=0,C=0,T=0,E=0;c.sort(jg);for(let M=0,y=c.length;M<y;M++){const D=c[M],O=D.color,F=D.intensity,B=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*F,h+=O.g*F,d+=O.b*F;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],F);E++}else if(D.isDirectionalLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,W=e.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=D.shadow.matrix,b++}n.directional[f]=z,f++}else if(D.isSpotLight){const z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(O).multiplyScalar(F),z.distance=B,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[_]=z;const K=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,K.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=K.matrix,D.castShadow){const W=e.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=G,v++}_++}else if(D.isRectAreaLight){const z=t.get(D);z.color.copy(O).multiplyScalar(F),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const K=D.shadow,W=e.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=z,g++}else if(D.isHemisphereLight){const z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(F),z.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==b||A.numPointShadows!==x||A.numSpotShadows!==v||A.numSpotMaps!==C||A.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,A.directionalLength=f,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=b,A.numPointShadows=x,A.numSpotShadows=v,A.numSpotMaps=C,A.numLightProbes=E,n.version=Yg++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function eh(s){const t=new Kg(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zg(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new eh(s),t.set(i,[a])):r>=o.length?(a=new eh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class $g extends dn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jg extends dn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
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
}`;function e_(s,t,e){let n=new Cl;const i=new Z,r=new Z,o=new ee,a=new $g({depthPacking:Pd}),l=new Jg,c={},u=e.maxTextureSize,h={[yn]:Je,[Je]:yn,[Pe]:Pe},d=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Qg,fragmentShader:t_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ue;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let p=this.type;this.render=function(T,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Zn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==zn&&this.type===zn,B=p===zn&&this.type!==zn;for(let G=0,z=T.length;G<z;G++){const K=T[G],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const nt=W.getFrameExtents();if(i.multiply(nt),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/nt.x),i.x=r.x*nt.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/nt.y),i.y=r.y*nt.y,W.mapSize.y=r.y)),W.map===null||F===!0||B===!0){const pt=this.type!==zn?{minFilter:De,magFilter:De}:{};W.map!==null&&W.map.dispose(),W.map=new ke(i.x,i.y,pt),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const st=W.getViewportCount();for(let pt=0;pt<st;pt++){const Ct=W.getViewport(pt);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),O.viewport(o),W.updateMatrices(K,pt),n=W.getFrustum(),v(E,A,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===zn&&b(W,A),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,D)};function b(T,E){const A=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ke(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,A,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,A,f,_,null)}function x(T,E,A,M){let y=null;const D=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)y=D;else if(y=A.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=y.uuid,F=E.uuid;let B=c[O];B===void 0&&(B={},c[O]=B);let G=B[F];G===void 0&&(G=y.clone(),B[F]=G,E.addEventListener("dispose",C)),y=G}if(y.visible=E.visible,y.wireframe=E.wireframe,M===zn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=A}return y}function v(T,E,A,M,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const F=t.update(T),B=T.material;if(Array.isArray(B)){const G=F.groups;for(let z=0,K=G.length;z<K;z++){const W=G[z],nt=B[W.materialIndex];if(nt&&nt.visible){const st=x(T,nt,M,y);T.onBeforeShadow(s,T,E,A,F,st,W),s.renderBufferDirect(A,null,F,st,T,W),T.onAfterShadow(s,T,E,A,F,st,W)}}}else if(B.visible){const G=x(T,B,M,y);T.onBeforeShadow(s,T,E,A,F,G,null),s.renderBufferDirect(A,null,F,G,T,null),T.onAfterShadow(s,T,E,A,F,G,null)}}const O=T.children;for(let F=0,B=O.length;F<B;F++)v(O[F],E,A,M,y)}function C(T){T.target.removeEventListener("dispose",C);for(const A in c){const M=c[A],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const n_={[ba]:wa,[Ta]:Ra,[Ea]:Ca,[us]:Aa,[wa]:ba,[Ra]:Ta,[Ca]:Ea,[Aa]:us};function i_(s,t){function e(){let I=!1;const ft=new ee;let X=null;const $=new ee(0,0,0,0);return{setMask:function(_t){X!==_t&&!I&&(s.colorMask(_t,_t,_t,_t),X=_t)},setLocked:function(_t){I=_t},setClear:function(_t,mt,kt,be,He){He===!0&&(_t*=be,mt*=be,kt*=be),ft.set(_t,mt,kt,be),$.equals(ft)===!1&&(s.clearColor(_t,mt,kt,be),$.copy(ft))},reset:function(){I=!1,X=null,$.set(-1,0,0,0)}}}function n(){let I=!1,ft=!1,X=null,$=null,_t=null;return{setReversed:function(mt){if(ft!==mt){const kt=t.get("EXT_clip_control");ft?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const be=_t;_t=null,this.setClear(be)}ft=mt},getReversed:function(){return ft},setTest:function(mt){mt?lt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(mt){X!==mt&&!I&&(s.depthMask(mt),X=mt)},setFunc:function(mt){if(ft&&(mt=n_[mt]),$!==mt){switch(mt){case ba:s.depthFunc(s.NEVER);break;case wa:s.depthFunc(s.ALWAYS);break;case Ta:s.depthFunc(s.LESS);break;case us:s.depthFunc(s.LEQUAL);break;case Ea:s.depthFunc(s.EQUAL);break;case Aa:s.depthFunc(s.GEQUAL);break;case Ra:s.depthFunc(s.GREATER);break;case Ca:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=mt}},setLocked:function(mt){I=mt},setClear:function(mt){_t!==mt&&(ft&&(mt=1-mt),s.clearDepth(mt),_t=mt)},reset:function(){I=!1,X=null,$=null,_t=null,ft=!1}}}function i(){let I=!1,ft=null,X=null,$=null,_t=null,mt=null,kt=null,be=null,He=null;return{setTest:function(oe){I||(oe?lt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(oe){ft!==oe&&!I&&(s.stencilMask(oe),ft=oe)},setFunc:function(oe,pn,Dn){(X!==oe||$!==pn||_t!==Dn)&&(s.stencilFunc(oe,pn,Dn),X=oe,$=pn,_t=Dn)},setOp:function(oe,pn,Dn){(mt!==oe||kt!==pn||be!==Dn)&&(s.stencilOp(oe,pn,Dn),mt=oe,kt=pn,be=Dn)},setLocked:function(oe){I=oe},setClear:function(oe){He!==oe&&(s.clearStencil(oe),He=oe)},reset:function(){I=!1,ft=null,X=null,$=null,_t=null,mt=null,kt=null,be=null,He=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,x=null,v=null,C=null,T=null,E=new ut(0,0,0),A=0,M=!1,y=null,D=null,O=null,F=null,B=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=K>=2);let nt=null,st={};const pt=s.getParameter(s.SCISSOR_BOX),Ct=s.getParameter(s.VIEWPORT),Ut=new ee().fromArray(pt),q=new ee().fromArray(Ct);function ot(I,ft,X,$){const _t=new Uint8Array(4),mt=s.createTexture();s.bindTexture(I,mt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<X;kt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(ft+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return mt}const bt={};bt[s.TEXTURE_2D]=ot(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=ot(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=ot(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=ot(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(s.DEPTH_TEST),o.setFunc(us),et(!1),yt(sc),lt(s.CULL_FACE),L(Zn);function lt(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function Dt(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function Ot(I,ft){return h[I]!==ft?(s.bindFramebuffer(I,ft),h[I]=ft,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ft),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function Nt(I,ft){let X=f,$=!1;if(I){X=d.get(ft),X===void 0&&(X=[],d.set(ft,X));const _t=I.textures;if(X.length!==_t.length||X[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,kt=_t.length;mt<kt;mt++)X[mt]=s.COLOR_ATTACHMENT0+mt;X.length=_t.length,$=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,$=!0);$&&s.drawBuffers(X)}function $t(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const J={[wi]:s.FUNC_ADD,[ed]:s.FUNC_SUBTRACT,[nd]:s.FUNC_REVERSE_SUBTRACT};J[id]=s.MIN,J[sd]=s.MAX;const rt={[rd]:s.ZERO,[od]:s.ONE,[ad]:s.SRC_COLOR,[Ma]:s.SRC_ALPHA,[fd]:s.SRC_ALPHA_SATURATE,[ud]:s.DST_COLOR,[cd]:s.DST_ALPHA,[ld]:s.ONE_MINUS_SRC_COLOR,[Sa]:s.ONE_MINUS_SRC_ALPHA,[dd]:s.ONE_MINUS_DST_COLOR,[hd]:s.ONE_MINUS_DST_ALPHA,[pd]:s.CONSTANT_COLOR,[md]:s.ONE_MINUS_CONSTANT_COLOR,[gd]:s.CONSTANT_ALPHA,[_d]:s.ONE_MINUS_CONSTANT_ALPHA};function L(I,ft,X,$,_t,mt,kt,be,He,oe){if(I===Zn){_===!0&&(Dt(s.BLEND),_=!1);return}if(_===!1&&(lt(s.BLEND),_=!0),I!==td){if(I!==m||oe!==M){if((p!==wi||v!==wi)&&(s.blendEquation(s.FUNC_ADD),p=wi,v=wi),oe)switch(I){case ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case po:s.blendFunc(s.ONE,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case oc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case po:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case oc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,x=null,C=null,T=null,E.set(0,0,0),A=0,m=I,M=oe}return}_t=_t||ft,mt=mt||X,kt=kt||$,(ft!==p||_t!==v)&&(s.blendEquationSeparate(J[ft],J[_t]),p=ft,v=_t),(X!==b||$!==x||mt!==C||kt!==T)&&(s.blendFuncSeparate(rt[X],rt[$],rt[mt],rt[kt]),b=X,x=$,C=mt,T=kt),(be.equals(E)===!1||He!==A)&&(s.blendColor(be.r,be.g,be.b,He),E.copy(be),A=He),m=I,M=!1}function Rt(I,ft){I.side===Pe?Dt(s.CULL_FACE):lt(s.CULL_FACE);let X=I.side===Je;ft&&(X=!X),et(X),I.blending===ss&&I.transparent===!1?L(Zn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const $=I.stencilWrite;a.setTest($),$&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function yt(I){I!==Ju?(lt(s.CULL_FACE),I!==D&&(I===sc?s.cullFace(s.BACK):I===Qu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),D=I}function ct(I){I!==O&&(z&&s.lineWidth(I),O=I)}function Lt(I,ft,X){I?(lt(s.POLYGON_OFFSET_FILL),(F!==ft||B!==X)&&(s.polygonOffset(ft,X),F=ft,B=X)):Dt(s.POLYGON_OFFSET_FILL)}function vt(I){I?lt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function R(I){I===void 0&&(I=s.TEXTURE0+G-1),nt!==I&&(s.activeTexture(I),nt=I)}function S(I,ft,X){X===void 0&&(nt===null?X=s.TEXTURE0+G-1:X=nt);let $=st[X];$===void 0&&($={type:void 0,texture:void 0},st[X]=$),($.type!==I||$.texture!==ft)&&(nt!==X&&(s.activeTexture(X),nt=X),s.bindTexture(I,ft||bt[I]),$.type=I,$.texture=ft)}function k(){const I=st[nt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(I){Ut.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ut.copy(I))}function St(I){q.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Zt(I,ft){let X=c.get(ft);X===void 0&&(X=new WeakMap,c.set(ft,X));let $=X.get(I);$===void 0&&($=s.getUniformBlockIndex(ft,I.name),X.set(I,$))}function Gt(I,ft){const $=c.get(ft).get(I);l.get(ft)!==$&&(s.uniformBlockBinding(ft,$,I.__bindingPointIndex),l.set(ft,$))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},nt=null,st={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,x=null,v=null,C=null,T=null,E=new ut(0,0,0),A=0,M=!1,y=null,D=null,O=null,F=null,B=null,Ut.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Dt,bindFramebuffer:Ot,drawBuffers:Nt,useProgram:$t,setBlending:L,setMaterial:Rt,setFlipSided:et,setCullFace:yt,setLineWidth:ct,setPolygonOffset:Lt,setScissorTest:vt,activeTexture:R,bindTexture:S,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Mt,texImage3D:It,updateUBOMapping:Zt,uniformBlockBinding:Gt,texStorage2D:Yt,texStorage3D:it,texSubImage2D:j,texSubImage3D:wt,compressedTexSubImage2D:dt,compressedTexSubImage3D:xt,scissor:Ft,viewport:St,reset:de}}function nh(s,t,e,n){const i=s_(n);switch(e){case $h:return s*t;case Qh:return s*t;case tu:return s*t*2;case bl:return s*t/i.components*i.byteLength;case wl:return s*t/i.components*i.byteLength;case eu:return s*t*2/i.components*i.byteLength;case Tl:return s*t*2/i.components*i.byteLength;case Jh:return s*t*3/i.components*i.byteLength;case ze:return s*t*4/i.components*i.byteLength;case El:return s*t*4/i.components*i.byteLength;case oo:case ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lo:case co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ia:case Na:return Math.max(s,16)*Math.max(t,8)/4;case La:case Ua:return Math.max(s,8)*Math.max(t,8)/2;case Fa:case Oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case qa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case $a:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ho:case Qa:case tl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case nu:case el:return Math.ceil(s/4)*Math.ceil(t/4)*8;case nl:case il:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function s_(s){switch(s){case Qn:case jh:return{byteLength:1,components:1};case nr:case Kh:case sn:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case Ci:case yl:case Le:return{byteLength:4,components:1};case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function r_(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):rr("canvas")}function _(R,S,k){let Y=1;const Q=vt(R);if((Q.width>k||Q.height>k)&&(Y=k/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Y*Q.width),wt=Math.floor(Y*Q.height);h===void 0&&(h=g(j,wt));const dt=S?g(j,wt):h;return dt.width=j,dt.height=wt,dt.getContext("2d").drawImage(R,0,0,j,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+wt+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(R,S,k,Y,Q=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=S;if(S===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),S===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),S===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){const wt=Q?To:Kt.getTransfer(Y);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=wt===ce?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(R,S){let k;return R?S===null||S===Ci||S===ps?k=s.DEPTH24_STENCIL8:S===Le?k=s.DEPTH32F_STENCIL8:S===nr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ci||S===ps?k=s.DEPTH_COMPONENT24:S===Le?k=s.DEPTH_COMPONENT32F:S===nr&&(k=s.DEPTH_COMPONENT16),k}function C(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==De&&R.minFilter!==Me?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),A(S),S.isVideoTexture&&u.delete(S)}function E(R){const S=R.target;S.removeEventListener("dispose",E),y(S)}function A(R){const S=n.get(R);if(S.__webglInit===void 0)return;const k=R.source,Y=d.get(k);if(Y){const Q=Y[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(R),Object.keys(Y).length===0&&d.delete(k)}n.remove(R)}function M(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const k=R.source,Y=d.get(k);delete Y[S.__cacheKey],o.memory.textures--}function y(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let Q=0;Q<S.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[Y]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=R.textures;for(let Y=0,Q=k.length;Y<Q;Y++){const j=n.get(k[Y]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(k[Y])}n.remove(R)}let D=0;function O(){D=0}function F(){const R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function B(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function G(R,S){const k=n.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,R,S);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function z(R,S){const k=n.get(R);if(R.version>0&&k.__version!==R.version){q(k,R,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function K(R,S){const k=n.get(R);if(R.version>0&&k.__version!==R.version){q(k,R,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function W(R,S){const k=n.get(R);if(R.version>0&&k.__version!==R.version){ot(k,R,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const nt={[wn]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[mo]:s.MIRRORED_REPEAT},st={[De]:s.NEAREST,[Yh]:s.NEAREST_MIPMAP_NEAREST,[qs]:s.NEAREST_MIPMAP_LINEAR,[Me]:s.LINEAR,[ro]:s.LINEAR_MIPMAP_NEAREST,[Tn]:s.LINEAR_MIPMAP_LINEAR},pt={[Ld]:s.NEVER,[Bd]:s.ALWAYS,[Id]:s.LESS,[su]:s.LEQUAL,[Ud]:s.EQUAL,[Od]:s.GEQUAL,[Nd]:s.GREATER,[Fd]:s.NOTEQUAL};function Ct(R,S){if(S.type===Le&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Me||S.magFilter===ro||S.magFilter===qs||S.magFilter===Tn||S.minFilter===Me||S.minFilter===ro||S.minFilter===qs||S.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,nt[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,nt[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,nt[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,st[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,pt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===De||S.minFilter!==qs&&S.minFilter!==Tn||S.type===Le&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ut(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const Y=S.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const j=B(S);if(j!==R.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[j].usedTimes++;const wt=Q[R.__cacheKey];wt!==void 0&&(Q[R.__cacheKey].usedTimes--,wt.usedTimes===0&&M(S)),R.__cacheKey=j,R.__webglTexture=Q[j].texture}return k}function q(R,S,k){let Y=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=s.TEXTURE_3D);const Q=Ut(R,S),j=S.source;e.bindTexture(Y,R.__webglTexture,s.TEXTURE0+k);const wt=n.get(j);if(j.version!==wt.__version||Q===!0){e.activeTexture(s.TEXTURE0+k);const dt=Kt.getPrimaries(Kt.workingColorSpace),xt=S.colorSpace===ui?null:Kt.getPrimaries(S.colorSpace),Yt=S.colorSpace===ui||dt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let it=_(S.image,!1,i.maxTextureSize);it=Lt(S,it);const Mt=r.convert(S.format,S.colorSpace),It=r.convert(S.type);let Ft=x(S.internalFormat,Mt,It,S.colorSpace,S.isVideoTexture);Ct(Y,S);let St;const Zt=S.mipmaps,Gt=S.isVideoTexture!==!0,de=wt.__version===void 0||Q===!0,I=j.dataReady,ft=C(S,it);if(S.isDepthTexture)Ft=v(S.format===ms,S.type),de&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,Ft,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Ft,it.width,it.height,0,Mt,It,null));else if(S.isDataTexture)if(Zt.length>0){Gt&&de&&e.texStorage2D(s.TEXTURE_2D,ft,Ft,Zt[0].width,Zt[0].height);for(let X=0,$=Zt.length;X<$;X++)St=Zt[X],Gt?I&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,St.width,St.height,Mt,It,St.data):e.texImage2D(s.TEXTURE_2D,X,Ft,St.width,St.height,0,Mt,It,St.data);S.generateMipmaps=!1}else Gt?(de&&e.texStorage2D(s.TEXTURE_2D,ft,Ft,it.width,it.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,Mt,It,it.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,it.width,it.height,0,Mt,It,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Gt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ft,Zt[0].width,Zt[0].height,it.depth);for(let X=0,$=Zt.length;X<$;X++)if(St=Zt[X],S.format!==ze)if(Mt!==null)if(Gt){if(I)if(S.layerUpdates.size>0){const _t=nh(St.width,St.height,S.format,S.type);for(const mt of S.layerUpdates){const kt=St.data.subarray(mt*_t/St.data.BYTES_PER_ELEMENT,(mt+1)*_t/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,mt,St.width,St.height,1,Mt,kt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,it.depth,Mt,St.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Ft,St.width,St.height,it.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,it.depth,Mt,It,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,Ft,St.width,St.height,it.depth,0,Mt,It,St.data)}else{Gt&&de&&e.texStorage2D(s.TEXTURE_2D,ft,Ft,Zt[0].width,Zt[0].height);for(let X=0,$=Zt.length;X<$;X++)St=Zt[X],S.format!==ze?Mt!==null?Gt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(s.TEXTURE_2D,X,Ft,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?I&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,St.width,St.height,Mt,It,St.data):e.texImage2D(s.TEXTURE_2D,X,Ft,St.width,St.height,0,Mt,It,St.data)}else if(S.isDataArrayTexture)if(Gt){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ft,it.width,it.height,it.depth),I)if(S.layerUpdates.size>0){const X=nh(it.width,it.height,S.format,S.type);for(const $ of S.layerUpdates){const _t=it.data.subarray($*X/it.data.BYTES_PER_ELEMENT,($+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,it.width,it.height,1,Mt,It,_t)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Mt,It,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,it.width,it.height,it.depth,0,Mt,It,it.data);else if(S.isData3DTexture)Gt?(de&&e.texStorage3D(s.TEXTURE_3D,ft,Ft,it.width,it.height,it.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Mt,It,it.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,it.width,it.height,it.depth,0,Mt,It,it.data);else if(S.isFramebufferTexture){if(de)if(Gt)e.texStorage2D(s.TEXTURE_2D,ft,Ft,it.width,it.height);else{let X=it.width,$=it.height;for(let _t=0;_t<ft;_t++)e.texImage2D(s.TEXTURE_2D,_t,Ft,X,$,0,Mt,It,null),X>>=1,$>>=1}}else if(Zt.length>0){if(Gt&&de){const X=vt(Zt[0]);e.texStorage2D(s.TEXTURE_2D,ft,Ft,X.width,X.height)}for(let X=0,$=Zt.length;X<$;X++)St=Zt[X],Gt?I&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,Mt,It,St):e.texImage2D(s.TEXTURE_2D,X,Ft,Mt,It,St);S.generateMipmaps=!1}else if(Gt){if(de){const X=vt(it);e.texStorage2D(s.TEXTURE_2D,ft,Ft,X.width,X.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,It,it)}else e.texImage2D(s.TEXTURE_2D,0,Ft,Mt,It,it);m(S)&&p(Y),wt.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ot(R,S,k){if(S.image.length!==6)return;const Y=Ut(R,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);const j=n.get(Q);if(Q.version!==j.__version||Y===!0){e.activeTexture(s.TEXTURE0+k);const wt=Kt.getPrimaries(Kt.workingColorSpace),dt=S.colorSpace===ui?null:Kt.getPrimaries(S.colorSpace),xt=S.colorSpace===ui||wt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Yt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,Mt=[];for(let $=0;$<6;$++)!Yt&&!it?Mt[$]=_(S.image[$],!0,i.maxCubemapSize):Mt[$]=it?S.image[$].image:S.image[$],Mt[$]=Lt(S,Mt[$]);const It=Mt[0],Ft=r.convert(S.format,S.colorSpace),St=r.convert(S.type),Zt=x(S.internalFormat,Ft,St,S.colorSpace),Gt=S.isVideoTexture!==!0,de=j.__version===void 0||Y===!0,I=Q.dataReady;let ft=C(S,It);Ct(s.TEXTURE_CUBE_MAP,S);let X;if(Yt){Gt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Zt,It.width,It.height);for(let $=0;$<6;$++){X=Mt[$].mipmaps;for(let _t=0;_t<X.length;_t++){const mt=X[_t];S.format!==ze?Ft!==null?Gt?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,0,0,mt.width,mt.height,Ft,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,Zt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,0,0,mt.width,mt.height,Ft,St,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,Zt,mt.width,mt.height,0,Ft,St,mt.data)}}}else{if(X=S.mipmaps,Gt&&de){X.length>0&&ft++;const $=vt(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Zt,$.width,$.height)}for(let $=0;$<6;$++)if(it){Gt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Mt[$].width,Mt[$].height,Ft,St,Mt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Zt,Mt[$].width,Mt[$].height,0,Ft,St,Mt[$].data);for(let _t=0;_t<X.length;_t++){const kt=X[_t].image[$].image;Gt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,0,0,kt.width,kt.height,Ft,St,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,Zt,kt.width,kt.height,0,Ft,St,kt.data)}}else{Gt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ft,St,Mt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Zt,Ft,St,Mt[$]);for(let _t=0;_t<X.length;_t++){const mt=X[_t];Gt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,0,0,Ft,St,mt.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,Zt,Ft,St,mt.image[$])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),j.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function bt(R,S,k,Y,Q,j){const wt=r.convert(k.format,k.colorSpace),dt=r.convert(k.type),xt=x(k.internalFormat,wt,dt,k.colorSpace),Yt=n.get(S),it=n.get(k);if(it.__renderTarget=S,!Yt.__hasExternalTextures){const Mt=Math.max(1,S.width>>j),It=Math.max(1,S.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,xt,Mt,It,S.depth,0,wt,dt,null):e.texImage2D(Q,j,xt,Mt,It,0,wt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),yt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,it.__webglTexture,0,et(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,it.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(R,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const Y=S.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,j=v(S.stencilBuffer,Q),wt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=et(S);yt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,j,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,R)}else{const Y=S.textures;for(let Q=0;Q<Y.length;Q++){const j=Y[Q],wt=r.convert(j.format,j.colorSpace),dt=r.convert(j.type),xt=x(j.internalFormat,wt,dt,j.colorSpace),Yt=et(S);k&&yt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,xt,S.width,S.height):yt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,xt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const Q=Y.__webglTexture,j=et(S);if(S.depthTexture.format===rs)yt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===ms)yt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ot(R){const S=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Y}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Dt(S.__webglFramebuffer,R)}else if(k){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=s.createRenderbuffer(),lt(S.__webglDepthbuffer[Y],R,!1);else{const Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),lt(S.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(R,S,k){const Y=n.get(R);S!==void 0&&bt(Y.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ot(R)}function $t(R){const S=R.texture,k=n.get(R),Y=n.get(S);R.addEventListener("dispose",E);const Q=R.textures,j=R.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=S.version,o.memory.textures++),j){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let xt=0;xt<S.mipmaps.length;xt++)k.__webglFramebuffer[dt][xt]=s.createFramebuffer()}else k.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)k.__webglFramebuffer[dt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(wt)for(let dt=0,xt=Q.length;dt<xt;dt++){const Yt=n.get(Q[dt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&yt(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){const xt=Q[dt];k.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);const Yt=r.convert(xt.format,xt.colorSpace),it=r.convert(xt.type),Mt=x(xt.internalFormat,Yt,it,xt.colorSpace,R.isXRRenderTarget===!0),It=et(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,Mt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ct(s.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)bt(k.__webglFramebuffer[dt][xt],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else bt(k.__webglFramebuffer[dt],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let dt=0,xt=Q.length;dt<xt;dt++){const Yt=Q[dt],it=n.get(Yt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),Ct(s.TEXTURE_2D,Yt),bt(k.__webglFramebuffer,R,Yt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),m(Yt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),Ct(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)bt(k.__webglFramebuffer[xt],R,S,s.COLOR_ATTACHMENT0,dt,xt);else bt(k.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,dt,0);m(S)&&p(dt),e.unbindTexture()}R.depthBuffer&&Ot(R)}function J(R){const S=R.textures;for(let k=0,Y=S.length;k<Y;k++){const Q=S[k];if(m(Q)){const j=b(R),wt=n.get(Q).__webglTexture;e.bindTexture(j,wt),p(j),e.unbindTexture()}}}const rt=[],L=[];function Rt(R){if(R.samples>0){if(yt(R)===!1){const S=R.textures,k=R.width,Y=R.height;let Q=s.COLOR_BUFFER_BIT;const j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(R),dt=S.length>1;if(dt)for(let xt=0;xt<S.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);const Yt=n.get(S[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Yt,0)}s.blitFramebuffer(0,0,k,Y,0,0,k,Y,Q,s.NEAREST),l===!0&&(rt.length=0,L.length=0,rt.push(s.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(rt.push(j),L.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let xt=0;xt<S.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);const Yt=n.get(S[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function et(R){return Math.min(i.maxSamples,R.samples)}function yt(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Lt(R,S){const k=R.colorSpace,Y=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Xe&&k!==ui&&(Kt.getTransfer(k)===ce?(Y!==ze||Q!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Nt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=yt}function o_(s,t){function e(n,i=ui){let r;const o=Kt.getTransfer(i);if(n===Qn)return s.UNSIGNED_BYTE;if(n===Ml)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Zh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jh)return s.BYTE;if(n===Kh)return s.SHORT;if(n===nr)return s.UNSIGNED_SHORT;if(n===yl)return s.INT;if(n===Ci)return s.UNSIGNED_INT;if(n===Le)return s.FLOAT;if(n===sn)return s.HALF_FLOAT;if(n===$h)return s.ALPHA;if(n===Jh)return s.RGB;if(n===ze)return s.RGBA;if(n===Qh)return s.LUMINANCE;if(n===tu)return s.LUMINANCE_ALPHA;if(n===rs)return s.DEPTH_COMPONENT;if(n===ms)return s.DEPTH_STENCIL;if(n===bl)return s.RED;if(n===wl)return s.RED_INTEGER;if(n===eu)return s.RG;if(n===Tl)return s.RG_INTEGER;if(n===El)return s.RGBA_INTEGER;if(n===oo||n===ao||n===lo||n===co)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Ia||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===ka||n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ka||n===Za||n===$a||n===Ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===Qa||n===tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ho)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nu||n===el||n===nl||n===il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class a_ extends ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class je extends ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l_={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const c_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h_=`
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

}`;class u_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ie,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ge({vertexShader:c_,fragmentShader:h_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d_ extends Ii{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new u_,m=e.getContextAttributes();let p=null,b=null;const x=[],v=[],C=new Z;let T=null;const E=new ye;E.viewport=new ee;const A=new ye;A.viewport=new ee;const M=[E,A],y=new a_;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ot=x[q];return ot===void 0&&(ot=new ia,x[q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(q){let ot=x[q];return ot===void 0&&(ot=new ia,x[q]=ot),ot.getGripSpace()},this.getHand=function(q){let ot=x[q];return ot===void 0&&(ot=new ia,x[q]=ot),ot.getHandSpace()};function F(q){const ot=v.indexOf(q.inputSource);if(ot===-1)return;const bt=x[ot];bt!==void 0&&(bt.update(q.inputSource,q.frame,c||o),bt.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",G);for(let q=0;q<x.length;q++){const ot=v[q];ot!==null&&(v[q]=null,x[q].disconnect(ot))}D=null,O=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,b=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ot),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ke(f.framebufferWidth,f.framebufferHeight,{format:ze,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,bt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?ms:rs,bt=m.stencil?ps:Ci);const Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(Dt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ke(d.textureWidth,d.textureHeight,{format:ze,type:Qn,depthTexture:new mu(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ut.setContext(i),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(q){for(let ot=0;ot<q.removed.length;ot++){const bt=q.removed[ot],lt=v.indexOf(bt);lt>=0&&(v[lt]=null,x[lt].disconnect(bt))}for(let ot=0;ot<q.added.length;ot++){const bt=q.added[ot];let lt=v.indexOf(bt);if(lt===-1){for(let Ot=0;Ot<x.length;Ot++)if(Ot>=v.length){v.push(bt),lt=Ot;break}else if(v[Ot]===null){v[Ot]=bt,lt=Ot;break}if(lt===-1)break}const Dt=x[lt];Dt&&Dt.connect(bt)}}const z=new P,K=new P;function W(q,ot,bt){z.setFromMatrixPosition(ot.matrixWorld),K.setFromMatrixPosition(bt.matrixWorld);const lt=z.distanceTo(K),Dt=ot.projectionMatrix.elements,Ot=bt.projectionMatrix.elements,Nt=Dt[14]/(Dt[10]-1),$t=Dt[14]/(Dt[10]+1),J=(Dt[9]+1)/Dt[5],rt=(Dt[9]-1)/Dt[5],L=(Dt[8]-1)/Dt[0],Rt=(Ot[8]+1)/Ot[0],et=Nt*L,yt=Nt*Rt,ct=lt/(-L+Rt),Lt=ct*-L;if(ot.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Lt),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Dt[10]===-1)q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const vt=Nt+ct,R=$t+ct,S=et-Lt,k=yt+(lt-Lt),Y=J*$t/R*vt,Q=rt*$t/R*vt;q.projectionMatrix.makePerspective(S,k,Y,Q,vt,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function nt(q,ot){ot===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ot.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ot=q.near,bt=q.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),y.near=A.near=E.near=ot,y.far=A.far=E.far=bt,(D!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,O=y.far),E.layers.mask=q.layers.mask|2,A.layers.mask=q.layers.mask|4,y.layers.mask=E.layers.mask|A.layers.mask;const lt=q.parent,Dt=y.cameras;nt(y,lt);for(let Ot=0;Ot<Dt.length;Ot++)nt(Dt[Ot],lt);Dt.length===2?W(y,E,A):y.projectionMatrix.copy(E.projectionMatrix),st(q,y,lt)};function st(q,ot,bt){bt===null?q.matrix.copy(ot.matrixWorld):(q.matrix.copy(bt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ot.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=gs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let pt=null;function Ct(q,ot){if(u=ot.getViewerPose(c||o),g=ot,u!==null){const bt=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let lt=!1;bt.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let Ot=0;Ot<bt.length;Ot++){const Nt=bt[Ot];let $t=null;if(f!==null)$t=f.getViewport(Nt);else{const rt=h.getViewSubImage(d,Nt);$t=rt.viewport,Ot===0&&(t.setRenderTargetTextures(b,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(b))}let J=M[Ot];J===void 0&&(J=new ye,J.layers.enable(Ot),J.viewport=new ee,M[Ot]=J),J.matrix.fromArray(Nt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Nt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set($t.x,$t.y,$t.width,$t.height),Ot===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(J)}const Dt=i.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Ot=h.getDepthInformation(bt[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,i.renderState)}}for(let bt=0;bt<x.length;bt++){const lt=v[bt],Dt=x[bt];lt!==null&&Dt!==void 0&&Dt.update(lt,ot,c||o)}pt&&pt(q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const Ut=new pu;Ut.setAnimationLoop(Ct),this.setAnimationLoop=function(q){pt=q},this.dispose=function(){}}}const Mi=new Qe,f_=new zt;function p_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,du(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),x=b.envMap,v=b.envMapRotation;x&&(m.envMap.value=x,Mi.copy(v),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(Mi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function m_(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function c(b,x){let v=i[b.id];v===void 0&&(g(b),v=u(b),i[b.id]=v,b.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(b,C);const T=t.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function u(b){const x=h();b.__bindingPointIndex=x;const v=s.createBuffer(),C=b.__size,T=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],v=b.uniforms,C=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,E=v.length;T<E;T++){const A=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,y=A.length;M<y;M++){const D=A[M];if(f(D,T,M,C)===!0){const O=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let G=0;G<F.length;G++){const z=F[G],K=_(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,O+B,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,x,v,C){const T=b.value,E=x+"_"+v;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{const A=C[E];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return C[E]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(b){const x=b.uniforms;let v=0;const C=16;for(let E=0,A=x.length;E<A;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,D=M.length;y<D;y++){const O=M[y],F=Array.isArray(O.value)?O.value:[O.value];for(let B=0,G=F.length;B<G;B++){const z=F[B],K=_(z),W=v%C,nt=W%K.boundary,st=W+nt;v+=nt,st!==0&&C-st<K.storage&&(v+=C-st),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=K.storage}}}const T=v%C;return T>0&&(v+=C-T),b.__size=v,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class g_{constructor(t={}){const{canvas:e=ef(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=En,this.toneMappingExposure=1;const v=this;let C=!1,T=0,E=0,A=null,M=-1,y=null;const D=new ee,O=new ee;let F=null;const B=new ut(0);let G=0,z=e.width,K=e.height,W=1,nt=null,st=null;const pt=new ee(0,0,z,K),Ct=new ee(0,0,z,K);let Ut=!1;const q=new Cl;let ot=!1,bt=!1;const lt=new zt,Dt=new zt,Ot=new P,Nt=new ee,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function rt(){return A===null?W:1}let L=n;function Rt(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),L===null){const U="webgl2";if(L=Rt(U,w),L===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let et,yt,ct,Lt,vt,R,S,k,Y,Q,j,wt,dt,xt,Yt,it,Mt,It,Ft,St,Zt,Gt,de,I;function ft(){et=new M0(L),et.init(),Gt=new o_(L,et),yt=new m0(L,et,t,Gt),ct=new i_(L,et),yt.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Lt=new w0(L),vt=new Hg,R=new r_(L,et,ct,vt,yt,Gt,Lt),S=new _0(v),k=new y0(v),Y=new Df(L),de=new f0(L,Y),Q=new S0(L,Y,Lt,de),j=new E0(L,Q,Y,Lt),Ft=new T0(L,yt,R),it=new g0(vt),wt=new Vg(v,S,k,et,yt,de,it),dt=new p_(v,vt),xt=new Wg,Yt=new Zg(et),It=new d0(v,S,k,ct,j,f,l),Mt=new e_(v,j,yt),I=new m_(L,Lt,yt,ct),St=new p0(L,et,Lt),Zt=new b0(L,et,Lt),Lt.programs=wt.programs,v.capabilities=yt,v.extensions=et,v.properties=vt,v.renderLists=xt,v.shadowMap=Mt,v.state=ct,v.info=Lt}ft();const X=new d_(v,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(z,K,!1))},this.getSize=function(w){return w.set(z,K)},this.setSize=function(w,U,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,K=U,e.width=Math.floor(w*W),e.height=Math.floor(U*W),V===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(z*W,K*W).floor()},this.setDrawingBufferSize=function(w,U,V){z=w,K=U,W=V,e.width=Math.floor(w*V),e.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(pt)},this.setViewport=function(w,U,V,H){w.isVector4?pt.set(w.x,w.y,w.z,w.w):pt.set(w,U,V,H),ct.viewport(D.copy(pt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(Ct)},this.setScissor=function(w,U,V,H){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,U,V,H),ct.scissor(O.copy(Ct).multiplyScalar(W).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(w){ct.setScissorTest(Ut=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(w=!0,U=!0,V=!0){let H=0;if(w){let N=!1;if(A!==null){const at=A.texture.format;N=at===El||at===Tl||at===wl}if(N){const at=A.texture.type,gt=at===Qn||at===Ci||at===nr||at===ps||at===Ml||at===Sl,Tt=It.getClearColor(),Et=It.getClearAlpha(),Bt=Tt.r,Vt=Tt.g,At=Tt.b;gt?(g[0]=Bt,g[1]=Vt,g[2]=At,g[3]=Et,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Bt,_[1]=Vt,_[2]=At,_[3]=Et,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT),V&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),xt.dispose(),Yt.dispose(),vt.dispose(),S.dispose(),k.dispose(),j.dispose(),de.dispose(),I.dispose(),wt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Zl),X.removeEventListener("sessionend",$l),mi.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=Lt.autoReset,U=Mt.enabled,V=Mt.autoUpdate,H=Mt.needsUpdate,N=Mt.type;ft(),Lt.autoReset=w,Mt.enabled=U,Mt.autoUpdate=V,Mt.needsUpdate=H,Mt.type=N}function mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kt(w){const U=w.target;U.removeEventListener("dispose",kt),be(U)}function be(w){He(w),vt.remove(w)}function He(w){const U=vt.get(w).programs;U!==void 0&&(U.forEach(function(V){wt.releaseProgram(V)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,H,N,at){U===null&&(U=$t);const gt=N.isMesh&&N.matrixWorld.determinant()<0,Tt=Yu(w,U,V,H,N);ct.setMaterial(H,gt);let Et=V.index,Bt=1;if(H.wireframe===!0){if(Et=Q.getWireframeAttribute(V),Et===void 0)return;Bt=2}const Vt=V.drawRange,At=V.attributes.position;let Jt=Vt.start*Bt,fe=(Vt.start+Vt.count)*Bt;at!==null&&(Jt=Math.max(Jt,at.start*Bt),fe=Math.min(fe,(at.start+at.count)*Bt)),Et!==null?(Jt=Math.max(Jt,0),fe=Math.min(fe,Et.count)):At!=null&&(Jt=Math.max(Jt,0),fe=Math.min(fe,At.count));const _e=fe-Jt;if(_e<0||_e===1/0)return;de.setup(N,H,Tt,V,Et);let Ke,se=St;if(Et!==null&&(Ke=Y.get(Et),se=Zt,se.setIndex(Ke)),N.isMesh)H.wireframe===!0?(ct.setLineWidth(H.wireframeLinewidth*rt()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(N.isLine){let Pt=H.linewidth;Pt===void 0&&(Pt=1),ct.setLineWidth(Pt*rt()),N.isLineSegments?se.setMode(L.LINES):N.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else N.isPoints?se.setMode(L.POINTS):N.isSprite&&se.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)se.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))se.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pt=N._multiDrawStarts,Ln=N._multiDrawCounts,re=N._multiDrawCount,mn=Et?Y.get(Et).bytesPerElement:1,Oi=vt.get(H).currentProgram.getUniforms();for(let tn=0;tn<re;tn++)Oi.setValue(L,"_gl_DrawID",tn),se.render(Pt[tn]/mn,Ln[tn])}else if(N.isInstancedMesh)se.renderInstances(Jt,_e,N.count);else if(V.isInstancedBufferGeometry){const Pt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ln=Math.min(V.instanceCount,Pt);se.renderInstances(Jt,_e,Ln)}else se.render(Jt,_e)};function oe(w,U,V){w.transparent===!0&&w.side===Pe&&w.forceSinglePass===!1?(w.side=Je,w.needsUpdate=!0,Mr(w,U,V),w.side=yn,w.needsUpdate=!0,Mr(w,U,V),w.side=Pe):Mr(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),p=Yt.get(V),p.init(U),x.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==V&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const at=N.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){const Tt=at[gt];oe(Tt,V,N),H.add(Tt)}else oe(at,V,N),H.add(at)}),x.pop(),p=null,H},this.compileAsync=function(w,U,V=null){const H=this.compile(w,U,V);return new Promise(N=>{function at(){if(H.forEach(function(gt){vt.get(gt).currentProgram.isReady()&&H.delete(gt)}),H.size===0){N(w);return}setTimeout(at,10)}et.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let pn=null;function Dn(w){pn&&pn(w)}function Zl(){mi.stop()}function $l(){mi.start()}const mi=new pu;mi.setAnimationLoop(Dn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(w){pn=w,X.setAnimationLoop(w),w===null?mi.stop():mi.start()},X.addEventListener("sessionstart",Zl),X.addEventListener("sessionend",$l),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,A),p=Yt.get(w,x.length),p.init(U),x.push(p),Dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Dt),bt=this.localClippingEnabled,ot=it.init(this.clippingPlanes,bt),m=xt.get(w,b.length),m.init(),b.push(m),X.enabled===!0&&X.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&Co(at,U,-1/0,v.sortObjects)}Co(w,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,st),J=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,J&&It.addToRenderList(m,w),this.info.render.frame++,ot===!0&&it.beginShadows();const V=p.state.shadowsArray;Mt.render(V,w,U),ot===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const at=U.cameras;if(N.length>0)for(let gt=0,Tt=at.length;gt<Tt;gt++){const Et=at[gt];Ql(H,N,w,Et)}J&&It.render(w);for(let gt=0,Tt=at.length;gt<Tt;gt++){const Et=at[gt];Jl(m,w,Et,Et.viewport)}}else N.length>0&&Ql(H,N,w,U),J&&It.render(w),Jl(m,w,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,U),de.resetDefaultState(),M=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],ot===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Co(w,U,V,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){H&&Nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Dt);const gt=j.update(w),Tt=w.material;Tt.visible&&m.push(w,gt,Tt,V,Nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const gt=j.update(w),Tt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Nt.copy(w.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Nt.copy(gt.boundingSphere.center)),Nt.applyMatrix4(w.matrixWorld).applyMatrix4(Dt)),Array.isArray(Tt)){const Et=gt.groups;for(let Bt=0,Vt=Et.length;Bt<Vt;Bt++){const At=Et[Bt],Jt=Tt[At.materialIndex];Jt&&Jt.visible&&m.push(w,gt,Jt,V,Nt.z,At)}}else Tt.visible&&m.push(w,gt,Tt,V,Nt.z,null)}}const at=w.children;for(let gt=0,Tt=at.length;gt<Tt;gt++)Co(at[gt],U,V,H)}function Jl(w,U,V,H){const N=w.opaque,at=w.transmissive,gt=w.transparent;p.setupLightsView(V),ot===!0&&it.setGlobalState(v.clippingPlanes,V),H&&ct.viewport(D.copy(H)),N.length>0&&yr(N,U,V),at.length>0&&yr(at,U,V),gt.length>0&&yr(gt,U,V),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Ql(w,U,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ke(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?sn:Qn,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const at=p.state.transmissionRenderTarget[H.id],gt=H.viewport||D;at.setSize(gt.z,gt.w);const Tt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(B),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),J&&It.render(V);const Et=v.toneMapping;v.toneMapping=En;const Bt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ot===!0&&it.setGlobalState(v.clippingPlanes,H),yr(w,V,H),R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at),et.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let At=0,Jt=U.length;At<Jt;At++){const fe=U[At],_e=fe.object,Ke=fe.geometry,se=fe.material,Pt=fe.group;if(se.side===Pe&&_e.layers.test(H.layers)){const Ln=se.side;se.side=Je,se.needsUpdate=!0,tc(_e,V,H,Ke,se,Pt),se.side=Ln,se.needsUpdate=!0,Vt=!0}}Vt===!0&&(R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at))}v.setRenderTarget(Tt),v.setClearColor(B,G),Bt!==void 0&&(H.viewport=Bt),v.toneMapping=Et}function yr(w,U,V){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=w.length;N<at;N++){const gt=w[N],Tt=gt.object,Et=gt.geometry,Bt=H===null?gt.material:H,Vt=gt.group;Tt.layers.test(V.layers)&&tc(Tt,U,V,Et,Bt,Vt)}}function tc(w,U,V,H,N,at){w.onBeforeRender(v,U,V,H,N,at),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,V,H,w,at),N.transparent===!0&&N.side===Pe&&N.forceSinglePass===!1?(N.side=Je,N.needsUpdate=!0,v.renderBufferDirect(V,U,H,N,w,at),N.side=yn,N.needsUpdate=!0,v.renderBufferDirect(V,U,H,N,w,at),N.side=Pe):v.renderBufferDirect(V,U,H,N,w,at),w.onAfterRender(v,U,V,H,N,at)}function Mr(w,U,V){U.isScene!==!0&&(U=$t);const H=vt.get(w),N=p.state.lights,at=p.state.shadowsArray,gt=N.state.version,Tt=wt.getParameters(w,N.state,at,U,V),Et=wt.getProgramCacheKey(Tt);let Bt=H.programs;H.environment=w.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(w.isMeshStandardMaterial?k:S).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Bt===void 0&&(w.addEventListener("dispose",kt),Bt=new Map,H.programs=Bt);let Vt=Bt.get(Et);if(Vt!==void 0){if(H.currentProgram===Vt&&H.lightsStateVersion===gt)return nc(w,Tt),Vt}else Tt.uniforms=wt.getUniforms(w),w.onBeforeCompile(Tt,v),Vt=wt.acquireProgram(Tt,Et),Bt.set(Et,Vt),H.uniforms=Tt.uniforms;const At=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=it.uniform),nc(w,Tt),H.needsLights=Ku(w),H.lightsStateVersion=gt,H.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Vt,H.uniformsList=null,Vt}function ec(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=uo.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function nc(w,U){const V=vt.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Yu(w,U,V,H,N){U.isScene!==!0&&(U=$t),R.resetTextureUnits();const at=U.fog,gt=H.isMeshStandardMaterial?U.environment:null,Tt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Xe,Et=(H.isMeshStandardMaterial?k:S).get(H.envMap||gt),Bt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Vt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!V.morphAttributes.position,Jt=!!V.morphAttributes.normal,fe=!!V.morphAttributes.color;let _e=En;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_e=v.toneMapping);const Ke=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=Ke!==void 0?Ke.length:0,Pt=vt.get(H),Ln=p.state.lights;if(ot===!0&&(bt===!0||w!==y)){const rn=w===y&&H.id===M;it.setState(H,w,rn)}let re=!1;H.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ln.state.version||Pt.outputColorSpace!==Tt||N.isBatchedMesh&&Pt.batching===!1||!N.isBatchedMesh&&Pt.batching===!0||N.isBatchedMesh&&Pt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pt.instancing===!1||!N.isInstancedMesh&&Pt.instancing===!0||N.isSkinnedMesh&&Pt.skinning===!1||!N.isSkinnedMesh&&Pt.skinning===!0||N.isInstancedMesh&&Pt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pt.instancingMorph===!1&&N.morphTexture!==null||Pt.envMap!==Et||H.fog===!0&&Pt.fog!==at||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==Bt||Pt.vertexTangents!==Vt||Pt.morphTargets!==At||Pt.morphNormals!==Jt||Pt.morphColors!==fe||Pt.toneMapping!==_e||Pt.morphTargetsCount!==se)&&(re=!0):(re=!0,Pt.__version=H.version);let mn=Pt.currentProgram;re===!0&&(mn=Mr(H,U,N));let Oi=!1,tn=!1,Us=!1;const ve=mn.getUniforms(),Sn=Pt.uniforms;if(ct.useProgram(mn.program)&&(Oi=!0,tn=!0,Us=!0),H.id!==M&&(M=H.id,tn=!0),Oi||y!==w){ct.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),sf(lt),rf(lt),ve.setValue(L,"projectionMatrix",lt)):ve.setValue(L,"projectionMatrix",w.projectionMatrix),ve.setValue(L,"viewMatrix",w.matrixWorldInverse);const ei=ve.map.cameraPosition;ei!==void 0&&ei.setValue(L,Ot.setFromMatrixPosition(w.matrixWorld)),yt.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ve.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,tn=!0,Us=!0)}if(N.isSkinnedMesh){ve.setOptional(L,N,"bindMatrix"),ve.setOptional(L,N,"bindMatrixInverse");const rn=N.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),ve.setValue(L,"boneTexture",rn.boneTexture,R))}N.isBatchedMesh&&(ve.setOptional(L,N,"batchingTexture"),ve.setValue(L,"batchingTexture",N._matricesTexture,R),ve.setOptional(L,N,"batchingIdTexture"),ve.setValue(L,"batchingIdTexture",N._indirectTexture,R),ve.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&ve.setValue(L,"batchingColorTexture",N._colorsTexture,R));const Ns=V.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&Ft.update(N,V,mn),(tn||Pt.receiveShadow!==N.receiveShadow)&&(Pt.receiveShadow=N.receiveShadow,ve.setValue(L,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Sn.envMap.value=Et,Sn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Sn.envMapIntensity.value=U.environmentIntensity),tn&&(ve.setValue(L,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&ju(Sn,Us),at&&H.fog===!0&&dt.refreshFogUniforms(Sn,at),dt.refreshMaterialUniforms(Sn,H,W,K,p.state.transmissionRenderTarget[w.id]),uo.upload(L,ec(Pt),Sn,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(uo.upload(L,ec(Pt),Sn,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ve.setValue(L,"center",N.center),ve.setValue(L,"modelViewMatrix",N.modelViewMatrix),ve.setValue(L,"normalMatrix",N.normalMatrix),ve.setValue(L,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const rn=H.uniformsGroups;for(let ei=0,ni=rn.length;ei<ni;ei++){const ic=rn[ei];I.update(ic,mn),I.bind(ic,mn)}}return mn}function ju(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Ku(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,V){vt.get(w.texture).__webglTexture=U,vt.get(w.depthTexture).__webglTexture=V;const H=vt.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const V=vt.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){A=w,T=U,E=V;let H=!0,N=null,at=!1,gt=!1;if(w){const Et=vt.get(w);if(Et.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(Et.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Et.__hasExternalTextures)R.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const At=w.depthTexture;if(Et.__boundDepthTexture!==At){if(At!==null&&vt.has(At)&&(w.width!==At.image.width||w.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Bt=w.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(gt=!0);const Vt=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?N=Vt[U][V]:N=Vt[U],at=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?N=vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?N=Vt[V]:N=Vt,D.copy(w.viewport),O.copy(w.scissor),F=w.scissorTest}else D.copy(pt).multiplyScalar(W).floor(),O.copy(Ct).multiplyScalar(W).floor(),F=Ut;if(ct.bindFramebuffer(L.FRAMEBUFFER,N)&&H&&ct.drawBuffers(w,N),ct.viewport(D),ct.scissor(O),ct.setScissorTest(F),at){const Et=vt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,V)}else if(gt){const Et=vt.get(w.texture),Bt=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.__webglTexture,V||0,Bt)}M=-1},this.readRenderTargetPixels=function(w,U,V,H,N,at,gt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){ct.bindFramebuffer(L.FRAMEBUFFER,Tt);try{const Et=w.texture,Bt=Et.format,Vt=Et.type;if(!yt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&V>=0&&V<=w.height-N&&L.readPixels(U,V,H,N,Gt.convert(Bt),Gt.convert(Vt),at)}finally{const Et=A!==null?vt.get(A).__webglFramebuffer:null;ct.bindFramebuffer(L.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(w,U,V,H,N,at,gt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){const Et=w.texture,Bt=Et.format,Vt=Et.type;if(!yt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-H&&V>=0&&V<=w.height-N){ct.bindFramebuffer(L.FRAMEBUFFER,Tt);const At=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.bufferData(L.PIXEL_PACK_BUFFER,at.byteLength,L.STREAM_READ),L.readPixels(U,V,H,N,Gt.convert(Bt),Gt.convert(Vt),0);const Jt=A!==null?vt.get(A).__webglFramebuffer:null;ct.bindFramebuffer(L.FRAMEBUFFER,Jt);const fe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await nf(L,fe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,at),L.deleteBuffer(At),L.deleteSync(fe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,V=0){w.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-V),N=Math.floor(w.image.width*H),at=Math.floor(w.image.height*H),gt=U!==null?U.x:0,Tt=U!==null?U.y:0;R.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,gt,Tt,N,at),ct.unbindTexture()},this.copyTextureToTexture=function(w,U,V=null,H=null,N=0){w.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let at,gt,Tt,Et,Bt,Vt,At,Jt,fe;const _e=w.isCompressedTexture?w.mipmaps[N]:w.image;V!==null?(at=V.max.x-V.min.x,gt=V.max.y-V.min.y,Tt=V.isBox3?V.max.z-V.min.z:1,Et=V.min.x,Bt=V.min.y,Vt=V.isBox3?V.min.z:0):(at=_e.width,gt=_e.height,Tt=_e.depth||1,Et=0,Bt=0,Vt=0),H!==null?(At=H.x,Jt=H.y,fe=H.z):(At=0,Jt=0,fe=0);const Ke=Gt.convert(U.format),se=Gt.convert(U.type);let Pt;U.isData3DTexture?(R.setTexture3D(U,0),Pt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Pt=L.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ln=L.getParameter(L.UNPACK_ROW_LENGTH),re=L.getParameter(L.UNPACK_IMAGE_HEIGHT),mn=L.getParameter(L.UNPACK_SKIP_PIXELS),Oi=L.getParameter(L.UNPACK_SKIP_ROWS),tn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_e.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Et),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Vt);const Us=w.isDataArrayTexture||w.isData3DTexture,ve=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Sn=vt.get(w),Ns=vt.get(U),rn=vt.get(Sn.__renderTarget),ei=vt.get(Ns.__renderTarget);ct.bindFramebuffer(L.READ_FRAMEBUFFER,rn.__webglFramebuffer),ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ni=0;ni<Tt;ni++)Us&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(w).__webglTexture,N,Vt+ni),w.isDepthTexture?(ve&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(U).__webglTexture,N,fe+ni),L.blitFramebuffer(Et,Bt,at,gt,At,Jt,at,gt,L.DEPTH_BUFFER_BIT,L.NEAREST)):ve?L.copyTexSubImage3D(Pt,N,At,Jt,fe+ni,Et,Bt,at,gt):L.copyTexSubImage2D(Pt,N,At,Jt,fe+ni,Et,Bt,at,gt);ct.bindFramebuffer(L.READ_FRAMEBUFFER,null),ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ve?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Pt,N,At,Jt,fe,at,gt,Tt,Ke,se,_e.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Pt,N,At,Jt,fe,at,gt,Tt,Ke,_e.data):L.texSubImage3D(Pt,N,At,Jt,fe,at,gt,Tt,Ke,se,_e):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,At,Jt,at,gt,Ke,se,_e.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,At,Jt,_e.width,_e.height,Ke,_e.data):L.texSubImage2D(L.TEXTURE_2D,N,At,Jt,at,gt,Ke,se,_e);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ln),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,tn),N===0&&U.generateMipmaps&&L.generateMipmap(Pt),ct.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V=null,H=null,N=0){return w.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,V,H,N)},this.initRenderTarget=function(w){vt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){T=0,E=0,A=null,ct.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class Dl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ut(t),this.near=e,this.far=n}clone(){return new Dl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ls extends ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class __{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rl,this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qe=new P;class Ll{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ll(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ih=new P,sh=new ee,rh=new ee,v_=new P,oh=new zt,Gr=new P,sa=new Rn,ah=new zt,ra=new fr;class x_ extends ne{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ac,this.bindMatrix=new zt,this.bindMatrixInverse=new zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Gr),this.boundingBox.expandByPoint(Gr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Gr),this.boundingSphere.expandByPoint(Gr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(i),t.ray.intersectsSphere(sa)!==!1&&(ah.copy(i).invert(),ra.copy(t.ray).applyMatrix4(ah),!(this.boundingBox!==null&&ra.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ra)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ee,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ac?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ed?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;sh.fromBufferAttribute(i.attributes.skinIndex,t),rh.fromBufferAttribute(i.attributes.skinWeight,t),ih.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=rh.getComponent(r);if(o!==0){const a=sh.getComponent(r);oh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(v_.copy(ih).applyMatrix4(oh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class yu extends ie{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ys extends Ie{constructor(t=null,e=1,n=1,i,r,o,a,l,c=De,u=De,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lh=new zt,y_=new zt;class Il{constructor(t=[],e=[]){this.uuid=un(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new zt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:y_;lh.multiplyMatrices(a,e[r]),lh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Il(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ys(e,t,t,ze,Le);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new yu),this.bones.push(o),this.boneInverses.push(new zt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Pi extends pe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ji=new zt,ch=new zt,Wr=[],hh=new ti,M_=new zt,Vs=new ne,Hs=new Rn;class mr extends ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,M_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),hh.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(hh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),Hs.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),t.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ji),ch.multiplyMatrices(n,Ji),Vs.matrixWorld=ch,Vs.raycast(t,Wr);for(let o=0,a=Wr.length;o<a;o++){const l=Wr[o];l.instanceId=r,l.object=this,e.push(l)}Wr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(i*this.count),i,this.count,bl,Le));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class di extends dn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vo=new P,xo=new P,uh=new zt,Gs=new fr,Xr=new Rn,oa=new P,dh=new P;class Ul extends ie{constructor(t=new ue,e=new di){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)vo.fromBufferAttribute(e,i-1),xo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=vo.distanceTo(xo);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(i),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;uh.copy(i).invert(),Gs.copy(t.ray).applyMatrix4(uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),b=u.getX(_+1),x=qr(this,t,Gs,l,p,b);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=qr(this,t,Gs,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=qr(this,t,Gs,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=qr(this,t,Gs,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qr(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(vo.fromBufferAttribute(o,i),xo.fromBufferAttribute(o,r),e.distanceSqToSegment(vo,xo,oa,dh)>n)return;oa.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(oa);if(!(l<t.near||l>t.far))return{distance:l,point:dh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const fh=new P,ph=new P;class Ei extends Ul{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)fh.fromBufferAttribute(e,i),ph.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fh.distanceTo(ph);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class S_ extends Ul{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Nl extends dn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const mh=new zt,cl=new fr,Yr=new Rn,jr=new P;class Fl extends ie{constructor(t=new ue,e=new Nl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;mh.copy(i).invert(),cl.copy(t.ray).applyMatrix4(mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);jr.fromBufferAttribute(h,m),gh(jr,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)jr.fromBufferAttribute(h,g),gh(jr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gh(s,t,e,n,i,r,o){const a=cl.distanceSqToPoint(s);if(a<e){const l=new P;cl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class _h extends Ie{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Z:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],o=[],a=new P,l=new zt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ae(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ae(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ol extends Cn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Z){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class b_ extends Ol{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bl(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Kr=new P,aa=new Bl,la=new Bl,ca=new Bl;class w_ extends Cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Kr.subVectors(i[0],i[1]).add(i[0]),c=Kr);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Kr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),aa.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),la.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),ca.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(aa.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),la.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ca.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(aa.calc(l),la.calc(l),ca.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vh(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function T_(s,t){const e=1-s;return e*e*t}function E_(s,t){return 2*(1-s)*s*t}function A_(s,t){return s*s*t}function Zs(s,t,e,n){return T_(s,t)+E_(s,e)+A_(s,n)}function R_(s,t){const e=1-s;return e*e*e*t}function C_(s,t){const e=1-s;return 3*e*e*s*t}function P_(s,t){return 3*(1-s)*s*s*t}function D_(s,t){return s*s*s*t}function $s(s,t,e,n,i){return R_(s,t)+C_(s,e)+P_(s,n)+D_(s,i)}class Mu extends Cn{constructor(t=new Z,e=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Z){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,i.x,r.x,o.x,a.x),$s(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class L_ extends Cn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,i.x,r.x,o.x,a.x),$s(t,i.y,r.y,o.y,a.y),$s(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Su extends Cn{constructor(t=new Z,e=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class I_ extends Cn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bu extends Cn{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Zs(t,i.x,r.x,o.x),Zs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class U_ extends Cn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Zs(t,i.x,r.x,o.x),Zs(t,i.y,r.y,o.y),Zs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wu extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Z){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(vh(a,l.x,c.x,u.x,h.x),vh(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Z().fromArray(i))}return this}}var hl=Object.freeze({__proto__:null,ArcCurve:b_,CatmullRomCurve3:w_,CubicBezierCurve:Mu,CubicBezierCurve3:L_,EllipseCurve:Ol,LineCurve:Su,LineCurve3:I_,QuadraticBezierCurve:bu,QuadraticBezierCurve3:U_,SplineCurve:wu});class N_ extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new hl[i.type]().fromJSON(i))}return this}}class xh extends N_{constructor(t){super(),this.type="Path",this.currentPoint=new Z,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Su(this.currentPoint.clone(),new Z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new bu(this.currentPoint.clone(),new Z(t,e),new Z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Mu(this.currentPoint.clone(),new Z(t,e),new Z(n,i),new Z(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Ol(t,e,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zl extends ue{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function b(){const v=new P,C=new P;let T=0;const E=(e-t)/n;for(let A=0;A<=r;A++){const M=[],y=A/r,D=y*(e-t)+t;for(let O=0;O<=i;O++){const F=O/i,B=F*l+a,G=Math.sin(B),z=Math.cos(B);C.x=D*G,C.y=-y*n+m,C.z=D*z,h.push(C.x,C.y,C.z),v.set(G,E,z).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-y),M.push(g++)}_.push(M)}for(let A=0;A<i;A++)for(let M=0;M<r;M++){const y=_[M][A],D=_[M+1][A],O=_[M+1][A+1],F=_[M][A+1];(t>0||M!==0)&&(u.push(y,D,F),T+=3),(e>0||M!==r-1)&&(u.push(D,O,F),T+=3)}c.addGroup(p,T,0),p+=T}function x(v){const C=g,T=new Z,E=new P;let A=0;const M=v===!0?t:e,y=v===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const D=g;for(let O=0;O<=i;O++){const B=O/i*l+a,G=Math.cos(B),z=Math.sin(B);E.x=M*z,E.y=m*y,E.z=M*G,h.push(E.x,E.y,E.z),d.push(0,y,0),T.x=G*.5+.5,T.y=z*.5*y+.5,f.push(T.x,T.y),g++}for(let O=0;O<i;O++){const F=C+O,B=D+O;v===!0?u.push(B,B+1,F):u.push(B+1,B,F),A+=3}c.addGroup(p,A,v===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Zr=new P,$r=new P,ha=new P,Jr=new cn;class F_ extends ue{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(os*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Jr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Jr.getNormal(ha),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const x=(b+1)%3,v=h[b],C=h[x],T=Jr[u[b]],E=Jr[u[x]],A=`${v}_${C}`,M=`${C}_${v}`;M in d&&d[M]?(ha.dot(d[M].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(E.x,E.y,E.z)),d[M]=null):A in d||(d[A]={index0:c[b],index1:c[x],normal:ha.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Zr.fromBufferAttribute(a,_),$r.fromBufferAttribute(a,m),f.push(Zr.x,Zr.y,Zr.z),f.push($r.x,$r.y,$r.z)}this.setAttribute("position",new me(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class kl extends xh{constructor(t){super(t),this.uuid=un(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new xh().fromJSON(i))}return this}}const O_={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Tu(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=H_(s,t,r,e)),s.length>80*e){a=c=s[0],l=u=s[1];for(let g=e;g<i;g+=e)h=s[g],d=s[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return or(r,o,e,a,l,f,0),o}};function Tu(s,t,e,n,i){let r,o;if(i===Q_(s,t,e,n)>0)for(r=t;r<e;r+=n)o=yh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=yh(r,s[r],s[r+1],o);return o&&Ao(o,o.next)&&(lr(o),o=o.next),o}function Di(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ao(e,e.next)||Se(e.prev,e,e.next)===0)){if(lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function or(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Y_(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?z_(s,n,i,r):B_(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),lr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=k_(Di(s),t,e),or(s,t,e,n,i,r,2)):o===2&&V_(s,t,e,n,i,r):or(Di(s),t,e,n,i,r,1);break}}}function B_(s){const t=s.prev,e=s,n=s.next;if(Se(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&ns(i,a,r,l,o,c,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function z_(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Se(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=ul(f,g,t,e,n),b=ul(_,m,t,e,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=p&&v&&v.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&ns(a,u,l,h,c,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&ns(a,u,l,h,c,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&ns(a,u,l,h,c,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&ns(a,u,l,h,c,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function k_(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ao(i,r)&&Eu(i,n,n.next,r)&&ar(i,r)&&ar(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),lr(n),lr(n.next),n=s=r),n=n.next}while(n!==s);return Di(n)}function V_(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Z_(o,a)){let l=Au(o,a);o=Di(o,o.next),l=Di(l,l.next),or(o,t,e,n,i,r,0),or(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function H_(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Tu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(K_(c));for(i.sort(G_),r=0;r<i.length;r++)e=W_(i[r],e);return e}function G_(s,t){return s.x-t.x}function W_(s,t){const e=X_(s,t);if(!e)return t;const n=Au(e,s);return Di(n,n.next),Di(e,e.next)}function X_(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&ns(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),ar(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&q_(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function q_(s,t){return Se(s.prev,s,t.prev)<0&&Se(t.next,s,s.next)<0}function Y_(s,t,e,n){let i=s;do i.z===0&&(i.z=ul(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,j_(i)}function j_(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function ul(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function K_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ns(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Z_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!$_(s,t)&&(ar(s,t)&&ar(t,s)&&J_(s,t)&&(Se(s.prev,s,t.prev)||Se(s,t.prev,t))||Ao(s,t)&&Se(s.prev,s,s.next)>0&&Se(t.prev,t,t.next)>0)}function Se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ao(s,t){return s.x===t.x&&s.y===t.y}function Eu(s,t,e,n){const i=to(Se(s,t,e)),r=to(Se(s,t,n)),o=to(Se(e,n,s)),a=to(Se(e,n,t));return!!(i!==r&&o!==a||i===0&&Qr(s,e,t)||r===0&&Qr(s,n,t)||o===0&&Qr(e,s,n)||a===0&&Qr(e,t,n))}function Qr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function to(s){return s>0?1:s<0?-1:0}function $_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Eu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ar(s,t){return Se(s.prev,s,s.next)<0?Se(s,t,s.next)>=0&&Se(s,s.prev,t)>=0:Se(s,t,s.prev)<0||Se(s,s.next,t)<0}function J_(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Au(s,t){const e=new dl(s.i,s.x,s.y),n=new dl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yh(s,t,e,n){const i=new dl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function lr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function dl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Q_(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Js{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Js.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Mh(t),Sh(n,t);let o=t.length;e.forEach(Mh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Sh(n,e[l]);const a=O_.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Mh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Sh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ro extends ue{constructor(t=new kl([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new me(i,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:tv;let x,v=!1,C,T,E,A;p&&(x=p.getSpacedPoints(u),v=!0,d=!1,C=p.computeFrenetFrames(u,!1),T=new P,E=new P,A=new P),d||(m=0,f=0,g=0,_=0);const M=a.extractPoints(c);let y=M.shape;const D=M.holes;if(!Js.isClockWise(y)){y=y.reverse();for(let J=0,rt=D.length;J<rt;J++){const L=D[J];Js.isClockWise(L)&&(D[J]=L.reverse())}}const F=Js.triangulateShape(y,D),B=y;for(let J=0,rt=D.length;J<rt;J++){const L=D[J];y=y.concat(L)}function G(J,rt,L){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(rt,L)}const z=y.length,K=F.length;function W(J,rt,L){let Rt,et,yt;const ct=J.x-rt.x,Lt=J.y-rt.y,vt=L.x-J.x,R=L.y-J.y,S=ct*ct+Lt*Lt,k=ct*R-Lt*vt;if(Math.abs(k)>Number.EPSILON){const Y=Math.sqrt(S),Q=Math.sqrt(vt*vt+R*R),j=rt.x-Lt/Y,wt=rt.y+ct/Y,dt=L.x-R/Q,xt=L.y+vt/Q,Yt=((dt-j)*R-(xt-wt)*vt)/(ct*R-Lt*vt);Rt=j+ct*Yt-J.x,et=wt+Lt*Yt-J.y;const it=Rt*Rt+et*et;if(it<=2)return new Z(Rt,et);yt=Math.sqrt(it/2)}else{let Y=!1;ct>Number.EPSILON?vt>Number.EPSILON&&(Y=!0):ct<-Number.EPSILON?vt<-Number.EPSILON&&(Y=!0):Math.sign(Lt)===Math.sign(R)&&(Y=!0),Y?(Rt=-Lt,et=ct,yt=Math.sqrt(S)):(Rt=ct,et=Lt,yt=Math.sqrt(S/2))}return new Z(Rt/yt,et/yt)}const nt=[];for(let J=0,rt=B.length,L=rt-1,Rt=J+1;J<rt;J++,L++,Rt++)L===rt&&(L=0),Rt===rt&&(Rt=0),nt[J]=W(B[J],B[L],B[Rt]);const st=[];let pt,Ct=nt.concat();for(let J=0,rt=D.length;J<rt;J++){const L=D[J];pt=[];for(let Rt=0,et=L.length,yt=et-1,ct=Rt+1;Rt<et;Rt++,yt++,ct++)yt===et&&(yt=0),ct===et&&(ct=0),pt[Rt]=W(L[Rt],L[yt],L[ct]);st.push(pt),Ct=Ct.concat(pt)}for(let J=0;J<m;J++){const rt=J/m,L=f*Math.cos(rt*Math.PI/2),Rt=g*Math.sin(rt*Math.PI/2)+_;for(let et=0,yt=B.length;et<yt;et++){const ct=G(B[et],nt[et],Rt);lt(ct.x,ct.y,-L)}for(let et=0,yt=D.length;et<yt;et++){const ct=D[et];pt=st[et];for(let Lt=0,vt=ct.length;Lt<vt;Lt++){const R=G(ct[Lt],pt[Lt],Rt);lt(R.x,R.y,-L)}}}const Ut=g+_;for(let J=0;J<z;J++){const rt=d?G(y[J],Ct[J],Ut):y[J];v?(E.copy(C.normals[0]).multiplyScalar(rt.x),T.copy(C.binormals[0]).multiplyScalar(rt.y),A.copy(x[0]).add(E).add(T),lt(A.x,A.y,A.z)):lt(rt.x,rt.y,0)}for(let J=1;J<=u;J++)for(let rt=0;rt<z;rt++){const L=d?G(y[rt],Ct[rt],Ut):y[rt];v?(E.copy(C.normals[J]).multiplyScalar(L.x),T.copy(C.binormals[J]).multiplyScalar(L.y),A.copy(x[J]).add(E).add(T),lt(A.x,A.y,A.z)):lt(L.x,L.y,h/u*J)}for(let J=m-1;J>=0;J--){const rt=J/m,L=f*Math.cos(rt*Math.PI/2),Rt=g*Math.sin(rt*Math.PI/2)+_;for(let et=0,yt=B.length;et<yt;et++){const ct=G(B[et],nt[et],Rt);lt(ct.x,ct.y,h+L)}for(let et=0,yt=D.length;et<yt;et++){const ct=D[et];pt=st[et];for(let Lt=0,vt=ct.length;Lt<vt;Lt++){const R=G(ct[Lt],pt[Lt],Rt);v?lt(R.x,R.y+x[u-1].y,x[u-1].x+L):lt(R.x,R.y,h+L)}}}q(),ot();function q(){const J=i.length/3;if(d){let rt=0,L=z*rt;for(let Rt=0;Rt<K;Rt++){const et=F[Rt];Dt(et[2]+L,et[1]+L,et[0]+L)}rt=u+m*2,L=z*rt;for(let Rt=0;Rt<K;Rt++){const et=F[Rt];Dt(et[0]+L,et[1]+L,et[2]+L)}}else{for(let rt=0;rt<K;rt++){const L=F[rt];Dt(L[2],L[1],L[0])}for(let rt=0;rt<K;rt++){const L=F[rt];Dt(L[0]+z*u,L[1]+z*u,L[2]+z*u)}}n.addGroup(J,i.length/3-J,0)}function ot(){const J=i.length/3;let rt=0;bt(B,rt),rt+=B.length;for(let L=0,Rt=D.length;L<Rt;L++){const et=D[L];bt(et,rt),rt+=et.length}n.addGroup(J,i.length/3-J,1)}function bt(J,rt){let L=J.length;for(;--L>=0;){const Rt=L;let et=L-1;et<0&&(et=J.length-1);for(let yt=0,ct=u+m*2;yt<ct;yt++){const Lt=z*yt,vt=z*(yt+1),R=rt+Rt+Lt,S=rt+et+Lt,k=rt+et+vt,Y=rt+Rt+vt;Ot(R,S,k,Y)}}}function lt(J,rt,L){l.push(J),l.push(rt),l.push(L)}function Dt(J,rt,L){Nt(J),Nt(rt),Nt(L);const Rt=i.length/3,et=b.generateTopUV(n,i,Rt-3,Rt-2,Rt-1);$t(et[0]),$t(et[1]),$t(et[2])}function Ot(J,rt,L,Rt){Nt(J),Nt(rt),Nt(Rt),Nt(rt),Nt(L),Nt(Rt);const et=i.length/3,yt=b.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);$t(yt[0]),$t(yt[1]),$t(yt[3]),$t(yt[1]),$t(yt[2]),$t(yt[3])}function Nt(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function $t(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ev(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new hl[i.type]().fromJSON(i)),new Ro(n,t.options)}}const tv={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new Z(r,o),new Z(a,l),new Z(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Z(o,1-l),new Z(c,1-h),new Z(d,1-g),new Z(_,1-p)]:[new Z(a,1-l),new Z(u,1-h),new Z(f,1-g),new Z(m,1-p)]}};function ev(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class cr extends ue{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],x=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const T=C/e;h.x=-t*Math.cos(i+T*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(i+T*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-x),b.push(c++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const x=u[p][b+1],v=u[p][b],C=u[p+1][b],T=u[p+1][b+1];(p!==0||o>0)&&f.push(x,v,T),(p!==n-1||l<Math.PI)&&f.push(v,C,T)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ms extends dn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mn extends Ms{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class nv extends dn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vl extends dn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function eo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function iv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function sv(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function bh(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function Ru(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class gr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class rv extends gr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lc,endingEnd:lc}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case cc:r=t,a=2*e-n;break;case hc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cc:o=t,l=2*n-e;break;case hc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let C=0;C!==a;++C)r[C]=p*o[u+C]+b*o[c+C]+x*o[l+C]+v*o[h+C];return r}}class ov extends gr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class av extends gr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Pn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=eo(e,this.TimeBufferType),this.values=eo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:eo(t.times,Array),values:eo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new av(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ov(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rv(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ir:e=this.InterpolantFactoryMethodDiscrete;break;case sr:e=this.InterpolantFactoryMethodLinear;break;case Po:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return Po}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&iv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Po,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=sr;class Rs extends Pn{constructor(t,e,n){super(t,e,n)}}Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=ir;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Cu extends Pn{}Cu.prototype.ValueTypeName="color";class Ss extends Pn{}Ss.prototype.ValueTypeName="number";class lv extends gr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let u=c+a;c!==u;c+=4)An.slerpFlat(r,0,o,c-a,o,c,l);return r}}class bs extends Pn{InterpolantFactoryMethodLinear(t){return new lv(this.times,this.values,this.getValueSize(),t)}}bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Pn{constructor(t,e,n){super(t,e,n)}}Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=ir;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends Pn{}ws.prototype.ValueTypeName="vector";class cv{constructor(t="",e=-1,n=[],i=Ad){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=un(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(uv(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=sv(l);l=bh(l,1,u),c=bh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ss(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];Ru(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Ss(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+e[h].name+"]";n(ws,f+".position",d,"pos",i),n(bs,f+".quaternion",d,"rot",i),n(ws,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function hv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ss;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return Cu;case"quaternion":return bs;case"bool":case"boolean":return Rs;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function uv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=hv(s.type);if(s.times===void 0){const e=[],n=[];Ru(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const fi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class dv{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const fv=new dv;class Ui{constructor(t){this.manager=t!==void 0?t:fv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ui.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class pv extends Error{constructor(t,e){super(t),this.response=e}}class Hl extends Ui{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=fi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Bn[t]!==void 0){Bn[t].push({onLoad:e,onProgress:n,onError:i});return}Bn[t]=[],Bn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bn[t],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,E=u.length;T<E;T++){const A=u[T];A.onProgress&&A.onProgress(C)}p.enqueue(v),b()}},x=>{p.error(x)})}}});return new Response(m)}else throw new pv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{fi.add(t,c);const u=Bn[t];delete Bn[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Bn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Bn[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class mv extends Ui{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=fi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=rr("img");function l(){u(),fi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class gv extends Ui{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new ys,a=new Hl(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:hn,o.wrapT=c.wrapT!==void 0?c.wrapT:hn,o.magFilter=c.magFilter!==void 0?c.magFilter:Me,o.minFilter=c.minFilter!==void 0?c.minFilter:Me,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Tn),c.mipmapCount===1&&(o.minFilter=Me),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,i),o}}class Pu extends Ui{constructor(t){super(t)}load(t,e,n,i){const r=new Ie,o=new mv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class _r extends ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _v extends _r{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ua=new zt,wh=new P,Th=new P;class Gl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(wh),Th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Th),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vv extends Gl{constructor(){super(new ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=gs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ps extends _r{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.target=new ie,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Eh=new zt,Ws=new P,da=new P;class xv extends Gl{constructor(){super(new ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ws),da.copy(n.position),da.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(da),n.updateMatrixWorld(),i.makeTranslation(-Ws.x,-Ws.y,-Ws.z),Eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh)}}class vr extends _r{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class yv extends Gl{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qs extends _r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.target=new ie,this.shadow=new yv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ni extends _r{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class tr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Mv extends Ui{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=fi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return fi.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),fi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});fi.add(t,l),r.manager.itemStart(t)}}class Fi{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ah();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ah(){return performance.now()}const Wl="\\[\\]\\.:\\/",Sv=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",bv="[^"+Wl.replace("\\.","")+"]",wv=/((?:WC+[\/:])*)/.source.replace("WC",Xl),Tv=/(WCOD+)?/.source.replace("WCOD",bv),Ev=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),Av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),Rv=new RegExp("^"+wv+Tv+Ev+Av+"$"),Cv=["material","materials","bones","map"];class Pv{constructor(t,e,n){const i=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class le{constructor(t,e,n){this.path=e,this.parsedPath=n||le.parseTrackName(e),this.node=le.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new le.Composite(t,e,n):new le(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sv,"")}static parseTrackName(t){const e=Rv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Cv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=le.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}le.Composite=Pv;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Rh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Dv extends Ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);const Ch={type:"change"},ql={type:"start"},Du={type:"end"},no=new fr,Ph=new hi,Lv=Math.cos(70*_s.DEG2RAD),Re=new P,Ze=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fa=1e-6;class Iv extends Dv{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new An,this._lastTargetPosition=new P,this._quat=new An().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rh,this._sphericalDelta=new Rh,this._scale=1,this._panOffset=new P,this._rotateStart=new Z,this._rotateEnd=new Z,this._rotateDelta=new Z,this._panStart=new Z,this._panEnd=new Z,this._panDelta=new Z,this._dollyStart=new Z,this._dollyEnd=new Z,this._dollyDelta=new Z,this._dollyDirection=new P,this._mouse=new Z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Nv.bind(this),this._onPointerDown=Uv.bind(this),this._onPointerUp=Fv.bind(this),this._onContextMenu=Gv.bind(this),this._onMouseWheel=zv.bind(this),this._onKeyDown=kv.bind(this),this._onTouchStart=Vv.bind(this),this._onTouchMove=Hv.bind(this),this._onMouseDown=Ov.bind(this),this._onMouseMove=Bv.bind(this),this._interceptControlDown=Wv.bind(this),this._interceptControlUp=Xv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ch),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ze:n>Math.PI&&(n-=Ze),i<-Math.PI?i+=Ze:i>Math.PI&&(i-=Ze),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Re.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(no.origin.copy(this.object.position),no.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(no.direction))<Lv?this.object.lookAt(this.target):(Ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),no.intersectPlane(Ph,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fa||this._lastTargetPosition.distanceToSquared(this.target)>fa?(this.dispatchEvent(Ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Re.copy(i).sub(this.target);let r=Re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Z,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Uv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Nv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Fv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Du),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ov(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=he.DOLLY;break;case is.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=he.ROTATE}break;case is.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(ql)}function Bv(s){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function zv(s){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(s.preventDefault(),this.dispatchEvent(ql),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Du))}function kv(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Vv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=he.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=he.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(ql)}function Hv(s){switch(this._trackPointer(s),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=he.NONE}}function Gv(s){this.enabled!==!1&&s.preventDefault()}function Wv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Lu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class xr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qv=new xs(-1,1,1,-1,0,1);class Yv extends ue{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}}const jv=new Yv;class Yl{constructor(t){this._mesh=new ne(jv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,qv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Kv extends xr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=_o.clone(t.uniforms),this.material=new ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Yl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Dh extends xr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Zv extends xr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class $v{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Z);this._width=n.width,this._height=n.height,e=new ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Kv(Lu),this.copyPass.material.blending=Zn,this.clock=new Fi}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Dh!==void 0&&(o instanceof Dh?n=!0:o instanceof Zv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jv extends xr{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ut}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Qv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ut(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ts extends xr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Z(t.x,t.y):new Z(256,256),this.clearColor=new ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ke(r,o,{type:sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new ke(r,o,{type:sn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new ke(r,o,{type:sn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Qv;this.highPassUniforms=_o.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Z(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Lu;this.copyUniforms=_o.clone(u.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:po,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ut,this.oldClearAlpha=1,this.basic=new qn,this.fsQuad=new Yl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ts.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ts.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ts.BlurDirectionX=new Z(1,0);Ts.BlurDirectionY=new Z(0,1);class Iu{constructor(t=42){this._initialSeed=t,this._state=t}reset(){return this._state=this._initialSeed,this}seed(t){return this._initialSeed=t,this._state=t,this}get currentSeed(){return this._initialSeed}next(){this._state|=0,this._state=this._state+1831565813|0;let t=Math.imul(this._state^this._state>>>15,1|this._state);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}intRange(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[this.intRange(0,t.length-1)]}gaussian(t=0,e=1){const n=this.next(),i=this.next();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*i)*e+t}vec3(t=0,e=1){return[this.range(t,e),this.range(t,e),this.range(t,e)]}onSphere(t=1){const e=this.range(0,Math.PI*2),n=Math.acos(this.range(-1,1));return[t*Math.sin(n)*Math.cos(e),t*Math.sin(n)*Math.sin(e),t*Math.cos(n)]}}const Vn=class Vn{static getInstance(){return Vn._instance||(Vn._instance=new Vn),Vn._instance}constructor(){if(Vn._instance)throw new Error("[UniformsManager] Use getInstance() - Singleton violation");this._globals=new Map,this._subscribers=new Map,this.register("uTime",{value:0}),this.register("uDeltaTime",{value:.016}),this.register("uResolution",{value:new Z(1920,1080)}),this.register("uMouse",{value:new Z(0,0)}),this.register("uFrame",{value:0}),this._clock=new Fi}register(t,e){return this._globals.set(t,e),this._subscribers.has(t)||this._subscribers.set(t,new Set),this}get(t){return this._globals.get(t)}subscribe(t,e){for(const n of e){if(!this._globals.has(n)){console.warn(`[UniformsManager] Unknown uniform: ${n}`);continue}t.uniforms[n]=this._globals.get(n),this._subscribers.get(n).add(t)}return this}unsubscribe(t){for(const[,e]of this._subscribers)e.delete(t)}set(t,e){const n=this._globals.get(t);return n&&(n.value=e),this}tick(){const t=this._clock.getDelta(),e=this._clock.getElapsedTime();this.set("uTime",e),this.set("uDeltaTime",t),this.set("uFrame",this.get("uFrame").value+1)}getGlobalUniformsClone(){const t={};for(const[e,n]of this._globals)t[e]=n;return t}dispose(){this._globals.clear(),this._subscribers.clear(),Vn._instance=null}};Fs(Vn,"_instance",null);let hr=Vn;const Hn=class Hn{static getInstance(){return Hn._instance||(Hn._instance=new Hn),Hn._instance}constructor(){if(Hn._instance)throw new Error("[GarbageCollector] Use getInstance() - Singleton violation");this._geometries=new Set,this._materials=new Set,this._textures=new Set,this._objects=new Set,this._tags=new Map}trackGeometry(t,e){return this._geometries.add(t),e&&this._addTag(e,t),t}trackMaterial(t,e){return this._materials.add(t),e&&this._addTag(e,t),t}trackTexture(t,e){return this._textures.add(t),e&&this._addTag(e,t),t}trackObject(t,e){return this._objects.add(t),e&&this._addTag(e,t),t}disposeObject(t){t.traverse(e=>{if(e.geometry&&(e.geometry.dispose(),this._geometries.delete(e.geometry)),e.material){const n=Array.isArray(e.material)?e.material:[e.material];for(const i of n){for(const r of Object.keys(i)){const o=i[r];o&&o.isTexture&&(o.dispose(),this._textures.delete(o))}i.dispose(),this._materials.delete(i)}}}),t.parent&&t.parent.remove(t),this._objects.delete(t)}disposeByTag(t){const e=this._tags.get(t);if(e){for(const n of e)n.isBufferGeometry?(n.dispose(),this._geometries.delete(n)):n.isMaterial?(n.dispose(),this._materials.delete(n)):n.isTexture?(n.dispose(),this._textures.delete(n)):n.isObject3D&&this.disposeObject(n);this._tags.delete(t)}}disposeAll(){for(const t of this._geometries)t.dispose();for(const t of this._materials)t.dispose();for(const t of this._textures)t.dispose();for(const t of this._objects)t.parent&&t.parent.remove(t);this._geometries.clear(),this._materials.clear(),this._textures.clear(),this._objects.clear(),this._tags.clear()}get stats(){return{geometries:this._geometries.size,materials:this._materials.size,textures:this._textures.size,objects:this._objects.size}}_addTag(t,e){this._tags.has(t)||this._tags.set(t,new Set),this._tags.get(t).add(e)}dispose(){this.disposeAll(),Hn._instance=null}};Fs(Hn,"_instance",null);let yo=Hn;class Ds{constructor(t={}){if(new.target===Ds)throw new Error("[ProceduralEntity] Cannot instantiate abstract class directly");this.uuid=_s.generateUUID(),this.type=this.constructor.name,this._params={seed:42,...t},this.rng=new Iu(this._params.seed),this.uniforms=hr.getInstance(),this.gc=yo.getInstance(),this._geometry=null,this._material=null,this._mesh=null,this._built=!1,this._localUniforms=new Map}_buildGeometry(){throw new Error(`[${this.type}] _buildGeometry() must be implemented`)}_buildMaterial(){throw new Error(`[${this.type}] _buildMaterial() must be implemented`)}_buildMesh(){return new ne(this._geometry,this._material)}build(){return this._built&&this.dispose(),this.rng.reset(),this._geometry=this._buildGeometry(),this.gc.trackGeometry(this._geometry,this.uuid),this._material=this._buildMaterial(),this.gc.trackMaterial(this._material,this.uuid),this._mesh=this._buildMesh(),this._mesh.userData.proceduralEntity=this,this._mesh.userData.entityType=this.type,this.gc.trackObject(this._mesh,this.uuid),this._built=!0,this}getObject3D(){return this._built||this.build(),this._mesh}addTo(t){return t.add(this.getObject3D()),this}setPosition(t,e,n){return this.getObject3D().position.set(t,e,n),this}setRotation(t,e,n){return this.getObject3D().rotation.set(t,e,n),this}setScale(t){const e=this.getObject3D();return typeof t=="number"?e.scale.setScalar(t):e.scale.set(t[0],t[1],t[2]),this}updateParams(t){return Object.assign(this._params,t),t.seed!==void 0&&this.rng.seed(t.seed),this.rebuild()}rebuild(){var r,o,a,l;const t=(r=this._mesh)==null?void 0:r.parent,e=(o=this._mesh)==null?void 0:o.position.clone(),n=(a=this._mesh)==null?void 0:a.rotation.clone(),i=(l=this._mesh)==null?void 0:l.scale.clone();return this.dispose(),this.build(),t&&t.add(this._mesh),e&&this._mesh.position.copy(e),n&&this._mesh.rotation.copy(n),i&&this._mesh.scale.copy(i),this}dispose(){this._mesh&&this.gc.disposeObject(this._mesh),this._geometry=null,this._material=null,this._mesh=null,this._built=!1}clone(t={}){const e=this.constructor;return new e({...this._params,...t}).build()}serialize(){return{type:this.type,params:{...this._params},position:this._mesh?this._mesh.position.toArray():[0,0,0],rotation:this._mesh?[this._mesh.rotation.x,this._mesh.rotation.y,this._mesh.rotation.z]:[0,0,0],scale:this._mesh?this._mesh.scale.toArray():[1,1,1]}}}class Yn extends ge{constructor(t={}){const e=hr.getInstance(),i={...e.getGlobalUniformsClone(),...ht.lights,...t.uniforms||{}};super({vertexShader:t.vertexShader||Yn.defaultVertexShader(),fragmentShader:t.fragmentShader||Yn.defaultFragmentShader(),uniforms:i,transparent:t.transparent??!1,side:t.side??Pe,depthWrite:t.depthWrite??!0,lights:t.lights??!0,glslVersion:ol}),this._entityType=t.entityType||"generic",e.subscribe(this,["uTime","uDeltaTime","uResolution"])}static defaultVertexShader(){return`
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
    `}}const Ce=class Ce{static register(t,e,n={}){return Ce._registry.set(t,e),Object.keys(n).length>0&&Ce._presets.set(t,n),Ce}static create(t,e={}){const n=Ce._registry.get(t);if(!n)throw new Error(`[ProceduralFactory] Unknown entity: '${t}'. Did you forget to register it?`);const r={...Ce._presets.get(t)||{},...e};return new n(r)}static build(t,e={}){return Ce.create(t,e).build()}static createBatch(t,e,n,i=42){let r=i;const o={next(){r|=0,r=r+1831565813|0;let l=Math.imul(r^r>>>15,1|r);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296},range(l,c){return l+this.next()*(c-l)}},a=[];for(let l=0;l<e;l++){const c=n(l,o);a.push(Ce.create(t,{seed:i+l,...c}))}return a}static registerPreset(t,e,n){const i=`${t}::${e}`;return Ce._presets.set(i,n),Ce}static createFromPreset(t,e,n={}){const i=`${t}::${e}`,r=Ce._presets.get(i)||{};return Ce.create(t,{...r,...n})}static listRegistered(){return[...Ce._registry.keys()]}static has(t){return Ce._registry.has(t)}static clear(){Ce._registry.clear(),Ce._presets.clear()}};Fs(Ce,"_registry",new Map),Fs(Ce,"_presets",new Map);let Es=Ce;const io={rose:{size:.75,dx:.4,dy:.8,petals:7,rings:14,startRx:2.42,zOff:.5,maxScale:2.2,maxR:.1,bowl:.35,taper:.75,curl:1.5,curlV:.15,twist:.4,twistV:0,c1:"#ffffff",c2:"#ff0000"},lotus:{size:1.2,dx:.55,dy:1,petals:6,rings:18,startRx:1.8,zOff:.3,maxScale:2.5,maxR:.15,bowl:1.2,taper:.75,curl:.8,curlV:.1,twist:.1,twistV:0,c1:"#fff0f5",c2:"#ff69b4"},chrysanthemum:{size:1.6,dx:.15,dy:.5,petals:12,rings:20,startRx:2.8,zOff:.15,maxScale:1.8,maxR:.05,bowl:.15,taper:.25,curl:2,curlV:.3,twist:.2,twistV:.1,c1:"#fffff0",c2:"#ffd700"},cherry:{size:.55,dx:.35,dy:.55,petals:5,rings:10,startRx:2,zOff:.4,maxScale:2,maxR:.08,bowl:.2,taper:.6,curl:.6,curlV:.1,twist:.1,twistV:0,c1:"#fff5f5",c2:"#ffb7c5"},tulip:{size:1,dx:.5,dy:.9,petals:6,rings:8,startRx:1.6,zOff:.2,maxScale:2.8,maxR:.02,bowl:.8,taper:1,curl:.4,curlV:.05,twist:0,twistV:0,c1:"#ff3333",c2:"#ff6600"},lily:{size:1.4,dx:.6,dy:1.2,petals:6,rings:12,startRx:2.2,zOff:.35,maxScale:2.4,maxR:.12,bowl:.6,taper:.55,curl:1.8,curlV:.2,twist:.3,twistV:.1,c1:"#ffffff",c2:"#ffcc00"}};function fl(s){const t=s.replace("#","");return[parseInt(t.substring(0,2),16)/255,parseInt(t.substring(2,4),16)/255,parseInt(t.substring(4,6),16)/255]}function Lh(s,t,e){const n=fl(s),i=fl(t);return[n[0]+(i[0]-n[0])*e,n[1]+(i[1]-n[1])*e,n[2]+(i[2]-n[2])*e]}function tx(s,t,e){return e<.5?Lh(s,t,e*2):Lh(t,s,(e-.5)*2)}function ex(s){const t=fl(s);return new P(t[0],t[1],t[2])}function nx(s,t,e){const n=new kl;return n.moveTo(0,0),n.quadraticCurveTo(t,e,0,s),n.quadraticCurveTo(-t,e,0,0),new Ro(n,{curveSegments:24,steps:1,depth:.005,bevelEnabled:!0,bevelThickness:.005,bevelSize:.01,bevelSegments:10})}class Uu extends Ds{constructor(t={}){const e=io[t.preset||"rose"]||io.rose;super({preset:"rose",rings:e.rings,petals:e.petals,color1:e.c1,color2:e.c2,size:e.size,dx:e.dx,dy:e.dy,maxRadius:e.maxR,maxScale:e.maxScale,startRx:e.startRx,zOffsetCoef:e.zOff,bowlDepth:e.bowl,taperPow:e.taper,baseCurl:e.curl,curlVar:e.curlV,baseTwist:e.twist,twistVar:e.twistV,metalness:0,roughness:.43,transmission:.17,sheen:.47,sheenColor:"#ff8899",sheenRoughness:.48,clearcoat:.1,veinStr:.6,veinWidth:3e3,veinColor:"#2d5a1e",midribStr:.7,lateralStr:.5,edgeLight:.2,hueShift:0,layerGap:.005,scaleDecay:.4,innerShrink:.9,...t}),this._shaderUniforms=null,this._curlAttr=null,this._twistAttr=null,this._randCurl=null,this._randTwist=null}_buildGeometry(){const t=this._params;return nx(t.size,t.dx,t.dy)}_buildMaterial(){const t=this._params;this._shaderUniforms={uBowlDepth:{value:t.bowlDepth},uVeinStr:{value:t.veinStr},uVeinWidth:{value:t.veinWidth},uVeinColor:{value:ex(t.veinColor)},uMidribStr:{value:t.midribStr},uLateralStr:{value:t.lateralStr},uSecStr:{value:.2},uMicroStr:{value:.06},uTaperPow:{value:t.taperPow},uEdgeLight:{value:t.edgeLight},uHueShift:{value:t.hueShift},uPetalSize:{value:t.size},uPetalDx:{value:t.dx}};const e=new Mn({metalness:t.metalness,roughness:t.roughness,transmission:t.transmission,thickness:.5,sheen:t.sheen,sheenColor:new ut(t.sheenColor),sheenRoughness:t.sheenRoughness,clearcoat:t.clearcoat,side:Pe}),n=this._shaderUniforms;return e.onBeforeCompile=i=>{Object.assign(i.uniforms,n),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},e}_buildMesh(){const t=this._params,e=2e3,n=t.rings*t.petals,i=new mr(this._geometry,this._material,e);i.castShadow=!0,i.receiveShadow=!0,i.count=n;const r=new Float32Array(e),o=new Float32Array(e);this._randCurl=new Float32Array(e),this._randTwist=new Float32Array(e);for(let a=0;a<e;a++)this._randCurl[a]=(this.rng.next()-.5)*2,this._randTwist[a]=(this.rng.next()-.5)*2;return this._curlAttr=new Pi(r,1).setUsage(pi),this._twistAttr=new Pi(o,1).setUsage(pi),i.geometry.setAttribute("aCurl",this._curlAttr),i.geometry.setAttribute("aTwist",this._twistAttr),this._updateLayout(i),this._updateColors(i),i}_updateLayout(t){const e=this._params,n=e.rings,i=e.petals,r=new ie,o=Date.now()*5e-5%1,a=2*Math.PI/i,l=2*e.startRx/n,c=this._curlAttr.array,u=this._twistAttr.array;for(let h=0;h<n;h++){const d=(h+o*n)%n,f=Math.sin(Math.PI*d/n),g=h*e.zOffsetCoef*Math.PI/n,_=f*e.maxRadius,m=h*e.layerGap,p=1-e.scaleDecay*(1-f),b=f<.15?_s.lerp(1-e.innerShrink,1,f/.15):1,x=f*e.maxScale*p*b;for(let v=0;v<i;v++){const C=h*i+v,T=a*v+g;r.position.set(_*Math.cos(T),_*Math.sin(T),m),r.rotation.set(e.startRx-d*l,0,T-Math.PI/2,"ZXY"),r.scale.setScalar(x),r.updateMatrix(),t.setMatrixAt(C,r.matrix),c[C]=e.baseCurl*(1-f*.6)+this._randCurl[C]*e.curlVar,u[C]=e.baseTwist*f*.8+this._randTwist[C]*e.twistVar}}t.instanceMatrix.needsUpdate=!0,this._curlAttr.needsUpdate=!0,this._twistAttr.needsUpdate=!0}_updateColors(t){const e=this._params,n=e.rings,i=e.petals,r=new ut;for(let o=0;o<n;o++)for(let a=0;a<i;a++){const l=o*i+a,c=tx(e.color1,e.color2,a/i);r.setRGB(c[0],c[1],c[2]),t.setColorAt(l,r)}t.instanceColor&&(t.instanceColor.needsUpdate=!0)}update(){return this._mesh&&(this._mesh.count=this._params.rings*this._params.petals,this._updateLayout(this._mesh)),this}setPreset(t){const e=io[t];return e?(this._params.preset=t,Object.assign(this._params,{size:e.size,dx:e.dx,dy:e.dy,petals:e.petals,rings:e.rings,startRx:e.startRx,zOffsetCoef:e.zOff,maxScale:e.maxScale,maxRadius:e.maxR,bowlDepth:e.bowl,taperPow:e.taper,baseCurl:e.curl,curlVar:e.curlV,baseTwist:e.twist,twistVar:e.twistV,color1:e.c1,color2:e.c2}),this.rebuild()):this}static get PRESETS(){return io}}Es.register("TroisFlower",Uu,{preset:"rose"});const Mo=[{n:5,len:.22,wid:.16,open:.22,curl:.7},{n:7,len:.32,wid:.22,open:.42,curl:.55},{n:9,len:.42,wid:.3,open:.62,curl:.4},{n:11,len:.52,wid:.38,open:.82,curl:.28},{n:13,len:.6,wid:.44,open:1.02,curl:.18},{n:14,len:.66,wid:.48,open:1.2,curl:.1},{n:15,len:.7,wid:.52,open:1.38,curl:.05}],Ih=Mo.length,Uh=Mo.reduce((s,t)=>s+t.n,0);class ix{constructor(t={}){this.options={petalScale:1,petalLength:1,petalWidth:1,openAngleScale:1,bloomWaveAmp:.14,cycleDuration:5,breatheAmp:.004,radialPulse:.025,energyWaveSpeed:.4,energyWaveStrength:.22,fresnelStrength:.38,coreGlow:.55,specularStr:.14,sssStrength:.25,cameraDistance:2.2,autoRotateSpeed:.015,mouseParallaxH:.45,mouseParallaxV:.2,smoothFactor:.04,stemY:-.28,stemLength:.55,...t},this._group=new je,this._clock=new Fi,this._mouse={x:0,y:0},this._smooth={x:0,y:0},this._mesh=null,this._stemMesh=null,this._bgMesh=null,this._material=null,this._bgMaterial=null,this._dummy=new ie,this._initMatrices=[],this._heights=[],this._layerRatios=[],this.camera=new ye(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,1,this.options.cameraDistance)}build(){const t=this._createPetalGeo();return this._material=this._createMaterial(),this._mesh=new mr(t,this._material,Uh),this._mesh.frustumCulled=!1,this._precomputeInstances(),this._applyInstances(),this._group.add(this._mesh),this._createStem(),this._createBackground(),this}addTo(t){return t.add(this._group),this._bgMesh&&t.add(this._bgMesh),this}setMouse(t,e){this._mouse.x=t/window.innerWidth*2-1,this._mouse.y=-(e/window.innerHeight)*2+1}update(){const t=this._clock.getDelta(),e=this.options,n=this._clock.getElapsedTime();this._smooth.x+=(this._mouse.x-this._smooth.x)*e.smoothFactor,this._smooth.y+=(this._mouse.y-this._smooth.y)*e.smoothFactor;const i=n*e.autoRotateSpeed+this._smooth.x*e.mouseParallaxH,r=.18+this._smooth.y*e.mouseParallaxV;if(this.camera.position.set(Math.sin(i)*e.cameraDistance*Math.cos(r),Math.sin(r)*e.cameraDistance+.08,Math.cos(i)*e.cameraDistance*Math.cos(r)),this.camera.lookAt(this._smooth.x*-.05,this._smooth.y*.03,0),this._material){const o=this._material.uniforms;o.uTime.value+=t,o.uBreathAmp.value=e.breatheAmp,o.uEnergySpeed.value=e.energyWaveSpeed,o.uEnergyStr.value=e.energyWaveStrength,o.uFresnelStr.value=e.fresnelStrength,o.uCoreGlow.value=e.coreGlow}this._bgMaterial&&(this._bgMaterial.uniforms.uTime.value+=t),this._animateInstances(this._material.uniforms.uTime.value)}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}dispose(){this._mesh&&(this._mesh.geometry.dispose(),this._material.dispose(),this._group.remove(this._mesh)),this._stemMesh&&(this._stemMesh.geometry.dispose(),this._stemMesh.material.dispose(),this._group.remove(this._stemMesh)),this._bgMesh&&(this._bgMesh.geometry.dispose(),this._bgMaterial.dispose(),this._bgMesh.parent&&this._bgMesh.parent.remove(this._bgMesh)),this._group.parent&&this._group.parent.remove(this._group)}_createPetalGeo(){const n=[],i=[],r=[];for(let a=0;a<=10;a++){const l=a/10,c=(l-.5)*2;for(let u=0;u<=18;u++){const h=u/18,d=Math.pow(Math.sin(h*Math.PI*.48),.42)*Math.pow(1-Math.pow(h,1.7),.52),f=.45*(1-.25*h),g=.28*d,_=g*Math.sin(c*f),m=g*(1-Math.cos(c*f)),p=.04*(1-.4*h)*(1-c*c),b=.03*h*h;n.push(_,m+p+b,h),i.push(h,l)}}for(let a=0;a<10;a++)for(let l=0;l<18;l++){const c=a*19+l;r.push(c,c+18+1,c+1,c+1,c+18+1,c+18+2)}const o=new ue;return o.setAttribute("position",new me(n,3)),o.setAttribute("uv",new me(i,2)),o.setIndex(r),o.computeVertexNormals(),o}_precomputeInstances(){const t=this._dummy;let e=0;Mo.forEach((n,i)=>{const r=i/(Ih-1);for(let o=0;o<n.n;o++){const a=o/n.n*Math.PI*2+(i%2?Math.PI/n.n:0),l=Math.sin(e*137.508+i*42),c=Math.cos(e*73+i*31),u=.02+.14*r,h=n.open+.04*c,d=u*Math.sin(h)*Math.cos(a+.05*l),f=u*Math.sin(h)*Math.sin(a+.05*l),g=u*Math.cos(h);t.position.set(d,g,f);const _=new P(d,g,f).normalize();t.lookAt(t.position.clone().add(_));const m=n.len*(1+.06*l),p=n.wid*(1+.05*c);t.scale.set(p,p*.85,m),t.rotation.x+=.05*l,t.rotation.z+=.04*c,t.updateMatrix(),this._initMatrices.push(t.matrix.clone()),this._heights.push(1-r),this._layerRatios.push(r),e++}})}_applyInstances(){for(let t=0;t<Uh;t++)this._mesh.setMatrixAt(t,this._initMatrices[t]);this._mesh.geometry.setAttribute("aHeight",new Pi(new Float32Array(this._heights),1)),this._mesh.geometry.setAttribute("aLayer",new Pi(new Float32Array(this._layerRatios),1)),this._mesh.instanceMatrix.needsUpdate=!0}_animateInstances(t){const e=this.options,n=this._dummy,i=t%e.cycleDuration/e.cycleDuration;let r=0;Mo.forEach((o,a)=>{const l=a/(Ih-1),c=i-l*.35,u=.14*Math.sin(c*Math.PI*2),h=.025*Math.sin(c*Math.PI*2);for(let d=0;d<o.n;d++){const f=Math.sin(r*137.508+a*42),g=Math.cos(r*73+a*31),_=d/o.n*Math.PI*2+(a%2?Math.PI/o.n:0)+.05*f,m=.02+.14*l+h,p=o.open+.04*g+u,b=m*Math.sin(p)*Math.cos(_),x=m*Math.sin(p)*Math.sin(_),v=m*Math.cos(p);n.position.set(b,v,x);const C=new P(b,v,x).normalize();n.lookAt(n.position.clone().add(C));const T=o.len*(1+.06*f),E=o.wid*(1+.05*g);n.scale.set(E,E*.85,T),n.rotation.x+=.05*f,n.rotation.z+=.04*g,n.updateMatrix(),this._mesh.setMatrixAt(r,n.matrix),r++}}),this._mesh.instanceMatrix.needsUpdate=!0}_createMaterial(){return new ge({uniforms:{uTime:{value:0},uBreathAmp:{value:.004},uEnergySpeed:{value:.4},uEnergyStr:{value:.22},uFresnelStr:{value:.38},uCoreGlow:{value:.55}},vertexShader:sx,fragmentShader:rx,side:Pe,transparent:!0,depthWrite:!1,depthTest:!0})}_createStem(){const t=this.options,e=new zl(.014,.026,t.stemLength,8,6),n=new ge({vertexShader:`
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
        }`});this._stemMesh=new ne(e,n),this._stemMesh.position.set(0,t.stemY,0),this._group.add(this._stemMesh)}_createBackground(){this._bgMaterial=new ge({depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.9999, 1.0);
        }`,fragmentShader:ox}),this._bgMesh=new ne(new fn(2,2),this._bgMaterial),this._bgMesh.renderOrder=-1,this._bgMesh.frustumCulled=!1}}const sx=`
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
`,rx=`
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
`,ox=`
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
`;function Nh(s,t){if(t===Rd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===sl||t===iu){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===sl)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class Nu extends Ui{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new ux(e)}),this.register(function(e){return new dx(e)}),this.register(function(e){return new Mx(e)}),this.register(function(e){return new Sx(e)}),this.register(function(e){return new bx(e)}),this.register(function(e){return new px(e)}),this.register(function(e){return new mx(e)}),this.register(function(e){return new gx(e)}),this.register(function(e){return new _x(e)}),this.register(function(e){return new hx(e)}),this.register(function(e){return new vx(e)}),this.register(function(e){return new fx(e)}),this.register(function(e){return new yx(e)}),this.register(function(e){return new xx(e)}),this.register(function(e){return new lx(e)}),this.register(function(e){return new wx(e)}),this.register(function(e){return new Tx(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=tr.extractUrlBase(t);o=tr.resolveURL(c,this.path)}else o=tr.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Hl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(u){e(u),r.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Fu){try{o[qt.KHR_BINARY_GLTF]=new Ex(t)}catch(h){i&&i(h);return}r=JSON.parse(o[qt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new zx(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case qt.KHR_MATERIALS_UNLIT:o[h]=new cx;break;case qt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Ax(r,this.dracoLoader);break;case qt.KHR_TEXTURE_TRANSFORM:o[h]=new Rx;break;case qt.KHR_MESH_QUANTIZATION:o[h]=new Cx;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function ax(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const qt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lx{constructor(t){this.parser=t,this.name=qt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const u=new ut(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Xe);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vr(u),c.distance=h;break;case"spot":c=new Ps(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,kn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class cx{constructor(){this.name=qt.KHR_MATERIALS_UNLIT}getMaterialType(){return qn}extendParams(t,e,n){const i=[];t.color=new ut(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Xe),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ee))}return Promise.all(i)}}class hx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class ux{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Z(a,a)}return Promise.all(r)}}class dx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class fx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class px{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new ut(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Xe)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ee)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class mx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class gx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new ut().setRGB(a[0],a[1],a[2],Xe),Promise.all(r)}}class _x{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class vx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new ut().setRGB(a[0],a[1],a[2],Xe),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ee)),Promise.all(r)}}class xx{constructor(t){this.parser=t,this.name=qt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class yx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Mx{constructor(t){this.parser=t,this.name=qt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class Sx{constructor(t){this.parser=t,this.name=qt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class bx{constructor(t){this.parser=t,this.name=qt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class wx{constructor(t){this.name=qt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class Tx{constructor(t){this.name=qt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==an.TRIANGLES&&c.mode!==an.TRIANGLE_STRIP&&c.mode!==an.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new zt,m=new P,p=new An,b=new P(1,1,1),x=new mr(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&b.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(m,p,b));for(const v in l)if(v==="_COLOR_0"){const C=l[v];x.instanceColor=new Pi(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);ie.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Fu="glTF",Xs=12,Fh={JSON:1313821514,BIN:5130562};class Ex{constructor(t){this.name=qt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Xs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Fu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Xs,r=new DataView(t,Xs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Fh.JSON){const c=new Uint8Array(t,Xs+o,a);this.content=n.decode(c)}else if(l===Fh.BIN){const c=Xs+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ax{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=pl[u]||u.toLowerCase();a[h]=o[u]}for(const u in t.attributes){const h=pl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[t.attributes[u]],f=cs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,Xe,d)})})}}class Rx{constructor(){this.name=qt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Cx{constructor(){this.name=qt.KHR_MESH_QUANTIZATION}}class Ou extends gr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-e,h=(n-e)/u,d=h*h,f=d*h,g=t*c,_=g-c,m=-2*f+3*d,p=f-d,b=1-m,x=p-d+h;for(let v=0;v!==a;v++){const C=o[_+v+a],T=o[_+v+l]*u,E=o[g+v+a],A=o[g+v]*u;r[v]=b*C+x*T+m*E+p*A}return r}}const Px=new An;class Dx extends Ou{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Px.fromArray(r).normalize().toArray(r),r}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Oh={9728:De,9729:Me,9984:Yh,9985:ro,9986:qs,9987:Tn},Bh={33071:hn,33648:mo,10497:wn},pa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lx={CUBICSPLINE:void 0,LINEAR:sr,STEP:ir},ma={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ix(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ms({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yn})),s.DefaultMaterial}function Si(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function kn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Ux(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,u=t.length;c<u;c++){const h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=t.length;c<u;c++){const h=t[c];if(n){const d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Nx(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Fx(s){let t;const e=s.extensions&&s.extensions[qt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ga(e.attributes):t=s.indices+":"+ga(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+ga(s.targets[n]);return t}function ga(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function ml(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ox(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Bx=new zt;class zx{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new ax,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Pu(this.options.manager):this.textureLoader=new Mv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Si(r,a,i),kn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[qt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(tr.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=pa[i.type],a=cs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new pe(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=pa[i.type],c=cs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=e.cache.get(b);x||(_=new c(a,p*f,i.count*f/u),x=new __(_,f/u),e.cache.add(b,x)),m=new Ll(x,l,d%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new pe(_,l,g);if(i.sparse!==void 0){const p=pa.SCALAR,b=cs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,C=new b(o[1],x,i.sparse.count*p),T=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new pe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,A=C.length;E<A;E++){const M=C[E];if(m.setX(M,T[E*l]),l>=2&&m.setY(M,T[E*l+1]),l>=3&&m.setZ(M,T[E*l+2]),l>=4&&m.setW(M,T[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Oh[d.magFilter]||Me,u.minFilter=Oh[d.minFilter]||Tn,u.wrapS=Bh[d.wrapS]||wn,u.wrapT=Bh[d.wrapT]||wn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==De&&u.minFilter!==Me,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Ie(_);m.needsUpdate=!0,d(m)}),e.load(tr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),kn(h,o),h.userData.mimeType=o.mimeType||Ox(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Nl,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new di,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Ms}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[qt.KHR_MATERIALS_UNLIT]){const h=i[qt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,e))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ut(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Xe),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",h.baseColorTexture,Ee)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Pe);const u=r.alphaMode||ma.OPAQUE;if(u===ma.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ma.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==qn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Z(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==qn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==qn){const h=r.emissiveFactor;a.emissive=new ut().setRGB(h[0],h[1],h[2],Xe)}return r.emissiveTexture!==void 0&&o!==qn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ee)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),kn(h,r),e.associations.set(h,{materials:t}),r.extensions&&Si(i,h,r),h})}createUniqueName(t){const e=le.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[qt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return zh(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],u=Fx(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[qt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=zh(new ue,c,e),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Ix(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const b=c[f];if(m.mode===an.TRIANGLES||m.mode===an.TRIANGLE_STRIP||m.mode===an.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new x_(_,b):new ne(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===an.TRIANGLE_STRIP?p.geometry=Nh(p.geometry,iu):m.mode===an.TRIANGLE_FAN&&(p.geometry=Nh(p.geometry,sl));else if(m.mode===an.LINES)p=new Ei(_,b);else if(m.mode===an.LINE_STRIP)p=new Ul(_,b);else if(m.mode===an.LINE_LOOP)p=new S_(_,b);else if(m.mode===an.POINTS)p=new Fl(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Nx(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),kn(p,r),m.extensions&&Si(i,p,m),e.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return r.extensions&&Si(i,h[0],r),h[0];const d=new je;r.extensions&&Si(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new ye(_s.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new xs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),kn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new zt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Il(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let b=0,x=d.length;b<x;b++){const v=d[b],C=f[b],T=g[b],E=_[b],A=m[b];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,C,T,E,A);if(M)for(let y=0;y<M.length;y++)p.push(M[y])}return new cv(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Bx)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new yu:c.length>1?u=new je:c.length===1?u=c[0]:u=new ie,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),kn(u,r),r.extensions&&Si(n,u,r),r.matrix!==void 0){const h=new zt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new je;n.name&&(r.name=i.createUniqueName(n.name)),kn(r,n),n.extensions&&Si(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof dn||d instanceof Ie)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];ci[r.path]===ci.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ci[r.path]){case ci.weights:c=Ss;break;case ci.rotation:c=bs;break;case ci.position:case ci.scale:c=ws;break;default:switch(n.itemSize){case 1:c=Ss;break;case 2:case 3:default:c=ws;break}break}const u=i.interpolation!==void 0?Lx[i.interpolation]:sr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ci[r.path],e.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=ml(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof bs?Dx:Ou;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kx(s,t,e){const n=t.attributes,i=new ti;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=ml(cs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=e.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ml(cs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Rn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function zh(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=pl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Kt.workingColorSpace!==Xe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Kt.workingColorSpace}" not supported.`),kn(s,t),kx(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Ux(s,t.targets,e):s})}const Vx={},kh={genjin:{type:"stem",growStart:0,growEnd:.4},left1:{type:"leaf",growStart:.08,growEnd:.45},left2:{type:"leaf",growStart:.12,growEnd:.48},left3:{type:"leaf",growStart:.15,growEnd:.5},huarui:{type:"pistil",growStart:.35,growEnd:.6},huaban1:{type:"petal",growStart:.38,growEnd:.85,order:0},huaban4:{type:"petal",growStart:.41,growEnd:.87,order:1},huaban2:{type:"petal",growStart:.44,growEnd:.89,order:2},huaban5:{type:"petal",growStart:.47,growEnd:.91,order:3},huaban3:{type:"petal",growStart:.5,growEnd:.93,order:4},huaban6:{type:"petal",growStart:.53,growEnd:.95,order:5}};function _a(s){return 1-Math.pow(1-s,3)}function va(s){return 1+2.7*Math.pow(s-1,3)+1.7*Math.pow(s-1,2)}class Hx{constructor(t={}){this.options={autoPlay:!0,growthDuration:8,loopMode:"loop",petalOpenAngle:.3,petalScale:1,petalCurl:.4,stemHeight:1,stemBend:.05,leafScale:1,leafDroop:.2,windStrength:1,windSpeed:.5,sssStrength:.3,cameraDistance:3.5,autoRotateSpeed:.01,mouseParallaxH:.3,mouseParallaxV:.15,smoothFactor:.04,activeTab:1,...t},this._group=new je,this._group.position.set(0,-.15,0),this._clock=new Fi,this._time=0,this._mouse={x:0,y:0},this._target={x:0,y:0},this._bgMesh=null,this._bgMat=null,this._lightGroup=new je,this._loaded=!1,this._parts=new Map,this.camera=new ye(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,.2,.8)}build(){return this._createBackground(),this._createLights(),this._loadModel(),this}addTo(t){return t.add(this._group),t.add(this._lightGroup),this._bgMesh&&t.add(this._bgMesh),this}setMouse(t,e){this._mouse.x=(t/window.innerWidth-.5)*2,this._mouse.y=(e/window.innerHeight-.5)*2}update(){const t=this._clock.getDelta(),e=this.options;this._time+=t;const n=this._time;if(this._target.x+=(this._mouse.x*e.mouseParallaxH-this._target.x)*e.smoothFactor,this._target.y+=(-this._mouse.y*e.mouseParallaxV-this._target.y)*e.smoothFactor,this.camera.position.x=Math.sin(e.autoRotateSpeed*n+this._target.x)*e.cameraDistance*.23,this.camera.position.z=Math.cos(e.autoRotateSpeed*n+this._target.x)*e.cameraDistance*.23,this.camera.position.y=.15+this._target.y,this.camera.lookAt(0,.08,0),this._bgMat&&(this._bgMat.uniforms.uTime.value+=t),!this._loaded)return;let i;if(e.autoPlay){const r=e.growthDuration;if(e.loopMode==="loop")i=n%r/r;else if(e.loopMode==="pingpong"){const o=n%(r*2)/r;i=o<=1?o:2-o}else i=Math.min(n/r,1)}else i=Math.max(0,Math.min(1,e.growthProgress||0));this._animateParts(i,n)}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}dispose(){this._group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),this._group.parent&&this._group.parent.remove(this._group),this._lightGroup.parent&&this._lightGroup.parent.remove(this._lightGroup),this._bgMesh&&(this._bgMesh.geometry.dispose(),this._bgMat.dispose(),this._bgMesh.parent&&this._bgMesh.parent.remove(this._bgMesh))}_loadModel(){const t=new Nu,e=new Pu,n=typeof Vx<"u"&&"/3DProcedural_Ecosystem/"||"/",i=e.load(n+"model/color.png");i.flipY=!0,i.colorSpace=Ee;const r=e.load(n+"model/roughness.png");r.flipY=!0,t.load(n+"model/tulip-split.glb",o=>{const a=o.scene.clone(!0);a.traverse(l=>{if(!l.isMesh)return;const c=kh[l.name],u=new Ms({map:i,roughnessMap:r,roughness:.55,metalness:0,side:Pe,transparent:!0,opacity:0,envMapIntensity:.3});l.material=u,l.castShadow=!0,l.receiveShadow=!0;let h=null,d=0,f=0,g=1;if(c&&(c.type==="petal"||c.type==="leaf")){l.geometry=l.geometry.clone();const _=l.geometry.getAttribute("position");h=new Float32Array(_.array);let m=1/0,p=-1/0;for(let b=0;b<_.count;b++){const x=h[b*3+2];x<m&&(m=x),x>p&&(p=x)}d=m,f=p,g=p-m||1}this._parts.set(l.name,{mesh:l,initPos:l.position.clone(),initQuat:l.quaternion.clone(),initScale:l.scale.clone(),mat:u,origPositions:h,zMin:d,zMax:f,zRange:g})}),this._group.add(a),this._loaded=!0})}_createLights(){const t=new Ni(15261936,.6),e=new Qs(16774638,1.8);e.position.set(3,5,2),e.castShadow=!0;const n=new Qs(13682943,.7);n.position.set(-2,4,-3);const i=new Qs(15788287,.3);i.position.set(0,-1,2);const r=new vr(16766176,.8,2,2);r.position.set(0,.25,.15);const o=new _v(12110079,2767386,.35);this._lightGroup.add(t,e,n,i,r,o)}_createBackground(){this._bgMat=new ge({depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }
      `,fragmentShader:Gx}),this._bgMesh=new ne(new fn(2,2),this._bgMat),this._bgMesh.renderOrder=-1,this._bgMesh.frustumCulled=!1}_animateParts(t,e){const n=this.options,i=Math.sin(e*n.windSpeed*.4)*n.windStrength,r=Math.cos(e*n.windSpeed*.3+1.5)*n.windStrength;this._parts.forEach((a,l)=>{const{mesh:c,initPos:u,initQuat:h,initScale:d,mat:f,origPositions:g,zMin:_,zRange:m}=a,p=kh[l];if(!p)return;const b=Math.max(0,Math.min(1,(t-p.growStart)/(p.growEnd-p.growStart))),x=p.order||0;if(c.position.copy(u),c.quaternion.copy(h),c.scale.copy(d),g){const v=c.geometry.getAttribute("position");v.array.set(g),v.needsUpdate=!0}this._animateGrowth(c,f,p,b,x,e,i,r,g,_,m),c.visible=b>.001});const o=Math.min(3*t,1);this._group.rotation.y=0,this._group.rotation.z=.003*i*o,this._group.rotation.x=.002*r*o}_animateGrowth(t,e,n,i,r,o,a,l,c,u,h){const d=this.options;if(n.type==="stem"){const f=_a(i);t.scale.set(t.scale.x*(.3+.7*f),t.scale.y*Math.max(.001,f),t.scale.z*(.3+.7*f)),e.opacity=Math.min(i*5,1),f>.3&&(t.rotateZ(.003*a*f),t.rotateX(.002*l*f))}else if(n.type==="leaf"){const f=va(i);t.scale.multiplyScalar(Math.max(.001,f)),e.opacity=Math.min(i*4,1),t.rotateY((1-f)*.6),t.rotateX((1-f)*.18),f>.3&&t.rotateZ(.008*Math.sin(o*d.windSpeed*.6+t.id*2)*d.windStrength*f)}else if(n.type==="pistil")e.opacity=_a(Math.min(i*2.5,1));else if(n.type==="petal"){e.opacity=_a(Math.min(i*2.5,1));const f=Math.max(.001,va(Math.min(i/.5,1)));t.scale.multiplyScalar(f);const g=va(Math.min(Math.max((i-.25)/.75,0),1)),_=1-g;if(_>.005&&(t.rotateX(-(.5*_)),t.rotateY(.08*_*(r%2===0?1:-1))),c&&h){const m=t.geometry.getAttribute("position"),p=m.array;let b=Math.min(i/.65,1);const v=1-(b<.5?4*b*b*b:1-Math.pow(-2*b+2,3)/2);for(let C=0;C<m.count;C++){const T=c[C*3+2],E=(T-u)/h;p[C*3+2]=T+E*E*v*3.5}m.needsUpdate=!0}if(g>.7){const m=(g-.7)/.3;t.rotateX(.005*Math.sin(o*(1+r*.18)+r*1.5)*m*d.windStrength),t.rotateZ(.004*Math.sin(o*(.7+r*.13)+r*2.1)*m*d.windStrength)}}}}const Gx=`
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
`;class Wx extends gv{constructor(t){super(t),this.type=sn}parse(t){const o=function(A,M){switch(A){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(M||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(M||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(M||""))}},h=function(A,M,y){M=M||1024;let O=A.pos,F=-1,B=0,G="",z=String.fromCharCode.apply(null,new Uint16Array(A.subarray(O,O+128)));for(;0>(F=z.indexOf(`
`))&&B<M&&O<A.byteLength;)G+=z,B+=z.length,O+=128,z+=String.fromCharCode.apply(null,new Uint16Array(A.subarray(O,O+128)));return-1<F?(A.pos+=B+F+1,G+z.slice(0,F)):!1},d=function(A){const M=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,B={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let G,z;for((A.pos>=A.byteLength||!(G=h(A)))&&o(1,"no header found"),(z=G.match(M))||o(3,"bad initial token"),B.valid|=1,B.programtype=z[1],B.string+=G+`
`;G=h(A),G!==!1;){if(B.string+=G+`
`,G.charAt(0)==="#"){B.comments+=G+`
`;continue}if((z=G.match(y))&&(B.gamma=parseFloat(z[1])),(z=G.match(D))&&(B.exposure=parseFloat(z[1])),(z=G.match(O))&&(B.valid|=2,B.format=z[1]),(z=G.match(F))&&(B.valid|=4,B.height=parseInt(z[1],10),B.width=parseInt(z[2],10)),B.valid&2&&B.valid&4)break}return B.valid&2||o(3,"missing format specifier"),B.valid&4||o(3,"missing image size specifier"),B},f=function(A,M,y){const D=M;if(D<8||D>32767||A[0]!==2||A[1]!==2||A[2]&128)return new Uint8Array(A);D!==(A[2]<<8|A[3])&&o(3,"wrong scanline width");const O=new Uint8Array(4*M*y);O.length||o(4,"unable to allocate buffer space");let F=0,B=0;const G=4*D,z=new Uint8Array(4),K=new Uint8Array(G);let W=y;for(;W>0&&B<A.byteLength;){B+4>A.byteLength&&o(1),z[0]=A[B++],z[1]=A[B++],z[2]=A[B++],z[3]=A[B++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=D)&&o(3,"bad rgbe scanline format");let nt=0,st;for(;nt<G&&B<A.byteLength;){st=A[B++];const Ct=st>128;if(Ct&&(st-=128),(st===0||nt+st>G)&&o(3,"bad scanline data"),Ct){const Ut=A[B++];for(let q=0;q<st;q++)K[nt++]=Ut}else K.set(A.subarray(B,B+st),nt),nt+=st,B+=st}const pt=D;for(let Ct=0;Ct<pt;Ct++){let Ut=0;O[F]=K[Ct+Ut],Ut+=D,O[F+1]=K[Ct+Ut],Ut+=D,O[F+2]=K[Ct+Ut],Ut+=D,O[F+3]=K[Ct+Ut],F+=4}W--}return O},g=function(A,M,y,D){const O=A[M+3],F=Math.pow(2,O-128)/255;y[D+0]=A[M+0]*F,y[D+1]=A[M+1]*F,y[D+2]=A[M+2]*F,y[D+3]=1},_=function(A,M,y,D){const O=A[M+3],F=Math.pow(2,O-128)/255;y[D+0]=Pr.toHalfFloat(Math.min(A[M+0]*F,65504)),y[D+1]=Pr.toHalfFloat(Math.min(A[M+1]*F,65504)),y[D+2]=Pr.toHalfFloat(Math.min(A[M+2]*F,65504)),y[D+3]=Pr.toHalfFloat(1)},m=new Uint8Array(t);m.pos=0;const p=d(m),b=p.width,x=p.height,v=f(m.subarray(m.pos),b,x);let C,T,E;switch(this.type){case Le:E=v.length/4;const A=new Float32Array(E*4);for(let y=0;y<E;y++)g(v,y*4,A,y*4);C=A,T=Le;break;case sn:E=v.length/4;const M=new Uint16Array(E*4);for(let y=0;y<E;y++)_(v,y*4,M,y*4);C=M,T=sn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:b,height:x,data:C,header:p.string,gamma:p.gamma,exposure:p.exposure,type:T}}setDataType(t){return this.type=t,this}load(t,e,n,i){function r(o,a){switch(o.type){case Le:case sn:o.colorSpace=Xe,o.minFilter=Me,o.magFilter=Me,o.generateMipmaps=!1,o.flipY=!0;break}e&&e(o,a)}return super.load(t,r,n,i)}}const Xx={};class qx{constructor(){this.name="Bloom",this.category="flora",this._clock=new Fi,this._loaded=!1,this._renderer=null,this._scene=null,this._camera=null,this._group=null,this._petalMesh=null,this._stemMesh=null,this._particles=null,this._startProgress=0,this._groupRotY=0,this._animStartTime=-1,this._pointer=new Z(0,0),this._distortRT1=null,this._distortRT2=null,this._distortPhase=!1,this._distortScene=null,this._distortCamera=null,this._distortMat=null,this._lastNDC=new Z(.5,.5),this._currNDC=new Z(.5,.5),this._pointerDiff=0,this._isPointerEnter=!1,this._compScene=null,this._compCamera=null,this._compMat=null,this._mainRT=null,this._uStartProgress={value:0},this._uTime={value:0},this._uCycleDuration={value:6},this._uScaleMinY={value:.01},this._uScaleMaxY={value:.7},this._uScaleMinZ={value:.3},this._uScaleMaxZ={value:.4},this._uBendMin={value:1},this._uBendMax={value:-2},this._params={particleGravity:.0098,distortStrength:.05}}getCamera(){return this._camera}getLights(){return[]}getBackground(){return null}async init(t,e){this._renderer=e,this._scene=new ls;const n=document.createElement("canvas");n.width=2,n.height=512;const i=n.getContext("2d"),r=i.createLinearGradient(0,0,0,512);r.addColorStop(0,"#000000"),r.addColorStop(1,"#8386ff"),i.fillStyle=r,i.fillRect(0,0,2,512);const o=new _h(n);this._scene.background=o,this._camera=new ye(75,window.innerWidth/window.innerHeight,.1,100),this._camera.position.set(0,2,0),this._camera.zoom=2.5,this._camera.updateProjectionMatrix(),this._camera.lookAt(0,0,0),this._group=new je,this._group.rotation.y=0,this._scene.add(this._group),await this._loadAssets(e),this._setupDistortion(e),this._setupComposite(e),this._bindPointer(e),e.toneMapping=En,this._animStartTime=this._clock.getElapsedTime(),this._loaded=!0}async _loadAssets(t){const e=new Nu,n=new Wx,i=typeof Xx<"u"&&"/3DProcedural_Ecosystem/"||"/",[r,o,a]=await Promise.all([new Promise((h,d)=>e.load(i+"model/bloom-petal.glb",h,void 0,d)),new Promise((h,d)=>e.load(i+"model/bloom-stem.glb",h,void 0,d)),new Promise((h,d)=>n.load(i+"model/dawn.hdr",h,void 0,d))]),l=new al(t);l.compileEquirectangularShader();const c=l.fromEquirectangular(a);this._scene.environment=c.texture,this._scene.environmentIntensity=.5,this._scene.environmentRotation=new Qe(0,-Math.PI/1.5,0),a.dispose(),l.dispose();const u=o.scene;u.position.set(0,-3.3,-.03),u.scale.setScalar(.8),u.traverse(h=>{h.isMesh&&(h.material=new Ms({roughness:.5,color:"#ffffff"}))}),this._group.add(u),this._stemMesh=u,this._setupPetals(r),this._setupParticles()}_setupPetals(t){let e=null,n=null;if(t.scene.traverse(c=>{c.isMesh&&!e&&(e=c.geometry,n=c.material)}),!e)return;const i=new Ms({side:Pe,map:n.map,normalMap:n.normalMap,roughnessMap:n.roughnessMap,metalnessMap:n.metalnessMap,emissiveMap:n.emissiveMap});i.map&&(i.map.colorSpace=Ee);const r=this._uStartProgress,o=this._uTime;i.onBeforeCompile=c=>{c.uniforms.uStartProgress=r,c.uniforms.uTime=o,c.uniforms.uCycleDuration=this._uCycleDuration,c.uniforms.uScaleMinY=this._uScaleMinY,c.uniforms.uScaleMaxY=this._uScaleMaxY,c.uniforms.uScaleMinZ=this._uScaleMinZ,c.uniforms.uScaleMaxZ=this._uScaleMaxZ,c.uniforms.uBendMin=this._uBendMin,c.uniforms.uBendMax=this._uBendMax,c.vertexShader=c.vertexShader.replace("#include <common>",`
        #include <common>
        uniform float uStartProgress;
        uniform float uTime;
        uniform float uCycleDuration;
        uniform float uScaleMinY;
        uniform float uScaleMaxY;
        uniform float uScaleMinZ;
        uniform float uScaleMaxZ;
        uniform float uBendMin;
        uniform float uBendMax;

        vec3 tslScale(vec3 p, vec3 s) {
          return vec3(p.x*s.x, p.y*s.y, p.z*s.z);
        }

        // 原版 bend(r_co, factor, axis=2, dcut=(0,0,0), origin=(0,0,0))
        // axis=2 的 Else 分支: angle = x * factor
        vec3 tslBend(vec3 p, float factor, vec3 origin) {
          if(abs(factor) < 1e-5) return p;
          p -= origin;
          float cx = p.x;
          float cy = p.y;
          float cz = p.z;
          // axis=2: angle based on x coordinate
          float angle = cx * factor;
          float sinA = sin(angle);
          float cosA = cos(angle);
          vec3 result;
          // axis=2 Else branch from original TSL:
          // d.x = -(y - 1/factor) * sin(angle)
          // d.y = y * cos(angle) + (1-cos(angle))/factor  
          // d.z = z (unchanged)
          result.x = -(cy - (1.0/factor)) * sinA;
          result.y = cy * cosA + (1.0 - cosA) / factor;
          result.z = cz;
          return result + origin;
        }

        // 原版 rotate(position, axis=(0,1,0), angle)
        vec3 tslRotateY(vec3 p, float a) {
          float ca = cos(a); float sa = sin(a);
          return vec3(p.x*ca + p.z*sa, p.y, -p.x*sa + p.z*ca);
        }
        `),c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`
        #include <begin_vertex>

        // instanceID / 64 * cycleDuration
        float iid = float(gl_InstanceID);
        float phaseOffset = iid / 64.0 * uCycleDuration;
        float nt = mod(uTime + phaseOffset, uCycleDuration) / uCycleDuration;

        // bendStrength = mix(startProgress, 0, 1, bendMin, bendMax)
        float bendStr = mix(uBendMin, uBendMax, uStartProgress);
        float curv = mix(6.28318, bendStr * 3.14159, nt);

        // scaleFactor (controllable Y and Z, X fixed at 0.8)
        vec3 sf = mix(vec3(0.8, uScaleMinY, uScaleMinZ), vec3(0.8, uScaleMaxY, uScaleMaxZ), uStartProgress);

        // 1. scale by startProgress-dependent factor
        transformed = tslScale(transformed, sf);
        // 2. bend axis=2, origin=(0,0,0)
        transformed = tslBend(transformed, curv, vec3(0.0));
        // 3. bloom scale: remap(nt, 0, 0.5, 0, 1)
        float bloomS = clamp(nt / 0.5, 0.0, 1.0);
        transformed = tslScale(transformed, vec3(bloomS));
        // 4. shrink scale: remap(nt, 0.5, 1, 0.8, 0.2)
        float shrinkT = clamp((nt - 0.5) / 0.5, 0.0, 1.0);
        float shrinkS = mix(0.8, 0.2, shrinkT);
        transformed = tslScale(transformed, vec3(shrinkS));
        // 5. rotate Y: mul(mul(PI, -0.3), startProgress) = PI * -0.3 * startProgress
        float yAngle = 3.14159 * -0.3 * uStartProgress;
        transformed = tslRotateY(transformed, yAngle);
        `),c.vertexShader=c.vertexShader.replace("#include <project_vertex>",`
        {
          float fd_po = float(gl_InstanceID) / 64.0 * uCycleDuration;
          float fd_nt = mod(uTime + fd_po, uCycleDuration) / uCycleDuration;
          float fd_bs = mix(uBendMin, uBendMax, uStartProgress);
          float fd_cv = mix(6.28318, fd_bs * 3.14159, fd_nt);
          vec3 fd_sf = mix(vec3(0.8, uScaleMinY, uScaleMinZ), vec3(0.8, uScaleMaxY, uScaleMaxZ), uStartProgress);
          float fd_bl = clamp(fd_nt / 0.5, 0.0, 1.0);
          float fd_sh = mix(0.8, 0.2, clamp((fd_nt - 0.5) / 0.5, 0.0, 1.0));
          float fd_ya = 3.14159 * -0.3 * uStartProgress;

          vec3 fd_p2 = position + vec3(0.0, 0.0, 0.01);
          fd_p2 = tslScale(fd_p2, fd_sf);
          fd_p2 = tslBend(fd_p2, fd_cv, vec3(0.0));
          fd_p2 = tslScale(fd_p2, vec3(fd_bl));
          fd_p2 = tslScale(fd_p2, vec3(fd_sh));
          fd_p2 = tslRotateY(fd_p2, fd_ya);

          vec3 fd_p3 = position + vec3(0.01, 0.0, 0.0);
          fd_p3 = tslScale(fd_p3, fd_sf);
          fd_p3 = tslBend(fd_p3, fd_cv, vec3(0.0));
          fd_p3 = tslScale(fd_p3, vec3(fd_bl));
          fd_p3 = tslScale(fd_p3, vec3(fd_sh));
          fd_p3 = tslRotateY(fd_p3, fd_ya);

          vec3 fd_n = normalize(cross(normalize(fd_p3 - transformed), normalize(fd_p2 - transformed)));
          vNormal = normalize(normalMatrix * fd_n);
        }
        #include <project_vertex>
        `),c.uniforms.uStartProgressF=r,c.fragmentShader=c.fragmentShader.replace("#include <common>",`
        #include <common>
        uniform float uStartProgressF;
        `),c.fragmentShader=c.fragmentShader.replace("#include <normal_fragment_begin>",`
        #include <normal_fragment_begin>
        if (gl_FrontFacing) {
          normal = abs(normal);
        }
        `),c.fragmentShader=c.fragmentShader.replace("#include <color_fragment>",`
        #include <color_fragment>
        float fadeIn = clamp(uStartProgressF * 2.0, 0.0, 1.0);
        diffuseColor.rgb = mix(vec3(0.0), diffuseColor.rgb, fadeIn);
        `)};const a=new mr(e,i,128),l=new ie;for(let c=0;c<128;c++)l.rotation.set(0,_s.degToRad(140*c),0),l.updateMatrix(),a.setMatrixAt(c,l.matrix);a.instanceMatrix.needsUpdate=!0,this._group.add(a),this._petalMesh=a}_setupParticles(){const n=new Float32Array(1200),i=new Float32Array(400*3),r=new Float32Array(400);for(let l=0;l<400;l++)n[l*3]=(Math.random()-.5)*20,n[l*3+1]=(Math.random()-.5)*20,n[l*3+2]=(Math.random()-.5)*20,r[l]=Math.random();const o=new ue;o.setAttribute("position",new pe(n,3)),o.setAttribute("aPhase",new pe(r,1)),this._particleVel=i;const a=new ge({uniforms:{uTime:{value:0}},vertexShader:`
        attribute float aPhase;
        varying float vAlpha;
        uniform float uTime;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = max(1.0, 0.01 * (300.0 / -mv.z));
          gl_Position = projectionMatrix * mv;
          vAlpha = abs(sin(uTime * aPhase * 1.0));
        }
      `,fragmentShader:`
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          if (d > 1.0) discard;
          float a = (1.0 - d) * vAlpha * 0.5;
          gl_FragColor = vec4(1.0, 1.0, 1.0, a);
        }
      `,transparent:!0,depthWrite:!1,blending:po});this._particles=new Fl(o,a),this._scene.add(this._particles)}_setupDistortion(t){const e=window.innerWidth,n=window.innerHeight,i={minFilter:Me,magFilter:Me,format:ze,type:Le};this._distortRT1=new ke(e,n,i),this._distortRT2=new ke(e,n,i),this._distortScene=new ls,this._distortCamera=new xs(-1,1,1,-1,0,1),this._distortMat=new ge({uniforms:{tPrev:{value:null},uPointer:{value:new Z(.5,.5)},uLastPointer:{value:new Z(.5,.5)},uBrushSize:{value:.08},uFadingRate:{value:.9},uIsPointerEnter:{value:0},uDiff:{value:0},uAspect:{value:e/n}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
      `,fragmentShader:`
        uniform sampler2D tPrev;
        uniform vec2 uPointer, uLastPointer;
        uniform float uBrushSize, uFadingRate, uIsPointerEnter, uDiff, uAspect;
        varying vec2 vUv;

        float distToSeg(vec2 p, vec2 a, vec2 b) {
          vec2 pa = p - a, ba = b - a;
          float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
          return length(pa - ba * h);
        }

        void main() {
          vec2 asp = vec2(uAspect, 1.0);
          vec2 p = vUv * asp;
          vec2 a = uLastPointer * asp;
          vec2 b = uPointer * asp;

          // 原版: 两种笔刷 — 线段距离 + 点到点
          float segDist = distToSeg(p, a, b);
          float segBrush = 1.0 - smoothstep(0.0, uBrushSize, segDist);

          vec2 dir = b - a;
          float proj = clamp(dot(p - a, dir) / dot(dir, dir), 0.0, 1.0);
          float segMix = segBrush * proj * (1.0 - uFadingRate) + uFadingRate;

          vec4 prev = texture2D(tPrev, vUv) * uFadingRate;

          float ptDist = length(p - b);
          float ptBrush = 1.0 - smoothstep(0.0, uBrushSize, ptDist);

          float influence = uIsPointerEnter * smoothstep(0.001, 0.01, uDiff);

          vec4 newVal = mix(prev, vec4(uIsPointerEnter, 0.0, 0.0, 1.0), ptBrush);
          vec4 segVal = mix(prev, vec4(uIsPointerEnter, 0.0, 0.0, 1.0), segMix);

          gl_FragColor = mix(prev, segVal, influence);
        }
      `});const r=new ne(new fn(2,2),this._distortMat);this._distortScene.add(r)}_setupComposite(t){const e=window.innerWidth,n=window.innerHeight;this._mainRT=new ke(e,n,{minFilter:Me,magFilter:Me}),this._compScene=new ls,this._compCamera=new xs(-1,1,1,-1,0,1),this._compMat=new ge({uniforms:{tScene:{value:null},tDistort:{value:null},uDistortStrength:{value:.05}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
      `,fragmentShader:`
        uniform sampler2D tScene;
        uniform sampler2D tDistort;
        uniform float uDistortStrength;
        varying vec2 vUv;
        void main() {
          vec4 d = texture2D(tDistort, vUv);
          vec2 uv = vec2(vUv.x + d.r * uDistortStrength, vUv.y);
          gl_FragColor = texture2D(tScene, uv);
        }
      `});const i=new ne(new fn(2,2),this._compMat);this._compScene.add(i)}_bindPointer(t){const e=t.domElement;this._onMove=n=>{const i=e.getBoundingClientRect(),r=(n.clientX-i.left)/i.width*2-1,o=-((n.clientY-i.top)/i.height)*2+1;this._pointer.set(r,o);const a=.5*r+.5,l=.5*o+.5;this._lastNDC.copy(this._currNDC),this._currNDC.set(a,l);const c=this._currNDC.x-this._lastNDC.x,u=this._currNDC.y-this._lastNDC.y;this._pointerDiff=Math.sqrt(c*c+u*u)},this._isPointerEnter=!0,e.addEventListener("pointermove",this._onMove)}update(t,e){if(!this._loaded)return;const n=this._clock.getElapsedTime(),i=n-this._animStartTime,r=Math.min(i/2,1),o=r*r*(3-2*r)*2;this._camera.position.z=o;const a=Math.min(i/1.5,1);this._group.rotation.y=-(a*a*(3-2*a))*Math.PI/2;const l=Math.max(i-.5,0),c=Math.min(l/5.5,1);this._startProgress=c*c*(3-2*c),this._uStartProgress.value=this._startProgress,this._uTime.value=n;const u=-(.3*this._pointer.x);if(this._camera.position.x+=(u-this._camera.position.x)*.05,this._camera.position.y+=(2-this._camera.position.y)*.05,r>=1&&(this._camera.position.z+=(2-this._camera.position.z)*.05),this._camera.lookAt(0,0,0),this._particles){this._particles.material.uniforms.uTime.value=n;const h=this._particles.geometry.getAttribute("position"),d=h.array,f=this._particleVel;for(let g=0;g<h.count;g++){const _=g*3;f[_+1]-=this._params.particleGravity,d[_]+=f[_],d[_+1]+=f[_+1],d[_+2]+=f[_+2],d[_+1]<0&&(d[_+1]=0,f[_+1]=-f[_+1])}h.needsUpdate=!0}}render(t){if(!this._loaded)return;t.setRenderTarget(this._mainRT),t.render(this._scene,this._camera);const e=this._distortPhase?this._distortRT2:this._distortRT1,n=this._distortPhase?this._distortRT1:this._distortRT2;this._distortMat.uniforms.tPrev.value=e.texture,this._distortMat.uniforms.uPointer.value.copy(this._currNDC),this._distortMat.uniforms.uLastPointer.value.copy(this._lastNDC),this._distortMat.uniforms.uDiff.value=this._pointerDiff,this._distortMat.uniforms.uIsPointerEnter.value=this._isPointerEnter?1:0,t.setRenderTarget(n),t.render(this._distortScene,this._distortCamera),this._distortPhase=!this._distortPhase,this._pointerDiff*=.95,this._compMat.uniforms.tScene.value=this._mainRT.texture,this._compMat.uniforms.tDistort.value=n.texture,t.setRenderTarget(null),t.render(this._compScene,this._compCamera)}onResize(t,e){this._camera&&(this._camera.aspect=t/e,this._camera.updateProjectionMatrix()),this._mainRT&&this._mainRT.setSize(t,e),this._distortRT1&&(this._distortRT1.setSize(t,e),this._distortRT2.setSize(t,e)),this._distortMat&&(this._distortMat.uniforms.uAspect.value=t/e)}applyParam(t,e){switch(t){case"cameraZoom":this._camera&&(this._camera.zoom=e,this._camera.updateProjectionMatrix());break;case"cameraFov":this._camera&&(this._camera.fov=e,this._camera.updateProjectionMatrix());break;case"startProgress":this._uStartProgress.value=e,this._startProgress=e;break;case"cycleDuration":this._uCycleDuration.value=e;break;case"petalRotStep":if(this._petalMesh){const n=new ie;for(let i=0;i<128;i++)n.rotation.set(0,_s.degToRad(e*i),0),n.updateMatrix(),this._petalMesh.setMatrixAt(i,n.matrix);this._petalMesh.instanceMatrix.needsUpdate=!0}break;case"scaleMinY":this._uScaleMinY.value=e;break;case"scaleMaxY":this._uScaleMaxY.value=e;break;case"scaleMinZ":this._uScaleMinZ.value=e;break;case"scaleMaxZ":this._uScaleMaxZ.value=e;break;case"bendMin":this._uBendMin.value=e;break;case"bendMax":this._uBendMax.value=e;break;case"envIntensity":this._scene&&(this._scene.environmentIntensity=e);break;case"envRotation":this._scene&&(this._scene.environmentRotation=new Qe(0,e,0));break;case"distortStrength":this._params.distortStrength=e,this._compMat&&(this._compMat.uniforms.uDistortStrength.value=e);break;case"distortBrush":this._distortMat&&(this._distortMat.uniforms.uBrushSize.value=e);break;case"distortFade":this._distortMat&&(this._distortMat.uniforms.uFadingRate.value=e);break;case"particleSize":this._particles&&(this._particles.material.uniforms.uSize={value:e});break;case"particleGravity":this._params.particleGravity=e;break;case"particleSpread":if(this._particles){const n=this._particles.geometry.getAttribute("position");for(let i=0;i<n.count;i++)n.array[i*3]=(Math.random()-.5)*e,n.array[i*3+1]=(Math.random()-.5)*e,n.array[i*3+2]=(Math.random()-.5)*e;n.needsUpdate=!0}break;case"stemRoughness":this._stemMesh&&this._stemMesh.traverse(n=>{n.isMesh&&n.material&&(n.material.roughness=e)});break;case"stemPosY":this._stemMesh&&(this._stemMesh.position.y=e);break;case"bgColorTop":case"bgColorBot":this._updateBackground(t==="bgColorTop"?e:null,t==="bgColorBot"?e:null);break}}_updateBackground(t,e){if(!this._scene)return;this._bgTop=t||this._bgTop||"#000000",this._bgBot=e||this._bgBot||"#8386ff";const n=document.createElement("canvas");n.width=2,n.height=512;const i=n.getContext("2d"),r=i.createLinearGradient(0,0,0,512);r.addColorStop(0,this._bgTop),r.addColorStop(1,this._bgBot),i.fillStyle=r,i.fillRect(0,0,2,512);const o=new _h(n);this._scene.background&&this._scene.background.dispose&&this._scene.background.dispose(),this._scene.background=o}dispose(){var e;this._mainRT&&this._mainRT.dispose(),this._distortRT1&&(this._distortRT1.dispose(),this._distortRT2.dispose());const t=(e=this._renderer)==null?void 0:e.domElement;t&&t.removeEventListener("pointermove",this._onMove)}}class Yx{static wingFlapFunction(t={}){const{timeUniform:e="uTime",frequencyUniform:n="uFlapFrequency",amplitudeUniform:i="uFlapAmplitude"}=t;return`
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
    `}}class jx{constructor(t={}){this.count=t.count||50,this.rng=new Iu(t.seed??42),this.separationDist=t.separationDist??1.5,this.alignmentDist=t.alignmentDist??3,this.cohesionDist=t.cohesionDist??4,this.separationWeight=t.separationWeight??1.5,this.alignmentWeight=t.alignmentWeight??1,this.cohesionWeight=t.cohesionWeight??1,this.maxSpeed=t.maxSpeed??2,this.maxForce=t.maxForce??.03,this.bounds=t.bounds??[20,10,20],this.boundaryForce=t.boundaryForce??.5,this.positions=new Float32Array(this.count*3),this.velocities=new Float32Array(this.count*3),this.accelerations=new Float32Array(this.count*3),this._positionTexture=null,this._velocityTexture=null,this._initialize()}_initialize(){this.rng.reset();for(let t=0;t<this.count;t++){const e=t*3;this.positions[e]=this.rng.range(-this.bounds[0]*.5,this.bounds[0]*.5),this.positions[e+1]=this.rng.range(1,this.bounds[1]),this.positions[e+2]=this.rng.range(-this.bounds[2]*.5,this.bounds[2]*.5);const n=this.rng.range(.5,this.maxSpeed),i=this.rng.range(0,Math.PI*2),r=this.rng.range(-.3,.3);this.velocities[e]=Math.cos(i)*Math.cos(r)*n,this.velocities[e+1]=Math.sin(r)*n*.3,this.velocities[e+2]=Math.sin(i)*Math.cos(r)*n}}update(t){const e=Math.min(t,.05);this.accelerations.fill(0);for(let n=0;n<this.count;n++)this._computeForces(n);for(let n=0;n<this.count;n++){const i=n*3;this.velocities[i]+=this.accelerations[i]*e,this.velocities[i+1]+=this.accelerations[i+1]*e,this.velocities[i+2]+=this.accelerations[i+2]*e;const r=Math.sqrt(this.velocities[i]**2+this.velocities[i+1]**2+this.velocities[i+2]**2);if(r>this.maxSpeed){const o=this.maxSpeed/r;this.velocities[i]*=o,this.velocities[i+1]*=o,this.velocities[i+2]*=o}this.positions[i]+=this.velocities[i]*e,this.positions[i+1]+=this.velocities[i+1]*e,this.positions[i+2]+=this.velocities[i+2]*e,this._applyBoundary(n)}this._positionTexture&&this._updateTextures()}_computeForces(t){const e=t*3,n=this.positions[e],i=this.positions[e+1],r=this.positions[e+2];let o=0,a=0,l=0,c=0,u=0,h=0,d=0,f=0,g=0,_=0,m=0,p=0;for(let x=0;x<this.count;x++){if(x===t)continue;const v=x*3,C=this.positions[v]-n,T=this.positions[v+1]-i,E=this.positions[v+2]-r,A=Math.sqrt(C*C+T*T+E*E);if(!(A<.001)){if(A<this.separationDist){const M=1/A;o-=C*M,a-=T*M,l-=E*M,c++}A<this.alignmentDist&&(u+=this.velocities[v],h+=this.velocities[v+1],d+=this.velocities[v+2],f++),A<this.cohesionDist&&(g+=this.positions[v],_+=this.positions[v+1],m+=this.positions[v+2],p++)}}const b=(x,v,C,T)=>{const E=Math.sqrt(x*x+v*v+C*C);if(E>0){const A=Math.min(this.maxForce*T/E,this.maxForce*T);this.accelerations[e]+=x*A,this.accelerations[e+1]+=v*A,this.accelerations[e+2]+=C*A}};c>0&&b(o,a,l,this.separationWeight),f>0&&b(u/f-this.velocities[e],h/f-this.velocities[e+1],d/f-this.velocities[e+2],this.alignmentWeight),p>0&&b(g/p-n,_/p-i,m/p-r,this.cohesionWeight)}_applyBoundary(t){const e=t*3,n=2,[i,r,o]=this.bounds;for(let a=0;a<3;a++){const l=this.bounds[a]*.5,c=this.positions[e+a];a===1?(c<.5&&(this.velocities[e+a]+=this.boundaryForce),c>r&&(this.velocities[e+a]-=this.boundaryForce)):(c<-l+n&&(this.velocities[e+a]+=this.boundaryForce),c>l-n&&(this.velocities[e+a]-=this.boundaryForce))}}applyToInstancedMesh(t){const e=new ie,n=new P(0,1,0),i=new P;for(let r=0;r<this.count;r++){const o=r*3;e.position.set(this.positions[o],this.positions[o+1],this.positions[o+2]),i.set(this.velocities[o],this.velocities[o+1],this.velocities[o+2]).normalize(),e.quaternion.setFromUnitVectors(n,i);const a=Math.atan2(this.accelerations[o],9.8)*.3;e.rotateZ(a),e.updateMatrix(),t.setMatrixAt(r,e.matrix)}t.instanceMatrix.needsUpdate=!0}createGPUTextures(){const t=Math.ceil(Math.sqrt(this.count)),e=t*t,n=new Float32Array(e*4),i=new Float32Array(e*4);for(let r=0;r<this.count;r++){const o=r*3,a=r*4;n[a]=this.positions[o],n[a+1]=this.positions[o+1],n[a+2]=this.positions[o+2],n[a+3]=1,i[a]=this.velocities[o],i[a+1]=this.velocities[o+1],i[a+2]=this.velocities[o+2],i[a+3]=0}return this._positionTexture=new ys(n,t,t,ze,Le),this._positionTexture.needsUpdate=!0,this._velocityTexture=new ys(i,t,t,ze,Le),this._velocityTexture.needsUpdate=!0,{positionTexture:this._positionTexture,velocityTexture:this._velocityTexture,textureSize:t}}_updateTextures(){if(!this._positionTexture)return;const t=this._positionTexture.image.data,e=this._velocityTexture.image.data;for(let n=0;n<this.count;n++){const i=n*3,r=n*4;t[r]=this.positions[i],t[r+1]=this.positions[i+1],t[r+2]=this.positions[i+2],e[r]=this.velocities[i],e[r+1]=this.velocities[i+1],e[r+2]=this.velocities[i+2]}this._positionTexture.needsUpdate=!0,this._velocityTexture.needsUpdate=!0}static gpuSampleFunction(){return`
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
    `}dispose(){this._positionTexture&&this._positionTexture.dispose(),this._velocityTexture&&this._velocityTexture.dispose()}}class gl extends Ds{constructor(t={}){super({wingSpan:1.5,wingAspect:1.2,wingSegments:16,flapFrequency:8,flapAmplitude:.8,baseColor:[.1,.05,.2],filmThickness:400,ior:1.5,iridescenceIntensity:.8,flockCount:0,...t}),this._boids=null}_buildGeometry(){const t=this._params,e=t.wingSegments,n=t.wingSpan,i=t.wingAspect,r=[],o=[],a=[],l=[],c=[];for(let _=0;_<2;_++){const m=_===0?1:-1,p=r.length/3;for(let b=0;b<=e;b++){const x=b/e;for(let v=0;v<=e;v++){const C=v/e,T=n*.5*this._wingProfile(x),E=n*i,A=m*(x*T+.05),M=(C-.5)*E*this._wingChord(x),y=this._wingCamber(C,x)*.1;r.push(A,y,M),o.push(0,1,0),a.push(C,x),c.push(x)}}for(let b=0;b<e;b++)for(let x=0;x<e;x++){const v=p+b*(e+1)+x,C=v+1,T=v+(e+1),E=T+1;_===0?l.push(v,C,E,v,E,T):l.push(v,E,C,v,T,E)}}const u=r.length/3,h=8,d=n*i*.6,f=.03;for(let _=0;_<=h;_++){const m=_/h,p=(m-.5)*d,b=f*(1-Math.abs(m-.4)*1.5);for(let x=0;x<=h;x++){const v=x/h*Math.PI*2;r.push(Math.cos(v)*Math.max(b,.005),Math.sin(v)*Math.max(b,.005),p),o.push(Math.cos(v),Math.sin(v),0),a.push(x/h,m),c.push(0)}}for(let _=0;_<h;_++)for(let m=0;m<h;m++){const p=u+_*(h+1)+m,b=p+1,x=p+(h+1),v=x+1;l.push(p,b,v,p,v,x)}const g=new ue;return g.setAttribute("position",new me(r,3)),g.setAttribute("normal",new me(o,3)),g.setAttribute("uv",new me(a,2)),g.setAttribute("aWingMask",new me(c,1)),g.setIndex(l),g.computeVertexNormals(),g.computeBoundingSphere(),g}_buildMaterial(){const t=this._params,e=`
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

      ${Yx.wingFlapFunction()}

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

      ${Yn.thinFilmIridescenceFunction()}
      ${Yn.anisotropicSpecularFunction()}
      ${Yn.fresnelFunction()}

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
    `;return new Yn({vertexShader:e,fragmentShader:n,transparent:!0,side:Pe,uniforms:{uBaseColor:{value:new P(...t.baseColor)},uFilmThickness:{value:t.filmThickness},uIOR:{value:t.ior},uIridescenceIntensity:{value:t.iridescenceIntensity},uFlapFrequency:{value:t.flapFrequency},uFlapAmplitude:{value:t.flapAmplitude},uWingSpan:{value:t.wingSpan},uRandomSeed:{value:t.seed*.001}}})}_buildMesh(){const t=this._params;if(t.flockCount>0){const e=new mr(this._geometry,this._material,t.flockCount);return e.frustumCulled=!1,this._boids=new jx({count:t.flockCount,seed:t.seed,maxSpeed:3,bounds:[30,15,30]}),this._boids.applyToInstancedMesh(e),e}return new ne(this._geometry,this._material)}_wingProfile(t){return Math.sin(t*Math.PI)*(1-t*.3)}_wingChord(t){return 1-t*t*.5}_wingCamber(t,e){return Math.sin(t*Math.PI)*(1-e)*.5}updateFlock(t){return this._boids&&this._mesh&&(this._boids.update(t),this._boids.applyToInstancedMesh(this._mesh)),this}getBoids(){return this._boids}dispose(){super.dispose(),this._boids&&(this._boids.dispose(),this._boids=null)}}Es.register("BionicButterfly",gl,{wingSpan:1.5,baseColor:[.1,.05,.2],filmThickness:400});class Kx{static glsl(){return`
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
    `}}class Bu extends Ds{constructor(t={}){super({power:8,iterations:12,bailout:2,scale:2,colorA:[.1,.2,.6],colorB:[.9,.3,.1],glowIntensity:.5,animate:!0,...t})}_buildGeometry(){return new fn(2,2)}_buildMaterial(){const t=this._params,e=`
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

      ${Kx.glsl()}

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
    `;return new Yn({vertexShader:e,fragmentShader:n,transparent:!1,side:yn,depthWrite:!1,depthTest:!1,uniforms:{uPower:{value:t.power},uIterations:{value:t.iterations},uBailout:{value:t.bailout},uScale:{value:t.scale},uColorA:{value:new P(...t.colorA)},uColorB:{value:new P(...t.colorB)},uGlowIntensity:{value:t.glowIntensity},uAnimate:{value:t.animate?1:0}}})}_buildMesh(){const t=new ne(this._geometry,this._material);return t.frustumCulled=!1,t}setPower(t){return this._material&&(this._material.uniforms.uPower.value=t),this}}Es.register("MandelbulbFractal",Bu,{power:8,colorA:[.1,.2,.6],colorB:[.9,.3,.1]});class Zx{static glsl(){return`
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
    `}}class zu extends Ds{constructor(t={}){super({colorTop:[.1,.8,.3],colorBottom:[.3,.1,.6],colorAccent:[.1,.3,.9],height:5,curtainWidth:15,speed:.3,intensity:1.5,turbulence:1,raySteps:48,...t})}_buildGeometry(){return new fn(2,2)}_buildMaterial(){const t=this._params,e=`
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

      ${Zx.glsl()}

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
    `;return new Yn({vertexShader:e,fragmentShader:n,transparent:!1,side:yn,depthWrite:!1,depthTest:!1,uniforms:{uColorTop:{value:new P(...t.colorTop)},uColorBottom:{value:new P(...t.colorBottom)},uColorAccent:{value:new P(...t.colorAccent)},uHeight:{value:t.height},uCurtainWidth:{value:t.curtainWidth},uSpeed:{value:t.speed},uIntensity:{value:t.intensity},uTurbulence:{value:t.turbulence},uRaySteps:{value:t.raySteps}}})}_buildMesh(){const t=new ne(this._geometry,this._material);return t.frustumCulled=!1,t}}Es.register("AuroraBorealis",zu,{colorTop:[.1,.8,.3],colorBottom:[.3,.1,.6],intensity:1.5});class Ls{constructor(t={}){const e=this.getDefaults?this.getDefaults():{};this._params={...e,...t},this._uniforms=null,this._material=null,this._mesh=null,this._scene=null,this._renderer=null,this._camera=new Rl,this._camera.position.z=1,this._startTime=Date.now(),this._innerScene=new ls,this._bufferTarget=null,this._bufferFeedback=null}getDefaults(){return{}}_buildUniforms(){const t={iTime:{value:0},iResolution:{value:new Z(window.innerWidth,window.innerHeight)},iDpr:{value:window.devicePixelRatio||1},iMouse:{value:new Z(window.innerWidth/2,window.innerHeight/2)}};for(const e in this._params){const n=this._params[e];if(!(e==="seed"||e==="texturePath"))if(e.toLowerCase().includes("color")){const i=new ut(n);t[e]={value:new P(i.r,i.g,i.b)}}else typeof n=="number"&&(t[e]={value:n})}return t}build(){return this._uniforms=this._buildUniforms(),typeof this.onInit=="function"&&this.onInit(),this._material=new ge({uniforms:this._uniforms,vertexShader:"void main(){ gl_Position = vec4(position, 1.0); }",fragmentShader:this.constructor.fragmentShader||"void main(){ gl_FragColor=vec4(0.); }",depthWrite:!1,depthTest:!1}),this._mesh=new ne(new fn(2,2),this._material),this._mesh.frustumCulled=!1,this._innerScene.add(this._mesh),this}addTo(t){return this._scene=t,t.add(this._mesh),this}setRenderer(t){return this._renderer=t,this}update(){return this._uniforms?(this._uniforms.iTime.value=(Date.now()-this._startTime)*.001,typeof this.onUpdate=="function"&&this.onUpdate(),this):this}setMouse(t,e){this._uniforms&&this._uniforms.iMouse.value.set(t,e)}resize(t,e){this._uniforms&&this._uniforms.iResolution.value.set(t,e),typeof this.onResize=="function"&&this.onResize(t,e)}setPosition(){return this}setScale(){return this}dispose(){var t;typeof this.onDestroy=="function"&&this.onDestroy(),this._mesh&&(this._scene?this._scene.remove(this._mesh):this._mesh.parent&&this._mesh.parent.remove(this._mesh)),this._material&&this._material.dispose(),(t=this._mesh)!=null&&t.geometry&&this._mesh.geometry.dispose(),this._bufferTarget&&this._bufferTarget.dispose(),this._bufferFeedback&&this._bufferFeedback.dispose(),this._mesh=null,this._material=null,this._uniforms=null}_initDoubleBuffer(t,e){const n={minFilter:Me,magFilter:Me};this._bufferTarget=new ke(t,e,n),this._bufferFeedback=new ke(t,e,n)}_swapBuffers(){const t=this._bufferTarget;this._bufferTarget=this._bufferFeedback,this._bufferFeedback=t}}class Is{constructor(t={}){const e=this.getDefaults?this.getDefaults():{};this._params={...e,...t},this.options=this._params,this.t=0,this.width=window.innerWidth,this.height=window.innerHeight,this.mouseX=.5,this.mouseY=.5,this._scene=null,this._ownScene=new ls,this.camera=null,this._renderer=null,this._children=[],this._clock=new Fi}getDefaults(){return{}}build(){return typeof this.onInit=="function"&&this.onInit(),this}addTo(t){return this._scene=t,this._ownScene.children.slice().forEach(e=>{this._ownScene.remove(e),t.add(e),this._children.push(e)}),this.options.backgroundColor!==void 0&&(t.background=new ut(this.options.backgroundColor)),this._ownScene.fog&&(t.fog=this._ownScene.fog,this._hadFog=!0),this}setRenderer(t){return this._renderer=t,this}update(){const t=this._clock.getDelta();return this.t+=t*1e3,typeof this.onUpdate=="function"&&this.onUpdate(t),this}setMouse(t,e){this.mouseX=t/window.innerWidth,this.mouseY=e/window.innerHeight,typeof this.onMouseMove=="function"&&this.onMouseMove(this.mouseX,this.mouseY)}resize(t,e){this.width=t,this.height=e,this.camera&&(this.camera.aspect=t/e,this.camera.updateProjectionMatrix()),typeof this.onResize=="function"&&this.onResize(t,e)}setPosition(){return this}setScale(){return this}dispose(){typeof this.onDestroy=="function"&&this.onDestroy(),this._children.forEach(t=>{this._scene&&this._scene.remove(t),ku(t)}),this._children=[],this._hadFog&&this._scene&&(this._scene.fog=null,this._hadFog=!1)}}function ku(s){for(;s.children&&s.children.length>0;)ku(s.children[0]),s.remove(s.children[0]);s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material.forEach(t=>t.dispose()):s.material.dispose())}function jt(s=0,t=1){return s+Math.random()*(t-s)}function ln(s=0,t=1){return Math.floor(s+Math.random()*(t-s+1))}function $x(s){return s[Math.floor(Math.random()*s.length)]}class Jx extends Ls{getDefaults(){return{baseColor:6745,color2:15918901,backgroundColor:1251907,amplitudeFactor:1,ringFactor:1,rotationFactor:1,xOffset:0,yOffset:0,size:1,speed:1}}onInit(){const t=window.innerWidth,e=window.innerHeight,n=window.devicePixelRatio||1;this._initDoubleBuffer(Math.floor(t*n),Math.floor(e*n)),this._uniforms.iBuffer={value:this._bufferFeedback.texture},this._mouseEaseX=t/2,this._mouseEaseY=e/2,this._mouseRawX=t/2,this._mouseRawY=e/2,this._screenMat=new ge({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ gl_FragColor=texture2D(tDiffuse,vUv); }",depthWrite:!1,depthTest:!1}),this._screenMesh=new ne(new fn(2,2),this._screenMat),this._screenMesh.frustumCulled=!1}addTo(t){return this._scene=t,t.add(this._screenMesh),this}setMouse(t,e){this._mouseRawX=t,this._mouseRawY=e}onUpdate(){if(!this._renderer||!this._bufferTarget||!this._mesh)return;Math.abs(this._mouseEaseX-this._mouseRawX)+Math.abs(this._mouseEaseY-this._mouseRawY)>.1&&(this._mouseEaseX+=(this._mouseRawX-this._mouseEaseX)*.05,this._mouseEaseY+=(this._mouseRawY-this._mouseEaseY)*.05),this._uniforms.iMouse.value.set(this._mouseEaseX,this._mouseEaseY);const t=this._renderer;this._uniforms.iBuffer.value=this._bufferFeedback.texture,t.setRenderTarget(this._bufferTarget),t.render(this._innerScene,this._camera),t.setRenderTarget(null),this._screenMat.uniforms.tDiffuse.value=this._bufferTarget.texture,this._swapBuffers()}onResize(t,e){const n=window.devicePixelRatio||1,i=Math.floor(t*n),r=Math.floor(e*n);this._bufferTarget&&(this._bufferTarget.setSize(i,r),this._bufferFeedback.setSize(i,r))}dispose(){this._screenMesh&&(this._scene&&this._scene.remove(this._screenMesh),this._screenMesh.geometry.dispose(),this._screenMat.dispose()),super.dispose()}static get fragmentShader(){return Qx}}const Qx=`
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
`;class ty extends Ls{getDefaults(){return{highlightColor:16761600,midtoneColor:16719616,lowlightColor:2949375,baseColor:16772075,blurFactor:.6,speed:1,zoom:1}}static get fragmentShader(){return sy}}class ey extends Ls{getDefaults(){return{color1:35980,color2:15918901,backgroundColor:14155663,amplitudeFactor:1,ringFactor:1,rotationFactor:1,size:1.5,speed:1}}static get fragmentShader(){return ry}}class ny extends Ls{getDefaults(){return{backgroundColor:16777215,skyColor:6863063,cloudColor:11387358,cloudShadowColor:1586512,sunColor:16750873,sunGlareColor:16737843,sunlightColor:16750899,speed:1}}static get fragmentShader(){return oy}}class iy extends Ls{getDefaults(){return{color1:396069,color2:16777215,backgroundColor:16185078,amplitudeFactor:1,ringFactor:4,rotationFactor:.1,speed:1}}static get fragmentShader(){return ay}}const sy=`
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
}`,ry=`
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
}`,oy=`
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
}`,ay=`
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
}`;class ly{constructor(t,e,n){this.variables=[],this.currentTextureIndex=0;let i=Le;const r={passThruTexture:{value:null}},o=c(h(),r),a=new Yl(o);this.setDataType=function(d){return i=d,this},this.addVariable=function(d,f,g){const _=this.createShaderMaterial(f),m={name:d,initialValueTexture:g,material:_,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:De,magFilter:De};return this.variables.push(m),m},this.setVariableDependencies=function(d,f){d.dependencies=f},this.init=function(){if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let d=0;d<this.variables.length;d++){const f=this.variables[d];f.renderTargets[0]=this.createRenderTarget(t,e,f.wrapS,f.wrapT,f.minFilter,f.magFilter),f.renderTargets[1]=this.createRenderTarget(t,e,f.wrapS,f.wrapT,f.minFilter,f.magFilter),this.renderTexture(f.initialValueTexture,f.renderTargets[0]),this.renderTexture(f.initialValueTexture,f.renderTargets[1]);const g=f.material,_=g.uniforms;if(f.dependencies!==null)for(let m=0;m<f.dependencies.length;m++){const p=f.dependencies[m];if(p.name!==f.name){let b=!1;for(let x=0;x<this.variables.length;x++)if(p.name===this.variables[x].name){b=!0;break}if(!b)return"Variable dependency not found. Variable="+f.name+", dependency="+p.name}_[p.name]={value:null},g.fragmentShader=`
uniform sampler2D `+p.name+`;
`+g.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const d=this.currentTextureIndex,f=this.currentTextureIndex===0?1:0;for(let g=0,_=this.variables.length;g<_;g++){const m=this.variables[g];if(m.dependencies!==null){const p=m.material.uniforms;for(let b=0,x=m.dependencies.length;b<x;b++){const v=m.dependencies[b];p[v.name].value=v.renderTargets[d].texture}}this.doRenderTarget(m.material,m.renderTargets[f])}this.currentTextureIndex=f},this.getCurrentRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){a.dispose();const d=this.variables;for(let f=0;f<d.length;f++){const g=d[f];g.initialValueTexture&&g.initialValueTexture.dispose();const _=g.renderTargets;for(let m=0;m<_.length;m++)_[m].dispose()}};function l(d){d.defines.resolution="vec2( "+t.toFixed(1)+", "+e.toFixed(1)+" )"}this.addResolutionDefine=l;function c(d,f){f=f||{};const g=new ge({name:"GPUComputationShader",uniforms:f,vertexShader:u(),fragmentShader:d});return l(g),g}this.createShaderMaterial=c,this.createRenderTarget=function(d,f,g,_,m,p){return d=d||t,f=f||e,g=g||hn,_=_||hn,m=m||De,p=p||De,new ke(d,f,{wrapS:g,wrapT:_,minFilter:m,magFilter:p,format:ze,type:i,depthBuffer:!1})},this.createTexture=function(){const d=new Float32Array(t*e*4),f=new ys(d,t,e,ze,Le);return f.needsUpdate=!0,f},this.renderTexture=function(d,f){r.passThruTexture.value=d,this.doRenderTarget(o,f),r.passThruTexture.value=null},this.doRenderTarget=function(d,f){const g=n.getRenderTarget(),_=n.xr.enabled,m=n.shadowMap.autoUpdate;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,a.material=d,n.setRenderTarget(f),a.render(n),a.material=o,n.xr.enabled=_,n.shadowMap.autoUpdate=m,n.setRenderTarget(g)};function u(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function h(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const er=800,xa=er/2;class cy extends Is{getDefaults(){return{backgroundColor:465199,color1:16711680,color2:53759,colorMode:"varianceGradient",birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5}}onInit(){const t=this._ownScene,e=this.options;this.WIDTH=Math.pow(2,e.quantity),this.BIRDS=this.WIDTH*this.WIDTH,this.camera=new ye(75,this.width/this.height,1,3e3),this.camera.position.z=350,t.add(this.camera),t.fog=new Dl(16777215,100,1e3),this.mouseX=1e4,this.mouseY=1e4,this.last=performance.now();try{this._initGPGPU(),this._initGpgpuBirds(),this._useGPGPU=!0}catch(n){console.warn("[VantaBirds] GPGPU init failed, falling back to CPU:",n),this._useGPGPU=!1,this._initCPUBirds()}}_initGPGPU(){const t=this._renderer;if(!t)throw new Error("No renderer");this.gpuCompute=new ly(this.WIDTH,this.WIDTH,t);const e=this.gpuCompute.createTexture(),n=this.gpuCompute.createTexture();uy(e),dy(n),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",py,n),this.positionVariable=this.gpuCompute.addVariable("texturePosition",fy,e),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:1},this.velocityUniforms.cohesionDistance={value:1},this.velocityUniforms.speedLimit={value:1},this.velocityUniforms.freedomFactor={value:1},this.velocityUniforms.predator={value:new P},this.velocityVariable.material.defines.BOUNDS=er.toFixed(2),this.velocityVariable.wrapS=wn,this.velocityVariable.wrapT=wn,this.positionVariable.wrapS=wn,this.positionVariable.wrapT=wn;const i=this.gpuCompute.init();if(i!==null)throw new Error(i);this._updateVelocityUniforms()}_updateVelocityUniforms(){if(!this.velocityUniforms)return;const t=this.options;this.velocityUniforms.separationDistance.value=t.separation,this.velocityUniforms.alignmentDistance.value=t.alignment,this.velocityUniforms.speedLimit.value=t.speedLimit,this.velocityUniforms.cohesionDistance.value=t.cohesion}_initGpgpuBirds(){const t=this.options,e=hy(t,this);this.birdUniforms={color:{value:new ut(16720384)},texturePosition:{value:null},textureVelocity:{value:null},time:{value:1},delta:{value:0},birdSize:{value:t.birdSize}};const n=new ge({uniforms:this.birdUniforms,vertexShader:my,fragmentShader:gy,side:Pe}),i=new ne(e,n);i.rotation.y=Math.PI/2,i.matrixAutoUpdate=!1,i.updateMatrix(),this._ownScene.add(i)}_initCPUBirds(){const t=this.options,e=this.BIRDS;this.boids=[],this.cpuBirds=[];for(let n=0;n<e;n++){const i=new vy(t);i.position.set(jt(-200,200),jt(-200,200),jt(-200,200)),i.velocity.set(jt(-1,1),jt(-1,1),jt(-1,1)),i.setWorldSize(500,500,300),this.boids.push(i);const r=_y(t),o=n/e,a=this._getNewCol(o),l=r.attributes.position.array,c=new Float32Array(l.length);for(let h=0;h<c.length;h+=3)c[h]=a.r,c[h+1]=a.g,c[h+2]=a.b;r.setAttribute("color",new pe(c,3));const u=new ne(r,new qn({color:16777215,side:Pe,vertexColors:!0}));u.phase=Math.floor(Math.random()*62.83),u.position.copy(i.position),this._ownScene.add(u),this.cpuBirds.push(u)}}_getNewCol(t){const e=this.options,n=new ut(e.color1!=null?e.color1:4456448),i=new ut(e.color2!=null?e.color2:6684672);let o=(e.colorMode||"").indexOf("Gradient")!==-1?Math.random():t;return(e.colorMode||"").indexOf("variance")===0?new ut(Math.min(1,Math.max(0,n.r+Math.random()*i.r)),Math.min(1,Math.max(0,n.g+Math.random()*i.g)),Math.min(1,Math.max(0,n.b+Math.random()*i.b))):(e.colorMode||"").indexOf("mix")===0?new ut(e.color1+o*e.color2):n.clone().lerp(i,o)}onUpdate(){const t=performance.now();let e=(t-this.last)/1e3;e>1&&(e=1),this.last=t,this._useGPGPU?this._updateGPGPU(e,t):this._updateCPU()}_updateGPGPU(t,e){this.positionUniforms.time.value=e,this.positionUniforms.delta.value=t,this.velocityUniforms.time.value=e,this.velocityUniforms.delta.value=t,this.birdUniforms.time.value=e,this.birdUniforms.delta.value=t,this.velocityUniforms.predator.value.set(this.mouseX,-this.mouseY,0),this.mouseX=1e4,this.mouseY=1e4,this.gpuCompute.compute(),this.birdUniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.birdUniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture}_updateCPU(){const t=this.options;for(let e=0;e<this.cpuBirds.length;e++){const n=this.boids[e];n.run(this.boids);const i=this.cpuBirds[e];i.rotation.y=Math.atan2(-n.velocity.z,n.velocity.x),i.rotation.z=Math.asin(n.velocity.y/(n.velocity.length()||1)),i.phase=(i.phase+(Math.max(0,i.rotation.z)+.1))%62.83,i.geometry.attributes.position.array[16]=i.geometry.attributes.position.array[13]=Math.sin(i.phase)*5*t.birdSize,i.geometry.attributes.position.needsUpdate=!0,i.position.copy(n.position)}}onMouseMove(t,e){if(this.mouseX=t-.5,this.mouseY=e-.5,!this._useGPGPU&&this.boids){const n=new P(this.mouseX*this.width,-this.mouseY*this.height,0);for(const i of this.boids)n.z=i.position.z,i.repulse(n)}}}function hy(s,t){const e=t.WIDTH,n=t.BIRDS,i=new ue,r=3,o=n*r,a=o*3,l=new pe(new Float32Array(a*3),3),c=new pe(new Float32Array(a*3),3),u=new pe(new Float32Array(a*2),2),h=new pe(new Float32Array(a),1);i.setAttribute("position",l),i.setAttribute("birdColor",c),i.setAttribute("reference",u),i.setAttribute("birdVertex",h);let d=0;const f=function(){for(let p=0;p<arguments.length;p++)l.array[d++]=arguments[p]},g=s.wingSpan||20,_=s.birdSize||1;for(let p=0;p<n;p++)f(0,-0,-20*_,0,4*_,-20*_,0,0,30*_),f(0,0,-15*_,-g*_,0,0,0,0,15*_),f(0,0,15*_,g*_,0,0,0,0,-15*_);const m={};for(d=0;d<o*3;d++){const p=~~(~~(d/3)/r),b=p%e/e,x=~~(p/e)/e,v=~~(d/9)/n,C=v.toString(),T=(s.colorMode||"").indexOf("Gradient")!==-1;let E;!T&&m[C]?E=m[C]:E=t._getNewCol(v),!T&&!m[C]&&(m[C]=E),c.array[d*3]=E.r,c.array[d*3+1]=E.g,c.array[d*3+2]=E.b,u.array[d*2]=b,u.array[d*2+1]=x,h.array[d]=d%9}return i.scale(.2,.2,.2)}function uy(s){const t=s.image.data;for(let e=0;e<t.length;e+=4)t[e]=Math.random()*er-xa,t[e+1]=Math.random()*er-xa,t[e+2]=Math.random()*er-xa,t[e+3]=1}function dy(s){const t=s.image.data;for(let e=0;e<t.length;e+=4)t[e]=(Math.random()-.5)*10,t[e+1]=(Math.random()-.5)*10,t[e+2]=(Math.random()-.5)*10,t[e+3]=1}const fy=`uniform float time;
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
}`,py=`uniform float time;
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
}`,my=`attribute vec2 reference;
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
}`,gy=`varying vec4 vColor;
varying float z;
uniform vec3 color;
void main() {
  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;
  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;
  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;
  gl_FragColor = vec4( rr, gg, bb, 1. );
}`;function _y(s={}){const t=1.5*(s.birdSize||1),e=[new P(5*t,0,0),new P(-5*t,-1*t,1*t),new P(-5*t,0,0),new P(-5*t,-2*t,-1*t),new P(0,2*t,-6*t),new P(0,2*t,6*t),new P(2*t,0,0),new P(-3*t,0,0)],n=new ue().setFromPoints(e);return n.setIndex([0,2,1,4,7,6,5,6,7]),n}class vy{constructor(t){this._o=t,this.position=new P,this.velocity=new P,this._acc=new P,this._w=500,this._h=500,this._d=200,this._nr=100,this._ms=2.5,this._mf=.1}setWorldSize(t,e,n){this._w=t,this._h=e,this._d=n}run(t){const e=new P,n=[[-this._w,this.position.y,this.position.z],[this._w,this.position.y,this.position.z],[this.position.x,-this._h,this.position.z],[this.position.x,this._h,this.position.z],[this.position.x,this.position.y,-this._d],[this.position.x,this.position.y,this._d]];for(const r of n)e.set(r[0],r[1],r[2]),this._acc.add(this._avoid(e).multiplyScalar(5));Math.random()>.5&&(this._acc.add(this._alignment(t)),this._acc.add(this._cohesion(t)),this._acc.add(this._separation(t))),this.velocity.add(this._acc);const i=this.velocity.length();i>this._ms&&this.velocity.divideScalar(i/this._ms),this.position.add(this.velocity),this._acc.set(0,0,0)}_avoid(t){const e=new P;return e.copy(this.position).sub(t),e.multiplyScalar(1/this.position.distanceToSquared(t)),e}repulse(t){const e=this.position.distanceTo(t);if(e<150){const n=new P;n.subVectors(this.position,t).multiplyScalar(.5/e),this._acc.add(n)}}_alignment(t){const e=new P;let n=0;const i=this._nr*this._o.alignment/20;for(let r=0;r<t.length;r++){if(Math.random()>.6)continue;const o=t[r].position.distanceTo(this.position);o>0&&o<=i&&(e.add(t[r].velocity),n++)}if(n>0){e.divideScalar(n);const r=e.length();r>this._mf&&e.divideScalar(r/this._mf)}return e}_cohesion(t){const e=new P,n=new P;let i=0;const r=this._nr*this._o.cohesion/20;for(let a=0;a<t.length;a++){if(Math.random()>.6)continue;const l=t[a].position.distanceTo(this.position);l>0&&l<=r&&(e.add(t[a].position),i++)}i>0&&e.divideScalar(i),n.subVectors(e,this.position);const o=n.length();return o>this._mf&&n.divideScalar(o/this._mf),n}_separation(t){const e=new P,n=new P,i=this._nr*this._o.separation/20;for(let r=0;r<t.length;r++){if(Math.random()>.6)continue;const o=t[r].position.distanceTo(this.position);o>0&&o<=i&&(n.subVectors(this.position,t[r].position).normalize().divideScalar(o),e.add(n))}return e}}class xy extends Is{getDefaults(){return{color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}onInit(){const t=this._ownScene,e=this.options;this.cont=new je,t.add(this.cont),this.points=[];const n=e.points,i=e.spacing,r=n*n*2;this.linePositions=new Float32Array(r*r*3),this.lineColors=new Float32Array(r*r*3);const o=new ue;o.setAttribute("position",new pe(this.linePositions,3).setUsage(pi)),o.setAttribute("color",new pe(this.lineColors,3).setUsage(pi)),o.computeBoundingSphere(),o.setDrawRange(0,0);const a=new di({vertexColors:!0,transparent:!0});this.linesMesh=new Ei(o,a),this.cont.add(this.linesMesh);for(let u=0;u<=n;u++)for(let h=0;h<=n;h++){const d=ln(-3,3),f=(u-n/2)*i+ln(-5,5);let g=(h-n/2)*i+ln(-5,5);u%2&&(g+=i*.5),this._genPoint(f,d-ln(5,15),g),this._genPoint(f+ln(-5,5),d+ln(5,15),g+ln(-5,5))}this.camera=new ye(25,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.camera.tx=50,this.camera.ty=100,t.add(this.camera);const l=new Ni(16777215,.75);t.add(l);const c=new Ps(16777215,1);c.position.set(0,200,0),c.distance=400,c.target=this.cont,t.add(c)}_genPoint(t,e,n){let i;if(this.options.showDots){const r=new cr(.25,8,8),o=new Vl({color:this.options.color});i=new ne(r,o)}else i=new ie;this.cont.add(i),i.ox=t,i.oy=e,i.oz=n,i.position.set(t,e,n),i.r=jt(-2,2),this.points.push(i)}onUpdate(){const t=this.camera;t.tx!==void 0&&(Math.abs(t.tx-t.position.x)>.01&&(t.position.x+=(t.tx-t.position.x)*.02),Math.abs(t.ty-t.position.y)>.01&&(t.position.y+=(t.ty-t.position.y)*.02)),t.lookAt(0,0,0);let e=0,n=0,i=0;const r=new ut(this.options.backgroundColor),a=new ut(this.options.color).clone().sub(r);for(let l=0;l<this.points.length;l++){const c=this.points[l];if(c.r!==0){let u=Math.atan2(c.position.z,c.position.x);const h=Math.sqrt(c.position.z**2+c.position.x**2);u+=25e-5*c.r,c.position.x=h*Math.cos(u),c.position.z=h*Math.sin(u)}for(let u=l+1;u<this.points.length;u++){const h=this.points[u],d=c.position.x-h.position.x,f=c.position.y-h.position.y,g=c.position.z-h.position.z,_=Math.sqrt(d*d+f*f+g*g);if(_<this.options.maxDistance){const m=Math.min(1,(1-_/this.options.maxDistance)*2),p=new ut(0).lerp(a,m);this.linePositions[e++]=c.position.x,this.linePositions[e++]=c.position.y,this.linePositions[e++]=c.position.z,this.linePositions[e++]=h.position.x,this.linePositions[e++]=h.position.y,this.linePositions[e++]=h.position.z,this.lineColors[n++]=p.r,this.lineColors[n++]=p.g,this.lineColors[n++]=p.b,this.lineColors[n++]=p.r,this.lineColors[n++]=p.g,this.lineColors[n++]=p.b,i++}}}this.linesMesh.geometry.setDrawRange(0,i*2),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0}onMouseMove(t,e){const n=this.camera;n.ox||(n.ox=n.position.x,n.oy=n.position.y,n.oz=n.position.z);const i=Math.atan2(n.oz,n.ox),r=Math.sqrt(n.oz**2+n.ox**2),o=i+(t-.5)*2;n.tx=r*Math.cos(o),n.ty=n.oy+(e-.5)*50}}class yy extends Is{getDefaults(){return{color:21896,shininess:30,waveHeight:15,waveSpeed:1,zoom:1}}onInit(){const t=this._ownScene,e=this.options,n=100,i=80,r=18,o=[];this.gg=[],this.oy={};for(let h=0;h<=n;h++){this.gg[h]=[];for(let d=0;d<=i;d++){const f=o.length;o.push(new P((h-n*.5)*r,jt(0,4)-10,(i*.5-d)*r)),this.gg[h][d]=f}}const a=new ue().setFromPoints(o),l=[];for(let h=1;h<=n;h++)for(let d=1;d<=i;d++){const f=this.gg[h][d],g=this.gg[h][d-1],_=this.gg[h-1][d],m=this.gg[h-1][d-1];ln(0,1)?l.push(m,g,_,g,_,f):l.push(m,g,f,m,_,f)}a.setIndex(l);const c=new nv({color:e.color,shininess:e.shininess,flatShading:!0,side:Pe});this.plane=new ne(a,c),t.add(this.plane),t.add(new Ni(16777215,.9));const u=new vr(16777215,.9);u.position.set(-100,250,-100),t.add(u),this.camera=new ye(35,this.width/this.height,50,1e4),this.cameraPosition=new P(240,200,390),this.cameraTarget=new P(140,-30,190),this.camera.position.copy(this.cameraPosition),this.camera.tx=this.cameraPosition.x,this.camera.ty=this.cameraPosition.y,this.camera.tz=this.cameraPosition.z,t.add(this.camera)}onUpdate(){const t=this.options,e=this.camera;this.plane.material.color.set(t.color),this.plane.material.shininess=t.shininess,e.ox=this.cameraPosition.x/t.zoom,e.oy=this.cameraPosition.y/t.zoom,e.oz=this.cameraPosition.z/t.zoom,Math.abs(e.tx-e.position.x)>.01&&(e.position.x+=(e.tx-e.position.x)*.02),Math.abs(e.ty-e.position.y)>.01&&(e.position.y+=(e.ty-e.position.y)*.02),Math.abs(e.tz-e.position.z)>.01&&(e.position.z+=(e.tz-e.position.z)*.02),e.lookAt(this.cameraTarget);const n=this.plane.geometry.attributes.position.array,i=t.waveSpeed;for(let r=0;r<n.length;r+=3){const o=n[r],a=n[r+2];if(!this.oy[r]){this.oy[r]=n[r+1];continue}const l=Math.sqrt(i)*Math.cos(-o-a*.7),c=Math.sin(i*this.t*2e-5-i*o*.025+i*a*.015+l);n[r+1]=this.oy[r]+Math.pow(c+1,2)/4*t.waveHeight}this.plane.geometry.attributes.position.setUsage(pi),this.plane.geometry.computeVertexNormals(),this.plane.geometry.attributes.position.needsUpdate=!0}onMouseMove(t,e){const n=this.camera,i=this.options;n.ox||(n.ox=n.position.x,n.oy=n.position.y,n.oz=n.position.z),n.tx=n.ox+(t-.5)*100/i.zoom,n.ty=n.oy+(e-.5)*-100/i.zoom,n.tz=n.oz+(t-.5)*-50/i.zoom}}class My extends Is{getDefaults(){return{color:16746528,color2:16746528,backgroundColor:2236962,size:3,spacing:35,showLines:!0}}onInit(){const t=this._ownScene,e=this.options;this.camera=new ye(50,this.width/this.height,.1,5e3),this.camera.position.set(0,250,50),this.camera.tx=0,this.camera.ty=50,this.camera.tz=350,t.add(this.camera);const n=[],i=e.spacing;for(let o=-30;o<=30;o++)for(let a=-30;a<=30;a++)n.push(new P(o*i+i/2,jt(0,5)-150,a*i+i/2));this.starsGeo=new ue().setFromPoints(n);const r=new Nl({color:e.color,size:e.size});if(this.starField=new Fl(this.starsGeo,r),t.add(this.starField),e.showLines){const o=[];for(let l=0;l<200;l++){const c=jt(40,60),u=c+jt(12,20),h=jt(-1,1),d=Math.sqrt(1-h*h),f=jt(0,Math.PI*2),g=Math.sin(f)*d,_=Math.cos(f)*d;o.push(new P(_*c,g*c,h*c),new P(_*u,g*u,h*u))}const a=new ue().setFromPoints(o);this.linesMesh=new Ei(a,new di({color:e.color2})),t.add(this.linesMesh)}}onUpdate(){const t=this.starsGeo.attributes.position.array;for(let n=0;n<t.length;n+=3)t[n+1]+=.1*Math.sin(t[n+2]*.02+t[n]*.015+this.t*2e-5);this.starsGeo.attributes.position.setUsage(pi),this.starsGeo.attributes.position.needsUpdate=!0;const e=this.camera;e.position.x+=(e.tx-e.position.x)*.003,e.position.y+=(e.ty-e.position.y)*.003,e.position.z+=(e.tz-e.position.z)*.003,e.lookAt(0,0,0),this.linesMesh&&(this.linesMesh.rotation.z+=.002,this.linesMesh.rotation.x+=8e-4,this.linesMesh.rotation.y+=5e-4)}onMouseMove(t,e){this.camera.tx=(t-.5)*100,this.camera.ty=50+e*50}}const Sy=[16720469,16716185,16737996,8978176,7851025,16776960,16742195,1179647,1149149,16768290,2250188,7975100,5468283];class by extends Is{getDefaults(){return{backgroundColor:2106408,color:8978176}}onInit(){const t=this._ownScene;this.rings=[],this.cont=new je,this.cont.position.set(30,0,0),this.cont.rotation.x=.067,this.cont.rotation.z=.167,t.add(this.cont);for(let i=0;i<60;i++){let r,o;ln(0,3)?(r=jt(2,4)+jt(1,30)*jt(1,2)*jt(1,2)*jt(1,2),o=jt(0,3.5)+jt(0,3.5)-ln(0,Math.floor(r/4))-r/50):(r=jt(1,3)*jt(2,4),o=jt(1,2)*jt(1,2)*jt(1.1,1.5));const a=Math.pow(2,ln(0,4))*.05;o<a&&(o=a),r<1&&(r=1),this._genRing($x(Sy),r,o,jt(0,1e3),jt(1,6),jt(0,50/(r+1)+5)+5/o/(r+.5),Math.max(-jt(.5,2),jt(1,50-r/2)-r/2)*.25)}this.camera=new ye(25,this.width/this.height,10,1e4),this.camera.position.set(0,150,200),this.camera.tx=0,this.camera.ty=150,t.add(this.camera),t.add(new Ni(16777215,.5));const e=new vr(16777215,.5);e.position.set(0,150,200),t.add(e);const n=new Ps(16777215,1);n.position.set(-15,50,100),n.penumbra=1,n.angle=.5,n.decay=1,n.distance=300,n.target=this.cont,t.add(n)}_genRing(t,e,n,i,r,o,a){const l=new kl;l.absarc(0,0,e+n,0,r,!1),l.lineTo(e*Math.cos(r),e*Math.sin(r)),l.absarc(0,0,e,r,0,!0);const c=new Ro(l,{depth:.4,bevelEnabled:!1,steps:1,curveSegments:Math.max(4,~~(64*r/6.14))}),u=new Vl({color:t});(ln(0,1)===0||e>60)&&(u.transparent=!0,u.opacity=Math.max(50/e+jt(-.3,.3),.1));const h=new ne(c,u);h.rotation.x=Math.PI/2,h.rotation.z=i,h.position.y=o,h.speed=a*.001,this.rings.push(h),this.cont.add(h)}onUpdate(){const t=this.camera;t.tx!==void 0&&(Math.abs(t.tx-t.position.x)>.01&&(t.position.x+=(t.tx-t.position.x)*.02),Math.abs(t.ty-t.position.y)>.01&&(t.position.y+=(t.ty-t.position.y)*.02)),t.lookAt(0,25,7);for(const n of this.rings)n.rotation.z+=n.speed;const e=this.t*.001;this.cont.rotation.x+=Math.sin(e)*1e-4,this.cont.rotation.z+=Math.cos(e)*7e-5}onMouseMove(t,e){const n=this.camera;n.ox||(n.ox=n.position.x,n.oy=n.position.y),n.tx=n.ox+(t-.5)*50,n.ty=n.oy-e*50}}class wy extends Is{getDefaults(){return{color:16727937,color2:16777215,size:1,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}onInit(){const t=this._ownScene,e=this.options;this.cont=new je,this.cont.position.set(-50,-20,0),t.add(this.cont),this.points=[];const n=e.points,i=e.spacing,r=n*n*2;this.linePositions=new Float32Array(r*r*3),this.lineColors=new Float32Array(r*r*3);const o=new ue;o.setAttribute("position",new pe(this.linePositions,3).setUsage(pi)),o.setAttribute("color",new pe(this.lineColors,3).setUsage(pi)),o.computeBoundingSphere(),o.setDrawRange(0,0),this.linesMesh=new Ei(o,new di({vertexColors:!0,transparent:!0})),this.cont.add(this.linesMesh);for(let m=0;m<=n;m++)for(let p=0;p<=n;p++){const b=(m-n/2)*i,x=(p-n/2)*i;this._genDot(b,0,x)}this.cont2=new je,this.cont2.position.set(0,15,0),t.add(this.cont2);const a=new di({color:e.color}),l=new cr(18*e.size,18,14),c=new F_(l);this.sphere=new Ei(c,a),this.cont2.add(this.sphere);const u=new di({color:e.color2}),h=[];for(let m=0;m<80;m++){const p=jt(18,24),b=p+jt(1,6),x=jt(-1,1),v=Math.sqrt(1-x*x),C=jt(0,Math.PI*2);h.push(new P(Math.cos(C)*v*p,Math.sin(C)*v*p,x*p)),h.push(new P(Math.cos(C)*v*b,Math.sin(C)*v*b,x*b))}this.linesMesh2=new Ei(new ue().setFromPoints(h),u),this.cont2.add(this.linesMesh2);const d=new di({color:e.color2}),f=[new P(0,30,0),new P(0,-30,0)],g=[17.9,12,8,5,3,2,1.5,1.1,.8,.6,.45,.3,.2,.1,.05,.03,.02,.01];for(let m=0;m<4;m++){const p=.15*Math.cos(m/4*Math.PI*2),b=.15*Math.sin(m/4*Math.PI*2);for(let x=0;x<g.length;x++){const v=6*(x+1);f.push(new P(p*v,g[x],b*v),new P(p*v,-g[x],b*v))}}this.linesMesh3=new Ei(new ue().setFromPoints(f),d),this.cont2.add(this.linesMesh3),this.cont2.rotation.x=-.25,this.camera=new ye(20,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.camera.tx=50,this.camera.ty=100,t.add(this.camera),t.add(new Ni(16777215,.75));const _=new Ps(16777215,1);_.position.set(0,200,0),_.distance=400,_.target=this.cont,t.add(_)}_genDot(t,e,n){let i;this.options.showDots?i=new ne(new cr(.25,8,8),new Vl({color:this.options.color})):i=new ie,this.cont.add(i),i.ox=t,i.oy=e,i.oz=n,i.position.set(t,e,n),this.points.push(i)}onUpdate(){const t=this.camera;t.tx!==void 0&&(Math.abs(t.tx-t.position.x)>.01&&(t.position.x+=(t.tx-t.position.x)*.02),Math.abs(t.ty-t.position.y)>.01&&(t.position.y+=(t.ty-t.position.y)*.02)),t.lookAt(-40,0,0),this.linesMesh2&&(this.linesMesh2.rotation.z+=.002,this.linesMesh2.rotation.x+=8e-4,this.linesMesh2.rotation.y+=5e-4),this.sphere&&(this.sphere.rotation.y+=.002,this.linesMesh3.rotation.y-=.004);let e=0,n=0,i=0;const r=new ut(this.options.backgroundColor),a=new ut(this.options.color).clone().sub(r);for(let l=0;l<this.points.length;l++){const c=this.points[l];c.position.y=2*Math.sin(c.position.x/10+this.t*1e-5+c.position.z/10*.5);for(let u=l+1;u<this.points.length;u++){const h=this.points[u],d=c.position.x-h.position.x,f=c.position.y-h.position.y,g=c.position.z-h.position.z,_=Math.sqrt(d*d+f*f+g*g);if(_<this.options.maxDistance){const m=Math.min(1,(1-_/this.options.maxDistance)*2),p=new ut(0).lerp(a,m);this.linePositions[e++]=c.position.x,this.linePositions[e++]=c.position.y,this.linePositions[e++]=c.position.z,this.linePositions[e++]=h.position.x,this.linePositions[e++]=h.position.y,this.linePositions[e++]=h.position.z,this.lineColors[n++]=p.r,this.lineColors[n++]=p.g,this.lineColors[n++]=p.b,this.lineColors[n++]=p.r,this.lineColors[n++]=p.g,this.lineColors[n++]=p.b,i++}}}this.linesMesh.geometry.setDrawRange(0,i*2),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0}onMouseMove(t,e){const n=this.camera;n.ox||(n.ox=n.position.x,n.oy=n.position.y,n.oz=n.position.z);const i=Math.atan2(n.oz,n.ox),r=Math.sqrt(n.oz**2+n.ox**2),o=i+(t-.5)*1.5;n.tx=r*Math.cos(o),n.ty=n.oy+(e-.5)*80}}class Ty extends Ls{getDefaults(){return{backgroundColor:0,skyColor:6072010,cloudColor:3362176,lightColor:16777215,speed:1}}static get fragmentShader(){return Ry}}class Ey{constructor(t={}){const e={color:9016910,backgroundColor:8738,speed:1};this._params={...e,...t},this._canvas=null,this._ctx=null,this._particles=[],this._flowGrid=[],this._tick=0,this._raf=0}getDefaults(){return this._params}build(){return this._canvas=document.createElement("canvas"),this._canvas.style.cssText="position:fixed;inset:0;z-index:-1;pointer-events:none;",this._canvas.width=window.innerWidth,this._canvas.height=window.innerHeight,this._ctx=this._canvas.getContext("2d"),this._initFlow(),this._initParticles(),this}addTo(){return document.getElementById("canvas-container").appendChild(this._canvas),this._draw(),this}_initFlow(){const t=this._canvas.width,e=this._canvas.height,n=100,i=10,r=.003,o=.1,a=Math.ceil((t+n*2)/i),l=Math.ceil((e+n*2)/i);this._flowCols=a,this._flowRows=l,this._cellSize=i,this._offset=n,this._flowGrid=[];for(let c=0;c<l;c++){const u=[];for(let h=0;h<a;h++){const d=h*r,f=c*r;let g=0,_=0,m=0,p=0,b=-1,x=2;for(let E=0;E<50;E++){const A=E/50*Math.PI*2,M=d+Math.cos(A)*o,y=f+Math.sin(A)*o,D=Math.sin(M*127.1+y*311.7)*43758.5453%1,O=Math.abs(D);O>b&&(b=O,g=M,_=y),O<x&&(x=O,m=M,p=y)}const v=m-g,C=p-_,T=Math.sqrt(v*v+C*C)||1;u.push({x:v/T*(b-x),y:C/T*(b-x)})}this._flowGrid.push(u)}}_initParticles(){const t=this._canvas.width+this._offset*2,e=this._canvas.height+this._offset*2;this._particles=[];for(let n=0;n<4500;n++){const i=Math.random()*t,r=Math.random()*e;this._particles.push({x:i,y:r,px:i,py:r,vx:0,vy:0})}}_draw(){const t=this._ctx,e=this._params,n=new _l(e.color);t.translate(-this._offset,-this._offset),t.strokeStyle=`rgba(${n.r},${n.g},${n.b},0.05)`,t.lineWidth=1;const i=()=>{var a;this._raf=requestAnimationFrame(i);const r=this._canvas.width+this._offset*2,o=this._canvas.height+this._offset*2;for(const l of this._particles){const c=Math.min(this._flowCols-1,Math.max(0,Math.floor(l.x/this._cellSize))),u=Math.min(this._flowRows-1,Math.max(0,Math.floor(l.y/this._cellSize))),h=((a=this._flowGrid[u])==null?void 0:a[c])||{x:0,y:0};l.px=l.x,l.py=l.y,l.x=((l.x+l.vx)%r+r)%r,l.y=((l.y+l.vy)%o+o)%o,l.vx=(l.vx+h.x*3)*.95,l.vy=(l.vy+h.y*3)*.95;const d=Math.sqrt(l.vx*l.vx+l.vy*l.vy);d>2.2&&(l.vx*=2.2/d,l.vy*=2.2/d)}t.beginPath();for(const l of this._particles){const c=l.x-l.px,u=l.y-l.py;Math.sqrt(c*c+u*u)<10&&(t.moveTo(l.px,l.py),t.lineTo(l.x,l.y))}t.stroke(),this._tick+=.002};i()}setMouse(){}setPosition(){return this}setScale(){return this}resize(t,e){this._canvas&&(this._canvas.width=t,this._canvas.height=e)}update(){return this}dispose(){cancelAnimationFrame(this._raf),this._canvas&&this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)}}class Ay{constructor(t={}){const e={color:9979487,backgroundColor:2237478,spacing:0,chaos:1};this._params={...e,...t},this._canvas=null,this._ctx=null,this._raf=0,this._ox=Math.random()*1e4,this._oy=Math.random()*1e4,this._oz=Math.random()*1e4}getDefaults(){return this._params}build(){return this._canvas=document.createElement("canvas"),this._canvas.style.cssText="position:fixed;inset:0;z-index:-1;pointer-events:none;",this._canvas.width=window.innerWidth,this._canvas.height=window.innerHeight,this._ctx=this._canvas.getContext("2d"),this}addTo(){return document.getElementById("canvas-container").appendChild(this._canvas),this._draw(),this}_noise(t,e,n){const i=t*12.9898+e*78.233+(n||0)*43.1234;return Math.sin(i)*43758.5453%1*.5+.5}_draw(){const t=()=>{this._raf=requestAnimationFrame(t);const e=this._ctx,n=this._canvas.width,i=this._canvas.height,r=this._params,o=new _l(r.backgroundColor);e.fillStyle=`rgb(${o.r},${o.g},${o.b})`,e.fillRect(0,0,n,i);const a=new _l(r.color);e.strokeStyle=`rgb(${a.r},${a.g},${a.b})`,e.lineWidth=1,e.translate(n/2,i/2);const l=55,c=50,u=4,h=.2,d=.12,f=20;this._oy-=.02,this._oz+=5e-5;for(let g=0;g<l;g++){e.beginPath();for(let _=0;_<360;_++){const m=_*Math.PI/180,p=d*g+h,b=this._noise(this._ox+Math.cos(m)*p,this._oy+Math.sin(m)*p,this._oz),x=r.chaos*f*b+(u*g+c)+g*(r.spacing||0),v=x*Math.cos(m),C=x*Math.sin(m);_===0?e.moveTo(v,C):e.lineTo(v,C)}e.closePath(),e.stroke()}e.setTransform(1,0,0,1,0,0)};t()}setMouse(){}setPosition(){return this}setScale(){return this}resize(t,e){this._canvas&&(this._canvas.width=t,this._canvas.height=e)}update(){return this}dispose(){cancelAnimationFrame(this._raf),this._canvas&&this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)}}class _l{constructor(t){typeof t=="number"?(this.r=t>>16&255,this.g=t>>8&255,this.b=t&255):this.r=this.g=this.b=128}}const Ry=`
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
}`,$e={butterfly:{title:"BionicButterfly",desc:"薄膜干涉 Thin-film Iridescence 结构色 + 各向异性高光 + GPU Vertex Kinematics",tags:[["Iridescence","green"],["Anisotropic","purple"],["Kinematics","pink"]],cam:[0,2,4],look:[0,1.5,0],defs:{seed:123,wingSpan:2,flapFrequency:6,flapAmplitude:.7,baseColor:[.05,.02,.15],filmThickness:380,ior:1.5,iridescenceIntensity:.9},sl:[{s:"Wing"},{k:"wingSpan",l:"翅展",mn:.5,mx:4,st:.05},{s:"Animation"},{k:"flapFrequency",l:"频率",mn:1,mx:20,st:.1},{k:"flapAmplitude",l:"振幅",mn:.1,mx:1.5,st:.01},{s:"Optics"},{k:"filmThickness",l:"薄膜nm",mn:200,mx:600,st:1},{k:"ior",l:"折射率",mn:1,mx:2.5,st:.01},{k:"iridescenceIntensity",l:"干涉色",mn:0,mx:1,st:.01},{k:"seed",l:"种子",mn:1,mx:9999,st:1}],pal:[{n:"紫夜蝶",c:[.05,.02,.15]},{n:"蓝闪蝶",c:[.02,.05,.2]},{n:"翠凤蝶",c:[.02,.1,.05]},{n:"金斑蝶",c:[.15,.08,.02]}]},flock:{title:"Boids Swarm",desc:"Reynolds Boids 集群 (分离/对齐/聚合) + InstancedMesh + GPU 相位差振翅",tags:[["Boids","green"],["Instanced","purple"],["Phase Shift","pink"]],cam:[0,8,20],look:[0,5,0],defs:{seed:77,wingSpan:.6,flapFrequency:10,flapAmplitude:.6,baseColor:[.08,.03,.2],filmThickness:350,iridescenceIntensity:.85,flockCount:80},sl:[{s:"Flock"},{k:"flockCount",l:"数量",mn:10,mx:200,st:1},{s:"Individual"},{k:"wingSpan",l:"翅展",mn:.2,mx:1.5,st:.05},{k:"flapFrequency",l:"频率",mn:3,mx:20,st:.1},{k:"flapAmplitude",l:"振幅",mn:.1,mx:1.2,st:.01},{s:"Optics"},{k:"filmThickness",l:"薄膜nm",mn:200,mx:600,st:1},{k:"iridescenceIntensity",l:"干涉色",mn:0,mx:1,st:.01},{k:"seed",l:"种子",mn:1,mx:9999,st:1}],pal:[{n:"紫群",c:[.08,.03,.2]},{n:"蓝群",c:[.03,.05,.18]},{n:"金群",c:[.12,.08,.02]}]},mandelbulb:{title:"Mandelbulb",desc:"3D 分形 · Raymarching SDF + 4D Simplex Noise + 轨道陷阱着色",tags:[["Raymarching","green"],["SDF","purple"],["4D Noise","pink"]],cam:null,look:null,defs:{power:8,iterations:12,bailout:2,scale:2,glowIntensity:.5,animate:!0,colorA:[.1,.2,.6],colorB:[.9,.3,.1]},sl:[{s:"Fractal"},{k:"power",l:"幂次",mn:2,mx:16,st:.1},{k:"iterations",l:"迭代",mn:4,mx:20,st:1},{k:"bailout",l:"逃逸",mn:1,mx:4,st:.1},{k:"scale",l:"缩放",mn:.5,mx:4,st:.05},{s:"Visual"},{k:"glowIntensity",l:"辉光",mn:0,mx:2,st:.01}],pal:[{n:"深海",cA:[.1,.2,.6],cB:[.9,.3,.1]},{n:"岩浆",cA:[.5,.05,0],cB:[1,.8,.1]},{n:"极光",cA:[0,.3,.2],cB:[.2,.8,.6]},{n:"紫晶",cA:[.2,.05,.3],cB:[.8,.3,.9]}]},"trois-flower":{title:"TroisFlower",desc:"LD 原版 TroisJS 花效果 · ExtrudeGeometry + InstancedMesh + onBeforeCompile Shader 卷曲/脉络/碗形变形",tags:[["InstancedMesh","green"],["Physical Material","purple"],["Shader Vein","pink"]],cam:[0,-4,5],look:[0,0,0],defs:{seed:42,preset:"rose",rings:14,petals:7,size:.75,dx:.4,dy:.8,maxRadius:.1,maxScale:2.2,startRx:2.42,zOffsetCoef:.5,bowlDepth:.35,taperPow:.75,baseCurl:1.5,curlVar:.15,baseTwist:.4,twistVar:0,metalness:0,roughness:.43,transmission:.17,sheen:.47,clearcoat:.1,veinStr:.6,edgeLight:.2,hueShift:0},sl:[{s:"🌹 Preset 花型"},{k:"rings",l:"花环层数",mn:5,mx:60,st:1},{k:"petals",l:"每层花瓣",mn:3,mx:16,st:1},{s:"🍃 Petal 花瓣"},{k:"size",l:"花瓣长度",mn:.3,mx:2.5,st:.05},{k:"dx",l:"横向弧度",mn:.05,mx:2,st:.05},{k:"dy",l:"纵向弧度",mn:0,mx:2,st:.05},{k:"bowlDepth",l:"碗形深度",mn:0,mx:2,st:.05},{k:"taperPow",l:"尖端锥度",mn:.3,mx:2,st:.05},{s:"🌺 Flower 形态"},{k:"maxRadius",l:"散开半径",mn:0,mx:5,st:.1},{k:"maxScale",l:"最大缩放",mn:.5,mx:5,st:.1},{k:"startRx",l:"展开角度",mn:.1,mx:3.14,st:.01},{k:"zOffsetCoef",l:"螺旋扭转",mn:0,mx:10,st:.05},{s:"🌀 Curl 卷曲"},{k:"baseCurl",l:"基础卷曲",mn:0,mx:4,st:.1},{k:"curlVar",l:"卷曲随机",mn:0,mx:2,st:.05},{k:"baseTwist",l:"基础扭转",mn:0,mx:3,st:.1},{k:"twistVar",l:"扭转随机",mn:0,mx:2,st:.05},{s:"✨ Material 材质"},{k:"metalness",l:"金属度",mn:0,mx:1,st:.01},{k:"roughness",l:"粗糙度",mn:0,mx:1,st:.01},{k:"transmission",l:"透光度",mn:0,mx:1,st:.01},{k:"sheen",l:"丝绒光泽",mn:0,mx:1,st:.01},{k:"clearcoat",l:"清漆",mn:0,mx:1,st:.01},{s:"🖌 Shader 脉络"},{k:"veinStr",l:"脉络强度",mn:0,mx:2,st:.05},{k:"edgeLight",l:"边缘透光",mn:0,mx:1,st:.05},{k:"hueShift",l:"色相偏移",mn:0,mx:1,st:.005},{k:"seed",l:"种子",mn:1,mx:9999,st:1}],pal:[{n:"🌹 玫瑰",c:[1,0,0]},{n:"🪷 荷花",c:[1,.41,.71]},{n:"🌼 菊花",c:[1,.84,0]},{n:"🌸 樱花",c:[1,.72,.77]},{n:"🌷 郁金香",c:[1,.2,0]},{n:"💮 百合",c:[1,.8,0]}]},dahlia:{title:"Dahlia 大丽花",desc:"程序化多层花瓣 InstancedMesh · 7 层 74 瓣 + wrap lighting + SSS + 星空背景",tags:[["InstancedMesh","green"],["SSS","purple"],["Bézier Petal","pink"]],cam:null,look:null,defs:{petalScale:1,petalLength:1,petalWidth:1,openAngleScale:1,bloomWaveAmp:.14,cycleDuration:5,breatheAmp:.004,energyWaveSpeed:.4,energyWaveStrength:.22,fresnelStrength:.38,coreGlow:.55,specularStr:.14,sssStrength:.25,autoRotateSpeed:.015},sl:[{s:"🌸 花瓣形态"},{k:"petalScale",l:"整体缩放",mn:.5,mx:2,st:.05},{k:"openAngleScale",l:"展开角度",mn:.5,mx:2,st:.05},{s:"💓 动画"},{k:"bloomWaveAmp",l:"波浪幅度",mn:0,mx:.4,st:.01},{k:"cycleDuration",l:"周期(秒)",mn:2,mx:12,st:.5},{k:"breatheAmp",l:"呼吸幅度",mn:0,mx:.02,st:.001},{s:"✨ 光效"},{k:"energyWaveSpeed",l:"能量波速",mn:.1,mx:1.5,st:.05},{k:"energyWaveStrength",l:"能量波强度",mn:0,mx:.5,st:.01},{k:"fresnelStrength",l:"菲涅尔",mn:0,mx:1,st:.02},{k:"coreGlow",l:"花心辉光",mn:0,mx:1.5,st:.05},{k:"specularStr",l:"高光",mn:0,mx:.5,st:.01},{k:"sssStrength",l:"SSS 强度",mn:0,mx:1,st:.02},{s:"📷 交互"},{k:"autoRotateSpeed",l:"自转速度",mn:0,mx:.1,st:.005}],pal:[]},bloom:{title:"Bloom 绽放",desc:"Deadrabbit 花朵绽放 1:1 复刻 · 128 花瓣 InstancedMesh + HDR 环境光 + 鼠标交互扭曲",tags:[["InstancedMesh","green"],["HDR Env","purple"],["Distortion","pink"]],cam:null,look:null,defs:{envIntensity:.5,envRotation:-2.094,cameraZoom:2.5,cameraFov:75,startProgress:1,cycleDuration:6,petalRotStep:140,scaleMinY:.01,scaleMaxY:.7,scaleMinZ:.3,scaleMaxZ:.4,bendMin:1,bendMax:-2,distortStrength:.05,distortBrush:.08,distortFade:.9,particleSize:.01,particleGravity:.0098,particleSpread:20,stemRoughness:.5,stemPosY:-3.3,bgColorTop:"#000000",bgColorBot:"#8386ff"},sl:[{s:"📷 相机"},{k:"cameraZoom",l:"缩放",mn:.5,mx:5,st:.1},{k:"cameraFov",l:"视角FOV",mn:20,mx:120,st:1},{s:"🌸 花瓣动画"},{k:"startProgress",l:"绽放进度",mn:0,mx:1,st:.01},{k:"cycleDuration",l:"循环周期(秒)",mn:2,mx:12,st:.5},{k:"petalRotStep",l:"花瓣旋转角度",mn:90,mx:180,st:1},{s:"🌿 花瓣形态"},{k:"scaleMinY",l:"初始Y缩放",mn:.001,mx:.5,st:.01},{k:"scaleMaxY",l:"目标Y缩放",mn:.1,mx:1.5,st:.05},{k:"scaleMinZ",l:"初始Z缩放",mn:.05,mx:1,st:.05},{k:"scaleMaxZ",l:"目标Z缩放",mn:.1,mx:1,st:.05},{s:"🔄 弯曲"},{k:"bendMin",l:"弯曲起始",mn:-3,mx:3,st:.1},{k:"bendMax",l:"弯曲结束",mn:-5,mx:3,st:.1},{s:"💡 环境光"},{k:"envIntensity",l:"HDR强度",mn:0,mx:2,st:.05},{k:"envRotation",l:"HDR旋转",mn:-3.14,mx:3.14,st:.05},{s:"🌀 鼠标扭曲"},{k:"distortStrength",l:"扭曲强度",mn:0,mx:.3,st:.005},{k:"distortBrush",l:"笔刷大小",mn:.01,mx:.3,st:.01},{k:"distortFade",l:"衰减速率",mn:.5,mx:.99,st:.01},{s:"✨ 粒子"},{k:"particleSize",l:"粒子大小",mn:.001,mx:.05,st:.001},{k:"particleGravity",l:"重力",mn:0,mx:.05,st:.001},{k:"particleSpread",l:"分布范围",mn:5,mx:50,st:1},{s:"🌿 花茎"},{k:"stemRoughness",l:"粗糙度",mn:0,mx:1,st:.05},{k:"stemPosY",l:"Y偏移",mn:-5,mx:0,st:.1}],pal:[{k:"bgColorTop",l:"背景顶部"},{k:"bgColorBot",l:"背景底部"}]},tulip:{title:"Tulip 郁金香",desc:"GLB 模型生长动画 · 贴图材质 + 阶段式生长 + easeOutBack + 风力摇摆",tags:[["GLB Model","green"],["Growth Anim","purple"],["Wind Sim","pink"]],cam:null,look:null,defs:{growthDuration:8,petalOpenAngle:.3,petalScale:1,windStrength:1,windSpeed:.5,cameraDistance:3.5,autoRotateSpeed:.01},sl:[{s:"🌱 生长"},{k:"growthDuration",l:"生长周期(秒)",mn:3,mx:25,st:.5},{s:"🌷 花瓣"},{k:"petalOpenAngle",l:"展开角度",mn:0,mx:1.5,st:.05},{k:"petalScale",l:"缩放",mn:.3,mx:2,st:.05},{s:"�️ 风力"},{k:"windStrength",l:"风力强度",mn:0,mx:4,st:.1},{k:"windSpeed",l:"风速",mn:0,mx:3,st:.05},{s:"📷 相机"},{k:"cameraDistance",l:"相机距离",mn:.8,mx:6,st:.1},{k:"autoRotateSpeed",l:"自转速度",mn:0,mx:.05,st:.002}],pal:[]},aurora:{title:"Aurora Borealis",desc:"程序化极光 · Volume Raymarching + FBM 分数布朗运动 + Beer-Lambert + 星空",tags:[["Volume","green"],["FBM","purple"],["Beer-Lambert","pink"]],cam:null,look:null,defs:{colorTop:[.1,.8,.3],colorBottom:[.3,.1,.6],colorAccent:[.1,.3,.9],height:5,curtainWidth:15,speed:.3,intensity:1.5,turbulence:1,raySteps:48},sl:[{s:"Aurora"},{k:"height",l:"高度 Height",mn:2,mx:12,st:.1},{k:"curtainWidth",l:"宽度 Width",mn:5,mx:30,st:.5},{k:"speed",l:"速度 Speed",mn:.05,mx:1,st:.01},{k:"intensity",l:"强度 Intensity",mn:.3,mx:3,st:.05},{k:"turbulence",l:"湍流 Turbulence",mn:0,mx:2,st:.05},{s:"Quality 品质"},{k:"raySteps",l:"采样 Samples",mn:16,mx:96,st:1}],pal:[{n:"经典绿",t:[.1,.8,.3],b:[.3,.1,.6],a:[.1,.3,.9]},{n:"烈焰",t:[.9,.2,.1],b:[.5,.05,.1],a:[1,.6,.1]},{n:"冰蓝",t:[.2,.6,.9],b:[.1,.1,.4],a:[.5,.8,1]},{n:"粉紫",t:[.9,.3,.6],b:[.3,.1,.5],a:[.7,.4,.9]}]},"vanta-halo":{title:"Halo 光环",desc:"双缓冲反馈 Shader · Perlin 3D Noise + 花瓣状波形 + 彩虹色相旋转",tags:[["Double Buffer","green"],["Perlin 3D","purple"],["Feedback","pink"]],cam:null,look:null,isVanta:!0,defs:{baseColor:6745,color2:15918901,backgroundColor:1251907,amplitudeFactor:1,ringFactor:1,rotationFactor:1,xOffset:0,yOffset:0,size:1,speed:1},sl:[{s:"🔆 Halo 光环"},{k:"size",l:"尺寸 Size",mn:.1,mx:3,st:.05},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05},{k:"amplitudeFactor",l:"振幅 Amplitude",mn:.1,mx:3,st:.05},{k:"ringFactor",l:"环纹 Ring",mn:.1,mx:3,st:.05},{k:"rotationFactor",l:"旋转 Rotation",mn:.1,mx:3,st:.05},{s:"📐 Position 位置"},{k:"xOffset",l:"X 偏移",mn:-1,mx:1,st:.01},{k:"yOffset",l:"Y 偏移",mn:-1,mx:1,st:.01}],pal:[{n:"深蓝金",c:[0,.1,.35]},{n:"暗紫",c:[.2,0,.3]},{n:"暗红",c:[.3,0,.05]}]},"vanta-fog":{title:"Fog 迷雾",desc:"FBM 分形布朗运动雾气 · 6 层 Octave 噪声叠加 + 多色层混合",tags:[["FBM","green"],["Noise","purple"],["Multi-layer","pink"]],cam:null,look:null,isVanta:!0,defs:{highlightColor:16761600,midtoneColor:16719616,lowlightColor:2949375,baseColor:16772075,blurFactor:.6,speed:1,zoom:1},sl:[{s:"🌫️ Fog 雾气"},{k:"blurFactor",l:"模糊度 Blur",mn:.1,mx:.9,st:.01},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05},{k:"zoom",l:"缩放 Zoom",mn:.3,mx:3,st:.05}],pal:[{n:"🔥 火焰",c:[1,.76,0]},{n:"🧊 冰蓝",c:[.1,.4,.8]},{n:"🍇 紫雾",c:[.5,.1,.7]}]},"vanta-cells":{title:"Cells 细胞",desc:"Worley Noise 沃罗诺伊细胞 · 有机纹理生成 + 时间偏移动画",tags:[["Worley","green"],["Voronoi","purple"],["Organic","pink"]],cam:null,look:null,isVanta:!0,defs:{color1:35980,color2:15918901,backgroundColor:14155663,amplitudeFactor:1,size:1.5,speed:1},sl:[{s:"🧬 Cells 细胞"},{k:"size",l:"尺寸 Size",mn:.3,mx:5,st:.05},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05},{k:"amplitudeFactor",l:"振幅 Amplitude",mn:.1,mx:3,st:.05}],pal:[{n:"🌿 绿黄",c:[0,.55,0]},{n:"🔮 紫蓝",c:[.3,0,.7]},{n:"🌅 暖橙",c:[.9,.4,0]}]},"vanta-clouds":{title:"Clouds 体积云",desc:"体积云 Raymarching · 多级 LOD 噪声密度场 + 太阳光散射",tags:[["Volume","green"],["Raymarching","purple"],["LOD","pink"]],cam:null,look:null,isVanta:!0,defs:{backgroundColor:16777215,skyColor:6863063,cloudColor:11387358,cloudShadowColor:1586512,sunColor:16750873,sunGlareColor:16737843,sunlightColor:16750899,speed:1},sl:[{s:"☁️ Clouds 云"},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05}],pal:[{n:"☀️ 晴天",c:[.41,.72,.84]},{n:"🌅 黄昏",c:[.8,.4,.1]},{n:"🌑 暗夜",c:[.1,.12,.2]}]},"vanta-ripple":{title:"Ripple 涟漪",desc:"光点涟漪 · 400 点光源矩阵 + 正弦波叠加 + 辉光累积",tags:[["Light Array","green"],["Sine Wave","purple"],["Glow","pink"]],cam:null,look:null,isVanta:!0,defs:{color1:396069,color2:16777215,backgroundColor:16185078,amplitudeFactor:1,ringFactor:4,rotationFactor:.1,speed:1},sl:[{s:"💫 Ripple 涟漪"},{k:"amplitudeFactor",l:"振幅 Amplitude",mn:.1,mx:3,st:.05},{k:"ringFactor",l:"环密度 Rings",mn:.5,mx:10,st:.1},{k:"rotationFactor",l:"旋转 Rotation",mn:0,mx:1,st:.01},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05}],pal:[{n:"🌿 绿光",c:[.02,.42,.09]},{n:"🔵 蓝光",c:[0,.2,.8]},{n:"🟣 紫光",c:[.5,0,.6]}]},"vanta-birds":{title:"Birds 飞鸟",desc:"CPU Boids 集群飞鸟 · Reynolds 规则 + 振翅动画 + 渐变着色",tags:[["Boids","green"],["Flocking","purple"],["CPU Sim","pink"]],cam:null,look:null,is3DVanta:!0,defs:{backgroundColor:465199,color1:16711680,color2:53759,birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5},sl:[{s:"🐦 Birds 飞鸟"},{k:"quantity",l:"密度 Quantity",mn:2,mx:5,st:1},{k:"birdSize",l:"体型 Size",mn:.5,mx:3,st:.1},{k:"speedLimit",l:"速度 Speed",mn:1,mx:15,st:.5},{s:"🧠 Boids 行为"},{k:"separation",l:"分离 Separation",mn:5,mx:50,st:1},{k:"alignment",l:"对齐 Alignment",mn:5,mx:50,st:1},{k:"cohesion",l:"聚合 Cohesion",mn:5,mx:50,st:1}],pal:[{n:"🔴 红蓝",c:[1,0,0]},{n:"🟢 绿黄",c:[0,1,0]},{n:"🟣 紫青",c:[.5,0,1]}]},"vanta-net":{title:"Net 网络",desc:"3D 粒子连线网络 · 距离阈值动态连接 + 旋转漂移 + 亮度混合",tags:[["Particles","green"],["Lines","purple"],["Dynamic","pink"]],cam:null,look:null,is3DVanta:!0,defs:{color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0},sl:[{s:"🕸️ Net 网络"},{k:"points",l:"密度 Points",mn:3,mx:20,st:1},{k:"maxDistance",l:"连接距离",mn:5,mx:50,st:1},{k:"spacing",l:"间距 Spacing",mn:5,mx:30,st:1}],pal:[{n:"🩷 粉紫",c:[1,.25,.5]},{n:"🩵 蓝绿",c:[0,.8,.8]},{n:"🧡 橙黄",c:[1,.6,0]}]},"vanta-waves":{title:"Waves 波浪",desc:"动态波浪网格 · Trochoid 波形叠加 + FlatShading + Phong 材质",tags:[["Trochoid","green"],["FlatShading","purple"],["Animated","pink"]],cam:null,look:null,is3DVanta:!0,defs:{color:21896,shininess:30,waveHeight:15,waveSpeed:1,zoom:1},sl:[{s:"🌊 Waves 波浪"},{k:"waveHeight",l:"浪高 Height",mn:1,mx:40,st:1},{k:"waveSpeed",l:"速度 Speed",mn:.1,mx:3,st:.1},{k:"zoom",l:"缩放 Zoom",mn:.3,mx:3,st:.1},{k:"shininess",l:"光泽 Shininess",mn:1,mx:100,st:1}],pal:[{n:"🔵 深蓝",c:[0,.33,.53]},{n:"🌊 青碧",c:[0,.6,.5]},{n:"🌑 暗夜",c:[.05,.1,.2]}]},"vanta-dots":{title:"Dots 星点",desc:"星点矩阵 + 旋转线球 · PointsMaterial + 正弦波振荡",tags:[["Points","green"],["Sine","purple"],["LineSphere","pink"]],cam:null,look:null,is3DVanta:!0,defs:{color:16746528,color2:16746528,backgroundColor:2236962,size:3,spacing:35,showLines:!0},sl:[{s:"✨ Dots 星点"},{k:"size",l:"粒径 Size",mn:.5,mx:10,st:.5},{k:"spacing",l:"间距 Spacing",mn:10,mx:80,st:1}],pal:[{n:"🟠 暖橙",c:[1,.53,.13]},{n:"🔵 冰蓝",c:[.2,.6,1]},{n:"🟢 翠绿",c:[.2,.8,.3]}]},"vanta-rings":{title:"Rings 光环",desc:"彩色环形阵列 · ExtrudeGeometry 弧形 + 多色分层 + 旋转",tags:[["Extrude","green"],["Multi-color","purple"],["Rotation","pink"]],cam:null,look:null,is3DVanta:!0,defs:{backgroundColor:2106408,color:8978176},sl:[],pal:[{n:"🟢 荧绿",c:[.53,1,0]},{n:"🔵 蓝光",c:[.07,.53,.87]},{n:"🟡 暖金",c:[1,.87,.13]}]},"vanta-globe":{title:"Globe 地球",desc:"线框地球 + 极轴 + 网格波动连线 · 球面磁力线",tags:[["Wireframe","green"],["Poles","purple"],["Grid","pink"]],cam:null,look:null,is3DVanta:!0,defs:{color:16727937,color2:16777215,size:1,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0},sl:[{s:"🌍 Globe 地球"},{k:"size",l:"球径 Size",mn:.3,mx:3,st:.1},{k:"points",l:"网格密度",mn:3,mx:20,st:1},{k:"maxDistance",l:"连接距离",mn:5,mx:50,st:1}],pal:[{n:"🩷 粉紫",c:[1,.25,.5]},{n:"🩵 蓝白",c:[.3,.6,1]},{n:"🟢 绿光",c:[.2,.8,.3]}]},"vanta-clouds2":{title:"Clouds2 程序云",desc:"程序化噪声体积云 · 噪声密度采样 + 光照渐变",tags:[["Procedural","green"],["Noise","purple"],["Volume","pink"]],cam:null,look:null,isVanta:!0,defs:{backgroundColor:0,skyColor:6072010,cloudColor:3362176,lightColor:16777215,speed:1},sl:[{s:"☁️ Clouds2 云"},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05}],pal:[{n:"🩵 晴空",c:[.36,.67,.79]},{n:"🌅 暮色",c:[.5,.2,.1]},{n:"🌑 深夜",c:[.05,.08,.15]}]},"vanta-topology":{title:"Topology 拓扑",desc:"流场粒子系统 · Perlin 噪声流向 + 4500 粒子描迹",tags:[["Flow Field","green"],["Particles","purple"],["Canvas 2D","pink"]],cam:null,look:null,isCanvas:!0,defs:{color:9016910,backgroundColor:8738,speed:1},sl:[],pal:[{n:"🟢 苔绿",c:[.54,.58,.31]},{n:"🔵 靛蓝",c:[.1,.2,.6]},{n:"🟡 琥珀",c:[.8,.6,.1]}]},"vanta-trunk":{title:"Trunk 年轮",desc:"噪声同心环 · 极坐标噪声径向偏移 + 动态呼吸",tags:[["Polar","green"],["Noise Ring","purple"],["Canvas 2D","pink"]],cam:null,look:null,isCanvas:!0,defs:{color:9979487,backgroundColor:2237478,spacing:0,chaos:1},sl:[{s:"🪵 Trunk 年轮"},{k:"chaos",l:"混乱度 Chaos",mn:.1,mx:3,st:.1},{k:"spacing",l:"间距 Spacing",mn:0,mx:5,st:.1}],pal:[{n:"🩷 紫粉",c:[.6,.27,.37]},{n:"🩵 蓝灰",c:[.3,.4,.5]},{n:"🟢 森绿",c:[.2,.5,.2]}]}},Cy=document.getElementById("canvas-container"),xe=new g_({antialias:!0});xe.setSize(window.innerWidth,window.innerHeight);xe.setPixelRatio(Math.min(window.devicePixelRatio,2));xe.outputColorSpace=Ee;Cy.appendChild(xe.domElement);const Xt=new ls;Xt.background=new ut(198418);const Be=new ye(60,window.innerWidth/window.innerHeight,.1,1e4);Be.position.set(0,2,5);const we=new Iv(Be,xe.domElement);we.enableDamping=!0;we.dampingFactor=.06;const hs=new Ni(3359846,.5),Ai=new Qs(16772829,1.2);Ai.position.set(5,8,3);const Ri=new vr(16746598,.5,20);Ri.position.set(-3,4,-2);Xt.add(hs,Ai,Ri);const Vh=new Ni(8421504,4),jn=new Ps(6328575,80);jn.position.set(0,-1,7.8);jn.angle=Math.PI/6;jn.penumbra=.5;jn.castShadow=!0;jn.shadow.mapSize.set(1024,1024);const Kn=new Ps(16748640,80);Kn.position.set(0,1,-3);Kn.angle=Math.PI/6;Kn.penumbra=.5;Kn.castShadow=!0;Kn.shadow.mapSize.set(1024,1024);const ur=new $v(xe);ur.addPass(new Jv(Xt,Be));const Py=new Ts(new Z(window.innerWidth,window.innerHeight),.85,.4,.85);ur.addPass(Py);let vl=!1;const Dy=En,Ly=1;function Iy(s){s==="trois-flower"?(Xt.remove(hs,Ai,Ri),Xt.add(Vh,jn,jn.target,Kn,Kn.target),xe.shadowMap.enabled=!0,xe.shadowMap.type=Wh,xe.toneMapping=Xh,xe.toneMappingExposure=2.1,Xt.background=new ut(657930),vl=!0):(Xt.remove(Vh,jn,jn.target,Kn,Kn.target),Xt.add(hs,Ai,Ri),xe.shadowMap.enabled=!1,xe.toneMapping=Dy,xe.toneMappingExposure=Ly,Xt.background=new ut(198418),vl=!1)}const jl=hr.getInstance();jl.set("uResolution",new Z(window.innerWidth,window.innerHeight));yo.getInstance();let tt=null,Hh=[],Qt="trois-flower",te={},fo=0,Oe=Be,Jn=!1,Ve="showcase";const Wn={};let dr=null;function Uy(){tt&&(tt.dispose(),tt=null),Hh.forEach(t=>t.dispose()),Hh=[];const s=[];Xt.traverse(t=>{(t.isMesh||t.isLineSegments||t.isPoints||t.isLine)&&s.push(t)}),s.forEach(t=>Xt.remove(t)),Oe=Be,Jn=!1,we.enabled=!0,dr=null}function Li(s,t){Uy(),Qt=s,te={...t};const e=$e[s];if(!e)return;Iy(s),document.querySelectorAll(".entity-btn").forEach(i=>i.classList.remove("active"));const n=document.querySelector(`[data-mode="${s}"]`);switch(n&&n.classList.add("active"),e.cam&&(Be.position.set(...e.cam),we.target.set(...e.look)),s){case"butterfly":tt=new gl(t).build(),tt.addTo(Xt).setPosition(0,1.5,0);break;case"flock":tt=new gl(t).build(),tt.addTo(Xt);break;case"mandelbulb":tt=new Bu(t).build(),tt.addTo(Xt);break;case"trois-flower":tt=new Uu(t).build(),tt.addTo(Xt);break;case"dahlia":tt=new ix(t).build(),tt.addTo(Xt),tt.camera&&(Oe=tt.camera,Jn=!0,we.enabled=Ve==="free"),Xt.remove(hs,Ai,Ri),Xt.background=null;break;case"bloom":tt=new qx,tt.init(Xt,xe).then(()=>{tt._camera&&(Oe=tt._camera,Jn=!0,we.enabled=!1),Xt.remove(hs,Ai,Ri),Xt.background=null});break;case"tulip":tt=new Hx(t).build(),tt.addTo(Xt),tt.camera&&(Oe=tt.camera,Jn=!0,we.enabled=Ve==="free"),Xt.remove(hs,Ai,Ri),Xt.background=null;break;case"aurora":tt=new zu(t).build(),tt.addTo(Xt);break;case"vanta-halo":tt=new Jx(t).build(),tt.setRenderer(xe),tt.addTo(Xt);break;case"vanta-fog":tt=new ty(t).build(),tt.addTo(Xt);break;case"vanta-cells":tt=new ey(t).build(),tt.addTo(Xt);break;case"vanta-clouds":tt=new ny(t).build(),tt.addTo(Xt);break;case"vanta-ripple":tt=new iy(t).build(),tt.addTo(Xt);break;case"vanta-clouds2":tt=new Ty(t).build(),tt.addTo(Xt);break;case"vanta-birds":tt=new cy(t).build(),tt.setRenderer(xe),tt.addTo(Xt),Qi(tt);break;case"vanta-net":tt=new xy(t).build(),tt.setRenderer(xe),tt.addTo(Xt),Qi(tt);break;case"vanta-waves":tt=new yy(t).build(),tt.setRenderer(xe),tt.addTo(Xt),Qi(tt);break;case"vanta-dots":tt=new My(t).build(),tt.setRenderer(xe),tt.addTo(Xt),Qi(tt);break;case"vanta-rings":tt=new by(t).build(),tt.setRenderer(xe),tt.addTo(Xt),Qi(tt);break;case"vanta-globe":tt=new wy(t).build(),tt.setRenderer(xe),tt.addTo(Xt),Qi(tt);break;case"vanta-topology":tt=new Ey(t).build(),tt.addTo();break;case"vanta-trunk":tt=new Ay(t).build(),tt.addTo();break}Ve="showcase",we.update(),Oy(s),By()}function Qi(s){if(s&&s.camera){if(Oe=s.camera,Jn=!0,we.enabled=Ve==="free",s.camera.aspect=window.innerWidth/window.innerHeight,s.camera.updateProjectionMatrix(),dr={pos:s.camera.position.clone(),target:s.camera.tx!==void 0?new P(s.camera.tx,s.camera.ty,s.camera.tz||s.camera.position.z):new P(0,0,0)},Wn[Qt]){const t=Wn[Qt];s.camera.position.copy(t.pos),s.camera.tx!==void 0&&(s.camera.tx=t.pos.x,s.camera.ty=t.pos.y,s.camera.tz=t.pos.z)}Ve==="free"&&Vu(s.camera)}}function Vu(s){Be.position.copy(s.position),Be.fov=s.fov||60,Be.near=s.near||.1,Be.far=s.far||1e4,Be.updateProjectionMatrix();const t=new P(0,0,-1).applyQuaternion(s.quaternion);we.target.copy(s.position).add(t.multiplyScalar(100)),we.update(),Oe=Be,we.enabled=!0}function Hu(s){if(s===Ve)return;Ve=s;const t=$e[Qt];if(s==="free")Jn&&tt&&tt.camera&&Vu(tt.camera),we.enabled=!0;else if(Jn&&tt&&tt.camera)if(Oe=tt.camera,we.enabled=!1,Wn[Qt]){const e=Wn[Qt];tt.camera.position.copy(e.pos),tt.camera.tx!==void 0&&(tt.camera.tx=e.pos.x,tt.camera.ty=e.pos.y,e.pos.z!==void 0&&(tt.camera.tz=e.pos.z))}else dr&&tt.camera.position.copy(dr.pos);else t&&t.cam&&(Wn[Qt]?(Be.position.copy(Wn[Qt].pos),we.target.copy(Wn[Qt].target)):(Be.position.set(...t.cam),we.target.set(...t.look)),we.enabled=!0,we.update());Ny()}function Gu(){const s=Oe.position.clone(),t=we.enabled?we.target.clone():new P(0,0,0);Wn[Qt]={pos:s,target:t},Jn&&tt&&tt.camera&&(dr={pos:s.clone(),target:t.clone()});const e=document.getElementById("pin-toast");e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2200)}function Ny(){document.querySelectorAll(".view-mode-btn").forEach(t=>{t.classList.toggle("active",t.dataset.vm===Ve)});const s=document.getElementById("btn-pin-cam");s&&s.classList.toggle("visible",Ve==="free")}function Kl(s){var a,l,c,u;const t=$e[s];if(!t)return;const e=document.getElementById("params-content"),n=!t.isVanta&&!t.isCanvas,i=t.is3DVanta===!0,r=n||i;let o=`<div class="panel-title">⚙️ ${t.title}</div><div class="panel-subtitle">修改即时重建</div>`;r&&(Wn[s],o+='<div class="view-mode-bar">',o+=`<button class="view-mode-btn${Ve==="showcase"?" active":""}" data-vm="showcase"><span class="vm-icon">🎬</span>展示视角</button>`,o+=`<button class="view-mode-btn${Ve==="free"?" active":""}" data-vm="free"><span class="vm-icon">🎮</span>自由视角</button>`,o+="</div>",o+=`<button class="pin-cam-btn${Ve==="free"?" visible":""}" id="btn-pin-cam">📌 固定当前视角为展示视角</button>`),(a=t.pal)!=null&&a.length&&(o+='<div class="param-section"><div class="param-section-label">Color Presets</div><div class="color-row">',t.pal.forEach((h,d)=>{const f=h.c||h.t||h.cA||[.5,.5,.5];o+=`<div class="color-swatch${d===fo?" active":""}" data-ci="${d}" style="background:rgb(${Math.round(f[0]*255)},${Math.round(f[1]*255)},${Math.round(f[2]*255)})" title="${h.n}"></div>`}),o+="</div></div>");for(const h of t.sl){if(h.s){o+=`<div class="param-section"><div class="param-section-label">${h.s}</div>`;continue}const d=te[h.k]??t.defs[h.k],f=h.st>=1?d:Number(d).toFixed(2);o+=`<div class="param-row"><span class="param-label">${h.l}</span><span class="param-value" id="pv-${h.k}">${f}</span></div>`,o+=`<input type="range" class="param-slider" data-key="${h.k}" min="${h.mn}" max="${h.mx}" step="${h.st}" value="${d}">`}o+='<button class="action-btn" id="btn-rand">🎲 随机种子</button>',o+='<button class="action-btn secondary" id="btn-rebuild">🔄 重新生成</button>',e.innerHTML=o,e.querySelectorAll(".param-slider").forEach(h=>{h.addEventListener("input",d=>{const f=d.target.dataset.key,g=parseFloat(d.target.value);te[f]=g,document.getElementById(`pv-${f}`).textContent=parseFloat(d.target.step)>=1?g:g.toFixed(2)}),h.addEventListener("change",()=>Li(Qt,te))}),e.querySelectorAll(".color-swatch").forEach(h=>{h.addEventListener("click",d=>{fo=parseInt(d.target.dataset.ci),Fy(s,fo),e.querySelectorAll(".color-swatch").forEach(f=>f.classList.remove("active")),d.target.classList.add("active")})}),(l=document.getElementById("btn-rand"))==null||l.addEventListener("click",Wu),(c=document.getElementById("btn-rebuild"))==null||c.addEventListener("click",()=>Li(Qt,te)),e.querySelectorAll(".view-mode-btn").forEach(h=>{h.addEventListener("click",()=>Hu(h.dataset.vm))}),(u=document.getElementById("btn-pin-cam"))==null||u.addEventListener("click",Gu)}function Fy(s,t){var n,i;const e=(i=(n=$e[s])==null?void 0:n.pal)==null?void 0:i[t];e&&(e.c&&(s==="butterfly"||s==="flock")?te.baseColor=e.c:e.c&&(te.color=e.c,e.ic&&(te.innerColor=e.ic)),e.cA&&(te.colorA=e.cA),e.cB&&(te.colorB=e.cB),e.t&&(te.colorTop=e.t),e.b&&(te.colorBottom=e.b),e.a&&(te.colorAccent=e.a),Li(Qt,te))}function Oy(s){const t=$e[s];if(!t)return;document.getElementById("overlay-title").textContent=t.title,document.getElementById("overlay-desc").textContent=t.desc,document.getElementById("overlay-tags").innerHTML=t.tags.map(([n,i])=>`<span class="overlay-tag tag-${i}">${n}</span>`).join("");const e=document.getElementById("entity-overlay");e.classList.remove("visible"),requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add("visible")))}function By(){document.getElementById("stat-seed").textContent=`Seed: ${te.seed||te.baseSeed||42}`;let s=0,t=0;Xt.traverse(e=>{if(e.isMesh&&e.geometry){t++;const n=e.geometry.getAttribute("position");n&&(s+=n.count)}}),document.getElementById("stat-geo").textContent=`Geo: ${t}`,document.getElementById("stat-verts").textContent=`Verts: ${s.toLocaleString()}`}function Wu(){const s=Math.floor(Math.random()*9999)+1;"seed"in te&&(te.seed=s),"baseSeed"in te&&(te.baseSeed=s),Kl(Qt),Li(Qt,te)}window.appSwitch=function(s){fo=0,Ve="showcase",te={...$e[s].defs},Kl(s),Li(s,te)};document.addEventListener("keydown",s=>{if((s.key==="r"||s.key==="R")&&Wu(),s.key==="v"||s.key==="V"){const t=$e[Qt];(!(t!=null&&t.isVanta)&&!(t!=null&&t.isCanvas)||(t==null?void 0:t.is3DVanta))&&Hu(Ve==="showcase"?"free":"showcase")}(s.key==="p"||s.key==="P")&&Ve==="free"&&Gu()});const zy=new Fi;let ya=0,so=0;function Xu(){requestAnimationFrame(Xu);const s=zy.getDelta();jl.tick(),tt&&tt.update&&tt.update(void 0,s),Qt==="flock"&&tt&&tt.updateFlock(s),we.enabled&&we.update(),Qt==="bloom"&&tt&&tt._loaded?tt.render(xe):vl?(ur.passes[0].camera=Oe,ur.render()):xe.render(Xt,Oe),ya++,so+=s,so>=.5&&(document.getElementById("stat-fps").textContent=Math.round(ya/so)+" FPS",ya=0,so=0)}window.addEventListener("resize",()=>{const s=window.innerWidth,t=window.innerHeight;Be.aspect=s/t,Be.updateProjectionMatrix(),Jn&&Oe!==Be&&(Oe.aspect=s/t,Oe.updateProjectionMatrix()),xe.setSize(s,t),ur.setSize(s,t),jl.set("uResolution",new Z(s,t)),tt&&tt.resize&&tt.resize(s,t),tt&&tt.onResize&&tt.onResize(s,t)});window.addEventListener("mousemove",s=>{if(!tt||!tt.setMouse)return;const t=$e[Qt];Ve==="free"&&t&&t.is3DVanta||tt.setMouse(s.clientX,s.clientY)});function qu(s){if(!tt||!tt.setMouse||!s.touches.length)return;const t=$e[Qt];Ve==="free"&&t&&t.is3DVanta||tt.setMouse(s.touches[0].clientX,s.touches[0].clientY)}window.addEventListener("touchstart",qu,{passive:!0});window.addEventListener("touchmove",qu,{passive:!0});document.getElementById("sidebar").addEventListener("click",s=>{const t=s.target.closest(".entity-btn");if(!t)return;const e=t.dataset.mode;e&&$e[e]&&window.appSwitch(e)});window.appSwitch("trois-flower");Xu();(function(){const t=document.getElementById("tcPanel"),e=document.getElementById("tcToggleBtn"),n=document.getElementById("tcMinBtn"),i=document.getElementById("tcHeader"),r=document.getElementById("tcBody"),o=document.getElementById("tcCopyBtn"),a=document.getElementById("tcResetBtn"),l=document.getElementById("tcSaveBtn"),c=document.getElementById("tcExportBtn");if(!t||!e)return;e.addEventListener("click",()=>{t.classList.add("tc-visible"),e.style.display="none"}),n.addEventListener("click",()=>{t.classList.remove("tc-visible"),e.style.display="flex"});let u=!1,h=0,d=0;i.addEventListener("mousedown",C=>{if(C.target.closest(".tc-header-btn"))return;u=!0;const T=t.getBoundingClientRect();h=C.clientX-T.left,d=C.clientY-T.top,C.preventDefault()}),document.addEventListener("mousemove",C=>{if(!u)return;const T=Math.max(0,Math.min(window.innerWidth-t.offsetWidth,C.clientX-h)),E=Math.max(0,Math.min(window.innerHeight-50,C.clientY-d));t.style.left=T+"px",t.style.top=E+"px",t.style.right="auto",e.style.left=T+"px",e.style.top=E+"px",e.style.right="auto"}),document.addEventListener("mouseup",()=>{u=!1}),document.addEventListener("keydown",C=>{C.key==="`"&&(t.classList.contains("tc-visible")?(t.classList.remove("tc-visible"),e.style.display="flex"):(t.classList.add("tc-visible"),e.style.display="none"))});let f=null;function g(C){let T=document.querySelector(".tc-toast");T||(T=document.createElement("div"),T.className="tc-toast",document.body.appendChild(T)),T.textContent=C,T.classList.add("tc-show"),setTimeout(()=>T.classList.remove("tc-show"),1800)}function _(C,T){return T>=1?String(Math.round(C)):Math.abs(C)<.001?C.toExponential(1):C.toFixed(Math.abs(C)<1?3:2)}function m(C){f=C,r.innerHTML="";const T=$e[C];if(!T||!T.sl||T.sl.length===0){r.innerHTML='<div style="padding:16px;color:#555;font-size:11px;text-align:center">该效果暂无可调参数</div>';return}JSON.parse(JSON.stringify(T.defs));const E=document.createElement("div");E.className="tc-entity-group";const A=document.createElement("div");A.className="tc-entity-header tc-open",A.innerHTML=`<span class="tc-entity-arrow">▶</span><span class="tc-entity-name">${T.title}</span>`,A.addEventListener("click",()=>A.classList.toggle("tc-open")),E.appendChild(A);const M=document.createElement("div");M.className="tc-entity-content";let y=null;for(const D of T.sl){if(D.s){y=document.createElement("div"),y.className="tc-group",y.innerHTML=`<div class="tc-group-title">${D.s}</div>`,M.appendChild(y);continue}const O=D.k,F=D.l||O,B=D.mn,G=D.mx,z=D.st,K=te[O]??T.defs[O],W=/color|background|tint|hue/i.test(O)&&typeof K=="number"&&K>4095,nt=document.createElement("div");if(nt.className="tc-row",W){const st="#"+(K&16777215).toString(16).padStart(6,"0");nt.innerHTML=`
          <span class="tc-label" title="${O}">${F}</span>
          <input type="color" class="tc-color" value="${st}">
          <span class="tc-value">${st}</span>
        `;const pt=nt.querySelector(".tc-color"),Ct=nt.querySelector(".tc-value");pt.addEventListener("input",()=>{const Ut=parseInt(pt.value.slice(1),16);Ct.textContent=pt.value,b(O,Ut,!1)})}else{nt.innerHTML=`
          <span class="tc-label" title="${O}">${F}</span>
          <input type="range" class="tc-slider" min="${B}" max="${G}" step="${z}" value="${K}">
          <span class="tc-value">${_(K,z)}</span>
        `;const st=nt.querySelector(".tc-slider"),pt=nt.querySelector(".tc-value"),Ct=z;st.addEventListener("input",()=>{const Ut=parseFloat(st.value);pt.textContent=_(Ut,Ct),b(O,Ut,!1)}),st.addEventListener("change",()=>{const Ut=parseFloat(st.value);b(O,Ut,!0)})}(y||M).appendChild(nt)}if(!T.isCanvas){const D=document.createElement("div");D.className="tc-group",D.innerHTML='<div class="tc-group-title">📷 相机</div>';const O=p("FOV",10,150,1,Oe.fov,B=>{Oe.fov=B,Oe.updateProjectionMatrix()});D.appendChild(O);const F=p("Z 距离",-500,500,1,Oe.position.z,B=>{Oe.position.z=B});D.appendChild(F),M.appendChild(D)}E.appendChild(M),r.appendChild(E)}function p(C,T,E,A,M,y){const D=document.createElement("div");D.className="tc-row",D.innerHTML=`
      <span class="tc-label">${C}</span>
      <input type="range" class="tc-slider" min="${T}" max="${E}" step="${A}" value="${M}">
      <span class="tc-value">${_(M,A)}</span>
    `;const O=D.querySelector(".tc-slider"),F=D.querySelector(".tc-value");return O.addEventListener("input",()=>{const B=parseFloat(O.value);F.textContent=_(B,A),y(B)}),D}function b(C,T,E){const A=tt,M=$e[Qt];if(!(!A||!M)){if(te[C]=T,M.isVanta&&A._uniforms){const y=A._uniforms;if(y[C])if(/color|background|tint|hue/i.test(C)&&typeof T=="number"){const D=new ut(T);y[C].value.set(D.r,D.g,D.b)}else y[C].value=T;A._params&&(A._params[C]=T);return}if(M.is3DVanta&&A.options){A.options[C]=T;return}if(M.isCanvas&&A._params){A._params[C]=T;return}if(Qt==="bloom"&&A.applyParam){A.applyParam(C,T);return}A._params&&(A._params[C]=T),A.options&&(A.options[C]=T),A._mesh&&x(A._mesh,C,T),A._group&&A._group.traverse(y=>{y.isMesh&&y.material&&y.material.uniforms&&x(y,C,T)}),E&&(Li(Qt,te),setTimeout(()=>m(Qt),50))}}function x(C,T,E){if(!C.material)return;const A=Array.isArray(C.material)?C.material:[C.material];for(const M of A){if(!M.uniforms)continue;if(M.uniforms[T])if(/color/i.test(T)&&typeof E=="number"){const D=new ut(E);M.uniforms[T].value&&M.uniforms[T].value.isVector3?M.uniforms[T].value.set(D.r,D.g,D.b):M.uniforms[T].value=D}else typeof E=="number"&&(M.uniforms[T].value=E);const y="u"+T.charAt(0).toUpperCase()+T.slice(1);M.uniforms[y]&&typeof E=="number"&&(M.uniforms[y].value=E)}}o.addEventListener("click",()=>{const C={mode:Qt,params:{...te}};navigator.clipboard.writeText(JSON.stringify(C,null,2)).then(()=>{g("✅ 参数已复制到剪贴板")})}),c.addEventListener("click",()=>{const C={mode:Qt,params:{...te}};navigator.clipboard.writeText(JSON.stringify(C,null,2)).then(()=>{g("📋 JSON 已复制")})}),a.addEventListener("click",()=>{!f||!$e[f]||(te={...$e[f].defs},Li(Qt,te),Kl(Qt),setTimeout(()=>m(Qt),50),g("↩ 已重置为默认值"))}),l.addEventListener("click",()=>{const C={mode:Qt,params:{...te}};localStorage.setItem("tc-3d-saved-"+Qt,JSON.stringify(C)),g("💾 已保存到本地")});const v=window.appSwitch;window.appSwitch=function(C){v(C);const T=localStorage.getItem("tc-3d-saved-"+C);if(T)try{const{params:E}=JSON.parse(T)}catch{}setTimeout(()=>m(C),80)},setTimeout(()=>m(Qt),200)})();

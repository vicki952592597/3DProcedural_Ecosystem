var Ku=Object.defineProperty;var Zu=(s,e,t)=>e in s?Ku(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Us=(s,e,t)=>Zu(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="170",is={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$u=0,sc=1,Ju=2,Hh=1,Gh=2,zn=3,yn=0,Jt=1,Pt=2,Zn=0,ss=1,po=2,rc=3,oc=4,Qu=5,Ti=100,ed=101,td=102,nd=103,id=104,sd=200,rd=201,od=202,ad=203,Ma=204,Sa=205,ld=206,cd=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,ba=0,wa=1,Ta=2,us=3,Ea=4,Aa=5,Ca=6,Ra=7,So=0,_d=1,vd=2,En=0,xd=1,yd=2,Md=3,Wh=4,Sd=5,bd=6,wd=7,ac="attached",Td="detached",Xh=300,ds=301,fs=302,Pa=303,Da=304,bo=306,wn=1e3,hn=1001,mo=1002,Dt=1003,qh=1004,Xs=1005,Mt=1006,ro=1007,Tn=1008,Qn=1009,Yh=1010,jh=1011,tr=1012,yl=1013,Pi=1014,Lt=1015,sn=1016,Ml=1017,Sl=1018,ps=1020,Kh=35902,Zh=1021,$h=1022,Ot=1023,Jh=1024,Qh=1025,rs=1026,ms=1027,bl=1028,wl=1029,eu=1030,Tl=1031,El=1033,oo=33776,ao=33777,lo=33778,co=33779,La=35840,Ia=35841,Na=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,za=37808,ka=37809,Va=37810,Ha=37811,Ga=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,ja=37817,Ka=37818,Za=37819,$a=37820,Ja=37821,ho=36492,Qa=36494,el=36495,tu=36283,tl=36284,nl=36285,il=36286,nr=2300,ir=2301,Po=2302,lc=2400,cc=2401,hc=2402,Ed=2500,Ad=0,nu=1,sl=2,Cd=3200,Rd=3201,wo=0,Pd=1,ui="",Tt="srgb",Xt="srgb-linear",To="linear",ct="srgb",Bi=7680,uc=519,Dd=512,Ld=513,Id=514,iu=515,Nd=516,Ud=517,Fd=518,Od=519,rl=35044,pi=35048,ol="300 es",Xn=2e3,go=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dc=1234567;const os=Math.PI/180,gs=180/Math.PI;function un(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function Al(s,e){return(s%e+e)%e}function Bd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function zd(s,e,t){return s!==e?(t-s)/(e-s):0}function js(s,e,t){return(1-t)*s+t*e}function kd(s,e,t,n){return js(s,e,1-Math.exp(-t*n))}function Vd(s,e=1){return e-Math.abs(Al(s,e*2)-e)}function Hd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Gd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Wd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Xd(s,e){return s+Math.random()*(e-s)}function qd(s){return s*(.5-Math.random())}function Yd(s){s!==void 0&&(dc=s);let e=dc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jd(s){return s*os}function Kd(s){return s*gs}function Zd(s){return(s&s-1)===0&&s!==0}function $d(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const _s={DEG2RAD:os,RAD2DEG:gs,generateUUID:un,clamp:At,euclideanModulo:Al,mapLinear:Bd,inverseLerp:zd,lerp:js,damp:kd,pingpong:Vd,smoothstep:Hd,smootherstep:Gd,randInt:Wd,randFloat:Xd,randFloatSpread:qd,seededRandom:Yd,degToRad:jd,radToDeg:Kd,isPowerOfTwo:Zd,ceilPowerOfTwo:$d,floorPowerOfTwo:Jd,setQuaternionFromProperEuler:Qd,normalize:at,denormalize:xn};class Z{constructor(e=0,t=0){Z.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],x=i[4],v=i[7],R=i[2],T=i[5],E=i[8];return r[0]=o*_+a*b+l*R,r[3]=o*m+a*x+l*T,r[6]=o*p+a*v+l*E,r[1]=c*_+u*b+h*R,r[4]=c*m+u*x+h*T,r[7]=c*p+u*v+h*E,r[2]=d*_+f*b+g*R,r[5]=d*m+f*x+g*T,r[8]=d*p+f*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Do.makeScale(e,t)),this}rotate(e){return this.premultiply(Do.makeRotation(-e)),this}translate(e,t){return this.premultiply(Do.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new He;function su(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function sr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ef(){const s=sr("canvas");return s.style.display="block",s}const fc={};function qs(s){s in fc||(fc[s]=!0,console.warn(s))}function tf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function nf(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sf(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?To:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function as(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const pc=[.64,.33,.3,.6,.15,.06],mc=[.2126,.7152,.0722],gc=[.3127,.329],_c=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[Xt]:{primaries:pc,whitePoint:gc,transfer:To,toXYZ:_c,fromXYZ:vc,luminanceCoefficients:mc,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:pc,whitePoint:gc,transfer:ct,toXYZ:_c,fromXYZ:vc,luminanceCoefficients:mc,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});let zi;class rf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=sr("canvas")),zi.width=e.width,zi.height=e.height;const n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let of=0;class ru{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=un(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Lo(i[o].image)):r.push(Lo(i[o]))}else r=Lo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Lo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let af=0;class Bt extends Ni{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=hn,i=hn,r=Mt,o=Tn,a=Ot,l=Qn,c=Bt.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=un(),this.name="",this.source=new ru(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Xh;Bt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(f+1)/2,R=(p+1)/2,T=(u+d)/4,E=(h+_)/4,A=(g+m)/4;return x>v&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=E/n):v>R?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=A/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=E/r,i=A/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lf extends Ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ru(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kt extends lf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ou extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cf extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),T=Math.atan2(R,p*b);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const v=a*b;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Io.copy(this).projectOnVector(e),this.sub(Io)}reflect(e){return this.sub(Io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Io=new P,xc=new An;class ei{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),br.subVectors(this.max,Fs),ki.subVectors(e.a,Fs),Vi.subVectors(e.b,Fs),Hi.subVectors(e.c,Fs),ii.subVectors(Vi,ki),si.subVectors(Hi,Vi),_i.subVectors(ki,Hi);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-_i.z,_i.y,ii.z,0,-ii.x,si.z,0,-si.x,_i.z,0,-_i.x,-ii.y,ii.x,0,-si.y,si.x,0,-_i.y,_i.x,0];return!No(t,ki,Vi,Hi,br)||(t=[1,0,0,0,1,0,0,0,1],!No(t,ki,Vi,Hi,br))?!1:(wr.crossVectors(ii,si),t=[wr.x,wr.y,wr.z],No(t,ki,Vi,Hi,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new P,new P,new P,new P,new P,new P,new P,new P],gn=new P,Sr=new ei,ki=new P,Vi=new P,Hi=new P,ii=new P,si=new P,_i=new P,Fs=new P,br=new P,wr=new P,vi=new P;function No(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){vi.fromArray(s,r);const a=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),u=n.dot(vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hf=new ei,Os=new P,Uo=new P;class Cn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Os,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Uo)),this.expandByPoint(Os.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new P,Fo=new P,Tr=new P,ri=new P,Oo=new P,Er=new P,Bo=new P;class dr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fo.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Fo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Tr),a=ri.dot(this.direction),l=-ri.dot(Tr),c=ri.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Fo).addScaledVector(Tr,d),f}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,i,r){Oo.subVectors(t,e),Er.subVectors(n,e),Bo.crossVectors(Oo,Er);let o=this.direction.dot(Bo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(Er.crossVectors(ri,Er));if(l<0)return null;const c=a*this.direction.dot(Oo.cross(ri));if(c<0||l+c>o)return null;const u=-a*ri.dot(Bo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uf,e,df)}lookAt(e,t,n){const i=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),oi.crossVectors(n,tn),oi.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),oi.crossVectors(n,tn)),oi.normalize(),Ar.crossVectors(tn,oi),i[0]=oi.x,i[4]=Ar.x,i[8]=tn.x,i[1]=oi.y,i[5]=Ar.y,i[9]=tn.y,i[2]=oi.z,i[6]=Ar.z,i[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],x=n[7],v=n[11],R=n[15],T=i[0],E=i[4],A=i[8],M=i[12],y=i[1],D=i[5],O=i[9],U=i[13],B=i[2],G=i[6],z=i[10],Y=i[14],W=i[3],le=i[7],he=i[11],ce=i[15];return r[0]=o*T+a*y+l*B+c*W,r[4]=o*E+a*D+l*G+c*le,r[8]=o*A+a*O+l*z+c*he,r[12]=o*M+a*U+l*Y+c*ce,r[1]=u*T+h*y+d*B+f*W,r[5]=u*E+h*D+d*G+f*le,r[9]=u*A+h*O+d*z+f*he,r[13]=u*M+h*U+d*Y+f*ce,r[2]=g*T+_*y+m*B+p*W,r[6]=g*E+_*D+m*G+p*le,r[10]=g*A+_*O+m*z+p*he,r[14]=g*M+_*U+m*Y+p*ce,r[3]=b*T+x*y+v*B+R*W,r[7]=b*E+x*D+v*G+R*le,r[11]=b*A+x*O+v*z+R*he,r[15]=b*M+x*U+v*Y+R*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,x=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,R=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,T=t*b+n*x+i*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=b*E,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*E,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*E,e[4]=x*E,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*E,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*E,e[8]=v*E,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*E,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*E,e[12]=R*E,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,b=l*c,x=l*u,v=l*h,R=n.x,T=n.y,E=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+v)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(d+p))*T,i[6]=(m+b)*T,i[7]=0,i[8]=(g+x)*E,i[9]=(m-b)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Gi.set(i[0],i[1],i[2]).length();const o=Gi.set(i[4],i[5],i[6]).length(),a=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);const c=1/r,u=1/o,h=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Xn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Xn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===go)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Xn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,f=(n+i)*u;let g,_;if(a===Xn)g=(o+r)*h,_=-2*h;else if(a===go)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new P,_n=new ze,uf=new P(0,0,0),df=new P(1,1,1),oi=new P,Ar=new P,tn=new P,yc=new ze,Mc=new An;class Qt{constructor(e=0,t=0,n=0,i=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class au{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ff=0;const Sc=new P,Wi=new An,Un=new ze,Cr=new P,Bs=new P,pf=new P,mf=new An,bc=new P(1,0,0),wc=new P(0,1,0),Tc=new P(0,0,1),Ec={type:"added"},gf={type:"removed"},Xi={type:"childadded",child:null},zo={type:"childremoved",child:null};class it extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DEFAULT_UP.clone();const e=new P,t=new Qt,n=new An,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new He}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=it.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(wc,e)}rotateZ(e){return this.rotateOnAxis(Tc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(wc,e)}translateZ(e){return this.translateOnAxis(Tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Bs,Cr,this.up):Un.lookAt(Cr,Bs,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(Un),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ec),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gf),zo.child=e,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ec),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}it.DEFAULT_UP=new P(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new P,Fn=new P,ko=new P,On=new P,qi=new P,Yi=new P,Ac=new P,Vo=new P,Ho=new P,Go=new P,Wo=new tt,Xo=new tt,qo=new tt;class cn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){vn.subVectors(i,t),Fn.subVectors(n,t),ko.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Fn),l=vn.dot(ko),c=Fn.dot(Fn),u=Fn.dot(ko),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(e,t),Xo.fromBufferAttribute(e,n),qo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Wo,r.x),o.addScaledVector(Xo,r.y),o.addScaledVector(qo,r.z),o}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),Fn.subVectors(e,t),vn.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),vn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;qi.subVectors(i,n),Yi.subVectors(r,n),Vo.subVectors(e,n);const l=qi.dot(Vo),c=Yi.dot(Vo);if(l<=0&&c<=0)return t.copy(n);Ho.subVectors(e,i);const u=qi.dot(Ho),h=Yi.dot(Ho);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(qi,o);Go.subVectors(e,r);const f=qi.dot(Go),g=Yi.dot(Go);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Yi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ac.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Ac,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function Yo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Al(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Yo(o,r,e+1/3),this.g=Yo(o,r,e),this.b=Yo(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=lu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ke.fromWorkingColorSpace(Wt.copy(this),e),Math.round(At(Wt.r*255,0,255))*65536+Math.round(At(Wt.g*255,0,255))*256+Math.round(At(Wt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,r=Wt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Tt){Ke.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Rr);const n=js(ai.h,Rr.h,t),i=js(ai.s,Rr.s,t),r=js(ai.l,Rr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new se;se.NAMES=lu;let _f=0;class dn extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=un(),this.name="",this.blending=ss,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Sa,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qn extends dn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gn=vf();function vf(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function xf(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=At(s,-65504,65504),Gn.floatView[0]=s;const e=Gn.uint32View[0],t=e>>23&511;return Gn.baseTable[t]+((e&8388607)>>Gn.shiftTable[t])}function yf(s){const e=s>>10;return Gn.uint32View[0]=Gn.mantissaTable[Gn.offsetTable[e]+(s&1023)]+Gn.exponentTable[e],Gn.floatView[0]}const Pr={toHalfFloat:xf,fromHalfFloat:yf},Et=new P,Dr=new Z;class mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=Lt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rl&&(e.usage=this.usage),e}}class cu extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hu extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mf=0;const on=new ze,jo=new it,ji=new P,nn=new ei,zs=new ei,Ut=new P;class dt extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(su(e)?hu:cu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(nn.min,zs.min),nn.expandByPoint(Ut),Ut.addVectors(nn.max,zs.max),nn.expandByPoint(Ut)):(nn.expandByPoint(zs.min),nn.expandByPoint(zs.max))}nn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(e,c),Ut.add(ji)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new P,l[A]=new P;const c=new P,u=new P,h=new P,d=new Z,f=new Z,g=new Z,_=new P,m=new P;function p(A,M,y){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[A].add(_),a[M].add(_),a[y].add(_),l[A].add(m),l[M].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,M=b.length;A<M;++A){const y=b[A],D=y.start,O=y.count;for(let U=D,B=D+O;U<B;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new P,v=new P,R=new P,T=new P;function E(A){R.fromBufferAttribute(i,A),T.copy(R);const M=a[A];x.copy(M),x.sub(R.multiplyScalar(R.dot(M))).normalize(),v.crossVectors(T,M);const D=v.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,D)}for(let A=0,M=b.length;A<M;++A){const y=b[A],D=y.start,O=y.count;for(let U=D,B=D+O;U<B;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new mt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new ze,xi=new dr,Lr=new Cn,Rc=new P,Ir=new P,Nr=new P,Ur=new P,Ko=new P,Fr=new P,Pc=new P,Or=new P;class nt extends it{constructor(e=new dt,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ko.fromBufferAttribute(h,e),o?Fr.addScaledVector(Ko,u):Fr.addScaledVector(Ko.sub(t),u))}t.add(Fr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),xi.copy(e.ray).recast(e.near),!(Lr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Lr,Rc)===null||xi.origin.distanceToSquared(Rc)>(e.far-e.near)**2))&&(Cc.copy(r).invert(),xi.copy(e.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,R=x;v<R;v+=3){const T=a.getX(v),E=a.getX(v+1),A=a.getX(v+2);i=Br(this,p,e,n,c,u,h,T,E,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=Br(this,o,e,n,c,u,h,b,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,R=x;v<R;v+=3){const T=v,E=v+1,A=v+2;i=Br(this,p,e,n,c,u,h,T,E,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,x=m+1,v=m+2;i=Br(this,o,e,n,c,u,h,b,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Sf(s,e,t,n,i,r,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===yn,a),l===null)return null;Or.copy(a),Or.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Or);return c<t.near||c>t.far?null:{distance:c,point:Or.clone(),object:s}}function Br(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ir),s.getVertexPosition(l,Nr),s.getVertexPosition(c,Ur);const u=Sf(s,e,t,n,Ir,Nr,Ur,Pc);if(u){const h=new P;cn.getBarycoord(Pc,Ir,Nr,Ur,h),i&&(u.uv=cn.getInterpolatedAttribute(i,a,l,c,h,new Z)),r&&(u.uv1=cn.getInterpolatedAttribute(r,a,l,c,h,new Z)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};cn.getNormal(Ir,Nr,Ur,d.normal),u.face=d,u.barycoord=h}return u}class fr extends dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(h,2));function g(_,m,p,b,x,v,R,T,E,A,M){const y=v/E,D=R/A,O=v/2,U=R/2,B=T/2,G=E+1,z=A+1;let Y=0,W=0;const le=new P;for(let he=0;he<z;he++){const ce=he*D-U;for(let ve=0;ve<G;ve++){const Le=ve*y-O;le[_]=Le*b,le[m]=ce*x,le[p]=B,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=T>0?1:-1,u.push(le.x,le.y,le.z),h.push(ve/E),h.push(1-he/A),Y+=1}}for(let he=0;he<A;he++)for(let ce=0;ce<E;ce++){const ve=d+ce+G*he,Le=d+ce+G*(he+1),X=d+(ce+1)+G*(he+1),te=d+(ce+1)+G*he;l.push(ve,Le,te),l.push(Le,X,te),W+=6}a.addGroup(f,W,M),f+=W,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){const e={};for(let t=0;t<s.length;t++){const n=vs(s[t]);for(const i in n)e[i]=n[i]}return e}function bf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function uu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const _o={clone:vs,merge:Yt};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ut extends dn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cl extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new P,Dc=new Z,Lc=new Z;class yt extends Cl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Dc,Lc),t.subVectors(Lc,Dc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(os*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Zi=1;class Ef extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yt(Ki,Zi,e,t);i.layers=this.layers,this.add(i);const r=new yt(Ki,Zi,e,t);r.layers=this.layers,this.add(r);const o=new yt(Ki,Zi,e,t);o.layers=this.layers,this.add(o);const a=new yt(Ki,Zi,e,t);a.layers=this.layers,this.add(a);const l=new yt(Ki,Zi,e,t);l.layers=this.layers,this.add(l);const c=new yt(Ki,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class du extends Bt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ds,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Af extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new du(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fr(5,5,5),r=new ut({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Zn});r.uniforms.tEquirect.value=t;const o=new nt(i,r),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=Mt),new Ef(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Zo=new P,Cf=new P,Rf=new He;class hi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zo.subVectors(n,t).cross(Cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rf.getNormalMatrix(e),i=this.coplanarPoint(Zo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Cn,zr=new P;class Rl{constructor(e=new hi,t=new hi,n=new hi,i=new hi,r=new hi,o=new hi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],b=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+u,m+g,v+b).normalize(),n[3].setComponents(l-o,d-u,m-g,v-b).normalize(),n[4].setComponents(l-a,d-h,m-_,v-x).normalize(),t===Xn)n[5].setComponents(l+a,d+h,m+_,v+x).normalize();else if(t===go)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(zr.x=i.normal.x>0?e.max.x:e.min.x,zr.y=i.normal.y>0?e.max.y:e.min.y,zr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Pf(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class fn extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*d-o;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-b,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const x=b+c*p,v=b+c*(p+1),R=b+1+c*(p+1),T=b+1+c*p;f.push(x,v,T),f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Of=`#ifdef USE_AOMAP
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
#endif`,Bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Xf=`#ifdef USE_BUMPMAP
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,np=`vec3 transformedNormal = objectNormal;
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
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
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
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#endif`,Rp=`struct PhysicalMaterial {
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
}`,Pp=`
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kp=`#if defined( USE_POINTS_UV )
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
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
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
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mm=`float getShadowMask() {
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
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`#include <common>
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
}`,Om=`#if DEPTH_PACKING == 3200
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
}`,Bm=`#define DISTANCE
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
}`,zm=`#define DISTANCE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#define LAMBERT
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
}`,Ym=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,Km=`#define MATCAP
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
}`,Zm=`#define NORMAL
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
}`,$m=`#define NORMAL
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
}`,Jm=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,t0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,a0=`uniform vec3 color;
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
}`,l0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Df,alphahash_pars_fragment:Lf,alphamap_fragment:If,alphamap_pars_fragment:Nf,alphatest_fragment:Uf,alphatest_pars_fragment:Ff,aomap_fragment:Of,aomap_pars_fragment:Bf,batching_pars_vertex:zf,batching_vertex:kf,begin_vertex:Vf,beginnormal_vertex:Hf,bsdfs:Gf,iridescence_fragment:Wf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:qf,clipping_planes_pars_fragment:Yf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:Kf,color_fragment:Zf,color_pars_fragment:$f,color_pars_vertex:Jf,color_vertex:Qf,common:ep,cube_uv_reflection_fragment:tp,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:sp,emissivemap_fragment:rp,emissivemap_pars_fragment:op,colorspace_fragment:ap,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:hp,envmap_pars_fragment:up,envmap_pars_vertex:dp,envmap_physical_pars_fragment:bp,envmap_vertex:fp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:_p,gradientmap_pars_fragment:vp,lightmap_pars_fragment:xp,lights_lambert_fragment:yp,lights_lambert_pars_fragment:Mp,lights_pars_begin:Sp,lights_toon_fragment:wp,lights_toon_pars_fragment:Tp,lights_phong_fragment:Ep,lights_phong_pars_fragment:Ap,lights_physical_fragment:Cp,lights_physical_pars_fragment:Rp,lights_fragment_begin:Pp,lights_fragment_maps:Dp,lights_fragment_end:Lp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Up,logdepthbuf_vertex:Fp,map_fragment:Op,map_pars_fragment:Bp,map_particle_fragment:zp,map_particle_pars_fragment:kp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Hp,morphinstance_vertex:Gp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:qp,morphtarget_vertex:Yp,normal_fragment_begin:jp,normal_fragment_maps:Kp,normal_pars_fragment:Zp,normal_pars_vertex:$p,normal_vertex:Jp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:om,project_vertex:am,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:_m,skinning_vertex:vm,skinnormal_vertex:xm,specularmap_fragment:ym,specularmap_pars_fragment:Mm,tonemapping_fragment:Sm,tonemapping_pars_fragment:bm,transmission_fragment:wm,transmission_pars_fragment:Tm,uv_pars_fragment:Em,uv_pars_vertex:Am,uv_vertex:Cm,worldpos_vertex:Rm,background_vert:Pm,background_frag:Dm,backgroundCube_vert:Lm,backgroundCube_frag:Im,cube_vert:Nm,cube_frag:Um,depth_vert:Fm,depth_frag:Om,distanceRGBA_vert:Bm,distanceRGBA_frag:zm,equirect_vert:km,equirect_frag:Vm,linedashed_vert:Hm,linedashed_frag:Gm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:qm,meshlambert_frag:Ym,meshmatcap_vert:jm,meshmatcap_frag:Km,meshnormal_vert:Zm,meshnormal_frag:$m,meshphong_vert:Jm,meshphong_frag:Qm,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:o0,shadow_frag:a0,sprite_vert:l0,sprite_frag:c0},de={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},bn={basic:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new se(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Yt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Yt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new se(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Yt([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Yt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Yt([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Yt([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Yt([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Yt([de.lights,de.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};bn.physical={uniforms:Yt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const kr={r:0,b:0,g:0},Mi=new Qt,h0=new ze;function u0(s,e,t,n,i,r,o){const a=new se(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1;const v=g(b);v===null?p(a,l):v&&v.isColor&&(p(v,1),x=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===bo)?(u===void 0&&(u=new nt(new fr(1,1,1),new ut({name:"BackgroundCubeMaterial",uniforms:vs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Mi.copy(x.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(Mi)),u.material.toneMapped=Ke.getTransfer(v.colorSpace)!==ct,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new nt(new fn(2,2),new ut({name:"BackgroundMaterial",uniforms:vs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(kr,uu(s)),n.buffers.color.setClear(kr.r,kr.g,kr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m}}function d0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(y,D,O,U,B){let G=!1;const z=h(U,O,D);r!==z&&(r=z,c(r.object)),G=f(y,U,O,B),G&&g(y,U,O,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(y,D,O,U),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,D,O){const U=O.wireframe===!0;let B=n[y.id];B===void 0&&(B={},n[y.id]=B);let G=B[D.id];G===void 0&&(G={},B[D.id]=G);let z=G[U];return z===void 0&&(z=d(l()),G[U]=z),z}function d(y){const D=[],O=[],U=[];for(let B=0;B<t;B++)D[B]=0,O[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,D,O,U){const B=r.attributes,G=D.attributes;let z=0;const Y=O.getAttributes();for(const W in Y)if(Y[W].location>=0){const he=B[W];let ce=G[W];if(ce===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),he===void 0||he.attribute!==ce||ce&&he.data!==ce.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function g(y,D,O,U){const B={},G=D.attributes;let z=0;const Y=O.getAttributes();for(const W in Y)if(Y[W].location>=0){let he=G[W];he===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(he=y.instanceColor));const ce={};ce.attribute=he,he&&he.data&&(ce.data=he.data),B[W]=ce,z++}r.attributes=B,r.attributesNum=z,r.index=U}function _(){const y=r.newAttributes;for(let D=0,O=y.length;D<O;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){const O=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;O[y]=1,U[y]===0&&(s.enableVertexAttribArray(y),U[y]=1),B[y]!==D&&(s.vertexAttribDivisor(y,D),B[y]=D)}function b(){const y=r.newAttributes,D=r.enabledAttributes;for(let O=0,U=D.length;O<U;O++)D[O]!==y[O]&&(s.disableVertexAttribArray(O),D[O]=0)}function x(y,D,O,U,B,G,z){z===!0?s.vertexAttribIPointer(y,D,O,B,G):s.vertexAttribPointer(y,D,O,U,B,G)}function v(y,D,O,U){_();const B=U.attributes,G=O.getAttributes(),z=D.defaultAttributeValues;for(const Y in G){const W=G[Y];if(W.location>=0){let le=B[Y];if(le===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){const he=le.normalized,ce=le.itemSize,ve=e.get(le);if(ve===void 0)continue;const Le=ve.buffer,X=ve.type,te=ve.bytesPerElement,xe=X===s.INT||X===s.UNSIGNED_INT||le.gpuType===yl;if(le.isInterleavedBufferAttribute){const re=le.data,Te=re.stride,Oe=le.offset;if(re.isInstancedInterleavedBuffer){for(let Ue=0;Ue<W.locationSize;Ue++)p(W.location+Ue,re.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<W.locationSize;Ue++)m(W.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ue=0;Ue<W.locationSize;Ue++)x(W.location+Ue,ce/W.locationSize,X,he,Te*te,(Oe+ce/W.locationSize*Ue)*te,xe)}else{if(le.isInstancedBufferAttribute){for(let re=0;re<W.locationSize;re++)p(W.location+re,le.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let re=0;re<W.locationSize;re++)m(W.location+re);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let re=0;re<W.locationSize;re++)x(W.location+re,ce/W.locationSize,X,he,ce*te,ce/W.locationSize*re*te,xe)}}else if(z!==void 0){const he=z[Y];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(W.location,he);break;case 3:s.vertexAttrib3fv(W.location,he);break;case 4:s.vertexAttrib4fv(W.location,he);break;default:s.vertexAttrib1fv(W.location,he)}}}}b()}function R(){A();for(const y in n){const D=n[y];for(const O in D){const U=D[O];for(const B in U)u(U[B].object),delete U[B];delete D[O]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const O in D){const U=D[O];for(const B in U)u(U[B].object),delete U[B];delete D[O]}delete n[y.id]}function E(y){for(const D in n){const O=n[D];if(O[y.id]===void 0)continue;const U=O[y.id];for(const B in U)u(U[B].object),delete U[B];delete O[y.id]}}function A(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function f0(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function p0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Ot&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Qn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Lt&&!A)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function m0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new hi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,x=b*4;let v=p.clippingState||null;l.value=v,v=u(g,d,x,f);for(let R=0;R!==x;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function g0(s){let e=new WeakMap;function t(o,a){return a===Pa?o.mapping=ds:a===Da&&(o.mapping=fs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pa||a===Da)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Af(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class xs extends Cl{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,Ic=[.125,.215,.35,.446,.526,.582],Ei=20,$o=new xs,Nc=new se;let Jo=null,Qo=0,ea=0,ta=!1;const wi=(1+Math.sqrt(5))/2,$i=1/wi,Uc=[new P(-wi,$i,0),new P(wi,$i,0),new P(-$i,0,wi),new P($i,0,wi),new P(0,wi,-$i),new P(0,wi,$i),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Qo,ea),this._renderer.xr.enabled=ta,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:sn,format:Ot,colorSpace:Xt,depthBuffer:!1},i=Fc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(r)),this._blurMaterial=v0(r,e,t)}return i}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,i){const a=new yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Nc),u.toneMapping=En,u.autoClear=!1;const f=new qn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new nt(new fr,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Nc),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Vr(i,b*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ds||e.mapping===fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Vr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uc[(i-r-1)%Uc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const p=[];let b=0;for(let E=0;E<Ei;++E){const A=E/_,M=Math.exp(-A*A/2);p.push(M),E===0?b+=M:E<m&&(b+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],R=3*v*(i>x-ts?i-x+ts:0),T=4*(this._cubeSize-v);Vr(t,R,T,3*v,2*v),l.setRenderTarget(t),l.render(h,$o)}}function _0(s){const e=[],t=[],n=[];let i=s;const r=s-ts+1+Ic.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ts?l=Ic[o-s+ts-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,A=T>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];b.set(M,_*g*T),x.set(d,m*g*T);const y=[T,T,T,T,T,T];v.set(y,p*g*T)}const R=new dt;R.setAttribute("position",new mt(b,_)),R.setAttribute("uv",new mt(x,m)),R.setAttribute("faceIndex",new mt(v,p)),e.push(R),i>ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fc(s,e,t){const n=new kt(s,e,t);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function v0(s,e,t){const n=new Float32Array(Ei),i=new P(0,1,0);return new ut({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Oc(){return new ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Bc(){return new ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

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
	`}function x0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pa||l===Da,u=l===ds||l===fs;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new al(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new al(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function y0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&qs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function M0(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let x=0,v=b.length;x<v;x+=3){const R=b[x+0],T=b[x+1],E=b[x+2];d.push(R,T,T,E,E,R)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const R=x+0,T=x+1,E=x+2;d.push(R,T,T,E,E,R)}}else return;const m=new(su(d)?hu:cu)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function S0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function b0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function w0(s,e,t){const n=new WeakMap,i=new tt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const E=new Float32Array(R*T*4*h),A=new ou(E,R,T,h);A.type=Lt,A.needsUpdate=!0;const M=v*4;for(let D=0;D<h;D++){const O=p[D],U=b[D],B=x[D],G=R*T*4*D;for(let z=0;z<O.count;z++){const Y=z*M;g===!0&&(i.fromBufferAttribute(O,z),E[G+Y+0]=i.x,E[G+Y+1]=i.y,E[G+Y+2]=i.z,E[G+Y+3]=0),_===!0&&(i.fromBufferAttribute(U,z),E[G+Y+4]=i.x,E[G+Y+5]=i.y,E[G+Y+6]=i.z,E[G+Y+7]=0),m===!0&&(i.fromBufferAttribute(B,z),E[G+Y+8]=i.x,E[G+Y+9]=i.y,E[G+Y+10]=i.z,E[G+Y+11]=B.itemSize===4?i.w:1)}}d={count:h,texture:A,size:new Z(R,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function T0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class pu extends Bt{constructor(e,t,n,i,r,o,a,l,c,u=rs){if(u!==rs&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===rs&&(n=Pi),n===void 0&&u===ms&&(n=ps),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const mu=new Bt,zc=new pu(1,1),gu=new ou,_u=new cf,vu=new du,kc=[],Vc=[],Hc=new Float32Array(16),Gc=new Float32Array(9),Wc=new Float32Array(4);function Es(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=kc[i];if(r===void 0&&(r=new Float32Array(i),kc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Eo(s,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function E0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function A0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function C0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function R0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function P0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Wc.set(n),s.uniformMatrix2fv(this.addr,!1,Wc),Nt(t,n)}}function D0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Gc.set(n),s.uniformMatrix3fv(this.addr,!1,Gc),Nt(t,n)}}function L0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Hc.set(n),s.uniformMatrix4fv(this.addr,!1,Hc),Nt(t,n)}}function I0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function N0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function U0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function F0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function O0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function B0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function z0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function k0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function V0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(zc.compareFunction=iu,r=zc):r=mu,t.setTexture2D(e||r,i)}function H0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_u,i)}function G0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vu,i)}function W0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||gu,i)}function X0(s){switch(s){case 5126:return E0;case 35664:return A0;case 35665:return C0;case 35666:return R0;case 35674:return P0;case 35675:return D0;case 35676:return L0;case 5124:case 35670:return I0;case 35667:case 35671:return N0;case 35668:case 35672:return U0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return B0;case 36295:return z0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return W0}}function q0(s,e){s.uniform1fv(this.addr,e)}function Y0(s,e){const t=Es(e,this.size,2);s.uniform2fv(this.addr,t)}function j0(s,e){const t=Es(e,this.size,3);s.uniform3fv(this.addr,t)}function K0(s,e){const t=Es(e,this.size,4);s.uniform4fv(this.addr,t)}function Z0(s,e){const t=Es(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $0(s,e){const t=Es(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function J0(s,e){const t=Es(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Q0(s,e){s.uniform1iv(this.addr,e)}function eg(s,e){s.uniform2iv(this.addr,e)}function tg(s,e){s.uniform3iv(this.addr,e)}function ng(s,e){s.uniform4iv(this.addr,e)}function ig(s,e){s.uniform1uiv(this.addr,e)}function sg(s,e){s.uniform2uiv(this.addr,e)}function rg(s,e){s.uniform3uiv(this.addr,e)}function og(s,e){s.uniform4uiv(this.addr,e)}function ag(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||mu,r[o])}function lg(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||_u,r[o])}function cg(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||vu,r[o])}function hg(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||gu,r[o])}function ug(s){switch(s){case 5126:return q0;case 35664:return Y0;case 35665:return j0;case 35666:return K0;case 35674:return Z0;case 35675:return $0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}class dg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=X0(t.type)}}class fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ug(t.type)}}class pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function Xc(s,e){s.seq.push(e),s.map[e.id]=e}function mg(s,e,t){const n=s.name,i=n.length;for(na.lastIndex=0;;){const r=na.exec(n),o=na.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Xc(t,c===void 0?new dg(a,s,e):new fg(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new pg(a),Xc(t,h)),t=h}}}class uo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);mg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function qc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const gg=37297;let _g=0;function vg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Yc=new He;function xg(s){Ke._getMatrix(Yc,Ke.workingColorSpace,s);const e=`mat3( ${Yc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case To:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+vg(s.getShaderSource(e),o)}else return i}function yg(s,e){const t=xg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mg(s,e){let t;switch(e){case xd:t="Linear";break;case yd:t="Reinhard";break;case Md:t="Cineon";break;case Wh:t="ACESFilmic";break;case bd:t="AgX";break;case wd:t="Neutral";break;case Sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new P;function Sg(){Ke.getLuminanceCoefficients(Hr);const s=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function wg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ys(s){return s!==""}function Kc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(s){return s.replace(Eg,Cg)}const Ag=new Map;function Cg(s,e){let t=We[e];if(t===void 0){const n=Ag.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ll(t)}const Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(s){return s.replace(Rg,Pg)}function Pg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jc(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Lg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ds:case fs:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ig(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ng(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case So:e="ENVMAP_BLENDING_MULTIPLY";break;case _d:e="ENVMAP_BLENDING_MIX";break;case vd:e="ENVMAP_BLENDING_ADD";break}return e}function Ug(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Fg(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Dg(t),c=Lg(t),u=Ig(t),h=Ng(t),d=Ug(t),f=bg(t),g=wg(r),_=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(m=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?We.tonemapping_pars_fragment:"",t.toneMapping!==En?Mg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,yg("linearToOutputTexel",t.outputColorSpace),Sg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),o=ll(o),o=Kc(o,t),o=Zc(o,t),a=ll(a),a=Kc(a,t),a=Zc(a,t),o=$c(o),a=$c(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=b+m+o,v=b+p+a,R=qc(i,i.VERTEX_SHADER,x),T=qc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,R),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(R).trim(),B=i.getShaderInfoLog(T).trim();let G=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,T);else{const Y=jc(i,R,"vertex"),W=jc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+Y+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||B==="")&&(z=!1);z&&(D.diagnostics={runnable:G,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(R),i.deleteShader(T),A=new uo(i,_),M=Tg(i,_)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,gg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_g++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let Og=0;class Bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zg(e),t.set(e,n)),n}}class zg{constructor(e){this.id=Og++,this.code=e,this.usedTimes=0}}function kg(s,e,t,n,i,r,o){const a=new au,l=new Bg,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,D,O,U){const B=O.fog,G=U.geometry,z=M.isMeshStandardMaterial?O.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),W=Y&&Y.mapping===bo?Y.image.height:null,le=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const he=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ce=he!==void 0?he.length:0;let ve=0;G.morphAttributes.position!==void 0&&(ve=1),G.morphAttributes.normal!==void 0&&(ve=2),G.morphAttributes.color!==void 0&&(ve=3);let Le,X,te,xe;if(le){const ot=bn[le];Le=ot.vertexShader,X=ot.fragmentShader}else Le=M.vertexShader,X=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),xe=l.getFragmentShaderID(M);const re=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,Ue=U.isBatchedMesh===!0,$e=!!M.map,J=!!M.matcap,oe=!!Y,L=!!M.aoMap,Pe=!!M.lightMap,ne=!!M.bumpMap,Se=!!M.normalMap,ue=!!M.displacementMap,Ie=!!M.emissiveMap,ye=!!M.metalnessMap,C=!!M.roughnessMap,S=M.anisotropy>0,k=M.clearcoat>0,j=M.dispersion>0,Q=M.iridescence>0,K=M.sheen>0,Ee=M.transmission>0,fe=S&&!!M.anisotropyMap,Me=k&&!!M.clearcoatMap,Ye=k&&!!M.clearcoatNormalMap,ie=k&&!!M.clearcoatRoughnessMap,be=Q&&!!M.iridescenceMap,Ne=Q&&!!M.iridescenceThicknessMap,Fe=K&&!!M.sheenColorMap,we=K&&!!M.sheenRoughnessMap,Ze=!!M.specularMap,Ge=!!M.specularColorMap,ft=!!M.specularIntensityMap,I=Ee&&!!M.transmissionMap,pe=Ee&&!!M.thicknessMap,q=!!M.gradientMap,$=!!M.alphaMap,_e=M.alphaTest>0,me=!!M.alphaHash,ke=!!M.extensions;let bt=En;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(bt=s.toneMapping);const Ht={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:Le,fragmentShader:X,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Xt,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:J,envMap:oe,envMapMode:oe&&Y.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:Pe,bumpMap:ne,normalMap:Se,displacementMap:d&&ue,emissiveMap:Ie,normalMapObjectSpace:Se&&M.normalMapType===Pd,normalMapTangentSpace:Se&&M.normalMapType===wo,metalnessMap:ye,roughnessMap:C,anisotropy:S,anisotropyMap:fe,clearcoat:k,clearcoatMap:Me,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ie,dispersion:j,iridescence:Q,iridescenceMap:be,iridescenceThicknessMap:Ne,sheen:K,sheenColorMap:Fe,sheenRoughnessMap:we,specularMap:Ze,specularColorMap:Ge,specularIntensityMap:ft,transmission:Ee,transmissionMap:I,thicknessMap:pe,gradientMap:q,opaque:M.transparent===!1&&M.blending===ss&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:_e,alphaHash:me,combine:M.combine,mapUv:$e&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:Pe&&_(M.lightMap.channel),bumpMapUv:ne&&_(M.bumpMap.channel),normalMapUv:Se&&_(M.normalMap.channel),displacementMapUv:ue&&_(M.displacementMap.channel),emissiveMapUv:Ie&&_(M.emissiveMap.channel),metalnessMapUv:ye&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:fe&&_(M.anisotropyMap.channel),clearcoatMapUv:Me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(M.sheenRoughnessMap.channel),specularMapUv:Ze&&_(M.specularMap.channel),specularColorMapUv:Ge&&_(M.specularColorMap.channel),specularIntensityMapUv:ft&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:pe&&_(M.thicknessMap.channel),alphaMapUv:$&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Se||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&($e||$),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:bt,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:Ie&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pt,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)y.push(D),y.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(b(y,M),x(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const y=g[M.type];let D;if(y){const O=bn[y];D=_o.clone(O.uniforms)}else D=M.uniforms;return D}function R(M,y){let D;for(let O=0,U=u.length;O<U;O++){const B=u[O];if(B.cacheKey===y){D=B,++D.usedTimes;break}}return D===void 0&&(D=new Fg(s,y,M,r),u.push(D)),D}function T(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:A}}function Vg(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Hg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function eh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Hg),n.length>1&&n.sort(d||Qc),i.length>1&&i.sort(d||Qc)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Gg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new eh,s.set(n,[o])):i>=r.length?(o=new eh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Wg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new se};break;case"SpotLight":t={position:new P,direction:new P,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Xg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let qg=0;function Yg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jg(s){const e=new Wg,t=Xg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new ze,o=new ze;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,x=0,v=0,R=0,T=0,E=0;c.sort(Yg);for(let M=0,y=c.length;M<y;M++){const D=c[M],O=D.color,U=D.intensity,B=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*U,h+=O.g*U,d+=O.b*U;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],U);E++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,W=t.get(D);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=D.shadow.matrix,b++}n.directional[f]=z,f++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(O).multiplyScalar(U),z.distance=B,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[_]=z;const Y=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,Y.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=Y.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=G,v++}_++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(O).multiplyScalar(U),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const Y=D.shadow,W=t.get(D);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=z,g++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(U),z.groundColor.copy(D.groundColor).multiplyScalar(U),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==b||A.numPointShadows!==x||A.numSpotShadows!==v||A.numSpotMaps!==R||A.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,A.directionalLength=f,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=b,A.numPointShadows=x,A.numSpotShadows=v,A.numSpotMaps=R,A.numLightProbes=E,n.version=qg++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function th(s){const e=new jg(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Kg(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new th(s),e.set(i,[a])):r>=o.length?(a=new th(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Zg extends dn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $g extends dn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
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
}`;function e_(s,e,t){let n=new Rl;const i=new Z,r=new Z,o=new tt,a=new Zg({depthPacking:Rd}),l=new $g,c={},u=t.maxTextureSize,h={[yn]:Jt,[Jt]:yn,[Pt]:Pt},d=new ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Jg,fragmentShader:Qg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new dt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let p=this.type;this.render=function(T,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Zn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==zn&&this.type===zn,B=p===zn&&this.type!==zn;for(let G=0,z=T.length;G<z;G++){const Y=T[G],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const le=W.getFrameExtents();if(i.multiply(le),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/le.x),i.x=r.x*le.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/le.y),i.y=r.y*le.y,W.mapSize.y=r.y)),W.map===null||U===!0||B===!0){const ce=this.type!==zn?{minFilter:Dt,magFilter:Dt}:{};W.map!==null&&W.map.dispose(),W.map=new kt(i.x,i.y,ce),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const he=W.getViewportCount();for(let ce=0;ce<he;ce++){const ve=W.getViewport(ce);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),O.viewport(o),W.updateMatrices(Y,ce),n=W.getFrustum(),v(E,A,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===zn&&b(W,A),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,D)};function b(T,E){const A=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new kt(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,A,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,A,f,_,null)}function x(T,E,A,M){let y=null;const D=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)y=D;else if(y=A.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=y.uuid,U=E.uuid;let B=c[O];B===void 0&&(B={},c[O]=B);let G=B[U];G===void 0&&(G=y.clone(),B[U]=G,E.addEventListener("dispose",R)),y=G}if(y.visible=E.visible,y.wireframe=E.wireframe,M===zn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=A}return y}function v(T,E,A,M,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const U=e.update(T),B=T.material;if(Array.isArray(B)){const G=U.groups;for(let z=0,Y=G.length;z<Y;z++){const W=G[z],le=B[W.materialIndex];if(le&&le.visible){const he=x(T,le,M,y);T.onBeforeShadow(s,T,E,A,U,he,W),s.renderBufferDirect(A,null,U,he,T,W),T.onAfterShadow(s,T,E,A,U,he,W)}}}else if(B.visible){const G=x(T,B,M,y);T.onBeforeShadow(s,T,E,A,U,G,null),s.renderBufferDirect(A,null,U,G,T,null),T.onAfterShadow(s,T,E,A,U,G,null)}}const O=T.children;for(let U=0,B=O.length;U<B;U++)v(O[U],E,A,M,y)}function R(T){T.target.removeEventListener("dispose",R);for(const A in c){const M=c[A],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const t_={[ba]:wa,[Ta]:Ca,[Ea]:Ra,[us]:Aa,[wa]:ba,[Ca]:Ta,[Ra]:Ea,[Aa]:us};function n_(s,e){function t(){let I=!1;const pe=new tt;let q=null;const $=new tt(0,0,0,0);return{setMask:function(_e){q!==_e&&!I&&(s.colorMask(_e,_e,_e,_e),q=_e)},setLocked:function(_e){I=_e},setClear:function(_e,me,ke,bt,Ht){Ht===!0&&(_e*=bt,me*=bt,ke*=bt),pe.set(_e,me,ke,bt),$.equals(pe)===!1&&(s.clearColor(_e,me,ke,bt),$.copy(pe))},reset:function(){I=!1,q=null,$.set(-1,0,0,0)}}}function n(){let I=!1,pe=!1,q=null,$=null,_e=null;return{setReversed:function(me){if(pe!==me){const ke=e.get("EXT_clip_control");pe?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const bt=_e;_e=null,this.setClear(bt)}pe=me},getReversed:function(){return pe},setTest:function(me){me?re(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(me){q!==me&&!I&&(s.depthMask(me),q=me)},setFunc:function(me){if(pe&&(me=t_[me]),$!==me){switch(me){case ba:s.depthFunc(s.NEVER);break;case wa:s.depthFunc(s.ALWAYS);break;case Ta:s.depthFunc(s.LESS);break;case us:s.depthFunc(s.LEQUAL);break;case Ea:s.depthFunc(s.EQUAL);break;case Aa:s.depthFunc(s.GEQUAL);break;case Ca:s.depthFunc(s.GREATER);break;case Ra:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=me}},setLocked:function(me){I=me},setClear:function(me){_e!==me&&(pe&&(me=1-me),s.clearDepth(me),_e=me)},reset:function(){I=!1,q=null,$=null,_e=null,pe=!1}}}function i(){let I=!1,pe=null,q=null,$=null,_e=null,me=null,ke=null,bt=null,Ht=null;return{setTest:function(ot){I||(ot?re(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(ot){pe!==ot&&!I&&(s.stencilMask(ot),pe=ot)},setFunc:function(ot,pn,Dn){(q!==ot||$!==pn||_e!==Dn)&&(s.stencilFunc(ot,pn,Dn),q=ot,$=pn,_e=Dn)},setOp:function(ot,pn,Dn){(me!==ot||ke!==pn||bt!==Dn)&&(s.stencilOp(ot,pn,Dn),me=ot,ke=pn,bt=Dn)},setLocked:function(ot){I=ot},setClear:function(ot){Ht!==ot&&(s.clearStencil(ot),Ht=ot)},reset:function(){I=!1,pe=null,q=null,$=null,_e=null,me=null,ke=null,bt=null,Ht=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,x=null,v=null,R=null,T=null,E=new se(0,0,0),A=0,M=!1,y=null,D=null,O=null,U=null,B=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Y=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=Y>=2);let le=null,he={};const ce=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Le=new tt().fromArray(ce),X=new tt().fromArray(ve);function te(I,pe,q,$){const _e=new Uint8Array(4),me=s.createTexture();s.bindTexture(I,me),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ke=0;ke<q;ke++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(pe+ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return me}const xe={};xe[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(s.DEPTH_TEST),o.setFunc(us),ne(!1),Se(sc),re(s.CULL_FACE),L(Zn);function re(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function Te(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function Oe(I,pe){return h[I]!==pe?(s.bindFramebuffer(I,pe),h[I]=pe,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=pe),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ue(I,pe){let q=f,$=!1;if(I){q=d.get(pe),q===void 0&&(q=[],d.set(pe,q));const _e=I.textures;if(q.length!==_e.length||q[0]!==s.COLOR_ATTACHMENT0){for(let me=0,ke=_e.length;me<ke;me++)q[me]=s.COLOR_ATTACHMENT0+me;q.length=_e.length,$=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,$=!0);$&&s.drawBuffers(q)}function $e(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const J={[Ti]:s.FUNC_ADD,[ed]:s.FUNC_SUBTRACT,[td]:s.FUNC_REVERSE_SUBTRACT};J[nd]=s.MIN,J[id]=s.MAX;const oe={[sd]:s.ZERO,[rd]:s.ONE,[od]:s.SRC_COLOR,[Ma]:s.SRC_ALPHA,[dd]:s.SRC_ALPHA_SATURATE,[hd]:s.DST_COLOR,[ld]:s.DST_ALPHA,[ad]:s.ONE_MINUS_SRC_COLOR,[Sa]:s.ONE_MINUS_SRC_ALPHA,[ud]:s.ONE_MINUS_DST_COLOR,[cd]:s.ONE_MINUS_DST_ALPHA,[fd]:s.CONSTANT_COLOR,[pd]:s.ONE_MINUS_CONSTANT_COLOR,[md]:s.CONSTANT_ALPHA,[gd]:s.ONE_MINUS_CONSTANT_ALPHA};function L(I,pe,q,$,_e,me,ke,bt,Ht,ot){if(I===Zn){_===!0&&(Te(s.BLEND),_=!1);return}if(_===!1&&(re(s.BLEND),_=!0),I!==Qu){if(I!==m||ot!==M){if((p!==Ti||v!==Ti)&&(s.blendEquation(s.FUNC_ADD),p=Ti,v=Ti),ot)switch(I){case ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case po:s.blendFunc(s.ONE,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case oc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case po:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case oc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,x=null,R=null,T=null,E.set(0,0,0),A=0,m=I,M=ot}return}_e=_e||pe,me=me||q,ke=ke||$,(pe!==p||_e!==v)&&(s.blendEquationSeparate(J[pe],J[_e]),p=pe,v=_e),(q!==b||$!==x||me!==R||ke!==T)&&(s.blendFuncSeparate(oe[q],oe[$],oe[me],oe[ke]),b=q,x=$,R=me,T=ke),(bt.equals(E)===!1||Ht!==A)&&(s.blendColor(bt.r,bt.g,bt.b,Ht),E.copy(bt),A=Ht),m=I,M=!1}function Pe(I,pe){I.side===Pt?Te(s.CULL_FACE):re(s.CULL_FACE);let q=I.side===Jt;pe&&(q=!q),ne(q),I.blending===ss&&I.transparent===!1?L(Zn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const $=I.stencilWrite;a.setTest($),$&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function Se(I){I!==$u?(re(s.CULL_FACE),I!==D&&(I===sc?s.cullFace(s.BACK):I===Ju?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),D=I}function ue(I){I!==O&&(z&&s.lineWidth(I),O=I)}function Ie(I,pe,q){I?(re(s.POLYGON_OFFSET_FILL),(U!==pe||B!==q)&&(s.polygonOffset(pe,q),U=pe,B=q)):Te(s.POLYGON_OFFSET_FILL)}function ye(I){I?re(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function C(I){I===void 0&&(I=s.TEXTURE0+G-1),le!==I&&(s.activeTexture(I),le=I)}function S(I,pe,q){q===void 0&&(le===null?q=s.TEXTURE0+G-1:q=le);let $=he[q];$===void 0&&($={type:void 0,texture:void 0},he[q]=$),($.type!==I||$.texture!==pe)&&(le!==q&&(s.activeTexture(q),le=q),s.bindTexture(I,pe||xe[I]),$.type=I,$.texture=pe)}function k(){const I=he[le];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(I){Le.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Le.copy(I))}function we(I){X.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function Ze(I,pe){let q=c.get(pe);q===void 0&&(q=new WeakMap,c.set(pe,q));let $=q.get(I);$===void 0&&($=s.getUniformBlockIndex(pe,I.name),q.set(I,$))}function Ge(I,pe){const $=c.get(pe).get(I);l.get(pe)!==$&&(s.uniformBlockBinding(pe,$,I.__bindingPointIndex),l.set(pe,$))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},le=null,he={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,x=null,v=null,R=null,T=null,E=new se(0,0,0),A=0,M=!1,y=null,D=null,O=null,U=null,B=null,Le.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Te,bindFramebuffer:Oe,drawBuffers:Ue,useProgram:$e,setBlending:L,setMaterial:Pe,setFlipSided:ne,setCullFace:Se,setLineWidth:ue,setPolygonOffset:Ie,setScissorTest:ye,activeTexture:C,bindTexture:S,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:be,texImage3D:Ne,updateUBOMapping:Ze,uniformBlockBinding:Ge,texStorage2D:Ye,texStorage3D:ie,texSubImage2D:K,texSubImage3D:Ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:Me,scissor:Fe,viewport:we,reset:ft}}function nh(s,e,t,n){const i=i_(n);switch(t){case Zh:return s*e;case Jh:return s*e;case Qh:return s*e*2;case bl:return s*e/i.components*i.byteLength;case wl:return s*e/i.components*i.byteLength;case eu:return s*e*2/i.components*i.byteLength;case Tl:return s*e*2/i.components*i.byteLength;case $h:return s*e*3/i.components*i.byteLength;case Ot:return s*e*4/i.components*i.byteLength;case El:return s*e*4/i.components*i.byteLength;case oo:case ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lo:case co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ia:case Ua:return Math.max(s,16)*Math.max(e,8)/4;case La:case Na:return Math.max(s,8)*Math.max(e,8)/2;case Fa:case Oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Va:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case qa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Za:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case $a:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ho:case Qa:case el:return Math.ceil(s/4)*Math.ceil(e/4)*16;case tu:case tl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nl:case il:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i_(s){switch(s){case Qn:case Yh:return{byteLength:1,components:1};case tr:case jh:case sn:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case Pi:case yl:case Lt:return{byteLength:4,components:1};case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function s_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):sr("canvas")}function _(C,S,k){let j=1;const Q=ye(C);if((Q.width>k||Q.height>k)&&(j=k/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(j*Q.width),Ee=Math.floor(j*Q.height);h===void 0&&(h=g(K,Ee));const fe=S?g(K,Ee):h;return fe.width=K,fe.height=Ee,fe.getContext("2d").drawImage(C,0,0,K,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Ee+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(C,S,k,j,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=S;if(S===s.RED&&(k===s.FLOAT&&(K=s.R32F),k===s.HALF_FLOAT&&(K=s.R16F),k===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.R8UI),k===s.UNSIGNED_SHORT&&(K=s.R16UI),k===s.UNSIGNED_INT&&(K=s.R32UI),k===s.BYTE&&(K=s.R8I),k===s.SHORT&&(K=s.R16I),k===s.INT&&(K=s.R32I)),S===s.RG&&(k===s.FLOAT&&(K=s.RG32F),k===s.HALF_FLOAT&&(K=s.RG16F),k===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RG8UI),k===s.UNSIGNED_SHORT&&(K=s.RG16UI),k===s.UNSIGNED_INT&&(K=s.RG32UI),k===s.BYTE&&(K=s.RG8I),k===s.SHORT&&(K=s.RG16I),k===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGB8UI),k===s.UNSIGNED_SHORT&&(K=s.RGB16UI),k===s.UNSIGNED_INT&&(K=s.RGB32UI),k===s.BYTE&&(K=s.RGB8I),k===s.SHORT&&(K=s.RGB16I),k===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),k===s.UNSIGNED_INT&&(K=s.RGBA32UI),k===s.BYTE&&(K=s.RGBA8I),k===s.SHORT&&(K=s.RGBA16I),k===s.INT&&(K=s.RGBA32I)),S===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){const Ee=Q?To:Ke.getTransfer(j);k===s.FLOAT&&(K=s.RGBA32F),k===s.HALF_FLOAT&&(K=s.RGBA16F),k===s.UNSIGNED_BYTE&&(K=Ee===ct?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(C,S){let k;return C?S===null||S===Pi||S===ps?k=s.DEPTH24_STENCIL8:S===Lt?k=s.DEPTH32F_STENCIL8:S===tr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===ps?k=s.DEPTH_COMPONENT24:S===Lt?k=s.DEPTH_COMPONENT32F:S===tr&&(k=s.DEPTH_COMPONENT16),k}function R(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Dt&&C.minFilter!==Mt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),A(S),S.isVideoTexture&&u.delete(S)}function E(C){const S=C.target;S.removeEventListener("dispose",E),y(S)}function A(C){const S=n.get(C);if(S.__webglInit===void 0)return;const k=C.source,j=d.get(k);if(j){const Q=j[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(C),Object.keys(j).length===0&&d.delete(k)}n.remove(C)}function M(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const k=C.source,j=d.get(k);delete j[S.__cacheKey],o.memory.textures--}function y(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let Q=0;Q<S.__webglFramebuffer[j].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[j][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)s.deleteFramebuffer(S.__webglFramebuffer[j]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=C.textures;for(let j=0,Q=k.length;j<Q;j++){const K=n.get(k[j]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(C)}let D=0;function O(){D=0}function U(){const C=D;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function B(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function G(C,S){const k=n.get(C);if(C.isVideoTexture&&ue(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,C,S);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function z(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){X(k,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function Y(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){X(k,C,S);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function W(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){te(k,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const le={[wn]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[mo]:s.MIRRORED_REPEAT},he={[Dt]:s.NEAREST,[qh]:s.NEAREST_MIPMAP_NEAREST,[Xs]:s.NEAREST_MIPMAP_LINEAR,[Mt]:s.LINEAR,[ro]:s.LINEAR_MIPMAP_NEAREST,[Tn]:s.LINEAR_MIPMAP_LINEAR},ce={[Dd]:s.NEVER,[Od]:s.ALWAYS,[Ld]:s.LESS,[iu]:s.LEQUAL,[Id]:s.EQUAL,[Fd]:s.GEQUAL,[Nd]:s.GREATER,[Ud]:s.NOTEQUAL};function ve(C,S){if(S.type===Lt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Mt||S.magFilter===ro||S.magFilter===Xs||S.magFilter===Tn||S.minFilter===Mt||S.minFilter===ro||S.minFilter===Xs||S.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,le[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,le[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,le[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,he[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Dt||S.minFilter!==Xs&&S.minFilter!==Tn||S.type===Lt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Le(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const j=S.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const K=B(S);if(K!==C.__cacheKey){Q[K]===void 0&&(Q[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[K].usedTimes++;const Ee=Q[C.__cacheKey];Ee!==void 0&&(Q[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(S)),C.__cacheKey=K,C.__webglTexture=Q[K].texture}return k}function X(C,S,k){let j=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=s.TEXTURE_3D);const Q=Le(C,S),K=S.source;t.bindTexture(j,C.__webglTexture,s.TEXTURE0+k);const Ee=n.get(K);if(K.version!==Ee.__version||Q===!0){t.activeTexture(s.TEXTURE0+k);const fe=Ke.getPrimaries(Ke.workingColorSpace),Me=S.colorSpace===ui?null:Ke.getPrimaries(S.colorSpace),Ye=S.colorSpace===ui||fe===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ie=_(S.image,!1,i.maxTextureSize);ie=Ie(S,ie);const be=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type);let Fe=x(S.internalFormat,be,Ne,S.colorSpace,S.isVideoTexture);ve(j,S);let we;const Ze=S.mipmaps,Ge=S.isVideoTexture!==!0,ft=Ee.__version===void 0||Q===!0,I=K.dataReady,pe=R(S,ie);if(S.isDepthTexture)Fe=v(S.format===ms,S.type),ft&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,Fe,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Fe,ie.width,ie.height,0,be,Ne,null));else if(S.isDataTexture)if(Ze.length>0){Ge&&ft&&t.texStorage2D(s.TEXTURE_2D,pe,Fe,Ze[0].width,Ze[0].height);for(let q=0,$=Ze.length;q<$;q++)we=Ze[q],Ge?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,we.width,we.height,be,Ne,we.data):t.texImage2D(s.TEXTURE_2D,q,Fe,we.width,we.height,0,be,Ne,we.data);S.generateMipmaps=!1}else Ge?(ft&&t.texStorage2D(s.TEXTURE_2D,pe,Fe,ie.width,ie.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,be,Ne,ie.data)):t.texImage2D(s.TEXTURE_2D,0,Fe,ie.width,ie.height,0,be,Ne,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Fe,Ze[0].width,Ze[0].height,ie.depth);for(let q=0,$=Ze.length;q<$;q++)if(we=Ze[q],S.format!==Ot)if(be!==null)if(Ge){if(I)if(S.layerUpdates.size>0){const _e=nh(we.width,we.height,S.format,S.type);for(const me of S.layerUpdates){const ke=we.data.subarray(me*_e/we.data.BYTES_PER_ELEMENT,(me+1)*_e/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,me,we.width,we.height,1,be,ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,ie.depth,be,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Fe,we.width,we.height,ie.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,ie.depth,be,Ne,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,Fe,we.width,we.height,ie.depth,0,be,Ne,we.data)}else{Ge&&ft&&t.texStorage2D(s.TEXTURE_2D,pe,Fe,Ze[0].width,Ze[0].height);for(let q=0,$=Ze.length;q<$;q++)we=Ze[q],S.format!==Ot?be!==null?Ge?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,we.width,we.height,be,we.data):t.compressedTexImage2D(s.TEXTURE_2D,q,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,we.width,we.height,be,Ne,we.data):t.texImage2D(s.TEXTURE_2D,q,Fe,we.width,we.height,0,be,Ne,we.data)}else if(S.isDataArrayTexture)if(Ge){if(ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Fe,ie.width,ie.height,ie.depth),I)if(S.layerUpdates.size>0){const q=nh(ie.width,ie.height,S.format,S.type);for(const $ of S.layerUpdates){const _e=ie.data.subarray($*q/ie.data.BYTES_PER_ELEMENT,($+1)*q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ie.width,ie.height,1,be,Ne,_e)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,be,Ne,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ie.width,ie.height,ie.depth,0,be,Ne,ie.data);else if(S.isData3DTexture)Ge?(ft&&t.texStorage3D(s.TEXTURE_3D,pe,Fe,ie.width,ie.height,ie.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,be,Ne,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,ie.width,ie.height,ie.depth,0,be,Ne,ie.data);else if(S.isFramebufferTexture){if(ft)if(Ge)t.texStorage2D(s.TEXTURE_2D,pe,Fe,ie.width,ie.height);else{let q=ie.width,$=ie.height;for(let _e=0;_e<pe;_e++)t.texImage2D(s.TEXTURE_2D,_e,Fe,q,$,0,be,Ne,null),q>>=1,$>>=1}}else if(Ze.length>0){if(Ge&&ft){const q=ye(Ze[0]);t.texStorage2D(s.TEXTURE_2D,pe,Fe,q.width,q.height)}for(let q=0,$=Ze.length;q<$;q++)we=Ze[q],Ge?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,be,Ne,we):t.texImage2D(s.TEXTURE_2D,q,Fe,be,Ne,we);S.generateMipmaps=!1}else if(Ge){if(ft){const q=ye(ie);t.texStorage2D(s.TEXTURE_2D,pe,Fe,q.width,q.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,Ne,ie)}else t.texImage2D(s.TEXTURE_2D,0,Fe,be,Ne,ie);m(S)&&p(j),Ee.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function te(C,S,k){if(S.image.length!==6)return;const j=Le(C,S),Q=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const K=n.get(Q);if(Q.version!==K.__version||j===!0){t.activeTexture(s.TEXTURE0+k);const Ee=Ke.getPrimaries(Ke.workingColorSpace),fe=S.colorSpace===ui?null:Ke.getPrimaries(S.colorSpace),Me=S.colorSpace===ui||Ee===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ye=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,be=[];for(let $=0;$<6;$++)!Ye&&!ie?be[$]=_(S.image[$],!0,i.maxCubemapSize):be[$]=ie?S.image[$].image:S.image[$],be[$]=Ie(S,be[$]);const Ne=be[0],Fe=r.convert(S.format,S.colorSpace),we=r.convert(S.type),Ze=x(S.internalFormat,Fe,we,S.colorSpace),Ge=S.isVideoTexture!==!0,ft=K.__version===void 0||j===!0,I=Q.dataReady;let pe=R(S,Ne);ve(s.TEXTURE_CUBE_MAP,S);let q;if(Ye){Ge&&ft&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,Ze,Ne.width,Ne.height);for(let $=0;$<6;$++){q=be[$].mipmaps;for(let _e=0;_e<q.length;_e++){const me=q[_e];S.format!==Ot?Fe!==null?Ge?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,me.width,me.height,Fe,me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Ze,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,me.width,me.height,Fe,we,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Ze,me.width,me.height,0,Fe,we,me.data)}}}else{if(q=S.mipmaps,Ge&&ft){q.length>0&&pe++;const $=ye(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,Ze,$.width,$.height)}for(let $=0;$<6;$++)if(ie){Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be[$].width,be[$].height,Fe,we,be[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ze,be[$].width,be[$].height,0,Fe,we,be[$].data);for(let _e=0;_e<q.length;_e++){const ke=q[_e].image[$].image;Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,ke.width,ke.height,Fe,we,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Ze,ke.width,ke.height,0,Fe,we,ke.data)}}else{Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Fe,we,be[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ze,Fe,we,be[$]);for(let _e=0;_e<q.length;_e++){const me=q[_e];Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Fe,we,me.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Ze,Fe,we,me.image[$])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function xe(C,S,k,j,Q,K){const Ee=r.convert(k.format,k.colorSpace),fe=r.convert(k.type),Me=x(k.internalFormat,Ee,fe,k.colorSpace),Ye=n.get(S),ie=n.get(k);if(ie.__renderTarget=S,!Ye.__hasExternalTextures){const be=Math.max(1,S.width>>K),Ne=Math.max(1,S.height>>K);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,Me,be,Ne,S.depth,0,Ee,fe,null):t.texImage2D(Q,K,Me,be,Ne,0,Ee,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Se(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Q,ie.__webglTexture,0,ne(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Q,ie.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(C,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const j=S.depthTexture,Q=j&&j.isDepthTexture?j.type:null,K=v(S.stencilBuffer,Q),Ee=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=ne(S);Se(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,K,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,C)}else{const j=S.textures;for(let Q=0;Q<j.length;Q++){const K=j[Q],Ee=r.convert(K.format,K.colorSpace),fe=r.convert(K.type),Me=x(K.internalFormat,Ee,fe,K.colorSpace),Ye=ne(S);k&&Se(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Me,S.width,S.height):Se(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,Me,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Me,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const Q=j.__webglTexture,K=ne(S);if(S.depthTexture.format===rs)Se(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===ms)Se(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Oe(C){const S=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=j}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,C)}else if(k){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=s.createRenderbuffer(),re(S.__webglDepthbuffer[j],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),re(S.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(C,S,k){const j=n.get(C);S!==void 0&&xe(j.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Oe(C)}function $e(C){const S=C.texture,k=n.get(C),j=n.get(S);C.addEventListener("dispose",E);const Q=C.textures,K=C.isWebGLCubeRenderTarget===!0,Ee=Q.length>1;if(Ee||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=S.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let Me=0;Me<S.mipmaps.length;Me++)k.__webglFramebuffer[fe][Me]=s.createFramebuffer()}else k.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)k.__webglFramebuffer[fe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Ee)for(let fe=0,Me=Q.length;fe<Me;fe++){const Ye=n.get(Q[fe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Se(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const Me=Q[fe];k.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const Ye=r.convert(Me.format,Me.colorSpace),ie=r.convert(Me.type),be=x(Me.internalFormat,Ye,ie,Me.colorSpace,C.isXRRenderTarget===!0),Ne=ne(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,be,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),re(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),ve(s.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)xe(k.__webglFramebuffer[fe][Me],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me);else xe(k.__webglFramebuffer[fe],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let fe=0,Me=Q.length;fe<Me;fe++){const Ye=Q[fe],ie=n.get(Ye);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),ve(s.TEXTURE_2D,Ye),xe(k.__webglFramebuffer,C,Ye,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),m(Ye)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),ve(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)xe(k.__webglFramebuffer[Me],C,S,s.COLOR_ATTACHMENT0,fe,Me);else xe(k.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,fe,0);m(S)&&p(fe),t.unbindTexture()}C.depthBuffer&&Oe(C)}function J(C){const S=C.textures;for(let k=0,j=S.length;k<j;k++){const Q=S[k];if(m(Q)){const K=b(C),Ee=n.get(Q).__webglTexture;t.bindTexture(K,Ee),p(K),t.unbindTexture()}}}const oe=[],L=[];function Pe(C){if(C.samples>0){if(Se(C)===!1){const S=C.textures,k=C.width,j=C.height;let Q=s.COLOR_BUFFER_BIT;const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=n.get(C),fe=S.length>1;if(fe)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const Ye=n.get(S[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,k,j,0,0,k,j,Q,s.NEAREST),l===!0&&(oe.length=0,L.length=0,oe.push(s.COLOR_ATTACHMENT0+Me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(oe.push(K),L.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const Ye=n.get(S[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ne(C){return Math.min(i.maxSamples,C.samples)}function Se(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ue(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Ie(C,S){const k=C.colorSpace,j=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Xt&&k!==ui&&(Ke.getTransfer(k)===ct?(j!==Ot||Q!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Ue,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Se}function r_(s,e){function t(n,i=ui){let r;const o=Ke.getTransfer(i);if(n===Qn)return s.UNSIGNED_BYTE;if(n===Ml)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return s.BYTE;if(n===jh)return s.SHORT;if(n===tr)return s.UNSIGNED_SHORT;if(n===yl)return s.INT;if(n===Pi)return s.UNSIGNED_INT;if(n===Lt)return s.FLOAT;if(n===sn)return s.HALF_FLOAT;if(n===Zh)return s.ALPHA;if(n===$h)return s.RGB;if(n===Ot)return s.RGBA;if(n===Jh)return s.LUMINANCE;if(n===Qh)return s.LUMINANCE_ALPHA;if(n===rs)return s.DEPTH_COMPONENT;if(n===ms)return s.DEPTH_STENCIL;if(n===bl)return s.RED;if(n===wl)return s.RED_INTEGER;if(n===eu)return s.RG;if(n===Tl)return s.RG_INTEGER;if(n===El)return s.RGBA_INTEGER;if(n===oo||n===ao||n===lo||n===co)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Ia||n===Na||n===Ua)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===ka||n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ka||n===Za||n===$a||n===Ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===Qa||n===el)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ho)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===tl||n===nl||n===il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class o_ extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jt extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a_={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c_=`
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

}`;class h_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Bt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ut({vertexShader:l_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u_ extends Ni{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new h_,m=t.getContextAttributes();let p=null,b=null;const x=[],v=[],R=new Z;let T=null;const E=new yt;E.viewport=new tt;const A=new yt;A.viewport=new tt;const M=[E,A],y=new o_;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=x[X];return te===void 0&&(te=new ia,x[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=x[X];return te===void 0&&(te=new ia,x[X]=te),te.getGripSpace()},this.getHand=function(X){let te=x[X];return te===void 0&&(te=new ia,x[X]=te),te.getHandSpace()};function U(X){const te=v.indexOf(X.inputSource);if(te===-1)return;const xe=x[te];xe!==void 0&&(xe.update(X.inputSource,X.frame,c||o),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",G);for(let X=0;X<x.length;X++){const te=v[X];te!==null&&(v[X]=null,x[X].disconnect(te))}D=null,O=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,b=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",B),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new kt(f.framebufferWidth,f.framebufferHeight,{format:Ot,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,xe=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?ms:rs,xe=m.stencil?ps:Pi);const Te={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Te),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new kt(d.textureWidth,d.textureHeight,{format:Ot,type:Qn,depthTexture:new pu(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Le.setContext(i),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(X){for(let te=0;te<X.removed.length;te++){const xe=X.removed[te],re=v.indexOf(xe);re>=0&&(v[re]=null,x[re].disconnect(xe))}for(let te=0;te<X.added.length;te++){const xe=X.added[te];let re=v.indexOf(xe);if(re===-1){for(let Oe=0;Oe<x.length;Oe++)if(Oe>=v.length){v.push(xe),re=Oe;break}else if(v[Oe]===null){v[Oe]=xe,re=Oe;break}if(re===-1)break}const Te=x[re];Te&&Te.connect(xe)}}const z=new P,Y=new P;function W(X,te,xe){z.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(xe.matrixWorld);const re=z.distanceTo(Y),Te=te.projectionMatrix.elements,Oe=xe.projectionMatrix.elements,Ue=Te[14]/(Te[10]-1),$e=Te[14]/(Te[10]+1),J=(Te[9]+1)/Te[5],oe=(Te[9]-1)/Te[5],L=(Te[8]-1)/Te[0],Pe=(Oe[8]+1)/Oe[0],ne=Ue*L,Se=Ue*Pe,ue=re/(-L+Pe),Ie=ue*-L;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ie),X.translateZ(ue),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ye=Ue+ue,C=$e+ue,S=ne-Ie,k=Se+(re-Ie),j=J*$e/C*ye,Q=oe*$e/C*ye;X.projectionMatrix.makePerspective(S,k,j,Q,ye,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function le(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let te=X.near,xe=X.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),y.near=A.near=E.near=te,y.far=A.far=E.far=xe,(D!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,O=y.far),E.layers.mask=X.layers.mask|2,A.layers.mask=X.layers.mask|4,y.layers.mask=E.layers.mask|A.layers.mask;const re=X.parent,Te=y.cameras;le(y,re);for(let Oe=0;Oe<Te.length;Oe++)le(Te[Oe],re);Te.length===2?W(y,E,A):y.projectionMatrix.copy(E.projectionMatrix),he(X,y,re)};function he(X,te,xe){xe===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=gs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ce=null;function ve(X,te){if(u=te.getViewerPose(c||o),g=te,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let re=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,re=!0);for(let Oe=0;Oe<xe.length;Oe++){const Ue=xe[Oe];let $e=null;if(f!==null)$e=f.getViewport(Ue);else{const oe=h.getViewSubImage(d,Ue);$e=oe.viewport,Oe===0&&(e.setRenderTargetTextures(b,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(b))}let J=M[Oe];J===void 0&&(J=new yt,J.layers.enable(Oe),J.viewport=new tt,M[Oe]=J),J.matrix.fromArray(Ue.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ue.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set($e.x,$e.y,$e.width,$e.height),Oe===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),re===!0&&y.cameras.push(J)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Oe=h.getDepthInformation(xe[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,i.renderState)}}for(let xe=0;xe<x.length;xe++){const re=v[xe],Te=x[xe];re!==null&&Te!==void 0&&Te.update(re,te,c||o)}ce&&ce(X,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Le=new fu;Le.setAnimationLoop(ve),this.setAnimationLoop=function(X){ce=X},this.dispose=function(){}}}const Si=new Qt,d_=new ze;function f_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),x=b.envMap,v=b.envMapRotation;x&&(m.envMap.value=x,Si.copy(v),Si.x*=-1,Si.y*=-1,Si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(Si)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function p_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function c(b,x){let v=i[b.id];v===void 0&&(g(b),v=u(b),i[b.id]=v,b.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(b,R);const T=e.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function u(b){const x=h();b.__bindingPointIndex=x;const v=s.createBuffer(),R=b.__size,T=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],v=b.uniforms,R=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,E=v.length;T<E;T++){const A=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,y=A.length;M<y;M++){const D=A[M];if(f(D,T,M,R)===!0){const O=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let G=0;G<U.length;G++){const z=U[G],Y=_(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,O+B,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,B),B+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,x,v,R){const T=b.value,E=x+"_"+v;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{const A=R[E];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return R[E]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(b){const x=b.uniforms;let v=0;const R=16;for(let E=0,A=x.length;E<A;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,D=M.length;y<D;y++){const O=M[y],U=Array.isArray(O.value)?O.value:[O.value];for(let B=0,G=U.length;B<G;B++){const z=U[B],Y=_(z),W=v%R,le=W%Y.boundary,he=W+le;v+=le,he!==0&&R-he<Y.storage&&(v+=R-he),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=Y.storage}}}const T=v%R;return T>0&&(v+=R-T),b.__size=v,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class m_{constructor(e={}){const{canvas:t=ef(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=En,this.toneMappingExposure=1;const v=this;let R=!1,T=0,E=0,A=null,M=-1,y=null;const D=new tt,O=new tt;let U=null;const B=new se(0);let G=0,z=t.width,Y=t.height,W=1,le=null,he=null;const ce=new tt(0,0,z,Y),ve=new tt(0,0,z,Y);let Le=!1;const X=new Rl;let te=!1,xe=!1;const re=new ze,Te=new ze,Oe=new P,Ue=new tt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function oe(){return A===null?W:1}let L=n;function Pe(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xl}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",me,!1),L===null){const N="webgl2";if(L=Pe(N,w),L===null)throw Pe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ne,Se,ue,Ie,ye,C,S,k,j,Q,K,Ee,fe,Me,Ye,ie,be,Ne,Fe,we,Ze,Ge,ft,I;function pe(){ne=new y0(L),ne.init(),Ge=new r_(L,ne),Se=new p0(L,ne,e,Ge),ue=new n_(L,ne),Se.reverseDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),Ie=new b0(L),ye=new Vg,C=new s_(L,ne,ue,ye,Se,Ge,Ie),S=new g0(v),k=new x0(v),j=new Pf(L),ft=new d0(L,j),Q=new M0(L,j,Ie,ft),K=new T0(L,Q,j,Ie),Fe=new w0(L,Se,C),ie=new m0(ye),Ee=new kg(v,S,k,ne,Se,ft,ie),fe=new f_(v,ye),Me=new Gg,Ye=new Kg(ne),Ne=new u0(v,S,k,ue,K,f,l),be=new e_(v,K,Se),I=new p_(L,Ie,Se,ue),we=new f0(L,ne,Ie),Ze=new S0(L,ne,Ie),Ie.programs=Ee.programs,v.capabilities=Se,v.extensions=ne,v.properties=ye,v.renderLists=Me,v.shadowMap=be,v.state=ue,v.info=Ie}pe();const q=new u_(v,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=ne.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ne.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(z,Y,!1))},this.getSize=function(w){return w.set(z,Y)},this.setSize=function(w,N,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,Y=N,t.width=Math.floor(w*W),t.height=Math.floor(N*W),V===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(z*W,Y*W).floor()},this.setDrawingBufferSize=function(w,N,V){z=w,Y=N,W=V,t.width=Math.floor(w*V),t.height=Math.floor(N*V),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,N,V,H){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,N,V,H),ue.viewport(D.copy(ce).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,N,V,H){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,N,V,H),ue.scissor(O.copy(ve).multiplyScalar(W).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(w){ue.setScissorTest(Le=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){he=w},this.getClearColor=function(w){return w.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(w=!0,N=!0,V=!0){let H=0;if(w){let F=!1;if(A!==null){const ae=A.texture.format;F=ae===El||ae===Tl||ae===wl}if(F){const ae=A.texture.type,ge=ae===Qn||ae===Pi||ae===tr||ae===ps||ae===Ml||ae===Sl,Ae=Ne.getClearColor(),Ce=Ne.getClearAlpha(),Be=Ae.r,Ve=Ae.g,Re=Ae.b;ge?(g[0]=Be,g[1]=Ve,g[2]=Re,g[3]=Ce,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Be,_[1]=Ve,_[2]=Re,_[3]=Ce,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),V&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Me.dispose(),Ye.dispose(),ye.dispose(),S.dispose(),k.dispose(),K.dispose(),ft.dispose(),I.dispose(),Ee.dispose(),q.dispose(),q.removeEventListener("sessionstart",Zl),q.removeEventListener("sessionend",$l),gi.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=Ie.autoReset,N=be.enabled,V=be.autoUpdate,H=be.needsUpdate,F=be.type;pe(),Ie.autoReset=w,be.enabled=N,be.autoUpdate=V,be.needsUpdate=H,be.type=F}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ke(w){const N=w.target;N.removeEventListener("dispose",ke),bt(N)}function bt(w){Ht(w),ye.remove(w)}function Ht(w){const N=ye.get(w).programs;N!==void 0&&(N.forEach(function(V){Ee.releaseProgram(V)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,V,H,F,ae){N===null&&(N=$e);const ge=F.isMesh&&F.matrixWorld.determinant()<0,Ae=qu(w,N,V,H,F);ue.setMaterial(H,ge);let Ce=V.index,Be=1;if(H.wireframe===!0){if(Ce=Q.getWireframeAttribute(V),Ce===void 0)return;Be=2}const Ve=V.drawRange,Re=V.attributes.position;let Je=Ve.start*Be,pt=(Ve.start+Ve.count)*Be;ae!==null&&(Je=Math.max(Je,ae.start*Be),pt=Math.min(pt,(ae.start+ae.count)*Be)),Ce!==null?(Je=Math.max(Je,0),pt=Math.min(pt,Ce.count)):Re!=null&&(Je=Math.max(Je,0),pt=Math.min(pt,Re.count));const _t=pt-Je;if(_t<0||_t===1/0)return;ft.setup(F,H,Ae,V,Ce);let Kt,st=we;if(Ce!==null&&(Kt=j.get(Ce),st=Ze,st.setIndex(Kt)),F.isMesh)H.wireframe===!0?(ue.setLineWidth(H.wireframeLinewidth*oe()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(F.isLine){let De=H.linewidth;De===void 0&&(De=1),ue.setLineWidth(De*oe()),F.isLineSegments?st.setMode(L.LINES):F.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else F.isPoints?st.setMode(L.POINTS):F.isSprite&&st.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)st.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const De=F._multiDrawStarts,Ln=F._multiDrawCounts,rt=F._multiDrawCount,mn=Ce?j.get(Ce).bytesPerElement:1,Oi=ye.get(H).currentProgram.getUniforms();for(let en=0;en<rt;en++)Oi.setValue(L,"_gl_DrawID",en),st.render(De[en]/mn,Ln[en])}else if(F.isInstancedMesh)st.renderInstances(Je,_t,F.count);else if(V.isInstancedBufferGeometry){const De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ln=Math.min(V.instanceCount,De);st.renderInstances(Je,_t,Ln)}else st.render(Je,_t)};function ot(w,N,V){w.transparent===!0&&w.side===Pt&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,Mr(w,N,V),w.side=yn,w.needsUpdate=!0,Mr(w,N,V),w.side=Pt):Mr(w,N,V)}this.compile=function(w,N,V=null){V===null&&(V=w),p=Ye.get(V),p.init(N),x.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){const Ae=ae[ge];ot(Ae,V,F),H.add(Ae)}else ot(ae,V,F),H.add(ae)}),x.pop(),p=null,H},this.compileAsync=function(w,N,V=null){const H=this.compile(w,N,V);return new Promise(F=>{function ae(){if(H.forEach(function(ge){ye.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){F(w);return}setTimeout(ae,10)}ne.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let pn=null;function Dn(w){pn&&pn(w)}function Zl(){gi.stop()}function $l(){gi.start()}const gi=new fu;gi.setAnimationLoop(Dn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(w){pn=w,q.setAnimationLoop(w),w===null?gi.stop():gi.start()},q.addEventListener("sessionstart",Zl),q.addEventListener("sessionend",$l),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,A),p=Ye.get(w,x.length),p.init(N),x.push(p),Te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(Te),xe=this.localClippingEnabled,te=ie.init(this.clippingPlanes,xe),m=Me.get(w,b.length),m.init(),b.push(m),q.enabled===!0&&q.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&Ro(ae,N,-1/0,v.sortObjects)}Ro(w,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(le,he),J=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,J&&Ne.addToRenderList(m,w),this.info.render.frame++,te===!0&&ie.beginShadows();const V=p.state.shadowsArray;be.render(V,w,N),te===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ae=N.cameras;if(F.length>0)for(let ge=0,Ae=ae.length;ge<Ae;ge++){const Ce=ae[ge];Ql(H,F,w,Ce)}J&&Ne.render(w);for(let ge=0,Ae=ae.length;ge<Ae;ge++){const Ce=ae[ge];Jl(m,w,Ce,Ce.viewport)}}else F.length>0&&Ql(H,F,w,N),J&&Ne.render(w),Jl(m,w,N);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,N),ft.resetDefaultState(),M=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],te===!0&&ie.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ro(w,N,V,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){H&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const ge=K.update(w),Ae=w.material;Ae.visible&&m.push(w,ge,Ae,V,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const ge=K.update(w),Ae=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(Ae)){const Ce=ge.groups;for(let Be=0,Ve=Ce.length;Be<Ve;Be++){const Re=Ce[Be],Je=Ae[Re.materialIndex];Je&&Je.visible&&m.push(w,ge,Je,V,Ue.z,Re)}}else Ae.visible&&m.push(w,ge,Ae,V,Ue.z,null)}}const ae=w.children;for(let ge=0,Ae=ae.length;ge<Ae;ge++)Ro(ae[ge],N,V,H)}function Jl(w,N,V,H){const F=w.opaque,ae=w.transmissive,ge=w.transparent;p.setupLightsView(V),te===!0&&ie.setGlobalState(v.clippingPlanes,V),H&&ue.viewport(D.copy(H)),F.length>0&&yr(F,N,V),ae.length>0&&yr(ae,N,V),ge.length>0&&yr(ge,N,V),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ql(w,N,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new kt(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?sn:Qn,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ae=p.state.transmissionRenderTarget[H.id],ge=H.viewport||D;ae.setSize(ge.z,ge.w);const Ae=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(B),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),J&&Ne.render(V);const Ce=v.toneMapping;v.toneMapping=En;const Be=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),te===!0&&ie.setGlobalState(v.clippingPlanes,H),yr(w,V,H),C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Re=0,Je=N.length;Re<Je;Re++){const pt=N[Re],_t=pt.object,Kt=pt.geometry,st=pt.material,De=pt.group;if(st.side===Pt&&_t.layers.test(H.layers)){const Ln=st.side;st.side=Jt,st.needsUpdate=!0,ec(_t,V,H,Kt,st,De),st.side=Ln,st.needsUpdate=!0,Ve=!0}}Ve===!0&&(C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae))}v.setRenderTarget(Ae),v.setClearColor(B,G),Be!==void 0&&(H.viewport=Be),v.toneMapping=Ce}function yr(w,N,V){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ae=w.length;F<ae;F++){const ge=w[F],Ae=ge.object,Ce=ge.geometry,Be=H===null?ge.material:H,Ve=ge.group;Ae.layers.test(V.layers)&&ec(Ae,N,V,Ce,Be,Ve)}}function ec(w,N,V,H,F,ae){w.onBeforeRender(v,N,V,H,F,ae),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,N,V,H,w,ae),F.transparent===!0&&F.side===Pt&&F.forceSinglePass===!1?(F.side=Jt,F.needsUpdate=!0,v.renderBufferDirect(V,N,H,F,w,ae),F.side=yn,F.needsUpdate=!0,v.renderBufferDirect(V,N,H,F,w,ae),F.side=Pt):v.renderBufferDirect(V,N,H,F,w,ae),w.onAfterRender(v,N,V,H,F,ae)}function Mr(w,N,V){N.isScene!==!0&&(N=$e);const H=ye.get(w),F=p.state.lights,ae=p.state.shadowsArray,ge=F.state.version,Ae=Ee.getParameters(w,F.state,ae,N,V),Ce=Ee.getProgramCacheKey(Ae);let Be=H.programs;H.environment=w.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(w.isMeshStandardMaterial?k:S).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",ke),Be=new Map,H.programs=Be);let Ve=Be.get(Ce);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===ge)return nc(w,Ae),Ve}else Ae.uniforms=Ee.getUniforms(w),w.onBeforeCompile(Ae,v),Ve=Ee.acquireProgram(Ae,Ce),Be.set(Ce,Ve),H.uniforms=Ae.uniforms;const Re=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=ie.uniform),nc(w,Ae),H.needsLights=ju(w),H.lightsStateVersion=ge,H.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ve,H.uniformsList=null,Ve}function tc(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=uo.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function nc(w,N){const V=ye.get(w);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function qu(w,N,V,H,F){N.isScene!==!0&&(N=$e),C.resetTextureUnits();const ae=N.fog,ge=H.isMeshStandardMaterial?N.environment:null,Ae=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Xt,Ce=(H.isMeshStandardMaterial?k:S).get(H.envMap||ge),Be=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ve=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,pt=!!V.morphAttributes.color;let _t=En;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_t=v.toneMapping);const Kt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,st=Kt!==void 0?Kt.length:0,De=ye.get(H),Ln=p.state.lights;if(te===!0&&(xe===!0||w!==y)){const rn=w===y&&H.id===M;ie.setState(H,w,rn)}let rt=!1;H.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ln.state.version||De.outputColorSpace!==Ae||F.isBatchedMesh&&De.batching===!1||!F.isBatchedMesh&&De.batching===!0||F.isBatchedMesh&&De.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&De.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&De.instancing===!1||!F.isInstancedMesh&&De.instancing===!0||F.isSkinnedMesh&&De.skinning===!1||!F.isSkinnedMesh&&De.skinning===!0||F.isInstancedMesh&&De.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&De.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&De.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&De.instancingMorph===!1&&F.morphTexture!==null||De.envMap!==Ce||H.fog===!0&&De.fog!==ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==Be||De.vertexTangents!==Ve||De.morphTargets!==Re||De.morphNormals!==Je||De.morphColors!==pt||De.toneMapping!==_t||De.morphTargetsCount!==st)&&(rt=!0):(rt=!0,De.__version=H.version);let mn=De.currentProgram;rt===!0&&(mn=Mr(H,N,F));let Oi=!1,en=!1,Is=!1;const vt=mn.getUniforms(),Sn=De.uniforms;if(ue.useProgram(mn.program)&&(Oi=!0,en=!0,Is=!0),H.id!==M&&(M=H.id,en=!0),Oi||y!==w){ue.buffers.depth.getReversed()?(re.copy(w.projectionMatrix),nf(re),sf(re),vt.setValue(L,"projectionMatrix",re)):vt.setValue(L,"projectionMatrix",w.projectionMatrix),vt.setValue(L,"viewMatrix",w.matrixWorldInverse);const ti=vt.map.cameraPosition;ti!==void 0&&ti.setValue(L,Oe.setFromMatrixPosition(w.matrixWorld)),Se.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,en=!0,Is=!0)}if(F.isSkinnedMesh){vt.setOptional(L,F,"bindMatrix"),vt.setOptional(L,F,"bindMatrixInverse");const rn=F.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),vt.setValue(L,"boneTexture",rn.boneTexture,C))}F.isBatchedMesh&&(vt.setOptional(L,F,"batchingTexture"),vt.setValue(L,"batchingTexture",F._matricesTexture,C),vt.setOptional(L,F,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",F._indirectTexture,C),vt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",F._colorsTexture,C));const Ns=V.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&Fe.update(F,V,mn),(en||De.receiveShadow!==F.receiveShadow)&&(De.receiveShadow=F.receiveShadow,vt.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Sn.envMap.value=Ce,Sn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Sn.envMapIntensity.value=N.environmentIntensity),en&&(vt.setValue(L,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&Yu(Sn,Is),ae&&H.fog===!0&&fe.refreshFogUniforms(Sn,ae),fe.refreshMaterialUniforms(Sn,H,W,Y,p.state.transmissionRenderTarget[w.id]),uo.upload(L,tc(De),Sn,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(uo.upload(L,tc(De),Sn,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(L,"center",F.center),vt.setValue(L,"modelViewMatrix",F.modelViewMatrix),vt.setValue(L,"normalMatrix",F.normalMatrix),vt.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const rn=H.uniformsGroups;for(let ti=0,ni=rn.length;ti<ni;ti++){const ic=rn[ti];I.update(ic,mn),I.bind(ic,mn)}}return mn}function Yu(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function ju(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,N,V){ye.get(w.texture).__webglTexture=N,ye.get(w.depthTexture).__webglTexture=V;const H=ye.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const V=ye.get(w);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,V=0){A=w,T=N,E=V;let H=!0,F=null,ae=!1,ge=!1;if(w){const Ce=ye.get(w);if(Ce.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(Ce.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Ce.__hasExternalTextures)C.rebindTextures(w,ye.get(w.texture).__webglTexture,ye.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(Ce.__boundDepthTexture!==Re){if(Re!==null&&ye.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);const Ve=ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[N])?F=Ve[N][V]:F=Ve[N],ae=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?F=ye.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?F=Ve[V]:F=Ve,D.copy(w.viewport),O.copy(w.scissor),U=w.scissorTest}else D.copy(ce).multiplyScalar(W).floor(),O.copy(ve).multiplyScalar(W).floor(),U=Le;if(ue.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&ue.drawBuffers(w,F),ue.viewport(D),ue.scissor(O),ue.setScissorTest(U),ae){const Ce=ye.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,V)}else if(ge){const Ce=ye.get(w.texture),Be=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.__webglTexture,V||0,Be)}M=-1},this.readRenderTargetPixels=function(w,N,V,H,F,ae,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae){ue.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const Ce=w.texture,Be=Ce.format,Ve=Ce.type;if(!Se.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&V>=0&&V<=w.height-F&&L.readPixels(N,V,H,F,Ge.convert(Be),Ge.convert(Ve),ae)}finally{const Ce=A!==null?ye.get(A).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(w,N,V,H,F,ae,ge){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae){const Ce=w.texture,Be=Ce.format,Ve=Ce.type;if(!Se.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-H&&V>=0&&V<=w.height-F){ue.bindFramebuffer(L.FRAMEBUFFER,Ae);const Re=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),L.readPixels(N,V,H,F,Ge.convert(Be),Ge.convert(Ve),0);const Je=A!==null?ye.get(A).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,Je);const pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await tf(L,pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer(Re),L.deleteSync(pt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,V=0){w.isTexture!==!0&&(qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-V),F=Math.floor(w.image.width*H),ae=Math.floor(w.image.height*H),ge=N!==null?N.x:0,Ae=N!==null?N.y:0;C.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ge,Ae,F,ae),ue.unbindTexture()},this.copyTextureToTexture=function(w,N,V=null,H=null,F=0){w.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let ae,ge,Ae,Ce,Be,Ve,Re,Je,pt;const _t=w.isCompressedTexture?w.mipmaps[F]:w.image;V!==null?(ae=V.max.x-V.min.x,ge=V.max.y-V.min.y,Ae=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,Be=V.min.y,Ve=V.isBox3?V.min.z:0):(ae=_t.width,ge=_t.height,Ae=_t.depth||1,Ce=0,Be=0,Ve=0),H!==null?(Re=H.x,Je=H.y,pt=H.z):(Re=0,Je=0,pt=0);const Kt=Ge.convert(N.format),st=Ge.convert(N.type);let De;N.isData3DTexture?(C.setTexture3D(N,0),De=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),De=L.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),De=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Ln=L.getParameter(L.UNPACK_ROW_LENGTH),rt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),mn=L.getParameter(L.UNPACK_SKIP_PIXELS),Oi=L.getParameter(L.UNPACK_SKIP_ROWS),en=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ce),L.pixelStorei(L.UNPACK_SKIP_ROWS,Be),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);const Is=w.isDataArrayTexture||w.isData3DTexture,vt=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Sn=ye.get(w),Ns=ye.get(N),rn=ye.get(Sn.__renderTarget),ti=ye.get(Ns.__renderTarget);ue.bindFramebuffer(L.READ_FRAMEBUFFER,rn.__webglFramebuffer),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ni=0;ni<Ae;ni++)Is&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(w).__webglTexture,F,Ve+ni),w.isDepthTexture?(vt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(N).__webglTexture,F,pt+ni),L.blitFramebuffer(Ce,Be,ae,ge,Re,Je,ae,ge,L.DEPTH_BUFFER_BIT,L.NEAREST)):vt?L.copyTexSubImage3D(De,F,Re,Je,pt+ni,Ce,Be,ae,ge):L.copyTexSubImage2D(De,F,Re,Je,pt+ni,Ce,Be,ae,ge);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else vt?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(De,F,Re,Je,pt,ae,ge,Ae,Kt,st,_t.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(De,F,Re,Je,pt,ae,ge,Ae,Kt,_t.data):L.texSubImage3D(De,F,Re,Je,pt,ae,ge,Ae,Kt,st,_t):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Re,Je,ae,ge,Kt,st,_t.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Re,Je,_t.width,_t.height,Kt,_t.data):L.texSubImage2D(L.TEXTURE_2D,F,Re,Je,ae,ge,Kt,st,_t);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ln),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,en),F===0&&N.generateMipmaps&&L.generateMipmap(De),ue.unbindTexture()},this.copyTextureToTexture3D=function(w,N,V=null,H=null,F=0){return w.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,V,H,F)},this.initRenderTarget=function(w){ye.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),ue.unbindTexture()},this.resetState=function(){T=0,E=0,A=null,ue.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Dl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new se(e),this.near=t,this.far=n}clone(){return new Dl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ls extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class g_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rl,this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new P;class Ll{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ll(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ih=new P,sh=new tt,rh=new tt,__=new P,oh=new ze,Gr=new P,sa=new Cn,ah=new ze,ra=new dr;class v_ extends nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ac,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ei),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Gr),this.boundingBox.expandByPoint(Gr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Gr),this.boundingSphere.expandByPoint(Gr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(i),e.ray.intersectsSphere(sa)!==!1&&(ah.copy(i).invert(),ra.copy(e.ray).applyMatrix4(ah),!(this.boundingBox!==null&&ra.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ra)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ac?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Td?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;sh.fromBufferAttribute(i.attributes.skinIndex,e),rh.fromBufferAttribute(i.attributes.skinWeight,e),ih.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=rh.getComponent(r);if(o!==0){const a=sh.getComponent(r);oh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(__.copy(ih).applyMatrix4(oh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class xu extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ys extends Bt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Dt,u=Dt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lh=new ze,x_=new ze;class Il{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:x_;lh.multiplyMatrices(a,t[r]),lh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Il(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ys(t,e,e,Ot,Lt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new xu),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Di extends mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ji=new ze,ch=new ze,Wr=[],hh=new ei,y_=new ze,ks=new nt,Vs=new Cn;class pr extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,y_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),hh.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(hh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Vs.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ji),ch.multiplyMatrices(n,Ji),ks.matrixWorld=ch,ks.raycast(e,Wr);for(let o=0,a=Wr.length;o<a;o++){const l=Wr[o];l.instanceId=r,l.object=this,t.push(l)}Wr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(i*this.count),i,this.count,bl,Lt));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class di extends dn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vo=new P,xo=new P,uh=new ze,Hs=new dr,Xr=new Cn,oa=new P,dh=new P;class Nl extends it{constructor(e=new dt,t=new di){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)vo.fromBufferAttribute(t,i-1),xo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=vo.distanceTo(xo);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(i),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;uh.copy(i).invert(),Hs.copy(e.ray).applyMatrix4(uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),b=u.getX(_+1),x=qr(this,e,Hs,l,p,b);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=qr(this,e,Hs,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=qr(this,e,Hs,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=qr(this,e,Hs,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(vo.fromBufferAttribute(o,i),xo.fromBufferAttribute(o,r),t.distanceSqToSegment(vo,xo,oa,dh)>n)return;oa.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(oa);if(!(l<e.near||l>e.far))return{distance:l,point:dh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const fh=new P,ph=new P;class Ai extends Nl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)fh.fromBufferAttribute(t,i),ph.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fh.distanceTo(ph);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class M_ extends Nl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ul extends dn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mh=new ze,cl=new dr,Yr=new Cn,jr=new P;class Fl extends it{constructor(e=new dt,t=new Ul){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;mh.copy(i).invert(),cl.copy(e.ray).applyMatrix4(mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);jr.fromBufferAttribute(h,m),gh(jr,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)jr.fromBufferAttribute(h,g),gh(jr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gh(s,e,t,n,i,r,o){const a=cl.distanceSqToPoint(s);if(a<t){const l=new P;cl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Z:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],r=[],o=[],a=new P,l=new ze;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(At(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(At(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ol extends Rn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Z){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class S_ extends Ol{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bl(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Kr=new P,aa=new Bl,la=new Bl,ca=new Bl;class b_ extends Rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Kr.subVectors(i[0],i[1]).add(i[0]),c=Kr);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Kr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),aa.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),la.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),ca.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(aa.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),la.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ca.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(aa.calc(l),la.calc(l),ca.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _h(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function w_(s,e){const t=1-s;return t*t*e}function T_(s,e){return 2*(1-s)*s*e}function E_(s,e){return s*s*e}function Ks(s,e,t,n){return w_(s,e)+T_(s,t)+E_(s,n)}function A_(s,e){const t=1-s;return t*t*t*e}function C_(s,e){const t=1-s;return 3*t*t*s*e}function R_(s,e){return 3*(1-s)*s*s*e}function P_(s,e){return s*s*s*e}function Zs(s,e,t,n,i){return A_(s,e)+C_(s,t)+R_(s,n)+P_(s,i)}class yu extends Rn{constructor(e=new Z,t=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,i.x,r.x,o.x,a.x),Zs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class D_ extends Rn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,i.x,r.x,o.x,a.x),Zs(e,i.y,r.y,o.y,a.y),Zs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mu extends Rn{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L_ extends Rn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Su extends Rn{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ks(e,i.x,r.x,o.x),Ks(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I_ extends Rn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ks(e,i.x,r.x,o.x),Ks(e,i.y,r.y,o.y),Ks(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bu extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(_h(a,l.x,c.x,u.x,h.x),_h(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Z().fromArray(i))}return this}}var hl=Object.freeze({__proto__:null,ArcCurve:S_,CatmullRomCurve3:b_,CubicBezierCurve:yu,CubicBezierCurve3:D_,EllipseCurve:Ol,LineCurve:Mu,LineCurve3:L_,QuadraticBezierCurve:Su,QuadraticBezierCurve3:I_,SplineCurve:bu});class N_ extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new hl[i.type]().fromJSON(i))}return this}}class vh extends N_{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Mu(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Su(this.currentPoint.clone(),new Z(e,t),new Z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new yu(this.currentPoint.clone(),new Z(e,t),new Z(n,i),new Z(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new bu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Ol(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class zl extends dt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function b(){const v=new P,R=new P;let T=0;const E=(t-e)/n;for(let A=0;A<=r;A++){const M=[],y=A/r,D=y*(t-e)+e;for(let O=0;O<=i;O++){const U=O/i,B=U*l+a,G=Math.sin(B),z=Math.cos(B);R.x=D*G,R.y=-y*n+m,R.z=D*z,h.push(R.x,R.y,R.z),v.set(G,E,z).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-y),M.push(g++)}_.push(M)}for(let A=0;A<i;A++)for(let M=0;M<r;M++){const y=_[M][A],D=_[M+1][A],O=_[M+1][A+1],U=_[M][A+1];(e>0||M!==0)&&(u.push(y,D,U),T+=3),(t>0||M!==r-1)&&(u.push(D,O,U),T+=3)}c.addGroup(p,T,0),p+=T}function x(v){const R=g,T=new Z,E=new P;let A=0;const M=v===!0?e:t,y=v===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const D=g;for(let O=0;O<=i;O++){const B=O/i*l+a,G=Math.cos(B),z=Math.sin(B);E.x=M*z,E.y=m*y,E.z=M*G,h.push(E.x,E.y,E.z),d.push(0,y,0),T.x=G*.5+.5,T.y=z*.5*y+.5,f.push(T.x,T.y),g++}for(let O=0;O<i;O++){const U=R+O,B=D+O;v===!0?u.push(B,B+1,U):u.push(B+1,B,U),A+=3}c.addGroup(p,A,v===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Zr=new P,$r=new P,ha=new P,Jr=new cn;class U_ extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(os*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Jr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Jr.getNormal(ha),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const x=(b+1)%3,v=h[b],R=h[x],T=Jr[u[b]],E=Jr[u[x]],A=`${v}_${R}`,M=`${R}_${v}`;M in d&&d[M]?(ha.dot(d[M].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(E.x,E.y,E.z)),d[M]=null):A in d||(d[A]={index0:c[b],index1:c[x],normal:ha.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Zr.fromBufferAttribute(a,_),$r.fromBufferAttribute(a,m),f.push(Zr.x,Zr.y,Zr.z),f.push($r.x,$r.y,$r.z)}this.setAttribute("position",new gt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class kl extends vh{constructor(e){super(e),this.uuid=un(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new vh().fromJSON(i))}return this}}const F_={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=wu(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=V_(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<i;g+=t)h=s[g],d=s[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return rr(r,o,t,a,l,f,0),o}};function wu(s,e,t,n,i){let r,o;if(i===J_(s,e,t,n)>0)for(r=e;r<t;r+=n)o=xh(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=xh(r,s[r],s[r+1],o);return o&&Ao(o,o.next)&&(ar(o),o=o.next),o}function Li(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ao(t,t.next)||St(t.prev,t,t.next)===0)){if(ar(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function rr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&q_(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?B_(s,n,i,r):O_(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),ar(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=z_(Li(s),e,t),rr(s,e,t,n,i,r,2)):o===2&&k_(s,e,t,n,i,r):rr(Li(s),e,t,n,i,r,1);break}}}function O_(s){const e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&ns(i,a,r,l,o,c,g.x,g.y)&&St(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function B_(s,e,t,n){const i=s.prev,r=s,o=s.next;if(St(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=ul(f,g,e,t,n),b=ul(_,m,e,t,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=p&&v&&v.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&ns(a,u,l,h,c,d,x.x,x.y)&&St(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&ns(a,u,l,h,c,d,v.x,v.y)&&St(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&ns(a,u,l,h,c,d,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&ns(a,u,l,h,c,d,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function z_(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ao(i,r)&&Tu(i,n,n.next,r)&&or(i,r)&&or(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ar(n),ar(n.next),n=s=r),n=n.next}while(n!==s);return Li(n)}function k_(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K_(o,a)){let l=Eu(o,a);o=Li(o,o.next),l=Li(l,l.next),rr(o,e,t,n,i,r,0),rr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function V_(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=wu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(j_(c));for(i.sort(H_),r=0;r<i.length;r++)t=G_(i[r],t);return t}function H_(s,e){return s.x-e.x}function G_(s,e){const t=W_(s,e);if(!t)return e;const n=Eu(t,s);return Li(n,n.next),Li(t,t.next)}function W_(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ns(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),or(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&X_(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function X_(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function q_(s,e,t,n){let i=s;do i.z===0&&(i.z=ul(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Y_(i)}function Y_(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function ul(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function j_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ns(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function K_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Z_(s,e)&&(or(s,e)&&or(e,s)&&$_(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||Ao(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ao(s,e){return s.x===e.x&&s.y===e.y}function Tu(s,e,t,n){const i=eo(St(s,e,t)),r=eo(St(s,e,n)),o=eo(St(t,n,s)),a=eo(St(t,n,e));return!!(i!==r&&o!==a||i===0&&Qr(s,t,e)||r===0&&Qr(s,n,e)||o===0&&Qr(t,s,n)||a===0&&Qr(t,e,n))}function Qr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function eo(s){return s>0?1:s<0?-1:0}function Z_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Tu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function or(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function $_(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Eu(s,e){const t=new dl(s.i,s.x,s.y),n=new dl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function xh(s,e,t,n){const i=new dl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ar(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function dl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J_(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class $s{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return $s.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];yh(e),Mh(n,e);let o=e.length;t.forEach(yh);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Mh(n,t[l]);const a=F_.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function yh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Mh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Co extends dt{constructor(e=new kl([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new gt(i,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Q_;let x,v=!1,R,T,E,A;p&&(x=p.getSpacedPoints(u),v=!0,d=!1,R=p.computeFrenetFrames(u,!1),T=new P,E=new P,A=new P),d||(m=0,f=0,g=0,_=0);const M=a.extractPoints(c);let y=M.shape;const D=M.holes;if(!$s.isClockWise(y)){y=y.reverse();for(let J=0,oe=D.length;J<oe;J++){const L=D[J];$s.isClockWise(L)&&(D[J]=L.reverse())}}const U=$s.triangulateShape(y,D),B=y;for(let J=0,oe=D.length;J<oe;J++){const L=D[J];y=y.concat(L)}function G(J,oe,L){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(oe,L)}const z=y.length,Y=U.length;function W(J,oe,L){let Pe,ne,Se;const ue=J.x-oe.x,Ie=J.y-oe.y,ye=L.x-J.x,C=L.y-J.y,S=ue*ue+Ie*Ie,k=ue*C-Ie*ye;if(Math.abs(k)>Number.EPSILON){const j=Math.sqrt(S),Q=Math.sqrt(ye*ye+C*C),K=oe.x-Ie/j,Ee=oe.y+ue/j,fe=L.x-C/Q,Me=L.y+ye/Q,Ye=((fe-K)*C-(Me-Ee)*ye)/(ue*C-Ie*ye);Pe=K+ue*Ye-J.x,ne=Ee+Ie*Ye-J.y;const ie=Pe*Pe+ne*ne;if(ie<=2)return new Z(Pe,ne);Se=Math.sqrt(ie/2)}else{let j=!1;ue>Number.EPSILON?ye>Number.EPSILON&&(j=!0):ue<-Number.EPSILON?ye<-Number.EPSILON&&(j=!0):Math.sign(Ie)===Math.sign(C)&&(j=!0),j?(Pe=-Ie,ne=ue,Se=Math.sqrt(S)):(Pe=ue,ne=Ie,Se=Math.sqrt(S/2))}return new Z(Pe/Se,ne/Se)}const le=[];for(let J=0,oe=B.length,L=oe-1,Pe=J+1;J<oe;J++,L++,Pe++)L===oe&&(L=0),Pe===oe&&(Pe=0),le[J]=W(B[J],B[L],B[Pe]);const he=[];let ce,ve=le.concat();for(let J=0,oe=D.length;J<oe;J++){const L=D[J];ce=[];for(let Pe=0,ne=L.length,Se=ne-1,ue=Pe+1;Pe<ne;Pe++,Se++,ue++)Se===ne&&(Se=0),ue===ne&&(ue=0),ce[Pe]=W(L[Pe],L[Se],L[ue]);he.push(ce),ve=ve.concat(ce)}for(let J=0;J<m;J++){const oe=J/m,L=f*Math.cos(oe*Math.PI/2),Pe=g*Math.sin(oe*Math.PI/2)+_;for(let ne=0,Se=B.length;ne<Se;ne++){const ue=G(B[ne],le[ne],Pe);re(ue.x,ue.y,-L)}for(let ne=0,Se=D.length;ne<Se;ne++){const ue=D[ne];ce=he[ne];for(let Ie=0,ye=ue.length;Ie<ye;Ie++){const C=G(ue[Ie],ce[Ie],Pe);re(C.x,C.y,-L)}}}const Le=g+_;for(let J=0;J<z;J++){const oe=d?G(y[J],ve[J],Le):y[J];v?(E.copy(R.normals[0]).multiplyScalar(oe.x),T.copy(R.binormals[0]).multiplyScalar(oe.y),A.copy(x[0]).add(E).add(T),re(A.x,A.y,A.z)):re(oe.x,oe.y,0)}for(let J=1;J<=u;J++)for(let oe=0;oe<z;oe++){const L=d?G(y[oe],ve[oe],Le):y[oe];v?(E.copy(R.normals[J]).multiplyScalar(L.x),T.copy(R.binormals[J]).multiplyScalar(L.y),A.copy(x[J]).add(E).add(T),re(A.x,A.y,A.z)):re(L.x,L.y,h/u*J)}for(let J=m-1;J>=0;J--){const oe=J/m,L=f*Math.cos(oe*Math.PI/2),Pe=g*Math.sin(oe*Math.PI/2)+_;for(let ne=0,Se=B.length;ne<Se;ne++){const ue=G(B[ne],le[ne],Pe);re(ue.x,ue.y,h+L)}for(let ne=0,Se=D.length;ne<Se;ne++){const ue=D[ne];ce=he[ne];for(let Ie=0,ye=ue.length;Ie<ye;Ie++){const C=G(ue[Ie],ce[Ie],Pe);v?re(C.x,C.y+x[u-1].y,x[u-1].x+L):re(C.x,C.y,h+L)}}}X(),te();function X(){const J=i.length/3;if(d){let oe=0,L=z*oe;for(let Pe=0;Pe<Y;Pe++){const ne=U[Pe];Te(ne[2]+L,ne[1]+L,ne[0]+L)}oe=u+m*2,L=z*oe;for(let Pe=0;Pe<Y;Pe++){const ne=U[Pe];Te(ne[0]+L,ne[1]+L,ne[2]+L)}}else{for(let oe=0;oe<Y;oe++){const L=U[oe];Te(L[2],L[1],L[0])}for(let oe=0;oe<Y;oe++){const L=U[oe];Te(L[0]+z*u,L[1]+z*u,L[2]+z*u)}}n.addGroup(J,i.length/3-J,0)}function te(){const J=i.length/3;let oe=0;xe(B,oe),oe+=B.length;for(let L=0,Pe=D.length;L<Pe;L++){const ne=D[L];xe(ne,oe),oe+=ne.length}n.addGroup(J,i.length/3-J,1)}function xe(J,oe){let L=J.length;for(;--L>=0;){const Pe=L;let ne=L-1;ne<0&&(ne=J.length-1);for(let Se=0,ue=u+m*2;Se<ue;Se++){const Ie=z*Se,ye=z*(Se+1),C=oe+Pe+Ie,S=oe+ne+Ie,k=oe+ne+ye,j=oe+Pe+ye;Oe(C,S,k,j)}}}function re(J,oe,L){l.push(J),l.push(oe),l.push(L)}function Te(J,oe,L){Ue(J),Ue(oe),Ue(L);const Pe=i.length/3,ne=b.generateTopUV(n,i,Pe-3,Pe-2,Pe-1);$e(ne[0]),$e(ne[1]),$e(ne[2])}function Oe(J,oe,L,Pe){Ue(J),Ue(oe),Ue(Pe),Ue(oe),Ue(L),Ue(Pe);const ne=i.length/3,Se=b.generateSideWallUV(n,i,ne-6,ne-3,ne-2,ne-1);$e(Se[0]),$e(Se[1]),$e(Se[3]),$e(Se[1]),$e(Se[2]),$e(Se[3])}function Ue(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function $e(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ev(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new hl[i.type]().fromJSON(i)),new Co(n,e.options)}}const Q_={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new Z(r,o),new Z(a,l),new Z(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Z(o,1-l),new Z(c,1-h),new Z(d,1-g),new Z(_,1-p)]:[new Z(a,1-l),new Z(u,1-h),new Z(f,1-g),new Z(m,1-p)]}};function ev(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class lr extends dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],x=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const T=R/t;h.x=-e*Math.cos(i+T*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+T*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-x),b.push(c++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const x=u[p][b+1],v=u[p][b],R=u[p+1][b],T=u[p+1][b+1];(p!==0||o>0)&&f.push(x,v,T),(p!==n-1||l<Math.PI)&&f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mr extends dn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mn extends mr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class tv extends dn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vl extends dn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function to(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function nv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function iv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Sh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Au(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class gr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sv extends gr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lc,endingEnd:lc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case cc:r=e,a=2*t-n;break;case hc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cc:o=e,l=2*n-t;break;case hc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let R=0;R!==a;++R)r[R]=p*o[u+R]+b*o[c+R]+x*o[l+R]+v*o[h+R];return r}}class rv extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class ov extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ov(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case ir:t=this.InterpolantFactoryMethodLinear;break;case Po:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return Po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&nv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Po,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=ir;class As extends Pn{constructor(e,t,n){super(e,t,n)}}As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=nr;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class Cu extends Pn{}Cu.prototype.ValueTypeName="color";class Ms extends Pn{}Ms.prototype.ValueTypeName="number";class av extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)An.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ss extends Pn{InterpolantFactoryMethodLinear(e){return new av(this.times,this.values,this.getValueSize(),e)}}Ss.prototype.ValueTypeName="quaternion";Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Pn{constructor(e,t,n){super(e,t,n)}}Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=nr;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends Pn{}bs.prototype.ValueTypeName="vector";class lv{constructor(e="",t=-1,n=[],i=Ed){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=un(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(hv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=iv(l);l=Sh(l,1,u),c=Sh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];Au(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Ms(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(bs,f+".position",d,"pos",i),n(Ss,f+".quaternion",d,"rot",i),n(bs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function cv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return bs;case"color":return Cu;case"quaternion":return Ss;case"bool":case"boolean":return As;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function hv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cv(s.type);if(s.times===void 0){const t=[],n=[];Au(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const fi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class uv{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const dv=new uv;class Ui{constructor(e){this.manager=e!==void 0?e:dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ui.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class fv extends Error{constructor(e,t){super(e),this.response=t}}class Hl extends Ui{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,E=u.length;T<E;T++){const A=u[T];A.onProgress&&A.onProgress(R)}p.enqueue(v),b()}},x=>{p.error(x)})}}});return new Response(m)}else throw new fv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{fi.add(e,c);const u=Bn[e];delete Bn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class pv extends Ui{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=sr("img");function l(){u(),fi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class mv extends Ui{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new ys,a=new Hl(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:hn,o.wrapT=c.wrapT!==void 0?c.wrapT:hn,o.magFilter=c.magFilter!==void 0?c.magFilter:Mt,o.minFilter=c.minFilter!==void 0?c.minFilter:Mt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Tn),c.mipmapCount===1&&(o.minFilter=Mt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Ru extends Ui{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,o=new pv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class _r extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gv extends _r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ua=new ze,bh=new P,wh=new P;class Gl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wh),t.updateMatrixWorld(),ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _v extends Gl{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Rs extends _r{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _v}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Th=new ze,Gs=new P,da=new P;class vv extends Gl{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gs),da.copy(n.position),da.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(da),n.updateMatrixWorld(),i.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th)}}class vr extends _r{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xv extends Gl{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Js extends _r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new xv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mi extends _r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yv extends Ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return fi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),fi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});fi.add(e,l),r.manager.itemStart(e)}}class Fi{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Eh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Eh(){return performance.now()}const Wl="\\[\\]\\.:\\/",Mv=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",Sv="[^"+Wl.replace("\\.","")+"]",bv=/((?:WC+[\/:])*)/.source.replace("WC",Xl),wv=/(WCOD+)?/.source.replace("WCOD",Sv),Tv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),Ev=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),Av=new RegExp("^"+bv+wv+Tv+Ev+"$"),Cv=["material","materials","bones","map"];class Rv{constructor(e,t,n){const i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mv,"")}static parseTrackName(e){const t=Av.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Cv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=Rv;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ah{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Pv extends Ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);const Ch={type:"change"},ql={type:"start"},Pu={type:"end"},no=new dr,Rh=new hi,Dv=Math.cos(70*_s.DEG2RAD),Ct=new P,Zt=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fa=1e-6;class Lv extends Pv{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new An,this._lastTargetPosition=new P,this._quat=new An().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ah,this._sphericalDelta=new Ah,this._scale=1,this._panOffset=new P,this._rotateStart=new Z,this._rotateEnd=new Z,this._rotateDelta=new Z,this._panStart=new Z,this._panEnd=new Z,this._panDelta=new Z,this._dollyStart=new Z,this._dollyEnd=new Z,this._dollyDelta=new Z,this._dollyDirection=new P,this._mouse=new Z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Nv.bind(this),this._onPointerDown=Iv.bind(this),this._onPointerUp=Uv.bind(this),this._onContextMenu=Hv.bind(this),this._onMouseWheel=Bv.bind(this),this._onKeyDown=zv.bind(this),this._onTouchStart=kv.bind(this),this._onTouchMove=Vv.bind(this),this._onMouseDown=Fv.bind(this),this._onMouseMove=Ov.bind(this),this._interceptControlDown=Gv.bind(this),this._interceptControlUp=Wv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ch),this.update(),this.state=ht.NONE}update(e=null){const t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Zt:n>Math.PI&&(n-=Zt),i<-Math.PI?i+=Zt:i>Math.PI&&(i-=Zt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ct.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(no.origin.copy(this.object.position),no.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(no.direction))<Dv?this.object.lookAt(this.target):(Rh.setFromNormalAndCoplanarPoint(this.object.up,this.target),no.intersectPlane(Rh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fa||this._lastTargetPosition.distanceToSquared(this.target)>fa?(this.dispatchEvent(Ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ct.copy(i).sub(this.target);let r=Ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Z,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Iv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Nv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Uv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pu),this.state=ht.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Fv(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ht.DOLLY;break;case is.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ht.ROTATE}break;case is.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(ql)}function Ov(s){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Bv(s){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(s.preventDefault(),this.dispatchEvent(ql),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Pu))}function zv(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function kv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ht.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ht.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(ql)}function Vv(s){switch(this._trackPointer(s),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ht.NONE}}function Hv(s){this.enabled!==!1&&s.preventDefault()}function Gv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Du={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class xr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xv=new xs(-1,1,1,-1,0,1);class qv extends dt{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}}const Yv=new qv;class Yl{constructor(e){this._mesh=new nt(Yv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jv extends xr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_o.clone(e.uniforms),this.material=new ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Yl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ph extends xr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Kv extends xr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Zv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Z);this._width=n.width,this._height=n.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jv(Du),this.copyPass.material.blending=Zn,this.clock=new Fi}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ph!==void 0&&(o instanceof Ph?n=!0:o instanceof Kv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $v extends xr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Jv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ws extends xr{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Z(e.x,e.y):new Z(256,256),this.clearColor=new se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new kt(r,o,{type:sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new kt(r,o,{type:sn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new kt(r,o,{type:sn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Jv;this.highPassUniforms=_o.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ut({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Z(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Du;this.copyUniforms=_o.clone(u.uniforms),this.blendMaterial=new ut({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:po,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new qn,this.fsQuad=new Yl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ws.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ws.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ws.BlurDirectionX=new Z(1,0);ws.BlurDirectionY=new Z(0,1);class Lu{constructor(e=42){this._initialSeed=e,this._state=e}reset(){return this._state=this._initialSeed,this}seed(e){return this._initialSeed=e,this._state=e,this}get currentSeed(){return this._initialSeed}next(){this._state|=0,this._state=this._state+1831565813|0;let e=Math.imul(this._state^this._state>>>15,1|this._state);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}intRange(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[this.intRange(0,e.length-1)]}gaussian(e=0,t=1){const n=this.next(),i=this.next();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*i)*t+e}vec3(e=0,t=1){return[this.range(e,t),this.range(e,t),this.range(e,t)]}onSphere(e=1){const t=this.range(0,Math.PI*2),n=Math.acos(this.range(-1,1));return[e*Math.sin(n)*Math.cos(t),e*Math.sin(n)*Math.sin(t),e*Math.cos(n)]}}const Vn=class Vn{static getInstance(){return Vn._instance||(Vn._instance=new Vn),Vn._instance}constructor(){if(Vn._instance)throw new Error("[UniformsManager] Use getInstance() - Singleton violation");this._globals=new Map,this._subscribers=new Map,this.register("uTime",{value:0}),this.register("uDeltaTime",{value:.016}),this.register("uResolution",{value:new Z(1920,1080)}),this.register("uMouse",{value:new Z(0,0)}),this.register("uFrame",{value:0}),this._clock=new Fi}register(e,t){return this._globals.set(e,t),this._subscribers.has(e)||this._subscribers.set(e,new Set),this}get(e){return this._globals.get(e)}subscribe(e,t){for(const n of t){if(!this._globals.has(n)){console.warn(`[UniformsManager] Unknown uniform: ${n}`);continue}e.uniforms[n]=this._globals.get(n),this._subscribers.get(n).add(e)}return this}unsubscribe(e){for(const[,t]of this._subscribers)t.delete(e)}set(e,t){const n=this._globals.get(e);return n&&(n.value=t),this}tick(){const e=this._clock.getDelta(),t=this._clock.getElapsedTime();this.set("uTime",t),this.set("uDeltaTime",e),this.set("uFrame",this.get("uFrame").value+1)}getGlobalUniformsClone(){const e={};for(const[t,n]of this._globals)e[t]=n;return e}dispose(){this._globals.clear(),this._subscribers.clear(),Vn._instance=null}};Us(Vn,"_instance",null);let cr=Vn;const Hn=class Hn{static getInstance(){return Hn._instance||(Hn._instance=new Hn),Hn._instance}constructor(){if(Hn._instance)throw new Error("[GarbageCollector] Use getInstance() - Singleton violation");this._geometries=new Set,this._materials=new Set,this._textures=new Set,this._objects=new Set,this._tags=new Map}trackGeometry(e,t){return this._geometries.add(e),t&&this._addTag(t,e),e}trackMaterial(e,t){return this._materials.add(e),t&&this._addTag(t,e),e}trackTexture(e,t){return this._textures.add(e),t&&this._addTag(t,e),e}trackObject(e,t){return this._objects.add(e),t&&this._addTag(t,e),e}disposeObject(e){e.traverse(t=>{if(t.geometry&&(t.geometry.dispose(),this._geometries.delete(t.geometry)),t.material){const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n){for(const r of Object.keys(i)){const o=i[r];o&&o.isTexture&&(o.dispose(),this._textures.delete(o))}i.dispose(),this._materials.delete(i)}}}),e.parent&&e.parent.remove(e),this._objects.delete(e)}disposeByTag(e){const t=this._tags.get(e);if(t){for(const n of t)n.isBufferGeometry?(n.dispose(),this._geometries.delete(n)):n.isMaterial?(n.dispose(),this._materials.delete(n)):n.isTexture?(n.dispose(),this._textures.delete(n)):n.isObject3D&&this.disposeObject(n);this._tags.delete(e)}}disposeAll(){for(const e of this._geometries)e.dispose();for(const e of this._materials)e.dispose();for(const e of this._textures)e.dispose();for(const e of this._objects)e.parent&&e.parent.remove(e);this._geometries.clear(),this._materials.clear(),this._textures.clear(),this._objects.clear(),this._tags.clear()}get stats(){return{geometries:this._geometries.size,materials:this._materials.size,textures:this._textures.size,objects:this._objects.size}}_addTag(e,t){this._tags.has(e)||this._tags.set(e,new Set),this._tags.get(e).add(t)}dispose(){this.disposeAll(),Hn._instance=null}};Us(Hn,"_instance",null);let yo=Hn;class Ps{constructor(e={}){if(new.target===Ps)throw new Error("[ProceduralEntity] Cannot instantiate abstract class directly");this.uuid=_s.generateUUID(),this.type=this.constructor.name,this._params={seed:42,...e},this.rng=new Lu(this._params.seed),this.uniforms=cr.getInstance(),this.gc=yo.getInstance(),this._geometry=null,this._material=null,this._mesh=null,this._built=!1,this._localUniforms=new Map}_buildGeometry(){throw new Error(`[${this.type}] _buildGeometry() must be implemented`)}_buildMaterial(){throw new Error(`[${this.type}] _buildMaterial() must be implemented`)}_buildMesh(){return new nt(this._geometry,this._material)}build(){return this._built&&this.dispose(),this.rng.reset(),this._geometry=this._buildGeometry(),this.gc.trackGeometry(this._geometry,this.uuid),this._material=this._buildMaterial(),this.gc.trackMaterial(this._material,this.uuid),this._mesh=this._buildMesh(),this._mesh.userData.proceduralEntity=this,this._mesh.userData.entityType=this.type,this.gc.trackObject(this._mesh,this.uuid),this._built=!0,this}getObject3D(){return this._built||this.build(),this._mesh}addTo(e){return e.add(this.getObject3D()),this}setPosition(e,t,n){return this.getObject3D().position.set(e,t,n),this}setRotation(e,t,n){return this.getObject3D().rotation.set(e,t,n),this}setScale(e){const t=this.getObject3D();return typeof e=="number"?t.scale.setScalar(e):t.scale.set(e[0],e[1],e[2]),this}updateParams(e){return Object.assign(this._params,e),e.seed!==void 0&&this.rng.seed(e.seed),this.rebuild()}rebuild(){var r,o,a,l;const e=(r=this._mesh)==null?void 0:r.parent,t=(o=this._mesh)==null?void 0:o.position.clone(),n=(a=this._mesh)==null?void 0:a.rotation.clone(),i=(l=this._mesh)==null?void 0:l.scale.clone();return this.dispose(),this.build(),e&&e.add(this._mesh),t&&this._mesh.position.copy(t),n&&this._mesh.rotation.copy(n),i&&this._mesh.scale.copy(i),this}dispose(){this._mesh&&this.gc.disposeObject(this._mesh),this._geometry=null,this._material=null,this._mesh=null,this._built=!1}clone(e={}){const t=this.constructor;return new t({...this._params,...e}).build()}serialize(){return{type:this.type,params:{...this._params},position:this._mesh?this._mesh.position.toArray():[0,0,0],rotation:this._mesh?[this._mesh.rotation.x,this._mesh.rotation.y,this._mesh.rotation.z]:[0,0,0],scale:this._mesh?this._mesh.scale.toArray():[1,1,1]}}}class Yn extends ut{constructor(e={}){const t=cr.getInstance(),i={...t.getGlobalUniformsClone(),...de.lights,...e.uniforms||{}};super({vertexShader:e.vertexShader||Yn.defaultVertexShader(),fragmentShader:e.fragmentShader||Yn.defaultFragmentShader(),uniforms:i,transparent:e.transparent??!1,side:e.side??Pt,depthWrite:e.depthWrite??!0,lights:e.lights??!0,glslVersion:ol}),this._entityType=e.entityType||"generic",t.subscribe(this,["uTime","uDeltaTime","uResolution"])}static defaultVertexShader(){return`
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
    `}}const Rt=class Rt{static register(e,t,n={}){return Rt._registry.set(e,t),Object.keys(n).length>0&&Rt._presets.set(e,n),Rt}static create(e,t={}){const n=Rt._registry.get(e);if(!n)throw new Error(`[ProceduralFactory] Unknown entity: '${e}'. Did you forget to register it?`);const r={...Rt._presets.get(e)||{},...t};return new n(r)}static build(e,t={}){return Rt.create(e,t).build()}static createBatch(e,t,n,i=42){let r=i;const o={next(){r|=0,r=r+1831565813|0;let l=Math.imul(r^r>>>15,1|r);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296},range(l,c){return l+this.next()*(c-l)}},a=[];for(let l=0;l<t;l++){const c=n(l,o);a.push(Rt.create(e,{seed:i+l,...c}))}return a}static registerPreset(e,t,n){const i=`${e}::${t}`;return Rt._presets.set(i,n),Rt}static createFromPreset(e,t,n={}){const i=`${e}::${t}`,r=Rt._presets.get(i)||{};return Rt.create(e,{...r,...n})}static listRegistered(){return[...Rt._registry.keys()]}static has(e){return Rt._registry.has(e)}static clear(){Rt._registry.clear(),Rt._presets.clear()}};Us(Rt,"_registry",new Map),Us(Rt,"_presets",new Map);let Ts=Rt;const io={rose:{size:.75,dx:.4,dy:.8,petals:7,rings:14,startRx:2.42,zOff:.5,maxScale:2.2,maxR:.1,bowl:.35,taper:.75,curl:1.5,curlV:.15,twist:.4,twistV:0,c1:"#ffffff",c2:"#ff0000"},lotus:{size:1.2,dx:.55,dy:1,petals:6,rings:18,startRx:1.8,zOff:.3,maxScale:2.5,maxR:.15,bowl:1.2,taper:.75,curl:.8,curlV:.1,twist:.1,twistV:0,c1:"#fff0f5",c2:"#ff69b4"},chrysanthemum:{size:1.6,dx:.15,dy:.5,petals:12,rings:20,startRx:2.8,zOff:.15,maxScale:1.8,maxR:.05,bowl:.15,taper:.25,curl:2,curlV:.3,twist:.2,twistV:.1,c1:"#fffff0",c2:"#ffd700"},cherry:{size:.55,dx:.35,dy:.55,petals:5,rings:10,startRx:2,zOff:.4,maxScale:2,maxR:.08,bowl:.2,taper:.6,curl:.6,curlV:.1,twist:.1,twistV:0,c1:"#fff5f5",c2:"#ffb7c5"},tulip:{size:1,dx:.5,dy:.9,petals:6,rings:8,startRx:1.6,zOff:.2,maxScale:2.8,maxR:.02,bowl:.8,taper:1,curl:.4,curlV:.05,twist:0,twistV:0,c1:"#ff3333",c2:"#ff6600"},lily:{size:1.4,dx:.6,dy:1.2,petals:6,rings:12,startRx:2.2,zOff:.35,maxScale:2.4,maxR:.12,bowl:.6,taper:.55,curl:1.8,curlV:.2,twist:.3,twistV:.1,c1:"#ffffff",c2:"#ffcc00"}};function fl(s){const e=s.replace("#","");return[parseInt(e.substring(0,2),16)/255,parseInt(e.substring(2,4),16)/255,parseInt(e.substring(4,6),16)/255]}function Dh(s,e,t){const n=fl(s),i=fl(e);return[n[0]+(i[0]-n[0])*t,n[1]+(i[1]-n[1])*t,n[2]+(i[2]-n[2])*t]}function Qv(s,e,t){return t<.5?Dh(s,e,t*2):Dh(e,s,(t-.5)*2)}function ex(s){const e=fl(s);return new P(e[0],e[1],e[2])}function tx(s,e,t){const n=new kl;return n.moveTo(0,0),n.quadraticCurveTo(e,t,0,s),n.quadraticCurveTo(-e,t,0,0),new Co(n,{curveSegments:24,steps:1,depth:.005,bevelEnabled:!0,bevelThickness:.005,bevelSize:.01,bevelSegments:10})}class Iu extends Ps{constructor(e={}){const t=io[e.preset||"rose"]||io.rose;super({preset:"rose",rings:t.rings,petals:t.petals,color1:t.c1,color2:t.c2,size:t.size,dx:t.dx,dy:t.dy,maxRadius:t.maxR,maxScale:t.maxScale,startRx:t.startRx,zOffsetCoef:t.zOff,bowlDepth:t.bowl,taperPow:t.taper,baseCurl:t.curl,curlVar:t.curlV,baseTwist:t.twist,twistVar:t.twistV,metalness:0,roughness:.43,transmission:.17,sheen:.47,sheenColor:"#ff8899",sheenRoughness:.48,clearcoat:.1,veinStr:.6,veinWidth:3e3,veinColor:"#2d5a1e",midribStr:.7,lateralStr:.5,edgeLight:.2,hueShift:0,layerGap:.005,scaleDecay:.4,innerShrink:.9,...e}),this._shaderUniforms=null,this._curlAttr=null,this._twistAttr=null,this._randCurl=null,this._randTwist=null}_buildGeometry(){const e=this._params;return tx(e.size,e.dx,e.dy)}_buildMaterial(){const e=this._params;this._shaderUniforms={uBowlDepth:{value:e.bowlDepth},uVeinStr:{value:e.veinStr},uVeinWidth:{value:e.veinWidth},uVeinColor:{value:ex(e.veinColor)},uMidribStr:{value:e.midribStr},uLateralStr:{value:e.lateralStr},uSecStr:{value:.2},uMicroStr:{value:.06},uTaperPow:{value:e.taperPow},uEdgeLight:{value:e.edgeLight},uHueShift:{value:e.hueShift},uPetalSize:{value:e.size},uPetalDx:{value:e.dx}};const t=new Mn({metalness:e.metalness,roughness:e.roughness,transmission:e.transmission,thickness:.5,sheen:e.sheen,sheenColor:new se(e.sheenColor),sheenRoughness:e.sheenRoughness,clearcoat:e.clearcoat,side:Pt}),n=this._shaderUniforms;return t.onBeforeCompile=i=>{Object.assign(i.uniforms,n),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},t}_buildMesh(){const e=this._params,t=2e3,n=e.rings*e.petals,i=new pr(this._geometry,this._material,t);i.castShadow=!0,i.receiveShadow=!0,i.count=n;const r=new Float32Array(t),o=new Float32Array(t);this._randCurl=new Float32Array(t),this._randTwist=new Float32Array(t);for(let a=0;a<t;a++)this._randCurl[a]=(this.rng.next()-.5)*2,this._randTwist[a]=(this.rng.next()-.5)*2;return this._curlAttr=new Di(r,1).setUsage(pi),this._twistAttr=new Di(o,1).setUsage(pi),i.geometry.setAttribute("aCurl",this._curlAttr),i.geometry.setAttribute("aTwist",this._twistAttr),this._updateLayout(i),this._updateColors(i),i}_updateLayout(e){const t=this._params,n=t.rings,i=t.petals,r=new it,o=Date.now()*5e-5%1,a=2*Math.PI/i,l=2*t.startRx/n,c=this._curlAttr.array,u=this._twistAttr.array;for(let h=0;h<n;h++){const d=(h+o*n)%n,f=Math.sin(Math.PI*d/n),g=h*t.zOffsetCoef*Math.PI/n,_=f*t.maxRadius,m=h*t.layerGap,p=1-t.scaleDecay*(1-f),b=f<.15?_s.lerp(1-t.innerShrink,1,f/.15):1,x=f*t.maxScale*p*b;for(let v=0;v<i;v++){const R=h*i+v,T=a*v+g;r.position.set(_*Math.cos(T),_*Math.sin(T),m),r.rotation.set(t.startRx-d*l,0,T-Math.PI/2,"ZXY"),r.scale.setScalar(x),r.updateMatrix(),e.setMatrixAt(R,r.matrix),c[R]=t.baseCurl*(1-f*.6)+this._randCurl[R]*t.curlVar,u[R]=t.baseTwist*f*.8+this._randTwist[R]*t.twistVar}}e.instanceMatrix.needsUpdate=!0,this._curlAttr.needsUpdate=!0,this._twistAttr.needsUpdate=!0}_updateColors(e){const t=this._params,n=t.rings,i=t.petals,r=new se;for(let o=0;o<n;o++)for(let a=0;a<i;a++){const l=o*i+a,c=Qv(t.color1,t.color2,a/i);r.setRGB(c[0],c[1],c[2]),e.setColorAt(l,r)}e.instanceColor&&(e.instanceColor.needsUpdate=!0)}update(){return this._mesh&&(this._mesh.count=this._params.rings*this._params.petals,this._updateLayout(this._mesh)),this}setPreset(e){const t=io[e];return t?(this._params.preset=e,Object.assign(this._params,{size:t.size,dx:t.dx,dy:t.dy,petals:t.petals,rings:t.rings,startRx:t.startRx,zOffsetCoef:t.zOff,maxScale:t.maxScale,maxRadius:t.maxR,bowlDepth:t.bowl,taperPow:t.taper,baseCurl:t.curl,curlVar:t.curlV,baseTwist:t.twist,twistVar:t.twistV,color1:t.c1,color2:t.c2}),this.rebuild()):this}static get PRESETS(){return io}}Ts.register("TroisFlower",Iu,{preset:"rose"});const Mo=[{n:5,len:.22,wid:.16,open:.22,curl:.7},{n:7,len:.32,wid:.22,open:.42,curl:.55},{n:9,len:.42,wid:.3,open:.62,curl:.4},{n:11,len:.52,wid:.38,open:.82,curl:.28},{n:13,len:.6,wid:.44,open:1.02,curl:.18},{n:14,len:.66,wid:.48,open:1.2,curl:.1},{n:15,len:.7,wid:.52,open:1.38,curl:.05}],Lh=Mo.length,Ih=Mo.reduce((s,e)=>s+e.n,0);class nx{constructor(e={}){this.options={petalScale:1,petalLength:1,petalWidth:1,openAngleScale:1,bloomWaveAmp:.14,cycleDuration:5,breatheAmp:.004,radialPulse:.025,energyWaveSpeed:.4,energyWaveStrength:.22,fresnelStrength:.38,coreGlow:.55,specularStr:.14,sssStrength:.25,cameraDistance:2.2,autoRotateSpeed:.015,mouseParallaxH:.45,mouseParallaxV:.2,smoothFactor:.04,stemY:-.28,stemLength:.55,...e},this._group=new jt,this._clock=new Fi,this._mouse={x:0,y:0},this._smooth={x:0,y:0},this._mesh=null,this._stemMesh=null,this._bgMesh=null,this._material=null,this._bgMaterial=null,this._dummy=new it,this._initMatrices=[],this._heights=[],this._layerRatios=[],this.camera=new yt(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,1,this.options.cameraDistance)}build(){const e=this._createPetalGeo();return this._material=this._createMaterial(),this._mesh=new pr(e,this._material,Ih),this._mesh.frustumCulled=!1,this._precomputeInstances(),this._applyInstances(),this._group.add(this._mesh),this._createStem(),this._createBackground(),this}addTo(e){return e.add(this._group),this._bgMesh&&e.add(this._bgMesh),this}setMouse(e,t){this._mouse.x=e/window.innerWidth*2-1,this._mouse.y=-(t/window.innerHeight)*2+1}update(){const e=this._clock.getDelta(),t=this.options,n=this._clock.getElapsedTime();this._smooth.x+=(this._mouse.x-this._smooth.x)*t.smoothFactor,this._smooth.y+=(this._mouse.y-this._smooth.y)*t.smoothFactor;const i=n*t.autoRotateSpeed+this._smooth.x*t.mouseParallaxH,r=.18+this._smooth.y*t.mouseParallaxV;if(this.camera.position.set(Math.sin(i)*t.cameraDistance*Math.cos(r),Math.sin(r)*t.cameraDistance+.08,Math.cos(i)*t.cameraDistance*Math.cos(r)),this.camera.lookAt(this._smooth.x*-.05,this._smooth.y*.03,0),this._material){const o=this._material.uniforms;o.uTime.value+=e,o.uBreathAmp.value=t.breatheAmp,o.uEnergySpeed.value=t.energyWaveSpeed,o.uEnergyStr.value=t.energyWaveStrength,o.uFresnelStr.value=t.fresnelStrength,o.uCoreGlow.value=t.coreGlow}this._bgMaterial&&(this._bgMaterial.uniforms.uTime.value+=e),this._animateInstances(this._material.uniforms.uTime.value)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}dispose(){this._mesh&&(this._mesh.geometry.dispose(),this._material.dispose(),this._group.remove(this._mesh)),this._stemMesh&&(this._stemMesh.geometry.dispose(),this._stemMesh.material.dispose(),this._group.remove(this._stemMesh)),this._bgMesh&&(this._bgMesh.geometry.dispose(),this._bgMaterial.dispose(),this._bgMesh.parent&&this._bgMesh.parent.remove(this._bgMesh)),this._group.parent&&this._group.parent.remove(this._group)}_createPetalGeo(){const n=[],i=[],r=[];for(let a=0;a<=10;a++){const l=a/10,c=(l-.5)*2;for(let u=0;u<=18;u++){const h=u/18,d=Math.pow(Math.sin(h*Math.PI*.48),.42)*Math.pow(1-Math.pow(h,1.7),.52),f=.45*(1-.25*h),g=.28*d,_=g*Math.sin(c*f),m=g*(1-Math.cos(c*f)),p=.04*(1-.4*h)*(1-c*c),b=.03*h*h;n.push(_,m+p+b,h),i.push(h,l)}}for(let a=0;a<10;a++)for(let l=0;l<18;l++){const c=a*19+l;r.push(c,c+18+1,c+1,c+1,c+18+1,c+18+2)}const o=new dt;return o.setAttribute("position",new gt(n,3)),o.setAttribute("uv",new gt(i,2)),o.setIndex(r),o.computeVertexNormals(),o}_precomputeInstances(){const e=this._dummy;let t=0;Mo.forEach((n,i)=>{const r=i/(Lh-1);for(let o=0;o<n.n;o++){const a=o/n.n*Math.PI*2+(i%2?Math.PI/n.n:0),l=Math.sin(t*137.508+i*42),c=Math.cos(t*73+i*31),u=.02+.14*r,h=n.open+.04*c,d=u*Math.sin(h)*Math.cos(a+.05*l),f=u*Math.sin(h)*Math.sin(a+.05*l),g=u*Math.cos(h);e.position.set(d,g,f);const _=new P(d,g,f).normalize();e.lookAt(e.position.clone().add(_));const m=n.len*(1+.06*l),p=n.wid*(1+.05*c);e.scale.set(p,p*.85,m),e.rotation.x+=.05*l,e.rotation.z+=.04*c,e.updateMatrix(),this._initMatrices.push(e.matrix.clone()),this._heights.push(1-r),this._layerRatios.push(r),t++}})}_applyInstances(){for(let e=0;e<Ih;e++)this._mesh.setMatrixAt(e,this._initMatrices[e]);this._mesh.geometry.setAttribute("aHeight",new Di(new Float32Array(this._heights),1)),this._mesh.geometry.setAttribute("aLayer",new Di(new Float32Array(this._layerRatios),1)),this._mesh.instanceMatrix.needsUpdate=!0}_animateInstances(e){const t=this.options,n=this._dummy,i=e%t.cycleDuration/t.cycleDuration;let r=0;Mo.forEach((o,a)=>{const l=a/(Lh-1),c=i-l*.35,u=.14*Math.sin(c*Math.PI*2),h=.025*Math.sin(c*Math.PI*2);for(let d=0;d<o.n;d++){const f=Math.sin(r*137.508+a*42),g=Math.cos(r*73+a*31),_=d/o.n*Math.PI*2+(a%2?Math.PI/o.n:0)+.05*f,m=.02+.14*l+h,p=o.open+.04*g+u,b=m*Math.sin(p)*Math.cos(_),x=m*Math.sin(p)*Math.sin(_),v=m*Math.cos(p);n.position.set(b,v,x);const R=new P(b,v,x).normalize();n.lookAt(n.position.clone().add(R));const T=o.len*(1+.06*f),E=o.wid*(1+.05*g);n.scale.set(E,E*.85,T),n.rotation.x+=.05*f,n.rotation.z+=.04*g,n.updateMatrix(),this._mesh.setMatrixAt(r,n.matrix),r++}}),this._mesh.instanceMatrix.needsUpdate=!0}_createMaterial(){return new ut({uniforms:{uTime:{value:0},uBreathAmp:{value:.004},uEnergySpeed:{value:.4},uEnergyStr:{value:.22},uFresnelStr:{value:.38},uCoreGlow:{value:.55}},vertexShader:ix,fragmentShader:sx,side:Pt,transparent:!0,depthWrite:!1,depthTest:!0})}_createStem(){const e=this.options,t=new zl(.014,.026,e.stemLength,8,6),n=new ut({vertexShader:`
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
        }`});this._stemMesh=new nt(t,n),this._stemMesh.position.set(0,e.stemY,0),this._group.add(this._stemMesh)}_createBackground(){this._bgMaterial=new ut({depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.9999, 1.0);
        }`,fragmentShader:rx}),this._bgMesh=new nt(new fn(2,2),this._bgMaterial),this._bgMesh.renderOrder=-1,this._bgMesh.frustumCulled=!1}}const ix=`
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
`,sx=`
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
`,rx=`
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
`;function Nh(s,e){if(e===Ad)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===sl||e===nu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===sl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Nu extends Ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new wx(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Qs.extractUrlBase(e);o=Qs.resolveURL(c,this.path)}else o=Qs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Hl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Uu){try{o[qe.KHR_BINARY_GLTF]=new Tx(e)}catch(h){i&&i(h);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Bx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:o[h]=new lx;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new Ex(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[h]=new Ax;break;case qe.KHR_MESH_QUANTIZATION:o[h]=new Cx;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ox(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ax{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new se(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Xt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Js(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vr(u),c.distance=h;break;case"spot":c=new Rs(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,kn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class lx{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return qn}extendParams(e,t,n){const i=[];e.color=new se(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(i)}}class cx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class hx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Z(a,a)}return Promise.all(r)}}class ux{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class dx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class fx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new se(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Tt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class px{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class mx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new se().setRGB(a[0],a[1],a[2],Xt),Promise.all(r)}}class gx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _x{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new se().setRGB(a[0],a[1],a[2],Xt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Tt)),Promise.all(r)}}class vx{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class xx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class yx{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Mx{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Sx{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bx{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class wx{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==an.TRIANGLES&&c.mode!==an.TRIANGLE_STRIP&&c.mode!==an.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new ze,m=new P,p=new An,b=new P(1,1,1),x=new pr(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&b.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(m,p,b));for(const v in l)if(v==="_COLOR_0"){const R=l[v];x.instanceColor=new Di(R.array,R.itemSize,R.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);it.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Uu="glTF",Ws=12,Uh={JSON:1313821514,BIN:5130562};class Tx{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Uu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ws,r=new DataView(e,Ws);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Uh.JSON){const c=new Uint8Array(e,Ws+o,a);this.content=n.decode(c)}else if(l===Uh.BIN){const c=Ws+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ex{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=pl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=pl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=cs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,Xt,d)})})}}class Ax{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Cx{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Fu extends gr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,b=1-m,x=p-d+h;for(let v=0;v!==a;v++){const R=o[_+v+a],T=o[_+v+l]*u,E=o[g+v+a],A=o[g+v]*u;r[v]=b*R+x*T+m*E+p*A}return r}}const Rx=new An;class Px extends Fu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Rx.fromArray(r).normalize().toArray(r),r}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fh={9728:Dt,9729:Mt,9984:qh,9985:ro,9986:Xs,9987:Tn},Oh={33071:hn,33648:mo,10497:wn},pa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Dx={CUBICSPLINE:void 0,LINEAR:ir,STEP:nr},ma={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new mr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yn})),s.DefaultMaterial}function bi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function kn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ix(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Nx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ux(s){let e;const t=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ga(t.attributes):e=s.indices+":"+ga(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ga(s.targets[n]);return e}function ga(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ml(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ox=new ze;class Bx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ox,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ru(this.options.manager):this.textureLoader=new yv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return bi(r,a,i),kn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Qs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=pa[i.type],a=cs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new mt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=pa[i.type],c=cs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(b);x||(_=new c(a,p*f,i.count*f/u),x=new g_(_,f/u),t.cache.add(b,x)),m=new Ll(x,l,d%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new mt(_,l,g);if(i.sparse!==void 0){const p=pa.SCALAR,b=cs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,R=new b(o[1],x,i.sparse.count*p),T=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,A=R.length;E<A;E++){const M=R[E];if(m.setX(M,T[E*l]),l>=2&&m.setY(M,T[E*l+1]),l>=3&&m.setZ(M,T[E*l+2]),l>=4&&m.setW(M,T[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Fh[d.magFilter]||Mt,u.minFilter=Fh[d.minFilter]||Tn,u.wrapS=Oh[d.wrapS]||wn,u.wrapT=Oh[d.wrapT]||wn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Dt&&u.minFilter!==Mt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Bt(_);m.needsUpdate=!0,d(m)}),t.load(Qs.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),kn(h,o),h.userData.mimeType=o.mimeType||Fx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ul,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new di,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return mr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=i[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new se(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Xt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);const u=r.alphaMode||ma.OPAQUE;if(u===ma.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ma.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==qn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Z(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==qn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==qn){const h=r.emissiveFactor;a.emissive=new se().setRGB(h[0],h[1],h[2],Xt)}return r.emissiveTexture!==void 0&&o!==qn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),kn(h,r),t.associations.set(h,{materials:e}),r.extensions&&bi(i,h,r),h})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Bh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Ux(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Bh(new dt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Lx(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const b=c[f];if(m.mode===an.TRIANGLES||m.mode===an.TRIANGLE_STRIP||m.mode===an.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new v_(_,b):new nt(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===an.TRIANGLE_STRIP?p.geometry=Nh(p.geometry,nu):m.mode===an.TRIANGLE_FAN&&(p.geometry=Nh(p.geometry,sl));else if(m.mode===an.LINES)p=new Ai(_,b);else if(m.mode===an.LINE_STRIP)p=new Nl(_,b);else if(m.mode===an.LINE_LOOP)p=new M_(_,b);else if(m.mode===an.POINTS)p=new Fl(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Nx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),kn(p,r),m.extensions&&bi(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&bi(i,h[0],r),h[0];const d=new jt;r.extensions&&bi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(_s.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Il(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let b=0,x=d.length;b<x;b++){const v=d[b],R=f[b],T=g[b],E=_[b],A=m[b];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,R,T,E,A);if(M)for(let y=0;y<M.length;y++)p.push(M[y])}return new lv(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ox)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new xu:c.length>1?u=new jt:c.length===1?u=c[0]:u=new it,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),kn(u,r),r.extensions&&bi(n,u,r),r.matrix!==void 0){const h=new ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new jt;n.name&&(r.name=i.createUniqueName(n.name)),kn(r,n),n.extensions&&bi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof dn||d instanceof Bt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];ci[r.path]===ci.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ci[r.path]){case ci.weights:c=Ms;break;case ci.rotation:c=Ss;break;case ci.position:case ci.scale:c=bs;break;default:switch(n.itemSize){case 1:c=Ms;break;case 2:case 3:default:c=bs;break}break}const u=i.interpolation!==void 0?Dx[i.interpolation]:ir,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ci[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ml(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ss?Px:Fu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zx(s,e,t){const n=e.attributes,i=new ei;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=ml(cs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ml(cs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Cn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Bh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=pl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ke.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),kn(s,e),zx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ix(s,e.targets,t):s})}const kx={},zh={genjin:{type:"stem",growStart:0,growEnd:.4},left1:{type:"leaf",growStart:.08,growEnd:.45},left2:{type:"leaf",growStart:.12,growEnd:.48},left3:{type:"leaf",growStart:.15,growEnd:.5},huarui:{type:"pistil",growStart:.35,growEnd:.6},huaban1:{type:"petal",growStart:.38,growEnd:.85,order:0},huaban4:{type:"petal",growStart:.41,growEnd:.87,order:1},huaban2:{type:"petal",growStart:.44,growEnd:.89,order:2},huaban5:{type:"petal",growStart:.47,growEnd:.91,order:3},huaban3:{type:"petal",growStart:.5,growEnd:.93,order:4},huaban6:{type:"petal",growStart:.53,growEnd:.95,order:5}};function _a(s){return 1-Math.pow(1-s,3)}function va(s){return 1+2.7*Math.pow(s-1,3)+1.7*Math.pow(s-1,2)}class Vx{constructor(e={}){this.options={autoPlay:!0,growthDuration:8,loopMode:"loop",petalOpenAngle:.3,petalScale:1,petalCurl:.4,stemHeight:1,stemBend:.05,leafScale:1,leafDroop:.2,windStrength:1,windSpeed:.5,sssStrength:.3,cameraDistance:3.5,autoRotateSpeed:.01,mouseParallaxH:.3,mouseParallaxV:.15,smoothFactor:.04,activeTab:1,...e},this._group=new jt,this._group.position.set(0,-.15,0),this._clock=new Fi,this._time=0,this._mouse={x:0,y:0},this._target={x:0,y:0},this._bgMesh=null,this._bgMat=null,this._lightGroup=new jt,this._loaded=!1,this._parts=new Map,this.camera=new yt(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,.2,.8)}build(){return this._createBackground(),this._createLights(),this._loadModel(),this}addTo(e){return e.add(this._group),e.add(this._lightGroup),this._bgMesh&&e.add(this._bgMesh),this}setMouse(e,t){this._mouse.x=(e/window.innerWidth-.5)*2,this._mouse.y=(t/window.innerHeight-.5)*2}update(){const e=this._clock.getDelta(),t=this.options;this._time+=e;const n=this._time;if(this._target.x+=(this._mouse.x*t.mouseParallaxH-this._target.x)*t.smoothFactor,this._target.y+=(-this._mouse.y*t.mouseParallaxV-this._target.y)*t.smoothFactor,this.camera.position.x=Math.sin(t.autoRotateSpeed*n+this._target.x)*t.cameraDistance*.23,this.camera.position.z=Math.cos(t.autoRotateSpeed*n+this._target.x)*t.cameraDistance*.23,this.camera.position.y=.15+this._target.y,this.camera.lookAt(0,.08,0),this._bgMat&&(this._bgMat.uniforms.uTime.value+=e),!this._loaded)return;let i;if(t.autoPlay){const r=t.growthDuration;if(t.loopMode==="loop")i=n%r/r;else if(t.loopMode==="pingpong"){const o=n%(r*2)/r;i=o<=1?o:2-o}else i=Math.min(n/r,1)}else i=Math.max(0,Math.min(1,t.growthProgress||0));this._animateParts(i,n)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}dispose(){this._group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}),this._group.parent&&this._group.parent.remove(this._group),this._lightGroup.parent&&this._lightGroup.parent.remove(this._lightGroup),this._bgMesh&&(this._bgMesh.geometry.dispose(),this._bgMat.dispose(),this._bgMesh.parent&&this._bgMesh.parent.remove(this._bgMesh))}_loadModel(){const e=new Nu,t=new Ru,n=typeof kx<"u"&&"/3DProcedural_Ecosystem/"||"/",i=t.load(n+"model/color.png");i.flipY=!0,i.colorSpace=Tt;const r=t.load(n+"model/roughness.png");r.flipY=!0,e.load(n+"model/tulip-split.glb",o=>{const a=o.scene.clone(!0);a.traverse(l=>{if(!l.isMesh)return;const c=zh[l.name],u=new mr({map:i,roughnessMap:r,roughness:.55,metalness:0,side:Pt,transparent:!0,opacity:0,envMapIntensity:.3});l.material=u,l.castShadow=!0,l.receiveShadow=!0;let h=null,d=0,f=0,g=1;if(c&&(c.type==="petal"||c.type==="leaf")){l.geometry=l.geometry.clone();const _=l.geometry.getAttribute("position");h=new Float32Array(_.array);let m=1/0,p=-1/0;for(let b=0;b<_.count;b++){const x=h[b*3+2];x<m&&(m=x),x>p&&(p=x)}d=m,f=p,g=p-m||1}this._parts.set(l.name,{mesh:l,initPos:l.position.clone(),initQuat:l.quaternion.clone(),initScale:l.scale.clone(),mat:u,origPositions:h,zMin:d,zMax:f,zRange:g})}),this._group.add(a),this._loaded=!0})}_createLights(){const e=new mi(15261936,.6),t=new Js(16774638,1.8);t.position.set(3,5,2),t.castShadow=!0;const n=new Js(13682943,.7);n.position.set(-2,4,-3);const i=new Js(15788287,.3);i.position.set(0,-1,2);const r=new vr(16766176,.8,2,2);r.position.set(0,.25,.15);const o=new gv(12110079,2767386,.35);this._lightGroup.add(e,t,n,i,r,o)}_createBackground(){this._bgMat=new ut({depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }
      `,fragmentShader:Hx}),this._bgMesh=new nt(new fn(2,2),this._bgMat),this._bgMesh.renderOrder=-1,this._bgMesh.frustumCulled=!1}_animateParts(e,t){const n=this.options,i=Math.sin(t*n.windSpeed*.4)*n.windStrength,r=Math.cos(t*n.windSpeed*.3+1.5)*n.windStrength;this._parts.forEach((a,l)=>{const{mesh:c,initPos:u,initQuat:h,initScale:d,mat:f,origPositions:g,zMin:_,zRange:m}=a,p=zh[l];if(!p)return;const b=Math.max(0,Math.min(1,(e-p.growStart)/(p.growEnd-p.growStart))),x=p.order||0;if(c.position.copy(u),c.quaternion.copy(h),c.scale.copy(d),g){const v=c.geometry.getAttribute("position");v.array.set(g),v.needsUpdate=!0}this._animateGrowth(c,f,p,b,x,t,i,r,g,_,m),c.visible=b>.001});const o=Math.min(3*e,1);this._group.rotation.y=0,this._group.rotation.z=.003*i*o,this._group.rotation.x=.002*r*o}_animateGrowth(e,t,n,i,r,o,a,l,c,u,h){const d=this.options;if(n.type==="stem"){const f=_a(i);e.scale.set(e.scale.x*(.3+.7*f),e.scale.y*Math.max(.001,f),e.scale.z*(.3+.7*f)),t.opacity=Math.min(i*5,1),f>.3&&(e.rotateZ(.003*a*f),e.rotateX(.002*l*f))}else if(n.type==="leaf"){const f=va(i);e.scale.multiplyScalar(Math.max(.001,f)),t.opacity=Math.min(i*4,1),e.rotateY((1-f)*.6),e.rotateX((1-f)*.18),f>.3&&e.rotateZ(.008*Math.sin(o*d.windSpeed*.6+e.id*2)*d.windStrength*f)}else if(n.type==="pistil")t.opacity=_a(Math.min(i*2.5,1));else if(n.type==="petal"){t.opacity=_a(Math.min(i*2.5,1));const f=Math.max(.001,va(Math.min(i/.5,1)));e.scale.multiplyScalar(f);const g=va(Math.min(Math.max((i-.25)/.75,0),1)),_=1-g;if(_>.005&&(e.rotateX(-(.5*_)),e.rotateY(.08*_*(r%2===0?1:-1))),c&&h){const m=e.geometry.getAttribute("position"),p=m.array;let b=Math.min(i/.65,1);const v=1-(b<.5?4*b*b*b:1-Math.pow(-2*b+2,3)/2);for(let R=0;R<m.count;R++){const T=c[R*3+2],E=(T-u)/h;p[R*3+2]=T+E*E*v*3.5}m.needsUpdate=!0}if(g>.7){const m=(g-.7)/.3;e.rotateX(.005*Math.sin(o*(1+r*.18)+r*1.5)*m*d.windStrength),e.rotateZ(.004*Math.sin(o*(.7+r*.13)+r*2.1)*m*d.windStrength)}}}}const Hx=`
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
`;class Gx extends mv{constructor(e){super(e),this.type=sn}parse(e){const o=function(A,M){switch(A){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(M||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(M||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(M||""))}},h=function(A,M,y){M=M||1024;let O=A.pos,U=-1,B=0,G="",z=String.fromCharCode.apply(null,new Uint16Array(A.subarray(O,O+128)));for(;0>(U=z.indexOf(`
`))&&B<M&&O<A.byteLength;)G+=z,B+=z.length,O+=128,z+=String.fromCharCode.apply(null,new Uint16Array(A.subarray(O,O+128)));return-1<U?(A.pos+=B+U+1,G+z.slice(0,U)):!1},d=function(A){const M=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,B={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let G,z;for((A.pos>=A.byteLength||!(G=h(A)))&&o(1,"no header found"),(z=G.match(M))||o(3,"bad initial token"),B.valid|=1,B.programtype=z[1],B.string+=G+`
`;G=h(A),G!==!1;){if(B.string+=G+`
`,G.charAt(0)==="#"){B.comments+=G+`
`;continue}if((z=G.match(y))&&(B.gamma=parseFloat(z[1])),(z=G.match(D))&&(B.exposure=parseFloat(z[1])),(z=G.match(O))&&(B.valid|=2,B.format=z[1]),(z=G.match(U))&&(B.valid|=4,B.height=parseInt(z[1],10),B.width=parseInt(z[2],10)),B.valid&2&&B.valid&4)break}return B.valid&2||o(3,"missing format specifier"),B.valid&4||o(3,"missing image size specifier"),B},f=function(A,M,y){const D=M;if(D<8||D>32767||A[0]!==2||A[1]!==2||A[2]&128)return new Uint8Array(A);D!==(A[2]<<8|A[3])&&o(3,"wrong scanline width");const O=new Uint8Array(4*M*y);O.length||o(4,"unable to allocate buffer space");let U=0,B=0;const G=4*D,z=new Uint8Array(4),Y=new Uint8Array(G);let W=y;for(;W>0&&B<A.byteLength;){B+4>A.byteLength&&o(1),z[0]=A[B++],z[1]=A[B++],z[2]=A[B++],z[3]=A[B++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=D)&&o(3,"bad rgbe scanline format");let le=0,he;for(;le<G&&B<A.byteLength;){he=A[B++];const ve=he>128;if(ve&&(he-=128),(he===0||le+he>G)&&o(3,"bad scanline data"),ve){const Le=A[B++];for(let X=0;X<he;X++)Y[le++]=Le}else Y.set(A.subarray(B,B+he),le),le+=he,B+=he}const ce=D;for(let ve=0;ve<ce;ve++){let Le=0;O[U]=Y[ve+Le],Le+=D,O[U+1]=Y[ve+Le],Le+=D,O[U+2]=Y[ve+Le],Le+=D,O[U+3]=Y[ve+Le],U+=4}W--}return O},g=function(A,M,y,D){const O=A[M+3],U=Math.pow(2,O-128)/255;y[D+0]=A[M+0]*U,y[D+1]=A[M+1]*U,y[D+2]=A[M+2]*U,y[D+3]=1},_=function(A,M,y,D){const O=A[M+3],U=Math.pow(2,O-128)/255;y[D+0]=Pr.toHalfFloat(Math.min(A[M+0]*U,65504)),y[D+1]=Pr.toHalfFloat(Math.min(A[M+1]*U,65504)),y[D+2]=Pr.toHalfFloat(Math.min(A[M+2]*U,65504)),y[D+3]=Pr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),b=p.width,x=p.height,v=f(m.subarray(m.pos),b,x);let R,T,E;switch(this.type){case Lt:E=v.length/4;const A=new Float32Array(E*4);for(let y=0;y<E;y++)g(v,y*4,A,y*4);R=A,T=Lt;break;case sn:E=v.length/4;const M=new Uint16Array(E*4);for(let y=0;y<E;y++)_(v,y*4,M,y*4);R=M,T=sn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:b,height:x,data:R,header:p.string,gamma:p.gamma,exposure:p.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case Lt:case sn:o.colorSpace=Xt,o.minFilter=Mt,o.magFilter=Mt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}const Wx={};class Xx{constructor(){this.name="Bloom",this.category="flora",this._clock=new Fi,this._loaded=!1,this._renderer=null,this._scene=null,this._camera=null,this._group=null,this._petalMesh=null,this._stemMesh=null,this._particles=null,this._startProgress=0,this._groupRotY=0,this._animStartTime=-1,this._pointer=new Z(0,0),this._distortRT1=null,this._distortRT2=null,this._distortPhase=!1,this._distortScene=null,this._distortCamera=null,this._distortMat=null,this._lastNDC=new Z(.5,.5),this._currNDC=new Z(.5,.5),this._pointerDiff=0,this._isPointerEnter=!1,this._compScene=null,this._compCamera=null,this._compMat=null,this._mainRT=null,this._uStartProgress={value:0},this._uTime={value:0},this._uCycleDuration={value:6},this._uScaleMinY={value:.01},this._uScaleMaxY={value:.7},this._uScaleMinZ={value:.3},this._uScaleMaxZ={value:.4},this._uBendMin={value:1},this._uBendMax={value:-2},this._uBaseColor={value:new se(.75,.55,.95)},this._uRoughness={value:.55},this._uMetalness={value:0},this._uEmissiveColor={value:new se(.5,.3,.8)},this._uEmissiveIntensity={value:.8},this._uSSSIntensity={value:.6},this._uSSSColor={value:new se(.8,.5,1)},this._uFresnelPower={value:2.5},this._uFresnelColor={value:new se(.5,.35,.8)},this._uFresnelIntensity={value:.5},this._uPointLightIntensity={value:3.5},this._uPointLightColor={value:new se(.9,.7,1)},this._uPointLightY={value:.3},this._uEnvLightIntensity={value:1.2},this._uDirLightIntensity={value:.8},this._uTranslucency={value:.5},this._uShaderType={value:0},this._uRimWidth={value:.3},this._uRimColor={value:new se(.4,.27,.67)},this._uRimIntensity={value:0},this._params={particleGravity:.0098,distortStrength:.05}}getCamera(){return this._camera}getLights(){return[]}getBackground(){return null}async init(e,t){this._renderer=t,this._scene=new ls,this._createHTMLBackground(t),this._camera=new yt(75,window.innerWidth/window.innerHeight,.1,100),this._camera.position.set(0,4,.3),this._camera.zoom=2.5,this._camera.updateProjectionMatrix(),this._camera.lookAt(0,0,0),this._group=new jt,this._group.rotation.y=0,this._scene.add(this._group),await this._loadAssets(t),this._setupDistortion(t),this._setupComposite(t),this._bindPointer(t),t.toneMapping=En,this._animStartTime=this._clock.getElapsedTime(),this._loaded=!0}async _loadAssets(e){const t=new Nu,n=new Gx,i=typeof Wx<"u"&&"/3DProcedural_Ecosystem/"||"/",[r,o,a]=await Promise.all([new Promise((d,f)=>t.load(i+"model/bloom-petal.glb",d,void 0,f)),new Promise((d,f)=>t.load(i+"model/bloom-stem.glb",d,void 0,f)),new Promise((d,f)=>n.load(i+"model/dawn.hdr",d,void 0,f))]),l=new al(e);l.compileEquirectangularShader();const c=l.fromEquirectangular(a);this._scene.environment=c.texture,this._scene.environmentIntensity=.5,this._scene.environmentRotation=new Qt(0,-Math.PI/1.5,0),a.dispose(),l.dispose();const u=o.scene;u.position.set(0,-3.3,-.03),u.scale.setScalar(.8),u.traverse(d=>{d.isMesh&&(d.material=new mr({roughness:.4,metalness:0,color:new se(.88,.84,.92),emissive:new se(.25,.22,.32),emissiveIntensity:.5,envMapIntensity:1.2}))}),this._group.add(u),this._stemMesh=u,this._setupPetals(r);const h=new mi(8947882,.15);this._scene.add(h),this._ambientLight=h,this._setupParticles()}_setupPetals(e){let t=null,n=null;if(e.scene.traverse(a=>{a.isMesh&&!t&&(t=a.geometry,n=a.material)}),!t)return;n.map&&(n.map.colorSpace=Tt),n.emissiveMap&&(n.emissiveMap.colorSpace=Tt);const i=new ut({side:Pt,transparent:!0,uniforms:{uStartProgress:this._uStartProgress,uTime:this._uTime,uCycleDuration:this._uCycleDuration,uScaleMinY:this._uScaleMinY,uScaleMaxY:this._uScaleMaxY,uScaleMinZ:this._uScaleMinZ,uScaleMaxZ:this._uScaleMaxZ,uBendMin:this._uBendMin,uBendMax:this._uBendMax,tMap:{value:n.map},tEmissive:{value:n.emissiveMap},tNormal:{value:n.normalMap},uBaseColor:this._uBaseColor,uRoughness:this._uRoughness,uMetalness:this._uMetalness,uEmissiveColor:this._uEmissiveColor,uEmissiveIntensity:this._uEmissiveIntensity,uSSSIntensity:this._uSSSIntensity,uSSSColor:this._uSSSColor,uFresnelPower:this._uFresnelPower,uFresnelColor:this._uFresnelColor,uFresnelIntensity:this._uFresnelIntensity,uPointLightIntensity:this._uPointLightIntensity,uPointLightColor:this._uPointLightColor,uPointLightY:this._uPointLightY,uEnvLightIntensity:this._uEnvLightIntensity,uDirLightIntensity:this._uDirLightIntensity,uTranslucency:this._uTranslucency,uShaderType:this._uShaderType,uRimWidth:this._uRimWidth,uRimColor:this._uRimColor,uRimIntensity:this._uRimIntensity},vertexShader:`
        uniform float uStartProgress, uTime, uCycleDuration;
        uniform float uScaleMinY, uScaleMaxY, uScaleMinZ, uScaleMaxZ;
        uniform float uBendMin, uBendMax;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vViewDir;

        vec3 tslBend(vec3 p, float f) {
          if(abs(f) < 1e-5) return p;
          float a = p.x * f;
          float sa = sin(a), ca = cos(a);
          return vec3(
            -(p.y - 1.0/f) * sa,
            p.y * ca + (1.0 - ca) / f,
            p.z
          );
        }

        vec3 tslRotY(vec3 p, float a) {
          float c = cos(a), s = sin(a);
          return vec3(p.x*c + p.z*s, p.y, -p.x*s + p.z*c);
        }

        vec3 deform(vec3 pos) {
          float iid = float(gl_InstanceID);
          float po = iid / 64.0 * uCycleDuration;
          float nt = mod(uTime + po, uCycleDuration) / uCycleDuration;
          float bs = mix(uBendMin, uBendMax, uStartProgress);
          float cv = mix(6.28318, bs * 3.14159, nt);
          vec3 sf = mix(vec3(0.8, uScaleMinY, uScaleMinZ), vec3(0.8, uScaleMaxY, uScaleMaxZ), uStartProgress);
          float ya = 3.14159 * -0.3 * uStartProgress;

          pos *= sf;
          pos = tslBend(pos, cv);
          pos *= clamp(nt / 0.5, 0.0, 1.0);
          pos *= mix(0.8, 0.2, clamp((nt - 0.5) / 0.5, 0.0, 1.0));
          pos = tslRotY(pos, ya);
          return pos;
        }

        void main() {
          vUv = uv;

          vec3 pos = deform(position);

          // Finite difference 法线
          float e = 0.005;
          vec3 px = deform(position + vec3(e, 0.0, 0.0));
          vec3 pz = deform(position + vec3(0.0, 0.0, e));
          vec3 fdN = normalize(cross(pz - pos, px - pos));

          // 实例矩阵
          vec4 wp = instanceMatrix * vec4(pos, 1.0);
          vec4 worldPos4 = modelMatrix * wp;
          vWorldPos = worldPos4.xyz;

          // 法线: 实例旋转 + 模型旋转
          mat3 iRot = mat3(instanceMatrix);
          vNormal = normalize(mat3(modelMatrix) * iRot * fdN);

          // 视线方向
          vViewDir = normalize(cameraPosition - vWorldPos);

          gl_Position = projectionMatrix * viewMatrix * worldPos4;
        }
      `,fragmentShader:`
        uniform sampler2D tMap;
        uniform sampler2D tEmissive;
        uniform float uStartProgress;
        uniform float uTime;
        // 材质参数
        uniform vec3 uBaseColor;
        uniform float uRoughness;
        uniform float uMetalness;
        uniform vec3 uEmissiveColor;
        uniform float uEmissiveIntensity;
        uniform float uSSSIntensity;
        uniform vec3 uSSSColor;
        uniform float uFresnelPower;
        uniform vec3 uFresnelColor;
        uniform float uFresnelIntensity;
        uniform float uPointLightIntensity;
        uniform vec3 uPointLightColor;
        uniform float uPointLightY;
        uniform float uEnvLightIntensity;
        uniform float uDirLightIntensity;
        uniform float uTranslucency;
        uniform float uShaderType;
        uniform float uRimWidth;
        uniform vec3 uRimColor;
        uniform float uRimIntensity;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vViewDir;

        // ── 工具函数 ──
        vec3 rgb2hsv(vec3 c) {
          vec4 K = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);
          vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
          vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
          float d = q.x - min(q.w, q.y);
          float e = 1.0e-10;
          return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
        }

        vec3 hsv2rgb(vec3 c) {
          vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
          vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
          return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }

        // ── 光照计算 (共用) ──
        struct LightResult {
          vec3 pointDiff;
          vec3 pointSSS;
          vec3 hemi;
          vec3 dir;
          vec3 dirSSS;
          float fresnel;
          float attenuation;
          vec3 Lp;
          vec3 L;
        };

        LightResult calcLighting(vec3 N, vec3 V, vec3 worldPos) {
          LightResult r;

          // 中心点光源
          vec3 plPos = vec3(0.0, uPointLightY, 0.0);
          vec3 toLight = plPos - worldPos;
          float dist = length(toLight);
          r.Lp = normalize(toLight);
          r.attenuation = 1.0 / (1.0 + 2.0 * dist + dist * dist);
          float NdLp = max(dot(N, r.Lp), 0.0) * 0.6 + 0.4;
          r.pointDiff = uPointLightColor * uPointLightIntensity * r.attenuation * NdLp;

          // 点光SSS
          float pSSS = max(dot(-N, r.Lp), 0.0);
          pSSS = pow(pSSS, 1.2);
          r.pointSSS = uSSSColor * pSSS * r.attenuation * 2.5;

          // 半球光
          float h = N.y * 0.35 + 0.55;
          vec3 hBot = uBaseColor * 0.4;
          vec3 hTop = uBaseColor * 1.1;
          r.hemi = mix(hBot, hTop, h) * uEnvLightIntensity;

          // 方向光
          r.L = normalize(vec3(0.2, 0.9, 0.4));
          float NdL = dot(N, r.L) * 0.5 + 0.5;
          NdL = NdL * NdL;
          r.dir = vec3(0.6, 0.5, 0.8) * NdL * uDirLightIntensity;

          // 方向光背光SSS
          float bs = max(dot(-N, r.L), 0.0);
          bs = pow(bs, 1.5);
          r.dirSSS = uSSSColor * bs;

          // 菲涅尔
          r.fresnel = pow(1.0 - max(dot(N, V), 0.0), uFresnelPower);

          return r;
        }

        // ═══════════════════════════════════════
        // Shader 0: SSS 次表面散射 (默认 — 通透花瓣)
        // ═══════════════════════════════════════
        vec4 shaderSSS(vec3 base, vec3 N, vec3 V, vec3 worldPos, float fadeIn, vec4 tex) {
          LightResult li = calcLighting(N, V, worldPos);

          vec3 diffuse = base * (li.hemi + li.dir + li.pointDiff);
          vec3 sss = base * li.dirSSS * uSSSIntensity;
          vec3 pSSS = base * li.pointSSS * uSSSIntensity;
          vec3 rim = uFresnelColor * li.fresnel * uFresnelIntensity;
          vec3 emissive = texture2D(tEmissive, vUv).rgb * uEmissiveIntensity * fadeIn;

          // 通透度: 背面也接收光
          vec3 translucent = base * uTranslucency * max(0.3 - dot(N, V), 0.0);

          vec3 color = diffuse + sss + pSSS + rim + emissive + translucent;
          return vec4(color, tex.a);
        }

        // ═══════════════════════════════════════
        // Shader 1: Fresnel 菲涅尔 (边缘发光 + 玻璃感)
        // ═══════════════════════════════════════
        vec4 shaderFresnel(vec3 base, vec3 N, vec3 V, vec3 worldPos, float fadeIn, vec4 tex) {
          LightResult li = calcLighting(N, V, worldPos);

          float f = li.fresnel;
          // 强菲涅尔: 边缘几乎全是光
          vec3 fresnelGlow = uFresnelColor * f * uFresnelIntensity * 2.0;

          // 柔和漫反射
          vec3 diffuse = base * (li.hemi * 0.6 + li.dir * 0.5 + li.pointDiff * 0.8);

          // 玻璃感: 中心偏透明, 边缘不透明
          float alpha = mix(0.4, 1.0, f) * tex.a;

          // 高光
          vec3 H = normalize(V + li.L);
          float spec = pow(max(dot(N, H), 0.0), mix(16.0, 128.0, 1.0 - uRoughness));
          vec3 specColor = uPointLightColor * spec * 0.6;

          vec3 emissive = texture2D(tEmissive, vUv).rgb * uEmissiveIntensity * fadeIn;
          vec3 color = diffuse + fresnelGlow + specColor + emissive;
          return vec4(color, alpha);
        }

        // ═══════════════════════════════════════
        // Shader 2: Iridescent 彩虹 (薄膜干涉)
        // ═══════════════════════════════════════
        vec4 shaderIridescent(vec3 base, vec3 N, vec3 V, vec3 worldPos, float fadeIn, vec4 tex) {
          LightResult li = calcLighting(N, V, worldPos);

          float NdV = max(dot(N, V), 0.0);
          // 薄膜干涉色相偏移
          float iriHue = fract(NdV * 2.0 + uTime * 0.05);
          vec3 iriColor = hsv2rgb(vec3(iriHue, 0.6, 1.0));

          float f = li.fresnel;
          vec3 diffuse = base * (li.hemi + li.dir * 0.6);
          vec3 iri = iriColor * f * 1.5;
          vec3 sss = base * li.dirSSS * uSSSIntensity * 0.5;

          vec3 emissive = texture2D(tEmissive, vUv).rgb * uEmissiveIntensity * fadeIn;
          vec3 color = diffuse + iri + sss + li.pointDiff * base * 0.5 + emissive;
          return vec4(color, tex.a);
        }

        // ═══════════════════════════════════════
        // Shader 3: Silk 丝绸 (各向异性高光)
        // ═══════════════════════════════════════
        vec4 shaderSilk(vec3 base, vec3 N, vec3 V, vec3 worldPos, float fadeIn, vec4 tex) {
          LightResult li = calcLighting(N, V, worldPos);

          // 丝绸各向异性: 基于切线方向
          vec3 T = normalize(cross(N, vec3(0.0, 1.0, 0.0)));
          vec3 H = normalize(V + li.L);
          float TdH = dot(T, H);
          float aniso = pow(sqrt(1.0 - TdH * TdH), mix(8.0, 64.0, 1.0 - uRoughness));

          vec3 diffuse = base * (li.hemi + li.dir * 0.7);
          vec3 silkSpec = uBaseColor * 1.5 * aniso;

          // 柔和光泽
          float sheen = pow(1.0 - max(dot(N, V), 0.0), 1.5) * 0.4;
          vec3 sheenColor = mix(base, vec3(1.0), 0.3) * sheen;

          vec3 sss = base * li.dirSSS * uSSSIntensity * 0.4;
          vec3 emissive = texture2D(tEmissive, vUv).rgb * uEmissiveIntensity * fadeIn;
          vec3 color = diffuse + silkSpec + sheenColor + sss + li.pointDiff * base * 0.6 + emissive;
          return vec4(color, tex.a);
        }

        // ═══════════════════════════════════════
        // Shader 4: Crystal 水晶 (折射感 + 焦散)
        // ═══════════════════════════════════════
        vec4 shaderCrystal(vec3 base, vec3 N, vec3 V, vec3 worldPos, float fadeIn, vec4 tex) {
          LightResult li = calcLighting(N, V, worldPos);

          float NdV = max(dot(N, V), 0.0);
          float f = li.fresnel;

          // 水晶折射色散
          vec3 refractDir = refract(-V, N, 0.9);
          float dispR = max(dot(refractDir, li.L), 0.0);
          float dispG = max(dot(refract(-V, N, 0.92), li.L), 0.0);
          float dispB = max(dot(refract(-V, N, 0.94), li.L), 0.0);
          vec3 caustic = vec3(
            pow(dispR, 4.0),
            pow(dispG, 4.0),
            pow(dispB, 4.0)
          ) * 2.0;

          // 锐利高光
          vec3 H = normalize(V + li.L);
          float spec = pow(max(dot(N, H), 0.0), 128.0);

          vec3 diffuse = base * (li.hemi * 0.5 + li.pointDiff * 0.6);
          vec3 crystalReflect = uFresnelColor * f * 1.2;
          
          float alpha = mix(0.5, 1.0, f) * tex.a;

          vec3 emissive = texture2D(tEmissive, vUv).rgb * uEmissiveIntensity * fadeIn;
          vec3 color = diffuse + crystalReflect + caustic + vec3(spec) * 0.4 + emissive;
          return vec4(color, alpha);
        }

        void main() {
          vec4 tex = texture2D(tMap, vUv);
          float fadeIn = clamp(uStartProgress * 2.0, 0.0, 1.0);

          // 基色 = 贴图 × 自定义颜色
          vec3 base = tex.rgb * uBaseColor * fadeIn * 1.8;

          // 法线 (双面) + 边缘柔化防止接缝描边
          vec3 N = normalize(vNormal);
          if (!gl_FrontFacing) N = -N;
          vec3 V = normalize(vViewDir);

          // 当视线几乎平行花瓣（掠射角），将法线向视线方向偏转
          // 消除正/反面交界处的硬接缝
          float edgeNdV = dot(N, V);
          if (edgeNdV < 0.15) {
            // 在掠射角区域，逐渐将法线混合向视线方向
            float blend = smoothstep(0.0, 0.15, edgeNdV);
            N = normalize(mix(V * 0.5 + N * 0.5, N, blend));
          }

          vec4 result;
          int st = int(uShaderType + 0.5);
          if (st == 1) {
            result = shaderFresnel(base, N, V, vWorldPos, fadeIn, tex);
          } else if (st == 2) {
            result = shaderIridescent(base, N, V, vWorldPos, fadeIn, tex);
          } else if (st == 3) {
            result = shaderSilk(base, N, V, vWorldPos, fadeIn, tex);
          } else if (st == 4) {
            result = shaderCrystal(base, N, V, vWorldPos, fadeIn, tex);
          } else {
            result = shaderSSS(base, N, V, vWorldPos, fadeIn, tex);
          }

          // 描边/轮廓 (基于菲涅尔边缘检测)
          if (uRimIntensity > 0.01) {
            float rimEdge = pow(1.0 - max(dot(N, V), 0.0), 1.0 / max(uRimWidth, 0.05));
            float rimMask = smoothstep(0.3, 0.8, rimEdge);
            result.rgb = mix(result.rgb, uRimColor * (1.0 + uRimIntensity), rimMask * uRimIntensity);
          }

          // Reinhard tone mapping
          result.rgb = result.rgb / (result.rgb + vec3(0.8));
          // gamma
          result.rgb = pow(result.rgb, vec3(1.0 / 2.2));

          gl_FragColor = result;
        }
      `}),r=new pr(t,i,128),o=new it;for(let a=0;a<128;a++)o.rotation.set(0,_s.degToRad(140*a),0),o.updateMatrix(),r.setMatrixAt(a,o.matrix);r.instanceMatrix.needsUpdate=!0,this._group.add(r),this._petalMesh=r}_setupParticles(){const n=new Float32Array(1200),i=new Float32Array(400*3),r=new Float32Array(400);for(let l=0;l<400;l++)n[l*3]=(Math.random()-.5)*20,n[l*3+1]=(Math.random()-.5)*20,n[l*3+2]=(Math.random()-.5)*20,r[l]=Math.random();const o=new dt;o.setAttribute("position",new mt(n,3)),o.setAttribute("aPhase",new mt(r,1)),this._particleVel=i;const a=new ut({uniforms:{uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:po});this._particles=new Fl(o,a),this._scene.add(this._particles)}_setupDistortion(e){const t=window.innerWidth,n=window.innerHeight,i={minFilter:Mt,magFilter:Mt,format:Ot,type:Lt};this._distortRT1=new kt(t,n,i),this._distortRT2=new kt(t,n,i),this._distortScene=new ls,this._distortCamera=new xs(-1,1,1,-1,0,1),this._distortMat=new ut({uniforms:{tPrev:{value:null},uPointer:{value:new Z(.5,.5)},uLastPointer:{value:new Z(.5,.5)},uBrushSize:{value:.08},uFadingRate:{value:.9},uIsPointerEnter:{value:0},uDiff:{value:0},uAspect:{value:t/n}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
      `,fragmentShader:`
        uniform sampler2D tPrev;
        uniform vec2 uPointer, uLastPointer;
        uniform float uBrushSize, uFadingRate, uIsPointerEnter, uDiff, uAspect;
        varying vec2 vUv;

        float distToSeg(vec2 p, vec2 a, vec2 b) {
          vec2 pa = p - a, ba = b - a;
          float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
          return length(pa - ba * h);
        }

        void main() {
          vec2 asp = vec2(uAspect, 1.0);
          vec2 p = vUv * asp;
          vec2 a = uLastPointer * asp;
          vec2 b = uPointer * asp;

          // 线段笔刷
          float segDist = distToSeg(p, a, b);
          float brush = 1.0 - smoothstep(0.0, uBrushSize, segDist);

          // 鼠标移动方向作为扭曲方向
          vec2 dir = normalize(b - a + vec2(0.001));
          float dirInfluence = brush * dot(normalize(p - a + vec2(0.001)), dir) * 0.5 + 0.5;

          // 衰减前一帧
          vec4 prev = texture2D(tPrev, vUv) * uFadingRate;

          // 鼠标移动强度
          float influence = uIsPointerEnter * smoothstep(0.0001, 0.005, uDiff);

          // 用鼠标速度和方向产生扭曲量
          vec2 distortVec = dir * brush * influence * uDiff * 8.0;

          gl_FragColor = vec4(prev.rg + distortVec, 0.0, 1.0);
        }
      `});const r=new nt(new fn(2,2),this._distortMat);this._distortScene.add(r)}_setupComposite(e){const t=window.innerWidth,n=window.innerHeight;this._mainRT=new kt(t,n,{minFilter:Mt,magFilter:Mt,format:Ot}),this._compScene=new ls,this._compCamera=new xs(-1,1,1,-1,0,1),this._compMat=new ut({uniforms:{tScene:{value:null},tDistort:{value:null},uDistortStrength:{value:.05}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
      `,fragmentShader:`
        uniform sampler2D tScene;
        uniform sampler2D tDistort;
        uniform float uDistortStrength;
        varying vec2 vUv;
        void main() {
          vec4 d = texture2D(tDistort, vUv);
          vec2 uv = vUv + d.rg * uDistortStrength;
          gl_FragColor = texture2D(tScene, uv);
        }
      `,transparent:!0});const i=new nt(new fn(2,2),this._compMat);this._compScene.add(i)}_bindPointer(e){const t=e.domElement;this._onMove=n=>{const i=t.getBoundingClientRect(),r=(n.clientX-i.left)/i.width*2-1,o=-((n.clientY-i.top)/i.height)*2+1;this._pointer.set(r,o);const a=.5*r+.5,l=.5*o+.5;this._lastNDC.copy(this._currNDC),this._currNDC.set(a,l);const c=this._currNDC.x-this._lastNDC.x,u=this._currNDC.y-this._lastNDC.y;this._pointerDiff=Math.sqrt(c*c+u*u)},this._isPointerEnter=!0,t.addEventListener("pointermove",this._onMove)}_createHTMLBackground(e){const t=e.domElement,n=t.parentElement;e.setClearColor(0,0),this._bgDiv=document.createElement("div"),this._bgDiv.id="bloom-bg",this._bgDiv.style.cssText=`
      position:absolute; inset:0; z-index:-2;
      background:linear-gradient(to bottom, #000000, #8386ff);
      pointer-events:none;
    `,n.style.position="relative",n.insertBefore(this._bgDiv,t),this._starsDiv=document.createElement("div"),this._starsDiv.id="bloom-stars",this._starsDiv.style.cssText=`
      position:absolute; inset:0; z-index:-1;
      pointer-events:none; overflow:hidden;
    `,n.insertBefore(this._starsDiv,t);const i=120;for(let r=0;r<i;r++){const o=document.createElement("div"),a=Math.random()*2.5+.5,l=Math.random()*100,c=Math.random()*100,u=Math.random()*5,h=2+Math.random()*4,d=.2+Math.random()*.6;o.style.cssText=`
        position:absolute;
        left:${l}%; top:${c}%;
        width:${a}px; height:${a}px;
        border-radius:50%;
        background:white;
        opacity:${d};
        animation:bloom-twinkle ${h}s ${u}s ease-in-out infinite;
      `,this._starsDiv.appendChild(o)}if(!document.getElementById("bloom-star-style")){const r=document.createElement("style");r.id="bloom-star-style",r.textContent=`
        @keyframes bloom-twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1.2); }
        }
      `,document.head.appendChild(r)}}update(e,t){if(!this._loaded)return;const n=this._clock.getElapsedTime(),i=n-this._animStartTime,o=Math.max(i-1,0),a=Math.min(o/3,1),l=a*a*(3-2*a),c=4+-2*l,u=.3+(2-.3)*l;this._camera.position.z=u,this._camera.position.y=c;const h=Math.min(i/1.5,1);this._group.rotation.y=-(h*h*(3-2*h))*Math.PI/2;const d=Math.max(i-.5,0),f=Math.min(d/5.5,1);this._startProgress=f*f*(3-2*f),this._uStartProgress.value=this._startProgress,this._uTime.value=n;const g=-(.3*this._pointer.x);if(this._camera.position.x+=(g-this._camera.position.x)*.05,a>=1&&(this._camera.position.y+=(2-this._camera.position.y)*.05,this._camera.position.z+=(2-this._camera.position.z)*.05),this._camera.lookAt(0,0,0),this._particles){this._particles.material.uniforms.uTime.value=n;const _=this._particles.geometry.getAttribute("position"),m=_.array,p=this._particleVel;for(let b=0;b<_.count;b++){const x=b*3;p[x+1]-=this._params.particleGravity,m[x]+=p[x],m[x+1]+=p[x+1],m[x+2]+=p[x+2],m[x+1]<0&&(m[x+1]=0,p[x+1]=-p[x+1])}_.needsUpdate=!0}}render(e){if(!this._loaded)return;e.setRenderTarget(this._mainRT),e.setClearColor(0,0),e.clear(),e.render(this._scene,this._camera);const t=this._distortPhase?this._distortRT2:this._distortRT1,n=this._distortPhase?this._distortRT1:this._distortRT2;this._distortMat.uniforms.tPrev.value=t.texture,this._distortMat.uniforms.uPointer.value.copy(this._currNDC),this._distortMat.uniforms.uLastPointer.value.copy(this._lastNDC),this._distortMat.uniforms.uDiff.value=this._pointerDiff,this._distortMat.uniforms.uIsPointerEnter.value=this._isPointerEnter?1:0,e.setRenderTarget(n),e.render(this._distortScene,this._distortCamera),this._distortPhase=!this._distortPhase,this._pointerDiff*=.95,this._compMat.uniforms.tScene.value=this._mainRT.texture,this._compMat.uniforms.tDistort.value=n.texture,e.setRenderTarget(null),e.setClearColor(0,0),e.clear(),e.render(this._compScene,this._compCamera)}onResize(e,t){this._camera&&(this._camera.aspect=e/t,this._camera.updateProjectionMatrix()),this._mainRT&&this._mainRT.setSize(e,t),this._distortRT1&&(this._distortRT1.setSize(e,t),this._distortRT2.setSize(e,t)),this._distortMat&&(this._distortMat.uniforms.uAspect.value=e/t)}applyParam(e,t){switch(e){case"cameraZoom":this._camera&&(this._camera.zoom=t,this._camera.updateProjectionMatrix());break;case"cameraFov":this._camera&&(this._camera.fov=t,this._camera.updateProjectionMatrix());break;case"startProgress":this._uStartProgress.value=t,this._startProgress=t;break;case"cycleDuration":this._uCycleDuration.value=t;break;case"petalRotStep":if(this._petalMesh){const n=new it;for(let i=0;i<128;i++)n.rotation.set(0,_s.degToRad(t*i),0),n.updateMatrix(),this._petalMesh.setMatrixAt(i,n.matrix);this._petalMesh.instanceMatrix.needsUpdate=!0}break;case"scaleMinY":this._uScaleMinY.value=t;break;case"scaleMaxY":this._uScaleMaxY.value=t;break;case"scaleMinZ":this._uScaleMinZ.value=t;break;case"scaleMaxZ":this._uScaleMaxZ.value=t;break;case"bendMin":this._uBendMin.value=t;break;case"bendMax":this._uBendMax.value=t;break;case"envIntensity":this._scene&&(this._scene.environmentIntensity=t);break;case"envRotation":this._scene&&(this._scene.environmentRotation=new Qt(0,t,0));break;case"distortStrength":this._params.distortStrength=t,this._compMat&&(this._compMat.uniforms.uDistortStrength.value=t);break;case"distortBrush":this._distortMat&&(this._distortMat.uniforms.uBrushSize.value=t);break;case"distortFade":this._distortMat&&(this._distortMat.uniforms.uFadingRate.value=t);break;case"particleSize":this._particles&&(this._particles.material.uniforms.uSize={value:t});break;case"particleGravity":this._params.particleGravity=t;break;case"particleSpread":if(this._particles){const n=this._particles.geometry.getAttribute("position");for(let i=0;i<n.count;i++)n.array[i*3]=(Math.random()-.5)*t,n.array[i*3+1]=(Math.random()-.5)*t,n.array[i*3+2]=(Math.random()-.5)*t;n.needsUpdate=!0}break;case"stemRoughness":this._stemMesh&&this._stemMesh.traverse(n=>{n.isMesh&&n.material&&(n.material.roughness=t)});break;case"stemPosY":this._stemMesh&&(this._stemMesh.position.y=t);break;case"shaderType":this._uShaderType.value=t;break;case"baseColor":{const n=new se(t);this._uBaseColor.value.copy(n);break}case"roughness":this._uRoughness.value=t;break;case"metalness":this._uMetalness.value=t;break;case"emissiveColor":{const n=new se(t);this._uEmissiveColor.value.copy(n);break}case"emissiveIntensity":this._uEmissiveIntensity.value=t;break;case"sssIntensity":this._uSSSIntensity.value=t;break;case"sssColor":{const n=new se(t);this._uSSSColor.value.copy(n);break}case"fresnelPower":this._uFresnelPower.value=t;break;case"fresnelColor":{const n=new se(t);this._uFresnelColor.value.copy(n);break}case"fresnelIntensity":this._uFresnelIntensity.value=t;break;case"pointLightIntensity":this._uPointLightIntensity.value=t;break;case"pointLightColor":{const n=new se(t);this._uPointLightColor.value.copy(n);break}case"pointLightY":this._uPointLightY.value=t;break;case"envLightIntensity":this._uEnvLightIntensity.value=t;break;case"dirLightIntensity":this._uDirLightIntensity.value=t;break;case"translucency":this._uTranslucency.value=t;break;case"rimWidth":this._uRimWidth.value=t;break;case"rimIntensity":this._uRimIntensity.value=t;break;case"rimColor":{const n=new se(t);this._uRimColor.value.copy(n);break}case"bgColorTop":case"bgColorBot":this._updateBackground(e==="bgColorTop"?t:null,e==="bgColorBot"?t:null);break}}_updateBackground(e,t){this._bgTop=e||this._bgTop||"#000000",this._bgBot=t||this._bgBot||"#8386ff",this._bgDiv&&(this._bgDiv.style.background=`linear-gradient(to bottom, ${this._bgTop}, ${this._bgBot})`)}dispose(){var t;this._mainRT&&this._mainRT.dispose(),this._distortRT1&&(this._distortRT1.dispose(),this._distortRT2.dispose());const e=(t=this._renderer)==null?void 0:t.domElement;e&&e.removeEventListener("pointermove",this._onMove),this._bgDiv&&this._bgDiv.parentElement&&this._bgDiv.parentElement.removeChild(this._bgDiv),this._starsDiv&&this._starsDiv.parentElement&&this._starsDiv.parentElement.removeChild(this._starsDiv),this._renderer&&this._renderer.setClearColor(0,1)}}class qx{static wingFlapFunction(e={}){const{timeUniform:t="uTime",frequencyUniform:n="uFlapFrequency",amplitudeUniform:i="uFlapAmplitude"}=e;return`
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
    `}}class Yx{constructor(e={}){this.count=e.count||50,this.rng=new Lu(e.seed??42),this.separationDist=e.separationDist??1.5,this.alignmentDist=e.alignmentDist??3,this.cohesionDist=e.cohesionDist??4,this.separationWeight=e.separationWeight??1.5,this.alignmentWeight=e.alignmentWeight??1,this.cohesionWeight=e.cohesionWeight??1,this.maxSpeed=e.maxSpeed??2,this.maxForce=e.maxForce??.03,this.bounds=e.bounds??[20,10,20],this.boundaryForce=e.boundaryForce??.5,this.positions=new Float32Array(this.count*3),this.velocities=new Float32Array(this.count*3),this.accelerations=new Float32Array(this.count*3),this._positionTexture=null,this._velocityTexture=null,this._initialize()}_initialize(){this.rng.reset();for(let e=0;e<this.count;e++){const t=e*3;this.positions[t]=this.rng.range(-this.bounds[0]*.5,this.bounds[0]*.5),this.positions[t+1]=this.rng.range(1,this.bounds[1]),this.positions[t+2]=this.rng.range(-this.bounds[2]*.5,this.bounds[2]*.5);const n=this.rng.range(.5,this.maxSpeed),i=this.rng.range(0,Math.PI*2),r=this.rng.range(-.3,.3);this.velocities[t]=Math.cos(i)*Math.cos(r)*n,this.velocities[t+1]=Math.sin(r)*n*.3,this.velocities[t+2]=Math.sin(i)*Math.cos(r)*n}}update(e){const t=Math.min(e,.05);this.accelerations.fill(0);for(let n=0;n<this.count;n++)this._computeForces(n);for(let n=0;n<this.count;n++){const i=n*3;this.velocities[i]+=this.accelerations[i]*t,this.velocities[i+1]+=this.accelerations[i+1]*t,this.velocities[i+2]+=this.accelerations[i+2]*t;const r=Math.sqrt(this.velocities[i]**2+this.velocities[i+1]**2+this.velocities[i+2]**2);if(r>this.maxSpeed){const o=this.maxSpeed/r;this.velocities[i]*=o,this.velocities[i+1]*=o,this.velocities[i+2]*=o}this.positions[i]+=this.velocities[i]*t,this.positions[i+1]+=this.velocities[i+1]*t,this.positions[i+2]+=this.velocities[i+2]*t,this._applyBoundary(n)}this._positionTexture&&this._updateTextures()}_computeForces(e){const t=e*3,n=this.positions[t],i=this.positions[t+1],r=this.positions[t+2];let o=0,a=0,l=0,c=0,u=0,h=0,d=0,f=0,g=0,_=0,m=0,p=0;for(let x=0;x<this.count;x++){if(x===e)continue;const v=x*3,R=this.positions[v]-n,T=this.positions[v+1]-i,E=this.positions[v+2]-r,A=Math.sqrt(R*R+T*T+E*E);if(!(A<.001)){if(A<this.separationDist){const M=1/A;o-=R*M,a-=T*M,l-=E*M,c++}A<this.alignmentDist&&(u+=this.velocities[v],h+=this.velocities[v+1],d+=this.velocities[v+2],f++),A<this.cohesionDist&&(g+=this.positions[v],_+=this.positions[v+1],m+=this.positions[v+2],p++)}}const b=(x,v,R,T)=>{const E=Math.sqrt(x*x+v*v+R*R);if(E>0){const A=Math.min(this.maxForce*T/E,this.maxForce*T);this.accelerations[t]+=x*A,this.accelerations[t+1]+=v*A,this.accelerations[t+2]+=R*A}};c>0&&b(o,a,l,this.separationWeight),f>0&&b(u/f-this.velocities[t],h/f-this.velocities[t+1],d/f-this.velocities[t+2],this.alignmentWeight),p>0&&b(g/p-n,_/p-i,m/p-r,this.cohesionWeight)}_applyBoundary(e){const t=e*3,n=2,[i,r,o]=this.bounds;for(let a=0;a<3;a++){const l=this.bounds[a]*.5,c=this.positions[t+a];a===1?(c<.5&&(this.velocities[t+a]+=this.boundaryForce),c>r&&(this.velocities[t+a]-=this.boundaryForce)):(c<-l+n&&(this.velocities[t+a]+=this.boundaryForce),c>l-n&&(this.velocities[t+a]-=this.boundaryForce))}}applyToInstancedMesh(e){const t=new it,n=new P(0,1,0),i=new P;for(let r=0;r<this.count;r++){const o=r*3;t.position.set(this.positions[o],this.positions[o+1],this.positions[o+2]),i.set(this.velocities[o],this.velocities[o+1],this.velocities[o+2]).normalize(),t.quaternion.setFromUnitVectors(n,i);const a=Math.atan2(this.accelerations[o],9.8)*.3;t.rotateZ(a),t.updateMatrix(),e.setMatrixAt(r,t.matrix)}e.instanceMatrix.needsUpdate=!0}createGPUTextures(){const e=Math.ceil(Math.sqrt(this.count)),t=e*e,n=new Float32Array(t*4),i=new Float32Array(t*4);for(let r=0;r<this.count;r++){const o=r*3,a=r*4;n[a]=this.positions[o],n[a+1]=this.positions[o+1],n[a+2]=this.positions[o+2],n[a+3]=1,i[a]=this.velocities[o],i[a+1]=this.velocities[o+1],i[a+2]=this.velocities[o+2],i[a+3]=0}return this._positionTexture=new ys(n,e,e,Ot,Lt),this._positionTexture.needsUpdate=!0,this._velocityTexture=new ys(i,e,e,Ot,Lt),this._velocityTexture.needsUpdate=!0,{positionTexture:this._positionTexture,velocityTexture:this._velocityTexture,textureSize:e}}_updateTextures(){if(!this._positionTexture)return;const e=this._positionTexture.image.data,t=this._velocityTexture.image.data;for(let n=0;n<this.count;n++){const i=n*3,r=n*4;e[r]=this.positions[i],e[r+1]=this.positions[i+1],e[r+2]=this.positions[i+2],t[r]=this.velocities[i],t[r+1]=this.velocities[i+1],t[r+2]=this.velocities[i+2]}this._positionTexture.needsUpdate=!0,this._velocityTexture.needsUpdate=!0}static gpuSampleFunction(){return`
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
    `}dispose(){this._positionTexture&&this._positionTexture.dispose(),this._velocityTexture&&this._velocityTexture.dispose()}}class gl extends Ps{constructor(e={}){super({wingSpan:1.5,wingAspect:1.2,wingSegments:16,flapFrequency:8,flapAmplitude:.8,baseColor:[.1,.05,.2],filmThickness:400,ior:1.5,iridescenceIntensity:.8,flockCount:0,...e}),this._boids=null}_buildGeometry(){const e=this._params,t=e.wingSegments,n=e.wingSpan,i=e.wingAspect,r=[],o=[],a=[],l=[],c=[];for(let _=0;_<2;_++){const m=_===0?1:-1,p=r.length/3;for(let b=0;b<=t;b++){const x=b/t;for(let v=0;v<=t;v++){const R=v/t,T=n*.5*this._wingProfile(x),E=n*i,A=m*(x*T+.05),M=(R-.5)*E*this._wingChord(x),y=this._wingCamber(R,x)*.1;r.push(A,y,M),o.push(0,1,0),a.push(R,x),c.push(x)}}for(let b=0;b<t;b++)for(let x=0;x<t;x++){const v=p+b*(t+1)+x,R=v+1,T=v+(t+1),E=T+1;_===0?l.push(v,R,E,v,E,T):l.push(v,E,R,v,T,E)}}const u=r.length/3,h=8,d=n*i*.6,f=.03;for(let _=0;_<=h;_++){const m=_/h,p=(m-.5)*d,b=f*(1-Math.abs(m-.4)*1.5);for(let x=0;x<=h;x++){const v=x/h*Math.PI*2;r.push(Math.cos(v)*Math.max(b,.005),Math.sin(v)*Math.max(b,.005),p),o.push(Math.cos(v),Math.sin(v),0),a.push(x/h,m),c.push(0)}}for(let _=0;_<h;_++)for(let m=0;m<h;m++){const p=u+_*(h+1)+m,b=p+1,x=p+(h+1),v=x+1;l.push(p,b,v,p,v,x)}const g=new dt;return g.setAttribute("position",new gt(r,3)),g.setAttribute("normal",new gt(o,3)),g.setAttribute("uv",new gt(a,2)),g.setAttribute("aWingMask",new gt(c,1)),g.setIndex(l),g.computeVertexNormals(),g.computeBoundingSphere(),g}_buildMaterial(){const e=this._params,t=`
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

      ${qx.wingFlapFunction()}

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
    `;return new Yn({vertexShader:t,fragmentShader:n,transparent:!0,side:Pt,uniforms:{uBaseColor:{value:new P(...e.baseColor)},uFilmThickness:{value:e.filmThickness},uIOR:{value:e.ior},uIridescenceIntensity:{value:e.iridescenceIntensity},uFlapFrequency:{value:e.flapFrequency},uFlapAmplitude:{value:e.flapAmplitude},uWingSpan:{value:e.wingSpan},uRandomSeed:{value:e.seed*.001}}})}_buildMesh(){const e=this._params;if(e.flockCount>0){const t=new pr(this._geometry,this._material,e.flockCount);return t.frustumCulled=!1,this._boids=new Yx({count:e.flockCount,seed:e.seed,maxSpeed:3,bounds:[30,15,30]}),this._boids.applyToInstancedMesh(t),t}return new nt(this._geometry,this._material)}_wingProfile(e){return Math.sin(e*Math.PI)*(1-e*.3)}_wingChord(e){return 1-e*e*.5}_wingCamber(e,t){return Math.sin(e*Math.PI)*(1-t)*.5}updateFlock(e){return this._boids&&this._mesh&&(this._boids.update(e),this._boids.applyToInstancedMesh(this._mesh)),this}getBoids(){return this._boids}dispose(){super.dispose(),this._boids&&(this._boids.dispose(),this._boids=null)}}Ts.register("BionicButterfly",gl,{wingSpan:1.5,baseColor:[.1,.05,.2],filmThickness:400});class jx{static glsl(){return`
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
    `}}class Ou extends Ps{constructor(e={}){super({power:8,iterations:12,bailout:2,scale:2,colorA:[.1,.2,.6],colorB:[.9,.3,.1],glowIntensity:.5,animate:!0,...e})}_buildGeometry(){return new fn(2,2)}_buildMaterial(){const e=this._params,t=`
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

      ${jx.glsl()}

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
    `;return new Yn({vertexShader:t,fragmentShader:n,transparent:!1,side:yn,depthWrite:!1,depthTest:!1,uniforms:{uPower:{value:e.power},uIterations:{value:e.iterations},uBailout:{value:e.bailout},uScale:{value:e.scale},uColorA:{value:new P(...e.colorA)},uColorB:{value:new P(...e.colorB)},uGlowIntensity:{value:e.glowIntensity},uAnimate:{value:e.animate?1:0}}})}_buildMesh(){const e=new nt(this._geometry,this._material);return e.frustumCulled=!1,e}setPower(e){return this._material&&(this._material.uniforms.uPower.value=e),this}}Ts.register("MandelbulbFractal",Ou,{power:8,colorA:[.1,.2,.6],colorB:[.9,.3,.1]});class Kx{static glsl(){return`
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
    `}}class Bu extends Ps{constructor(e={}){super({colorTop:[.1,.8,.3],colorBottom:[.3,.1,.6],colorAccent:[.1,.3,.9],height:5,curtainWidth:15,speed:.3,intensity:1.5,turbulence:1,raySteps:48,...e})}_buildGeometry(){return new fn(2,2)}_buildMaterial(){const e=this._params,t=`
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

      ${Kx.glsl()}

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
    `;return new Yn({vertexShader:t,fragmentShader:n,transparent:!1,side:yn,depthWrite:!1,depthTest:!1,uniforms:{uColorTop:{value:new P(...e.colorTop)},uColorBottom:{value:new P(...e.colorBottom)},uColorAccent:{value:new P(...e.colorAccent)},uHeight:{value:e.height},uCurtainWidth:{value:e.curtainWidth},uSpeed:{value:e.speed},uIntensity:{value:e.intensity},uTurbulence:{value:e.turbulence},uRaySteps:{value:e.raySteps}}})}_buildMesh(){const e=new nt(this._geometry,this._material);return e.frustumCulled=!1,e}}Ts.register("AuroraBorealis",Bu,{colorTop:[.1,.8,.3],colorBottom:[.3,.1,.6],intensity:1.5});class Ds{constructor(e={}){const t=this.getDefaults?this.getDefaults():{};this._params={...t,...e},this._uniforms=null,this._material=null,this._mesh=null,this._scene=null,this._renderer=null,this._camera=new Cl,this._camera.position.z=1,this._startTime=Date.now(),this._innerScene=new ls,this._bufferTarget=null,this._bufferFeedback=null}getDefaults(){return{}}_buildUniforms(){const e={iTime:{value:0},iResolution:{value:new Z(window.innerWidth,window.innerHeight)},iDpr:{value:window.devicePixelRatio||1},iMouse:{value:new Z(window.innerWidth/2,window.innerHeight/2)}};for(const t in this._params){const n=this._params[t];if(!(t==="seed"||t==="texturePath"))if(t.toLowerCase().includes("color")){const i=new se(n);e[t]={value:new P(i.r,i.g,i.b)}}else typeof n=="number"&&(e[t]={value:n})}return e}build(){return this._uniforms=this._buildUniforms(),typeof this.onInit=="function"&&this.onInit(),this._material=new ut({uniforms:this._uniforms,vertexShader:"void main(){ gl_Position = vec4(position, 1.0); }",fragmentShader:this.constructor.fragmentShader||"void main(){ gl_FragColor=vec4(0.); }",depthWrite:!1,depthTest:!1}),this._mesh=new nt(new fn(2,2),this._material),this._mesh.frustumCulled=!1,this._innerScene.add(this._mesh),this}addTo(e){return this._scene=e,e.add(this._mesh),this}setRenderer(e){return this._renderer=e,this}update(){return this._uniforms?(this._uniforms.iTime.value=(Date.now()-this._startTime)*.001,typeof this.onUpdate=="function"&&this.onUpdate(),this):this}setMouse(e,t){this._uniforms&&this._uniforms.iMouse.value.set(e,t)}resize(e,t){this._uniforms&&this._uniforms.iResolution.value.set(e,t),typeof this.onResize=="function"&&this.onResize(e,t)}setPosition(){return this}setScale(){return this}dispose(){var e;typeof this.onDestroy=="function"&&this.onDestroy(),this._mesh&&(this._scene?this._scene.remove(this._mesh):this._mesh.parent&&this._mesh.parent.remove(this._mesh)),this._material&&this._material.dispose(),(e=this._mesh)!=null&&e.geometry&&this._mesh.geometry.dispose(),this._bufferTarget&&this._bufferTarget.dispose(),this._bufferFeedback&&this._bufferFeedback.dispose(),this._mesh=null,this._material=null,this._uniforms=null}_initDoubleBuffer(e,t){const n={minFilter:Mt,magFilter:Mt};this._bufferTarget=new kt(e,t,n),this._bufferFeedback=new kt(e,t,n)}_swapBuffers(){const e=this._bufferTarget;this._bufferTarget=this._bufferFeedback,this._bufferFeedback=e}}class Ls{constructor(e={}){const t=this.getDefaults?this.getDefaults():{};this._params={...t,...e},this.options=this._params,this.t=0,this.width=window.innerWidth,this.height=window.innerHeight,this.mouseX=.5,this.mouseY=.5,this._scene=null,this._ownScene=new ls,this.camera=null,this._renderer=null,this._children=[],this._clock=new Fi}getDefaults(){return{}}build(){return typeof this.onInit=="function"&&this.onInit(),this}addTo(e){return this._scene=e,this._ownScene.children.slice().forEach(t=>{this._ownScene.remove(t),e.add(t),this._children.push(t)}),this.options.backgroundColor!==void 0&&(e.background=new se(this.options.backgroundColor)),this._ownScene.fog&&(e.fog=this._ownScene.fog,this._hadFog=!0),this}setRenderer(e){return this._renderer=e,this}update(){const e=this._clock.getDelta();return this.t+=e*1e3,typeof this.onUpdate=="function"&&this.onUpdate(e),this}setMouse(e,t){this.mouseX=e/window.innerWidth,this.mouseY=t/window.innerHeight,typeof this.onMouseMove=="function"&&this.onMouseMove(this.mouseX,this.mouseY)}resize(e,t){this.width=e,this.height=t,this.camera&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix()),typeof this.onResize=="function"&&this.onResize(e,t)}setPosition(){return this}setScale(){return this}dispose(){typeof this.onDestroy=="function"&&this.onDestroy(),this._children.forEach(e=>{this._scene&&this._scene.remove(e),zu(e)}),this._children=[],this._hadFog&&this._scene&&(this._scene.fog=null,this._hadFog=!1)}}function zu(s){for(;s.children&&s.children.length>0;)zu(s.children[0]),s.remove(s.children[0]);s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material.forEach(e=>e.dispose()):s.material.dispose())}function je(s=0,e=1){return s+Math.random()*(e-s)}function ln(s=0,e=1){return Math.floor(s+Math.random()*(e-s+1))}function Zx(s){return s[Math.floor(Math.random()*s.length)]}class $x extends Ds{getDefaults(){return{baseColor:6745,color2:15918901,backgroundColor:1251907,amplitudeFactor:1,ringFactor:1,rotationFactor:1,xOffset:0,yOffset:0,size:1,speed:1}}onInit(){const e=window.innerWidth,t=window.innerHeight,n=window.devicePixelRatio||1;this._initDoubleBuffer(Math.floor(e*n),Math.floor(t*n)),this._uniforms.iBuffer={value:this._bufferFeedback.texture},this._mouseEaseX=e/2,this._mouseEaseY=t/2,this._mouseRawX=e/2,this._mouseRawY=t/2,this._screenMat=new ut({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ gl_FragColor=texture2D(tDiffuse,vUv); }",depthWrite:!1,depthTest:!1}),this._screenMesh=new nt(new fn(2,2),this._screenMat),this._screenMesh.frustumCulled=!1}addTo(e){return this._scene=e,e.add(this._screenMesh),this}setMouse(e,t){this._mouseRawX=e,this._mouseRawY=t}onUpdate(){if(!this._renderer||!this._bufferTarget||!this._mesh)return;Math.abs(this._mouseEaseX-this._mouseRawX)+Math.abs(this._mouseEaseY-this._mouseRawY)>.1&&(this._mouseEaseX+=(this._mouseRawX-this._mouseEaseX)*.05,this._mouseEaseY+=(this._mouseRawY-this._mouseEaseY)*.05),this._uniforms.iMouse.value.set(this._mouseEaseX,this._mouseEaseY);const e=this._renderer;this._uniforms.iBuffer.value=this._bufferFeedback.texture,e.setRenderTarget(this._bufferTarget),e.render(this._innerScene,this._camera),e.setRenderTarget(null),this._screenMat.uniforms.tDiffuse.value=this._bufferTarget.texture,this._swapBuffers()}onResize(e,t){const n=window.devicePixelRatio||1,i=Math.floor(e*n),r=Math.floor(t*n);this._bufferTarget&&(this._bufferTarget.setSize(i,r),this._bufferFeedback.setSize(i,r))}dispose(){this._screenMesh&&(this._scene&&this._scene.remove(this._screenMesh),this._screenMesh.geometry.dispose(),this._screenMat.dispose()),super.dispose()}static get fragmentShader(){return Jx}}const Jx=`
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
`;class Qx extends Ds{getDefaults(){return{highlightColor:16761600,midtoneColor:16719616,lowlightColor:2949375,baseColor:16772075,blurFactor:.6,speed:1,zoom:1}}static get fragmentShader(){return iy}}class ey extends Ds{getDefaults(){return{color1:35980,color2:15918901,backgroundColor:14155663,amplitudeFactor:1,ringFactor:1,rotationFactor:1,size:1.5,speed:1}}static get fragmentShader(){return sy}}class ty extends Ds{getDefaults(){return{backgroundColor:16777215,skyColor:6863063,cloudColor:11387358,cloudShadowColor:1586512,sunColor:16750873,sunGlareColor:16737843,sunlightColor:16750899,speed:1}}static get fragmentShader(){return ry}}class ny extends Ds{getDefaults(){return{color1:396069,color2:16777215,backgroundColor:16185078,amplitudeFactor:1,ringFactor:4,rotationFactor:.1,speed:1}}static get fragmentShader(){return oy}}const iy=`
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
}`,sy=`
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
}`,ry=`
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
}`,oy=`
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
}`;class ay{constructor(e,t,n){this.variables=[],this.currentTextureIndex=0;let i=Lt;const r={passThruTexture:{value:null}},o=c(h(),r),a=new Yl(o);this.setDataType=function(d){return i=d,this},this.addVariable=function(d,f,g){const _=this.createShaderMaterial(f),m={name:d,initialValueTexture:g,material:_,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Dt,magFilter:Dt};return this.variables.push(m),m},this.setVariableDependencies=function(d,f){d.dependencies=f},this.init=function(){if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let d=0;d<this.variables.length;d++){const f=this.variables[d];f.renderTargets[0]=this.createRenderTarget(e,t,f.wrapS,f.wrapT,f.minFilter,f.magFilter),f.renderTargets[1]=this.createRenderTarget(e,t,f.wrapS,f.wrapT,f.minFilter,f.magFilter),this.renderTexture(f.initialValueTexture,f.renderTargets[0]),this.renderTexture(f.initialValueTexture,f.renderTargets[1]);const g=f.material,_=g.uniforms;if(f.dependencies!==null)for(let m=0;m<f.dependencies.length;m++){const p=f.dependencies[m];if(p.name!==f.name){let b=!1;for(let x=0;x<this.variables.length;x++)if(p.name===this.variables[x].name){b=!0;break}if(!b)return"Variable dependency not found. Variable="+f.name+", dependency="+p.name}_[p.name]={value:null},g.fragmentShader=`
uniform sampler2D `+p.name+`;
`+g.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const d=this.currentTextureIndex,f=this.currentTextureIndex===0?1:0;for(let g=0,_=this.variables.length;g<_;g++){const m=this.variables[g];if(m.dependencies!==null){const p=m.material.uniforms;for(let b=0,x=m.dependencies.length;b<x;b++){const v=m.dependencies[b];p[v.name].value=v.renderTargets[d].texture}}this.doRenderTarget(m.material,m.renderTargets[f])}this.currentTextureIndex=f},this.getCurrentRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){a.dispose();const d=this.variables;for(let f=0;f<d.length;f++){const g=d[f];g.initialValueTexture&&g.initialValueTexture.dispose();const _=g.renderTargets;for(let m=0;m<_.length;m++)_[m].dispose()}};function l(d){d.defines.resolution="vec2( "+e.toFixed(1)+", "+t.toFixed(1)+" )"}this.addResolutionDefine=l;function c(d,f){f=f||{};const g=new ut({name:"GPUComputationShader",uniforms:f,vertexShader:u(),fragmentShader:d});return l(g),g}this.createShaderMaterial=c,this.createRenderTarget=function(d,f,g,_,m,p){return d=d||e,f=f||t,g=g||hn,_=_||hn,m=m||Dt,p=p||Dt,new kt(d,f,{wrapS:g,wrapT:_,minFilter:m,magFilter:p,format:Ot,type:i,depthBuffer:!1})},this.createTexture=function(){const d=new Float32Array(e*t*4),f=new ys(d,e,t,Ot,Lt);return f.needsUpdate=!0,f},this.renderTexture=function(d,f){r.passThruTexture.value=d,this.doRenderTarget(o,f),r.passThruTexture.value=null},this.doRenderTarget=function(d,f){const g=n.getRenderTarget(),_=n.xr.enabled,m=n.shadowMap.autoUpdate;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,a.material=d,n.setRenderTarget(f),a.render(n),a.material=o,n.xr.enabled=_,n.shadowMap.autoUpdate=m,n.setRenderTarget(g)};function u(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function h(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const er=800,xa=er/2;class ly extends Ls{getDefaults(){return{backgroundColor:465199,color1:16711680,color2:53759,colorMode:"varianceGradient",birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5}}onInit(){const e=this._ownScene,t=this.options;this.WIDTH=Math.pow(2,t.quantity),this.BIRDS=this.WIDTH*this.WIDTH,this.camera=new yt(75,this.width/this.height,1,3e3),this.camera.position.z=350,e.add(this.camera),e.fog=new Dl(16777215,100,1e3),this.mouseX=1e4,this.mouseY=1e4,this.last=performance.now();try{this._initGPGPU(),this._initGpgpuBirds(),this._useGPGPU=!0}catch(n){console.warn("[VantaBirds] GPGPU init failed, falling back to CPU:",n),this._useGPGPU=!1,this._initCPUBirds()}}_initGPGPU(){const e=this._renderer;if(!e)throw new Error("No renderer");this.gpuCompute=new ay(this.WIDTH,this.WIDTH,e);const t=this.gpuCompute.createTexture(),n=this.gpuCompute.createTexture();hy(t),uy(n),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",fy,n),this.positionVariable=this.gpuCompute.addVariable("texturePosition",dy,t),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:1},this.velocityUniforms.cohesionDistance={value:1},this.velocityUniforms.speedLimit={value:1},this.velocityUniforms.freedomFactor={value:1},this.velocityUniforms.predator={value:new P},this.velocityVariable.material.defines.BOUNDS=er.toFixed(2),this.velocityVariable.wrapS=wn,this.velocityVariable.wrapT=wn,this.positionVariable.wrapS=wn,this.positionVariable.wrapT=wn;const i=this.gpuCompute.init();if(i!==null)throw new Error(i);this._updateVelocityUniforms()}_updateVelocityUniforms(){if(!this.velocityUniforms)return;const e=this.options;this.velocityUniforms.separationDistance.value=e.separation,this.velocityUniforms.alignmentDistance.value=e.alignment,this.velocityUniforms.speedLimit.value=e.speedLimit,this.velocityUniforms.cohesionDistance.value=e.cohesion}_initGpgpuBirds(){const e=this.options,t=cy(e,this);this.birdUniforms={color:{value:new se(16720384)},texturePosition:{value:null},textureVelocity:{value:null},time:{value:1},delta:{value:0},birdSize:{value:e.birdSize}};const n=new ut({uniforms:this.birdUniforms,vertexShader:py,fragmentShader:my,side:Pt}),i=new nt(t,n);i.rotation.y=Math.PI/2,i.matrixAutoUpdate=!1,i.updateMatrix(),this._ownScene.add(i)}_initCPUBirds(){const e=this.options,t=this.BIRDS;this.boids=[],this.cpuBirds=[];for(let n=0;n<t;n++){const i=new _y(e);i.position.set(je(-200,200),je(-200,200),je(-200,200)),i.velocity.set(je(-1,1),je(-1,1),je(-1,1)),i.setWorldSize(500,500,300),this.boids.push(i);const r=gy(e),o=n/t,a=this._getNewCol(o),l=r.attributes.position.array,c=new Float32Array(l.length);for(let h=0;h<c.length;h+=3)c[h]=a.r,c[h+1]=a.g,c[h+2]=a.b;r.setAttribute("color",new mt(c,3));const u=new nt(r,new qn({color:16777215,side:Pt,vertexColors:!0}));u.phase=Math.floor(Math.random()*62.83),u.position.copy(i.position),this._ownScene.add(u),this.cpuBirds.push(u)}}_getNewCol(e){const t=this.options,n=new se(t.color1!=null?t.color1:4456448),i=new se(t.color2!=null?t.color2:6684672);let o=(t.colorMode||"").indexOf("Gradient")!==-1?Math.random():e;return(t.colorMode||"").indexOf("variance")===0?new se(Math.min(1,Math.max(0,n.r+Math.random()*i.r)),Math.min(1,Math.max(0,n.g+Math.random()*i.g)),Math.min(1,Math.max(0,n.b+Math.random()*i.b))):(t.colorMode||"").indexOf("mix")===0?new se(t.color1+o*t.color2):n.clone().lerp(i,o)}onUpdate(){const e=performance.now();let t=(e-this.last)/1e3;t>1&&(t=1),this.last=e,this._useGPGPU?this._updateGPGPU(t,e):this._updateCPU()}_updateGPGPU(e,t){this.positionUniforms.time.value=t,this.positionUniforms.delta.value=e,this.velocityUniforms.time.value=t,this.velocityUniforms.delta.value=e,this.birdUniforms.time.value=t,this.birdUniforms.delta.value=e,this.velocityUniforms.predator.value.set(this.mouseX,-this.mouseY,0),this.mouseX=1e4,this.mouseY=1e4,this.gpuCompute.compute(),this.birdUniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.birdUniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture}_updateCPU(){const e=this.options;for(let t=0;t<this.cpuBirds.length;t++){const n=this.boids[t];n.run(this.boids);const i=this.cpuBirds[t];i.rotation.y=Math.atan2(-n.velocity.z,n.velocity.x),i.rotation.z=Math.asin(n.velocity.y/(n.velocity.length()||1)),i.phase=(i.phase+(Math.max(0,i.rotation.z)+.1))%62.83,i.geometry.attributes.position.array[16]=i.geometry.attributes.position.array[13]=Math.sin(i.phase)*5*e.birdSize,i.geometry.attributes.position.needsUpdate=!0,i.position.copy(n.position)}}onMouseMove(e,t){if(this.mouseX=e-.5,this.mouseY=t-.5,!this._useGPGPU&&this.boids){const n=new P(this.mouseX*this.width,-this.mouseY*this.height,0);for(const i of this.boids)n.z=i.position.z,i.repulse(n)}}}function cy(s,e){const t=e.WIDTH,n=e.BIRDS,i=new dt,r=3,o=n*r,a=o*3,l=new mt(new Float32Array(a*3),3),c=new mt(new Float32Array(a*3),3),u=new mt(new Float32Array(a*2),2),h=new mt(new Float32Array(a),1);i.setAttribute("position",l),i.setAttribute("birdColor",c),i.setAttribute("reference",u),i.setAttribute("birdVertex",h);let d=0;const f=function(){for(let p=0;p<arguments.length;p++)l.array[d++]=arguments[p]},g=s.wingSpan||20,_=s.birdSize||1;for(let p=0;p<n;p++)f(0,-0,-20*_,0,4*_,-20*_,0,0,30*_),f(0,0,-15*_,-g*_,0,0,0,0,15*_),f(0,0,15*_,g*_,0,0,0,0,-15*_);const m={};for(d=0;d<o*3;d++){const p=~~(~~(d/3)/r),b=p%t/t,x=~~(p/t)/t,v=~~(d/9)/n,R=v.toString(),T=(s.colorMode||"").indexOf("Gradient")!==-1;let E;!T&&m[R]?E=m[R]:E=e._getNewCol(v),!T&&!m[R]&&(m[R]=E),c.array[d*3]=E.r,c.array[d*3+1]=E.g,c.array[d*3+2]=E.b,u.array[d*2]=b,u.array[d*2+1]=x,h.array[d]=d%9}return i.scale(.2,.2,.2)}function hy(s){const e=s.image.data;for(let t=0;t<e.length;t+=4)e[t]=Math.random()*er-xa,e[t+1]=Math.random()*er-xa,e[t+2]=Math.random()*er-xa,e[t+3]=1}function uy(s){const e=s.image.data;for(let t=0;t<e.length;t+=4)e[t]=(Math.random()-.5)*10,e[t+1]=(Math.random()-.5)*10,e[t+2]=(Math.random()-.5)*10,e[t+3]=1}const dy=`uniform float time;
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
}`,fy=`uniform float time;
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
}`,py=`attribute vec2 reference;
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
}`,my=`varying vec4 vColor;
varying float z;
uniform vec3 color;
void main() {
  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;
  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;
  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;
  gl_FragColor = vec4( rr, gg, bb, 1. );
}`;function gy(s={}){const e=1.5*(s.birdSize||1),t=[new P(5*e,0,0),new P(-5*e,-1*e,1*e),new P(-5*e,0,0),new P(-5*e,-2*e,-1*e),new P(0,2*e,-6*e),new P(0,2*e,6*e),new P(2*e,0,0),new P(-3*e,0,0)],n=new dt().setFromPoints(t);return n.setIndex([0,2,1,4,7,6,5,6,7]),n}class _y{constructor(e){this._o=e,this.position=new P,this.velocity=new P,this._acc=new P,this._w=500,this._h=500,this._d=200,this._nr=100,this._ms=2.5,this._mf=.1}setWorldSize(e,t,n){this._w=e,this._h=t,this._d=n}run(e){const t=new P,n=[[-this._w,this.position.y,this.position.z],[this._w,this.position.y,this.position.z],[this.position.x,-this._h,this.position.z],[this.position.x,this._h,this.position.z],[this.position.x,this.position.y,-this._d],[this.position.x,this.position.y,this._d]];for(const r of n)t.set(r[0],r[1],r[2]),this._acc.add(this._avoid(t).multiplyScalar(5));Math.random()>.5&&(this._acc.add(this._alignment(e)),this._acc.add(this._cohesion(e)),this._acc.add(this._separation(e))),this.velocity.add(this._acc);const i=this.velocity.length();i>this._ms&&this.velocity.divideScalar(i/this._ms),this.position.add(this.velocity),this._acc.set(0,0,0)}_avoid(e){const t=new P;return t.copy(this.position).sub(e),t.multiplyScalar(1/this.position.distanceToSquared(e)),t}repulse(e){const t=this.position.distanceTo(e);if(t<150){const n=new P;n.subVectors(this.position,e).multiplyScalar(.5/t),this._acc.add(n)}}_alignment(e){const t=new P;let n=0;const i=this._nr*this._o.alignment/20;for(let r=0;r<e.length;r++){if(Math.random()>.6)continue;const o=e[r].position.distanceTo(this.position);o>0&&o<=i&&(t.add(e[r].velocity),n++)}if(n>0){t.divideScalar(n);const r=t.length();r>this._mf&&t.divideScalar(r/this._mf)}return t}_cohesion(e){const t=new P,n=new P;let i=0;const r=this._nr*this._o.cohesion/20;for(let a=0;a<e.length;a++){if(Math.random()>.6)continue;const l=e[a].position.distanceTo(this.position);l>0&&l<=r&&(t.add(e[a].position),i++)}i>0&&t.divideScalar(i),n.subVectors(t,this.position);const o=n.length();return o>this._mf&&n.divideScalar(o/this._mf),n}_separation(e){const t=new P,n=new P,i=this._nr*this._o.separation/20;for(let r=0;r<e.length;r++){if(Math.random()>.6)continue;const o=e[r].position.distanceTo(this.position);o>0&&o<=i&&(n.subVectors(this.position,e[r].position).normalize().divideScalar(o),t.add(n))}return t}}class vy extends Ls{getDefaults(){return{color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}onInit(){const e=this._ownScene,t=this.options;this.cont=new jt,e.add(this.cont),this.points=[];const n=t.points,i=t.spacing,r=n*n*2;this.linePositions=new Float32Array(r*r*3),this.lineColors=new Float32Array(r*r*3);const o=new dt;o.setAttribute("position",new mt(this.linePositions,3).setUsage(pi)),o.setAttribute("color",new mt(this.lineColors,3).setUsage(pi)),o.computeBoundingSphere(),o.setDrawRange(0,0);const a=new di({vertexColors:!0,transparent:!0});this.linesMesh=new Ai(o,a),this.cont.add(this.linesMesh);for(let u=0;u<=n;u++)for(let h=0;h<=n;h++){const d=ln(-3,3),f=(u-n/2)*i+ln(-5,5);let g=(h-n/2)*i+ln(-5,5);u%2&&(g+=i*.5),this._genPoint(f,d-ln(5,15),g),this._genPoint(f+ln(-5,5),d+ln(5,15),g+ln(-5,5))}this.camera=new yt(25,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.camera.tx=50,this.camera.ty=100,e.add(this.camera);const l=new mi(16777215,.75);e.add(l);const c=new Rs(16777215,1);c.position.set(0,200,0),c.distance=400,c.target=this.cont,e.add(c)}_genPoint(e,t,n){let i;if(this.options.showDots){const r=new lr(.25,8,8),o=new Vl({color:this.options.color});i=new nt(r,o)}else i=new it;this.cont.add(i),i.ox=e,i.oy=t,i.oz=n,i.position.set(e,t,n),i.r=je(-2,2),this.points.push(i)}onUpdate(){const e=this.camera;e.tx!==void 0&&(Math.abs(e.tx-e.position.x)>.01&&(e.position.x+=(e.tx-e.position.x)*.02),Math.abs(e.ty-e.position.y)>.01&&(e.position.y+=(e.ty-e.position.y)*.02)),e.lookAt(0,0,0);let t=0,n=0,i=0;const r=new se(this.options.backgroundColor),a=new se(this.options.color).clone().sub(r);for(let l=0;l<this.points.length;l++){const c=this.points[l];if(c.r!==0){let u=Math.atan2(c.position.z,c.position.x);const h=Math.sqrt(c.position.z**2+c.position.x**2);u+=25e-5*c.r,c.position.x=h*Math.cos(u),c.position.z=h*Math.sin(u)}for(let u=l+1;u<this.points.length;u++){const h=this.points[u],d=c.position.x-h.position.x,f=c.position.y-h.position.y,g=c.position.z-h.position.z,_=Math.sqrt(d*d+f*f+g*g);if(_<this.options.maxDistance){const m=Math.min(1,(1-_/this.options.maxDistance)*2),p=new se(0).lerp(a,m);this.linePositions[t++]=c.position.x,this.linePositions[t++]=c.position.y,this.linePositions[t++]=c.position.z,this.linePositions[t++]=h.position.x,this.linePositions[t++]=h.position.y,this.linePositions[t++]=h.position.z,this.lineColors[n++]=p.r,this.lineColors[n++]=p.g,this.lineColors[n++]=p.b,this.lineColors[n++]=p.r,this.lineColors[n++]=p.g,this.lineColors[n++]=p.b,i++}}}this.linesMesh.geometry.setDrawRange(0,i*2),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0}onMouseMove(e,t){const n=this.camera;n.ox||(n.ox=n.position.x,n.oy=n.position.y,n.oz=n.position.z);const i=Math.atan2(n.oz,n.ox),r=Math.sqrt(n.oz**2+n.ox**2),o=i+(e-.5)*2;n.tx=r*Math.cos(o),n.ty=n.oy+(t-.5)*50}}class xy extends Ls{getDefaults(){return{color:21896,shininess:30,waveHeight:15,waveSpeed:1,zoom:1}}onInit(){const e=this._ownScene,t=this.options,n=100,i=80,r=18,o=[];this.gg=[],this.oy={};for(let h=0;h<=n;h++){this.gg[h]=[];for(let d=0;d<=i;d++){const f=o.length;o.push(new P((h-n*.5)*r,je(0,4)-10,(i*.5-d)*r)),this.gg[h][d]=f}}const a=new dt().setFromPoints(o),l=[];for(let h=1;h<=n;h++)for(let d=1;d<=i;d++){const f=this.gg[h][d],g=this.gg[h][d-1],_=this.gg[h-1][d],m=this.gg[h-1][d-1];ln(0,1)?l.push(m,g,_,g,_,f):l.push(m,g,f,m,_,f)}a.setIndex(l);const c=new tv({color:t.color,shininess:t.shininess,flatShading:!0,side:Pt});this.plane=new nt(a,c),e.add(this.plane),e.add(new mi(16777215,.9));const u=new vr(16777215,.9);u.position.set(-100,250,-100),e.add(u),this.camera=new yt(35,this.width/this.height,50,1e4),this.cameraPosition=new P(240,200,390),this.cameraTarget=new P(140,-30,190),this.camera.position.copy(this.cameraPosition),this.camera.tx=this.cameraPosition.x,this.camera.ty=this.cameraPosition.y,this.camera.tz=this.cameraPosition.z,e.add(this.camera)}onUpdate(){const e=this.options,t=this.camera;this.plane.material.color.set(e.color),this.plane.material.shininess=e.shininess,t.ox=this.cameraPosition.x/e.zoom,t.oy=this.cameraPosition.y/e.zoom,t.oz=this.cameraPosition.z/e.zoom,Math.abs(t.tx-t.position.x)>.01&&(t.position.x+=(t.tx-t.position.x)*.02),Math.abs(t.ty-t.position.y)>.01&&(t.position.y+=(t.ty-t.position.y)*.02),Math.abs(t.tz-t.position.z)>.01&&(t.position.z+=(t.tz-t.position.z)*.02),t.lookAt(this.cameraTarget);const n=this.plane.geometry.attributes.position.array,i=e.waveSpeed;for(let r=0;r<n.length;r+=3){const o=n[r],a=n[r+2];if(!this.oy[r]){this.oy[r]=n[r+1];continue}const l=Math.sqrt(i)*Math.cos(-o-a*.7),c=Math.sin(i*this.t*2e-5-i*o*.025+i*a*.015+l);n[r+1]=this.oy[r]+Math.pow(c+1,2)/4*e.waveHeight}this.plane.geometry.attributes.position.setUsage(pi),this.plane.geometry.computeVertexNormals(),this.plane.geometry.attributes.position.needsUpdate=!0}onMouseMove(e,t){const n=this.camera,i=this.options;n.ox||(n.ox=n.position.x,n.oy=n.position.y,n.oz=n.position.z),n.tx=n.ox+(e-.5)*100/i.zoom,n.ty=n.oy+(t-.5)*-100/i.zoom,n.tz=n.oz+(e-.5)*-50/i.zoom}}class yy extends Ls{getDefaults(){return{color:16746528,color2:16746528,backgroundColor:2236962,size:3,spacing:35,showLines:!0}}onInit(){const e=this._ownScene,t=this.options;this.camera=new yt(50,this.width/this.height,.1,5e3),this.camera.position.set(0,250,50),this.camera.tx=0,this.camera.ty=50,this.camera.tz=350,e.add(this.camera);const n=[],i=t.spacing;for(let o=-30;o<=30;o++)for(let a=-30;a<=30;a++)n.push(new P(o*i+i/2,je(0,5)-150,a*i+i/2));this.starsGeo=new dt().setFromPoints(n);const r=new Ul({color:t.color,size:t.size});if(this.starField=new Fl(this.starsGeo,r),e.add(this.starField),t.showLines){const o=[];for(let l=0;l<200;l++){const c=je(40,60),u=c+je(12,20),h=je(-1,1),d=Math.sqrt(1-h*h),f=je(0,Math.PI*2),g=Math.sin(f)*d,_=Math.cos(f)*d;o.push(new P(_*c,g*c,h*c),new P(_*u,g*u,h*u))}const a=new dt().setFromPoints(o);this.linesMesh=new Ai(a,new di({color:t.color2})),e.add(this.linesMesh)}}onUpdate(){const e=this.starsGeo.attributes.position.array;for(let n=0;n<e.length;n+=3)e[n+1]+=.1*Math.sin(e[n+2]*.02+e[n]*.015+this.t*2e-5);this.starsGeo.attributes.position.setUsage(pi),this.starsGeo.attributes.position.needsUpdate=!0;const t=this.camera;t.position.x+=(t.tx-t.position.x)*.003,t.position.y+=(t.ty-t.position.y)*.003,t.position.z+=(t.tz-t.position.z)*.003,t.lookAt(0,0,0),this.linesMesh&&(this.linesMesh.rotation.z+=.002,this.linesMesh.rotation.x+=8e-4,this.linesMesh.rotation.y+=5e-4)}onMouseMove(e,t){this.camera.tx=(e-.5)*100,this.camera.ty=50+t*50}}const My=[16720469,16716185,16737996,8978176,7851025,16776960,16742195,1179647,1149149,16768290,2250188,7975100,5468283];class Sy extends Ls{getDefaults(){return{backgroundColor:2106408,color:8978176}}onInit(){const e=this._ownScene;this.rings=[],this.cont=new jt,this.cont.position.set(30,0,0),this.cont.rotation.x=.067,this.cont.rotation.z=.167,e.add(this.cont);for(let i=0;i<60;i++){let r,o;ln(0,3)?(r=je(2,4)+je(1,30)*je(1,2)*je(1,2)*je(1,2),o=je(0,3.5)+je(0,3.5)-ln(0,Math.floor(r/4))-r/50):(r=je(1,3)*je(2,4),o=je(1,2)*je(1,2)*je(1.1,1.5));const a=Math.pow(2,ln(0,4))*.05;o<a&&(o=a),r<1&&(r=1),this._genRing(Zx(My),r,o,je(0,1e3),je(1,6),je(0,50/(r+1)+5)+5/o/(r+.5),Math.max(-je(.5,2),je(1,50-r/2)-r/2)*.25)}this.camera=new yt(25,this.width/this.height,10,1e4),this.camera.position.set(0,150,200),this.camera.tx=0,this.camera.ty=150,e.add(this.camera),e.add(new mi(16777215,.5));const t=new vr(16777215,.5);t.position.set(0,150,200),e.add(t);const n=new Rs(16777215,1);n.position.set(-15,50,100),n.penumbra=1,n.angle=.5,n.decay=1,n.distance=300,n.target=this.cont,e.add(n)}_genRing(e,t,n,i,r,o,a){const l=new kl;l.absarc(0,0,t+n,0,r,!1),l.lineTo(t*Math.cos(r),t*Math.sin(r)),l.absarc(0,0,t,r,0,!0);const c=new Co(l,{depth:.4,bevelEnabled:!1,steps:1,curveSegments:Math.max(4,~~(64*r/6.14))}),u=new Vl({color:e});(ln(0,1)===0||t>60)&&(u.transparent=!0,u.opacity=Math.max(50/t+je(-.3,.3),.1));const h=new nt(c,u);h.rotation.x=Math.PI/2,h.rotation.z=i,h.position.y=o,h.speed=a*.001,this.rings.push(h),this.cont.add(h)}onUpdate(){const e=this.camera;e.tx!==void 0&&(Math.abs(e.tx-e.position.x)>.01&&(e.position.x+=(e.tx-e.position.x)*.02),Math.abs(e.ty-e.position.y)>.01&&(e.position.y+=(e.ty-e.position.y)*.02)),e.lookAt(0,25,7);for(const n of this.rings)n.rotation.z+=n.speed;const t=this.t*.001;this.cont.rotation.x+=Math.sin(t)*1e-4,this.cont.rotation.z+=Math.cos(t)*7e-5}onMouseMove(e,t){const n=this.camera;n.ox||(n.ox=n.position.x,n.oy=n.position.y),n.tx=n.ox+(e-.5)*50,n.ty=n.oy-t*50}}class by extends Ls{getDefaults(){return{color:16727937,color2:16777215,size:1,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}onInit(){const e=this._ownScene,t=this.options;this.cont=new jt,this.cont.position.set(-50,-20,0),e.add(this.cont),this.points=[];const n=t.points,i=t.spacing,r=n*n*2;this.linePositions=new Float32Array(r*r*3),this.lineColors=new Float32Array(r*r*3);const o=new dt;o.setAttribute("position",new mt(this.linePositions,3).setUsage(pi)),o.setAttribute("color",new mt(this.lineColors,3).setUsage(pi)),o.computeBoundingSphere(),o.setDrawRange(0,0),this.linesMesh=new Ai(o,new di({vertexColors:!0,transparent:!0})),this.cont.add(this.linesMesh);for(let m=0;m<=n;m++)for(let p=0;p<=n;p++){const b=(m-n/2)*i,x=(p-n/2)*i;this._genDot(b,0,x)}this.cont2=new jt,this.cont2.position.set(0,15,0),e.add(this.cont2);const a=new di({color:t.color}),l=new lr(18*t.size,18,14),c=new U_(l);this.sphere=new Ai(c,a),this.cont2.add(this.sphere);const u=new di({color:t.color2}),h=[];for(let m=0;m<80;m++){const p=je(18,24),b=p+je(1,6),x=je(-1,1),v=Math.sqrt(1-x*x),R=je(0,Math.PI*2);h.push(new P(Math.cos(R)*v*p,Math.sin(R)*v*p,x*p)),h.push(new P(Math.cos(R)*v*b,Math.sin(R)*v*b,x*b))}this.linesMesh2=new Ai(new dt().setFromPoints(h),u),this.cont2.add(this.linesMesh2);const d=new di({color:t.color2}),f=[new P(0,30,0),new P(0,-30,0)],g=[17.9,12,8,5,3,2,1.5,1.1,.8,.6,.45,.3,.2,.1,.05,.03,.02,.01];for(let m=0;m<4;m++){const p=.15*Math.cos(m/4*Math.PI*2),b=.15*Math.sin(m/4*Math.PI*2);for(let x=0;x<g.length;x++){const v=6*(x+1);f.push(new P(p*v,g[x],b*v),new P(p*v,-g[x],b*v))}}this.linesMesh3=new Ai(new dt().setFromPoints(f),d),this.cont2.add(this.linesMesh3),this.cont2.rotation.x=-.25,this.camera=new yt(20,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.camera.tx=50,this.camera.ty=100,e.add(this.camera),e.add(new mi(16777215,.75));const _=new Rs(16777215,1);_.position.set(0,200,0),_.distance=400,_.target=this.cont,e.add(_)}_genDot(e,t,n){let i;this.options.showDots?i=new nt(new lr(.25,8,8),new Vl({color:this.options.color})):i=new it,this.cont.add(i),i.ox=e,i.oy=t,i.oz=n,i.position.set(e,t,n),this.points.push(i)}onUpdate(){const e=this.camera;e.tx!==void 0&&(Math.abs(e.tx-e.position.x)>.01&&(e.position.x+=(e.tx-e.position.x)*.02),Math.abs(e.ty-e.position.y)>.01&&(e.position.y+=(e.ty-e.position.y)*.02)),e.lookAt(-40,0,0),this.linesMesh2&&(this.linesMesh2.rotation.z+=.002,this.linesMesh2.rotation.x+=8e-4,this.linesMesh2.rotation.y+=5e-4),this.sphere&&(this.sphere.rotation.y+=.002,this.linesMesh3.rotation.y-=.004);let t=0,n=0,i=0;const r=new se(this.options.backgroundColor),a=new se(this.options.color).clone().sub(r);for(let l=0;l<this.points.length;l++){const c=this.points[l];c.position.y=2*Math.sin(c.position.x/10+this.t*1e-5+c.position.z/10*.5);for(let u=l+1;u<this.points.length;u++){const h=this.points[u],d=c.position.x-h.position.x,f=c.position.y-h.position.y,g=c.position.z-h.position.z,_=Math.sqrt(d*d+f*f+g*g);if(_<this.options.maxDistance){const m=Math.min(1,(1-_/this.options.maxDistance)*2),p=new se(0).lerp(a,m);this.linePositions[t++]=c.position.x,this.linePositions[t++]=c.position.y,this.linePositions[t++]=c.position.z,this.linePositions[t++]=h.position.x,this.linePositions[t++]=h.position.y,this.linePositions[t++]=h.position.z,this.lineColors[n++]=p.r,this.lineColors[n++]=p.g,this.lineColors[n++]=p.b,this.lineColors[n++]=p.r,this.lineColors[n++]=p.g,this.lineColors[n++]=p.b,i++}}}this.linesMesh.geometry.setDrawRange(0,i*2),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0}onMouseMove(e,t){const n=this.camera;n.ox||(n.ox=n.position.x,n.oy=n.position.y,n.oz=n.position.z);const i=Math.atan2(n.oz,n.ox),r=Math.sqrt(n.oz**2+n.ox**2),o=i+(e-.5)*1.5;n.tx=r*Math.cos(o),n.ty=n.oy+(t-.5)*80}}class wy extends Ds{getDefaults(){return{backgroundColor:0,skyColor:6072010,cloudColor:3362176,lightColor:16777215,speed:1}}static get fragmentShader(){return Ay}}class Ty{constructor(e={}){const t={color:9016910,backgroundColor:8738,speed:1};this._params={...t,...e},this._canvas=null,this._ctx=null,this._particles=[],this._flowGrid=[],this._tick=0,this._raf=0}getDefaults(){return this._params}build(){return this._canvas=document.createElement("canvas"),this._canvas.style.cssText="position:fixed;inset:0;z-index:-1;pointer-events:none;",this._canvas.width=window.innerWidth,this._canvas.height=window.innerHeight,this._ctx=this._canvas.getContext("2d"),this._initFlow(),this._initParticles(),this}addTo(){return document.getElementById("canvas-container").appendChild(this._canvas),this._draw(),this}_initFlow(){const e=this._canvas.width,t=this._canvas.height,n=100,i=10,r=.003,o=.1,a=Math.ceil((e+n*2)/i),l=Math.ceil((t+n*2)/i);this._flowCols=a,this._flowRows=l,this._cellSize=i,this._offset=n,this._flowGrid=[];for(let c=0;c<l;c++){const u=[];for(let h=0;h<a;h++){const d=h*r,f=c*r;let g=0,_=0,m=0,p=0,b=-1,x=2;for(let E=0;E<50;E++){const A=E/50*Math.PI*2,M=d+Math.cos(A)*o,y=f+Math.sin(A)*o,D=Math.sin(M*127.1+y*311.7)*43758.5453%1,O=Math.abs(D);O>b&&(b=O,g=M,_=y),O<x&&(x=O,m=M,p=y)}const v=m-g,R=p-_,T=Math.sqrt(v*v+R*R)||1;u.push({x:v/T*(b-x),y:R/T*(b-x)})}this._flowGrid.push(u)}}_initParticles(){const e=this._canvas.width+this._offset*2,t=this._canvas.height+this._offset*2;this._particles=[];for(let n=0;n<4500;n++){const i=Math.random()*e,r=Math.random()*t;this._particles.push({x:i,y:r,px:i,py:r,vx:0,vy:0})}}_draw(){const e=this._ctx,t=this._params,n=new _l(t.color);e.translate(-this._offset,-this._offset),e.strokeStyle=`rgba(${n.r},${n.g},${n.b},0.05)`,e.lineWidth=1;const i=()=>{var a;this._raf=requestAnimationFrame(i);const r=this._canvas.width+this._offset*2,o=this._canvas.height+this._offset*2;for(const l of this._particles){const c=Math.min(this._flowCols-1,Math.max(0,Math.floor(l.x/this._cellSize))),u=Math.min(this._flowRows-1,Math.max(0,Math.floor(l.y/this._cellSize))),h=((a=this._flowGrid[u])==null?void 0:a[c])||{x:0,y:0};l.px=l.x,l.py=l.y,l.x=((l.x+l.vx)%r+r)%r,l.y=((l.y+l.vy)%o+o)%o,l.vx=(l.vx+h.x*3)*.95,l.vy=(l.vy+h.y*3)*.95;const d=Math.sqrt(l.vx*l.vx+l.vy*l.vy);d>2.2&&(l.vx*=2.2/d,l.vy*=2.2/d)}e.beginPath();for(const l of this._particles){const c=l.x-l.px,u=l.y-l.py;Math.sqrt(c*c+u*u)<10&&(e.moveTo(l.px,l.py),e.lineTo(l.x,l.y))}e.stroke(),this._tick+=.002};i()}setMouse(){}setPosition(){return this}setScale(){return this}resize(e,t){this._canvas&&(this._canvas.width=e,this._canvas.height=t)}update(){return this}dispose(){cancelAnimationFrame(this._raf),this._canvas&&this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)}}class Ey{constructor(e={}){const t={color:9979487,backgroundColor:2237478,spacing:0,chaos:1};this._params={...t,...e},this._canvas=null,this._ctx=null,this._raf=0,this._ox=Math.random()*1e4,this._oy=Math.random()*1e4,this._oz=Math.random()*1e4}getDefaults(){return this._params}build(){return this._canvas=document.createElement("canvas"),this._canvas.style.cssText="position:fixed;inset:0;z-index:-1;pointer-events:none;",this._canvas.width=window.innerWidth,this._canvas.height=window.innerHeight,this._ctx=this._canvas.getContext("2d"),this}addTo(){return document.getElementById("canvas-container").appendChild(this._canvas),this._draw(),this}_noise(e,t,n){const i=e*12.9898+t*78.233+(n||0)*43.1234;return Math.sin(i)*43758.5453%1*.5+.5}_draw(){const e=()=>{this._raf=requestAnimationFrame(e);const t=this._ctx,n=this._canvas.width,i=this._canvas.height,r=this._params,o=new _l(r.backgroundColor);t.fillStyle=`rgb(${o.r},${o.g},${o.b})`,t.fillRect(0,0,n,i);const a=new _l(r.color);t.strokeStyle=`rgb(${a.r},${a.g},${a.b})`,t.lineWidth=1,t.translate(n/2,i/2);const l=55,c=50,u=4,h=.2,d=.12,f=20;this._oy-=.02,this._oz+=5e-5;for(let g=0;g<l;g++){t.beginPath();for(let _=0;_<360;_++){const m=_*Math.PI/180,p=d*g+h,b=this._noise(this._ox+Math.cos(m)*p,this._oy+Math.sin(m)*p,this._oz),x=r.chaos*f*b+(u*g+c)+g*(r.spacing||0),v=x*Math.cos(m),R=x*Math.sin(m);_===0?t.moveTo(v,R):t.lineTo(v,R)}t.closePath(),t.stroke()}t.setTransform(1,0,0,1,0,0)};e()}setMouse(){}setPosition(){return this}setScale(){return this}resize(e,t){this._canvas&&(this._canvas.width=e,this._canvas.height=t)}update(){return this}dispose(){cancelAnimationFrame(this._raf),this._canvas&&this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)}}class _l{constructor(e){typeof e=="number"?(this.r=e>>16&255,this.g=e>>8&255,this.b=e&255):this.r=this.g=this.b=128}}const Ay=`
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
}`,$t={butterfly:{title:"BionicButterfly",desc:"薄膜干涉 Thin-film Iridescence 结构色 + 各向异性高光 + GPU Vertex Kinematics",tags:[["Iridescence","green"],["Anisotropic","purple"],["Kinematics","pink"]],cam:[0,2,4],look:[0,1.5,0],defs:{seed:123,wingSpan:2,flapFrequency:6,flapAmplitude:.7,baseColor:[.05,.02,.15],filmThickness:380,ior:1.5,iridescenceIntensity:.9},sl:[{s:"Wing"},{k:"wingSpan",l:"翅展",mn:.5,mx:4,st:.05},{s:"Animation"},{k:"flapFrequency",l:"频率",mn:1,mx:20,st:.1},{k:"flapAmplitude",l:"振幅",mn:.1,mx:1.5,st:.01},{s:"Optics"},{k:"filmThickness",l:"薄膜nm",mn:200,mx:600,st:1},{k:"ior",l:"折射率",mn:1,mx:2.5,st:.01},{k:"iridescenceIntensity",l:"干涉色",mn:0,mx:1,st:.01},{k:"seed",l:"种子",mn:1,mx:9999,st:1}],pal:[{n:"紫夜蝶",c:[.05,.02,.15]},{n:"蓝闪蝶",c:[.02,.05,.2]},{n:"翠凤蝶",c:[.02,.1,.05]},{n:"金斑蝶",c:[.15,.08,.02]}]},flock:{title:"Boids Swarm",desc:"Reynolds Boids 集群 (分离/对齐/聚合) + InstancedMesh + GPU 相位差振翅",tags:[["Boids","green"],["Instanced","purple"],["Phase Shift","pink"]],cam:[0,8,20],look:[0,5,0],defs:{seed:77,wingSpan:.6,flapFrequency:10,flapAmplitude:.6,baseColor:[.08,.03,.2],filmThickness:350,iridescenceIntensity:.85,flockCount:80},sl:[{s:"Flock"},{k:"flockCount",l:"数量",mn:10,mx:200,st:1},{s:"Individual"},{k:"wingSpan",l:"翅展",mn:.2,mx:1.5,st:.05},{k:"flapFrequency",l:"频率",mn:3,mx:20,st:.1},{k:"flapAmplitude",l:"振幅",mn:.1,mx:1.2,st:.01},{s:"Optics"},{k:"filmThickness",l:"薄膜nm",mn:200,mx:600,st:1},{k:"iridescenceIntensity",l:"干涉色",mn:0,mx:1,st:.01},{k:"seed",l:"种子",mn:1,mx:9999,st:1}],pal:[{n:"紫群",c:[.08,.03,.2]},{n:"蓝群",c:[.03,.05,.18]},{n:"金群",c:[.12,.08,.02]}]},mandelbulb:{title:"Mandelbulb",desc:"3D 分形 · Raymarching SDF + 4D Simplex Noise + 轨道陷阱着色",tags:[["Raymarching","green"],["SDF","purple"],["4D Noise","pink"]],cam:null,look:null,defs:{power:8,iterations:12,bailout:2,scale:2,glowIntensity:.5,animate:!0,colorA:[.1,.2,.6],colorB:[.9,.3,.1]},sl:[{s:"Fractal"},{k:"power",l:"幂次",mn:2,mx:16,st:.1},{k:"iterations",l:"迭代",mn:4,mx:20,st:1},{k:"bailout",l:"逃逸",mn:1,mx:4,st:.1},{k:"scale",l:"缩放",mn:.5,mx:4,st:.05},{s:"Visual"},{k:"glowIntensity",l:"辉光",mn:0,mx:2,st:.01}],pal:[{n:"深海",cA:[.1,.2,.6],cB:[.9,.3,.1]},{n:"岩浆",cA:[.5,.05,0],cB:[1,.8,.1]},{n:"极光",cA:[0,.3,.2],cB:[.2,.8,.6]},{n:"紫晶",cA:[.2,.05,.3],cB:[.8,.3,.9]}]},"trois-flower":{title:"TroisFlower",desc:"LD 原版 TroisJS 花效果 · ExtrudeGeometry + InstancedMesh + onBeforeCompile Shader 卷曲/脉络/碗形变形",tags:[["InstancedMesh","green"],["Physical Material","purple"],["Shader Vein","pink"]],cam:[0,-4,5],look:[0,0,0],defs:{seed:42,preset:"rose",rings:14,petals:7,size:.75,dx:.4,dy:.8,maxRadius:.1,maxScale:2.2,startRx:2.42,zOffsetCoef:.5,bowlDepth:.35,taperPow:.75,baseCurl:1.5,curlVar:.15,baseTwist:.4,twistVar:0,metalness:0,roughness:.43,transmission:.17,sheen:.47,clearcoat:.1,veinStr:.6,edgeLight:.2,hueShift:0},sl:[{s:"🌹 Preset 花型"},{k:"rings",l:"花环层数",mn:5,mx:60,st:1},{k:"petals",l:"每层花瓣",mn:3,mx:16,st:1},{s:"🍃 Petal 花瓣"},{k:"size",l:"花瓣长度",mn:.3,mx:2.5,st:.05},{k:"dx",l:"横向弧度",mn:.05,mx:2,st:.05},{k:"dy",l:"纵向弧度",mn:0,mx:2,st:.05},{k:"bowlDepth",l:"碗形深度",mn:0,mx:2,st:.05},{k:"taperPow",l:"尖端锥度",mn:.3,mx:2,st:.05},{s:"🌺 Flower 形态"},{k:"maxRadius",l:"散开半径",mn:0,mx:5,st:.1},{k:"maxScale",l:"最大缩放",mn:.5,mx:5,st:.1},{k:"startRx",l:"展开角度",mn:.1,mx:3.14,st:.01},{k:"zOffsetCoef",l:"螺旋扭转",mn:0,mx:10,st:.05},{s:"🌀 Curl 卷曲"},{k:"baseCurl",l:"基础卷曲",mn:0,mx:4,st:.1},{k:"curlVar",l:"卷曲随机",mn:0,mx:2,st:.05},{k:"baseTwist",l:"基础扭转",mn:0,mx:3,st:.1},{k:"twistVar",l:"扭转随机",mn:0,mx:2,st:.05},{s:"✨ Material 材质"},{k:"metalness",l:"金属度",mn:0,mx:1,st:.01},{k:"roughness",l:"粗糙度",mn:0,mx:1,st:.01},{k:"transmission",l:"透光度",mn:0,mx:1,st:.01},{k:"sheen",l:"丝绒光泽",mn:0,mx:1,st:.01},{k:"clearcoat",l:"清漆",mn:0,mx:1,st:.01},{s:"🖌 Shader 脉络"},{k:"veinStr",l:"脉络强度",mn:0,mx:2,st:.05},{k:"edgeLight",l:"边缘透光",mn:0,mx:1,st:.05},{k:"hueShift",l:"色相偏移",mn:0,mx:1,st:.005},{k:"seed",l:"种子",mn:1,mx:9999,st:1}],pal:[{n:"🌹 玫瑰",c:[1,0,0]},{n:"🪷 荷花",c:[1,.41,.71]},{n:"🌼 菊花",c:[1,.84,0]},{n:"🌸 樱花",c:[1,.72,.77]},{n:"🌷 郁金香",c:[1,.2,0]},{n:"💮 百合",c:[1,.8,0]}]},dahlia:{title:"Dahlia 大丽花",desc:"程序化多层花瓣 InstancedMesh · 7 层 74 瓣 + wrap lighting + SSS + 星空背景",tags:[["InstancedMesh","green"],["SSS","purple"],["Bézier Petal","pink"]],cam:null,look:null,defs:{petalScale:1,petalLength:1,petalWidth:1,openAngleScale:1,bloomWaveAmp:.14,cycleDuration:5,breatheAmp:.004,energyWaveSpeed:.4,energyWaveStrength:.22,fresnelStrength:.38,coreGlow:.55,specularStr:.14,sssStrength:.25,autoRotateSpeed:.015},sl:[{s:"🌸 花瓣形态"},{k:"petalScale",l:"整体缩放",mn:.5,mx:2,st:.05},{k:"openAngleScale",l:"展开角度",mn:.5,mx:2,st:.05},{s:"💓 动画"},{k:"bloomWaveAmp",l:"波浪幅度",mn:0,mx:.4,st:.01},{k:"cycleDuration",l:"周期(秒)",mn:2,mx:12,st:.5},{k:"breatheAmp",l:"呼吸幅度",mn:0,mx:.02,st:.001},{s:"✨ 光效"},{k:"energyWaveSpeed",l:"能量波速",mn:.1,mx:1.5,st:.05},{k:"energyWaveStrength",l:"能量波强度",mn:0,mx:.5,st:.01},{k:"fresnelStrength",l:"菲涅尔",mn:0,mx:1,st:.02},{k:"coreGlow",l:"花心辉光",mn:0,mx:1.5,st:.05},{k:"specularStr",l:"高光",mn:0,mx:.5,st:.01},{k:"sssStrength",l:"SSS 强度",mn:0,mx:1,st:.02},{s:"📷 交互"},{k:"autoRotateSpeed",l:"自转速度",mn:0,mx:.1,st:.005}],pal:[]},bloom:{title:"Bloom 绽放",desc:"多材质花朵绽放 · SSS / Fresnel / 彩虹 / 丝绸 / 水晶 5种 Shader 可切换",tags:[["Multi-Shader","green"],["SSS","purple"],["Fresnel","pink"]],cam:null,look:null,defs:{envIntensity:.5,envRotation:-2.094,cameraZoom:2.5,cameraFov:75,startProgress:1,cycleDuration:6,petalRotStep:140,scaleMinY:.01,scaleMaxY:.7,scaleMinZ:.3,scaleMaxZ:.4,bendMin:1,bendMax:-2,shaderType:0,baseColor:"#c08cf2",roughness:.55,metalness:0,emissiveColor:"#804db3",emissiveIntensity:.8,sssIntensity:.6,sssColor:"#cc80ff",fresnelPower:2.5,fresnelColor:"#8059cc",fresnelIntensity:.5,pointLightIntensity:3.5,pointLightColor:"#e6b3ff",pointLightY:.3,envLightIntensity:1.2,dirLightIntensity:.8,translucency:.5,rimWidth:.3,rimColor:"#6644aa",rimIntensity:0,distortStrength:.05,distortBrush:.08,distortFade:.9,particleSize:.01,particleGravity:.0098,particleSpread:20,stemRoughness:.5,stemPosY:-3.3,bgColorTop:"#000000",bgColorBot:"#8386ff"},sl:[{s:"📷 相机"},{k:"cameraZoom",l:"缩放",mn:.5,mx:5,st:.1},{k:"cameraFov",l:"视角FOV",mn:20,mx:120,st:1},{s:"🎨 材质类型"},{k:"shaderType",l:"Shader",mn:0,mx:4,st:1,labels:["SSS 通透","Fresnel 菲涅尔","Iridescent 彩虹","Silk 丝绸","Crystal 水晶"]},{s:"� 材质颜色"},{k:"baseColor",l:"花瓣基色",type:"color"},{k:"emissiveColor",l:"自发光色",type:"color"},{k:"sssColor",l:"SSS 散射色",type:"color"},{k:"fresnelColor",l:"菲涅尔色",type:"color"},{k:"pointLightColor",l:"点光源色",type:"color"},{s:"🔆 材质参数"},{k:"roughness",l:"粗糙度",mn:0,mx:1,st:.01},{k:"metalness",l:"金属度",mn:0,mx:1,st:.01},{k:"emissiveIntensity",l:"自发光强度",mn:0,mx:3,st:.05},{k:"sssIntensity",l:"SSS 散射强度",mn:0,mx:2,st:.05},{k:"translucency",l:"通透度",mn:0,mx:1,st:.01},{s:"✨ 菲涅尔"},{k:"fresnelPower",l:"菲涅尔指数",mn:.5,mx:8,st:.1},{k:"fresnelIntensity",l:"菲涅尔强度",mn:0,mx:2,st:.05},{s:"� 描边/轮廓"},{k:"rimIntensity",l:"描边强度",mn:0,mx:2,st:.05},{k:"rimWidth",l:"描边宽度",mn:.05,mx:2,st:.05},{k:"rimColor",l:"描边颜色",type:"color"},{s:"�💡 光照"},{k:"pointLightIntensity",l:"点光源强度",mn:0,mx:10,st:.1},{k:"pointLightY",l:"点光源高度",mn:-2,mx:3,st:.1},{k:"envLightIntensity",l:"环境光强度",mn:0,mx:3,st:.05},{k:"dirLightIntensity",l:"方向光强度",mn:0,mx:3,st:.05},{s:"�🌸 花瓣动画"},{k:"startProgress",l:"绽放进度",mn:0,mx:1,st:.01},{k:"cycleDuration",l:"循环周期(秒)",mn:2,mx:12,st:.5},{k:"petalRotStep",l:"花瓣旋转角度",mn:90,mx:180,st:1},{s:"🌿 花瓣形态"},{k:"scaleMinY",l:"初始Y缩放",mn:.001,mx:.5,st:.01},{k:"scaleMaxY",l:"目标Y缩放",mn:.1,mx:1.5,st:.05},{k:"scaleMinZ",l:"初始Z缩放",mn:.05,mx:1,st:.05},{k:"scaleMaxZ",l:"目标Z缩放",mn:.1,mx:1,st:.05},{s:"🔄 弯曲"},{k:"bendMin",l:"弯曲起始",mn:-3,mx:3,st:.1},{k:"bendMax",l:"弯曲结束",mn:-5,mx:3,st:.1},{s:"🌀 鼠标扭曲"},{k:"distortStrength",l:"扭曲强度",mn:0,mx:.3,st:.005},{k:"distortBrush",l:"笔刷大小",mn:.01,mx:.3,st:.01},{k:"distortFade",l:"衰减速率",mn:.5,mx:.99,st:.01},{s:"✨ 粒子"},{k:"particleSize",l:"粒子大小",mn:.001,mx:.05,st:.001},{k:"particleGravity",l:"重力",mn:0,mx:.05,st:.001},{k:"particleSpread",l:"分布范围",mn:5,mx:50,st:1},{s:"🌿 花茎"},{k:"stemRoughness",l:"粗糙度",mn:0,mx:1,st:.05},{k:"stemPosY",l:"Y偏移",mn:-5,mx:0,st:.1}],pal:[{k:"bgColorTop",l:"背景顶部"},{k:"bgColorBot",l:"背景底部"}]},tulip:{title:"Tulip 郁金香",desc:"GLB 模型生长动画 · 贴图材质 + 阶段式生长 + easeOutBack + 风力摇摆",tags:[["GLB Model","green"],["Growth Anim","purple"],["Wind Sim","pink"]],cam:null,look:null,defs:{growthDuration:8,petalOpenAngle:.3,petalScale:1,windStrength:1,windSpeed:.5,cameraDistance:3.5,autoRotateSpeed:.01},sl:[{s:"🌱 生长"},{k:"growthDuration",l:"生长周期(秒)",mn:3,mx:25,st:.5},{s:"🌷 花瓣"},{k:"petalOpenAngle",l:"展开角度",mn:0,mx:1.5,st:.05},{k:"petalScale",l:"缩放",mn:.3,mx:2,st:.05},{s:"�️ 风力"},{k:"windStrength",l:"风力强度",mn:0,mx:4,st:.1},{k:"windSpeed",l:"风速",mn:0,mx:3,st:.05},{s:"📷 相机"},{k:"cameraDistance",l:"相机距离",mn:.8,mx:6,st:.1},{k:"autoRotateSpeed",l:"自转速度",mn:0,mx:.05,st:.002}],pal:[]},aurora:{title:"Aurora Borealis",desc:"程序化极光 · Volume Raymarching + FBM 分数布朗运动 + Beer-Lambert + 星空",tags:[["Volume","green"],["FBM","purple"],["Beer-Lambert","pink"]],cam:null,look:null,defs:{colorTop:[.1,.8,.3],colorBottom:[.3,.1,.6],colorAccent:[.1,.3,.9],height:5,curtainWidth:15,speed:.3,intensity:1.5,turbulence:1,raySteps:48},sl:[{s:"Aurora"},{k:"height",l:"高度 Height",mn:2,mx:12,st:.1},{k:"curtainWidth",l:"宽度 Width",mn:5,mx:30,st:.5},{k:"speed",l:"速度 Speed",mn:.05,mx:1,st:.01},{k:"intensity",l:"强度 Intensity",mn:.3,mx:3,st:.05},{k:"turbulence",l:"湍流 Turbulence",mn:0,mx:2,st:.05},{s:"Quality 品质"},{k:"raySteps",l:"采样 Samples",mn:16,mx:96,st:1}],pal:[{n:"经典绿",t:[.1,.8,.3],b:[.3,.1,.6],a:[.1,.3,.9]},{n:"烈焰",t:[.9,.2,.1],b:[.5,.05,.1],a:[1,.6,.1]},{n:"冰蓝",t:[.2,.6,.9],b:[.1,.1,.4],a:[.5,.8,1]},{n:"粉紫",t:[.9,.3,.6],b:[.3,.1,.5],a:[.7,.4,.9]}]},"vanta-halo":{title:"Halo 光环",desc:"双缓冲反馈 Shader · Perlin 3D Noise + 花瓣状波形 + 彩虹色相旋转",tags:[["Double Buffer","green"],["Perlin 3D","purple"],["Feedback","pink"]],cam:null,look:null,isVanta:!0,defs:{baseColor:6745,color2:15918901,backgroundColor:1251907,amplitudeFactor:1,ringFactor:1,rotationFactor:1,xOffset:0,yOffset:0,size:1,speed:1},sl:[{s:"🔆 Halo 光环"},{k:"size",l:"尺寸 Size",mn:.1,mx:3,st:.05},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05},{k:"amplitudeFactor",l:"振幅 Amplitude",mn:.1,mx:3,st:.05},{k:"ringFactor",l:"环纹 Ring",mn:.1,mx:3,st:.05},{k:"rotationFactor",l:"旋转 Rotation",mn:.1,mx:3,st:.05},{s:"📐 Position 位置"},{k:"xOffset",l:"X 偏移",mn:-1,mx:1,st:.01},{k:"yOffset",l:"Y 偏移",mn:-1,mx:1,st:.01}],pal:[{n:"深蓝金",c:[0,.1,.35]},{n:"暗紫",c:[.2,0,.3]},{n:"暗红",c:[.3,0,.05]}]},"vanta-fog":{title:"Fog 迷雾",desc:"FBM 分形布朗运动雾气 · 6 层 Octave 噪声叠加 + 多色层混合",tags:[["FBM","green"],["Noise","purple"],["Multi-layer","pink"]],cam:null,look:null,isVanta:!0,defs:{highlightColor:16761600,midtoneColor:16719616,lowlightColor:2949375,baseColor:16772075,blurFactor:.6,speed:1,zoom:1},sl:[{s:"🌫️ Fog 雾气"},{k:"blurFactor",l:"模糊度 Blur",mn:.1,mx:.9,st:.01},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05},{k:"zoom",l:"缩放 Zoom",mn:.3,mx:3,st:.05}],pal:[{n:"🔥 火焰",c:[1,.76,0]},{n:"🧊 冰蓝",c:[.1,.4,.8]},{n:"🍇 紫雾",c:[.5,.1,.7]}]},"vanta-cells":{title:"Cells 细胞",desc:"Worley Noise 沃罗诺伊细胞 · 有机纹理生成 + 时间偏移动画",tags:[["Worley","green"],["Voronoi","purple"],["Organic","pink"]],cam:null,look:null,isVanta:!0,defs:{color1:35980,color2:15918901,backgroundColor:14155663,amplitudeFactor:1,size:1.5,speed:1},sl:[{s:"🧬 Cells 细胞"},{k:"size",l:"尺寸 Size",mn:.3,mx:5,st:.05},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05},{k:"amplitudeFactor",l:"振幅 Amplitude",mn:.1,mx:3,st:.05}],pal:[{n:"🌿 绿黄",c:[0,.55,0]},{n:"🔮 紫蓝",c:[.3,0,.7]},{n:"🌅 暖橙",c:[.9,.4,0]}]},"vanta-clouds":{title:"Clouds 体积云",desc:"体积云 Raymarching · 多级 LOD 噪声密度场 + 太阳光散射",tags:[["Volume","green"],["Raymarching","purple"],["LOD","pink"]],cam:null,look:null,isVanta:!0,defs:{backgroundColor:16777215,skyColor:6863063,cloudColor:11387358,cloudShadowColor:1586512,sunColor:16750873,sunGlareColor:16737843,sunlightColor:16750899,speed:1},sl:[{s:"☁️ Clouds 云"},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05}],pal:[{n:"☀️ 晴天",c:[.41,.72,.84]},{n:"🌅 黄昏",c:[.8,.4,.1]},{n:"🌑 暗夜",c:[.1,.12,.2]}]},"vanta-ripple":{title:"Ripple 涟漪",desc:"光点涟漪 · 400 点光源矩阵 + 正弦波叠加 + 辉光累积",tags:[["Light Array","green"],["Sine Wave","purple"],["Glow","pink"]],cam:null,look:null,isVanta:!0,defs:{color1:396069,color2:16777215,backgroundColor:16185078,amplitudeFactor:1,ringFactor:4,rotationFactor:.1,speed:1},sl:[{s:"💫 Ripple 涟漪"},{k:"amplitudeFactor",l:"振幅 Amplitude",mn:.1,mx:3,st:.05},{k:"ringFactor",l:"环密度 Rings",mn:.5,mx:10,st:.1},{k:"rotationFactor",l:"旋转 Rotation",mn:0,mx:1,st:.01},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05}],pal:[{n:"🌿 绿光",c:[.02,.42,.09]},{n:"🔵 蓝光",c:[0,.2,.8]},{n:"🟣 紫光",c:[.5,0,.6]}]},"vanta-birds":{title:"Birds 飞鸟",desc:"CPU Boids 集群飞鸟 · Reynolds 规则 + 振翅动画 + 渐变着色",tags:[["Boids","green"],["Flocking","purple"],["CPU Sim","pink"]],cam:null,look:null,is3DVanta:!0,defs:{backgroundColor:465199,color1:16711680,color2:53759,birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5},sl:[{s:"🐦 Birds 飞鸟"},{k:"quantity",l:"密度 Quantity",mn:2,mx:5,st:1},{k:"birdSize",l:"体型 Size",mn:.5,mx:3,st:.1},{k:"speedLimit",l:"速度 Speed",mn:1,mx:15,st:.5},{s:"🧠 Boids 行为"},{k:"separation",l:"分离 Separation",mn:5,mx:50,st:1},{k:"alignment",l:"对齐 Alignment",mn:5,mx:50,st:1},{k:"cohesion",l:"聚合 Cohesion",mn:5,mx:50,st:1}],pal:[{n:"🔴 红蓝",c:[1,0,0]},{n:"🟢 绿黄",c:[0,1,0]},{n:"🟣 紫青",c:[.5,0,1]}]},"vanta-net":{title:"Net 网络",desc:"3D 粒子连线网络 · 距离阈值动态连接 + 旋转漂移 + 亮度混合",tags:[["Particles","green"],["Lines","purple"],["Dynamic","pink"]],cam:null,look:null,is3DVanta:!0,defs:{color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0},sl:[{s:"🕸️ Net 网络"},{k:"points",l:"密度 Points",mn:3,mx:20,st:1},{k:"maxDistance",l:"连接距离",mn:5,mx:50,st:1},{k:"spacing",l:"间距 Spacing",mn:5,mx:30,st:1}],pal:[{n:"🩷 粉紫",c:[1,.25,.5]},{n:"🩵 蓝绿",c:[0,.8,.8]},{n:"🧡 橙黄",c:[1,.6,0]}]},"vanta-waves":{title:"Waves 波浪",desc:"动态波浪网格 · Trochoid 波形叠加 + FlatShading + Phong 材质",tags:[["Trochoid","green"],["FlatShading","purple"],["Animated","pink"]],cam:null,look:null,is3DVanta:!0,defs:{color:21896,shininess:30,waveHeight:15,waveSpeed:1,zoom:1},sl:[{s:"🌊 Waves 波浪"},{k:"waveHeight",l:"浪高 Height",mn:1,mx:40,st:1},{k:"waveSpeed",l:"速度 Speed",mn:.1,mx:3,st:.1},{k:"zoom",l:"缩放 Zoom",mn:.3,mx:3,st:.1},{k:"shininess",l:"光泽 Shininess",mn:1,mx:100,st:1}],pal:[{n:"🔵 深蓝",c:[0,.33,.53]},{n:"🌊 青碧",c:[0,.6,.5]},{n:"🌑 暗夜",c:[.05,.1,.2]}]},"vanta-dots":{title:"Dots 星点",desc:"星点矩阵 + 旋转线球 · PointsMaterial + 正弦波振荡",tags:[["Points","green"],["Sine","purple"],["LineSphere","pink"]],cam:null,look:null,is3DVanta:!0,defs:{color:16746528,color2:16746528,backgroundColor:2236962,size:3,spacing:35,showLines:!0},sl:[{s:"✨ Dots 星点"},{k:"size",l:"粒径 Size",mn:.5,mx:10,st:.5},{k:"spacing",l:"间距 Spacing",mn:10,mx:80,st:1}],pal:[{n:"🟠 暖橙",c:[1,.53,.13]},{n:"🔵 冰蓝",c:[.2,.6,1]},{n:"🟢 翠绿",c:[.2,.8,.3]}]},"vanta-rings":{title:"Rings 光环",desc:"彩色环形阵列 · ExtrudeGeometry 弧形 + 多色分层 + 旋转",tags:[["Extrude","green"],["Multi-color","purple"],["Rotation","pink"]],cam:null,look:null,is3DVanta:!0,defs:{backgroundColor:2106408,color:8978176},sl:[],pal:[{n:"🟢 荧绿",c:[.53,1,0]},{n:"🔵 蓝光",c:[.07,.53,.87]},{n:"🟡 暖金",c:[1,.87,.13]}]},"vanta-globe":{title:"Globe 地球",desc:"线框地球 + 极轴 + 网格波动连线 · 球面磁力线",tags:[["Wireframe","green"],["Poles","purple"],["Grid","pink"]],cam:null,look:null,is3DVanta:!0,defs:{color:16727937,color2:16777215,size:1,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0},sl:[{s:"🌍 Globe 地球"},{k:"size",l:"球径 Size",mn:.3,mx:3,st:.1},{k:"points",l:"网格密度",mn:3,mx:20,st:1},{k:"maxDistance",l:"连接距离",mn:5,mx:50,st:1}],pal:[{n:"🩷 粉紫",c:[1,.25,.5]},{n:"🩵 蓝白",c:[.3,.6,1]},{n:"🟢 绿光",c:[.2,.8,.3]}]},"vanta-clouds2":{title:"Clouds2 程序云",desc:"程序化噪声体积云 · 噪声密度采样 + 光照渐变",tags:[["Procedural","green"],["Noise","purple"],["Volume","pink"]],cam:null,look:null,isVanta:!0,defs:{backgroundColor:0,skyColor:6072010,cloudColor:3362176,lightColor:16777215,speed:1},sl:[{s:"☁️ Clouds2 云"},{k:"speed",l:"速度 Speed",mn:.1,mx:3,st:.05}],pal:[{n:"🩵 晴空",c:[.36,.67,.79]},{n:"🌅 暮色",c:[.5,.2,.1]},{n:"🌑 深夜",c:[.05,.08,.15]}]},"vanta-topology":{title:"Topology 拓扑",desc:"流场粒子系统 · Perlin 噪声流向 + 4500 粒子描迹",tags:[["Flow Field","green"],["Particles","purple"],["Canvas 2D","pink"]],cam:null,look:null,isCanvas:!0,defs:{color:9016910,backgroundColor:8738,speed:1},sl:[],pal:[{n:"🟢 苔绿",c:[.54,.58,.31]},{n:"🔵 靛蓝",c:[.1,.2,.6]},{n:"🟡 琥珀",c:[.8,.6,.1]}]},"vanta-trunk":{title:"Trunk 年轮",desc:"噪声同心环 · 极坐标噪声径向偏移 + 动态呼吸",tags:[["Polar","green"],["Noise Ring","purple"],["Canvas 2D","pink"]],cam:null,look:null,isCanvas:!0,defs:{color:9979487,backgroundColor:2237478,spacing:0,chaos:1},sl:[{s:"🪵 Trunk 年轮"},{k:"chaos",l:"混乱度 Chaos",mn:.1,mx:3,st:.1},{k:"spacing",l:"间距 Spacing",mn:0,mx:5,st:.1}],pal:[{n:"🩷 紫粉",c:[.6,.27,.37]},{n:"🩵 蓝灰",c:[.3,.4,.5]},{n:"🟢 森绿",c:[.2,.5,.2]}]}},Cy=document.getElementById("canvas-container"),xt=new m_({antialias:!0});xt.setSize(window.innerWidth,window.innerHeight);xt.setPixelRatio(Math.min(window.devicePixelRatio,2));xt.outputColorSpace=Tt;Cy.appendChild(xt.domElement);const Xe=new ls;Xe.background=new se(198418);const zt=new yt(60,window.innerWidth/window.innerHeight,.1,1e4);zt.position.set(0,2,5);const wt=new Lv(zt,xt.domElement);wt.enableDamping=!0;wt.dampingFactor=.06;const hs=new mi(3359846,.5),Ci=new Js(16772829,1.2);Ci.position.set(5,8,3);const Ri=new vr(16746598,.5,20);Ri.position.set(-3,4,-2);Xe.add(hs,Ci,Ri);const kh=new mi(8421504,4),jn=new Rs(6328575,80);jn.position.set(0,-1,7.8);jn.angle=Math.PI/6;jn.penumbra=.5;jn.castShadow=!0;jn.shadow.mapSize.set(1024,1024);const Kn=new Rs(16748640,80);Kn.position.set(0,1,-3);Kn.angle=Math.PI/6;Kn.penumbra=.5;Kn.castShadow=!0;Kn.shadow.mapSize.set(1024,1024);const hr=new Zv(xt);hr.addPass(new $v(Xe,zt));const Ry=new ws(new Z(window.innerWidth,window.innerHeight),.85,.4,.85);hr.addPass(Ry);let vl=!1;const Py=En,Dy=1;function Ly(s){s==="trois-flower"?(Xe.remove(hs,Ci,Ri),Xe.add(kh,jn,jn.target,Kn,Kn.target),xt.shadowMap.enabled=!0,xt.shadowMap.type=Gh,xt.toneMapping=Wh,xt.toneMappingExposure=2.1,Xe.background=new se(657930),vl=!0):(Xe.remove(kh,jn,jn.target,Kn,Kn.target),Xe.add(hs,Ci,Ri),xt.shadowMap.enabled=!1,xt.toneMapping=Py,xt.toneMappingExposure=Dy,Xe.background=new se(198418),vl=!1)}const jl=cr.getInstance();jl.set("uResolution",new Z(window.innerWidth,window.innerHeight));yo.getInstance();let ee=null,Vh=[],Qe="trois-flower",et={},fo=0,Ft=zt,Jn=!1,Vt="showcase";const Wn={};let ur=null;function Iy(){ee&&(ee.dispose(),ee=null),Vh.forEach(e=>e.dispose()),Vh=[];const s=[];Xe.traverse(e=>{(e.isMesh||e.isLineSegments||e.isPoints||e.isLine)&&s.push(e)}),s.forEach(e=>Xe.remove(e)),Ft=zt,Jn=!1,wt.enabled=!0,ur=null}function Ii(s,e){Iy(),Qe=s,et={...e};const t=$t[s];if(!t)return;Ly(s),document.querySelectorAll(".entity-btn").forEach(i=>i.classList.remove("active"));const n=document.querySelector(`[data-mode="${s}"]`);switch(n&&n.classList.add("active"),t.cam&&(zt.position.set(...t.cam),wt.target.set(...t.look)),s){case"butterfly":ee=new gl(e).build(),ee.addTo(Xe).setPosition(0,1.5,0);break;case"flock":ee=new gl(e).build(),ee.addTo(Xe);break;case"mandelbulb":ee=new Ou(e).build(),ee.addTo(Xe);break;case"trois-flower":ee=new Iu(e).build(),ee.addTo(Xe);break;case"dahlia":ee=new nx(e).build(),ee.addTo(Xe),ee.camera&&(Ft=ee.camera,Jn=!0,wt.enabled=Vt==="free"),Xe.remove(hs,Ci,Ri),Xe.background=null;break;case"bloom":ee=new Xx,ee.init(Xe,xt).then(()=>{ee._camera&&(Ft=ee._camera,Jn=!0,wt.enabled=!1),Xe.remove(hs,Ci,Ri),Xe.background=null});break;case"tulip":ee=new Vx(e).build(),ee.addTo(Xe),ee.camera&&(Ft=ee.camera,Jn=!0,wt.enabled=Vt==="free"),Xe.remove(hs,Ci,Ri),Xe.background=null;break;case"aurora":ee=new Bu(e).build(),ee.addTo(Xe);break;case"vanta-halo":ee=new $x(e).build(),ee.setRenderer(xt),ee.addTo(Xe);break;case"vanta-fog":ee=new Qx(e).build(),ee.addTo(Xe);break;case"vanta-cells":ee=new ey(e).build(),ee.addTo(Xe);break;case"vanta-clouds":ee=new ty(e).build(),ee.addTo(Xe);break;case"vanta-ripple":ee=new ny(e).build(),ee.addTo(Xe);break;case"vanta-clouds2":ee=new wy(e).build(),ee.addTo(Xe);break;case"vanta-birds":ee=new ly(e).build(),ee.setRenderer(xt),ee.addTo(Xe),Qi(ee);break;case"vanta-net":ee=new vy(e).build(),ee.setRenderer(xt),ee.addTo(Xe),Qi(ee);break;case"vanta-waves":ee=new xy(e).build(),ee.setRenderer(xt),ee.addTo(Xe),Qi(ee);break;case"vanta-dots":ee=new yy(e).build(),ee.setRenderer(xt),ee.addTo(Xe),Qi(ee);break;case"vanta-rings":ee=new Sy(e).build(),ee.setRenderer(xt),ee.addTo(Xe),Qi(ee);break;case"vanta-globe":ee=new by(e).build(),ee.setRenderer(xt),ee.addTo(Xe),Qi(ee);break;case"vanta-topology":ee=new Ty(e).build(),ee.addTo();break;case"vanta-trunk":ee=new Ey(e).build(),ee.addTo();break}Vt="showcase",wt.update(),Fy(s),Oy()}function Qi(s){if(s&&s.camera){if(Ft=s.camera,Jn=!0,wt.enabled=Vt==="free",s.camera.aspect=window.innerWidth/window.innerHeight,s.camera.updateProjectionMatrix(),ur={pos:s.camera.position.clone(),target:s.camera.tx!==void 0?new P(s.camera.tx,s.camera.ty,s.camera.tz||s.camera.position.z):new P(0,0,0)},Wn[Qe]){const e=Wn[Qe];s.camera.position.copy(e.pos),s.camera.tx!==void 0&&(s.camera.tx=e.pos.x,s.camera.ty=e.pos.y,s.camera.tz=e.pos.z)}Vt==="free"&&ku(s.camera)}}function ku(s){zt.position.copy(s.position),zt.fov=s.fov||60,zt.near=s.near||.1,zt.far=s.far||1e4,zt.updateProjectionMatrix();const e=new P(0,0,-1).applyQuaternion(s.quaternion);wt.target.copy(s.position).add(e.multiplyScalar(100)),wt.update(),Ft=zt,wt.enabled=!0}function Vu(s){if(s===Vt)return;Vt=s;const e=$t[Qe];if(s==="free")Jn&&ee&&ee.camera&&ku(ee.camera),wt.enabled=!0;else if(Jn&&ee&&ee.camera)if(Ft=ee.camera,wt.enabled=!1,Wn[Qe]){const t=Wn[Qe];ee.camera.position.copy(t.pos),ee.camera.tx!==void 0&&(ee.camera.tx=t.pos.x,ee.camera.ty=t.pos.y,t.pos.z!==void 0&&(ee.camera.tz=t.pos.z))}else ur&&ee.camera.position.copy(ur.pos);else e&&e.cam&&(Wn[Qe]?(zt.position.copy(Wn[Qe].pos),wt.target.copy(Wn[Qe].target)):(zt.position.set(...e.cam),wt.target.set(...e.look)),wt.enabled=!0,wt.update());Ny()}function Hu(){const s=Ft.position.clone(),e=wt.enabled?wt.target.clone():new P(0,0,0);Wn[Qe]={pos:s,target:e},Jn&&ee&&ee.camera&&(ur={pos:s.clone(),target:e.clone()});const t=document.getElementById("pin-toast");t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2200)}function Ny(){document.querySelectorAll(".view-mode-btn").forEach(e=>{e.classList.toggle("active",e.dataset.vm===Vt)});const s=document.getElementById("btn-pin-cam");s&&s.classList.toggle("visible",Vt==="free")}function Kl(s){var a,l,c,u;const e=$t[s];if(!e)return;const t=document.getElementById("params-content"),n=!e.isVanta&&!e.isCanvas,i=e.is3DVanta===!0,r=n||i;let o=`<div class="panel-title">⚙️ ${e.title}</div><div class="panel-subtitle">修改即时重建</div>`;r&&(Wn[s],o+='<div class="view-mode-bar">',o+=`<button class="view-mode-btn${Vt==="showcase"?" active":""}" data-vm="showcase"><span class="vm-icon">🎬</span>展示视角</button>`,o+=`<button class="view-mode-btn${Vt==="free"?" active":""}" data-vm="free"><span class="vm-icon">🎮</span>自由视角</button>`,o+="</div>",o+=`<button class="pin-cam-btn${Vt==="free"?" visible":""}" id="btn-pin-cam">📌 固定当前视角为展示视角</button>`),(a=e.pal)!=null&&a.length&&(o+='<div class="param-section"><div class="param-section-label">Color Presets</div><div class="color-row">',e.pal.forEach((h,d)=>{const f=h.c||h.t||h.cA||[.5,.5,.5];o+=`<div class="color-swatch${d===fo?" active":""}" data-ci="${d}" style="background:rgb(${Math.round(f[0]*255)},${Math.round(f[1]*255)},${Math.round(f[2]*255)})" title="${h.n}"></div>`}),o+="</div></div>");for(const h of e.sl){if(h.s){o+=`<div class="param-section"><div class="param-section-label">${h.s}</div>`;continue}const d=et[h.k]??e.defs[h.k],f=h.st>=1?d:Number(d).toFixed(2);o+=`<div class="param-row"><span class="param-label">${h.l}</span><span class="param-value" id="pv-${h.k}">${f}</span></div>`,o+=`<input type="range" class="param-slider" data-key="${h.k}" min="${h.mn}" max="${h.mx}" step="${h.st}" value="${d}">`}o+='<button class="action-btn" id="btn-rand">🎲 随机种子</button>',o+='<button class="action-btn secondary" id="btn-rebuild">🔄 重新生成</button>',t.innerHTML=o,t.querySelectorAll(".param-slider").forEach(h=>{h.addEventListener("input",d=>{const f=d.target.dataset.key,g=parseFloat(d.target.value);et[f]=g,document.getElementById(`pv-${f}`).textContent=parseFloat(d.target.step)>=1?g:g.toFixed(2)}),h.addEventListener("change",()=>Ii(Qe,et))}),t.querySelectorAll(".color-swatch").forEach(h=>{h.addEventListener("click",d=>{fo=parseInt(d.target.dataset.ci),Uy(s,fo),t.querySelectorAll(".color-swatch").forEach(f=>f.classList.remove("active")),d.target.classList.add("active")})}),(l=document.getElementById("btn-rand"))==null||l.addEventListener("click",Gu),(c=document.getElementById("btn-rebuild"))==null||c.addEventListener("click",()=>Ii(Qe,et)),t.querySelectorAll(".view-mode-btn").forEach(h=>{h.addEventListener("click",()=>Vu(h.dataset.vm))}),(u=document.getElementById("btn-pin-cam"))==null||u.addEventListener("click",Hu)}function Uy(s,e){var n,i;const t=(i=(n=$t[s])==null?void 0:n.pal)==null?void 0:i[e];t&&(t.c&&(s==="butterfly"||s==="flock")?et.baseColor=t.c:t.c&&(et.color=t.c,t.ic&&(et.innerColor=t.ic)),t.cA&&(et.colorA=t.cA),t.cB&&(et.colorB=t.cB),t.t&&(et.colorTop=t.t),t.b&&(et.colorBottom=t.b),t.a&&(et.colorAccent=t.a),Ii(Qe,et))}function Fy(s){const e=$t[s];if(!e)return;document.getElementById("overlay-title").textContent=e.title,document.getElementById("overlay-desc").textContent=e.desc,document.getElementById("overlay-tags").innerHTML=e.tags.map(([n,i])=>`<span class="overlay-tag tag-${i}">${n}</span>`).join("");const t=document.getElementById("entity-overlay");t.classList.remove("visible"),requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add("visible")))}function Oy(){document.getElementById("stat-seed").textContent=`Seed: ${et.seed||et.baseSeed||42}`;let s=0,e=0;Xe.traverse(t=>{if(t.isMesh&&t.geometry){e++;const n=t.geometry.getAttribute("position");n&&(s+=n.count)}}),document.getElementById("stat-geo").textContent=`Geo: ${e}`,document.getElementById("stat-verts").textContent=`Verts: ${s.toLocaleString()}`}function Gu(){const s=Math.floor(Math.random()*9999)+1;"seed"in et&&(et.seed=s),"baseSeed"in et&&(et.baseSeed=s),Kl(Qe),Ii(Qe,et)}window.appSwitch=function(s){fo=0,Vt="showcase",et={...$t[s].defs},Kl(s),Ii(s,et)};document.addEventListener("keydown",s=>{if((s.key==="r"||s.key==="R")&&Gu(),s.key==="v"||s.key==="V"){const e=$t[Qe];(!(e!=null&&e.isVanta)&&!(e!=null&&e.isCanvas)||(e==null?void 0:e.is3DVanta))&&Vu(Vt==="showcase"?"free":"showcase")}(s.key==="p"||s.key==="P")&&Vt==="free"&&Hu()});const By=new Fi;let ya=0,so=0;function Wu(){requestAnimationFrame(Wu);const s=By.getDelta();jl.tick(),ee&&ee.update&&ee.update(void 0,s),Qe==="flock"&&ee&&ee.updateFlock(s),wt.enabled&&wt.update(),Qe==="bloom"&&ee&&ee._loaded?ee.render(xt):vl?(hr.passes[0].camera=Ft,hr.render()):xt.render(Xe,Ft),ya++,so+=s,so>=.5&&(document.getElementById("stat-fps").textContent=Math.round(ya/so)+" FPS",ya=0,so=0)}window.addEventListener("resize",()=>{const s=window.innerWidth,e=window.innerHeight;zt.aspect=s/e,zt.updateProjectionMatrix(),Jn&&Ft!==zt&&(Ft.aspect=s/e,Ft.updateProjectionMatrix()),xt.setSize(s,e),hr.setSize(s,e),jl.set("uResolution",new Z(s,e)),ee&&ee.resize&&ee.resize(s,e),ee&&ee.onResize&&ee.onResize(s,e)});window.addEventListener("mousemove",s=>{if(!ee||!ee.setMouse)return;const e=$t[Qe];Vt==="free"&&e&&e.is3DVanta||ee.setMouse(s.clientX,s.clientY)});function Xu(s){if(!ee||!ee.setMouse||!s.touches.length)return;const e=$t[Qe];Vt==="free"&&e&&e.is3DVanta||ee.setMouse(s.touches[0].clientX,s.touches[0].clientY)}window.addEventListener("touchstart",Xu,{passive:!0});window.addEventListener("touchmove",Xu,{passive:!0});document.getElementById("sidebar").addEventListener("click",s=>{const e=s.target.closest(".entity-btn");if(!e)return;const t=e.dataset.mode;t&&$t[t]&&window.appSwitch(t)});window.appSwitch("trois-flower");Wu();(function(){const e=document.getElementById("tcPanel"),t=document.getElementById("tcToggleBtn"),n=document.getElementById("tcMinBtn"),i=document.getElementById("tcHeader"),r=document.getElementById("tcBody"),o=document.getElementById("tcCopyBtn"),a=document.getElementById("tcResetBtn"),l=document.getElementById("tcSaveBtn"),c=document.getElementById("tcExportBtn");if(!e||!t)return;t.addEventListener("click",()=>{e.classList.add("tc-visible"),t.style.display="none"}),n.addEventListener("click",()=>{e.classList.remove("tc-visible"),t.style.display="flex"});let u=!1,h=0,d=0;i.addEventListener("mousedown",R=>{if(R.target.closest(".tc-header-btn"))return;u=!0;const T=e.getBoundingClientRect();h=R.clientX-T.left,d=R.clientY-T.top,R.preventDefault()}),document.addEventListener("mousemove",R=>{if(!u)return;const T=Math.max(0,Math.min(window.innerWidth-e.offsetWidth,R.clientX-h)),E=Math.max(0,Math.min(window.innerHeight-50,R.clientY-d));e.style.left=T+"px",e.style.top=E+"px",e.style.right="auto",t.style.left=T+"px",t.style.top=E+"px",t.style.right="auto"}),document.addEventListener("mouseup",()=>{u=!1}),document.addEventListener("keydown",R=>{R.key==="`"&&(e.classList.contains("tc-visible")?(e.classList.remove("tc-visible"),t.style.display="flex"):(e.classList.add("tc-visible"),t.style.display="none"))});let f=null;function g(R){let T=document.querySelector(".tc-toast");T||(T=document.createElement("div"),T.className="tc-toast",document.body.appendChild(T)),T.textContent=R,T.classList.add("tc-show"),setTimeout(()=>T.classList.remove("tc-show"),1800)}function _(R,T){return T>=1?String(Math.round(R)):Math.abs(R)<.001?R.toExponential(1):R.toFixed(Math.abs(R)<1?3:2)}function m(R){f=R,r.innerHTML="";const T=$t[R];if(!T||!T.sl||T.sl.length===0){r.innerHTML='<div style="padding:16px;color:#555;font-size:11px;text-align:center">该效果暂无可调参数</div>';return}JSON.parse(JSON.stringify(T.defs));const E=document.createElement("div");E.className="tc-entity-group";const A=document.createElement("div");A.className="tc-entity-header tc-open",A.innerHTML=`<span class="tc-entity-arrow">▶</span><span class="tc-entity-name">${T.title}</span>`,A.addEventListener("click",()=>A.classList.toggle("tc-open")),E.appendChild(A);const M=document.createElement("div");M.className="tc-entity-content";let y=null;for(const D of T.sl){if(D.s){y=document.createElement("div"),y.className="tc-group",y.innerHTML=`<div class="tc-group-title">${D.s}</div>`,M.appendChild(y);continue}const O=D.k,U=D.l||O,B=D.mn,G=D.mx,z=D.st,Y=et[O]??T.defs[O],W=D.type==="color",le=/color|background|tint|hue/i.test(O)&&typeof Y=="number"&&Y>4095,he=D.labels&&Array.isArray(D.labels),ce=document.createElement("div");if(ce.className="tc-row",he){const ve=typeof Y=="number"?Y:0;let Le="";D.labels.forEach((te,xe)=>{Le+=`<option value="${xe}" ${xe===ve?"selected":""}>${te}</option>`}),ce.innerHTML=`
          <span class="tc-label" title="${O}">${U}</span>
          <select class="tc-select" style="flex:1;background:#1a1a2e;color:#e0e0ff;border:1px solid rgba(120,100,255,0.3);border-radius:4px;padding:3px 6px;font-size:11px;outline:none;cursor:pointer;">
            ${Le}
          </select>
        `;const X=ce.querySelector(".tc-select");X.addEventListener("change",()=>{const te=parseInt(X.value);b(O,te,!1)})}else if(W){const ve=typeof Y=="string"?Y:"#c08cf2",Le=re=>{const Te=parseInt(re.slice(1),16);return`${Te>>16&255}, ${Te>>8&255}, ${Te&255}`};ce.style.flexWrap="wrap",ce.innerHTML=`
          <span class="tc-label" title="${O}">${U}</span>
          <input type="color" class="tc-color" value="${ve}">
          <span class="tc-value" style="width:auto;font-size:9px;color:#9988bb;">${ve} <span class="tc-rgb" style="color:#667">(${Le(ve)})</span></span>
        `;const X=ce.querySelector(".tc-color"),te=ce.querySelector(".tc-value"),xe=ce.querySelector(".tc-rgb");X.addEventListener("input",()=>{te.childNodes[0].textContent=X.value+" ",xe.textContent=`(${Le(X.value)})`,b(O,X.value,!1)})}else if(le){const ve="#"+(Y&16777215).toString(16).padStart(6,"0"),Le=re=>{const Te=parseInt(re.slice(1),16);return`${Te>>16&255}, ${Te>>8&255}, ${Te&255}`};ce.style.flexWrap="wrap",ce.innerHTML=`
          <span class="tc-label" title="${O}">${U}</span>
          <input type="color" class="tc-color" value="${ve}">
          <span class="tc-value" style="width:auto;font-size:9px;color:#9988bb;">${ve} <span class="tc-rgb" style="color:#667">(${Le(ve)})</span></span>
        `;const X=ce.querySelector(".tc-color"),te=ce.querySelector(".tc-value"),xe=ce.querySelector(".tc-rgb");X.addEventListener("input",()=>{const re=parseInt(X.value.slice(1),16);te.childNodes[0].textContent=X.value+" ",xe.textContent=`(${Le(X.value)})`,b(O,re,!1)})}else{ce.innerHTML=`
          <span class="tc-label" title="${O}">${U}</span>
          <input type="range" class="tc-slider" min="${B}" max="${G}" step="${z}" value="${Y}">
          <span class="tc-value">${_(Y,z)}</span>
        `;const ve=ce.querySelector(".tc-slider"),Le=ce.querySelector(".tc-value"),X=z;ve.addEventListener("input",()=>{const te=parseFloat(ve.value);Le.textContent=_(te,X),b(O,te,!1)}),ve.addEventListener("change",()=>{const te=parseFloat(ve.value);b(O,te,!0)})}(y||M).appendChild(ce)}if(!T.isCanvas){const D=document.createElement("div");D.className="tc-group",D.innerHTML='<div class="tc-group-title">📷 相机</div>';const O=p("FOV",10,150,1,Ft.fov,B=>{Ft.fov=B,Ft.updateProjectionMatrix()});D.appendChild(O);const U=p("Z 距离",-500,500,1,Ft.position.z,B=>{Ft.position.z=B});D.appendChild(U),M.appendChild(D)}E.appendChild(M),r.appendChild(E)}function p(R,T,E,A,M,y){const D=document.createElement("div");D.className="tc-row",D.innerHTML=`
      <span class="tc-label">${R}</span>
      <input type="range" class="tc-slider" min="${T}" max="${E}" step="${A}" value="${M}">
      <span class="tc-value">${_(M,A)}</span>
    `;const O=D.querySelector(".tc-slider"),U=D.querySelector(".tc-value");return O.addEventListener("input",()=>{const B=parseFloat(O.value);U.textContent=_(B,A),y(B)}),D}function b(R,T,E){const A=ee,M=$t[Qe];if(!(!A||!M)){if(et[R]=T,M.isVanta&&A._uniforms){const y=A._uniforms;if(y[R])if(/color|background|tint|hue/i.test(R)&&typeof T=="number"){const D=new se(T);y[R].value.set(D.r,D.g,D.b)}else y[R].value=T;A._params&&(A._params[R]=T);return}if(M.is3DVanta&&A.options){A.options[R]=T;return}if(M.isCanvas&&A._params){A._params[R]=T;return}if(Qe==="bloom"&&A.applyParam){A.applyParam(R,T);return}A._params&&(A._params[R]=T),A.options&&(A.options[R]=T),A._mesh&&x(A._mesh,R,T),A._group&&A._group.traverse(y=>{y.isMesh&&y.material&&y.material.uniforms&&x(y,R,T)}),E&&(Ii(Qe,et),setTimeout(()=>m(Qe),50))}}function x(R,T,E){if(!R.material)return;const A=Array.isArray(R.material)?R.material:[R.material];for(const M of A){if(!M.uniforms)continue;if(M.uniforms[T])if(/color/i.test(T)&&typeof E=="number"){const D=new se(E);M.uniforms[T].value&&M.uniforms[T].value.isVector3?M.uniforms[T].value.set(D.r,D.g,D.b):M.uniforms[T].value=D}else typeof E=="number"&&(M.uniforms[T].value=E);const y="u"+T.charAt(0).toUpperCase()+T.slice(1);M.uniforms[y]&&typeof E=="number"&&(M.uniforms[y].value=E)}}o.addEventListener("click",()=>{const R={mode:Qe,params:{...et}};navigator.clipboard.writeText(JSON.stringify(R,null,2)).then(()=>{g("✅ 参数已复制到剪贴板")})}),c.addEventListener("click",()=>{const R={mode:Qe,params:{...et}};navigator.clipboard.writeText(JSON.stringify(R,null,2)).then(()=>{g("📋 JSON 已复制")})}),a.addEventListener("click",()=>{!f||!$t[f]||(et={...$t[f].defs},Ii(Qe,et),Kl(Qe),setTimeout(()=>m(Qe),50),g("↩ 已重置为默认值"))}),l.addEventListener("click",()=>{const R={mode:Qe,params:{...et}};localStorage.setItem("tc-3d-saved-"+Qe,JSON.stringify(R)),g("💾 已保存到本地")});const v=window.appSwitch;window.appSwitch=function(R){v(R);const T=localStorage.getItem("tc-3d-saved-"+R);if(T)try{const{params:E}=JSON.parse(T)}catch{}setTimeout(()=>m(R),80)},setTimeout(()=>m(Qe),200)})();

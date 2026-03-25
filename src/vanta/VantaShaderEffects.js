import { VantaEffect } from './VantaEffect.js';

/* ================================================================
   VantaFog — FBM 分形雾气效果
   原版: vanta.fog.js
   ================================================================ */
export class VantaFog extends VantaEffect {
  getDefaults() {
    return {
      highlightColor: 0xffc300,
      midtoneColor: 0xff1f00,
      lowlightColor: 0x2d00ff,
      baseColor: 0xffebeb,
      blurFactor: 0.6,
      speed: 1.0,
      zoom: 1.0,
    };
  }
  static get fragmentShader() { return FRAG_FOG; }
}

/* ================================================================
   VantaCells — Worley Noise 细胞效果
   原版: vanta.cells.js
   ================================================================ */
export class VantaCells extends VantaEffect {
  getDefaults() {
    return {
      color1: 0x8c8c,
      color2: 0xf2e735,
      backgroundColor: 0xd7ff8f,
      amplitudeFactor: 1.0,
      ringFactor: 1.0,
      rotationFactor: 1.0,
      size: 1.5,
      speed: 1.0,
    };
  }
  static get fragmentShader() { return FRAG_CELLS; }
}

/* ================================================================
   VantaClouds — 体积云 Raymarching
   原版: vanta.clouds.js
   ================================================================ */
export class VantaClouds extends VantaEffect {
  getDefaults() {
    return {
      backgroundColor: 0xffffff,
      skyColor: 0x68b8d7,
      cloudColor: 0xadc1de,
      cloudShadowColor: 0x183550,
      sunColor: 0xff9919,
      sunGlareColor: 0xff6633,
      sunlightColor: 0xff9933,
      speed: 1,
    };
  }
  static get fragmentShader() { return FRAG_CLOUDS; }
}

/* ================================================================
   VantaRipple — 光点涟漪效果
   原版: vanta.ripple.js
   ================================================================ */
export class VantaRipple extends VantaEffect {
  getDefaults() {
    return {
      color1: 0x60b25,
      color2: 0xffffff,
      backgroundColor: 0xf6f6f6,
      amplitudeFactor: 1.0,
      ringFactor: 4.0,
      rotationFactor: 0.1,
      speed: 1.0,
    };
  }
  static get fragmentShader() { return FRAG_RIPPLE; }
}

/* ================================================================
   GLSL Fragment Shaders (直接从 vanta 源码移植)
   ================================================================ */

const FRAG_FOG = `
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
}`;

const FRAG_CELLS = `
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
}`;

const FRAG_CLOUDS = `
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
}`;

const FRAG_RIPPLE = `
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
}`;

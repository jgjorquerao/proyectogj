import{g as gl}from"./_commonjsHelpers-CqkleIqs.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vl="179",Hh=0,Yl=1,Vh=2,Yu=1,Gh=2,Tn=3,Xn=0,At=1,bn=2,Gn=0,Xi=1,jl=2,Kl=3,Zl=4,Wh=5,ci=100,Xh=101,$h=102,qh=103,Yh=104,jh=200,Kh=201,Zh=202,Jh=203,ya=204,xa=205,Qh=206,ef=207,tf=208,nf=209,sf=210,rf=211,of=212,af=213,lf=214,Ea=0,Sa=1,Ta=2,Yi=3,ba=4,Ma=5,wa=6,Aa=7,ju=0,cf=1,uf=2,Wn=0,df=1,hf=2,ff=3,pf=4,mf=5,gf=6,vf=7,Ku=300,ji=301,Ki=302,Ca=303,Ra=304,Xr=306,La=1e3,di=1001,Pa=1002,rn=1003,_f=1004,$s=1005,ln=1006,ro=1007,hi=1008,Rn=1009,Zu=1010,Ju=1011,As=1012,_l=1013,gi=1014,Mn=1015,Is=1016,yl=1017,xl=1018,Cs=1020,Qu=35902,ed=1021,td=1022,sn=1023,Rs=1026,Ls=1027,nd=1028,El=1029,id=1030,Sl=1031,Tl=1033,Sr=33776,Tr=33777,br=33778,Mr=33779,Ia=35840,Da=35841,Oa=35842,Na=35843,Ua=36196,Fa=37492,Ba=37496,za=37808,ka=37809,Ha=37810,Va=37811,Ga=37812,Wa=37813,Xa=37814,$a=37815,qa=37816,Ya=37817,ja=37818,Ka=37819,Za=37820,Ja=37821,wr=36492,Qa=36494,el=36495,sd=36283,tl=36284,nl=36285,il=36286,yf=3200,xf=3201,Ef=0,Sf=1,Hn="",$t="srgb",Zi="srgb-linear",Or="linear",nt="srgb",bi=7680,Jl=519,Tf=512,bf=513,Mf=514,rd=515,wf=516,Af=517,Cf=518,Rf=519,Ql=35044,ec="300 es",cn=2e3,Nr=2001;class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oo=Math.PI/180,sl=180/Math.PI;function Ds(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Lf(i,e){return(i%e+e)%e}function ao(i,e,t){return(1-t)*i+t*e}function ms(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],u=n[s+1],h=n[s+2],p=n[s+3];const v=r[o+0],g=r[o+1],x=r[o+2],S=r[o+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=v,e[t+1]=g,e[t+2]=x,e[t+3]=S;return}if(p!==S||c!==v||u!==g||h!==x){let f=1-a;const l=c*v+u*g+h*x+p*S,_=l>=0?1:-1,y=1-l*l;if(y>Number.EPSILON){const M=Math.sqrt(y),C=Math.atan2(M,l*_);f=Math.sin(f*C)/M,a=Math.sin(a*C)/M}const E=a*_;if(c=c*f+v*E,u=u*f+g*E,h=h*f+x*E,p=p*f+S*E,f===1-a){const M=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=M,u*=M,h*=M,p*=M}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],u=n[s+2],h=n[s+3],p=r[o],v=r[o+1],g=r[o+2],x=r[o+3];return e[t]=a*x+h*p+c*g-u*v,e[t+1]=c*x+h*v+u*p-a*g,e[t+2]=u*x+h*g+a*v-c*p,e[t+3]=h*x-a*p-c*v-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(s/2),p=a(r/2),v=c(n/2),g=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=v*h*p+u*g*x,this._y=u*g*p-v*h*x,this._z=u*h*x+v*g*p,this._w=u*h*p-v*g*x;break;case"YXZ":this._x=v*h*p+u*g*x,this._y=u*g*p-v*h*x,this._z=u*h*x-v*g*p,this._w=u*h*p+v*g*x;break;case"ZXY":this._x=v*h*p-u*g*x,this._y=u*g*p+v*h*x,this._z=u*h*x+v*g*p,this._w=u*h*p-v*g*x;break;case"ZYX":this._x=v*h*p-u*g*x,this._y=u*g*p+v*h*x,this._z=u*h*x-v*g*p,this._w=u*h*p+v*g*x;break;case"YZX":this._x=v*h*p+u*g*x,this._y=u*g*p+v*h*x,this._z=u*h*x-v*g*p,this._w=u*h*p-v*g*x;break;case"XZY":this._x=v*h*p-u*g*x,this._y=u*g*p-v*h*x,this._z=u*h*x+v*g*p,this._w=u*h*p+v*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],u=t[2],h=t[6],p=t[10],v=n+a+p;if(v>0){const g=.5/Math.sqrt(v+1);this._w=.25/g,this._x=(h-c)*g,this._y=(r-u)*g,this._z=(o-s)*g}else if(n>a&&n>p){const g=2*Math.sqrt(1+n-a-p);this._w=(h-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+u)/g}else if(a>p){const g=2*Math.sqrt(1+a-n-p);this._w=(r-u)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+p-n-a);this._w=(o-s)/g,this._x=(r+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+s*u-r*c,this._y=s*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-s*a,this._w=o*h-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),p=Math.sin((1-t)*h)/u,v=Math.sin(t*h)/u;return this._w=o*p+this._w*v,this._x=n*p+this._x*v,this._y=s*p+this._y*v,this._z=r*p+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*s-a*n),h=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+c*u+o*p-a*h,this.y=n+c*h+a*u-r*p,this.z=s+c*p+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lo.copy(this).projectOnVector(e),this.sub(lo)}reflect(e){return this.sub(lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lo=new K,tc=new Os;class ze{constructor(e,t,n,s,r,o,a,c,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u)}set(e,t,n,s,r,o,a,c,u){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],p=n[7],v=n[2],g=n[5],x=n[8],S=s[0],f=s[3],l=s[6],_=s[1],y=s[4],E=s[7],M=s[2],C=s[5],L=s[8];return r[0]=o*S+a*_+c*M,r[3]=o*f+a*y+c*C,r[6]=o*l+a*E+c*L,r[1]=u*S+h*_+p*M,r[4]=u*f+h*y+p*C,r[7]=u*l+h*E+p*L,r[2]=v*S+g*_+x*M,r[5]=v*f+g*y+x*C,r[8]=v*l+g*E+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*c+s*r*u-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],p=h*o-a*u,v=a*c-h*r,g=u*r-o*c,x=t*p+n*v+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=p*S,e[1]=(s*u-h*n)*S,e[2]=(a*n-s*o)*S,e[3]=v*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-a*t)*S,e[6]=g*S,e[7]=(n*c-u*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-s*u,s*c,-s*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(co.makeScale(e,t)),this}rotate(e){return this.premultiply(co.makeRotation(-e)),this}translate(e,t){return this.premultiply(co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const co=new ze;function od(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pf(){const i=Ur("canvas");return i.style.display="block",i}const nc={};function $i(i){i in nc||(nc[i]=!0,console.warn(i))}function If(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ic=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Df(){const i={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?Or:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $i("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $i("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zi]:{primaries:e,whitePoint:n,transfer:Or,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}const Ke=Df();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class Of{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=Ur("canvas")),Mi.width=e.width,Mi.height=e.height;const s=Mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nf=0;class bl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uo(s[o].image)):r.push(uo(s[o]))}else r=uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Of.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uf=0;const ho=new K;class Ct extends as{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=di,s=di,r=ln,o=hi,a=sn,c=Rn,u=Ct.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Ds(),this.name="",this.source=new bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case La:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case La:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Ku;Ct.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,u=c[0],h=c[4],p=c[8],v=c[1],g=c[5],x=c[9],S=c[2],f=c[6],l=c[10];if(Math.abs(h-v)<.01&&Math.abs(p-S)<.01&&Math.abs(x-f)<.01){if(Math.abs(h+v)<.1&&Math.abs(p+S)<.1&&Math.abs(x+f)<.1&&Math.abs(u+g+l-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,E=(g+1)/2,M=(l+1)/2,C=(h+v)/4,L=(p+S)/4,I=(x+f)/4;return y>E&&y>M?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=L/n):E>M?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=I/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=L/r,s=I/r),this.set(n,s,r,t),this}let _=Math.sqrt((f-x)*(f-x)+(p-S)*(p-S)+(v-h)*(v-h));return Math.abs(_)<.001&&(_=1),this.x=(f-x)/_,this.y=(p-S)/_,this.z=(v-h)/_,this.w=Math.acos((u+g+l-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ff extends as{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ct(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new bl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Ff{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ad extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bf extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qt):Qt.fromBufferAttribute(r,o),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(e.matrixWorld),this.union(qs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),Ys.subVectors(this.max,gs),wi.subVectors(e.a,gs),Ai.subVectors(e.b,gs),Ci.subVectors(e.c,gs),On.subVectors(Ai,wi),Nn.subVectors(Ci,Ai),ti.subVectors(wi,Ci);let t=[0,-On.z,On.y,0,-Nn.z,Nn.y,0,-ti.z,ti.y,On.z,0,-On.x,Nn.z,0,-Nn.x,ti.z,0,-ti.x,-On.y,On.x,0,-Nn.y,Nn.x,0,-ti.y,ti.x,0];return!fo(t,wi,Ai,Ci,Ys)||(t=[1,0,0,0,1,0,0,0,1],!fo(t,wi,Ai,Ci,Ys))?!1:(js.crossVectors(On,Nn),t=[js.x,js.y,js.z],fo(t,wi,Ai,Ci,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vn=[new K,new K,new K,new K,new K,new K,new K,new K],Qt=new K,qs=new Ns,wi=new K,Ai=new K,Ci=new K,On=new K,Nn=new K,ti=new K,gs=new K,Ys=new K,js=new K,ni=new K;function fo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ni.fromArray(i,r);const a=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),c=e.dot(ni),u=t.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const zf=new Ns,vs=new K,po=new K;class Ml{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(po)),this.expandByPoint(vs.copy(e.center).sub(po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _n=new K,mo=new K,Ks=new K,Un=new K,go=new K,Zs=new K,vo=new K;class kf{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){mo.copy(e).add(t).multiplyScalar(.5),Ks.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(mo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ks),a=Un.dot(this.direction),c=-Un.dot(Ks),u=Un.lengthSq(),h=Math.abs(1-o*o);let p,v,g,x;if(h>0)if(p=o*c-a,v=o*a-c,x=r*h,p>=0)if(v>=-x)if(v<=x){const S=1/h;p*=S,v*=S,g=p*(p+o*v+2*a)+v*(o*p+v+2*c)+u}else v=r,p=Math.max(0,-(o*v+a)),g=-p*p+v*(v+2*c)+u;else v=-r,p=Math.max(0,-(o*v+a)),g=-p*p+v*(v+2*c)+u;else v<=-x?(p=Math.max(0,-(-o*r+a)),v=p>0?-r:Math.min(Math.max(-r,-c),r),g=-p*p+v*(v+2*c)+u):v<=x?(p=0,v=Math.min(Math.max(-r,-c),r),g=v*(v+2*c)+u):(p=Math.max(0,-(o*r+a)),v=p>0?r:Math.min(Math.max(-r,-c),r),g=-p*p+v*(v+2*c)+u);else v=o>0?-r:r,p=Math.max(0,-(o*v+a)),g=-p*p+v*(v+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(mo).addScaledVector(Ks,v),g}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,v=this.origin;return u>=0?(n=(e.min.x-v.x)*u,s=(e.max.x-v.x)*u):(n=(e.max.x-v.x)*u,s=(e.min.x-v.x)*u),h>=0?(r=(e.min.y-v.y)*h,o=(e.max.y-v.y)*h):(r=(e.max.y-v.y)*h,o=(e.min.y-v.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-v.z)*p,c=(e.max.z-v.z)*p):(a=(e.max.z-v.z)*p,c=(e.min.z-v.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,s,r){go.subVectors(t,e),Zs.subVectors(n,e),vo.crossVectors(go,Zs);let o=this.direction.dot(vo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,e);const c=a*this.direction.dot(Zs.crossVectors(Un,Zs));if(c<0)return null;const u=a*this.direction.dot(go.cross(Un));if(u<0||c+u>o)return null;const h=-a*Un.dot(vo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,s,r,o,a,c,u,h,p,v,g,x,S,f){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u,h,p,v,g,x,S,f)}set(e,t,n,s,r,o,a,c,u,h,p,v,g,x,S,f){const l=this.elements;return l[0]=e,l[4]=t,l[8]=n,l[12]=s,l[1]=r,l[5]=o,l[9]=a,l[13]=c,l[2]=u,l[6]=h,l[10]=p,l[14]=v,l[3]=g,l[7]=x,l[11]=S,l[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const v=o*h,g=o*p,x=a*h,S=a*p;t[0]=c*h,t[4]=-c*p,t[8]=u,t[1]=g+x*u,t[5]=v-S*u,t[9]=-a*c,t[2]=S-v*u,t[6]=x+g*u,t[10]=o*c}else if(e.order==="YXZ"){const v=c*h,g=c*p,x=u*h,S=u*p;t[0]=v+S*a,t[4]=x*a-g,t[8]=o*u,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=g*a-x,t[6]=S+v*a,t[10]=o*c}else if(e.order==="ZXY"){const v=c*h,g=c*p,x=u*h,S=u*p;t[0]=v-S*a,t[4]=-o*p,t[8]=x+g*a,t[1]=g+x*a,t[5]=o*h,t[9]=S-v*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const v=o*h,g=o*p,x=a*h,S=a*p;t[0]=c*h,t[4]=x*u-g,t[8]=v*u+S,t[1]=c*p,t[5]=S*u+v,t[9]=g*u-x,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const v=o*c,g=o*u,x=a*c,S=a*u;t[0]=c*h,t[4]=S-v*p,t[8]=x*p+g,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=g*p+x,t[10]=v-S*p}else if(e.order==="XZY"){const v=o*c,g=o*u,x=a*c,S=a*u;t[0]=c*h,t[4]=-p,t[8]=u*h,t[1]=v*p+S,t[5]=o*h,t[9]=g*p-x,t[2]=x*p-g,t[6]=a*h,t[10]=S*p+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hf,e,Vf)}lookAt(e,t,n){const s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Fn.crossVectors(n,Ot),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Fn.crossVectors(n,Ot)),Fn.normalize(),Js.crossVectors(Ot,Fn),s[0]=Fn.x,s[4]=Js.x,s[8]=Ot.x,s[1]=Fn.y,s[5]=Js.y,s[9]=Ot.y,s[2]=Fn.z,s[6]=Js.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],p=n[5],v=n[9],g=n[13],x=n[2],S=n[6],f=n[10],l=n[14],_=n[3],y=n[7],E=n[11],M=n[15],C=s[0],L=s[4],I=s[8],w=s[12],T=s[1],P=s[5],N=s[9],U=s[13],z=s[2],$=s[6],F=s[10],q=s[14],V=s[3],ie=s[7],le=s[11],_e=s[15];return r[0]=o*C+a*T+c*z+u*V,r[4]=o*L+a*P+c*$+u*ie,r[8]=o*I+a*N+c*F+u*le,r[12]=o*w+a*U+c*q+u*_e,r[1]=h*C+p*T+v*z+g*V,r[5]=h*L+p*P+v*$+g*ie,r[9]=h*I+p*N+v*F+g*le,r[13]=h*w+p*U+v*q+g*_e,r[2]=x*C+S*T+f*z+l*V,r[6]=x*L+S*P+f*$+l*ie,r[10]=x*I+S*N+f*F+l*le,r[14]=x*w+S*U+f*q+l*_e,r[3]=_*C+y*T+E*z+M*V,r[7]=_*L+y*P+E*$+M*ie,r[11]=_*I+y*N+E*F+M*le,r[15]=_*w+y*U+E*q+M*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],u=e[13],h=e[2],p=e[6],v=e[10],g=e[14],x=e[3],S=e[7],f=e[11],l=e[15];return x*(+r*c*p-s*u*p-r*a*v+n*u*v+s*a*g-n*c*g)+S*(+t*c*g-t*u*v+r*o*v-s*o*g+s*u*h-r*c*h)+f*(+t*u*p-t*a*g-r*o*p+n*o*g+r*a*h-n*u*h)+l*(-s*a*h-t*c*p+t*a*v+s*o*p-n*o*v+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],p=e[9],v=e[10],g=e[11],x=e[12],S=e[13],f=e[14],l=e[15],_=p*f*u-S*v*u+S*c*g-a*f*g-p*c*l+a*v*l,y=x*v*u-h*f*u-x*c*g+o*f*g+h*c*l-o*v*l,E=h*S*u-x*p*u+x*a*g-o*S*g-h*a*l+o*p*l,M=x*p*c-h*S*c-x*a*v+o*S*v+h*a*f-o*p*f,C=t*_+n*y+s*E+r*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=_*L,e[1]=(S*v*r-p*f*r-S*s*g+n*f*g+p*s*l-n*v*l)*L,e[2]=(a*f*r-S*c*r+S*s*u-n*f*u-a*s*l+n*c*l)*L,e[3]=(p*c*r-a*v*r-p*s*u+n*v*u+a*s*g-n*c*g)*L,e[4]=y*L,e[5]=(h*f*r-x*v*r+x*s*g-t*f*g-h*s*l+t*v*l)*L,e[6]=(x*c*r-o*f*r-x*s*u+t*f*u+o*s*l-t*c*l)*L,e[7]=(o*v*r-h*c*r+h*s*u-t*v*u-o*s*g+t*c*g)*L,e[8]=E*L,e[9]=(x*p*r-h*S*r-x*n*g+t*S*g+h*n*l-t*p*l)*L,e[10]=(o*S*r-x*a*r+x*n*u-t*S*u-o*n*l+t*a*l)*L,e[11]=(h*a*r-o*p*r-h*n*u+t*p*u+o*n*g-t*a*g)*L,e[12]=M*L,e[13]=(h*S*s-x*p*s+x*n*v-t*S*v-h*n*f+t*p*f)*L,e[14]=(x*a*s-o*S*s-x*n*c+t*S*c+o*n*f-t*a*f)*L,e[15]=(o*p*s-h*a*s+h*n*c-t*p*c-o*n*v+t*a*v)*L,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,h*a+n,h*c-s*o,0,u*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,u=r+r,h=o+o,p=a+a,v=r*u,g=r*h,x=r*p,S=o*h,f=o*p,l=a*p,_=c*u,y=c*h,E=c*p,M=n.x,C=n.y,L=n.z;return s[0]=(1-(S+l))*M,s[1]=(g+E)*M,s[2]=(x-y)*M,s[3]=0,s[4]=(g-E)*C,s[5]=(1-(v+l))*C,s[6]=(f+_)*C,s[7]=0,s[8]=(x+y)*L,s[9]=(f-_)*L,s[10]=(1-(v+S))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const o=Ri.set(s[4],s[5],s[6]).length(),a=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],en.copy(this);const u=1/r,h=1/o,p=1/a;return en.elements[0]*=u,en.elements[1]*=u,en.elements[2]*=u,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=p,en.elements[9]*=p,en.elements[10]*=p,t.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=cn,c=!1){const u=this.elements,h=2*r/(t-e),p=2*r/(n-s),v=(t+e)/(t-e),g=(n+s)/(n-s);let x,S;if(c)x=r/(o-r),S=o*r/(o-r);else if(a===cn)x=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Nr)x=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=v,u[12]=0,u[1]=0,u[5]=p,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=cn,c=!1){const u=this.elements,h=2/(t-e),p=2/(n-s),v=-(t+e)/(t-e),g=-(n+s)/(n-s);let x,S;if(c)x=1/(o-r),S=o/(o-r);else if(a===cn)x=-2/(o-r),S=-(o+r)/(o-r);else if(a===Nr)x=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=v,u[1]=0,u[5]=p,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=x,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ri=new K,en=new ht,Hf=new K(0,0,0),Vf=new K(1,1,1),Fn=new K,Js=new K,Ot=new K,rc=new ht,oc=new Os;class Ln{constructor(e=0,t=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],h=s[9],p=s[2],v=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(v,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(v,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(v,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oc.setFromEuler(this),this.setFromQuaternion(oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class ld{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gf=0;const ac=new K,Li=new Os,yn=new ht,Qs=new K,_s=new K,Wf=new K,Xf=new Os,lc=new K(1,0,0),cc=new K(0,1,0),uc=new K(0,0,1),dc={type:"added"},$f={type:"removed"},Pi={type:"childadded",child:null},_o={type:"childremoved",child:null};class Rt extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new K,t=new Ln,n=new Os,s=new K(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(lc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(uc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(_s,Qs,this.up):yn.lookAt(Qs,_s,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(yn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($f),_o.child=e,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,Wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),v=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),v.length>0&&(n.skeletons=v),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new K(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new K,xn=new K,yo=new K,En=new K,Ii=new K,Di=new K,hc=new K,xo=new K,Eo=new K,So=new K,To=new ut,bo=new ut,Mo=new ut;class nn{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),xn.subVectors(n,t),yo.subVectors(e,t);const o=tn.dot(tn),a=tn.dot(xn),c=tn.dot(yo),u=xn.dot(xn),h=xn.dot(yo),p=o*u-a*a;if(p===0)return r.set(0,0,0),null;const v=1/p,g=(u*c-a*h)*v,x=(o*h-a*c)*v;return r.set(1-g-x,x,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(o,En.y),c.addScaledVector(a,En.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return To.setScalar(0),bo.setScalar(0),Mo.setScalar(0),To.fromBufferAttribute(e,t),bo.fromBufferAttribute(e,n),Mo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(To,r.x),o.addScaledVector(bo,r.y),o.addScaledVector(Mo,r.z),o}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),xn.subVectors(e,t),tn.cross(xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),tn.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ii.subVectors(s,n),Di.subVectors(r,n),xo.subVectors(e,n);const c=Ii.dot(xo),u=Di.dot(xo);if(c<=0&&u<=0)return t.copy(n);Eo.subVectors(e,s);const h=Ii.dot(Eo),p=Di.dot(Eo);if(h>=0&&p<=h)return t.copy(s);const v=c*p-h*u;if(v<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ii,o);So.subVectors(e,r);const g=Ii.dot(So),x=Di.dot(So);if(x>=0&&g<=x)return t.copy(r);const S=g*u-c*x;if(S<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(n).addScaledVector(Di,a);const f=h*x-g*p;if(f<=0&&p-h>=0&&g-x>=0)return hc.subVectors(r,s),a=(p-h)/(p-h+(g-x)),t.copy(s).addScaledVector(hc,a);const l=1/(f+S+v);return o=S*l,a=v*l,t.copy(n).addScaledVector(Ii,o).addScaledVector(Di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},er={h:0,s:0,l:0};function wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Lf(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wo(o,r,e+1/3),this.g=wo(o,r,e),this.b=wo(o,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=cd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Ke.workingToColorSpace(_t.copy(this),e),Math.round(qe(_t.r*255,0,255))*65536+Math.round(qe(_t.g*255,0,255))*256+Math.round(qe(_t.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(_t.copy(this),t);const n=_t.r,s=_t.g,r=_t.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const p=o-a;switch(u=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=$t){Ke.workingToColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,s=_t.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(er);const n=ao(Bn.h,er.h,t),s=ao(Bn.s,er.s,t),r=ao(Bn.l,er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new We;We.NAMES=cd;let qf=0;class $r extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Xi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=xa,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wl extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new K,tr=new et;let Yf=0;class dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ql,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ms(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}}class ud extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dd extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class hn extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jf=0;const Wt=new ht,Ao=new Rt,Oi=new K,Nt=new Ns,ys=new Ns,gt=new K;class jn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(od(e)?dd:ud)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ml);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Nt.min,ys.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,ys.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(ys.min),Nt.expandByPoint(ys.max))}Nt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)gt.fromBufferAttribute(a,u),c&&(Oi.fromBufferAttribute(e,u),gt.add(Oi)),s=Math.max(s,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new K,c[I]=new K;const u=new K,h=new K,p=new K,v=new et,g=new et,x=new et,S=new K,f=new K;function l(I,w,T){u.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),p.fromBufferAttribute(n,T),v.fromBufferAttribute(r,I),g.fromBufferAttribute(r,w),x.fromBufferAttribute(r,T),h.sub(u),p.sub(u),g.sub(v),x.sub(v);const P=1/(g.x*x.y-x.x*g.y);isFinite(P)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(P),f.copy(p).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(P),a[I].add(S),a[w].add(S),a[T].add(S),c[I].add(f),c[w].add(f),c[T].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,w=_.length;I<w;++I){const T=_[I],P=T.start,N=T.count;for(let U=P,z=P+N;U<z;U+=3)l(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new K,E=new K,M=new K,C=new K;function L(I){M.fromBufferAttribute(s,I),C.copy(M);const w=a[I];y.copy(w),y.sub(M.multiplyScalar(M.dot(w))).normalize(),E.crossVectors(C,w);const P=E.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,w=_.length;I<w;++I){const T=_[I],P=T.start,N=T.count;for(let U=P,z=P+N;U<z;U+=3)L(e.getX(U+0)),L(e.getX(U+1)),L(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,g=n.count;v<g;v++)n.setXYZ(v,0,0,0);const s=new K,r=new K,o=new K,a=new K,c=new K,u=new K,h=new K,p=new K;if(e)for(let v=0,g=e.count;v<g;v+=3){const x=e.getX(v+0),S=e.getX(v+1),f=e.getX(v+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,f),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,f),a.add(h),c.add(h),u.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(f,u.x,u.y,u.z)}else for(let v=0,g=t.count;v<g;v+=3)s.fromBufferAttribute(t,v+0),r.fromBufferAttribute(t,v+1),o.fromBufferAttribute(t,v+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(v+0,h.x,h.y,h.z),n.setXYZ(v+1,h.x,h.y,h.z),n.setXYZ(v+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,c){const u=a.array,h=a.itemSize,p=a.normalized,v=new u.constructor(c.length*h);let g=0,x=0;for(let S=0,f=c.length;S<f;S++){a.isInterleavedBufferAttribute?g=c[S]*a.data.stride+a.offset:g=c[S]*h;for(let l=0;l<h;l++)v[x++]=u[g++]}return new dn(v,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=e(c,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let h=0,p=u.length;h<p;h++){const v=u[h],g=e(v,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,v=u.length;p<v;p++){const g=u[p];h.push(g.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],p=r[u];for(let v=0,g=p.length;v<g;v++)h.push(p[v].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new ht,ii=new kf,nr=new Ml,pc=new K,ir=new K,sr=new K,rr=new K,Co=new K,or=new K,mc=new K,ar=new K;class Yt extends Rt{constructor(e=new jn,t=new wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){or.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=a[c],p=r[c];h!==0&&(Co.fromBufferAttribute(p,e),o?or.addScaledVector(Co,h):or.addScaledVector(Co.sub(t),h))}t.add(or)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),ii.copy(e.ray).recast(e.near),!(nr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(nr,pc)===null||ii.origin.distanceToSquared(pc)>(e.far-e.near)**2))&&(fc.copy(r).invert(),ii.copy(e.ray).applyMatrix4(fc),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,v=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=v.length;x<S;x++){const f=v[x],l=o[f.materialIndex],_=Math.max(f.start,g.start),y=Math.min(a.count,Math.min(f.start+f.count,g.start+g.count));for(let E=_,M=y;E<M;E+=3){const C=a.getX(E),L=a.getX(E+1),I=a.getX(E+2);s=lr(this,l,e,n,u,h,p,C,L,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const x=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let f=x,l=S;f<l;f+=3){const _=a.getX(f),y=a.getX(f+1),E=a.getX(f+2);s=lr(this,o,e,n,u,h,p,_,y,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,S=v.length;x<S;x++){const f=v[x],l=o[f.materialIndex],_=Math.max(f.start,g.start),y=Math.min(c.count,Math.min(f.start+f.count,g.start+g.count));for(let E=_,M=y;E<M;E+=3){const C=E,L=E+1,I=E+2;s=lr(this,l,e,n,u,h,p,C,L,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const x=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let f=x,l=S;f<l;f+=3){const _=f,y=f+1,E=f+2;s=lr(this,o,e,n,u,h,p,_,y,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Kf(i,e,t,n,s,r,o,a){let c;if(e.side===At?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Xn,a),c===null)return null;ar.copy(a),ar.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(ar);return u<t.near||u>t.far?null:{distance:u,point:ar.clone(),object:i}}function lr(i,e,t,n,s,r,o,a,c,u){i.getVertexPosition(a,ir),i.getVertexPosition(c,sr),i.getVertexPosition(u,rr);const h=Kf(i,e,t,n,ir,sr,rr,mc);if(h){const p=new K;nn.getBarycoord(mc,ir,sr,rr,p),s&&(h.uv=nn.getInterpolatedAttribute(s,a,c,u,p,new et)),r&&(h.uv1=nn.getInterpolatedAttribute(r,a,c,u,p,new et)),o&&(h.normal=nn.getInterpolatedAttribute(o,a,c,u,p,new K),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const v={a,b:c,c:u,normal:new K,materialIndex:0};nn.getNormal(ir,sr,rr,v.normal),h.face=v,h.barycoord=p}return h}class Us extends jn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],h=[],p=[];let v=0,g=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new hn(u,3)),this.setAttribute("normal",new hn(h,3)),this.setAttribute("uv",new hn(p,2));function x(S,f,l,_,y,E,M,C,L,I,w){const T=E/L,P=M/I,N=E/2,U=M/2,z=C/2,$=L+1,F=I+1;let q=0,V=0;const ie=new K;for(let le=0;le<F;le++){const _e=le*P-U;for(let Le=0;Le<$;Le++){const Ye=Le*T-N;ie[S]=Ye*_,ie[f]=_e*y,ie[l]=z,u.push(ie.x,ie.y,ie.z),ie[S]=0,ie[f]=0,ie[l]=C>0?1:-1,h.push(ie.x,ie.y,ie.z),p.push(Le/L),p.push(1-le/I),q+=1}}for(let le=0;le<I;le++)for(let _e=0;_e<L;_e++){const Le=v+_e+$*le,Ye=v+_e+$*(le+1),Xe=v+(_e+1)+$*(le+1),J=v+(_e+1)+$*le;c.push(Le,Ye,J),c.push(Ye,Xe,J),V+=6}a.addGroup(g,V,w),g+=V,v+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function xt(i){const e={};for(let t=0;t<i.length;t++){const n=Ji(i[t]);for(const s in n)e[s]=n[s]}return e}function Zf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Jf={clone:Ji,merge:xt};var Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fd extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new K,gc=new et,vc=new et;class qt extends fd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,gc,vc),t.subVectors(vc,gc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Ui=1;class tp extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(Ni,Ui,e,t);s.layers=this.layers,this.add(s);const r=new qt(Ni,Ui,e,t);r.layers=this.layers,this.add(r);const o=new qt(Ni,Ui,e,t);o.layers=this.layers,this.add(o);const a=new qt(Ni,Ui,e,t);a.layers=this.layers,this.add(a);const c=new qt(Ni,Ui,e,t);c.layers=this.layers,this.add(c);const u=new qt(Ni,Ui,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const u of t)this.remove(u);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,h]=this.children,p=e.getRenderTarget(),v=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(p,v,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class pd extends Ct{constructor(e=[],t=ji,n,s,r,o,a,c,u,h){super(e,t,n,s,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class np extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new pd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Us(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:Gn});r.uniforms.tEquirect.value=t;const o=new Yt(s,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=ln),new tp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Ts extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ip={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const S of e.hand.values()){const f=t.getJointPose(S,n),l=this._getHandJoint(u,S);f!==null&&(l.matrix.fromArray(f.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=f.radius),l.visible=f!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],v=h.position.distanceTo(p.position),g=.02,x=.005;u.inputState.pinching&&v>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&v<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ip)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ts;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sp extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Lo=new K,rp=new K,op=new ze;class ai{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Lo.subVectors(n,t).cross(rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||op.getNormalMatrix(e),s=this.coplanarPoint(Lo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Ml,ap=new et(.5,.5),cr=new K;class md{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],u=r[3],h=r[4],p=r[5],v=r[6],g=r[7],x=r[8],S=r[9],f=r[10],l=r[11],_=r[12],y=r[13],E=r[14],M=r[15];if(s[0].setComponents(u-o,g-h,l-x,M-_).normalize(),s[1].setComponents(u+o,g+h,l+x,M+_).normalize(),s[2].setComponents(u+a,g+p,l+S,M+y).normalize(),s[3].setComponents(u-a,g-p,l-S,M-y).normalize(),n)s[4].setComponents(c,v,f,E).normalize(),s[5].setComponents(u-c,g-v,l-f,M-E).normalize();else if(s[4].setComponents(u-c,g-v,l-f,M-E).normalize(),t===cn)s[5].setComponents(u+c,g+v,l+f,M+E).normalize();else if(t===Nr)s[5].setComponents(c,v,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);const t=ap.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(cr.x=s.normal.x>0?e.max.x:e.min.x,cr.y=s.normal.y>0?e.max.y:e.min.y,cr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gd extends Ct{constructor(e,t,n=gi,s,r,o,a=rn,c=rn,u,h=Rs,p=1){if(h!==Rs&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:p};super(v,s,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qi extends jn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),u=a+1,h=c+1,p=e/a,v=t/c,g=[],x=[],S=[],f=[];for(let l=0;l<h;l++){const _=l*v-o;for(let y=0;y<u;y++){const E=y*p-r;x.push(E,-_,0),S.push(0,0,1),f.push(y/a),f.push(1-l/c)}}for(let l=0;l<c;l++)for(let _=0;_<a;_++){const y=_+u*l,E=_+u*(l+1),M=_+1+u*(l+1),C=_+1+u*l;g.push(y,E,C),g.push(E,M,C)}this.setIndex(g),this.setAttribute("position",new hn(x,3)),this.setAttribute("normal",new hn(S,3)),this.setAttribute("uv",new hn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Al extends jn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let u=0;const h=[],p=new K,v=new K,g=[],x=[],S=[],f=[];for(let l=0;l<=n;l++){const _=[],y=l/n;let E=0;l===0&&o===0?E=.5/t:l===n&&c===Math.PI&&(E=-.5/t);for(let M=0;M<=t;M++){const C=M/t;p.x=-e*Math.cos(s+C*r)*Math.sin(o+y*a),p.y=e*Math.cos(o+y*a),p.z=e*Math.sin(s+C*r)*Math.sin(o+y*a),x.push(p.x,p.y,p.z),v.copy(p).normalize(),S.push(v.x,v.y,v.z),f.push(C+E,1-y),_.push(u++)}h.push(_)}for(let l=0;l<n;l++)for(let _=0;_<t;_++){const y=h[l][_+1],E=h[l][_],M=h[l+1][_],C=h[l+1][_+1];(l!==0||o>0)&&g.push(y,E,C),(l!==n-1||c<Math.PI)&&g.push(E,M,C)}this.setIndex(g),this.setAttribute("position",new hn(x,3)),this.setAttribute("normal",new hn(S,3)),this.setAttribute("uv",new hn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lp extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cp extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class up extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class dp extends fd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hp extends up{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fp extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function _c(i,e,t,n){const s=pp(n);switch(t){case ed:return i*e;case nd:return i*e/s.components*s.byteLength;case El:return i*e/s.components*s.byteLength;case id:return i*e*2/s.components*s.byteLength;case Sl:return i*e*2/s.components*s.byteLength;case td:return i*e*3/s.components*s.byteLength;case sn:return i*e*4/s.components*s.byteLength;case Tl:return i*e*4/s.components*s.byteLength;case Sr:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case br:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Da:case Na:return Math.max(i,16)*Math.max(e,8)/4;case Ia:case Oa:return Math.max(i,8)*Math.max(e,8)/2;case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wr:case Qa:case el:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sd:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nl:case il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pp(i){switch(i){case Rn:case Zu:return{byteLength:1,components:1};case As:case Ju:case Is:return{byteLength:2,components:1};case yl:case xl:return{byteLength:2,components:4};case gi:case _l:case Mn:return{byteLength:4,components:1};case Qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mp(i){const e=new WeakMap;function t(a,c){const u=a.array,h=a.usage,p=u.byteLength,v=i.createBuffer();i.bindBuffer(c,v),i.bufferData(c,u,h),a.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,u){const h=c.array,p=c.updateRanges;if(i.bindBuffer(u,a),p.length===0)i.bufferSubData(u,0,h);else{p.sort((g,x)=>g.start-x.start);let v=0;for(let g=1;g<p.length;g++){const x=p[v],S=p[g];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++v,p[v]=S)}p.length=v+1;for(let g=0,x=p.length;g<x;g++){const S=p[g];i.bufferSubData(u,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
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
#endif`,_p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
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
#endif`,Tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp=`#ifdef USE_BATCHING
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
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
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
#endif`,Lp=`#ifdef USE_BUMPMAP
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zp=`#define PI 3.141592653589793
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
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
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
}`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
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
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fm=`PhysicalMaterial material;
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
#endif`,pm=`struct PhysicalMaterial {
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
}`,mm=`
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_m=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mm=`#if defined( USE_POINTS_UV )
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
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bm=`#ifdef USE_NORMALMAP
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
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
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
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eg=`float getShadowMask() {
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
}`,tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,Sg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tg=`#define DISTANCE
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
}`,bg=`#define DISTANCE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Pg=`#define LAMBERT
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
}`,Ig=`#define LAMBERT
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
}`,Dg=`#define MATCAP
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
}`,Og=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,Fg=`#define PHONG
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
}`,Bg=`#define PHONG
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
}`,zg=`#define STANDARD
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
}`,kg=`#define STANDARD
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
}`,Hg=`#define TOON
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
}`,Vg=`#define TOON
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
}`,Gg=`uniform float size;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,$g=`uniform vec3 color;
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
}`,qg=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:gp,alphahash_pars_fragment:vp,alphamap_fragment:_p,alphamap_pars_fragment:yp,alphatest_fragment:xp,alphatest_pars_fragment:Ep,aomap_fragment:Sp,aomap_pars_fragment:Tp,batching_pars_vertex:bp,batching_vertex:Mp,begin_vertex:wp,beginnormal_vertex:Ap,bsdfs:Cp,iridescence_fragment:Rp,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Op,color_fragment:Np,color_pars_fragment:Up,color_pars_vertex:Fp,color_vertex:Bp,common:zp,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Gp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:$p,colorspace_pars_fragment:qp,envmap_fragment:Yp,envmap_common_pars_fragment:jp,envmap_pars_fragment:Kp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:lm,envmap_vertex:Jp,fog_vertex:Qp,fog_pars_vertex:em,fog_fragment:tm,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:om,lights_pars_begin:am,lights_toon_fragment:cm,lights_toon_pars_fragment:um,lights_phong_fragment:dm,lights_phong_pars_fragment:hm,lights_physical_fragment:fm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:vm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:Em,map_fragment:Sm,map_pars_fragment:Tm,map_particle_fragment:bm,map_particle_pars_fragment:Mm,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Am,morphinstance_vertex:Cm,morphcolor_vertex:Rm,morphnormal_vertex:Lm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Im,normal_fragment_begin:Dm,normal_fragment_maps:Om,normal_pars_fragment:Nm,normal_pars_vertex:Um,normal_vertex:Fm,normalmap_pars_fragment:Bm,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Hm,iridescence_pars_fragment:Vm,opaque_fragment:Gm,packing:Wm,premultiplied_alpha_fragment:Xm,project_vertex:$m,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:Jm,shadowmap_vertex:Qm,shadowmask_pars_fragment:eg,skinbase_vertex:tg,skinning_pars_vertex:ng,skinning_vertex:ig,skinnormal_vertex:sg,specularmap_fragment:rg,specularmap_pars_fragment:og,tonemapping_fragment:ag,tonemapping_pars_fragment:lg,transmission_fragment:cg,transmission_pars_fragment:ug,uv_pars_fragment:dg,uv_pars_vertex:hg,uv_vertex:fg,worldpos_vertex:pg,background_vert:mg,background_frag:gg,backgroundCube_vert:vg,backgroundCube_frag:_g,cube_vert:yg,cube_frag:xg,depth_vert:Eg,depth_frag:Sg,distanceRGBA_vert:Tg,distanceRGBA_frag:bg,equirect_vert:Mg,equirect_frag:wg,linedashed_vert:Ag,linedashed_frag:Cg,meshbasic_vert:Rg,meshbasic_frag:Lg,meshlambert_vert:Pg,meshlambert_frag:Ig,meshmatcap_vert:Dg,meshmatcap_frag:Og,meshnormal_vert:Ng,meshnormal_frag:Ug,meshphong_vert:Fg,meshphong_frag:Bg,meshphysical_vert:zg,meshphysical_frag:kg,meshtoon_vert:Hg,meshtoon_frag:Vg,points_vert:Gg,points_frag:Wg,shadow_vert:Xg,shadow_frag:$g,sprite_vert:qg,sprite_frag:Yg},ge={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},an={basic:{uniforms:xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:xt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:xt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:xt([ge.points,ge.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:xt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:xt([ge.common,ge.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:xt([ge.sprite,ge.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:xt([ge.common,ge.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:xt([ge.lights,ge.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};an.physical={uniforms:xt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ur={r:0,b:0,g:0},ri=new Ln,jg=new ht;function Kg(i,e,t,n,s,r,o){const a=new We(0);let c=r===!0?0:1,u,h,p=null,v=0,g=null;function x(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?t:e).get(E)),E}function S(y){let E=!1;const M=x(y);M===null?l(a,c):M&&M.isColor&&(l(M,1),E=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,E){const M=x(E);M&&(M.isCubeTexture||M.mapping===Xr)?(h===void 0&&(h=new Yt(new Us(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Ji(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ri.copy(E.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(ri)),h.material.toneMapped=Ke.getTransfer(M.colorSpace)!==nt,(p!==M||v!==M.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,p=M,v=M.version,g=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new Yt(new Qi(2,2),new Pn({name:"BackgroundMaterial",uniforms:Ji(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||v!==M.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,p=M,v=M.version,g=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function l(y,E){y.getRGB(ur,hd(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,E,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),c=E,l(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,l(a,c)},render:S,addToRenderList:f,dispose:_}}function Zg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=v(null);let r=s,o=!1;function a(T,P,N,U,z){let $=!1;const F=p(U,N,P);r!==F&&(r=F,u(r.object)),$=g(T,U,N,z),$&&x(T,U,N,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,E(T,P,N,U),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function u(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function p(T,P,N){const U=N.wireframe===!0;let z=n[T.id];z===void 0&&(z={},n[T.id]=z);let $=z[P.id];$===void 0&&($={},z[P.id]=$);let F=$[U];return F===void 0&&(F=v(c()),$[U]=F),F}function v(T){const P=[],N=[],U=[];for(let z=0;z<t;z++)P[z]=0,N[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:U,object:T,attributes:{},index:null}}function g(T,P,N,U){const z=r.attributes,$=P.attributes;let F=0;const q=N.getAttributes();for(const V in q)if(q[V].location>=0){const le=z[V];let _e=$[V];if(_e===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(_e=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(_e=T.instanceColor)),le===void 0||le.attribute!==_e||_e&&le.data!==_e.data)return!0;F++}return r.attributesNum!==F||r.index!==U}function x(T,P,N,U){const z={},$=P.attributes;let F=0;const q=N.getAttributes();for(const V in q)if(q[V].location>=0){let le=$[V];le===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(le=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(le=T.instanceColor));const _e={};_e.attribute=le,le&&le.data&&(_e.data=le.data),z[V]=_e,F++}r.attributes=z,r.attributesNum=F,r.index=U}function S(){const T=r.newAttributes;for(let P=0,N=T.length;P<N;P++)T[P]=0}function f(T){l(T,0)}function l(T,P){const N=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;N[T]=1,U[T]===0&&(i.enableVertexAttribArray(T),U[T]=1),z[T]!==P&&(i.vertexAttribDivisor(T,P),z[T]=P)}function _(){const T=r.newAttributes,P=r.enabledAttributes;for(let N=0,U=P.length;N<U;N++)P[N]!==T[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function y(T,P,N,U,z,$,F){F===!0?i.vertexAttribIPointer(T,P,N,z,$):i.vertexAttribPointer(T,P,N,U,z,$)}function E(T,P,N,U){S();const z=U.attributes,$=N.getAttributes(),F=P.defaultAttributeValues;for(const q in $){const V=$[q];if(V.location>=0){let ie=z[q];if(ie===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor)),ie!==void 0){const le=ie.normalized,_e=ie.itemSize,Le=e.get(ie);if(Le===void 0)continue;const Ye=Le.buffer,Xe=Le.type,J=Le.bytesPerElement,pe=Xe===i.INT||Xe===i.UNSIGNED_INT||ie.gpuType===_l;if(ie.isInterleavedBufferAttribute){const he=ie.data,be=he.stride,we=ie.offset;if(he.isInstancedInterleavedBuffer){for(let Ie=0;Ie<V.locationSize;Ie++)l(V.location+Ie,he.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ie=0;Ie<V.locationSize;Ie++)f(V.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Ie=0;Ie<V.locationSize;Ie++)y(V.location+Ie,_e/V.locationSize,Xe,le,be*J,(we+_e/V.locationSize*Ie)*J,pe)}else{if(ie.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)l(V.location+he,ie.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let he=0;he<V.locationSize;he++)f(V.location+he);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let he=0;he<V.locationSize;he++)y(V.location+he,_e/V.locationSize,Xe,le,_e*J,_e/V.locationSize*he*J,pe)}}else if(F!==void 0){const le=F[q];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(V.location,le);break;case 3:i.vertexAttrib3fv(V.location,le);break;case 4:i.vertexAttrib4fv(V.location,le);break;default:i.vertexAttrib1fv(V.location,le)}}}}_()}function M(){I();for(const T in n){const P=n[T];for(const N in P){const U=P[N];for(const z in U)h(U[z].object),delete U[z];delete P[N]}delete n[T]}}function C(T){if(n[T.id]===void 0)return;const P=n[T.id];for(const N in P){const U=P[N];for(const z in U)h(U[z].object),delete U[z];delete P[N]}delete n[T.id]}function L(T){for(const P in n){const N=n[P];if(N[T.id]===void 0)continue;const U=N[T.id];for(const z in U)h(U[z].object),delete U[z];delete N[T.id]}}function I(){w(),o=!0,r!==s&&(r=s,u(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:f,disableUnusedAttributes:_}}function Jg(i,e,t){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),t.update(h,n,1)}function o(u,h,p){p!==0&&(i.drawArraysInstanced(n,u,h,p),t.update(h,n,p))}function a(u,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,p);let g=0;for(let x=0;x<p;x++)g+=h[x];t.update(g,n,1)}function c(u,h,p,v){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<u.length;x++)o(u[x],h[x],v[x]);else{g.multiDrawArraysInstancedWEBGL(n,u,0,h,0,v,0,p);let x=0;for(let S=0;S<p;S++)x+=h[S]*v[S];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==sn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const I=L===Is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Rn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Mn&&!I)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),l=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=x>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:v,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:f,maxAttributes:l,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:M,maxSamples:C}}function ev(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ai,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,v){const g=p.length!==0||v||n!==0||s;return s=v,n=p.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,v){t=h(p,v,0)},this.setState=function(p,v,g){const x=p.clippingPlanes,S=p.clipIntersection,f=p.clipShadows,l=i.get(p);if(!s||x===null||x.length===0||r&&!f)r?h(null):u();else{const _=r?0:n,y=_*4;let E=l.clippingState||null;c.value=E,E=h(x,v,y,g);for(let M=0;M!==y;++M)E[M]=t[M];l.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,v,g,x){const S=p!==null?p.length:0;let f=null;if(S!==0){if(f=c.value,x!==!0||f===null){const l=g+S*4,_=v.matrixWorldInverse;a.getNormalMatrix(_),(f===null||f.length<l)&&(f=new Float32Array(l));for(let y=0,E=g;y!==S;++y,E+=4)o.copy(p[y]).applyMatrix4(_,a),o.normal.toArray(f,E),f[E+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,f}}function tv(i){let e=new WeakMap;function t(o,a){return a===Ca?o.mapping=ji:a===Ra&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ca||a===Ra)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new np(c.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Gi=4,yc=[.125,.215,.35,.446,.526,.582],ui=20,Po=new dp,xc=new We;let Io=null,Do=0,Oo=0,No=!1;const li=(1+Math.sqrt(5))/2,Fi=1/li,Ec=[new K(-li,Fi,0),new K(li,Fi,0),new K(-Fi,0,li),new K(Fi,0,li),new K(0,li,-Fi),new K(0,li,Fi),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],nv=new K;class Sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=nv}=r;Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Do,Oo),this._renderer.xr.enabled=No,e.scissorTest=!1,dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Is,format:sn,colorSpace:Zi,depthBuffer:!1},s=Tc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iv(r)),this._blurMaterial=sv(r,e,t)}return s}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,n,s,r){const c=new qt(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,g=p.toneMapping;p.getClearColor(xc),p.toneMapping=Wn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));const S=new wl({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),f=new Yt(new Us,S);let l=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,l=!0):(S.color.copy(xc),l=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(c.up.set(0,u[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):E===1?(c.up.set(0,0,u[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,u[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const M=this._cubeSize;dr(s,E*M,y>2?M:0,M,M),p.setRenderTarget(s),l&&p.render(f,c),p.render(e,c)}f.geometry.dispose(),f.material.dispose(),p.toneMapping=g,p.autoClear=v,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ji||e.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;dr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ec[(s-r-1)%Ec.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Yt(this._lodPlanes[s],u),v=u.uniforms,g=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*ui-1),S=r/x,f=isFinite(r)?1+Math.floor(h*S):ui;f>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ui}`);const l=[];let _=0;for(let L=0;L<ui;++L){const I=L/S,w=Math.exp(-I*I/2);l.push(w),L===0?_+=w:L<f&&(_+=2*w)}for(let L=0;L<l.length;L++)l[L]=l[L]/_;v.envMap.value=e.texture,v.samples.value=f,v.weights.value=l,v.latitudinal.value=o==="latitudinal",a&&(v.poleAxis.value=a);const{_lodMax:y}=this;v.dTheta.value=x,v.mipInt.value=y-n;const E=this._sizeLods[s],M=3*E*(s>y-Gi?s-y+Gi:0),C=4*(this._cubeSize-E);dr(t,M,C,3*E,2*E),c.setRenderTarget(t),c.render(p,Po)}}function iv(i){const e=[],t=[],n=[];let s=i;const r=i-Gi+1+yc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Gi?c=yc[o-i+Gi-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,p=1+u,v=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,x=6,S=3,f=2,l=1,_=new Float32Array(S*x*g),y=new Float32Array(f*x*g),E=new Float32Array(l*x*g);for(let C=0;C<g;C++){const L=C%3*2/3-1,I=C>2?0:-1,w=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];_.set(w,S*x*C),y.set(v,f*x*C);const T=[C,C,C,C,C,C];E.set(T,l*x*C)}const M=new jn;M.setAttribute("position",new dn(_,S)),M.setAttribute("uv",new dn(y,f)),M.setAttribute("faceIndex",new dn(E,l)),e.push(M),s>Gi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tc(i,e,t){const n=new vi(i,e,t);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sv(i,e,t){const n=new Float32Array(ui),s=new K(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function bc(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Mc(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}function rv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===Ca||c===Ra,h=c===ji||c===Ki;if(u||h){let p=e.get(a);const v=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==v)return t===null&&(t=new Sc(i)),p=u?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const g=a.image;return u&&g&&g.height>0||h&&g&&s(g)?(t===null&&(t=new Sc(i)),p=u?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ov(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&$i("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function av(i,e,t,n){const s={},r=new WeakMap;function o(p){const v=p.target;v.index!==null&&e.remove(v.index);for(const x in v.attributes)e.remove(v.attributes[x]);v.removeEventListener("dispose",o),delete s[v.id];const g=r.get(v);g&&(e.remove(g),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function a(p,v){return s[v.id]===!0||(v.addEventListener("dispose",o),s[v.id]=!0,t.memory.geometries++),v}function c(p){const v=p.attributes;for(const g in v)e.update(v[g],i.ARRAY_BUFFER)}function u(p){const v=[],g=p.index,x=p.attributes.position;let S=0;if(g!==null){const _=g.array;S=g.version;for(let y=0,E=_.length;y<E;y+=3){const M=_[y+0],C=_[y+1],L=_[y+2];v.push(M,C,C,L,L,M)}}else if(x!==void 0){const _=x.array;S=x.version;for(let y=0,E=_.length/3-1;y<E;y+=3){const M=y+0,C=y+1,L=y+2;v.push(M,C,C,L,L,M)}}else return;const f=new(od(v)?dd:ud)(v,1);f.version=S;const l=r.get(p);l&&e.remove(l),r.set(p,f)}function h(p){const v=r.get(p);if(v){const g=p.index;g!==null&&v.version<g.version&&u(p)}else u(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function lv(i,e,t){let n;function s(v){n=v}let r,o;function a(v){r=v.type,o=v.bytesPerElement}function c(v,g){i.drawElements(n,g,r,v*o),t.update(g,n,1)}function u(v,g,x){x!==0&&(i.drawElementsInstanced(n,g,r,v*o,x),t.update(g,n,x))}function h(v,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,v,0,x);let f=0;for(let l=0;l<x;l++)f+=g[l];t.update(f,n,1)}function p(v,g,x,S){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let l=0;l<v.length;l++)u(v[l]/o,g[l],S[l]);else{f.multiDrawElementsInstancedWEBGL(n,g,0,r,v,0,S,0,x);let l=0;for(let _=0;_<x;_++)l+=g[_]*S[_];t.update(l,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function cv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function uv(i,e,t){const n=new WeakMap,s=new ut;function r(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let v=n.get(a);if(v===void 0||v.count!==p){let w=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",w)};v!==void 0&&v.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],l=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),S===!0&&(y=3);let E=a.attributes.position.count*y,M=1;E>e.maxTextureSize&&(M=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*M*4*p),L=new ad(C,E,M,p);L.type=Mn,L.needsUpdate=!0;const I=y*4;for(let T=0;T<p;T++){const P=f[T],N=l[T],U=_[T],z=E*M*4*T;for(let $=0;$<P.count;$++){const F=$*I;g===!0&&(s.fromBufferAttribute(P,$),C[z+F+0]=s.x,C[z+F+1]=s.y,C[z+F+2]=s.z,C[z+F+3]=0),x===!0&&(s.fromBufferAttribute(N,$),C[z+F+4]=s.x,C[z+F+5]=s.y,C[z+F+6]=s.z,C[z+F+7]=0),S===!0&&(s.fromBufferAttribute(U,$),C[z+F+8]=s.x,C[z+F+9]=s.y,C[z+F+10]=s.z,C[z+F+11]=U.itemSize===4?s.w:1)}}v={count:p,texture:L,size:new et(E,M)},n.set(a,v),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let S=0;S<u.length;S++)g+=u[S];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:r}}function dv(i,e,t,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,p=e.get(c,h);if(s.get(p)!==u&&(e.update(p),s.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const v=c.skeleton;s.get(v)!==u&&(v.update(),s.set(v,u))}return p}function o(){s=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}const _d=new Ct,wc=new gd(1,1),yd=new ad,xd=new Bf,Ed=new pd,Ac=[],Cc=[],Rc=new Float32Array(16),Lc=new Float32Array(9),Pc=new Float32Array(4);function ls(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ac[s];if(r===void 0&&(r=new Float32Array(s),Ac[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qr(i,e){let t=Cc[e];t===void 0&&(t=new Int32Array(e),Cc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function gv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Pc.set(n),i.uniformMatrix2fv(this.addr,!1,Pc),pt(t,n)}}function vv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Lc.set(n),i.uniformMatrix3fv(this.addr,!1,Lc),pt(t,n)}}function _v(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Rc.set(n),i.uniformMatrix4fv(this.addr,!1,Rc),pt(t,n)}}function yv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Tv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function Mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Av(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wc.compareFunction=rd,r=wc):r=_d,t.setTexture2D(e||r,s)}function Cv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xd,s)}function Rv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ed,s)}function Lv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yd,s)}function Pv(i){switch(i){case 5126:return hv;case 35664:return fv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return vv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return xv;case 35668:case 35672:return Ev;case 35669:case 35673:return Sv;case 5125:return Tv;case 36294:return bv;case 36295:return Mv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Lv}}function Iv(i,e){i.uniform1fv(this.addr,e)}function Dv(i,e){const t=ls(e,this.size,2);i.uniform2fv(this.addr,t)}function Ov(i,e){const t=ls(e,this.size,3);i.uniform3fv(this.addr,t)}function Nv(i,e){const t=ls(e,this.size,4);i.uniform4fv(this.addr,t)}function Uv(i,e){const t=ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fv(i,e){const t=ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bv(i,e){const t=ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zv(i,e){i.uniform1iv(this.addr,e)}function kv(i,e){i.uniform2iv(this.addr,e)}function Hv(i,e){i.uniform3iv(this.addr,e)}function Vv(i,e){i.uniform4iv(this.addr,e)}function Gv(i,e){i.uniform1uiv(this.addr,e)}function Wv(i,e){i.uniform2uiv(this.addr,e)}function Xv(i,e){i.uniform3uiv(this.addr,e)}function $v(i,e){i.uniform4uiv(this.addr,e)}function qv(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||_d,r[o])}function Yv(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xd,r[o])}function jv(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ed,r[o])}function Kv(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yd,r[o])}function Zv(i){switch(i){case 5126:return Iv;case 35664:return Dv;case 35665:return Ov;case 35666:return Nv;case 35674:return Uv;case 35675:return Fv;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return kv;case 35668:case 35672:return Hv;case 35669:case 35673:return Vv;case 5125:return Gv;case 36294:return Wv;case 36295:return Xv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Kv}}class Jv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pv(t.type)}}class Qv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zv(t.type)}}class e_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function Ic(i,e){i.seq.push(e),i.map[e.id]=e}function t_(i,e,t){const n=i.name,s=n.length;for(Uo.lastIndex=0;;){const r=Uo.exec(n),o=Uo.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){Ic(t,u===void 0?new Jv(a,i,e):new Qv(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new e_(a),Ic(t,p)),t=p}}}class Ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);t_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Dc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const n_=37297;let i_=0;function s_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Oc=new ze;function r_(i){Ke._getMatrix(Oc,Ke.workingColorSpace,i);const e=`mat3( ${Oc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Or:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Nc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+s_(i.getShaderSource(e),a)}else return r}function o_(i,e){const t=r_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function a_(i,e){let t;switch(e){case df:t="Linear";break;case hf:t="Reinhard";break;case ff:t="Cineon";break;case pf:t="ACESFilmic";break;case gf:t="AgX";break;case vf:t="Neutral";break;case mf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hr=new K;function l_(){Ke.getLuminanceCoefficients(hr);const i=hr.x.toFixed(4),e=hr.y.toFixed(4),t=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function u_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function bs(i){return i!==""}function Uc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(h_,p_)}const f_=new Map;function p_(i,e){let t=ke[e];if(t===void 0){const n=f_.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rl(t)}const m_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(i){return i.replace(m_,g_)}function g_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function __(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Ki:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function x_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ju:e="ENVMAP_BLENDING_MULTIPLY";break;case cf:e="ENVMAP_BLENDING_MIX";break;case uf:e="ENVMAP_BLENDING_ADD";break}return e}function E_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function S_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=v_(t),u=__(t),h=y_(t),p=x_(t),v=E_(t),g=c_(t),x=u_(r),S=s.createProgram();let f,l,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(bs).join(`
`),f.length>0&&(f+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(bs).join(`
`),l.length>0&&(l+=`
`)):(f=[zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),l=[zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Wn?a_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,o_("linearToOutputTexel",t.outputColorSpace),l_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),o=rl(o),o=Uc(o,t),o=Fc(o,t),a=rl(a),a=Uc(a,t),a=Fc(a,t),o=Bc(o),a=Bc(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,l=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const y=_+f+o,E=_+l+a,M=Dc(s,s.VERTEX_SHADER,y),C=Dc(s,s.FRAGMENT_SHADER,E);s.attachShader(S,M),s.attachShader(S,C),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function L(P){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(S)||"",U=s.getShaderInfoLog(M)||"",z=s.getShaderInfoLog(C)||"",$=N.trim(),F=U.trim(),q=z.trim();let V=!0,ie=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,M,C);else{const le=Nc(s,M,"vertex"),_e=Nc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+le+`
`+_e)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(F===""||q==="")&&(ie=!1);ie&&(P.diagnostics={runnable:V,programLog:$,vertexShader:{log:F,prefix:f},fragmentShader:{log:q,prefix:l}})}s.deleteShader(M),s.deleteShader(C),I=new Ar(s,S),w=d_(s,S)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(S,n_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i_++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=M,this.fragmentShader=C,this}let T_=0;class b_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new M_(e),t.set(e,n)),n}}class M_{constructor(e){this.id=T_++,this.code=e,this.usedTimes=0}}function w_(i,e,t,n,s,r,o){const a=new ld,c=new b_,u=new Set,h=[],p=s.logarithmicDepthBuffer,v=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return u.add(w),w===0?"uv":`uv${w}`}function f(w,T,P,N,U){const z=N.fog,$=U.geometry,F=w.isMeshStandardMaterial?N.environment:null,q=(w.isMeshStandardMaterial?t:e).get(w.envMap||F),V=q&&q.mapping===Xr?q.image.height:null,ie=x[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const le=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_e=le!==void 0?le.length:0;let Le=0;$.morphAttributes.position!==void 0&&(Le=1),$.morphAttributes.normal!==void 0&&(Le=2),$.morphAttributes.color!==void 0&&(Le=3);let Ye,Xe,J,pe;if(ie){const Be=an[ie];Ye=Be.vertexShader,Xe=Be.fragmentShader}else Ye=w.vertexShader,Xe=w.fragmentShader,c.update(w),J=c.getVertexShaderID(w),pe=c.getFragmentShaderID(w);const he=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),we=U.isInstancedMesh===!0,Ie=U.isBatchedMesh===!0,Ze=!!w.map,Ve=!!w.matcap,B=!!q,Fe=!!w.aoMap,Ae=!!w.lightMap,He=!!w.bumpMap,Me=!!w.normalMap,Qe=!!w.displacementMap,ye=!!w.emissiveMap,De=!!w.metalnessMap,rt=!!w.roughnessMap,st=w.anisotropy>0,d=w.clearcoat>0,m=w.dispersion>0,b=w.iridescence>0,A=w.sheen>0,D=w.transmission>0,O=st&&!!w.anisotropyMap,G=d&&!!w.clearcoatMap,H=d&&!!w.clearcoatNormalMap,ee=d&&!!w.clearcoatRoughnessMap,Q=b&&!!w.iridescenceMap,j=b&&!!w.iridescenceThicknessMap,te=A&&!!w.sheenColorMap,fe=A&&!!w.sheenRoughnessMap,ce=!!w.specularMap,se=!!w.specularColorMap,Se=!!w.specularIntensityMap,k=D&&!!w.transmissionMap,re=D&&!!w.thicknessMap,de=!!w.gradientMap,me=!!w.alphaMap,oe=w.alphaTest>0,ne=!!w.alphaHash,xe=!!w.extensions;let Oe=Wn;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const Ge={shaderID:ie,shaderType:w.type,shaderName:w.name,vertexShader:Ye,fragmentShader:Xe,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:pe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Ie,batchingColor:Ie&&U._colorsTexture!==null,instancing:we,instancingColor:we&&U.instanceColor!==null,instancingMorph:we&&U.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Zi,alphaToCoverage:!!w.alphaToCoverage,map:Ze,matcap:Ve,envMap:B,envMapMode:B&&q.mapping,envMapCubeUVHeight:V,aoMap:Fe,lightMap:Ae,bumpMap:He,normalMap:Me,displacementMap:v&&Qe,emissiveMap:ye,normalMapObjectSpace:Me&&w.normalMapType===Sf,normalMapTangentSpace:Me&&w.normalMapType===Ef,metalnessMap:De,roughnessMap:rt,anisotropy:st,anisotropyMap:O,clearcoat:d,clearcoatMap:G,clearcoatNormalMap:H,clearcoatRoughnessMap:ee,dispersion:m,iridescence:b,iridescenceMap:Q,iridescenceThicknessMap:j,sheen:A,sheenColorMap:te,sheenRoughnessMap:fe,specularMap:ce,specularColorMap:se,specularIntensityMap:Se,transmission:D,transmissionMap:k,thicknessMap:re,gradientMap:de,opaque:w.transparent===!1&&w.blending===Xi&&w.alphaToCoverage===!1,alphaMap:me,alphaTest:oe,alphaHash:ne,combine:w.combine,mapUv:Ze&&S(w.map.channel),aoMapUv:Fe&&S(w.aoMap.channel),lightMapUv:Ae&&S(w.lightMap.channel),bumpMapUv:He&&S(w.bumpMap.channel),normalMapUv:Me&&S(w.normalMap.channel),displacementMapUv:Qe&&S(w.displacementMap.channel),emissiveMapUv:ye&&S(w.emissiveMap.channel),metalnessMapUv:De&&S(w.metalnessMap.channel),roughnessMapUv:rt&&S(w.roughnessMap.channel),anisotropyMapUv:O&&S(w.anisotropyMap.channel),clearcoatMapUv:G&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:H&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:j&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:te&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:fe&&S(w.sheenRoughnessMap.channel),specularMapUv:ce&&S(w.specularMap.channel),specularColorMapUv:se&&S(w.specularColorMap.channel),specularIntensityMapUv:Se&&S(w.specularIntensityMap.channel),transmissionMapUv:k&&S(w.transmissionMap.channel),thicknessMapUv:re&&S(w.thicknessMap.channel),alphaMapUv:me&&S(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Me||st),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(Ze||me),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:be,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ze&&w.map.isVideoTexture===!0&&Ke.getTransfer(w.map.colorSpace)===nt,decodeVideoTextureEmissive:ye&&w.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(w.emissiveMap.colorSpace)===nt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===bn,flipSided:w.side===At,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:xe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&w.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ge.vertexUv1s=u.has(1),Ge.vertexUv2s=u.has(2),Ge.vertexUv3s=u.has(3),u.clear(),Ge}function l(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)T.push(P),T.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(_(T,w),y(T,w),T.push(i.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function _(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function y(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),w.push(a.mask)}function E(w){const T=x[w.type];let P;if(T){const N=an[T];P=Jf.clone(N.uniforms)}else P=w.uniforms;return P}function M(w,T){let P;for(let N=0,U=h.length;N<U;N++){const z=h[N];if(z.cacheKey===T){P=z,++P.usedTimes;break}}return P===void 0&&(P=new S_(i,T,w,r),h.push(P)),P}function C(w){if(--w.usedTimes===0){const T=h.indexOf(w);h[T]=h[h.length-1],h.pop(),w.destroy()}}function L(w){c.remove(w)}function I(){c.dispose()}return{getParameters:f,getProgramCacheKey:l,getUniforms:E,acquireProgram:M,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:I}}function A_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function C_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(p,v,g,x,S,f){let l=i[e];return l===void 0?(l={id:p.id,object:p,geometry:v,material:g,groupOrder:x,renderOrder:p.renderOrder,z:S,group:f},i[e]=l):(l.id=p.id,l.object=p,l.geometry=v,l.material=g,l.groupOrder=x,l.renderOrder=p.renderOrder,l.z=S,l.group=f),e++,l}function a(p,v,g,x,S,f){const l=o(p,v,g,x,S,f);g.transmission>0?n.push(l):g.transparent===!0?s.push(l):t.push(l)}function c(p,v,g,x,S,f){const l=o(p,v,g,x,S,f);g.transmission>0?n.unshift(l):g.transparent===!0?s.unshift(l):t.unshift(l)}function u(p,v){t.length>1&&t.sort(p||C_),n.length>1&&n.sort(v||kc),s.length>1&&s.sort(v||kc)}function h(){for(let p=e,v=i.length;p<v;p++){const g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:u}}function R_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Hc,i.set(n,[o])):s>=r.length?(o=new Hc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function L_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new We};break;case"SpotLight":t={position:new K,direction:new K,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function P_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let I_=0;function D_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function O_(i){const e=new L_,t=P_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new K);const s=new K,r=new ht,o=new ht;function a(u){let h=0,p=0,v=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let g=0,x=0,S=0,f=0,l=0,_=0,y=0,E=0,M=0,C=0,L=0;u.sort(D_);for(let w=0,T=u.length;w<T;w++){const P=u[w],N=P.color,U=P.intensity,z=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*U,p+=N.g*U,v+=N.b*U;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],U);L++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,V=t.get(P);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=P.shadow.matrix,_++}n.directional[g]=F,g++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(N).multiplyScalar(U),F.distance=z,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[S]=F;const q=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,q.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[S]=q.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[S]=V,n.spotShadowMap[S]=$,E++}S++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(N).multiplyScalar(U),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=F,f++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const q=P.shadow,V=t.get(P);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[x]=V,n.pointShadowMap[x]=$,n.pointShadowMatrix[x]=P.shadow.matrix,y++}n.point[x]=F,x++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(U),F.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[l]=F,l++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=v;const I=n.hash;(I.directionalLength!==g||I.pointLength!==x||I.spotLength!==S||I.rectAreaLength!==f||I.hemiLength!==l||I.numDirectionalShadows!==_||I.numPointShadows!==y||I.numSpotShadows!==E||I.numSpotMaps!==M||I.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=S,n.rectArea.length=f,n.point.length=x,n.hemi.length=l,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,I.directionalLength=g,I.pointLength=x,I.spotLength=S,I.rectAreaLength=f,I.hemiLength=l,I.numDirectionalShadows=_,I.numPointShadows=y,I.numSpotShadows=E,I.numSpotMaps=M,I.numLightProbes=L,n.version=I_++)}function c(u,h){let p=0,v=0,g=0,x=0,S=0;const f=h.matrixWorldInverse;for(let l=0,_=u.length;l<_;l++){const y=u[l];if(y.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),p++}else if(y.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const E=n.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(y.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const E=n.point[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),v++}else if(y.isHemisphereLight){const E=n.hemi[S];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),S++}}}return{setup:a,setupView:c,state:n}}function Vc(i){const e=new O_(i),t=[],n=[];function s(h){u.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function N_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Vc(i),e.set(s,[a])):r>=o.length?(a=new Vc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F_=`uniform sampler2D shadow_pass;
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
}`;function B_(i,e,t){let n=new md;const s=new et,r=new et,o=new ut,a=new lp({depthPacking:xf}),c=new cp,u={},h=t.maxTextureSize,p={[Xn]:At,[At]:Xn,[bn]:bn},v=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:U_,fragmentShader:F_}),g=v.clone();g.defines.HORIZONTAL_PASS=1;const x=new jn;x.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Yt(x,v),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let l=this.type;this.render=function(C,L,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const w=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Gn),N.buffers.depth.getReversed()?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=l!==Tn&&this.type===Tn,z=l===Tn&&this.type!==Tn;for(let $=0,F=C.length;$<F;$++){const q=C[$],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ie=V.getFrameExtents();if(s.multiply(ie),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y)),V.map===null||U===!0||z===!0){const _e=this.type!==Tn?{minFilter:rn,magFilter:rn}:{};V.map!==null&&V.map.dispose(),V.map=new vi(s.x,s.y,_e),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const le=V.getViewportCount();for(let _e=0;_e<le;_e++){const Le=V.getViewport(_e);o.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),N.viewport(o),V.updateMatrices(q,_e),n=V.getFrustum(),E(L,I,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Tn&&_(V,I),V.needsUpdate=!1}l=this.type,f.needsUpdate=!1,i.setRenderTarget(w,T,P)};function _(C,L){const I=e.update(S);v.defines.VSM_SAMPLES!==C.blurSamples&&(v.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,v.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vi(s.x,s.y)),v.uniforms.shadow_pass.value=C.map.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(L,null,I,v,S,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(L,null,I,g,S,null)}function y(C,L,I,w){let T=null;const P=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)T=P;else if(T=I.isPointLight===!0?c:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const N=T.uuid,U=L.uuid;let z=u[N];z===void 0&&(z={},u[N]=z);let $=z[U];$===void 0&&($=T.clone(),z[U]=$,L.addEventListener("dispose",M)),T=$}if(T.visible=L.visible,T.wireframe=L.wireframe,w===Tn?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:p[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=i.properties.get(T);N.light=I}return T}function E(C,L,I,w,T){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===Tn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const U=e.update(C),z=C.material;if(Array.isArray(z)){const $=U.groups;for(let F=0,q=$.length;F<q;F++){const V=$[F],ie=z[V.materialIndex];if(ie&&ie.visible){const le=y(C,ie,w,T);C.onBeforeShadow(i,C,L,I,U,le,V),i.renderBufferDirect(I,null,U,le,C,V),C.onAfterShadow(i,C,L,I,U,le,V)}}}else if(z.visible){const $=y(C,z,w,T);C.onBeforeShadow(i,C,L,I,U,$,null),i.renderBufferDirect(I,null,U,$,C,null),C.onAfterShadow(i,C,L,I,U,$,null)}}const N=C.children;for(let U=0,z=N.length;U<z;U++)E(N[U],L,I,w,T)}function M(C){C.target.removeEventListener("dispose",M);for(const I in u){const w=u[I],T=C.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const z_={[Ea]:Sa,[Ta]:wa,[ba]:Aa,[Yi]:Ma,[Sa]:Ea,[wa]:Ta,[Aa]:ba,[Ma]:Yi};function k_(i,e){function t(){let k=!1;const re=new ut;let de=null;const me=new ut(0,0,0,0);return{setMask:function(oe){de!==oe&&!k&&(i.colorMask(oe,oe,oe,oe),de=oe)},setLocked:function(oe){k=oe},setClear:function(oe,ne,xe,Oe,Ge){Ge===!0&&(oe*=Oe,ne*=Oe,xe*=Oe),re.set(oe,ne,xe,Oe),me.equals(re)===!1&&(i.clearColor(oe,ne,xe,Oe),me.copy(re))},reset:function(){k=!1,de=null,me.set(-1,0,0,0)}}}function n(){let k=!1,re=!1,de=null,me=null,oe=null;return{setReversed:function(ne){if(re!==ne){const xe=e.get("EXT_clip_control");ne?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),re=ne;const Oe=oe;oe=null,this.setClear(Oe)}},getReversed:function(){return re},setTest:function(ne){ne?he(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ne){de!==ne&&!k&&(i.depthMask(ne),de=ne)},setFunc:function(ne){if(re&&(ne=z_[ne]),me!==ne){switch(ne){case Ea:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ne}},setLocked:function(ne){k=ne},setClear:function(ne){oe!==ne&&(re&&(ne=1-ne),i.clearDepth(ne),oe=ne)},reset:function(){k=!1,de=null,me=null,oe=null,re=!1}}}function s(){let k=!1,re=null,de=null,me=null,oe=null,ne=null,xe=null,Oe=null,Ge=null;return{setTest:function(Be){k||(Be?he(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Be){re!==Be&&!k&&(i.stencilMask(Be),re=Be)},setFunc:function(Be,kt,Lt){(de!==Be||me!==kt||oe!==Lt)&&(i.stencilFunc(Be,kt,Lt),de=Be,me=kt,oe=Lt)},setOp:function(Be,kt,Lt){(ne!==Be||xe!==kt||Oe!==Lt)&&(i.stencilOp(Be,kt,Lt),ne=Be,xe=kt,Oe=Lt)},setLocked:function(Be){k=Be},setClear:function(Be){Ge!==Be&&(i.clearStencil(Be),Ge=Be)},reset:function(){k=!1,re=null,de=null,me=null,oe=null,ne=null,xe=null,Oe=null,Ge=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,u=new WeakMap;let h={},p={},v=new WeakMap,g=[],x=null,S=!1,f=null,l=null,_=null,y=null,E=null,M=null,C=null,L=new We(0,0,0),I=0,w=!1,T=null,P=null,N=null,U=null,z=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=q>=2);let ie=null,le={};const _e=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Ye=new ut().fromArray(_e),Xe=new ut().fromArray(Le);function J(k,re,de,me){const oe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(k,ne),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<de;xe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(re+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return ne}const pe={};pe[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(i.DEPTH_TEST),o.setFunc(Yi),He(!1),Me(Yl),he(i.CULL_FACE),Fe(Gn);function he(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function be(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function we(k,re){return p[k]!==re?(i.bindFramebuffer(k,re),p[k]=re,k===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=re),k===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ie(k,re){let de=g,me=!1;if(k){de=v.get(re),de===void 0&&(de=[],v.set(re,de));const oe=k.textures;if(de.length!==oe.length||de[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,xe=oe.length;ne<xe;ne++)de[ne]=i.COLOR_ATTACHMENT0+ne;de.length=oe.length,me=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,me=!0);me&&i.drawBuffers(de)}function Ze(k){return x!==k?(i.useProgram(k),x=k,!0):!1}const Ve={[ci]:i.FUNC_ADD,[Xh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};Ve[qh]=i.MIN,Ve[Yh]=i.MAX;const B={[jh]:i.ZERO,[Kh]:i.ONE,[Zh]:i.SRC_COLOR,[ya]:i.SRC_ALPHA,[sf]:i.SRC_ALPHA_SATURATE,[tf]:i.DST_COLOR,[Qh]:i.DST_ALPHA,[Jh]:i.ONE_MINUS_SRC_COLOR,[xa]:i.ONE_MINUS_SRC_ALPHA,[nf]:i.ONE_MINUS_DST_COLOR,[ef]:i.ONE_MINUS_DST_ALPHA,[rf]:i.CONSTANT_COLOR,[of]:i.ONE_MINUS_CONSTANT_COLOR,[af]:i.CONSTANT_ALPHA,[lf]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(k,re,de,me,oe,ne,xe,Oe,Ge,Be){if(k===Gn){S===!0&&(be(i.BLEND),S=!1);return}if(S===!1&&(he(i.BLEND),S=!0),k!==Wh){if(k!==f||Be!==w){if((l!==ci||E!==ci)&&(i.blendEquation(i.FUNC_ADD),l=ci,E=ci),Be)switch(k){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jl:i.blendFunc(i.ONE,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,y=null,M=null,C=null,L.set(0,0,0),I=0,f=k,w=Be}return}oe=oe||re,ne=ne||de,xe=xe||me,(re!==l||oe!==E)&&(i.blendEquationSeparate(Ve[re],Ve[oe]),l=re,E=oe),(de!==_||me!==y||ne!==M||xe!==C)&&(i.blendFuncSeparate(B[de],B[me],B[ne],B[xe]),_=de,y=me,M=ne,C=xe),(Oe.equals(L)===!1||Ge!==I)&&(i.blendColor(Oe.r,Oe.g,Oe.b,Ge),L.copy(Oe),I=Ge),f=k,w=!1}function Ae(k,re){k.side===bn?be(i.CULL_FACE):he(i.CULL_FACE);let de=k.side===At;re&&(de=!de),He(de),k.blending===Xi&&k.transparent===!1?Fe(Gn):Fe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const me=k.stencilWrite;a.setTest(me),me&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(k){T!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),T=k)}function Me(k){k!==Hh?(he(i.CULL_FACE),k!==P&&(k===Yl?i.cullFace(i.BACK):k===Vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),P=k}function Qe(k){k!==N&&(F&&i.lineWidth(k),N=k)}function ye(k,re,de){k?(he(i.POLYGON_OFFSET_FILL),(U!==re||z!==de)&&(i.polygonOffset(re,de),U=re,z=de)):be(i.POLYGON_OFFSET_FILL)}function De(k){k?he(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function rt(k){k===void 0&&(k=i.TEXTURE0+$-1),ie!==k&&(i.activeTexture(k),ie=k)}function st(k,re,de){de===void 0&&(ie===null?de=i.TEXTURE0+$-1:de=ie);let me=le[de];me===void 0&&(me={type:void 0,texture:void 0},le[de]=me),(me.type!==k||me.texture!==re)&&(ie!==de&&(i.activeTexture(de),ie=de),i.bindTexture(k,re||pe[k]),me.type=k,me.texture=re)}function d(){const k=le[ie];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function m(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function A(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function D(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function G(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(k){Ye.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ye.copy(k))}function fe(k){Xe.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Xe.copy(k))}function ce(k,re){let de=u.get(re);de===void 0&&(de=new WeakMap,u.set(re,de));let me=de.get(k);me===void 0&&(me=i.getUniformBlockIndex(re,k.name),de.set(k,me))}function se(k,re){const me=u.get(re).get(k);c.get(re)!==me&&(i.uniformBlockBinding(re,me,k.__bindingPointIndex),c.set(re,me))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ie=null,le={},p={},v=new WeakMap,g=[],x=null,S=!1,f=null,l=null,_=null,y=null,E=null,M=null,C=null,L=new We(0,0,0),I=0,w=!1,T=null,P=null,N=null,U=null,z=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:be,bindFramebuffer:we,drawBuffers:Ie,useProgram:Ze,setBlending:Fe,setMaterial:Ae,setFlipSided:He,setCullFace:Me,setLineWidth:Qe,setPolygonOffset:ye,setScissorTest:De,activeTexture:rt,bindTexture:st,unbindTexture:d,compressedTexImage2D:m,compressedTexImage3D:b,texImage2D:Q,texImage3D:j,updateUBOMapping:ce,uniformBlockBinding:se,texStorage2D:H,texStorage3D:ee,texSubImage2D:A,texSubImage3D:D,compressedTexSubImage2D:O,compressedTexSubImage3D:G,scissor:te,viewport:fe,reset:Se}}function H_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,h=new WeakMap;let p;const v=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(d,m){return g?new OffscreenCanvas(d,m):Ur("canvas")}function S(d,m,b){let A=1;const D=st(d);if((D.width>b||D.height>b)&&(A=b/Math.max(D.width,D.height)),A<1)if(typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap||typeof VideoFrame<"u"&&d instanceof VideoFrame){const O=Math.floor(A*D.width),G=Math.floor(A*D.height);p===void 0&&(p=x(O,G));const H=m?x(O,G):p;return H.width=O,H.height=G,H.getContext("2d").drawImage(d,0,0,O,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+O+"x"+G+")."),H}else return"data"in d&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),d;return d}function f(d){return d.generateMipmaps}function l(d){i.generateMipmap(d)}function _(d){return d.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:d.isWebGL3DRenderTarget?i.TEXTURE_3D:d.isWebGLArrayRenderTarget||d.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(d,m,b,A,D=!1){if(d!==null){if(i[d]!==void 0)return i[d];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+d+"'")}let O=m;if(m===i.RED&&(b===i.FLOAT&&(O=i.R32F),b===i.HALF_FLOAT&&(O=i.R16F),b===i.UNSIGNED_BYTE&&(O=i.R8)),m===i.RED_INTEGER&&(b===i.UNSIGNED_BYTE&&(O=i.R8UI),b===i.UNSIGNED_SHORT&&(O=i.R16UI),b===i.UNSIGNED_INT&&(O=i.R32UI),b===i.BYTE&&(O=i.R8I),b===i.SHORT&&(O=i.R16I),b===i.INT&&(O=i.R32I)),m===i.RG&&(b===i.FLOAT&&(O=i.RG32F),b===i.HALF_FLOAT&&(O=i.RG16F),b===i.UNSIGNED_BYTE&&(O=i.RG8)),m===i.RG_INTEGER&&(b===i.UNSIGNED_BYTE&&(O=i.RG8UI),b===i.UNSIGNED_SHORT&&(O=i.RG16UI),b===i.UNSIGNED_INT&&(O=i.RG32UI),b===i.BYTE&&(O=i.RG8I),b===i.SHORT&&(O=i.RG16I),b===i.INT&&(O=i.RG32I)),m===i.RGB_INTEGER&&(b===i.UNSIGNED_BYTE&&(O=i.RGB8UI),b===i.UNSIGNED_SHORT&&(O=i.RGB16UI),b===i.UNSIGNED_INT&&(O=i.RGB32UI),b===i.BYTE&&(O=i.RGB8I),b===i.SHORT&&(O=i.RGB16I),b===i.INT&&(O=i.RGB32I)),m===i.RGBA_INTEGER&&(b===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),b===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),b===i.UNSIGNED_INT&&(O=i.RGBA32UI),b===i.BYTE&&(O=i.RGBA8I),b===i.SHORT&&(O=i.RGBA16I),b===i.INT&&(O=i.RGBA32I)),m===i.RGB&&b===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),m===i.RGBA){const G=D?Or:Ke.getTransfer(A);b===i.FLOAT&&(O=i.RGBA32F),b===i.HALF_FLOAT&&(O=i.RGBA16F),b===i.UNSIGNED_BYTE&&(O=G===nt?i.SRGB8_ALPHA8:i.RGBA8),b===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),b===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function E(d,m){let b;return d?m===null||m===gi||m===Cs?b=i.DEPTH24_STENCIL8:m===Mn?b=i.DEPTH32F_STENCIL8:m===As&&(b=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===gi||m===Cs?b=i.DEPTH_COMPONENT24:m===Mn?b=i.DEPTH_COMPONENT32F:m===As&&(b=i.DEPTH_COMPONENT16),b}function M(d,m){return f(d)===!0||d.isFramebufferTexture&&d.minFilter!==rn&&d.minFilter!==ln?Math.log2(Math.max(m.width,m.height))+1:d.mipmaps!==void 0&&d.mipmaps.length>0?d.mipmaps.length:d.isCompressedTexture&&Array.isArray(d.image)?m.mipmaps.length:1}function C(d){const m=d.target;m.removeEventListener("dispose",C),I(m),m.isVideoTexture&&h.delete(m)}function L(d){const m=d.target;m.removeEventListener("dispose",L),T(m)}function I(d){const m=n.get(d);if(m.__webglInit===void 0)return;const b=d.source,A=v.get(b);if(A){const D=A[m.__cacheKey];D.usedTimes--,D.usedTimes===0&&w(d),Object.keys(A).length===0&&v.delete(b)}n.remove(d)}function w(d){const m=n.get(d);i.deleteTexture(m.__webglTexture);const b=d.source,A=v.get(b);delete A[m.__cacheKey],o.memory.textures--}function T(d){const m=n.get(d);if(d.depthTexture&&(d.depthTexture.dispose(),n.remove(d.depthTexture)),d.isWebGLCubeRenderTarget)for(let A=0;A<6;A++){if(Array.isArray(m.__webglFramebuffer[A]))for(let D=0;D<m.__webglFramebuffer[A].length;D++)i.deleteFramebuffer(m.__webglFramebuffer[A][D]);else i.deleteFramebuffer(m.__webglFramebuffer[A]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[A])}else{if(Array.isArray(m.__webglFramebuffer))for(let A=0;A<m.__webglFramebuffer.length;A++)i.deleteFramebuffer(m.__webglFramebuffer[A]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let A=0;A<m.__webglColorRenderbuffer.length;A++)m.__webglColorRenderbuffer[A]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[A]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const b=d.textures;for(let A=0,D=b.length;A<D;A++){const O=n.get(b[A]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),o.memory.textures--),n.remove(b[A])}n.remove(d)}let P=0;function N(){P=0}function U(){const d=P;return d>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+d+" texture units while this GPU supports only "+s.maxTextures),P+=1,d}function z(d){const m=[];return m.push(d.wrapS),m.push(d.wrapT),m.push(d.wrapR||0),m.push(d.magFilter),m.push(d.minFilter),m.push(d.anisotropy),m.push(d.internalFormat),m.push(d.format),m.push(d.type),m.push(d.generateMipmaps),m.push(d.premultiplyAlpha),m.push(d.flipY),m.push(d.unpackAlignment),m.push(d.colorSpace),m.join()}function $(d,m){const b=n.get(d);if(d.isVideoTexture&&De(d),d.isRenderTargetTexture===!1&&d.isExternalTexture!==!0&&d.version>0&&b.__version!==d.version){const A=d.image;if(A===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(A.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(b,d,m);return}}else d.isExternalTexture&&(b.__webglTexture=d.sourceTexture?d.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,b.__webglTexture,i.TEXTURE0+m)}function F(d,m){const b=n.get(d);if(d.isRenderTargetTexture===!1&&d.version>0&&b.__version!==d.version){pe(b,d,m);return}t.bindTexture(i.TEXTURE_2D_ARRAY,b.__webglTexture,i.TEXTURE0+m)}function q(d,m){const b=n.get(d);if(d.isRenderTargetTexture===!1&&d.version>0&&b.__version!==d.version){pe(b,d,m);return}t.bindTexture(i.TEXTURE_3D,b.__webglTexture,i.TEXTURE0+m)}function V(d,m){const b=n.get(d);if(d.version>0&&b.__version!==d.version){he(b,d,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+m)}const ie={[La]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},le={[rn]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},_e={[Tf]:i.NEVER,[Rf]:i.ALWAYS,[bf]:i.LESS,[rd]:i.LEQUAL,[Mf]:i.EQUAL,[Cf]:i.GEQUAL,[wf]:i.GREATER,[Af]:i.NOTEQUAL};function Le(d,m){if(m.type===Mn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===ln||m.magFilter===ro||m.magFilter===$s||m.magFilter===hi||m.minFilter===ln||m.minFilter===ro||m.minFilter===$s||m.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(d,i.TEXTURE_WRAP_S,ie[m.wrapS]),i.texParameteri(d,i.TEXTURE_WRAP_T,ie[m.wrapT]),(d===i.TEXTURE_3D||d===i.TEXTURE_2D_ARRAY)&&i.texParameteri(d,i.TEXTURE_WRAP_R,ie[m.wrapR]),i.texParameteri(d,i.TEXTURE_MAG_FILTER,le[m.magFilter]),i.texParameteri(d,i.TEXTURE_MIN_FILTER,le[m.minFilter]),m.compareFunction&&(i.texParameteri(d,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(d,i.TEXTURE_COMPARE_FUNC,_e[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===rn||m.minFilter!==$s&&m.minFilter!==hi||m.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const b=e.get("EXT_texture_filter_anisotropic");i.texParameterf(d,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Ye(d,m){let b=!1;d.__webglInit===void 0&&(d.__webglInit=!0,m.addEventListener("dispose",C));const A=m.source;let D=v.get(A);D===void 0&&(D={},v.set(A,D));const O=z(m);if(O!==d.__cacheKey){D[O]===void 0&&(D[O]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,b=!0),D[O].usedTimes++;const G=D[d.__cacheKey];G!==void 0&&(D[d.__cacheKey].usedTimes--,G.usedTimes===0&&w(m)),d.__cacheKey=O,d.__webglTexture=D[O].texture}return b}function Xe(d,m,b){return Math.floor(Math.floor(d/b)/m)}function J(d,m,b,A){const O=d.updateRanges;if(O.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,b,A,m.data);else{O.sort((j,te)=>j.start-te.start);let G=0;for(let j=1;j<O.length;j++){const te=O[G],fe=O[j],ce=te.start+te.count,se=Xe(fe.start,m.width,4),Se=Xe(te.start,m.width,4);fe.start<=ce+1&&se===Se&&Xe(fe.start+fe.count-1,m.width,4)===se?te.count=Math.max(te.count,fe.start+fe.count-te.start):(++G,O[G]=fe)}O.length=G+1;const H=i.getParameter(i.UNPACK_ROW_LENGTH),ee=i.getParameter(i.UNPACK_SKIP_PIXELS),Q=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let j=0,te=O.length;j<te;j++){const fe=O[j],ce=Math.floor(fe.start/4),se=Math.ceil(fe.count/4),Se=ce%m.width,k=Math.floor(ce/m.width),re=se,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,Se,k,re,de,b,A,m.data)}d.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,H),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,Q)}}function pe(d,m,b){let A=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(A=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(A=i.TEXTURE_3D);const D=Ye(d,m),O=m.source;t.bindTexture(A,d.__webglTexture,i.TEXTURE0+b);const G=n.get(O);if(O.version!==G.__version||D===!0){t.activeTexture(i.TEXTURE0+b);const H=Ke.getPrimaries(Ke.workingColorSpace),ee=m.colorSpace===Hn?null:Ke.getPrimaries(m.colorSpace),Q=m.colorSpace===Hn||H===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let j=S(m.image,!1,s.maxTextureSize);j=rt(m,j);const te=r.convert(m.format,m.colorSpace),fe=r.convert(m.type);let ce=y(m.internalFormat,te,fe,m.colorSpace,m.isVideoTexture);Le(A,m);let se;const Se=m.mipmaps,k=m.isVideoTexture!==!0,re=G.__version===void 0||D===!0,de=O.dataReady,me=M(m,j);if(m.isDepthTexture)ce=E(m.format===Ls,m.type),re&&(k?t.texStorage2D(i.TEXTURE_2D,1,ce,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ce,j.width,j.height,0,te,fe,null));else if(m.isDataTexture)if(Se.length>0){k&&re&&t.texStorage2D(i.TEXTURE_2D,me,ce,Se[0].width,Se[0].height);for(let oe=0,ne=Se.length;oe<ne;oe++)se=Se[oe],k?de&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,se.width,se.height,te,fe,se.data):t.texImage2D(i.TEXTURE_2D,oe,ce,se.width,se.height,0,te,fe,se.data);m.generateMipmaps=!1}else k?(re&&t.texStorage2D(i.TEXTURE_2D,me,ce,j.width,j.height),de&&J(m,j,te,fe)):t.texImage2D(i.TEXTURE_2D,0,ce,j.width,j.height,0,te,fe,j.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){k&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ce,Se[0].width,Se[0].height,j.depth);for(let oe=0,ne=Se.length;oe<ne;oe++)if(se=Se[oe],m.format!==sn)if(te!==null)if(k){if(de)if(m.layerUpdates.size>0){const xe=_c(se.width,se.height,m.format,m.type);for(const Oe of m.layerUpdates){const Ge=se.data.subarray(Oe*xe/se.data.BYTES_PER_ELEMENT,(Oe+1)*xe/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Oe,se.width,se.height,1,te,Ge)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,se.width,se.height,j.depth,te,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,ce,se.width,se.height,j.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,se.width,se.height,j.depth,te,fe,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,ce,se.width,se.height,j.depth,0,te,fe,se.data)}else{k&&re&&t.texStorage2D(i.TEXTURE_2D,me,ce,Se[0].width,Se[0].height);for(let oe=0,ne=Se.length;oe<ne;oe++)se=Se[oe],m.format!==sn?te!==null?k?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,se.width,se.height,te,se.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,ce,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?de&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,se.width,se.height,te,fe,se.data):t.texImage2D(i.TEXTURE_2D,oe,ce,se.width,se.height,0,te,fe,se.data)}else if(m.isDataArrayTexture)if(k){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ce,j.width,j.height,j.depth),de)if(m.layerUpdates.size>0){const oe=_c(j.width,j.height,m.format,m.type);for(const ne of m.layerUpdates){const xe=j.data.subarray(ne*oe/j.data.BYTES_PER_ELEMENT,(ne+1)*oe/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,j.width,j.height,1,te,fe,xe)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,te,fe,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,j.width,j.height,j.depth,0,te,fe,j.data);else if(m.isData3DTexture)k?(re&&t.texStorage3D(i.TEXTURE_3D,me,ce,j.width,j.height,j.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,te,fe,j.data)):t.texImage3D(i.TEXTURE_3D,0,ce,j.width,j.height,j.depth,0,te,fe,j.data);else if(m.isFramebufferTexture){if(re)if(k)t.texStorage2D(i.TEXTURE_2D,me,ce,j.width,j.height);else{let oe=j.width,ne=j.height;for(let xe=0;xe<me;xe++)t.texImage2D(i.TEXTURE_2D,xe,ce,oe,ne,0,te,fe,null),oe>>=1,ne>>=1}}else if(Se.length>0){if(k&&re){const oe=st(Se[0]);t.texStorage2D(i.TEXTURE_2D,me,ce,oe.width,oe.height)}for(let oe=0,ne=Se.length;oe<ne;oe++)se=Se[oe],k?de&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,te,fe,se):t.texImage2D(i.TEXTURE_2D,oe,ce,te,fe,se);m.generateMipmaps=!1}else if(k){if(re){const oe=st(j);t.texStorage2D(i.TEXTURE_2D,me,ce,oe.width,oe.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te,fe,j)}else t.texImage2D(i.TEXTURE_2D,0,ce,te,fe,j);f(m)&&l(A),G.__version=O.version,m.onUpdate&&m.onUpdate(m)}d.__version=m.version}function he(d,m,b){if(m.image.length!==6)return;const A=Ye(d,m),D=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,d.__webglTexture,i.TEXTURE0+b);const O=n.get(D);if(D.version!==O.__version||A===!0){t.activeTexture(i.TEXTURE0+b);const G=Ke.getPrimaries(Ke.workingColorSpace),H=m.colorSpace===Hn?null:Ke.getPrimaries(m.colorSpace),ee=m.colorSpace===Hn||G===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const Q=m.isCompressedTexture||m.image[0].isCompressedTexture,j=m.image[0]&&m.image[0].isDataTexture,te=[];for(let ne=0;ne<6;ne++)!Q&&!j?te[ne]=S(m.image[ne],!0,s.maxCubemapSize):te[ne]=j?m.image[ne].image:m.image[ne],te[ne]=rt(m,te[ne]);const fe=te[0],ce=r.convert(m.format,m.colorSpace),se=r.convert(m.type),Se=y(m.internalFormat,ce,se,m.colorSpace),k=m.isVideoTexture!==!0,re=O.__version===void 0||A===!0,de=D.dataReady;let me=M(m,fe);Le(i.TEXTURE_CUBE_MAP,m);let oe;if(Q){k&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Se,fe.width,fe.height);for(let ne=0;ne<6;ne++){oe=te[ne].mipmaps;for(let xe=0;xe<oe.length;xe++){const Oe=oe[xe];m.format!==sn?ce!==null?k?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Oe.width,Oe.height,ce,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Se,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Oe.width,Oe.height,ce,se,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Se,Oe.width,Oe.height,0,ce,se,Oe.data)}}}else{if(oe=m.mipmaps,k&&re){oe.length>0&&me++;const ne=st(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Se,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(j){k?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,te[ne].width,te[ne].height,ce,se,te[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Se,te[ne].width,te[ne].height,0,ce,se,te[ne].data);for(let xe=0;xe<oe.length;xe++){const Ge=oe[xe].image[ne].image;k?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Ge.width,Ge.height,ce,se,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Se,Ge.width,Ge.height,0,ce,se,Ge.data)}}else{k?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ce,se,te[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Se,ce,se,te[ne]);for(let xe=0;xe<oe.length;xe++){const Oe=oe[xe];k?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,ce,se,Oe.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Se,ce,se,Oe.image[ne])}}}f(m)&&l(i.TEXTURE_CUBE_MAP),O.__version=D.version,m.onUpdate&&m.onUpdate(m)}d.__version=m.version}function be(d,m,b,A,D,O){const G=r.convert(b.format,b.colorSpace),H=r.convert(b.type),ee=y(b.internalFormat,G,H,b.colorSpace),Q=n.get(m),j=n.get(b);if(j.__renderTarget=m,!Q.__hasExternalTextures){const te=Math.max(1,m.width>>O),fe=Math.max(1,m.height>>O);D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?t.texImage3D(D,O,ee,te,fe,m.depth,0,G,H,null):t.texImage2D(D,O,ee,te,fe,0,G,H,null)}t.bindFramebuffer(i.FRAMEBUFFER,d),ye(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,A,D,j.__webglTexture,0,Qe(m)):(D===i.TEXTURE_2D||D>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,A,D,j.__webglTexture,O),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(d,m,b){if(i.bindRenderbuffer(i.RENDERBUFFER,d),m.depthBuffer){const A=m.depthTexture,D=A&&A.isDepthTexture?A.type:null,O=E(m.stencilBuffer,D),G=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=Qe(m);ye(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H,O,m.width,m.height):b?i.renderbufferStorageMultisample(i.RENDERBUFFER,H,O,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,O,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,d)}else{const A=m.textures;for(let D=0;D<A.length;D++){const O=A[D],G=r.convert(O.format,O.colorSpace),H=r.convert(O.type),ee=y(O.internalFormat,G,H,O.colorSpace),Q=Qe(m);b&&ye(m)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,ee,m.width,m.height):ye(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,ee,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ee,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(d,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,d),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const A=n.get(m.depthTexture);A.__renderTarget=m,(!A.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),$(m.depthTexture,0);const D=A.__webglTexture,O=Qe(m);if(m.depthTexture.format===Rs)ye(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,D,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,D,0);else if(m.depthTexture.format===Ls)ye(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,D,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function Ze(d){const m=n.get(d),b=d.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==d.depthTexture){const A=d.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),A){const D=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,A.removeEventListener("dispose",D)};A.addEventListener("dispose",D),m.__depthDisposeCallback=D}m.__boundDepthTexture=A}if(d.depthTexture&&!m.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");const A=d.texture.mipmaps;A&&A.length>0?Ie(m.__webglFramebuffer[0],d):Ie(m.__webglFramebuffer,d)}else if(b){m.__webglDepthbuffer=[];for(let A=0;A<6;A++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[A]),m.__webglDepthbuffer[A]===void 0)m.__webglDepthbuffer[A]=i.createRenderbuffer(),we(m.__webglDepthbuffer[A],d,!1);else{const D=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=m.__webglDepthbuffer[A];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,D,i.RENDERBUFFER,O)}}else{const A=d.texture.mipmaps;if(A&&A.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),we(m.__webglDepthbuffer,d,!1);else{const D=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,D,i.RENDERBUFFER,O)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(d,m,b){const A=n.get(d);m!==void 0&&be(A.__webglFramebuffer,d,d.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),b!==void 0&&Ze(d)}function B(d){const m=d.texture,b=n.get(d),A=n.get(m);d.addEventListener("dispose",L);const D=d.textures,O=d.isWebGLCubeRenderTarget===!0,G=D.length>1;if(G||(A.__webglTexture===void 0&&(A.__webglTexture=i.createTexture()),A.__version=m.version,o.memory.textures++),O){b.__webglFramebuffer=[];for(let H=0;H<6;H++)if(m.mipmaps&&m.mipmaps.length>0){b.__webglFramebuffer[H]=[];for(let ee=0;ee<m.mipmaps.length;ee++)b.__webglFramebuffer[H][ee]=i.createFramebuffer()}else b.__webglFramebuffer[H]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){b.__webglFramebuffer=[];for(let H=0;H<m.mipmaps.length;H++)b.__webglFramebuffer[H]=i.createFramebuffer()}else b.__webglFramebuffer=i.createFramebuffer();if(G)for(let H=0,ee=D.length;H<ee;H++){const Q=n.get(D[H]);Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture(),o.memory.textures++)}if(d.samples>0&&ye(d)===!1){b.__webglMultisampledFramebuffer=i.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let H=0;H<D.length;H++){const ee=D[H];b.__webglColorRenderbuffer[H]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,b.__webglColorRenderbuffer[H]);const Q=r.convert(ee.format,ee.colorSpace),j=r.convert(ee.type),te=y(ee.internalFormat,Q,j,ee.colorSpace,d.isXRRenderTarget===!0),fe=Qe(d);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,te,d.width,d.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,b.__webglColorRenderbuffer[H])}i.bindRenderbuffer(i.RENDERBUFFER,null),d.depthBuffer&&(b.__webglDepthRenderbuffer=i.createRenderbuffer(),we(b.__webglDepthRenderbuffer,d,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture),Le(i.TEXTURE_CUBE_MAP,m);for(let H=0;H<6;H++)if(m.mipmaps&&m.mipmaps.length>0)for(let ee=0;ee<m.mipmaps.length;ee++)be(b.__webglFramebuffer[H][ee],d,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ee);else be(b.__webglFramebuffer[H],d,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);f(m)&&l(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){for(let H=0,ee=D.length;H<ee;H++){const Q=D[H],j=n.get(Q);let te=i.TEXTURE_2D;(d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(te=d.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,j.__webglTexture),Le(te,Q),be(b.__webglFramebuffer,d,Q,i.COLOR_ATTACHMENT0+H,te,0),f(Q)&&l(te)}t.unbindTexture()}else{let H=i.TEXTURE_2D;if((d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(H=d.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(H,A.__webglTexture),Le(H,m),m.mipmaps&&m.mipmaps.length>0)for(let ee=0;ee<m.mipmaps.length;ee++)be(b.__webglFramebuffer[ee],d,m,i.COLOR_ATTACHMENT0,H,ee);else be(b.__webglFramebuffer,d,m,i.COLOR_ATTACHMENT0,H,0);f(m)&&l(H),t.unbindTexture()}d.depthBuffer&&Ze(d)}function Fe(d){const m=d.textures;for(let b=0,A=m.length;b<A;b++){const D=m[b];if(f(D)){const O=_(d),G=n.get(D).__webglTexture;t.bindTexture(O,G),l(O),t.unbindTexture()}}}const Ae=[],He=[];function Me(d){if(d.samples>0){if(ye(d)===!1){const m=d.textures,b=d.width,A=d.height;let D=i.COLOR_BUFFER_BIT;const O=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=n.get(d),H=m.length>1;if(H)for(let Q=0;Q<m.length;Q++)t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,G.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer);const ee=d.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let Q=0;Q<m.length;Q++){if(d.resolveDepthBuffer&&(d.depthBuffer&&(D|=i.DEPTH_BUFFER_BIT),d.stencilBuffer&&d.resolveStencilBuffer&&(D|=i.STENCIL_BUFFER_BIT)),H){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);const j=n.get(m[Q]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,b,A,0,0,b,A,D,i.NEAREST),c===!0&&(Ae.length=0,He.length=0,Ae.push(i.COLOR_ATTACHMENT0+Q),d.depthBuffer&&d.resolveDepthBuffer===!1&&(Ae.push(O),He.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),H)for(let Q=0;Q<m.length;Q++){t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);const j=n.get(m[Q]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,G.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,j,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}else if(d.depthBuffer&&d.resolveDepthBuffer===!1&&c){const m=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function Qe(d){return Math.min(s.maxSamples,d.samples)}function ye(d){const m=n.get(d);return d.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function De(d){const m=o.render.frame;h.get(d)!==m&&(h.set(d,m),d.update())}function rt(d,m){const b=d.colorSpace,A=d.format,D=d.type;return d.isCompressedTexture===!0||d.isVideoTexture===!0||b!==Zi&&b!==Hn&&(Ke.getTransfer(b)===nt?(A!==sn||D!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",b)),m}function st(d){return typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement?(u.width=d.naturalWidth||d.width,u.height=d.naturalHeight||d.height):typeof VideoFrame<"u"&&d instanceof VideoFrame?(u.width=d.displayWidth,u.height=d.displayHeight):(u.width=d.width,u.height=d.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=F,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=Ve,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ye}function V_(i,e){function t(n,s=Hn){let r;const o=Ke.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zu)return i.BYTE;if(n===Ju)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Is)return i.HALF_FLOAT;if(n===ed)return i.ALPHA;if(n===td)return i.RGB;if(n===sn)return i.RGBA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===nd)return i.RED;if(n===El)return i.RED_INTEGER;if(n===id)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===Sr||n===Tr||n===br||n===Mr)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Da||n===Oa||n===Na)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Fa||n===Ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Fa)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===$a||n===qa||n===Ya||n===ja||n===Ka||n===Za||n===Ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Za)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wr||n===Qa||n===el)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wr)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sd||n===tl||n===nl||n===il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Sd extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W_=`
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

}`;class X_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Sd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:G_,fragmentShader:W_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $_ extends as{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,p=null,v=null,g=null,x=null;const S=new X_,f={},l=t.getContextAttributes();let _=null,y=null;const E=[],M=[],C=new et;let L=null;const I=new qt;I.viewport=new ut;const w=new qt;w.viewport=new ut;const T=[I,w],P=new fp;let N=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=E[J];return pe===void 0&&(pe=new Ro,E[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=E[J];return pe===void 0&&(pe=new Ro,E[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=E[J];return pe===void 0&&(pe=new Ro,E[J]=pe),pe.getHandSpace()};function z(J){const pe=M.indexOf(J.inputSource);if(pe===-1)return;const he=E[pe];he!==void 0&&(he.update(J.inputSource,J.frame,u||o),he.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",F);for(let J=0;J<E.length;J++){const pe=M[J];pe!==null&&(M[J]=null,E[J].disconnect(pe))}N=null,U=null,S.reset();for(const J in f)delete f[J];e.setRenderTarget(_),g=null,v=null,p=null,s=null,y=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return v!==null?v:g},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",$),s.addEventListener("inputsourceschange",F),l.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&(p=new XRWebGLBinding(s,t)),p!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,be=null,we=null;l.depth&&(we=l.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=l.stencil?Ls:Rs,be=l.stencil?Cs:gi);const Ie={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};v=p.createProjectionLayer(Ie),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),y=new vi(v.textureWidth,v.textureHeight,{format:sn,type:Rn,depthTexture:new gd(v.textureWidth,v.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:l.stencil,colorSpace:e.outputColorSpace,samples:l.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const he={antialias:l.antialias,alpha:!0,depth:l.depth,stencil:l.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new vi(g.framebufferWidth,g.framebufferHeight,{format:sn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:l.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function F(J){for(let pe=0;pe<J.removed.length;pe++){const he=J.removed[pe],be=M.indexOf(he);be>=0&&(M[be]=null,E[be].disconnect(he))}for(let pe=0;pe<J.added.length;pe++){const he=J.added[pe];let be=M.indexOf(he);if(be===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=M.length){M.push(he),be=Ie;break}else if(M[Ie]===null){M[Ie]=he,be=Ie;break}if(be===-1)break}const we=E[be];we&&we.connect(he)}}const q=new K,V=new K;function ie(J,pe,he){q.setFromMatrixPosition(pe.matrixWorld),V.setFromMatrixPosition(he.matrixWorld);const be=q.distanceTo(V),we=pe.projectionMatrix.elements,Ie=he.projectionMatrix.elements,Ze=we[14]/(we[10]-1),Ve=we[14]/(we[10]+1),B=(we[9]+1)/we[5],Fe=(we[9]-1)/we[5],Ae=(we[8]-1)/we[0],He=(Ie[8]+1)/Ie[0],Me=Ze*Ae,Qe=Ze*He,ye=be/(-Ae+He),De=ye*-Ae;if(pe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(De),J.translateZ(ye),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const rt=Ze+ye,st=Ve+ye,d=Me-De,m=Qe+(be-De),b=B*Ve/st*rt,A=Fe*Ve/st*rt;J.projectionMatrix.makePerspective(d,m,b,A,rt,st),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let pe=J.near,he=J.far;S.texture!==null&&(S.depthNear>0&&(pe=S.depthNear),S.depthFar>0&&(he=S.depthFar)),P.near=w.near=I.near=pe,P.far=w.far=I.far=he,(N!==P.near||U!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),N=P.near,U=P.far),P.layers.mask=J.layers.mask|6,I.layers.mask=P.layers.mask&3,w.layers.mask=P.layers.mask&5;const be=J.parent,we=P.cameras;le(P,be);for(let Ie=0;Ie<we.length;Ie++)le(we[Ie],be);we.length===2?ie(P,I,w):P.projectionMatrix.copy(I.projectionMatrix),_e(J,P,be)};function _e(J,pe,he){he===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(he.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=sl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(v===null&&g===null))return c},this.setFoveation=function(J){c=J,v!==null&&(v.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(P)},this.getCameraTexture=function(J){return f[J]};let Le=null;function Ye(J,pe){if(h=pe.getViewerPose(u||o),x=pe,h!==null){const he=h.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let be=!1;he.length!==P.cameras.length&&(P.cameras.length=0,be=!0);for(let Ve=0;Ve<he.length;Ve++){const B=he[Ve];let Fe=null;if(g!==null)Fe=g.getViewport(B);else{const He=p.getViewSubImage(v,B);Fe=He.viewport,Ve===0&&(e.setRenderTargetTextures(y,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(y))}let Ae=T[Ve];Ae===void 0&&(Ae=new qt,Ae.layers.enable(Ve),Ae.viewport=new ut,T[Ve]=Ae),Ae.matrix.fromArray(B.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(B.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ve===0&&(P.matrix.copy(Ae.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),be===!0&&P.cameras.push(Ae)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&p){const Ve=p.getDepthInformation(he[0]);Ve&&Ve.isValid&&Ve.texture&&S.init(Ve,s.renderState)}if(we&&we.includes("camera-access")&&(e.state.unbindTexture(),p))for(let Ve=0;Ve<he.length;Ve++){const B=he[Ve].camera;if(B){let Fe=f[B];Fe||(Fe=new Sd,f[B]=Fe);const Ae=p.getCameraImage(B);Fe.sourceTexture=Ae}}}for(let he=0;he<E.length;he++){const be=M[he],we=E[he];be!==null&&we!==void 0&&we.update(be,pe,u||o)}Le&&Le(J,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),x=null}const Xe=new vd;Xe.setAnimationLoop(Ye),this.setAnimationLoop=function(J){Le=J},this.dispose=function(){}}}const oi=new Ln,q_=new ht;function Y_(i,e){function t(f,l){f.matrixAutoUpdate===!0&&f.updateMatrix(),l.value.copy(f.matrix)}function n(f,l){l.color.getRGB(f.fogColor.value,hd(i)),l.isFog?(f.fogNear.value=l.near,f.fogFar.value=l.far):l.isFogExp2&&(f.fogDensity.value=l.density)}function s(f,l,_,y,E){l.isMeshBasicMaterial||l.isMeshLambertMaterial?r(f,l):l.isMeshToonMaterial?(r(f,l),p(f,l)):l.isMeshPhongMaterial?(r(f,l),h(f,l)):l.isMeshStandardMaterial?(r(f,l),v(f,l),l.isMeshPhysicalMaterial&&g(f,l,E)):l.isMeshMatcapMaterial?(r(f,l),x(f,l)):l.isMeshDepthMaterial?r(f,l):l.isMeshDistanceMaterial?(r(f,l),S(f,l)):l.isMeshNormalMaterial?r(f,l):l.isLineBasicMaterial?(o(f,l),l.isLineDashedMaterial&&a(f,l)):l.isPointsMaterial?c(f,l,_,y):l.isSpriteMaterial?u(f,l):l.isShadowMaterial?(f.color.value.copy(l.color),f.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(f,l){f.opacity.value=l.opacity,l.color&&f.diffuse.value.copy(l.color),l.emissive&&f.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(f.map.value=l.map,t(l.map,f.mapTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.bumpMap&&(f.bumpMap.value=l.bumpMap,t(l.bumpMap,f.bumpMapTransform),f.bumpScale.value=l.bumpScale,l.side===At&&(f.bumpScale.value*=-1)),l.normalMap&&(f.normalMap.value=l.normalMap,t(l.normalMap,f.normalMapTransform),f.normalScale.value.copy(l.normalScale),l.side===At&&f.normalScale.value.negate()),l.displacementMap&&(f.displacementMap.value=l.displacementMap,t(l.displacementMap,f.displacementMapTransform),f.displacementScale.value=l.displacementScale,f.displacementBias.value=l.displacementBias),l.emissiveMap&&(f.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,f.emissiveMapTransform)),l.specularMap&&(f.specularMap.value=l.specularMap,t(l.specularMap,f.specularMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest);const _=e.get(l),y=_.envMap,E=_.envMapRotation;y&&(f.envMap.value=y,oi.copy(E),oi.x*=-1,oi.y*=-1,oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),f.envMapRotation.value.setFromMatrix4(q_.makeRotationFromEuler(oi)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=l.reflectivity,f.ior.value=l.ior,f.refractionRatio.value=l.refractionRatio),l.lightMap&&(f.lightMap.value=l.lightMap,f.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,f.lightMapTransform)),l.aoMap&&(f.aoMap.value=l.aoMap,f.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,f.aoMapTransform))}function o(f,l){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,l.map&&(f.map.value=l.map,t(l.map,f.mapTransform))}function a(f,l){f.dashSize.value=l.dashSize,f.totalSize.value=l.dashSize+l.gapSize,f.scale.value=l.scale}function c(f,l,_,y){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,f.size.value=l.size*_,f.scale.value=y*.5,l.map&&(f.map.value=l.map,t(l.map,f.uvTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest)}function u(f,l){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,f.rotation.value=l.rotation,l.map&&(f.map.value=l.map,t(l.map,f.mapTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest)}function h(f,l){f.specular.value.copy(l.specular),f.shininess.value=Math.max(l.shininess,1e-4)}function p(f,l){l.gradientMap&&(f.gradientMap.value=l.gradientMap)}function v(f,l){f.metalness.value=l.metalness,l.metalnessMap&&(f.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,f.metalnessMapTransform)),f.roughness.value=l.roughness,l.roughnessMap&&(f.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,f.roughnessMapTransform)),l.envMap&&(f.envMapIntensity.value=l.envMapIntensity)}function g(f,l,_){f.ior.value=l.ior,l.sheen>0&&(f.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),f.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(f.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,f.sheenColorMapTransform)),l.sheenRoughnessMap&&(f.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,f.sheenRoughnessMapTransform))),l.clearcoat>0&&(f.clearcoat.value=l.clearcoat,f.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(f.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,f.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(f.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===At&&f.clearcoatNormalScale.value.negate())),l.dispersion>0&&(f.dispersion.value=l.dispersion),l.iridescence>0&&(f.iridescence.value=l.iridescence,f.iridescenceIOR.value=l.iridescenceIOR,f.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(f.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,f.iridescenceMapTransform)),l.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),l.transmission>0&&(f.transmission.value=l.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),l.transmissionMap&&(f.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,f.transmissionMapTransform)),f.thickness.value=l.thickness,l.thicknessMap&&(f.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=l.attenuationDistance,f.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(f.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(f.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=l.specularIntensity,f.specularColor.value.copy(l.specularColor),l.specularColorMap&&(f.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,f.specularColorMapTransform)),l.specularIntensityMap&&(f.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,l){l.matcap&&(f.matcap.value=l.matcap)}function S(f,l){const _=e.get(l).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const E=y.program;n.uniformBlockBinding(_,E)}function u(_,y){let E=s[_.id];E===void 0&&(x(_),E=h(_),s[_.id]=E,_.addEventListener("dispose",f));const M=y.program;n.updateUBOMapping(_,M);const C=e.render.frame;r[_.id]!==C&&(v(_),r[_.id]=C)}function h(_){const y=p();_.__bindingPointIndex=y;const E=i.createBuffer(),M=_.__size,C=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,M,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function p(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(_){const y=s[_.id],E=_.uniforms,M=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,L=E.length;C<L;C++){const I=Array.isArray(E[C])?E[C]:[E[C]];for(let w=0,T=I.length;w<T;w++){const P=I[w];if(g(P,C,w,M)===!0){const N=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let $=0;$<U.length;$++){const F=U[$],q=S(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,N+z,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,z),z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(_,y,E,M){const C=_.value,L=y+"_"+E;if(M[L]===void 0)return typeof C=="number"||typeof C=="boolean"?M[L]=C:M[L]=C.clone(),!0;{const I=M[L];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return M[L]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function x(_){const y=_.uniforms;let E=0;const M=16;for(let L=0,I=y.length;L<I;L++){const w=Array.isArray(y[L])?y[L]:[y[L]];for(let T=0,P=w.length;T<P;T++){const N=w[T],U=Array.isArray(N.value)?N.value:[N.value];for(let z=0,$=U.length;z<$;z++){const F=U[z],q=S(F),V=E%M,ie=V%q.boundary,le=V+ie;E+=ie,le!==0&&M-le<q.storage&&(E+=M-le),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=q.storage}}}const C=E%M;return C>0&&(E+=M-C),_.__size=E,_.__cache={},this}function S(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function f(_){const y=_.target;y.removeEventListener("dispose",f);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function l(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:u,dispose:l}}class K_{constructor(e={}){const{canvas:t=Pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const x=new Uint32Array(4),S=new Int32Array(4);let f=null,l=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let M=!1;this._outputColorSpace=$t;let C=0,L=0,I=null,w=-1,T=null;const P=new ut,N=new ut;let U=null;const z=new We(0);let $=0,F=t.width,q=t.height,V=1,ie=null,le=null;const _e=new ut(0,0,F,q),Le=new ut(0,0,F,q);let Ye=!1;const Xe=new md;let J=!1,pe=!1;const he=new ht,be=new K,we=new ut,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Ve(){return I===null?V:1}let B=n;function Fe(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vl}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",oe,!1),B===null){const W="webgl2";if(B=Fe(W,R),B===null)throw Fe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ae,He,Me,Qe,ye,De,rt,st,d,m,b,A,D,O,G,H,ee,Q,j,te,fe,ce,se,Se;function k(){Ae=new ov(B),Ae.init(),ce=new V_(B,Ae),He=new Qg(B,Ae,e,ce),Me=new k_(B,Ae),He.reversedDepthBuffer&&v&&Me.buffers.depth.setReversed(!0),Qe=new cv(B),ye=new A_,De=new H_(B,Ae,Me,ye,He,ce,Qe),rt=new tv(E),st=new rv(E),d=new mp(B),se=new Zg(B,d),m=new av(B,d,Qe,se),b=new dv(B,m,d,Qe),j=new uv(B,He,De),H=new ev(ye),A=new w_(E,rt,st,Ae,He,se,H),D=new Y_(E,ye),O=new R_,G=new N_(Ae),Q=new Kg(E,rt,st,Me,b,g,c),ee=new B_(E,b,He),Se=new j_(B,Qe,He,Me),te=new Jg(B,Ae,Qe),fe=new lv(B,Ae,Qe),Qe.programs=A.programs,E.capabilities=He,E.extensions=Ae,E.properties=ye,E.renderLists=O,E.shadowMap=ee,E.state=Me,E.info=Qe}k();const re=new $_(E,B);this.xr=re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(F,q,!1))},this.getSize=function(R){return R.set(F,q)},this.setSize=function(R,W,Y=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,q=W,t.width=Math.floor(R*V),t.height=Math.floor(W*V),Y===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(F*V,q*V).floor()},this.setDrawingBufferSize=function(R,W,Y){F=R,q=W,V=Y,t.width=Math.floor(R*Y),t.height=Math.floor(W*Y),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(_e)},this.setViewport=function(R,W,Y,Z){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,W,Y,Z),Me.viewport(P.copy(_e).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(Le)},this.setScissor=function(R,W,Y,Z){R.isVector4?Le.set(R.x,R.y,R.z,R.w):Le.set(R,W,Y,Z),Me.scissor(N.copy(Le).multiplyScalar(V).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(R){Me.setScissorTest(Ye=R)},this.setOpaqueSort=function(R){ie=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,Y=!0){let Z=0;if(R){let X=!1;if(I!==null){const ue=I.texture.format;X=ue===Tl||ue===Sl||ue===El}if(X){const ue=I.texture.type,ve=ue===Rn||ue===gi||ue===As||ue===Cs||ue===yl||ue===xl,Te=Q.getClearColor(),Ee=Q.getClearAlpha(),Ne=Te.r,Ue=Te.g,Ce=Te.b;ve?(x[0]=Ne,x[1]=Ue,x[2]=Ce,x[3]=Ee,B.clearBufferuiv(B.COLOR,0,x)):(S[0]=Ne,S[1]=Ue,S[2]=Ce,S[3]=Ee,B.clearBufferiv(B.COLOR,0,S))}else Z|=B.COLOR_BUFFER_BIT}W&&(Z|=B.DEPTH_BUFFER_BIT),Y&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Q.dispose(),O.dispose(),G.dispose(),ye.dispose(),rt.dispose(),st.dispose(),b.dispose(),se.dispose(),Se.dispose(),A.dispose(),re.dispose(),re.removeEventListener("sessionstart",Lt),re.removeEventListener("sessionend",Gs),Ht.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=Qe.autoReset,W=ee.enabled,Y=ee.autoUpdate,Z=ee.needsUpdate,X=ee.type;k(),Qe.autoReset=R,ee.enabled=W,ee.autoUpdate=Y,ee.needsUpdate=Z,ee.type=X}function oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ne(R){const W=R.target;W.removeEventListener("dispose",ne),xe(W)}function xe(R){Oe(R),ye.remove(R)}function Oe(R){const W=ye.get(R).programs;W!==void 0&&(W.forEach(function(Y){A.releaseProgram(Y)}),R.isShaderMaterial&&A.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Y,Z,X,ue){W===null&&(W=Ie);const ve=X.isMesh&&X.matrixWorld.determinant()<0,Te=Nh(R,W,Y,Z,X);Me.setMaterial(Z,ve);let Ee=Y.index,Ne=1;if(Z.wireframe===!0){if(Ee=m.getWireframeAttribute(Y),Ee===void 0)return;Ne=2}const Ue=Y.drawRange,Ce=Y.attributes.position;let $e=Ue.start*Ne,tt=(Ue.start+Ue.count)*Ne;ue!==null&&($e=Math.max($e,ue.start*Ne),tt=Math.min(tt,(ue.start+ue.count)*Ne)),Ee!==null?($e=Math.max($e,0),tt=Math.min(tt,Ee.count)):Ce!=null&&($e=Math.max($e,0),tt=Math.min(tt,Ce.count));const ct=tt-$e;if(ct<0||ct===1/0)return;se.setup(X,Z,Te,Y,Ee);let ot,it=te;if(Ee!==null&&(ot=d.get(Ee),it=fe,it.setIndex(ot)),X.isMesh)Z.wireframe===!0?(Me.setLineWidth(Z.wireframeLinewidth*Ve()),it.setMode(B.LINES)):it.setMode(B.TRIANGLES);else if(X.isLine){let Pe=Z.linewidth;Pe===void 0&&(Pe=1),Me.setLineWidth(Pe*Ve()),X.isLineSegments?it.setMode(B.LINES):X.isLineLoop?it.setMode(B.LINE_LOOP):it.setMode(B.LINE_STRIP)}else X.isPoints?it.setMode(B.POINTS):X.isSprite&&it.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)$i("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))it.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Pe=X._multiDrawStarts,at=X._multiDrawCounts,je=X._multiDrawCount,It=Ee?d.get(Ee).bytesPerElement:1,Ti=ye.get(Z).currentProgram.getUniforms();for(let Dt=0;Dt<je;Dt++)Ti.setValue(B,"_gl_DrawID",Dt),it.render(Pe[Dt]/It,at[Dt])}else if(X.isInstancedMesh)it.renderInstances($e,ct,X.count);else if(Y.isInstancedBufferGeometry){const Pe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,at=Math.min(Y.instanceCount,Pe);it.renderInstances($e,ct,at)}else it.render($e,ct)};function Ge(R,W,Y){R.transparent===!0&&R.side===bn&&R.forceSinglePass===!1?(R.side=At,R.needsUpdate=!0,Si(R,W,Y),R.side=Xn,R.needsUpdate=!0,Si(R,W,Y),R.side=bn):Si(R,W,Y)}this.compile=function(R,W,Y=null){Y===null&&(Y=R),l=G.get(Y),l.init(W),y.push(l),Y.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(l.pushLight(X),X.castShadow&&l.pushShadow(X))}),R!==Y&&R.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(l.pushLight(X),X.castShadow&&l.pushShadow(X))}),l.setupLights();const Z=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ue=X.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Te=ue[ve];Ge(Te,Y,X),Z.add(Te)}else Ge(ue,Y,X),Z.add(ue)}),l=y.pop(),Z},this.compileAsync=function(R,W,Y=null){const Z=this.compile(R,W,Y);return new Promise(X=>{function ue(){if(Z.forEach(function(ve){ye.get(ve).currentProgram.isReady()&&Z.delete(ve)}),Z.size===0){X(R);return}setTimeout(ue,10)}Ae.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Be=null;function kt(R){Be&&Be(R)}function Lt(){Ht.stop()}function Gs(){Ht.start()}const Ht=new vd;Ht.setAnimationLoop(kt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(R){Be=R,re.setAnimationLoop(R),R===null?Ht.stop():Ht.start()},re.addEventListener("sessionstart",Lt),re.addEventListener("sessionend",Gs),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(W),W=re.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,W,I),l=G.get(R,y.length),l.init(W),y.push(l),he.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Xe.setFromProjectionMatrix(he,cn,W.reversedDepth),pe=this.localClippingEnabled,J=H.init(this.clippingPlanes,pe),f=O.get(R,_.length),f.init(),_.push(f),re.enabled===!0&&re.isPresenting===!0){const ue=E.xr.getDepthSensingMesh();ue!==null&&fs(ue,W,-1/0,E.sortObjects)}fs(R,W,0,E.sortObjects),f.finish(),E.sortObjects===!0&&f.sort(ie,le),Ze=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ze&&Q.addToRenderList(f,R),this.info.render.frame++,J===!0&&H.beginShadows();const Y=l.state.shadowsArray;ee.render(Y,R,W),J===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=f.opaque,X=f.transmissive;if(l.setupLights(),W.isArrayCamera){const ue=W.cameras;if(X.length>0)for(let ve=0,Te=ue.length;ve<Te;ve++){const Ee=ue[ve];mt(Z,X,R,Ee)}Ze&&Q.render(R);for(let ve=0,Te=ue.length;ve<Te;ve++){const Ee=ue[ve];Je(f,R,Ee,Ee.viewport)}}else X.length>0&&mt(Z,X,R,W),Ze&&Q.render(R),Je(f,R,W);I!==null&&L===0&&(De.updateMultisampleRenderTarget(I),De.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(E,R,W),se.resetDefaultState(),w=-1,T=null,y.pop(),y.length>0?(l=y[y.length-1],J===!0&&H.setGlobalState(E.clippingPlanes,l.state.camera)):l=null,_.pop(),_.length>0?f=_[_.length-1]:f=null};function fs(R,W,Y,Z){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)l.pushLight(R),R.castShadow&&l.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xe.intersectsSprite(R)){Z&&we.setFromMatrixPosition(R.matrixWorld).applyMatrix4(he);const ve=b.update(R),Te=R.material;Te.visible&&f.push(R,ve,Te,Y,we.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xe.intersectsObject(R))){const ve=b.update(R),Te=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),we.copy(R.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),we.copy(ve.boundingSphere.center)),we.applyMatrix4(R.matrixWorld).applyMatrix4(he)),Array.isArray(Te)){const Ee=ve.groups;for(let Ne=0,Ue=Ee.length;Ne<Ue;Ne++){const Ce=Ee[Ne],$e=Te[Ce.materialIndex];$e&&$e.visible&&f.push(R,ve,$e,Y,we.z,Ce)}}else Te.visible&&f.push(R,ve,Te,Y,we.z,null)}}const ue=R.children;for(let ve=0,Te=ue.length;ve<Te;ve++)fs(ue[ve],W,Y,Z)}function Je(R,W,Y,Z){const X=R.opaque,ue=R.transmissive,ve=R.transparent;l.setupLightsView(Y),J===!0&&H.setGlobalState(E.clippingPlanes,Y),Z&&Me.viewport(P.copy(Z)),X.length>0&&Pt(X,W,Y),ue.length>0&&Pt(ue,W,Y),ve.length>0&&Pt(ve,W,Y),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function mt(R,W,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[Z.id]===void 0&&(l.state.transmissionRenderTarget[Z.id]=new vi(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Is:Rn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ue=l.state.transmissionRenderTarget[Z.id],ve=Z.viewport||P;ue.setSize(ve.z*E.transmissionResolutionScale,ve.w*E.transmissionResolutionScale);const Te=E.getRenderTarget(),Ee=E.getActiveCubeFace(),Ne=E.getActiveMipmapLevel();E.setRenderTarget(ue),E.getClearColor(z),$=E.getClearAlpha(),$<1&&E.setClearColor(16777215,.5),E.clear(),Ze&&Q.render(Y);const Ue=E.toneMapping;E.toneMapping=Wn;const Ce=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),l.setupLightsView(Z),J===!0&&H.setGlobalState(E.clippingPlanes,Z),Pt(R,Y,Z),De.updateMultisampleRenderTarget(ue),De.updateRenderTargetMipmap(ue),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let tt=0,ct=W.length;tt<ct;tt++){const ot=W[tt],it=ot.object,Pe=ot.geometry,at=ot.material,je=ot.group;if(at.side===bn&&it.layers.test(Z.layers)){const It=at.side;at.side=At,at.needsUpdate=!0,Qn(it,Y,Z,Pe,at,je),at.side=It,at.needsUpdate=!0,$e=!0}}$e===!0&&(De.updateMultisampleRenderTarget(ue),De.updateRenderTargetMipmap(ue))}E.setRenderTarget(Te,Ee,Ne),E.setClearColor(z,$),Ce!==void 0&&(Z.viewport=Ce),E.toneMapping=Ue}function Pt(R,W,Y){const Z=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ue=R.length;X<ue;X++){const ve=R[X],Te=ve.object,Ee=ve.geometry,Ne=ve.group;let Ue=ve.material;Ue.allowOverride===!0&&Z!==null&&(Ue=Z),Te.layers.test(Y.layers)&&Qn(Te,W,Y,Ee,Ue,Ne)}}function Qn(R,W,Y,Z,X,ue){R.onBeforeRender(E,W,Y,Z,X,ue),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(E,W,Y,Z,R,ue),X.transparent===!0&&X.side===bn&&X.forceSinglePass===!1?(X.side=At,X.needsUpdate=!0,E.renderBufferDirect(Y,W,Z,X,R,ue),X.side=Xn,X.needsUpdate=!0,E.renderBufferDirect(Y,W,Z,X,R,ue),X.side=bn):E.renderBufferDirect(Y,W,Z,X,R,ue),R.onAfterRender(E,W,Y,Z,X,ue)}function Si(R,W,Y){W.isScene!==!0&&(W=Ie);const Z=ye.get(R),X=l.state.lights,ue=l.state.shadowsArray,ve=X.state.version,Te=A.getParameters(R,X.state,ue,W,Y),Ee=A.getProgramCacheKey(Te);let Ne=Z.programs;Z.environment=R.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(R.isMeshStandardMaterial?st:rt).get(R.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ne===void 0&&(R.addEventListener("dispose",ne),Ne=new Map,Z.programs=Ne);let Ue=Ne.get(Ee);if(Ue!==void 0){if(Z.currentProgram===Ue&&Z.lightsStateVersion===ve)return Xs(R,Te),Ue}else Te.uniforms=A.getUniforms(R),R.onBeforeCompile(Te,E),Ue=A.acquireProgram(Te,Ee),Ne.set(Ee,Ue),Z.uniforms=Te.uniforms;const Ce=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ce.clippingPlanes=H.uniform),Xs(R,Te),Z.needsLights=Fh(R),Z.lightsStateVersion=ve,Z.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.directionalShadowMap.value=X.state.directionalShadowMap,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotShadowMap.value=X.state.spotShadowMap,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMap.value=X.state.pointShadowMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=Ue,Z.uniformsList=null,Ue}function Ws(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Ar.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Xs(R,W){const Y=ye.get(R);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.batchingColor=W.batchingColor,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.instancingMorph=W.instancingMorph,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function Nh(R,W,Y,Z,X){W.isScene!==!0&&(W=Ie),De.resetTextureUnits();const ue=W.fog,ve=Z.isMeshStandardMaterial?W.environment:null,Te=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Zi,Ee=(Z.isMeshStandardMaterial?st:rt).get(Z.envMap||ve),Ne=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ue=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ce=!!Y.morphAttributes.position,$e=!!Y.morphAttributes.normal,tt=!!Y.morphAttributes.color;let ct=Wn;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ct=E.toneMapping);const ot=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,it=ot!==void 0?ot.length:0,Pe=ye.get(Z),at=l.state.lights;if(J===!0&&(pe===!0||R!==T)){const yt=R===T&&Z.id===w;H.setState(Z,R,yt)}let je=!1;Z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==at.state.version||Pe.outputColorSpace!==Te||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Ee||Z.fog===!0&&Pe.fog!==ue||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==H.numPlanes||Pe.numIntersection!==H.numIntersection)||Pe.vertexAlphas!==Ne||Pe.vertexTangents!==Ue||Pe.morphTargets!==Ce||Pe.morphNormals!==$e||Pe.morphColors!==tt||Pe.toneMapping!==ct||Pe.morphTargetsCount!==it)&&(je=!0):(je=!0,Pe.__version=Z.version);let It=Pe.currentProgram;je===!0&&(It=Si(Z,W,X));let Ti=!1,Dt=!1,ps=!1;const lt=It.getUniforms(),Vt=Pe.uniforms;if(Me.useProgram(It.program)&&(Ti=!0,Dt=!0,ps=!0),Z.id!==w&&(w=Z.id,Dt=!0),Ti||T!==R){Me.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),lt.setValue(B,"projectionMatrix",R.projectionMatrix),lt.setValue(B,"viewMatrix",R.matrixWorldInverse);const bt=lt.map.cameraPosition;bt!==void 0&&bt.setValue(B,be.setFromMatrixPosition(R.matrixWorld)),He.logarithmicDepthBuffer&&lt.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&lt.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,Dt=!0,ps=!0)}if(X.isSkinnedMesh){lt.setOptional(B,X,"bindMatrix"),lt.setOptional(B,X,"bindMatrixInverse");const yt=X.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),lt.setValue(B,"boneTexture",yt.boneTexture,De))}X.isBatchedMesh&&(lt.setOptional(B,X,"batchingTexture"),lt.setValue(B,"batchingTexture",X._matricesTexture,De),lt.setOptional(B,X,"batchingIdTexture"),lt.setValue(B,"batchingIdTexture",X._indirectTexture,De),lt.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&lt.setValue(B,"batchingColorTexture",X._colorsTexture,De));const Gt=Y.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&j.update(X,Y,It),(Dt||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,lt.setValue(B,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Vt.envMap.value=Ee,Vt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(Vt.envMapIntensity.value=W.environmentIntensity),Dt&&(lt.setValue(B,"toneMappingExposure",E.toneMappingExposure),Pe.needsLights&&Uh(Vt,ps),ue&&Z.fog===!0&&D.refreshFogUniforms(Vt,ue),D.refreshMaterialUniforms(Vt,Z,V,q,l.state.transmissionRenderTarget[R.id]),Ar.upload(B,Ws(Pe),Vt,De)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ar.upload(B,Ws(Pe),Vt,De),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&lt.setValue(B,"center",X.center),lt.setValue(B,"modelViewMatrix",X.modelViewMatrix),lt.setValue(B,"normalMatrix",X.normalMatrix),lt.setValue(B,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const yt=Z.uniformsGroups;for(let bt=0,so=yt.length;bt<so;bt++){const ei=yt[bt];Se.update(ei,It),Se.bind(ei,It)}}return It}function Uh(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Fh(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,W,Y){const Z=ye.get(R);Z.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ye.get(R.texture).__webglTexture=W,ye.get(R.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const Y=ye.get(R);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0};const Bh=B.createFramebuffer();this.setRenderTarget=function(R,W=0,Y=0){I=R,C=W,L=Y;let Z=!0,X=null,ue=!1,ve=!1;if(R){const Ee=ye.get(R);if(Ee.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(B.FRAMEBUFFER,null),Z=!1;else if(Ee.__webglFramebuffer===void 0)De.setupRenderTarget(R);else if(Ee.__hasExternalTextures)De.rebindTextures(R,ye.get(R.texture).__webglTexture,ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ce=R.depthTexture;if(Ee.__boundDepthTexture!==Ce){if(Ce!==null&&ye.has(Ce)&&(R.width!==Ce.image.width||R.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(R)}}const Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ve=!0);const Ue=ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[W])?X=Ue[W][Y]:X=Ue[W],ue=!0):R.samples>0&&De.useMultisampledRTT(R)===!1?X=ye.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?X=Ue[Y]:X=Ue,P.copy(R.viewport),N.copy(R.scissor),U=R.scissorTest}else P.copy(_e).multiplyScalar(V).floor(),N.copy(Le).multiplyScalar(V).floor(),U=Ye;if(Y!==0&&(X=Bh),Me.bindFramebuffer(B.FRAMEBUFFER,X)&&Z&&Me.drawBuffers(R,X),Me.viewport(P),Me.scissor(N),Me.setScissorTest(U),ue){const Ee=ye.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ee.__webglTexture,Y)}else if(ve){const Ee=W;for(let Ne=0;Ne<R.textures.length;Ne++){const Ue=ye.get(R.textures[Ne]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ne,Ue.__webglTexture,Y,Ee)}}else if(R!==null&&Y!==0){const Ee=ye.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ee.__webglTexture,Y)}w=-1},this.readRenderTargetPixels=function(R,W,Y,Z,X,ue,ve,Te=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){Me.bindFramebuffer(B.FRAMEBUFFER,Ee);try{const Ne=R.textures[Te],Ue=Ne.format,Ce=Ne.type;if(!He.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Z&&Y>=0&&Y<=R.height-X&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te),B.readPixels(W,Y,Z,X,ce.convert(Ue),ce.convert(Ce),ue))}finally{const Ne=I!==null?ye.get(I).__webglFramebuffer:null;Me.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(R,W,Y,Z,X,ue,ve,Te=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee)if(W>=0&&W<=R.width-Z&&Y>=0&&Y<=R.height-X){Me.bindFramebuffer(B.FRAMEBUFFER,Ee);const Ne=R.textures[Te],Ue=Ne.format,Ce=Ne.type;if(!He.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.bufferData(B.PIXEL_PACK_BUFFER,ue.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te),B.readPixels(W,Y,Z,X,ce.convert(Ue),ce.convert(Ce),0);const tt=I!==null?ye.get(I).__webglFramebuffer:null;Me.bindFramebuffer(B.FRAMEBUFFER,tt);const ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await If(B,ct,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ue),B.deleteBuffer($e),B.deleteSync(ct),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,Y=0){const Z=Math.pow(2,-Y),X=Math.floor(R.image.width*Z),ue=Math.floor(R.image.height*Z),ve=W!==null?W.x:0,Te=W!==null?W.y:0;De.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,ve,Te,X,ue),Me.unbindTexture()};const zh=B.createFramebuffer(),kh=B.createFramebuffer();this.copyTextureToTexture=function(R,W,Y=null,Z=null,X=0,ue=null){ue===null&&(X!==0?($i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=X,X=0):ue=0);let ve,Te,Ee,Ne,Ue,Ce,$e,tt,ct;const ot=R.isCompressedTexture?R.mipmaps[ue]:R.image;if(Y!==null)ve=Y.max.x-Y.min.x,Te=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Ue=Y.min.y,Ce=Y.isBox3?Y.min.z:0;else{const Gt=Math.pow(2,-X);ve=Math.floor(ot.width*Gt),Te=Math.floor(ot.height*Gt),R.isDataArrayTexture?Ee=ot.depth:R.isData3DTexture?Ee=Math.floor(ot.depth*Gt):Ee=1,Ne=0,Ue=0,Ce=0}Z!==null?($e=Z.x,tt=Z.y,ct=Z.z):($e=0,tt=0,ct=0);const it=ce.convert(W.format),Pe=ce.convert(W.type);let at;W.isData3DTexture?(De.setTexture3D(W,0),at=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(De.setTexture2DArray(W,0),at=B.TEXTURE_2D_ARRAY):(De.setTexture2D(W,0),at=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const je=B.getParameter(B.UNPACK_ROW_LENGTH),It=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ti=B.getParameter(B.UNPACK_SKIP_PIXELS),Dt=B.getParameter(B.UNPACK_SKIP_ROWS),ps=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ue),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ce);const lt=R.isDataArrayTexture||R.isData3DTexture,Vt=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Gt=ye.get(R),yt=ye.get(W),bt=ye.get(Gt.__renderTarget),so=ye.get(yt.__renderTarget);Me.bindFramebuffer(B.READ_FRAMEBUFFER,bt.__webglFramebuffer),Me.bindFramebuffer(B.DRAW_FRAMEBUFFER,so.__webglFramebuffer);for(let ei=0;ei<Ee;ei++)lt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ye.get(R).__webglTexture,X,Ce+ei),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ye.get(W).__webglTexture,ue,ct+ei)),B.blitFramebuffer(Ne,Ue,ve,Te,$e,tt,ve,Te,B.DEPTH_BUFFER_BIT,B.NEAREST);Me.bindFramebuffer(B.READ_FRAMEBUFFER,null),Me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||ye.has(R)){const Gt=ye.get(R),yt=ye.get(W);Me.bindFramebuffer(B.READ_FRAMEBUFFER,zh),Me.bindFramebuffer(B.DRAW_FRAMEBUFFER,kh);for(let bt=0;bt<Ee;bt++)lt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gt.__webglTexture,X,Ce+bt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Gt.__webglTexture,X),Vt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yt.__webglTexture,ue,ct+bt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yt.__webglTexture,ue),X!==0?B.blitFramebuffer(Ne,Ue,ve,Te,$e,tt,ve,Te,B.COLOR_BUFFER_BIT,B.NEAREST):Vt?B.copyTexSubImage3D(at,ue,$e,tt,ct+bt,Ne,Ue,ve,Te):B.copyTexSubImage2D(at,ue,$e,tt,Ne,Ue,ve,Te);Me.bindFramebuffer(B.READ_FRAMEBUFFER,null),Me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Vt?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(at,ue,$e,tt,ct,ve,Te,Ee,it,Pe,ot.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(at,ue,$e,tt,ct,ve,Te,Ee,it,ot.data):B.texSubImage3D(at,ue,$e,tt,ct,ve,Te,Ee,it,Pe,ot):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ue,$e,tt,ve,Te,it,Pe,ot.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ue,$e,tt,ot.width,ot.height,it,ot.data):B.texSubImage2D(B.TEXTURE_2D,ue,$e,tt,ve,Te,it,Pe,ot);B.pixelStorei(B.UNPACK_ROW_LENGTH,je),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,It),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ti),B.pixelStorei(B.UNPACK_SKIP_ROWS,Dt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ps),ue===0&&W.generateMipmaps&&B.generateMipmap(at),Me.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Y=null,Z=null,X=0){return $i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,Y,Z,X)},this.initRenderTarget=function(R){ye.get(R).__webglFramebuffer===void 0&&De.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?De.setTextureCube(R,0):R.isData3DTexture?De.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?De.setTexture2DArray(R,0):De.setTexture2D(R,0),Me.unbindTexture()},this.resetState=function(){C=0,L=0,I=null,Me.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}var Et="top",Ft="bottom",Bt="right",St="left",Yr="auto",cs=[Et,Ft,Bt,St],_i="start",es="end",Td="clippingParents",Rl="viewport",ki="popper",bd="reference",ol=cs.reduce(function(i,e){return i.concat([e+"-"+_i,e+"-"+es])},[]),Ll=[].concat(cs,[Yr]).reduce(function(i,e){return i.concat([e,e+"-"+_i,e+"-"+es])},[]),Md="beforeRead",wd="read",Ad="afterRead",Cd="beforeMain",Rd="main",Ld="afterMain",Pd="beforeWrite",Id="write",Dd="afterWrite",Od=[Md,wd,Ad,Cd,Rd,Ld,Pd,Id,Dd];function gn(i){return i?(i.nodeName||"").toLowerCase():null}function zt(i){if(i==null)return window;if(i.toString()!=="[object Window]"){var e=i.ownerDocument;return e&&e.defaultView||window}return i}function yi(i){var e=zt(i).Element;return i instanceof e||i instanceof Element}function jt(i){var e=zt(i).HTMLElement;return i instanceof e||i instanceof HTMLElement}function Pl(i){if(typeof ShadowRoot>"u")return!1;var e=zt(i).ShadowRoot;return i instanceof e||i instanceof ShadowRoot}function Z_(i){var e=i.state;Object.keys(e.elements).forEach(function(t){var n=e.styles[t]||{},s=e.attributes[t]||{},r=e.elements[t];!jt(r)||!gn(r)||(Object.assign(r.style,n),Object.keys(s).forEach(function(o){var a=s[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function J_(i){var e=i.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(n){var s=e.elements[n],r=e.attributes[n]||{},o=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]),a=o.reduce(function(c,u){return c[u]="",c},{});!jt(s)||!gn(s)||(Object.assign(s.style,a),Object.keys(r).forEach(function(c){s.removeAttribute(c)}))})}}const Il={name:"applyStyles",enabled:!0,phase:"write",fn:Z_,effect:J_,requires:["computeStyles"]};function fn(i){return i.split("-")[0]}var mi=Math.max,Fr=Math.min,ts=Math.round;function al(){var i=navigator.userAgentData;return i!=null&&i.brands&&Array.isArray(i.brands)?i.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Nd(){return!/^((?!chrome|android).)*safari/i.test(al())}function ns(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var n=i.getBoundingClientRect(),s=1,r=1;e&&jt(i)&&(s=i.offsetWidth>0&&ts(n.width)/i.offsetWidth||1,r=i.offsetHeight>0&&ts(n.height)/i.offsetHeight||1);var o=yi(i)?zt(i):window,a=o.visualViewport,c=!Nd()&&t,u=(n.left+(c&&a?a.offsetLeft:0))/s,h=(n.top+(c&&a?a.offsetTop:0))/r,p=n.width/s,v=n.height/r;return{width:p,height:v,top:h,right:u+p,bottom:h+v,left:u,x:u,y:h}}function Dl(i){var e=ns(i),t=i.offsetWidth,n=i.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:i.offsetLeft,y:i.offsetTop,width:t,height:n}}function Ud(i,e){var t=e.getRootNode&&e.getRootNode();if(i.contains(e))return!0;if(t&&Pl(t)){var n=e;do{if(n&&i.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function In(i){return zt(i).getComputedStyle(i)}function Q_(i){return["table","td","th"].indexOf(gn(i))>=0}function Kn(i){return((yi(i)?i.ownerDocument:i.document)||window.document).documentElement}function jr(i){return gn(i)==="html"?i:i.assignedSlot||i.parentNode||(Pl(i)?i.host:null)||Kn(i)}function Gc(i){return!jt(i)||In(i).position==="fixed"?null:i.offsetParent}function ey(i){var e=/firefox/i.test(al()),t=/Trident/i.test(al());if(t&&jt(i)){var n=In(i);if(n.position==="fixed")return null}var s=jr(i);for(Pl(s)&&(s=s.host);jt(s)&&["html","body"].indexOf(gn(s))<0;){var r=In(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function Fs(i){for(var e=zt(i),t=Gc(i);t&&Q_(t)&&In(t).position==="static";)t=Gc(t);return t&&(gn(t)==="html"||gn(t)==="body"&&In(t).position==="static")?e:t||ey(i)||e}function Ol(i){return["top","bottom"].indexOf(i)>=0?"x":"y"}function Ms(i,e,t){return mi(i,Fr(e,t))}function ty(i,e,t){var n=Ms(i,e,t);return n>t?t:n}function Fd(){return{top:0,right:0,bottom:0,left:0}}function Bd(i){return Object.assign({},Fd(),i)}function zd(i,e){return e.reduce(function(t,n){return t[n]=i,t},{})}var ny=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Bd(typeof e!="number"?e:zd(e,cs))};function iy(i){var e,t=i.state,n=i.name,s=i.options,r=t.elements.arrow,o=t.modifiersData.popperOffsets,a=fn(t.placement),c=Ol(a),u=[St,Bt].indexOf(a)>=0,h=u?"height":"width";if(!(!r||!o)){var p=ny(s.padding,t),v=Dl(r),g=c==="y"?Et:St,x=c==="y"?Ft:Bt,S=t.rects.reference[h]+t.rects.reference[c]-o[c]-t.rects.popper[h],f=o[c]-t.rects.reference[c],l=Fs(r),_=l?c==="y"?l.clientHeight||0:l.clientWidth||0:0,y=S/2-f/2,E=p[g],M=_-v[h]-p[x],C=_/2-v[h]/2+y,L=Ms(E,C,M),I=c;t.modifiersData[n]=(e={},e[I]=L,e.centerOffset=L-C,e)}}function sy(i){var e=i.state,t=i.options,n=t.element,s=n===void 0?"[data-popper-arrow]":n;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||Ud(e.elements.popper,s)&&(e.elements.arrow=s))}const kd={name:"arrow",enabled:!0,phase:"main",fn:iy,effect:sy,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function is(i){return i.split("-")[1]}var ry={top:"auto",right:"auto",bottom:"auto",left:"auto"};function oy(i,e){var t=i.x,n=i.y,s=e.devicePixelRatio||1;return{x:ts(t*s)/s||0,y:ts(n*s)/s||0}}function Wc(i){var e,t=i.popper,n=i.popperRect,s=i.placement,r=i.variation,o=i.offsets,a=i.position,c=i.gpuAcceleration,u=i.adaptive,h=i.roundOffsets,p=i.isFixed,v=o.x,g=v===void 0?0:v,x=o.y,S=x===void 0?0:x,f=typeof h=="function"?h({x:g,y:S}):{x:g,y:S};g=f.x,S=f.y;var l=o.hasOwnProperty("x"),_=o.hasOwnProperty("y"),y=St,E=Et,M=window;if(u){var C=Fs(t),L="clientHeight",I="clientWidth";if(C===zt(t)&&(C=Kn(t),In(C).position!=="static"&&a==="absolute"&&(L="scrollHeight",I="scrollWidth")),C=C,s===Et||(s===St||s===Bt)&&r===es){E=Ft;var w=p&&C===M&&M.visualViewport?M.visualViewport.height:C[L];S-=w-n.height,S*=c?1:-1}if(s===St||(s===Et||s===Ft)&&r===es){y=Bt;var T=p&&C===M&&M.visualViewport?M.visualViewport.width:C[I];g-=T-n.width,g*=c?1:-1}}var P=Object.assign({position:a},u&&ry),N=h===!0?oy({x:g,y:S},zt(t)):{x:g,y:S};if(g=N.x,S=N.y,c){var U;return Object.assign({},P,(U={},U[E]=_?"0":"",U[y]=l?"0":"",U.transform=(M.devicePixelRatio||1)<=1?"translate("+g+"px, "+S+"px)":"translate3d("+g+"px, "+S+"px, 0)",U))}return Object.assign({},P,(e={},e[E]=_?S+"px":"",e[y]=l?g+"px":"",e.transform="",e))}function ay(i){var e=i.state,t=i.options,n=t.gpuAcceleration,s=n===void 0?!0:n,r=t.adaptive,o=r===void 0?!0:r,a=t.roundOffsets,c=a===void 0?!0:a,u={placement:fn(e.placement),variation:is(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Wc(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Wc(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Nl={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ay,data:{}};var fr={passive:!0};function ly(i){var e=i.state,t=i.instance,n=i.options,s=n.scroll,r=s===void 0?!0:s,o=n.resize,a=o===void 0?!0:o,c=zt(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&u.forEach(function(h){h.addEventListener("scroll",t.update,fr)}),a&&c.addEventListener("resize",t.update,fr),function(){r&&u.forEach(function(h){h.removeEventListener("scroll",t.update,fr)}),a&&c.removeEventListener("resize",t.update,fr)}}const Ul={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ly,data:{}};var cy={left:"right",right:"left",bottom:"top",top:"bottom"};function Cr(i){return i.replace(/left|right|bottom|top/g,function(e){return cy[e]})}var uy={start:"end",end:"start"};function Xc(i){return i.replace(/start|end/g,function(e){return uy[e]})}function Fl(i){var e=zt(i),t=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:t,scrollTop:n}}function Bl(i){return ns(Kn(i)).left+Fl(i).scrollLeft}function dy(i,e){var t=zt(i),n=Kn(i),s=t.visualViewport,r=n.clientWidth,o=n.clientHeight,a=0,c=0;if(s){r=s.width,o=s.height;var u=Nd();(u||!u&&e==="fixed")&&(a=s.offsetLeft,c=s.offsetTop)}return{width:r,height:o,x:a+Bl(i),y:c}}function hy(i){var e,t=Kn(i),n=Fl(i),s=(e=i.ownerDocument)==null?void 0:e.body,r=mi(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=mi(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Bl(i),c=-n.scrollTop;return In(s||t).direction==="rtl"&&(a+=mi(t.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:c}}function zl(i){var e=In(i),t=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+s+n)}function Hd(i){return["html","body","#document"].indexOf(gn(i))>=0?i.ownerDocument.body:jt(i)&&zl(i)?i:Hd(jr(i))}function ws(i,e){var t;e===void 0&&(e=[]);var n=Hd(i),s=n===((t=i.ownerDocument)==null?void 0:t.body),r=zt(n),o=s?[r].concat(r.visualViewport||[],zl(n)?n:[]):n,a=e.concat(o);return s?a:a.concat(ws(jr(o)))}function ll(i){return Object.assign({},i,{left:i.x,top:i.y,right:i.x+i.width,bottom:i.y+i.height})}function fy(i,e){var t=ns(i,!1,e==="fixed");return t.top=t.top+i.clientTop,t.left=t.left+i.clientLeft,t.bottom=t.top+i.clientHeight,t.right=t.left+i.clientWidth,t.width=i.clientWidth,t.height=i.clientHeight,t.x=t.left,t.y=t.top,t}function $c(i,e,t){return e===Rl?ll(dy(i,t)):yi(e)?fy(e,t):ll(hy(Kn(i)))}function py(i){var e=ws(jr(i)),t=["absolute","fixed"].indexOf(In(i).position)>=0,n=t&&jt(i)?Fs(i):i;return yi(n)?e.filter(function(s){return yi(s)&&Ud(s,n)&&gn(s)!=="body"}):[]}function my(i,e,t,n){var s=e==="clippingParents"?py(i):[].concat(e),r=[].concat(s,[t]),o=r[0],a=r.reduce(function(c,u){var h=$c(i,u,n);return c.top=mi(h.top,c.top),c.right=Fr(h.right,c.right),c.bottom=Fr(h.bottom,c.bottom),c.left=mi(h.left,c.left),c},$c(i,o,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Vd(i){var e=i.reference,t=i.element,n=i.placement,s=n?fn(n):null,r=n?is(n):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,c;switch(s){case Et:c={x:o,y:e.y-t.height};break;case Ft:c={x:o,y:e.y+e.height};break;case Bt:c={x:e.x+e.width,y:a};break;case St:c={x:e.x-t.width,y:a};break;default:c={x:e.x,y:e.y}}var u=s?Ol(s):null;if(u!=null){var h=u==="y"?"height":"width";switch(r){case _i:c[u]=c[u]-(e[h]/2-t[h]/2);break;case es:c[u]=c[u]+(e[h]/2-t[h]/2);break}}return c}function ss(i,e){e===void 0&&(e={});var t=e,n=t.placement,s=n===void 0?i.placement:n,r=t.strategy,o=r===void 0?i.strategy:r,a=t.boundary,c=a===void 0?Td:a,u=t.rootBoundary,h=u===void 0?Rl:u,p=t.elementContext,v=p===void 0?ki:p,g=t.altBoundary,x=g===void 0?!1:g,S=t.padding,f=S===void 0?0:S,l=Bd(typeof f!="number"?f:zd(f,cs)),_=v===ki?bd:ki,y=i.rects.popper,E=i.elements[x?_:v],M=my(yi(E)?E:E.contextElement||Kn(i.elements.popper),c,h,o),C=ns(i.elements.reference),L=Vd({reference:C,element:y,placement:s}),I=ll(Object.assign({},y,L)),w=v===ki?I:C,T={top:M.top-w.top+l.top,bottom:w.bottom-M.bottom+l.bottom,left:M.left-w.left+l.left,right:w.right-M.right+l.right},P=i.modifiersData.offset;if(v===ki&&P){var N=P[s];Object.keys(T).forEach(function(U){var z=[Bt,Ft].indexOf(U)>=0?1:-1,$=[Et,Ft].indexOf(U)>=0?"y":"x";T[U]+=N[$]*z})}return T}function gy(i,e){e===void 0&&(e={});var t=e,n=t.placement,s=t.boundary,r=t.rootBoundary,o=t.padding,a=t.flipVariations,c=t.allowedAutoPlacements,u=c===void 0?Ll:c,h=is(n),p=h?a?ol:ol.filter(function(x){return is(x)===h}):cs,v=p.filter(function(x){return u.indexOf(x)>=0});v.length===0&&(v=p);var g=v.reduce(function(x,S){return x[S]=ss(i,{placement:S,boundary:s,rootBoundary:r,padding:o})[fn(S)],x},{});return Object.keys(g).sort(function(x,S){return g[x]-g[S]})}function vy(i){if(fn(i)===Yr)return[];var e=Cr(i);return[Xc(i),e,Xc(e)]}function _y(i){var e=i.state,t=i.options,n=i.name;if(!e.modifiersData[n]._skip){for(var s=t.mainAxis,r=s===void 0?!0:s,o=t.altAxis,a=o===void 0?!0:o,c=t.fallbackPlacements,u=t.padding,h=t.boundary,p=t.rootBoundary,v=t.altBoundary,g=t.flipVariations,x=g===void 0?!0:g,S=t.allowedAutoPlacements,f=e.options.placement,l=fn(f),_=l===f,y=c||(_||!x?[Cr(f)]:vy(f)),E=[f].concat(y).reduce(function(Xe,J){return Xe.concat(fn(J)===Yr?gy(e,{placement:J,boundary:h,rootBoundary:p,padding:u,flipVariations:x,allowedAutoPlacements:S}):J)},[]),M=e.rects.reference,C=e.rects.popper,L=new Map,I=!0,w=E[0],T=0;T<E.length;T++){var P=E[T],N=fn(P),U=is(P)===_i,z=[Et,Ft].indexOf(N)>=0,$=z?"width":"height",F=ss(e,{placement:P,boundary:h,rootBoundary:p,altBoundary:v,padding:u}),q=z?U?Bt:St:U?Ft:Et;M[$]>C[$]&&(q=Cr(q));var V=Cr(q),ie=[];if(r&&ie.push(F[N]<=0),a&&ie.push(F[q]<=0,F[V]<=0),ie.every(function(Xe){return Xe})){w=P,I=!1;break}L.set(P,ie)}if(I)for(var le=x?3:1,_e=function(J){var pe=E.find(function(he){var be=L.get(he);if(be)return be.slice(0,J).every(function(we){return we})});if(pe)return w=pe,"break"},Le=le;Le>0;Le--){var Ye=_e(Le);if(Ye==="break")break}e.placement!==w&&(e.modifiersData[n]._skip=!0,e.placement=w,e.reset=!0)}}const Gd={name:"flip",enabled:!0,phase:"main",fn:_y,requiresIfExists:["offset"],data:{_skip:!1}};function qc(i,e,t){return t===void 0&&(t={x:0,y:0}),{top:i.top-e.height-t.y,right:i.right-e.width+t.x,bottom:i.bottom-e.height+t.y,left:i.left-e.width-t.x}}function Yc(i){return[Et,Bt,Ft,St].some(function(e){return i[e]>=0})}function yy(i){var e=i.state,t=i.name,n=e.rects.reference,s=e.rects.popper,r=e.modifiersData.preventOverflow,o=ss(e,{elementContext:"reference"}),a=ss(e,{altBoundary:!0}),c=qc(o,n),u=qc(a,s,r),h=Yc(c),p=Yc(u);e.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:h,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":p})}const Wd={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:yy};function xy(i,e,t){var n=fn(i),s=[St,Et].indexOf(n)>=0?-1:1,r=typeof t=="function"?t(Object.assign({},e,{placement:i})):t,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[St,Bt].indexOf(n)>=0?{x:a,y:o}:{x:o,y:a}}function Ey(i){var e=i.state,t=i.options,n=i.name,s=t.offset,r=s===void 0?[0,0]:s,o=Ll.reduce(function(h,p){return h[p]=xy(p,e.rects,r),h},{}),a=o[e.placement],c=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=o}const Xd={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ey};function Sy(i){var e=i.state,t=i.name;e.modifiersData[t]=Vd({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const kl={name:"popperOffsets",enabled:!0,phase:"read",fn:Sy,data:{}};function Ty(i){return i==="x"?"y":"x"}function by(i){var e=i.state,t=i.options,n=i.name,s=t.mainAxis,r=s===void 0?!0:s,o=t.altAxis,a=o===void 0?!1:o,c=t.boundary,u=t.rootBoundary,h=t.altBoundary,p=t.padding,v=t.tether,g=v===void 0?!0:v,x=t.tetherOffset,S=x===void 0?0:x,f=ss(e,{boundary:c,rootBoundary:u,padding:p,altBoundary:h}),l=fn(e.placement),_=is(e.placement),y=!_,E=Ol(l),M=Ty(E),C=e.modifiersData.popperOffsets,L=e.rects.reference,I=e.rects.popper,w=typeof S=="function"?S(Object.assign({},e.rects,{placement:e.placement})):S,T=typeof w=="number"?{mainAxis:w,altAxis:w}:Object.assign({mainAxis:0,altAxis:0},w),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,N={x:0,y:0};if(C){if(r){var U,z=E==="y"?Et:St,$=E==="y"?Ft:Bt,F=E==="y"?"height":"width",q=C[E],V=q+f[z],ie=q-f[$],le=g?-I[F]/2:0,_e=_===_i?L[F]:I[F],Le=_===_i?-I[F]:-L[F],Ye=e.elements.arrow,Xe=g&&Ye?Dl(Ye):{width:0,height:0},J=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Fd(),pe=J[z],he=J[$],be=Ms(0,L[F],Xe[F]),we=y?L[F]/2-le-be-pe-T.mainAxis:_e-be-pe-T.mainAxis,Ie=y?-L[F]/2+le+be+he+T.mainAxis:Le+be+he+T.mainAxis,Ze=e.elements.arrow&&Fs(e.elements.arrow),Ve=Ze?E==="y"?Ze.clientTop||0:Ze.clientLeft||0:0,B=(U=P==null?void 0:P[E])!=null?U:0,Fe=q+we-B-Ve,Ae=q+Ie-B,He=Ms(g?Fr(V,Fe):V,q,g?mi(ie,Ae):ie);C[E]=He,N[E]=He-q}if(a){var Me,Qe=E==="x"?Et:St,ye=E==="x"?Ft:Bt,De=C[M],rt=M==="y"?"height":"width",st=De+f[Qe],d=De-f[ye],m=[Et,St].indexOf(l)!==-1,b=(Me=P==null?void 0:P[M])!=null?Me:0,A=m?st:De-L[rt]-I[rt]-b+T.altAxis,D=m?De+L[rt]+I[rt]-b-T.altAxis:d,O=g&&m?ty(A,De,D):Ms(g?A:st,De,g?D:d);C[M]=O,N[M]=O-De}e.modifiersData[n]=N}}const $d={name:"preventOverflow",enabled:!0,phase:"main",fn:by,requiresIfExists:["offset"]};function My(i){return{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}}function wy(i){return i===zt(i)||!jt(i)?Fl(i):My(i)}function Ay(i){var e=i.getBoundingClientRect(),t=ts(e.width)/i.offsetWidth||1,n=ts(e.height)/i.offsetHeight||1;return t!==1||n!==1}function Cy(i,e,t){t===void 0&&(t=!1);var n=jt(e),s=jt(e)&&Ay(e),r=Kn(e),o=ns(i,s,t),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!t)&&((gn(e)!=="body"||zl(r))&&(a=wy(e)),jt(e)?(c=ns(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=Bl(r))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Ry(i){var e=new Map,t=new Set,n=[];i.forEach(function(r){e.set(r.name,r)});function s(r){t.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var c=e.get(a);c&&s(c)}}),n.push(r)}return i.forEach(function(r){t.has(r.name)||s(r)}),n}function Ly(i){var e=Ry(i);return Od.reduce(function(t,n){return t.concat(e.filter(function(s){return s.phase===n}))},[])}function Py(i){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(i())})})),e}}function Iy(i){var e=i.reduce(function(t,n){var s=t[n.name];return t[n.name]=s?Object.assign({},s,n,{options:Object.assign({},s.options,n.options),data:Object.assign({},s.data,n.data)}):n,t},{});return Object.keys(e).map(function(t){return e[t]})}var jc={placement:"bottom",modifiers:[],strategy:"absolute"};function Kc(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Kr(i){i===void 0&&(i={});var e=i,t=e.defaultModifiers,n=t===void 0?[]:t,s=e.defaultOptions,r=s===void 0?jc:s;return function(a,c,u){u===void 0&&(u=r);var h={placement:"bottom",orderedModifiers:[],options:Object.assign({},jc,r),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},p=[],v=!1,g={state:h,setOptions:function(l){var _=typeof l=="function"?l(h.options):l;S(),h.options=Object.assign({},r,h.options,_),h.scrollParents={reference:yi(a)?ws(a):a.contextElement?ws(a.contextElement):[],popper:ws(c)};var y=Ly(Iy([].concat(n,h.options.modifiers)));return h.orderedModifiers=y.filter(function(E){return E.enabled}),x(),g.update()},forceUpdate:function(){if(!v){var l=h.elements,_=l.reference,y=l.popper;if(Kc(_,y)){h.rects={reference:Cy(_,Fs(y),h.options.strategy==="fixed"),popper:Dl(y)},h.reset=!1,h.placement=h.options.placement,h.orderedModifiers.forEach(function(T){return h.modifiersData[T.name]=Object.assign({},T.data)});for(var E=0;E<h.orderedModifiers.length;E++){if(h.reset===!0){h.reset=!1,E=-1;continue}var M=h.orderedModifiers[E],C=M.fn,L=M.options,I=L===void 0?{}:L,w=M.name;typeof C=="function"&&(h=C({state:h,options:I,name:w,instance:g})||h)}}}},update:Py(function(){return new Promise(function(f){g.forceUpdate(),f(h)})}),destroy:function(){S(),v=!0}};if(!Kc(a,c))return g;g.setOptions(u).then(function(f){!v&&u.onFirstUpdate&&u.onFirstUpdate(f)});function x(){h.orderedModifiers.forEach(function(f){var l=f.name,_=f.options,y=_===void 0?{}:_,E=f.effect;if(typeof E=="function"){var M=E({state:h,name:l,instance:g,options:y}),C=function(){};p.push(M||C)}})}function S(){p.forEach(function(f){return f()}),p=[]}return g}}var Dy=Kr(),Oy=[Ul,kl,Nl,Il],Ny=Kr({defaultModifiers:Oy}),Uy=[Ul,kl,Nl,Il,Xd,Gd,$d,kd,Wd],Hl=Kr({defaultModifiers:Uy});const qd=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Ld,afterRead:Ad,afterWrite:Dd,applyStyles:Il,arrow:kd,auto:Yr,basePlacements:cs,beforeMain:Cd,beforeRead:Md,beforeWrite:Pd,bottom:Ft,clippingParents:Td,computeStyles:Nl,createPopper:Hl,createPopperBase:Dy,createPopperLite:Ny,detectOverflow:ss,end:es,eventListeners:Ul,flip:Gd,hide:Wd,left:St,main:Rd,modifierPhases:Od,offset:Xd,placements:Ll,popper:ki,popperGenerator:Kr,popperOffsets:kl,preventOverflow:$d,read:wd,reference:bd,right:Bt,start:_i,top:Et,variationPlacements:ol,viewport:Rl,write:Id},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const kn=new Map,Fo={set(i,e,t){kn.has(i)||kn.set(i,new Map);const n=kn.get(i);if(!n.has(e)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(e,t)},get(i,e){return kn.has(i)&&kn.get(i).get(e)||null},remove(i,e){if(!kn.has(i))return;const t=kn.get(i);t.delete(e),t.size===0&&kn.delete(i)}},Fy=1e6,By=1e3,cl="transitionend",Yd=i=>(i&&window.CSS&&window.CSS.escape&&(i=i.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),i),zy=i=>i==null?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase(),ky=i=>{do i+=Math.floor(Math.random()*Fy);while(document.getElementById(i));return i},Hy=i=>{if(!i)return 0;let{transitionDuration:e,transitionDelay:t}=window.getComputedStyle(i);const n=Number.parseFloat(e),s=Number.parseFloat(t);return!n&&!s?0:(e=e.split(",")[0],t=t.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(t))*By)},jd=i=>{i.dispatchEvent(new Event(cl))},An=i=>!i||typeof i!="object"?!1:(typeof i.jquery<"u"&&(i=i[0]),typeof i.nodeType<"u"),$n=i=>An(i)?i.jquery?i[0]:i:typeof i=="string"&&i.length>0?document.querySelector(Yd(i)):null,us=i=>{if(!An(i)||i.getClientRects().length===0)return!1;const e=getComputedStyle(i).getPropertyValue("visibility")==="visible",t=i.closest("details:not([open])");if(!t)return e;if(t!==i){const n=i.closest("summary");if(n&&n.parentNode!==t||n===null)return!1}return e},qn=i=>!i||i.nodeType!==Node.ELEMENT_NODE||i.classList.contains("disabled")?!0:typeof i.disabled<"u"?i.disabled:i.hasAttribute("disabled")&&i.getAttribute("disabled")!=="false",Kd=i=>{if(!document.documentElement.attachShadow)return null;if(typeof i.getRootNode=="function"){const e=i.getRootNode();return e instanceof ShadowRoot?e:null}return i instanceof ShadowRoot?i:i.parentNode?Kd(i.parentNode):null},Br=()=>{},Bs=i=>{i.offsetHeight},Zd=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Bo=[],Vy=i=>{document.readyState==="loading"?(Bo.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Bo)e()}),Bo.push(i)):i()},Kt=()=>document.documentElement.dir==="rtl",Jt=i=>{Vy(()=>{const e=Zd();if(e){const t=i.NAME,n=e.fn[t];e.fn[t]=i.jQueryInterface,e.fn[t].Constructor=i,e.fn[t].noConflict=()=>(e.fn[t]=n,i.jQueryInterface)}})},wt=(i,e=[],t=i)=>typeof i=="function"?i.call(...e):t,Jd=(i,e,t=!0)=>{if(!t){wt(i);return}const s=Hy(e)+5;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(cl,o),wt(i))};e.addEventListener(cl,o),setTimeout(()=>{r||jd(e)},s)},Vl=(i,e,t,n)=>{const s=i.length;let r=i.indexOf(e);return r===-1?!t&&n?i[s-1]:i[0]:(r+=t?1:-1,n&&(r=(r+s)%s),i[Math.max(0,Math.min(r,s-1))])},Gy=/[^.]*(?=\..*)\.|.*/,Wy=/\..*/,Xy=/::\d+$/,zo={};let Zc=1;const Qd={mouseenter:"mouseover",mouseleave:"mouseout"},$y=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function eh(i,e){return e&&`${e}::${Zc++}`||i.uidEvent||Zc++}function th(i){const e=eh(i);return i.uidEvent=e,zo[e]=zo[e]||{},zo[e]}function qy(i,e){return function t(n){return Gl(n,{delegateTarget:i}),t.oneOff&&ae.off(i,n.type,e),e.apply(i,[n])}}function Yy(i,e,t){return function n(s){const r=i.querySelectorAll(e);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Gl(s,{delegateTarget:o}),n.oneOff&&ae.off(i,s.type,e,t),t.apply(o,[s])}}function nh(i,e,t=null){return Object.values(i).find(n=>n.callable===e&&n.delegationSelector===t)}function ih(i,e,t){const n=typeof e=="string",s=n?t:e||t;let r=sh(i);return $y.has(r)||(r=i),[n,s,r]}function Jc(i,e,t,n,s){if(typeof e!="string"||!i)return;let[r,o,a]=ih(e,t,n);e in Qd&&(o=(x=>function(S){if(!S.relatedTarget||S.relatedTarget!==S.delegateTarget&&!S.delegateTarget.contains(S.relatedTarget))return x.call(this,S)})(o));const c=th(i),u=c[a]||(c[a]={}),h=nh(u,o,r?t:null);if(h){h.oneOff=h.oneOff&&s;return}const p=eh(o,e.replace(Gy,"")),v=r?Yy(i,t,o):qy(i,o);v.delegationSelector=r?t:null,v.callable=o,v.oneOff=s,v.uidEvent=p,u[p]=v,i.addEventListener(a,v,r)}function ul(i,e,t,n,s){const r=nh(e[t],n,s);r&&(i.removeEventListener(t,r,!!s),delete e[t][r.uidEvent])}function jy(i,e,t,n){const s=e[t]||{};for(const[r,o]of Object.entries(s))r.includes(n)&&ul(i,e,t,o.callable,o.delegationSelector)}function sh(i){return i=i.replace(Wy,""),Qd[i]||i}const ae={on(i,e,t,n){Jc(i,e,t,n,!1)},one(i,e,t,n){Jc(i,e,t,n,!0)},off(i,e,t,n){if(typeof e!="string"||!i)return;const[s,r,o]=ih(e,t,n),a=o!==e,c=th(i),u=c[o]||{},h=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(u).length)return;ul(i,c,o,r,s?t:null);return}if(h)for(const p of Object.keys(c))jy(i,c,p,e.slice(1));for(const[p,v]of Object.entries(u)){const g=p.replace(Xy,"");(!a||e.includes(g))&&ul(i,c,o,v.callable,v.delegationSelector)}},trigger(i,e,t){if(typeof e!="string"||!i)return null;const n=Zd(),s=sh(e),r=e!==s;let o=null,a=!0,c=!0,u=!1;r&&n&&(o=n.Event(e,t),n(i).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),u=o.isDefaultPrevented());const h=Gl(new Event(e,{bubbles:a,cancelable:!0}),t);return u&&h.preventDefault(),c&&i.dispatchEvent(h),h.defaultPrevented&&o&&o.preventDefault(),h}};function Gl(i,e={}){for(const[t,n]of Object.entries(e))try{i[t]=n}catch{Object.defineProperty(i,t,{configurable:!0,get(){return n}})}return i}function Qc(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function ko(i){return i.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Cn={setDataAttribute(i,e,t){i.setAttribute(`data-bs-${ko(e)}`,t)},removeDataAttribute(i,e){i.removeAttribute(`data-bs-${ko(e)}`)},getDataAttributes(i){if(!i)return{};const e={},t=Object.keys(i.dataset).filter(n=>n.startsWith("bs")&&!n.startsWith("bsConfig"));for(const n of t){let s=n.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1),e[s]=Qc(i.dataset[n])}return e},getDataAttribute(i,e){return Qc(i.getAttribute(`data-bs-${ko(e)}`))}};class zs{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=An(t)?Cn.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...An(t)?Cn.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,s]of Object.entries(t)){const r=e[n],o=An(r)?"element":zy(r);if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${s}".`)}}}const Ky="5.3.7";class on extends zs{constructor(e,t){super(),e=$n(e),e&&(this._element=e,this._config=this._getConfig(t),Fo.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Fo.remove(this._element,this.constructor.DATA_KEY),ae.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){Jd(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return Fo.get($n(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return Ky}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Ho=i=>{let e=i.getAttribute("data-bs-target");if(!e||e==="#"){let t=i.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&t!=="#"?t.trim():null}return e?e.split(",").map(t=>Yd(t)).join(","):null},Re={find(i,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,i))},findOne(i,e=document.documentElement){return Element.prototype.querySelector.call(e,i)},children(i,e){return[].concat(...i.children).filter(t=>t.matches(e))},parents(i,e){const t=[];let n=i.parentNode.closest(e);for(;n;)t.push(n),n=n.parentNode.closest(e);return t},prev(i,e){let t=i.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(i,e){let t=i.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(i){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,i).filter(t=>!qn(t)&&us(t))},getSelectorFromElement(i){const e=Ho(i);return e&&Re.findOne(e)?e:null},getElementFromSelector(i){const e=Ho(i);return e?Re.findOne(e):null},getMultipleElementsFromSelector(i){const e=Ho(i);return e?Re.find(e):[]}},Zr=(i,e="hide")=>{const t=`click.dismiss${i.EVENT_KEY}`,n=i.NAME;ae.on(document,t,`[data-bs-dismiss="${n}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),qn(this))return;const r=Re.getElementFromSelector(this)||this.closest(`.${n}`);i.getOrCreateInstance(r)[e]()})},Zy="alert",Jy="bs.alert",rh=`.${Jy}`,Qy=`close${rh}`,ex=`closed${rh}`,tx="fade",nx="show";class Jr extends on{static get NAME(){return Zy}close(){if(ae.trigger(this._element,Qy).defaultPrevented)return;this._element.classList.remove(nx);const t=this._element.classList.contains(tx);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),ae.trigger(this._element,ex),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=Jr.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}Zr(Jr,"close");Jt(Jr);const ix="button",sx="bs.button",rx=`.${sx}`,ox=".data-api",ax="active",eu='[data-bs-toggle="button"]',lx=`click${rx}${ox}`;class Qr extends on{static get NAME(){return ix}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ax))}static jQueryInterface(e){return this.each(function(){const t=Qr.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}ae.on(document,lx,eu,i=>{i.preventDefault();const e=i.target.closest(eu);Qr.getOrCreateInstance(e).toggle()});Jt(Qr);const cx="swipe",ds=".bs.swipe",ux=`touchstart${ds}`,dx=`touchmove${ds}`,hx=`touchend${ds}`,fx=`pointerdown${ds}`,px=`pointerup${ds}`,mx="touch",gx="pen",vx="pointer-event",_x=40,yx={endCallback:null,leftCallback:null,rightCallback:null},xx={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class zr extends zs{constructor(e,t){super(),this._element=e,!(!e||!zr.isSupported())&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return yx}static get DefaultType(){return xx}static get NAME(){return cx}dispose(){ae.off(this._element,ds)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),wt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=_x)return;const t=e/this._deltaX;this._deltaX=0,t&&wt(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(ae.on(this._element,fx,e=>this._start(e)),ae.on(this._element,px,e=>this._end(e)),this._element.classList.add(vx)):(ae.on(this._element,ux,e=>this._start(e)),ae.on(this._element,dx,e=>this._move(e)),ae.on(this._element,hx,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===gx||e.pointerType===mx)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Ex="carousel",Sx="bs.carousel",Zn=`.${Sx}`,oh=".data-api",Tx="ArrowLeft",bx="ArrowRight",Mx=500,xs="next",Bi="prev",Hi="left",Rr="right",wx=`slide${Zn}`,Vo=`slid${Zn}`,Ax=`keydown${Zn}`,Cx=`mouseenter${Zn}`,Rx=`mouseleave${Zn}`,Lx=`dragstart${Zn}`,Px=`load${Zn}${oh}`,Ix=`click${Zn}${oh}`,ah="carousel",pr="active",Dx="slide",Ox="carousel-item-end",Nx="carousel-item-start",Ux="carousel-item-next",Fx="carousel-item-prev",lh=".active",ch=".carousel-item",Bx=lh+ch,zx=".carousel-item img",kx=".carousel-indicators",Hx="[data-bs-slide], [data-bs-slide-to]",Vx='[data-bs-ride="carousel"]',Gx={[Tx]:Rr,[bx]:Hi},Wx={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Xx={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ks extends on{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Re.findOne(kx,this._element),this._addEventListeners(),this._config.ride===ah&&this.cycle()}static get Default(){return Wx}static get DefaultType(){return Xx}static get NAME(){return Ex}next(){this._slide(xs)}nextWhenVisible(){!document.hidden&&us(this._element)&&this.next()}prev(){this._slide(Bi)}pause(){this._isSliding&&jd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){ae.one(this._element,Vo,()=>this.cycle());return}this.cycle()}}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){ae.one(this._element,Vo,()=>this.to(e));return}const n=this._getItemIndex(this._getActive());if(n===e)return;const s=e>n?xs:Bi;this._slide(s,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&ae.on(this._element,Ax,e=>this._keydown(e)),this._config.pause==="hover"&&(ae.on(this._element,Cx,()=>this.pause()),ae.on(this._element,Rx,()=>this._maybeEnableCycle())),this._config.touch&&zr.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of Re.find(zx,this._element))ae.on(n,Lx,s=>s.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(Hi)),rightCallback:()=>this._slide(this._directionToOrder(Rr)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Mx+this._config.interval))}};this._swipeHelper=new zr(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Gx[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=Re.findOne(lh,this._indicatorsElement);t.classList.remove(pr),t.removeAttribute("aria-current");const n=Re.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(pr),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),s=e===xs,r=t||Vl(this._getItems(),n,s,this._config.wrap);if(r===n)return;const o=this._getItemIndex(r),a=g=>ae.trigger(this._element,g,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:o});if(a(wx).defaultPrevented||!n||!r)return;const u=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const h=s?Nx:Ox,p=s?Ux:Fx;r.classList.add(p),Bs(r),n.classList.add(h),r.classList.add(h);const v=()=>{r.classList.remove(h,p),r.classList.add(pr),n.classList.remove(pr,p,h),this._isSliding=!1,a(Vo)};this._queueCallback(v,n,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(Dx)}_getActive(){return Re.findOne(Bx,this._element)}_getItems(){return Re.find(ch,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return Kt()?e===Hi?Bi:xs:e===Hi?xs:Bi}_orderToDirection(e){return Kt()?e===Bi?Hi:Rr:e===Bi?Rr:Hi}static jQueryInterface(e){return this.each(function(){const t=ks.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}ae.on(document,Ix,Hx,function(i){const e=Re.getElementFromSelector(this);if(!e||!e.classList.contains(ah))return;i.preventDefault();const t=ks.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");if(n){t.to(n),t._maybeEnableCycle();return}if(Cn.getDataAttribute(this,"slide")==="next"){t.next(),t._maybeEnableCycle();return}t.prev(),t._maybeEnableCycle()});ae.on(window,Px,()=>{const i=Re.find(Vx);for(const e of i)ks.getOrCreateInstance(e)});Jt(ks);const $x="collapse",qx="bs.collapse",Hs=`.${qx}`,Yx=".data-api",jx=`show${Hs}`,Kx=`shown${Hs}`,Zx=`hide${Hs}`,Jx=`hidden${Hs}`,Qx=`click${Hs}${Yx}`,Go="show",Wi="collapse",mr="collapsing",e0="collapsed",t0=`:scope .${Wi} .${Wi}`,n0="collapse-horizontal",i0="width",s0="height",r0=".collapse.show, .collapse.collapsing",dl='[data-bs-toggle="collapse"]',o0={parent:null,toggle:!0},a0={parent:"(null|element)",toggle:"boolean"};class Ps extends on{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=Re.find(dl);for(const s of n){const r=Re.getSelectorFromElement(s),o=Re.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return o0}static get DefaultType(){return a0}static get NAME(){return $x}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(r0).filter(a=>a!==this._element).map(a=>Ps.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||ae.trigger(this._element,jx).defaultPrevented)return;for(const a of e)a.hide();const n=this._getDimension();this._element.classList.remove(Wi),this._element.classList.add(mr),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(mr),this._element.classList.add(Wi,Go),this._element.style[n]="",ae.trigger(this._element,Kx)},o=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[n]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||ae.trigger(this._element,Zx).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,Bs(this._element),this._element.classList.add(mr),this._element.classList.remove(Wi,Go);for(const s of this._triggerArray){const r=Re.getElementFromSelector(s);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(mr),this._element.classList.add(Wi),ae.trigger(this._element,Jx)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Go)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=$n(e.parent),e}_getDimension(){return this._element.classList.contains(n0)?i0:s0}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(dl);for(const t of e){const n=Re.getElementFromSelector(t);n&&this._addAriaAndCollapsedClass([t],this._isShown(n))}}_getFirstLevelChildren(e){const t=Re.find(t0,this._config.parent);return Re.find(e,this._config.parent).filter(n=>!t.includes(n))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle(e0,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const n=Ps.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ae.on(document,Qx,dl,function(i){(i.target.tagName==="A"||i.delegateTarget&&i.delegateTarget.tagName==="A")&&i.preventDefault();for(const e of Re.getMultipleElementsFromSelector(this))Ps.getOrCreateInstance(e,{toggle:!1}).toggle()});Jt(Ps);const tu="dropdown",l0="bs.dropdown",xi=`.${l0}`,Wl=".data-api",c0="Escape",nu="Tab",u0="ArrowUp",iu="ArrowDown",d0=2,h0=`hide${xi}`,f0=`hidden${xi}`,p0=`show${xi}`,m0=`shown${xi}`,uh=`click${xi}${Wl}`,dh=`keydown${xi}${Wl}`,g0=`keyup${xi}${Wl}`,Vi="show",v0="dropup",_0="dropend",y0="dropstart",x0="dropup-center",E0="dropdown-center",fi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',S0=`${fi}.${Vi}`,Lr=".dropdown-menu",T0=".navbar",b0=".navbar-nav",M0=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",w0=Kt()?"top-end":"top-start",A0=Kt()?"top-start":"top-end",C0=Kt()?"bottom-end":"bottom-start",R0=Kt()?"bottom-start":"bottom-end",L0=Kt()?"left-start":"right-start",P0=Kt()?"right-start":"left-start",I0="top",D0="bottom",O0={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},N0={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class pn extends on{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=Re.next(this._element,Lr)[0]||Re.prev(this._element,Lr)[0]||Re.findOne(Lr,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return O0}static get DefaultType(){return N0}static get NAME(){return tu}toggle(){return this._isShown()?this.hide():this.show()}show(){if(qn(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!ae.trigger(this._element,p0,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(b0))for(const n of[].concat(...document.body.children))ae.on(n,"mouseover",Br);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Vi),this._element.classList.add(Vi),ae.trigger(this._element,m0,e)}}hide(){if(qn(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!ae.trigger(this._element,h0,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))ae.off(n,"mouseover",Br);this._popper&&this._popper.destroy(),this._menu.classList.remove(Vi),this._element.classList.remove(Vi),this._element.setAttribute("aria-expanded","false"),Cn.removeDataAttribute(this._menu,"popper"),ae.trigger(this._element,f0,e),this._element.focus()}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!An(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${tu.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof qd>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;this._config.reference==="parent"?e=this._parent:An(this._config.reference)?e=$n(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=Hl(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Vi)}_getPlacement(){const e=this._parent;if(e.classList.contains(_0))return L0;if(e.classList.contains(y0))return P0;if(e.classList.contains(x0))return I0;if(e.classList.contains(E0))return D0;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(v0)?t?A0:w0:t?R0:C0}_detectNavbar(){return this._element.closest(T0)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Cn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...wt(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){const n=Re.find(M0,this._menu).filter(s=>us(s));n.length&&Vl(n,t,e===iu,!n.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=pn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===d0||e.type==="keyup"&&e.key!==nu)return;const t=Re.find(S0);for(const n of t){const s=pn.getInstance(n);if(!s||s._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(s._menu);if(r.includes(s._element)||s._config.autoClose==="inside"&&!o||s._config.autoClose==="outside"&&o||s._menu.contains(e.target)&&(e.type==="keyup"&&e.key===nu||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:s._element};e.type==="click"&&(a.clickEvent=e),s._completeHide(a)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===c0,s=[u0,iu].includes(e.key);if(!s&&!n||t&&!n)return;e.preventDefault();const r=this.matches(fi)?this:Re.prev(this,fi)[0]||Re.next(this,fi)[0]||Re.findOne(fi,e.delegateTarget.parentNode),o=pn.getOrCreateInstance(r);if(s){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}ae.on(document,dh,fi,pn.dataApiKeydownHandler);ae.on(document,dh,Lr,pn.dataApiKeydownHandler);ae.on(document,uh,pn.clearMenus);ae.on(document,g0,pn.clearMenus);ae.on(document,uh,fi,function(i){i.preventDefault(),pn.getOrCreateInstance(this).toggle()});Jt(pn);const hh="backdrop",U0="fade",su="show",ru=`mousedown.bs.${hh}`,F0={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},B0={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class fh extends zs{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return F0}static get DefaultType(){return B0}static get NAME(){return hh}show(e){if(!this._config.isVisible){wt(e);return}this._append();const t=this._getElement();this._config.isAnimated&&Bs(t),t.classList.add(su),this._emulateAnimation(()=>{wt(e)})}hide(e){if(!this._config.isVisible){wt(e);return}this._getElement().classList.remove(su),this._emulateAnimation(()=>{this.dispose(),wt(e)})}dispose(){this._isAppended&&(ae.off(this._element,ru),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(U0),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=$n(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),ae.on(e,ru,()=>{wt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Jd(e,this._getElement(),this._config.isAnimated)}}const z0="focustrap",k0="bs.focustrap",kr=`.${k0}`,H0=`focusin${kr}`,V0=`keydown.tab${kr}`,G0="Tab",W0="forward",ou="backward",X0={autofocus:!0,trapElement:null},$0={autofocus:"boolean",trapElement:"element"};class ph extends zs{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return X0}static get DefaultType(){return $0}static get NAME(){return z0}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),ae.off(document,kr),ae.on(document,H0,e=>this._handleFocusin(e)),ae.on(document,V0,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,ae.off(document,kr))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=Re.focusableChildren(t);n.length===0?t.focus():this._lastTabNavDirection===ou?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===G0&&(this._lastTabNavDirection=e.shiftKey?ou:W0)}}const au=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",lu=".sticky-top",gr="padding-right",cu="margin-right";class hl{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,gr,t=>t+e),this._setElementAttributes(au,gr,t=>t+e),this._setElementAttributes(lu,cu,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,gr),this._resetElementAttributes(au,gr),this._resetElementAttributes(lu,cu)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const s=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+s)return;this._saveInitialAttribute(o,t);const a=window.getComputedStyle(o).getPropertyValue(t);o.style.setProperty(t,`${n(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&Cn.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=s=>{const r=Cn.getDataAttribute(s,t);if(r===null){s.style.removeProperty(t);return}Cn.removeDataAttribute(s,t),s.style.setProperty(t,r)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){if(An(e)){t(e);return}for(const n of Re.find(e,this._element))t(n)}}const q0="modal",Y0="bs.modal",Zt=`.${Y0}`,j0=".data-api",K0="Escape",Z0=`hide${Zt}`,J0=`hidePrevented${Zt}`,mh=`hidden${Zt}`,gh=`show${Zt}`,Q0=`shown${Zt}`,eE=`resize${Zt}`,tE=`click.dismiss${Zt}`,nE=`mousedown.dismiss${Zt}`,iE=`keydown.dismiss${Zt}`,sE=`click${Zt}${j0}`,uu="modal-open",rE="fade",du="show",Wo="modal-static",oE=".modal.show",aE=".modal-dialog",lE=".modal-body",cE='[data-bs-toggle="modal"]',uE={backdrop:!0,focus:!0,keyboard:!0},dE={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class rs extends on{constructor(e,t){super(e,t),this._dialog=Re.findOne(aE,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new hl,this._addEventListeners()}static get Default(){return uE}static get DefaultType(){return dE}static get NAME(){return q0}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||ae.trigger(this._element,gh,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(uu),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||ae.trigger(this._element,Z0).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(du),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){ae.off(window,Zt),ae.off(this._dialog,Zt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new fh({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ph({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=Re.findOne(lE,this._dialog);t&&(t.scrollTop=0),Bs(this._element),this._element.classList.add(du);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,ae.trigger(this._element,Q0,{relatedTarget:e})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){ae.on(this._element,iE,e=>{if(e.key===K0){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),ae.on(window,eE,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),ae.on(this._element,nE,e=>{ae.one(this._element,tE,t=>{if(!(this._element!==e.target||this._element!==t.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(uu),this._resetAdjustments(),this._scrollBar.reset(),ae.trigger(this._element,mh)})}_isAnimated(){return this._element.classList.contains(rE)}_triggerBackdropTransition(){if(ae.trigger(this._element,J0).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(Wo)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Wo),this._queueCallback(()=>{this._element.classList.remove(Wo),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const s=Kt()?"paddingLeft":"paddingRight";this._element.style[s]=`${t}px`}if(!n&&e){const s=Kt()?"paddingRight":"paddingLeft";this._element.style[s]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const n=rs.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](t)}})}}ae.on(document,sE,cE,function(i){const e=Re.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&i.preventDefault(),ae.one(e,gh,s=>{s.defaultPrevented||ae.one(e,mh,()=>{us(this)&&this.focus()})});const t=Re.findOne(oE);t&&rs.getInstance(t).hide(),rs.getOrCreateInstance(e).toggle(this)});Zr(rs);Jt(rs);const hE="offcanvas",fE="bs.offcanvas",Dn=`.${fE}`,vh=".data-api",pE=`load${Dn}${vh}`,mE="Escape",hu="show",fu="showing",pu="hiding",gE="offcanvas-backdrop",_h=".offcanvas.show",vE=`show${Dn}`,_E=`shown${Dn}`,yE=`hide${Dn}`,mu=`hidePrevented${Dn}`,yh=`hidden${Dn}`,xE=`resize${Dn}`,EE=`click${Dn}${vh}`,SE=`keydown.dismiss${Dn}`,TE='[data-bs-toggle="offcanvas"]',bE={backdrop:!0,keyboard:!0,scroll:!1},ME={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Yn extends on{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return bE}static get DefaultType(){return ME}static get NAME(){return hE}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||ae.trigger(this._element,vE,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new hl().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(fu);const n=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(hu),this._element.classList.remove(fu),ae.trigger(this._element,_E,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown||ae.trigger(this._element,yE).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(pu),this._backdrop.hide();const t=()=>{this._element.classList.remove(hu,pu),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new hl().reset(),ae.trigger(this._element,yh)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){ae.trigger(this._element,mu);return}this.hide()},t=!!this._config.backdrop;return new fh({className:gE,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new ph({trapElement:this._element})}_addEventListeners(){ae.on(this._element,SE,e=>{if(e.key===mE){if(this._config.keyboard){this.hide();return}ae.trigger(this._element,mu)}})}static jQueryInterface(e){return this.each(function(){const t=Yn.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}ae.on(document,EE,TE,function(i){const e=Re.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),qn(this))return;ae.one(e,yh,()=>{us(this)&&this.focus()});const t=Re.findOne(_h);t&&t!==e&&Yn.getInstance(t).hide(),Yn.getOrCreateInstance(e).toggle(this)});ae.on(window,pE,()=>{for(const i of Re.find(_h))Yn.getOrCreateInstance(i).show()});ae.on(window,xE,()=>{for(const i of Re.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(i).position!=="fixed"&&Yn.getOrCreateInstance(i).hide()});Zr(Yn);Jt(Yn);const wE=/^aria-[\w-]*$/i,xh={"*":["class","dir","id","lang","role",wE],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},AE=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),CE=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,RE=(i,e)=>{const t=i.nodeName.toLowerCase();return e.includes(t)?AE.has(t)?!!CE.test(i.nodeValue):!0:e.filter(n=>n instanceof RegExp).some(n=>n.test(t))};function LE(i,e,t){if(!i.length)return i;if(t&&typeof t=="function")return t(i);const s=new window.DOMParser().parseFromString(i,"text/html"),r=[].concat(...s.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const c=[].concat(...o.attributes),u=[].concat(e["*"]||[],e[a]||[]);for(const h of c)RE(h,u)||o.removeAttribute(h.nodeName)}return s.body.innerHTML}const PE="TemplateFactory",IE={allowList:xh,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},DE={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},OE={entry:"(string|element|function|null)",selector:"(string|element)"};class NE extends zs{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return IE}static get DefaultType(){return DE}static get NAME(){return PE}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[s,r]of Object.entries(this._config.content))this._setContent(e,r,s);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},OE)}_setContent(e,t,n){const s=Re.findOne(n,e);if(s){if(t=this._resolvePossibleFunction(t),!t){s.remove();return}if(An(t)){this._putElementInTemplate($n(t),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(t);return}s.textContent=t}}_maybeSanitize(e){return this._config.sanitize?LE(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return wt(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const UE="tooltip",FE=new Set(["sanitize","allowList","sanitizeFn"]),Xo="fade",BE="modal",vr="show",zE=".tooltip-inner",gu=`.${BE}`,vu="hide.bs.modal",Es="hover",$o="focus",qo="click",kE="manual",HE="hide",VE="hidden",GE="show",WE="shown",XE="inserted",$E="click",qE="focusin",YE="focusout",jE="mouseenter",KE="mouseleave",ZE={AUTO:"auto",TOP:"top",RIGHT:Kt()?"left":"right",BOTTOM:"bottom",LEFT:Kt()?"right":"left"},JE={allowList:xh,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},QE={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class hs extends on{constructor(e,t){if(typeof qd>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return JE}static get DefaultType(){return QE}static get NAME(){return UE}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),ae.off(this._element.closest(gu),vu,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=ae.trigger(this._element,this.constructor.eventName(GE)),n=(Kd(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(s),ae.trigger(this._element,this.constructor.eventName(XE))),this._popper=this._createPopper(s),s.classList.add(vr),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))ae.on(a,"mouseover",Br);const o=()=>{ae.trigger(this._element,this.constructor.eventName(WE)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||ae.trigger(this._element,this.constructor.eventName(HE)).defaultPrevented)return;if(this._getTipElement().classList.remove(vr),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))ae.off(s,"mouseover",Br);this._activeTrigger[qo]=!1,this._activeTrigger[$o]=!1,this._activeTrigger[Es]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),ae.trigger(this._element,this.constructor.eventName(VE)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(Xo,vr),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=ky(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(Xo),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new NE({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[zE]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Xo)}_isShown(){return this.tip&&this.tip.classList.contains(vr)}_createPopper(e){const t=wt(this._config.placement,[this,e,this._element]),n=ZE[t.toUpperCase()];return Hl(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return wt(e,[this._element,this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:n=>{this._getTipElement().setAttribute("data-popper-placement",n.state.placement)}}]};return{...t,...wt(this._config.popperConfig,[void 0,t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if(t==="click")ae.on(this._element,this.constructor.eventName($E),this._config.selector,n=>{const s=this._initializeOnDelegatedTarget(n);s._activeTrigger[qo]=!(s._isShown()&&s._activeTrigger[qo]),s.toggle()});else if(t!==kE){const n=t===Es?this.constructor.eventName(jE):this.constructor.eventName(qE),s=t===Es?this.constructor.eventName(KE):this.constructor.eventName(YE);ae.on(this._element,n,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?$o:Es]=!0,o._enter()}),ae.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?$o:Es]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},ae.on(this._element.closest(gu),vu,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=Cn.getDataAttributes(this._element);for(const n of Object.keys(t))FE.has(n)&&delete t[n];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:$n(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=hs.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Jt(hs);const eS="popover",tS=".popover-header",nS=".popover-body",iS={...hs.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},sS={...hs.DefaultType,content:"(null|string|element|function)"};class Xl extends hs{static get Default(){return iS}static get DefaultType(){return sS}static get NAME(){return eS}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[tS]:this._getTitle(),[nS]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=Xl.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Jt(Xl);const rS="scrollspy",oS="bs.scrollspy",$l=`.${oS}`,aS=".data-api",lS=`activate${$l}`,_u=`click${$l}`,cS=`load${$l}${aS}`,uS="dropdown-item",zi="active",dS='[data-bs-spy="scroll"]',Yo="[href]",hS=".nav, .list-group",yu=".nav-link",fS=".nav-item",pS=".list-group-item",mS=`${yu}, ${fS} > ${yu}, ${pS}`,gS=".dropdown",vS=".dropdown-toggle",_S={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},yS={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class eo extends on{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return _S}static get DefaultType(){return yS}static get NAME(){return rS}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=$n(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(t=>Number.parseFloat(t))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(ae.off(this._config.target,_u),ae.on(this._config.target,_u,Yo,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,s=t.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:s,behavior:"smooth"});return}n.scrollTop=s}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),e)}_observerCallback(e){const t=o=>this._targetLinks.get(`#${o.target.id}`),n=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(t(o))},s=(this._rootElement||document.documentElement).scrollTop,r=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(n(o),!s)return;continue}!r&&!a&&n(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=Re.find(Yo,this._config.target);for(const t of e){if(!t.hash||qn(t))continue;const n=Re.findOne(decodeURI(t.hash),this._element);us(n)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,n))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(zi),this._activateParents(e),ae.trigger(this._element,lS,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(uS)){Re.findOne(vS,e.closest(gS)).classList.add(zi);return}for(const t of Re.parents(e,hS))for(const n of Re.prev(t,mS))n.classList.add(zi)}_clearActiveClass(e){e.classList.remove(zi);const t=Re.find(`${Yo}.${zi}`,e);for(const n of t)n.classList.remove(zi)}static jQueryInterface(e){return this.each(function(){const t=eo.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}ae.on(window,cS,()=>{for(const i of Re.find(dS))eo.getOrCreateInstance(i)});Jt(eo);const xS="tab",ES="bs.tab",Ei=`.${ES}`,SS=`hide${Ei}`,TS=`hidden${Ei}`,bS=`show${Ei}`,MS=`shown${Ei}`,wS=`click${Ei}`,AS=`keydown${Ei}`,CS=`load${Ei}`,RS="ArrowLeft",xu="ArrowRight",LS="ArrowUp",Eu="ArrowDown",jo="Home",Su="End",pi="active",Tu="fade",Ko="show",PS="dropdown",Eh=".dropdown-toggle",IS=".dropdown-menu",Zo=`:not(${Eh})`,DS='.list-group, .nav, [role="tablist"]',OS=".nav-item, .list-group-item",NS=`.nav-link${Zo}, .list-group-item${Zo}, [role="tab"]${Zo}`,Sh='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Jo=`${NS}, ${Sh}`,US=`.${pi}[data-bs-toggle="tab"], .${pi}[data-bs-toggle="pill"], .${pi}[data-bs-toggle="list"]`;class os extends on{constructor(e){super(e),this._parent=this._element.closest(DS),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),ae.on(this._element,AS,t=>this._keydown(t)))}static get NAME(){return xS}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?ae.trigger(t,SS,{relatedTarget:e}):null;ae.trigger(e,bS,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(pi),this._activate(Re.getElementFromSelector(e));const n=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(Ko);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),ae.trigger(e,MS,{relatedTarget:t})};this._queueCallback(n,e,e.classList.contains(Tu))}_deactivate(e,t){if(!e)return;e.classList.remove(pi),e.blur(),this._deactivate(Re.getElementFromSelector(e));const n=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(Ko);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),ae.trigger(e,TS,{relatedTarget:t})};this._queueCallback(n,e,e.classList.contains(Tu))}_keydown(e){if(![RS,xu,LS,Eu,jo,Su].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter(s=>!qn(s));let n;if([jo,Su].includes(e.key))n=t[e.key===jo?0:t.length-1];else{const s=[xu,Eu].includes(e.key);n=Vl(t,e.target,s,!0)}n&&(n.focus({preventScroll:!0}),os.getOrCreateInstance(n).show())}_getChildren(){return Re.find(Jo,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=Re.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(PS))return;const s=(r,o)=>{const a=Re.findOne(r,n);a&&a.classList.toggle(o,t)};s(Eh,pi),s(IS,Ko),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(pi)}_getInnerElement(e){return e.matches(Jo)?e:Re.findOne(Jo,e)}_getOuterElement(e){return e.closest(OS)||e}static jQueryInterface(e){return this.each(function(){const t=os.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}ae.on(document,wS,Sh,function(i){["A","AREA"].includes(this.tagName)&&i.preventDefault(),!qn(this)&&os.getOrCreateInstance(this).show()});ae.on(window,CS,()=>{for(const i of Re.find(US))os.getOrCreateInstance(i)});Jt(os);const FS="toast",BS="bs.toast",Jn=`.${BS}`,zS=`mouseover${Jn}`,kS=`mouseout${Jn}`,HS=`focusin${Jn}`,VS=`focusout${Jn}`,GS=`hide${Jn}`,WS=`hidden${Jn}`,XS=`show${Jn}`,$S=`shown${Jn}`,qS="fade",bu="hide",_r="show",yr="showing",YS={animation:"boolean",autohide:"boolean",delay:"number"},jS={animation:!0,autohide:!0,delay:5e3};class to extends on{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return jS}static get DefaultType(){return YS}static get NAME(){return FS}show(){if(ae.trigger(this._element,XS).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(qS);const t=()=>{this._element.classList.remove(yr),ae.trigger(this._element,$S),this._maybeScheduleHide()};this._element.classList.remove(bu),Bs(this._element),this._element.classList.add(_r,yr),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown()||ae.trigger(this._element,GS).defaultPrevented)return;const t=()=>{this._element.classList.add(bu),this._element.classList.remove(yr,_r),ae.trigger(this._element,WS)};this._element.classList.add(yr),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(_r),super.dispose()}isShown(){return this._element.classList.contains(_r)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=t;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=t;break}}if(t){this._clearTimeout();return}const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){ae.on(this._element,zS,e=>this._onInteraction(e,!0)),ae.on(this._element,kS,e=>this._onInteraction(e,!1)),ae.on(this._element,HS,e=>this._onInteraction(e,!0)),ae.on(this._element,VS,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=to.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}Zr(to);Jt(to);var Pr={exports:{}},KS=Pr.exports,Mu;function ZS(){return Mu||(Mu=1,function(i,e){(function(t,n){i.exports=n()})(KS,function(){function t(d,m){if(!(d instanceof m))throw new TypeError("Cannot call a class as a function")}function n(d,m){for(var b=0;b<m.length;b++){var A=m[b];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(d,r(A.key),A)}}function s(d,m,b){return m&&n(d.prototype,m),Object.defineProperty(d,"prototype",{writable:!1}),d}function r(d){var m=function(b,A){if(typeof b!="object"||!b)return b;var D=b[Symbol.toPrimitive];if(D!==void 0){var O=D.call(b,A);if(typeof O!="object")return O;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(d,"string");return typeof m=="symbol"?m:m+""}function o(d){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m})(d)}var a=Date.now();function c(){var d={},m=!0,b=0,A=arguments.length;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(m=arguments[0],b++);for(var D=function(G){for(var H in G)Object.prototype.hasOwnProperty.call(G,H)&&(m&&Object.prototype.toString.call(G[H])==="[object Object]"?d[H]=c(!0,d[H],G[H]):d[H]=G[H])};b<A;b++){var O=arguments[b];D(O)}return d}function u(d,m){if((N(d)||d===window||d===document)&&(d=[d]),z(d)||$(d)||(d=[d]),V(d)!=0){if(z(d)&&!$(d))for(var b=d.length,A=0;A<b&&m.call(d[A],d[A],A,d)!==!1;A++);else if($(d)){for(var D in d)if(q(d,D)&&m.call(d[D],d[D],D,d)===!1)break}}}function h(d){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,A=d[a]=d[a]||[],D={all:A,evt:null,found:null};return m&&b&&V(A)>0&&u(A,function(O,G){if(O.eventName==m&&O.fn.toString()==b.toString())return D.found=!0,D.evt=G,!1}),D}function p(d){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b=m.onElement,A=m.withCallback,D=m.avoidDuplicate,O=D===void 0||D,G=m.once,H=G!==void 0&&G,ee=m.useCapture,Q=ee!==void 0&&ee,j=arguments.length>2?arguments[2]:void 0,te=b||[];function fe(ce){T(A)&&A.call(j,ce,this),H&&fe.destroy()}return P(te)&&(te=document.querySelectorAll(te)),fe.destroy=function(){u(te,function(ce){var se=h(ce,d,fe);se.found&&se.all.splice(se.evt,1),ce.removeEventListener&&ce.removeEventListener(d,fe,Q)})},u(te,function(ce){var se=h(ce,d,fe);(ce.addEventListener&&O&&!se.found||!O)&&(ce.addEventListener(d,fe,Q),se.all.push({eventName:d,fn:fe}))}),fe}function v(d,m){u(m.split(" "),function(b){return d.classList.add(b)})}function g(d,m){u(m.split(" "),function(b){return d.classList.remove(b)})}function x(d,m){return d.classList.contains(m)}function S(d,m){for(;d!==document.body;){if(!(d=d.parentElement))return!1;if(typeof d.matches=="function"?d.matches(m):d.msMatchesSelector(m))return d}}function f(d){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",b=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(!d||m==="")return!1;if(m==="none")return T(b)&&b(),!1;var A=C(),D=m.split(" ");u(D,function(O){v(d,"g"+O)}),p(A,{onElement:d,avoidDuplicate:!1,once:!0,withCallback:function(O,G){u(D,function(H){g(G,"g"+H)}),T(b)&&b()}})}function l(d){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if(m==="")return d.style.webkitTransform="",d.style.MozTransform="",d.style.msTransform="",d.style.OTransform="",d.style.transform="",!1;d.style.webkitTransform=m,d.style.MozTransform=m,d.style.msTransform=m,d.style.OTransform=m,d.style.transform=m}function _(d){d.style.display="block"}function y(d){d.style.display="none"}function E(d){var m=document.createDocumentFragment(),b=document.createElement("div");for(b.innerHTML=d;b.firstChild;)m.appendChild(b.firstChild);return m}function M(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function C(){var d,m=document.createElement("fakeelement"),b={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(d in b)if(m.style[d]!==void 0)return b[d]}function L(d,m,b,A){if(d())m();else{var D;b||(b=100);var O=setInterval(function(){d()&&(clearInterval(O),D&&clearTimeout(D),m())},b)}}function I(d,m,b){if(F(d))console.error("Inject assets error");else if(T(m)&&(b=m,m=!1),P(m)&&m in window)T(b)&&b();else{var A;if(d.indexOf(".css")!==-1){if((A=document.querySelectorAll('link[href="'+d+'"]'))&&A.length>0)return void(T(b)&&b());var D=document.getElementsByTagName("head")[0],O=D.querySelectorAll('link[rel="stylesheet"]'),G=document.createElement("link");return G.rel="stylesheet",G.type="text/css",G.href=d,G.media="all",O?D.insertBefore(G,O[0]):D.appendChild(G),void(T(b)&&b())}if((A=document.querySelectorAll('script[src="'+d+'"]'))&&A.length>0){if(T(b)){if(P(m))return L(function(){return window[m]!==void 0},function(){b()}),!1;b()}}else{var H=document.createElement("script");H.type="text/javascript",H.src=d,H.onload=function(){if(T(b)){if(P(m))return L(function(){return window[m]!==void 0},function(){b()}),!1;b()}},document.body.appendChild(H)}}}function w(){return"navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)}function T(d){return typeof d=="function"}function P(d){return typeof d=="string"}function N(d){return!(!d||!d.nodeType||d.nodeType!=1)}function U(d){return Array.isArray(d)}function z(d){return d&&d.length&&isFinite(d.length)}function $(d){return o(d)==="object"&&d!=null&&!T(d)&&!U(d)}function F(d){return d==null}function q(d,m){return d!==null&&hasOwnProperty.call(d,m)}function V(d){if($(d)){if(d.keys)return d.keys().length;var m=0;for(var b in d)q(d,b)&&m++;return m}return d.length}function ie(d){return!isNaN(parseFloat(d))&&isFinite(d)}function le(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,m=document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");if(!m.length)return!1;if(m.length==1)return m[0];typeof d=="string"&&(d=parseInt(d));var b=[];u(m,function(H){b.push(H.getAttribute("data-taborder"))});var A=Math.max.apply(Math,b.map(function(H){return parseInt(H)})),D=d<0?1:d+1;D>A&&(D="1");var O=b.filter(function(H){return H>=parseInt(D)}),G=O.sort()[0];return document.querySelector('.gbtn[data-taborder="'.concat(G,'"]'))}function _e(d){if(d.events.hasOwnProperty("keyboard"))return!1;d.events.keyboard=p("keydown",{onElement:window,withCallback:function(m,b){var A=(m=m||window.event).keyCode;if(A==9){var D=document.querySelector(".gbtn.focused");if(!D){var O=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if(O=="input"||O=="textarea"||O=="button")return}m.preventDefault();var G=document.querySelectorAll(".gbtn[data-taborder]");if(!G||G.length<=0)return;if(!D){var H=le();return void(H&&(H.focus(),v(H,"focused")))}var ee=le(D.getAttribute("data-taborder"));g(D,"focused"),ee&&(ee.focus(),v(ee,"focused"))}A==39&&d.nextSlide(),A==37&&d.prevSlide(),A==27&&d.close()}})}var Le=s(function d(m,b){var A=this,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(t(this,d),this.img=m,this.slide=b,this.onclose=D,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",function(O){return A.dragStart(O)},!1),this.img.addEventListener("mouseup",function(O){return A.dragEnd(O)},!1),this.img.addEventListener("mousemove",function(O){return A.drag(O)},!1),this.img.addEventListener("click",function(O){return A.slide.classList.contains("dragging-nav")?(A.zoomOut(),!1):A.zoomedIn?void(A.zoomedIn&&!A.dragging&&A.zoomOut()):A.zoomIn()},!1),this.img.setZoomEvents=!0},[{key:"zoomIn",value:function(){var d=this.widowWidth();if(!(this.zoomedIn||d<=768)){var m=this.img;if(m.setAttribute("data-style",m.getAttribute("style")),m.style.maxWidth=m.naturalWidth+"px",m.style.maxHeight=m.naturalHeight+"px",m.naturalWidth>d){var b=d/2-m.naturalWidth/2;this.setTranslate(this.img.parentNode,b,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&typeof this.onclose=="function"&&this.onclose()}},{key:"dragStart",value:function(d){d.preventDefault(),this.zoomedIn?(d.type==="touchstart"?(this.initialX=d.touches[0].clientX-this.xOffset,this.initialY=d.touches[0].clientY-this.yOffset):(this.initialX=d.clientX-this.xOffset,this.initialY=d.clientY-this.yOffset),d.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(d){var m=this;d.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout(function(){m.dragging=!1,m.img.isDragging=!1,m.img.classList.remove("dragging")},100)}},{key:"drag",value:function(d){this.active&&(d.preventDefault(),d.type==="touchmove"?(this.currentX=d.touches[0].clientX-this.initialX,this.currentY=d.touches[0].clientY-this.initialY):(this.currentX=d.clientX-this.initialX,this.currentY=d.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(d){if(this.zoomedIn){var m=d.clientX-this.img.naturalWidth/2,b=d.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,m,b)}}},{key:"setTranslate",value:function(d,m,b){d.style.transform="translate3d("+m+"px, "+b+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),Ye=s(function d(){var m=this,b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t(this,d);var A=b.dragEl,D=b.toleranceX,O=D===void 0?40:D,G=b.toleranceY,H=G===void 0?65:G,ee=b.slide,Q=ee===void 0?null:ee,j=b.instance,te=j===void 0?null:j;this.el=A,this.active=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.direction=null,this.lastDirection=null,this.toleranceX=O,this.toleranceY=H,this.toleranceReached=!1,this.dragContainer=this.el,this.slide=Q,this.instance=te,this.el.addEventListener("mousedown",function(fe){return m.dragStart(fe)},!1),this.el.addEventListener("mouseup",function(fe){return m.dragEnd(fe)},!1),this.el.addEventListener("mousemove",function(fe){return m.drag(fe)},!1)},[{key:"dragStart",value:function(d){if(this.slide.classList.contains("zoomed"))this.active=!1;else{d.type==="touchstart"?(this.initialX=d.touches[0].clientX-this.xOffset,this.initialY=d.touches[0].clientY-this.yOffset):(this.initialX=d.clientX-this.xOffset,this.initialY=d.clientY-this.yOffset);var m=d.target.nodeName.toLowerCase();d.target.classList.contains("nodrag")||S(d.target,".nodrag")||["input","select","textarea","button","a"].indexOf(m)!==-1?this.active=!1:(d.preventDefault(),(d.target===this.el||m!=="img"&&S(d.target,".gslide-inline"))&&(this.active=!0,this.el.classList.add("dragging"),this.dragContainer=S(d.target,".ginner-container")))}}},{key:"dragEnd",value:function(d){var m=this;d&&d.preventDefault(),this.initialX=0,this.initialY=0,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.active=!1,this.doSlideChange&&(this.instance.preventOutsideClick=!0,this.doSlideChange=="right"&&this.instance.prevSlide(),this.doSlideChange=="left"&&this.instance.nextSlide()),this.doSlideClose&&this.instance.close(),this.toleranceReached||this.setTranslate(this.dragContainer,0,0,!0),setTimeout(function(){m.instance.preventOutsideClick=!1,m.toleranceReached=!1,m.lastDirection=null,m.dragging=!1,m.el.isDragging=!1,m.el.classList.remove("dragging"),m.slide.classList.remove("dragging-nav"),m.dragContainer.style.transform="",m.dragContainer.style.transition=""},100)}},{key:"drag",value:function(d){if(this.active){d.preventDefault(),this.slide.classList.add("dragging-nav"),d.type==="touchmove"?(this.currentX=d.touches[0].clientX-this.initialX,this.currentY=d.touches[0].clientY-this.initialY):(this.currentX=d.clientX-this.initialX,this.currentY=d.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.el.isDragging=!0,this.dragging=!0,this.doSlideChange=!1,this.doSlideClose=!1;var m=Math.abs(this.currentX),b=Math.abs(this.currentY);if(m>0&&m>=Math.abs(this.currentY)&&(!this.lastDirection||this.lastDirection=="x")){this.yOffset=0,this.lastDirection="x",this.setTranslate(this.dragContainer,this.currentX,0);var A=this.shouldChange();if(!this.instance.settings.dragAutoSnap&&A&&(this.doSlideChange=A),this.instance.settings.dragAutoSnap&&A)return this.instance.preventOutsideClick=!0,this.toleranceReached=!0,this.active=!1,this.instance.preventOutsideClick=!0,this.dragEnd(null),A=="right"&&this.instance.prevSlide(),void(A=="left"&&this.instance.nextSlide())}if(this.toleranceY>0&&b>0&&b>=m&&(!this.lastDirection||this.lastDirection=="y")){this.xOffset=0,this.lastDirection="y",this.setTranslate(this.dragContainer,0,this.currentY);var D=this.shouldClose();return!this.instance.settings.dragAutoSnap&&D&&(this.doSlideClose=!0),void(this.instance.settings.dragAutoSnap&&D&&this.instance.close())}}}},{key:"shouldChange",value:function(){var d=!1;if(Math.abs(this.currentX)>=this.toleranceX){var m=this.currentX>0?"right":"left";(m=="left"&&this.slide!==this.slide.parentNode.lastChild||m=="right"&&this.slide!==this.slide.parentNode.firstChild)&&(d=m)}return d}},{key:"shouldClose",value:function(){var d=!1;return Math.abs(this.currentY)>=this.toleranceY&&(d=!0),d}},{key:"setTranslate",value:function(d,m,b){var A=arguments.length>3&&arguments[3]!==void 0&&arguments[3];d.style.transition=A?"all .2s ease":"",d.style.transform="translate3d(".concat(m,"px, ").concat(b,"px, 0)")}}]);function Xe(d,m,b,A){var D=d.querySelector(".gslide-media"),O=new Image,G="gSlideTitle_"+b,H="gSlideDesc_"+b;O.addEventListener("load",function(){T(A)&&A()},!1),O.src=m.href,m.sizes!=""&&m.srcset!=""&&(O.sizes=m.sizes,O.srcset=m.srcset),O.alt="",F(m.alt)||m.alt===""||(O.alt=m.alt),m.title!==""&&O.setAttribute("aria-labelledby",G),m.description!==""&&O.setAttribute("aria-describedby",H),m.hasOwnProperty("_hasCustomWidth")&&m._hasCustomWidth&&(O.style.width=m.width),m.hasOwnProperty("_hasCustomHeight")&&m._hasCustomHeight&&(O.style.height=m.height),D.insertBefore(O,D.firstChild)}function J(d,m,b,A){var D=this,O=d.querySelector(".ginner-container"),G="gvideo"+b,H=d.querySelector(".gslide-media"),ee=this.getAllPlayers();v(O,"gvideo-container"),H.insertBefore(E('<div class="gvideo-wrapper"></div>'),H.firstChild);var Q=d.querySelector(".gvideo-wrapper");I(this.settings.plyr.css,"Plyr");var j=m.href,te=m==null?void 0:m.videoProvider,fe=!1;H.style.maxWidth=m.width,I(this.settings.plyr.js,"Plyr",function(){if(!te&&j.match(/vimeo\.com\/([0-9]*)/)&&(te="vimeo"),!te&&(j.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||j.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||j.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)||j.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/))&&(te="youtube"),te==="local"||!te){te="local";var ce='<video id="'+G+'" ';ce+='style="background:#000; max-width: '.concat(m.width,';" '),ce+='preload="metadata" ',ce+='x-webkit-airplay="allow" ',ce+="playsinline ",ce+="controls ",ce+='class="gvideo-local">',ce+='<source src="'.concat(j,'">'),fe=E(ce+="</video>")}var se=fe||E('<div id="'.concat(G,'" data-plyr-provider="').concat(te,'" data-plyr-embed-id="').concat(j,'"></div>'));v(Q,"".concat(te,"-video gvideo")),Q.appendChild(se),Q.setAttribute("data-id",G),Q.setAttribute("data-index",b);var Se=q(D.settings.plyr,"config")?D.settings.plyr.config:{},k=new Plyr("#"+G,Se);k.on("ready",function(re){ee[G]=re.detail.plyr,T(A)&&A()}),L(function(){return d.querySelector("iframe")&&d.querySelector("iframe").dataset.ready=="true"},function(){D.resize(d)}),k.on("enterfullscreen",pe),k.on("exitfullscreen",pe)})}function pe(d){var m=S(d.target,".gslide-media");d.type==="enterfullscreen"&&v(m,"fullscreen"),d.type==="exitfullscreen"&&g(m,"fullscreen")}function he(d,m,b,A){var D,O=this,G=d.querySelector(".gslide-media"),H=!(!q(m,"href")||!m.href)&&m.href.split("#").pop().trim(),ee=!(!q(m,"content")||!m.content)&&m.content;if(ee&&(P(ee)&&(D=E('<div class="ginlined-content">'.concat(ee,"</div>"))),N(ee))){ee.style.display=="none"&&(ee.style.display="block");var Q=document.createElement("div");Q.className="ginlined-content",Q.appendChild(ee),D=Q}if(H){var j=document.getElementById(H);if(!j)return!1;var te=j.cloneNode(!0);te.style.height=m.height,te.style.maxWidth=m.width,v(te,"ginlined-content"),D=te}if(!D)return console.error("Unable to append inline slide content",m),!1;G.style.height=m.height,G.style.width=m.width,G.appendChild(D),this.events["inlineclose"+H]=p("click",{onElement:G.querySelectorAll(".gtrigger-close"),withCallback:function(fe){fe.preventDefault(),O.close()}}),T(A)&&A()}function be(d,m,b,A){var D=d.querySelector(".gslide-media"),O=function(G){var H=G.url,ee=G.allow,Q=G.callback,j=G.appendTo,te=document.createElement("iframe");return te.className="vimeo-video gvideo",te.src=H,te.style.width="100%",te.style.height="100%",ee&&te.setAttribute("allow",ee),te.onload=function(){te.onload=null,v(te,"node-ready"),T(Q)&&Q()},j&&j.appendChild(te),te}({url:m.href,callback:A});D.parentNode.style.maxWidth=m.width,D.parentNode.style.height=m.height,D.appendChild(O)}var we=s(function d(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t(this,d),this.defaults={href:"",sizes:"",srcset:"",title:"",type:"",videoProvider:"",description:"",alt:"",descPosition:"bottom",effect:"",width:"",height:"",content:!1,zoomable:!0,draggable:!0},$(m)&&(this.defaults=c(this.defaults,m))},[{key:"sourceType",value:function(d){var m=d;return(d=d.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)!==null?"image":d.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||d.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||d.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)||d.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/)||d.match(/vimeo\.com\/([0-9]*)/)||d.match(/\.(mp4|ogg|webm|mov)/)!==null?"video":d.match(/\.(mp3|wav|wma|aac|ogg)/)!==null?"audio":d.indexOf("#")>-1&&m.split("#").pop().trim()!==""?"inline":d.indexOf("goajax=true")>-1?"ajax":"external"}},{key:"parseConfig",value:function(d,m){var b=this,A=c({descPosition:m.descPosition},this.defaults);if($(d)&&!N(d)){q(d,"type")||(q(d,"content")&&d.content?d.type="inline":q(d,"href")&&(d.type=this.sourceType(d.href)));var D=c(A,d);return this.setSize(D,m),D}var O="",G=d.getAttribute("data-glightbox"),H=d.nodeName.toLowerCase();if(H==="a"&&(O=d.href),H==="img"&&(O=d.src,A.alt=d.alt),A.href=O,u(A,function(ce,se){q(m,se)&&se!=="width"&&(A[se]=m[se]);var Se=d.dataset[se];F(Se)||(A[se]=b.sanitizeValue(Se))}),A.content&&(A.type="inline"),!A.type&&O&&(A.type=this.sourceType(O)),F(G)){if(!A.title&&H=="a"){var ee=d.title;F(ee)||ee===""||(A.title=ee)}if(!A.title&&H=="img"){var Q=d.alt;F(Q)||Q===""||(A.title=Q)}}else{var j=[];u(A,function(ce,se){j.push(";\\s?"+se)}),j=j.join("\\s?:|"),G.trim()!==""&&u(A,function(ce,se){var Se=G,k=new RegExp("s?"+se+"s?:s?(.*?)("+j+"s?:|$)"),re=Se.match(k);if(re&&re.length&&re[1]){var de=re[1].trim().replace(/;\s*$/,"");A[se]=b.sanitizeValue(de)}})}if(A.description&&A.description.substring(0,1)==="."){var te;try{te=document.querySelector(A.description).innerHTML}catch(ce){if(!(ce instanceof DOMException))throw ce}te&&(A.description=te)}if(!A.description){var fe=d.querySelector(".glightbox-desc");fe&&(A.description=fe.innerHTML)}return this.setSize(A,m,d),this.slideConfig=A,A}},{key:"setSize",value:function(d,m){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,A=d.type=="video"?this.checkSize(m.videosWidth):this.checkSize(m.width),D=this.checkSize(m.height);return d.width=q(d,"width")&&d.width!==""?this.checkSize(d.width):A,d.height=q(d,"height")&&d.height!==""?this.checkSize(d.height):D,b&&d.type=="image"&&(d._hasCustomWidth=!!b.dataset.width,d._hasCustomHeight=!!b.dataset.height),d}},{key:"checkSize",value:function(d){return ie(d)?"".concat(d,"px"):d}},{key:"sanitizeValue",value:function(d){return d!=="true"&&d!=="false"?d:d==="true"}}]),Ie=s(function d(m,b,A){t(this,d),this.element=m,this.instance=b,this.index=A},[{key:"setContent",value:function(){var d=this,m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,b=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(x(m,"loaded"))return!1;var A=this.instance.settings,D=this.slideConfig,O=w();T(A.beforeSlideLoad)&&A.beforeSlideLoad({index:this.index,slide:m,player:!1});var G=D.type,H=D.descPosition,ee=m.querySelector(".gslide-media"),Q=m.querySelector(".gslide-title"),j=m.querySelector(".gslide-desc"),te=m.querySelector(".gdesc-inner"),fe=b,ce="gSlideTitle_"+this.index,se="gSlideDesc_"+this.index;if(T(A.afterSlideLoad)&&(fe=function(){T(b)&&b(),A.afterSlideLoad({index:d.index,slide:m,player:d.instance.getSlidePlayerInstance(d.index)})}),D.title==""&&D.description==""?te&&te.parentNode.parentNode.removeChild(te.parentNode):(Q&&D.title!==""?(Q.id=ce,Q.innerHTML=D.title):Q.parentNode.removeChild(Q),j&&D.description!==""?(j.id=se,O&&A.moreLength>0?(D.smallDescription=this.slideShortDesc(D.description,A.moreLength,A.moreText),j.innerHTML=D.smallDescription,this.descriptionEvents(j,D)):j.innerHTML=D.description):j.parentNode.removeChild(j),v(ee.parentNode,"desc-".concat(H)),v(te.parentNode,"description-".concat(H))),v(ee,"gslide-".concat(G)),v(m,"loaded"),G!=="video"){if(G!=="external")return G==="inline"?(he.apply(this.instance,[m,D,this.index,fe]),void(D.draggable&&new Ye({dragEl:m.querySelector(".gslide-inline"),toleranceX:A.dragToleranceX,toleranceY:A.dragToleranceY,slide:m,instance:this.instance}))):void(G!=="image"?T(fe)&&fe():Xe(m,D,this.index,function(){var Se=m.querySelector("img");D.draggable&&new Ye({dragEl:Se,toleranceX:A.dragToleranceX,toleranceY:A.dragToleranceY,slide:m,instance:d.instance}),D.zoomable&&Se.naturalWidth>Se.offsetWidth&&(v(Se,"zoomable"),new Le(Se,m,function(){d.instance.resize()})),T(fe)&&fe()}));be.apply(this,[m,D,this.index,fe])}else J.apply(this.instance,[m,D,this.index,fe])}},{key:"slideShortDesc",value:function(d){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:50,b=arguments.length>2&&arguments[2]!==void 0&&arguments[2],A=document.createElement("div");A.innerHTML=d;var D=A.innerText,O=b;if((d=D.trim()).length<=m)return d;var G=d.substr(0,m-1);return O?(A=null,G+'... <a href="#" class="desc-more">'+b+"</a>"):G}},{key:"descriptionEvents",value:function(d,m){var b=this,A=d.querySelector(".desc-more");if(!A)return!1;p("click",{onElement:A,withCallback:function(D,O){D.preventDefault();var G=document.body,H=S(O,".gslide-desc");if(!H)return!1;H.innerHTML=m.description,v(G,"gdesc-open");var ee=p("click",{onElement:[G,S(H,".gslide-description")],withCallback:function(Q,j){Q.target.nodeName.toLowerCase()!=="a"&&(g(G,"gdesc-open"),v(G,"gdesc-closed"),H.innerHTML=m.smallDescription,b.descriptionEvents(H,m),setTimeout(function(){g(G,"gdesc-closed")},400),ee.destroy())}})}})}},{key:"create",value:function(){return E(this.instance.settings.slideHTML)}},{key:"getConfig",value:function(){N(this.element)||this.element.hasOwnProperty("draggable")||(this.element.draggable=this.instance.settings.draggable);var d=new we(this.instance.settings.slideExtraAttributes);return this.slideConfig=d.parseConfig(this.element,this.instance.settings),this.slideConfig}}]);function Ze(d){return Math.sqrt(d.x*d.x+d.y*d.y)}function Ve(d,m){var b=function(A,D){var O=Ze(A)*Ze(D);if(O===0)return 0;var G=function(H,ee){return H.x*ee.x+H.y*ee.y}(A,D)/O;return G>1&&(G=1),Math.acos(G)}(d,m);return function(A,D){return A.x*D.y-D.x*A.y}(d,m)>0&&(b*=-1),180*b/Math.PI}var B=s(function d(m){t(this,d),this.handlers=[],this.el=m},[{key:"add",value:function(d){this.handlers.push(d)}},{key:"del",value:function(d){d||(this.handlers=[]);for(var m=this.handlers.length;m>=0;m--)this.handlers[m]===d&&this.handlers.splice(m,1)}},{key:"dispatch",value:function(){for(var d=0,m=this.handlers.length;d<m;d++){var b=this.handlers[d];typeof b=="function"&&b.apply(this.el,arguments)}}}]);function Fe(d,m){var b=new B(d);return b.add(m),b}var Ae=s(function d(m,b){t(this,d),this.element=typeof m=="string"?document.querySelector(m):m,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var A=function(){};this.rotate=Fe(this.element,b.rotate||A),this.touchStart=Fe(this.element,b.touchStart||A),this.multipointStart=Fe(this.element,b.multipointStart||A),this.multipointEnd=Fe(this.element,b.multipointEnd||A),this.pinch=Fe(this.element,b.pinch||A),this.swipe=Fe(this.element,b.swipe||A),this.tap=Fe(this.element,b.tap||A),this.doubleTap=Fe(this.element,b.doubleTap||A),this.longTap=Fe(this.element,b.longTap||A),this.singleTap=Fe(this.element,b.singleTap||A),this.pressMove=Fe(this.element,b.pressMove||A),this.twoFingerPressMove=Fe(this.element,b.twoFingerPressMove||A),this.touchMove=Fe(this.element,b.touchMove||A),this.touchEnd=Fe(this.element,b.touchEnd||A),this.touchCancel=Fe(this.element,b.touchCancel||A),this.translateContainer=this.element,this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}},[{key:"start",value:function(d){if(d.touches)if(d.target&&d.target.nodeName&&["a","button","input"].indexOf(d.target.nodeName.toLowerCase())>=0)console.log("ignore drag for this touched element",d.target.nodeName.toLowerCase());else{this.now=Date.now(),this.x1=d.touches[0].pageX,this.y1=d.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(d,this.element),this.preTapPosition.x!==null&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var m=this.preV;if(d.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var b={x:d.touches[1].pageX-this.x1,y:d.touches[1].pageY-this.y1};m.x=b.x,m.y=b.y,this.pinchStartLen=Ze(m),this.multipointStart.dispatch(d,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout((function(){this.longTap.dispatch(d,this.element),this._preventTap=!0}).bind(this),750)}}},{key:"move",value:function(d){if(d.touches){var m=this.preV,b=d.touches.length,A=d.touches[0].pageX,D=d.touches[0].pageY;if(this.isDoubleTap=!1,b>1){var O=d.touches[1].pageX,G=d.touches[1].pageY,H={x:d.touches[1].pageX-A,y:d.touches[1].pageY-D};m.x!==null&&(this.pinchStartLen>0&&(d.zoom=Ze(H)/this.pinchStartLen,this.pinch.dispatch(d,this.element)),d.angle=Ve(H,m),this.rotate.dispatch(d,this.element)),m.x=H.x,m.y=H.y,this.x2!==null&&this.sx2!==null?(d.deltaX=(A-this.x2+O-this.sx2)/2,d.deltaY=(D-this.y2+G-this.sy2)/2):(d.deltaX=0,d.deltaY=0),this.twoFingerPressMove.dispatch(d,this.element),this.sx2=O,this.sy2=G}else{if(this.x2!==null){d.deltaX=A-this.x2,d.deltaY=D-this.y2;var ee=Math.abs(this.x1-this.x2),Q=Math.abs(this.y1-this.y2);(ee>10||Q>10)&&(this._preventTap=!0)}else d.deltaX=0,d.deltaY=0;this.pressMove.dispatch(d,this.element)}this.touchMove.dispatch(d,this.element),this._cancelLongTap(),this.x2=A,this.y2=D,b>1&&d.preventDefault()}}},{key:"end",value:function(d){if(d.changedTouches){this._cancelLongTap();var m=this;d.touches.length<2&&(this.multipointEnd.dispatch(d,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(d.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){m.swipe.dispatch(d,m.element)},0)):(this.tapTimeout=setTimeout(function(){m._preventTap||m.tap.dispatch(d,m.element),m.isDoubleTap&&(m.doubleTap.dispatch(d,m.element),m.isDoubleTap=!1)},0),m.isDoubleTap||(m.singleTapTimeout=setTimeout(function(){m.singleTap.dispatch(d,m.element)},250))),this.touchEnd.dispatch(d,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(d){this.cancelAll(),this.touchCancel.dispatch(d,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(d,m,b,A){return Math.abs(d-m)>=Math.abs(b-A)?d-m>0?"Left":"Right":b-A>0?"Up":"Down"}},{key:"on",value:function(d,m){this[d]&&this[d].add(m)}},{key:"off",value:function(d,m){this[d]&&this[d].del(m)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]);function He(d){var m=function(){var G,H=document.createElement("fakeelement"),ee={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(G in ee)if(H.style[G]!==void 0)return ee[G]}(),b=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,A=x(d,"gslide-media")?d:d.querySelector(".gslide-media"),D=S(A,".ginner-container"),O=d.querySelector(".gslide-description");b>769&&(A=D),v(A,"greset"),l(A,"translate3d(0, 0, 0)"),p(m,{onElement:A,once:!0,withCallback:function(G,H){g(A,"greset")}}),A.style.opacity="",O&&(O.style.opacity="")}function Me(d){if(d.events.hasOwnProperty("touch"))return!1;var m,b,A,D=M(),O=D.width,G=D.height,H=!1,ee=null,Q=null,j=null,te=!1,fe=1,ce=1,se=!1,Se=!1,k=null,re=null,de=null,me=null,oe=0,ne=0,xe=!1,Oe=!1,Ge={},Be={},kt=0,Lt=0,Gs=document.getElementById("glightbox-slider"),Ht=document.querySelector(".goverlay"),fs=new Ae(Gs,{touchStart:function(Je){if(H=!0,(x(Je.targetTouches[0].target,"ginner-container")||S(Je.targetTouches[0].target,".gslide-desc")||Je.targetTouches[0].target.nodeName.toLowerCase()=="a")&&(H=!1),S(Je.targetTouches[0].target,".gslide-inline")&&!x(Je.targetTouches[0].target.parentNode,"gslide-inline")&&(H=!1),H){if(Be=Je.targetTouches[0],Ge.pageX=Je.targetTouches[0].pageX,Ge.pageY=Je.targetTouches[0].pageY,kt=Je.targetTouches[0].clientX,Lt=Je.targetTouches[0].clientY,ee=d.activeSlide,Q=ee.querySelector(".gslide-media"),A=ee.querySelector(".gslide-inline"),j=null,x(Q,"gslide-image")&&(j=Q.querySelector("img")),(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>769&&(Q=ee.querySelector(".ginner-container")),g(Ht,"greset"),Je.pageX>20&&Je.pageX<window.innerWidth-20)return;Je.preventDefault()}},touchMove:function(Je){if(H&&(Be=Je.targetTouches[0],!se&&!Se)){if(A&&A.offsetHeight>G){var mt=Ge.pageX-Be.pageX;if(Math.abs(mt)<=13)return!1}te=!0;var Pt,Qn=Je.targetTouches[0].clientX,Si=Je.targetTouches[0].clientY,Ws=kt-Qn,Xs=Lt-Si;if(Math.abs(Ws)>Math.abs(Xs)?(xe=!1,Oe=!0):(Oe=!1,xe=!0),m=Be.pageX-Ge.pageX,oe=100*m/O,b=Be.pageY-Ge.pageY,ne=100*b/G,xe&&j&&(Pt=1-Math.abs(b)/G,Ht.style.opacity=Pt,d.settings.touchFollowAxis&&(oe=0)),Oe&&(Pt=1-Math.abs(m)/O,Q.style.opacity=Pt,d.settings.touchFollowAxis&&(ne=0)),!j)return l(Q,"translate3d(".concat(oe,"%, 0, 0)"));l(Q,"translate3d(".concat(oe,"%, ").concat(ne,"%, 0)"))}},touchEnd:function(){if(H){if(te=!1,Se||se)return de=k,void(me=re);var Je=Math.abs(parseInt(ne)),mt=Math.abs(parseInt(oe));if(!(Je>29&&j))return Je<29&&mt<25?(v(Ht,"greset"),Ht.style.opacity=1,He(Q)):void 0;d.close()}},multipointEnd:function(){setTimeout(function(){se=!1},50)},multipointStart:function(){se=!0,fe=ce||1},pinch:function(Je){if(!j||te)return!1;se=!0,j.scaleX=j.scaleY=fe*Je.zoom;var mt=fe*Je.zoom;if(Se=!0,mt<=1)return Se=!1,mt=1,me=null,de=null,k=null,re=null,void j.setAttribute("style","");mt>4.5&&(mt=4.5),j.style.transform="scale3d(".concat(mt,", ").concat(mt,", 1)"),ce=mt},pressMove:function(Je){if(Se&&!se){var mt=Be.pageX-Ge.pageX,Pt=Be.pageY-Ge.pageY;de&&(mt+=de),me&&(Pt+=me),k=mt,re=Pt;var Qn="translate3d(".concat(mt,"px, ").concat(Pt,"px, 0)");ce&&(Qn+=" scale3d(".concat(ce,", ").concat(ce,", 1)")),l(j,Qn)}},swipe:function(Je){if(!Se)if(se)se=!1;else{if(Je.direction=="Left"){if(d.index==d.elements.length-1)return He(Q);d.nextSlide()}if(Je.direction=="Right"){if(d.index==0)return He(Q);d.prevSlide()}}}});d.events.touch=fs}var Qe=w(),ye=w()!==null||document.createTouch!==void 0||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,De=document.getElementsByTagName("html")[0],rt={selector:".glightbox",elements:null,skin:"clean",theme:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,autofocusVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,slideExtraAttributes:null,onOpen:null,onClose:null,loop:!1,zoomable:!0,draggable:!0,dragAutoSnap:!1,dragToleranceX:40,dragToleranceY:65,preload:!0,oneSlidePerOpen:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plugins:!1,plyr:{css:"https://cdn.plyr.io/3.6.12/plyr.css",js:"https://cdn.plyr.io/3.6.12/plyr.js",config:{ratio:"16:9",fullscreen:{enabled:!0,iosNative:!0},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoom",closeEffect:"zoom",slideEffect:"slide",moreText:"See more",moreLength:60,cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slideBack:{in:"slideInLeft",out:"slideOutRight"},none:{in:"none",out:"none"}},svg:{close:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'},slideHTML:`<div class="gslide">
    <div class="gslide-inner-content">
        <div class="ginner-container">
            <div class="gslide-media">
            </div>
            <div class="gslide-description">
                <div class="gdesc-inner">
                    <h4 class="gslide-title"></h4>
                    <div class="gslide-desc"></div>
                </div>
            </div>
        </div>
    </div>
</div>`,lightboxHTML:`<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">
    <div class="gloader visible"></div>
    <div class="goverlay"></div>
    <div class="gcontainer">
    <div id="glightbox-slider" class="gslider"></div>
    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>
    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>
    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>
</div>
</div>`},st=s(function d(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t(this,d),this.customOptions=m,this.settings=c(rt,m),this.effectsClasses=this.getAnimationClasses(),this.videoPlayers={},this.apiEvents=[],this.fullElementsList=!1},[{key:"init",value:function(){var d=this,m=this.getSelector();m&&(this.baseEvents=p("click",{onElement:m,withCallback:function(b,A){b.preventDefault(),d.open(A)}})),this.elements=this.getElements()}},{key:"open",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(this.elements.length===0)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var b=ie(m)?m:this.settings.startAt;if(N(d)){var A=d.getAttribute("data-gallery");A&&(this.fullElementsList=this.elements,this.elements=this.getGalleryElements(this.elements,A)),F(b)&&(b=this.getElementIndex(d))<0&&(b=0)}ie(b)||(b=0),this.build(),f(this.overlay,this.settings.openEffect==="none"?"none":this.settings.cssEfects.fade.in);var D=document.body,O=window.innerWidth-document.documentElement.clientWidth;if(O>0){var G=document.createElement("style");G.type="text/css",G.className="gcss-styles",G.innerText=".gscrollbar-fixer {margin-right: ".concat(O,"px}"),document.head.appendChild(G),v(D,"gscrollbar-fixer")}v(D,"glightbox-open"),v(De,"glightbox-open"),Qe&&(v(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(b,!0),this.elements.length===1?(v(this.prevButton,"glightbox-button-hidden"),v(this.nextButton,"glightbox-button-hidden")):(g(this.prevButton,"glightbox-button-hidden"),g(this.nextButton,"glightbox-button-hidden")),this.lightboxOpen=!0,this.trigger("open"),T(this.settings.onOpen)&&this.settings.onOpen(),ye&&this.settings.touchNavigation&&Me(this),this.settings.keyboardNavigation&&_e(this)}},{key:"openAt",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.open(null,d)}},{key:"showSlide",value:function(){var d=this,m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,b=arguments.length>1&&arguments[1]!==void 0&&arguments[1];_(this.loader),this.index=parseInt(m);var A=this.slidesContainer.querySelector(".current");A&&g(A,"current"),this.slideAnimateOut();var D=this.slidesContainer.querySelectorAll(".gslide")[m];if(x(D,"loaded"))this.slideAnimateIn(D,b),y(this.loader);else{_(this.loader);var O=this.elements[m],G={index:this.index,slide:D,slideNode:D,slideConfig:O.slideConfig,slideIndex:this.index,trigger:O.node,player:null};this.trigger("slide_before_load",G),O.instance.setContent(D,function(){y(d.loader),d.resize(),d.slideAnimateIn(D,b),d.trigger("slide_after_load",G)})}this.slideDescription=D.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&x(this.slideDescription.parentNode,"gslide-media"),this.settings.preload&&(this.preloadSlide(m+1),this.preloadSlide(m-1)),this.updateNavigationClasses(),this.activeSlide=D}},{key:"preloadSlide",value:function(d){var m=this;if(d<0||d>this.elements.length-1||F(this.elements[d]))return!1;var b=this.slidesContainer.querySelectorAll(".gslide")[d];if(x(b,"loaded"))return!1;var A=this.elements[d],D=A.type,O={index:d,slide:b,slideNode:b,slideConfig:A.slideConfig,slideIndex:d,trigger:A.node,player:null};this.trigger("slide_before_load",O),D==="video"||D==="external"?setTimeout(function(){A.instance.setContent(b,function(){m.trigger("slide_after_load",O)})},200):A.instance.setContent(b,function(){m.trigger("slide_after_load",O)})}},{key:"prevSlide",value:function(){this.goToSlide(this.index-1)}},{key:"nextSlide",value:function(){this.goToSlide(this.index+1)}},{key:"goToSlide",value:function(){var d=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,!this.loop()&&(d<0||d>this.elements.length-1))return!1;d<0?d=this.elements.length-1:d>=this.elements.length&&(d=0),this.showSlide(d)}},{key:"insertSlide",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1;m<0&&(m=this.elements.length);var b=new Ie(d,this,m),A=b.getConfig(),D=c({},A),O=b.create(),G=this.elements.length-1;D.index=m,D.node=!1,D.instance=b,D.slideConfig=A,this.elements.splice(m,0,D);var H=null,ee=null;if(this.slidesContainer){if(m>G)this.slidesContainer.appendChild(O);else{var Q=this.slidesContainer.querySelectorAll(".gslide")[m];this.slidesContainer.insertBefore(O,Q)}(this.settings.preload&&this.index==0&&m==0||this.index-1==m||this.index+1==m)&&this.preloadSlide(m),this.index===0&&m===0&&(this.index=1),this.updateNavigationClasses(),H=this.slidesContainer.querySelectorAll(".gslide")[m],ee=this.getSlidePlayerInstance(m),D.slideNode=H}this.trigger("slide_inserted",{index:m,slide:H,slideNode:H,slideConfig:A,slideIndex:m,trigger:null,player:ee}),T(this.settings.slideInserted)&&this.settings.slideInserted({index:m,slide:H,player:ee})}},{key:"removeSlide",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;if(d<0||d>this.elements.length-1)return!1;var m=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[d];m&&(this.getActiveSlideIndex()==d&&(d==this.elements.length-1?this.prevSlide():this.nextSlide()),m.parentNode.removeChild(m)),this.elements.splice(d,1),this.trigger("slide_removed",d),T(this.settings.slideRemoved)&&this.settings.slideRemoved(d)}},{key:"slideAnimateIn",value:function(d,m){var b=this,A=d.querySelector(".gslide-media"),D=d.querySelector(".gslide-description"),O={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlide,slideConfig:F(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:F(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},G={index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideConfig:this.elements[this.index].slideConfig,slideIndex:this.index,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)};if(A.offsetWidth>0&&D&&(y(D),D.style.display=""),g(d,this.effectsClasses),m)f(d,this.settings.cssEfects[this.settings.openEffect].in,function(){b.settings.autoplayVideos&&b.slidePlayerPlay(d),b.trigger("slide_changed",{prev:O,current:G}),T(b.settings.afterSlideChange)&&b.settings.afterSlideChange.apply(b,[O,G])});else{var H=this.settings.slideEffect,ee=H!=="none"?this.settings.cssEfects[H].in:H;this.prevActiveSlideIndex>this.index&&this.settings.slideEffect=="slide"&&(ee=this.settings.cssEfects.slideBack.in),f(d,ee,function(){b.settings.autoplayVideos&&b.slidePlayerPlay(d),b.trigger("slide_changed",{prev:O,current:G}),T(b.settings.afterSlideChange)&&b.settings.afterSlideChange.apply(b,[O,G])})}setTimeout(function(){b.resize(d)},100),v(d,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var d=this.prevActiveSlide;g(d,this.effectsClasses),v(d,"prev");var m=this.settings.slideEffect,b=m!=="none"?this.settings.cssEfects[m].out:m;this.slidePlayerPause(d),this.trigger("slide_before_change",{prev:{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlideIndex,slideConfig:F(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:F(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},current:{index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideIndex:this.index,slideConfig:this.elements[this.index].slideConfig,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)}}),T(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&this.settings.slideEffect=="slide"&&(b=this.settings.cssEfects.slideBack.out),f(d,b,function(){var A=d.querySelector(".ginner-container"),D=d.querySelector(".gslide-media"),O=d.querySelector(".gslide-description");A.style.transform="",D.style.transform="",g(D,"greset"),D.style.opacity="",O&&(O.style.opacity=""),g(d,"prev")})}},{key:"getAllPlayers",value:function(){return this.videoPlayers}},{key:"getSlidePlayerInstance",value:function(d){var m="gvideo"+d,b=this.getAllPlayers();return!(!q(b,m)||!b[m])&&b[m]}},{key:"stopSlideVideo",value:function(d){if(N(d)){var m=d.querySelector(".gvideo-wrapper");m&&(d=m.getAttribute("data-index"))}console.log("stopSlideVideo is deprecated, use slidePlayerPause");var b=this.getSlidePlayerInstance(d);b&&b.playing&&b.pause()}},{key:"slidePlayerPause",value:function(d){if(N(d)){var m=d.querySelector(".gvideo-wrapper");m&&(d=m.getAttribute("data-index"))}var b=this.getSlidePlayerInstance(d);b&&b.playing&&b.pause()}},{key:"playSlideVideo",value:function(d){if(N(d)){var m=d.querySelector(".gvideo-wrapper");m&&(d=m.getAttribute("data-index"))}console.log("playSlideVideo is deprecated, use slidePlayerPlay");var b=this.getSlidePlayerInstance(d);b&&!b.playing&&b.play()}},{key:"slidePlayerPlay",value:function(d){var m;if(!Qe||(m=this.settings.plyr.config)!==null&&m!==void 0&&m.muted){if(N(d)){var b=d.querySelector(".gvideo-wrapper");b&&(d=b.getAttribute("data-index"))}var A=this.getSlidePlayerInstance(d);A&&!A.playing&&(A.play(),this.settings.autofocusVideos&&A.elements.container.focus())}}},{key:"setElements",value:function(d){var m=this;this.settings.elements=!1;var b=[];d&&d.length&&u(d,function(A,D){var O=new Ie(A,m,D),G=O.getConfig(),H=c({},G);H.slideConfig=G,H.instance=O,H.index=D,b.push(H)}),this.elements=b,this.lightboxOpen&&(this.slidesContainer.innerHTML="",this.elements.length&&(u(this.elements,function(){var A=E(m.settings.slideHTML);m.slidesContainer.appendChild(A)}),this.showSlide(0,!0)))}},{key:"getElementIndex",value:function(d){var m=!1;return u(this.elements,function(b,A){if(q(b,"node")&&b.node==d)return m=A,!0}),m}},{key:"getElements",value:function(){var d=this,m=[];this.elements=this.elements?this.elements:[],!F(this.settings.elements)&&U(this.settings.elements)&&this.settings.elements.length&&u(this.settings.elements,function(A,D){var O=new Ie(A,d,D),G=O.getConfig(),H=c({},G);H.node=!1,H.index=D,H.instance=O,H.slideConfig=G,m.push(H)});var b=!1;return this.getSelector()&&(b=document.querySelectorAll(this.getSelector())),b&&u(b,function(A,D){var O=new Ie(A,d,D),G=O.getConfig(),H=c({},G);H.node=A,H.index=D,H.instance=O,H.slideConfig=G,H.gallery=A.getAttribute("data-gallery"),m.push(H)}),m}},{key:"getGalleryElements",value:function(d,m){return d.filter(function(b){return b.gallery==m})}},{key:"getSelector",value:function(){return!this.settings.elements&&(this.settings.selector&&this.settings.selector.substring(0,5)=="data-"?"*[".concat(this.settings.selector,"]"):this.settings.selector)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var d=[];for(var m in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(m)){var b=this.settings.cssEfects[m];d.push("g".concat(b.in)),d.push("g".concat(b.out))}return d.join(" ")}},{key:"build",value:function(){var d=this;if(this.built)return!1;var m=document.body.childNodes,b=[];u(m,function(Q){Q.parentNode==document.body&&Q.nodeName.charAt(0)!=="#"&&Q.hasAttribute&&!Q.hasAttribute("aria-hidden")&&(b.push(Q),Q.setAttribute("aria-hidden","true"))});var A=q(this.settings.svg,"next")?this.settings.svg.next:"",D=q(this.settings.svg,"prev")?this.settings.svg.prev:"",O=q(this.settings.svg,"close")?this.settings.svg.close:"",G=this.settings.lightboxHTML;G=E(G=(G=(G=G.replace(/{nextSVG}/g,A)).replace(/{prevSVG}/g,D)).replace(/{closeSVG}/g,O)),document.body.appendChild(G);var H=document.getElementById("glightbox-body");this.modal=H;var ee=H.querySelector(".gclose");this.prevButton=H.querySelector(".gprev"),this.nextButton=H.querySelector(".gnext"),this.overlay=H.querySelector(".goverlay"),this.loader=H.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.bodyHiddenChildElms=b,this.events={},v(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&ee&&(this.events.close=p("click",{onElement:ee,withCallback:function(Q,j){Q.preventDefault(),d.close()}})),ee&&!this.settings.closeButton&&ee.parentNode.removeChild(ee),this.nextButton&&(this.events.next=p("click",{onElement:this.nextButton,withCallback:function(Q,j){Q.preventDefault(),d.nextSlide()}})),this.prevButton&&(this.events.prev=p("click",{onElement:this.prevButton,withCallback:function(Q,j){Q.preventDefault(),d.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=p("click",{onElement:H,withCallback:function(Q,j){d.preventOutsideClick||x(document.body,"glightbox-mobile")||S(Q.target,".ginner-container")||S(Q.target,".gbtn")||x(Q.target,"gnext")||x(Q.target,"gprev")||d.close()}})),u(this.elements,function(Q,j){d.slidesContainer.appendChild(Q.instance.create()),Q.slideNode=d.slidesContainer.querySelectorAll(".gslide")[j]}),ye&&v(document.body,"glightbox-touch"),this.events.resize=p("resize",{onElement:window,withCallback:function(){d.resize()}}),this.built=!0}},{key:"resize",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if((d=d||this.activeSlide)&&!x(d,"zoomed")){var m=M(),b=d.querySelector(".gvideo-wrapper"),A=d.querySelector(".gslide-image"),D=this.slideDescription,O=m.width,G=m.height;if(O<=768?v(document.body,"glightbox-mobile"):g(document.body,"glightbox-mobile"),b||A){var H=!1;if(D&&(x(D,"description-bottom")||x(D,"description-top"))&&!x(D,"gabsolute")&&(H=!0),A){if(O<=768)A.querySelector("img");else if(H){var ee,Q,j=D.offsetHeight,te=A.querySelector("img"),fe=(ee=this.elements[this.index])===null||ee===void 0?void 0:ee.node,ce="100vh";fe&&(ce=(Q=fe.getAttribute("data-height"))!==null&&Q!==void 0?Q:ce),te.setAttribute("style","max-height: calc(".concat(ce," - ").concat(j,"px)")),D.setAttribute("style","max-width: ".concat(te.offsetWidth,"px;"))}}if(b){var se=q(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"";if(!se){var Se=b.clientWidth,k=b.clientHeight,re=Se/k;se="".concat(Se/re,":").concat(k/re)}var de=se.split(":"),me=this.settings.videosWidth,oe=this.settings.videosWidth,ne=(oe=ie(me)||me.indexOf("px")!==-1?parseInt(me):me.indexOf("vw")!==-1?O*parseInt(me)/100:me.indexOf("vh")!==-1?G*parseInt(me)/100:me.indexOf("%")!==-1?O*parseInt(me)/100:parseInt(b.clientWidth))/(parseInt(de[0])/parseInt(de[1]));if(ne=Math.floor(ne),H&&(G-=D.offsetHeight),oe>O||ne>G||G<ne&&O>oe){var xe=b.offsetWidth,Oe=b.offsetHeight,Ge=G/Oe,Be={width:xe*Ge,height:Oe*Ge};b.parentNode.setAttribute("style","max-width: ".concat(Be.width,"px")),H&&D.setAttribute("style","max-width: ".concat(Be.width,"px;"))}else b.parentNode.style.maxWidth="".concat(me),H&&D.setAttribute("style","max-width: ".concat(me,";"))}}}}},{key:"reload",value:function(){this.init()}},{key:"updateNavigationClasses",value:function(){var d=this.loop();g(this.nextButton,"disabled"),g(this.prevButton,"disabled"),this.index==0&&this.elements.length-1==0?(v(this.prevButton,"disabled"),v(this.nextButton,"disabled")):this.index!==0||d?this.index!==this.elements.length-1||d||v(this.nextButton,"disabled"):v(this.prevButton,"disabled")}},{key:"loop",value:function(){var d=q(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return d=q(this.settings,"loop")?this.settings.loop:d,d}},{key:"close",value:function(){var d=this;if(!this.lightboxOpen){if(this.events){for(var m in this.events)this.events.hasOwnProperty(m)&&this.events[m].destroy();this.events=null}return!1}if(this.closing)return!1;this.closing=!0,this.slidePlayerPause(this.activeSlide),this.fullElementsList&&(this.elements=this.fullElementsList),this.bodyHiddenChildElms.length&&u(this.bodyHiddenChildElms,function(b){b.removeAttribute("aria-hidden")}),v(this.modal,"glightbox-closing"),f(this.overlay,this.settings.openEffect=="none"?"none":this.settings.cssEfects.fade.out),f(this.activeSlide,this.settings.cssEfects[this.settings.closeEffect].out,function(){if(d.activeSlide=null,d.prevActiveSlideIndex=null,d.prevActiveSlide=null,d.built=!1,d.events){for(var b in d.events)d.events.hasOwnProperty(b)&&d.events[b].destroy();d.events=null}var A=document.body;g(De,"glightbox-open"),g(A,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),d.modal.parentNode.removeChild(d.modal),d.trigger("close"),T(d.settings.onClose)&&d.settings.onClose();var D=document.querySelector(".gcss-styles");D&&D.parentNode.removeChild(D),d.lightboxOpen=!1,d.closing=null})}},{key:"destroy",value:function(){this.close(),this.clearAllEvents(),this.baseEvents&&this.baseEvents.destroy()}},{key:"on",value:function(d,m){var b=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(!d||!T(m))throw new TypeError("Event name and callback must be defined");this.apiEvents.push({evt:d,once:b,callback:m})}},{key:"once",value:function(d,m){this.on(d,m,!0)}},{key:"trigger",value:function(d){var m=this,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,A=[];u(this.apiEvents,function(D,O){var G=D.evt,H=D.once,ee=D.callback;G==d&&(ee(b),H&&A.push(O))}),A.length&&u(A,function(D){return m.apiEvents.splice(D,1)})}},{key:"clearAllEvents",value:function(){this.apiEvents.splice(0,this.apiEvents.length)}},{key:"version",value:function(){return"3.3.1"}}]);return function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=new st(d);return m.init(),m}})}(Pr)),Pr.exports}var JS=ZS();const QS=gl(JS);var Qo={exports:{}},ea={exports:{}},Ir={exports:{}},eT=Ir.exports,wu;function Th(){return wu||(wu=1,function(i){(function(e,t){i.exports?i.exports=t():e.EvEmitter=t()})(typeof window<"u"?window:eT,function(){function e(){}var t=e.prototype;return t.on=function(n,s){if(!(!n||!s)){var r=this._events=this._events||{},o=r[n]=r[n]||[];return o.indexOf(s)==-1&&o.push(s),this}},t.once=function(n,s){if(!(!n||!s)){this.on(n,s);var r=this._onceEvents=this._onceEvents||{},o=r[n]=r[n]||{};return o[s]=!0,this}},t.off=function(n,s){var r=this._events&&this._events[n];if(!(!r||!r.length)){var o=r.indexOf(s);return o!=-1&&r.splice(o,1),this}},t.emitEvent=function(n,s){var r=this._events&&this._events[n];if(!(!r||!r.length)){r=r.slice(0),s=s||[];for(var o=this._onceEvents&&this._onceEvents[n],a=0;a<r.length;a++){var c=r[a],u=o&&o[c];u&&(this.off(n,c),delete o[c]),c.apply(this,s)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e})}(Ir)),Ir.exports}var ta={exports:{}};/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */var Au;function Vs(){return Au||(Au=1,function(i){(function(e,t){i.exports?i.exports=t():e.getSize=t()})(window,function(){function t(g){var x=parseFloat(g),S=g.indexOf("%")==-1&&!isNaN(x);return S&&x}function n(){}var s=typeof console>"u"?n:function(g){console.error(g)},r=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],o=r.length;function a(){for(var g={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},x=0;x<o;x++){var S=r[x];g[S]=0}return g}function c(g){var x=getComputedStyle(g);return x||s("Style returned "+x+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),x}var u=!1,h;function p(){if(!u){u=!0;var g=document.createElement("div");g.style.width="200px",g.style.padding="1px 2px 3px 4px",g.style.borderStyle="solid",g.style.borderWidth="1px 2px 3px 4px",g.style.boxSizing="border-box";var x=document.body||document.documentElement;x.appendChild(g);var S=c(g);h=Math.round(t(S.width))==200,v.isBoxSizeOuter=h,x.removeChild(g)}}function v(g){if(p(),typeof g=="string"&&(g=document.querySelector(g)),!(!g||typeof g!="object"||!g.nodeType)){var x=c(g);if(x.display=="none")return a();var S={};S.width=g.offsetWidth,S.height=g.offsetHeight;for(var f=S.isBorderBox=x.boxSizing=="border-box",l=0;l<o;l++){var _=r[l],y=x[_],E=parseFloat(y);S[_]=isNaN(E)?0:E}var M=S.paddingLeft+S.paddingRight,C=S.paddingTop+S.paddingBottom,L=S.marginLeft+S.marginRight,I=S.marginTop+S.marginBottom,w=S.borderLeftWidth+S.borderRightWidth,T=S.borderTopWidth+S.borderBottomWidth,P=f&&h,N=t(x.width);N!==!1&&(S.width=N+(P?0:M+w));var U=t(x.height);return U!==!1&&(S.height=U+(P?0:C+T)),S.innerWidth=S.width-(M+w),S.innerHeight=S.height-(C+T),S.outerWidth=S.width+L,S.outerHeight=S.height+I,S}}return v})}(ta)),ta.exports}var na={exports:{}},ia={exports:{}},Cu;function bh(){return Cu||(Cu=1,function(i){(function(e,t){i.exports?i.exports=t():e.matchesSelector=t()})(window,function(){var t=function(){var n=window.Element.prototype;if(n.matches)return"matches";if(n.matchesSelector)return"matchesSelector";for(var s=["webkit","moz","ms","o"],r=0;r<s.length;r++){var o=s[r],a=o+"MatchesSelector";if(n[a])return a}}();return function(s,r){return s[t](r)}})}(ia)),ia.exports}var Ru;function Mh(){return Ru||(Ru=1,function(i){(function(e,t){i.exports?i.exports=t(e,bh()):e.fizzyUIUtils=t(e,e.matchesSelector)})(window,function(t,n){var s={};s.extend=function(a,c){for(var u in c)a[u]=c[u];return a},s.modulo=function(a,c){return(a%c+c)%c};var r=Array.prototype.slice;s.makeArray=function(a){if(Array.isArray(a))return a;if(a==null)return[];var c=typeof a=="object"&&typeof a.length=="number";return c?r.call(a):[a]},s.removeFrom=function(a,c){var u=a.indexOf(c);u!=-1&&a.splice(u,1)},s.getParent=function(a,c){for(;a.parentNode&&a!=document.body;)if(a=a.parentNode,n(a,c))return a},s.getQueryElement=function(a){return typeof a=="string"?document.querySelector(a):a},s.handleEvent=function(a){var c="on"+a.type;this[c]&&this[c](a)},s.filterFindElements=function(a,c){a=s.makeArray(a);var u=[];return a.forEach(function(h){if(h instanceof HTMLElement){if(!c){u.push(h);return}n(h,c)&&u.push(h);for(var p=h.querySelectorAll(c),v=0;v<p.length;v++)u.push(p[v])}}),u},s.debounceMethod=function(a,c,u){u=u||100;var h=a.prototype[c],p=c+"Timeout";a.prototype[c]=function(){var v=this[p];clearTimeout(v);var g=arguments,x=this;this[p]=setTimeout(function(){h.apply(x,g),delete x[p]},u)}},s.docReady=function(a){var c=document.readyState;c=="complete"||c=="interactive"?setTimeout(a):document.addEventListener("DOMContentLoaded",a)},s.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(c,u,h){return u+"-"+h}).toLowerCase()};var o=t.console;return s.htmlInit=function(a,c){s.docReady(function(){var u=s.toDashed(c),h="data-"+u,p=document.querySelectorAll("["+h+"]"),v=document.querySelectorAll(".js-"+u),g=s.makeArray(p).concat(s.makeArray(v)),x=h+"-options",S=t.jQuery;g.forEach(function(f){var l=f.getAttribute(h)||f.getAttribute(x),_;try{_=l&&JSON.parse(l)}catch(E){o&&o.error("Error parsing "+h+" on "+f.className+": "+E);return}var y=new a(f,_);S&&S.data(f,c,y)})})},s})}(na)),na.exports}var sa={exports:{}},Lu;function tT(){return Lu||(Lu=1,function(i){(function(e,t){i.exports?i.exports=t(Th(),Vs()):(e.Outlayer={},e.Outlayer.Item=t(e.EvEmitter,e.getSize))})(window,function(t,n){function s(f){for(var l in f)return!1;return l=null,!0}var r=document.documentElement.style,o=typeof r.transition=="string"?"transition":"WebkitTransition",a=typeof r.transform=="string"?"transform":"WebkitTransform",c={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],u={transform:a,transition:o,transitionDuration:o+"Duration",transitionProperty:o+"Property",transitionDelay:o+"Delay"};function h(f,l){f&&(this.element=f,this.layout=l,this.position={x:0,y:0},this._create())}var p=h.prototype=Object.create(t.prototype);p.constructor=h,p._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},p.handleEvent=function(f){var l="on"+f.type;this[l]&&this[l](f)},p.getSize=function(){this.size=n(this.element)},p.css=function(f){var l=this.element.style;for(var _ in f){var y=u[_]||_;l[y]=f[_]}},p.getPosition=function(){var f=getComputedStyle(this.element),l=this.layout._getOption("originLeft"),_=this.layout._getOption("originTop"),y=f[l?"left":"right"],E=f[_?"top":"bottom"],M=parseFloat(y),C=parseFloat(E),L=this.layout.size;y.indexOf("%")!=-1&&(M=M/100*L.width),E.indexOf("%")!=-1&&(C=C/100*L.height),M=isNaN(M)?0:M,C=isNaN(C)?0:C,M-=l?L.paddingLeft:L.paddingRight,C-=_?L.paddingTop:L.paddingBottom,this.position.x=M,this.position.y=C},p.layoutPosition=function(){var f=this.layout.size,l={},_=this.layout._getOption("originLeft"),y=this.layout._getOption("originTop"),E=_?"paddingLeft":"paddingRight",M=_?"left":"right",C=_?"right":"left",L=this.position.x+f[E];l[M]=this.getXValue(L),l[C]="";var I=y?"paddingTop":"paddingBottom",w=y?"top":"bottom",T=y?"bottom":"top",P=this.position.y+f[I];l[w]=this.getYValue(P),l[T]="",this.css(l),this.emitEvent("layout",[this])},p.getXValue=function(f){var l=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!l?f/this.layout.size.width*100+"%":f+"px"},p.getYValue=function(f){var l=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&l?f/this.layout.size.height*100+"%":f+"px"},p._transitionTo=function(f,l){this.getPosition();var _=this.position.x,y=this.position.y,E=f==this.position.x&&l==this.position.y;if(this.setPosition(f,l),E&&!this.isTransitioning){this.layoutPosition();return}var M=f-_,C=l-y,L={};L.transform=this.getTranslate(M,C),this.transition({to:L,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},p.getTranslate=function(f,l){var _=this.layout._getOption("originLeft"),y=this.layout._getOption("originTop");return f=_?f:-f,l=y?l:-l,"translate3d("+f+"px, "+l+"px, 0)"},p.goTo=function(f,l){this.setPosition(f,l),this.layoutPosition()},p.moveTo=p._transitionTo,p.setPosition=function(f,l){this.position.x=parseFloat(f),this.position.y=parseFloat(l)},p._nonTransition=function(f){this.css(f.to),f.isCleaning&&this._removeStyles(f.to);for(var l in f.onTransitionEnd)f.onTransitionEnd[l].call(this)},p.transition=function(f){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(f);return}var l=this._transn;for(var _ in f.onTransitionEnd)l.onEnd[_]=f.onTransitionEnd[_];for(_ in f.to)l.ingProperties[_]=!0,f.isCleaning&&(l.clean[_]=!0);f.from&&(this.css(f.from),this.element.offsetHeight),this.enableTransition(f.to),this.css(f.to),this.isTransitioning=!0};function v(f){return f.replace(/([A-Z])/g,function(l){return"-"+l.toLowerCase()})}var g="opacity,"+v(a);p.enableTransition=function(){if(!this.isTransitioning){var f=this.layout.options.transitionDuration;f=typeof f=="number"?f+"ms":f,this.css({transitionProperty:g,transitionDuration:f,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(c,this,!1)}},p.onwebkitTransitionEnd=function(f){this.ontransitionend(f)},p.onotransitionend=function(f){this.ontransitionend(f)};var x={"-webkit-transform":"transform"};p.ontransitionend=function(f){if(f.target===this.element){var l=this._transn,_=x[f.propertyName]||f.propertyName;if(delete l.ingProperties[_],s(l.ingProperties)&&this.disableTransition(),_ in l.clean&&(this.element.style[f.propertyName]="",delete l.clean[_]),_ in l.onEnd){var y=l.onEnd[_];y.call(this),delete l.onEnd[_]}this.emitEvent("transitionEnd",[this])}},p.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},p._removeStyles=function(f){var l={};for(var _ in f)l[_]="";this.css(l)};var S={transitionProperty:"",transitionDuration:"",transitionDelay:""};return p.removeTransitionStyles=function(){this.css(S)},p.stagger=function(f){f=isNaN(f)?0:f,this.staggerDelay=f+"ms"},p.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},p.remove=function(){if(!o||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}this.once("transitionEnd",function(){this.removeElem()}),this.hide()},p.reveal=function(){delete this.isHidden,this.css({display:""});var f=this.layout.options,l={},_=this.getHideRevealTransitionEndProperty("visibleStyle");l[_]=this.onRevealTransitionEnd,this.transition({from:f.hiddenStyle,to:f.visibleStyle,isCleaning:!0,onTransitionEnd:l})},p.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},p.getHideRevealTransitionEndProperty=function(f){var l=this.layout.options[f];if(l.opacity)return"opacity";for(var _ in l)return _},p.hide=function(){this.isHidden=!0,this.css({display:""});var f=this.layout.options,l={},_=this.getHideRevealTransitionEndProperty("hiddenStyle");l[_]=this.onHideTransitionEnd,this.transition({from:f.visibleStyle,to:f.hiddenStyle,isCleaning:!0,onTransitionEnd:l})},p.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},p.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},h})}(sa)),sa.exports}/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */var Pu;function no(){return Pu||(Pu=1,function(i){(function(e,t){i.exports?i.exports=t(e,Th(),Vs(),Mh(),tT()):e.Outlayer=t(e,e.EvEmitter,e.getSize,e.fizzyUIUtils,e.Outlayer.Item)})(window,function(t,n,s,r,o){var a=t.console,c=t.jQuery,u=function(){},h=0,p={};function v(l,_){var y=r.getQueryElement(l);if(!y){a&&a.error("Bad element for "+this.constructor.namespace+": "+(y||l));return}this.element=y,c&&(this.$element=c(this.element)),this.options=r.extend({},this.constructor.defaults),this.option(_);var E=++h;this.element.outlayerGUID=E,p[E]=this,this._create();var M=this._getOption("initLayout");M&&this.layout()}v.namespace="outlayer",v.Item=o,v.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var g=v.prototype;r.extend(g,n.prototype),g.option=function(l){r.extend(this.options,l)},g._getOption=function(l){var _=this.constructor.compatOptions[l];return _&&this.options[_]!==void 0?this.options[_]:this.options[l]},v.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},g._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),r.extend(this.element.style,this.options.containerStyle);var l=this._getOption("resize");l&&this.bindResize()},g.reloadItems=function(){this.items=this._itemize(this.element.children)},g._itemize=function(l){for(var _=this._filterFindItemElements(l),y=this.constructor.Item,E=[],M=0;M<_.length;M++){var C=_[M],L=new y(C,this);E.push(L)}return E},g._filterFindItemElements=function(l){return r.filterFindElements(l,this.options.itemSelector)},g.getItemElements=function(){return this.items.map(function(l){return l.element})},g.layout=function(){this._resetLayout(),this._manageStamps();var l=this._getOption("layoutInstant"),_=l!==void 0?l:!this._isLayoutInited;this.layoutItems(this.items,_),this._isLayoutInited=!0},g._init=g.layout,g._resetLayout=function(){this.getSize()},g.getSize=function(){this.size=s(this.element)},g._getMeasurement=function(l,_){var y=this.options[l],E;y?(typeof y=="string"?E=this.element.querySelector(y):y instanceof HTMLElement&&(E=y),this[l]=E?s(E)[_]:y):this[l]=0},g.layoutItems=function(l,_){l=this._getItemsForLayout(l),this._layoutItems(l,_),this._postLayout()},g._getItemsForLayout=function(l){return l.filter(function(_){return!_.isIgnored})},g._layoutItems=function(l,_){if(this._emitCompleteOnItems("layout",l),!(!l||!l.length)){var y=[];l.forEach(function(E){var M=this._getItemLayoutPosition(E);M.item=E,M.isInstant=_||E.isLayoutInstant,y.push(M)},this),this._processLayoutQueue(y)}},g._getItemLayoutPosition=function(){return{x:0,y:0}},g._processLayoutQueue=function(l){this.updateStagger(),l.forEach(function(_,y){this._positionItem(_.item,_.x,_.y,_.isInstant,y)},this)},g.updateStagger=function(){var l=this.options.stagger;if(l==null){this.stagger=0;return}return this.stagger=f(l),this.stagger},g._positionItem=function(l,_,y,E,M){E?l.goTo(_,y):(l.stagger(M*this.stagger),l.moveTo(_,y))},g._postLayout=function(){this.resizeContainer()},g.resizeContainer=function(){var l=this._getOption("resizeContainer");if(l){var _=this._getContainerSize();_&&(this._setContainerMeasure(_.width,!0),this._setContainerMeasure(_.height,!1))}},g._getContainerSize=u,g._setContainerMeasure=function(l,_){if(l!==void 0){var y=this.size;y.isBorderBox&&(l+=_?y.paddingLeft+y.paddingRight+y.borderLeftWidth+y.borderRightWidth:y.paddingBottom+y.paddingTop+y.borderTopWidth+y.borderBottomWidth),l=Math.max(l,0),this.element.style[_?"width":"height"]=l+"px"}},g._emitCompleteOnItems=function(l,_){var y=this;function E(){y.dispatchEvent(l+"Complete",null,[_])}var M=_.length;if(!_||!M){E();return}var C=0;function L(){C++,C==M&&E()}_.forEach(function(I){I.once(l,L)})},g.dispatchEvent=function(l,_,y){var E=_?[_].concat(y):y;if(this.emitEvent(l,E),c)if(this.$element=this.$element||c(this.element),_){var M=c.Event(_);M.type=l,this.$element.trigger(M,y)}else this.$element.trigger(l,y)},g.ignore=function(l){var _=this.getItem(l);_&&(_.isIgnored=!0)},g.unignore=function(l){var _=this.getItem(l);_&&delete _.isIgnored},g.stamp=function(l){l=this._find(l),l&&(this.stamps=this.stamps.concat(l),l.forEach(this.ignore,this))},g.unstamp=function(l){l=this._find(l),l&&l.forEach(function(_){r.removeFrom(this.stamps,_),this.unignore(_)},this)},g._find=function(l){if(l)return typeof l=="string"&&(l=this.element.querySelectorAll(l)),l=r.makeArray(l),l},g._manageStamps=function(){!this.stamps||!this.stamps.length||(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},g._getBoundingRect=function(){var l=this.element.getBoundingClientRect(),_=this.size;this._boundingRect={left:l.left+_.paddingLeft+_.borderLeftWidth,top:l.top+_.paddingTop+_.borderTopWidth,right:l.right-(_.paddingRight+_.borderRightWidth),bottom:l.bottom-(_.paddingBottom+_.borderBottomWidth)}},g._manageStamp=u,g._getElementOffset=function(l){var _=l.getBoundingClientRect(),y=this._boundingRect,E=s(l),M={left:_.left-y.left-E.marginLeft,top:_.top-y.top-E.marginTop,right:y.right-_.right-E.marginRight,bottom:y.bottom-_.bottom-E.marginBottom};return M},g.handleEvent=r.handleEvent,g.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},g.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},g.onresize=function(){this.resize()},r.debounceMethod(v,"onresize",100),g.resize=function(){!this.isResizeBound||!this.needsResizeLayout()||this.layout()},g.needsResizeLayout=function(){var l=s(this.element),_=this.size&&l;return _&&l.innerWidth!==this.size.innerWidth},g.addItems=function(l){var _=this._itemize(l);return _.length&&(this.items=this.items.concat(_)),_},g.appended=function(l){var _=this.addItems(l);_.length&&(this.layoutItems(_,!0),this.reveal(_))},g.prepended=function(l){var _=this._itemize(l);if(_.length){var y=this.items.slice(0);this.items=_.concat(y),this._resetLayout(),this._manageStamps(),this.layoutItems(_,!0),this.reveal(_),this.layoutItems(y)}},g.reveal=function(l){if(this._emitCompleteOnItems("reveal",l),!(!l||!l.length)){var _=this.updateStagger();l.forEach(function(y,E){y.stagger(E*_),y.reveal()})}},g.hide=function(l){if(this._emitCompleteOnItems("hide",l),!(!l||!l.length)){var _=this.updateStagger();l.forEach(function(y,E){y.stagger(E*_),y.hide()})}},g.revealItemElements=function(l){var _=this.getItems(l);this.reveal(_)},g.hideItemElements=function(l){var _=this.getItems(l);this.hide(_)},g.getItem=function(l){for(var _=0;_<this.items.length;_++){var y=this.items[_];if(y.element==l)return y}},g.getItems=function(l){l=r.makeArray(l);var _=[];return l.forEach(function(y){var E=this.getItem(y);E&&_.push(E)},this),_},g.remove=function(l){var _=this.getItems(l);this._emitCompleteOnItems("remove",_),!(!_||!_.length)&&_.forEach(function(y){y.remove(),r.removeFrom(this.items,y)},this)},g.destroy=function(){var l=this.element.style;l.height="",l.position="",l.width="",this.items.forEach(function(y){y.destroy()}),this.unbindResize();var _=this.element.outlayerGUID;delete p[_],delete this.element.outlayerGUID,c&&c.removeData(this.element,this.constructor.namespace)},v.data=function(l){l=r.getQueryElement(l);var _=l&&l.outlayerGUID;return _&&p[_]},v.create=function(l,_){var y=x(v);return y.defaults=r.extend({},v.defaults),r.extend(y.defaults,_),y.compatOptions=r.extend({},v.compatOptions),y.namespace=l,y.data=v.data,y.Item=x(o),r.htmlInit(y,l),c&&c.bridget&&c.bridget(l,y),y};function x(l){function _(){l.apply(this,arguments)}return _.prototype=Object.create(l.prototype),_.prototype.constructor=_,_}var S={ms:1,s:1e3};function f(l){if(typeof l=="number")return l;var _=l.match(/(^\d*\.?\d*)(\w*)/),y=_&&_[1],E=_&&_[2];if(!y.length)return 0;y=parseFloat(y);var M=S[E]||1;return y*M}return v.Item=o,v})}(ea)),ea.exports}var ra={exports:{}},Iu;function nT(){return Iu||(Iu=1,function(i){(function(e,t){i.exports?i.exports=t(no()):(e.Isotope=e.Isotope||{},e.Isotope.Item=t(e.Outlayer))})(window,function(t){function n(){t.Item.apply(this,arguments)}var s=n.prototype=Object.create(t.Item.prototype),r=s._create;s._create=function(){this.id=this.layout.itemGUID++,r.call(this),this.sortData={}},s.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,c=this.layout._sorters;for(var u in a){var h=c[u];this.sortData[u]=h(this.element,this)}}};var o=s.destroy;return s.destroy=function(){o.apply(this,arguments),this.css({display:""})},n})}(ra)),ra.exports}var oa={exports:{}},Du;function io(){return Du||(Du=1,function(i){(function(e,t){i.exports?i.exports=t(Vs(),no()):(e.Isotope=e.Isotope||{},e.Isotope.LayoutMode=t(e.getSize,e.Outlayer))})(window,function(t,n){function s(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}var r=s.prototype,o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return o.forEach(function(a){r[a]=function(){return n.prototype[a].apply(this.isotope,arguments)}}),r.needsVerticalResizeLayout=function(){var a=t(this.isotope.element),c=this.isotope.size&&a;return c&&a.innerHeight!=this.isotope.size.innerHeight},r._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},r.getColumnWidth=function(){this.getSegmentSize("column","Width")},r.getRowHeight=function(){this.getSegmentSize("row","Height")},r.getSegmentSize=function(a,c){var u=a+c,h="outer"+c;if(this._getMeasurement(u,h),!this[u]){var p=this.getFirstItemSize();this[u]=p&&p[h]||this.isotope.size["inner"+c]}},r.getFirstItemSize=function(){var a=this.isotope.filteredItems[0];return a&&a.element&&t(a.element)},r.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},r.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},s.modes={},s.create=function(a,c){function u(){s.apply(this,arguments)}return u.prototype=Object.create(r),u.prototype.constructor=u,c&&(u.options=c),u.prototype.namespace=a,s.modes[a]=u,u},s})}(oa)),oa.exports}var aa={exports:{}},la={exports:{}};/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */var Ou;function iT(){return Ou||(Ou=1,function(i){(function(e,t){i.exports?i.exports=t(no(),Vs()):e.Masonry=t(e.Outlayer,e.getSize)})(window,function(t,n){var s=t.create("masonry");s.compatOptions.fitWidth="isFitWidth";var r=s.prototype;return r._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var o=0;o<this.cols;o++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},r.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var o=this.items[0],a=o&&o.element;this.columnWidth=a&&n(a).outerWidth||this.containerWidth}var c=this.columnWidth+=this.gutter,u=this.containerWidth+this.gutter,h=u/c,p=c-u%c,v=p&&p<1?"round":"floor";h=Math[v](h),this.cols=Math.max(h,1)},r.getContainerWidth=function(){var o=this._getOption("fitWidth"),a=o?this.element.parentNode:this.element,c=n(a);this.containerWidth=c&&c.innerWidth},r._getItemLayoutPosition=function(o){o.getSize();var a=o.size.outerWidth%this.columnWidth,c=a&&a<1?"round":"ceil",u=Math[c](o.size.outerWidth/this.columnWidth);u=Math.min(u,this.cols);for(var h=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",p=this[h](u,o),v={x:this.columnWidth*p.col,y:p.y},g=p.y+o.size.outerHeight,x=u+p.col,S=p.col;S<x;S++)this.colYs[S]=g;return v},r._getTopColPosition=function(o){var a=this._getTopColGroup(o),c=Math.min.apply(Math,a);return{col:a.indexOf(c),y:c}},r._getTopColGroup=function(o){if(o<2)return this.colYs;for(var a=[],c=this.cols+1-o,u=0;u<c;u++)a[u]=this._getColGroupY(u,o);return a},r._getColGroupY=function(o,a){if(a<2)return this.colYs[o];var c=this.colYs.slice(o,o+a);return Math.max.apply(Math,c)},r._getHorizontalColPosition=function(o,a){var c=this.horizontalColIndex%this.cols,u=o>1&&c+o>this.cols;c=u?0:c;var h=a.size.outerWidth&&a.size.outerHeight;return this.horizontalColIndex=h?c+o:this.horizontalColIndex,{col:c,y:this._getColGroupY(c,o)}},r._manageStamp=function(o){var a=n(o),c=this._getElementOffset(o),u=this._getOption("originLeft"),h=u?c.left:c.right,p=h+a.outerWidth,v=Math.floor(h/this.columnWidth);v=Math.max(0,v);var g=Math.floor(p/this.columnWidth);g-=p%this.columnWidth?0:1,g=Math.min(this.cols-1,g);for(var x=this._getOption("originTop"),S=(x?c.top:c.bottom)+a.outerHeight,f=v;f<=g;f++)this.colYs[f]=Math.max(S,this.colYs[f])},r._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var o={height:this.maxY};return this._getOption("fitWidth")&&(o.width=this._getContainerFitWidth()),o},r._getContainerFitWidth=function(){for(var o=0,a=this.cols;--a&&this.colYs[a]===0;)o++;return(this.cols-o)*this.columnWidth-this.gutter},r.needsResizeLayout=function(){var o=this.containerWidth;return this.getContainerWidth(),o!=this.containerWidth},s})}(la)),la.exports}/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */var Nu;function sT(){return Nu||(Nu=1,function(i){(function(e,t){i.exports?i.exports=t(io(),iT()):t(e.Isotope.LayoutMode,e.Masonry)})(window,function(t,n){var s=t.create("masonry"),r=s.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var a in n.prototype)o[a]||(r[a]=n.prototype[a]);var c=r.measureColumns;r.measureColumns=function(){this.items=this.isotope.filteredItems,c.call(this)};var u=r._getOption;return r._getOption=function(h){return h=="fitWidth"?this.options.isFitWidth!==void 0?this.options.isFitWidth:this.options.fitWidth:u.apply(this.isotope,arguments)},s})}(aa)),aa.exports}var ca={exports:{}},Uu;function rT(){return Uu||(Uu=1,function(i,e){(function(t,n){i.exports=n(io())})(window,function(n){var s=n.create("fitRows"),r=s.prototype;return r._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},r._getItemLayoutPosition=function(o){o.getSize();var a=o.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;this.x!==0&&a+this.x>c&&(this.x=0,this.y=this.maxY);var u={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+o.size.outerHeight),this.x+=a,u},r._getContainerSize=function(){return{height:this.maxY}},s})}(ca)),ca.exports}var ua={exports:{}},Fu;function oT(){return Fu||(Fu=1,function(i){(function(e,t){i.exports?i.exports=t(io()):t(e.Isotope.LayoutMode)})(window,function(t){var n=t.create("vertical",{horizontalAlignment:0}),s=n.prototype;return s._resetLayout=function(){this.y=0},s._getItemLayoutPosition=function(r){r.getSize();var o=(this.isotope.size.innerWidth-r.size.outerWidth)*this.options.horizontalAlignment,a=this.y;return this.y+=r.size.outerHeight,{x:o,y:a}},s._getContainerSize=function(){return{height:this.y}},n})}(ua)),ua.exports}/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */var Bu;function aT(){return Bu||(Bu=1,function(i){(function(e,t){i.exports?i.exports=t(e,no(),Vs(),bh(),Mh(),nT(),io(),sT(),rT(),oT()):e.Isotope=t(e,e.Outlayer,e.getSize,e.matchesSelector,e.fizzyUIUtils,e.Isotope.Item,e.Isotope.LayoutMode)})(window,function(t,n,s,r,o,a,c){var u=t.jQuery,h=String.prototype.trim?function(f){return f.trim()}:function(f){return f.replace(/^\s+|\s+$/g,"")},p=n.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});p.Item=a,p.LayoutMode=c;var v=p.prototype;v._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),n.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var f in c.modes)this._initLayoutMode(f)},v.reloadItems=function(){this.itemGUID=0,n.prototype.reloadItems.call(this)},v._itemize=function(){for(var f=n.prototype._itemize.apply(this,arguments),l=0;l<f.length;l++){var _=f[l];_.id=this.itemGUID++}return this._updateItemsSortData(f),f},v._initLayoutMode=function(f){var l=c.modes[f],_=this.options[f]||{};this.options[f]=l.options?o.extend(l.options,_):_,this.modes[f]=new l(this)},v.layout=function(){if(!this._isLayoutInited&&this._getOption("initLayout")){this.arrange();return}this._layout()},v._layout=function(){var f=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,f),this._isLayoutInited=!0},v.arrange=function(f){this.option(f),this._getIsInstant();var l=this._filter(this.items);this.filteredItems=l.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[l]):this._hideReveal(l),this._sort(),this._layout()},v._init=v.arrange,v._hideReveal=function(f){this.reveal(f.needReveal),this.hide(f.needHide)},v._getIsInstant=function(){var f=this._getOption("layoutInstant"),l=f!==void 0?f:!this._isLayoutInited;return this._isInstant=l,l},v._bindArrangeComplete=function(){var f,l,_,y=this;function E(){f&&l&&_&&y.dispatchEvent("arrangeComplete",null,[y.filteredItems])}this.once("layoutComplete",function(){f=!0,E()}),this.once("hideComplete",function(){l=!0,E()}),this.once("revealComplete",function(){_=!0,E()})},v._filter=function(f){var l=this.options.filter;l=l||"*";for(var _=[],y=[],E=[],M=this._getFilterTest(l),C=0;C<f.length;C++){var L=f[C];if(!L.isIgnored){var I=M(L);I&&_.push(L),I&&L.isHidden?y.push(L):!I&&!L.isHidden&&E.push(L)}}return{matches:_,needReveal:y,needHide:E}},v._getFilterTest=function(f){return u&&this.options.isJQueryFiltering?function(l){return u(l.element).is(f)}:typeof f=="function"?function(l){return f(l.element)}:function(l){return r(l.element,f)}},v.updateSortData=function(f){var l;f?(f=o.makeArray(f),l=this.getItems(f)):l=this.items,this._getSorters(),this._updateItemsSortData(l)},v._getSorters=function(){var f=this.options.getSortData;for(var l in f){var _=f[l];this._sorters[l]=g(_)}},v._updateItemsSortData=function(f){for(var l=f&&f.length,_=0;l&&_<l;_++){var y=f[_];y.updateSortData()}};var g=function(){function f(_){if(typeof _!="string")return _;var y=h(_).split(" "),E=y[0],M=E.match(/^\[(.+)\]$/),C=M&&M[1],L=l(C,E),I=p.sortDataParsers[y[1]];return _=I?function(w){return w&&I(L(w))}:function(w){return w&&L(w)},_}function l(_,y){return _?function(M){return M.getAttribute(_)}:function(M){var C=M.querySelector(y);return C&&C.textContent}}return f}();p.sortDataParsers={parseInt:function(f){return parseInt(f,10)},parseFloat:function(f){return parseFloat(f)}},v._sort=function(){if(this.options.sortBy){var f=o.makeArray(this.options.sortBy);this._getIsSameSortBy(f)||(this.sortHistory=f.concat(this.sortHistory));var l=x(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(l)}},v._getIsSameSortBy=function(f){for(var l=0;l<f.length;l++)if(f[l]!=this.sortHistory[l])return!1;return!0};function x(f,l){return function(y,E){for(var M=0;M<f.length;M++){var C=f[M],L=y.sortData[C],I=E.sortData[C];if(L>I||L<I){var w=l[C]!==void 0?l[C]:l,T=w?1:-1;return(L>I?1:-1)*T}}return 0}}v._mode=function(){var f=this.options.layoutMode,l=this.modes[f];if(!l)throw new Error("No layout mode: "+f);return l.options=this.options[f],l},v._resetLayout=function(){n.prototype._resetLayout.call(this),this._mode()._resetLayout()},v._getItemLayoutPosition=function(f){return this._mode()._getItemLayoutPosition(f)},v._manageStamp=function(f){this._mode()._manageStamp(f)},v._getContainerSize=function(){return this._mode()._getContainerSize()},v.needsResizeLayout=function(){return this._mode().needsResizeLayout()},v.appended=function(f){var l=this.addItems(f);if(l.length){var _=this._filterRevealAdded(l);this.filteredItems=this.filteredItems.concat(_)}},v.prepended=function(f){var l=this._itemize(f);if(l.length){this._resetLayout(),this._manageStamps();var _=this._filterRevealAdded(l);this.layoutItems(this.filteredItems),this.filteredItems=_.concat(this.filteredItems),this.items=l.concat(this.items)}},v._filterRevealAdded=function(f){var l=this._filter(f);return this.hide(l.needHide),this.reveal(l.matches),this.layoutItems(l.matches,!0),l.matches},v.insert=function(f){var l=this.addItems(f);if(l.length){var _,y,E=l.length;for(_=0;_<E;_++)y=l[_],this.element.appendChild(y.element);var M=this._filter(l).matches;for(_=0;_<E;_++)l[_].isLayoutInstant=!0;for(this.arrange(),_=0;_<E;_++)delete l[_].isLayoutInstant;this.reveal(M)}};var S=v.remove;return v.remove=function(f){f=o.makeArray(f);var l=this.getItems(f);S.call(this,f);for(var _=l&&l.length,y=0;_&&y<_;y++){var E=l[y];o.removeFrom(this.filteredItems,E)}},v.shuffle=function(){for(var f=0;f<this.items.length;f++){var l=this.items[f];l.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},v._noTransition=function(f,l){var _=this.options.transitionDuration;this.options.transitionDuration=0;var y=f.apply(this,l);return this.options.transitionDuration=_,y},v.getFilteredItemElements=function(){return this.filteredItems.map(function(f){return f.element})},p})}(Qo)),Qo.exports}var lT=aT();const cT=gl(lT);function zu(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function ql(i,e){i===void 0&&(i={}),e===void 0&&(e={});const t=["__proto__","constructor","prototype"];Object.keys(e).filter(n=>t.indexOf(n)<0).forEach(n=>{typeof i[n]>"u"?i[n]=e[n]:zu(e[n])&&zu(i[n])&&Object.keys(e[n]).length>0&&ql(i[n],e[n])})}const wh={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function mn(){const i=typeof document<"u"?document:{};return ql(i,wh),i}const uT={document:wh,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function Tt(){const i=typeof window<"u"?window:{};return ql(i,uT),i}function dT(i){return i===void 0&&(i=""),i.trim().split(" ").filter(e=>!!e.trim())}function hT(i){const e=i;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Ah(i,e){return e===void 0&&(e=0),setTimeout(i,e)}function Hr(){return Date.now()}function fT(i){const e=Tt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(i,null)),!t&&i.currentStyle&&(t=i.currentStyle),t||(t=i.style),t}function pT(i,e){e===void 0&&(e="x");const t=Tt();let n,s,r;const o=fT(i);return t.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(a=>a.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(s==="none"?"":s)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?s=r.m41:n.length===16?s=parseFloat(n[12]):s=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?s=r.m42:n.length===16?s=parseFloat(n[13]):s=parseFloat(n[5])),s||0}function xr(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function mT(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function Ut(){const i=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const n=t<0||arguments.length<=t?void 0:arguments[t];if(n!=null&&!mT(n)){const s=Object.keys(Object(n)).filter(r=>e.indexOf(r)<0);for(let r=0,o=s.length;r<o;r+=1){const a=s[r],c=Object.getOwnPropertyDescriptor(n,a);c!==void 0&&c.enumerable&&(xr(i[a])&&xr(n[a])?n[a].__swiper__?i[a]=n[a]:Ut(i[a],n[a]):!xr(i[a])&&xr(n[a])?(i[a]={},n[a].__swiper__?i[a]=n[a]:Ut(i[a],n[a])):i[a]=n[a])}}}return i}function Er(i,e,t){i.style.setProperty(e,t)}function Ch(i){let{swiper:e,targetPosition:t,side:n}=i;const s=Tt(),r=-e.translate;let o=null,a;const c=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const u=t>r?"next":"prev",h=(v,g)=>u==="next"&&v>=g||u==="prev"&&v<=g,p=()=>{a=new Date().getTime(),o===null&&(o=a);const v=Math.max(Math.min((a-o)/c,1),0),g=.5-Math.cos(v*Math.PI)/2;let x=r+g*(t-r);if(h(x,t)&&(x=t),e.wrapperEl.scrollTo({[n]:x}),h(x,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:x})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(p)};p()}function un(i,e){e===void 0&&(e="");const t=Tt(),n=[...i.children];return t.HTMLSlotElement&&i instanceof HTMLSlotElement&&n.push(...i.assignedElements()),e?n.filter(s=>s.matches(e)):n}function gT(i,e){const t=[e];for(;t.length>0;){const n=t.shift();if(i===n)return!0;t.push(...n.children,...n.shadowRoot?n.shadowRoot.children:[],...n.assignedElements?n.assignedElements():[])}}function vT(i,e){const t=Tt();let n=e.contains(i);return!n&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(n=[...e.assignedElements()].includes(i),n||(n=gT(i,e))),n}function Vr(i){try{console.warn(i);return}catch{}}function Gr(i,e){e===void 0&&(e=[]);const t=document.createElement(i);return t.classList.add(...Array.isArray(e)?e:dT(e)),t}function _T(i,e){const t=[];for(;i.previousElementSibling;){const n=i.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function yT(i,e){const t=[];for(;i.nextElementSibling;){const n=i.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function Vn(i,e){return Tt().getComputedStyle(i,null).getPropertyValue(e)}function Wr(i){let e=i,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Rh(i,e){const t=[];let n=i.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function fl(i,e,t){const n=Tt();return i[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function Sn(i){return(Array.isArray(i)?i:[i]).filter(e=>!!e)}function ku(i,e){e===void 0&&(e=""),typeof trustedTypes<"u"?i.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):i.innerHTML=e}let da;function xT(){const i=Tt(),e=mn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&e instanceof i.DocumentTouch)}}function Lh(){return da||(da=xT()),da}let ha;function ET(i){let{userAgent:e}=i===void 0?{}:i;const t=Lh(),n=Tt(),s=n.navigator.platform,r=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,c=n.screen.height,u=r.match(/(Android);?[\s\/]+([\d.]+)?/);let h=r.match(/(iPad).*OS\s([\d_]+)/);const p=r.match(/(iPod)(.*OS\s([\d_]+))?/),v=!h&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=s==="Win32";let x=s==="MacIntel";const S=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!h&&x&&t.touch&&S.indexOf(`${a}x${c}`)>=0&&(h=r.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),x=!1),u&&!g&&(o.os="android",o.android=!0),(h||v||p)&&(o.os="ios",o.ios=!0),o}function Ph(i){return i===void 0&&(i={}),ha||(ha=ET(i)),ha}let fa;function ST(){const i=Tt(),e=Ph();let t=!1;function n(){const a=i.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(n()){const a=String(i.navigator.userAgent);if(a.includes("Version/")){const[c,u]=a.split("Version/")[1].split(" ")[0].split(".").map(h=>Number(h));t=c<16||c===16&&u<2}}const s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),r=n(),o=r||s&&e.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:o,isWebView:s}}function Ih(){return fa||(fa=ST()),fa}function TT(i){let{swiper:e,on:t,emit:n}=i;const s=Tt();let r=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},c=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(p=>{o=s.requestAnimationFrame(()=>{const{width:v,height:g}=e;let x=v,S=g;p.forEach(f=>{let{contentBoxSize:l,contentRect:_,target:y}=f;y&&y!==e.el||(x=_?_.width:(l[0]||l).inlineSize,S=_?_.height:(l[0]||l).blockSize)}),(x!==v||S!==g)&&a()})}),r.observe(e.el))},u=()=>{o&&s.cancelAnimationFrame(o),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},h=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){c();return}s.addEventListener("resize",a),s.addEventListener("orientationchange",h)}),t("destroy",()=>{u(),s.removeEventListener("resize",a),s.removeEventListener("orientationchange",h)})}function bT(i){let{swiper:e,extendParams:t,on:n,emit:s}=i;const r=[],o=Tt(),a=function(h,p){p===void 0&&(p={});const v=o.MutationObserver||o.WebkitMutationObserver,g=new v(x=>{if(e.__preventObserver__)return;if(x.length===1){s("observerUpdate",x[0]);return}const S=function(){s("observerUpdate",x[0])};o.requestAnimationFrame?o.requestAnimationFrame(S):o.setTimeout(S,0)});g.observe(h,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:e.isElement||(typeof p.childList>"u"?!0:p).childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),r.push(g)},c=()=>{if(e.params.observer){if(e.params.observeParents){const h=Rh(e.hostEl);for(let p=0;p<h.length;p+=1)a(h[p])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},u=()=>{r.forEach(h=>{h.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",c),n("destroy",u)}var MT={on(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const s=t?"unshift":"push";return i.split(" ").forEach(r=>{n.eventsListeners[r]||(n.eventsListeners[r]=[]),n.eventsListeners[r][s](e)}),n},once(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function s(){n.off(i,s),s.__emitterProxy&&delete s.__emitterProxy;for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];e.apply(n,o)}return s.__emitterProxy=e,n.on(i,s,t)},onAny(i,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof i!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(i)<0&&t.eventsAnyListeners[n](i),t},offAny(i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(i);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(i,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||i.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((s,r)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&t.eventsListeners[n].splice(r,1)})}),t},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let e,t,n;for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return typeof r[0]=="string"||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),n=i):(e=r[0].events,t=r[0].data,n=r[0].context||i),t.unshift(n),(Array.isArray(e)?e:e.split(" ")).forEach(c=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(u=>{u.apply(n,[c,...t])}),i.eventsListeners&&i.eventsListeners[c]&&i.eventsListeners[c].forEach(u=>{u.apply(n,t)})}),i}};function wT(){const i=this;let e,t;const n=i.el;typeof i.params.width<"u"&&i.params.width!==null?e=i.params.width:e=n.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?t=i.params.height:t=n.clientHeight,!(e===0&&i.isHorizontal()||t===0&&i.isVertical())&&(e=e-parseInt(Vn(n,"padding-left")||0,10)-parseInt(Vn(n,"padding-right")||0,10),t=t-parseInt(Vn(n,"padding-top")||0,10)-parseInt(Vn(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(i,{width:e,height:t,size:i.isHorizontal()?e:t}))}function AT(){const i=this;function e(T,P){return parseFloat(T.getPropertyValue(i.getDirectionLabel(P))||0)}const t=i.params,{wrapperEl:n,slidesEl:s,size:r,rtlTranslate:o,wrongRTL:a}=i,c=i.virtual&&t.virtual.enabled,u=c?i.virtual.slides.length:i.slides.length,h=un(s,`.${i.params.slideClass}, swiper-slide`),p=c?i.virtual.slides.length:h.length;let v=[];const g=[],x=[];let S=t.slidesOffsetBefore;typeof S=="function"&&(S=t.slidesOffsetBefore.call(i));let f=t.slidesOffsetAfter;typeof f=="function"&&(f=t.slidesOffsetAfter.call(i));const l=i.snapGrid.length,_=i.slidesGrid.length;let y=t.spaceBetween,E=-S,M=0,C=0;if(typeof r>"u")return;typeof y=="string"&&y.indexOf("%")>=0?y=parseFloat(y.replace("%",""))/100*r:typeof y=="string"&&(y=parseFloat(y)),i.virtualSize=-y,h.forEach(T=>{o?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Er(n,"--swiper-centered-offset-before",""),Er(n,"--swiper-centered-offset-after",""));const L=t.grid&&t.grid.rows>1&&i.grid;L?i.grid.initSlides(h):i.grid&&i.grid.unsetSlides();let I;const w=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(T=>typeof t.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<p;T+=1){I=0;let P;if(h[T]&&(P=h[T]),L&&i.grid.updateSlide(T,P,h),!(h[T]&&Vn(P,"display")==="none")){if(t.slidesPerView==="auto"){w&&(h[T].style[i.getDirectionLabel("width")]="");const N=getComputedStyle(P),U=P.style.transform,z=P.style.webkitTransform;if(U&&(P.style.transform="none"),z&&(P.style.webkitTransform="none"),t.roundLengths)I=i.isHorizontal()?fl(P,"width"):fl(P,"height");else{const $=e(N,"width"),F=e(N,"padding-left"),q=e(N,"padding-right"),V=e(N,"margin-left"),ie=e(N,"margin-right"),le=N.getPropertyValue("box-sizing");if(le&&le==="border-box")I=$+V+ie;else{const{clientWidth:_e,offsetWidth:Le}=P;I=$+F+q+V+ie+(Le-_e)}}U&&(P.style.transform=U),z&&(P.style.webkitTransform=z),t.roundLengths&&(I=Math.floor(I))}else I=(r-(t.slidesPerView-1)*y)/t.slidesPerView,t.roundLengths&&(I=Math.floor(I)),h[T]&&(h[T].style[i.getDirectionLabel("width")]=`${I}px`);h[T]&&(h[T].swiperSlideSize=I),x.push(I),t.centeredSlides?(E=E+I/2+M/2+y,M===0&&T!==0&&(E=E-r/2-y),T===0&&(E=E-r/2-y),Math.abs(E)<1/1e3&&(E=0),t.roundLengths&&(E=Math.floor(E)),C%t.slidesPerGroup===0&&v.push(E),g.push(E)):(t.roundLengths&&(E=Math.floor(E)),(C-Math.min(i.params.slidesPerGroupSkip,C))%i.params.slidesPerGroup===0&&v.push(E),g.push(E),E=E+I+y),i.virtualSize+=I+y,M=I,C+=1}}if(i.virtualSize=Math.max(i.virtualSize,r)+f,o&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(n.style.width=`${i.virtualSize+y}px`),t.setWrapperSize&&(n.style[i.getDirectionLabel("width")]=`${i.virtualSize+y}px`),L&&i.grid.updateWrapperSize(I,v),!t.centeredSlides){const T=[];for(let P=0;P<v.length;P+=1){let N=v[P];t.roundLengths&&(N=Math.floor(N)),v[P]<=i.virtualSize-r&&T.push(N)}v=T,Math.floor(i.virtualSize-r)-Math.floor(v[v.length-1])>1&&v.push(i.virtualSize-r)}if(c&&t.loop){const T=x[0]+y;if(t.slidesPerGroup>1){const P=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/t.slidesPerGroup),N=T*t.slidesPerGroup;for(let U=0;U<P;U+=1)v.push(v[v.length-1]+N)}for(let P=0;P<i.virtual.slidesBefore+i.virtual.slidesAfter;P+=1)t.slidesPerGroup===1&&v.push(v[v.length-1]+T),g.push(g[g.length-1]+T),i.virtualSize+=T}if(v.length===0&&(v=[0]),y!==0){const T=i.isHorizontal()&&o?"marginLeft":i.getDirectionLabel("marginRight");h.filter((P,N)=>!t.cssMode||t.loop?!0:N!==h.length-1).forEach(P=>{P.style[T]=`${y}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let T=0;x.forEach(N=>{T+=N+(y||0)}),T-=y;const P=T>r?T-r:0;v=v.map(N=>N<=0?-S:N>P?P+f:N)}if(t.centerInsufficientSlides){let T=0;x.forEach(N=>{T+=N+(y||0)}),T-=y;const P=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(T+P<r){const N=(r-T-P)/2;v.forEach((U,z)=>{v[z]=U-N}),g.forEach((U,z)=>{g[z]=U+N})}}if(Object.assign(i,{slides:h,snapGrid:v,slidesGrid:g,slidesSizesGrid:x}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Er(n,"--swiper-centered-offset-before",`${-v[0]}px`),Er(n,"--swiper-centered-offset-after",`${i.size/2-x[x.length-1]/2}px`);const T=-i.snapGrid[0],P=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(N=>N+T),i.slidesGrid=i.slidesGrid.map(N=>N+P)}if(p!==u&&i.emit("slidesLengthChange"),v.length!==l&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),g.length!==_&&i.emit("slidesGridLengthChange"),t.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!c&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const T=`${t.containerModifierClass}backface-hidden`,P=i.el.classList.contains(T);p<=t.maxBackfaceHiddenSlides?P||i.el.classList.add(T):P&&i.el.classList.remove(T)}}function CT(i){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let s=0,r;typeof i=="number"?e.setTransition(i):i===!0&&e.setTransition(e.params.speed);const o=a=>n?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const a=e.activeIndex+r;if(a>e.slides.length&&!n)break;t.push(o(a))}else t.push(o(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const a=t[r].offsetHeight;s=a>s?a:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function RT(){const i=this,e=i.slides,t=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(i.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-i.cssOverflowAdjustment()}const Hu=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function LT(i){i===void 0&&(i=this&&this.translate||0);const e=this,t=e.params,{slides:n,rtlTranslate:s,snapGrid:r}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-i;s&&(o=i),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=t.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let c=0;c<n.length;c+=1){const u=n[c];let h=u.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(h-=n[0].swiperSlideOffset);const p=(o+(t.centeredSlides?e.minTranslate():0)-h)/(u.swiperSlideSize+a),v=(o-r[0]+(t.centeredSlides?e.minTranslate():0)-h)/(u.swiperSlideSize+a),g=-(o-h),x=g+e.slidesSizesGrid[c],S=g>=0&&g<=e.size-e.slidesSizesGrid[c],f=g>=0&&g<e.size-1||x>1&&x<=e.size||g<=0&&x>=e.size;f&&(e.visibleSlides.push(u),e.visibleSlidesIndexes.push(c)),Hu(u,f,t.slideVisibleClass),Hu(u,S,t.slideFullyVisibleClass),u.progress=s?-p:p,u.originalProgress=s?-v:v}}function PT(i){const e=this;if(typeof i>"u"){const h=e.rtlTranslate?-1:1;i=e&&e.translate&&e.translate*h||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:r,isEnd:o,progressLoop:a}=e;const c=r,u=o;if(n===0)s=0,r=!0,o=!0;else{s=(i-e.minTranslate())/n;const h=Math.abs(i-e.minTranslate())<1,p=Math.abs(i-e.maxTranslate())<1;r=h||s<=0,o=p||s>=1,h&&(s=0),p&&(s=1)}if(t.loop){const h=e.getSlideIndexByData(0),p=e.getSlideIndexByData(e.slides.length-1),v=e.slidesGrid[h],g=e.slidesGrid[p],x=e.slidesGrid[e.slidesGrid.length-1],S=Math.abs(i);S>=v?a=(S-v)/x:a=(S+x-g)/x,a>1&&(a-=1)}Object.assign(e,{progress:s,progressLoop:a,isBeginning:r,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(i),r&&!c&&e.emit("reachBeginning toEdge"),o&&!u&&e.emit("reachEnd toEdge"),(c&&!r||u&&!o)&&e.emit("fromEdge"),e.emit("progress",s)}const pa=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function IT(){const i=this,{slides:e,params:t,slidesEl:n,activeIndex:s}=i,r=i.virtual&&t.virtual.enabled,o=i.grid&&t.grid&&t.grid.rows>1,a=p=>un(n,`.${t.slideClass}${p}, swiper-slide${p}`)[0];let c,u,h;if(r)if(t.loop){let p=s-i.virtual.slidesBefore;p<0&&(p=i.virtual.slides.length+p),p>=i.virtual.slides.length&&(p-=i.virtual.slides.length),c=a(`[data-swiper-slide-index="${p}"]`)}else c=a(`[data-swiper-slide-index="${s}"]`);else o?(c=e.find(p=>p.column===s),h=e.find(p=>p.column===s+1),u=e.find(p=>p.column===s-1)):c=e[s];c&&(o||(h=yT(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!h&&(h=e[0]),u=_T(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u===0&&(u=e[e.length-1]))),e.forEach(p=>{pa(p,p===c,t.slideActiveClass),pa(p,p===h,t.slideNextClass),pa(p,p===u,t.slidePrevClass)}),i.emitSlidesClasses()}const Dr=(i,e)=>{if(!i||i.destroyed||!i.params)return;const t=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,n=e.closest(t());if(n){let s=n.querySelector(`.${i.params.lazyPreloaderClass}`);!s&&i.isElement&&(n.shadowRoot?s=n.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(s=n.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},ma=(i,e)=>{if(!i.slides[e])return;const t=i.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},pl=i=>{if(!i||i.destroyed||!i.params)return;let e=i.params.lazyPreloadPrevNext;const t=i.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const n=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),s=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const o=s,a=[o-e];a.push(...Array.from({length:e}).map((c,u)=>o+n+u)),i.slides.forEach((c,u)=>{a.includes(c.column)&&ma(i,u)});return}const r=s+n-1;if(i.params.rewind||i.params.loop)for(let o=s-e;o<=r+e;o+=1){const a=(o%t+t)%t;(a<s||a>r)&&ma(i,a)}else for(let o=Math.max(s-e,0);o<=Math.min(r+e,t-1);o+=1)o!==s&&(o>r||o<s)&&ma(i,o)};function DT(i){const{slidesGrid:e,params:t}=i,n=i.rtlTranslate?i.translate:-i.translate;let s;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?n>=e[r]&&n<e[r+1]-(e[r+1]-e[r])/2?s=r:n>=e[r]&&n<e[r+1]&&(s=r+1):n>=e[r]&&(s=r);return t.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function OT(i){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:s,activeIndex:r,realIndex:o,snapIndex:a}=e;let c=i,u;const h=g=>{let x=g-e.virtual.slidesBefore;return x<0&&(x=e.virtual.slides.length+x),x>=e.virtual.slides.length&&(x-=e.virtual.slides.length),x};if(typeof c>"u"&&(c=DT(e)),n.indexOf(t)>=0)u=n.indexOf(t);else{const g=Math.min(s.slidesPerGroupSkip,c);u=g+Math.floor((c-g)/s.slidesPerGroup)}if(u>=n.length&&(u=n.length-1),c===r&&!e.params.loop){u!==a&&(e.snapIndex=u,e.emit("snapIndexChange"));return}if(c===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=h(c);return}const p=e.grid&&s.grid&&s.grid.rows>1;let v;if(e.virtual&&s.virtual.enabled&&s.loop)v=h(c);else if(p){const g=e.slides.find(S=>S.column===c);let x=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(e.slides.indexOf(g),0)),v=Math.floor(x/s.grid.rows)}else if(e.slides[c]){const g=e.slides[c].getAttribute("data-swiper-slide-index");g?v=parseInt(g,10):v=c}else v=c;Object.assign(e,{previousSnapIndex:a,snapIndex:u,previousRealIndex:o,realIndex:v,previousIndex:r,activeIndex:c}),e.initialized&&pl(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==v&&e.emit("realIndexChange"),e.emit("slideChange"))}function NT(i,e){const t=this,n=t.params;let s=i.closest(`.${n.slideClass}, swiper-slide`);!s&&t.isElement&&e&&e.length>1&&e.includes(i)&&[...e.slice(e.indexOf(i)+1,e.length)].forEach(a=>{!s&&a.matches&&a.matches(`.${n.slideClass}, swiper-slide`)&&(s=a)});let r=!1,o;if(s){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===s){r=!0,o=a;break}}if(s&&r)t.clickedSlide=s,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var UT={updateSize:wT,updateSlides:AT,updateAutoHeight:CT,updateSlidesOffset:RT,updateSlidesProgress:LT,updateProgress:PT,updateSlidesClasses:IT,updateActiveIndex:OT,updateClickedSlide:NT};function FT(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:n,translate:s,wrapperEl:r}=e;if(t.virtualTranslate)return n?-s:s;if(t.cssMode)return s;let o=pT(r,i);return o+=e.cssOverflowAdjustment(),n&&(o=-o),o||0}function BT(i,e){const t=this,{rtlTranslate:n,params:s,wrapperEl:r,progress:o}=t;let a=0,c=0;const u=0;t.isHorizontal()?a=n?-i:i:c=i,s.roundLengths&&(a=Math.floor(a),c=Math.floor(c)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:c,s.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-c:s.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():c-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${a}px, ${c}px, ${u}px)`);let h;const p=t.maxTranslate()-t.minTranslate();p===0?h=0:h=(i-t.minTranslate())/p,h!==o&&t.updateProgress(i),t.emit("setTranslate",t.translate,e)}function zT(){return-this.snapGrid[0]}function kT(){return-this.snapGrid[this.snapGrid.length-1]}function HT(i,e,t,n,s){i===void 0&&(i=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:o,wrapperEl:a}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const c=r.minTranslate(),u=r.maxTranslate();let h;if(n&&i>c?h=c:n&&i<u?h=u:h=i,r.updateProgress(h),o.cssMode){const p=r.isHorizontal();if(e===0)a[p?"scrollLeft":"scrollTop"]=-h;else{if(!r.support.smoothScroll)return Ch({swiper:r,targetPosition:-h,side:p?"left":"top"}),!0;a.scrollTo({[p?"left":"top"]:-h,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(h),t&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(h),t&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(v){!r||r.destroyed||v.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var VT={getTranslate:FT,setTranslate:BT,minTranslate:zT,maxTranslate:kT,translateTo:HT};function GT(i,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${i}ms`,t.wrapperEl.style.transitionDelay=i===0?"0ms":""),t.emit("setTransition",i,e)}function Dh(i){let{swiper:e,runCallbacks:t,direction:n,step:s}=i;const{activeIndex:r,previousIndex:o}=e;let a=n;a||(r>o?a="next":r<o?a="prev":a="reset"),e.emit(`transition${s}`),t&&a==="reset"?e.emit(`slideResetTransition${s}`):t&&r!==o&&(e.emit(`slideChangeTransition${s}`),a==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`))}function WT(i,e){i===void 0&&(i=!0);const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),Dh({swiper:t,runCallbacks:i,direction:e,step:"Start"}))}function XT(i,e){i===void 0&&(i=!0);const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),Dh({swiper:t,runCallbacks:i,direction:e,step:"End"}))}var $T={setTransition:GT,transitionStart:WT,transitionEnd:XT};function qT(i,e,t,n,s){i===void 0&&(i=0),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const r=this;let o=i;o<0&&(o=0);const{params:a,snapGrid:c,slidesGrid:u,previousIndex:h,activeIndex:p,rtlTranslate:v,wrapperEl:g,enabled:x}=r;if(!x&&!n&&!s||r.destroyed||r.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=r.params.speed);const S=Math.min(r.params.slidesPerGroupSkip,o);let f=S+Math.floor((o-S)/r.params.slidesPerGroup);f>=c.length&&(f=c.length-1);const l=-c[f];if(a.normalizeSlideIndex)for(let L=0;L<u.length;L+=1){const I=-Math.floor(l*100),w=Math.floor(u[L]*100),T=Math.floor(u[L+1]*100);typeof u[L+1]<"u"?I>=w&&I<T-(T-w)/2?o=L:I>=w&&I<T&&(o=L+1):I>=w&&(o=L)}if(r.initialized&&o!==p&&(!r.allowSlideNext&&(v?l>r.translate&&l>r.minTranslate():l<r.translate&&l<r.minTranslate())||!r.allowSlidePrev&&l>r.translate&&l>r.maxTranslate()&&(p||0)!==o))return!1;o!==(h||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(l);let _;o>p?_="next":o<p?_="prev":_="reset";const y=r.virtual&&r.params.virtual.enabled;if(!(y&&s)&&(v&&-l===r.translate||!v&&l===r.translate))return r.updateActiveIndex(o),a.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),a.effect!=="slide"&&r.setTranslate(l),_!=="reset"&&(r.transitionStart(t,_),r.transitionEnd(t,_)),!1;if(a.cssMode){const L=r.isHorizontal(),I=v?l:-l;if(e===0)y&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),y&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[L?"scrollLeft":"scrollTop"]=I})):g[L?"scrollLeft":"scrollTop"]=I,y&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return Ch({swiper:r,targetPosition:I,side:L?"left":"top"}),!0;g.scrollTo({[L?"left":"top"]:I,behavior:"smooth"})}return!0}const C=Ih().isSafari;return y&&!s&&C&&r.isElement&&r.virtual.update(!1,!1,o),r.setTransition(e),r.setTranslate(l),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,n),r.transitionStart(t,_),e===0?r.transitionEnd(t,_):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(I){!r||r.destroyed||I.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,_))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function YT(i,e,t,n){i===void 0&&(i=0),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const s=this;if(s.destroyed)return;typeof e>"u"&&(e=s.params.speed);const r=s.grid&&s.params.grid&&s.params.grid.rows>1;let o=i;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)o=o+s.virtual.slidesBefore;else{let a;if(r){const v=o*s.params.grid.rows;a=s.slides.find(g=>g.getAttribute("data-swiper-slide-index")*1===v).column}else a=s.getSlideIndexByData(o);const c=r?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:u}=s.params;let h=s.params.slidesPerView;h==="auto"?h=s.slidesPerViewDynamic():(h=Math.ceil(parseFloat(s.params.slidesPerView,10)),u&&h%2===0&&(h=h+1));let p=c-a<h;if(u&&(p=p||a<Math.ceil(h/2)),n&&u&&s.params.slidesPerView!=="auto"&&!r&&(p=!1),p){const v=u?a<s.activeIndex?"prev":"next":a-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?a+1:a-c+1,slideRealIndex:v==="next"?s.realIndex:void 0})}if(r){const v=o*s.params.grid.rows;o=s.slides.find(g=>g.getAttribute("data-swiper-slide-index")*1===v).column}else o=s.getSlideIndexByData(o)}return requestAnimationFrame(()=>{s.slideTo(o,e,t,n)}),s}function jT(i,e,t){e===void 0&&(e=!0);const n=this,{enabled:s,params:r,animating:o}=n;if(!s||n.destroyed)return n;typeof i>"u"&&(i=n.params.speed);let a=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(a=Math.max(n.slidesPerViewDynamic("current",!0),1));const c=n.activeIndex<r.slidesPerGroupSkip?1:a,u=n.virtual&&r.virtual.enabled;if(r.loop){if(o&&!u&&r.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+c,i,e,t)}),!0}return r.rewind&&n.isEnd?n.slideTo(0,i,e,t):n.slideTo(n.activeIndex+c,i,e,t)}function KT(i,e,t){e===void 0&&(e=!0);const n=this,{params:s,snapGrid:r,slidesGrid:o,rtlTranslate:a,enabled:c,animating:u}=n;if(!c||n.destroyed)return n;typeof i>"u"&&(i=n.params.speed);const h=n.virtual&&s.virtual.enabled;if(s.loop){if(u&&!h&&s.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const p=a?n.translate:-n.translate;function v(_){return _<0?-Math.floor(Math.abs(_)):Math.floor(_)}const g=v(p),x=r.map(_=>v(_)),S=s.freeMode&&s.freeMode.enabled;let f=r[x.indexOf(g)-1];if(typeof f>"u"&&(s.cssMode||S)){let _;r.forEach((y,E)=>{g>=y&&(_=E)}),typeof _<"u"&&(f=S?r[_]:r[_>0?_-1:_])}let l=0;if(typeof f<"u"&&(l=o.indexOf(f),l<0&&(l=n.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(l=l-n.slidesPerViewDynamic("previous",!0)+1,l=Math.max(l,0))),s.rewind&&n.isBeginning){const _=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(_,i,e,t)}else if(s.loop&&n.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{n.slideTo(l,i,e,t)}),!0;return n.slideTo(l,i,e,t)}function ZT(i,e,t){e===void 0&&(e=!0);const n=this;if(!n.destroyed)return typeof i>"u"&&(i=n.params.speed),n.slideTo(n.activeIndex,i,e,t)}function JT(i,e,t,n){e===void 0&&(e=!0),n===void 0&&(n=.5);const s=this;if(s.destroyed)return;typeof i>"u"&&(i=s.params.speed);let r=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,r),a=o+Math.floor((r-o)/s.params.slidesPerGroup),c=s.rtlTranslate?s.translate:-s.translate;if(c>=s.snapGrid[a]){const u=s.snapGrid[a],h=s.snapGrid[a+1];c-u>(h-u)*n&&(r+=s.params.slidesPerGroup)}else{const u=s.snapGrid[a-1],h=s.snapGrid[a];c-u<=(h-u)*n&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,i,e,t)}function QT(){const i=this;if(i.destroyed)return;const{params:e,slidesEl:t}=i,n=e.slidesPerView==="auto"?i.slidesPerViewDynamic():e.slidesPerView;let s=i.getSlideIndexWhenGrid(i.clickedIndex),r;const o=i.isElement?"swiper-slide":`.${e.slideClass}`,a=i.grid&&i.params.grid&&i.params.grid.rows>1;if(e.loop){if(i.animating)return;r=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i.slideToLoop(r):s>(a?(i.slides.length-n)/2-(i.params.grid.rows-1):i.slides.length-n)?(i.loopFix(),s=i.getSlideIndex(un(t,`${o}[data-swiper-slide-index="${r}"]`)[0]),Ah(()=>{i.slideTo(s)})):i.slideTo(s)}else i.slideTo(s)}var eb={slideTo:qT,slideToLoop:YT,slideNext:jT,slidePrev:KT,slideReset:ZT,slideToClosest:JT,slideToClickedSlide:QT};function tb(i,e){const t=this,{params:n,slidesEl:s}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const r=()=>{un(s,`.${n.slideClass}, swiper-slide`).forEach((g,x)=>{g.setAttribute("data-swiper-slide-index",x)})},o=()=>{const v=un(s,`.${n.slideBlankClass}`);v.forEach(g=>{g.remove()}),v.length>0&&(t.recalcSlides(),t.updateSlides())},a=t.grid&&n.grid&&n.grid.rows>1;n.loopAddBlankSlides&&(n.slidesPerGroup>1||a)&&o();const c=n.slidesPerGroup*(a?n.grid.rows:1),u=t.slides.length%c!==0,h=a&&t.slides.length%n.grid.rows!==0,p=v=>{for(let g=0;g<v;g+=1){const x=t.isElement?Gr("swiper-slide",[n.slideBlankClass]):Gr("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(x)}};if(u){if(n.loopAddBlankSlides){const v=c-t.slides.length%c;p(v),t.recalcSlides(),t.updateSlides()}else Vr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(h){if(n.loopAddBlankSlides){const v=n.grid.rows-t.slides.length%n.grid.rows;p(v),t.recalcSlides(),t.updateSlides()}else Vr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();t.loopFix({slideRealIndex:i,direction:n.centeredSlides?void 0:"next",initial:e})}function nb(i){let{slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:s,activeSlideIndex:r,initial:o,byController:a,byMousewheel:c}=i===void 0?{}:i;const u=this;if(!u.params.loop)return;u.emit("beforeLoopFix");const{slides:h,allowSlidePrev:p,allowSlideNext:v,slidesEl:g,params:x}=u,{centeredSlides:S,initialSlide:f}=x;if(u.allowSlidePrev=!0,u.allowSlideNext=!0,u.virtual&&x.virtual.enabled){t&&(!x.centeredSlides&&u.snapIndex===0?u.slideTo(u.virtual.slides.length,0,!1,!0):x.centeredSlides&&u.snapIndex<x.slidesPerView?u.slideTo(u.virtual.slides.length+u.snapIndex,0,!1,!0):u.snapIndex===u.snapGrid.length-1&&u.slideTo(u.virtual.slidesBefore,0,!1,!0)),u.allowSlidePrev=p,u.allowSlideNext=v,u.emit("loopFix");return}let l=x.slidesPerView;l==="auto"?l=u.slidesPerViewDynamic():(l=Math.ceil(parseFloat(x.slidesPerView,10)),S&&l%2===0&&(l=l+1));const _=x.slidesPerGroupAuto?l:x.slidesPerGroup;let y=S?Math.max(_,Math.ceil(l/2)):_;y%_!==0&&(y+=_-y%_),y+=x.loopAdditionalSlides,u.loopedSlides=y;const E=u.grid&&x.grid&&x.grid.rows>1;h.length<l+y||u.params.effect==="cards"&&h.length<l+y*2?Vr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):E&&x.grid.fill==="row"&&Vr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const M=[],C=[],L=E?Math.ceil(h.length/x.grid.rows):h.length,I=o&&L-f<l&&!S;let w=I?f:u.activeIndex;typeof r>"u"?r=u.getSlideIndex(h.find(F=>F.classList.contains(x.slideActiveClass))):w=r;const T=n==="next"||!n,P=n==="prev"||!n;let N=0,U=0;const $=(E?h[r].column:r)+(S&&typeof s>"u"?-l/2+.5:0);if($<y){N=Math.max(y-$,_);for(let F=0;F<y-$;F+=1){const q=F-Math.floor(F/L)*L;if(E){const V=L-q-1;for(let ie=h.length-1;ie>=0;ie-=1)h[ie].column===V&&M.push(ie)}else M.push(L-q-1)}}else if($+l>L-y){U=Math.max($-(L-y*2),_),I&&(U=Math.max(U,l-L+f+1));for(let F=0;F<U;F+=1){const q=F-Math.floor(F/L)*L;E?h.forEach((V,ie)=>{V.column===q&&C.push(ie)}):C.push(q)}}if(u.__preventObserver__=!0,requestAnimationFrame(()=>{u.__preventObserver__=!1}),u.params.effect==="cards"&&h.length<l+y*2&&(C.includes(r)&&C.splice(C.indexOf(r),1),M.includes(r)&&M.splice(M.indexOf(r),1)),P&&M.forEach(F=>{h[F].swiperLoopMoveDOM=!0,g.prepend(h[F]),h[F].swiperLoopMoveDOM=!1}),T&&C.forEach(F=>{h[F].swiperLoopMoveDOM=!0,g.append(h[F]),h[F].swiperLoopMoveDOM=!1}),u.recalcSlides(),x.slidesPerView==="auto"?u.updateSlides():E&&(M.length>0&&P||C.length>0&&T)&&u.slides.forEach((F,q)=>{u.grid.updateSlide(q,F,u.slides)}),x.watchSlidesProgress&&u.updateSlidesOffset(),t){if(M.length>0&&P){if(typeof e>"u"){const F=u.slidesGrid[w],V=u.slidesGrid[w+N]-F;c?u.setTranslate(u.translate-V):(u.slideTo(w+Math.ceil(N),0,!1,!0),s&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-V,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-V))}else if(s){const F=E?M.length/x.grid.rows:M.length;u.slideTo(u.activeIndex+F,0,!1,!0),u.touchEventsData.currentTranslate=u.translate}}else if(C.length>0&&T)if(typeof e>"u"){const F=u.slidesGrid[w],V=u.slidesGrid[w-U]-F;c?u.setTranslate(u.translate-V):(u.slideTo(w-U,0,!1,!0),s&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-V,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-V))}else{const F=E?C.length/x.grid.rows:C.length;u.slideTo(u.activeIndex-F,0,!1,!0)}}if(u.allowSlidePrev=p,u.allowSlideNext=v,u.controller&&u.controller.control&&!a){const F={slideRealIndex:e,direction:n,setTranslate:s,activeSlideIndex:r,byController:!0};Array.isArray(u.controller.control)?u.controller.control.forEach(q=>{!q.destroyed&&q.params.loop&&q.loopFix({...F,slideTo:q.params.slidesPerView===x.slidesPerView?t:!1})}):u.controller.control instanceof u.constructor&&u.controller.control.params.loop&&u.controller.control.loopFix({...F,slideTo:u.controller.control.params.slidesPerView===x.slidesPerView?t:!1})}u.emit("loopFix")}function ib(){const i=this,{params:e,slidesEl:t}=i;if(!e.loop||!t||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const n=[];i.slides.forEach(s=>{const r=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;n[r]=s}),i.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),n.forEach(s=>{t.append(s)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var sb={loopCreate:tb,loopFix:nb,loopDestroy:ib};function rb(i){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=i?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function ob(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var ab={setGrabCursor:rb,unsetGrabCursor:ob};function lb(i,e){e===void 0&&(e=this);function t(n){if(!n||n===mn()||n===Tt())return null;n.assignedSlot&&(n=n.assignedSlot);const s=n.closest(i);return!s&&!n.getRootNode?null:s||t(n.getRootNode().host)}return t(e)}function Vu(i,e,t){const n=Tt(),{params:s}=i,r=s.edgeSwipeDetection,o=s.edgeSwipeThreshold;return r&&(t<=o||t>=n.innerWidth-o)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function cb(i){const e=this,t=mn();let n=i;n.originalEvent&&(n=n.originalEvent);const s=e.touchEventsData;if(n.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==n.pointerId)return;s.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(s.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){Vu(e,n,n.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:a}=e;if(!a||!r.simulateTouch&&n.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let c=n.target;if(r.touchEventsTarget==="wrapper"&&!vT(c,e.wrapperEl)||"which"in n&&n.which===3||"button"in n&&n.button>0||s.isTouched&&s.isMoved)return;const u=!!r.noSwipingClass&&r.noSwipingClass!=="",h=n.composedPath?n.composedPath():n.path;u&&n.target&&n.target.shadowRoot&&h&&(c=h[0]);const p=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,v=!!(n.target&&n.target.shadowRoot);if(r.noSwiping&&(v?lb(p,c):c.closest(p))){e.allowClick=!0;return}if(r.swipeHandler&&!c.closest(r.swipeHandler))return;o.currentX=n.pageX,o.currentY=n.pageY;const g=o.currentX,x=o.currentY;if(!Vu(e,n,g))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=x,s.touchStartTime=Hr(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(s.allowThresholdMove=!1);let S=!0;c.matches(s.focusableElements)&&(S=!1,c.nodeName==="SELECT"&&(s.isTouched=!1)),t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==c&&(n.pointerType==="mouse"||n.pointerType!=="mouse"&&!c.matches(s.focusableElements))&&t.activeElement.blur();const f=S&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||f)&&!c.isContentEditable&&n.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",n)}function ub(i){const e=mn(),t=this,n=t.touchEventsData,{params:s,touches:r,rtlTranslate:o,enabled:a}=t;if(!a||!s.simulateTouch&&i.pointerType==="mouse")return;let c=i;if(c.originalEvent&&(c=c.originalEvent),c.type==="pointermove"&&(n.touchId!==null||c.pointerId!==n.pointerId))return;let u;if(c.type==="touchmove"){if(u=[...c.changedTouches].find(M=>M.identifier===n.touchId),!u||u.identifier!==n.touchId)return}else u=c;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",c);return}const h=u.pageX,p=u.pageY;if(c.preventedByNestedSwiper){r.startX=h,r.startY=p;return}if(!t.allowTouchMove){c.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(r,{startX:h,startY:p,currentX:h,currentY:p}),n.touchStartTime=Hr());return}if(s.touchReleaseOnEdges&&!s.loop)if(t.isVertical()){if(p<r.startY&&t.translate<=t.maxTranslate()||p>r.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else{if(o&&(h>r.startX&&-t.translate<=t.maxTranslate()||h<r.startX&&-t.translate>=t.minTranslate()))return;if(!o&&(h<r.startX&&t.translate<=t.maxTranslate()||h>r.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(n.focusableElements)&&e.activeElement!==c.target&&c.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&c.target===e.activeElement&&c.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit("touchMove",c),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=h,r.currentY=p;const v=r.currentX-r.startX,g=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(v**2+g**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let M;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?n.isScrolling=!1:v*v+g*g>=25&&(M=Math.atan2(Math.abs(g),Math.abs(v))*180/Math.PI,n.isScrolling=t.isHorizontal()?M>s.touchAngle:90-M>s.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",c),typeof n.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(n.startMoving=!0),n.isScrolling||c.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!s.cssMode&&c.cancelable&&c.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&c.stopPropagation();let x=t.isHorizontal()?v:g,S=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;s.oneWayMovement&&(x=Math.abs(x)*(o?1:-1),S=Math.abs(S)*(o?1:-1)),r.diff=x,x*=s.touchRatio,o&&(x=-x,S=-S);const f=t.touchesDirection;t.swipeDirection=x>0?"prev":"next",t.touchesDirection=S>0?"prev":"next";const l=t.params.loop&&!s.cssMode,_=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!n.isMoved){if(l&&_&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(M)}n.allowMomentumBounce=!1,s.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",c)}if(new Date().getTime(),s._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&f!==t.touchesDirection&&l&&_&&Math.abs(x)>=1){Object.assign(r,{startX:h,startY:p,currentX:h,currentY:p,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit("sliderMove",c),n.isMoved=!0,n.currentTranslate=x+n.startTranslate;let y=!0,E=s.resistanceRatio;if(s.touchReleaseOnEdges&&(E=0),x>0?(l&&_&&n.allowThresholdMove&&n.currentTranslate>(s.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(s.slidesPerView!=="auto"&&t.slides.length-s.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(y=!1,s.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+x)**E))):x<0&&(l&&_&&n.allowThresholdMove&&n.currentTranslate<(s.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(s.slidesPerView!=="auto"&&t.slides.length-s.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(s.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(y=!1,s.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-x)**E))),y&&(c.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),s.threshold>0)if(Math.abs(x)>s.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,n.currentTranslate=n.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{n.currentTranslate=n.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&t.freeMode||s.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function db(i){const e=this,t=e.touchEventsData;let n=i;n.originalEvent&&(n=n.originalEvent);let s;if(n.type==="touchend"||n.type==="touchcancel"){if(s=[...n.changedTouches].find(M=>M.identifier===t.touchId),!s||s.identifier!==t.touchId)return}else{if(t.touchId!==null||n.pointerId!==t.pointerId)return;s=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:a,rtlTranslate:c,slidesGrid:u,enabled:h}=e;if(!h||!o.simulateTouch&&n.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",n),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const p=Hr(),v=p-t.touchStartTime;if(e.allowClick){const M=n.path||n.composedPath&&n.composedPath();e.updateClickedSlide(M&&M[0]||n.target,M),e.emit("tap click",n),v<300&&p-t.lastClickTime<300&&e.emit("doubleTap doubleClick",n)}if(t.lastClickTime=Hr(),Ah(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||a.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let g;if(o.followFinger?g=c?e.translate:-e.translate:g=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:g});return}const x=g>=-e.maxTranslate()&&!e.params.loop;let S=0,f=e.slidesSizesGrid[0];for(let M=0;M<u.length;M+=M<o.slidesPerGroupSkip?1:o.slidesPerGroup){const C=M<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof u[M+C]<"u"?(x||g>=u[M]&&g<u[M+C])&&(S=M,f=u[M+C]-u[M]):(x||g>=u[M])&&(S=M,f=u[u.length-1]-u[u.length-2])}let l=null,_=null;o.rewind&&(e.isBeginning?_=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(l=0));const y=(g-u[S])/f,E=S<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(v>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(y>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?l:S+E):e.slideTo(S)),e.swipeDirection==="prev"&&(y>1-o.longSwipesRatio?e.slideTo(S+E):_!==null&&y<0&&Math.abs(y)>o.longSwipesRatio?e.slideTo(_):e.slideTo(S))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(n.target===e.navigation.nextEl||n.target===e.navigation.prevEl)?n.target===e.navigation.nextEl?e.slideTo(S+E):e.slideTo(S):(e.swipeDirection==="next"&&e.slideTo(l!==null?l:S+E),e.swipeDirection==="prev"&&e.slideTo(_!==null?_:S))}}function Gu(){const i=this,{params:e,el:t}=i;if(t&&t.offsetWidth===0)return;e.breakpoints&&i.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:s,snapGrid:r}=i,o=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!a?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!o?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=s,i.allowSlideNext=n,i.params.watchOverflow&&r!==i.snapGrid&&i.checkOverflow()}function hb(i){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&i.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function fb(){const i=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=i;if(!n)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-e.scrollLeft:i.translate=-e.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let s;const r=i.maxTranslate()-i.minTranslate();r===0?s=0:s=(i.translate-i.minTranslate())/r,s!==i.progress&&i.updateProgress(t?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function pb(i){const e=this;Dr(e,i.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function mb(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const Oh=(i,e)=>{const t=mn(),{params:n,el:s,wrapperEl:r,device:o}=i,a=!!n.nested,c=e==="on"?"addEventListener":"removeEventListener",u=e;!s||typeof s=="string"||(t[c]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:a}),s[c]("touchstart",i.onTouchStart,{passive:!1}),s[c]("pointerdown",i.onTouchStart,{passive:!1}),t[c]("touchmove",i.onTouchMove,{passive:!1,capture:a}),t[c]("pointermove",i.onTouchMove,{passive:!1,capture:a}),t[c]("touchend",i.onTouchEnd,{passive:!0}),t[c]("pointerup",i.onTouchEnd,{passive:!0}),t[c]("pointercancel",i.onTouchEnd,{passive:!0}),t[c]("touchcancel",i.onTouchEnd,{passive:!0}),t[c]("pointerout",i.onTouchEnd,{passive:!0}),t[c]("pointerleave",i.onTouchEnd,{passive:!0}),t[c]("contextmenu",i.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&s[c]("click",i.onClick,!0),n.cssMode&&r[c]("scroll",i.onScroll),n.updateOnWindowResize?i[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Gu,!0):i[u]("observerUpdate",Gu,!0),s[c]("load",i.onLoad,{capture:!0}))};function gb(){const i=this,{params:e}=i;i.onTouchStart=cb.bind(i),i.onTouchMove=ub.bind(i),i.onTouchEnd=db.bind(i),i.onDocumentTouchStart=mb.bind(i),e.cssMode&&(i.onScroll=fb.bind(i)),i.onClick=hb.bind(i),i.onLoad=pb.bind(i),Oh(i,"on")}function vb(){Oh(this,"off")}var _b={attachEvents:gb,detachEvents:vb};const Wu=(i,e)=>i.grid&&e.grid&&e.grid.rows>1;function yb(){const i=this,{realIndex:e,initialized:t,params:n,el:s}=i,r=n.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=mn(),a=n.breakpointsBase==="window"||!n.breakpointsBase?n.breakpointsBase:"container",c=["window","container"].includes(n.breakpointsBase)||!n.breakpointsBase?i.el:o.querySelector(n.breakpointsBase),u=i.getBreakpoint(r,a,c);if(!u||i.currentBreakpoint===u)return;const p=(u in r?r[u]:void 0)||i.originalParams,v=Wu(i,n),g=Wu(i,p),x=i.params.grabCursor,S=p.grabCursor,f=n.enabled;v&&!g?(s.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),i.emitContainerClasses()):!v&&g&&(s.classList.add(`${n.containerModifierClass}grid`),(p.grid.fill&&p.grid.fill==="column"||!p.grid.fill&&n.grid.fill==="column")&&s.classList.add(`${n.containerModifierClass}grid-column`),i.emitContainerClasses()),x&&!S?i.unsetGrabCursor():!x&&S&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(C=>{if(typeof p[C]>"u")return;const L=n[C]&&n[C].enabled,I=p[C]&&p[C].enabled;L&&!I&&i[C].disable(),!L&&I&&i[C].enable()});const l=p.direction&&p.direction!==n.direction,_=n.loop&&(p.slidesPerView!==n.slidesPerView||l),y=n.loop;l&&t&&i.changeDirection(),Ut(i.params,p);const E=i.params.enabled,M=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),f&&!E?i.disable():!f&&E&&i.enable(),i.currentBreakpoint=u,i.emit("_beforeBreakpoint",p),t&&(_?(i.loopDestroy(),i.loopCreate(e),i.updateSlides()):!y&&M?(i.loopCreate(e),i.updateSlides()):y&&!M&&i.loopDestroy()),i.emit("breakpoint",p)}function xb(i,e,t){if(e===void 0&&(e="window"),!i||e==="container"&&!t)return;let n=!1;const s=Tt(),r=e==="window"?s.innerHeight:t.clientHeight,o=Object.keys(i).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const c=parseFloat(a.substr(1));return{value:r*c,point:a}}return{value:a,point:a}});o.sort((a,c)=>parseInt(a.value,10)-parseInt(c.value,10));for(let a=0;a<o.length;a+=1){const{point:c,value:u}=o[a];e==="window"?s.matchMedia(`(min-width: ${u}px)`).matches&&(n=c):u<=t.clientWidth&&(n=c)}return n||"max"}var Eb={setBreakpoint:yb,getBreakpoint:xb};function Sb(i,e){const t=[];return i.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(s=>{n[s]&&t.push(e+s)}):typeof n=="string"&&t.push(e+n)}),t}function Tb(){const i=this,{classNames:e,params:t,rtl:n,el:s,device:r}=i,o=Sb(["initialized",t.direction,{"free-mode":i.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),s.classList.add(...e),i.emitContainerClasses()}function bb(){const i=this,{el:e,classNames:t}=i;!e||typeof e=="string"||(e.classList.remove(...t),i.emitContainerClasses())}var Mb={addClasses:Tb,removeClasses:bb};function wb(){const i=this,{isLocked:e,params:t}=i,{slidesOffsetBefore:n}=t;if(n){const s=i.slides.length-1,r=i.slidesGrid[s]+i.slidesSizesGrid[s]+n*2;i.isLocked=i.size>r}else i.isLocked=i.snapGrid.length===1;t.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),t.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),e&&e!==i.isLocked&&(i.isEnd=!1),e!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var Ab={checkOverflow:wb},Xu={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Cb(i,e){return function(n){n===void 0&&(n={});const s=Object.keys(n)[0],r=n[s];if(typeof r!="object"||r===null){Ut(e,n);return}if(i[s]===!0&&(i[s]={enabled:!0}),s==="navigation"&&i[s]&&i[s].enabled&&!i[s].prevEl&&!i[s].nextEl&&(i[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&i[s]&&i[s].enabled&&!i[s].el&&(i[s].auto=!0),!(s in i&&"enabled"in r)){Ut(e,n);return}typeof i[s]=="object"&&!("enabled"in i[s])&&(i[s].enabled=!0),i[s]||(i[s]={enabled:!1}),Ut(e,n)}}const ga={eventsEmitter:MT,update:UT,translate:VT,transition:$T,slide:eb,loop:sb,grabCursor:ab,events:_b,breakpoints:Eb,checkOverflow:Ab,classes:Mb},va={};class Xt{constructor(){let e,t;for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?t=s[0]:[e,t]=s,t||(t={}),t=Ut({},t),e&&!t.el&&(t.el=e);const o=mn();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){const h=[];return o.querySelectorAll(t.el).forEach(p=>{const v=Ut({},t,{el:p});h.push(new Xt(v))}),h}const a=this;a.__swiper__=!0,a.support=Lh(),a.device=Ph({userAgent:t.userAgent}),a.browser=Ih(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],t.modules&&Array.isArray(t.modules)&&a.modules.push(...t.modules);const c={};a.modules.forEach(h=>{h({params:t,swiper:a,extendParams:Cb(t,c),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const u=Ut({},Xu,c);return a.params=Ut({},u,va,t),a.originalParams=Ut({},a.params),a.passedParams=Ut({},t),a.params&&a.params.on&&Object.keys(a.params.on).forEach(h=>{a.on(h,a.params.on[h])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,s=un(t,`.${n.slideClass}, swiper-slide`),r=Wr(s[0]);return Wr(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=un(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const s=n.minTranslate(),o=(n.maxTranslate()-s)*e+s;n.translateTo(o,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const s=e.getSlideClasses(n);t.push({slideEl:n,classNames:s}),e.emit("_slideClass",n,s)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const n=this,{params:s,slides:r,slidesGrid:o,slidesSizesGrid:a,size:c,activeIndex:u}=n;let h=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let p=r[u]?Math.ceil(r[u].swiperSlideSize):0,v;for(let g=u+1;g<r.length;g+=1)r[g]&&!v&&(p+=Math.ceil(r[g].swiperSlideSize),h+=1,p>c&&(v=!0));for(let g=u-1;g>=0;g-=1)r[g]&&!v&&(p+=r[g].swiperSlideSize,h+=1,p>c&&(v=!0))}else if(e==="current")for(let p=u+1;p<r.length;p+=1)(t?o[p]+a[p]-o[u]<c:o[p]-o[u]<c)&&(h+=1);else for(let p=u-1;p>=0;p-=1)o[u]-o[p]<c&&(h+=1);return h}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Dr(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)s(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const o=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(o.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||s()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const n=this,s=n.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${s}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const s=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(s()):un(n,s())[0];return!o&&t.params.createElements&&(o=Gr("div",t.params.wrapperClass),n.append(o),un(n,`.${t.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(t,{el:n,wrapperEl:o,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:o,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||Vn(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||Vn(n,"direction")==="rtl"),wrongRTL:Vn(o,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const s=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(r=>{r.complete?Dr(t,r):r.addEventListener("load",o=>{Dr(t,o.target)})}),pl(t),t.initialized=!0,pl(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const n=this,{params:s,el:r,wrapperEl:o,slides:a}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),s.loop&&n.loopDestroy(),t&&(n.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),o&&o.removeAttribute("style"),a&&a.length&&a.forEach(c=>{c.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),c.removeAttribute("style"),c.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(c=>{n.off(c)}),e!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),hT(n)),n.destroyed=!0),null}static extendDefaults(e){Ut(va,e)}static get extendedDefaults(){return va}static get defaults(){return Xu}static installModule(e){Xt.prototype.__modules__||(Xt.prototype.__modules__=[]);const t=Xt.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Xt.installModule(t)),Xt):(Xt.installModule(e),Xt)}}Object.keys(ga).forEach(i=>{Object.keys(ga[i]).forEach(e=>{Xt.prototype[e]=ga[i][e]})});Xt.use([TT,bT]);function Rb(i,e,t,n){return i.params.createElements&&Object.keys(n).forEach(s=>{if(!t[s]&&t.auto===!0){let r=un(i.el,`.${n[s]}`)[0];r||(r=Gr("div",n[s]),r.className=n[s],i.el.append(r)),t[s]=r,e[s]=r}}),t}function Ss(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function Lb(i){let{swiper:e,extendParams:t,on:n,emit:s}=i;const r="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:_=>_,formatFractionTotal:_=>_,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function c(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function u(_,y){const{bulletActiveClass:E}=e.params.pagination;_&&(_=_[`${y==="prev"?"previous":"next"}ElementSibling`],_&&(_.classList.add(`${E}-${y}`),_=_[`${y==="prev"?"previous":"next"}ElementSibling`],_&&_.classList.add(`${E}-${y}-${y}`)))}function h(_,y,E){if(_=_%E,y=y%E,y===_+1)return"next";if(y===_-1)return"previous"}function p(_){const y=_.target.closest(Ss(e.params.pagination.bulletClass));if(!y)return;_.preventDefault();const E=Wr(y)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===E)return;const M=h(e.realIndex,E,e.slides.length);M==="next"?e.slideNext():M==="previous"?e.slidePrev():e.slideToLoop(E)}else e.slideTo(E)}function v(){const _=e.rtl,y=e.params.pagination;if(c())return;let E=e.pagination.el;E=Sn(E);let M,C;const L=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,I=e.params.loop?Math.ceil(L/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,M=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(M=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,M=e.activeIndex||0),y.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const w=e.pagination.bullets;let T,P,N;if(y.dynamicBullets&&(o=fl(w[0],e.isHorizontal()?"width":"height"),E.forEach(U=>{U.style[e.isHorizontal()?"width":"height"]=`${o*(y.dynamicMainBullets+4)}px`}),y.dynamicMainBullets>1&&C!==void 0&&(a+=M-(C||0),a>y.dynamicMainBullets-1?a=y.dynamicMainBullets-1:a<0&&(a=0)),T=Math.max(M-a,0),P=T+(Math.min(w.length,y.dynamicMainBullets)-1),N=(P+T)/2),w.forEach(U=>{const z=[...["","-next","-next-next","-prev","-prev-prev","-main"].map($=>`${y.bulletActiveClass}${$}`)].map($=>typeof $=="string"&&$.includes(" ")?$.split(" "):$).flat();U.classList.remove(...z)}),E.length>1)w.forEach(U=>{const z=Wr(U);z===M?U.classList.add(...y.bulletActiveClass.split(" ")):e.isElement&&U.setAttribute("part","bullet"),y.dynamicBullets&&(z>=T&&z<=P&&U.classList.add(...`${y.bulletActiveClass}-main`.split(" ")),z===T&&u(U,"prev"),z===P&&u(U,"next"))});else{const U=w[M];if(U&&U.classList.add(...y.bulletActiveClass.split(" ")),e.isElement&&w.forEach((z,$)=>{z.setAttribute("part",$===M?"bullet-active":"bullet")}),y.dynamicBullets){const z=w[T],$=w[P];for(let F=T;F<=P;F+=1)w[F]&&w[F].classList.add(...`${y.bulletActiveClass}-main`.split(" "));u(z,"prev"),u($,"next")}}if(y.dynamicBullets){const U=Math.min(w.length,y.dynamicMainBullets+4),z=(o*U-o)/2-N*o,$=_?"right":"left";w.forEach(F=>{F.style[e.isHorizontal()?$:"top"]=`${z}px`})}}E.forEach((w,T)=>{if(y.type==="fraction"&&(w.querySelectorAll(Ss(y.currentClass)).forEach(P=>{P.textContent=y.formatFractionCurrent(M+1)}),w.querySelectorAll(Ss(y.totalClass)).forEach(P=>{P.textContent=y.formatFractionTotal(I)})),y.type==="progressbar"){let P;y.progressbarOpposite?P=e.isHorizontal()?"vertical":"horizontal":P=e.isHorizontal()?"horizontal":"vertical";const N=(M+1)/I;let U=1,z=1;P==="horizontal"?U=N:z=N,w.querySelectorAll(Ss(y.progressbarFillClass)).forEach($=>{$.style.transform=`translate3d(0,0,0) scaleX(${U}) scaleY(${z})`,$.style.transitionDuration=`${e.params.speed}ms`})}y.type==="custom"&&y.renderCustom?(ku(w,y.renderCustom(e,M+1,I)),T===0&&s("paginationRender",w)):(T===0&&s("paginationRender",w),s("paginationUpdate",w)),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](y.lockClass)})}function g(){const _=e.params.pagination;if(c())return;const y=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let E=e.pagination.el;E=Sn(E);let M="";if(_.type==="bullets"){let C=e.params.loop?Math.ceil(y/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>y&&(C=y);for(let L=0;L<C;L+=1)_.renderBullet?M+=_.renderBullet.call(e,L,_.bulletClass):M+=`<${_.bulletElement} ${e.isElement?'part="bullet"':""} class="${_.bulletClass}"></${_.bulletElement}>`}_.type==="fraction"&&(_.renderFraction?M=_.renderFraction.call(e,_.currentClass,_.totalClass):M=`<span class="${_.currentClass}"></span> / <span class="${_.totalClass}"></span>`),_.type==="progressbar"&&(_.renderProgressbar?M=_.renderProgressbar.call(e,_.progressbarFillClass):M=`<span class="${_.progressbarFillClass}"></span>`),e.pagination.bullets=[],E.forEach(C=>{_.type!=="custom"&&ku(C,M||""),_.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(Ss(_.bulletClass)))}),_.type!=="custom"&&s("paginationRender",E[0])}function x(){e.params.pagination=Rb(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const _=e.params.pagination;if(!_.el)return;let y;typeof _.el=="string"&&e.isElement&&(y=e.el.querySelector(_.el)),!y&&typeof _.el=="string"&&(y=[...document.querySelectorAll(_.el)]),y||(y=_.el),!(!y||y.length===0)&&(e.params.uniqueNavElements&&typeof _.el=="string"&&Array.isArray(y)&&y.length>1&&(y=[...e.el.querySelectorAll(_.el)],y.length>1&&(y=y.find(E=>Rh(E,".swiper")[0]===e.el))),Array.isArray(y)&&y.length===1&&(y=y[0]),Object.assign(e.pagination,{el:y}),y=Sn(y),y.forEach(E=>{_.type==="bullets"&&_.clickable&&E.classList.add(...(_.clickableClass||"").split(" ")),E.classList.add(_.modifierClass+_.type),E.classList.add(e.isHorizontal()?_.horizontalClass:_.verticalClass),_.type==="bullets"&&_.dynamicBullets&&(E.classList.add(`${_.modifierClass}${_.type}-dynamic`),a=0,_.dynamicMainBullets<1&&(_.dynamicMainBullets=1)),_.type==="progressbar"&&_.progressbarOpposite&&E.classList.add(_.progressbarOppositeClass),_.clickable&&E.addEventListener("click",p),e.enabled||E.classList.add(_.lockClass)}))}function S(){const _=e.params.pagination;if(c())return;let y=e.pagination.el;y&&(y=Sn(y),y.forEach(E=>{E.classList.remove(_.hiddenClass),E.classList.remove(_.modifierClass+_.type),E.classList.remove(e.isHorizontal()?_.horizontalClass:_.verticalClass),_.clickable&&(E.classList.remove(...(_.clickableClass||"").split(" ")),E.removeEventListener("click",p))})),e.pagination.bullets&&e.pagination.bullets.forEach(E=>E.classList.remove(..._.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const _=e.params.pagination;let{el:y}=e.pagination;y=Sn(y),y.forEach(E=>{E.classList.remove(_.horizontalClass,_.verticalClass),E.classList.add(e.isHorizontal()?_.horizontalClass:_.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?l():(x(),g(),v())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&v()}),n("snapIndexChange",()=>{v()}),n("snapGridLengthChange",()=>{g(),v()}),n("destroy",()=>{S()}),n("enable disable",()=>{let{el:_}=e.pagination;_&&(_=Sn(_),_.forEach(y=>y.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{v()}),n("click",(_,y)=>{const E=y.target,M=Sn(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&M&&M.length>0&&!E.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&E===e.navigation.nextEl||e.navigation.prevEl&&E===e.navigation.prevEl))return;const C=M[0].classList.contains(e.params.pagination.hiddenClass);s(C===!0?"paginationShow":"paginationHide"),M.forEach(L=>L.classList.toggle(e.params.pagination.hiddenClass))}});const f=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:_}=e.pagination;_&&(_=Sn(_),_.forEach(y=>y.classList.remove(e.params.pagination.paginationDisabledClass))),x(),g(),v()},l=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:_}=e.pagination;_&&(_=Sn(_),_.forEach(y=>y.classList.add(e.params.pagination.paginationDisabledClass))),S()};Object.assign(e.pagination,{enable:f,disable:l,render:g,update:v,init:x,destroy:S})}function Pb(i){let{swiper:e,extendParams:t,on:n,emit:s,params:r}=i;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,c=r&&r.autoplay?r.autoplay.delay:3e3,u=r&&r.autoplay?r.autoplay.delay:3e3,h,p=new Date().getTime(),v,g,x,S,f,l,_;function y(V){!e||e.destroyed||!e.wrapperEl||V.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",y),!(_||V.detail&&V.detail.bySwiperTouchMove)&&T())}const E=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?v=!0:v&&(u=h,v=!1);const V=e.autoplay.paused?h:p+u-new Date().getTime();e.autoplay.timeLeft=V,s("autoplayTimeLeft",V,V/c),a=requestAnimationFrame(()=>{E()})},M=()=>{let V;return e.virtual&&e.params.virtual.enabled?V=e.slides.find(le=>le.classList.contains("swiper-slide-active")):V=e.slides[e.activeIndex],V?parseInt(V.getAttribute("data-swiper-autoplay"),10):void 0},C=V=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),E();let ie=typeof V>"u"?e.params.autoplay.delay:V;c=e.params.autoplay.delay,u=e.params.autoplay.delay;const le=M();!Number.isNaN(le)&&le>0&&typeof V>"u"&&(ie=le,c=le,u=le),h=ie;const _e=e.params.speed,Le=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(_e,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,_e,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(_e,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,_e,!0,!0),s("autoplay")),e.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return ie>0?(clearTimeout(o),o=setTimeout(()=>{Le()},ie)):requestAnimationFrame(()=>{Le()}),ie},L=()=>{p=new Date().getTime(),e.autoplay.running=!0,C(),s("autoplayStart")},I=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),s("autoplayStop")},w=(V,ie)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),V||(l=!0);const le=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",y):T()};if(e.autoplay.paused=!0,ie){f&&(h=e.params.autoplay.delay),f=!1,le();return}h=(h||e.params.autoplay.delay)-(new Date().getTime()-p),!(e.isEnd&&h<0&&!e.params.loop)&&(h<0&&(h=0),le())},T=()=>{e.isEnd&&h<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(p=new Date().getTime(),l?(l=!1,C(h)):C(),e.autoplay.paused=!1,s("autoplayResume"))},P=()=>{if(e.destroyed||!e.autoplay.running)return;const V=mn();V.visibilityState==="hidden"&&(l=!0,w(!0)),V.visibilityState==="visible"&&T()},N=V=>{V.pointerType==="mouse"&&(l=!0,_=!0,!(e.animating||e.autoplay.paused)&&w(!0))},U=V=>{V.pointerType==="mouse"&&(_=!1,e.autoplay.paused&&T())},z=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",N),e.el.addEventListener("pointerleave",U))},$=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",N),e.el.removeEventListener("pointerleave",U))},F=()=>{mn().addEventListener("visibilitychange",P)},q=()=>{mn().removeEventListener("visibilitychange",P)};n("init",()=>{e.params.autoplay.enabled&&(z(),F(),L())}),n("destroy",()=>{$(),q(),e.autoplay.running&&I()}),n("_freeModeStaticRelease",()=>{(x||l)&&T()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?I():w(!0,!0)}),n("beforeTransitionStart",(V,ie,le)=>{e.destroyed||!e.autoplay.running||(le||!e.params.autoplay.disableOnInteraction?w(!0,!0):I())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){I();return}g=!0,x=!1,l=!1,S=setTimeout(()=>{l=!0,x=!0,w(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!g)){if(clearTimeout(S),clearTimeout(o),e.params.autoplay.disableOnInteraction){x=!1,g=!1;return}x&&e.params.cssMode&&T(),x=!1,g=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||(f=!0)}),Object.assign(e.autoplay,{start:L,stop:I,pause:w,resume:T})}function ml(){return ml=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},ml.apply(this,arguments)}var Ib={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,e){},onStringTyped:function(i,e){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,e){},onTypingResumed:function(i,e){},onReset:function(i){},onStop:function(i,e){},onStart:function(i,e){},onDestroy:function(i){}},Db=new(function(){function i(){}var e=i.prototype;return e.load=function(t,n,s){if(t.el=typeof s=="string"?document.querySelector(s):s,t.options=ml({},Ib,n),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(u){return u.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(t.stringsElement.children),o=r.length;if(o)for(var a=0;a<o;a+=1)t.strings.push(r[a].innerHTML.trim())}for(var c in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[c]=c;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var n="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+n+"]")){var s=document.createElement("style");s.setAttribute(n,"true"),s.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(s)}},e.appendFadeOutAnimationCss=function(t){var n="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+n+"]")){var s=document.createElement("style");s.setAttribute(n,"true"),s.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(s)}},i}()),$u=new(function(){function i(){}var e=i.prototype;return e.typeHtmlChars=function(t,n,s){if(s.contentType!=="html")return n;var r=t.substring(n).charAt(0);if(r==="<"||r==="&"){var o;for(o=r==="<"?">":";";t.substring(n+1).charAt(0)!==o&&!(1+ ++n>t.length););n++}return n},e.backSpaceHtmlChars=function(t,n,s){if(s.contentType!=="html")return n;var r=t.substring(n).charAt(0);if(r===">"||r===";"){var o;for(o=r===">"?"<":"&";t.substring(n-1).charAt(0)!==o&&!(--n<0););n--}return n},i}()),Ob=function(){function i(t,n){Db.load(this,n,t),this.begin()}var e=i.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,n){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){n=$u.typeHtmlChars(t,n,s);var a=0,c=t.substring(n);if(c.charAt(0)==="^"&&/^\^\d+/.test(c)){var u=1;u+=(c=/\d+/.exec(c)[0]).length,a=parseInt(c),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,n)+t.substring(n+u),s.toggleBlinking(!0)}if(c.charAt(0)==="`"){for(;t.substring(n+o).charAt(0)!=="`"&&(o++,!(n+o>t.length)););var h=t.substring(0,n),p=t.substring(h.length+1,n+o),v=t.substring(n+o+1);t=h+p+v,o--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),n>=t.length?s.doneTyping(t,n):s.keepTyping(t,n,o),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},a)},r):this.setPauseStatus(t,n,!0)},e.keepTyping=function(t,n,s){n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var r=t.substring(0,n+=s);this.replaceText(r),this.typewrite(t,n)},e.doneTyping=function(t,n){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,n)},this.backDelay))},e.backspace=function(t,n){var s=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=$u.backSpaceHtmlChars(t,n,s);var o=t.substring(0,n);if(s.replaceText(o),s.smartBackspace){var a=s.strings[s.arrayPos+1];s.stopNum=a&&o===a.substring(0,n)?n:0}n>s.stopNum?(n--,s.backspace(t,n)):n<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],n))},r)}else this.setPauseStatus(t,n,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,n,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=n},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(n){t.stop()}),this.el.addEventListener("blur",function(n){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i}(),_a={exports:{}};/*!
 * purecounter.js - A simple yet configurable native javascript counter which you can count on.
 * Author: Stig Rex
 * Version: 1.5.0
 * Url: https://github.com/srexi/purecounterjs
 * License: MIT
 */var qu;function Nb(){return qu||(qu=1,function(i,e){(function(t,n){i.exports=n()})(self,function(){return function(){var t={3:function(r,o,a){function c(g){return function(x){if(Array.isArray(x))return u(x)}(g)||function(x){if(typeof Symbol<"u"&&x[Symbol.iterator]!=null||x["@@iterator"]!=null)return Array.from(x)}(g)||function(x,S){if(x){if(typeof x=="string")return u(x,S);var f=Object.prototype.toString.call(x).slice(8,-1);if(f==="Object"&&x.constructor&&(f=x.constructor.name),f==="Map"||f==="Set")return Array.from(x);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return u(x,S)}}(g)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function u(g,x){(x==null||x>g.length)&&(x=g.length);for(var S=0,f=new Array(x);S<x;S++)f[S]=g[S];return f}function h(g,x){if(!(g instanceof x))throw new TypeError("Cannot call a class as a function")}function p(g,x){for(var S=0;S<x.length;S++){var f=x[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(g,f.key,f)}}a.d(o,{Z:function(){return v}});var v=function(){function g(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};h(this,g),this.defaults={start:0,end:100,duration:2e3,delay:10,once:!0,pulse:!1,decimals:0,legacy:!0,filesizing:!1,currency:!1,separator:!1,formater:"us-US",selector:".purecounter"},this.configOptions=this.setOptions(f,this.defaults),this.elements=document.querySelectorAll(this.configOptions.selector),this.intersectionSupport=this.intersectionListenerSupported(),this.registerEventListeners()}var x,S;return x=g,S=[{key:"setOptions",value:function(f){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_={};for(var y in f)if(Object.keys(l).length===0||l.hasOwnProperty(y)){var E=this.parseValue(f[y]);_[y]=E,y.match(/duration|pulse/)&&(_[y]=typeof E!="boolean"?1e3*E:E)}return Object.assign({},l,_)}},{key:"registerEventListeners",value:function(){var f=this.elements;if(f.length!==0)if(this.intersectionSupport){var l=new IntersectionObserver(this.animateElements.bind(this),{root:null,rootMargin:"20px",threshold:.5});f.forEach(function(_){l.observe(_)})}else window.addEventListener&&(this.animateLegacy(f),window.addEventListener("scroll",function(_){this.animateLegacy(f)},{passive:!0}))}},{key:"animateLegacy",value:function(f){var l=this;f.forEach(function(_){l.parseConfig(_).legacy===!0&&l.elementIsInView(_)&&l.animateElements([_])})}},{key:"animateElements",value:function(f,l){var _=this;f.forEach(function(y){var E=y.target||y,M=_.parseConfig(E);if(M.duration<=0)return E.innerHTML=_.formatNumber(M.end,M);if(!l&&!_.elementIsInView(y)||l&&y.intersectionRatio<.5){var C=M.start>M.end?M.end:M.start;return E.innerHTML=_.formatNumber(C,M)}setTimeout(function(){return _.startCounter(E,M)},M.delay)})}},{key:"startCounter",value:function(f,l){var _=this,y=(l.end-l.start)/(l.duration/l.delay),E="inc";l.start>l.end&&(E="dec",y*=-1);var M=this.parseValue(l.start);f.innerHTML=this.formatNumber(M,l),l.once===!0&&f.setAttribute("data-purecounter-duration",0);var C=setInterval(function(){var L=_.nextNumber(M,y,E);f.innerHTML=_.formatNumber(L,l),((M=L)>=l.end&&E==="inc"||M<=l.end&&E==="dec")&&(f.innerHTML=_.formatNumber(l.end,l),l.pulse&&(f.setAttribute("data-purecounter-duration",0),setTimeout(function(){f.setAttribute("data-purecounter-duration",l.duration/1e3)},l.pulse)),clearInterval(C))},l.delay)}},{key:"parseConfig",value:function(f){var l=this,_=[].filter.call(f.attributes,function(E){return/^data-purecounter-/.test(E.name)}),y=_.length!=0?Object.assign.apply(Object,[{}].concat(c(_.map(function(E){var M=E.name,C=E.value;return function(L,I,w){return I in L?Object.defineProperty(L,I,{value:w,enumerable:!0,configurable:!0,writable:!0}):L[I]=w,L}({},M.replace("data-purecounter-","").toLowerCase(),l.parseValue(C))})))):{};return this.setOptions(y,this.configOptions)}},{key:"nextNumber",value:function(f,l){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"inc";return f=this.parseValue(f),l=this.parseValue(l),parseFloat(_==="inc"?f+l:f-l)}},{key:"convertNumber",value:function(f,l){if(l.filesizing||l.currency){f=Math.abs(Number(f));var _=1e3,y=l.currency&&typeof l.currency=="string"?l.currency:"",E=l.decimals||1,M=["","K","M","B","T"],C="";l.filesizing&&(_=1024,M=["bytes","KB","MB","GB","TB"]);for(var L=4;L>=0;L--)if(L===0&&(C="".concat(f.toFixed(E)," ").concat(M[L])),f>=this.getFilesizeThreshold(_,L)){C="".concat((f/this.getFilesizeThreshold(_,L)).toFixed(E)," ").concat(M[L]);break}return y+C}return parseFloat(f)}},{key:"getFilesizeThreshold",value:function(f,l){return Math.pow(f,l)}},{key:"applySeparator",value:function(f,l){if(l.formater){var _=l.separator?typeof l.separator=="string"?l.separator:",":"";return l.formater!=="en-US"&&l.separator===!0?f:(y=_,f.replace(/^(?:(\d{1,3},(?:\d{1,3},?)*)|(\d{1,3}\.(?:\d{1,3}\.?)*)|(\d{1,3}(?:\s\d{1,3})*))([\.,]?\d{0,2}?)$/gi,function(E,M,C,L,I){var w="",T="";if(M!==void 0?(w=M.replace(new RegExp(/,/gi,"gi"),y),T=","):C!==void 0?w=C.replace(new RegExp(/\./gi,"gi"),y):L!==void 0&&(w=L.replace(new RegExp(/ /gi,"gi"),y)),I!==void 0){var P=T!==","&&y!==","?",":".";w+=I.replace(new RegExp(/\.|,/gi,"gi"),P)}return w}))}var y;return f}},{key:"formatNumber",value:function(f,l){var _={minimumFractionDigits:l.decimals,maximumFractionDigits:l.decimals},y=typeof l.formater=="string"?l.formater:void 0;return f=this.convertNumber(f,l),f=l.formater?f.toLocaleString(y,_):parseInt(f).toString(),this.applySeparator(f,l)}},{key:"getLocaleSeparator",value:function(){}},{key:"parseValue",value:function(f){return/^[0-9]+\.[0-9]+$/.test(f)?parseFloat(f):/^[0-9]+$/.test(f)?parseInt(f):/^true|false/i.test(f)?/^true/i.test(f):f}},{key:"elementIsInView",value:function(f){for(var l=f.offsetTop,_=f.offsetLeft,y=f.offsetWidth,E=f.offsetHeight;f.offsetParent;)l+=(f=f.offsetParent).offsetTop,_+=f.offsetLeft;return l>=window.pageYOffset&&_>=window.pageXOffset&&l+E<=window.pageYOffset+window.innerHeight&&_+y<=window.pageXOffset+window.innerWidth}},{key:"intersectionListenerSupported",value:function(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}}],S&&p(x.prototype,S),Object.defineProperty(x,"prototype",{writable:!1}),g}()},634:function(r,o,a){var c=a(3).Z;r.exports=c}},n={};function s(r){var o=n[r];if(o!==void 0)return o.exports;var a=n[r]={exports:{}};return t[r](a,a.exports,s),a.exports}return s.d=function(r,o){for(var a in o)s.o(o,a)&&!s.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:o[a]})},s.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},s(634)}()})}(_a)),_a.exports}var Ub=Nb();const Fb=gl(Ub);/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/(function(){var i=0,e={};function t(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+i,this.options=t.Adapter.extend({},t.defaults,n),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),e[this.key]=this,i+=1}t.prototype.queueTrigger=function(n){this.group.queueTrigger(this,n)},t.prototype.trigger=function(n){this.enabled&&this.callback&&this.callback.apply(this,n)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete e[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(n){var s=[];for(var r in e)s.push(e[r]);for(var o=0,a=s.length;o<a;o++)s[o][n]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var n in e)e[n].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t})();(function(){function i(o){window.setTimeout(o,1e3/60)}var e=0,t={},n=window.Waypoint,s=window.onload;function r(o){this.element=o,this.Adapter=n.Adapter,this.adapter=new this.Adapter(o),this.key="waypoint-context-"+e,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},o.waypointContextKey=this.key,t[o.waypointContextKey]=this,e+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new r(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}r.prototype.add=function(o){var a=o.options.horizontal?"horizontal":"vertical";this.waypoints[a][o.key]=o,this.refresh()},r.prototype.checkEmpty=function(){var o=this.Adapter.isEmptyObject(this.waypoints.horizontal),a=this.Adapter.isEmptyObject(this.waypoints.vertical),c=this.element==this.element.window;o&&a&&!c&&(this.adapter.off(".waypoints"),delete t[this.key])},r.prototype.createThrottledResizeHandler=function(){var o=this;function a(){o.handleResize(),o.didResize=!1}this.adapter.on("resize.waypoints",function(){o.didResize||(o.didResize=!0,n.requestAnimationFrame(a))})},r.prototype.createThrottledScrollHandler=function(){var o=this;function a(){o.handleScroll(),o.didScroll=!1}this.adapter.on("scroll.waypoints",function(){(!o.didScroll||n.isTouch)&&(o.didScroll=!0,n.requestAnimationFrame(a))})},r.prototype.handleResize=function(){n.Context.refreshAll()},r.prototype.handleScroll=function(){var o={},a={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var c in a){var u=a[c],h=u.newScroll>u.oldScroll,p=h?u.forward:u.backward;for(var v in this.waypoints[c]){var g=this.waypoints[c][v];if(g.triggerPoint!==null){var x=u.oldScroll<g.triggerPoint,S=u.newScroll>=g.triggerPoint,f=x&&S,l=!x&&!S;(f||l)&&(g.queueTrigger(p),o[g.group.id]=g.group)}}}for(var _ in o)o[_].flushTriggers();this.oldScroll={x:a.horizontal.newScroll,y:a.vertical.newScroll}},r.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},r.prototype.remove=function(o){delete this.waypoints[o.axis][o.key],this.checkEmpty()},r.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},r.prototype.destroy=function(){var o=[];for(var a in this.waypoints)for(var c in this.waypoints[a])o.push(this.waypoints[a][c]);for(var u=0,h=o.length;u<h;u++)o[u].destroy()},r.prototype.refresh=function(){var o=this.element==this.element.window,a=o?void 0:this.adapter.offset(),c={},u;this.handleScroll(),u={horizontal:{contextOffset:o?0:a.left,contextScroll:o?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:o?0:a.top,contextScroll:o?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var h in u){var p=u[h];for(var v in this.waypoints[h]){var g=this.waypoints[h][v],x=g.options.offset,S=g.triggerPoint,f=0,l=S==null,_,y,E,M,C;g.element!==g.element.window&&(f=g.adapter.offset()[p.offsetProp]),typeof x=="function"?x=x.apply(g):typeof x=="string"&&(x=parseFloat(x),g.options.offset.indexOf("%")>-1&&(x=Math.ceil(p.contextDimension*x/100))),_=p.contextScroll-p.contextOffset,g.triggerPoint=Math.floor(f+_-x),y=S<p.oldScroll,E=g.triggerPoint>=p.oldScroll,M=y&&E,C=!y&&!E,!l&&M?(g.queueTrigger(p.backward),c[g.group.id]=g.group):(!l&&C||l&&p.oldScroll>=g.triggerPoint)&&(g.queueTrigger(p.forward),c[g.group.id]=g.group)}}return n.requestAnimationFrame(function(){for(var L in c)c[L].flushTriggers()}),this},r.findOrCreateByElement=function(o){return r.findByElement(o)||new r(o)},r.refreshAll=function(){for(var o in t)t[o].refresh()},r.findByElement=function(o){return t[o.waypointContextKey]},window.onload=function(){s&&s(),r.refreshAll()},n.requestAnimationFrame=function(o){var a=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||i;a.call(window,o)},n.Context=r})();(function(){function i(r,o){return r.triggerPoint-o.triggerPoint}function e(r,o){return o.triggerPoint-r.triggerPoint}var t={vertical:{},horizontal:{}},n=window.Waypoint;function s(r){this.name=r.name,this.axis=r.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),t[this.axis][this.name]=this}s.prototype.add=function(r){this.waypoints.push(r)},s.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},s.prototype.flushTriggers=function(){for(var r in this.triggerQueues){var o=this.triggerQueues[r],a=r==="up"||r==="left";o.sort(a?e:i);for(var c=0,u=o.length;c<u;c+=1){var h=o[c];(h.options.continuous||c===o.length-1)&&h.trigger([r])}}this.clearTriggerQueues()},s.prototype.next=function(r){this.waypoints.sort(i);var o=n.Adapter.inArray(r,this.waypoints),a=o===this.waypoints.length-1;return a?null:this.waypoints[o+1]},s.prototype.previous=function(r){this.waypoints.sort(i);var o=n.Adapter.inArray(r,this.waypoints);return o?this.waypoints[o-1]:null},s.prototype.queueTrigger=function(r,o){this.triggerQueues[o].push(r)},s.prototype.remove=function(r){var o=n.Adapter.inArray(r,this.waypoints);o>-1&&this.waypoints.splice(o,1)},s.prototype.first=function(){return this.waypoints[0]},s.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},s.findOrCreate=function(r){return t[r.axis][r.name]||new s(r)},n.Group=s})();(function(){var i=window.Waypoint;function e(s){return s===s.window}function t(s){return e(s)?s:s.defaultView}function n(s){this.element=s,this.handlers={}}n.prototype.innerHeight=function(){var s=e(this.element);return s?this.element.innerHeight:this.element.clientHeight},n.prototype.innerWidth=function(){var s=e(this.element);return s?this.element.innerWidth:this.element.clientWidth},n.prototype.off=function(s,r){function o(g,x,S){for(var f=0,l=x.length-1;f<l;f++){var _=x[f];(!S||S===_)&&g.removeEventListener(_)}}var a=s.split("."),c=a[0],u=a[1],h=this.element;if(u&&this.handlers[u]&&c)o(h,this.handlers[u][c],r),this.handlers[u][c]=[];else if(c)for(var p in this.handlers)o(h,this.handlers[p][c]||[],r),this.handlers[p][c]=[];else if(u&&this.handlers[u]){for(var v in this.handlers[u])o(h,this.handlers[u][v],r);this.handlers[u]={}}},n.prototype.offset=function(){if(!this.element.ownerDocument)return null;var s=this.element.ownerDocument.documentElement,r=t(this.element.ownerDocument),o={top:0,left:0};return this.element.getBoundingClientRect&&(o=this.element.getBoundingClientRect()),{top:o.top+r.pageYOffset-s.clientTop,left:o.left+r.pageXOffset-s.clientLeft}},n.prototype.on=function(s,r){var o=s.split("."),a=o[0],c=o[1]||"__default",u=this.handlers[c]=this.handlers[c]||{},h=u[a]=u[a]||[];h.push(r),this.element.addEventListener(a,r)},n.prototype.outerHeight=function(s){var r=this.innerHeight(),o;return s&&!e(this.element)&&(o=window.getComputedStyle(this.element),r+=parseInt(o.marginTop,10),r+=parseInt(o.marginBottom,10)),r},n.prototype.outerWidth=function(s){var r=this.innerWidth(),o;return s&&!e(this.element)&&(o=window.getComputedStyle(this.element),r+=parseInt(o.marginLeft,10),r+=parseInt(o.marginRight,10)),r},n.prototype.scrollLeft=function(){var s=t(this.element);return s?s.pageXOffset:this.element.scrollLeft},n.prototype.scrollTop=function(){var s=t(this.element);return s?s.pageYOffset:this.element.scrollTop},n.extend=function(){var s=Array.prototype.slice.call(arguments);function r(c,u){if(typeof c=="object"&&typeof u=="object")for(var h in u)u.hasOwnProperty(h)&&(c[h]=u[h]);return c}for(var o=1,a=s.length;o<a;o++)r(s[0],s[o]);return s[0]},n.inArray=function(s,r,o){return r==null?-1:r.indexOf(s,o)},n.isEmptyObject=function(s){for(var r in s)return!1;return!0},i.adapters.push({name:"noframework",Adapter:n}),i.Adapter=n})();document.addEventListener("DOMContentLoaded",()=>{const i=(N,U=!1)=>(N=N.trim(),U?[...document.querySelectorAll(N)]:document.querySelector(N)),e=(N,U,z,$=!1)=>{let F=i(U,$);F&&($?F.forEach(q=>q.addEventListener(N,z)):F.addEventListener(N,z))};new Fb,window.addEventListener("load",()=>{let N=i(".portfolio-container");if(N){let U=new cT(N,{itemSelector:".portfolio-item",filter:".filter-videos"}),z=i("#portfolio-flters li",!0);e("click","#portfolio-flters li",function($){$.preventDefault(),z.forEach(F=>F.classList.remove("filter-active")),this.classList.add("filter-active"),U.arrange({filter:this.getAttribute("data-filter")})},!0)}}),QS({selector:".portfolio-lightbox"}),new Xt(".testimonials-slider",{modules:[Pb,Lb],speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:1,spaceBetween:20,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{992:{slidesPerView:3}}});const t=i(".typed");if(t){let N=t.getAttribute("data-typed-items").split(",");new Ob(".typed",{strings:N,loop:!0,typeSpeed:100,backSpeed:50,backDelay:2e3})}const n=i(".back-to-top");if(n){const N=()=>{window.scrollY>100?n.classList.add("active"):n.classList.remove("active")};window.addEventListener("load",N),document.addEventListener("scroll",N)}const s=i(".skills-content");s&&new Waypoint({element:s,offset:"25%",handler:function(N){i(".progress .progress-bar",!0).forEach(z=>{z.style.width=z.getAttribute("aria-valuenow")+"%"})}}),document.querySelectorAll(".pricing-item").forEach(N=>{const U=N.querySelector(".features-list");if(!U)return;const z=U.querySelectorAll("li"),$=N.querySelector(".toggle-features");if(z.length>3){$.classList.remove("d-none");for(let F=3;F<z.length;F++)z[F].classList.add("collapsible");$.addEventListener("click",function(F){F.preventDefault(),this.classList.toggle("active"),U.classList.toggle("expanded"),this.classList.contains("active")?this.innerHTML='Ver menos <i class="bi bi-chevron-up"></i>':this.innerHTML='Ver más <i class="bi bi-chevron-down"></i>'})}}),document.querySelectorAll(".pricing .pricing-item").forEach(N=>{N.addEventListener("mousemove",U=>{const z=N.getBoundingClientRect(),$=U.clientX-z.left,F=U.clientY-z.top,q=N.offsetWidth/2,V=N.offsetHeight/2,ie=(F-V)/V*-7,le=($-q)/q*7;N.style.transform=`perspective(1000px) rotateX(${ie}deg) rotateY(${le}deg) scale3d(1.05, 1.05, 1.05)`}),N.addEventListener("mouseleave",()=>{N.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"})});let o=null;document.querySelectorAll(".portfolio-item.filter-videos .portfolio-wrap").forEach(N=>{const U=N.querySelector("video");if(!U)return;const z=document.createElement("button");z.className="video-play-button",z.innerHTML='<i class="bi bi-play-fill"></i>',N.appendChild(z);const $=()=>{U.paused?(o&&o!==U&&o.pause(),U.play(),o=U):(U.pause(),o=null)};z.addEventListener("click",F=>{F.stopPropagation(),$()}),U.addEventListener("click",F=>{F.stopPropagation(),U.paused||$()}),U.onplay=()=>{z.innerHTML='<i class="bi bi-pause-fill"></i>',N.classList.add("is-playing")},U.onpause=()=>{z.innerHTML='<i class="bi bi-play-fill"></i>',N.classList.remove("is-playing")}});const a=i(".php-email-form");a&&a.addEventListener("submit",function(N){N.preventDefault();let U=this,z=U.querySelector(".loading"),$=U.querySelector(".error-message"),F=U.querySelector(".sent-message");z.style.display="block",$.style.display="none",F.style.display="none",fetch(U.action,{method:"POST",body:new FormData(U),headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content"),Accept:"application/json"}}).then(q=>{if(q.ok)return q.json();throw new Error("Hubo un problema con el servidor.")}).then(q=>{z.style.display="none",q.success?(F.style.display="block",U.reset()):($.innerHTML=q.message||"Ocurrió un error inesperado.",$.style.display="block")}).catch(q=>{z.style.display="none",$.innerHTML="No se pudo conectar con el servidor. Por favor, revisa tu conexión a internet.",$.style.display="block",console.error("Error en la solicitud Fetch:",q)})});const c=i("#toggle-resume-button");if(c){const N=i("#resume-content");N&&c.addEventListener("click",function(U){U.preventDefault(),this.classList.toggle("active"),N.classList.toggle("expanded"),this.classList.contains("active")?this.innerHTML='Ocultar Experiencia <i class="bi bi-chevron-up"></i>':this.innerHTML='Ver Experiencia Detallada <i class="bi bi-chevron-down"></i>'})}const u={capcut:100,premiere:90,photoshop:75,illustrator:80,gimp:90,metaAds:75};function h(N,U){const z=document.getElementById(N);if(!z){console.error(`Canvas element with ID '${N}' not found.`);return}z.width=150,z.height=150;const $=100-U;let F="#149ddd",q="#f3f3f3";document.body.classList.contains("dark-mode")&&(F="#50C878",q="#2B2E27");const V=Chart.getChart(z);V&&V.destroy(),new Chart(z,{type:"doughnut",data:{datasets:[{data:[U,$],backgroundColor:[F,q],borderWidth:0,cutout:"70%",circumference:360,rotation:-90}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}}}}),console.log(`Gráfico ${N} inicializado. Dimensiones: ${z.width}x${z.height}`)}h("capcutChart",u.capcut),h("premiereChart",u.premiere),h("photoshopChart",u.photoshop),h("illustratorChart",u.illustrator),h("gimpChart",u.gimp),h("metaAdsChart",u.metaAds);const p=document.getElementById("hero-animation-canvas");if(!p){console.error("Canvas element not found!");return}const v=new sp,g=new qt(75,window.innerWidth/window.innerHeight,.1,1e3),x=new K_({canvas:p,antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),x.setPixelRatio(window.devicePixelRatio),g.position.z=100;const S=new hp(16777215,1);v.add(S);const f=new et,l=new Ts;function _(){l.remove(...l.children);const N=5,U=.25,z=6.35;for(let $=-N;$<=N;$++)for(let F=-N;F<=N;F++)for(let q=-N;q<=N;q++){if(Math.sqrt($*$+F*F+q*q)>N*.9)continue;const ie=new Al(U,12,12),le=new wl({color:13421772}),_e=new Yt(ie,le);_e.position.set($*z,F*z,q*z),l.add(_e)}v.add(l),l.position.set(0,0,0)}const y=[new We(4868682),new We(2829863),new We(3355443),new We(2763306),new We(2500134),new We(3556687),new We(3421236),new We(2041386)],E=y[Math.floor(Math.random()*y.length)],M=y[Math.floor(Math.random()*y.length)],C=new Qi(window.innerWidth*2,window.innerHeight*2),L=new Pn({uniforms:{color1:{value:E},color2:{value:M},u_time:{value:.25}},vertexShader:`
        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float u_time;

        void main() {
            vec2 uv = gl_FragCoord.xy / vec2(gl_FragCoord.x, gl_FragCoord.y);
            float gradient = (sin(uv.x * 3.0 + u_time) + 1.0) / 2.0;
            vec3 color = mix(color1, color2, gradient);
            gl_FragColor = vec4(color, 1.0);
        }
    `,depthWrite:!1}),I=new Yt(C,L);I.position.z=-500,v.add(I),window.addEventListener("mousemove",N=>{f.x=N.clientX/window.innerWidth*2-1,f.y=-(N.clientY/window.innerHeight)*2+1});function w(){requestAnimationFrame(w),l.rotation.x+=.0025,l.rotation.y+=.0025;const N=.005;l.rotation.x+=f.y*N,l.rotation.y+=f.x*N,L.uniforms.u_time.value=performance.now()/1e3,x.render(v,g)}window.addEventListener("resize",()=>{g.aspect=window.innerWidth/window.innerHeight,g.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight),v.remove(I);const N=new Qi(window.innerWidth*2,window.innerHeight*2),U=new Yt(N,L);U.position.z=-500,v.add(U)}),g.position.z=50,_(),w();const T=document.querySelector(".portfolio #portfolio-flters");T&&(T.addEventListener("mousemove",U=>{const z=T.getBoundingClientRect(),$=U.clientX-z.left,F=U.clientY-z.top,q=z.width/2,V=z.height/2,ie=(F-V)/V*-10,le=($-q)/q*10;T.style.transform=`perspective(1000px) rotateX(${ie}deg) rotateY(${le}deg)`}),T.addEventListener("mouseleave",()=>{T.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg)"})),zb(),Bb(),Hb();const P=document.querySelector(".logos-slider");if(P){const N=P.querySelector(".logos-slide"),U=.4,z=.16;let $=U;const F=()=>{P.scrollLeft+=$,P.scrollLeft>=N.offsetWidth/2&&(P.scrollLeft-=N.offsetWidth/2),requestAnimationFrame(F)};P.addEventListener("mouseenter",()=>{$=z}),P.addEventListener("mouseleave",()=>{$=U}),F()}});function Bb(){const i=document.querySelector(".video-carousel-container");if(!i)return;const e=i.querySelector(".video-carousel-slider"),t=i.querySelector(".video-carousel-track"),n=document.getElementById("prevVideo"),s=document.getElementById("nextVideo"),r=Array.from(t.children);if(!e||!t||!n||!s||r.length===0){console.error("Faltan elementos para inicializar el carrusel de videos.");return}let o=0,a=!1,c=0,u=0,h=0,p,v;const g=5e3;if(!window.heroSliderInitialized){let P=function(){w.classList.remove("fade-in-up"),w.offsetWidth,w.textContent=I[T],w.classList.add("fade-in-up"),T=(T+1)%I.length};window.heroSliderInitialized=!0;const I=["Tu Marca","Tus Servicios","Tus Productos"],w=document.querySelector("#hero-words");let T=0;P(),setInterval(P,1500)}function x(){return r[0].getBoundingClientRect().width}function S(){t.style.transform=`translateX(${u}px)`}function f(){const I=x(),w=Math.round(e.offsetWidth/I);n.disabled=o===0,s.disabled=o>=r.length-w}function l(I){const w=x(),T=Math.round(e.offsetWidth/w);I>=r.length-T+1&&(I=0),I<0&&(I=r.length-T),o=I,u=o*-w,h=u,t.style.transition="transform 0.5s ease",S(),f()}function _(){y(),v=setInterval(()=>{l(o+1)},g)}function y(){clearInterval(v)}function E(I){y(),a=!0,c=I.type.includes("mouse")?I.pageX:I.touches[0].clientX,t.style.transition="none",p=requestAnimationFrame(M)}function M(){S(),a&&requestAnimationFrame(M)}function C(I){if(!a)return;const w=I.type.includes("mouse")?I.pageX:I.touches[0].clientX;u=h+w-c}function L(I){if(!a)return;a=!1,cancelAnimationFrame(p);const w=u-h;w<-100?l(o+1):w>100?l(o-1):l(o)}i.addEventListener("mouseenter",y),i.addEventListener("mouseleave",_),n.addEventListener("click",()=>{y(),l(o-1)}),s.addEventListener("click",()=>{y(),l(o+1)}),e.addEventListener("mousedown",E),e.addEventListener("mouseup",L),e.addEventListener("mouseleave",L),e.addEventListener("mousemove",C),e.addEventListener("touchstart",E,{passive:!0}),e.addEventListener("touchend",L),e.addEventListener("touchmove",C,{passive:!0}),window.addEventListener("resize",()=>{l(o)}),l(o),_()}function zb(){const i=document.getElementById("skills");if(!i)return;const e=new IntersectionObserver(t=>{t[0].isIntersecting&&(document.querySelectorAll("#skills .chart-container canvas").forEach(n=>{const s=n.getAttribute("data-percent");s&&kb(n.id,parseInt(s,10))}),e.unobserve(i))},{threshold:.5});e.observe(i)}function kb(i,e){const t=document.getElementById(i);if(!t)return;const n=Chart.getChart(t);n&&n.destroy();const s=100-e,r=document.body.classList.contains("dark-mode")?"#50C878":"#149ddd",o=document.body.classList.contains("dark-mode")?"#2B2E27":"#f3f3f3";new Chart(t,{type:"doughnut",data:{datasets:[{data:[e,s],backgroundColor:[r,o],borderWidth:0,cutout:"70%"}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{animateScale:!0,animateRotate:!0},plugins:{legend:{display:!1},tooltip:{enabled:!1}}}})}function Hb(){const i=document.querySelector(".back-to-top"),e=document.querySelector(".whatsapp-float"),t=document.getElementById("hero");if(!i||!e||!t)return;const n=()=>{window.scrollY>t.offsetHeight?(i.classList.add("active"),e.classList.add("active")):(i.classList.remove("active"),e.classList.remove("active"))};window.addEventListener("load",n),document.addEventListener("scroll",n)}

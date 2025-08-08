/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ko="179";const Dn="",Xt="srgb",Li="srgb-linear",ns="linear",nt="srgb";const Ea="300 es";class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ms=Math.PI/180,Bo=180/Math.PI;function ar(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Zu(i,e){return(i%e+e)%e}function As(i,e,t){return(1-t)*i+t*e}function Yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],u=n[r+1],f=n[r+2],m=n[r+3];const g=s[o+0],v=s[o+1],x=s[o+2],E=s[o+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=f,e[t+3]=m;return}if(a===1){e[t+0]=g,e[t+1]=v,e[t+2]=x,e[t+3]=E;return}if(m!==E||c!==g||u!==v||f!==x){let h=1-a;const l=c*g+u*v+f*x+m*E,_=l>=0?1:-1,y=1-l*l;if(y>Number.EPSILON){const M=Math.sqrt(y),L=Math.atan2(M,l*_);h=Math.sin(h*L)/M,a=Math.sin(a*L)/M}const S=a*_;if(c=c*h+g*S,u=u*h+v*S,f=f*h+x*S,m=m*h+E*S,h===1-a){const M=1/Math.sqrt(c*c+u*u+f*f+m*m);c*=M,u*=M,f*=M,m*=M}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],u=n[r+2],f=n[r+3],m=s[o],g=s[o+1],v=s[o+2],x=s[o+3];return e[t]=a*x+f*m+c*v-u*g,e[t+1]=c*x+f*g+u*m-a*v,e[t+2]=u*x+f*v+a*g-c*m,e[t+3]=f*x-a*m-c*g-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),f=a(r/2),m=a(s/2),g=c(n/2),v=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=g*f*m+u*v*x,this._y=u*v*m-g*f*x,this._z=u*f*x+g*v*m,this._w=u*f*m-g*v*x;break;case"YXZ":this._x=g*f*m+u*v*x,this._y=u*v*m-g*f*x,this._z=u*f*x-g*v*m,this._w=u*f*m+g*v*x;break;case"ZXY":this._x=g*f*m-u*v*x,this._y=u*v*m+g*f*x,this._z=u*f*x+g*v*m,this._w=u*f*m-g*v*x;break;case"ZYX":this._x=g*f*m-u*v*x,this._y=u*v*m+g*f*x,this._z=u*f*x-g*v*m,this._w=u*f*m+g*v*x;break;case"YZX":this._x=g*f*m+u*v*x,this._y=u*v*m+g*f*x,this._z=u*f*x-g*v*m,this._w=u*f*m-g*v*x;break;case"XZY":this._x=g*f*m-u*v*x,this._y=u*v*m-g*f*x,this._z=u*f*x+g*v*m,this._w=u*f*m+g*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],u=t[2],f=t[6],m=t[10],g=n+a+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(f-c)*v,this._y=(s-u)*v,this._z=(o-r)*v}else if(n>a&&n>m){const v=2*Math.sqrt(1+n-a-m);this._w=(f-c)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+u)/v}else if(a>m){const v=2*Math.sqrt(1+a-n-m);this._w=(s-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(c+f)/v}else{const v=2*Math.sqrt(1+m-n-a);this._w=(o-r)/v,this._x=(s+u)/v,this._y=(c+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,u=t._z,f=t._w;return this._x=n*f+o*a+r*u-s*c,this._y=r*f+o*c+s*a-n*u,this._z=s*f+o*u+n*c-r*a,this._w=o*f-n*a-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),f=Math.atan2(u,a),m=Math.sin((1-t)*f)/u,g=Math.sin(t*f)/u;return this._w=o*m+this._w*g,this._x=n*m+this._x*g,this._y=r*m+this._y*g,this._z=s*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ta.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ta.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*r-a*n),f=2*(a*t-s*r),m=2*(s*n-o*t);return this.x=t+c*u+o*m-a*f,this.y=n+c*f+a*u-s*m,this.z=r+c*m+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ws.copy(this).projectOnVector(e),this.sub(ws)}reflect(e){return this.sub(ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ws=new K,Ta=new lr;class ze{constructor(e,t,n,r,s,o,a,c,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,u)}set(e,t,n,r,s,o,a,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],f=n[4],m=n[7],g=n[2],v=n[5],x=n[8],E=r[0],h=r[3],l=r[6],_=r[1],y=r[4],S=r[7],M=r[2],L=r[5],P=r[8];return s[0]=o*E+a*_+c*M,s[3]=o*h+a*y+c*L,s[6]=o*l+a*S+c*P,s[1]=u*E+f*_+m*M,s[4]=u*h+f*y+m*L,s[7]=u*l+f*S+m*P,s[2]=g*E+v*_+x*M,s[5]=g*h+v*y+x*L,s[8]=g*l+v*S+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-n*s*f+n*a*c+r*s*u-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],m=f*o-a*u,g=a*c-f*s,v=u*s-o*c,x=t*m+n*g+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=m*E,e[1]=(r*u-f*n)*E,e[2]=(a*n-r*o)*E,e[3]=g*E,e[4]=(f*t-r*c)*E,e[5]=(r*s-a*t)*E,e[6]=v*E,e[7]=(n*c-u*t)*E,e[8]=(o*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-r*u,r*c,-r*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cs.makeScale(e,t)),this}rotate(e){return this.premultiply(Cs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cs=new ze;function gc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){const i=is("canvas");return i.style.display="block",i}const ba={};function Ci(i){i in ba||(ba[i]=!0,console.warn(i))}function Qu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ma=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Aa=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ed(){const i={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=_n(r.r),r.g=_n(r.g),r.b=_n(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dn?ns:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ci("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ci("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Li]:{primaries:e,whitePoint:n,transfer:ns,toXYZ:Ma,fromXYZ:Aa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Ma,fromXYZ:Aa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const Ke=ed();function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let li;class td{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{li===void 0&&(li=is("canvas")),li.width=e.width,li.height=e.height;const r=li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=li}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_n(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nd=0;class Zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rs(r[o].image)):s.push(Rs(r[o]))}else s=Rs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Rs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?td.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let id=0;const Ls=new K;class wt extends ki{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=1001,r=1001,s=1006,o=1008,a=1023,c=1009,u=wt.DEFAULT_ANISOTROPY,f=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=ar(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ls).x}get height(){return this.source.getSize(Ls).y}get depth(){return this.source.getSize(Ls).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=300;wt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],f=c[4],m=c[8],g=c[1],v=c[5],x=c[9],E=c[2],h=c[6],l=c[10];if(Math.abs(f-g)<.01&&Math.abs(m-E)<.01&&Math.abs(x-h)<.01){if(Math.abs(f+g)<.1&&Math.abs(m+E)<.1&&Math.abs(x+h)<.1&&Math.abs(u+v+l-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,S=(v+1)/2,M=(l+1)/2,L=(f+g)/4,P=(m+E)/4,I=(x+h)/4;return y>S&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=L/n,s=P/n):S>M?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=L/r,s=I/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=P/s,r=I/s),this.set(n,r,s,t),this}let _=Math.sqrt((h-x)*(h-x)+(m-E)*(m-E)+(g-f)*(g-f));return Math.abs(_)<.001&&(_=1),this.x=(h-x)/_,this.y=(m-E)/_,this.z=(g-f)/_,this.w=Math.acos((u+v+l-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rd extends ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new wt(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends rd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vc extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sd extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jt):Jt.fromBufferAttribute(s,o),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),Sr.subVectors(this.max,ji),ci.subVectors(e.a,ji),ui.subVectors(e.b,ji),di.subVectors(e.c,ji),Mn.subVectors(ui,ci),An.subVectors(di,ui),Vn.subVectors(ci,di);let t=[0,-Mn.z,Mn.y,0,-An.z,An.y,0,-Vn.z,Vn.y,Mn.z,0,-Mn.x,An.z,0,-An.x,Vn.z,0,-Vn.x,-Mn.y,Mn.x,0,-An.y,An.x,0,-Vn.y,Vn.x,0];return!Ps(t,ci,ui,di,Sr)||(t=[1,0,0,0,1,0,0,0,1],!Ps(t,ci,ui,di,Sr))?!1:(Er.crossVectors(Mn,An),t=[Er.x,Er.y,Er.z],Ps(t,ci,ui,di,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hn=[new K,new K,new K,new K,new K,new K,new K,new K],Jt=new K,xr=new cr,ci=new K,ui=new K,di=new K,Mn=new K,An=new K,Vn=new K,ji=new K,Sr=new K,Er=new K,Wn=new K;function Ps(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Wn.fromArray(i,s);const a=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),c=e.dot(Wn),u=t.dot(Wn),f=n.dot(Wn);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>a)return!1}return!0}const od=new cr,Ki=new K,Ds=new K;class Jo{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):od.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ki,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Ds)),this.expandByPoint(Ki.copy(e.center).sub(Ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fn=new K,Is=new K,Tr=new K,wn=new K,Ns=new K,br=new K,Os=new K;class ad{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Is.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Is);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Tr),a=wn.dot(this.direction),c=-wn.dot(Tr),u=wn.lengthSq(),f=Math.abs(1-o*o);let m,g,v,x;if(f>0)if(m=o*c-a,g=o*a-c,x=s*f,m>=0)if(g>=-x)if(g<=x){const E=1/f;m*=E,g*=E,v=m*(m+o*g+2*a)+g*(o*m+g+2*c)+u}else g=s,m=Math.max(0,-(o*g+a)),v=-m*m+g*(g+2*c)+u;else g=-s,m=Math.max(0,-(o*g+a)),v=-m*m+g*(g+2*c)+u;else g<=-x?(m=Math.max(0,-(-o*s+a)),g=m>0?-s:Math.min(Math.max(-s,-c),s),v=-m*m+g*(g+2*c)+u):g<=x?(m=0,g=Math.min(Math.max(-s,-c),s),v=g*(g+2*c)+u):(m=Math.max(0,-(o*s+a)),g=m>0?s:Math.min(Math.max(-s,-c),s),v=-m*m+g*(g+2*c)+u);else g=o>0?-s:s,m=Math.max(0,-(o*g+a)),v=-m*m+g*(g+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Is).addScaledVector(Tr,g),v}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),r=fn.dot(fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const u=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,g=this.origin;return u>=0?(n=(e.min.x-g.x)*u,r=(e.max.x-g.x)*u):(n=(e.max.x-g.x)*u,r=(e.min.x-g.x)*u),f>=0?(s=(e.min.y-g.y)*f,o=(e.max.y-g.y)*f):(s=(e.max.y-g.y)*f,o=(e.min.y-g.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),m>=0?(a=(e.min.z-g.z)*m,c=(e.max.z-g.z)*m):(a=(e.max.z-g.z)*m,c=(e.min.z-g.z)*m),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,r,s){Ns.subVectors(t,e),br.subVectors(n,e),Os.crossVectors(Ns,br);let o=this.direction.dot(Os),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,e);const c=a*this.direction.dot(br.crossVectors(wn,br));if(c<0)return null;const u=a*this.direction.dot(Ns.cross(wn));if(u<0||c+u>o)return null;const f=-a*wn.dot(Os);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,r,s,o,a,c,u,f,m,g,v,x,E,h){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,u,f,m,g,v,x,E,h)}set(e,t,n,r,s,o,a,c,u,f,m,g,v,x,E,h){const l=this.elements;return l[0]=e,l[4]=t,l[8]=n,l[12]=r,l[1]=s,l[5]=o,l[9]=a,l[13]=c,l[2]=u,l[6]=f,l[10]=m,l[14]=g,l[3]=v,l[7]=x,l[11]=E,l[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/hi.setFromMatrixColumn(e,0).length(),s=1/hi.setFromMatrixColumn(e,1).length(),o=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const g=o*f,v=o*m,x=a*f,E=a*m;t[0]=c*f,t[4]=-c*m,t[8]=u,t[1]=v+x*u,t[5]=g-E*u,t[9]=-a*c,t[2]=E-g*u,t[6]=x+v*u,t[10]=o*c}else if(e.order==="YXZ"){const g=c*f,v=c*m,x=u*f,E=u*m;t[0]=g+E*a,t[4]=x*a-v,t[8]=o*u,t[1]=o*m,t[5]=o*f,t[9]=-a,t[2]=v*a-x,t[6]=E+g*a,t[10]=o*c}else if(e.order==="ZXY"){const g=c*f,v=c*m,x=u*f,E=u*m;t[0]=g-E*a,t[4]=-o*m,t[8]=x+v*a,t[1]=v+x*a,t[5]=o*f,t[9]=E-g*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const g=o*f,v=o*m,x=a*f,E=a*m;t[0]=c*f,t[4]=x*u-v,t[8]=g*u+E,t[1]=c*m,t[5]=E*u+g,t[9]=v*u-x,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const g=o*c,v=o*u,x=a*c,E=a*u;t[0]=c*f,t[4]=E-g*m,t[8]=x*m+v,t[1]=m,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=v*m+x,t[10]=g-E*m}else if(e.order==="XZY"){const g=o*c,v=o*u,x=a*c,E=a*u;t[0]=c*f,t[4]=-m,t[8]=u*f,t[1]=g*m+E,t[5]=o*f,t[9]=v*m-x,t[2]=x*m-v,t[6]=a*f,t[10]=E*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ld,e,cd)}lookAt(e,t,n){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Cn.crossVectors(n,It),Cn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Cn.crossVectors(n,It)),Cn.normalize(),Mr.crossVectors(It,Cn),r[0]=Cn.x,r[4]=Mr.x,r[8]=It.x,r[1]=Cn.y,r[5]=Mr.y,r[9]=It.y,r[2]=Cn.z,r[6]=Mr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],f=n[1],m=n[5],g=n[9],v=n[13],x=n[2],E=n[6],h=n[10],l=n[14],_=n[3],y=n[7],S=n[11],M=n[15],L=r[0],P=r[4],I=r[8],A=r[12],T=r[1],w=r[5],O=r[9],U=r[13],G=r[2],$=r[6],k=r[10],q=r[14],H=r[3],ie=r[7],ce=r[11],_e=r[15];return s[0]=o*L+a*T+c*G+u*H,s[4]=o*P+a*w+c*$+u*ie,s[8]=o*I+a*O+c*k+u*ce,s[12]=o*A+a*U+c*q+u*_e,s[1]=f*L+m*T+g*G+v*H,s[5]=f*P+m*w+g*$+v*ie,s[9]=f*I+m*O+g*k+v*ce,s[13]=f*A+m*U+g*q+v*_e,s[2]=x*L+E*T+h*G+l*H,s[6]=x*P+E*w+h*$+l*ie,s[10]=x*I+E*O+h*k+l*ce,s[14]=x*A+E*U+h*q+l*_e,s[3]=_*L+y*T+S*G+M*H,s[7]=_*P+y*w+S*$+M*ie,s[11]=_*I+y*O+S*k+M*ce,s[15]=_*A+y*U+S*q+M*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],u=e[13],f=e[2],m=e[6],g=e[10],v=e[14],x=e[3],E=e[7],h=e[11],l=e[15];return x*(+s*c*m-r*u*m-s*a*g+n*u*g+r*a*v-n*c*v)+E*(+t*c*v-t*u*g+s*o*g-r*o*v+r*u*f-s*c*f)+h*(+t*u*m-t*a*v-s*o*m+n*o*v+s*a*f-n*u*f)+l*(-r*a*f-t*c*m+t*a*g+r*o*m-n*o*g+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],m=e[9],g=e[10],v=e[11],x=e[12],E=e[13],h=e[14],l=e[15],_=m*h*u-E*g*u+E*c*v-a*h*v-m*c*l+a*g*l,y=x*g*u-f*h*u-x*c*v+o*h*v+f*c*l-o*g*l,S=f*E*u-x*m*u+x*a*v-o*E*v-f*a*l+o*m*l,M=x*m*c-f*E*c-x*a*g+o*E*g+f*a*h-o*m*h,L=t*_+n*y+r*S+s*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=_*P,e[1]=(E*g*s-m*h*s-E*r*v+n*h*v+m*r*l-n*g*l)*P,e[2]=(a*h*s-E*c*s+E*r*u-n*h*u-a*r*l+n*c*l)*P,e[3]=(m*c*s-a*g*s-m*r*u+n*g*u+a*r*v-n*c*v)*P,e[4]=y*P,e[5]=(f*h*s-x*g*s+x*r*v-t*h*v-f*r*l+t*g*l)*P,e[6]=(x*c*s-o*h*s-x*r*u+t*h*u+o*r*l-t*c*l)*P,e[7]=(o*g*s-f*c*s+f*r*u-t*g*u-o*r*v+t*c*v)*P,e[8]=S*P,e[9]=(x*m*s-f*E*s-x*n*v+t*E*v+f*n*l-t*m*l)*P,e[10]=(o*E*s-x*a*s+x*n*u-t*E*u-o*n*l+t*a*l)*P,e[11]=(f*a*s-o*m*s-f*n*u+t*m*u+o*n*v-t*a*v)*P,e[12]=M*P,e[13]=(f*E*r-x*m*r+x*n*g-t*E*g-f*n*h+t*m*h)*P,e[14]=(x*a*r-o*E*r-x*n*c+t*E*c+o*n*h-t*a*h)*P,e[15]=(o*m*r-f*a*r+f*n*c-t*m*c-o*n*g+t*a*g)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,u=s*o,f=s*a;return this.set(u*o+n,u*a-r*c,u*c+r*a,0,u*a+r*c,f*a+n,f*c-r*o,0,u*c-r*a,f*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,u=s+s,f=o+o,m=a+a,g=s*u,v=s*f,x=s*m,E=o*f,h=o*m,l=a*m,_=c*u,y=c*f,S=c*m,M=n.x,L=n.y,P=n.z;return r[0]=(1-(E+l))*M,r[1]=(v+S)*M,r[2]=(x-y)*M,r[3]=0,r[4]=(v-S)*L,r[5]=(1-(g+l))*L,r[6]=(h+_)*L,r[7]=0,r[8]=(x+y)*P,r[9]=(h-_)*P,r[10]=(1-(g+E))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=hi.set(r[0],r[1],r[2]).length();const o=hi.set(r[4],r[5],r[6]).length(),a=hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qt.copy(this);const u=1/s,f=1/o,m=1/a;return Qt.elements[0]*=u,Qt.elements[1]*=u,Qt.elements[2]*=u,Qt.elements[4]*=f,Qt.elements[5]*=f,Qt.elements[6]*=f,Qt.elements[8]*=m,Qt.elements[9]*=m,Qt.elements[10]*=m,t.setFromRotationMatrix(Qt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=2e3,c=!1){const u=this.elements,f=2*s/(t-e),m=2*s/(n-r),g=(t+e)/(t-e),v=(n+r)/(n-r);let x,E;if(c)x=s/(o-s),E=o*s/(o-s);else if(a===2e3)x=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===2001)x=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=m,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=2e3,c=!1){const u=this.elements,f=2/(t-e),m=2/(n-r),g=-(t+e)/(t-e),v=-(n+r)/(n-r);let x,E;if(c)x=1/(o-s),E=o/(o-s);else if(a===2e3)x=-2/(o-s),E=-(o+s)/(o-s);else if(a===2001)x=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=0,u[12]=g,u[1]=0,u[5]=m,u[9]=0,u[13]=v,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hi=new K,Qt=new ht,ld=new K(0,0,0),cd=new K(1,1,1),Cn=new K,Mr=new K,It=new K,wa=new ht,Ca=new lr;class Sn{constructor(e=0,t=0,n=0,r=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],u=r[5],f=r[9],m=r[2],g=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ca.setFromEuler(this),this.setFromQuaternion(Ca,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ud=0;const Ra=new K,fi=new lr,pn=new ht,Ar=new K,Zi=new K,dd=new K,hd=new lr,La=new K(1,0,0),Pa=new K(0,1,0),Da=new K(0,0,1),Ia={type:"added"},fd={type:"removed"},pi={type:"childadded",child:null},Fs={type:"childremoved",child:null};class Ct extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new K,t=new Sn,n=new lr,r=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(La,e)}rotateY(e){return this.rotateOnAxis(Pa,e)}rotateZ(e){return this.rotateOnAxis(Da,e)}translateOnAxis(e,t){return Ra.copy(e).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(La,e)}translateY(e){return this.translateOnAxis(Pa,e)}translateZ(e){return this.translateOnAxis(Da,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ar.copy(e):Ar.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Zi,Ar,this.up):pn.lookAt(Ar,Zi,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),fi.setFromRotationMatrix(pn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ia),pi.child=e,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fd),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ia),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,dd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const m=c[u];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),f=o(e.images),m=o(e.shapes),g=o(e.skeletons),v=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new K(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new K,mn=new K,Us=new K,gn=new K,mi=new K,gi=new K,Na=new K,Bs=new K,zs=new K,ks=new K,Hs=new ut,Gs=new ut,Vs=new ut;class tn{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),en.subVectors(e,t),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){en.subVectors(r,t),mn.subVectors(n,t),Us.subVectors(e,t);const o=en.dot(en),a=en.dot(mn),c=en.dot(Us),u=mn.dot(mn),f=mn.dot(Us),m=o*u-a*a;if(m===0)return s.set(0,0,0),null;const g=1/m,v=(u*c-a*f)*g,x=(o*f-a*c)*g;return s.set(1-v-x,x,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,gn.x),c.addScaledVector(o,gn.y),c.addScaledVector(a,gn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Hs.setScalar(0),Gs.setScalar(0),Vs.setScalar(0),Hs.fromBufferAttribute(e,t),Gs.fromBufferAttribute(e,n),Vs.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hs,s.x),o.addScaledVector(Gs,s.y),o.addScaledVector(Vs,s.z),o}static isFrontFacing(e,t,n,r){return en.subVectors(n,t),mn.subVectors(e,t),en.cross(mn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),en.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;mi.subVectors(r,n),gi.subVectors(s,n),Bs.subVectors(e,n);const c=mi.dot(Bs),u=gi.dot(Bs);if(c<=0&&u<=0)return t.copy(n);zs.subVectors(e,r);const f=mi.dot(zs),m=gi.dot(zs);if(f>=0&&m<=f)return t.copy(r);const g=c*m-f*u;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(mi,o);ks.subVectors(e,s);const v=mi.dot(ks),x=gi.dot(ks);if(x>=0&&v<=x)return t.copy(s);const E=v*u-c*x;if(E<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(n).addScaledVector(gi,a);const h=f*x-v*m;if(h<=0&&m-f>=0&&v-x>=0)return Na.subVectors(s,r),a=(m-f)/(m-f+(v-x)),t.copy(r).addScaledVector(Na,a);const l=1/(h+E+g);return o=E*l,a=g*l,t.copy(n).addScaledVector(mi,o).addScaledVector(gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Ws(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ke.workingColorSpace){if(e=Zu(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ws(o,s,e+1/3),this.g=Ws(o,s,e),this.b=Ws(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=yc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ke.workingToColorSpace(_t.copy(this),e),Math.round(qe(_t.r*255,0,255))*65536+Math.round(qe(_t.g*255,0,255))*256+Math.round(qe(_t.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(_t.copy(this),t);const n=_t.r,r=_t.g,s=_t.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,u;const f=(a+o)/2;if(a===o)c=0,u=0;else{const m=o-a;switch(u=f<=.5?m/(o+a):m/(2-o-a),o){case n:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-n)/m+2;break;case s:c=(n-r)/m+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Xt){Ke.workingToColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,r=_t.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(wr);const n=As(Rn.h,wr.h,t),r=As(Rn.s,wr.s,t),s=As(Rn.l,wr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new We;We.NAMES=yc;let pd=0;class hs extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qo extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new K,Cr=new et;let md=0;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class xc extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sc extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gd=0;const Vt=new ht,Xs=new Ct,vi=new K,Nt=new cr,Ji=new cr,gt=new K;class Un extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gc(e)?Sc:xc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return Xs.lookAt(e),Xs.updateMatrix(),this.applyMatrix4(Xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ji.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Nt.min,Ji.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,Ji.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(Ji.min),Nt.expandByPoint(Ji.max))}Nt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)gt.fromBufferAttribute(a,u),c&&(vi.fromBufferAttribute(e,u),gt.add(vi)),r=Math.max(r,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new K,c[I]=new K;const u=new K,f=new K,m=new K,g=new et,v=new et,x=new et,E=new K,h=new K;function l(I,A,T){u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,A),m.fromBufferAttribute(n,T),g.fromBufferAttribute(s,I),v.fromBufferAttribute(s,A),x.fromBufferAttribute(s,T),f.sub(u),m.sub(u),v.sub(g),x.sub(g);const w=1/(v.x*x.y-x.x*v.y);isFinite(w)&&(E.copy(f).multiplyScalar(x.y).addScaledVector(m,-v.y).multiplyScalar(w),h.copy(m).multiplyScalar(v.x).addScaledVector(f,-x.x).multiplyScalar(w),a[I].add(E),a[A].add(E),a[T].add(E),c[I].add(h),c[A].add(h),c[T].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,A=_.length;I<A;++I){const T=_[I],w=T.start,O=T.count;for(let U=w,G=w+O;U<G;U+=3)l(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new K,S=new K,M=new K,L=new K;function P(I){M.fromBufferAttribute(r,I),L.copy(M);const A=a[I];y.copy(A),y.sub(M.multiplyScalar(M.dot(A))).normalize(),S.crossVectors(L,A);const w=S.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,w)}for(let I=0,A=_.length;I<A;++I){const T=_[I],w=T.start,O=T.count;for(let U=w,G=w+O;U<G;U+=3)P(e.getX(U+0)),P(e.getX(U+1)),P(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const r=new K,s=new K,o=new K,a=new K,c=new K,u=new K,f=new K,m=new K;if(e)for(let g=0,v=e.count;g<v;g+=3){const x=e.getX(g+0),E=e.getX(g+1),h=e.getX(g+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,h),f.subVectors(o,s),m.subVectors(r,s),f.cross(m),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,h),a.add(f),c.add(f),u.add(f),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(h,u.x,u.y,u.z)}else for(let g=0,v=t.count;g<v;g+=3)r.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),f.subVectors(o,s),m.subVectors(r,s),f.cross(m),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,c){const u=a.array,f=a.itemSize,m=a.normalized,g=new u.constructor(c.length*f);let v=0,x=0;for(let E=0,h=c.length;E<h;E++){a.isInterleavedBufferAttribute?v=c[E]*a.data.stride+a.offset:v=c[E]*f;for(let l=0;l<f;l++)g[x++]=u[v++]}return new on(g,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=e(c,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const c=[],u=s[a];for(let f=0,m=u.length;f<m;f++){const g=u[f],v=e(g,n);c.push(v)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let m=0,g=u.length;m<g;m++){const v=u[m];f.push(v.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],m=s[u];for(let g=0,v=m.length;g<v;g++)f.push(m[g].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const m=o[u];this.addGroup(m.start,m.count,m.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oa=new ht,Xn=new ad,Rr=new Jo,Fa=new K,Lr=new K,Pr=new K,Dr=new K,$s=new K,Ir=new K,Ua=new K,Nr=new K;class qt extends Ct{constructor(e=new Un,t=new Qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ir.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=a[c],m=s[c];f!==0&&($s.fromBufferAttribute(m,e),o?Ir.addScaledVector($s,f):Ir.addScaledVector($s.sub(t),f))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),Xn.copy(e.ray).recast(e.near),!(Rr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Rr,Fa)===null||Xn.origin.distanceToSquared(Fa)>(e.far-e.near)**2))&&(Oa.copy(s).invert(),Xn.copy(e.ray).applyMatrix4(Oa),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,m=s.attributes.normal,g=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,E=g.length;x<E;x++){const h=g[x],l=o[h.materialIndex],_=Math.max(h.start,v.start),y=Math.min(a.count,Math.min(h.start+h.count,v.start+v.count));for(let S=_,M=y;S<M;S+=3){const L=a.getX(S),P=a.getX(S+1),I=a.getX(S+2);r=Or(this,l,e,n,u,f,m,L,P,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const x=Math.max(0,v.start),E=Math.min(a.count,v.start+v.count);for(let h=x,l=E;h<l;h+=3){const _=a.getX(h),y=a.getX(h+1),S=a.getX(h+2);r=Or(this,o,e,n,u,f,m,_,y,S),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,E=g.length;x<E;x++){const h=g[x],l=o[h.materialIndex],_=Math.max(h.start,v.start),y=Math.min(c.count,Math.min(h.start+h.count,v.start+v.count));for(let S=_,M=y;S<M;S+=3){const L=S,P=S+1,I=S+2;r=Or(this,l,e,n,u,f,m,L,P,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const x=Math.max(0,v.start),E=Math.min(c.count,v.start+v.count);for(let h=x,l=E;h<l;h+=3){const _=h,y=h+1,S=h+2;r=Or(this,o,e,n,u,f,m,_,y,S),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function vd(i,e,t,n,r,s,o,a){let c;if(e.side===1?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===0,a),c===null)return null;Nr.copy(a),Nr.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Nr);return u<t.near||u>t.far?null:{distance:u,point:Nr.clone(),object:i}}function Or(i,e,t,n,r,s,o,a,c,u){i.getVertexPosition(a,Lr),i.getVertexPosition(c,Pr),i.getVertexPosition(u,Dr);const f=vd(i,e,t,n,Lr,Pr,Dr,Ua);if(f){const m=new K;tn.getBarycoord(Ua,Lr,Pr,Dr,m),r&&(f.uv=tn.getInterpolatedAttribute(r,a,c,u,m,new et)),s&&(f.uv1=tn.getInterpolatedAttribute(s,a,c,u,m,new et)),o&&(f.normal=tn.getInterpolatedAttribute(o,a,c,u,m,new K),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const g={a,b:c,c:u,normal:new K,materialIndex:0};tn.getNormal(Lr,Pr,Dr,g.normal),f.face=g,f.barycoord=m}return f}class ur extends Un{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],f=[],m=[];let g=0,v=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new an(u,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(m,2));function x(E,h,l,_,y,S,M,L,P,I,A){const T=S/P,w=M/I,O=S/2,U=M/2,G=L/2,$=P+1,k=I+1;let q=0,H=0;const ie=new K;for(let ce=0;ce<k;ce++){const _e=ce*w-U;for(let Le=0;Le<$;Le++){const Ye=Le*T-O;ie[E]=Ye*_,ie[h]=_e*y,ie[l]=G,u.push(ie.x,ie.y,ie.z),ie[E]=0,ie[h]=0,ie[l]=L>0?1:-1,f.push(ie.x,ie.y,ie.z),m.push(Le/P),m.push(1-ce/I),q+=1}}for(let ce=0;ce<I;ce++)for(let _e=0;_e<P;_e++){const Le=g+_e+$*ce,Ye=g+_e+$*(ce+1),Xe=g+(_e+1)+$*(ce+1),J=g+(_e+1)+$*ce;c.push(Le,Ye,J),c.push(Ye,Xe,J),H+=6}a.addGroup(v,H,A),v+=H,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function xt(i){const e={};for(let t=0;t<i.length;t++){const n=Pi(i[t]);for(const r in n)e[r]=n[r]}return e}function _d(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ec(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const yd={clone:Pi,merge:xt};var xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xd,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=_d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tc extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new K,Ba=new et,za=new et;class $t extends Tc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,Ba,za),t.subVectors(za,Ba)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,yi=1;class Ed extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(_i,yi,e,t);r.layers=this.layers,this.add(r);const s=new $t(_i,yi,e,t);s.layers=this.layers,this.add(s);const o=new $t(_i,yi,e,t);o.layers=this.layers,this.add(o);const a=new $t(_i,yi,e,t);a.layers=this.layers,this.add(a);const c=new $t(_i,yi,e,t);c.layers=this.layers,this.add(c);const u=new $t(_i,yi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const u of t)this.remove(u);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,u,f]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(m,g,v),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class bc extends wt{constructor(e=[],t=301,n,r,s,o,a,c,u,f){super(e,t,n,r,s,o,a,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Td extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new bc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ur(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const o=new qt(r,s),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Ed(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class nr extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bd={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const E of e.hand.values()){const h=t.getJointPose(E,n),l=this._getHandJoint(u,E);h!==null&&(l.matrix.fromArray(h.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=h.radius),l.visible=h!==null}const f=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],g=f.position.distanceTo(m.position),v=.02,x=.005;u.inputState.pinching&&g>v+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&g<=v-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Md extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ys=new K,Ad=new K,wd=new ze;class jn{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ys.subVectors(n,t).cross(Ad.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ys),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wd.getNormalMatrix(e),r=this.coplanarPoint(Ys).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new Jo,Cd=new et(.5,.5),Fr=new K;class Mc{constructor(e=new jn,t=new jn,n=new jn,r=new jn,s=new jn,o=new jn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],u=s[3],f=s[4],m=s[5],g=s[6],v=s[7],x=s[8],E=s[9],h=s[10],l=s[11],_=s[12],y=s[13],S=s[14],M=s[15];if(r[0].setComponents(u-o,v-f,l-x,M-_).normalize(),r[1].setComponents(u+o,v+f,l+x,M+_).normalize(),r[2].setComponents(u+a,v+m,l+E,M+y).normalize(),r[3].setComponents(u-a,v-m,l-E,M-y).normalize(),n)r[4].setComponents(c,g,h,S).normalize(),r[5].setComponents(u-c,v-g,l-h,M-S).normalize();else if(r[4].setComponents(u-c,v-g,l-h,M-S).normalize(),t===2e3)r[5].setComponents(u+c,v+g,l+h,M+S).normalize();else if(t===2001)r[5].setComponents(c,g,h,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){$n.center.set(0,0,0);const t=Cd.distanceTo(e.center);return $n.radius=.7071067811865476+t,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fr.x=r.normal.x>0?e.max.x:e.min.x,Fr.y=r.normal.y>0?e.max.y:e.min.y,Fr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ac extends wt{constructor(e,t,n=1014,r,s,o,a=1003,c=1003,u,f=1026,m=1){if(f!==1026&&f!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,r,s,o,a,c,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Di extends Un{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),u=a+1,f=c+1,m=e/a,g=t/c,v=[],x=[],E=[],h=[];for(let l=0;l<f;l++){const _=l*g-o;for(let y=0;y<u;y++){const S=y*m-s;x.push(S,-_,0),E.push(0,0,1),h.push(y/a),h.push(1-l/c)}}for(let l=0;l<c;l++)for(let _=0;_<a;_++){const y=_+u*l,S=_+u*(l+1),M=_+1+u*(l+1),L=_+1+u*l;v.push(y,S,L),v.push(S,M,L)}this.setIndex(v),this.setAttribute("position",new an(x,3)),this.setAttribute("normal",new an(E,3)),this.setAttribute("uv",new an(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}class ea extends Un{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let u=0;const f=[],m=new K,g=new K,v=[],x=[],E=[],h=[];for(let l=0;l<=n;l++){const _=[],y=l/n;let S=0;l===0&&o===0?S=.5/t:l===n&&c===Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const L=M/t;m.x=-e*Math.cos(r+L*s)*Math.sin(o+y*a),m.y=e*Math.cos(o+y*a),m.z=e*Math.sin(r+L*s)*Math.sin(o+y*a),x.push(m.x,m.y,m.z),g.copy(m).normalize(),E.push(g.x,g.y,g.z),h.push(L+S,1-y),_.push(u++)}f.push(_)}for(let l=0;l<n;l++)for(let _=0;_<t;_++){const y=f[l][_+1],S=f[l][_],M=f[l+1][_],L=f[l+1][_+1];(l!==0||o>0)&&v.push(y,S,L),(l!==n-1||c<Math.PI)&&v.push(S,M,L)}this.setIndex(v),this.setAttribute("position",new an(x,3)),this.setAttribute("normal",new an(E,3)),this.setAttribute("uv",new an(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rd extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ld extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pd extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Dd extends Tc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Id extends Pd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nd extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ka(i,e,t,n){const r=Od(n);switch(t){case 1021:return i*e;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Od(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Fd(i){const e=new WeakMap;function t(a,c){const u=a.array,f=a.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(c,g),i.bufferData(c,u,f),a.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)v=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,c,u){const f=c.array,m=c.updateRanges;if(i.bindBuffer(u,a),m.length===0)i.bufferSubData(u,0,f);else{m.sort((v,x)=>v.start-x.start);let g=0;for(let v=1;v<m.length;v++){const x=m[g],E=m[v];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++g,m[g]=E)}m.length=g+1;for(let v=0,x=m.length;v<x;v++){const E=m[v];i.bufferSubData(u,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:r,remove:s,update:o}}var Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
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
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
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
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
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
#endif`,$d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Zd=`#ifdef USE_BUMPMAP
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oh=`#define PI 3.141592653589793
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
} // validated`,ah=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lh=`vec3 transformedNormal = objectNormal;
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
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yh=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Th=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bh=`#ifdef USE_GRADIENTMAP
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
}`,Mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ch=`uniform bool receiveShadow;
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
#endif`,Rh=`#ifdef USE_ENVMAP
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
#endif`,Lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nh=`PhysicalMaterial material;
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
#endif`,Oh=`struct PhysicalMaterial {
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
}`,Fh=`
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$h=`#if defined( USE_POINTS_UV )
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
#endif`,qh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jh=`#ifdef USE_MORPHTARGETS
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
#endif`,Qh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
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
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ef=`float getShadowMask() {
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
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Af=`#ifdef USE_SKINNING
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
#endif`,wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pf=`#ifdef USE_TRANSMISSION
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
#endif`,Df=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`#include <common>
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
}`,Wf=`#if DEPTH_PACKING == 3200
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
}`,Xf=`#define DISTANCE
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
}`,$f=`#define DISTANCE
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Qf=`#define LAMBERT
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
}`,ep=`#define LAMBERT
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
}`,tp=`#define MATCAP
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
}`,np=`#define MATCAP
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
}`,ip=`#define NORMAL
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
}`,rp=`#define NORMAL
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
}`,sp=`#define PHONG
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
}`,op=`#define PHONG
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
}`,ap=`#define STANDARD
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
}`,lp=`#define STANDARD
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
}`,cp=`#define TOON
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
}`,up=`#define TOON
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
}`,dp=`uniform float size;
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
}`,hp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 color;
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
}`,mp=`uniform float rotation;
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
}`,gp=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Ud,alphahash_pars_fragment:Bd,alphamap_fragment:zd,alphamap_pars_fragment:kd,alphatest_fragment:Hd,alphatest_pars_fragment:Gd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:$d,begin_vertex:qd,beginnormal_vertex:Yd,bsdfs:jd,iridescence_fragment:Kd,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:eh,clipping_planes_vertex:th,color_fragment:nh,color_pars_fragment:ih,color_pars_vertex:rh,color_vertex:sh,common:oh,cube_uv_reflection_fragment:ah,defaultnormal_vertex:lh,displacementmap_pars_vertex:ch,displacementmap_vertex:uh,emissivemap_fragment:dh,emissivemap_pars_fragment:hh,colorspace_fragment:fh,colorspace_pars_fragment:ph,envmap_fragment:mh,envmap_common_pars_fragment:gh,envmap_pars_fragment:vh,envmap_pars_vertex:_h,envmap_physical_pars_fragment:Rh,envmap_vertex:yh,fog_vertex:xh,fog_pars_vertex:Sh,fog_fragment:Eh,fog_pars_fragment:Th,gradientmap_pars_fragment:bh,lightmap_pars_fragment:Mh,lights_lambert_fragment:Ah,lights_lambert_pars_fragment:wh,lights_pars_begin:Ch,lights_toon_fragment:Lh,lights_toon_pars_fragment:Ph,lights_phong_fragment:Dh,lights_phong_pars_fragment:Ih,lights_physical_fragment:Nh,lights_physical_pars_fragment:Oh,lights_fragment_begin:Fh,lights_fragment_maps:Uh,lights_fragment_end:Bh,logdepthbuf_fragment:zh,logdepthbuf_pars_fragment:kh,logdepthbuf_pars_vertex:Hh,logdepthbuf_vertex:Gh,map_fragment:Vh,map_pars_fragment:Wh,map_particle_fragment:Xh,map_particle_pars_fragment:$h,metalnessmap_fragment:qh,metalnessmap_pars_fragment:Yh,morphinstance_vertex:jh,morphcolor_vertex:Kh,morphnormal_vertex:Zh,morphtarget_pars_vertex:Jh,morphtarget_vertex:Qh,normal_fragment_begin:ef,normal_fragment_maps:tf,normal_pars_fragment:nf,normal_pars_vertex:rf,normal_vertex:sf,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:uf,opaque_fragment:df,packing:hf,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:vf,roughnessmap_pars_fragment:_f,shadowmap_pars_fragment:yf,shadowmap_pars_vertex:xf,shadowmap_vertex:Sf,shadowmask_pars_fragment:Ef,skinbase_vertex:Tf,skinning_pars_vertex:bf,skinning_vertex:Mf,skinnormal_vertex:Af,specularmap_fragment:wf,specularmap_pars_fragment:Cf,tonemapping_fragment:Rf,tonemapping_pars_fragment:Lf,transmission_fragment:Pf,transmission_pars_fragment:Df,uv_pars_fragment:If,uv_pars_vertex:Nf,uv_vertex:Of,worldpos_vertex:Ff,background_vert:Uf,background_frag:Bf,backgroundCube_vert:zf,backgroundCube_frag:kf,cube_vert:Hf,cube_frag:Gf,depth_vert:Vf,depth_frag:Wf,distanceRGBA_vert:Xf,distanceRGBA_frag:$f,equirect_vert:qf,equirect_frag:Yf,linedashed_vert:jf,linedashed_frag:Kf,meshbasic_vert:Zf,meshbasic_frag:Jf,meshlambert_vert:Qf,meshlambert_frag:ep,meshmatcap_vert:tp,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:rp,meshphong_vert:sp,meshphong_frag:op,meshphysical_vert:ap,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:up,points_vert:dp,points_frag:hp,shadow_vert:fp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp},ge={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},rn={basic:{uniforms:xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:xt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:xt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:xt([ge.points,ge.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:xt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:xt([ge.common,ge.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:xt([ge.sprite,ge.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:xt([ge.common,ge.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:xt([ge.lights,ge.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};rn.physical={uniforms:xt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ur={r:0,b:0,g:0},qn=new Sn,vp=new ht;function _p(i,e,t,n,r,s,o){const a=new We(0);let c=s===!0?0:1,u,f,m=null,g=0,v=null;function x(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function E(y){let S=!1;const M=x(y);M===null?l(a,c):M&&M.isColor&&(l(M,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(y,S){const M=x(S);M&&(M.isCubeTexture||M.mapping===306)?(f===void 0&&(f=new qt(new ur(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Pi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),qn.copy(S.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(vp.makeRotationFromEuler(qn)),f.material.toneMapped=Ke.getTransfer(M.colorSpace)!==nt,(m!==M||g!==M.version||v!==i.toneMapping)&&(f.material.needsUpdate=!0,m=M,g=M.version,v=i.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new qt(new Di(2,2),new En({name:"BackgroundMaterial",uniforms:Pi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(m!==M||g!==M.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,m=M,g=M.version,v=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function l(y,S){y.getRGB(Ur,Ec(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,S,o)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),c=S,l(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,l(a,c)},render:E,addToRenderList:h,dispose:_}}function yp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,o=!1;function a(T,w,O,U,G){let $=!1;const k=m(U,O,w);s!==k&&(s=k,u(s.object)),$=v(T,U,O,G),$&&x(T,U,O,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(T,w,O,U),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function u(T){return i.bindVertexArray(T)}function f(T){return i.deleteVertexArray(T)}function m(T,w,O){const U=O.wireframe===!0;let G=n[T.id];G===void 0&&(G={},n[T.id]=G);let $=G[w.id];$===void 0&&($={},G[w.id]=$);let k=$[U];return k===void 0&&(k=g(c()),$[U]=k),k}function g(T){const w=[],O=[],U=[];for(let G=0;G<t;G++)w[G]=0,O[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:U,object:T,attributes:{},index:null}}function v(T,w,O,U){const G=s.attributes,$=w.attributes;let k=0;const q=O.getAttributes();for(const H in q)if(q[H].location>=0){const ce=G[H];let _e=$[H];if(_e===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(_e=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(_e=T.instanceColor)),ce===void 0||ce.attribute!==_e||_e&&ce.data!==_e.data)return!0;k++}return s.attributesNum!==k||s.index!==U}function x(T,w,O,U){const G={},$=w.attributes;let k=0;const q=O.getAttributes();for(const H in q)if(q[H].location>=0){let ce=$[H];ce===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(ce=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(ce=T.instanceColor));const _e={};_e.attribute=ce,ce&&ce.data&&(_e.data=ce.data),G[H]=_e,k++}s.attributes=G,s.attributesNum=k,s.index=U}function E(){const T=s.newAttributes;for(let w=0,O=T.length;w<O;w++)T[w]=0}function h(T){l(T,0)}function l(T,w){const O=s.newAttributes,U=s.enabledAttributes,G=s.attributeDivisors;O[T]=1,U[T]===0&&(i.enableVertexAttribArray(T),U[T]=1),G[T]!==w&&(i.vertexAttribDivisor(T,w),G[T]=w)}function _(){const T=s.newAttributes,w=s.enabledAttributes;for(let O=0,U=w.length;O<U;O++)w[O]!==T[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function y(T,w,O,U,G,$,k){k===!0?i.vertexAttribIPointer(T,w,O,G,$):i.vertexAttribPointer(T,w,O,U,G,$)}function S(T,w,O,U){E();const G=U.attributes,$=O.getAttributes(),k=w.defaultAttributeValues;for(const q in $){const H=$[q];if(H.location>=0){let ie=G[q];if(ie===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor)),ie!==void 0){const ce=ie.normalized,_e=ie.itemSize,Le=e.get(ie);if(Le===void 0)continue;const Ye=Le.buffer,Xe=Le.type,J=Le.bytesPerElement,pe=Xe===i.INT||Xe===i.UNSIGNED_INT||ie.gpuType===1013;if(ie.isInterleavedBufferAttribute){const he=ie.data,be=he.stride,Ae=ie.offset;if(he.isInstancedInterleavedBuffer){for(let De=0;De<H.locationSize;De++)l(H.location+De,he.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let De=0;De<H.locationSize;De++)h(H.location+De);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let De=0;De<H.locationSize;De++)y(H.location+De,_e/H.locationSize,Xe,ce,be*J,(Ae+_e/H.locationSize*De)*J,pe)}else{if(ie.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)l(H.location+he,ie.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let he=0;he<H.locationSize;he++)h(H.location+he);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let he=0;he<H.locationSize;he++)y(H.location+he,_e/H.locationSize,Xe,ce,_e*J,_e/H.locationSize*he*J,pe)}}else if(k!==void 0){const ce=k[q];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(H.location,ce);break;case 3:i.vertexAttrib3fv(H.location,ce);break;case 4:i.vertexAttrib4fv(H.location,ce);break;default:i.vertexAttrib1fv(H.location,ce)}}}}_()}function M(){I();for(const T in n){const w=n[T];for(const O in w){const U=w[O];for(const G in U)f(U[G].object),delete U[G];delete w[O]}delete n[T]}}function L(T){if(n[T.id]===void 0)return;const w=n[T.id];for(const O in w){const U=w[O];for(const G in U)f(U[G].object),delete U[G];delete w[O]}delete n[T.id]}function P(T){for(const w in n){const O=n[w];if(O[T.id]===void 0)continue;const U=O[T.id];for(const G in U)f(U[G].object),delete U[G];delete O[T.id]}}function I(){A(),o=!0,s!==r&&(s=r,u(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:h,disableUnusedAttributes:_}}function xp(i,e,t){let n;function r(u){n=u}function s(u,f){i.drawArrays(n,u,f),t.update(f,n,1)}function o(u,f,m){m!==0&&(i.drawArraysInstanced(n,u,f,m),t.update(f,n,m))}function a(u,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,m);let v=0;for(let x=0;x<m;x++)v+=f[x];t.update(v,n,1)}function c(u,f,m,g){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<u.length;x++)o(u[x],f[x],g[x]);else{v.multiDrawArraysInstancedWEBGL(n,u,0,f,0,g,0,m);let x=0;for(let E=0;E<m;E++)x+=f[E]*g[E];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==1023&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==1009&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==1015&&!I)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=c(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),l=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=x>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:h,maxAttributes:l,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:M,maxSamples:L}}function Ep(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new jn,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||n!==0||r;return r=g,n=m.length,v},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,g){t=f(m,g,0)},this.setState=function(m,g,v){const x=m.clippingPlanes,E=m.clipIntersection,h=m.clipShadows,l=i.get(m);if(!r||x===null||x.length===0||s&&!h)s?f(null):u();else{const _=s?0:n,y=_*4;let S=l.clippingState||null;c.value=S,S=f(x,g,y,v);for(let M=0;M!==y;++M)S[M]=t[M];l.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=_}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,g,v,x){const E=m!==null?m.length:0;let h=null;if(E!==0){if(h=c.value,x!==!0||h===null){const l=v+E*4,_=g.matrixWorldInverse;a.getNormalMatrix(_),(h===null||h.length<l)&&(h=new Float32Array(l));for(let y=0,S=v;y!==E;++y,S+=4)o.copy(m[y]).applyMatrix4(_,a),o.normal.toArray(h,S),h[S+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,h}}function Tp(i){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Td(c.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ai=4,Ha=[.125,.215,.35,.446,.526,.582],Zn=20,js=new Dd,Ga=new We;let Ks=null,Zs=0,Js=0,Qs=!1;const Kn=(1+Math.sqrt(5))/2,xi=1/Kn,Va=[new K(-Kn,xi,0),new K(Kn,xi,0),new K(-xi,0,Kn),new K(xi,0,Kn),new K(0,Kn,-xi),new K(0,Kn,xi),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],bp=new K;class Wa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=bp}=s;Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ks,Zs,Js),this._renderer.xr.enabled=Qs,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Li,depthBuffer:!1},r=Xa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(s)),this._blurMaterial=Ap(s,e,t)}return r}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,js)}_sceneToCubeUV(e,t,n,r,s){const c=new $t(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(Ga),m.toneMapping=0,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null));const E=new Qo({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),h=new qt(new ur,E);let l=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,l=!0):(E.color.copy(Ga),l=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(c.up.set(0,u[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[y],s.y,s.z)):S===1?(c.up.set(0,0,u[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[y],s.z)):(c.up.set(0,u[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[y]));const M=this._cubeSize;Br(r,S*M,y>2?M:0,M,M),m.setRenderTarget(r),l&&m.render(h,c),m.render(e,c)}h.geometry.dispose(),h.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$a());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Va[(r-s-1)%Va.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,m=new qt(this._lodPlanes[r],u),g=u.uniforms,v=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Zn-1),E=s/x,h=isFinite(s)?1+Math.floor(f*E):Zn;h>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Zn}`);const l=[];let _=0;for(let P=0;P<Zn;++P){const I=P/E,A=Math.exp(-I*I/2);l.push(A),P===0?_+=A:P<h&&(_+=2*A)}for(let P=0;P<l.length;P++)l[P]=l[P]/_;g.envMap.value=e.texture,g.samples.value=h,g.weights.value=l,g.latitudinal.value=o==="latitudinal",a&&(g.poleAxis.value=a);const{_lodMax:y}=this;g.dTheta.value=x,g.mipInt.value=y-n;const S=this._sizeLods[r],M=3*S*(r>y-Ai?r-y+Ai:0),L=4*(this._cubeSize-S);Br(t,M,L,3*S,2*S),c.setRenderTarget(t),c.render(m,js)}}function Mp(i){const e=[],t=[],n=[];let r=i;const s=i-Ai+1+Ha.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Ai?c=Ha[o-i+Ai-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),f=-u,m=1+u,g=[f,f,m,f,m,m,f,f,m,m,f,m],v=6,x=6,E=3,h=2,l=1,_=new Float32Array(E*x*v),y=new Float32Array(h*x*v),S=new Float32Array(l*x*v);for(let L=0;L<v;L++){const P=L%3*2/3-1,I=L>2?0:-1,A=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];_.set(A,E*x*L),y.set(g,h*x*L);const T=[L,L,L,L,L,L];S.set(T,l*x*L)}const M=new Un;M.setAttribute("position",new on(_,E)),M.setAttribute("uv",new on(y,h)),M.setAttribute("faceIndex",new on(S,l)),e.push(M),r>Ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xa(i,e,t){const n=new ti(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ap(i,e,t){const n=new Float32Array(Zn),r=new K(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ta(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $a(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function qa(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ta(){return`

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
	`}function wp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===303||c===304,f=c===301||c===302;if(u||f){let m=e.get(a);const g=m!==void 0?m.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==g)return t===null&&(t=new Wa(i)),m=u?t.fromEquirectangular(a,m):t.fromCubemap(a,m),m.texture.pmremVersion=a.pmremVersion,e.set(a,m),m.texture;if(m!==void 0)return m.texture;{const v=a.image;return u&&v&&v.height>0||f&&v&&r(v)?(t===null&&(t=new Wa(i)),m=u?t.fromEquirectangular(a):t.fromCubemap(a),m.texture.pmremVersion=a.pmremVersion,e.set(a,m),a.addEventListener("dispose",s),m.texture):null}}}return a}function r(a){let c=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&c++;return c===u}function s(a){const c=a.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ci("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Rp(i,e,t,n){const r={},s=new WeakMap;function o(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",o),delete r[g.id];const v=s.get(g);v&&(e.remove(v),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function a(m,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,t.memory.geometries++),g}function c(m){const g=m.attributes;for(const v in g)e.update(g[v],i.ARRAY_BUFFER)}function u(m){const g=[],v=m.index,x=m.attributes.position;let E=0;if(v!==null){const _=v.array;E=v.version;for(let y=0,S=_.length;y<S;y+=3){const M=_[y+0],L=_[y+1],P=_[y+2];g.push(M,L,L,P,P,M)}}else if(x!==void 0){const _=x.array;E=x.version;for(let y=0,S=_.length/3-1;y<S;y+=3){const M=y+0,L=y+1,P=y+2;g.push(M,L,L,P,P,M)}}else return;const h=new(gc(g)?Sc:xc)(g,1);h.version=E;const l=s.get(m);l&&e.remove(l),s.set(m,h)}function f(m){const g=s.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&u(m)}else u(m);return s.get(m)}return{get:a,update:c,getWireframeAttribute:f}}function Lp(i,e,t){let n;function r(g){n=g}let s,o;function a(g){s=g.type,o=g.bytesPerElement}function c(g,v){i.drawElements(n,v,s,g*o),t.update(v,n,1)}function u(g,v,x){x!==0&&(i.drawElementsInstanced(n,v,s,g*o,x),t.update(v,n,x))}function f(g,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,s,g,0,x);let h=0;for(let l=0;l<x;l++)h+=v[l];t.update(h,n,1)}function m(g,v,x,E){if(x===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let l=0;l<g.length;l++)u(g[l]/o,v[l],E[l]);else{h.multiDrawElementsInstancedWEBGL(n,v,0,s,g,0,E,0,x);let l=0;for(let _=0;_<x;_++)l+=v[_]*E[_];t.update(l,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function Pp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Dp(i,e,t){const n=new WeakMap,r=new ut;function s(o,a,c){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=f!==void 0?f.length:0;let g=n.get(a);if(g===void 0||g.count!==m){let T=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var v=T;g!==void 0&&g.texture.dispose();const x=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,l=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),E===!0&&(S=2),h===!0&&(S=3);let M=a.attributes.position.count*S,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const P=new Float32Array(M*L*4*m),I=new vc(P,M,L,m);I.type=1015,I.needsUpdate=!0;const A=S*4;for(let w=0;w<m;w++){const O=l[w],U=_[w],G=y[w],$=M*L*4*w;for(let k=0;k<O.count;k++){const q=k*A;x===!0&&(r.fromBufferAttribute(O,k),P[$+q+0]=r.x,P[$+q+1]=r.y,P[$+q+2]=r.z,P[$+q+3]=0),E===!0&&(r.fromBufferAttribute(U,k),P[$+q+4]=r.x,P[$+q+5]=r.y,P[$+q+6]=r.z,P[$+q+7]=0),h===!0&&(r.fromBufferAttribute(G,k),P[$+q+8]=r.x,P[$+q+9]=r.y,P[$+q+10]=r.z,P[$+q+11]=G.itemSize===4?r.w:1)}}g={count:m,texture:I,size:new et(M,L)},n.set(a,g),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let h=0;h<u.length;h++)x+=u[h];const E=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",E),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function Ip(i,e,t,n){let r=new WeakMap;function s(c){const u=n.render.frame,f=c.geometry,m=e.get(c,f);if(r.get(m)!==u&&(e.update(m),r.set(m,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const g=c.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return m}function o(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Cc=new wt,Ya=new Ac(1,1),Rc=new vc,Lc=new sd,Pc=new bc,ja=[],Ka=[],Za=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function Hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ja[r];if(s===void 0&&(s=new Float32Array(r),ja[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fs(i,e){let t=Ka[e];t===void 0&&(t=new Int32Array(e),Ka[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Np(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Qa.set(n),i.uniformMatrix2fv(this.addr,!1,Qa),pt(t,n)}}function zp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Ja.set(n),i.uniformMatrix3fv(this.addr,!1,Ja),pt(t,n)}}function kp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Za.set(n),i.uniformMatrix4fv(this.addr,!1,Za),pt(t,n)}}function Hp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Xp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function jp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ya.compareFunction=515,s=Ya):s=Cc,t.setTexture2D(e||s,r)}function Kp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Lc,r)}function Zp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Pc,r)}function Jp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rc,r)}function Qp(i){switch(i){case 5126:return Np;case 35664:return Op;case 35665:return Fp;case 35666:return Up;case 35674:return Bp;case 35675:return zp;case 35676:return kp;case 5124:case 35670:return Hp;case 35667:case 35671:return Gp;case 35668:case 35672:return Vp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return $p;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}function em(i,e){i.uniform1fv(this.addr,e)}function tm(i,e){const t=Hi(e,this.size,2);i.uniform2fv(this.addr,t)}function nm(i,e){const t=Hi(e,this.size,3);i.uniform3fv(this.addr,t)}function im(i,e){const t=Hi(e,this.size,4);i.uniform4fv(this.addr,t)}function rm(i,e){const t=Hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sm(i,e){const t=Hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function om(i,e){const t=Hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function am(i,e){i.uniform1iv(this.addr,e)}function lm(i,e){i.uniform2iv(this.addr,e)}function cm(i,e){i.uniform3iv(this.addr,e)}function um(i,e){i.uniform4iv(this.addr,e)}function dm(i,e){i.uniform1uiv(this.addr,e)}function hm(i,e){i.uniform2uiv(this.addr,e)}function fm(i,e){i.uniform3uiv(this.addr,e)}function pm(i,e){i.uniform4uiv(this.addr,e)}function mm(i,e,t){const n=this.cache,r=e.length,s=fs(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Cc,s[o])}function gm(i,e,t){const n=this.cache,r=e.length,s=fs(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Lc,s[o])}function vm(i,e,t){const n=this.cache,r=e.length,s=fs(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Pc,s[o])}function _m(i,e,t){const n=this.cache,r=e.length,s=fs(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Rc,s[o])}function ym(i){switch(i){case 5126:return em;case 35664:return tm;case 35665:return nm;case 35666:return im;case 35674:return rm;case 35675:return sm;case 35676:return om;case 5124:case 35670:return am;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return hm;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return _m}}class xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qp(t.type)}}class Sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ym(t.type)}}class Em{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function el(i,e){i.seq.push(e),i.map[e.id]=e}function Tm(i,e,t){const n=i.name,r=n.length;for(eo.lastIndex=0;;){const s=eo.exec(n),o=eo.lastIndex;let a=s[1];const c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===r){el(t,u===void 0?new xm(a,i,e):new Sm(a,i,e));break}else{let m=t.map[a];m===void 0&&(m=new Em(a),el(t,m)),t=m}}}class jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Tm(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function tl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bm=37297;let Mm=0;function Am(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const nl=new ze;function wm(i){Ke._getMatrix(nl,Ke.workingColorSpace,i);const e=`mat3( ${nl.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case ns:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function il(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Am(i.getShaderSource(e),a)}else return s}function Cm(i,e){const t=wm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Rm(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zr=new K;function Lm(){Ke.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),e=zr.y.toFixed(4),t=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Dm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Im(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ir(i){return i!==""}function rl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(i){return i.replace(Nm,Fm)}const Om=new Map;function Fm(i,e){let t=ke[e];if(t===void 0){const n=Om.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zo(t)}const Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(Um,Bm)}function Bm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function al(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function zm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function km(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Gm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Vm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wm(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=zm(t),u=km(t),f=Hm(t),m=Gm(t),g=Vm(t),v=Pm(t),x=Dm(s),E=r.createProgram();let h,l,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ir).join(`
`),h.length>0&&(h+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ir).join(`
`),l.length>0&&(l+=`
`)):(h=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),l=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?ke.tonemapping_pars_fragment:"",t.toneMapping!==0?Rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Cm("linearToOutputTexel",t.outputColorSpace),Lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),o=zo(o),o=rl(o,t),o=sl(o,t),a=zo(a),a=rl(a,t),a=sl(a,t),o=ol(o),a=ol(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,l=["#define varying in",t.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const y=_+h+o,S=_+l+a,M=tl(r,r.VERTEX_SHADER,y),L=tl(r,r.FRAGMENT_SHADER,S);r.attachShader(E,M),r.attachShader(E,L),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function P(w){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(E)||"",U=r.getShaderInfoLog(M)||"",G=r.getShaderInfoLog(L)||"",$=O.trim(),k=U.trim(),q=G.trim();let H=!0,ie=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,M,L);else{const ce=il(r,M,"vertex"),_e=il(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+$+`
`+ce+`
`+_e)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(k===""||q==="")&&(ie=!1);ie&&(w.diagnostics={runnable:H,programLog:$,vertexShader:{log:k,prefix:h},fragmentShader:{log:q,prefix:l}})}r.deleteShader(M),r.deleteShader(L),I=new jr(r,E),A=Im(r,E)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(E,bm)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mm++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=M,this.fragmentShader=L,this}let Xm=0;class $m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qm(e),t.set(e,n)),n}}class qm{constructor(e){this.id=Xm++,this.code=e,this.usedTimes=0}}function Ym(i,e,t,n,r,s,o){const a=new _c,c=new $m,u=new Set,f=[],m=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return u.add(A),A===0?"uv":`uv${A}`}function h(A,T,w,O,U){const G=O.fog,$=U.geometry,k=A.isMeshStandardMaterial?O.environment:null,q=(A.isMeshStandardMaterial?t:e).get(A.envMap||k),H=q&&q.mapping===306?q.image.height:null,ie=x[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const ce=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_e=ce!==void 0?ce.length:0;let Le=0;$.morphAttributes.position!==void 0&&(Le=1),$.morphAttributes.normal!==void 0&&(Le=2),$.morphAttributes.color!==void 0&&(Le=3);let Ye,Xe,J,pe;if(ie){const Be=rn[ie];Ye=Be.vertexShader,Xe=Be.fragmentShader}else Ye=A.vertexShader,Xe=A.fragmentShader,c.update(A),J=c.getVertexShaderID(A),pe=c.getFragmentShaderID(A);const he=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ae=U.isInstancedMesh===!0,De=U.isBatchedMesh===!0,Ze=!!A.map,Ge=!!A.matcap,F=!!q,Ue=!!A.aoMap,we=!!A.lightMap,He=!!A.bumpMap,Me=!!A.normalMap,Qe=!!A.displacementMap,ye=!!A.emissiveMap,Ie=!!A.metalnessMap,st=!!A.roughnessMap,rt=A.anisotropy>0,d=A.clearcoat>0,p=A.dispersion>0,b=A.iridescence>0,C=A.sheen>0,D=A.transmission>0,N=rt&&!!A.anisotropyMap,V=d&&!!A.clearcoatMap,z=d&&!!A.clearcoatNormalMap,ee=d&&!!A.clearcoatRoughnessMap,Q=b&&!!A.iridescenceMap,j=b&&!!A.iridescenceThicknessMap,te=C&&!!A.sheenColorMap,fe=C&&!!A.sheenRoughnessMap,le=!!A.specularMap,re=!!A.specularColorMap,Ee=!!A.specularIntensityMap,B=D&&!!A.transmissionMap,se=D&&!!A.thicknessMap,de=!!A.gradientMap,me=!!A.alphaMap,oe=A.alphaTest>0,ne=!!A.alphaHash,xe=!!A.extensions;let Ne=0;A.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const Ve={shaderID:ie,shaderType:A.type,shaderName:A.name,vertexShader:Ye,fragmentShader:Xe,defines:A.defines,customVertexShaderID:J,customFragmentShaderID:pe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:De,batchingColor:De&&U._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&U.instanceColor!==null,instancingMorph:Ae&&U.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Li,alphaToCoverage:!!A.alphaToCoverage,map:Ze,matcap:Ge,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:H,aoMap:Ue,lightMap:we,bumpMap:He,normalMap:Me,displacementMap:g&&Qe,emissiveMap:ye,normalMapObjectSpace:Me&&A.normalMapType===1,normalMapTangentSpace:Me&&A.normalMapType===0,metalnessMap:Ie,roughnessMap:st,anisotropy:rt,anisotropyMap:N,clearcoat:d,clearcoatMap:V,clearcoatNormalMap:z,clearcoatRoughnessMap:ee,dispersion:p,iridescence:b,iridescenceMap:Q,iridescenceThicknessMap:j,sheen:C,sheenColorMap:te,sheenRoughnessMap:fe,specularMap:le,specularColorMap:re,specularIntensityMap:Ee,transmission:D,transmissionMap:B,thicknessMap:se,gradientMap:de,opaque:A.transparent===!1&&A.blending===1&&A.alphaToCoverage===!1,alphaMap:me,alphaTest:oe,alphaHash:ne,combine:A.combine,mapUv:Ze&&E(A.map.channel),aoMapUv:Ue&&E(A.aoMap.channel),lightMapUv:we&&E(A.lightMap.channel),bumpMapUv:He&&E(A.bumpMap.channel),normalMapUv:Me&&E(A.normalMap.channel),displacementMapUv:Qe&&E(A.displacementMap.channel),emissiveMapUv:ye&&E(A.emissiveMap.channel),metalnessMapUv:Ie&&E(A.metalnessMap.channel),roughnessMapUv:st&&E(A.roughnessMap.channel),anisotropyMapUv:N&&E(A.anisotropyMap.channel),clearcoatMapUv:V&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:z&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:j&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:te&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:fe&&E(A.sheenRoughnessMap.channel),specularMapUv:le&&E(A.specularMap.channel),specularColorMapUv:re&&E(A.specularColorMap.channel),specularIntensityMapUv:Ee&&E(A.specularIntensityMap.channel),transmissionMapUv:B&&E(A.transmissionMap.channel),thicknessMapUv:se&&E(A.thicknessMap.channel),alphaMapUv:me&&E(A.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Me||rt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(Ze||me),fog:!!G,useFog:A.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:be,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ze&&A.map.isVideoTexture===!0&&Ke.getTransfer(A.map.colorSpace)===nt,decodeVideoTextureEmissive:ye&&A.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(A.emissiveMap.colorSpace)===nt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:xe&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&A.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ve.vertexUv1s=u.has(1),Ve.vertexUv2s=u.has(2),Ve.vertexUv3s=u.has(3),u.clear(),Ve}function l(A){const T=[];if(A.shaderID?T.push(A.shaderID):(T.push(A.customVertexShaderID),T.push(A.customFragmentShaderID)),A.defines!==void 0)for(const w in A.defines)T.push(w),T.push(A.defines[w]);return A.isRawShaderMaterial===!1&&(_(T,A),y(T,A),T.push(i.outputColorSpace)),T.push(A.customProgramCacheKey),T.join()}function _(A,T){A.push(T.precision),A.push(T.outputColorSpace),A.push(T.envMapMode),A.push(T.envMapCubeUVHeight),A.push(T.mapUv),A.push(T.alphaMapUv),A.push(T.lightMapUv),A.push(T.aoMapUv),A.push(T.bumpMapUv),A.push(T.normalMapUv),A.push(T.displacementMapUv),A.push(T.emissiveMapUv),A.push(T.metalnessMapUv),A.push(T.roughnessMapUv),A.push(T.anisotropyMapUv),A.push(T.clearcoatMapUv),A.push(T.clearcoatNormalMapUv),A.push(T.clearcoatRoughnessMapUv),A.push(T.iridescenceMapUv),A.push(T.iridescenceThicknessMapUv),A.push(T.sheenColorMapUv),A.push(T.sheenRoughnessMapUv),A.push(T.specularMapUv),A.push(T.specularColorMapUv),A.push(T.specularIntensityMapUv),A.push(T.transmissionMapUv),A.push(T.thicknessMapUv),A.push(T.combine),A.push(T.fogExp2),A.push(T.sizeAttenuation),A.push(T.morphTargetsCount),A.push(T.morphAttributeCount),A.push(T.numDirLights),A.push(T.numPointLights),A.push(T.numSpotLights),A.push(T.numSpotLightMaps),A.push(T.numHemiLights),A.push(T.numRectAreaLights),A.push(T.numDirLightShadows),A.push(T.numPointLightShadows),A.push(T.numSpotLightShadows),A.push(T.numSpotLightShadowsWithMaps),A.push(T.numLightProbes),A.push(T.shadowMapType),A.push(T.toneMapping),A.push(T.numClippingPlanes),A.push(T.numClipIntersection),A.push(T.depthPacking)}function y(A,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),A.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),A.push(a.mask)}function S(A){const T=x[A.type];let w;if(T){const O=rn[T];w=yd.clone(O.uniforms)}else w=A.uniforms;return w}function M(A,T){let w;for(let O=0,U=f.length;O<U;O++){const G=f[O];if(G.cacheKey===T){w=G,++w.usedTimes;break}}return w===void 0&&(w=new Wm(i,T,A,s),f.push(w)),w}function L(A){if(--A.usedTimes===0){const T=f.indexOf(A);f[T]=f[f.length-1],f.pop(),A.destroy()}}function P(A){c.remove(A)}function I(){c.dispose()}return{getParameters:h,getProgramCacheKey:l,getUniforms:S,acquireProgram:M,releaseProgram:L,releaseShaderCache:P,programs:f,dispose:I}}function jm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Km(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ll(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(m,g,v,x,E,h){let l=i[e];return l===void 0?(l={id:m.id,object:m,geometry:g,material:v,groupOrder:x,renderOrder:m.renderOrder,z:E,group:h},i[e]=l):(l.id=m.id,l.object=m,l.geometry=g,l.material=v,l.groupOrder=x,l.renderOrder=m.renderOrder,l.z=E,l.group=h),e++,l}function a(m,g,v,x,E,h){const l=o(m,g,v,x,E,h);v.transmission>0?n.push(l):v.transparent===!0?r.push(l):t.push(l)}function c(m,g,v,x,E,h){const l=o(m,g,v,x,E,h);v.transmission>0?n.unshift(l):v.transparent===!0?r.unshift(l):t.unshift(l)}function u(m,g){t.length>1&&t.sort(m||Km),n.length>1&&n.sort(g||ll),r.length>1&&r.sort(g||ll)}function f(){for(let m=e,g=i.length;m<g;m++){const v=i[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:f,sort:u}}function Zm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new cl,i.set(n,[o])):r>=s.length?(o=new cl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new We};break;case"SpotLight":t={position:new K,direction:new K,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function Qm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let eg=0;function tg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ng(i){const e=new Jm,t=Qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new K);const r=new K,s=new ht,o=new ht;function a(u){let f=0,m=0,g=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let v=0,x=0,E=0,h=0,l=0,_=0,y=0,S=0,M=0,L=0,P=0;u.sort(tg);for(let A=0,T=u.length;A<T;A++){const w=u[A],O=w.color,U=w.intensity,G=w.distance,$=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=O.r*U,m+=O.g*U,g+=O.b*U;else if(w.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(w.sh.coefficients[k],U);P++}else if(w.isDirectionalLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const q=w.shadow,H=t.get(w);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.directionalShadow[v]=H,n.directionalShadowMap[v]=$,n.directionalShadowMatrix[v]=w.shadow.matrix,_++}n.directional[v]=k,v++}else if(w.isSpotLight){const k=e.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(O).multiplyScalar(U),k.distance=G,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,n.spot[E]=k;const q=w.shadow;if(w.map&&(n.spotLightMap[M]=w.map,M++,q.updateMatrices(w),w.castShadow&&L++),n.spotLightMatrix[E]=q.matrix,w.castShadow){const H=t.get(w);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.spotShadow[E]=H,n.spotShadowMap[E]=$,S++}E++}else if(w.isRectAreaLight){const k=e.get(w);k.color.copy(O).multiplyScalar(U),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),n.rectArea[h]=k,h++}else if(w.isPointLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){const q=w.shadow,H=t.get(w);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=$,n.pointShadowMatrix[x]=w.shadow.matrix,y++}n.point[x]=k,x++}else if(w.isHemisphereLight){const k=e.get(w);k.skyColor.copy(w.color).multiplyScalar(U),k.groundColor.copy(w.groundColor).multiplyScalar(U),n.hemi[l]=k,l++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=g;const I=n.hash;(I.directionalLength!==v||I.pointLength!==x||I.spotLength!==E||I.rectAreaLength!==h||I.hemiLength!==l||I.numDirectionalShadows!==_||I.numPointShadows!==y||I.numSpotShadows!==S||I.numSpotMaps!==M||I.numLightProbes!==P)&&(n.directional.length=v,n.spot.length=E,n.rectArea.length=h,n.point.length=x,n.hemi.length=l,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+M-L,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,I.directionalLength=v,I.pointLength=x,I.spotLength=E,I.rectAreaLength=h,I.hemiLength=l,I.numDirectionalShadows=_,I.numPointShadows=y,I.numSpotShadows=S,I.numSpotMaps=M,I.numLightProbes=P,n.version=eg++)}function c(u,f){let m=0,g=0,v=0,x=0,E=0;const h=f.matrixWorldInverse;for(let l=0,_=u.length;l<_;l++){const y=u[l];if(y.isDirectionalLight){const S=n.directional[m];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(h),m++}else if(y.isSpotLight){const S=n.spot[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(h),v++}else if(y.isRectAreaLight){const S=n.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),o.identity(),s.copy(y.matrixWorld),s.premultiply(h),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const S=n.point[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),g++}else if(y.isHemisphereLight){const S=n.hemi[E];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(h),E++}}}return{setup:a,setupView:c,state:n}}function ul(i){const e=new ng(i),t=[],n=[];function r(f){u.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function a(){e.setup(t)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function ig(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ul(i),e.set(r,[a])):s>=o.length?(a=new ul(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sg=`uniform sampler2D shadow_pass;
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
}`;function og(i,e,t){let n=new Mc;const r=new et,s=new et,o=new ut,a=new Rd({depthPacking:3201}),c=new Ld,u={},f=t.maxTextureSize,m={0:1,1:0,2:2},g=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:rg,fragmentShader:sg}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const x=new Un;x.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new qt(x,g),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let l=this.type;this.render=function(L,P,I){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||L.length===0)return;const A=i.getRenderTarget(),T=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(0),O.buffers.depth.getReversed()?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=l!==3&&this.type===3,G=l===3&&this.type!==3;for(let $=0,k=L.length;$<k;$++){const q=L[$],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ie=H.getFrameExtents();if(r.multiply(ie),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ie.x),r.x=s.x*ie.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ie.y),r.y=s.y*ie.y,H.mapSize.y=s.y)),H.map===null||U===!0||G===!0){const _e=this.type!==3?{minFilter:1003,magFilter:1003}:{};H.map!==null&&H.map.dispose(),H.map=new ti(r.x,r.y,_e),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ce=H.getViewportCount();for(let _e=0;_e<ce;_e++){const Le=H.getViewport(_e);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),O.viewport(o),H.updateMatrices(q,_e),n=H.getFrustum(),S(P,I,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===3&&_(H,I),H.needsUpdate=!1}l=this.type,h.needsUpdate=!1,i.setRenderTarget(A,T,w)};function _(L,P){const I=e.update(E);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ti(r.x,r.y)),g.uniforms.shadow_pass.value=L.map.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(P,null,I,g,E,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(P,null,I,v,E,null)}function y(L,P,I,A){let T=null;const w=I.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(w!==void 0)T=w;else if(T=I.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=T.uuid,U=P.uuid;let G=u[O];G===void 0&&(G={},u[O]=G);let $=G[U];$===void 0&&($=T.clone(),G[U]=$,P.addEventListener("dispose",M)),T=$}if(T.visible=P.visible,T.wireframe=P.wireframe,A===3?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:m[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const O=i.properties.get(T);O.light=I}return T}function S(L,P,I,A,T){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===3)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,L.matrixWorld);const U=e.update(L),G=L.material;if(Array.isArray(G)){const $=U.groups;for(let k=0,q=$.length;k<q;k++){const H=$[k],ie=G[H.materialIndex];if(ie&&ie.visible){const ce=y(L,ie,A,T);L.onBeforeShadow(i,L,P,I,U,ce,H),i.renderBufferDirect(I,null,U,ce,L,H),L.onAfterShadow(i,L,P,I,U,ce,H)}}}else if(G.visible){const $=y(L,G,A,T);L.onBeforeShadow(i,L,P,I,U,$,null),i.renderBufferDirect(I,null,U,$,L,null),L.onAfterShadow(i,L,P,I,U,$,null)}}const O=L.children;for(let U=0,G=O.length;U<G;U++)S(O[U],P,I,A,T)}function M(L){L.target.removeEventListener("dispose",M);for(const I in u){const A=u[I],T=L.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}const ag={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function lg(i,e){function t(){let B=!1;const se=new ut;let de=null;const me=new ut(0,0,0,0);return{setMask:function(oe){de!==oe&&!B&&(i.colorMask(oe,oe,oe,oe),de=oe)},setLocked:function(oe){B=oe},setClear:function(oe,ne,xe,Ne,Ve){Ve===!0&&(oe*=Ne,ne*=Ne,xe*=Ne),se.set(oe,ne,xe,Ne),me.equals(se)===!1&&(i.clearColor(oe,ne,xe,Ne),me.copy(se))},reset:function(){B=!1,de=null,me.set(-1,0,0,0)}}}function n(){let B=!1,se=!1,de=null,me=null,oe=null;return{setReversed:function(ne){if(se!==ne){const xe=e.get("EXT_clip_control");ne?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),se=ne;const Ne=oe;oe=null,this.setClear(Ne)}},getReversed:function(){return se},setTest:function(ne){ne?he(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ne){de!==ne&&!B&&(i.depthMask(ne),de=ne)},setFunc:function(ne){if(se&&(ne=ag[ne]),me!==ne){switch(ne){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ne}},setLocked:function(ne){B=ne},setClear:function(ne){oe!==ne&&(se&&(ne=1-ne),i.clearDepth(ne),oe=ne)},reset:function(){B=!1,de=null,me=null,oe=null,se=!1}}}function r(){let B=!1,se=null,de=null,me=null,oe=null,ne=null,xe=null,Ne=null,Ve=null;return{setTest:function(Be){B||(Be?he(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Be){se!==Be&&!B&&(i.stencilMask(Be),se=Be)},setFunc:function(Be,zt,Rt){(de!==Be||me!==zt||oe!==Rt)&&(i.stencilFunc(Be,zt,Rt),de=Be,me=zt,oe=Rt)},setOp:function(Be,zt,Rt){(ne!==Be||xe!==zt||Ne!==Rt)&&(i.stencilOp(Be,zt,Rt),ne=Be,xe=zt,Ne=Rt)},setLocked:function(Be){B=Be},setClear:function(Be){Ve!==Be&&(i.clearStencil(Be),Ve=Be)},reset:function(){B=!1,se=null,de=null,me=null,oe=null,ne=null,xe=null,Ne=null,Ve=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,v=[],x=null,E=!1,h=null,l=null,_=null,y=null,S=null,M=null,L=null,P=new We(0,0,0),I=0,A=!1,T=null,w=null,O=null,U=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,q=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=q>=2);let ie=null,ce={};const _e=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Ye=new ut().fromArray(_e),Xe=new ut().fromArray(Le);function J(B,se,de,me){const oe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(B,ne),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<de;xe++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(se+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return ne}const pe={};pe[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(i.DEPTH_TEST),o.setFunc(3),He(!1),Me(1),he(i.CULL_FACE),Ue(0);function he(B){f[B]!==!0&&(i.enable(B),f[B]=!0)}function be(B){f[B]!==!1&&(i.disable(B),f[B]=!1)}function Ae(B,se){return m[B]!==se?(i.bindFramebuffer(B,se),m[B]=se,B===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),B===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se),!0):!1}function De(B,se){let de=v,me=!1;if(B){de=g.get(se),de===void 0&&(de=[],g.set(se,de));const oe=B.textures;if(de.length!==oe.length||de[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,xe=oe.length;ne<xe;ne++)de[ne]=i.COLOR_ATTACHMENT0+ne;de.length=oe.length,me=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,me=!0);me&&i.drawBuffers(de)}function Ze(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const Ge={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Ge[103]=i.MIN,Ge[104]=i.MAX;const F={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(B,se,de,me,oe,ne,xe,Ne,Ve,Be){if(B===0){E===!0&&(be(i.BLEND),E=!1);return}if(E===!1&&(he(i.BLEND),E=!0),B!==5){if(B!==h||Be!==A){if((l!==100||S!==100)&&(i.blendEquation(i.FUNC_ADD),l=100,S=100),Be)switch(B){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,y=null,M=null,L=null,P.set(0,0,0),I=0,h=B,A=Be}return}oe=oe||se,ne=ne||de,xe=xe||me,(se!==l||oe!==S)&&(i.blendEquationSeparate(Ge[se],Ge[oe]),l=se,S=oe),(de!==_||me!==y||ne!==M||xe!==L)&&(i.blendFuncSeparate(F[de],F[me],F[ne],F[xe]),_=de,y=me,M=ne,L=xe),(Ne.equals(P)===!1||Ve!==I)&&(i.blendColor(Ne.r,Ne.g,Ne.b,Ve),P.copy(Ne),I=Ve),h=B,A=!1}function we(B,se){B.side===2?be(i.CULL_FACE):he(i.CULL_FACE);let de=B.side===1;se&&(de=!de),He(de),B.blending===1&&B.transparent===!1?Ue(0):Ue(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const me=B.stencilWrite;a.setTest(me),me&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ye(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(B){T!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),T=B)}function Me(B){B!==0?(he(i.CULL_FACE),B!==w&&(B===1?i.cullFace(i.BACK):B===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),w=B}function Qe(B){B!==O&&(k&&i.lineWidth(B),O=B)}function ye(B,se,de){B?(he(i.POLYGON_OFFSET_FILL),(U!==se||G!==de)&&(i.polygonOffset(se,de),U=se,G=de)):be(i.POLYGON_OFFSET_FILL)}function Ie(B){B?he(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function st(B){B===void 0&&(B=i.TEXTURE0+$-1),ie!==B&&(i.activeTexture(B),ie=B)}function rt(B,se,de){de===void 0&&(ie===null?de=i.TEXTURE0+$-1:de=ie);let me=ce[de];me===void 0&&(me={type:void 0,texture:void 0},ce[de]=me),(me.type!==B||me.texture!==se)&&(ie!==de&&(i.activeTexture(de),ie=de),i.bindTexture(B,se||pe[B]),me.type=B,me.texture=se)}function d(){const B=ce[ie];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function p(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function C(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function D(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function N(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(B){Ye.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ye.copy(B))}function fe(B){Xe.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Xe.copy(B))}function le(B,se){let de=u.get(se);de===void 0&&(de=new WeakMap,u.set(se,de));let me=de.get(B);me===void 0&&(me=i.getUniformBlockIndex(se,B.name),de.set(B,me))}function re(B,se){const me=u.get(se).get(B);c.get(se)!==me&&(i.uniformBlockBinding(se,me,B.__bindingPointIndex),c.set(se,me))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ie=null,ce={},m={},g=new WeakMap,v=[],x=null,E=!1,h=null,l=null,_=null,y=null,S=null,M=null,L=null,P=new We(0,0,0),I=0,A=!1,T=null,w=null,O=null,U=null,G=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:be,bindFramebuffer:Ae,drawBuffers:De,useProgram:Ze,setBlending:Ue,setMaterial:we,setFlipSided:He,setCullFace:Me,setLineWidth:Qe,setPolygonOffset:ye,setScissorTest:Ie,activeTexture:st,bindTexture:rt,unbindTexture:d,compressedTexImage2D:p,compressedTexImage3D:b,texImage2D:Q,texImage3D:j,updateUBOMapping:le,uniformBlockBinding:re,texStorage2D:z,texStorage3D:ee,texSubImage2D:C,texSubImage3D:D,compressedTexSubImage2D:N,compressedTexSubImage3D:V,scissor:te,viewport:fe,reset:Ee}}function cg(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,f=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(d,p){return v?new OffscreenCanvas(d,p):is("canvas")}function E(d,p,b){let C=1;const D=rt(d);if((D.width>b||D.height>b)&&(C=b/Math.max(D.width,D.height)),C<1)if(typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap||typeof VideoFrame<"u"&&d instanceof VideoFrame){const N=Math.floor(C*D.width),V=Math.floor(C*D.height);m===void 0&&(m=x(N,V));const z=p?x(N,V):m;return z.width=N,z.height=V,z.getContext("2d").drawImage(d,0,0,N,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+N+"x"+V+")."),z}else return"data"in d&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),d;return d}function h(d){return d.generateMipmaps}function l(d){i.generateMipmap(d)}function _(d){return d.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:d.isWebGL3DRenderTarget?i.TEXTURE_3D:d.isWebGLArrayRenderTarget||d.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(d,p,b,C,D=!1){if(d!==null){if(i[d]!==void 0)return i[d];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+d+"'")}let N=p;if(p===i.RED&&(b===i.FLOAT&&(N=i.R32F),b===i.HALF_FLOAT&&(N=i.R16F),b===i.UNSIGNED_BYTE&&(N=i.R8)),p===i.RED_INTEGER&&(b===i.UNSIGNED_BYTE&&(N=i.R8UI),b===i.UNSIGNED_SHORT&&(N=i.R16UI),b===i.UNSIGNED_INT&&(N=i.R32UI),b===i.BYTE&&(N=i.R8I),b===i.SHORT&&(N=i.R16I),b===i.INT&&(N=i.R32I)),p===i.RG&&(b===i.FLOAT&&(N=i.RG32F),b===i.HALF_FLOAT&&(N=i.RG16F),b===i.UNSIGNED_BYTE&&(N=i.RG8)),p===i.RG_INTEGER&&(b===i.UNSIGNED_BYTE&&(N=i.RG8UI),b===i.UNSIGNED_SHORT&&(N=i.RG16UI),b===i.UNSIGNED_INT&&(N=i.RG32UI),b===i.BYTE&&(N=i.RG8I),b===i.SHORT&&(N=i.RG16I),b===i.INT&&(N=i.RG32I)),p===i.RGB_INTEGER&&(b===i.UNSIGNED_BYTE&&(N=i.RGB8UI),b===i.UNSIGNED_SHORT&&(N=i.RGB16UI),b===i.UNSIGNED_INT&&(N=i.RGB32UI),b===i.BYTE&&(N=i.RGB8I),b===i.SHORT&&(N=i.RGB16I),b===i.INT&&(N=i.RGB32I)),p===i.RGBA_INTEGER&&(b===i.UNSIGNED_BYTE&&(N=i.RGBA8UI),b===i.UNSIGNED_SHORT&&(N=i.RGBA16UI),b===i.UNSIGNED_INT&&(N=i.RGBA32UI),b===i.BYTE&&(N=i.RGBA8I),b===i.SHORT&&(N=i.RGBA16I),b===i.INT&&(N=i.RGBA32I)),p===i.RGB&&b===i.UNSIGNED_INT_5_9_9_9_REV&&(N=i.RGB9_E5),p===i.RGBA){const V=D?ns:Ke.getTransfer(C);b===i.FLOAT&&(N=i.RGBA32F),b===i.HALF_FLOAT&&(N=i.RGBA16F),b===i.UNSIGNED_BYTE&&(N=V===nt?i.SRGB8_ALPHA8:i.RGBA8),b===i.UNSIGNED_SHORT_4_4_4_4&&(N=i.RGBA4),b===i.UNSIGNED_SHORT_5_5_5_1&&(N=i.RGB5_A1)}return(N===i.R16F||N===i.R32F||N===i.RG16F||N===i.RG32F||N===i.RGBA16F||N===i.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function S(d,p){let b;return d?p===null||p===1014||p===1020?b=i.DEPTH24_STENCIL8:p===1015?b=i.DEPTH32F_STENCIL8:p===1012&&(b=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===1014||p===1020?b=i.DEPTH_COMPONENT24:p===1015?b=i.DEPTH_COMPONENT32F:p===1012&&(b=i.DEPTH_COMPONENT16),b}function M(d,p){return h(d)===!0||d.isFramebufferTexture&&d.minFilter!==1003&&d.minFilter!==1006?Math.log2(Math.max(p.width,p.height))+1:d.mipmaps!==void 0&&d.mipmaps.length>0?d.mipmaps.length:d.isCompressedTexture&&Array.isArray(d.image)?p.mipmaps.length:1}function L(d){const p=d.target;p.removeEventListener("dispose",L),I(p),p.isVideoTexture&&f.delete(p)}function P(d){const p=d.target;p.removeEventListener("dispose",P),T(p)}function I(d){const p=n.get(d);if(p.__webglInit===void 0)return;const b=d.source,C=g.get(b);if(C){const D=C[p.__cacheKey];D.usedTimes--,D.usedTimes===0&&A(d),Object.keys(C).length===0&&g.delete(b)}n.remove(d)}function A(d){const p=n.get(d);i.deleteTexture(p.__webglTexture);const b=d.source,C=g.get(b);delete C[p.__cacheKey],o.memory.textures--}function T(d){const p=n.get(d);if(d.depthTexture&&(d.depthTexture.dispose(),n.remove(d.depthTexture)),d.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(p.__webglFramebuffer[C]))for(let D=0;D<p.__webglFramebuffer[C].length;D++)i.deleteFramebuffer(p.__webglFramebuffer[C][D]);else i.deleteFramebuffer(p.__webglFramebuffer[C]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[C])}else{if(Array.isArray(p.__webglFramebuffer))for(let C=0;C<p.__webglFramebuffer.length;C++)i.deleteFramebuffer(p.__webglFramebuffer[C]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let C=0;C<p.__webglColorRenderbuffer.length;C++)p.__webglColorRenderbuffer[C]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[C]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const b=d.textures;for(let C=0,D=b.length;C<D;C++){const N=n.get(b[C]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),o.memory.textures--),n.remove(b[C])}n.remove(d)}let w=0;function O(){w=0}function U(){const d=w;return d>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+d+" texture units while this GPU supports only "+r.maxTextures),w+=1,d}function G(d){const p=[];return p.push(d.wrapS),p.push(d.wrapT),p.push(d.wrapR||0),p.push(d.magFilter),p.push(d.minFilter),p.push(d.anisotropy),p.push(d.internalFormat),p.push(d.format),p.push(d.type),p.push(d.generateMipmaps),p.push(d.premultiplyAlpha),p.push(d.flipY),p.push(d.unpackAlignment),p.push(d.colorSpace),p.join()}function $(d,p){const b=n.get(d);if(d.isVideoTexture&&Ie(d),d.isRenderTargetTexture===!1&&d.isExternalTexture!==!0&&d.version>0&&b.__version!==d.version){const C=d.image;if(C===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(C.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(b,d,p);return}}else d.isExternalTexture&&(b.__webglTexture=d.sourceTexture?d.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,b.__webglTexture,i.TEXTURE0+p)}function k(d,p){const b=n.get(d);if(d.isRenderTargetTexture===!1&&d.version>0&&b.__version!==d.version){pe(b,d,p);return}t.bindTexture(i.TEXTURE_2D_ARRAY,b.__webglTexture,i.TEXTURE0+p)}function q(d,p){const b=n.get(d);if(d.isRenderTargetTexture===!1&&d.version>0&&b.__version!==d.version){pe(b,d,p);return}t.bindTexture(i.TEXTURE_3D,b.__webglTexture,i.TEXTURE0+p)}function H(d,p){const b=n.get(d);if(d.version>0&&b.__version!==d.version){he(b,d,p);return}t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+p)}const ie={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},ce={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},_e={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Le(d,p){if(p.type===1015&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===1006||p.magFilter===1007||p.magFilter===1005||p.magFilter===1008||p.minFilter===1006||p.minFilter===1007||p.minFilter===1005||p.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(d,i.TEXTURE_WRAP_S,ie[p.wrapS]),i.texParameteri(d,i.TEXTURE_WRAP_T,ie[p.wrapT]),(d===i.TEXTURE_3D||d===i.TEXTURE_2D_ARRAY)&&i.texParameteri(d,i.TEXTURE_WRAP_R,ie[p.wrapR]),i.texParameteri(d,i.TEXTURE_MAG_FILTER,ce[p.magFilter]),i.texParameteri(d,i.TEXTURE_MIN_FILTER,ce[p.minFilter]),p.compareFunction&&(i.texParameteri(d,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(d,i.TEXTURE_COMPARE_FUNC,_e[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===1003||p.minFilter!==1005&&p.minFilter!==1008||p.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){const b=e.get("EXT_texture_filter_anisotropic");i.texParameterf(d,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,r.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function Ye(d,p){let b=!1;d.__webglInit===void 0&&(d.__webglInit=!0,p.addEventListener("dispose",L));const C=p.source;let D=g.get(C);D===void 0&&(D={},g.set(C,D));const N=G(p);if(N!==d.__cacheKey){D[N]===void 0&&(D[N]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,b=!0),D[N].usedTimes++;const V=D[d.__cacheKey];V!==void 0&&(D[d.__cacheKey].usedTimes--,V.usedTimes===0&&A(p)),d.__cacheKey=N,d.__webglTexture=D[N].texture}return b}function Xe(d,p,b){return Math.floor(Math.floor(d/b)/p)}function J(d,p,b,C){const N=d.updateRanges;if(N.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,b,C,p.data);else{N.sort((j,te)=>j.start-te.start);let V=0;for(let j=1;j<N.length;j++){const te=N[V],fe=N[j],le=te.start+te.count,re=Xe(fe.start,p.width,4),Ee=Xe(te.start,p.width,4);fe.start<=le+1&&re===Ee&&Xe(fe.start+fe.count-1,p.width,4)===re?te.count=Math.max(te.count,fe.start+fe.count-te.start):(++V,N[V]=fe)}N.length=V+1;const z=i.getParameter(i.UNPACK_ROW_LENGTH),ee=i.getParameter(i.UNPACK_SKIP_PIXELS),Q=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let j=0,te=N.length;j<te;j++){const fe=N[j],le=Math.floor(fe.start/4),re=Math.ceil(fe.count/4),Ee=le%p.width,B=Math.floor(le/p.width),se=re,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Ee,B,se,de,b,C,p.data)}d.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,z),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,Q)}}function pe(d,p,b){let C=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(C=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(C=i.TEXTURE_3D);const D=Ye(d,p),N=p.source;t.bindTexture(C,d.__webglTexture,i.TEXTURE0+b);const V=n.get(N);if(N.version!==V.__version||D===!0){t.activeTexture(i.TEXTURE0+b);const z=Ke.getPrimaries(Ke.workingColorSpace),ee=p.colorSpace===Dn?null:Ke.getPrimaries(p.colorSpace),Q=p.colorSpace===Dn||z===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let j=E(p.image,!1,r.maxTextureSize);j=st(p,j);const te=s.convert(p.format,p.colorSpace),fe=s.convert(p.type);let le=y(p.internalFormat,te,fe,p.colorSpace,p.isVideoTexture);Le(C,p);let re;const Ee=p.mipmaps,B=p.isVideoTexture!==!0,se=V.__version===void 0||D===!0,de=N.dataReady,me=M(p,j);if(p.isDepthTexture)le=S(p.format===1027,p.type),se&&(B?t.texStorage2D(i.TEXTURE_2D,1,le,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,le,j.width,j.height,0,te,fe,null));else if(p.isDataTexture)if(Ee.length>0){B&&se&&t.texStorage2D(i.TEXTURE_2D,me,le,Ee[0].width,Ee[0].height);for(let oe=0,ne=Ee.length;oe<ne;oe++)re=Ee[oe],B?de&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,re.width,re.height,te,fe,re.data):t.texImage2D(i.TEXTURE_2D,oe,le,re.width,re.height,0,te,fe,re.data);p.generateMipmaps=!1}else B?(se&&t.texStorage2D(i.TEXTURE_2D,me,le,j.width,j.height),de&&J(p,j,te,fe)):t.texImage2D(i.TEXTURE_2D,0,le,j.width,j.height,0,te,fe,j.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){B&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,le,Ee[0].width,Ee[0].height,j.depth);for(let oe=0,ne=Ee.length;oe<ne;oe++)if(re=Ee[oe],p.format!==1023)if(te!==null)if(B){if(de)if(p.layerUpdates.size>0){const xe=ka(re.width,re.height,p.format,p.type);for(const Ne of p.layerUpdates){const Ve=re.data.subarray(Ne*xe/re.data.BYTES_PER_ELEMENT,(Ne+1)*xe/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Ne,re.width,re.height,1,te,Ve)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,re.width,re.height,j.depth,te,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,le,re.width,re.height,j.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,re.width,re.height,j.depth,te,fe,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,le,re.width,re.height,j.depth,0,te,fe,re.data)}else{B&&se&&t.texStorage2D(i.TEXTURE_2D,me,le,Ee[0].width,Ee[0].height);for(let oe=0,ne=Ee.length;oe<ne;oe++)re=Ee[oe],p.format!==1023?te!==null?B?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,re.width,re.height,te,re.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,le,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?de&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,re.width,re.height,te,fe,re.data):t.texImage2D(i.TEXTURE_2D,oe,le,re.width,re.height,0,te,fe,re.data)}else if(p.isDataArrayTexture)if(B){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,le,j.width,j.height,j.depth),de)if(p.layerUpdates.size>0){const oe=ka(j.width,j.height,p.format,p.type);for(const ne of p.layerUpdates){const xe=j.data.subarray(ne*oe/j.data.BYTES_PER_ELEMENT,(ne+1)*oe/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,j.width,j.height,1,te,fe,xe)}p.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,te,fe,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,j.width,j.height,j.depth,0,te,fe,j.data);else if(p.isData3DTexture)B?(se&&t.texStorage3D(i.TEXTURE_3D,me,le,j.width,j.height,j.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,te,fe,j.data)):t.texImage3D(i.TEXTURE_3D,0,le,j.width,j.height,j.depth,0,te,fe,j.data);else if(p.isFramebufferTexture){if(se)if(B)t.texStorage2D(i.TEXTURE_2D,me,le,j.width,j.height);else{let oe=j.width,ne=j.height;for(let xe=0;xe<me;xe++)t.texImage2D(i.TEXTURE_2D,xe,le,oe,ne,0,te,fe,null),oe>>=1,ne>>=1}}else if(Ee.length>0){if(B&&se){const oe=rt(Ee[0]);t.texStorage2D(i.TEXTURE_2D,me,le,oe.width,oe.height)}for(let oe=0,ne=Ee.length;oe<ne;oe++)re=Ee[oe],B?de&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,te,fe,re):t.texImage2D(i.TEXTURE_2D,oe,le,te,fe,re);p.generateMipmaps=!1}else if(B){if(se){const oe=rt(j);t.texStorage2D(i.TEXTURE_2D,me,le,oe.width,oe.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te,fe,j)}else t.texImage2D(i.TEXTURE_2D,0,le,te,fe,j);h(p)&&l(C),V.__version=N.version,p.onUpdate&&p.onUpdate(p)}d.__version=p.version}function he(d,p,b){if(p.image.length!==6)return;const C=Ye(d,p),D=p.source;t.bindTexture(i.TEXTURE_CUBE_MAP,d.__webglTexture,i.TEXTURE0+b);const N=n.get(D);if(D.version!==N.__version||C===!0){t.activeTexture(i.TEXTURE0+b);const V=Ke.getPrimaries(Ke.workingColorSpace),z=p.colorSpace===Dn?null:Ke.getPrimaries(p.colorSpace),ee=p.colorSpace===Dn||V===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const Q=p.isCompressedTexture||p.image[0].isCompressedTexture,j=p.image[0]&&p.image[0].isDataTexture,te=[];for(let ne=0;ne<6;ne++)!Q&&!j?te[ne]=E(p.image[ne],!0,r.maxCubemapSize):te[ne]=j?p.image[ne].image:p.image[ne],te[ne]=st(p,te[ne]);const fe=te[0],le=s.convert(p.format,p.colorSpace),re=s.convert(p.type),Ee=y(p.internalFormat,le,re,p.colorSpace),B=p.isVideoTexture!==!0,se=N.__version===void 0||C===!0,de=D.dataReady;let me=M(p,fe);Le(i.TEXTURE_CUBE_MAP,p);let oe;if(Q){B&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ee,fe.width,fe.height);for(let ne=0;ne<6;ne++){oe=te[ne].mipmaps;for(let xe=0;xe<oe.length;xe++){const Ne=oe[xe];p.format!==1023?le!==null?B?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Ne.width,Ne.height,le,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Ee,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Ne.width,Ne.height,le,re,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Ee,Ne.width,Ne.height,0,le,re,Ne.data)}}}else{if(oe=p.mipmaps,B&&se){oe.length>0&&me++;const ne=rt(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ee,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(j){B?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,te[ne].width,te[ne].height,le,re,te[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ee,te[ne].width,te[ne].height,0,le,re,te[ne].data);for(let xe=0;xe<oe.length;xe++){const Ve=oe[xe].image[ne].image;B?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Ve.width,Ve.height,le,re,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Ee,Ve.width,Ve.height,0,le,re,Ve.data)}}else{B?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,le,re,te[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ee,le,re,te[ne]);for(let xe=0;xe<oe.length;xe++){const Ne=oe[xe];B?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,le,re,Ne.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Ee,le,re,Ne.image[ne])}}}h(p)&&l(i.TEXTURE_CUBE_MAP),N.__version=D.version,p.onUpdate&&p.onUpdate(p)}d.__version=p.version}function be(d,p,b,C,D,N){const V=s.convert(b.format,b.colorSpace),z=s.convert(b.type),ee=y(b.internalFormat,V,z,b.colorSpace),Q=n.get(p),j=n.get(b);if(j.__renderTarget=p,!Q.__hasExternalTextures){const te=Math.max(1,p.width>>N),fe=Math.max(1,p.height>>N);D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?t.texImage3D(D,N,ee,te,fe,p.depth,0,V,z,null):t.texImage2D(D,N,ee,te,fe,0,V,z,null)}t.bindFramebuffer(i.FRAMEBUFFER,d),ye(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,C,D,j.__webglTexture,0,Qe(p)):(D===i.TEXTURE_2D||D>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,C,D,j.__webglTexture,N),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(d,p,b){if(i.bindRenderbuffer(i.RENDERBUFFER,d),p.depthBuffer){const C=p.depthTexture,D=C&&C.isDepthTexture?C.type:null,N=S(p.stencilBuffer,D),V=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=Qe(p);ye(p)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z,N,p.width,p.height):b?i.renderbufferStorageMultisample(i.RENDERBUFFER,z,N,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,N,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,d)}else{const C=p.textures;for(let D=0;D<C.length;D++){const N=C[D],V=s.convert(N.format,N.colorSpace),z=s.convert(N.type),ee=y(N.internalFormat,V,z,N.colorSpace),Q=Qe(p);b&&ye(p)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,ee,p.width,p.height):ye(p)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,ee,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,ee,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(d,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,d),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const C=n.get(p.depthTexture);C.__renderTarget=p,(!C.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),$(p.depthTexture,0);const D=C.__webglTexture,N=Qe(p);if(p.depthTexture.format===1026)ye(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,D,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,D,0);else if(p.depthTexture.format===1027)ye(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,D,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function Ze(d){const p=n.get(d),b=d.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==d.depthTexture){const C=d.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),C){const D=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,C.removeEventListener("dispose",D)};C.addEventListener("dispose",D),p.__depthDisposeCallback=D}p.__boundDepthTexture=C}if(d.depthTexture&&!p.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");const C=d.texture.mipmaps;C&&C.length>0?De(p.__webglFramebuffer[0],d):De(p.__webglFramebuffer,d)}else if(b){p.__webglDepthbuffer=[];for(let C=0;C<6;C++)if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[C]),p.__webglDepthbuffer[C]===void 0)p.__webglDepthbuffer[C]=i.createRenderbuffer(),Ae(p.__webglDepthbuffer[C],d,!1);else{const D=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=p.__webglDepthbuffer[C];i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,D,i.RENDERBUFFER,N)}}else{const C=d.texture.mipmaps;if(C&&C.length>0?t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),Ae(p.__webglDepthbuffer,d,!1);else{const D=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,D,i.RENDERBUFFER,N)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(d,p,b){const C=n.get(d);p!==void 0&&be(C.__webglFramebuffer,d,d.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),b!==void 0&&Ze(d)}function F(d){const p=d.texture,b=n.get(d),C=n.get(p);d.addEventListener("dispose",P);const D=d.textures,N=d.isWebGLCubeRenderTarget===!0,V=D.length>1;if(V||(C.__webglTexture===void 0&&(C.__webglTexture=i.createTexture()),C.__version=p.version,o.memory.textures++),N){b.__webglFramebuffer=[];for(let z=0;z<6;z++)if(p.mipmaps&&p.mipmaps.length>0){b.__webglFramebuffer[z]=[];for(let ee=0;ee<p.mipmaps.length;ee++)b.__webglFramebuffer[z][ee]=i.createFramebuffer()}else b.__webglFramebuffer[z]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){b.__webglFramebuffer=[];for(let z=0;z<p.mipmaps.length;z++)b.__webglFramebuffer[z]=i.createFramebuffer()}else b.__webglFramebuffer=i.createFramebuffer();if(V)for(let z=0,ee=D.length;z<ee;z++){const Q=n.get(D[z]);Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture(),o.memory.textures++)}if(d.samples>0&&ye(d)===!1){b.__webglMultisampledFramebuffer=i.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let z=0;z<D.length;z++){const ee=D[z];b.__webglColorRenderbuffer[z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,b.__webglColorRenderbuffer[z]);const Q=s.convert(ee.format,ee.colorSpace),j=s.convert(ee.type),te=y(ee.internalFormat,Q,j,ee.colorSpace,d.isXRRenderTarget===!0),fe=Qe(d);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,te,d.width,d.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,b.__webglColorRenderbuffer[z])}i.bindRenderbuffer(i.RENDERBUFFER,null),d.depthBuffer&&(b.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(b.__webglDepthRenderbuffer,d,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture),Le(i.TEXTURE_CUBE_MAP,p);for(let z=0;z<6;z++)if(p.mipmaps&&p.mipmaps.length>0)for(let ee=0;ee<p.mipmaps.length;ee++)be(b.__webglFramebuffer[z][ee],d,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ee);else be(b.__webglFramebuffer[z],d,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);h(p)&&l(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(V){for(let z=0,ee=D.length;z<ee;z++){const Q=D[z],j=n.get(Q);let te=i.TEXTURE_2D;(d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(te=d.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,j.__webglTexture),Le(te,Q),be(b.__webglFramebuffer,d,Q,i.COLOR_ATTACHMENT0+z,te,0),h(Q)&&l(te)}t.unbindTexture()}else{let z=i.TEXTURE_2D;if((d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(z=d.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(z,C.__webglTexture),Le(z,p),p.mipmaps&&p.mipmaps.length>0)for(let ee=0;ee<p.mipmaps.length;ee++)be(b.__webglFramebuffer[ee],d,p,i.COLOR_ATTACHMENT0,z,ee);else be(b.__webglFramebuffer,d,p,i.COLOR_ATTACHMENT0,z,0);h(p)&&l(z),t.unbindTexture()}d.depthBuffer&&Ze(d)}function Ue(d){const p=d.textures;for(let b=0,C=p.length;b<C;b++){const D=p[b];if(h(D)){const N=_(d),V=n.get(D).__webglTexture;t.bindTexture(N,V),l(N),t.unbindTexture()}}}const we=[],He=[];function Me(d){if(d.samples>0){if(ye(d)===!1){const p=d.textures,b=d.width,C=d.height;let D=i.COLOR_BUFFER_BIT;const N=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=n.get(d),z=p.length>1;if(z)for(let Q=0;Q<p.length;Q++)t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,V.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,V.__webglMultisampledFramebuffer);const ee=d.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,V.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,V.__webglFramebuffer);for(let Q=0;Q<p.length;Q++){if(d.resolveDepthBuffer&&(d.depthBuffer&&(D|=i.DEPTH_BUFFER_BIT),d.stencilBuffer&&d.resolveStencilBuffer&&(D|=i.STENCIL_BUFFER_BIT)),z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);const j=n.get(p[Q]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,b,C,0,0,b,C,D,i.NEAREST),c===!0&&(we.length=0,He.length=0,we.push(i.COLOR_ATTACHMENT0+Q),d.depthBuffer&&d.resolveDepthBuffer===!1&&(we.push(N),He.push(N),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),z)for(let Q=0;Q<p.length;Q++){t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);const j=n.get(p[Q]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,V.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,j,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,V.__webglMultisampledFramebuffer)}else if(d.depthBuffer&&d.resolveDepthBuffer===!1&&c){const p=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function Qe(d){return Math.min(r.maxSamples,d.samples)}function ye(d){const p=n.get(d);return d.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function Ie(d){const p=o.render.frame;f.get(d)!==p&&(f.set(d,p),d.update())}function st(d,p){const b=d.colorSpace,C=d.format,D=d.type;return d.isCompressedTexture===!0||d.isVideoTexture===!0||b!==Li&&b!==Dn&&(Ke.getTransfer(b)===nt?(C!==1023||D!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",b)),p}function rt(d){return typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement?(u.width=d.naturalWidth||d.width,u.height=d.naturalHeight||d.height):typeof VideoFrame<"u"&&d instanceof VideoFrame?(u.width=d.displayWidth,u.height=d.displayHeight):(u.width=d.width,u.height=d.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=Ge,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ye}function ug(i,e){function t(n,r=Dn){let s;const o=Ke.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Dc extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hg=`
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

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Dc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new En({vertexShader:dg,fragmentShader:hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pg extends ki{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,u=null,f=null,m=null,g=null,v=null,x=null;const E=new fg,h={},l=t.getContextAttributes();let _=null,y=null;const S=[],M=[],L=new et;let P=null;const I=new $t;I.viewport=new ut;const A=new $t;A.viewport=new ut;const T=[I,A],w=new Nd;let O=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=S[J];return pe===void 0&&(pe=new qs,S[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=S[J];return pe===void 0&&(pe=new qs,S[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=S[J];return pe===void 0&&(pe=new qs,S[J]=pe),pe.getHandSpace()};function G(J){const pe=M.indexOf(J.inputSource);if(pe===-1)return;const he=S[pe];he!==void 0&&(he.update(J.inputSource,J.frame,u||o),he.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",k);for(let J=0;J<S.length;J++){const pe=M[J];pe!==null&&(M[J]=null,S[J].disconnect(pe))}O=null,U=null,E.reset();for(const J in h)delete h[J];e.setRenderTarget(_),v=null,g=null,m=null,r=null,y=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",$),r.addEventListener("inputsourceschange",k),l.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&(m=new XRWebGLBinding(r,t)),m!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,be=null,Ae=null;l.depth&&(Ae=l.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=l.stencil?1027:1026,be=l.stencil?1020:1014);const De={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};g=m.createProjectionLayer(De),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),y=new ti(g.textureWidth,g.textureHeight,{format:1023,type:1009,depthTexture:new Ac(g.textureWidth,g.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:l.stencil,colorSpace:e.outputColorSpace,samples:l.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const he={antialias:l.antialias,alpha:!0,depth:l.depth,stencil:l.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),y=new ti(v.framebufferWidth,v.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:l.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function k(J){for(let pe=0;pe<J.removed.length;pe++){const he=J.removed[pe],be=M.indexOf(he);be>=0&&(M[be]=null,S[be].disconnect(he))}for(let pe=0;pe<J.added.length;pe++){const he=J.added[pe];let be=M.indexOf(he);if(be===-1){for(let De=0;De<S.length;De++)if(De>=M.length){M.push(he),be=De;break}else if(M[De]===null){M[De]=he,be=De;break}if(be===-1)break}const Ae=S[be];Ae&&Ae.connect(he)}}const q=new K,H=new K;function ie(J,pe,he){q.setFromMatrixPosition(pe.matrixWorld),H.setFromMatrixPosition(he.matrixWorld);const be=q.distanceTo(H),Ae=pe.projectionMatrix.elements,De=he.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),Ge=Ae[14]/(Ae[10]+1),F=(Ae[9]+1)/Ae[5],Ue=(Ae[9]-1)/Ae[5],we=(Ae[8]-1)/Ae[0],He=(De[8]+1)/De[0],Me=Ze*we,Qe=Ze*He,ye=be/(-we+He),Ie=ye*-we;if(pe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ie),J.translateZ(ye),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const st=Ze+ye,rt=Ge+ye,d=Me-Ie,p=Qe+(be-Ie),b=F*Ge/rt*st,C=Ue*Ge/rt*st;J.projectionMatrix.makePerspective(d,p,b,C,st,rt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ce(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let pe=J.near,he=J.far;E.texture!==null&&(E.depthNear>0&&(pe=E.depthNear),E.depthFar>0&&(he=E.depthFar)),w.near=A.near=I.near=pe,w.far=A.far=I.far=he,(O!==w.near||U!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),O=w.near,U=w.far),w.layers.mask=J.layers.mask|6,I.layers.mask=w.layers.mask&3,A.layers.mask=w.layers.mask&5;const be=J.parent,Ae=w.cameras;ce(w,be);for(let De=0;De<Ae.length;De++)ce(Ae[De],be);Ae.length===2?ie(w,I,A):w.projectionMatrix.copy(I.projectionMatrix),_e(J,w,be)};function _e(J,pe,he){he===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(he.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Bo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(g===null&&v===null))return c},this.setFoveation=function(J){c=J,g!==null&&(g.fixedFoveation=J),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(w)},this.getCameraTexture=function(J){return h[J]};let Le=null;function Ye(J,pe){if(f=pe.getViewerPose(u||o),x=pe,f!==null){const he=f.views;v!==null&&(e.setRenderTargetFramebuffer(y,v.framebuffer),e.setRenderTarget(y));let be=!1;he.length!==w.cameras.length&&(w.cameras.length=0,be=!0);for(let Ge=0;Ge<he.length;Ge++){const F=he[Ge];let Ue=null;if(v!==null)Ue=v.getViewport(F);else{const He=m.getViewSubImage(g,F);Ue=He.viewport,Ge===0&&(e.setRenderTargetTextures(y,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(y))}let we=T[Ge];we===void 0&&(we=new $t,we.layers.enable(Ge),we.viewport=new ut,T[Ge]=we),we.matrix.fromArray(F.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(F.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Ge===0&&(w.matrix.copy(we.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),be===!0&&w.cameras.push(we)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){const Ge=m.getDepthInformation(he[0]);Ge&&Ge.isValid&&Ge.texture&&E.init(Ge,r.renderState)}if(Ae&&Ae.includes("camera-access")&&(e.state.unbindTexture(),m))for(let Ge=0;Ge<he.length;Ge++){const F=he[Ge].camera;if(F){let Ue=h[F];Ue||(Ue=new Dc,h[F]=Ue);const we=m.getCameraImage(F);Ue.sourceTexture=we}}}for(let he=0;he<S.length;he++){const be=M[he],Ae=S[he];be!==null&&Ae!==void 0&&Ae.update(be,pe,u||o)}Le&&Le(J,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),x=null}const Xe=new wc;Xe.setAnimationLoop(Ye),this.setAnimationLoop=function(J){Le=J},this.dispose=function(){}}}const Yn=new Sn,mg=new ht;function gg(i,e){function t(h,l){h.matrixAutoUpdate===!0&&h.updateMatrix(),l.value.copy(h.matrix)}function n(h,l){l.color.getRGB(h.fogColor.value,Ec(i)),l.isFog?(h.fogNear.value=l.near,h.fogFar.value=l.far):l.isFogExp2&&(h.fogDensity.value=l.density)}function r(h,l,_,y,S){l.isMeshBasicMaterial||l.isMeshLambertMaterial?s(h,l):l.isMeshToonMaterial?(s(h,l),m(h,l)):l.isMeshPhongMaterial?(s(h,l),f(h,l)):l.isMeshStandardMaterial?(s(h,l),g(h,l),l.isMeshPhysicalMaterial&&v(h,l,S)):l.isMeshMatcapMaterial?(s(h,l),x(h,l)):l.isMeshDepthMaterial?s(h,l):l.isMeshDistanceMaterial?(s(h,l),E(h,l)):l.isMeshNormalMaterial?s(h,l):l.isLineBasicMaterial?(o(h,l),l.isLineDashedMaterial&&a(h,l)):l.isPointsMaterial?c(h,l,_,y):l.isSpriteMaterial?u(h,l):l.isShadowMaterial?(h.color.value.copy(l.color),h.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function s(h,l){h.opacity.value=l.opacity,l.color&&h.diffuse.value.copy(l.color),l.emissive&&h.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(h.map.value=l.map,t(l.map,h.mapTransform)),l.alphaMap&&(h.alphaMap.value=l.alphaMap,t(l.alphaMap,h.alphaMapTransform)),l.bumpMap&&(h.bumpMap.value=l.bumpMap,t(l.bumpMap,h.bumpMapTransform),h.bumpScale.value=l.bumpScale,l.side===1&&(h.bumpScale.value*=-1)),l.normalMap&&(h.normalMap.value=l.normalMap,t(l.normalMap,h.normalMapTransform),h.normalScale.value.copy(l.normalScale),l.side===1&&h.normalScale.value.negate()),l.displacementMap&&(h.displacementMap.value=l.displacementMap,t(l.displacementMap,h.displacementMapTransform),h.displacementScale.value=l.displacementScale,h.displacementBias.value=l.displacementBias),l.emissiveMap&&(h.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,h.emissiveMapTransform)),l.specularMap&&(h.specularMap.value=l.specularMap,t(l.specularMap,h.specularMapTransform)),l.alphaTest>0&&(h.alphaTest.value=l.alphaTest);const _=e.get(l),y=_.envMap,S=_.envMapRotation;y&&(h.envMap.value=y,Yn.copy(S),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(Yn)),h.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=l.reflectivity,h.ior.value=l.ior,h.refractionRatio.value=l.refractionRatio),l.lightMap&&(h.lightMap.value=l.lightMap,h.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,h.lightMapTransform)),l.aoMap&&(h.aoMap.value=l.aoMap,h.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,h.aoMapTransform))}function o(h,l){h.diffuse.value.copy(l.color),h.opacity.value=l.opacity,l.map&&(h.map.value=l.map,t(l.map,h.mapTransform))}function a(h,l){h.dashSize.value=l.dashSize,h.totalSize.value=l.dashSize+l.gapSize,h.scale.value=l.scale}function c(h,l,_,y){h.diffuse.value.copy(l.color),h.opacity.value=l.opacity,h.size.value=l.size*_,h.scale.value=y*.5,l.map&&(h.map.value=l.map,t(l.map,h.uvTransform)),l.alphaMap&&(h.alphaMap.value=l.alphaMap,t(l.alphaMap,h.alphaMapTransform)),l.alphaTest>0&&(h.alphaTest.value=l.alphaTest)}function u(h,l){h.diffuse.value.copy(l.color),h.opacity.value=l.opacity,h.rotation.value=l.rotation,l.map&&(h.map.value=l.map,t(l.map,h.mapTransform)),l.alphaMap&&(h.alphaMap.value=l.alphaMap,t(l.alphaMap,h.alphaMapTransform)),l.alphaTest>0&&(h.alphaTest.value=l.alphaTest)}function f(h,l){h.specular.value.copy(l.specular),h.shininess.value=Math.max(l.shininess,1e-4)}function m(h,l){l.gradientMap&&(h.gradientMap.value=l.gradientMap)}function g(h,l){h.metalness.value=l.metalness,l.metalnessMap&&(h.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,h.metalnessMapTransform)),h.roughness.value=l.roughness,l.roughnessMap&&(h.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,h.roughnessMapTransform)),l.envMap&&(h.envMapIntensity.value=l.envMapIntensity)}function v(h,l,_){h.ior.value=l.ior,l.sheen>0&&(h.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),h.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(h.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,h.sheenColorMapTransform)),l.sheenRoughnessMap&&(h.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,h.sheenRoughnessMapTransform))),l.clearcoat>0&&(h.clearcoat.value=l.clearcoat,h.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(h.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,h.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(h.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===1&&h.clearcoatNormalScale.value.negate())),l.dispersion>0&&(h.dispersion.value=l.dispersion),l.iridescence>0&&(h.iridescence.value=l.iridescence,h.iridescenceIOR.value=l.iridescenceIOR,h.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(h.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,h.iridescenceMapTransform)),l.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),l.transmission>0&&(h.transmission.value=l.transmission,h.transmissionSamplerMap.value=_.texture,h.transmissionSamplerSize.value.set(_.width,_.height),l.transmissionMap&&(h.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,h.transmissionMapTransform)),h.thickness.value=l.thickness,l.thicknessMap&&(h.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=l.attenuationDistance,h.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(h.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(h.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=l.specularIntensity,h.specularColor.value.copy(l.specularColor),l.specularColorMap&&(h.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,h.specularColorMapTransform)),l.specularIntensityMap&&(h.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,h.specularIntensityMapTransform))}function x(h,l){l.matcap&&(h.matcap.value=l.matcap)}function E(h,l){const _=e.get(l).light;h.referencePosition.value.setFromMatrixPosition(_.matrixWorld),h.nearDistance.value=_.shadow.camera.near,h.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vg(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const S=y.program;n.uniformBlockBinding(_,S)}function u(_,y){let S=r[_.id];S===void 0&&(x(_),S=f(_),r[_.id]=S,_.addEventListener("dispose",h));const M=y.program;n.updateUBOMapping(_,M);const L=e.render.frame;s[_.id]!==L&&(g(_),s[_.id]=L)}function f(_){const y=m();_.__bindingPointIndex=y;const S=i.createBuffer(),M=_.__size,L=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,M,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function m(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(_){const y=r[_.id],S=_.uniforms,M=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let L=0,P=S.length;L<P;L++){const I=Array.isArray(S[L])?S[L]:[S[L]];for(let A=0,T=I.length;A<T;A++){const w=I[A];if(v(w,L,A,M)===!0){const O=w.__offset,U=Array.isArray(w.value)?w.value:[w.value];let G=0;for(let $=0;$<U.length;$++){const k=U[$],q=E(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,O+G,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,G),G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(_,y,S,M){const L=_.value,P=y+"_"+S;if(M[P]===void 0)return typeof L=="number"||typeof L=="boolean"?M[P]=L:M[P]=L.clone(),!0;{const I=M[P];if(typeof L=="number"||typeof L=="boolean"){if(I!==L)return M[P]=L,!0}else if(I.equals(L)===!1)return I.copy(L),!0}return!1}function x(_){const y=_.uniforms;let S=0;const M=16;for(let P=0,I=y.length;P<I;P++){const A=Array.isArray(y[P])?y[P]:[y[P]];for(let T=0,w=A.length;T<w;T++){const O=A[T],U=Array.isArray(O.value)?O.value:[O.value];for(let G=0,$=U.length;G<$;G++){const k=U[G],q=E(k),H=S%M,ie=H%q.boundary,ce=H+ie;S+=ie,ce!==0&&M-ce<q.storage&&(S+=M-ce),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=q.storage}}}const L=S%M;return L>0&&(S+=M-L),_.__size=S,_.__cache={},this}function E(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function h(_){const y=_.target;y.removeEventListener("dispose",h);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function l(){for(const _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:c,update:u,dispose:l}}class _g{constructor(e={}){const{canvas:t=Ju(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;const x=new Uint32Array(4),E=new Int32Array(4);let h=null,l=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let M=!1;this._outputColorSpace=Xt;let L=0,P=0,I=null,A=-1,T=null;const w=new ut,O=new ut;let U=null;const G=new We(0);let $=0,k=t.width,q=t.height,H=1,ie=null,ce=null;const _e=new ut(0,0,k,q),Le=new ut(0,0,k,q);let Ye=!1;const Xe=new Mc;let J=!1,pe=!1;const he=new ht,be=new K,Ae=new ut,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Ge(){return I===null?H:1}let F=n;function Ue(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ko}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",oe,!1),F===null){const W="webgl2";if(F=Ue(W,R),F===null)throw Ue(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let we,He,Me,Qe,ye,Ie,st,rt,d,p,b,C,D,N,V,z,ee,Q,j,te,fe,le,re,Ee;function B(){we=new Cp(F),we.init(),le=new ug(F,we),He=new Sp(F,we,e,le),Me=new lg(F,we),He.reversedDepthBuffer&&g&&Me.buffers.depth.setReversed(!0),Qe=new Pp(F),ye=new jm,Ie=new cg(F,we,Me,ye,He,le,Qe),st=new Tp(S),rt=new wp(S),d=new Fd(F),re=new yp(F,d),p=new Rp(F,d,Qe,re),b=new Ip(F,p,d,Qe),j=new Dp(F,He,Ie),z=new Ep(ye),C=new Ym(S,st,rt,we,He,re,z),D=new gg(S,ye),N=new Zm,V=new ig(we),Q=new _p(S,st,rt,Me,b,v,c),ee=new og(S,b,He),Ee=new vg(F,Qe,He,Me),te=new xp(F,we,Qe),fe=new Lp(F,we,Qe),Qe.programs=C.programs,S.capabilities=He,S.extensions=we,S.properties=ye,S.renderLists=N,S.shadowMap=ee,S.state=Me,S.info=Qe}B();const se=new pg(S,F);this.xr=se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=we.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=we.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(k,q,!1))},this.getSize=function(R){return R.set(k,q)},this.setSize=function(R,W,Y=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,q=W,t.width=Math.floor(R*H),t.height=Math.floor(W*H),Y===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(k*H,q*H).floor()},this.setDrawingBufferSize=function(R,W,Y){k=R,q=W,H=Y,t.width=Math.floor(R*Y),t.height=Math.floor(W*Y),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(_e)},this.setViewport=function(R,W,Y,Z){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,W,Y,Z),Me.viewport(w.copy(_e).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(Le)},this.setScissor=function(R,W,Y,Z){R.isVector4?Le.set(R.x,R.y,R.z,R.w):Le.set(R,W,Y,Z),Me.scissor(O.copy(Le).multiplyScalar(H).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(R){Me.setScissorTest(Ye=R)},this.setOpaqueSort=function(R){ie=R},this.setTransparentSort=function(R){ce=R},this.getClearColor=function(R){return R.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,Y=!0){let Z=0;if(R){let X=!1;if(I!==null){const ue=I.texture.format;X=ue===1033||ue===1031||ue===1029}if(X){const ue=I.texture.type,ve=ue===1009||ue===1014||ue===1012||ue===1020||ue===1017||ue===1018,Te=Q.getClearColor(),Se=Q.getClearAlpha(),Oe=Te.r,Fe=Te.g,Ce=Te.b;ve?(x[0]=Oe,x[1]=Fe,x[2]=Ce,x[3]=Se,F.clearBufferuiv(F.COLOR,0,x)):(E[0]=Oe,E[1]=Fe,E[2]=Ce,E[3]=Se,F.clearBufferiv(F.COLOR,0,E))}else Z|=F.COLOR_BUFFER_BIT}W&&(Z|=F.DEPTH_BUFFER_BIT),Y&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Q.dispose(),N.dispose(),V.dispose(),ye.dispose(),st.dispose(),rt.dispose(),b.dispose(),re.dispose(),Ee.dispose(),C.dispose(),se.dispose(),se.removeEventListener("sessionstart",Rt),se.removeEventListener("sessionend",vr),kt.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=Qe.autoReset,W=ee.enabled,Y=ee.autoUpdate,Z=ee.needsUpdate,X=ee.type;B(),Qe.autoReset=R,ee.enabled=W,ee.autoUpdate=Y,ee.needsUpdate=Z,ee.type=X}function oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ne(R){const W=R.target;W.removeEventListener("dispose",ne),xe(W)}function xe(R){Ne(R),ye.remove(R)}function Ne(R){const W=ye.get(R).programs;W!==void 0&&(W.forEach(function(Y){C.releaseProgram(Y)}),R.isShaderMaterial&&C.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Y,Z,X,ue){W===null&&(W=De);const ve=X.isMesh&&X.matrixWorld.determinant()<0,Te=Xu(R,W,Y,Z,X);Me.setMaterial(Z,ve);let Se=Y.index,Oe=1;if(Z.wireframe===!0){if(Se=p.getWireframeAttribute(Y),Se===void 0)return;Oe=2}const Fe=Y.drawRange,Ce=Y.attributes.position;let $e=Fe.start*Oe,tt=(Fe.start+Fe.count)*Oe;ue!==null&&($e=Math.max($e,ue.start*Oe),tt=Math.min(tt,(ue.start+ue.count)*Oe)),Se!==null?($e=Math.max($e,0),tt=Math.min(tt,Se.count)):Ce!=null&&($e=Math.max($e,0),tt=Math.min(tt,Ce.count));const ct=tt-$e;if(ct<0||ct===1/0)return;re.setup(X,Z,Te,Y,Se);let ot,it=te;if(Se!==null&&(ot=d.get(Se),it=fe,it.setIndex(ot)),X.isMesh)Z.wireframe===!0?(Me.setLineWidth(Z.wireframeLinewidth*Ge()),it.setMode(F.LINES)):it.setMode(F.TRIANGLES);else if(X.isLine){let Pe=Z.linewidth;Pe===void 0&&(Pe=1),Me.setLineWidth(Pe*Ge()),X.isLineSegments?it.setMode(F.LINES):X.isLineLoop?it.setMode(F.LINE_LOOP):it.setMode(F.LINE_STRIP)}else X.isPoints?it.setMode(F.POINTS):X.isSprite&&it.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ci("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))it.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Pe=X._multiDrawStarts,at=X._multiDrawCounts,je=X._multiDrawCount,Pt=Se?d.get(Se).bytesPerElement:1,ai=ye.get(Z).currentProgram.getUniforms();for(let Dt=0;Dt<je;Dt++)ai.setValue(F,"_gl_DrawID",Dt),it.render(Pe[Dt]/Pt,at[Dt])}else if(X.isInstancedMesh)it.renderInstances($e,ct,X.count);else if(Y.isInstancedBufferGeometry){const Pe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,at=Math.min(Y.instanceCount,Pe);it.renderInstances($e,ct,at)}else it.render($e,ct)};function Ve(R,W,Y){R.transparent===!0&&R.side===2&&R.forceSinglePass===!1?(R.side=1,R.needsUpdate=!0,oi(R,W,Y),R.side=0,R.needsUpdate=!0,oi(R,W,Y),R.side=2):oi(R,W,Y)}this.compile=function(R,W,Y=null){Y===null&&(Y=R),l=V.get(Y),l.init(W),y.push(l),Y.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(l.pushLight(X),X.castShadow&&l.pushShadow(X))}),R!==Y&&R.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(l.pushLight(X),X.castShadow&&l.pushShadow(X))}),l.setupLights();const Z=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ue=X.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Te=ue[ve];Ve(Te,Y,X),Z.add(Te)}else Ve(ue,Y,X),Z.add(ue)}),l=y.pop(),Z},this.compileAsync=function(R,W,Y=null){const Z=this.compile(R,W,Y);return new Promise(X=>{function ue(){if(Z.forEach(function(ve){ye.get(ve).currentProgram.isReady()&&Z.delete(ve)}),Z.size===0){X(R);return}setTimeout(ue,10)}we.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Be=null;function zt(R){Be&&Be(R)}function Rt(){kt.stop()}function vr(){kt.start()}const kt=new wc;kt.setAnimationLoop(zt),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(R){Be=R,se.setAnimationLoop(R),R===null?kt.stop():kt.start()},se.addEventListener("sessionstart",Rt),se.addEventListener("sessionend",vr),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(W),W=se.getCamera()),R.isScene===!0&&R.onBeforeRender(S,R,W,I),l=V.get(R,y.length),l.init(W),y.push(l),he.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Xe.setFromProjectionMatrix(he,2e3,W.reversedDepth),pe=this.localClippingEnabled,J=z.init(this.clippingPlanes,pe),h=N.get(R,_.length),h.init(),_.push(h),se.enabled===!0&&se.isPresenting===!0){const ue=S.xr.getDepthSensingMesh();ue!==null&&$i(ue,W,-1/0,S.sortObjects)}$i(R,W,0,S.sortObjects),h.finish(),S.sortObjects===!0&&h.sort(ie,ce),Ze=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ze&&Q.addToRenderList(h,R),this.info.render.frame++,J===!0&&z.beginShadows();const Y=l.state.shadowsArray;ee.render(Y,R,W),J===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=h.opaque,X=h.transmissive;if(l.setupLights(),W.isArrayCamera){const ue=W.cameras;if(X.length>0)for(let ve=0,Te=ue.length;ve<Te;ve++){const Se=ue[ve];mt(Z,X,R,Se)}Ze&&Q.render(R);for(let ve=0,Te=ue.length;ve<Te;ve++){const Se=ue[ve];Je(h,R,Se,Se.viewport)}}else X.length>0&&mt(Z,X,R,W),Ze&&Q.render(R),Je(h,R,W);I!==null&&P===0&&(Ie.updateMultisampleRenderTarget(I),Ie.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(S,R,W),re.resetDefaultState(),A=-1,T=null,y.pop(),y.length>0?(l=y[y.length-1],J===!0&&z.setGlobalState(S.clippingPlanes,l.state.camera)):l=null,_.pop(),_.length>0?h=_[_.length-1]:h=null};function $i(R,W,Y,Z){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)l.pushLight(R),R.castShadow&&l.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xe.intersectsSprite(R)){Z&&Ae.setFromMatrixPosition(R.matrixWorld).applyMatrix4(he);const ve=b.update(R),Te=R.material;Te.visible&&h.push(R,ve,Te,Y,Ae.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xe.intersectsObject(R))){const ve=b.update(R),Te=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ae.copy(R.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ae.copy(ve.boundingSphere.center)),Ae.applyMatrix4(R.matrixWorld).applyMatrix4(he)),Array.isArray(Te)){const Se=ve.groups;for(let Oe=0,Fe=Se.length;Oe<Fe;Oe++){const Ce=Se[Oe],$e=Te[Ce.materialIndex];$e&&$e.visible&&h.push(R,ve,$e,Y,Ae.z,Ce)}}else Te.visible&&h.push(R,ve,Te,Y,Ae.z,null)}}const ue=R.children;for(let ve=0,Te=ue.length;ve<Te;ve++)$i(ue[ve],W,Y,Z)}function Je(R,W,Y,Z){const X=R.opaque,ue=R.transmissive,ve=R.transparent;l.setupLightsView(Y),J===!0&&z.setGlobalState(S.clippingPlanes,Y),Z&&Me.viewport(w.copy(Z)),X.length>0&&Lt(X,W,Y),ue.length>0&&Lt(ue,W,Y),ve.length>0&&Lt(ve,W,Y),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function mt(R,W,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[Z.id]===void 0&&(l.state.transmissionRenderTarget[Z.id]=new ti(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ue=l.state.transmissionRenderTarget[Z.id],ve=Z.viewport||w;ue.setSize(ve.z*S.transmissionResolutionScale,ve.w*S.transmissionResolutionScale);const Te=S.getRenderTarget(),Se=S.getActiveCubeFace(),Oe=S.getActiveMipmapLevel();S.setRenderTarget(ue),S.getClearColor(G),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),Ze&&Q.render(Y);const Fe=S.toneMapping;S.toneMapping=0;const Ce=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),l.setupLightsView(Z),J===!0&&z.setGlobalState(S.clippingPlanes,Z),Lt(R,Y,Z),Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue),we.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let tt=0,ct=W.length;tt<ct;tt++){const ot=W[tt],it=ot.object,Pe=ot.geometry,at=ot.material,je=ot.group;if(at.side===2&&it.layers.test(Z.layers)){const Pt=at.side;at.side=1,at.needsUpdate=!0,Hn(it,Y,Z,Pe,at,je),at.side=Pt,at.needsUpdate=!0,$e=!0}}$e===!0&&(Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue))}S.setRenderTarget(Te,Se,Oe),S.setClearColor(G,$),Ce!==void 0&&(Z.viewport=Ce),S.toneMapping=Fe}function Lt(R,W,Y){const Z=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ue=R.length;X<ue;X++){const ve=R[X],Te=ve.object,Se=ve.geometry,Oe=ve.group;let Fe=ve.material;Fe.allowOverride===!0&&Z!==null&&(Fe=Z),Te.layers.test(Y.layers)&&Hn(Te,W,Y,Se,Fe,Oe)}}function Hn(R,W,Y,Z,X,ue){R.onBeforeRender(S,W,Y,Z,X,ue),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(S,W,Y,Z,R,ue),X.transparent===!0&&X.side===2&&X.forceSinglePass===!1?(X.side=1,X.needsUpdate=!0,S.renderBufferDirect(Y,W,Z,X,R,ue),X.side=0,X.needsUpdate=!0,S.renderBufferDirect(Y,W,Z,X,R,ue),X.side=2):S.renderBufferDirect(Y,W,Z,X,R,ue),R.onAfterRender(S,W,Y,Z,X,ue)}function oi(R,W,Y){W.isScene!==!0&&(W=De);const Z=ye.get(R),X=l.state.lights,ue=l.state.shadowsArray,ve=X.state.version,Te=C.getParameters(R,X.state,ue,W,Y),Se=C.getProgramCacheKey(Te);let Oe=Z.programs;Z.environment=R.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(R.isMeshStandardMaterial?rt:st).get(R.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Oe===void 0&&(R.addEventListener("dispose",ne),Oe=new Map,Z.programs=Oe);let Fe=Oe.get(Se);if(Fe!==void 0){if(Z.currentProgram===Fe&&Z.lightsStateVersion===ve)return yr(R,Te),Fe}else Te.uniforms=C.getUniforms(R),R.onBeforeCompile(Te,S),Fe=C.acquireProgram(Te,Se),Oe.set(Se,Fe),Z.uniforms=Te.uniforms;const Ce=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ce.clippingPlanes=z.uniform),yr(R,Te),Z.needsLights=qu(R),Z.lightsStateVersion=ve,Z.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.directionalShadowMap.value=X.state.directionalShadowMap,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotShadowMap.value=X.state.spotShadowMap,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMap.value=X.state.pointShadowMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=Fe,Z.uniformsList=null,Fe}function _r(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=jr.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function yr(R,W){const Y=ye.get(R);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.batchingColor=W.batchingColor,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.instancingMorph=W.instancingMorph,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function Xu(R,W,Y,Z,X){W.isScene!==!0&&(W=De),Ie.resetTextureUnits();const ue=W.fog,ve=Z.isMeshStandardMaterial?W.environment:null,Te=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Li,Se=(Z.isMeshStandardMaterial?rt:st).get(Z.envMap||ve),Oe=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ce=!!Y.morphAttributes.position,$e=!!Y.morphAttributes.normal,tt=!!Y.morphAttributes.color;let ct=0;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ct=S.toneMapping);const ot=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,it=ot!==void 0?ot.length:0,Pe=ye.get(Z),at=l.state.lights;if(J===!0&&(pe===!0||R!==T)){const yt=R===T&&Z.id===A;z.setState(Z,R,yt)}let je=!1;Z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==at.state.version||Pe.outputColorSpace!==Te||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Se||Z.fog===!0&&Pe.fog!==ue||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==z.numPlanes||Pe.numIntersection!==z.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==Fe||Pe.morphTargets!==Ce||Pe.morphNormals!==$e||Pe.morphColors!==tt||Pe.toneMapping!==ct||Pe.morphTargetsCount!==it)&&(je=!0):(je=!0,Pe.__version=Z.version);let Pt=Pe.currentProgram;je===!0&&(Pt=oi(Z,W,X));let ai=!1,Dt=!1,qi=!1;const lt=Pt.getUniforms(),Ht=Pe.uniforms;if(Me.useProgram(Pt.program)&&(ai=!0,Dt=!0,qi=!0),Z.id!==A&&(A=Z.id,Dt=!0),ai||T!==R){Me.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),lt.setValue(F,"projectionMatrix",R.projectionMatrix),lt.setValue(F,"viewMatrix",R.matrixWorldInverse);const bt=lt.map.cameraPosition;bt!==void 0&&bt.setValue(F,be.setFromMatrixPosition(R.matrixWorld)),He.logarithmicDepthBuffer&&lt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&lt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,Dt=!0,qi=!0)}if(X.isSkinnedMesh){lt.setOptional(F,X,"bindMatrix"),lt.setOptional(F,X,"bindMatrixInverse");const yt=X.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),lt.setValue(F,"boneTexture",yt.boneTexture,Ie))}X.isBatchedMesh&&(lt.setOptional(F,X,"batchingTexture"),lt.setValue(F,"batchingTexture",X._matricesTexture,Ie),lt.setOptional(F,X,"batchingIdTexture"),lt.setValue(F,"batchingIdTexture",X._indirectTexture,Ie),lt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&lt.setValue(F,"batchingColorTexture",X._colorsTexture,Ie));const Gt=Y.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&j.update(X,Y,Pt),(Dt||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,lt.setValue(F,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ht.envMap.value=Se,Ht.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(Ht.envMapIntensity.value=W.environmentIntensity),Dt&&(lt.setValue(F,"toneMappingExposure",S.toneMappingExposure),Pe.needsLights&&$u(Ht,qi),ue&&Z.fog===!0&&D.refreshFogUniforms(Ht,ue),D.refreshMaterialUniforms(Ht,Z,H,q,l.state.transmissionRenderTarget[R.id]),jr.upload(F,_r(Pe),Ht,Ie)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(jr.upload(F,_r(Pe),Ht,Ie),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&lt.setValue(F,"center",X.center),lt.setValue(F,"modelViewMatrix",X.modelViewMatrix),lt.setValue(F,"normalMatrix",X.normalMatrix),lt.setValue(F,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const yt=Z.uniformsGroups;for(let bt=0,bs=yt.length;bt<bs;bt++){const Gn=yt[bt];Ee.update(Gn,Pt),Ee.bind(Gn,Pt)}}return Pt}function $u(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function qu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,W,Y){const Z=ye.get(R);Z.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ye.get(R.texture).__webglTexture=W,ye.get(R.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const Y=ye.get(R);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0};const Yu=F.createFramebuffer();this.setRenderTarget=function(R,W=0,Y=0){I=R,L=W,P=Y;let Z=!0,X=null,ue=!1,ve=!1;if(R){const Se=ye.get(R);if(Se.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(F.FRAMEBUFFER,null),Z=!1;else if(Se.__webglFramebuffer===void 0)Ie.setupRenderTarget(R);else if(Se.__hasExternalTextures)Ie.rebindTextures(R,ye.get(R.texture).__webglTexture,ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ce=R.depthTexture;if(Se.__boundDepthTexture!==Ce){if(Ce!==null&&ye.has(Ce)&&(R.width!==Ce.image.width||R.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(R)}}const Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const Fe=ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Fe[W])?X=Fe[W][Y]:X=Fe[W],ue=!0):R.samples>0&&Ie.useMultisampledRTT(R)===!1?X=ye.get(R).__webglMultisampledFramebuffer:Array.isArray(Fe)?X=Fe[Y]:X=Fe,w.copy(R.viewport),O.copy(R.scissor),U=R.scissorTest}else w.copy(_e).multiplyScalar(H).floor(),O.copy(Le).multiplyScalar(H).floor(),U=Ye;if(Y!==0&&(X=Yu),Me.bindFramebuffer(F.FRAMEBUFFER,X)&&Z&&Me.drawBuffers(R,X),Me.viewport(w),Me.scissor(O),Me.setScissorTest(U),ue){const Se=ye.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Se.__webglTexture,Y)}else if(ve){const Se=W;for(let Oe=0;Oe<R.textures.length;Oe++){const Fe=ye.get(R.textures[Oe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Oe,Fe.__webglTexture,Y,Se)}}else if(R!==null&&Y!==0){const Se=ye.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Se.__webglTexture,Y)}A=-1},this.readRenderTargetPixels=function(R,W,Y,Z,X,ue,ve,Te=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Me.bindFramebuffer(F.FRAMEBUFFER,Se);try{const Oe=R.textures[Te],Fe=Oe.format,Ce=Oe.type;if(!He.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Z&&Y>=0&&Y<=R.height-X&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Te),F.readPixels(W,Y,Z,X,le.convert(Fe),le.convert(Ce),ue))}finally{const Oe=I!==null?ye.get(I).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(R,W,Y,Z,X,ue,ve,Te=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se)if(W>=0&&W<=R.width-Z&&Y>=0&&Y<=R.height-X){Me.bindFramebuffer(F.FRAMEBUFFER,Se);const Oe=R.textures[Te],Fe=Oe.format,Ce=Oe.type;if(!He.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,$e),F.bufferData(F.PIXEL_PACK_BUFFER,ue.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Te),F.readPixels(W,Y,Z,X,le.convert(Fe),le.convert(Ce),0);const tt=I!==null?ye.get(I).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,tt);const ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Qu(F,ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,$e),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ue),F.deleteBuffer($e),F.deleteSync(ct),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,Y=0){const Z=Math.pow(2,-Y),X=Math.floor(R.image.width*Z),ue=Math.floor(R.image.height*Z),ve=W!==null?W.x:0,Te=W!==null?W.y:0;Ie.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,ve,Te,X,ue),Me.unbindTexture()};const ju=F.createFramebuffer(),Ku=F.createFramebuffer();this.copyTextureToTexture=function(R,W,Y=null,Z=null,X=0,ue=null){ue===null&&(X!==0?(Ci("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=X,X=0):ue=0);let ve,Te,Se,Oe,Fe,Ce,$e,tt,ct;const ot=R.isCompressedTexture?R.mipmaps[ue]:R.image;if(Y!==null)ve=Y.max.x-Y.min.x,Te=Y.max.y-Y.min.y,Se=Y.isBox3?Y.max.z-Y.min.z:1,Oe=Y.min.x,Fe=Y.min.y,Ce=Y.isBox3?Y.min.z:0;else{const Gt=Math.pow(2,-X);ve=Math.floor(ot.width*Gt),Te=Math.floor(ot.height*Gt),R.isDataArrayTexture?Se=ot.depth:R.isData3DTexture?Se=Math.floor(ot.depth*Gt):Se=1,Oe=0,Fe=0,Ce=0}Z!==null?($e=Z.x,tt=Z.y,ct=Z.z):($e=0,tt=0,ct=0);const it=le.convert(W.format),Pe=le.convert(W.type);let at;W.isData3DTexture?(Ie.setTexture3D(W,0),at=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Ie.setTexture2DArray(W,0),at=F.TEXTURE_2D_ARRAY):(Ie.setTexture2D(W,0),at=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const je=F.getParameter(F.UNPACK_ROW_LENGTH),Pt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ai=F.getParameter(F.UNPACK_SKIP_PIXELS),Dt=F.getParameter(F.UNPACK_SKIP_ROWS),qi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Oe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ce);const lt=R.isDataArrayTexture||R.isData3DTexture,Ht=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Gt=ye.get(R),yt=ye.get(W),bt=ye.get(Gt.__renderTarget),bs=ye.get(yt.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,bt.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let Gn=0;Gn<Se;Gn++)lt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.get(R).__webglTexture,X,Ce+Gn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.get(W).__webglTexture,ue,ct+Gn)),F.blitFramebuffer(Oe,Fe,ve,Te,$e,tt,ve,Te,F.DEPTH_BUFFER_BIT,F.NEAREST);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||ye.has(R)){const Gt=ye.get(R),yt=ye.get(W);Me.bindFramebuffer(F.READ_FRAMEBUFFER,ju),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ku);for(let bt=0;bt<Se;bt++)lt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gt.__webglTexture,X,Ce+bt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Gt.__webglTexture,X),Ht?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,yt.__webglTexture,ue,ct+bt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yt.__webglTexture,ue),X!==0?F.blitFramebuffer(Oe,Fe,ve,Te,$e,tt,ve,Te,F.COLOR_BUFFER_BIT,F.NEAREST):Ht?F.copyTexSubImage3D(at,ue,$e,tt,ct+bt,Oe,Fe,ve,Te):F.copyTexSubImage2D(at,ue,$e,tt,Oe,Fe,ve,Te);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ht?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(at,ue,$e,tt,ct,ve,Te,Se,it,Pe,ot.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(at,ue,$e,tt,ct,ve,Te,Se,it,ot.data):F.texSubImage3D(at,ue,$e,tt,ct,ve,Te,Se,it,Pe,ot):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ue,$e,tt,ve,Te,it,Pe,ot.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ue,$e,tt,ot.width,ot.height,it,ot.data):F.texSubImage2D(F.TEXTURE_2D,ue,$e,tt,ve,Te,it,Pe,ot);F.pixelStorei(F.UNPACK_ROW_LENGTH,je),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ai),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qi),ue===0&&W.generateMipmaps&&F.generateMipmap(at),Me.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Y=null,Z=null,X=0){return Ci('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,Y,Z,X)},this.initRenderTarget=function(R){ye.get(R).__webglFramebuffer===void 0&&Ie.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ie.setTextureCube(R,0):R.isData3DTexture?Ie.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ie.setTexture2DArray(R,0):Ie.setTexture2D(R,0),Me.unbindTexture()},this.resetState=function(){L=0,P=0,I=null,Me.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}var St="top",Ft="bottom",Ut="right",Et="left",ps="auto",Gi=[St,Ft,Ut,Et],ni="start",Ii="end",Ic="clippingParents",na="viewport",Ti="popper",Nc="reference",ko=Gi.reduce(function(i,e){return i.concat([e+"-"+ni,e+"-"+Ii])},[]),ia=[].concat(Gi,[ps]).reduce(function(i,e){return i.concat([e,e+"-"+ni,e+"-"+Ii])},[]),Oc="beforeRead",Fc="read",Uc="afterRead",Bc="beforeMain",zc="main",kc="afterMain",Hc="beforeWrite",Gc="write",Vc="afterWrite",Wc=[Oc,Fc,Uc,Bc,zc,kc,Hc,Gc,Vc];function dn(i){return i?(i.nodeName||"").toLowerCase():null}function Bt(i){if(i==null)return window;if(i.toString()!=="[object Window]"){var e=i.ownerDocument;return e&&e.defaultView||window}return i}function ii(i){var e=Bt(i).Element;return i instanceof e||i instanceof Element}function Yt(i){var e=Bt(i).HTMLElement;return i instanceof e||i instanceof HTMLElement}function ra(i){if(typeof ShadowRoot>"u")return!1;var e=Bt(i).ShadowRoot;return i instanceof e||i instanceof ShadowRoot}function yg(i){var e=i.state;Object.keys(e.elements).forEach(function(t){var n=e.styles[t]||{},r=e.attributes[t]||{},s=e.elements[t];!Yt(s)||!dn(s)||(Object.assign(s.style,n),Object.keys(r).forEach(function(o){var a=r[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function xg(i){var e=i.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(n){var r=e.elements[n],s=e.attributes[n]||{},o=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]),a=o.reduce(function(c,u){return c[u]="",c},{});!Yt(r)||!dn(r)||(Object.assign(r.style,a),Object.keys(s).forEach(function(c){r.removeAttribute(c)}))})}}const sa={name:"applyStyles",enabled:!0,phase:"write",fn:yg,effect:xg,requires:["computeStyles"]};function ln(i){return i.split("-")[0]}var ei=Math.max,rs=Math.min,Ni=Math.round;function Ho(){var i=navigator.userAgentData;return i!=null&&i.brands&&Array.isArray(i.brands)?i.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Xc(){return!/^((?!chrome|android).)*safari/i.test(Ho())}function Oi(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var n=i.getBoundingClientRect(),r=1,s=1;e&&Yt(i)&&(r=i.offsetWidth>0&&Ni(n.width)/i.offsetWidth||1,s=i.offsetHeight>0&&Ni(n.height)/i.offsetHeight||1);var o=ii(i)?Bt(i):window,a=o.visualViewport,c=!Xc()&&t,u=(n.left+(c&&a?a.offsetLeft:0))/r,f=(n.top+(c&&a?a.offsetTop:0))/s,m=n.width/r,g=n.height/s;return{width:m,height:g,top:f,right:u+m,bottom:f+g,left:u,x:u,y:f}}function oa(i){var e=Oi(i),t=i.offsetWidth,n=i.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:i.offsetLeft,y:i.offsetTop,width:t,height:n}}function $c(i,e){var t=e.getRootNode&&e.getRootNode();if(i.contains(e))return!0;if(t&&ra(t)){var n=e;do{if(n&&i.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Tn(i){return Bt(i).getComputedStyle(i)}function Sg(i){return["table","td","th"].indexOf(dn(i))>=0}function Bn(i){return((ii(i)?i.ownerDocument:i.document)||window.document).documentElement}function ms(i){return dn(i)==="html"?i:i.assignedSlot||i.parentNode||(ra(i)?i.host:null)||Bn(i)}function dl(i){return!Yt(i)||Tn(i).position==="fixed"?null:i.offsetParent}function Eg(i){var e=/firefox/i.test(Ho()),t=/Trident/i.test(Ho());if(t&&Yt(i)){var n=Tn(i);if(n.position==="fixed")return null}var r=ms(i);for(ra(r)&&(r=r.host);Yt(r)&&["html","body"].indexOf(dn(r))<0;){var s=Tn(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function dr(i){for(var e=Bt(i),t=dl(i);t&&Sg(t)&&Tn(t).position==="static";)t=dl(t);return t&&(dn(t)==="html"||dn(t)==="body"&&Tn(t).position==="static")?e:t||Eg(i)||e}function aa(i){return["top","bottom"].indexOf(i)>=0?"x":"y"}function rr(i,e,t){return ei(i,rs(e,t))}function Tg(i,e,t){var n=rr(i,e,t);return n>t?t:n}function qc(){return{top:0,right:0,bottom:0,left:0}}function Yc(i){return Object.assign({},qc(),i)}function jc(i,e){return e.reduce(function(t,n){return t[n]=i,t},{})}var bg=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Yc(typeof e!="number"?e:jc(e,Gi))};function Mg(i){var e,t=i.state,n=i.name,r=i.options,s=t.elements.arrow,o=t.modifiersData.popperOffsets,a=ln(t.placement),c=aa(a),u=[Et,Ut].indexOf(a)>=0,f=u?"height":"width";if(!(!s||!o)){var m=bg(r.padding,t),g=oa(s),v=c==="y"?St:Et,x=c==="y"?Ft:Ut,E=t.rects.reference[f]+t.rects.reference[c]-o[c]-t.rects.popper[f],h=o[c]-t.rects.reference[c],l=dr(s),_=l?c==="y"?l.clientHeight||0:l.clientWidth||0:0,y=E/2-h/2,S=m[v],M=_-g[f]-m[x],L=_/2-g[f]/2+y,P=rr(S,L,M),I=c;t.modifiersData[n]=(e={},e[I]=P,e.centerOffset=P-L,e)}}function Ag(i){var e=i.state,t=i.options,n=t.element,r=n===void 0?"[data-popper-arrow]":n;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||$c(e.elements.popper,r)&&(e.elements.arrow=r))}const Kc={name:"arrow",enabled:!0,phase:"main",fn:Mg,effect:Ag,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Fi(i){return i.split("-")[1]}var wg={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Cg(i,e){var t=i.x,n=i.y,r=e.devicePixelRatio||1;return{x:Ni(t*r)/r||0,y:Ni(n*r)/r||0}}function hl(i){var e,t=i.popper,n=i.popperRect,r=i.placement,s=i.variation,o=i.offsets,a=i.position,c=i.gpuAcceleration,u=i.adaptive,f=i.roundOffsets,m=i.isFixed,g=o.x,v=g===void 0?0:g,x=o.y,E=x===void 0?0:x,h=typeof f=="function"?f({x:v,y:E}):{x:v,y:E};v=h.x,E=h.y;var l=o.hasOwnProperty("x"),_=o.hasOwnProperty("y"),y=Et,S=St,M=window;if(u){var L=dr(t),P="clientHeight",I="clientWidth";if(L===Bt(t)&&(L=Bn(t),Tn(L).position!=="static"&&a==="absolute"&&(P="scrollHeight",I="scrollWidth")),L=L,r===St||(r===Et||r===Ut)&&s===Ii){S=Ft;var A=m&&L===M&&M.visualViewport?M.visualViewport.height:L[P];E-=A-n.height,E*=c?1:-1}if(r===Et||(r===St||r===Ft)&&s===Ii){y=Ut;var T=m&&L===M&&M.visualViewport?M.visualViewport.width:L[I];v-=T-n.width,v*=c?1:-1}}var w=Object.assign({position:a},u&&wg),O=f===!0?Cg({x:v,y:E},Bt(t)):{x:v,y:E};if(v=O.x,E=O.y,c){var U;return Object.assign({},w,(U={},U[S]=_?"0":"",U[y]=l?"0":"",U.transform=(M.devicePixelRatio||1)<=1?"translate("+v+"px, "+E+"px)":"translate3d("+v+"px, "+E+"px, 0)",U))}return Object.assign({},w,(e={},e[S]=_?E+"px":"",e[y]=l?v+"px":"",e.transform="",e))}function Rg(i){var e=i.state,t=i.options,n=t.gpuAcceleration,r=n===void 0?!0:n,s=t.adaptive,o=s===void 0?!0:s,a=t.roundOffsets,c=a===void 0?!0:a,u={placement:ln(e.placement),variation:Fi(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,hl(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,hl(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const la={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Rg,data:{}};var kr={passive:!0};function Lg(i){var e=i.state,t=i.instance,n=i.options,r=n.scroll,s=r===void 0?!0:r,o=n.resize,a=o===void 0?!0:o,c=Bt(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&u.forEach(function(f){f.addEventListener("scroll",t.update,kr)}),a&&c.addEventListener("resize",t.update,kr),function(){s&&u.forEach(function(f){f.removeEventListener("scroll",t.update,kr)}),a&&c.removeEventListener("resize",t.update,kr)}}const ca={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Lg,data:{}};var Pg={left:"right",right:"left",bottom:"top",top:"bottom"};function Kr(i){return i.replace(/left|right|bottom|top/g,function(e){return Pg[e]})}var Dg={start:"end",end:"start"};function fl(i){return i.replace(/start|end/g,function(e){return Dg[e]})}function ua(i){var e=Bt(i),t=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:t,scrollTop:n}}function da(i){return Oi(Bn(i)).left+ua(i).scrollLeft}function Ig(i,e){var t=Bt(i),n=Bn(i),r=t.visualViewport,s=n.clientWidth,o=n.clientHeight,a=0,c=0;if(r){s=r.width,o=r.height;var u=Xc();(u||!u&&e==="fixed")&&(a=r.offsetLeft,c=r.offsetTop)}return{width:s,height:o,x:a+da(i),y:c}}function Ng(i){var e,t=Bn(i),n=ua(i),r=(e=i.ownerDocument)==null?void 0:e.body,s=ei(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=ei(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-n.scrollLeft+da(i),c=-n.scrollTop;return Tn(r||t).direction==="rtl"&&(a+=ei(t.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function ha(i){var e=Tn(i),t=e.overflow,n=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+r+n)}function Zc(i){return["html","body","#document"].indexOf(dn(i))>=0?i.ownerDocument.body:Yt(i)&&ha(i)?i:Zc(ms(i))}function sr(i,e){var t;e===void 0&&(e=[]);var n=Zc(i),r=n===((t=i.ownerDocument)==null?void 0:t.body),s=Bt(n),o=r?[s].concat(s.visualViewport||[],ha(n)?n:[]):n,a=e.concat(o);return r?a:a.concat(sr(ms(o)))}function Go(i){return Object.assign({},i,{left:i.x,top:i.y,right:i.x+i.width,bottom:i.y+i.height})}function Og(i,e){var t=Oi(i,!1,e==="fixed");return t.top=t.top+i.clientTop,t.left=t.left+i.clientLeft,t.bottom=t.top+i.clientHeight,t.right=t.left+i.clientWidth,t.width=i.clientWidth,t.height=i.clientHeight,t.x=t.left,t.y=t.top,t}function pl(i,e,t){return e===na?Go(Ig(i,t)):ii(e)?Og(e,t):Go(Ng(Bn(i)))}function Fg(i){var e=sr(ms(i)),t=["absolute","fixed"].indexOf(Tn(i).position)>=0,n=t&&Yt(i)?dr(i):i;return ii(n)?e.filter(function(r){return ii(r)&&$c(r,n)&&dn(r)!=="body"}):[]}function Ug(i,e,t,n){var r=e==="clippingParents"?Fg(i):[].concat(e),s=[].concat(r,[t]),o=s[0],a=s.reduce(function(c,u){var f=pl(i,u,n);return c.top=ei(f.top,c.top),c.right=rs(f.right,c.right),c.bottom=rs(f.bottom,c.bottom),c.left=ei(f.left,c.left),c},pl(i,o,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Jc(i){var e=i.reference,t=i.element,n=i.placement,r=n?ln(n):null,s=n?Fi(n):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,c;switch(r){case St:c={x:o,y:e.y-t.height};break;case Ft:c={x:o,y:e.y+e.height};break;case Ut:c={x:e.x+e.width,y:a};break;case Et:c={x:e.x-t.width,y:a};break;default:c={x:e.x,y:e.y}}var u=r?aa(r):null;if(u!=null){var f=u==="y"?"height":"width";switch(s){case ni:c[u]=c[u]-(e[f]/2-t[f]/2);break;case Ii:c[u]=c[u]+(e[f]/2-t[f]/2);break}}return c}function Ui(i,e){e===void 0&&(e={});var t=e,n=t.placement,r=n===void 0?i.placement:n,s=t.strategy,o=s===void 0?i.strategy:s,a=t.boundary,c=a===void 0?Ic:a,u=t.rootBoundary,f=u===void 0?na:u,m=t.elementContext,g=m===void 0?Ti:m,v=t.altBoundary,x=v===void 0?!1:v,E=t.padding,h=E===void 0?0:E,l=Yc(typeof h!="number"?h:jc(h,Gi)),_=g===Ti?Nc:Ti,y=i.rects.popper,S=i.elements[x?_:g],M=Ug(ii(S)?S:S.contextElement||Bn(i.elements.popper),c,f,o),L=Oi(i.elements.reference),P=Jc({reference:L,element:y,placement:r}),I=Go(Object.assign({},y,P)),A=g===Ti?I:L,T={top:M.top-A.top+l.top,bottom:A.bottom-M.bottom+l.bottom,left:M.left-A.left+l.left,right:A.right-M.right+l.right},w=i.modifiersData.offset;if(g===Ti&&w){var O=w[r];Object.keys(T).forEach(function(U){var G=[Ut,Ft].indexOf(U)>=0?1:-1,$=[St,Ft].indexOf(U)>=0?"y":"x";T[U]+=O[$]*G})}return T}function Bg(i,e){e===void 0&&(e={});var t=e,n=t.placement,r=t.boundary,s=t.rootBoundary,o=t.padding,a=t.flipVariations,c=t.allowedAutoPlacements,u=c===void 0?ia:c,f=Fi(n),m=f?a?ko:ko.filter(function(x){return Fi(x)===f}):Gi,g=m.filter(function(x){return u.indexOf(x)>=0});g.length===0&&(g=m);var v=g.reduce(function(x,E){return x[E]=Ui(i,{placement:E,boundary:r,rootBoundary:s,padding:o})[ln(E)],x},{});return Object.keys(v).sort(function(x,E){return v[x]-v[E]})}function zg(i){if(ln(i)===ps)return[];var e=Kr(i);return[fl(i),e,fl(e)]}function kg(i){var e=i.state,t=i.options,n=i.name;if(!e.modifiersData[n]._skip){for(var r=t.mainAxis,s=r===void 0?!0:r,o=t.altAxis,a=o===void 0?!0:o,c=t.fallbackPlacements,u=t.padding,f=t.boundary,m=t.rootBoundary,g=t.altBoundary,v=t.flipVariations,x=v===void 0?!0:v,E=t.allowedAutoPlacements,h=e.options.placement,l=ln(h),_=l===h,y=c||(_||!x?[Kr(h)]:zg(h)),S=[h].concat(y).reduce(function(Xe,J){return Xe.concat(ln(J)===ps?Bg(e,{placement:J,boundary:f,rootBoundary:m,padding:u,flipVariations:x,allowedAutoPlacements:E}):J)},[]),M=e.rects.reference,L=e.rects.popper,P=new Map,I=!0,A=S[0],T=0;T<S.length;T++){var w=S[T],O=ln(w),U=Fi(w)===ni,G=[St,Ft].indexOf(O)>=0,$=G?"width":"height",k=Ui(e,{placement:w,boundary:f,rootBoundary:m,altBoundary:g,padding:u}),q=G?U?Ut:Et:U?Ft:St;M[$]>L[$]&&(q=Kr(q));var H=Kr(q),ie=[];if(s&&ie.push(k[O]<=0),a&&ie.push(k[q]<=0,k[H]<=0),ie.every(function(Xe){return Xe})){A=w,I=!1;break}P.set(w,ie)}if(I)for(var ce=x?3:1,_e=function(J){var pe=S.find(function(he){var be=P.get(he);if(be)return be.slice(0,J).every(function(Ae){return Ae})});if(pe)return A=pe,"break"},Le=ce;Le>0;Le--){var Ye=_e(Le);if(Ye==="break")break}e.placement!==A&&(e.modifiersData[n]._skip=!0,e.placement=A,e.reset=!0)}}const Qc={name:"flip",enabled:!0,phase:"main",fn:kg,requiresIfExists:["offset"],data:{_skip:!1}};function ml(i,e,t){return t===void 0&&(t={x:0,y:0}),{top:i.top-e.height-t.y,right:i.right-e.width+t.x,bottom:i.bottom-e.height+t.y,left:i.left-e.width-t.x}}function gl(i){return[St,Ut,Ft,Et].some(function(e){return i[e]>=0})}function Hg(i){var e=i.state,t=i.name,n=e.rects.reference,r=e.rects.popper,s=e.modifiersData.preventOverflow,o=Ui(e,{elementContext:"reference"}),a=Ui(e,{altBoundary:!0}),c=ml(o,n),u=ml(a,r,s),f=gl(c),m=gl(u);e.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:m},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":m})}const eu={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Hg};function Gg(i,e,t){var n=ln(i),r=[Et,St].indexOf(n)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:i})):t,o=s[0],a=s[1];return o=o||0,a=(a||0)*r,[Et,Ut].indexOf(n)>=0?{x:a,y:o}:{x:o,y:a}}function Vg(i){var e=i.state,t=i.options,n=i.name,r=t.offset,s=r===void 0?[0,0]:r,o=ia.reduce(function(f,m){return f[m]=Gg(m,e.rects,s),f},{}),a=o[e.placement],c=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=o}const tu={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Vg};function Wg(i){var e=i.state,t=i.name;e.modifiersData[t]=Jc({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const fa={name:"popperOffsets",enabled:!0,phase:"read",fn:Wg,data:{}};function Xg(i){return i==="x"?"y":"x"}function $g(i){var e=i.state,t=i.options,n=i.name,r=t.mainAxis,s=r===void 0?!0:r,o=t.altAxis,a=o===void 0?!1:o,c=t.boundary,u=t.rootBoundary,f=t.altBoundary,m=t.padding,g=t.tether,v=g===void 0?!0:g,x=t.tetherOffset,E=x===void 0?0:x,h=Ui(e,{boundary:c,rootBoundary:u,padding:m,altBoundary:f}),l=ln(e.placement),_=Fi(e.placement),y=!_,S=aa(l),M=Xg(S),L=e.modifiersData.popperOffsets,P=e.rects.reference,I=e.rects.popper,A=typeof E=="function"?E(Object.assign({},e.rects,{placement:e.placement})):E,T=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),w=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,O={x:0,y:0};if(L){if(s){var U,G=S==="y"?St:Et,$=S==="y"?Ft:Ut,k=S==="y"?"height":"width",q=L[S],H=q+h[G],ie=q-h[$],ce=v?-I[k]/2:0,_e=_===ni?P[k]:I[k],Le=_===ni?-I[k]:-P[k],Ye=e.elements.arrow,Xe=v&&Ye?oa(Ye):{width:0,height:0},J=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:qc(),pe=J[G],he=J[$],be=rr(0,P[k],Xe[k]),Ae=y?P[k]/2-ce-be-pe-T.mainAxis:_e-be-pe-T.mainAxis,De=y?-P[k]/2+ce+be+he+T.mainAxis:Le+be+he+T.mainAxis,Ze=e.elements.arrow&&dr(e.elements.arrow),Ge=Ze?S==="y"?Ze.clientTop||0:Ze.clientLeft||0:0,F=(U=w==null?void 0:w[S])!=null?U:0,Ue=q+Ae-F-Ge,we=q+De-F,He=rr(v?rs(H,Ue):H,q,v?ei(ie,we):ie);L[S]=He,O[S]=He-q}if(a){var Me,Qe=S==="x"?St:Et,ye=S==="x"?Ft:Ut,Ie=L[M],st=M==="y"?"height":"width",rt=Ie+h[Qe],d=Ie-h[ye],p=[St,Et].indexOf(l)!==-1,b=(Me=w==null?void 0:w[M])!=null?Me:0,C=p?rt:Ie-P[st]-I[st]-b+T.altAxis,D=p?Ie+P[st]+I[st]-b-T.altAxis:d,N=v&&p?Tg(C,Ie,D):rr(v?C:rt,Ie,v?D:d);L[M]=N,O[M]=N-Ie}e.modifiersData[n]=O}}const nu={name:"preventOverflow",enabled:!0,phase:"main",fn:$g,requiresIfExists:["offset"]};function qg(i){return{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}}function Yg(i){return i===Bt(i)||!Yt(i)?ua(i):qg(i)}function jg(i){var e=i.getBoundingClientRect(),t=Ni(e.width)/i.offsetWidth||1,n=Ni(e.height)/i.offsetHeight||1;return t!==1||n!==1}function Kg(i,e,t){t===void 0&&(t=!1);var n=Yt(e),r=Yt(e)&&jg(e),s=Bn(e),o=Oi(i,r,t),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!t)&&((dn(e)!=="body"||ha(s))&&(a=Yg(e)),Yt(e)?(c=Oi(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=da(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Zg(i){var e=new Map,t=new Set,n=[];i.forEach(function(s){e.set(s.name,s)});function r(s){t.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var c=e.get(a);c&&r(c)}}),n.push(s)}return i.forEach(function(s){t.has(s.name)||r(s)}),n}function Jg(i){var e=Zg(i);return Wc.reduce(function(t,n){return t.concat(e.filter(function(r){return r.phase===n}))},[])}function Qg(i){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(i())})})),e}}function ev(i){var e=i.reduce(function(t,n){var r=t[n.name];return t[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,t},{});return Object.keys(e).map(function(t){return e[t]})}var vl={placement:"bottom",modifiers:[],strategy:"absolute"};function _l(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function gs(i){i===void 0&&(i={});var e=i,t=e.defaultModifiers,n=t===void 0?[]:t,r=e.defaultOptions,s=r===void 0?vl:r;return function(a,c,u){u===void 0&&(u=s);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},vl,s),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},m=[],g=!1,v={state:f,setOptions:function(l){var _=typeof l=="function"?l(f.options):l;E(),f.options=Object.assign({},s,f.options,_),f.scrollParents={reference:ii(a)?sr(a):a.contextElement?sr(a.contextElement):[],popper:sr(c)};var y=Jg(ev([].concat(n,f.options.modifiers)));return f.orderedModifiers=y.filter(function(S){return S.enabled}),x(),v.update()},forceUpdate:function(){if(!g){var l=f.elements,_=l.reference,y=l.popper;if(_l(_,y)){f.rects={reference:Kg(_,dr(y),f.options.strategy==="fixed"),popper:oa(y)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(T){return f.modifiersData[T.name]=Object.assign({},T.data)});for(var S=0;S<f.orderedModifiers.length;S++){if(f.reset===!0){f.reset=!1,S=-1;continue}var M=f.orderedModifiers[S],L=M.fn,P=M.options,I=P===void 0?{}:P,A=M.name;typeof L=="function"&&(f=L({state:f,options:I,name:A,instance:v})||f)}}}},update:Qg(function(){return new Promise(function(h){v.forceUpdate(),h(f)})}),destroy:function(){E(),g=!0}};if(!_l(a,c))return v;v.setOptions(u).then(function(h){!g&&u.onFirstUpdate&&u.onFirstUpdate(h)});function x(){f.orderedModifiers.forEach(function(h){var l=h.name,_=h.options,y=_===void 0?{}:_,S=h.effect;if(typeof S=="function"){var M=S({state:f,name:l,instance:v,options:y}),L=function(){};m.push(M||L)}})}function E(){m.forEach(function(h){return h()}),m=[]}return v}}var tv=gs(),nv=[ca,fa,la,sa],iv=gs({defaultModifiers:nv}),rv=[ca,fa,la,sa,tu,Qc,nu,Kc,eu],pa=gs({defaultModifiers:rv});const iu=Object.freeze(Object.defineProperty({__proto__:null,afterMain:kc,afterRead:Uc,afterWrite:Vc,applyStyles:sa,arrow:Kc,auto:ps,basePlacements:Gi,beforeMain:Bc,beforeRead:Oc,beforeWrite:Hc,bottom:Ft,clippingParents:Ic,computeStyles:la,createPopper:pa,createPopperBase:tv,createPopperLite:iv,detectOverflow:Ui,end:Ii,eventListeners:ca,flip:Qc,hide:eu,left:Et,main:zc,modifierPhases:Wc,offset:tu,placements:ia,popper:Ti,popperGenerator:gs,popperOffsets:fa,preventOverflow:nu,read:Fc,reference:Nc,right:Ut,start:ni,top:St,variationPlacements:ko,viewport:na,write:Gc},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Pn=new Map,to={set(i,e,t){Pn.has(i)||Pn.set(i,new Map);const n=Pn.get(i);if(!n.has(e)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(e,t)},get(i,e){return Pn.has(i)&&Pn.get(i).get(e)||null},remove(i,e){if(!Pn.has(i))return;const t=Pn.get(i);t.delete(e),t.size===0&&Pn.delete(i)}},sv=1e6,ov=1e3,Vo="transitionend",ru=i=>(i&&window.CSS&&window.CSS.escape&&(i=i.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),i),av=i=>i==null?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase(),lv=i=>{do i+=Math.floor(Math.random()*sv);while(document.getElementById(i));return i},cv=i=>{if(!i)return 0;let{transitionDuration:e,transitionDelay:t}=window.getComputedStyle(i);const n=Number.parseFloat(e),r=Number.parseFloat(t);return!n&&!r?0:(e=e.split(",")[0],t=t.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(t))*ov)},su=i=>{i.dispatchEvent(new Event(Vo))},yn=i=>!i||typeof i!="object"?!1:(typeof i.jquery<"u"&&(i=i[0]),typeof i.nodeType<"u"),Nn=i=>yn(i)?i.jquery?i[0]:i:typeof i=="string"&&i.length>0?document.querySelector(ru(i)):null,Vi=i=>{if(!yn(i)||i.getClientRects().length===0)return!1;const e=getComputedStyle(i).getPropertyValue("visibility")==="visible",t=i.closest("details:not([open])");if(!t)return e;if(t!==i){const n=i.closest("summary");if(n&&n.parentNode!==t||n===null)return!1}return e},On=i=>!i||i.nodeType!==Node.ELEMENT_NODE||i.classList.contains("disabled")?!0:typeof i.disabled<"u"?i.disabled:i.hasAttribute("disabled")&&i.getAttribute("disabled")!=="false",ou=i=>{if(!document.documentElement.attachShadow)return null;if(typeof i.getRootNode=="function"){const e=i.getRootNode();return e instanceof ShadowRoot?e:null}return i instanceof ShadowRoot?i:i.parentNode?ou(i.parentNode):null},ss=()=>{},hr=i=>{i.offsetHeight},au=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,no=[],uv=i=>{document.readyState==="loading"?(no.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of no)e()}),no.push(i)):i()},jt=()=>document.documentElement.dir==="rtl",Zt=i=>{uv(()=>{const e=au();if(e){const t=i.NAME,n=e.fn[t];e.fn[t]=i.jQueryInterface,e.fn[t].Constructor=i,e.fn[t].noConflict=()=>(e.fn[t]=n,i.jQueryInterface)}})},At=(i,e=[],t=i)=>typeof i=="function"?i.call(...e):t,lu=(i,e,t=!0)=>{if(!t){At(i);return}const r=cv(e)+5;let s=!1;const o=({target:a})=>{a===e&&(s=!0,e.removeEventListener(Vo,o),At(i))};e.addEventListener(Vo,o),setTimeout(()=>{s||su(e)},r)},ma=(i,e,t,n)=>{const r=i.length;let s=i.indexOf(e);return s===-1?!t&&n?i[r-1]:i[0]:(s+=t?1:-1,n&&(s=(s+r)%r),i[Math.max(0,Math.min(s,r-1))])},dv=/[^.]*(?=\..*)\.|.*/,hv=/\..*/,fv=/::\d+$/,io={};let yl=1;const cu={mouseenter:"mouseover",mouseleave:"mouseout"},pv=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function uu(i,e){return e&&`${e}::${yl++}`||i.uidEvent||yl++}function du(i){const e=uu(i);return i.uidEvent=e,io[e]=io[e]||{},io[e]}function mv(i,e){return function t(n){return ga(n,{delegateTarget:i}),t.oneOff&&ae.off(i,n.type,e),e.apply(i,[n])}}function gv(i,e,t){return function n(r){const s=i.querySelectorAll(e);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return ga(r,{delegateTarget:o}),n.oneOff&&ae.off(i,r.type,e,t),t.apply(o,[r])}}function hu(i,e,t=null){return Object.values(i).find(n=>n.callable===e&&n.delegationSelector===t)}function fu(i,e,t){const n=typeof e=="string",r=n?t:e||t;let s=pu(i);return pv.has(s)||(s=i),[n,r,s]}function xl(i,e,t,n,r){if(typeof e!="string"||!i)return;let[s,o,a]=fu(e,t,n);e in cu&&(o=(x=>function(E){if(!E.relatedTarget||E.relatedTarget!==E.delegateTarget&&!E.delegateTarget.contains(E.relatedTarget))return x.call(this,E)})(o));const c=du(i),u=c[a]||(c[a]={}),f=hu(u,o,s?t:null);if(f){f.oneOff=f.oneOff&&r;return}const m=uu(o,e.replace(dv,"")),g=s?gv(i,t,o):mv(i,o);g.delegationSelector=s?t:null,g.callable=o,g.oneOff=r,g.uidEvent=m,u[m]=g,i.addEventListener(a,g,s)}function Wo(i,e,t,n,r){const s=hu(e[t],n,r);s&&(i.removeEventListener(t,s,!!r),delete e[t][s.uidEvent])}function vv(i,e,t,n){const r=e[t]||{};for(const[s,o]of Object.entries(r))s.includes(n)&&Wo(i,e,t,o.callable,o.delegationSelector)}function pu(i){return i=i.replace(hv,""),cu[i]||i}const ae={on(i,e,t,n){xl(i,e,t,n,!1)},one(i,e,t,n){xl(i,e,t,n,!0)},off(i,e,t,n){if(typeof e!="string"||!i)return;const[r,s,o]=fu(e,t,n),a=o!==e,c=du(i),u=c[o]||{},f=e.startsWith(".");if(typeof s<"u"){if(!Object.keys(u).length)return;Wo(i,c,o,s,r?t:null);return}if(f)for(const m of Object.keys(c))vv(i,c,m,e.slice(1));for(const[m,g]of Object.entries(u)){const v=m.replace(fv,"");(!a||e.includes(v))&&Wo(i,c,o,g.callable,g.delegationSelector)}},trigger(i,e,t){if(typeof e!="string"||!i)return null;const n=au(),r=pu(e),s=e!==r;let o=null,a=!0,c=!0,u=!1;s&&n&&(o=n.Event(e,t),n(i).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),u=o.isDefaultPrevented());const f=ga(new Event(e,{bubbles:a,cancelable:!0}),t);return u&&f.preventDefault(),c&&i.dispatchEvent(f),f.defaultPrevented&&o&&o.preventDefault(),f}};function ga(i,e={}){for(const[t,n]of Object.entries(e))try{i[t]=n}catch{Object.defineProperty(i,t,{configurable:!0,get(){return n}})}return i}function Sl(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function ro(i){return i.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const xn={setDataAttribute(i,e,t){i.setAttribute(`data-bs-${ro(e)}`,t)},removeDataAttribute(i,e){i.removeAttribute(`data-bs-${ro(e)}`)},getDataAttributes(i){if(!i)return{};const e={},t=Object.keys(i.dataset).filter(n=>n.startsWith("bs")&&!n.startsWith("bsConfig"));for(const n of t){let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),e[r]=Sl(i.dataset[n])}return e},getDataAttribute(i,e){return Sl(i.getAttribute(`data-bs-${ro(e)}`))}};class fr{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=yn(t)?xn.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...yn(t)?xn.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,r]of Object.entries(t)){const s=e[n],o=yn(s)?"element":av(s);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${r}".`)}}}const _v="5.3.7";class nn extends fr{constructor(e,t){super(),e=Nn(e),e&&(this._element=e,this._config=this._getConfig(t),to.set(this._element,this.constructor.DATA_KEY,this))}dispose(){to.remove(this._element,this.constructor.DATA_KEY),ae.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){lu(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return to.get(Nn(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return _v}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const so=i=>{let e=i.getAttribute("data-bs-target");if(!e||e==="#"){let t=i.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&t!=="#"?t.trim():null}return e?e.split(",").map(t=>ru(t)).join(","):null},Re={find(i,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,i))},findOne(i,e=document.documentElement){return Element.prototype.querySelector.call(e,i)},children(i,e){return[].concat(...i.children).filter(t=>t.matches(e))},parents(i,e){const t=[];let n=i.parentNode.closest(e);for(;n;)t.push(n),n=n.parentNode.closest(e);return t},prev(i,e){let t=i.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(i,e){let t=i.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(i){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,i).filter(t=>!On(t)&&Vi(t))},getSelectorFromElement(i){const e=so(i);return e&&Re.findOne(e)?e:null},getElementFromSelector(i){const e=so(i);return e?Re.findOne(e):null},getMultipleElementsFromSelector(i){const e=so(i);return e?Re.find(e):[]}},vs=(i,e="hide")=>{const t=`click.dismiss${i.EVENT_KEY}`,n=i.NAME;ae.on(document,t,`[data-bs-dismiss="${n}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),On(this))return;const s=Re.getElementFromSelector(this)||this.closest(`.${n}`);i.getOrCreateInstance(s)[e]()})},yv="alert",xv="bs.alert",mu=`.${xv}`,Sv=`close${mu}`,Ev=`closed${mu}`,Tv="fade",bv="show";class _s extends nn{static get NAME(){return yv}close(){if(ae.trigger(this._element,Sv).defaultPrevented)return;this._element.classList.remove(bv);const t=this._element.classList.contains(Tv);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),ae.trigger(this._element,Ev),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=_s.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}vs(_s,"close");Zt(_s);const Mv="button",Av="bs.button",wv=`.${Av}`,Cv=".data-api",Rv="active",El='[data-bs-toggle="button"]',Lv=`click${wv}${Cv}`;class ys extends nn{static get NAME(){return Mv}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Rv))}static jQueryInterface(e){return this.each(function(){const t=ys.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}ae.on(document,Lv,El,i=>{i.preventDefault();const e=i.target.closest(El);ys.getOrCreateInstance(e).toggle()});Zt(ys);const Pv="swipe",Wi=".bs.swipe",Dv=`touchstart${Wi}`,Iv=`touchmove${Wi}`,Nv=`touchend${Wi}`,Ov=`pointerdown${Wi}`,Fv=`pointerup${Wi}`,Uv="touch",Bv="pen",zv="pointer-event",kv=40,Hv={endCallback:null,leftCallback:null,rightCallback:null},Gv={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class os extends fr{constructor(e,t){super(),this._element=e,!(!e||!os.isSupported())&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Hv}static get DefaultType(){return Gv}static get NAME(){return Pv}dispose(){ae.off(this._element,Wi)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),At(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=kv)return;const t=e/this._deltaX;this._deltaX=0,t&&At(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(ae.on(this._element,Ov,e=>this._start(e)),ae.on(this._element,Fv,e=>this._end(e)),this._element.classList.add(zv)):(ae.on(this._element,Dv,e=>this._start(e)),ae.on(this._element,Iv,e=>this._move(e)),ae.on(this._element,Nv,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Bv||e.pointerType===Uv)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Vv="carousel",Wv="bs.carousel",zn=`.${Wv}`,gu=".data-api",Xv="ArrowLeft",$v="ArrowRight",qv=500,Qi="next",Si="prev",bi="left",Zr="right",Yv=`slide${zn}`,oo=`slid${zn}`,jv=`keydown${zn}`,Kv=`mouseenter${zn}`,Zv=`mouseleave${zn}`,Jv=`dragstart${zn}`,Qv=`load${zn}${gu}`,e_=`click${zn}${gu}`,vu="carousel",Hr="active",t_="slide",n_="carousel-item-end",i_="carousel-item-start",r_="carousel-item-next",s_="carousel-item-prev",_u=".active",yu=".carousel-item",o_=_u+yu,a_=".carousel-item img",l_=".carousel-indicators",c_="[data-bs-slide], [data-bs-slide-to]",u_='[data-bs-ride="carousel"]',d_={[Xv]:Zr,[$v]:bi},h_={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},f_={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class pr extends nn{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Re.findOne(l_,this._element),this._addEventListeners(),this._config.ride===vu&&this.cycle()}static get Default(){return h_}static get DefaultType(){return f_}static get NAME(){return Vv}next(){this._slide(Qi)}nextWhenVisible(){!document.hidden&&Vi(this._element)&&this.next()}prev(){this._slide(Si)}pause(){this._isSliding&&su(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){ae.one(this._element,oo,()=>this.cycle());return}this.cycle()}}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){ae.one(this._element,oo,()=>this.to(e));return}const n=this._getItemIndex(this._getActive());if(n===e)return;const r=e>n?Qi:Si;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&ae.on(this._element,jv,e=>this._keydown(e)),this._config.pause==="hover"&&(ae.on(this._element,Kv,()=>this.pause()),ae.on(this._element,Zv,()=>this._maybeEnableCycle())),this._config.touch&&os.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of Re.find(a_,this._element))ae.on(n,Jv,r=>r.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(bi)),rightCallback:()=>this._slide(this._directionToOrder(Zr)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),qv+this._config.interval))}};this._swipeHelper=new os(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=d_[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=Re.findOne(_u,this._indicatorsElement);t.classList.remove(Hr),t.removeAttribute("aria-current");const n=Re.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(Hr),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),r=e===Qi,s=t||ma(this._getItems(),n,r,this._config.wrap);if(s===n)return;const o=this._getItemIndex(s),a=v=>ae.trigger(this._element,v,{relatedTarget:s,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:o});if(a(Yv).defaultPrevented||!n||!s)return;const u=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const f=r?i_:n_,m=r?r_:s_;s.classList.add(m),hr(s),n.classList.add(f),s.classList.add(f);const g=()=>{s.classList.remove(f,m),s.classList.add(Hr),n.classList.remove(Hr,m,f),this._isSliding=!1,a(oo)};this._queueCallback(g,n,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(t_)}_getActive(){return Re.findOne(o_,this._element)}_getItems(){return Re.find(yu,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return jt()?e===bi?Si:Qi:e===bi?Qi:Si}_orderToDirection(e){return jt()?e===Si?bi:Zr:e===Si?Zr:bi}static jQueryInterface(e){return this.each(function(){const t=pr.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}ae.on(document,e_,c_,function(i){const e=Re.getElementFromSelector(this);if(!e||!e.classList.contains(vu))return;i.preventDefault();const t=pr.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");if(n){t.to(n),t._maybeEnableCycle();return}if(xn.getDataAttribute(this,"slide")==="next"){t.next(),t._maybeEnableCycle();return}t.prev(),t._maybeEnableCycle()});ae.on(window,Qv,()=>{const i=Re.find(u_);for(const e of i)pr.getOrCreateInstance(e)});Zt(pr);const p_="collapse",m_="bs.collapse",mr=`.${m_}`,g_=".data-api",v_=`show${mr}`,__=`shown${mr}`,y_=`hide${mr}`,x_=`hidden${mr}`,S_=`click${mr}${g_}`,ao="show",wi="collapse",Gr="collapsing",E_="collapsed",T_=`:scope .${wi} .${wi}`,b_="collapse-horizontal",M_="width",A_="height",w_=".collapse.show, .collapse.collapsing",Xo='[data-bs-toggle="collapse"]',C_={parent:null,toggle:!0},R_={parent:"(null|element)",toggle:"boolean"};class or extends nn{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=Re.find(Xo);for(const r of n){const s=Re.getSelectorFromElement(r),o=Re.find(s).filter(a=>a===this._element);s!==null&&o.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return C_}static get DefaultType(){return R_}static get NAME(){return p_}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(w_).filter(a=>a!==this._element).map(a=>or.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||ae.trigger(this._element,v_).defaultPrevented)return;for(const a of e)a.hide();const n=this._getDimension();this._element.classList.remove(wi),this._element.classList.add(Gr),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Gr),this._element.classList.add(wi,ao),this._element.style[n]="",ae.trigger(this._element,__)},o=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[n]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||ae.trigger(this._element,y_).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,hr(this._element),this._element.classList.add(Gr),this._element.classList.remove(wi,ao);for(const r of this._triggerArray){const s=Re.getElementFromSelector(r);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(Gr),this._element.classList.add(wi),ae.trigger(this._element,x_)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(ao)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=Nn(e.parent),e}_getDimension(){return this._element.classList.contains(b_)?M_:A_}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Xo);for(const t of e){const n=Re.getElementFromSelector(t);n&&this._addAriaAndCollapsedClass([t],this._isShown(n))}}_getFirstLevelChildren(e){const t=Re.find(T_,this._config.parent);return Re.find(e,this._config.parent).filter(n=>!t.includes(n))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle(E_,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const n=or.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ae.on(document,S_,Xo,function(i){(i.target.tagName==="A"||i.delegateTarget&&i.delegateTarget.tagName==="A")&&i.preventDefault();for(const e of Re.getMultipleElementsFromSelector(this))or.getOrCreateInstance(e,{toggle:!1}).toggle()});Zt(or);const Tl="dropdown",L_="bs.dropdown",ri=`.${L_}`,va=".data-api",P_="Escape",bl="Tab",D_="ArrowUp",Ml="ArrowDown",I_=2,N_=`hide${ri}`,O_=`hidden${ri}`,F_=`show${ri}`,U_=`shown${ri}`,xu=`click${ri}${va}`,Su=`keydown${ri}${va}`,B_=`keyup${ri}${va}`,Mi="show",z_="dropup",k_="dropend",H_="dropstart",G_="dropup-center",V_="dropdown-center",Jn='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',W_=`${Jn}.${Mi}`,Jr=".dropdown-menu",X_=".navbar",$_=".navbar-nav",q_=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Y_=jt()?"top-end":"top-start",j_=jt()?"top-start":"top-end",K_=jt()?"bottom-end":"bottom-start",Z_=jt()?"bottom-start":"bottom-end",J_=jt()?"left-start":"right-start",Q_=jt()?"right-start":"left-start",ey="top",ty="bottom",ny={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},iy={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class cn extends nn{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=Re.next(this._element,Jr)[0]||Re.prev(this._element,Jr)[0]||Re.findOne(Jr,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ny}static get DefaultType(){return iy}static get NAME(){return Tl}toggle(){return this._isShown()?this.hide():this.show()}show(){if(On(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!ae.trigger(this._element,F_,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest($_))for(const n of[].concat(...document.body.children))ae.on(n,"mouseover",ss);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Mi),this._element.classList.add(Mi),ae.trigger(this._element,U_,e)}}hide(){if(On(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!ae.trigger(this._element,N_,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))ae.off(n,"mouseover",ss);this._popper&&this._popper.destroy(),this._menu.classList.remove(Mi),this._element.classList.remove(Mi),this._element.setAttribute("aria-expanded","false"),xn.removeDataAttribute(this._menu,"popper"),ae.trigger(this._element,O_,e),this._element.focus()}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!yn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Tl.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof iu>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;this._config.reference==="parent"?e=this._parent:yn(this._config.reference)?e=Nn(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=pa(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Mi)}_getPlacement(){const e=this._parent;if(e.classList.contains(k_))return J_;if(e.classList.contains(H_))return Q_;if(e.classList.contains(G_))return ey;if(e.classList.contains(V_))return ty;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(z_)?t?j_:Y_:t?Z_:K_}_detectNavbar(){return this._element.closest(X_)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(xn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...At(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){const n=Re.find(q_,this._menu).filter(r=>Vi(r));n.length&&ma(n,t,e===Ml,!n.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=cn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===I_||e.type==="keyup"&&e.key!==bl)return;const t=Re.find(W_);for(const n of t){const r=cn.getInstance(n);if(!r||r._config.autoClose===!1)continue;const s=e.composedPath(),o=s.includes(r._menu);if(s.includes(r._element)||r._config.autoClose==="inside"&&!o||r._config.autoClose==="outside"&&o||r._menu.contains(e.target)&&(e.type==="keyup"&&e.key===bl||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:r._element};e.type==="click"&&(a.clickEvent=e),r._completeHide(a)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===P_,r=[D_,Ml].includes(e.key);if(!r&&!n||t&&!n)return;e.preventDefault();const s=this.matches(Jn)?this:Re.prev(this,Jn)[0]||Re.next(this,Jn)[0]||Re.findOne(Jn,e.delegateTarget.parentNode),o=cn.getOrCreateInstance(s);if(r){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),s.focus())}}ae.on(document,Su,Jn,cn.dataApiKeydownHandler);ae.on(document,Su,Jr,cn.dataApiKeydownHandler);ae.on(document,xu,cn.clearMenus);ae.on(document,B_,cn.clearMenus);ae.on(document,xu,Jn,function(i){i.preventDefault(),cn.getOrCreateInstance(this).toggle()});Zt(cn);const Eu="backdrop",ry="fade",Al="show",wl=`mousedown.bs.${Eu}`,sy={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},oy={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Tu extends fr{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return sy}static get DefaultType(){return oy}static get NAME(){return Eu}show(e){if(!this._config.isVisible){At(e);return}this._append();const t=this._getElement();this._config.isAnimated&&hr(t),t.classList.add(Al),this._emulateAnimation(()=>{At(e)})}hide(e){if(!this._config.isVisible){At(e);return}this._getElement().classList.remove(Al),this._emulateAnimation(()=>{this.dispose(),At(e)})}dispose(){this._isAppended&&(ae.off(this._element,wl),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(ry),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Nn(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),ae.on(e,wl,()=>{At(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){lu(e,this._getElement(),this._config.isAnimated)}}const ay="focustrap",ly="bs.focustrap",as=`.${ly}`,cy=`focusin${as}`,uy=`keydown.tab${as}`,dy="Tab",hy="forward",Cl="backward",fy={autofocus:!0,trapElement:null},py={autofocus:"boolean",trapElement:"element"};class bu extends fr{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return fy}static get DefaultType(){return py}static get NAME(){return ay}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),ae.off(document,as),ae.on(document,cy,e=>this._handleFocusin(e)),ae.on(document,uy,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,ae.off(document,as))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=Re.focusableChildren(t);n.length===0?t.focus():this._lastTabNavDirection===Cl?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===dy&&(this._lastTabNavDirection=e.shiftKey?Cl:hy)}}const Rl=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ll=".sticky-top",Vr="padding-right",Pl="margin-right";class $o{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Vr,t=>t+e),this._setElementAttributes(Rl,Vr,t=>t+e),this._setElementAttributes(Ll,Pl,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Vr),this._resetElementAttributes(Rl,Vr),this._resetElementAttributes(Ll,Pl)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),s=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+r)return;this._saveInitialAttribute(o,t);const a=window.getComputedStyle(o).getPropertyValue(t);o.style.setProperty(t,`${n(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,s)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&xn.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=r=>{const s=xn.getDataAttribute(r,t);if(s===null){r.style.removeProperty(t);return}xn.removeDataAttribute(r,t),r.style.setProperty(t,s)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){if(yn(e)){t(e);return}for(const n of Re.find(e,this._element))t(n)}}const my="modal",gy="bs.modal",Kt=`.${gy}`,vy=".data-api",_y="Escape",yy=`hide${Kt}`,xy=`hidePrevented${Kt}`,Mu=`hidden${Kt}`,Au=`show${Kt}`,Sy=`shown${Kt}`,Ey=`resize${Kt}`,Ty=`click.dismiss${Kt}`,by=`mousedown.dismiss${Kt}`,My=`keydown.dismiss${Kt}`,Ay=`click${Kt}${vy}`,Dl="modal-open",wy="fade",Il="show",lo="modal-static",Cy=".modal.show",Ry=".modal-dialog",Ly=".modal-body",Py='[data-bs-toggle="modal"]',Dy={backdrop:!0,focus:!0,keyboard:!0},Iy={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Bi extends nn{constructor(e,t){super(e,t),this._dialog=Re.findOne(Ry,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new $o,this._addEventListeners()}static get Default(){return Dy}static get DefaultType(){return Iy}static get NAME(){return my}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||ae.trigger(this._element,Au,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Dl),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||ae.trigger(this._element,yy).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Il),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){ae.off(window,Kt),ae.off(this._dialog,Kt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Tu({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new bu({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=Re.findOne(Ly,this._dialog);t&&(t.scrollTop=0),hr(this._element),this._element.classList.add(Il);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,ae.trigger(this._element,Sy,{relatedTarget:e})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){ae.on(this._element,My,e=>{if(e.key===_y){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),ae.on(window,Ey,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),ae.on(this._element,by,e=>{ae.one(this._element,Ty,t=>{if(!(this._element!==e.target||this._element!==t.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Dl),this._resetAdjustments(),this._scrollBar.reset(),ae.trigger(this._element,Mu)})}_isAnimated(){return this._element.classList.contains(wy)}_triggerBackdropTransition(){if(ae.trigger(this._element,xy).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(lo)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(lo),this._queueCallback(()=>{this._element.classList.remove(lo),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const r=jt()?"paddingLeft":"paddingRight";this._element.style[r]=`${t}px`}if(!n&&e){const r=jt()?"paddingRight":"paddingLeft";this._element.style[r]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const n=Bi.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](t)}})}}ae.on(document,Ay,Py,function(i){const e=Re.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&i.preventDefault(),ae.one(e,Au,r=>{r.defaultPrevented||ae.one(e,Mu,()=>{Vi(this)&&this.focus()})});const t=Re.findOne(Cy);t&&Bi.getInstance(t).hide(),Bi.getOrCreateInstance(e).toggle(this)});vs(Bi);Zt(Bi);const Ny="offcanvas",Oy="bs.offcanvas",bn=`.${Oy}`,wu=".data-api",Fy=`load${bn}${wu}`,Uy="Escape",Nl="show",Ol="showing",Fl="hiding",By="offcanvas-backdrop",Cu=".offcanvas.show",zy=`show${bn}`,ky=`shown${bn}`,Hy=`hide${bn}`,Ul=`hidePrevented${bn}`,Ru=`hidden${bn}`,Gy=`resize${bn}`,Vy=`click${bn}${wu}`,Wy=`keydown.dismiss${bn}`,Xy='[data-bs-toggle="offcanvas"]',$y={backdrop:!0,keyboard:!0,scroll:!1},qy={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Fn extends nn{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return $y}static get DefaultType(){return qy}static get NAME(){return Ny}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||ae.trigger(this._element,zy,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new $o().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ol);const n=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Nl),this._element.classList.remove(Ol),ae.trigger(this._element,ky,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown||ae.trigger(this._element,Hy).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Fl),this._backdrop.hide();const t=()=>{this._element.classList.remove(Nl,Fl),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new $o().reset(),ae.trigger(this._element,Ru)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){ae.trigger(this._element,Ul);return}this.hide()},t=!!this._config.backdrop;return new Tu({className:By,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new bu({trapElement:this._element})}_addEventListeners(){ae.on(this._element,Wy,e=>{if(e.key===Uy){if(this._config.keyboard){this.hide();return}ae.trigger(this._element,Ul)}})}static jQueryInterface(e){return this.each(function(){const t=Fn.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}ae.on(document,Vy,Xy,function(i){const e=Re.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),On(this))return;ae.one(e,Ru,()=>{Vi(this)&&this.focus()});const t=Re.findOne(Cu);t&&t!==e&&Fn.getInstance(t).hide(),Fn.getOrCreateInstance(e).toggle(this)});ae.on(window,Fy,()=>{for(const i of Re.find(Cu))Fn.getOrCreateInstance(i).show()});ae.on(window,Gy,()=>{for(const i of Re.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(i).position!=="fixed"&&Fn.getOrCreateInstance(i).hide()});vs(Fn);Zt(Fn);const Yy=/^aria-[\w-]*$/i,Lu={"*":["class","dir","id","lang","role",Yy],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},jy=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ky=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Zy=(i,e)=>{const t=i.nodeName.toLowerCase();return e.includes(t)?jy.has(t)?!!Ky.test(i.nodeValue):!0:e.filter(n=>n instanceof RegExp).some(n=>n.test(t))};function Jy(i,e,t){if(!i.length)return i;if(t&&typeof t=="function")return t(i);const r=new window.DOMParser().parseFromString(i,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(const o of s){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const c=[].concat(...o.attributes),u=[].concat(e["*"]||[],e[a]||[]);for(const f of c)Zy(f,u)||o.removeAttribute(f.nodeName)}return r.body.innerHTML}const Qy="TemplateFactory",ex={allowList:Lu,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},tx={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},nx={entry:"(string|element|function|null)",selector:"(string|element)"};class ix extends fr{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return ex}static get DefaultType(){return tx}static get NAME(){return Qy}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[r,s]of Object.entries(this._config.content))this._setContent(e,s,r);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},nx)}_setContent(e,t,n){const r=Re.findOne(n,e);if(r){if(t=this._resolvePossibleFunction(t),!t){r.remove();return}if(yn(t)){this._putElementInTemplate(Nn(t),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(t);return}r.textContent=t}}_maybeSanitize(e){return this._config.sanitize?Jy(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return At(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const rx="tooltip",sx=new Set(["sanitize","allowList","sanitizeFn"]),co="fade",ox="modal",Wr="show",ax=".tooltip-inner",Bl=`.${ox}`,zl="hide.bs.modal",er="hover",uo="focus",ho="click",lx="manual",cx="hide",ux="hidden",dx="show",hx="shown",fx="inserted",px="click",mx="focusin",gx="focusout",vx="mouseenter",_x="mouseleave",yx={AUTO:"auto",TOP:"top",RIGHT:jt()?"left":"right",BOTTOM:"bottom",LEFT:jt()?"right":"left"},xx={allowList:Lu,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Sx={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Xi extends nn{constructor(e,t){if(typeof iu>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return xx}static get DefaultType(){return Sx}static get NAME(){return rx}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),ae.off(this._element.closest(Bl),zl,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=ae.trigger(this._element,this.constructor.eventName(dx)),n=(ou(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(r),ae.trigger(this._element,this.constructor.eventName(fx))),this._popper=this._createPopper(r),r.classList.add(Wr),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))ae.on(a,"mouseover",ss);const o=()=>{ae.trigger(this._element,this.constructor.eventName(hx)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||ae.trigger(this._element,this.constructor.eventName(cx)).defaultPrevented)return;if(this._getTipElement().classList.remove(Wr),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))ae.off(r,"mouseover",ss);this._activeTrigger[ho]=!1,this._activeTrigger[uo]=!1,this._activeTrigger[er]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),ae.trigger(this._element,this.constructor.eventName(ux)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(co,Wr),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=lv(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(co),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new ix({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ax]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(co)}_isShown(){return this.tip&&this.tip.classList.contains(Wr)}_createPopper(e){const t=At(this._config.placement,[this,e,this._element]),n=yx[t.toUpperCase()];return pa(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return At(e,[this._element,this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:n=>{this._getTipElement().setAttribute("data-popper-placement",n.state.placement)}}]};return{...t,...At(this._config.popperConfig,[void 0,t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if(t==="click")ae.on(this._element,this.constructor.eventName(px),this._config.selector,n=>{const r=this._initializeOnDelegatedTarget(n);r._activeTrigger[ho]=!(r._isShown()&&r._activeTrigger[ho]),r.toggle()});else if(t!==lx){const n=t===er?this.constructor.eventName(vx):this.constructor.eventName(mx),r=t===er?this.constructor.eventName(_x):this.constructor.eventName(gx);ae.on(this._element,n,this._config.selector,s=>{const o=this._initializeOnDelegatedTarget(s);o._activeTrigger[s.type==="focusin"?uo:er]=!0,o._enter()}),ae.on(this._element,r,this._config.selector,s=>{const o=this._initializeOnDelegatedTarget(s);o._activeTrigger[s.type==="focusout"?uo:er]=o._element.contains(s.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},ae.on(this._element.closest(Bl),zl,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=xn.getDataAttributes(this._element);for(const n of Object.keys(t))sx.has(n)&&delete t[n];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Nn(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=Xi.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Zt(Xi);const Ex="popover",Tx=".popover-header",bx=".popover-body",Mx={...Xi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ax={...Xi.DefaultType,content:"(null|string|element|function)"};class _a extends Xi{static get Default(){return Mx}static get DefaultType(){return Ax}static get NAME(){return Ex}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Tx]:this._getTitle(),[bx]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=_a.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Zt(_a);const wx="scrollspy",Cx="bs.scrollspy",ya=`.${Cx}`,Rx=".data-api",Lx=`activate${ya}`,kl=`click${ya}`,Px=`load${ya}${Rx}`,Dx="dropdown-item",Ei="active",Ix='[data-bs-spy="scroll"]',fo="[href]",Nx=".nav, .list-group",Hl=".nav-link",Ox=".nav-item",Fx=".list-group-item",Ux=`${Hl}, ${Ox} > ${Hl}, ${Fx}`,Bx=".dropdown",zx=".dropdown-toggle",kx={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Hx={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class xs extends nn{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return kx}static get DefaultType(){return Hx}static get NAME(){return wx}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Nn(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(t=>Number.parseFloat(t))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(ae.off(this._config.target,kl),ae.on(this._config.target,kl,fo,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:r,behavior:"smooth"});return}n.scrollTop=r}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),e)}_observerCallback(e){const t=o=>this._targetLinks.get(`#${o.target.id}`),n=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(t(o))},r=(this._rootElement||document.documentElement).scrollTop,s=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(n(o),!r)return;continue}!s&&!a&&n(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=Re.find(fo,this._config.target);for(const t of e){if(!t.hash||On(t))continue;const n=Re.findOne(decodeURI(t.hash),this._element);Vi(n)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,n))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Ei),this._activateParents(e),ae.trigger(this._element,Lx,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(Dx)){Re.findOne(zx,e.closest(Bx)).classList.add(Ei);return}for(const t of Re.parents(e,Nx))for(const n of Re.prev(t,Ux))n.classList.add(Ei)}_clearActiveClass(e){e.classList.remove(Ei);const t=Re.find(`${fo}.${Ei}`,e);for(const n of t)n.classList.remove(Ei)}static jQueryInterface(e){return this.each(function(){const t=xs.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}ae.on(window,Px,()=>{for(const i of Re.find(Ix))xs.getOrCreateInstance(i)});Zt(xs);const Gx="tab",Vx="bs.tab",si=`.${Vx}`,Wx=`hide${si}`,Xx=`hidden${si}`,$x=`show${si}`,qx=`shown${si}`,Yx=`click${si}`,jx=`keydown${si}`,Kx=`load${si}`,Zx="ArrowLeft",Gl="ArrowRight",Jx="ArrowUp",Vl="ArrowDown",po="Home",Wl="End",Qn="active",Xl="fade",mo="show",Qx="dropdown",Pu=".dropdown-toggle",eS=".dropdown-menu",go=`:not(${Pu})`,tS='.list-group, .nav, [role="tablist"]',nS=".nav-item, .list-group-item",iS=`.nav-link${go}, .list-group-item${go}, [role="tab"]${go}`,Du='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',vo=`${iS}, ${Du}`,rS=`.${Qn}[data-bs-toggle="tab"], .${Qn}[data-bs-toggle="pill"], .${Qn}[data-bs-toggle="list"]`;class zi extends nn{constructor(e){super(e),this._parent=this._element.closest(tS),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),ae.on(this._element,jx,t=>this._keydown(t)))}static get NAME(){return Gx}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?ae.trigger(t,Wx,{relatedTarget:e}):null;ae.trigger(e,$x,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(Qn),this._activate(Re.getElementFromSelector(e));const n=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(mo);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),ae.trigger(e,qx,{relatedTarget:t})};this._queueCallback(n,e,e.classList.contains(Xl))}_deactivate(e,t){if(!e)return;e.classList.remove(Qn),e.blur(),this._deactivate(Re.getElementFromSelector(e));const n=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(mo);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),ae.trigger(e,Xx,{relatedTarget:t})};this._queueCallback(n,e,e.classList.contains(Xl))}_keydown(e){if(![Zx,Gl,Jx,Vl,po,Wl].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter(r=>!On(r));let n;if([po,Wl].includes(e.key))n=t[e.key===po?0:t.length-1];else{const r=[Gl,Vl].includes(e.key);n=ma(t,e.target,r,!0)}n&&(n.focus({preventScroll:!0}),zi.getOrCreateInstance(n).show())}_getChildren(){return Re.find(vo,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=Re.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(Qx))return;const r=(s,o)=>{const a=Re.findOne(s,n);a&&a.classList.toggle(o,t)};r(Pu,Qn),r(eS,mo),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(Qn)}_getInnerElement(e){return e.matches(vo)?e:Re.findOne(vo,e)}_getOuterElement(e){return e.closest(nS)||e}static jQueryInterface(e){return this.each(function(){const t=zi.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}ae.on(document,Yx,Du,function(i){["A","AREA"].includes(this.tagName)&&i.preventDefault(),!On(this)&&zi.getOrCreateInstance(this).show()});ae.on(window,Kx,()=>{for(const i of Re.find(rS))zi.getOrCreateInstance(i)});Zt(zi);const sS="toast",oS="bs.toast",kn=`.${oS}`,aS=`mouseover${kn}`,lS=`mouseout${kn}`,cS=`focusin${kn}`,uS=`focusout${kn}`,dS=`hide${kn}`,hS=`hidden${kn}`,fS=`show${kn}`,pS=`shown${kn}`,mS="fade",$l="hide",Xr="show",$r="showing",gS={animation:"boolean",autohide:"boolean",delay:"number"},vS={animation:!0,autohide:!0,delay:5e3};class Ss extends nn{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return vS}static get DefaultType(){return gS}static get NAME(){return sS}show(){if(ae.trigger(this._element,fS).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(mS);const t=()=>{this._element.classList.remove($r),ae.trigger(this._element,pS),this._maybeScheduleHide()};this._element.classList.remove($l),hr(this._element),this._element.classList.add(Xr,$r),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown()||ae.trigger(this._element,dS).defaultPrevented)return;const t=()=>{this._element.classList.add($l),this._element.classList.remove($r,Xr),ae.trigger(this._element,hS)};this._element.classList.add($r),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Xr),super.dispose()}isShown(){return this._element.classList.contains(Xr)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=t;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=t;break}}if(t){this._clearTimeout();return}const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){ae.on(this._element,aS,e=>this._onInteraction(e,!0)),ae.on(this._element,lS,e=>this._onInteraction(e,!1)),ae.on(this._element,cS,e=>this._onInteraction(e,!0)),ae.on(this._element,uS,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=Ss.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}vs(Ss);Zt(Ss);function xa(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Qr={exports:{}},_S=Qr.exports,ql;function yS(){return ql||(ql=1,function(i,e){(function(t,n){i.exports=n()})(_S,function(){function t(d,p){if(!(d instanceof p))throw new TypeError("Cannot call a class as a function")}function n(d,p){for(var b=0;b<p.length;b++){var C=p[b];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(d,s(C.key),C)}}function r(d,p,b){return p&&n(d.prototype,p),Object.defineProperty(d,"prototype",{writable:!1}),d}function s(d){var p=function(b,C){if(typeof b!="object"||!b)return b;var D=b[Symbol.toPrimitive];if(D!==void 0){var N=D.call(b,C);if(typeof N!="object")return N;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(d,"string");return typeof p=="symbol"?p:p+""}function o(d){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p})(d)}var a=Date.now();function c(){var d={},p=!0,b=0,C=arguments.length;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(p=arguments[0],b++);for(var D=function(V){for(var z in V)Object.prototype.hasOwnProperty.call(V,z)&&(p&&Object.prototype.toString.call(V[z])==="[object Object]"?d[z]=c(!0,d[z],V[z]):d[z]=V[z])};b<C;b++){var N=arguments[b];D(N)}return d}function u(d,p){if((O(d)||d===window||d===document)&&(d=[d]),G(d)||$(d)||(d=[d]),H(d)!=0){if(G(d)&&!$(d))for(var b=d.length,C=0;C<b&&p.call(d[C],d[C],C,d)!==!1;C++);else if($(d)){for(var D in d)if(q(d,D)&&p.call(d[D],d[D],D,d)===!1)break}}}function f(d){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,C=d[a]=d[a]||[],D={all:C,evt:null,found:null};return p&&b&&H(C)>0&&u(C,function(N,V){if(N.eventName==p&&N.fn.toString()==b.toString())return D.found=!0,D.evt=V,!1}),D}function m(d){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b=p.onElement,C=p.withCallback,D=p.avoidDuplicate,N=D===void 0||D,V=p.once,z=V!==void 0&&V,ee=p.useCapture,Q=ee!==void 0&&ee,j=arguments.length>2?arguments[2]:void 0,te=b||[];function fe(le){T(C)&&C.call(j,le,this),z&&fe.destroy()}return w(te)&&(te=document.querySelectorAll(te)),fe.destroy=function(){u(te,function(le){var re=f(le,d,fe);re.found&&re.all.splice(re.evt,1),le.removeEventListener&&le.removeEventListener(d,fe,Q)})},u(te,function(le){var re=f(le,d,fe);(le.addEventListener&&N&&!re.found||!N)&&(le.addEventListener(d,fe,Q),re.all.push({eventName:d,fn:fe}))}),fe}function g(d,p){u(p.split(" "),function(b){return d.classList.add(b)})}function v(d,p){u(p.split(" "),function(b){return d.classList.remove(b)})}function x(d,p){return d.classList.contains(p)}function E(d,p){for(;d!==document.body;){if(!(d=d.parentElement))return!1;if(typeof d.matches=="function"?d.matches(p):d.msMatchesSelector(p))return d}}function h(d){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",b=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(!d||p==="")return!1;if(p==="none")return T(b)&&b(),!1;var C=L(),D=p.split(" ");u(D,function(N){g(d,"g"+N)}),m(C,{onElement:d,avoidDuplicate:!1,once:!0,withCallback:function(N,V){u(D,function(z){v(V,"g"+z)}),T(b)&&b()}})}function l(d){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if(p==="")return d.style.webkitTransform="",d.style.MozTransform="",d.style.msTransform="",d.style.OTransform="",d.style.transform="",!1;d.style.webkitTransform=p,d.style.MozTransform=p,d.style.msTransform=p,d.style.OTransform=p,d.style.transform=p}function _(d){d.style.display="block"}function y(d){d.style.display="none"}function S(d){var p=document.createDocumentFragment(),b=document.createElement("div");for(b.innerHTML=d;b.firstChild;)p.appendChild(b.firstChild);return p}function M(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function L(){var d,p=document.createElement("fakeelement"),b={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(d in b)if(p.style[d]!==void 0)return b[d]}function P(d,p,b,C){if(d())p();else{var D;b||(b=100);var N=setInterval(function(){d()&&(clearInterval(N),D&&clearTimeout(D),p())},b)}}function I(d,p,b){if(k(d))console.error("Inject assets error");else if(T(p)&&(b=p,p=!1),w(p)&&p in window)T(b)&&b();else{var C;if(d.indexOf(".css")!==-1){if((C=document.querySelectorAll('link[href="'+d+'"]'))&&C.length>0)return void(T(b)&&b());var D=document.getElementsByTagName("head")[0],N=D.querySelectorAll('link[rel="stylesheet"]'),V=document.createElement("link");return V.rel="stylesheet",V.type="text/css",V.href=d,V.media="all",N?D.insertBefore(V,N[0]):D.appendChild(V),void(T(b)&&b())}if((C=document.querySelectorAll('script[src="'+d+'"]'))&&C.length>0){if(T(b)){if(w(p))return P(function(){return window[p]!==void 0},function(){b()}),!1;b()}}else{var z=document.createElement("script");z.type="text/javascript",z.src=d,z.onload=function(){if(T(b)){if(w(p))return P(function(){return window[p]!==void 0},function(){b()}),!1;b()}},document.body.appendChild(z)}}}function A(){return"navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)}function T(d){return typeof d=="function"}function w(d){return typeof d=="string"}function O(d){return!(!d||!d.nodeType||d.nodeType!=1)}function U(d){return Array.isArray(d)}function G(d){return d&&d.length&&isFinite(d.length)}function $(d){return o(d)==="object"&&d!=null&&!T(d)&&!U(d)}function k(d){return d==null}function q(d,p){return d!==null&&hasOwnProperty.call(d,p)}function H(d){if($(d)){if(d.keys)return d.keys().length;var p=0;for(var b in d)q(d,b)&&p++;return p}return d.length}function ie(d){return!isNaN(parseFloat(d))&&isFinite(d)}function ce(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,p=document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");if(!p.length)return!1;if(p.length==1)return p[0];typeof d=="string"&&(d=parseInt(d));var b=[];u(p,function(z){b.push(z.getAttribute("data-taborder"))});var C=Math.max.apply(Math,b.map(function(z){return parseInt(z)})),D=d<0?1:d+1;D>C&&(D="1");var N=b.filter(function(z){return z>=parseInt(D)}),V=N.sort()[0];return document.querySelector('.gbtn[data-taborder="'.concat(V,'"]'))}function _e(d){if(d.events.hasOwnProperty("keyboard"))return!1;d.events.keyboard=m("keydown",{onElement:window,withCallback:function(p,b){var C=(p=p||window.event).keyCode;if(C==9){var D=document.querySelector(".gbtn.focused");if(!D){var N=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if(N=="input"||N=="textarea"||N=="button")return}p.preventDefault();var V=document.querySelectorAll(".gbtn[data-taborder]");if(!V||V.length<=0)return;if(!D){var z=ce();return void(z&&(z.focus(),g(z,"focused")))}var ee=ce(D.getAttribute("data-taborder"));v(D,"focused"),ee&&(ee.focus(),g(ee,"focused"))}C==39&&d.nextSlide(),C==37&&d.prevSlide(),C==27&&d.close()}})}var Le=r(function d(p,b){var C=this,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(t(this,d),this.img=p,this.slide=b,this.onclose=D,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",function(N){return C.dragStart(N)},!1),this.img.addEventListener("mouseup",function(N){return C.dragEnd(N)},!1),this.img.addEventListener("mousemove",function(N){return C.drag(N)},!1),this.img.addEventListener("click",function(N){return C.slide.classList.contains("dragging-nav")?(C.zoomOut(),!1):C.zoomedIn?void(C.zoomedIn&&!C.dragging&&C.zoomOut()):C.zoomIn()},!1),this.img.setZoomEvents=!0},[{key:"zoomIn",value:function(){var d=this.widowWidth();if(!(this.zoomedIn||d<=768)){var p=this.img;if(p.setAttribute("data-style",p.getAttribute("style")),p.style.maxWidth=p.naturalWidth+"px",p.style.maxHeight=p.naturalHeight+"px",p.naturalWidth>d){var b=d/2-p.naturalWidth/2;this.setTranslate(this.img.parentNode,b,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&typeof this.onclose=="function"&&this.onclose()}},{key:"dragStart",value:function(d){d.preventDefault(),this.zoomedIn?(d.type==="touchstart"?(this.initialX=d.touches[0].clientX-this.xOffset,this.initialY=d.touches[0].clientY-this.yOffset):(this.initialX=d.clientX-this.xOffset,this.initialY=d.clientY-this.yOffset),d.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(d){var p=this;d.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout(function(){p.dragging=!1,p.img.isDragging=!1,p.img.classList.remove("dragging")},100)}},{key:"drag",value:function(d){this.active&&(d.preventDefault(),d.type==="touchmove"?(this.currentX=d.touches[0].clientX-this.initialX,this.currentY=d.touches[0].clientY-this.initialY):(this.currentX=d.clientX-this.initialX,this.currentY=d.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(d){if(this.zoomedIn){var p=d.clientX-this.img.naturalWidth/2,b=d.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,p,b)}}},{key:"setTranslate",value:function(d,p,b){d.style.transform="translate3d("+p+"px, "+b+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),Ye=r(function d(){var p=this,b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t(this,d);var C=b.dragEl,D=b.toleranceX,N=D===void 0?40:D,V=b.toleranceY,z=V===void 0?65:V,ee=b.slide,Q=ee===void 0?null:ee,j=b.instance,te=j===void 0?null:j;this.el=C,this.active=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.direction=null,this.lastDirection=null,this.toleranceX=N,this.toleranceY=z,this.toleranceReached=!1,this.dragContainer=this.el,this.slide=Q,this.instance=te,this.el.addEventListener("mousedown",function(fe){return p.dragStart(fe)},!1),this.el.addEventListener("mouseup",function(fe){return p.dragEnd(fe)},!1),this.el.addEventListener("mousemove",function(fe){return p.drag(fe)},!1)},[{key:"dragStart",value:function(d){if(this.slide.classList.contains("zoomed"))this.active=!1;else{d.type==="touchstart"?(this.initialX=d.touches[0].clientX-this.xOffset,this.initialY=d.touches[0].clientY-this.yOffset):(this.initialX=d.clientX-this.xOffset,this.initialY=d.clientY-this.yOffset);var p=d.target.nodeName.toLowerCase();d.target.classList.contains("nodrag")||E(d.target,".nodrag")||["input","select","textarea","button","a"].indexOf(p)!==-1?this.active=!1:(d.preventDefault(),(d.target===this.el||p!=="img"&&E(d.target,".gslide-inline"))&&(this.active=!0,this.el.classList.add("dragging"),this.dragContainer=E(d.target,".ginner-container")))}}},{key:"dragEnd",value:function(d){var p=this;d&&d.preventDefault(),this.initialX=0,this.initialY=0,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.active=!1,this.doSlideChange&&(this.instance.preventOutsideClick=!0,this.doSlideChange=="right"&&this.instance.prevSlide(),this.doSlideChange=="left"&&this.instance.nextSlide()),this.doSlideClose&&this.instance.close(),this.toleranceReached||this.setTranslate(this.dragContainer,0,0,!0),setTimeout(function(){p.instance.preventOutsideClick=!1,p.toleranceReached=!1,p.lastDirection=null,p.dragging=!1,p.el.isDragging=!1,p.el.classList.remove("dragging"),p.slide.classList.remove("dragging-nav"),p.dragContainer.style.transform="",p.dragContainer.style.transition=""},100)}},{key:"drag",value:function(d){if(this.active){d.preventDefault(),this.slide.classList.add("dragging-nav"),d.type==="touchmove"?(this.currentX=d.touches[0].clientX-this.initialX,this.currentY=d.touches[0].clientY-this.initialY):(this.currentX=d.clientX-this.initialX,this.currentY=d.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.el.isDragging=!0,this.dragging=!0,this.doSlideChange=!1,this.doSlideClose=!1;var p=Math.abs(this.currentX),b=Math.abs(this.currentY);if(p>0&&p>=Math.abs(this.currentY)&&(!this.lastDirection||this.lastDirection=="x")){this.yOffset=0,this.lastDirection="x",this.setTranslate(this.dragContainer,this.currentX,0);var C=this.shouldChange();if(!this.instance.settings.dragAutoSnap&&C&&(this.doSlideChange=C),this.instance.settings.dragAutoSnap&&C)return this.instance.preventOutsideClick=!0,this.toleranceReached=!0,this.active=!1,this.instance.preventOutsideClick=!0,this.dragEnd(null),C=="right"&&this.instance.prevSlide(),void(C=="left"&&this.instance.nextSlide())}if(this.toleranceY>0&&b>0&&b>=p&&(!this.lastDirection||this.lastDirection=="y")){this.xOffset=0,this.lastDirection="y",this.setTranslate(this.dragContainer,0,this.currentY);var D=this.shouldClose();return!this.instance.settings.dragAutoSnap&&D&&(this.doSlideClose=!0),void(this.instance.settings.dragAutoSnap&&D&&this.instance.close())}}}},{key:"shouldChange",value:function(){var d=!1;if(Math.abs(this.currentX)>=this.toleranceX){var p=this.currentX>0?"right":"left";(p=="left"&&this.slide!==this.slide.parentNode.lastChild||p=="right"&&this.slide!==this.slide.parentNode.firstChild)&&(d=p)}return d}},{key:"shouldClose",value:function(){var d=!1;return Math.abs(this.currentY)>=this.toleranceY&&(d=!0),d}},{key:"setTranslate",value:function(d,p,b){var C=arguments.length>3&&arguments[3]!==void 0&&arguments[3];d.style.transition=C?"all .2s ease":"",d.style.transform="translate3d(".concat(p,"px, ").concat(b,"px, 0)")}}]);function Xe(d,p,b,C){var D=d.querySelector(".gslide-media"),N=new Image,V="gSlideTitle_"+b,z="gSlideDesc_"+b;N.addEventListener("load",function(){T(C)&&C()},!1),N.src=p.href,p.sizes!=""&&p.srcset!=""&&(N.sizes=p.sizes,N.srcset=p.srcset),N.alt="",k(p.alt)||p.alt===""||(N.alt=p.alt),p.title!==""&&N.setAttribute("aria-labelledby",V),p.description!==""&&N.setAttribute("aria-describedby",z),p.hasOwnProperty("_hasCustomWidth")&&p._hasCustomWidth&&(N.style.width=p.width),p.hasOwnProperty("_hasCustomHeight")&&p._hasCustomHeight&&(N.style.height=p.height),D.insertBefore(N,D.firstChild)}function J(d,p,b,C){var D=this,N=d.querySelector(".ginner-container"),V="gvideo"+b,z=d.querySelector(".gslide-media"),ee=this.getAllPlayers();g(N,"gvideo-container"),z.insertBefore(S('<div class="gvideo-wrapper"></div>'),z.firstChild);var Q=d.querySelector(".gvideo-wrapper");I(this.settings.plyr.css,"Plyr");var j=p.href,te=p==null?void 0:p.videoProvider,fe=!1;z.style.maxWidth=p.width,I(this.settings.plyr.js,"Plyr",function(){if(!te&&j.match(/vimeo\.com\/([0-9]*)/)&&(te="vimeo"),!te&&(j.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||j.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||j.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)||j.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/))&&(te="youtube"),te==="local"||!te){te="local";var le='<video id="'+V+'" ';le+='style="background:#000; max-width: '.concat(p.width,';" '),le+='preload="metadata" ',le+='x-webkit-airplay="allow" ',le+="playsinline ",le+="controls ",le+='class="gvideo-local">',le+='<source src="'.concat(j,'">'),fe=S(le+="</video>")}var re=fe||S('<div id="'.concat(V,'" data-plyr-provider="').concat(te,'" data-plyr-embed-id="').concat(j,'"></div>'));g(Q,"".concat(te,"-video gvideo")),Q.appendChild(re),Q.setAttribute("data-id",V),Q.setAttribute("data-index",b);var Ee=q(D.settings.plyr,"config")?D.settings.plyr.config:{},B=new Plyr("#"+V,Ee);B.on("ready",function(se){ee[V]=se.detail.plyr,T(C)&&C()}),P(function(){return d.querySelector("iframe")&&d.querySelector("iframe").dataset.ready=="true"},function(){D.resize(d)}),B.on("enterfullscreen",pe),B.on("exitfullscreen",pe)})}function pe(d){var p=E(d.target,".gslide-media");d.type==="enterfullscreen"&&g(p,"fullscreen"),d.type==="exitfullscreen"&&v(p,"fullscreen")}function he(d,p,b,C){var D,N=this,V=d.querySelector(".gslide-media"),z=!(!q(p,"href")||!p.href)&&p.href.split("#").pop().trim(),ee=!(!q(p,"content")||!p.content)&&p.content;if(ee&&(w(ee)&&(D=S('<div class="ginlined-content">'.concat(ee,"</div>"))),O(ee))){ee.style.display=="none"&&(ee.style.display="block");var Q=document.createElement("div");Q.className="ginlined-content",Q.appendChild(ee),D=Q}if(z){var j=document.getElementById(z);if(!j)return!1;var te=j.cloneNode(!0);te.style.height=p.height,te.style.maxWidth=p.width,g(te,"ginlined-content"),D=te}if(!D)return console.error("Unable to append inline slide content",p),!1;V.style.height=p.height,V.style.width=p.width,V.appendChild(D),this.events["inlineclose"+z]=m("click",{onElement:V.querySelectorAll(".gtrigger-close"),withCallback:function(fe){fe.preventDefault(),N.close()}}),T(C)&&C()}function be(d,p,b,C){var D=d.querySelector(".gslide-media"),N=function(V){var z=V.url,ee=V.allow,Q=V.callback,j=V.appendTo,te=document.createElement("iframe");return te.className="vimeo-video gvideo",te.src=z,te.style.width="100%",te.style.height="100%",ee&&te.setAttribute("allow",ee),te.onload=function(){te.onload=null,g(te,"node-ready"),T(Q)&&Q()},j&&j.appendChild(te),te}({url:p.href,callback:C});D.parentNode.style.maxWidth=p.width,D.parentNode.style.height=p.height,D.appendChild(N)}var Ae=r(function d(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t(this,d),this.defaults={href:"",sizes:"",srcset:"",title:"",type:"",videoProvider:"",description:"",alt:"",descPosition:"bottom",effect:"",width:"",height:"",content:!1,zoomable:!0,draggable:!0},$(p)&&(this.defaults=c(this.defaults,p))},[{key:"sourceType",value:function(d){var p=d;return(d=d.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)!==null?"image":d.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||d.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||d.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)||d.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/)||d.match(/vimeo\.com\/([0-9]*)/)||d.match(/\.(mp4|ogg|webm|mov)/)!==null?"video":d.match(/\.(mp3|wav|wma|aac|ogg)/)!==null?"audio":d.indexOf("#")>-1&&p.split("#").pop().trim()!==""?"inline":d.indexOf("goajax=true")>-1?"ajax":"external"}},{key:"parseConfig",value:function(d,p){var b=this,C=c({descPosition:p.descPosition},this.defaults);if($(d)&&!O(d)){q(d,"type")||(q(d,"content")&&d.content?d.type="inline":q(d,"href")&&(d.type=this.sourceType(d.href)));var D=c(C,d);return this.setSize(D,p),D}var N="",V=d.getAttribute("data-glightbox"),z=d.nodeName.toLowerCase();if(z==="a"&&(N=d.href),z==="img"&&(N=d.src,C.alt=d.alt),C.href=N,u(C,function(le,re){q(p,re)&&re!=="width"&&(C[re]=p[re]);var Ee=d.dataset[re];k(Ee)||(C[re]=b.sanitizeValue(Ee))}),C.content&&(C.type="inline"),!C.type&&N&&(C.type=this.sourceType(N)),k(V)){if(!C.title&&z=="a"){var ee=d.title;k(ee)||ee===""||(C.title=ee)}if(!C.title&&z=="img"){var Q=d.alt;k(Q)||Q===""||(C.title=Q)}}else{var j=[];u(C,function(le,re){j.push(";\\s?"+re)}),j=j.join("\\s?:|"),V.trim()!==""&&u(C,function(le,re){var Ee=V,B=new RegExp("s?"+re+"s?:s?(.*?)("+j+"s?:|$)"),se=Ee.match(B);if(se&&se.length&&se[1]){var de=se[1].trim().replace(/;\s*$/,"");C[re]=b.sanitizeValue(de)}})}if(C.description&&C.description.substring(0,1)==="."){var te;try{te=document.querySelector(C.description).innerHTML}catch(le){if(!(le instanceof DOMException))throw le}te&&(C.description=te)}if(!C.description){var fe=d.querySelector(".glightbox-desc");fe&&(C.description=fe.innerHTML)}return this.setSize(C,p,d),this.slideConfig=C,C}},{key:"setSize",value:function(d,p){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,C=d.type=="video"?this.checkSize(p.videosWidth):this.checkSize(p.width),D=this.checkSize(p.height);return d.width=q(d,"width")&&d.width!==""?this.checkSize(d.width):C,d.height=q(d,"height")&&d.height!==""?this.checkSize(d.height):D,b&&d.type=="image"&&(d._hasCustomWidth=!!b.dataset.width,d._hasCustomHeight=!!b.dataset.height),d}},{key:"checkSize",value:function(d){return ie(d)?"".concat(d,"px"):d}},{key:"sanitizeValue",value:function(d){return d!=="true"&&d!=="false"?d:d==="true"}}]),De=r(function d(p,b,C){t(this,d),this.element=p,this.instance=b,this.index=C},[{key:"setContent",value:function(){var d=this,p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,b=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(x(p,"loaded"))return!1;var C=this.instance.settings,D=this.slideConfig,N=A();T(C.beforeSlideLoad)&&C.beforeSlideLoad({index:this.index,slide:p,player:!1});var V=D.type,z=D.descPosition,ee=p.querySelector(".gslide-media"),Q=p.querySelector(".gslide-title"),j=p.querySelector(".gslide-desc"),te=p.querySelector(".gdesc-inner"),fe=b,le="gSlideTitle_"+this.index,re="gSlideDesc_"+this.index;if(T(C.afterSlideLoad)&&(fe=function(){T(b)&&b(),C.afterSlideLoad({index:d.index,slide:p,player:d.instance.getSlidePlayerInstance(d.index)})}),D.title==""&&D.description==""?te&&te.parentNode.parentNode.removeChild(te.parentNode):(Q&&D.title!==""?(Q.id=le,Q.innerHTML=D.title):Q.parentNode.removeChild(Q),j&&D.description!==""?(j.id=re,N&&C.moreLength>0?(D.smallDescription=this.slideShortDesc(D.description,C.moreLength,C.moreText),j.innerHTML=D.smallDescription,this.descriptionEvents(j,D)):j.innerHTML=D.description):j.parentNode.removeChild(j),g(ee.parentNode,"desc-".concat(z)),g(te.parentNode,"description-".concat(z))),g(ee,"gslide-".concat(V)),g(p,"loaded"),V!=="video"){if(V!=="external")return V==="inline"?(he.apply(this.instance,[p,D,this.index,fe]),void(D.draggable&&new Ye({dragEl:p.querySelector(".gslide-inline"),toleranceX:C.dragToleranceX,toleranceY:C.dragToleranceY,slide:p,instance:this.instance}))):void(V!=="image"?T(fe)&&fe():Xe(p,D,this.index,function(){var Ee=p.querySelector("img");D.draggable&&new Ye({dragEl:Ee,toleranceX:C.dragToleranceX,toleranceY:C.dragToleranceY,slide:p,instance:d.instance}),D.zoomable&&Ee.naturalWidth>Ee.offsetWidth&&(g(Ee,"zoomable"),new Le(Ee,p,function(){d.instance.resize()})),T(fe)&&fe()}));be.apply(this,[p,D,this.index,fe])}else J.apply(this.instance,[p,D,this.index,fe])}},{key:"slideShortDesc",value:function(d){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:50,b=arguments.length>2&&arguments[2]!==void 0&&arguments[2],C=document.createElement("div");C.innerHTML=d;var D=C.innerText,N=b;if((d=D.trim()).length<=p)return d;var V=d.substr(0,p-1);return N?(C=null,V+'... <a href="#" class="desc-more">'+b+"</a>"):V}},{key:"descriptionEvents",value:function(d,p){var b=this,C=d.querySelector(".desc-more");if(!C)return!1;m("click",{onElement:C,withCallback:function(D,N){D.preventDefault();var V=document.body,z=E(N,".gslide-desc");if(!z)return!1;z.innerHTML=p.description,g(V,"gdesc-open");var ee=m("click",{onElement:[V,E(z,".gslide-description")],withCallback:function(Q,j){Q.target.nodeName.toLowerCase()!=="a"&&(v(V,"gdesc-open"),g(V,"gdesc-closed"),z.innerHTML=p.smallDescription,b.descriptionEvents(z,p),setTimeout(function(){v(V,"gdesc-closed")},400),ee.destroy())}})}})}},{key:"create",value:function(){return S(this.instance.settings.slideHTML)}},{key:"getConfig",value:function(){O(this.element)||this.element.hasOwnProperty("draggable")||(this.element.draggable=this.instance.settings.draggable);var d=new Ae(this.instance.settings.slideExtraAttributes);return this.slideConfig=d.parseConfig(this.element,this.instance.settings),this.slideConfig}}]);function Ze(d){return Math.sqrt(d.x*d.x+d.y*d.y)}function Ge(d,p){var b=function(C,D){var N=Ze(C)*Ze(D);if(N===0)return 0;var V=function(z,ee){return z.x*ee.x+z.y*ee.y}(C,D)/N;return V>1&&(V=1),Math.acos(V)}(d,p);return function(C,D){return C.x*D.y-D.x*C.y}(d,p)>0&&(b*=-1),180*b/Math.PI}var F=r(function d(p){t(this,d),this.handlers=[],this.el=p},[{key:"add",value:function(d){this.handlers.push(d)}},{key:"del",value:function(d){d||(this.handlers=[]);for(var p=this.handlers.length;p>=0;p--)this.handlers[p]===d&&this.handlers.splice(p,1)}},{key:"dispatch",value:function(){for(var d=0,p=this.handlers.length;d<p;d++){var b=this.handlers[d];typeof b=="function"&&b.apply(this.el,arguments)}}}]);function Ue(d,p){var b=new F(d);return b.add(p),b}var we=r(function d(p,b){t(this,d),this.element=typeof p=="string"?document.querySelector(p):p,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var C=function(){};this.rotate=Ue(this.element,b.rotate||C),this.touchStart=Ue(this.element,b.touchStart||C),this.multipointStart=Ue(this.element,b.multipointStart||C),this.multipointEnd=Ue(this.element,b.multipointEnd||C),this.pinch=Ue(this.element,b.pinch||C),this.swipe=Ue(this.element,b.swipe||C),this.tap=Ue(this.element,b.tap||C),this.doubleTap=Ue(this.element,b.doubleTap||C),this.longTap=Ue(this.element,b.longTap||C),this.singleTap=Ue(this.element,b.singleTap||C),this.pressMove=Ue(this.element,b.pressMove||C),this.twoFingerPressMove=Ue(this.element,b.twoFingerPressMove||C),this.touchMove=Ue(this.element,b.touchMove||C),this.touchEnd=Ue(this.element,b.touchEnd||C),this.touchCancel=Ue(this.element,b.touchCancel||C),this.translateContainer=this.element,this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}},[{key:"start",value:function(d){if(d.touches)if(d.target&&d.target.nodeName&&["a","button","input"].indexOf(d.target.nodeName.toLowerCase())>=0)console.log("ignore drag for this touched element",d.target.nodeName.toLowerCase());else{this.now=Date.now(),this.x1=d.touches[0].pageX,this.y1=d.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(d,this.element),this.preTapPosition.x!==null&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var p=this.preV;if(d.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var b={x:d.touches[1].pageX-this.x1,y:d.touches[1].pageY-this.y1};p.x=b.x,p.y=b.y,this.pinchStartLen=Ze(p),this.multipointStart.dispatch(d,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout((function(){this.longTap.dispatch(d,this.element),this._preventTap=!0}).bind(this),750)}}},{key:"move",value:function(d){if(d.touches){var p=this.preV,b=d.touches.length,C=d.touches[0].pageX,D=d.touches[0].pageY;if(this.isDoubleTap=!1,b>1){var N=d.touches[1].pageX,V=d.touches[1].pageY,z={x:d.touches[1].pageX-C,y:d.touches[1].pageY-D};p.x!==null&&(this.pinchStartLen>0&&(d.zoom=Ze(z)/this.pinchStartLen,this.pinch.dispatch(d,this.element)),d.angle=Ge(z,p),this.rotate.dispatch(d,this.element)),p.x=z.x,p.y=z.y,this.x2!==null&&this.sx2!==null?(d.deltaX=(C-this.x2+N-this.sx2)/2,d.deltaY=(D-this.y2+V-this.sy2)/2):(d.deltaX=0,d.deltaY=0),this.twoFingerPressMove.dispatch(d,this.element),this.sx2=N,this.sy2=V}else{if(this.x2!==null){d.deltaX=C-this.x2,d.deltaY=D-this.y2;var ee=Math.abs(this.x1-this.x2),Q=Math.abs(this.y1-this.y2);(ee>10||Q>10)&&(this._preventTap=!0)}else d.deltaX=0,d.deltaY=0;this.pressMove.dispatch(d,this.element)}this.touchMove.dispatch(d,this.element),this._cancelLongTap(),this.x2=C,this.y2=D,b>1&&d.preventDefault()}}},{key:"end",value:function(d){if(d.changedTouches){this._cancelLongTap();var p=this;d.touches.length<2&&(this.multipointEnd.dispatch(d,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(d.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){p.swipe.dispatch(d,p.element)},0)):(this.tapTimeout=setTimeout(function(){p._preventTap||p.tap.dispatch(d,p.element),p.isDoubleTap&&(p.doubleTap.dispatch(d,p.element),p.isDoubleTap=!1)},0),p.isDoubleTap||(p.singleTapTimeout=setTimeout(function(){p.singleTap.dispatch(d,p.element)},250))),this.touchEnd.dispatch(d,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(d){this.cancelAll(),this.touchCancel.dispatch(d,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(d,p,b,C){return Math.abs(d-p)>=Math.abs(b-C)?d-p>0?"Left":"Right":b-C>0?"Up":"Down"}},{key:"on",value:function(d,p){this[d]&&this[d].add(p)}},{key:"off",value:function(d,p){this[d]&&this[d].del(p)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]);function He(d){var p=function(){var V,z=document.createElement("fakeelement"),ee={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(V in ee)if(z.style[V]!==void 0)return ee[V]}(),b=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,C=x(d,"gslide-media")?d:d.querySelector(".gslide-media"),D=E(C,".ginner-container"),N=d.querySelector(".gslide-description");b>769&&(C=D),g(C,"greset"),l(C,"translate3d(0, 0, 0)"),m(p,{onElement:C,once:!0,withCallback:function(V,z){v(C,"greset")}}),C.style.opacity="",N&&(N.style.opacity="")}function Me(d){if(d.events.hasOwnProperty("touch"))return!1;var p,b,C,D=M(),N=D.width,V=D.height,z=!1,ee=null,Q=null,j=null,te=!1,fe=1,le=1,re=!1,Ee=!1,B=null,se=null,de=null,me=null,oe=0,ne=0,xe=!1,Ne=!1,Ve={},Be={},zt=0,Rt=0,vr=document.getElementById("glightbox-slider"),kt=document.querySelector(".goverlay"),$i=new we(vr,{touchStart:function(Je){if(z=!0,(x(Je.targetTouches[0].target,"ginner-container")||E(Je.targetTouches[0].target,".gslide-desc")||Je.targetTouches[0].target.nodeName.toLowerCase()=="a")&&(z=!1),E(Je.targetTouches[0].target,".gslide-inline")&&!x(Je.targetTouches[0].target.parentNode,"gslide-inline")&&(z=!1),z){if(Be=Je.targetTouches[0],Ve.pageX=Je.targetTouches[0].pageX,Ve.pageY=Je.targetTouches[0].pageY,zt=Je.targetTouches[0].clientX,Rt=Je.targetTouches[0].clientY,ee=d.activeSlide,Q=ee.querySelector(".gslide-media"),C=ee.querySelector(".gslide-inline"),j=null,x(Q,"gslide-image")&&(j=Q.querySelector("img")),(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>769&&(Q=ee.querySelector(".ginner-container")),v(kt,"greset"),Je.pageX>20&&Je.pageX<window.innerWidth-20)return;Je.preventDefault()}},touchMove:function(Je){if(z&&(Be=Je.targetTouches[0],!re&&!Ee)){if(C&&C.offsetHeight>V){var mt=Ve.pageX-Be.pageX;if(Math.abs(mt)<=13)return!1}te=!0;var Lt,Hn=Je.targetTouches[0].clientX,oi=Je.targetTouches[0].clientY,_r=zt-Hn,yr=Rt-oi;if(Math.abs(_r)>Math.abs(yr)?(xe=!1,Ne=!0):(Ne=!1,xe=!0),p=Be.pageX-Ve.pageX,oe=100*p/N,b=Be.pageY-Ve.pageY,ne=100*b/V,xe&&j&&(Lt=1-Math.abs(b)/V,kt.style.opacity=Lt,d.settings.touchFollowAxis&&(oe=0)),Ne&&(Lt=1-Math.abs(p)/N,Q.style.opacity=Lt,d.settings.touchFollowAxis&&(ne=0)),!j)return l(Q,"translate3d(".concat(oe,"%, 0, 0)"));l(Q,"translate3d(".concat(oe,"%, ").concat(ne,"%, 0)"))}},touchEnd:function(){if(z){if(te=!1,Ee||re)return de=B,void(me=se);var Je=Math.abs(parseInt(ne)),mt=Math.abs(parseInt(oe));if(!(Je>29&&j))return Je<29&&mt<25?(g(kt,"greset"),kt.style.opacity=1,He(Q)):void 0;d.close()}},multipointEnd:function(){setTimeout(function(){re=!1},50)},multipointStart:function(){re=!0,fe=le||1},pinch:function(Je){if(!j||te)return!1;re=!0,j.scaleX=j.scaleY=fe*Je.zoom;var mt=fe*Je.zoom;if(Ee=!0,mt<=1)return Ee=!1,mt=1,me=null,de=null,B=null,se=null,void j.setAttribute("style","");mt>4.5&&(mt=4.5),j.style.transform="scale3d(".concat(mt,", ").concat(mt,", 1)"),le=mt},pressMove:function(Je){if(Ee&&!re){var mt=Be.pageX-Ve.pageX,Lt=Be.pageY-Ve.pageY;de&&(mt+=de),me&&(Lt+=me),B=mt,se=Lt;var Hn="translate3d(".concat(mt,"px, ").concat(Lt,"px, 0)");le&&(Hn+=" scale3d(".concat(le,", ").concat(le,", 1)")),l(j,Hn)}},swipe:function(Je){if(!Ee)if(re)re=!1;else{if(Je.direction=="Left"){if(d.index==d.elements.length-1)return He(Q);d.nextSlide()}if(Je.direction=="Right"){if(d.index==0)return He(Q);d.prevSlide()}}}});d.events.touch=$i}var Qe=A(),ye=A()!==null||document.createTouch!==void 0||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,Ie=document.getElementsByTagName("html")[0],st={selector:".glightbox",elements:null,skin:"clean",theme:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,autofocusVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,slideExtraAttributes:null,onOpen:null,onClose:null,loop:!1,zoomable:!0,draggable:!0,dragAutoSnap:!1,dragToleranceX:40,dragToleranceY:65,preload:!0,oneSlidePerOpen:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plugins:!1,plyr:{css:"https://cdn.plyr.io/3.6.12/plyr.css",js:"https://cdn.plyr.io/3.6.12/plyr.js",config:{ratio:"16:9",fullscreen:{enabled:!0,iosNative:!0},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoom",closeEffect:"zoom",slideEffect:"slide",moreText:"See more",moreLength:60,cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slideBack:{in:"slideInLeft",out:"slideOutRight"},none:{in:"none",out:"none"}},svg:{close:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'},slideHTML:`<div class="gslide">
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
</div>`},rt=r(function d(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t(this,d),this.customOptions=p,this.settings=c(st,p),this.effectsClasses=this.getAnimationClasses(),this.videoPlayers={},this.apiEvents=[],this.fullElementsList=!1},[{key:"init",value:function(){var d=this,p=this.getSelector();p&&(this.baseEvents=m("click",{onElement:p,withCallback:function(b,C){b.preventDefault(),d.open(C)}})),this.elements=this.getElements()}},{key:"open",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(this.elements.length===0)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var b=ie(p)?p:this.settings.startAt;if(O(d)){var C=d.getAttribute("data-gallery");C&&(this.fullElementsList=this.elements,this.elements=this.getGalleryElements(this.elements,C)),k(b)&&(b=this.getElementIndex(d))<0&&(b=0)}ie(b)||(b=0),this.build(),h(this.overlay,this.settings.openEffect==="none"?"none":this.settings.cssEfects.fade.in);var D=document.body,N=window.innerWidth-document.documentElement.clientWidth;if(N>0){var V=document.createElement("style");V.type="text/css",V.className="gcss-styles",V.innerText=".gscrollbar-fixer {margin-right: ".concat(N,"px}"),document.head.appendChild(V),g(D,"gscrollbar-fixer")}g(D,"glightbox-open"),g(Ie,"glightbox-open"),Qe&&(g(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(b,!0),this.elements.length===1?(g(this.prevButton,"glightbox-button-hidden"),g(this.nextButton,"glightbox-button-hidden")):(v(this.prevButton,"glightbox-button-hidden"),v(this.nextButton,"glightbox-button-hidden")),this.lightboxOpen=!0,this.trigger("open"),T(this.settings.onOpen)&&this.settings.onOpen(),ye&&this.settings.touchNavigation&&Me(this),this.settings.keyboardNavigation&&_e(this)}},{key:"openAt",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.open(null,d)}},{key:"showSlide",value:function(){var d=this,p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,b=arguments.length>1&&arguments[1]!==void 0&&arguments[1];_(this.loader),this.index=parseInt(p);var C=this.slidesContainer.querySelector(".current");C&&v(C,"current"),this.slideAnimateOut();var D=this.slidesContainer.querySelectorAll(".gslide")[p];if(x(D,"loaded"))this.slideAnimateIn(D,b),y(this.loader);else{_(this.loader);var N=this.elements[p],V={index:this.index,slide:D,slideNode:D,slideConfig:N.slideConfig,slideIndex:this.index,trigger:N.node,player:null};this.trigger("slide_before_load",V),N.instance.setContent(D,function(){y(d.loader),d.resize(),d.slideAnimateIn(D,b),d.trigger("slide_after_load",V)})}this.slideDescription=D.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&x(this.slideDescription.parentNode,"gslide-media"),this.settings.preload&&(this.preloadSlide(p+1),this.preloadSlide(p-1)),this.updateNavigationClasses(),this.activeSlide=D}},{key:"preloadSlide",value:function(d){var p=this;if(d<0||d>this.elements.length-1||k(this.elements[d]))return!1;var b=this.slidesContainer.querySelectorAll(".gslide")[d];if(x(b,"loaded"))return!1;var C=this.elements[d],D=C.type,N={index:d,slide:b,slideNode:b,slideConfig:C.slideConfig,slideIndex:d,trigger:C.node,player:null};this.trigger("slide_before_load",N),D==="video"||D==="external"?setTimeout(function(){C.instance.setContent(b,function(){p.trigger("slide_after_load",N)})},200):C.instance.setContent(b,function(){p.trigger("slide_after_load",N)})}},{key:"prevSlide",value:function(){this.goToSlide(this.index-1)}},{key:"nextSlide",value:function(){this.goToSlide(this.index+1)}},{key:"goToSlide",value:function(){var d=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,!this.loop()&&(d<0||d>this.elements.length-1))return!1;d<0?d=this.elements.length-1:d>=this.elements.length&&(d=0),this.showSlide(d)}},{key:"insertSlide",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1;p<0&&(p=this.elements.length);var b=new De(d,this,p),C=b.getConfig(),D=c({},C),N=b.create(),V=this.elements.length-1;D.index=p,D.node=!1,D.instance=b,D.slideConfig=C,this.elements.splice(p,0,D);var z=null,ee=null;if(this.slidesContainer){if(p>V)this.slidesContainer.appendChild(N);else{var Q=this.slidesContainer.querySelectorAll(".gslide")[p];this.slidesContainer.insertBefore(N,Q)}(this.settings.preload&&this.index==0&&p==0||this.index-1==p||this.index+1==p)&&this.preloadSlide(p),this.index===0&&p===0&&(this.index=1),this.updateNavigationClasses(),z=this.slidesContainer.querySelectorAll(".gslide")[p],ee=this.getSlidePlayerInstance(p),D.slideNode=z}this.trigger("slide_inserted",{index:p,slide:z,slideNode:z,slideConfig:C,slideIndex:p,trigger:null,player:ee}),T(this.settings.slideInserted)&&this.settings.slideInserted({index:p,slide:z,player:ee})}},{key:"removeSlide",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;if(d<0||d>this.elements.length-1)return!1;var p=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[d];p&&(this.getActiveSlideIndex()==d&&(d==this.elements.length-1?this.prevSlide():this.nextSlide()),p.parentNode.removeChild(p)),this.elements.splice(d,1),this.trigger("slide_removed",d),T(this.settings.slideRemoved)&&this.settings.slideRemoved(d)}},{key:"slideAnimateIn",value:function(d,p){var b=this,C=d.querySelector(".gslide-media"),D=d.querySelector(".gslide-description"),N={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlide,slideConfig:k(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:k(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},V={index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideConfig:this.elements[this.index].slideConfig,slideIndex:this.index,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)};if(C.offsetWidth>0&&D&&(y(D),D.style.display=""),v(d,this.effectsClasses),p)h(d,this.settings.cssEfects[this.settings.openEffect].in,function(){b.settings.autoplayVideos&&b.slidePlayerPlay(d),b.trigger("slide_changed",{prev:N,current:V}),T(b.settings.afterSlideChange)&&b.settings.afterSlideChange.apply(b,[N,V])});else{var z=this.settings.slideEffect,ee=z!=="none"?this.settings.cssEfects[z].in:z;this.prevActiveSlideIndex>this.index&&this.settings.slideEffect=="slide"&&(ee=this.settings.cssEfects.slideBack.in),h(d,ee,function(){b.settings.autoplayVideos&&b.slidePlayerPlay(d),b.trigger("slide_changed",{prev:N,current:V}),T(b.settings.afterSlideChange)&&b.settings.afterSlideChange.apply(b,[N,V])})}setTimeout(function(){b.resize(d)},100),g(d,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var d=this.prevActiveSlide;v(d,this.effectsClasses),g(d,"prev");var p=this.settings.slideEffect,b=p!=="none"?this.settings.cssEfects[p].out:p;this.slidePlayerPause(d),this.trigger("slide_before_change",{prev:{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlideIndex,slideConfig:k(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:k(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},current:{index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideIndex:this.index,slideConfig:this.elements[this.index].slideConfig,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)}}),T(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&this.settings.slideEffect=="slide"&&(b=this.settings.cssEfects.slideBack.out),h(d,b,function(){var C=d.querySelector(".ginner-container"),D=d.querySelector(".gslide-media"),N=d.querySelector(".gslide-description");C.style.transform="",D.style.transform="",v(D,"greset"),D.style.opacity="",N&&(N.style.opacity=""),v(d,"prev")})}},{key:"getAllPlayers",value:function(){return this.videoPlayers}},{key:"getSlidePlayerInstance",value:function(d){var p="gvideo"+d,b=this.getAllPlayers();return!(!q(b,p)||!b[p])&&b[p]}},{key:"stopSlideVideo",value:function(d){if(O(d)){var p=d.querySelector(".gvideo-wrapper");p&&(d=p.getAttribute("data-index"))}console.log("stopSlideVideo is deprecated, use slidePlayerPause");var b=this.getSlidePlayerInstance(d);b&&b.playing&&b.pause()}},{key:"slidePlayerPause",value:function(d){if(O(d)){var p=d.querySelector(".gvideo-wrapper");p&&(d=p.getAttribute("data-index"))}var b=this.getSlidePlayerInstance(d);b&&b.playing&&b.pause()}},{key:"playSlideVideo",value:function(d){if(O(d)){var p=d.querySelector(".gvideo-wrapper");p&&(d=p.getAttribute("data-index"))}console.log("playSlideVideo is deprecated, use slidePlayerPlay");var b=this.getSlidePlayerInstance(d);b&&!b.playing&&b.play()}},{key:"slidePlayerPlay",value:function(d){var p;if(!Qe||(p=this.settings.plyr.config)!==null&&p!==void 0&&p.muted){if(O(d)){var b=d.querySelector(".gvideo-wrapper");b&&(d=b.getAttribute("data-index"))}var C=this.getSlidePlayerInstance(d);C&&!C.playing&&(C.play(),this.settings.autofocusVideos&&C.elements.container.focus())}}},{key:"setElements",value:function(d){var p=this;this.settings.elements=!1;var b=[];d&&d.length&&u(d,function(C,D){var N=new De(C,p,D),V=N.getConfig(),z=c({},V);z.slideConfig=V,z.instance=N,z.index=D,b.push(z)}),this.elements=b,this.lightboxOpen&&(this.slidesContainer.innerHTML="",this.elements.length&&(u(this.elements,function(){var C=S(p.settings.slideHTML);p.slidesContainer.appendChild(C)}),this.showSlide(0,!0)))}},{key:"getElementIndex",value:function(d){var p=!1;return u(this.elements,function(b,C){if(q(b,"node")&&b.node==d)return p=C,!0}),p}},{key:"getElements",value:function(){var d=this,p=[];this.elements=this.elements?this.elements:[],!k(this.settings.elements)&&U(this.settings.elements)&&this.settings.elements.length&&u(this.settings.elements,function(C,D){var N=new De(C,d,D),V=N.getConfig(),z=c({},V);z.node=!1,z.index=D,z.instance=N,z.slideConfig=V,p.push(z)});var b=!1;return this.getSelector()&&(b=document.querySelectorAll(this.getSelector())),b&&u(b,function(C,D){var N=new De(C,d,D),V=N.getConfig(),z=c({},V);z.node=C,z.index=D,z.instance=N,z.slideConfig=V,z.gallery=C.getAttribute("data-gallery"),p.push(z)}),p}},{key:"getGalleryElements",value:function(d,p){return d.filter(function(b){return b.gallery==p})}},{key:"getSelector",value:function(){return!this.settings.elements&&(this.settings.selector&&this.settings.selector.substring(0,5)=="data-"?"*[".concat(this.settings.selector,"]"):this.settings.selector)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var d=[];for(var p in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(p)){var b=this.settings.cssEfects[p];d.push("g".concat(b.in)),d.push("g".concat(b.out))}return d.join(" ")}},{key:"build",value:function(){var d=this;if(this.built)return!1;var p=document.body.childNodes,b=[];u(p,function(Q){Q.parentNode==document.body&&Q.nodeName.charAt(0)!=="#"&&Q.hasAttribute&&!Q.hasAttribute("aria-hidden")&&(b.push(Q),Q.setAttribute("aria-hidden","true"))});var C=q(this.settings.svg,"next")?this.settings.svg.next:"",D=q(this.settings.svg,"prev")?this.settings.svg.prev:"",N=q(this.settings.svg,"close")?this.settings.svg.close:"",V=this.settings.lightboxHTML;V=S(V=(V=(V=V.replace(/{nextSVG}/g,C)).replace(/{prevSVG}/g,D)).replace(/{closeSVG}/g,N)),document.body.appendChild(V);var z=document.getElementById("glightbox-body");this.modal=z;var ee=z.querySelector(".gclose");this.prevButton=z.querySelector(".gprev"),this.nextButton=z.querySelector(".gnext"),this.overlay=z.querySelector(".goverlay"),this.loader=z.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.bodyHiddenChildElms=b,this.events={},g(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&ee&&(this.events.close=m("click",{onElement:ee,withCallback:function(Q,j){Q.preventDefault(),d.close()}})),ee&&!this.settings.closeButton&&ee.parentNode.removeChild(ee),this.nextButton&&(this.events.next=m("click",{onElement:this.nextButton,withCallback:function(Q,j){Q.preventDefault(),d.nextSlide()}})),this.prevButton&&(this.events.prev=m("click",{onElement:this.prevButton,withCallback:function(Q,j){Q.preventDefault(),d.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=m("click",{onElement:z,withCallback:function(Q,j){d.preventOutsideClick||x(document.body,"glightbox-mobile")||E(Q.target,".ginner-container")||E(Q.target,".gbtn")||x(Q.target,"gnext")||x(Q.target,"gprev")||d.close()}})),u(this.elements,function(Q,j){d.slidesContainer.appendChild(Q.instance.create()),Q.slideNode=d.slidesContainer.querySelectorAll(".gslide")[j]}),ye&&g(document.body,"glightbox-touch"),this.events.resize=m("resize",{onElement:window,withCallback:function(){d.resize()}}),this.built=!0}},{key:"resize",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if((d=d||this.activeSlide)&&!x(d,"zoomed")){var p=M(),b=d.querySelector(".gvideo-wrapper"),C=d.querySelector(".gslide-image"),D=this.slideDescription,N=p.width,V=p.height;if(N<=768?g(document.body,"glightbox-mobile"):v(document.body,"glightbox-mobile"),b||C){var z=!1;if(D&&(x(D,"description-bottom")||x(D,"description-top"))&&!x(D,"gabsolute")&&(z=!0),C){if(N<=768)C.querySelector("img");else if(z){var ee,Q,j=D.offsetHeight,te=C.querySelector("img"),fe=(ee=this.elements[this.index])===null||ee===void 0?void 0:ee.node,le="100vh";fe&&(le=(Q=fe.getAttribute("data-height"))!==null&&Q!==void 0?Q:le),te.setAttribute("style","max-height: calc(".concat(le," - ").concat(j,"px)")),D.setAttribute("style","max-width: ".concat(te.offsetWidth,"px;"))}}if(b){var re=q(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"";if(!re){var Ee=b.clientWidth,B=b.clientHeight,se=Ee/B;re="".concat(Ee/se,":").concat(B/se)}var de=re.split(":"),me=this.settings.videosWidth,oe=this.settings.videosWidth,ne=(oe=ie(me)||me.indexOf("px")!==-1?parseInt(me):me.indexOf("vw")!==-1?N*parseInt(me)/100:me.indexOf("vh")!==-1?V*parseInt(me)/100:me.indexOf("%")!==-1?N*parseInt(me)/100:parseInt(b.clientWidth))/(parseInt(de[0])/parseInt(de[1]));if(ne=Math.floor(ne),z&&(V-=D.offsetHeight),oe>N||ne>V||V<ne&&N>oe){var xe=b.offsetWidth,Ne=b.offsetHeight,Ve=V/Ne,Be={width:xe*Ve,height:Ne*Ve};b.parentNode.setAttribute("style","max-width: ".concat(Be.width,"px")),z&&D.setAttribute("style","max-width: ".concat(Be.width,"px;"))}else b.parentNode.style.maxWidth="".concat(me),z&&D.setAttribute("style","max-width: ".concat(me,";"))}}}}},{key:"reload",value:function(){this.init()}},{key:"updateNavigationClasses",value:function(){var d=this.loop();v(this.nextButton,"disabled"),v(this.prevButton,"disabled"),this.index==0&&this.elements.length-1==0?(g(this.prevButton,"disabled"),g(this.nextButton,"disabled")):this.index!==0||d?this.index!==this.elements.length-1||d||g(this.nextButton,"disabled"):g(this.prevButton,"disabled")}},{key:"loop",value:function(){var d=q(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return d=q(this.settings,"loop")?this.settings.loop:d,d}},{key:"close",value:function(){var d=this;if(!this.lightboxOpen){if(this.events){for(var p in this.events)this.events.hasOwnProperty(p)&&this.events[p].destroy();this.events=null}return!1}if(this.closing)return!1;this.closing=!0,this.slidePlayerPause(this.activeSlide),this.fullElementsList&&(this.elements=this.fullElementsList),this.bodyHiddenChildElms.length&&u(this.bodyHiddenChildElms,function(b){b.removeAttribute("aria-hidden")}),g(this.modal,"glightbox-closing"),h(this.overlay,this.settings.openEffect=="none"?"none":this.settings.cssEfects.fade.out),h(this.activeSlide,this.settings.cssEfects[this.settings.closeEffect].out,function(){if(d.activeSlide=null,d.prevActiveSlideIndex=null,d.prevActiveSlide=null,d.built=!1,d.events){for(var b in d.events)d.events.hasOwnProperty(b)&&d.events[b].destroy();d.events=null}var C=document.body;v(Ie,"glightbox-open"),v(C,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),d.modal.parentNode.removeChild(d.modal),d.trigger("close"),T(d.settings.onClose)&&d.settings.onClose();var D=document.querySelector(".gcss-styles");D&&D.parentNode.removeChild(D),d.lightboxOpen=!1,d.closing=null})}},{key:"destroy",value:function(){this.close(),this.clearAllEvents(),this.baseEvents&&this.baseEvents.destroy()}},{key:"on",value:function(d,p){var b=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(!d||!T(p))throw new TypeError("Event name and callback must be defined");this.apiEvents.push({evt:d,once:b,callback:p})}},{key:"once",value:function(d,p){this.on(d,p,!0)}},{key:"trigger",value:function(d){var p=this,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,C=[];u(this.apiEvents,function(D,N){var V=D.evt,z=D.once,ee=D.callback;V==d&&(ee(b),z&&C.push(N))}),C.length&&u(C,function(D){return p.apiEvents.splice(D,1)})}},{key:"clearAllEvents",value:function(){this.apiEvents.splice(0,this.apiEvents.length)}},{key:"version",value:function(){return"3.3.1"}}]);return function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=new rt(d);return p.init(),p}})}(Qr)),Qr.exports}var xS=yS();const SS=xa(xS);var _o={exports:{}},yo={exports:{}},es={exports:{}},ES=es.exports,Yl;function Iu(){return Yl||(Yl=1,function(i){(function(e,t){i.exports?i.exports=t():e.EvEmitter=t()})(typeof window<"u"?window:ES,function(){function e(){}var t=e.prototype;return t.on=function(n,r){if(!(!n||!r)){var s=this._events=this._events||{},o=s[n]=s[n]||[];return o.indexOf(r)==-1&&o.push(r),this}},t.once=function(n,r){if(!(!n||!r)){this.on(n,r);var s=this._onceEvents=this._onceEvents||{},o=s[n]=s[n]||{};return o[r]=!0,this}},t.off=function(n,r){var s=this._events&&this._events[n];if(!(!s||!s.length)){var o=s.indexOf(r);return o!=-1&&s.splice(o,1),this}},t.emitEvent=function(n,r){var s=this._events&&this._events[n];if(!(!s||!s.length)){s=s.slice(0),r=r||[];for(var o=this._onceEvents&&this._onceEvents[n],a=0;a<s.length;a++){var c=s[a],u=o&&o[c];u&&(this.off(n,c),delete o[c]),c.apply(this,r)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e})}(es)),es.exports}var xo={exports:{}};/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */var jl;function gr(){return jl||(jl=1,function(i){(function(e,t){i.exports?i.exports=t():e.getSize=t()})(window,function(){function t(v){var x=parseFloat(v),E=v.indexOf("%")==-1&&!isNaN(x);return E&&x}function n(){}var r=typeof console>"u"?n:function(v){console.error(v)},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],o=s.length;function a(){for(var v={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},x=0;x<o;x++){var E=s[x];v[E]=0}return v}function c(v){var x=getComputedStyle(v);return x||r("Style returned "+x+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),x}var u=!1,f;function m(){if(!u){u=!0;var v=document.createElement("div");v.style.width="200px",v.style.padding="1px 2px 3px 4px",v.style.borderStyle="solid",v.style.borderWidth="1px 2px 3px 4px",v.style.boxSizing="border-box";var x=document.body||document.documentElement;x.appendChild(v);var E=c(v);f=Math.round(t(E.width))==200,g.isBoxSizeOuter=f,x.removeChild(v)}}function g(v){if(m(),typeof v=="string"&&(v=document.querySelector(v)),!(!v||typeof v!="object"||!v.nodeType)){var x=c(v);if(x.display=="none")return a();var E={};E.width=v.offsetWidth,E.height=v.offsetHeight;for(var h=E.isBorderBox=x.boxSizing=="border-box",l=0;l<o;l++){var _=s[l],y=x[_],S=parseFloat(y);E[_]=isNaN(S)?0:S}var M=E.paddingLeft+E.paddingRight,L=E.paddingTop+E.paddingBottom,P=E.marginLeft+E.marginRight,I=E.marginTop+E.marginBottom,A=E.borderLeftWidth+E.borderRightWidth,T=E.borderTopWidth+E.borderBottomWidth,w=h&&f,O=t(x.width);O!==!1&&(E.width=O+(w?0:M+A));var U=t(x.height);return U!==!1&&(E.height=U+(w?0:L+T)),E.innerWidth=E.width-(M+A),E.innerHeight=E.height-(L+T),E.outerWidth=E.width+P,E.outerHeight=E.height+I,E}}return g})}(xo)),xo.exports}var So={exports:{}},Eo={exports:{}},Kl;function Nu(){return Kl||(Kl=1,function(i){(function(e,t){i.exports?i.exports=t():e.matchesSelector=t()})(window,function(){var t=function(){var n=window.Element.prototype;if(n.matches)return"matches";if(n.matchesSelector)return"matchesSelector";for(var r=["webkit","moz","ms","o"],s=0;s<r.length;s++){var o=r[s],a=o+"MatchesSelector";if(n[a])return a}}();return function(r,s){return r[t](s)}})}(Eo)),Eo.exports}var Zl;function Ou(){return Zl||(Zl=1,function(i){(function(e,t){i.exports?i.exports=t(e,Nu()):e.fizzyUIUtils=t(e,e.matchesSelector)})(window,function(t,n){var r={};r.extend=function(a,c){for(var u in c)a[u]=c[u];return a},r.modulo=function(a,c){return(a%c+c)%c};var s=Array.prototype.slice;r.makeArray=function(a){if(Array.isArray(a))return a;if(a==null)return[];var c=typeof a=="object"&&typeof a.length=="number";return c?s.call(a):[a]},r.removeFrom=function(a,c){var u=a.indexOf(c);u!=-1&&a.splice(u,1)},r.getParent=function(a,c){for(;a.parentNode&&a!=document.body;)if(a=a.parentNode,n(a,c))return a},r.getQueryElement=function(a){return typeof a=="string"?document.querySelector(a):a},r.handleEvent=function(a){var c="on"+a.type;this[c]&&this[c](a)},r.filterFindElements=function(a,c){a=r.makeArray(a);var u=[];return a.forEach(function(f){if(f instanceof HTMLElement){if(!c){u.push(f);return}n(f,c)&&u.push(f);for(var m=f.querySelectorAll(c),g=0;g<m.length;g++)u.push(m[g])}}),u},r.debounceMethod=function(a,c,u){u=u||100;var f=a.prototype[c],m=c+"Timeout";a.prototype[c]=function(){var g=this[m];clearTimeout(g);var v=arguments,x=this;this[m]=setTimeout(function(){f.apply(x,v),delete x[m]},u)}},r.docReady=function(a){var c=document.readyState;c=="complete"||c=="interactive"?setTimeout(a):document.addEventListener("DOMContentLoaded",a)},r.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(c,u,f){return u+"-"+f}).toLowerCase()};var o=t.console;return r.htmlInit=function(a,c){r.docReady(function(){var u=r.toDashed(c),f="data-"+u,m=document.querySelectorAll("["+f+"]"),g=document.querySelectorAll(".js-"+u),v=r.makeArray(m).concat(r.makeArray(g)),x=f+"-options",E=t.jQuery;v.forEach(function(h){var l=h.getAttribute(f)||h.getAttribute(x),_;try{_=l&&JSON.parse(l)}catch(S){o&&o.error("Error parsing "+f+" on "+h.className+": "+S);return}var y=new a(h,_);E&&E.data(h,c,y)})})},r})}(So)),So.exports}var To={exports:{}},Jl;function TS(){return Jl||(Jl=1,function(i){(function(e,t){i.exports?i.exports=t(Iu(),gr()):(e.Outlayer={},e.Outlayer.Item=t(e.EvEmitter,e.getSize))})(window,function(t,n){function r(h){for(var l in h)return!1;return l=null,!0}var s=document.documentElement.style,o=typeof s.transition=="string"?"transition":"WebkitTransition",a=typeof s.transform=="string"?"transform":"WebkitTransform",c={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],u={transform:a,transition:o,transitionDuration:o+"Duration",transitionProperty:o+"Property",transitionDelay:o+"Delay"};function f(h,l){h&&(this.element=h,this.layout=l,this.position={x:0,y:0},this._create())}var m=f.prototype=Object.create(t.prototype);m.constructor=f,m._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},m.handleEvent=function(h){var l="on"+h.type;this[l]&&this[l](h)},m.getSize=function(){this.size=n(this.element)},m.css=function(h){var l=this.element.style;for(var _ in h){var y=u[_]||_;l[y]=h[_]}},m.getPosition=function(){var h=getComputedStyle(this.element),l=this.layout._getOption("originLeft"),_=this.layout._getOption("originTop"),y=h[l?"left":"right"],S=h[_?"top":"bottom"],M=parseFloat(y),L=parseFloat(S),P=this.layout.size;y.indexOf("%")!=-1&&(M=M/100*P.width),S.indexOf("%")!=-1&&(L=L/100*P.height),M=isNaN(M)?0:M,L=isNaN(L)?0:L,M-=l?P.paddingLeft:P.paddingRight,L-=_?P.paddingTop:P.paddingBottom,this.position.x=M,this.position.y=L},m.layoutPosition=function(){var h=this.layout.size,l={},_=this.layout._getOption("originLeft"),y=this.layout._getOption("originTop"),S=_?"paddingLeft":"paddingRight",M=_?"left":"right",L=_?"right":"left",P=this.position.x+h[S];l[M]=this.getXValue(P),l[L]="";var I=y?"paddingTop":"paddingBottom",A=y?"top":"bottom",T=y?"bottom":"top",w=this.position.y+h[I];l[A]=this.getYValue(w),l[T]="",this.css(l),this.emitEvent("layout",[this])},m.getXValue=function(h){var l=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!l?h/this.layout.size.width*100+"%":h+"px"},m.getYValue=function(h){var l=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&l?h/this.layout.size.height*100+"%":h+"px"},m._transitionTo=function(h,l){this.getPosition();var _=this.position.x,y=this.position.y,S=h==this.position.x&&l==this.position.y;if(this.setPosition(h,l),S&&!this.isTransitioning){this.layoutPosition();return}var M=h-_,L=l-y,P={};P.transform=this.getTranslate(M,L),this.transition({to:P,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},m.getTranslate=function(h,l){var _=this.layout._getOption("originLeft"),y=this.layout._getOption("originTop");return h=_?h:-h,l=y?l:-l,"translate3d("+h+"px, "+l+"px, 0)"},m.goTo=function(h,l){this.setPosition(h,l),this.layoutPosition()},m.moveTo=m._transitionTo,m.setPosition=function(h,l){this.position.x=parseFloat(h),this.position.y=parseFloat(l)},m._nonTransition=function(h){this.css(h.to),h.isCleaning&&this._removeStyles(h.to);for(var l in h.onTransitionEnd)h.onTransitionEnd[l].call(this)},m.transition=function(h){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(h);return}var l=this._transn;for(var _ in h.onTransitionEnd)l.onEnd[_]=h.onTransitionEnd[_];for(_ in h.to)l.ingProperties[_]=!0,h.isCleaning&&(l.clean[_]=!0);h.from&&(this.css(h.from),this.element.offsetHeight),this.enableTransition(h.to),this.css(h.to),this.isTransitioning=!0};function g(h){return h.replace(/([A-Z])/g,function(l){return"-"+l.toLowerCase()})}var v="opacity,"+g(a);m.enableTransition=function(){if(!this.isTransitioning){var h=this.layout.options.transitionDuration;h=typeof h=="number"?h+"ms":h,this.css({transitionProperty:v,transitionDuration:h,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(c,this,!1)}},m.onwebkitTransitionEnd=function(h){this.ontransitionend(h)},m.onotransitionend=function(h){this.ontransitionend(h)};var x={"-webkit-transform":"transform"};m.ontransitionend=function(h){if(h.target===this.element){var l=this._transn,_=x[h.propertyName]||h.propertyName;if(delete l.ingProperties[_],r(l.ingProperties)&&this.disableTransition(),_ in l.clean&&(this.element.style[h.propertyName]="",delete l.clean[_]),_ in l.onEnd){var y=l.onEnd[_];y.call(this),delete l.onEnd[_]}this.emitEvent("transitionEnd",[this])}},m.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},m._removeStyles=function(h){var l={};for(var _ in h)l[_]="";this.css(l)};var E={transitionProperty:"",transitionDuration:"",transitionDelay:""};return m.removeTransitionStyles=function(){this.css(E)},m.stagger=function(h){h=isNaN(h)?0:h,this.staggerDelay=h+"ms"},m.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},m.remove=function(){if(!o||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}this.once("transitionEnd",function(){this.removeElem()}),this.hide()},m.reveal=function(){delete this.isHidden,this.css({display:""});var h=this.layout.options,l={},_=this.getHideRevealTransitionEndProperty("visibleStyle");l[_]=this.onRevealTransitionEnd,this.transition({from:h.hiddenStyle,to:h.visibleStyle,isCleaning:!0,onTransitionEnd:l})},m.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},m.getHideRevealTransitionEndProperty=function(h){var l=this.layout.options[h];if(l.opacity)return"opacity";for(var _ in l)return _},m.hide=function(){this.isHidden=!0,this.css({display:""});var h=this.layout.options,l={},_=this.getHideRevealTransitionEndProperty("hiddenStyle");l[_]=this.onHideTransitionEnd,this.transition({from:h.visibleStyle,to:h.hiddenStyle,isCleaning:!0,onTransitionEnd:l})},m.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},m.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},f})}(To)),To.exports}/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */var Ql;function Es(){return Ql||(Ql=1,function(i){(function(e,t){i.exports?i.exports=t(e,Iu(),gr(),Ou(),TS()):e.Outlayer=t(e,e.EvEmitter,e.getSize,e.fizzyUIUtils,e.Outlayer.Item)})(window,function(t,n,r,s,o){var a=t.console,c=t.jQuery,u=function(){},f=0,m={};function g(l,_){var y=s.getQueryElement(l);if(!y){a&&a.error("Bad element for "+this.constructor.namespace+": "+(y||l));return}this.element=y,c&&(this.$element=c(this.element)),this.options=s.extend({},this.constructor.defaults),this.option(_);var S=++f;this.element.outlayerGUID=S,m[S]=this,this._create();var M=this._getOption("initLayout");M&&this.layout()}g.namespace="outlayer",g.Item=o,g.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var v=g.prototype;s.extend(v,n.prototype),v.option=function(l){s.extend(this.options,l)},v._getOption=function(l){var _=this.constructor.compatOptions[l];return _&&this.options[_]!==void 0?this.options[_]:this.options[l]},g.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},v._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),s.extend(this.element.style,this.options.containerStyle);var l=this._getOption("resize");l&&this.bindResize()},v.reloadItems=function(){this.items=this._itemize(this.element.children)},v._itemize=function(l){for(var _=this._filterFindItemElements(l),y=this.constructor.Item,S=[],M=0;M<_.length;M++){var L=_[M],P=new y(L,this);S.push(P)}return S},v._filterFindItemElements=function(l){return s.filterFindElements(l,this.options.itemSelector)},v.getItemElements=function(){return this.items.map(function(l){return l.element})},v.layout=function(){this._resetLayout(),this._manageStamps();var l=this._getOption("layoutInstant"),_=l!==void 0?l:!this._isLayoutInited;this.layoutItems(this.items,_),this._isLayoutInited=!0},v._init=v.layout,v._resetLayout=function(){this.getSize()},v.getSize=function(){this.size=r(this.element)},v._getMeasurement=function(l,_){var y=this.options[l],S;y?(typeof y=="string"?S=this.element.querySelector(y):y instanceof HTMLElement&&(S=y),this[l]=S?r(S)[_]:y):this[l]=0},v.layoutItems=function(l,_){l=this._getItemsForLayout(l),this._layoutItems(l,_),this._postLayout()},v._getItemsForLayout=function(l){return l.filter(function(_){return!_.isIgnored})},v._layoutItems=function(l,_){if(this._emitCompleteOnItems("layout",l),!(!l||!l.length)){var y=[];l.forEach(function(S){var M=this._getItemLayoutPosition(S);M.item=S,M.isInstant=_||S.isLayoutInstant,y.push(M)},this),this._processLayoutQueue(y)}},v._getItemLayoutPosition=function(){return{x:0,y:0}},v._processLayoutQueue=function(l){this.updateStagger(),l.forEach(function(_,y){this._positionItem(_.item,_.x,_.y,_.isInstant,y)},this)},v.updateStagger=function(){var l=this.options.stagger;if(l==null){this.stagger=0;return}return this.stagger=h(l),this.stagger},v._positionItem=function(l,_,y,S,M){S?l.goTo(_,y):(l.stagger(M*this.stagger),l.moveTo(_,y))},v._postLayout=function(){this.resizeContainer()},v.resizeContainer=function(){var l=this._getOption("resizeContainer");if(l){var _=this._getContainerSize();_&&(this._setContainerMeasure(_.width,!0),this._setContainerMeasure(_.height,!1))}},v._getContainerSize=u,v._setContainerMeasure=function(l,_){if(l!==void 0){var y=this.size;y.isBorderBox&&(l+=_?y.paddingLeft+y.paddingRight+y.borderLeftWidth+y.borderRightWidth:y.paddingBottom+y.paddingTop+y.borderTopWidth+y.borderBottomWidth),l=Math.max(l,0),this.element.style[_?"width":"height"]=l+"px"}},v._emitCompleteOnItems=function(l,_){var y=this;function S(){y.dispatchEvent(l+"Complete",null,[_])}var M=_.length;if(!_||!M){S();return}var L=0;function P(){L++,L==M&&S()}_.forEach(function(I){I.once(l,P)})},v.dispatchEvent=function(l,_,y){var S=_?[_].concat(y):y;if(this.emitEvent(l,S),c)if(this.$element=this.$element||c(this.element),_){var M=c.Event(_);M.type=l,this.$element.trigger(M,y)}else this.$element.trigger(l,y)},v.ignore=function(l){var _=this.getItem(l);_&&(_.isIgnored=!0)},v.unignore=function(l){var _=this.getItem(l);_&&delete _.isIgnored},v.stamp=function(l){l=this._find(l),l&&(this.stamps=this.stamps.concat(l),l.forEach(this.ignore,this))},v.unstamp=function(l){l=this._find(l),l&&l.forEach(function(_){s.removeFrom(this.stamps,_),this.unignore(_)},this)},v._find=function(l){if(l)return typeof l=="string"&&(l=this.element.querySelectorAll(l)),l=s.makeArray(l),l},v._manageStamps=function(){!this.stamps||!this.stamps.length||(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},v._getBoundingRect=function(){var l=this.element.getBoundingClientRect(),_=this.size;this._boundingRect={left:l.left+_.paddingLeft+_.borderLeftWidth,top:l.top+_.paddingTop+_.borderTopWidth,right:l.right-(_.paddingRight+_.borderRightWidth),bottom:l.bottom-(_.paddingBottom+_.borderBottomWidth)}},v._manageStamp=u,v._getElementOffset=function(l){var _=l.getBoundingClientRect(),y=this._boundingRect,S=r(l),M={left:_.left-y.left-S.marginLeft,top:_.top-y.top-S.marginTop,right:y.right-_.right-S.marginRight,bottom:y.bottom-_.bottom-S.marginBottom};return M},v.handleEvent=s.handleEvent,v.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},v.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},v.onresize=function(){this.resize()},s.debounceMethod(g,"onresize",100),v.resize=function(){!this.isResizeBound||!this.needsResizeLayout()||this.layout()},v.needsResizeLayout=function(){var l=r(this.element),_=this.size&&l;return _&&l.innerWidth!==this.size.innerWidth},v.addItems=function(l){var _=this._itemize(l);return _.length&&(this.items=this.items.concat(_)),_},v.appended=function(l){var _=this.addItems(l);_.length&&(this.layoutItems(_,!0),this.reveal(_))},v.prepended=function(l){var _=this._itemize(l);if(_.length){var y=this.items.slice(0);this.items=_.concat(y),this._resetLayout(),this._manageStamps(),this.layoutItems(_,!0),this.reveal(_),this.layoutItems(y)}},v.reveal=function(l){if(this._emitCompleteOnItems("reveal",l),!(!l||!l.length)){var _=this.updateStagger();l.forEach(function(y,S){y.stagger(S*_),y.reveal()})}},v.hide=function(l){if(this._emitCompleteOnItems("hide",l),!(!l||!l.length)){var _=this.updateStagger();l.forEach(function(y,S){y.stagger(S*_),y.hide()})}},v.revealItemElements=function(l){var _=this.getItems(l);this.reveal(_)},v.hideItemElements=function(l){var _=this.getItems(l);this.hide(_)},v.getItem=function(l){for(var _=0;_<this.items.length;_++){var y=this.items[_];if(y.element==l)return y}},v.getItems=function(l){l=s.makeArray(l);var _=[];return l.forEach(function(y){var S=this.getItem(y);S&&_.push(S)},this),_},v.remove=function(l){var _=this.getItems(l);this._emitCompleteOnItems("remove",_),!(!_||!_.length)&&_.forEach(function(y){y.remove(),s.removeFrom(this.items,y)},this)},v.destroy=function(){var l=this.element.style;l.height="",l.position="",l.width="",this.items.forEach(function(y){y.destroy()}),this.unbindResize();var _=this.element.outlayerGUID;delete m[_],delete this.element.outlayerGUID,c&&c.removeData(this.element,this.constructor.namespace)},g.data=function(l){l=s.getQueryElement(l);var _=l&&l.outlayerGUID;return _&&m[_]},g.create=function(l,_){var y=x(g);return y.defaults=s.extend({},g.defaults),s.extend(y.defaults,_),y.compatOptions=s.extend({},g.compatOptions),y.namespace=l,y.data=g.data,y.Item=x(o),s.htmlInit(y,l),c&&c.bridget&&c.bridget(l,y),y};function x(l){function _(){l.apply(this,arguments)}return _.prototype=Object.create(l.prototype),_.prototype.constructor=_,_}var E={ms:1,s:1e3};function h(l){if(typeof l=="number")return l;var _=l.match(/(^\d*\.?\d*)(\w*)/),y=_&&_[1],S=_&&_[2];if(!y.length)return 0;y=parseFloat(y);var M=E[S]||1;return y*M}return g.Item=o,g})}(yo)),yo.exports}var bo={exports:{}},ec;function bS(){return ec||(ec=1,function(i){(function(e,t){i.exports?i.exports=t(Es()):(e.Isotope=e.Isotope||{},e.Isotope.Item=t(e.Outlayer))})(window,function(t){function n(){t.Item.apply(this,arguments)}var r=n.prototype=Object.create(t.Item.prototype),s=r._create;r._create=function(){this.id=this.layout.itemGUID++,s.call(this),this.sortData={}},r.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,c=this.layout._sorters;for(var u in a){var f=c[u];this.sortData[u]=f(this.element,this)}}};var o=r.destroy;return r.destroy=function(){o.apply(this,arguments),this.css({display:""})},n})}(bo)),bo.exports}var Mo={exports:{}},tc;function Ts(){return tc||(tc=1,function(i){(function(e,t){i.exports?i.exports=t(gr(),Es()):(e.Isotope=e.Isotope||{},e.Isotope.LayoutMode=t(e.getSize,e.Outlayer))})(window,function(t,n){function r(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}var s=r.prototype,o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return o.forEach(function(a){s[a]=function(){return n.prototype[a].apply(this.isotope,arguments)}}),s.needsVerticalResizeLayout=function(){var a=t(this.isotope.element),c=this.isotope.size&&a;return c&&a.innerHeight!=this.isotope.size.innerHeight},s._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},s.getColumnWidth=function(){this.getSegmentSize("column","Width")},s.getRowHeight=function(){this.getSegmentSize("row","Height")},s.getSegmentSize=function(a,c){var u=a+c,f="outer"+c;if(this._getMeasurement(u,f),!this[u]){var m=this.getFirstItemSize();this[u]=m&&m[f]||this.isotope.size["inner"+c]}},s.getFirstItemSize=function(){var a=this.isotope.filteredItems[0];return a&&a.element&&t(a.element)},s.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},s.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},r.modes={},r.create=function(a,c){function u(){r.apply(this,arguments)}return u.prototype=Object.create(s),u.prototype.constructor=u,c&&(u.options=c),u.prototype.namespace=a,r.modes[a]=u,u},r})}(Mo)),Mo.exports}var Ao={exports:{}},wo={exports:{}};/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */var nc;function MS(){return nc||(nc=1,function(i){(function(e,t){i.exports?i.exports=t(Es(),gr()):e.Masonry=t(e.Outlayer,e.getSize)})(window,function(t,n){var r=t.create("masonry");r.compatOptions.fitWidth="isFitWidth";var s=r.prototype;return s._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var o=0;o<this.cols;o++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},s.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var o=this.items[0],a=o&&o.element;this.columnWidth=a&&n(a).outerWidth||this.containerWidth}var c=this.columnWidth+=this.gutter,u=this.containerWidth+this.gutter,f=u/c,m=c-u%c,g=m&&m<1?"round":"floor";f=Math[g](f),this.cols=Math.max(f,1)},s.getContainerWidth=function(){var o=this._getOption("fitWidth"),a=o?this.element.parentNode:this.element,c=n(a);this.containerWidth=c&&c.innerWidth},s._getItemLayoutPosition=function(o){o.getSize();var a=o.size.outerWidth%this.columnWidth,c=a&&a<1?"round":"ceil",u=Math[c](o.size.outerWidth/this.columnWidth);u=Math.min(u,this.cols);for(var f=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",m=this[f](u,o),g={x:this.columnWidth*m.col,y:m.y},v=m.y+o.size.outerHeight,x=u+m.col,E=m.col;E<x;E++)this.colYs[E]=v;return g},s._getTopColPosition=function(o){var a=this._getTopColGroup(o),c=Math.min.apply(Math,a);return{col:a.indexOf(c),y:c}},s._getTopColGroup=function(o){if(o<2)return this.colYs;for(var a=[],c=this.cols+1-o,u=0;u<c;u++)a[u]=this._getColGroupY(u,o);return a},s._getColGroupY=function(o,a){if(a<2)return this.colYs[o];var c=this.colYs.slice(o,o+a);return Math.max.apply(Math,c)},s._getHorizontalColPosition=function(o,a){var c=this.horizontalColIndex%this.cols,u=o>1&&c+o>this.cols;c=u?0:c;var f=a.size.outerWidth&&a.size.outerHeight;return this.horizontalColIndex=f?c+o:this.horizontalColIndex,{col:c,y:this._getColGroupY(c,o)}},s._manageStamp=function(o){var a=n(o),c=this._getElementOffset(o),u=this._getOption("originLeft"),f=u?c.left:c.right,m=f+a.outerWidth,g=Math.floor(f/this.columnWidth);g=Math.max(0,g);var v=Math.floor(m/this.columnWidth);v-=m%this.columnWidth?0:1,v=Math.min(this.cols-1,v);for(var x=this._getOption("originTop"),E=(x?c.top:c.bottom)+a.outerHeight,h=g;h<=v;h++)this.colYs[h]=Math.max(E,this.colYs[h])},s._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var o={height:this.maxY};return this._getOption("fitWidth")&&(o.width=this._getContainerFitWidth()),o},s._getContainerFitWidth=function(){for(var o=0,a=this.cols;--a&&this.colYs[a]===0;)o++;return(this.cols-o)*this.columnWidth-this.gutter},s.needsResizeLayout=function(){var o=this.containerWidth;return this.getContainerWidth(),o!=this.containerWidth},r})}(wo)),wo.exports}/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */var ic;function AS(){return ic||(ic=1,function(i){(function(e,t){i.exports?i.exports=t(Ts(),MS()):t(e.Isotope.LayoutMode,e.Masonry)})(window,function(t,n){var r=t.create("masonry"),s=r.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var a in n.prototype)o[a]||(s[a]=n.prototype[a]);var c=s.measureColumns;s.measureColumns=function(){this.items=this.isotope.filteredItems,c.call(this)};var u=s._getOption;return s._getOption=function(f){return f=="fitWidth"?this.options.isFitWidth!==void 0?this.options.isFitWidth:this.options.fitWidth:u.apply(this.isotope,arguments)},r})}(Ao)),Ao.exports}var Co={exports:{}},rc;function wS(){return rc||(rc=1,function(i,e){(function(t,n){i.exports=n(Ts())})(window,function(n){var r=n.create("fitRows"),s=r.prototype;return s._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},s._getItemLayoutPosition=function(o){o.getSize();var a=o.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;this.x!==0&&a+this.x>c&&(this.x=0,this.y=this.maxY);var u={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+o.size.outerHeight),this.x+=a,u},s._getContainerSize=function(){return{height:this.maxY}},r})}(Co)),Co.exports}var Ro={exports:{}},sc;function CS(){return sc||(sc=1,function(i){(function(e,t){i.exports?i.exports=t(Ts()):t(e.Isotope.LayoutMode)})(window,function(t){var n=t.create("vertical",{horizontalAlignment:0}),r=n.prototype;return r._resetLayout=function(){this.y=0},r._getItemLayoutPosition=function(s){s.getSize();var o=(this.isotope.size.innerWidth-s.size.outerWidth)*this.options.horizontalAlignment,a=this.y;return this.y+=s.size.outerHeight,{x:o,y:a}},r._getContainerSize=function(){return{height:this.y}},n})}(Ro)),Ro.exports}/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */var oc;function RS(){return oc||(oc=1,function(i){(function(e,t){i.exports?i.exports=t(e,Es(),gr(),Nu(),Ou(),bS(),Ts(),AS(),wS(),CS()):e.Isotope=t(e,e.Outlayer,e.getSize,e.matchesSelector,e.fizzyUIUtils,e.Isotope.Item,e.Isotope.LayoutMode)})(window,function(t,n,r,s,o,a,c){var u=t.jQuery,f=String.prototype.trim?function(h){return h.trim()}:function(h){return h.replace(/^\s+|\s+$/g,"")},m=n.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=a,m.LayoutMode=c;var g=m.prototype;g._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),n.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var h in c.modes)this._initLayoutMode(h)},g.reloadItems=function(){this.itemGUID=0,n.prototype.reloadItems.call(this)},g._itemize=function(){for(var h=n.prototype._itemize.apply(this,arguments),l=0;l<h.length;l++){var _=h[l];_.id=this.itemGUID++}return this._updateItemsSortData(h),h},g._initLayoutMode=function(h){var l=c.modes[h],_=this.options[h]||{};this.options[h]=l.options?o.extend(l.options,_):_,this.modes[h]=new l(this)},g.layout=function(){if(!this._isLayoutInited&&this._getOption("initLayout")){this.arrange();return}this._layout()},g._layout=function(){var h=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,h),this._isLayoutInited=!0},g.arrange=function(h){this.option(h),this._getIsInstant();var l=this._filter(this.items);this.filteredItems=l.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[l]):this._hideReveal(l),this._sort(),this._layout()},g._init=g.arrange,g._hideReveal=function(h){this.reveal(h.needReveal),this.hide(h.needHide)},g._getIsInstant=function(){var h=this._getOption("layoutInstant"),l=h!==void 0?h:!this._isLayoutInited;return this._isInstant=l,l},g._bindArrangeComplete=function(){var h,l,_,y=this;function S(){h&&l&&_&&y.dispatchEvent("arrangeComplete",null,[y.filteredItems])}this.once("layoutComplete",function(){h=!0,S()}),this.once("hideComplete",function(){l=!0,S()}),this.once("revealComplete",function(){_=!0,S()})},g._filter=function(h){var l=this.options.filter;l=l||"*";for(var _=[],y=[],S=[],M=this._getFilterTest(l),L=0;L<h.length;L++){var P=h[L];if(!P.isIgnored){var I=M(P);I&&_.push(P),I&&P.isHidden?y.push(P):!I&&!P.isHidden&&S.push(P)}}return{matches:_,needReveal:y,needHide:S}},g._getFilterTest=function(h){return u&&this.options.isJQueryFiltering?function(l){return u(l.element).is(h)}:typeof h=="function"?function(l){return h(l.element)}:function(l){return s(l.element,h)}},g.updateSortData=function(h){var l;h?(h=o.makeArray(h),l=this.getItems(h)):l=this.items,this._getSorters(),this._updateItemsSortData(l)},g._getSorters=function(){var h=this.options.getSortData;for(var l in h){var _=h[l];this._sorters[l]=v(_)}},g._updateItemsSortData=function(h){for(var l=h&&h.length,_=0;l&&_<l;_++){var y=h[_];y.updateSortData()}};var v=function(){function h(_){if(typeof _!="string")return _;var y=f(_).split(" "),S=y[0],M=S.match(/^\[(.+)\]$/),L=M&&M[1],P=l(L,S),I=m.sortDataParsers[y[1]];return _=I?function(A){return A&&I(P(A))}:function(A){return A&&P(A)},_}function l(_,y){return _?function(M){return M.getAttribute(_)}:function(M){var L=M.querySelector(y);return L&&L.textContent}}return h}();m.sortDataParsers={parseInt:function(h){return parseInt(h,10)},parseFloat:function(h){return parseFloat(h)}},g._sort=function(){if(this.options.sortBy){var h=o.makeArray(this.options.sortBy);this._getIsSameSortBy(h)||(this.sortHistory=h.concat(this.sortHistory));var l=x(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(l)}},g._getIsSameSortBy=function(h){for(var l=0;l<h.length;l++)if(h[l]!=this.sortHistory[l])return!1;return!0};function x(h,l){return function(y,S){for(var M=0;M<h.length;M++){var L=h[M],P=y.sortData[L],I=S.sortData[L];if(P>I||P<I){var A=l[L]!==void 0?l[L]:l,T=A?1:-1;return(P>I?1:-1)*T}}return 0}}g._mode=function(){var h=this.options.layoutMode,l=this.modes[h];if(!l)throw new Error("No layout mode: "+h);return l.options=this.options[h],l},g._resetLayout=function(){n.prototype._resetLayout.call(this),this._mode()._resetLayout()},g._getItemLayoutPosition=function(h){return this._mode()._getItemLayoutPosition(h)},g._manageStamp=function(h){this._mode()._manageStamp(h)},g._getContainerSize=function(){return this._mode()._getContainerSize()},g.needsResizeLayout=function(){return this._mode().needsResizeLayout()},g.appended=function(h){var l=this.addItems(h);if(l.length){var _=this._filterRevealAdded(l);this.filteredItems=this.filteredItems.concat(_)}},g.prepended=function(h){var l=this._itemize(h);if(l.length){this._resetLayout(),this._manageStamps();var _=this._filterRevealAdded(l);this.layoutItems(this.filteredItems),this.filteredItems=_.concat(this.filteredItems),this.items=l.concat(this.items)}},g._filterRevealAdded=function(h){var l=this._filter(h);return this.hide(l.needHide),this.reveal(l.matches),this.layoutItems(l.matches,!0),l.matches},g.insert=function(h){var l=this.addItems(h);if(l.length){var _,y,S=l.length;for(_=0;_<S;_++)y=l[_],this.element.appendChild(y.element);var M=this._filter(l).matches;for(_=0;_<S;_++)l[_].isLayoutInstant=!0;for(this.arrange(),_=0;_<S;_++)delete l[_].isLayoutInstant;this.reveal(M)}};var E=g.remove;return g.remove=function(h){h=o.makeArray(h);var l=this.getItems(h);E.call(this,h);for(var _=l&&l.length,y=0;_&&y<_;y++){var S=l[y];o.removeFrom(this.filteredItems,S)}},g.shuffle=function(){for(var h=0;h<this.items.length;h++){var l=this.items[h];l.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},g._noTransition=function(h,l){var _=this.options.transitionDuration;this.options.transitionDuration=0;var y=h.apply(this,l);return this.options.transitionDuration=_,y},g.getFilteredItemElements=function(){return this.filteredItems.map(function(h){return h.element})},m})}(_o)),_o.exports}var LS=RS();const PS=xa(LS);function ac(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function Sa(i,e){i===void 0&&(i={}),e===void 0&&(e={});const t=["__proto__","constructor","prototype"];Object.keys(e).filter(n=>t.indexOf(n)<0).forEach(n=>{typeof i[n]>"u"?i[n]=e[n]:ac(e[n])&&ac(i[n])&&Object.keys(e[n]).length>0&&Sa(i[n],e[n])})}const Fu={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function un(){const i=typeof document<"u"?document:{};return Sa(i,Fu),i}const DS={document:Fu,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function Tt(){const i=typeof window<"u"?window:{};return Sa(i,DS),i}function IS(i){return i===void 0&&(i=""),i.trim().split(" ").filter(e=>!!e.trim())}function NS(i){const e=i;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Uu(i,e){return e===void 0&&(e=0),setTimeout(i,e)}function ls(){return Date.now()}function OS(i){const e=Tt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(i,null)),!t&&i.currentStyle&&(t=i.currentStyle),t||(t=i.style),t}function FS(i,e){e===void 0&&(e="x");const t=Tt();let n,r,s;const o=OS(i);return t.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(r==="none"?"":r)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=s.m41:n.length===16?r=parseFloat(n[12]):r=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?r=s.m42:n.length===16?r=parseFloat(n[13]):r=parseFloat(n[5])),r||0}function qr(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function US(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function Ot(){const i=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const n=t<0||arguments.length<=t?void 0:arguments[t];if(n!=null&&!US(n)){const r=Object.keys(Object(n)).filter(s=>e.indexOf(s)<0);for(let s=0,o=r.length;s<o;s+=1){const a=r[s],c=Object.getOwnPropertyDescriptor(n,a);c!==void 0&&c.enumerable&&(qr(i[a])&&qr(n[a])?n[a].__swiper__?i[a]=n[a]:Ot(i[a],n[a]):!qr(i[a])&&qr(n[a])?(i[a]={},n[a].__swiper__?i[a]=n[a]:Ot(i[a],n[a])):i[a]=n[a])}}}return i}function Yr(i,e,t){i.style.setProperty(e,t)}function Bu(i){let{swiper:e,targetPosition:t,side:n}=i;const r=Tt(),s=-e.translate;let o=null,a;const c=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const u=t>s?"next":"prev",f=(g,v)=>u==="next"&&g>=v||u==="prev"&&g<=v,m=()=>{a=new Date().getTime(),o===null&&(o=a);const g=Math.max(Math.min((a-o)/c,1),0),v=.5-Math.cos(g*Math.PI)/2;let x=s+v*(t-s);if(f(x,t)&&(x=t),e.wrapperEl.scrollTo({[n]:x}),f(x,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:x})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(m)};m()}function sn(i,e){e===void 0&&(e="");const t=Tt(),n=[...i.children];return t.HTMLSlotElement&&i instanceof HTMLSlotElement&&n.push(...i.assignedElements()),e?n.filter(r=>r.matches(e)):n}function BS(i,e){const t=[e];for(;t.length>0;){const n=t.shift();if(i===n)return!0;t.push(...n.children,...n.shadowRoot?n.shadowRoot.children:[],...n.assignedElements?n.assignedElements():[])}}function zS(i,e){const t=Tt();let n=e.contains(i);return!n&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(n=[...e.assignedElements()].includes(i),n||(n=BS(i,e))),n}function cs(i){try{console.warn(i);return}catch{}}function us(i,e){e===void 0&&(e=[]);const t=document.createElement(i);return t.classList.add(...Array.isArray(e)?e:IS(e)),t}function kS(i,e){const t=[];for(;i.previousElementSibling;){const n=i.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function HS(i,e){const t=[];for(;i.nextElementSibling;){const n=i.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function In(i,e){return Tt().getComputedStyle(i,null).getPropertyValue(e)}function ds(i){let e=i,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function zu(i,e){const t=[];let n=i.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function qo(i,e,t){const n=Tt();return i[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function vn(i){return(Array.isArray(i)?i:[i]).filter(e=>!!e)}function lc(i,e){e===void 0&&(e=""),typeof trustedTypes<"u"?i.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):i.innerHTML=e}let Lo;function GS(){const i=Tt(),e=un();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&e instanceof i.DocumentTouch)}}function ku(){return Lo||(Lo=GS()),Lo}let Po;function VS(i){let{userAgent:e}=i===void 0?{}:i;const t=ku(),n=Tt(),r=n.navigator.platform,s=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,c=n.screen.height,u=s.match(/(Android);?[\s\/]+([\d.]+)?/);let f=s.match(/(iPad).*OS\s([\d_]+)/);const m=s.match(/(iPod)(.*OS\s([\d_]+))?/),g=!f&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=r==="Win32";let x=r==="MacIntel";const E=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&x&&t.touch&&E.indexOf(`${a}x${c}`)>=0&&(f=s.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),x=!1),u&&!v&&(o.os="android",o.android=!0),(f||g||m)&&(o.os="ios",o.ios=!0),o}function Hu(i){return i===void 0&&(i={}),Po||(Po=VS(i)),Po}let Do;function WS(){const i=Tt(),e=Hu();let t=!1;function n(){const a=i.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(n()){const a=String(i.navigator.userAgent);if(a.includes("Version/")){const[c,u]=a.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));t=c<16||c===16&&u<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),s=n(),o=s||r&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:o,isWebView:r}}function Gu(){return Do||(Do=WS()),Do}function XS(i){let{swiper:e,on:t,emit:n}=i;const r=Tt();let s=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},c=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(m=>{o=r.requestAnimationFrame(()=>{const{width:g,height:v}=e;let x=g,E=v;m.forEach(h=>{let{contentBoxSize:l,contentRect:_,target:y}=h;y&&y!==e.el||(x=_?_.width:(l[0]||l).inlineSize,E=_?_.height:(l[0]||l).blockSize)}),(x!==g||E!==v)&&a()})}),s.observe(e.el))},u=()=>{o&&r.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},f=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){c();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",f)}),t("destroy",()=>{u(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",f)})}function $S(i){let{swiper:e,extendParams:t,on:n,emit:r}=i;const s=[],o=Tt(),a=function(f,m){m===void 0&&(m={});const g=o.MutationObserver||o.WebkitMutationObserver,v=new g(x=>{if(e.__preventObserver__)return;if(x.length===1){r("observerUpdate",x[0]);return}const E=function(){r("observerUpdate",x[0])};o.requestAnimationFrame?o.requestAnimationFrame(E):o.setTimeout(E,0)});v.observe(f,{attributes:typeof m.attributes>"u"?!0:m.attributes,childList:e.isElement||(typeof m.childList>"u"?!0:m).childList,characterData:typeof m.characterData>"u"?!0:m.characterData}),s.push(v)},c=()=>{if(e.params.observer){if(e.params.observeParents){const f=zu(e.hostEl);for(let m=0;m<f.length;m+=1)a(f[m])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},u=()=>{s.forEach(f=>{f.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",c),n("destroy",u)}var qS={on(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return i.split(" ").forEach(s=>{n.eventsListeners[s]||(n.eventsListeners[s]=[]),n.eventsListeners[s][r](e)}),n},once(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function r(){n.off(i,r),r.__emitterProxy&&delete r.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];e.apply(n,o)}return r.__emitterProxy=e,n.on(i,r,t)},onAny(i,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof i!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(i)<0&&t.eventsAnyListeners[n](i),t},offAny(i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(i);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(i,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||i.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[n].splice(s,1)})}),t},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let e,t,n;for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),n=i):(e=s[0].events,t=s[0].data,n=s[0].context||i),t.unshift(n),(Array.isArray(e)?e:e.split(" ")).forEach(c=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(u=>{u.apply(n,[c,...t])}),i.eventsListeners&&i.eventsListeners[c]&&i.eventsListeners[c].forEach(u=>{u.apply(n,t)})}),i}};function YS(){const i=this;let e,t;const n=i.el;typeof i.params.width<"u"&&i.params.width!==null?e=i.params.width:e=n.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?t=i.params.height:t=n.clientHeight,!(e===0&&i.isHorizontal()||t===0&&i.isVertical())&&(e=e-parseInt(In(n,"padding-left")||0,10)-parseInt(In(n,"padding-right")||0,10),t=t-parseInt(In(n,"padding-top")||0,10)-parseInt(In(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(i,{width:e,height:t,size:i.isHorizontal()?e:t}))}function jS(){const i=this;function e(T,w){return parseFloat(T.getPropertyValue(i.getDirectionLabel(w))||0)}const t=i.params,{wrapperEl:n,slidesEl:r,size:s,rtlTranslate:o,wrongRTL:a}=i,c=i.virtual&&t.virtual.enabled,u=c?i.virtual.slides.length:i.slides.length,f=sn(r,`.${i.params.slideClass}, swiper-slide`),m=c?i.virtual.slides.length:f.length;let g=[];const v=[],x=[];let E=t.slidesOffsetBefore;typeof E=="function"&&(E=t.slidesOffsetBefore.call(i));let h=t.slidesOffsetAfter;typeof h=="function"&&(h=t.slidesOffsetAfter.call(i));const l=i.snapGrid.length,_=i.slidesGrid.length;let y=t.spaceBetween,S=-E,M=0,L=0;if(typeof s>"u")return;typeof y=="string"&&y.indexOf("%")>=0?y=parseFloat(y.replace("%",""))/100*s:typeof y=="string"&&(y=parseFloat(y)),i.virtualSize=-y,f.forEach(T=>{o?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Yr(n,"--swiper-centered-offset-before",""),Yr(n,"--swiper-centered-offset-after",""));const P=t.grid&&t.grid.rows>1&&i.grid;P?i.grid.initSlides(f):i.grid&&i.grid.unsetSlides();let I;const A=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(T=>typeof t.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<m;T+=1){I=0;let w;if(f[T]&&(w=f[T]),P&&i.grid.updateSlide(T,w,f),!(f[T]&&In(w,"display")==="none")){if(t.slidesPerView==="auto"){A&&(f[T].style[i.getDirectionLabel("width")]="");const O=getComputedStyle(w),U=w.style.transform,G=w.style.webkitTransform;if(U&&(w.style.transform="none"),G&&(w.style.webkitTransform="none"),t.roundLengths)I=i.isHorizontal()?qo(w,"width"):qo(w,"height");else{const $=e(O,"width"),k=e(O,"padding-left"),q=e(O,"padding-right"),H=e(O,"margin-left"),ie=e(O,"margin-right"),ce=O.getPropertyValue("box-sizing");if(ce&&ce==="border-box")I=$+H+ie;else{const{clientWidth:_e,offsetWidth:Le}=w;I=$+k+q+H+ie+(Le-_e)}}U&&(w.style.transform=U),G&&(w.style.webkitTransform=G),t.roundLengths&&(I=Math.floor(I))}else I=(s-(t.slidesPerView-1)*y)/t.slidesPerView,t.roundLengths&&(I=Math.floor(I)),f[T]&&(f[T].style[i.getDirectionLabel("width")]=`${I}px`);f[T]&&(f[T].swiperSlideSize=I),x.push(I),t.centeredSlides?(S=S+I/2+M/2+y,M===0&&T!==0&&(S=S-s/2-y),T===0&&(S=S-s/2-y),Math.abs(S)<1/1e3&&(S=0),t.roundLengths&&(S=Math.floor(S)),L%t.slidesPerGroup===0&&g.push(S),v.push(S)):(t.roundLengths&&(S=Math.floor(S)),(L-Math.min(i.params.slidesPerGroupSkip,L))%i.params.slidesPerGroup===0&&g.push(S),v.push(S),S=S+I+y),i.virtualSize+=I+y,M=I,L+=1}}if(i.virtualSize=Math.max(i.virtualSize,s)+h,o&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(n.style.width=`${i.virtualSize+y}px`),t.setWrapperSize&&(n.style[i.getDirectionLabel("width")]=`${i.virtualSize+y}px`),P&&i.grid.updateWrapperSize(I,g),!t.centeredSlides){const T=[];for(let w=0;w<g.length;w+=1){let O=g[w];t.roundLengths&&(O=Math.floor(O)),g[w]<=i.virtualSize-s&&T.push(O)}g=T,Math.floor(i.virtualSize-s)-Math.floor(g[g.length-1])>1&&g.push(i.virtualSize-s)}if(c&&t.loop){const T=x[0]+y;if(t.slidesPerGroup>1){const w=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/t.slidesPerGroup),O=T*t.slidesPerGroup;for(let U=0;U<w;U+=1)g.push(g[g.length-1]+O)}for(let w=0;w<i.virtual.slidesBefore+i.virtual.slidesAfter;w+=1)t.slidesPerGroup===1&&g.push(g[g.length-1]+T),v.push(v[v.length-1]+T),i.virtualSize+=T}if(g.length===0&&(g=[0]),y!==0){const T=i.isHorizontal()&&o?"marginLeft":i.getDirectionLabel("marginRight");f.filter((w,O)=>!t.cssMode||t.loop?!0:O!==f.length-1).forEach(w=>{w.style[T]=`${y}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let T=0;x.forEach(O=>{T+=O+(y||0)}),T-=y;const w=T>s?T-s:0;g=g.map(O=>O<=0?-E:O>w?w+h:O)}if(t.centerInsufficientSlides){let T=0;x.forEach(O=>{T+=O+(y||0)}),T-=y;const w=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(T+w<s){const O=(s-T-w)/2;g.forEach((U,G)=>{g[G]=U-O}),v.forEach((U,G)=>{v[G]=U+O})}}if(Object.assign(i,{slides:f,snapGrid:g,slidesGrid:v,slidesSizesGrid:x}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Yr(n,"--swiper-centered-offset-before",`${-g[0]}px`),Yr(n,"--swiper-centered-offset-after",`${i.size/2-x[x.length-1]/2}px`);const T=-i.snapGrid[0],w=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(O=>O+T),i.slidesGrid=i.slidesGrid.map(O=>O+w)}if(m!==u&&i.emit("slidesLengthChange"),g.length!==l&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),v.length!==_&&i.emit("slidesGridLengthChange"),t.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!c&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const T=`${t.containerModifierClass}backface-hidden`,w=i.el.classList.contains(T);m<=t.maxBackfaceHiddenSlides?w||i.el.classList.add(T):w&&i.el.classList.remove(T)}}function KS(i){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof i=="number"?e.setTransition(i):i===!0&&e.setTransition(e.params.speed);const o=a=>n?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const a=e.activeIndex+s;if(a>e.slides.length&&!n)break;t.push(o(a))}else t.push(o(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const a=t[s].offsetHeight;r=a>r?a:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function ZS(){const i=this,e=i.slides,t=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(i.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-i.cssOverflowAdjustment()}const cc=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function JS(i){i===void 0&&(i=this&&this.translate||0);const e=this,t=e.params,{slides:n,rtlTranslate:r,snapGrid:s}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-i;r&&(o=i),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=t.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let c=0;c<n.length;c+=1){const u=n[c];let f=u.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(f-=n[0].swiperSlideOffset);const m=(o+(t.centeredSlides?e.minTranslate():0)-f)/(u.swiperSlideSize+a),g=(o-s[0]+(t.centeredSlides?e.minTranslate():0)-f)/(u.swiperSlideSize+a),v=-(o-f),x=v+e.slidesSizesGrid[c],E=v>=0&&v<=e.size-e.slidesSizesGrid[c],h=v>=0&&v<e.size-1||x>1&&x<=e.size||v<=0&&x>=e.size;h&&(e.visibleSlides.push(u),e.visibleSlidesIndexes.push(c)),cc(u,h,t.slideVisibleClass),cc(u,E,t.slideFullyVisibleClass),u.progress=r?-m:m,u.originalProgress=r?-g:g}}function QS(i){const e=this;if(typeof i>"u"){const f=e.rtlTranslate?-1:1;i=e&&e.translate&&e.translate*f||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:o,progressLoop:a}=e;const c=s,u=o;if(n===0)r=0,s=!0,o=!0;else{r=(i-e.minTranslate())/n;const f=Math.abs(i-e.minTranslate())<1,m=Math.abs(i-e.maxTranslate())<1;s=f||r<=0,o=m||r>=1,f&&(r=0),m&&(r=1)}if(t.loop){const f=e.getSlideIndexByData(0),m=e.getSlideIndexByData(e.slides.length-1),g=e.slidesGrid[f],v=e.slidesGrid[m],x=e.slidesGrid[e.slidesGrid.length-1],E=Math.abs(i);E>=g?a=(E-g)/x:a=(E+x-v)/x,a>1&&(a-=1)}Object.assign(e,{progress:r,progressLoop:a,isBeginning:s,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(i),s&&!c&&e.emit("reachBeginning toEdge"),o&&!u&&e.emit("reachEnd toEdge"),(c&&!s||u&&!o)&&e.emit("fromEdge"),e.emit("progress",r)}const Io=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function e0(){const i=this,{slides:e,params:t,slidesEl:n,activeIndex:r}=i,s=i.virtual&&t.virtual.enabled,o=i.grid&&t.grid&&t.grid.rows>1,a=m=>sn(n,`.${t.slideClass}${m}, swiper-slide${m}`)[0];let c,u,f;if(s)if(t.loop){let m=r-i.virtual.slidesBefore;m<0&&(m=i.virtual.slides.length+m),m>=i.virtual.slides.length&&(m-=i.virtual.slides.length),c=a(`[data-swiper-slide-index="${m}"]`)}else c=a(`[data-swiper-slide-index="${r}"]`);else o?(c=e.find(m=>m.column===r),f=e.find(m=>m.column===r+1),u=e.find(m=>m.column===r-1)):c=e[r];c&&(o||(f=HS(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!f&&(f=e[0]),u=kS(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u===0&&(u=e[e.length-1]))),e.forEach(m=>{Io(m,m===c,t.slideActiveClass),Io(m,m===f,t.slideNextClass),Io(m,m===u,t.slidePrevClass)}),i.emitSlidesClasses()}const ts=(i,e)=>{if(!i||i.destroyed||!i.params)return;const t=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,n=e.closest(t());if(n){let r=n.querySelector(`.${i.params.lazyPreloaderClass}`);!r&&i.isElement&&(n.shadowRoot?r=n.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(r=n.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},No=(i,e)=>{if(!i.slides[e])return;const t=i.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Yo=i=>{if(!i||i.destroyed||!i.params)return;let e=i.params.lazyPreloadPrevNext;const t=i.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const n=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),r=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const o=r,a=[o-e];a.push(...Array.from({length:e}).map((c,u)=>o+n+u)),i.slides.forEach((c,u)=>{a.includes(c.column)&&No(i,u)});return}const s=r+n-1;if(i.params.rewind||i.params.loop)for(let o=r-e;o<=s+e;o+=1){const a=(o%t+t)%t;(a<r||a>s)&&No(i,a)}else for(let o=Math.max(r-e,0);o<=Math.min(s+e,t-1);o+=1)o!==r&&(o>s||o<r)&&No(i,o)};function t0(i){const{slidesGrid:e,params:t}=i,n=i.rtlTranslate?i.translate:-i.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?n>=e[s]&&n<e[s+1]-(e[s+1]-e[s])/2?r=s:n>=e[s]&&n<e[s+1]&&(r=s+1):n>=e[s]&&(r=s);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function n0(i){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:r,activeIndex:s,realIndex:o,snapIndex:a}=e;let c=i,u;const f=v=>{let x=v-e.virtual.slidesBefore;return x<0&&(x=e.virtual.slides.length+x),x>=e.virtual.slides.length&&(x-=e.virtual.slides.length),x};if(typeof c>"u"&&(c=t0(e)),n.indexOf(t)>=0)u=n.indexOf(t);else{const v=Math.min(r.slidesPerGroupSkip,c);u=v+Math.floor((c-v)/r.slidesPerGroup)}if(u>=n.length&&(u=n.length-1),c===s&&!e.params.loop){u!==a&&(e.snapIndex=u,e.emit("snapIndexChange"));return}if(c===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=f(c);return}const m=e.grid&&r.grid&&r.grid.rows>1;let g;if(e.virtual&&r.virtual.enabled&&r.loop)g=f(c);else if(m){const v=e.slides.find(E=>E.column===c);let x=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(e.slides.indexOf(v),0)),g=Math.floor(x/r.grid.rows)}else if(e.slides[c]){const v=e.slides[c].getAttribute("data-swiper-slide-index");v?g=parseInt(v,10):g=c}else g=c;Object.assign(e,{previousSnapIndex:a,snapIndex:u,previousRealIndex:o,realIndex:g,previousIndex:s,activeIndex:c}),e.initialized&&Yo(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==g&&e.emit("realIndexChange"),e.emit("slideChange"))}function i0(i,e){const t=this,n=t.params;let r=i.closest(`.${n.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(i)&&[...e.slice(e.indexOf(i)+1,e.length)].forEach(a=>{!r&&a.matches&&a.matches(`.${n.slideClass}, swiper-slide`)&&(r=a)});let s=!1,o;if(r){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===r){s=!0,o=a;break}}if(r&&s)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var r0={updateSize:YS,updateSlides:jS,updateAutoHeight:KS,updateSlidesOffset:ZS,updateSlidesProgress:JS,updateProgress:QS,updateSlidesClasses:e0,updateActiveIndex:n0,updateClickedSlide:i0};function s0(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:n,translate:r,wrapperEl:s}=e;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let o=FS(s,i);return o+=e.cssOverflowAdjustment(),n&&(o=-o),o||0}function o0(i,e){const t=this,{rtlTranslate:n,params:r,wrapperEl:s,progress:o}=t;let a=0,c=0;const u=0;t.isHorizontal()?a=n?-i:i:c=i,r.roundLengths&&(a=Math.floor(a),c=Math.floor(c)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:c,r.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-c:r.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():c-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${c}px, ${u}px)`);let f;const m=t.maxTranslate()-t.minTranslate();m===0?f=0:f=(i-t.minTranslate())/m,f!==o&&t.updateProgress(i),t.emit("setTranslate",t.translate,e)}function a0(){return-this.snapGrid[0]}function l0(){return-this.snapGrid[this.snapGrid.length-1]}function c0(i,e,t,n,r){i===void 0&&(i=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),n===void 0&&(n=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const c=s.minTranslate(),u=s.maxTranslate();let f;if(n&&i>c?f=c:n&&i<u?f=u:f=i,s.updateProgress(f),o.cssMode){const m=s.isHorizontal();if(e===0)a[m?"scrollLeft":"scrollTop"]=-f;else{if(!s.support.smoothScroll)return Bu({swiper:s,targetPosition:-f,side:m?"left":"top"}),!0;a.scrollTo({[m?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(g){!s||s.destroyed||g.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var u0={getTranslate:s0,setTranslate:o0,minTranslate:a0,maxTranslate:l0,translateTo:c0};function d0(i,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${i}ms`,t.wrapperEl.style.transitionDelay=i===0?"0ms":""),t.emit("setTransition",i,e)}function Vu(i){let{swiper:e,runCallbacks:t,direction:n,step:r}=i;const{activeIndex:s,previousIndex:o}=e;let a=n;a||(s>o?a="next":s<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&s!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function h0(i,e){i===void 0&&(i=!0);const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),Vu({swiper:t,runCallbacks:i,direction:e,step:"Start"}))}function f0(i,e){i===void 0&&(i=!0);const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),Vu({swiper:t,runCallbacks:i,direction:e,step:"End"}))}var p0={setTransition:d0,transitionStart:h0,transitionEnd:f0};function m0(i,e,t,n,r){i===void 0&&(i=0),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const s=this;let o=i;o<0&&(o=0);const{params:a,snapGrid:c,slidesGrid:u,previousIndex:f,activeIndex:m,rtlTranslate:g,wrapperEl:v,enabled:x}=s;if(!x&&!n&&!r||s.destroyed||s.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const E=Math.min(s.params.slidesPerGroupSkip,o);let h=E+Math.floor((o-E)/s.params.slidesPerGroup);h>=c.length&&(h=c.length-1);const l=-c[h];if(a.normalizeSlideIndex)for(let P=0;P<u.length;P+=1){const I=-Math.floor(l*100),A=Math.floor(u[P]*100),T=Math.floor(u[P+1]*100);typeof u[P+1]<"u"?I>=A&&I<T-(T-A)/2?o=P:I>=A&&I<T&&(o=P+1):I>=A&&(o=P)}if(s.initialized&&o!==m&&(!s.allowSlideNext&&(g?l>s.translate&&l>s.minTranslate():l<s.translate&&l<s.minTranslate())||!s.allowSlidePrev&&l>s.translate&&l>s.maxTranslate()&&(m||0)!==o))return!1;o!==(f||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(l);let _;o>m?_="next":o<m?_="prev":_="reset";const y=s.virtual&&s.params.virtual.enabled;if(!(y&&r)&&(g&&-l===s.translate||!g&&l===s.translate))return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(l),_!=="reset"&&(s.transitionStart(t,_),s.transitionEnd(t,_)),!1;if(a.cssMode){const P=s.isHorizontal(),I=g?l:-l;if(e===0)y&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),y&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[P?"scrollLeft":"scrollTop"]=I})):v[P?"scrollLeft":"scrollTop"]=I,y&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1});else{if(!s.support.smoothScroll)return Bu({swiper:s,targetPosition:I,side:P?"left":"top"}),!0;v.scrollTo({[P?"left":"top"]:I,behavior:"smooth"})}return!0}const L=Gu().isSafari;return y&&!r&&L&&s.isElement&&s.virtual.update(!1,!1,o),s.setTransition(e),s.setTranslate(l),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,n),s.transitionStart(t,_),e===0?s.transitionEnd(t,_):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(I){!s||s.destroyed||I.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,_))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function g0(i,e,t,n){i===void 0&&(i=0),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let o=i;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let a;if(s){const g=o*r.params.grid.rows;a=r.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===g).column}else a=r.getSlideIndexByData(o);const c=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:u}=r.params;let f=r.params.slidesPerView;f==="auto"?f=r.slidesPerViewDynamic():(f=Math.ceil(parseFloat(r.params.slidesPerView,10)),u&&f%2===0&&(f=f+1));let m=c-a<f;if(u&&(m=m||a<Math.ceil(f/2)),n&&u&&r.params.slidesPerView!=="auto"&&!s&&(m=!1),m){const g=u?a<r.activeIndex?"prev":"next":a-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:g,slideTo:!0,activeSlideIndex:g==="next"?a+1:a-c+1,slideRealIndex:g==="next"?r.realIndex:void 0})}if(s){const g=o*r.params.grid.rows;o=r.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===g).column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,e,t,n)}),r}function v0(i,e,t){e===void 0&&(e=!0);const n=this,{enabled:r,params:s,animating:o}=n;if(!r||n.destroyed)return n;typeof i>"u"&&(i=n.params.speed);let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(n.slidesPerViewDynamic("current",!0),1));const c=n.activeIndex<s.slidesPerGroupSkip?1:a,u=n.virtual&&s.virtual.enabled;if(s.loop){if(o&&!u&&s.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+c,i,e,t)}),!0}return s.rewind&&n.isEnd?n.slideTo(0,i,e,t):n.slideTo(n.activeIndex+c,i,e,t)}function _0(i,e,t){e===void 0&&(e=!0);const n=this,{params:r,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:c,animating:u}=n;if(!c||n.destroyed)return n;typeof i>"u"&&(i=n.params.speed);const f=n.virtual&&r.virtual.enabled;if(r.loop){if(u&&!f&&r.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const m=a?n.translate:-n.translate;function g(_){return _<0?-Math.floor(Math.abs(_)):Math.floor(_)}const v=g(m),x=s.map(_=>g(_)),E=r.freeMode&&r.freeMode.enabled;let h=s[x.indexOf(v)-1];if(typeof h>"u"&&(r.cssMode||E)){let _;s.forEach((y,S)=>{v>=y&&(_=S)}),typeof _<"u"&&(h=E?s[_]:s[_>0?_-1:_])}let l=0;if(typeof h<"u"&&(l=o.indexOf(h),l<0&&(l=n.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(l=l-n.slidesPerViewDynamic("previous",!0)+1,l=Math.max(l,0))),r.rewind&&n.isBeginning){const _=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(_,i,e,t)}else if(r.loop&&n.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(l,i,e,t)}),!0;return n.slideTo(l,i,e,t)}function y0(i,e,t){e===void 0&&(e=!0);const n=this;if(!n.destroyed)return typeof i>"u"&&(i=n.params.speed),n.slideTo(n.activeIndex,i,e,t)}function x0(i,e,t,n){e===void 0&&(e=!0),n===void 0&&(n=.5);const r=this;if(r.destroyed)return;typeof i>"u"&&(i=r.params.speed);let s=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/r.params.slidesPerGroup),c=r.rtlTranslate?r.translate:-r.translate;if(c>=r.snapGrid[a]){const u=r.snapGrid[a],f=r.snapGrid[a+1];c-u>(f-u)*n&&(s+=r.params.slidesPerGroup)}else{const u=r.snapGrid[a-1],f=r.snapGrid[a];c-u<=(f-u)*n&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,i,e,t)}function S0(){const i=this;if(i.destroyed)return;const{params:e,slidesEl:t}=i,n=e.slidesPerView==="auto"?i.slidesPerViewDynamic():e.slidesPerView;let r=i.getSlideIndexWhenGrid(i.clickedIndex),s;const o=i.isElement?"swiper-slide":`.${e.slideClass}`,a=i.grid&&i.params.grid&&i.params.grid.rows>1;if(e.loop){if(i.animating)return;s=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i.slideToLoop(s):r>(a?(i.slides.length-n)/2-(i.params.grid.rows-1):i.slides.length-n)?(i.loopFix(),r=i.getSlideIndex(sn(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),Uu(()=>{i.slideTo(r)})):i.slideTo(r)}else i.slideTo(r)}var E0={slideTo:m0,slideToLoop:g0,slideNext:v0,slidePrev:_0,slideReset:y0,slideToClosest:x0,slideToClickedSlide:S0};function T0(i,e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const s=()=>{sn(r,`.${n.slideClass}, swiper-slide`).forEach((v,x)=>{v.setAttribute("data-swiper-slide-index",x)})},o=()=>{const g=sn(r,`.${n.slideBlankClass}`);g.forEach(v=>{v.remove()}),g.length>0&&(t.recalcSlides(),t.updateSlides())},a=t.grid&&n.grid&&n.grid.rows>1;n.loopAddBlankSlides&&(n.slidesPerGroup>1||a)&&o();const c=n.slidesPerGroup*(a?n.grid.rows:1),u=t.slides.length%c!==0,f=a&&t.slides.length%n.grid.rows!==0,m=g=>{for(let v=0;v<g;v+=1){const x=t.isElement?us("swiper-slide",[n.slideBlankClass]):us("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(x)}};if(u){if(n.loopAddBlankSlides){const g=c-t.slides.length%c;m(g),t.recalcSlides(),t.updateSlides()}else cs("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(f){if(n.loopAddBlankSlides){const g=n.grid.rows-t.slides.length%n.grid.rows;m(g),t.recalcSlides(),t.updateSlides()}else cs("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();t.loopFix({slideRealIndex:i,direction:n.centeredSlides?void 0:"next",initial:e})}function b0(i){let{slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:s,initial:o,byController:a,byMousewheel:c}=i===void 0?{}:i;const u=this;if(!u.params.loop)return;u.emit("beforeLoopFix");const{slides:f,allowSlidePrev:m,allowSlideNext:g,slidesEl:v,params:x}=u,{centeredSlides:E,initialSlide:h}=x;if(u.allowSlidePrev=!0,u.allowSlideNext=!0,u.virtual&&x.virtual.enabled){t&&(!x.centeredSlides&&u.snapIndex===0?u.slideTo(u.virtual.slides.length,0,!1,!0):x.centeredSlides&&u.snapIndex<x.slidesPerView?u.slideTo(u.virtual.slides.length+u.snapIndex,0,!1,!0):u.snapIndex===u.snapGrid.length-1&&u.slideTo(u.virtual.slidesBefore,0,!1,!0)),u.allowSlidePrev=m,u.allowSlideNext=g,u.emit("loopFix");return}let l=x.slidesPerView;l==="auto"?l=u.slidesPerViewDynamic():(l=Math.ceil(parseFloat(x.slidesPerView,10)),E&&l%2===0&&(l=l+1));const _=x.slidesPerGroupAuto?l:x.slidesPerGroup;let y=E?Math.max(_,Math.ceil(l/2)):_;y%_!==0&&(y+=_-y%_),y+=x.loopAdditionalSlides,u.loopedSlides=y;const S=u.grid&&x.grid&&x.grid.rows>1;f.length<l+y||u.params.effect==="cards"&&f.length<l+y*2?cs("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):S&&x.grid.fill==="row"&&cs("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const M=[],L=[],P=S?Math.ceil(f.length/x.grid.rows):f.length,I=o&&P-h<l&&!E;let A=I?h:u.activeIndex;typeof s>"u"?s=u.getSlideIndex(f.find(k=>k.classList.contains(x.slideActiveClass))):A=s;const T=n==="next"||!n,w=n==="prev"||!n;let O=0,U=0;const $=(S?f[s].column:s)+(E&&typeof r>"u"?-l/2+.5:0);if($<y){O=Math.max(y-$,_);for(let k=0;k<y-$;k+=1){const q=k-Math.floor(k/P)*P;if(S){const H=P-q-1;for(let ie=f.length-1;ie>=0;ie-=1)f[ie].column===H&&M.push(ie)}else M.push(P-q-1)}}else if($+l>P-y){U=Math.max($-(P-y*2),_),I&&(U=Math.max(U,l-P+h+1));for(let k=0;k<U;k+=1){const q=k-Math.floor(k/P)*P;S?f.forEach((H,ie)=>{H.column===q&&L.push(ie)}):L.push(q)}}if(u.__preventObserver__=!0,requestAnimationFrame(()=>{u.__preventObserver__=!1}),u.params.effect==="cards"&&f.length<l+y*2&&(L.includes(s)&&L.splice(L.indexOf(s),1),M.includes(s)&&M.splice(M.indexOf(s),1)),w&&M.forEach(k=>{f[k].swiperLoopMoveDOM=!0,v.prepend(f[k]),f[k].swiperLoopMoveDOM=!1}),T&&L.forEach(k=>{f[k].swiperLoopMoveDOM=!0,v.append(f[k]),f[k].swiperLoopMoveDOM=!1}),u.recalcSlides(),x.slidesPerView==="auto"?u.updateSlides():S&&(M.length>0&&w||L.length>0&&T)&&u.slides.forEach((k,q)=>{u.grid.updateSlide(q,k,u.slides)}),x.watchSlidesProgress&&u.updateSlidesOffset(),t){if(M.length>0&&w){if(typeof e>"u"){const k=u.slidesGrid[A],H=u.slidesGrid[A+O]-k;c?u.setTranslate(u.translate-H):(u.slideTo(A+Math.ceil(O),0,!1,!0),r&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-H,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-H))}else if(r){const k=S?M.length/x.grid.rows:M.length;u.slideTo(u.activeIndex+k,0,!1,!0),u.touchEventsData.currentTranslate=u.translate}}else if(L.length>0&&T)if(typeof e>"u"){const k=u.slidesGrid[A],H=u.slidesGrid[A-U]-k;c?u.setTranslate(u.translate-H):(u.slideTo(A-U,0,!1,!0),r&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-H,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-H))}else{const k=S?L.length/x.grid.rows:L.length;u.slideTo(u.activeIndex-k,0,!1,!0)}}if(u.allowSlidePrev=m,u.allowSlideNext=g,u.controller&&u.controller.control&&!a){const k={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:s,byController:!0};Array.isArray(u.controller.control)?u.controller.control.forEach(q=>{!q.destroyed&&q.params.loop&&q.loopFix({...k,slideTo:q.params.slidesPerView===x.slidesPerView?t:!1})}):u.controller.control instanceof u.constructor&&u.controller.control.params.loop&&u.controller.control.loopFix({...k,slideTo:u.controller.control.params.slidesPerView===x.slidesPerView?t:!1})}u.emit("loopFix")}function M0(){const i=this,{params:e,slidesEl:t}=i;if(!e.loop||!t||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const n=[];i.slides.forEach(r=>{const s=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;n[s]=r}),i.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),n.forEach(r=>{t.append(r)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var A0={loopCreate:T0,loopFix:b0,loopDestroy:M0};function w0(i){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=i?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function C0(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var R0={setGrabCursor:w0,unsetGrabCursor:C0};function L0(i,e){e===void 0&&(e=this);function t(n){if(!n||n===un()||n===Tt())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(i);return!r&&!n.getRootNode?null:r||t(n.getRootNode().host)}return t(e)}function uc(i,e,t){const n=Tt(),{params:r}=i,s=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return s&&(t<=o||t>=n.innerWidth-o)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function P0(i){const e=this,t=un();let n=i;n.originalEvent&&(n=n.originalEvent);const r=e.touchEventsData;if(n.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==n.pointerId)return;r.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(r.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){uc(e,n,n.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:a}=e;if(!a||!s.simulateTouch&&n.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let c=n.target;if(s.touchEventsTarget==="wrapper"&&!zS(c,e.wrapperEl)||"which"in n&&n.which===3||"button"in n&&n.button>0||r.isTouched&&r.isMoved)return;const u=!!s.noSwipingClass&&s.noSwipingClass!=="",f=n.composedPath?n.composedPath():n.path;u&&n.target&&n.target.shadowRoot&&f&&(c=f[0]);const m=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,g=!!(n.target&&n.target.shadowRoot);if(s.noSwiping&&(g?L0(m,c):c.closest(m))){e.allowClick=!0;return}if(s.swipeHandler&&!c.closest(s.swipeHandler))return;o.currentX=n.pageX,o.currentY=n.pageY;const v=o.currentX,x=o.currentY;if(!uc(e,n,v))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=v,o.startY=x,r.touchStartTime=ls(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let E=!0;c.matches(r.focusableElements)&&(E=!1,c.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==c&&(n.pointerType==="mouse"||n.pointerType!=="mouse"&&!c.matches(r.focusableElements))&&t.activeElement.blur();const h=E&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||h)&&!c.isContentEditable&&n.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",n)}function D0(i){const e=un(),t=this,n=t.touchEventsData,{params:r,touches:s,rtlTranslate:o,enabled:a}=t;if(!a||!r.simulateTouch&&i.pointerType==="mouse")return;let c=i;if(c.originalEvent&&(c=c.originalEvent),c.type==="pointermove"&&(n.touchId!==null||c.pointerId!==n.pointerId))return;let u;if(c.type==="touchmove"){if(u=[...c.changedTouches].find(M=>M.identifier===n.touchId),!u||u.identifier!==n.touchId)return}else u=c;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",c);return}const f=u.pageX,m=u.pageY;if(c.preventedByNestedSwiper){s.startX=f,s.startY=m;return}if(!t.allowTouchMove){c.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(s,{startX:f,startY:m,currentX:f,currentY:m}),n.touchStartTime=ls());return}if(r.touchReleaseOnEdges&&!r.loop)if(t.isVertical()){if(m<s.startY&&t.translate<=t.maxTranslate()||m>s.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else{if(o&&(f>s.startX&&-t.translate<=t.maxTranslate()||f<s.startX&&-t.translate>=t.minTranslate()))return;if(!o&&(f<s.startX&&t.translate<=t.maxTranslate()||f>s.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(n.focusableElements)&&e.activeElement!==c.target&&c.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&c.target===e.activeElement&&c.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit("touchMove",c),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=f,s.currentY=m;const g=s.currentX-s.startX,v=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(g**2+v**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let M;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?n.isScrolling=!1:g*g+v*v>=25&&(M=Math.atan2(Math.abs(v),Math.abs(g))*180/Math.PI,n.isScrolling=t.isHorizontal()?M>r.touchAngle:90-M>r.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",c),typeof n.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(n.startMoving=!0),n.isScrolling||c.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation();let x=t.isHorizontal()?g:v,E=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(x=Math.abs(x)*(o?1:-1),E=Math.abs(E)*(o?1:-1)),s.diff=x,x*=r.touchRatio,o&&(x=-x,E=-E);const h=t.touchesDirection;t.swipeDirection=x>0?"prev":"next",t.touchesDirection=E>0?"prev":"next";const l=t.params.loop&&!r.cssMode,_=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!n.isMoved){if(l&&_&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(M)}n.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",c)}if(new Date().getTime(),r._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&h!==t.touchesDirection&&l&&_&&Math.abs(x)>=1){Object.assign(s,{startX:f,startY:m,currentX:f,currentY:m,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit("sliderMove",c),n.isMoved=!0,n.currentTranslate=x+n.startTranslate;let y=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),x>0?(l&&_&&n.allowThresholdMove&&n.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(y=!1,r.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+x)**S))):x<0&&(l&&_&&n.allowThresholdMove&&n.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(y=!1,r.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-x)**S))),y&&(c.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),r.threshold>0)if(Math.abs(x)>r.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,n.currentTranslate=n.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{n.currentTranslate=n.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function I0(i){const e=this,t=e.touchEventsData;let n=i;n.originalEvent&&(n=n.originalEvent);let r;if(n.type==="touchend"||n.type==="touchcancel"){if(r=[...n.changedTouches].find(M=>M.identifier===t.touchId),!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||n.pointerId!==t.pointerId)return;r=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:a,rtlTranslate:c,slidesGrid:u,enabled:f}=e;if(!f||!o.simulateTouch&&n.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",n),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const m=ls(),g=m-t.touchStartTime;if(e.allowClick){const M=n.path||n.composedPath&&n.composedPath();e.updateClickedSlide(M&&M[0]||n.target,M),e.emit("tap click",n),g<300&&m-t.lastClickTime<300&&e.emit("doubleTap doubleClick",n)}if(t.lastClickTime=ls(),Uu(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||a.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let v;if(o.followFinger?v=c?e.translate:-e.translate:v=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:v});return}const x=v>=-e.maxTranslate()&&!e.params.loop;let E=0,h=e.slidesSizesGrid[0];for(let M=0;M<u.length;M+=M<o.slidesPerGroupSkip?1:o.slidesPerGroup){const L=M<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof u[M+L]<"u"?(x||v>=u[M]&&v<u[M+L])&&(E=M,h=u[M+L]-u[M]):(x||v>=u[M])&&(E=M,h=u[u.length-1]-u[u.length-2])}let l=null,_=null;o.rewind&&(e.isBeginning?_=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(l=0));const y=(v-u[E])/h,S=E<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(g>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(y>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?l:E+S):e.slideTo(E)),e.swipeDirection==="prev"&&(y>1-o.longSwipesRatio?e.slideTo(E+S):_!==null&&y<0&&Math.abs(y)>o.longSwipesRatio?e.slideTo(_):e.slideTo(E))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(n.target===e.navigation.nextEl||n.target===e.navigation.prevEl)?n.target===e.navigation.nextEl?e.slideTo(E+S):e.slideTo(E):(e.swipeDirection==="next"&&e.slideTo(l!==null?l:E+S),e.swipeDirection==="prev"&&e.slideTo(_!==null?_:E))}}function dc(){const i=this,{params:e,el:t}=i;if(t&&t.offsetWidth===0)return;e.breakpoints&&i.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:r,snapGrid:s}=i,o=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!a?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!o?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=r,i.allowSlideNext=n,i.params.watchOverflow&&s!==i.snapGrid&&i.checkOverflow()}function N0(i){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&i.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function O0(){const i=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=i;if(!n)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-e.scrollLeft:i.translate=-e.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let r;const s=i.maxTranslate()-i.minTranslate();s===0?r=0:r=(i.translate-i.minTranslate())/s,r!==i.progress&&i.updateProgress(t?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function F0(i){const e=this;ts(e,i.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function U0(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const Wu=(i,e)=>{const t=un(),{params:n,el:r,wrapperEl:s,device:o}=i,a=!!n.nested,c=e==="on"?"addEventListener":"removeEventListener",u=e;!r||typeof r=="string"||(t[c]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:a}),r[c]("touchstart",i.onTouchStart,{passive:!1}),r[c]("pointerdown",i.onTouchStart,{passive:!1}),t[c]("touchmove",i.onTouchMove,{passive:!1,capture:a}),t[c]("pointermove",i.onTouchMove,{passive:!1,capture:a}),t[c]("touchend",i.onTouchEnd,{passive:!0}),t[c]("pointerup",i.onTouchEnd,{passive:!0}),t[c]("pointercancel",i.onTouchEnd,{passive:!0}),t[c]("touchcancel",i.onTouchEnd,{passive:!0}),t[c]("pointerout",i.onTouchEnd,{passive:!0}),t[c]("pointerleave",i.onTouchEnd,{passive:!0}),t[c]("contextmenu",i.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&r[c]("click",i.onClick,!0),n.cssMode&&s[c]("scroll",i.onScroll),n.updateOnWindowResize?i[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",dc,!0):i[u]("observerUpdate",dc,!0),r[c]("load",i.onLoad,{capture:!0}))};function B0(){const i=this,{params:e}=i;i.onTouchStart=P0.bind(i),i.onTouchMove=D0.bind(i),i.onTouchEnd=I0.bind(i),i.onDocumentTouchStart=U0.bind(i),e.cssMode&&(i.onScroll=O0.bind(i)),i.onClick=N0.bind(i),i.onLoad=F0.bind(i),Wu(i,"on")}function z0(){Wu(this,"off")}var k0={attachEvents:B0,detachEvents:z0};const hc=(i,e)=>i.grid&&e.grid&&e.grid.rows>1;function H0(){const i=this,{realIndex:e,initialized:t,params:n,el:r}=i,s=n.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=un(),a=n.breakpointsBase==="window"||!n.breakpointsBase?n.breakpointsBase:"container",c=["window","container"].includes(n.breakpointsBase)||!n.breakpointsBase?i.el:o.querySelector(n.breakpointsBase),u=i.getBreakpoint(s,a,c);if(!u||i.currentBreakpoint===u)return;const m=(u in s?s[u]:void 0)||i.originalParams,g=hc(i,n),v=hc(i,m),x=i.params.grabCursor,E=m.grabCursor,h=n.enabled;g&&!v?(r.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),i.emitContainerClasses()):!g&&v&&(r.classList.add(`${n.containerModifierClass}grid`),(m.grid.fill&&m.grid.fill==="column"||!m.grid.fill&&n.grid.fill==="column")&&r.classList.add(`${n.containerModifierClass}grid-column`),i.emitContainerClasses()),x&&!E?i.unsetGrabCursor():!x&&E&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(L=>{if(typeof m[L]>"u")return;const P=n[L]&&n[L].enabled,I=m[L]&&m[L].enabled;P&&!I&&i[L].disable(),!P&&I&&i[L].enable()});const l=m.direction&&m.direction!==n.direction,_=n.loop&&(m.slidesPerView!==n.slidesPerView||l),y=n.loop;l&&t&&i.changeDirection(),Ot(i.params,m);const S=i.params.enabled,M=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),h&&!S?i.disable():!h&&S&&i.enable(),i.currentBreakpoint=u,i.emit("_beforeBreakpoint",m),t&&(_?(i.loopDestroy(),i.loopCreate(e),i.updateSlides()):!y&&M?(i.loopCreate(e),i.updateSlides()):y&&!M&&i.loopDestroy()),i.emit("breakpoint",m)}function G0(i,e,t){if(e===void 0&&(e="window"),!i||e==="container"&&!t)return;let n=!1;const r=Tt(),s=e==="window"?r.innerHeight:t.clientHeight,o=Object.keys(i).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const c=parseFloat(a.substr(1));return{value:s*c,point:a}}return{value:a,point:a}});o.sort((a,c)=>parseInt(a.value,10)-parseInt(c.value,10));for(let a=0;a<o.length;a+=1){const{point:c,value:u}=o[a];e==="window"?r.matchMedia(`(min-width: ${u}px)`).matches&&(n=c):u<=t.clientWidth&&(n=c)}return n||"max"}var V0={setBreakpoint:H0,getBreakpoint:G0};function W0(i,e){const t=[];return i.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(r=>{n[r]&&t.push(e+r)}):typeof n=="string"&&t.push(e+n)}),t}function X0(){const i=this,{classNames:e,params:t,rtl:n,el:r,device:s}=i,o=W0(["initialized",t.direction,{"free-mode":i.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),r.classList.add(...e),i.emitContainerClasses()}function $0(){const i=this,{el:e,classNames:t}=i;!e||typeof e=="string"||(e.classList.remove(...t),i.emitContainerClasses())}var q0={addClasses:X0,removeClasses:$0};function Y0(){const i=this,{isLocked:e,params:t}=i,{slidesOffsetBefore:n}=t;if(n){const r=i.slides.length-1,s=i.slidesGrid[r]+i.slidesSizesGrid[r]+n*2;i.isLocked=i.size>s}else i.isLocked=i.snapGrid.length===1;t.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),t.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),e&&e!==i.isLocked&&(i.isEnd=!1),e!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var j0={checkOverflow:Y0},fc={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function K0(i,e){return function(n){n===void 0&&(n={});const r=Object.keys(n)[0],s=n[r];if(typeof s!="object"||s===null){Ot(e,n);return}if(i[r]===!0&&(i[r]={enabled:!0}),r==="navigation"&&i[r]&&i[r].enabled&&!i[r].prevEl&&!i[r].nextEl&&(i[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&i[r]&&i[r].enabled&&!i[r].el&&(i[r].auto=!0),!(r in i&&"enabled"in s)){Ot(e,n);return}typeof i[r]=="object"&&!("enabled"in i[r])&&(i[r].enabled=!0),i[r]||(i[r]={enabled:!1}),Ot(e,n)}}const Oo={eventsEmitter:qS,update:r0,translate:u0,transition:p0,slide:E0,loop:A0,grabCursor:R0,events:k0,breakpoints:V0,checkOverflow:j0,classes:q0},Fo={};class Wt{constructor(){let e,t;for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?t=r[0]:[e,t]=r,t||(t={}),t=Ot({},t),e&&!t.el&&(t.el=e);const o=un();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){const f=[];return o.querySelectorAll(t.el).forEach(m=>{const g=Ot({},t,{el:m});f.push(new Wt(g))}),f}const a=this;a.__swiper__=!0,a.support=ku(),a.device=Hu({userAgent:t.userAgent}),a.browser=Gu(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],t.modules&&Array.isArray(t.modules)&&a.modules.push(...t.modules);const c={};a.modules.forEach(f=>{f({params:t,swiper:a,extendParams:K0(t,c),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const u=Ot({},fc,c);return a.params=Ot({},u,Fo,t),a.originalParams=Ot({},a.params),a.passedParams=Ot({},t),a.params&&a.params.on&&Object.keys(a.params.on).forEach(f=>{a.on(f,a.params.on[f])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,r=sn(t,`.${n.slideClass}, swiper-slide`),s=ds(r[0]);return ds(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=sn(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),o=(n.maxTranslate()-r)*e+r;n.translateTo(o,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const n=this,{params:r,slides:s,slidesGrid:o,slidesSizesGrid:a,size:c,activeIndex:u}=n;let f=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let m=s[u]?Math.ceil(s[u].swiperSlideSize):0,g;for(let v=u+1;v<s.length;v+=1)s[v]&&!g&&(m+=Math.ceil(s[v].swiperSlideSize),f+=1,m>c&&(g=!0));for(let v=u-1;v>=0;v-=1)s[v]&&!g&&(m+=s[v].swiperSlideSize,f+=1,m>c&&(g=!0))}else if(e==="current")for(let m=u+1;m<s.length;m+=1)(t?o[m]+a[m]-o[u]<c:o[m]-o[u]<c)&&(f+=1);else for(let m=u-1;m>=0;m-=1)o[u]-o[m]<c&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&ts(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const o=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(o.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const n=this,r=n.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):sn(n,r())[0];return!o&&t.params.createElements&&(o=us("div",t.params.wrapperClass),n.append(o),sn(n,`.${t.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(t,{el:n,wrapperEl:o,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:o,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||In(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||In(n,"direction")==="rtl"),wrongRTL:In(o,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(s=>{s.complete?ts(t,s):s.addEventListener("load",o=>{ts(t,o.target)})}),Yo(t),t.initialized=!0,Yo(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const n=this,{params:r,el:s,wrapperEl:o,slides:a}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),o&&o.removeAttribute("style"),a&&a.length&&a.forEach(c=>{c.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),c.removeAttribute("style"),c.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(c=>{n.off(c)}),e!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),NS(n)),n.destroyed=!0),null}static extendDefaults(e){Ot(Fo,e)}static get extendedDefaults(){return Fo}static get defaults(){return fc}static installModule(e){Wt.prototype.__modules__||(Wt.prototype.__modules__=[]);const t=Wt.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Wt.installModule(t)),Wt):(Wt.installModule(e),Wt)}}Object.keys(Oo).forEach(i=>{Object.keys(Oo[i]).forEach(e=>{Wt.prototype[e]=Oo[i][e]})});Wt.use([XS,$S]);function Z0(i,e,t,n){return i.params.createElements&&Object.keys(n).forEach(r=>{if(!t[r]&&t.auto===!0){let s=sn(i.el,`.${n[r]}`)[0];s||(s=us("div",n[r]),s.className=n[r],i.el.append(s)),t[r]=s,e[r]=s}}),t}function tr(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function J0(i){let{swiper:e,extendParams:t,on:n,emit:r}=i;const s="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:_=>_,formatFractionTotal:_=>_,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function c(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function u(_,y){const{bulletActiveClass:S}=e.params.pagination;_&&(_=_[`${y==="prev"?"previous":"next"}ElementSibling`],_&&(_.classList.add(`${S}-${y}`),_=_[`${y==="prev"?"previous":"next"}ElementSibling`],_&&_.classList.add(`${S}-${y}-${y}`)))}function f(_,y,S){if(_=_%S,y=y%S,y===_+1)return"next";if(y===_-1)return"previous"}function m(_){const y=_.target.closest(tr(e.params.pagination.bulletClass));if(!y)return;_.preventDefault();const S=ds(y)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===S)return;const M=f(e.realIndex,S,e.slides.length);M==="next"?e.slideNext():M==="previous"?e.slidePrev():e.slideToLoop(S)}else e.slideTo(S)}function g(){const _=e.rtl,y=e.params.pagination;if(c())return;let S=e.pagination.el;S=vn(S);let M,L;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,I=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(L=e.previousRealIndex||0,M=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(M=e.snapIndex,L=e.previousSnapIndex):(L=e.previousIndex||0,M=e.activeIndex||0),y.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const A=e.pagination.bullets;let T,w,O;if(y.dynamicBullets&&(o=qo(A[0],e.isHorizontal()?"width":"height"),S.forEach(U=>{U.style[e.isHorizontal()?"width":"height"]=`${o*(y.dynamicMainBullets+4)}px`}),y.dynamicMainBullets>1&&L!==void 0&&(a+=M-(L||0),a>y.dynamicMainBullets-1?a=y.dynamicMainBullets-1:a<0&&(a=0)),T=Math.max(M-a,0),w=T+(Math.min(A.length,y.dynamicMainBullets)-1),O=(w+T)/2),A.forEach(U=>{const G=[...["","-next","-next-next","-prev","-prev-prev","-main"].map($=>`${y.bulletActiveClass}${$}`)].map($=>typeof $=="string"&&$.includes(" ")?$.split(" "):$).flat();U.classList.remove(...G)}),S.length>1)A.forEach(U=>{const G=ds(U);G===M?U.classList.add(...y.bulletActiveClass.split(" ")):e.isElement&&U.setAttribute("part","bullet"),y.dynamicBullets&&(G>=T&&G<=w&&U.classList.add(...`${y.bulletActiveClass}-main`.split(" ")),G===T&&u(U,"prev"),G===w&&u(U,"next"))});else{const U=A[M];if(U&&U.classList.add(...y.bulletActiveClass.split(" ")),e.isElement&&A.forEach((G,$)=>{G.setAttribute("part",$===M?"bullet-active":"bullet")}),y.dynamicBullets){const G=A[T],$=A[w];for(let k=T;k<=w;k+=1)A[k]&&A[k].classList.add(...`${y.bulletActiveClass}-main`.split(" "));u(G,"prev"),u($,"next")}}if(y.dynamicBullets){const U=Math.min(A.length,y.dynamicMainBullets+4),G=(o*U-o)/2-O*o,$=_?"right":"left";A.forEach(k=>{k.style[e.isHorizontal()?$:"top"]=`${G}px`})}}S.forEach((A,T)=>{if(y.type==="fraction"&&(A.querySelectorAll(tr(y.currentClass)).forEach(w=>{w.textContent=y.formatFractionCurrent(M+1)}),A.querySelectorAll(tr(y.totalClass)).forEach(w=>{w.textContent=y.formatFractionTotal(I)})),y.type==="progressbar"){let w;y.progressbarOpposite?w=e.isHorizontal()?"vertical":"horizontal":w=e.isHorizontal()?"horizontal":"vertical";const O=(M+1)/I;let U=1,G=1;w==="horizontal"?U=O:G=O,A.querySelectorAll(tr(y.progressbarFillClass)).forEach($=>{$.style.transform=`translate3d(0,0,0) scaleX(${U}) scaleY(${G})`,$.style.transitionDuration=`${e.params.speed}ms`})}y.type==="custom"&&y.renderCustom?(lc(A,y.renderCustom(e,M+1,I)),T===0&&r("paginationRender",A)):(T===0&&r("paginationRender",A),r("paginationUpdate",A)),e.params.watchOverflow&&e.enabled&&A.classList[e.isLocked?"add":"remove"](y.lockClass)})}function v(){const _=e.params.pagination;if(c())return;const y=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let S=e.pagination.el;S=vn(S);let M="";if(_.type==="bullets"){let L=e.params.loop?Math.ceil(y/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&L>y&&(L=y);for(let P=0;P<L;P+=1)_.renderBullet?M+=_.renderBullet.call(e,P,_.bulletClass):M+=`<${_.bulletElement} ${e.isElement?'part="bullet"':""} class="${_.bulletClass}"></${_.bulletElement}>`}_.type==="fraction"&&(_.renderFraction?M=_.renderFraction.call(e,_.currentClass,_.totalClass):M=`<span class="${_.currentClass}"></span> / <span class="${_.totalClass}"></span>`),_.type==="progressbar"&&(_.renderProgressbar?M=_.renderProgressbar.call(e,_.progressbarFillClass):M=`<span class="${_.progressbarFillClass}"></span>`),e.pagination.bullets=[],S.forEach(L=>{_.type!=="custom"&&lc(L,M||""),_.type==="bullets"&&e.pagination.bullets.push(...L.querySelectorAll(tr(_.bulletClass)))}),_.type!=="custom"&&r("paginationRender",S[0])}function x(){e.params.pagination=Z0(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const _=e.params.pagination;if(!_.el)return;let y;typeof _.el=="string"&&e.isElement&&(y=e.el.querySelector(_.el)),!y&&typeof _.el=="string"&&(y=[...document.querySelectorAll(_.el)]),y||(y=_.el),!(!y||y.length===0)&&(e.params.uniqueNavElements&&typeof _.el=="string"&&Array.isArray(y)&&y.length>1&&(y=[...e.el.querySelectorAll(_.el)],y.length>1&&(y=y.find(S=>zu(S,".swiper")[0]===e.el))),Array.isArray(y)&&y.length===1&&(y=y[0]),Object.assign(e.pagination,{el:y}),y=vn(y),y.forEach(S=>{_.type==="bullets"&&_.clickable&&S.classList.add(...(_.clickableClass||"").split(" ")),S.classList.add(_.modifierClass+_.type),S.classList.add(e.isHorizontal()?_.horizontalClass:_.verticalClass),_.type==="bullets"&&_.dynamicBullets&&(S.classList.add(`${_.modifierClass}${_.type}-dynamic`),a=0,_.dynamicMainBullets<1&&(_.dynamicMainBullets=1)),_.type==="progressbar"&&_.progressbarOpposite&&S.classList.add(_.progressbarOppositeClass),_.clickable&&S.addEventListener("click",m),e.enabled||S.classList.add(_.lockClass)}))}function E(){const _=e.params.pagination;if(c())return;let y=e.pagination.el;y&&(y=vn(y),y.forEach(S=>{S.classList.remove(_.hiddenClass),S.classList.remove(_.modifierClass+_.type),S.classList.remove(e.isHorizontal()?_.horizontalClass:_.verticalClass),_.clickable&&(S.classList.remove(...(_.clickableClass||"").split(" ")),S.removeEventListener("click",m))})),e.pagination.bullets&&e.pagination.bullets.forEach(S=>S.classList.remove(..._.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const _=e.params.pagination;let{el:y}=e.pagination;y=vn(y),y.forEach(S=>{S.classList.remove(_.horizontalClass,_.verticalClass),S.classList.add(e.isHorizontal()?_.horizontalClass:_.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?l():(x(),v(),g())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&g()}),n("snapIndexChange",()=>{g()}),n("snapGridLengthChange",()=>{v(),g()}),n("destroy",()=>{E()}),n("enable disable",()=>{let{el:_}=e.pagination;_&&(_=vn(_),_.forEach(y=>y.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{g()}),n("click",(_,y)=>{const S=y.target,M=vn(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&M&&M.length>0&&!S.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&S===e.navigation.nextEl||e.navigation.prevEl&&S===e.navigation.prevEl))return;const L=M[0].classList.contains(e.params.pagination.hiddenClass);r(L===!0?"paginationShow":"paginationHide"),M.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const h=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:_}=e.pagination;_&&(_=vn(_),_.forEach(y=>y.classList.remove(e.params.pagination.paginationDisabledClass))),x(),v(),g()},l=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:_}=e.pagination;_&&(_=vn(_),_.forEach(y=>y.classList.add(e.params.pagination.paginationDisabledClass))),E()};Object.assign(e.pagination,{enable:h,disable:l,render:v,update:g,init:x,destroy:E})}function Q0(i){let{swiper:e,extendParams:t,on:n,emit:r,params:s}=i;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,c=s&&s.autoplay?s.autoplay.delay:3e3,u=s&&s.autoplay?s.autoplay.delay:3e3,f,m=new Date().getTime(),g,v,x,E,h,l,_;function y(H){!e||e.destroyed||!e.wrapperEl||H.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",y),!(_||H.detail&&H.detail.bySwiperTouchMove)&&T())}const S=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?g=!0:g&&(u=f,g=!1);const H=e.autoplay.paused?f:m+u-new Date().getTime();e.autoplay.timeLeft=H,r("autoplayTimeLeft",H,H/c),a=requestAnimationFrame(()=>{S()})},M=()=>{let H;return e.virtual&&e.params.virtual.enabled?H=e.slides.find(ce=>ce.classList.contains("swiper-slide-active")):H=e.slides[e.activeIndex],H?parseInt(H.getAttribute("data-swiper-autoplay"),10):void 0},L=H=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),S();let ie=typeof H>"u"?e.params.autoplay.delay:H;c=e.params.autoplay.delay,u=e.params.autoplay.delay;const ce=M();!Number.isNaN(ce)&&ce>0&&typeof H>"u"&&(ie=ce,c=ce,u=ce),f=ie;const _e=e.params.speed,Le=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(_e,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,_e,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(_e,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,_e,!0,!0),r("autoplay")),e.params.cssMode&&(m=new Date().getTime(),requestAnimationFrame(()=>{L()})))};return ie>0?(clearTimeout(o),o=setTimeout(()=>{Le()},ie)):requestAnimationFrame(()=>{Le()}),ie},P=()=>{m=new Date().getTime(),e.autoplay.running=!0,L(),r("autoplayStart")},I=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},A=(H,ie)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),H||(l=!0);const ce=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",y):T()};if(e.autoplay.paused=!0,ie){h&&(f=e.params.autoplay.delay),h=!1,ce();return}f=(f||e.params.autoplay.delay)-(new Date().getTime()-m),!(e.isEnd&&f<0&&!e.params.loop)&&(f<0&&(f=0),ce())},T=()=>{e.isEnd&&f<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(m=new Date().getTime(),l?(l=!1,L(f)):L(),e.autoplay.paused=!1,r("autoplayResume"))},w=()=>{if(e.destroyed||!e.autoplay.running)return;const H=un();H.visibilityState==="hidden"&&(l=!0,A(!0)),H.visibilityState==="visible"&&T()},O=H=>{H.pointerType==="mouse"&&(l=!0,_=!0,!(e.animating||e.autoplay.paused)&&A(!0))},U=H=>{H.pointerType==="mouse"&&(_=!1,e.autoplay.paused&&T())},G=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",O),e.el.addEventListener("pointerleave",U))},$=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",O),e.el.removeEventListener("pointerleave",U))},k=()=>{un().addEventListener("visibilitychange",w)},q=()=>{un().removeEventListener("visibilitychange",w)};n("init",()=>{e.params.autoplay.enabled&&(G(),k(),P())}),n("destroy",()=>{$(),q(),e.autoplay.running&&I()}),n("_freeModeStaticRelease",()=>{(x||l)&&T()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?I():A(!0,!0)}),n("beforeTransitionStart",(H,ie,ce)=>{e.destroyed||!e.autoplay.running||(ce||!e.params.autoplay.disableOnInteraction?A(!0,!0):I())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){I();return}v=!0,x=!1,l=!1,E=setTimeout(()=>{l=!0,x=!0,A(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(E),clearTimeout(o),e.params.autoplay.disableOnInteraction){x=!1,v=!1;return}x&&e.params.cssMode&&T(),x=!1,v=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||(h=!0)}),Object.assign(e.autoplay,{start:P,stop:I,pause:A,resume:T})}function jo(){return jo=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},jo.apply(this,arguments)}var eE={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,e){},onStringTyped:function(i,e){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,e){},onTypingResumed:function(i,e){},onReset:function(i){},onStop:function(i,e){},onStart:function(i,e){},onDestroy:function(i){}},tE=new(function(){function i(){}var e=i.prototype;return e.load=function(t,n,r){if(t.el=typeof r=="string"?document.querySelector(r):r,t.options=jo({},eE,n),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(u){return u.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(t.stringsElement.children),o=s.length;if(o)for(var a=0;a<o;a+=1)t.strings.push(s[a].innerHTML.trim())}for(var c in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[c]=c;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var n="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+n+"]")){var r=document.createElement("style");r.setAttribute(n,"true"),r.innerHTML=`
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
      `,document.body.appendChild(r)}},e.appendFadeOutAnimationCss=function(t){var n="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+n+"]")){var r=document.createElement("style");r.setAttribute(n,"true"),r.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(r)}},i}()),pc=new(function(){function i(){}var e=i.prototype;return e.typeHtmlChars=function(t,n,r){if(r.contentType!=="html")return n;var s=t.substring(n).charAt(0);if(s==="<"||s==="&"){var o;for(o=s==="<"?">":";";t.substring(n+1).charAt(0)!==o&&!(1+ ++n>t.length););n++}return n},e.backSpaceHtmlChars=function(t,n,r){if(r.contentType!=="html")return n;var s=t.substring(n).charAt(0);if(s===">"||s===";"){var o;for(o=s===">"?"<":"&";t.substring(n-1).charAt(0)!==o&&!(--n<0););n--}return n},i}()),nE=function(){function i(t,n){tE.load(this,n,t),this.begin()}var e=i.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,n){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){n=pc.typeHtmlChars(t,n,r);var a=0,c=t.substring(n);if(c.charAt(0)==="^"&&/^\^\d+/.test(c)){var u=1;u+=(c=/\d+/.exec(c)[0]).length,a=parseInt(c),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),t=t.substring(0,n)+t.substring(n+u),r.toggleBlinking(!0)}if(c.charAt(0)==="`"){for(;t.substring(n+o).charAt(0)!=="`"&&(o++,!(n+o>t.length)););var f=t.substring(0,n),m=t.substring(f.length+1,n+o),g=t.substring(n+o+1);t=f+m+g,o--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),n>=t.length?r.doneTyping(t,n):r.keepTyping(t,n,o),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},a)},s):this.setPauseStatus(t,n,!0)},e.keepTyping=function(t,n,r){n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=t.substring(0,n+=r);this.replaceText(s),this.typewrite(t,n)},e.doneTyping=function(t,n){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){r.backspace(t,n)},this.backDelay))},e.backspace=function(t,n){var r=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=pc.backSpaceHtmlChars(t,n,r);var o=t.substring(0,n);if(r.replaceText(o),r.smartBackspace){var a=r.strings[r.arrayPos+1];r.stopNum=a&&o===a.substring(0,n)?n:0}n>r.stopNum?(n--,r.backspace(t,n)):n<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],n))},s)}else this.setPauseStatus(t,n,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,n,r){this.pause.typewrite=r,this.pause.curString=t,this.pause.curStrPos=n},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(n){t.stop()}),this.el.addEventListener("blur",function(n){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i}(),Uo={exports:{}};/*!
 * purecounter.js - A simple yet configurable native javascript counter which you can count on.
 * Author: Stig Rex
 * Version: 1.5.0
 * Url: https://github.com/srexi/purecounterjs
 * License: MIT
 */var mc;function iE(){return mc||(mc=1,function(i,e){(function(t,n){i.exports=n()})(self,function(){return function(){var t={3:function(s,o,a){function c(v){return function(x){if(Array.isArray(x))return u(x)}(v)||function(x){if(typeof Symbol<"u"&&x[Symbol.iterator]!=null||x["@@iterator"]!=null)return Array.from(x)}(v)||function(x,E){if(x){if(typeof x=="string")return u(x,E);var h=Object.prototype.toString.call(x).slice(8,-1);if(h==="Object"&&x.constructor&&(h=x.constructor.name),h==="Map"||h==="Set")return Array.from(x);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return u(x,E)}}(v)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function u(v,x){(x==null||x>v.length)&&(x=v.length);for(var E=0,h=new Array(x);E<x;E++)h[E]=v[E];return h}function f(v,x){if(!(v instanceof x))throw new TypeError("Cannot call a class as a function")}function m(v,x){for(var E=0;E<x.length;E++){var h=x[E];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(v,h.key,h)}}a.d(o,{Z:function(){return g}});var g=function(){function v(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};f(this,v),this.defaults={start:0,end:100,duration:2e3,delay:10,once:!0,pulse:!1,decimals:0,legacy:!0,filesizing:!1,currency:!1,separator:!1,formater:"us-US",selector:".purecounter"},this.configOptions=this.setOptions(h,this.defaults),this.elements=document.querySelectorAll(this.configOptions.selector),this.intersectionSupport=this.intersectionListenerSupported(),this.registerEventListeners()}var x,E;return x=v,E=[{key:"setOptions",value:function(h){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_={};for(var y in h)if(Object.keys(l).length===0||l.hasOwnProperty(y)){var S=this.parseValue(h[y]);_[y]=S,y.match(/duration|pulse/)&&(_[y]=typeof S!="boolean"?1e3*S:S)}return Object.assign({},l,_)}},{key:"registerEventListeners",value:function(){var h=this.elements;if(h.length!==0)if(this.intersectionSupport){var l=new IntersectionObserver(this.animateElements.bind(this),{root:null,rootMargin:"20px",threshold:.5});h.forEach(function(_){l.observe(_)})}else window.addEventListener&&(this.animateLegacy(h),window.addEventListener("scroll",function(_){this.animateLegacy(h)},{passive:!0}))}},{key:"animateLegacy",value:function(h){var l=this;h.forEach(function(_){l.parseConfig(_).legacy===!0&&l.elementIsInView(_)&&l.animateElements([_])})}},{key:"animateElements",value:function(h,l){var _=this;h.forEach(function(y){var S=y.target||y,M=_.parseConfig(S);if(M.duration<=0)return S.innerHTML=_.formatNumber(M.end,M);if(!l&&!_.elementIsInView(y)||l&&y.intersectionRatio<.5){var L=M.start>M.end?M.end:M.start;return S.innerHTML=_.formatNumber(L,M)}setTimeout(function(){return _.startCounter(S,M)},M.delay)})}},{key:"startCounter",value:function(h,l){var _=this,y=(l.end-l.start)/(l.duration/l.delay),S="inc";l.start>l.end&&(S="dec",y*=-1);var M=this.parseValue(l.start);h.innerHTML=this.formatNumber(M,l),l.once===!0&&h.setAttribute("data-purecounter-duration",0);var L=setInterval(function(){var P=_.nextNumber(M,y,S);h.innerHTML=_.formatNumber(P,l),((M=P)>=l.end&&S==="inc"||M<=l.end&&S==="dec")&&(h.innerHTML=_.formatNumber(l.end,l),l.pulse&&(h.setAttribute("data-purecounter-duration",0),setTimeout(function(){h.setAttribute("data-purecounter-duration",l.duration/1e3)},l.pulse)),clearInterval(L))},l.delay)}},{key:"parseConfig",value:function(h){var l=this,_=[].filter.call(h.attributes,function(S){return/^data-purecounter-/.test(S.name)}),y=_.length!=0?Object.assign.apply(Object,[{}].concat(c(_.map(function(S){var M=S.name,L=S.value;return function(P,I,A){return I in P?Object.defineProperty(P,I,{value:A,enumerable:!0,configurable:!0,writable:!0}):P[I]=A,P}({},M.replace("data-purecounter-","").toLowerCase(),l.parseValue(L))})))):{};return this.setOptions(y,this.configOptions)}},{key:"nextNumber",value:function(h,l){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"inc";return h=this.parseValue(h),l=this.parseValue(l),parseFloat(_==="inc"?h+l:h-l)}},{key:"convertNumber",value:function(h,l){if(l.filesizing||l.currency){h=Math.abs(Number(h));var _=1e3,y=l.currency&&typeof l.currency=="string"?l.currency:"",S=l.decimals||1,M=["","K","M","B","T"],L="";l.filesizing&&(_=1024,M=["bytes","KB","MB","GB","TB"]);for(var P=4;P>=0;P--)if(P===0&&(L="".concat(h.toFixed(S)," ").concat(M[P])),h>=this.getFilesizeThreshold(_,P)){L="".concat((h/this.getFilesizeThreshold(_,P)).toFixed(S)," ").concat(M[P]);break}return y+L}return parseFloat(h)}},{key:"getFilesizeThreshold",value:function(h,l){return Math.pow(h,l)}},{key:"applySeparator",value:function(h,l){if(l.formater){var _=l.separator?typeof l.separator=="string"?l.separator:",":"";return l.formater!=="en-US"&&l.separator===!0?h:(y=_,h.replace(/^(?:(\d{1,3},(?:\d{1,3},?)*)|(\d{1,3}\.(?:\d{1,3}\.?)*)|(\d{1,3}(?:\s\d{1,3})*))([\.,]?\d{0,2}?)$/gi,function(S,M,L,P,I){var A="",T="";if(M!==void 0?(A=M.replace(new RegExp(/,/gi,"gi"),y),T=","):L!==void 0?A=L.replace(new RegExp(/\./gi,"gi"),y):P!==void 0&&(A=P.replace(new RegExp(/ /gi,"gi"),y)),I!==void 0){var w=T!==","&&y!==","?",":".";A+=I.replace(new RegExp(/\.|,/gi,"gi"),w)}return A}))}var y;return h}},{key:"formatNumber",value:function(h,l){var _={minimumFractionDigits:l.decimals,maximumFractionDigits:l.decimals},y=typeof l.formater=="string"?l.formater:void 0;return h=this.convertNumber(h,l),h=l.formater?h.toLocaleString(y,_):parseInt(h).toString(),this.applySeparator(h,l)}},{key:"getLocaleSeparator",value:function(){}},{key:"parseValue",value:function(h){return/^[0-9]+\.[0-9]+$/.test(h)?parseFloat(h):/^[0-9]+$/.test(h)?parseInt(h):/^true|false/i.test(h)?/^true/i.test(h):h}},{key:"elementIsInView",value:function(h){for(var l=h.offsetTop,_=h.offsetLeft,y=h.offsetWidth,S=h.offsetHeight;h.offsetParent;)l+=(h=h.offsetParent).offsetTop,_+=h.offsetLeft;return l>=window.pageYOffset&&_>=window.pageXOffset&&l+S<=window.pageYOffset+window.innerHeight&&_+y<=window.pageXOffset+window.innerWidth}},{key:"intersectionListenerSupported",value:function(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}}],E&&m(x.prototype,E),Object.defineProperty(x,"prototype",{writable:!1}),v}()},634:function(s,o,a){var c=a(3).Z;s.exports=c}},n={};function r(s){var o=n[s];if(o!==void 0)return o.exports;var a=n[s]={exports:{}};return t[s](a,a.exports,r),a.exports}return r.d=function(s,o){for(var a in o)r.o(o,a)&&!r.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:o[a]})},r.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},r(634)}()})}(Uo)),Uo.exports}var rE=iE();const sE=xa(rE);/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/(function(){var i=0,e={};function t(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+i,this.options=t.Adapter.extend({},t.defaults,n),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),e[this.key]=this,i+=1}t.prototype.queueTrigger=function(n){this.group.queueTrigger(this,n)},t.prototype.trigger=function(n){this.enabled&&this.callback&&this.callback.apply(this,n)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete e[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(n){var r=[];for(var s in e)r.push(e[s]);for(var o=0,a=r.length;o<a;o++)r[o][n]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var n in e)e[n].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t})();(function(){function i(o){window.setTimeout(o,1e3/60)}var e=0,t={},n=window.Waypoint,r=window.onload;function s(o){this.element=o,this.Adapter=n.Adapter,this.adapter=new this.Adapter(o),this.key="waypoint-context-"+e,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},o.waypointContextKey=this.key,t[o.waypointContextKey]=this,e+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new s(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}s.prototype.add=function(o){var a=o.options.horizontal?"horizontal":"vertical";this.waypoints[a][o.key]=o,this.refresh()},s.prototype.checkEmpty=function(){var o=this.Adapter.isEmptyObject(this.waypoints.horizontal),a=this.Adapter.isEmptyObject(this.waypoints.vertical),c=this.element==this.element.window;o&&a&&!c&&(this.adapter.off(".waypoints"),delete t[this.key])},s.prototype.createThrottledResizeHandler=function(){var o=this;function a(){o.handleResize(),o.didResize=!1}this.adapter.on("resize.waypoints",function(){o.didResize||(o.didResize=!0,n.requestAnimationFrame(a))})},s.prototype.createThrottledScrollHandler=function(){var o=this;function a(){o.handleScroll(),o.didScroll=!1}this.adapter.on("scroll.waypoints",function(){(!o.didScroll||n.isTouch)&&(o.didScroll=!0,n.requestAnimationFrame(a))})},s.prototype.handleResize=function(){n.Context.refreshAll()},s.prototype.handleScroll=function(){var o={},a={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var c in a){var u=a[c],f=u.newScroll>u.oldScroll,m=f?u.forward:u.backward;for(var g in this.waypoints[c]){var v=this.waypoints[c][g];if(v.triggerPoint!==null){var x=u.oldScroll<v.triggerPoint,E=u.newScroll>=v.triggerPoint,h=x&&E,l=!x&&!E;(h||l)&&(v.queueTrigger(m),o[v.group.id]=v.group)}}}for(var _ in o)o[_].flushTriggers();this.oldScroll={x:a.horizontal.newScroll,y:a.vertical.newScroll}},s.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},s.prototype.remove=function(o){delete this.waypoints[o.axis][o.key],this.checkEmpty()},s.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},s.prototype.destroy=function(){var o=[];for(var a in this.waypoints)for(var c in this.waypoints[a])o.push(this.waypoints[a][c]);for(var u=0,f=o.length;u<f;u++)o[u].destroy()},s.prototype.refresh=function(){var o=this.element==this.element.window,a=o?void 0:this.adapter.offset(),c={},u;this.handleScroll(),u={horizontal:{contextOffset:o?0:a.left,contextScroll:o?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:o?0:a.top,contextScroll:o?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var f in u){var m=u[f];for(var g in this.waypoints[f]){var v=this.waypoints[f][g],x=v.options.offset,E=v.triggerPoint,h=0,l=E==null,_,y,S,M,L;v.element!==v.element.window&&(h=v.adapter.offset()[m.offsetProp]),typeof x=="function"?x=x.apply(v):typeof x=="string"&&(x=parseFloat(x),v.options.offset.indexOf("%")>-1&&(x=Math.ceil(m.contextDimension*x/100))),_=m.contextScroll-m.contextOffset,v.triggerPoint=Math.floor(h+_-x),y=E<m.oldScroll,S=v.triggerPoint>=m.oldScroll,M=y&&S,L=!y&&!S,!l&&M?(v.queueTrigger(m.backward),c[v.group.id]=v.group):(!l&&L||l&&m.oldScroll>=v.triggerPoint)&&(v.queueTrigger(m.forward),c[v.group.id]=v.group)}}return n.requestAnimationFrame(function(){for(var P in c)c[P].flushTriggers()}),this},s.findOrCreateByElement=function(o){return s.findByElement(o)||new s(o)},s.refreshAll=function(){for(var o in t)t[o].refresh()},s.findByElement=function(o){return t[o.waypointContextKey]},window.onload=function(){r&&r(),s.refreshAll()},n.requestAnimationFrame=function(o){var a=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||i;a.call(window,o)},n.Context=s})();(function(){function i(s,o){return s.triggerPoint-o.triggerPoint}function e(s,o){return o.triggerPoint-s.triggerPoint}var t={vertical:{},horizontal:{}},n=window.Waypoint;function r(s){this.name=s.name,this.axis=s.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),t[this.axis][this.name]=this}r.prototype.add=function(s){this.waypoints.push(s)},r.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},r.prototype.flushTriggers=function(){for(var s in this.triggerQueues){var o=this.triggerQueues[s],a=s==="up"||s==="left";o.sort(a?e:i);for(var c=0,u=o.length;c<u;c+=1){var f=o[c];(f.options.continuous||c===o.length-1)&&f.trigger([s])}}this.clearTriggerQueues()},r.prototype.next=function(s){this.waypoints.sort(i);var o=n.Adapter.inArray(s,this.waypoints),a=o===this.waypoints.length-1;return a?null:this.waypoints[o+1]},r.prototype.previous=function(s){this.waypoints.sort(i);var o=n.Adapter.inArray(s,this.waypoints);return o?this.waypoints[o-1]:null},r.prototype.queueTrigger=function(s,o){this.triggerQueues[o].push(s)},r.prototype.remove=function(s){var o=n.Adapter.inArray(s,this.waypoints);o>-1&&this.waypoints.splice(o,1)},r.prototype.first=function(){return this.waypoints[0]},r.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},r.findOrCreate=function(s){return t[s.axis][s.name]||new r(s)},n.Group=r})();(function(){var i=window.Waypoint;function e(r){return r===r.window}function t(r){return e(r)?r:r.defaultView}function n(r){this.element=r,this.handlers={}}n.prototype.innerHeight=function(){var r=e(this.element);return r?this.element.innerHeight:this.element.clientHeight},n.prototype.innerWidth=function(){var r=e(this.element);return r?this.element.innerWidth:this.element.clientWidth},n.prototype.off=function(r,s){function o(v,x,E){for(var h=0,l=x.length-1;h<l;h++){var _=x[h];(!E||E===_)&&v.removeEventListener(_)}}var a=r.split("."),c=a[0],u=a[1],f=this.element;if(u&&this.handlers[u]&&c)o(f,this.handlers[u][c],s),this.handlers[u][c]=[];else if(c)for(var m in this.handlers)o(f,this.handlers[m][c]||[],s),this.handlers[m][c]=[];else if(u&&this.handlers[u]){for(var g in this.handlers[u])o(f,this.handlers[u][g],s);this.handlers[u]={}}},n.prototype.offset=function(){if(!this.element.ownerDocument)return null;var r=this.element.ownerDocument.documentElement,s=t(this.element.ownerDocument),o={top:0,left:0};return this.element.getBoundingClientRect&&(o=this.element.getBoundingClientRect()),{top:o.top+s.pageYOffset-r.clientTop,left:o.left+s.pageXOffset-r.clientLeft}},n.prototype.on=function(r,s){var o=r.split("."),a=o[0],c=o[1]||"__default",u=this.handlers[c]=this.handlers[c]||{},f=u[a]=u[a]||[];f.push(s),this.element.addEventListener(a,s)},n.prototype.outerHeight=function(r){var s=this.innerHeight(),o;return r&&!e(this.element)&&(o=window.getComputedStyle(this.element),s+=parseInt(o.marginTop,10),s+=parseInt(o.marginBottom,10)),s},n.prototype.outerWidth=function(r){var s=this.innerWidth(),o;return r&&!e(this.element)&&(o=window.getComputedStyle(this.element),s+=parseInt(o.marginLeft,10),s+=parseInt(o.marginRight,10)),s},n.prototype.scrollLeft=function(){var r=t(this.element);return r?r.pageXOffset:this.element.scrollLeft},n.prototype.scrollTop=function(){var r=t(this.element);return r?r.pageYOffset:this.element.scrollTop},n.extend=function(){var r=Array.prototype.slice.call(arguments);function s(c,u){if(typeof c=="object"&&typeof u=="object")for(var f in u)u.hasOwnProperty(f)&&(c[f]=u[f]);return c}for(var o=1,a=r.length;o<a;o++)s(r[0],r[o]);return r[0]},n.inArray=function(r,s,o){return s==null?-1:s.indexOf(r,o)},n.isEmptyObject=function(r){for(var s in r)return!1;return!0},i.adapters.push({name:"noframework",Adapter:n}),i.Adapter=n})();document.addEventListener("DOMContentLoaded",()=>{const i=(T,w=!1)=>(T=T.trim(),w?[...document.querySelectorAll(T)]:document.querySelector(T)),e=(T,w,O,U=!1)=>{let G=i(w,U);G&&(U?G.forEach($=>$.addEventListener(T,O)):G.addEventListener(T,O))};new sE,window.addEventListener("load",()=>{let T=i(".portfolio-container");if(T){let w=new PS(T,{itemSelector:".portfolio-item",filter:".filter-videos"}),O=i("#portfolio-flters li",!0);e("click","#portfolio-flters li",function(U){U.preventDefault(),O.forEach(G=>G.classList.remove("filter-active")),this.classList.add("filter-active"),w.arrange({filter:this.getAttribute("data-filter")})},!0)}}),SS({selector:".portfolio-lightbox"}),new Wt(".testimonials-slider",{modules:[Q0,J0],speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:1,spaceBetween:20,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{992:{slidesPerView:3}}});const t=i(".typed");if(t){let T=t.getAttribute("data-typed-items").split(",");new nE(".typed",{strings:T,loop:!0,typeSpeed:100,backSpeed:50,backDelay:2e3})}const n=i(".back-to-top");if(n){const T=()=>{window.scrollY>100?n.classList.add("active"):n.classList.remove("active")};window.addEventListener("load",T),document.addEventListener("scroll",T)}const r=i(".skills-content");r&&new Waypoint({element:r,offset:"25%",handler:function(T){i(".progress .progress-bar",!0).forEach(O=>{O.style.width=O.getAttribute("aria-valuenow")+"%"})}}),document.querySelectorAll(".pricing-item").forEach(T=>{const w=T.querySelector(".features-list");if(!w)return;const O=w.querySelectorAll("li"),U=T.querySelector(".toggle-features");if(O.length>3){U.classList.remove("d-none");for(let G=3;G<O.length;G++)O[G].classList.add("collapsible");U.addEventListener("click",function(G){G.preventDefault(),this.classList.toggle("active"),w.classList.toggle("expanded"),this.classList.contains("active")?this.innerHTML='Ver menos <i class="bi bi-chevron-up"></i>':this.innerHTML='Ver más <i class="bi bi-chevron-down"></i>'})}}),document.querySelectorAll(".pricing .pricing-item").forEach(T=>{T.addEventListener("mousemove",w=>{const O=T.getBoundingClientRect(),U=w.clientX-O.left,G=w.clientY-O.top,$=T.offsetWidth/2,k=T.offsetHeight/2,q=(G-k)/k*-7,H=(U-$)/$*7;T.style.transform=`perspective(1000px) rotateX(${q}deg) rotateY(${H}deg) scale3d(1.05, 1.05, 1.05)`}),T.addEventListener("mouseleave",()=>{T.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"})});let o=null;document.querySelectorAll(".portfolio-item.filter-videos .portfolio-wrap").forEach(T=>{const w=T.querySelector("video");if(!w)return;const O=document.createElement("button");O.className="video-play-button",O.innerHTML='<i class="bi bi-play-fill"></i>',T.appendChild(O);const U=()=>{w.paused?(o&&o!==w&&o.pause(),w.play(),o=w):(w.pause(),o=null)};O.addEventListener("click",G=>{G.stopPropagation(),U()}),w.addEventListener("click",G=>{G.stopPropagation(),w.paused||U()}),w.onplay=()=>{O.innerHTML='<i class="bi bi-pause-fill"></i>',T.classList.add("is-playing")},w.onpause=()=>{O.innerHTML='<i class="bi bi-play-fill"></i>',T.classList.remove("is-playing")}});const a=i(".php-email-form");a&&a.addEventListener("submit",function(T){T.preventDefault();let w=this,O=w.querySelector(".loading"),U=w.querySelector(".error-message"),G=w.querySelector(".sent-message");O.style.display="block",U.style.display="none",G.style.display="none",fetch(w.action,{method:"POST",body:new FormData(w),headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content"),Accept:"application/json"}}).then($=>{if($.ok)return $.json();throw new Error("Hubo un problema con el servidor.")}).then($=>{O.style.display="none",$.success?(G.style.display="block",w.reset()):(U.innerHTML=$.message||"Ocurrió un error inesperado.",U.style.display="block")}).catch($=>{O.style.display="none",U.innerHTML="No se pudo conectar con el servidor. Por favor, revisa tu conexión a internet.",U.style.display="block",console.error("Error en la solicitud Fetch:",$)})});const c=i("#toggle-resume-button");if(c){const T=i("#resume-content");T&&c.addEventListener("click",function(w){w.preventDefault(),this.classList.toggle("active"),T.classList.toggle("expanded"),this.classList.contains("active")?this.innerHTML='Ocultar Experiencia <i class="bi bi-chevron-up"></i>':this.innerHTML='Ver Experiencia Detallada <i class="bi bi-chevron-down"></i>'})}const u={capcut:100,premiere:90,photoshop:75,illustrator:80,gimp:90,metaAds:75};function f(T,w){const O=document.getElementById(T);if(!O){console.error(`Canvas element with ID '${T}' not found.`);return}O.width=150,O.height=150;const U=100-w;let G="#149ddd",$="#f3f3f3";document.body.classList.contains("dark-mode")&&(G="#50C878",$="#2B2E27");const k=Chart.getChart(O);k&&k.destroy(),new Chart(O,{type:"doughnut",data:{datasets:[{data:[w,U],backgroundColor:[G,$],borderWidth:0,cutout:"70%",circumference:360,rotation:-90}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}}}}),console.log(`Gráfico ${T} inicializado. Dimensiones: ${O.width}x${O.height}`)}f("capcutChart",u.capcut),f("premiereChart",u.premiere),f("photoshopChart",u.photoshop),f("illustratorChart",u.illustrator),f("gimpChart",u.gimp),f("metaAdsChart",u.metaAds);const m=document.getElementById("hero-animation-canvas");if(!m){console.error("Canvas element not found!");return}const g=new Md,v=new $t(75,window.innerWidth/window.innerHeight,.1,1e3),x=new _g({canvas:m,antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),x.setPixelRatio(window.devicePixelRatio),v.position.z=100;const E=new Id(16777215,1);g.add(E);const h=new et,l=new nr;function _(){l.remove(...l.children);const T=5,w=.25,O=6.35;for(let U=-T;U<=T;U++)for(let G=-T;G<=T;G++)for(let $=-T;$<=T;$++){if(Math.sqrt(U*U+G*G+$*$)>T*.9)continue;const q=new ea(w,12,12),H=new Qo({color:13421772}),ie=new qt(q,H);ie.position.set(U*O,G*O,$*O),l.add(ie)}g.add(l),l.position.set(0,0,0)}const y=[new We(4868682),new We(2829863),new We(3355443),new We(2763306),new We(2500134),new We(3556687),new We(3421236),new We(2041386)],S=y[Math.floor(Math.random()*y.length)],M=y[Math.floor(Math.random()*y.length)],L=new Di(window.innerWidth*2,window.innerHeight*2),P=new En({uniforms:{color1:{value:S},color2:{value:M},u_time:{value:.25}},vertexShader:`
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
    `,depthWrite:!1}),I=new qt(L,P);I.position.z=-500,g.add(I),window.addEventListener("mousemove",T=>{h.x=T.clientX/window.innerWidth*2-1,h.y=-(T.clientY/window.innerHeight)*2+1});function A(){requestAnimationFrame(A),l.rotation.x+=.0025,l.rotation.y+=.0025;const T=.005;l.rotation.x+=h.y*T,l.rotation.y+=h.x*T,P.uniforms.u_time.value=performance.now()/1e3,x.render(g,v)}window.addEventListener("resize",()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight),g.remove(I);const T=new Di(window.innerWidth*2,window.innerHeight*2),w=new qt(T,P);w.position.z=-500,g.add(w)}),v.position.z=50,_(),A()});
